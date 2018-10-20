import { ms } from "../src/milsymbol";
ms.reset();
import { app6d } from "stanagapp6";
import verify from "./app6d";
ms.setStandard("APP6");

import { airmissile as icons } from "../src/numbersidc";
ms.addIcons(icons);

export default verify(ms, app6d["02"]);
