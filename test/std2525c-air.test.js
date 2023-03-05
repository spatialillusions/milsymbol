import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525c } from "mil-std-2525";
import verify from "./letter-sidc";

import { air as icons } from "../src/lettersidc";
ms.addIcons(icons);

export default verify(ms, "MIL-STD-2525C Air", ms2525c.WAR.AIRTRK);
