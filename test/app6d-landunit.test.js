import { ms } from "../src/ms";
import milstd from "../src/milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import icons from "../src/numbersidc/sidc/landunit";
ms.addNumberIcons(icons);

verify(ms, milstd, "APP-6 D Land Unit", "10");
