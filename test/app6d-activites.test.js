import { ms } from "../src/milsymbol";
import { app6d } from "milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import { activites as icons } from "../src/numbersidc";
ms.addIcons(icons);

verify(ms, app6d, "APP-6 D Stability and Civil Support Activities", "40");
