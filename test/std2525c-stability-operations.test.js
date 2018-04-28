import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import { stabilityoperations as icons } from "../src/lettersidc";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.ITM);
verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.INDIV);
verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.GRPORG);
verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.RAPE);
