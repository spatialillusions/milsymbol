import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525c } from "milstd2525";
import verify from "./std2525c";

import { subsurface as icons } from "../src/lettersidc";
ms.addIcons(icons);

export default verify(ms, "MIL-STD-2525C Subsurface", ms2525c.WAR.SBSUF);
