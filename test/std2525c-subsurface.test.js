import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import icons from "../src/lettersidc/sidc/subsurface";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Subsurface", ms2525c.WAR.SBSUF);
