function sizedSvg(svg, width, height) {
  const outputWidth = Math.max(1, Number(width) || 1);
  const outputHeight = Math.max(1, Number(height) || 1);

  return svg.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
    let nextAttrs = attrs;
    if (/\swidth=/i.test(nextAttrs)) {
      nextAttrs = nextAttrs.replace(/\swidth=(["'])[^"']*\1/i, ` width="${outputWidth}"`);
    } else {
      nextAttrs += ` width="${outputWidth}"`;
    }

    if (/\sheight=/i.test(nextAttrs)) {
      nextAttrs = nextAttrs.replace(/\sheight=(["'])[^"']*\1/i, ` height="${outputHeight}"`);
    } else {
      nextAttrs += ` height="${outputHeight}"`;
    }

    return `<svg${nextAttrs}>`;
  });
}

export default async function asPNG(options = {}) {
  const { Resvg } = await import("@resvg/resvg-js");
  const width = Number.isFinite(options.width) ? options.width : this.width;
  const height = Number.isFinite(options.height) ? options.height : this.height;
  const svg = sizedSvg(this.asSVG(), width, height);
  const renderer = new Resvg(svg, {
    fitTo: {
      mode: "original"
    },
    background: "rgba(0, 0, 0, 0)"
  });

  return renderer.render().asPng();
}
