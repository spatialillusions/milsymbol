//Sets modifiers depending of status #####################################################
var ms = require('../ms.js');

module.exports = function statusmodifier(){
	var drawArray1 = [];
	var drawArray2 = [];
	var bbox = this.properties.baseGeometry.bbox;
	var y1 =  bbox.y1;
	var y2 =  bbox.y2;

	if(this.properties.condition){
		if(this.properties.fill && this.monoColor === ''){
			var colors = {	"FullyCapable"	:'rgb(0,255,0)',
							"Damaged"		:'rgb(255,255,0)',
							"Destroyed"		:'rgb(255,0,0)',
							"FullToCapacity":'rgb(0, 180, 240)'};
			//If it is unframed and equipment use the bottom of the icon
			if(!this.properties.frame && this.properties.iconBottom){
				y2 = this.properties.iconBottom;
			}
			//If we have a mobility indicator we need to make space for it.
			y2 += (this.properties.mobility)?25:5;
			//Add the bar to the geometry
			drawArray2.push({type:'path',strokewidth:this.strokeWidth,fill:colors[this.properties.condition],stroke:this.colors.frameColor[this.properties.affiliation],d:'M' + bbox.x1 + ',' + y2 + ' l' + bbox.width() + ',0 0,15 -' + bbox.width() + ',0 z'});
			//Add the hight of the codition bar to the geometry bounds
			y2 += 15;
			//outline
			if (this.outlineWidth > 0) drawArray1.push(ms.outline(drawArray2, this.outlineWidth, this.strokeWidth, this.outlineColor));
		}else{
			if(this.properties.condition == "Damaged" || this.properties.condition == "Destroyed"){
				drawArray2.push({type:'path',d:'M150,20 L50,180',strokewidth:(this.strokeWidth * 2 ),stroke:this.colors.frameColor[this.properties.affiliation]});
				//Add space for the modifier to the geometry bounds
				y1 = 20;
				y2 = 180;
				}
			if(this.properties.condition == "Destroyed")drawArray2.push({type:'path',d:"M50,20 L150,180",strokewidth:(this.strokeWidth * 2 ),stroke:this.colors.frameColor[this.properties.affiliation]});
			//outline
			if (this.outlineWidth > 0) drawArray1.push(ms.outline(drawArray2,this.outlineWidth, this.strokeWidth, this.outlineColor));
		}
	}

	//A bounding box only needs the values that might change
	return {pre: drawArray1, post: drawArray2, bbox: {y1: y1, y2: y2}};
};