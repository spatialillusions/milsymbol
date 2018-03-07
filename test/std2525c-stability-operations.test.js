import { ms } from "../src/ms";
import { ms2525c } from "../src/milstd";
import verify from "./std2525c";

import icons from "../src/lettersidc/sidc/stabilityoperations";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.ITM);
verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.INDIV);
verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.GRPORG);
verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.RAPE);
