import { ms, app6b, std2525b, std2525c, app6d, std2525d } from "../index.mjs";
ms.reset();

ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);
ms.addIcons(app6d);
ms.addIcons(std2525d);

function createSymbol(options = {}) {
  const symbolOptions = Object.assign({ size: 40 }, options);
  return new ms.Symbol("SFG-UCI----D", symbolOptions);
}

const sanitizedSvg = createSymbol({
  uniqueDesignation: "<script>alert(1)</script>",
  additionalInformation: 'foo" onclick="evil"',
  fillColor: "url(javascript:alert(1))",
  fontfamily: 'Arial" onclick="evil"',
  iconColor: "javascript:alert(1)"
}).asSVG();

const dataUriSymbol = createSymbol();
dataUriSymbol.drawInstructions = [
  [
    {
      type: "path",
      d: "M0,0 L10,0 L10,10 z",
      stroke: "data:text/html,<svg onload=alert(1)>",
      fill: "data:text/html,<svg onload=alert(1)>",
      strokewidth: 2
    }
  ]
];
const dataUriSvg = dataUriSymbol.asSVG();

const inlineFragmentSymbol = createSymbol();
inlineFragmentSymbol.drawInstructions = [
  [
    {
      type: "svg",
      svg: '<g onload="alert(1)"></g>'
    }
  ]
];
const inlineFragmentSvg = inlineFragmentSymbol.asSVG();

const clipSymbol = createSymbol();
clipSymbol.drawInstructions = [
  [
    {
      type: "clip",
      clipId: '1" onclick="evil"',
      d: "M0,0 L0,1 L1,1 z",
      draw: [
        {
          type: "path",
          d: "M0,0 L10,0",
          stroke: "black",
          strokewidth: 1
        }
      ]
    }
  ]
];
const clipSvg = clipSymbol.asSVG();
const clipIdMatch = clipSvg.match(/clipPath id="([^"]+)"/);
const clipRefMatch = clipSvg.match(/clip-path="url\(#([^"]+)\)"/);
const clipIdsSanitized =
  !!clipIdMatch &&
  !!clipRefMatch &&
  clipIdMatch[1] === clipRefMatch[1] &&
  !/["'<>]/.test(clipIdMatch[1]);

export default {
  "XSS sanitization": {
    "escapes option text content": [
      sanitizedSvg.includes("&lt;script&gt;alert(1)&lt;/script&gt;"),
      true
    ],
    "does not render raw script tags": [
      sanitizedSvg.includes("<script"),
      false
    ],
    "strips javascript URIs from styles": [
      sanitizedSvg.includes("javascript:"),
      false
    ],
    "falls back to safe font families": [
      sanitizedSvg.includes('font-family="sans-serif"'),
      true
    ],
    "strips data URIs from styles": [dataUriSvg.includes("data:"), false],
    "drops inline svg fragments with handlers": [
      inlineFragmentSvg.includes("onload"),
      false
    ],
    "sanitizes clip-path identifiers": [clipIdsSanitized, true]
  }
};
