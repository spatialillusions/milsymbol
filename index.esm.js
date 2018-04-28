/* ***************************************************************************************
ES6 version of milsymbol
*************************************************************************************** */
export { ms } from "./src/milsymbol.js";
export { app6b, std2525b, std2525c } from "./src/lettersidc.js";
export { app6d, std2525d } from "./src/numbersidc.js";
export { default as path2d } from "./src/ms/path2d.js";

/* ***************************************************************************************
ES6 version of milsymbol
******************************************************************************************
To import all and have the same functionality as ordinary milsymbol, do the following:
(Or just import the things that you need)

import {
  ms,
  app6b,
  std2525b,
  std2525c,
  app6d,
  std2525d,
  path2d
} from "./index.esm.js";

ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);
ms.addIcons(app6d);
ms.addIcons(std2525d);
ms.Path2D = path2d;


*/
