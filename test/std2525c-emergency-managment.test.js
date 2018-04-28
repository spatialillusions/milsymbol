import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import { emergencymanagementsymbols as icons } from "../src/lettersidc";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.INCDNT);
verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.NATEVT);
verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.OPN);
verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.INFSTR);
