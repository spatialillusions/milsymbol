import { ms } from "../src/ms";
import milstd from "../src/milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import icons1 from "../src/lettersidc/sidc/ground";
ms.addLetterIcons(icons1);
import icons2 from "../src/lettersidc/sidc/equipment";
ms.addLetterIcons(icons2);
import icons3 from "../src/lettersidc/sidc/installations";
ms.addLetterIcons(icons3);

verify(ms, "APP-6 B Ground", milstd["app6b"].WAR.GRDTRK);
