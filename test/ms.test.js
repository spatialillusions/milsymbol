import { ms } from "../index.esm.js";
ms.reset();

export default {
  "ms base methods": {
    BBox: [typeof ms.BBox(), "object"],
    ColorMode: [typeof ms.ColorMode(), "object"],
    addIconParts: [typeof ms.addIconParts(), "object"],
    addLabelOverrides: [typeof ms.addLabelOverrides(), "object"],
    addSIDCicons: [typeof ms.addSIDCicons(), "object"],
    addSymbolPart: [typeof ms.addSymbolPart(), "object"],
    getColorMode: [typeof ms.getColorMode("Light"), "object"],
    getDashArrays: [typeof ms.getDashArrays(), "object"],
    getHqStaffLength: [typeof ms.getHqStaffLength(), "number"],
    getSymbolParts: [typeof ms.getSymbolParts(), "object"],
    getVersion: [typeof ms.getVersion(), "string"],
    outline: [typeof ms.outline({}), "object"],
    setColorMode: [typeof ms.setColorMode("TestMode", {}), "object"],
    setDashArrays: [typeof ms.setDashArrays(), "object"],
    setHqStaffLength: [typeof ms.setHqStaffLength(100), "number"],
    setStandard: [typeof ms.setStandard(), "boolean"],
    setSymbolParts: [typeof ms.setSymbolParts(), "object"]
  }
};
