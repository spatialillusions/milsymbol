import { ms } from "../src/milsymbol";
ms.reset();
import { ms2525c } from "milstd2525";
import verify from "./letter-sidc";

import { signalsIntelligence as icons } from "../src/lettersidc";
ms.addIcons(icons);

export default verify(
  ms,
  "MIL-STD-2525C Signals Intelligence Space",
  ms2525c.SIGINT
);

/*verify(ms, "MIL-STD-2525C Signals Intelligence Air", ms2525c.SIGINT.AIRTRK);
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
);*/
