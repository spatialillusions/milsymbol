var ms = require("../ms.js");

module.exports = function() {
  var baseFillColor = typeof this.colorMode === "object"
    ? this.colorMode
    : ms.getColorMode(this.colorMode);
  var baseFrameColor = ms.getColorMode("FrameColor");
  var baseIconColor = ms.getColorMode("IconColor");
  var baseIconFillColor = baseFillColor;
  var baseColorBlack = ms.getColorMode("Black");
  var baseColorWhite = ms.getColorMode("White");
  var baseColorOffWhite = ms.getColorMode("OffWhite");
  var baseColorNone = ms.getColorMode("None");

  //If it is a Civilian Symbol and civilian colors not are turned off, use civilian colors...
  if (this.civilianColor && this.properties.civilian) {
    baseFillColor.Friend = baseFillColor.Neutral = baseFillColor.Unknown =
      baseFillColor.Civilian;
    baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Unknown =
      baseFrameColor.Civilian;
    baseIconColor.Friend = baseIconColor.Neutral = baseIconColor.Unknown =
      baseIconColor.Civilian;
  }
  //Joker and Faker
  if (this.properties.joker || this.properties.faker) {
    baseFillColor.Friend = baseFillColor.Hostile;
    baseFrameColor.Friend = baseFrameColor.Hostile;
    baseIconColor.Friend = baseIconColor.Hostile;
  }
  //If the user has specified a mono color to use for all symbols.
  if (this.monoColor != "") {
    baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Hostile = baseFrameColor.Unknown = baseFrameColor.Civilian = this.monoColor;
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
  //Turn of the frame
  if (this.properties.frame /* || (!this.properties.frame && !this.icon)*/) {
    colors.frameColor = baseColorBlack;
  } else {
    colors.frameColor = baseColorNone;
  }
  //Filled or not.
  if (this.properties.fill) {
    //I don't think you can have an unframed but filled icon so we turn off the fill as well, unless you have turned off the icon as well.
    colors.fillColor = !this.properties.frame &&
      !(!this.properties.frame && !this.icon)
      ? baseColorNone
      : baseFillColor;
    colors.iconColor = baseColorBlack;
    //Dirty override, we want colors in the icon if we just turn off the frame. This is a special fix for filled icn in 2525.
    colors.iconFillColor = !this.properties.frame
      ? baseFillColor
      : baseColorOffWhite;
    colors.white = baseColorOffWhite;
  } else {
    colors.fillColor = baseColorNone;
    //Fix frame color if it should be turned off.
    colors.frameColor = !this.properties.frame ? baseColorNone : baseFrameColor;
    colors.iconColor = baseFrameColor;
    colors.iconFillColor = baseColorNone;
    //If everything turned off, make everything black.
    if (!this.properties.frame && !this.properties.fill && !this.icon) {
      colors.frameColor = baseColorBlack;
      colors.fillColor = baseColorBlack;
    }
    //Another dirty override to get correct 2525 colors for special symbols with filled icn.
    //Colors.black = baseFrameColor;
  }
  return colors;
};
