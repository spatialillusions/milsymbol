import { ms } from "../src/milsymbol";
import { app6b } from "milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import { ground, equipment, installations } from "../src/lettersidc";
ms.addIcons([ground, equipment, installations]);

verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_UNT);
verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_EQT);
verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_INS);
