import { ms } from "../src/milsymbol";
import { ms2525d } from "milstd";
import verify from "./std2525d";

import icons from "../src/numbersidc/sidc/subsurface";
ms.addIcons(icons);

verify(ms, ms2525d, "MIL-STD-2525 D Sea Subsurface", "35");
