//Debug ##################################################################################
export default function debug(ms) {
  //This debug function is a minimal example of how to extend milsymbol.
  //Create a variable to store your geometries
  var drawArray1 = [];
  var drawArray2 = [];
  //Get a new bounding box and modify it if your geometry extends outside the current bounds.
  var gbbox = new ms.BBox();
  //Draws the icon octagon
  drawArray2.push({
    type: "path",
    fill: false,
    stroke: "rgb(0,0,255)",
    d:
      "m 120,60 0,80 m -40,-80 0,80 m -20,-20 80,0 m 0,-40 -80,0 M 100,50 135.35534,64.64466 150,100 135.35534,135.35534 100,150.00002 64.644661,135.35534 50,100 64.644661,64.64466 z"
  });
  return { pre: drawArray1, post: drawArray2, bbox: gbbox };
}
