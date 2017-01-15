var MS = require('../src/ms.js');
MS.symbol = require('../src/ms.symbol.js');

// Letter SIDC
MS._getLetterProperties = require('../src/sidc-letter/properties.js');
MS._getLetterSIDCicn = require('../src/sidc-letter/geticon.js');

MS.addLetterSIDCicons(require('../src/sidc-letter/icons-space.js'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-air.js'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-ground.js'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-equipment.js'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-installations'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-sea'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-subsurface'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-sof'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-signalsIntelligence'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-stabilityoperations'));
MS.addLetterSIDCicons(require('../src/sidc-letter/icons-emergencymanagementsymbols'));

// Number SIDC
MS._getNumberProperties = require('../src/sidc-number/properties.js');
MS._getNumberSIDCicn = require('../src/sidc-number/geticon.js');

MS.addNumberSIDCicons(require('../src/sidc-number/icons-air.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-airmissile.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-space.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-landunit.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-landequipment.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-sea.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-subsurface.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-minewarfare.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-seabedinstallations.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-activites.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-signalsintelligence.js'));
MS.addNumberSIDCicons(require('../src/sidc-number/icons-cyberspace.js'));

// Functions that builds the symbol
MS.addMarkerParts(require('../src/markerparts/basegeometry.js'));
MS.addMarkerParts(require('../src/markerparts/icon.js'));
MS.addMarkerParts(require('../src/markerparts/modifier.js'));
MS.addMarkerParts(require('../src/markerparts/statusmodifier.js'));
MS.addMarkerParts(require('../src/markerparts/affliationdimension.js'));
MS.addMarkerParts(require('../src/markerparts/textfields.js'));
MS.addMarkerParts(require('../src/markerparts/directionarrow.js'));
//MS.addMarkerParts(require('../src/markerparts/debug.js'));

// This makes it possible to draw canvas paths in IE11
MS._Path2D = require('../src/ms.path2d.js');

// And export out MS to to world to use
module.exports = MS;