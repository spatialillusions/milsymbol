import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525e } from "milstandard-e";
import verify from "./number-sidc";

import { cyberspace as icons } from "../src/numbersidc";
ms.addIcons(icons);

export default verify(ms, ms2525e["60"]);
