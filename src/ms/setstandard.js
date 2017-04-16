module.exports = function(standard) {
  if (standard == "2525") {
    this._STD2525 = true;
    return true;
  }
  if (standard == "APP6") {
    this._STD2525 = false;
    return true;
  }
  return false;
};
