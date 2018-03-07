import { ms } from "../src/ms";
import { ms2525c } from "../src/milstd";
import verify from "./std2525c";

import icons1 from "../src/lettersidc/sidc/ground";
ms.addIcons(icons1);
import icons2 from "../src/lettersidc/sidc/equipment";
ms.addIcons(icons2);
import icons3 from "../src/lettersidc/sidc/installations";
ms.addIcons(icons3);

verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_UNT);
verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_EQT);
verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_INS);
