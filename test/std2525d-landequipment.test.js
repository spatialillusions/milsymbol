import { ms } from "../src/milsymbol";
import { ms2525d } from "milstd";
import verify from "./std2525d";

import { landequipment as icons } from "../src/numbersidc";
ms.addIcons(icons);

verify(ms, ms2525d, "MIL-STD-2525 D Land Equipment", "15");
