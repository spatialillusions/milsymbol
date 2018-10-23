import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525c } from "milstd2525";
import verify from "./letter-sidc";

import { ground } from "../src/lettersidc";
ms.addIcons(ground);

export default verify(ms, "MIL-STD-2525C Ground", ms2525c.WAR.GRDTRK_UNT);
