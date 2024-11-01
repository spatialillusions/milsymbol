import { ms } from "../src/milsymbol.js";
ms.reset();
import { ms2525c } from "mil-std-2525";
import verify from "./letter-sidc.js";

import { installations } from "../src/lettersidc.js";
ms.addIcons(installations);

export default verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_INS);
