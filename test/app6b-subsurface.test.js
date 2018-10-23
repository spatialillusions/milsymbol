import { ms } from "../src/milsymbol";
ms.reset();

import { app6b } from "stanagapp6";
import verify from "./letter-sidc";
ms.setStandard("APP6");

import { subsurface } from "../src/lettersidc";
ms.addIcons(subsurface);

export default verify(ms, "APP-6 B Sub Surface", app6b.WAR.SBSUF);
