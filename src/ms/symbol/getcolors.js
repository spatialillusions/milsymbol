import { ms } from "../../ms.js";
export default function getColors() {
  var baseFillColor =
    typeof this.style.colorMode === "object"
      ? this.style.colorMode
      : ms.getColorMode(this.style.colorMode);
  var baseFrameColor =
    typeof this.style.frameColor === "object"
      ? this.style.frameColor
      : ms.getColorMode("FrameColor");
  var baseIconColor =
    typeof this.style.iconColor === "object"
      ? this.style.iconColor
      : ms.getColorMode("IconColor");
  var baseIconFillColor = baseFillColor;
  var baseColorBlack = ms.getColorMode("Black");
  var baseColorWhite = ms.getColorMode("White");
  var baseColorOffWhite = ms.getColorMode("OffWhite");
  var baseColorNone = ms.getColorMode("None");

  //If it is a Civilian Symbol and civilian colors not are turned off, use civilian colors...
  if (this.style.civilianColor && this.metadata.civilian) {
    baseFillColor.Friend = baseFillColor.Neutral = baseFillColor.Unknown =
      baseFillColor.Civilian;
    baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Unknown =
      baseFrameColor.Civilian;
    baseIconColor.Friend = baseIconColor.Neutral = baseIconColor.Unknown =
      baseIconColor.Civilian;
  }
  //Joker and Faker
  if (this.metadata.joker || this.metadata.faker) {
    baseFillColor.Friend = baseFillColor.Hostile;
    baseFrameColor.Friend = baseFrameColor.Hostile;
    baseIconColor.Friend = baseIconColor.Hostile;
  }
  //If the user has specified a mono color to use for all symbols.
  if (this.style.monoColor != "") {
    baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Hostile = baseFrameColor.Unknown = baseFrameColor.Civilian = this.style.monoColor;
    baseColorBlack = baseFrameColor;
    baseColorWhite = baseFillColor = baseColorNone;
  }

  var colors = {
    fillColor: baseFillColor,
    frameColor: baseFrameColor,
    iconColor: baseIconColor,
    iconFillColor: baseIconFillColor,
    none: baseColorNone,
    black: baseColorBlack,
    white: baseColorWhite
  };
  //console.info(baseFrameColor);
  //Turn of the frame
  if (this.metadata.frame /* || (!this.metadata.frame && !this.style.icon)*/) {
    colors.frameColor =
      typeof this.style.frameColor === "object"
        ? this.style.frameColor
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
        ? this.style.iconColor
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
