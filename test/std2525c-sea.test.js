import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import { sea as icons } from "../src/lettersidc";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Sea", ms2525c.WAR.SSUF);
