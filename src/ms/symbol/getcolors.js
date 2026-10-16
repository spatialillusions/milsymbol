import { ms } from "../../ms.js";
import resolveColorMode from "./resolvecolormode.js";

export default function getColors() {
  let baseFillColor = resolveColorMode(
    typeof this.style.colorMode === "object"
      ? this.style.colorMode
      : ms.getColorMode(this.style.colorMode),
    this.style,
    this.metadata
  );
  const baseFrameColor = resolveColorMode(
    typeof this.style.frameColor === "object"
      ? this.style.frameColor
      : ms.getColorMode("FrameColor"),
    this.style,
    this.metadata,
    true
  );
  const baseIconColor = resolveColorMode(
    typeof this.style.iconColor === "object"
      ? this.style.iconColor
      : ms.getColorMode("IconColor"),
    this.style,
    this.metadata
  );
  const baseIconFillColor = baseFillColor;
  let baseColorBlack = ms.getColorMode("Black");
  let baseColorWhite = ms.getColorMode("White");
  const baseColorOffWhite = ms.getColorMode("OffWhite");
  const baseColorNone = ms.getColorMode("None");

  //If the user has specified a mono color to use for all symbols.
  if (this.style.monoColor != "") {
    baseColorBlack = baseFrameColor;
    baseColorWhite = baseFillColor = baseColorNone;
  }

  const colors = {
    fillColor: baseFillColor,
    frameColor: baseFrameColor,
    iconColor: baseIconColor,
    iconFillColor: baseIconFillColor,
    none: baseColorNone,
    black: baseColorBlack,
    white: baseColorWhite,
  };
  //console.info(baseFrameColor);
  //Turn of the frame
  if (this.metadata.frame /* || (!this.metadata.frame && !this.style.icon)*/) {
    colors.frameColor =
      typeof this.style.frameColor === "object"
        ? baseFrameColor
        : baseColorBlack;
  } else {
    colors.frameColor = baseColorNone;
  }
  //Filled or not.
  if (this.metadata.fill) {
    //I don't think you can have an unframed but filled icon so we turn off the fill as well, unless you have turned off the icon as well.
    colors.fillColor =
      !this.metadata.frame && !(!this.metadata.frame && !this.style.icon)
        ? baseColorNone
        : baseFillColor;
    colors.iconColor =
      typeof this.style.iconColor === "object"
        ? baseIconColor
        : baseColorBlack;
    //Dirty override, we want colors in the icon if we just turn off the frame. This is a special fix for filled icn in 2525.
    colors.iconFillColor = !this.metadata.frame
      ? baseFillColor
      : baseColorOffWhite;
    colors.white = baseColorOffWhite;
  } else {
    colors.fillColor = baseColorNone;
    //Fix frame color if it should be turned off.
    colors.frameColor = !this.metadata.frame ? baseColorNone : baseFrameColor;
    colors.iconColor = baseFrameColor;
    colors.iconFillColor = baseColorNone;
    //If everything turned off, make everything black.
    if (!this.metadata.frame && !this.metadata.fill && !this.style.icon) {
      colors.frameColor = baseColorBlack;
      colors.fillColor = baseColorBlack;
    }
    //Another dirty override to get correct 2525 colors for special symbols with filled icn.
    //Colors.black = baseFrameColor;
  }
  return colors;
}
