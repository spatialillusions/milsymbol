import { ms } from "../src/milsymbol.js";
ms.reset();
import { ms2525d } from "mil-std-2525";
import verify from "./number-sidc.js";

import { landunit as icons } from "../src/numbersidc.js";
ms.addIcons(icons);

export default verify(ms, ms2525d["10"]);
