import { ms } from "../src/milsymbol";
import { ms2525c } from "milstd";
import verify from "./std2525c";

import { signalsIntelligence as icons } from "../src/lettersidc";
ms.addIcons(icons);

verify(ms, "MIL-STD-2525C Signals Intelligence Space", ms2525c.SIGINT.SPC);
verify(ms, "MIL-STD-2525C Signals Intelligence Air", ms2525c.SIGINT.AIRTRK);
verify(ms, "MIL-STD-2525C Signals Intelligence Ground", ms2525c.SIGINT.GRDTRK);
verify(
  ms,
  "MIL-STD-2525C Signals Intelligence Sea Surface",
  ms2525c.SIGINT.SSUF
);
verify(
  ms,
  "MIL-STD-2525C Signals Intelligence Subsurface",
  ms2525c.SIGINT.SBSUF
);
