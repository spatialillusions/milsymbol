import { ms } from "../src/milsymbol";
ms.reset();

import { app6b } from "stanagapp6";
import verify from "./letter-sidc";
ms.setStandard("APP6");

import { space } from "../src/lettersidc";
ms.addIcons(space);

export default verify(ms, "APP-6 B Space", app6b.WAR.SPC);
