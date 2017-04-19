module.exports = function(extended) {
  if (extended) {
    return {
      icon: this._validIcon,
      mobility: this.properties.mobility != undefined
    };
  } else {
    return this._validIcon && this.properties.mobility != undefined;
  }
};
