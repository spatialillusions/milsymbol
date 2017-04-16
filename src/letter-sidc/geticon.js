var ms = require("../ms.js");

module.exports = function(iconParts, STD2525) {
  var iconSIDC = {};
  var iconBbox = {};

  for (var i in ms._letterSIDCicons) {
    if (!ms._letterSIDCicons.hasOwnProperty(i)) continue;
    ms._letterSIDCicons[i].call(this, iconSIDC, iconBbox, iconParts, STD2525);
  }
  return { icons: iconSIDC, bbox: iconBbox };
};
