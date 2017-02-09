var ms = require('../src/ms.js');

// Adding things to ms that can't be done in ms.js since they reference ms.js
ms._geticnParts = require('../src/ms/iconparts.js');
ms._symbolGeometries = require('../src/ms/symbolgeometries.js');

// Initiating the symbol class
ms.Symbol = require('../src/ms.symbol.js');

// Backwards compatibility, will be removed in future version
  ms.symbol = ms.Symbol;

// Standard colors for symbols
ms.setColorMode('Light',require('../src/colormodes/light.js'));
ms.setColorMode('Medium',require('../src/colormodes/medium.js'));
ms.setColorMode('Dark',require('../src/colormodes/dark.js'));
ms.setColorMode('FrameColor',require('../src/colormodes/framecolor.js'));
ms.setColorMode('IconColor',require('../src/colormodes/iconcolor.js'));
ms.setColorMode('Black',require('../src/colormodes/black.js'));
ms.setColorMode('White',require('../src/colormodes/white.js'));
ms.setColorMode('OffWhite',require('../src/colormodes/offwhite.js'));
ms.setColorMode('None',require('../src/colormodes/none.js'));

// Letter SIDC
ms._getLetterProperties = require('../src/sidc-letter/properties.js');
ms._getLetterSIDCicn = require('../src/sidc-letter/geticon.js');

ms.addSIDCicons(require('../src/sidc-letter/icons-space.js'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-air.js'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-ground.js'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-equipment.js'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-installations'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-sea'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-subsurface'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-sof'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-signalsIntelligence'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-stabilityoperations'), 'letter');
ms.addSIDCicons(require('../src/sidc-letter/icons-emergencymanagementsymbols'), 'letter');

// Number SIDC
ms._getNumberProperties = require('../src/sidc-number/properties.js');
ms._getNumberSIDCicn = require('../src/sidc-number/geticon.js');

ms.addSIDCicons(require('../src/sidc-number/icons-air.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-airmissile.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-space.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-landunit.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-landequipment.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-sea.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-subsurface.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-minewarfare.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-seabedinstallations.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-activites.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-signalsintelligence.js'), 'number');
ms.addSIDCicons(require('../src/sidc-number/icons-cyberspace.js'), 'number');

// Functions that builds the symbol
ms.addSymbolPart(require('../src/symbolparts/basegeometry.js'));
ms.addSymbolPart(require('../src/symbolparts/icon.js'));
ms.addSymbolPart(require('../src/symbolparts/modifier.js'));
ms.addSymbolPart(require('../src/symbolparts/statusmodifier.js'));
ms.addSymbolPart(require('../src/symbolparts/affliationdimension.js'));
ms.addSymbolPart(require('../src/symbolparts/textfields.js'));
ms.addSymbolPart(require('../src/symbolparts/directionarrow.js'));
//ms.addSymbolPart(require('../src/symbolparts/debug.js')); // This draws the symbol octagon, can be good for debugging.

// This makes it possible to draw canvas paths in IE11
ms._Path2D = require('../src/ms.path2d.js');

// And export out ms to to world to use
module.exports = ms;