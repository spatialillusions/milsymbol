import { ms } from "../src/milsymbol.js";
ms.reset();
import { app6d } from "stanag-app6";
import verify from "./number-sidc.js";
ms.setStandard("APP6");

import { sea as icons } from "../src/numbersidc.js";
ms.addIcons(icons);

export default verify(ms, app6d["30"]);
