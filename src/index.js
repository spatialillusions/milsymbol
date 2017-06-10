/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
var ms = require("./ms.js");

// Adding things to ms that can't be done in ms.js since they reference ms.js
ms._geticnParts = require("./ms/iconparts.js");
ms._symbolGeometries = require("./ms/symbolgeometries.js");

// Initiating the symbol class
ms.Symbol = require("./ms.symbol.js");
// Backwards compatibility, will be removed in future version
//ms.symbol = ms.Symbol;

// Standard colors for symbols
ms.setColorMode("Light", require("./colormodes/light.js"));
ms.setColorMode("Medium", require("./colormodes/medium.js"));
ms.setColorMode("Dark", require("./colormodes/dark.js"));
ms.setColorMode("FrameColor", require("./colormodes/framecolor.js"));
ms.setColorMode("IconColor", require("./colormodes/iconcolor.js"));
ms.setColorMode("Black", require("./colormodes/black.js"));
ms.setColorMode("White", require("./colormodes/white.js"));
ms.setColorMode("OffWhite", require("./colormodes/offwhite.js"));
ms.setColorMode("None", require("./colormodes/none.js"));

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
ms._getLetterProperties = require("./letter-sidc/properties.js");
ms._getLetterSIDCicn = require("./letter-sidc/geticon.js");

ms.addSIDCicons(require("./letter-sidc/icons-space.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-air.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-ground.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-equipment.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-installations.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-sea.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-subsurface.js"), "letter");
ms.addSIDCicons(require("./letter-sidc/icons-sof.js"), "letter");
ms.addSIDCicons(
  require("./letter-sidc/icons-signalsIntelligence.js"),
  "letter"
);
ms.addSIDCicons(
  require("./letter-sidc/icons-stabilityoperations.js"),
  "letter"
);
ms.addSIDCicons(
  require("./letter-sidc/icons-emergencymanagementsymbols.js"),
  "letter"
);

// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
ms.addSIDCicons(require("./letter-sidc/icons-2525b-ch2.js"), "letter");

// Adding support for tactical points
ms.addSIDCicons(
  require("./letter-sidc/icons-tactical-points-2525.js"),
  "letter"
);

ms.addSIDCicons(
  require("./letter-sidc/icons-tactical-points-app6.js"),
  "letter"
);

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
ms._getNumberProperties = require("./number-sidc/properties.js");
ms._getNumberSIDCicn = require("./number-sidc/geticon.js");

ms.addSIDCicons(require("./number-sidc/icons-air.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-airmissile.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-space.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-spacemissile.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-landunit.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-landcivilian.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-landequipment.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-landinstallation.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-sea.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-subsurface.js"), "number");
ms.addSIDCicons(require("./number-sidc/icons-minewarfare.js"), "number");
ms.addSIDCicons(
  require("./number-sidc/icons-seabedinstallations.js"),
  "number"
);
ms.addSIDCicons(require("./number-sidc/icons-activites.js"), "number");
ms.addSIDCicons(
  require("./number-sidc/icons-signalsintelligence.js"),
  "number"
);
ms.addSIDCicons(require("./number-sidc/icons-cyberspace.js"), "number");

/* ***************************************************************************************
Functions that builds the symbol
*************************************************************************************** */
ms.addSymbolPart(require("./symbolparts/basegeometry.js"));
ms.addSymbolPart(require("./symbolparts/icon.js"));
ms.addSymbolPart(require("./symbolparts/modifier.js"));
ms.addSymbolPart(require("./symbolparts/statusmodifier.js"));
ms.addSymbolPart(require("./symbolparts/affliationdimension.js"));
ms.addSymbolPart(require("./symbolparts/textfields.js"));
ms.addSymbolPart(require("./symbolparts/directionarrow.js"));
//ms.addSymbolPart(require('./symbolparts/debug.js')); // This draws the symbol octagon, can be good for debugging.

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
ms._Path2D = require("./ms.path2d.js");

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
module.exports = ms;
