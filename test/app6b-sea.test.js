import { ms } from "../src/milsymbol";
ms.reset();

import { app6b } from "stanagapp6";
import verify from "./letter-sidc";
ms.setStandard("APP6");

import { sea } from "../src/lettersidc";
ms.addIcons(sea);

export default verify(ms, "APP-6 B Sea", app6b.WAR.SSUF);
