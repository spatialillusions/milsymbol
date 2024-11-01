import { ms } from "../src/milsymbol.js";
ms.reset();
import { ms2525c } from "mil-std-2525";
import verify from "./letter-sidc.js";

import { equipment } from "../src/lettersidc.js";
ms.addIcons(equipment);

export default verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_EQT);
