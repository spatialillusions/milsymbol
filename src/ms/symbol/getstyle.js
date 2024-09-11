export default function getStyle() {
  let key;
  const options = {};
  for (key in this.style) {
    if (!this.style.hasOwnProperty(key)) continue;
    // clone all styles
    options[key] = this.style[key];
  }

  return options;
}
