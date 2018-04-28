import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import { ground, equipment, installations } from "../src/lettersidc";
ms.addIcons([ground, equipment, installations]);

verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_UNT);
verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_EQT);
verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_INS);
