import { ms } from "../src/milsymbol";
import { app6b } from "milstd";
import verify from "./app6b";
ms.setStandard("APP6");

import { subsurface as icons } from "../src/lettersidc";
ms.addIcons(icons);

verify(ms, "APP-6 B Sub Surface", app6b.WAR.SBSUF);
