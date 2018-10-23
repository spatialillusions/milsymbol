import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525d } from "milstd2525";
import verify from "./number-sidc";

import { activites as icons } from "../src/numbersidc";
ms.addIcons(icons);

export default verify(ms, ms2525d["40"]);
