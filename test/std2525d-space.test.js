import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525d } from "mil-std-2525";
import verify from "./number-sidc";

import { space as icons } from "../src/numbersidc";
ms.addIcons(icons);

export default verify(ms, ms2525d["05"]);
