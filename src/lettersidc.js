/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
import space from "./lettersidc/sidc/space.js";
import air from "./lettersidc/sidc/air.js";
import ground from "./lettersidc/sidc/ground.js";
import equipment from "./lettersidc/sidc/equipment.js";
import installations from "./lettersidc/sidc/installations.js";
import sea from "./lettersidc/sidc/sea.js";
import subsurface from "./lettersidc/sidc/subsurface.js";
import sof from "./lettersidc/sidc/sof.js";
import signalsIntelligence from "./lettersidc/sidc/signalsIntelligence.js";
import stabilityoperations from "./lettersidc/sidc/stabilityoperations.js";
import emergencymanagementsymbols from "./lettersidc/sidc/emergencymanagementsymbols.js";
// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
import std2525bextra from "./lettersidc/sidc/2525b-ch2.js";

import tacticalpoints2525 from "./lettersidc/sidc/tactical-points-2525.js";
import tacticalpointsapp6 from "./lettersidc/sidc/tactical-points-app6.js";

var app6b = [
  space,
  air,
  ground,
  equipment,
  installations,
  sea,
  subsurface,
  sof,
  tacticalpointsapp6
];
var std2525b = [
  space,
  air,
  ground,
  equipment,
  installations,
  sea,
  subsurface,
  sof,
  signalsIntelligence,
  stabilityoperations,
  std2525bextra,
  tacticalpoints2525
];
var std2525c = [
  space,
  air,
  ground,
  equipment,
  installations,
  sea,
  subsurface,
  sof,
  signalsIntelligence,
  stabilityoperations,
  emergencymanagementsymbols,
  tacticalpoints2525
];

export {
  app6b,
  std2525b,
  std2525c,
  space,
  air,
  ground,
  equipment,
  installations,
  sea,
  subsurface,
  sof,
  signalsIntelligence,
  stabilityoperations,
  emergencymanagementsymbols,
  std2525bextra,
  tacticalpoints2525,
  tacticalpointsapp6
};
