import { ms } from "../src/milsymbol";
ms.reset();

import { app6b } from "stanagapp6";
import verify from "./app6b";
ms.setStandard("APP6");

import { equipment } from "../src/lettersidc";
ms.addIcons(equipment);

export default verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_EQT);
