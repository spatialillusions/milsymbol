/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
import { ms } from "./src/milsymbol.js";

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
import spaceletter from "./src/lettersidc/sidc/space.js";
ms.addIcons(spaceletter);
import airletter from "./src/lettersidc/sidc/air.js";
ms.addIcons(airletter);
import groundletter from "./src/lettersidc/sidc/ground.js";
ms.addIcons(groundletter);
import equipmentletter from "./src/lettersidc/sidc/equipment.js";
ms.addIcons(equipmentletter);
import installationsletter from "./src/lettersidc/sidc/installations.js";
ms.addIcons(installationsletter);
import sealetter from "./src/lettersidc/sidc/sea.js";
ms.addIcons(sealetter);
import subsurfaceletter from "./src/lettersidc/sidc/subsurface.js";
ms.addIcons(subsurfaceletter);
import sofletter from "./src/lettersidc/sidc/sof.js";
ms.addIcons(sofletter);
import signalsIntelligenceletter from "./src/lettersidc/sidc/signalsIntelligence.js";
ms.addIcons(signalsIntelligenceletter);
import stabilityoperationsletter from "./src/lettersidc/sidc/stabilityoperations.js";
ms.addIcons(stabilityoperationsletter);
import emergencymanagementsymbolsletter from "./src/lettersidc/sidc/emergencymanagementsymbols.js";
ms.addIcons(emergencymanagementsymbolsletter);
// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
import std2525bletter from "./src/lettersidc/sidc/2525b-ch2.js";
ms.addIcons(std2525bletter);
// Adding support for tactical points
import tacticalpoints2525letter from "./src/lettersidc/sidc/tactical-points-2525.js";
ms.addIcons(tacticalpoints2525letter);
import tacticalpointsapp6letter from "./src/lettersidc/sidc/tactical-points-app6.js";
ms.addIcons(tacticalpointsapp6letter);

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
import airnumber from "./src/numbersidc/sidc/air.js";
ms.addIcons(airnumber);
import airmissilenumber from "./src/numbersidc/sidc/airmissile.js";
ms.addIcons(airmissilenumber);
import spacenumber from "./src/numbersidc/sidc/space.js";
ms.addIcons(spacenumber);
import spacemissilenumber from "./src/numbersidc/sidc/spacemissile.js";
ms.addIcons(spacemissilenumber);
import landunitnumber from "./src/numbersidc/sidc/landunit.js";
ms.addIcons(landunitnumber);
import landciviliannumber from "./src/numbersidc/sidc/landcivilian.js";
ms.addIcons(landciviliannumber);
import landequipmentnumber from "./src/numbersidc/sidc/landequipment.js";
ms.addIcons(landequipmentnumber);
import landinstallationnumber from "./src/numbersidc/sidc/landinstallation.js";
ms.addIcons(landinstallationnumber);
import seanumber from "./src/numbersidc/sidc/sea.js";
ms.addIcons(seanumber);
import subsurfacenumber from "./src/numbersidc/sidc/subsurface.js";
ms.addIcons(subsurfacenumber);
import minewarfarenumber from "./src/numbersidc/sidc/minewarfare.js";
ms.addIcons(minewarfarenumber);
import activitesnumber from "./src/numbersidc/sidc/activites.js";
ms.addIcons(activitesnumber);
import signalsintelligencenumber from "./src/numbersidc/sidc/signalsintelligence.js";
ms.addIcons(signalsintelligencenumber);
import cyberspacenumber from "./src/numbersidc/sidc/cyberspace.js";
ms.addIcons(cyberspacenumber);
import dismountedindividualnumber from "./src/numbersidc/sidc/dismountedindividual.js";
ms.addIcons(dismountedindividualnumber);
import tacticalpointsnumber from "./src/numbersidc/sidc/control-measure.js";
ms.addIcons(tacticalpointsnumber);

/* ***************************************************************************************
This draws the symbol octagon, can be good for debugging.
*************************************************************************************** */
//import debug from "./symbolfunctions/debug.js";
//ms.addSymbolPart(debug);

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
import path2d from "./src/ms/path2d.js";
ms._Path2D = path2d;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
export default ms;
