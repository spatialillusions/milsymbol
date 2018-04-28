import { ms } from "../src/milsymbol";
import { app6d } from "milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import { minewarfare as icons } from "../src/numbersidc";
ms.addIcons(icons);

verify(ms, app6d, "APP-6 D Mine Warfare", "36");
