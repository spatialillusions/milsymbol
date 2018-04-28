import { ms } from "../src/milsymbol";
import { app6d } from "milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import icons from "../src/numbersidc/sidc/minewarfare";
ms.addIcons(icons);

verify(ms, app6d, "APP-6 D Mine Warfare", "36");
