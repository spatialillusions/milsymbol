import { ms } from "../src/milsymbol.js";
ms.reset();
import { ms2525c } from "mil-std-2525";
import verify from "./letter-sidc.js";

import { stabilityoperations as icons } from "../src/lettersidc.js";
ms.addIcons(icons);

export default verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS);
//verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.INDIV);
//verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.GRPORG);
//verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.RAPE);
