import { ms } from "../src/ms";
import { ms2525d } from "../src/milstd";
import verify from "./std2525d";

import icons from "../src/numbersidc/sidc/spacemissile";
ms.addIcons(icons);

verify(ms, ms2525d, "MIL-STD-2525 D Space Misslie Symbol", "06");
