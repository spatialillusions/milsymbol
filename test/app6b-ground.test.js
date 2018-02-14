import { ms } from "../src/ms";
import { app6b } from "../src/milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import icons1 from "../src/lettersidc/sidc/ground";
ms.addIcons(icons1);
import icons2 from "../src/lettersidc/sidc/equipment";
ms.addIcons(icons2);
import icons3 from "../src/lettersidc/sidc/installations";
ms.addIcons(icons3);

verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_UNT);
verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_EQT);
verify(ms, "APP-6 B Ground", app6b.WAR.GRDTRK_INS);
