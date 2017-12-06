module.exports = function(extended) {
  var drawInstructions =
    JSON.stringify(this.drawInstructions).indexOf("null") != -1;

  if (extended) {
    return {
      drawInstructions: drawInstructions,
      icon: this._validIcon,
      mobility: this.metadata.mobility != undefined
    };
  } else {
    return (
      drawInstructions && this._validIcon && this.metadata.mobility != undefined
    );
  }
};
