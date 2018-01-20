import { ms } from "../src/ms";
import milstd from "../src/milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import icons from "../src/lettersidc/sidc/sof";
ms.addLetterIcons(icons);

verify(ms, "APP-6 B SOF", milstd["app6b"].WAR.SOFUNT);
