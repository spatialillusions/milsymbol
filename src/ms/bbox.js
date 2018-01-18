export function BBox(box) {
  if (typeof box === "undefined") {
    box = {};
  }
  return {
    x1: typeof box.x1 !== "undefined" ? box.x1 : 100,
    y1: typeof box.y1 !== "undefined" ? box.y1 : 100,
    x2: typeof box.x2 !== "undefined" ? box.x2 : 100,
    y2: typeof box.y2 !== "undefined" ? box.y2 : 100,
    width: function() {
      return this.x2 - this.x1;
    },
    height: function() {
      return this.y2 - this.y1;
    },
    getSize: function() {
      return {
        height: this.y2 - this.y1,
        width: this.x2 - this.x1
      };
    },
    merge: function(box) {
      this.x1 = box.x1 <= this.x1 ? box.x1 : this.x1;
      this.y1 = box.y1 <= this.y1 ? box.y1 : this.y1;
      this.x2 = box.x2 >= this.x2 ? box.x2 : this.x2;
      this.y2 = box.y2 >= this.y2 ? box.y2 : this.y2;
      return this;
    }
  };
}
