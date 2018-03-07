import { ms } from "../src/ms";
import { ms2525c } from "../src/milstd";
import verify from "./std2525c";

import icons from "../src/lettersidc/sidc/air";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Air", ms2525c.WAR.AIRTRK);
