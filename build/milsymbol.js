var MS = require('../src/ms.js');

// Adding things to MS that can't be done in ms.js since they reference ms.js
MS._geticnParts = require('../src/ms/iconparts.js');
MS._symbolGeometries = require('../src/ms/symbolgeometries.js');

// Initiating the symbol class
MS.symbol = require('../src/ms.symbol.js');

// Standard colors for symbols
MS.setColorMode('Light',require('../src/colormodes/light.js'));
MS.setColorMode('Medium',require('../src/colormodes/medium.js'));
MS.setColorMode('Dark',require('../src/colormodes/dark.js'));
MS.setColorMode('FrameColor',require('../src/colormodes/framecolor.js'));
MS.setColorMode('IconColor',require('../src/colormodes/iconcolor.js'));
MS.setColorMode('Black',require('../src/colormodes/black.js'));
MS.setColorMode('White',require('../src/colormodes/white.js'));
MS.setColorMode('OffWhite',require('../src/colormodes/offwhite.js'));
MS.setColorMode('None',require('../src/colormodes/none.js'));

// Letter SIDC
MS._getLetterProperties = require('../src/sidc-letter/properties.js');
MS._getLetterSIDCicn = require('../src/sidc-letter/geticon.js');

MS.addSIDCicons(require('../src/sidc-letter/icons-space.js'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-air.js'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-ground.js'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-equipment.js'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-installations'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-sea'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-subsurface'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-sof'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-signalsIntelligence'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-stabilityoperations'), 'letter');
MS.addSIDCicons(require('../src/sidc-letter/icons-emergencymanagementsymbols'), 'letter');

// Number SIDC
MS._getNumberProperties = require('../src/sidc-number/properties.js');
MS._getNumberSIDCicn = require('../src/sidc-number/geticon.js');

MS.addSIDCicons(require('../src/sidc-number/icons-air.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-airmissile.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-space.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-landunit.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-landequipment.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-sea.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-subsurface.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-minewarfare.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-seabedinstallations.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-activites.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-signalsintelligence.js'), 'number');
MS.addSIDCicons(require('../src/sidc-number/icons-cyberspace.js'), 'number');

// Functions that builds the symbol
MS.addMarkerParts(require('../src/markerparts/basegeometry.js'));
MS.addMarkerParts(require('../src/markerparts/icon.js'));
MS.addMarkerParts(require('../src/markerparts/modifier.js'));
MS.addMarkerParts(require('../src/markerparts/statusmodifier.js'));
MS.addMarkerParts(require('../src/markerparts/affliationdimension.js'));
MS.addMarkerParts(require('../src/markerparts/textfields.js'));
MS.addMarkerParts(require('../src/markerparts/directionarrow.js'));
//MS.addMarkerParts(require('../src/markerparts/debug.js')); // This draws the symbol octagon, can be good for debugging.

// This makes it possible to draw canvas paths in IE11
MS._Path2D = require('../src/ms.path2d.js');

// And export out MS to to world to use
module.exports = MS;