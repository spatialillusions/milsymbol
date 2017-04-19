global.window = {
  btoa: Function.prototype
};
global.document = {
  adoptNode: () => ({}),
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
    })
  })
};

global.DOMParser = function() {
  this.parseFromString = () => ({});
};
