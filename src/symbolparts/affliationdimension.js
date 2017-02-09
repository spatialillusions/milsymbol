//Affiliation and dimension addons to base geometries ####################################
var ms = require('../ms.js');

module.exports = function affliationdimension(){
	var drawArray1 = [];
	var drawArray2 = [];
	var bbox = this.properties.baseGeometry.bbox;
	var frameColor = this.colors.frameColor[this.properties.affiliation];
	//Draws the a question mark for some unknown or other dimension symbols
	if(this.properties.dimensionUnknown && frameColor){
		drawArray2.push({type:'text',text:'?',x:100,y:127,fill:frameColor,fontfamily:"Arial",fontsize:80,fontweight:"bold",textanchor:"middle"});
	}
	//If we don't have a geometry we shouldn't add anything.
	if(this.properties.baseGeometry.g && frameColor){
		var spacing = 10;
		if(this.properties.affiliation == "Unknown" || (this.properties.affiliation == "Hostile" && this.properties.dimension != "Subsurface")){
			spacing = -10;
		}
		if(this.properties.context == "Exercise"){
			if(!(this.properties.joker || this.properties.faker)){
				drawArray2.push({type:'text',text:'X',x:(bbox.x2 + spacing ),y:60,fill:frameColor,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"});
			}
			if(this.properties.joker){
				drawArray2.push({type:'text',text:'J',x:(bbox.x2 + spacing),y:60,fill:frameColor,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"});
			}
			if(this.properties.faker){
				drawArray2.push({type:'text',text:'K',x:(bbox.x2 + spacing),y:60,fill:frameColor,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"});
			}
			bbox = {x2:(bbox.x2 + spacing + 22), y1: (60-25)};
		}
		if(this.properties.context == "Simulation"){
			drawArray2.push({type:'text',text:'S',x:(bbox.x2 + spacing),y:60,fill:frameColor,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"});
			bbox = new ms.BBox({x2:(bbox.x2 + spacing + 22), y1: (60-25)});
		}
	}
	//outline
	if (this.outlineWidth > 0) drawArray1.push(ms.outline(drawArray2, this.outlineWidth, this.strokeWidth, this.outlineColor));
	return {pre: drawArray1, post: drawArray2, bbox: bbox};
}