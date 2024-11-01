import { ms } from "../src/milsymbol.js";
ms.reset();

import { app6b } from "stanag-app6";
import verify from "./letter-sidc.js";
ms.setStandard("APP6");

import { sea } from "../src/lettersidc.js";
ms.addIcons(sea);

export default verify(ms, "APP-6 B Sea", app6b.WAR.SSUF);
