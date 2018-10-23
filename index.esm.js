/* ***************************************************************************************
ES6 version of milsymbol
*************************************************************************************** */
export { ms } from "./src/milsymbol.js";
export { app6b, std2525b, std2525c } from "./src/lettersidc.js";
export {
  space as letterspace,
  air as letterair,
  ground as letterground,
  equipment as letterequipment,
  installations as letterinstallations,
  sea as lettersea,
  subsurface as lettersubsurface,
  sof as lettersof,
  signalsIntelligence as lettersignalsIntelligence,
  stabilityoperations as letterstabilityoperations,
  emergencymanagementsymbols as letteremergencymanagementsymbols,
  std2525bextra as letterstd2525bextra,
  tacticalpoints2525 as lettertacticalpoints2525,
  tacticalpointsapp6 as lettertacticalpointsapp6
} from "./src/lettersidc.js";
export { app6d, std2525d } from "./src/numbersidc.js";
export {
  air as numberair,
  airmissile as numberairmissile,
  space as numberspace,
  spacemissile as numberspacemissile,
  landunit as numberlandunit,
  landcivilian as numberlandcivilian,
  landequipment as numberlandequipment,
  landinstallation as numberlandinstallation,
  sea as numbersea,
  subsurface as numbersubsurface,
  minewarfare as numberminewarfare,
  activites as numberactivites,
  signalsintelligence as numbersignalsintelligence,
  cyberspace as numbercyberspace,
  dismountedindividual as numberdismountedindividual,
  tacticalpoints as numbertacticalpoints
} from "./src/numbersidc.js";
export { default as path2d } from "./src/ms/path2d.js";

/* ***************************************************************************************
ES6 version of milsymbol
******************************************************************************************
To import all and have the same functionality as ordinary milsymbol, do the following:
(Or just import the things that you need)

import {
  ms,       // Base for milsymbol
  app6b,    // APP6-B
  std2525b, // 2525B
  std2525c, // 2525C
  app6d,    // APP6-D
  std2525d, // 2525D
  path2d    // Pollyfill for Path2D in IE or node-canvas
} from "./index.esm.js";

ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);
ms.addIcons(app6d);
ms.addIcons(std2525d);
ms.Path2D = path2d;


******************************************************************************************
Minimal version only supporting number based SIDC for land equipment:

import {
  ms,
  numberlandequipment
} from "./index.esm.js";

ms.addIcons(numberlandequipment);

*/
