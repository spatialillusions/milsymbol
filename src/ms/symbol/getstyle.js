export default function getStyle() {
  var key;
  var options = {};
  for (key in this.style) {
    if (!this.style.hasOwnProperty(key)) continue;
    // clone all styles
    options[key] = this.style[key];
  }

  return options;
}
