/* ***************************************************************************************
 based SIDC
*************************************************************************************** */
import air from "./numbersidc/sidc/air.js";
import airmissile from "./numbersidc/sidc/airmissile.js";
import space from "./numbersidc/sidc/space.js";
import spacemissile from "./numbersidc/sidc/spacemissile.js";
import landunit from "./numbersidc/sidc/landunit.js";
import landcivilian from "./numbersidc/sidc/landcivilian.js";
import landequipment from "./numbersidc/sidc/landequipment.js";
import landinstallation from "./numbersidc/sidc/landinstallation.js";
import sea from "./numbersidc/sidc/sea.js";
import subsurface from "./numbersidc/sidc/subsurface.js";
import minewarfare from "./numbersidc/sidc/minewarfare.js";
import activites from "./numbersidc/sidc/activites.js";
import signalsintelligence from "./numbersidc/sidc/signalsintelligence.js";
import cyberspace from "./numbersidc/sidc/cyberspace.js";
import dismountedindividual from "./numbersidc/sidc/dismountedindividual.js";
import tacticalpoints from "./numbersidc/sidc/control-measure.js";

var app6d = [
  air,
  airmissile,
  space,
  spacemissile,
  landunit,
  landcivilian,
  landequipment,
  landinstallation,
  sea,
  subsurface,
  minewarfare,
  activites,
  signalsintelligence,
  dismountedindividual,
  tacticalpoints
];
var std2525d = [
  air,
  airmissile,
  space,
  spacemissile,
  landunit,
  landcivilian,
  landequipment,
  landinstallation,
  sea,
  subsurface,
  minewarfare,
  activites,
  signalsintelligence,
  cyberspace,
  tacticalpoints
];
export {
  app6d,
  std2525d,
  air,
  airmissile,
  space,
  spacemissile,
  landunit,
  landcivilian,
  landequipment,
  landinstallation,
  sea,
  subsurface,
  minewarfare,
  activites,
  signalsintelligence,
  cyberspace,
  dismountedindividual,
  tacticalpoints
};
