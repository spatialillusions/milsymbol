import { ms, app6b, std2525b, std2525c, app6d, std2525d } from "../index.mjs";
ms.reset();

ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);
ms.addIcons(app6d);
ms.addIcons(std2525d);

const readmeExampleSvg = new ms.Symbol("130315003611010300000000000000", {
  size: 35,
  quantity: 200,
  staffComments: "for reinforcements".toUpperCase(),
  additionalInformation: "added support for JJ".toUpperCase(),
  direction: (750 * 360) / 6400,
  type: "machine gun".toUpperCase(),
  dtg: "30140000ZSEP97",
  location: "0900000.0E570306.0N"
}).asSVG();

function hasClassedText(svg, textValue) {
  const escapedText = textValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<text[^>]*class="milsymbol-textfields"[^>]*>${escapedText}</text>`
  );
  return pattern.test(svg);
}

export default {
  "README text fields": {
    "adds class to quantity text": [
      hasClassedText(readmeExampleSvg, "200"),
      true
    ],
    "adds class to staffComments text": [
      hasClassedText(readmeExampleSvg, "FOR REINFORCEMENTS"),
      true
    ],
    "adds class to additionalInformation text": [
      hasClassedText(readmeExampleSvg, "ADDED SUPPORT FOR JJ"),
      true
    ],
    "adds class to type text": [
      hasClassedText(readmeExampleSvg, "MACHINE GUN"),
      true
    ],
    "adds class to dtg text": [
      hasClassedText(readmeExampleSvg, "30140000ZSEP97"),
      true
    ],
    "adds class to location text": [
      hasClassedText(readmeExampleSvg, "0900000.0E570306.0N"),
      true
    ]
  }
};
