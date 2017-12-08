export default function getOptions(includeStyle) {
  var key;
  var options = {};
  for (key in this.options) {
    if (!this.options.hasOwnProperty(key)) continue;
    // clone all options
    options[key] = this.options[key];
  }
  if (includeStyle || typeof includeStyle === "undefined") {
    for (key in this.style) {
      if (!this.style.hasOwnProperty(key)) continue;
      // clone all styles
      options[key] = this.style[key];
    }
  }
  return options;
}
