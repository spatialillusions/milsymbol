/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
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

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
ms._getLetterProperties = require('../src/letter-sidc/properties.js');
ms._getLetterSIDCicn = require('../src/letter-sidc/geticon.js');

ms.addSIDCicons(require('../src/letter-sidc/icons-space.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-air.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-ground.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-equipment.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-installations.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-sea.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-subsurface.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-sof.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-signalsIntelligence.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-stabilityoperations.js'), 'letter');
ms.addSIDCicons(require('../src/letter-sidc/icons-emergencymanagementsymbols.js'), 'letter');

// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
ms.addIconParts(require('../src/iconparts/2525b.js'));
ms.addSIDCicons(require('../src/letter-sidc/icons-2525b-ch2.js'), 'letter');

// Adding support for tactical points
ms.addIconParts(require('../src/iconparts/tactical-points.js'));

ms.addSIDCicons(require('../src/letter-sidc/icons-tactical-points-2525.js'), 'letter');
ms.addLabelOverrides(require('../src/letter-labels/tactical-points-2525.js'), 'letter');

ms.addSIDCicons(require('../src/letter-sidc/icons-tactical-points-app6.js'), 'letter');
ms.addLabelOverrides(require('../src/letter-labels/tactical-points-app6.js'), 'letter');

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
ms._getNumberProperties = require('../src/number-sidc/properties.js');
ms._getNumberSIDCicn = require('../src/number-sidc/geticon.js');

ms.addSIDCicons(require('../src/number-sidc/icons-air.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-airmissile.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-space.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-spacemissile.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-landunit.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-landcivilian.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-landequipment.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-landinstallation.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-sea.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-subsurface.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-minewarfare.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-seabedinstallations.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-activites.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-signalsintelligence.js'), 'number');
ms.addSIDCicons(require('../src/number-sidc/icons-cyberspace.js'), 'number');

/* ***************************************************************************************
Functions that builds the symbol
*************************************************************************************** */
ms.addSymbolPart(require('../src/symbolparts/basegeometry.js'));
ms.addSymbolPart(require('../src/symbolparts/icon.js'));
ms.addSymbolPart(require('../src/symbolparts/modifier.js'));
ms.addSymbolPart(require('../src/symbolparts/statusmodifier.js'));
ms.addSymbolPart(require('../src/symbolparts/affliationdimension.js'));
ms.addSymbolPart(require('../src/symbolparts/textfields.js'));
ms.addSymbolPart(require('../src/symbolparts/directionarrow.js'));
//ms.addSymbolPart(require('../src/symbolparts/debug.js')); // This draws the symbol octagon, can be good for debugging.

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
ms._Path2D = require('../src/ms.path2d.js');

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
module.exports = ms;