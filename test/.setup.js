global.window = {};
global.document = {
  createElement: () => ({
    getContext: () => ({
      arc: Function.prototype,
      beginPath: Function.prototype,
      closePath: Function.prototype,
      fill: Function.prototype,
      getLineDash: () => [],
      lineTo: Function.prototype,
      moveTo: Function.prototype,
      restore: Function.prototype,
      save: Function.prototype,
      scale: Function.prototype,
      stroke: Function.prototype,
      translate: Function.prototype
    }),
  })
};

global.parseXML = () => ({});
global.btoa = Function.prototype;
