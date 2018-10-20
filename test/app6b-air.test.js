import { ms } from "../src/milsymbol";
ms.reset();

import { app6b } from "stanagapp6";
import verify from "./app6b";
ms.setStandard("APP6");

import { air as icons } from "../src/lettersidc";
ms.addIcons(icons);

export default verify(ms, "APP-6 B Air", app6b.WAR.AIRTRK);
