require('./ms.js');

function symbol(SIDCParameter,options){
  //=======================================================================================
  //Read / Write properties
  //The SIDC for the symbol.
  this.SIDC = SIDCParameter;

  //Setting default values for options
  //this.setOptions.call(this, {
  this.size				= 100;	//The symbol size is actually the L variable in the symbols so the symbol will be larger than this size.
  this.fill 				= true; //Should the icon be filled with color
  this.fillOpacity		= 1; //Possibility to change the fill opacity
  this.frame 				= true;//Should the icon be framed
  this.strokeWidth 		= 4;//The stroke width of he icon frame.
  this.outlineColor		= 'rgb(239, 239, 239)' //Color of the outline
  this.outlineWidth		= 0; //Width of the outline.
  this.icon 				= true;//Should we display the icon?
  this.monoColor 			= false;//Should the icon be monocromatic and if so what color
  this.civilianColor 		= true;//Should we use the Civilian Purple defined in 2525? (We set this to default because I like the color.
  this.colorMode 			= MS.getColorMode("Light");//2525C Allows you to use Dark; Medium or Light colors. The values you can set are "Dark";"Medium" or "Light"
  this.infoFields 		= true;//If you have set all info fields but don't want the displayed; then just set this to false.
  this.infoSize 			= 40; //Relative size of the info fields
  this.alternateMedal 	= false;//2525D lets you choose between MEDAL icn and alternate MEDAL icn for Mines; default is set to MEDAL.
  this.quantity			= '';//FieldID C
  this.reinforcedReduced	= '';//FieldID F
  this.staffComments		= '';//FieldID G
  this.additionalInformation = '';//FieldID H
  this.evaluationRating	= '';//FieldID J
  this.combatEffectiveness= '';//FieldID K
  this.signatureEquipment	= '';//FieldID L
  this.higherFormation	= '';//FieldID M
  this.hostile			= '';//FieldID N
  this.iffSif				= '';//FieldID P
  this.direction			= '';//FieldID Q
  this.sigint				= '';//FieldID R2
  this.uniqueDesignation	= '';//FieldID T
  this.type				= '';//FieldID V
  this.dtg				= '';//FieldID W
  this.altitudeDepth		= '';//FieldID X
  this.location			= '';//FieldID Y
  this.speed				= '';//FieldID Z
  this.specialHeadquarters = '';//FieldID AA
  this.platformType		= '';//FieldID AD
  this.equipmentTeardownTime = '';//FieldID AE
  this.commonIdentifier	= '';//FieldID AF
  this.auxiliaryEquipmentIndicator = '';//FieldID AG
  this.headquartersElement = ''; //FieldID AH
  //});

  //FieldID AM Distance

  //FieldID AN Azimuth

  //FieldID AO EngagementBar

  //Setting Options with input
  if(!options)var options = {};
  this.setOptions.call(this, options);
  //========================================================================================

  //Read Only properties
  this.bbox = new MS.bbox();//Contains the bounding box of the current marker
  this.colors = {};//Contains the colors for the current marker
  this.DOM = {};
  this.height = 100;//Height of the current marker
  this.markerAnchor = {x:50,y:50};//The anchor point for the current marker
  this.octagonAnchor = {x:50,y:50};//The anchor point for the octagon for the current marker
  this.properties = {};//Properties of the current marker
  this.width = 100;//Width of the current marker
  this.XML = "";
  //========================================================================================

  var symbolGeometries = MS.symbolGeometries;
//========================================================================================

  this.getProperties = function(){
    var properties = {
      "activity"			: false,	//Is it an Activity
      "affiliation"		: "",		//Affiliation it is shown as (Friend/Hostile...)
      "baseAffilation"		: "",		//Affiliation it belongs to (Friend/Hostile...)
      "baseDimension" 	: "",		//Dimension it belongs to (Air/Ground...)
      "baseGeometry"		: {g:"",bbox:{}},		//Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)
      "civilian"			: false,	//Is it Civilian
      "condition"		: "",		//What condition is it in
      "context"			: "",		//Context of the symbol (Reality/Exercise...)
      "dimension"		: "",		//Dimension it is shown as (Air/Ground...)
      "dimensionUnknown"	: false,	//Is the dimension unknown
      "echelon"			: "",		//What echelon (Platoon/Company...)
      "faker"			: false,	//Is it a Faker
      "fenintDummy"		: false,	//Is it a feint/dummy
      "fill"				: this.fill,		//Standard says it should be filled
      "frame"			: this.frame,		//Standard says it should be framed
      "functionid" 		: "", 		//Part of SIDC referring to the icon.
      "headquarters"		: false,	//Is it a Headquarters
      //"iconBottom"		: 100,		//The bottom of the icon
      "installation" 		: false,	//Is it an Instalation
      "joker"			: false,	//Is it a Joker
      "mobility"			: "",		//What mobility (Tracked/Sled)
      "notpresent"		: "",		//Is it Anticipated or Pending
      "numberSIDC"		: false,	//Is the SIDC number based
      "space"			: false,	//Is it in Space
      "taskForce"		: false		//Is it a task force
    };
    var mapping = {};
    mapping.context 	= ["Reality","Exercise","Simulation"];
    mapping.status 	= ["Present","Planned","FullyCapable","Damaged","Destroyed","FullToCapacity"];
    mapping.echelonMobility = {
      "11": "Team/Crew",
      "12": "Squad",
      "13": "Section",
      "14": "Platoon/detachment",
      "15": "Company/battery/troop",
      "16": "Battalion/squadron",
      "17": "Regiment/group",
      "18": "Brigade",
      "21": "Division",
      "22": "Corps/MEF",
      "23": "Army",
      "24": "Army Group/front",
      "25": "Region/Theater",
      "26": "Command",
      "31": "Wheeled limited cross country",
      "32": "Wheeled cross country",
      "33": "Tracked",
      "34": "Wheeled and tracked combination",
      "35": "Towed",
      "36": "Rail",
      "37": "Pack animals",
      "41": "Over snow (prime mover)",
      "42": "Sled",
      "51": "Barge",
      "52": "Amphibious",
      "61": "Short towed array",
      "62": "Long towed Array",
      "71": "Leader Individual",
      "72": "Deputy Individual"};

    mapping.affiliation 	= ["Hostile", "Friend", "Neutral", "Unknown"];
    mapping.dimension 	= ["Air", "Ground", "Sea", "Subsurface"];

    properties.context = mapping.context[0];

    if(this.monoColor != ''){
      properties.fill = false;
    }
    this.SIDC = String(this.SIDC).replace(/\*/g,"-").replace(/ /g,"");

    properties.numberSIDC = !isNaN(this.SIDC);
    if(properties.numberSIDC){ //This is for new number based SIDCs

      if (typeof MS._getNumberProperties === 'function') {
        properties = MS._getNumberProperties.call(this,properties, mapping);
      }else{
        console.warn("MS._getNumberProperties() is not present, you will need to load functionality for letter based SIDCs");
      }

    }else{ //This would be old letter based SIDCs

      if (typeof MS._getLetterProperties === 'function') {
        properties = MS._getLetterProperties.call(this,properties, mapping);
      }else{
        console.warn("MS._getNumberProperties() is not present, you will need to load functionality for letter based SIDCs");
      }

    }

    if(symbolGeometries.hasOwnProperty(properties.dimension + properties.affiliation)){
      properties.baseGeometry = symbolGeometries[properties.dimension + properties.affiliation];
    }else{
      properties.baseGeometry.bbox = new MS.bbox();
    }
    //If both frame and icon is turned off we should just have a position marker
    if(!this.frame && !this.icon){
      properties.baseGeometry = symbolGeometries.PositionMarker;
    }

    return properties;
  };

  //SymbolColors ###########################################################################
  this.getColors = function(){
    var baseFillColor = (typeof this.colorMode === 'object') ? this.colorMode : MS.getColorMode(this.colorMode);
    var baseFrameColor = MS.getColorMode("FrameColor");
    var baseIconColor =  MS.getColorMode("IconColor");
    var baseIconFillColor = baseFillColor;
    var baseColorBlack = MS.getColorMode("Black");
    var baseColorWhite = MS.getColorMode("White");
    var baseColorOffWhite = MS.getColorMode("OffWhite");
    var baseColorNone = MS.getColorMode("None");

    //If it is a Civilian Symbol and civilian colors not are turned off, use civilian colors...
    if(	this.civilianColor && this.properties.civilian){
      baseFillColor.Friend = baseFillColor.Neutral = baseFillColor.Unknown = baseFillColor.Civilian;
      baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Unknown = baseFrameColor.Civilian;
      baseIconColor.Friend = baseIconColor.Neutral = baseIconColor.Unknown = baseIconColor.Civilian;
    }
    //Joker and Faker
    if(this.properties.joker || this.properties.faker){
      baseFillColor.Friend = baseFillColor.Hostile;
      baseFrameColor.Friend = baseFrameColor.Hostile;
      baseIconColor.Friend = baseIconColor.Hostile;
    }
    //If the user has specified a mono color to use for all symbols.
    if(this.monoColor != ''){
      baseFrameColor.Friend = baseFrameColor.Neutral = baseFrameColor.Hostile= baseFrameColor.Unknown = baseFrameColor.Civilian = this.monoColor;
      baseColorBlack = baseFrameColor;
      baseColorWhite = baseFillColor = baseColorNone;
    }

    var colors = {
      fillColor 		: baseFillColor,
      frameColor 	: baseFrameColor,
      iconColor 		: baseIconColor,
      iconFillColor 	: baseIconFillColor,
      none 		: baseColorNone,
      black 		: baseColorBlack,
      white 		: baseColorWhite
    };
    //Turn of the frame
    if(this.properties.frame/* || (!this.properties.frame && !this.icon)*/){
      colors.frameColor =  baseColorBlack;
    }else{
      colors.frameColor = baseColorNone;
    }
    //Filled or not.
    if(this.properties.fill){
      //I don't think you can have an unframed but filled icon so we turn off the fill as well, unless you have turned off the icon as well.
      colors.fillColor = ((!this.properties.frame && !(!this.properties.frame && !this.icon)) ? baseColorNone : baseFillColor);
      colors.iconColor = baseColorBlack;
      //Dirty override, we want colors in the icon if we just turn off the frame. This is a special fix for filled icn in 2525.
      colors.iconFillColor = (!this.properties.frame ? baseFillColor : baseColorOffWhite);
      colors.white = baseColorOffWhite;
    }else{
      colors.fillColor = baseColorNone;
      //Fix frame color if it should be turned off.
      colors.frameColor = (!this.properties.frame ?  baseColorNone : baseFrameColor);
      colors.iconColor = baseFrameColor;
      colors.iconFillColor = baseColorNone;
      //If everything turned off, make everything black.
      if(!this.properties.frame && !this.properties.fill && !this.icon) {
        colors.frameColor = baseColorBlack;
        colors.fillColor = baseColorBlack;
      }
      //Another dirty override to get correct 2525 colors for special symbols with filled icn.
      //Colors.black = baseFrameColor;
    }
    return colors;
  };

  //Makes a mapmarker with a lot of stuff around the symbol ################################
  this.getMarker = function(symbolObject){
    //Updating the object with properties of the marker
    this.properties = this.getProperties();
    //Updating the object with colors
    this.colors = this.getColors();

    this.drawInstructions = [];
    this.bbox = MS.bbox();
    //Processing all parts of the marker, adding them to the drawinstruction and updating the boundingbox
    for (var i in MS._markerParts){
      if (!MS._markerParts.hasOwnProperty(i)) continue;
      var m = MS._markerParts[i].call(this);
      if (!m.pre) continue;
      if(m.pre.length)this.drawInstructions.unshift(m.pre);
      if(m.post.length)this.drawInstructions.push(m.post);
      if (m.bbox)this.bbox = MS.bboxMax(this.bbox,m.bbox);
    }

    this.baseWidth = this.bbox.width() + Number(this.strokeWidth*2) + Number(this.outlineWidth*2);//Adding the stoke width as margins and a little bit extra
    this.baseHeight = this.bbox.height() + Number(this.strokeWidth*2) + Number(this.outlineWidth*2);//Adding the stoke width as margins and a little bit extra

    this.width = this.baseWidth*this.size/100;
    this.height = this.baseHeight*this.size/100;

    var anchor = {x:100,y:100};
    this.octagonAnchor = {
      x: (anchor.x-this.bbox.x1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100,
      y: (anchor.y-this.bbox.y1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100};
    //If it is a headquarters the anchor should be at the end of the staf
    if(this.properties.headquarters){
      anchor = {
        x:this.properties.baseGeometry.bbox.x1,
        y:this.properties.baseGeometry.bbox.y2 + MS.hqStafLength};
    }
    this.markerAnchor = {
      x: (anchor.x-this.bbox.x1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100,
      y: (anchor.y-this.bbox.y1+parseFloat(this.strokeWidth) + parseFloat(this.outlineWidth))*this.size/100};

    if(MS.autoSVG)this.asSVG();

    return this;
    };

  //Returns the marker as a DOM
  this.asDOM = function(){
    return parseXML(this.XML);
  };

  //Returns the marker as a base 64 encoded string
  this.toDataURL = function(){
    return ("data:image/svg+xml;base64," + btoa(this.XML));
  };
  
  //For backward compatibility
  this.asImage = this.toDataURL;
  
  this.asSVG = function(){
    function processInstructions(instruction){
      var svgxml = '';
      for (var i = 0; i<instruction.length;i++){
        if (Array.isArray(instruction[i])){
          if(instruction[i].length){
            svgxml += processInstructions.call(this,instruction[i]);
          }
        }else{
          if (typeof instruction[i] === 'object') {
            var svg;
            if(instruction[i].type == 'svg'){
              svg = instruction[i].svg;
            }else{
              switch (instruction[i].type){
                case 'path':
                  svg = '<path d="' + instruction[i].d +'" ';
                  break;
                case 'circle':
                  svg = '<circle cx="' + instruction[i].cx + '" cy="' + instruction[i].cy + '" r="' + instruction[i].r + '" ';
                  break;
                case 'text':
                  svg = '<text x="' + instruction[i].x + '" y="' + instruction[i].y + '" text-anchor="' + instruction[i].textanchor + '" font-size="'+ instruction[i].fontsize + '" font-family="'+ instruction[i].fontfamily+'" ';
                  if(instruction[i].fontweight) svg += 'font-weight="' + instruction[i].fontweight + '" ';
                  break;
                case 'translate':
                  svg = '<g transform="translate('+instruction[i].x+','+instruction[i].y+')" ';
                  break;
                case 'rotate':
                  svg = '<g transform="rotate('+instruction[i].degree+','+instruction[i].x+','+instruction[i].y+')" ';
                  break;
                case 'scale':
                  svg = '<g transform="scale('+instruction[i].factor+')" ';
                  break;
              }
              if (typeof instruction[i].stroke !== 'undefined') {
                svg += 'stroke-width="' + (instruction[i].strokewidth || this.strokeWidth) + '" ';
                if(instruction[i].strokedasharray) svg += 'stroke-dasharray="' + instruction[i].strokedasharray + '" ';
                if(instruction[i].linecap){
                  svg += 'stroke-linecap="' + instruction[i].linecap + '" ';
                  svg += 'stroke-linejoin="' + instruction[i].linecap + '" ';
                }
                if(instruction[i].stroke){
                  svg += 'stroke="' + instruction[i].stroke + '" ';
                }else{
                  svg += 'stroke="none" ';
                }
              }
              if (typeof instruction[i].fill !== 'undefined') svg += 'fill="' + (instruction[i].fill?instruction[i].fill:'none') + '" ';
              if (typeof instruction[i].fillopacity !== 'undefined') svg += 'fill-opacity="' + instruction[i].fillopacity + '" ';
              svg += '>';
              switch (instruction[i].type){
                case 'path':
                  svg += '</path>';
                  break;
                case 'circle':
                  svg += '</circle>';
                  break;
                case 'text':
                  svg += instruction[i].text + '</text>';
                  break;
                case 'translate':
                  svg += processInstructions.call(this,instruction[i].draw);
                  svg += '</g>';
                  break;
                case 'rotate':
                  svg += processInstructions.call(this,instruction[i].draw);
                  svg += '</g>';
                  break;
                case 'scale':
                  svg += processInstructions.call(this,instruction[i].draw);
                  svg += '</g>';
                  break;
              }
            }
            svgxml += svg;
          }
        }
      }
      return svgxml;
    }
    var xml = '<svg xmlns="'+MS.svgNS+'" version="1.2" baseProfile="tiny" width="'+this.width+'" height="'+this.height+'" viewBox="'+(this.bbox.x1-this.strokeWidth-this.outlineWidth) + " " + (this.bbox.y1-this.strokeWidth-this.outlineWidth) + " " + this.baseWidth + " " + this.baseHeight +'">';
    for (var i = 0; i<this.drawInstructions.length; i++){
      xml += processInstructions.call(this,this.drawInstructions[i]);
    }
    xml += '</svg>';
    this.XML = xml;
    return xml;
  };

  this.processCanvasInstructions = function(instruction, ctx){
    for (var i = 0; i< instruction.length;i++){
      if (Array.isArray(instruction[i])){
        if(instruction[i].length){
          this.processCanvasInstructions.call(this,instruction[i],ctx);
        }
      }else{
        if (typeof instruction[i] === 'object') {
          ctx.lineWidth = (instruction[i].strokewidth || this.strokeWidth);
          if(typeof instruction[i].stroke !== 'undefined'){
            if(instruction[i].stroke){
              ctx.strokeStyle = instruction[i].stroke;
            }else{
              ctx.strokeStyle = 'rgba(0,0,0,0)';
            }
          }
          if(instruction[i].strokedasharray){
            ctx.setLineDash(instruction[i].strokedasharray.split(','));
          }else{
            if(ctx.getLineDash().length != 0){
              ctx.setLineDash([]);
            }
          }
          if(instruction[i].linecap){
            ctx.lineCap = instruction[i].linecap;
            ctx.lineJoin = instruction[i].linecap;
          }
          if(instruction[i].fill){ctx.fillStyle = instruction[i].fill;}
          //fill is set to false, make it transparent
          if(!instruction[i].fill){ctx.fillStyle = 'rgba(0,0,0,0)';}

          if (typeof instruction[i].fillopacity !== 'undefined') {ctx.globalAlpha = instruction[i].fillopacity;}

          switch (instruction[i].type){
            case 'path':
              if (typeof Path2D != 'undefined'){
                var d = new Path2D(instruction[i].d);
                if (typeof instruction[i].fill  === 'undefined' || (typeof instruction[i].fill !== 'undefined' && instruction[i].fill) ) ctx.fill(d);
                if (typeof instruction[i].stroke === 'undefined' || (typeof instruction[i].stroke !== 'undefined' && instruction[i].stroke) ) ctx.stroke(d);
              }else{
                if (typeof MS._Path2D === 'function') {
                  MS._Path2D(ctx, instruction[i].d)
                  if (typeof instruction[i].fill === 'undefined' || (typeof instruction[i].fill !== 'undefined' && instruction[i].fill))ctx.fill();
                  if (typeof instruction[i].stroke === 'undefined' || (typeof instruction[i].stroke !== 'undefined' && instruction[i].stroke))ctx.stroke();
                }else{
                  console.warn("MS._Path2D() is not present, you will need to load functionality for using Canvas in older version of Internet Explorer.");
                }
              }
              break;
            case 'circle':
              ctx.beginPath();
              ctx.arc(instruction[i].cx, instruction[i].cy, instruction[i].r, 0, 2 * Math.PI, false);
              if (typeof instruction[i].fill === 'undefined' || (typeof instruction[i].fill !== 'undefined' && instruction[i].fill) ) ctx.fill();
              if (typeof instruction[i].stroke === 'undefined' || (typeof instruction[i].stroke !== 'undefined' && instruction[i].stroke) ) ctx.stroke();
              break;
            case 'text':
              ctx.font = (typeof instruction[i].fontweight !== 'undefined' ? instruction[i].fontweight + ' ' : '') + instruction[i].fontsize + "px " + instruction[i].fontfamily;
              ctx.textAlign = (instruction[i].textanchor == 'middle'?'center':instruction[i].textanchor);
              ctx.fillText(instruction[i].text, instruction[i].x, instruction[i].y);
              if(instruction[i].stroke)ctx.strokeText(instruction[i].text, instruction[i].x, instruction[i].y);
              break;
            case 'translate':
              ctx.save();
              ctx.translate(instruction[i].x, instruction[i].y);
              this.processCanvasInstructions.call(this,instruction[i].draw, ctx);
              ctx.restore();
              //ctx.translate(-instruction[i].x, -instruction[i].y);
              break;
            case 'rotate':
              var x= instruction[i].x;
              var y= instruction[i].y;
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(instruction[i].degree * Math.PI / 180);
              ctx.translate(-x, -y);
              this.processCanvasInstructions.call(this,instruction[i].draw, ctx);
              ctx.restore();
              //ctx.translate(x, y);
              //ctx.rotate(-instruction[i].degree * Math.PI / 180);
              //ctx.translate(-x, -y);
              break;
            case 'scale':
              ctx.save();
              ctx.scale(instruction[i].factor,instruction[i].factor);
              this.processCanvasInstructions.call(this,instruction[i].draw, ctx);
              ctx.restore()
              //ctx.scale(1/instruction[i].factor,1/instruction[i].factor);
              break;
          }
          if(instruction[i].linecap){
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
          }
          if (typeof instruction[i].fillopacity !== 'undefined') {ctx.globalAlpha = 1;}
        }
      }
    }
  };
  this.asCanvas = function(ratio){
    var canvas = document.createElement("canvas");
    //TODO fix the pixel ratio
    var ratio = ratio || 1;//window.devicePixelRatio || 1;
    canvas.width = this.width*ratio;
    canvas.height = this.height*ratio;
    //canvas.style.width = this.width +'px';
    //canvas.style.height = this.height +'px';
    var ctx = canvas.getContext("2d");
    ctx.scale((ratio*this.size/100),(ratio*this.size/100));
    ctx.translate(-(this.bbox.x1-this.strokeWidth-this.outlineWidth), -(this.bbox.y1-this.strokeWidth-this.outlineWidth));
    for (var i = 0; i < this.drawInstructions.length; i++){
      this.processCanvasInstructions.call(this,this.drawInstructions[i],ctx);
    }
    return canvas;
  };

};

// This is here so that we have it initiated in this.symbol from the beginning 
symbol.prototype.setOptions = function(options){
  for (var key in options){
    if (!options.hasOwnProperty(key)) continue;
    this[key] = options[key];
  }
  return this;
};

module.exports = symbol;