import { ms } from "../src/milsymbol.js";
ms.reset();
import { ms2525c } from "mil-std-2525";
import verify from "./letter-sidc.js";

import { sea as icons } from "../src/lettersidc.js";
ms.addIcons(icons);

export default verify(ms, "MIL-STD-2525C Sea", ms2525c.WAR.SSUF);
