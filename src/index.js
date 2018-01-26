/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
import { ms } from "./ms.js";
//import { version } from "../package.json";
//ms.version = version;

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
import spaceletter from "./lettersidc/sidc/space.js";
ms.addIcons(spaceletter);
import airletter from "./lettersidc/sidc/air.js";
ms.addIcons(airletter);
import groundletter from "./lettersidc/sidc/ground.js";
ms.addIcons(groundletter);
import equipmentletter from "./lettersidc/sidc/equipment.js";
ms.addIcons(equipmentletter);
import installationsletter from "./lettersidc/sidc/installations.js";
ms.addIcons(installationsletter);
import sealetter from "./lettersidc/sidc/sea.js";
ms.addIcons(sealetter);
import subsurfaceletter from "./lettersidc/sidc/subsurface.js";
ms.addIcons(subsurfaceletter);
import sofletter from "./lettersidc/sidc/sof.js";
ms.addIcons(sofletter);
import signalsIntelligenceletter from "./lettersidc/sidc/signalsIntelligence.js";
ms.addIcons(signalsIntelligenceletter);
import stabilityoperationsletter from "./lettersidc/sidc/stabilityoperations.js";
ms.addIcons(stabilityoperationsletter);
import emergencymanagementsymbolsletter from "./lettersidc/sidc/emergencymanagementsymbols.js";
ms.addIcons(emergencymanagementsymbolsletter);
// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
import std2525bletter from "./lettersidc/sidc/2525b-ch2.js";
ms.addIcons(std2525bletter);
// Adding support for tactical points
import tacticalpoints2525letter from "./lettersidc/sidc/tactical-points-2525.js";
ms.addIcons(tacticalpoints2525letter);
import tacticalpointsapp6letter from "./lettersidc/sidc/tactical-points-app6.js";
ms.addIcons(tacticalpointsapp6letter);

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
import airnumber from "./numbersidc/sidc/air.js";
ms.addIcons(airnumber);
import airmissilenumber from "./numbersidc/sidc/airmissile.js";
ms.addIcons(airmissilenumber);
import spacenumber from "./numbersidc/sidc/space.js";
ms.addIcons(spacenumber);
import spacemissilenumber from "./numbersidc/sidc/spacemissile.js";
ms.addIcons(spacemissilenumber);
import landunitnumber from "./numbersidc/sidc/landunit.js";
ms.addIcons(landunitnumber);
import landciviliannumber from "./numbersidc/sidc/landcivilian.js";
ms.addIcons(landciviliannumber);
import landequipmentnumber from "./numbersidc/sidc/landequipment.js";
ms.addIcons(landequipmentnumber);
import landinstallationnumber from "./numbersidc/sidc/landinstallation.js";
ms.addIcons(landinstallationnumber);
import seanumber from "./numbersidc/sidc/sea.js";
ms.addIcons(seanumber);
import subsurfacenumber from "./numbersidc/sidc/subsurface.js";
ms.addIcons(subsurfacenumber);
import minewarfarenumber from "./numbersidc/sidc/minewarfare.js";
ms.addIcons(minewarfarenumber);
import activitesnumber from "./numbersidc/sidc/activites.js";
ms.addIcons(activitesnumber);
import signalsintelligencenumber from "./numbersidc/sidc/signalsintelligence.js";
ms.addIcons(signalsintelligencenumber);
import cyberspacenumber from "./numbersidc/sidc/cyberspace.js";
ms.addIcons(cyberspacenumber);
import dismountedindividualnumber from "./numbersidc/sidc/dismountedindividual.js";
ms.addIcons(dismountedindividualnumber);
import tacticalpointsnumber from "./numbersidc/sidc/control-measure.js";
ms.addIcons(tacticalpointsnumber);

/* ***************************************************************************************
This draws the symbol octagon, can be good for debugging.
*************************************************************************************** */
//import debug from "./symbolfunctions/debug.js";
//ms.addSymbolPart(debug);

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
import path2d from "./ms/path2d.js";
ms._Path2D = path2d;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
export default ms;
