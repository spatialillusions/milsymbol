/* ***************************************************************************************
Creating the base of milsymbol
******************************************************************************************
To import all and have the same functionality as ordinary milsymbol, do the following:
(Or just import the things that you need)
*/

import {
  ms, // Base for milsymbol
  app6b, // APP6-B
  std2525b, // 2525B
  std2525c, // 2525C
  app6d, // APP6-D
  std2525d, // 2525D
  path2d // Pollyfill for Path2D in IE or node-canvas
} from "./index.esm.js";

ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);
ms.addIcons(app6d);
ms.addIcons(std2525d);
ms.Path2D = path2d;

/* ***************************************************************************************
This draws the symbol octagon, can be good for debugging.
*************************************************************************************** */
//import debug from "./symbolfunctions/debug.js";
//ms.addSymbolPart(debug);

export default ms;
