import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525c } from "milstd2525";
import verify from "./letter-sidc";

import { stabilityoperations as icons } from "../src/lettersidc";
ms.addIcons(icons);

export default verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS);
//verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.INDIV);
//verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.GRPORG);
//verify(ms, "MIL-STD-2525C Stability Operations", ms2525c.STBOPS.RAPE);
