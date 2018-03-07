import { ms } from "../src/ms";
import { ms2525c } from "../src/milstd";
import verify from "./std2525c";

import icons from "../src/lettersidc/sidc/emergencymanagementsymbols";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.INCDNT);
verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.NATEVT);
verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.OPN);
verify(ms, "MIL-STD-2525C Emergency Management Symbols", ms2525c.EMS.INFSTR);
