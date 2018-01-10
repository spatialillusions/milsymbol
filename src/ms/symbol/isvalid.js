export default function isValid(extended) {
  var drawInstructions =
    JSON.stringify(this.drawInstructions).indexOf("null") == -1;

  if (extended) {
    return {
      drawInstructions: drawInstructions,
      icon: this.validIcon,
      mobility: this.metadata.mobility != undefined
    };
  } else {
    return (
      drawInstructions && this.validIcon && this.metadata.mobility != undefined
    );
  }
}
