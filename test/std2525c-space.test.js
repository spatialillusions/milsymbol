import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import { space as icons } from "../src/lettersidc";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Space", ms2525c.WAR.SPC);
