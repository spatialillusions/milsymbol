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
ms.addLetterIcons(spaceletter);
import airletter from "./lettersidc/sidc/air.js";
ms.addLetterIcons(airletter);
import groundletter from "./lettersidc/sidc/ground.js";
ms.addLetterIcons(groundletter);
import equipmentletter from "./lettersidc/sidc/equipment.js";
ms.addLetterIcons(equipmentletter);
import installationsletter from "./lettersidc/sidc/installations.js";
ms.addLetterIcons(installationsletter);
import sealetter from "./lettersidc/sidc/sea.js";
ms.addLetterIcons(sealetter);
import subsurfaceletter from "./lettersidc/sidc/subsurface.js";
ms.addLetterIcons(subsurfaceletter);
import sofletter from "./lettersidc/sidc/sof.js";
ms.addLetterIcons(sofletter);
import signalsIntelligenceletter from "./lettersidc/sidc/signalsIntelligence.js";
ms.addLetterIcons(signalsIntelligenceletter);
import stabilityoperationsletter from "./lettersidc/sidc/stabilityoperations.js";
ms.addLetterIcons(stabilityoperationsletter);
import emergencymanagementsymbolsletter from "./lettersidc/sidc/emergencymanagementsymbols.js";
ms.addLetterIcons(emergencymanagementsymbolsletter);
// Adding support for symbols in MIL-STD-2525B change 2 that are missing in 2525C
import std2525bletter from "./lettersidc/sidc/2525b-ch2.js";
ms.addLetterIcons(std2525bletter);
// Adding support for tactical points
import tacticalpoints2525letter from "./lettersidc/sidc/tactical-points-2525.js";
ms.addLetterIcons(tacticalpoints2525letter);
import tacticalpointsapp6letter from "./lettersidc/sidc/tactical-points-app6.js";
ms.addLetterIcons(tacticalpointsapp6letter);

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
import airnumber from "./numbersidc/sidc/air.js";
ms.addNumberIcons(airnumber);
import airmissilenumber from "./numbersidc/sidc/airmissile.js";
ms.addNumberIcons(airmissilenumber);
import spacenumber from "./numbersidc/sidc/space.js";
ms.addNumberIcons(spacenumber);
import spacemissilenumber from "./numbersidc/sidc/spacemissile.js";
ms.addNumberIcons(spacemissilenumber);
import landunitnumber from "./numbersidc/sidc/landunit.js";
ms.addNumberIcons(landunitnumber);
import landciviliannumber from "./numbersidc/sidc/landcivilian.js";
ms.addNumberIcons(landciviliannumber);
import landequipmentnumber from "./numbersidc/sidc/landequipment.js";
ms.addNumberIcons(landequipmentnumber);
import landinstallationnumber from "./numbersidc/sidc/landinstallation.js";
ms.addNumberIcons(landinstallationnumber);
import seanumber from "./numbersidc/sidc/sea.js";
ms.addNumberIcons(seanumber);
import subsurfacenumber from "./numbersidc/sidc/subsurface.js";
ms.addNumberIcons(subsurfacenumber);
import minewarfarenumber from "./numbersidc/sidc/minewarfare.js";
ms.addNumberIcons(minewarfarenumber);
import activitesnumber from "./numbersidc/sidc/activites.js";
ms.addNumberIcons(activitesnumber);
import signalsintelligencenumber from "./numbersidc/sidc/signalsintelligence.js";
ms.addNumberIcons(signalsintelligencenumber);
import cyberspacenumber from "./numbersidc/sidc/cyberspace.js";
ms.addNumberIcons(cyberspacenumber);
import dismountedindividualnumber from "./numbersidc/sidc/dismountedindividual.js";
ms.addNumberIcons(dismountedindividualnumber);
import tacticalpointsnumber from "./numbersidc/sidc/control-measure.js";
ms.addNumberIcons(tacticalpointsnumber);

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
