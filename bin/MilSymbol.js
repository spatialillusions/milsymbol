
/* =======================================================================================

Copyright (c) 2013 Måns Beckman  http://www.spatialillusions.com
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

------------------------------------------------------------------------------------------

For updates and more information go to http://www.spatialillusions.com

======================================================================================= */
console.log("MilSymbol 0.4.5b Copyright (c) 2013 Måns Beckman http://www.spatialillusions.com")

function MilSymbol(SIDCParameter,options){

//Constants
	svgNS = "http://www.w3.org/2000/svg";

//Options fill,frame,icon
	if(!options)var options = {};

//Here are ALL the attributes that you can set for the Symbol, there is a lot of stuff... 
//========================================================================================
	//Should the icon be filled with color
	this.fill 			= 	options.fill!=undefined?options.fill:true;
	//Should the icon be framed
	this.frame 			= 	options.frame!=undefined?options.frame:true;
	//The stroke width of he icon frame.
	this.strokeWidth 	= 	options.strokeWidth!=undefined?options.strokeWidth:3;
	//Should we display the icon?
	this.icon 			= 	options.icon!=undefined?options.icon:true;
	//Should the icon be monocromatic and if so what color
	this.monoColor 		= 	options.monoColor!=undefined?options.monoColor:false;
	//Should we use the Civilian Purple defined in 2525? (We set this to default because I like the color.
	this.civilianColors = 	options.civilianColor!=undefined||options.civilianColor==''?options.civilianColor:true;
	//2525C Allows you to use Dark, Medium or Light colors. The values you can set are "Dark","Medium" or "Light"
	this.colorMode 		= 	options.colorMode!=undefined||options.colorMode==''?options.colorMode:"Light";
	//There are differences between APP6 symbols and 2525, we mainly follow APP6, but you can force it to use 2525 by using this parameter.
	this.force2525 		= 	options.force2525!=undefined||options.force2525==''?options.force2525:true;
	//If you have set all info fields but don't want the displayed, then just set this to false.
	this.infoFields 	= 	options.infoFields!=undefined||options.infoFields==''?options.infoFields:true;
	
	//FieldID C
	this.quantity	= 	options.quantity!=undefined?options.quantity:'';	
	//FieldID F
	this.reinforcedReduced	= 	options.reinforcedReduced!=undefined?options.reinforcedReduced:'';
	//FieldID G
	this.staffComments	= 	options.staffComments!=undefined?options.staffComments:'';
	//FieldID H
	this.additionalInformation	= 	options.additionalInformation!=undefined?options.additionalInformation:'';	
	//FieldID J
	this.evaluationRating	= 	options.evaluationRating!=undefined?options.evaluationRating:'';	
	//FieldID K
	this.combatEffectiveness	= 	options.combatEffectiveness!=undefined?options.combatEffectiveness:'';
	//FieldID L
	this.signatureEquipment	= 	options.signatureEquipment!=undefined?options.signatureEquipment:'';
	//FieldID M
	this.higherFormation	= 	options.higherFormation!=undefined?options.higherFormation:'';
	//FieldID N
	this.hostile	= 	options.hostile!=undefined?options.hostile:'';	
	//FieldID P
	this.iffSif	= 	options.iffSif!=undefined?options.iffSif:'';	
	//FieldID Q
	this.direction	= 	options.direction!=undefined?options.direction:'';		
	//FieldID R2
	this.sigint	= 	options.sigint!=undefined?options.sigint:'';	
	//FieldID T
	this.uniqueDesignation	= 	options.uniqueDesignation!=undefined?options.uniqueDesignation:'';	
	//FieldID V
	this.type	= 	options.type!=undefined?options.type:'';	
	//FieldID W
	this.dtg	= 	options.dtg!=undefined?options.dtg:'';	
	//FieldID X
	this.altitudeDepth	= 	options.altitudeDepth!=undefined?options.altitudeDepth:'';	
	//FieldID Y
	this.location	= 	options.location!=undefined?options.location:'';		
	//FieldID Z
	this.speed	= 	options.speed!=undefined?options.speed:'';	
	//FieldID AA
	this.specialHeadquarters	= 	options.specialHeadquarters!=undefined?options.specialHeadquarters:'';	
	//FieldID AD
	this.platformType	= 	options.platformType!=undefined?options.platformType:'';		
	//FieldID AE
	this.equipmentTeardownTime	= 	options.equipmentTeardownTime!=undefined?options.equipmentTeardownTime:'';
	//FieldID AF
	this.commonIdentifier	= 	options.commonIdentifier!=undefined?options.commonIdentifier:'';	
	//FieldID AG
	this.auxiliaryEquipmentIndicator	= 	options.auxiliaryEquipmentIndicator!=undefined?options.auxiliaryEquipmentIndicator:'';	

	//FieldID AM Distance
	
	//FieldID AN Azimuth
	
	//FieldID AO EngagementBar

	//The symbol size is actually the L variable in the symbols so the symbol will be larger than this size.
	this.size 	= 	options.size!=undefined?options.size:100;

	//The SIDC for the symbol.
	this.SIDC = SIDCParameter;		

//========================================================================================								

	//The center of the symbols are in 100,100 but we later need to offset the symbol to make space for some stuff on the top, this variable is the offset.
	var symbolOffset = 30;
	//For the map markers we want to remove as much spacing as possible, so we need to keep track of the boundingbox
	this.markerBBox = {x1:50,y1:50,x2:150,y2:150}

	var symbolBaseGeometry = {
		'AirHostile' 	: '<polyline points="45,150 45,70 100,20 155,70 155,150" />',
		'AirFriend'		: '<path  d="M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150"/>',
		'AirNeutral'	: '<polyline  points="45,150,45,30,155,30,155,150" />',
		'AirUnknown'	: '<path  d="m 65,150 c -55,0 -50,-90 0,-90 0,-50 70,-50 70,0 50,0 55,90 0,90" />',
		'GroundHostile'	: '<polygon  points="100,28,172,100,100,172,28,100,100,28" />',
		'GroundFriend'	: '<path  d="M25,50 l150,0 0,100 -150,0 z"/>',
		'GroundNeutral'	: '<path  d="M45,45 l110,0 0,110 -110,0 z"/>',
		'GroundUnknown'	: '<path  d="M63,63 C63,20 137,20 137,63   C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z" />',
		'SeaHostile'	: '<polygon  points="100,28,172,100,100,172,28,100,100,28" />',
		'SeaFriend'		: '<circle cx="100" cy="100" r="60" />',
		'SeaNeutral'	: '<path  d="M45,45 l110,0 0,110 -110,0 z"/>',
		'SeaUnknown'	: '<path  d="M63,63 C63,20 137,20 137,63   C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z" />',
		'SubsurfaceHostile'	: '<polyline  points="45,50,45,130,100,180,155,130,155,50" />',
		'SubsurfaceFriend'	: '<path  d="m 45,50 c 0,100 40,120 55,120 15,0 55,-20 55,-120"/>',
		'SubsurfaceNeutral'	: '<polyline  points="45,50,45,170,155,170,155,50" />',
		'SubsurfaceUnknown'	: '<path  d="m 65,50 c -55,0 -50,90 0,90 0,50 70,50 70,0 50,0 55,-90 0,-90" />',
		'BBox' : {AirHostile: { x: 45, y:20, width: 110 , height:130},AirFriend: { x: 45, y:30, width: 110 , height:120},AirNeutral: { x: 45, y:30, width: 110 , height:120},AirUnknown: { x: 25, y:20, width: 150 , height:130},GroundHostile: { x: 28, y:28, width: 144 , height:144},GroundFriend: { x: 25, y:50, width: 150 , height:100},GroundNeutral: { x: 45, y:45, width: 110 , height:110},GroundUnknown: { x: 30.75, y:30.75, width: 138.5 , height:138.5},Groundnone: { x: 0, y:0, width: 0 , height:0},SeaHostile: { x: 28, y:28, width: 144 , height:144},SeaFriend: { x: 40, y:40, width: 120 , height:120},SeaNeutral: { x: 45, y:45, width: 110 , height:110},SeaUnknown: { x: 30.75, y:30.75, width: 138.5 , height:138.5},SubsurfaceHostile: { x: 45, y:50, width: 110 , height:130},SubsurfaceFriend: { x: 45, y:50, width: 110 , height:120},SubsurfaceNeutral: { x: 45, y:50, width: 110 , height:120},SubsurfaceUnknown: { x: 25, y:50, width: 150 , height:130}}
	}
	var copysymbolBaseGeometry = symbolBaseGeometry;


	//Object containing bottom of all Equipment symbols.
	var equipmentBottom = {'E-----':0,'EWM---':140,'EWMA--':140,'EWMAS-':140,'EWMASR':140,'EWMASE':140,'EWMAI-':140,'EWMAIR':140,'EWMAIE':140,'EWMAL-':140,'EWMALR':140,'EWMALE':140,'EWMAT-':153,'EWMATR':153,'EWMATE':153,'EWMS--':140,'EWMSS-':140,'EWMSI-':140,'EWMSL-':140,'EWMT--':140,'EWMTL-':140,'EWMTM-':140,'EWMTH-':140,'EWS---':140,'EWSL--':140,'EWSM--':140,'EWSH--':140,'EWX---':140,'EWXL--':140,'EWXM--':140,'EWXH--':140,'EWT---':140,'EWTL--':140,'EWTM--':140,'EWTH--':140,'EWR---':140,'EWRL--':140,'EWRM--':140,'EWRH--':140,'EWZ---':140,'EWZL--':140,'EWZM--':140,'EWZH--':140,'EWO---':140,'EWOL--':140,'EWOM--':140,'EWOH--':140,'EWH---':140,'EWHL--':140,'EWHLS-':130,'EWHM--':140,'EWHMS-':130,'EWHH--':140,'EWHHS-':130,'EWG---':140,'EWGL--':140,'EWGM--':140,'EWGH--':140,'EWGR--':140,'EWD---':140,'EWDL--':140,'EWDLS-':130,'EWDM--':140,'EWDMS-':130,'EWDH--':140,'EWDHS-':130,'EWA---':140,'EWAL--':140,'EWAM--':140,'EWAH--':140,'EV----':129,'EVA---':129,'EVAT--':130,'EVATL-':130,'EVATLR':130,'EVATM-':130,'EVATMR':130,'EVATH-':130,'EVATHR':130,'EVAA--':130,'EVAAR-':130,'EVAI--':130,'EVAC--':130,'EVAS--':972.3621826171875,'EVAL--':140,'EVU---':130,'EVAB--':130,'EVUS--':140,'EVUSL-':140,'EVUSM-':140,'EVUSH-':140,'EVUL--':140,'EVUX--':140,'EVUR--':130,'EVUTL-':130,'EVUTH-':130,'EVUA--':130,'EVUAA-':130,'EVE---':129,'EVEB--':130,'EVEE--':130,'EVEC--':140,'EVEM--':130,'EVEMA-':130,'EVEMV-':130,'EVEMT-':130,'EVEML-':140,'EVEA--':120,'EVEAA-':130,'EVEAT-':130,'EVEMSM':130,'EVED--':130,'EVEDA-':130,'EVES--':130,'EVER--':130,'EVEH--':140,'EVEF--':140,'EVD---':140,'EVT--':130,'EVC---':119,'EVCA--':132.5,'EVCAL-':132.5,'EVCAM-':132.5,'EVCAH-':132.5,'EVCO--':132.5,'EVCOL-':132.5,'EVCOM-':132.5,'EVCOH-':132.5,'EVCM--':132.5,'EVCML-':132.5,'EVCMM-':132.5,'EVCMH-':132.5,'EVCU--':132.5,'EVCUL-':132.5,'EVCUM-':132.5,'EVCUH-':132.5,'EVCJ--':132.5,'EVCJL-':132.5,'EVCJM-':132.5,'EVCJH-':132.5,'EVCT--':132.5,'EVCTL-':132.5,'EVCTM-':132.5,'EVCTH-':132.5,'EVCF--':132.5,'EVCFL-':132.5,'EVCFM-':132.5,'EVCFH-':132.5,'EVM---':125,'EVS---':129,'EVST--':129,'EVSR--':129,'EVSC--':129,'EVSP--':129,'EVSW--':129,'ES----':140,'ESR---':120,'ESE---':136,'EXI---':119,'EXL---':145,'EXN---':140,'EXF---':135,'EXM---':130,'EXMC--':122,'EXML--':122}
	
	
	//Quck function to move icons and stuff
	function translate(x, y, svg){
		return '<g transform="translate('+ x +','+ y +')">' + svg + '</g>';
	}
	//Quick function to scale icons and stuff, will keep center at center.
	function scale(factor, svg){
		return '<g transform="translate('+(100-factor*100)+','+(100-factor*100)+'),scale('+ factor +')">' + svg + '</g>';
	}
	//Quick function to rotate icons and stuff, will keep center at center.
	function rotate(angle, svg){
		return '<g transform="rotate('+angle+',100,100)">' + svg + '</g>';
	}
	
	if (typeof parseXML=='undefined') {
		window.parseXML = function (s,doc) {
			doc = doc || document;
			var doc2=(new DOMParser()).parseFromString(s, "text/xml");
			return doc.adoptNode(doc2.documentElement);
		}
	}

//Breaking up the SICD for the symbol ####################################################
	this.symbol = function(){

		var contextValues = [	"Reality",
								"Exercise",
								"Simulation"];
								
		var statusValues = [	"Present",
								"Planned",
								"FullyCapable",
								"Damaged",
								"Destroyed",
								"FullToCapacity"];
								
		var hqETC = { 	"fenintDummy":false,
						"headquarters":false,
						"taskForce":false}
						
		var echelonETCValues = {	"11": "Team/Crew",
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
									"62": "Long towed Array"}				
		var echelonETC = new Object();
		var mobility = false;
							
		var affiliationTypeValues = ["Hostile", "Friend", "Neutral", "Unknown"];
		var dimensionTypeValues = ["Air", "Ground", "Sea", "Subsurface"]

		var symbolSIDC = String(this.SIDC).replace("*","-").replace(" ","");
		if(isNaN(symbolSIDC)) this.SIDC = symbolSIDC = symbolSIDC.toUpperCase()

		var baseGeometryType;
		var dimensionType;
		var dimensionUnknown = false;
		var affiliationType;
		
		var spaceModifier = false;
		var activityModifier = false;
		
		var context = contextValues[0];
		//Planned/Anticipated/Suspect symbols should have a dashed outline (Anticipated is not Present)
		var anticipated = false;
		//Is it an installation
		var installation = false;
		//Should it have a Condition Bar
		var condition = false;	
		//Joker or Faker
		var jokerFaker = false;
		//Is it Civilian
		var civilian = false;
		
		if(!isNaN(symbolSIDC)){ //This is for new number based SIDCs
			var version  	= 	symbolSIDC.substr(0,2);
			var standardIdentity1 = symbolSIDC.substr(2,1);
			var standardIdentity2 = symbolSIDC.substr(3,1);
			var symbolSet = symbolSIDC.substr(4,2);
			var status = symbolSIDC.substr(6,1);
			var headquartersTaskForceDummy = symbolSIDC.substr(7,1);
			var echelonMobilityTowed = symbolSIDC.substr(8,2);
			
			var functionid = symbolSIDC.substr(10,10);
			
			context = contextValues[parseInt(symbolSIDC.substr(2,1))]
			
			var affiliationMapping = {	'0':'Unknown',
										'1':'Unknown',
										'2':'Friend',
										'3':'Friend',
										'4':'Neutral',
										'5':'Hostile',
										'6':'Hostile'}
			affiliationType = affiliationMapping[standardIdentity2];
			
			var dimensionMapping = {	'00':'Sea',
										'01':'Air',
										'02':'Air',
										'05':'Air',
										'06':'Air',
										'10':'Ground',
										'11':'Ground',
										'15':'Ground',
										'20':'Ground',
										'30':'Sea',
										'35':'Subsurface',
										'36':'Subsurface',
										'40':'Ground',
										'50':'Air',
										'51':'Air',
										'52':'Ground',
										'53':'Sea',
										'54':'Subsurface',
										'60':'Ground'}
			dimensionType = dimensionMapping[symbolSet]

			//SymbolSets in Space
			if(symbolSet == '05' || symbolSet == '06' || symbolSet == '50')spaceModifier = true;
			//SymbolSets that are Activities
			if(symbolSet == '40')activityModifier = true;
			//SymbolSets that are Installations
			if(symbolSet == '20')installation = true;
			
			//Planned/Anticipated/Suspect symbols should have a dashed outline
			if(status == '1' )anticipated = "8,12";
			if(standardIdentity2 == '0' || standardIdentity2 == '2' || standardIdentity2 == '5')anticipated = "4,4";

			
			//Should it have a Condition Bar
			if(status == '2' || status == '3' || status == '4' || status == '5')condition = statusValues[parseInt(status)];
			
			//First save the dimensionType and affiliationType before we modifies it... 
			var dimensionTypeUnModified = dimensionType;
			var affilationUnModified = affiliationType;
			
			//Joker and faker should have the shape of friendly
			if(standardIdentity2 == '5' && standardIdentity1 == '1')jokerFaker = 'Joker';
			if(standardIdentity2 == '6' && standardIdentity1 == '1')jokerFaker = 'Faker';
			if(jokerFaker)affiliationType = 'Friend'; 
			if(symbolSet=='00')dimensionUnknown = true;
			//If battle dimension is unknown, standard identity is Exersize and other than Unknown we should not have a symbol
			if(symbolSet=='00' && standardIdentity1 == '1' && affiliationType != 'Unknown') affiliationType = false;
			
			//Ground Equipment should have the same geometry as sea Friend... 
			//Signal INTELLIGENCE Ground should have the same geometry as sea Friend... 
			dimensionType = (symbolSet == '15' || symbolSet == '52' )?'Sea':dimensionType;
			
			//Setting up Headquarters/task force/dummy
			if(['1','3','5','7'].indexOf(headquartersTaskForceDummy) > -1)hqETC.feintDummy = true;
			if(['2','3','6','7'].indexOf(headquartersTaskForceDummy) > -1)hqETC.headquarters = true;
			if(['4','5','6','7'].indexOf(headquartersTaskForceDummy) > -1)hqETC.taskForce = true;
			
			//Setting up Echelon/Mobility/Towed Array Amplifier
			echelonETC[echelonETCValues[echelonMobilityTowed]] = true;
			if(["31","32","33","33","34","35","36","37","41","42","51","52","61","62"].indexOf(echelonMobilityTowed) > -1)mobility = true;
			
			//Civilian stuff	
			if(
				(symbolSet == '01' && functionid.substring(0,2)=='12')||
				(symbolSet == '05' && functionid.substring(0,2)=='12')||
				(symbolSet == '11')||
				(symbolSet == '30' && functionid.substring(0,2)=='14')||
				(symbolSet == '35' && functionid.substring(0,2)=='12')
			){civilian = true;}
		}else{ //This would be old letter based SIDCs
			

			var codingscheme 	= 	symbolSIDC.charAt(0)!=''?symbolSIDC.charAt(0):'-'
			var affiliation 	= 	symbolSIDC.charAt(1)!=''?symbolSIDC.charAt(1):'-'
			var battledimension = 	symbolSIDC.charAt(2)!=''?symbolSIDC.charAt(2):'-'
			var status 			= 	symbolSIDC.charAt(3)!=''?symbolSIDC.charAt(3):'-'
			var functionid 		= 	symbolSIDC.substr(4,6)!=''?symbolSIDC.substr(4,6):'------'
			var symbolmodifier11 = 	symbolSIDC.charAt(10)!=''?symbolSIDC.charAt(10):'-'
			var symbolmodifier12 = 	symbolSIDC.charAt(11)!=''?symbolSIDC.charAt(11):'-'
			var countrycode 	= 	symbolSIDC.substr(12,2)!=''?symbolSIDC.substr(12,2):'--'	
			var orderofbattle 	= 	symbolSIDC.charAt(14)!=''?symbolSIDC.charAt(14):'-'

			if(['H','S','J','K'].indexOf(affiliation) > -1)affiliationType = 'Hostile';
			if(['F','A','D','M'].indexOf(affiliation) > -1)affiliationType = 'Friend';
			if(['N','L'].indexOf(affiliation) > -1)affiliationType = 'Neutral';
			if(['P','U','G','W','O'].indexOf(affiliation) > -1)affiliationType = 'Unknown';
		
			if(['P','A'].indexOf(battledimension) > -1)dimensionType = 'Air';
			if(['G','Z','F'].indexOf(battledimension) > -1)dimensionType = 'Ground';
			if(['S'].indexOf(battledimension) > -1)dimensionType = 'Sea';
			if(['U'].indexOf(battledimension) > -1)dimensionType = 'Subsurface';
			
			//dimension is in Space
			if(battledimension == 'P'  && codingscheme != "O")spaceModifier = true;
			//codingscheme that are Activities
			if(codingscheme == "O" && (['V','O','R'].indexOf(battledimension)>-1))activityModifier = true;
			//symbolmodifier11 that are Installations
			if(symbolmodifier11 == "H")installation = true;
			//Planned/Anticipated/Suspect symbols should have a dashed outline
			if(this.frame && status == 'A' )anticipated = "8,12";
			if(this.frame && (['P','A','S','G','M'].indexOf(affiliation) > -1))anticipated = "4,4";

			//Should it have a Condition Bar
			if(status == 'C')condition = statusValues[2];
			if(status == 'D')condition = statusValues[3];
			if(status == 'X')condition = statusValues[4];
			if(status == 'F')condition = statusValues[5];
			//Is it part of Exercise Symbols
			if(['G','W','D','L','M','J','K'].indexOf(affiliation) > -1)context = "Exercise";
			//Framing of SO tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
			if(codingscheme == "O")dimensionType = 'Ground';
			//Framing of EMS tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
			if(codingscheme == "E")dimensionType = 'Ground';

			//First save the dimensionType and affiliationType before we modifies it... 
			var dimensionTypeUnModified = dimensionType;
			var affilationUnModified = affiliationType;
			
			//Joker and faker should have the shape of friendly
			if(affiliation == 'J')jokerFaker = 'Joker';
			if(affiliation == 'K')jokerFaker = 'Faker';
			if(jokerFaker){
				affiliationType = 'Friend';
			}
			//Ground Equipment should have the same geometry as sea Friend... 
			dimensionType = (codingscheme == 'S' && battledimension == 'G' && functionid.charAt(0)=='E')?'Sea':dimensionType;

			//Signal INTELLIGENCE Ground should have the same geometry as sea Friend... 
			dimensionType = (codingscheme == 'I' && battledimension == 'G')?'Sea':dimensionType;
			
			//Setting up Headquarters/task force/dummy
			if(['F','G','C','D'].indexOf(symbolmodifier11) > -1 || (symbolmodifier11 == 'H' && symbolmodifier12 == 'B'))hqETC.feintDummy = true;
			if(['A','B','C','D'].indexOf(symbolmodifier11) > -1)hqETC.headquarters = true;
			if(['E','B','G','D'].indexOf(symbolmodifier11) > -1)hqETC.taskForce = true;
			
			//Setting up Echelon/Mobility/Towed Array Amplifier
			if(symbolmodifier12=='A')echelonETC["Team/Crew"] = true;
			if(symbolmodifier12=='B')echelonETC["Squad"] = true;
			if(symbolmodifier12=='C')echelonETC["Section"] = true;
			if(symbolmodifier12=='D')echelonETC["Platoon/detachment"] = true;
			if(symbolmodifier12=='E')echelonETC["Company/battery/troop"] = true;
			if(symbolmodifier12=='F')echelonETC["Battalion/squadron"] = true;
			if(symbolmodifier12=='G')echelonETC["Regiment/group"] = true;
			if(symbolmodifier12=='H')echelonETC["Brigade"] = true;
			if(symbolmodifier12=='I')echelonETC["Division"] = true;
			if(symbolmodifier12=='J')echelonETC["Corps/MEF"] = true;
			if(symbolmodifier12=='K')echelonETC["Army"] = true;
			if(symbolmodifier12=='L' && symbolmodifier11!='N')echelonETC["Army Group/front"] = true;
			if(symbolmodifier12=='M')echelonETC["Region/Theater"] = true;
			if(symbolmodifier12=='N')echelonETC["Command"] = true;
			if(symbolmodifier11=='M'){
				mobility = true;			
				if(symbolmodifier12=='O')echelonETC["Wheeled limited cross country"] = true;
				if(symbolmodifier12=='P')echelonETC["Wheeled cross country"] = true;
				if(symbolmodifier12=='Q')echelonETC["Tracked"] = true;
				if(symbolmodifier12=='R')echelonETC["Wheeled and tracked combination"] = true;
				if(symbolmodifier12=='S')echelonETC["Towed"] = true;
				if(symbolmodifier12=='T')echelonETC["Rail"] = true;
				if(symbolmodifier12=='U')echelonETC["Over snow (prime mover)"] = true;
				if(symbolmodifier12=='V')echelonETC["Sled"] = true;
				if(symbolmodifier12=='W')echelonETC["Pack animals"] = true;
				if(symbolmodifier12=='Y')echelonETC["Barge"] = true;
				if(symbolmodifier12=='Z')echelonETC["Amphibious"] = true;
			}
			if(symbolmodifier11=='N'){
				mobility = true;
				if(symbolmodifier12=='S')echelonETC["Short towed array"] = true;
				if(symbolmodifier12=='L')echelonETC["Long towed Array"] = true;
			}

			//This is for 2525
			//Civilian stuff	
			if(
				(battledimension == 'A' && functionid.charAt(0)=='C')||
				(battledimension == 'G' && functionid.substring(0,3)=='EVC')||
				(battledimension == 'S' && functionid.charAt(0)=='X')
			){civilian = true}
			//Colors will be have to be fixed in symbolColors
			if(battledimension == 'Z'){
				if((['P','U','F','N','H','A','S','G','W'].indexOf(affiliation) > -1)) dimensionUnknown = true;
				//To get the correct geometry for a lot of stuff later we will have to modify the affliationType.
				if(['F','A'].indexOf(affiliation) > -1) dimensionType = 'Sea'
				//If battle dimension is unknown and the affiliation is D,L,M,J,K we should not have a symbol
				if(['D','L','M','J','K'].indexOf(affiliation) > -1) affiliationType = 'none';
			};	
		
		}

		baseGeometryType = dimensionType + affiliationType;

		return {
		"battledimension" 	: battledimension,//this is used for unframing, add parameter unframed instead. 
		"civilian"			: civilian,
		"dimensionTypeUnModified" : dimensionTypeUnModified,
		"dimensionType"		: dimensionType,
		"dimensionUnknown"	: dimensionUnknown,
		"affilationUnModified" : affilationUnModified,
		"affiliationType"	: affiliationType,
		"baseGeometryType"	: baseGeometryType,
		"spaceModifier"		: spaceModifier,
		"activityModifier"	: activityModifier,
		"context"			: context,
		"anticipated"		: anticipated,
		"installation" 		: installation,
		"condition"			: condition,
		"jokerFaker"		: jokerFaker,
		"hqETC"				: hqETC,
		"echelonETC"		: echelonETC,
		"mobility"			: mobility,
		"functionid" 		: functionid
		}
	}


//SymbolColors ###########################################################################
	this.symbolColors = function(){
	
		var symbol = this._symbol
		var fill = this.fill;
		var frame = this.frame;
		var Colors = {	
			fillColor : '',
			frameColor : '',
			iconColor : '',
			iconFillColor: '',
			none : '',
			black : '',
			white : '',
		}
		//Ok so we don't really use the opacity, but if we want to make it posible in the 
		//future to change opacity we have them here to play around with.
		var baseFillColorOpacity = 1;
		var baseFrameColorOpacity = 1;
		var baseIconOpacity = 1;
		var baseIconFillOpacity = 1;	
		
		//Set Light colors as default
		var baseFillColor = {
			'Hostile' 	: 'rgba(255, 128, 128,'+baseFillColorOpacity+') ',
			'Friend'	: 'rgba(128, 224, 255,'+baseFillColorOpacity+')',
			'Neutral' 	: 'rgba(170, 255, 170,'+baseFillColorOpacity+') ',
			'Unknown' 	: 'rgba(255, 255, 128,'+baseFillColorOpacity+')'
		}
		var civilianColor = 'rgba(255,161,255,'+baseFillColorOpacity+')'
		//Overwrite with Medium colors
		if(this.colorMode == "Medium"){
			baseFillColor = {
				'Hostile' 	: 'rgba(255,48,49,'+baseFillColorOpacity+') ',
				'Friend'	: 'rgba(0,168,220,'+baseFillColorOpacity+')',
				'Neutral' 	: 'rgba(0,226,110,'+baseFillColorOpacity+') ',
				'Unknown' 	: 'rgba(255,255,0,'+baseFillColorOpacity+')'
			}
			civilianColor = 'rgba(128,0,128,'+baseFillColorOpacity+')'
		}
		//Overwrite with Dark colors
		if(this.colorMode == "Dark"){
			baseFillColor = {
				'Hostile' 	: 'rgba(200,0,0,'+baseFillColorOpacity+') ',
				'Friend'	: 'rgba(0,107,140,'+baseFillColorOpacity+')',
				'Neutral' 	: 'rgba(0,160,0,'+baseFillColorOpacity+') ',
				'Unknown' 	: 'rgba(225,220,0,'+baseFillColorOpacity+')'
			}
			civilianColor = 'rgba(80,0,80,'+baseFillColorOpacity+')'
		}
		
		var baseFrameColor = {
			'Hostile' 	: 'rgba(255, 0, 0,'+baseFrameColorOpacity+') ',
			'Friend'	: 'rgba(0, 255, 255,'+baseFrameColorOpacity+') ',
			'Neutral' 	: 'rgba(0, 255, 0,'+baseFrameColorOpacity+') ',
			'Unknown' 	: 'rgba(255, 255, 0,'+baseFrameColorOpacity+') '
		}
		var baseIconColor = {
			'Hostile' 	:'rgba(255, 0, 0,'+baseIconOpacity+') ',
			'Friend' 	: 'rgba(0, 255, 255,'+baseIconOpacity+') ',
			'Neutral' 	:  'rgba(0, 255, 0,'+baseIconOpacity+') ',
			'Unknown' 	: 'rgba(255, 255, 0,'+baseIconOpacity+') '
		}
		var baseIconFillColor = baseFillColor;
		var baseColorBlack = {
			'Hostile' 	: 'black',
			'Friend'	: 'black',
			'Neutral' 	: 'black',
			'Unknown' 	: 'black'
		}
		var baseColorWhite = {
			'Hostile' 	: 'white',
			'Friend'	: 'white',
			'Neutral' 	: 'white',
			'Unknown' 	: 'white'
		}
		var baseColorOffWhite = {
			'Hostile' 	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')',
			'Friend'	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')',
			'Neutral' 	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')',
			'Unknown' 	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')'
		}
		var baseColorNone = {
			'Hostile' 	: 'none',
			'Friend'	: 'none',
			'Neutral' 	: 'none',
			'Unknown' 	: 'none'
		}

		//If it is a Civilian Symbol and civilian colors not are turned off, use civilian colors... 
		if(	this.civilianColors && symbol.civilian){
			baseFillColor['Friend'] = baseFillColor['Neutral'] = baseFillColor['Unknown'] = civilianColor;
			baseFrameColor['Friend'] = baseFrameColor['Neutral'] = baseFrameColor['Unknown'] = 'rgba(255,0,255,'+baseFrameColorOpacity+')';
			baseIconColor['Friend'] = baseIconColor['Neutral'] = baseIconColor['Unknown'] = 'rgba(255,0,255,'+baseIconOpacity+')';
		}
		//Joker and Faker
		if(symbol.jokerFaker){
			baseFillColor['Friend'] = baseFillColor['Hostile'];
			baseFrameColor['Friend'] = baseFrameColor['Hostile'];
			baseIconColor['Friend'] = baseIconColor['Hostile'];
		}
		
		//Force unframing of icons that should be unframed. 
		if((symbol.battledimension=='S')&&["O-----",'ED----','EP----','EV----','ZM----','ZN----','ZI----'].indexOf(symbol.functionid) > -1){
			frame = false;
		}
		if((symbol.battledimension=='U')&&[	"WM----","WMD---",
											"WMG---","WMGD--","WMGX--","WMGE--","WMGC--","WMGR--","WMGO--",
											"WMM---","WMMD--","WMMX--","WMME--","WMMC--","WMMR--","WMMO--",
											"WMF---","WMFD--","WMFX--","WMFE--","WMFC--","WMFR--","WMFO--",
											"WMO---","WMOD--","WMX---","WME---","WMA---","WMC---","WMR---","WMB---","WMBD--","WMN---",
											"WMS---","WMSX--","WMSD--",
											"WD----",
											"WDM---","WDMG--","WDMM--",
											"ND----","E-----","V-----","X-----",
											"NBS---","NBR---","NBW---","NM----","NA----"].indexOf(symbol.functionid) > -1){
			if(this.force2525){
				fill = false;
				if(symbol.functionid=="WD----"){
					fill = true;
				}
				if(["ND----","NBS---","NBR---","NBW---","NM----","NA----"].indexOf(symbol.functionid) > -1){
					fill = true;
					frame = false;
				}
			}else{
				frame = false;
				if(["E-----","V-----","X-----"].indexOf(symbol.functionid) > -1){
					fill = false;
					frame = false;
				}
			}
		}		

	
		Colors.none = baseColorNone
		Colors.black = baseColorBlack
		Colors.white = baseColorWhite

		//If the user has specified a mono color to use for all symbols.
		if(this.monoColor != ''){
			baseFrameColor = {
			'Hostile' 	: this.monoColor,
			'Friend'	: this.monoColor,
			'Neutral' 	: this.monoColor,
			'Unknown' 	: this.monoColor
			};
			baseColorBlack = baseFrameColor;
			baseFillColor = baseColorNone;
			Colors.black = baseFrameColor;
			Colors.white = baseColorNone;
			fill = false;
		}
		//Turn of the frame 
		if(frame||(!frame&&!this.icon)){
			Colors.frameColor =  baseColorBlack;
		}else{
			Colors.frameColor = baseColorNone;
		}
		//Filled or not. 
		if(fill){
								//I don't think you can have an unframed but filled icon so we turn off the fill as well, unless you have turned off the icon as well.
			Colors.fillColor = ((!frame&&!(!frame&&!this.icon)) ? baseColorNone : baseFillColor);
			Colors.iconColor = baseColorBlack;
								//Dirty override, we want colors in the icon if we just turn off the frame. This is a special fix for filled icons in 2525.
			Colors.iconFillColor = (!frame ? baseFillColor : baseColorOffWhite);
			Colors.white = baseColorOffWhite;
		}else{
			Colors.fillColor = baseColorNone;
								//Fix frame color if it should be turned off. 
			Colors.frameColor = (!frame ?  baseColorNone : baseFrameColor);

			Colors.iconColor = baseFrameColor;
			Colors.iconFillColor = baseColorNone;
									//If everything turned off, make everything black.
			if(!frame&&!fill&&!this.icon) {
				Colors.frameColor = baseColorBlack;
				Colors.fillColor = baseColorBlack;
			}
			
			//Another dirty override to get correct 2525 colors for special symbols with filled icons.
			Colors.black = baseFrameColor;
		}
		

		
		//Icon or not (shhhh, the icon is really there but we make it invisible...)
		if(!this.icon){
			Colors.iconColor = baseColorNone;
			Colors.iconFillColor = baseColorNone;
		}
		return Colors;
	}


//Sets the style of the frame depending of status ########################################
//And also add the capability status bar from 2525.
	this.symbolStatus = function(){

		var symbol = this._symbol;

		var Geometry = document.createElementNS(svgNS, "g");
			Geometry.setAttribute('id', 'StatusGeometry');
			Geometry.setAttribute("fill", "none");
			Geometry.setAttribute("stroke", this._symbolColors.white["Friend"]);		
			Geometry.setAttribute("stroke-width", (parseFloat(this.strokeWidth)+1));	
			Geometry.setAttribute("stroke-dasharray", symbol.anticipated );
		//Add the white dashed outline to the frame if we have a frame and the status is Anticipated	
		if(this.fill && this.frame && symbol.anticipated ){
			Geometry.appendChild(
				Geometry.ownerDocument.importNode(
					parseXML(
						'<g xmlns="'+svgNS+'">' + this._symbolBaseGeometry.symbols[symbol.baseGeometryType] + '</g>'
					), true
				)
			);
		}
		//Adds condition modifier for tactical symbols.
		if(symbol.condition){
			if(this.fill && this.monoColor == ""){
				var colors = {	"FullyCapable"	:'rgb(0,255,0)',
								"Damaged"		:'rgb(255,255,0)',
								"Destroyed"		:'rgb(255,0,0)',
								"FullToCapacity":'rgb(0, 180, 240)'}
								
				//If we have a mobility indicator we need to make space for it.
				var offset = (symbol.mobility)?25:5;
			
				var symbolBBox = this._symbolBaseGeometry.symbols.BBox[symbol.baseGeometryType];
				var symbolbottom = symbolBBox.y + symbolBBox.height;	
				if(!this.frame){
					symbolbottom = equipmentBottom[symbol.functionid]==undefined ? symbolbottom : equipmentBottom[symbol.functionid];
				}
				
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,(symbolbottom+offset+15));
				
				Geometry.appendChild(
					Geometry.ownerDocument.importNode(
						parseXML(
							'<g xmlns="'+svgNS+'">' + '<path  stroke-width="' + this.strokeWidth + '" fill="' + colors[symbol.condition] + '" stroke-dasharray="0" stroke="' + this.symbolColors().frameColor[symbol.affiliationType] + '" d="M' + symbolBBox.x + ',' + (symbolbottom+offset) + ' l' + symbolBBox.width + ',0 0,15 -' + symbolBBox.width + ',0 z" />' + '</g>'
						), true
					)
				);
			}else{
				var damagedDestroyed = '';
				if(symbol.condition == "Damaged" || symbol.condition == "Destroyed")damagedDestroyed += '<polyline points="150,20 50,180 " stroke-width="' + (this.strokeWidth * 2 ) + '" stroke="' + this._symbolColors.frameColor[symbol.affiliationType] + '" stroke-dasharray="0" />';
				if(symbol.condition == "Destroyed")damagedDestroyed += '<polyline points="50,20 150,180 " stroke-width="' + (this.strokeWidth * 2 ) + '" stroke="' + this.symbolColors().frameColor[symbol.affiliationType] + '" stroke-dasharray="0" />';
				
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(20));
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,(180));
				
				Geometry.appendChild(
					Geometry.ownerDocument.importNode(
						parseXML(
							'<g xmlns="'+svgNS+'">' + damagedDestroyed + '</g>'
						), true
					)
				);
			}
		}
		
		if(symbol.status == 'P' || symbol.status == '-'){
			//Nothing, but we keep this if we need to use it.
		
		}	
		return Geometry;
	}


//Base Geometry for the Symbol ###########################################################
	this.symbolBaseGeometry = function(printToElementID){

	var symbol = this._symbol;
		//Att size less than 10 set the geometry to a circle and reset it back again if we size up. 
		if(symbolBaseGeometry['temp']){
			symbolBaseGeometry[symbol.baseGeometryType] = symbolBaseGeometry['temp'];
			symbolBaseGeometry['temp'] = undefined;
			symbolBaseGeometry.BBox[symbol.baseGeometryType] = symbolBaseGeometry.BBox['temp'];
			symbolBaseGeometry.BBox['temp'] = undefined;
		}
		if(this.size < 10 || (!this.frame&&!this.icon)){
			symbolBaseGeometry['temp'] = symbolBaseGeometry[symbol.baseGeometryType]
			symbolBaseGeometry[symbol.baseGeometryType] = '<circle cx="100" cy="100" r="50" />';
			symbolBaseGeometry.BBox['temp'] = symbolBaseGeometry.BBox[symbol.baseGeometryType]
			symbolBaseGeometry.BBox[symbol.baseGeometryType] = { x: 50, y:50, width: 100 , height:100};
		}
		
		//The support for Svg boudningboxes for not drawn objects in webbrowsers sucks, and we need to know the size of our 
		//Geometries, so here is a way to print out all info we need as an object string.
		/*	if(printToElementID){
				listBBoxes = '';
				for (var property in symbolBaseGeometry) {
						var BaseGeometry = document.createElementNS(svgNS, "g");
						BaseGeometry.setAttribute('id', 'BaseGeometry');
							BaseGeometry.appendChild(
								BaseGeometry.ownerDocument.importNode(
									parseXML(
										'<g xmlns="'+svgNS+'">' + symbolBaseGeometry[property] + '</g>'
									), true
								)
							);
						var svgSymbol = document.createElementNS(svgNS, "svg");
						svgSymbol.setAttribute("width", 200);
						svgSymbol.setAttribute("height", 200);
						svgSymbol.setAttribute("version", 1.1);
						svgSymbol.setAttribute("baseProfile", "tiny");
						svgSymbol.setAttribute("xmlns", svgNS);
						svgSymbol.appendChild(BaseGeometry);
						
						var targetElement = document.getElementById(printToElementID);
						if(targetElement.hasChildNodes()){
							targetElement.removeChild(targetElement.childNodes[0])
						}
						targetElement.appendChild(svgSymbol);
						var BBox = document.getElementById("BaseGeometry").getBBox()
  						listBBoxes += '' + property + ': { x: ' + BBox.x+', y:' + BBox.y+ ', width: '+BBox.width+' , height:'+ BBox.height+'},';
					}
				document.getElementById(printToElementID).innerHTML=listBBoxes;
			}*/
			
		var extraModifier = '';
		//Space Modifiers
		if(symbol.spaceModifier){
			if(symbol.affiliationType == 'Friend'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M 100,30 C 90,30 80,35 68.65625,50 l 62.6875,0 C 120,35 110,30 100,30 "/>'}
			if(symbol.affiliationType == 'Hostile'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M67,50 L100,20 133,50 z "/>'}
			if(symbol.affiliationType == 'Neutral'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M45,50 l0,-20 110,0 0,20 z "/>'}
			if(symbol.affiliationType == 'Unknown'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M 100 22.5 C 85 22.5 70 31.669211 66 50 L 134 50 C 130 31.669204 115 22.5 100 22.5 z "/>'}

		}
		
		//TODO Add modifiers for activity. Defined in APP6C but unclear when to trigger... 

		if(symbol.activityModifier){
			if(symbol.affiliationType == 'Friend'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="m 160,135 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z m 135,-85 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z"/>'}
			if(symbol.affiliationType == 'Hostile'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M 100 28 L 89.40625 38.59375 L 100 49.21875 L 110.59375 38.59375 L 100 28 z M 38.6875 89.3125 L 28.0625 99.9375 L 38.6875 110.53125 L 49.28125 99.9375 L 38.6875 89.3125 z M 161.40625 89.40625 L 150.78125 100 L 161.40625 110.59375 L 172 100 L 161.40625 89.40625 z M 99.9375 150.71875 L 89.3125 161.3125 L 99.9375 171.9375 L 110.53125 161.3125 L 99.9375 150.71875 z"/>'}
			if(symbol.affiliationType == 'Neutral'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="m 140,140 15,0 0,15 -15,0 z m -80,0 0,15 -15,0 0,-15 z m 80,-80 0,-15 15,0 0,15 z m -80,0 -15,0 0,-15 15,0 z"/>'}
			if(symbol.affiliationType == 'Unknown'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M 107.96875 31.46875 L 92.03125 31.71875 L 92.03125 46.4375 L 107.71875 46.4375 L 107.96875 31.46875 z M 47.03125 92.5 L 31.09375 92.75 L 31.09375 107.5 L 46.78125 107.5 L 47.03125 92.5 z M 168.4375 92.5 L 152.5 92.75 L 152.5 107.5 L 168.1875 107.5 L 168.4375 92.5 z M 107.96875 153.5625 L 92.03125 153.8125 L 92.03125 168.53125 L 107.71875 168.53125 L 107.96875 153.5625 z"/>'}

		}		

		//The test geometry displays the bounding octagon in the symbols, good for debugging.
		var testGeometry = ''		
		//testGeometry = '<path d="m 120,60 0,80 m -40,-80 0,80 m -20,-20 80,0 m 0,-40 -80,0 M 100,50 135.35534,64.64466 150,100 135.35534,135.35534 100,150.00002 64.644661,135.35534 50,100 64.644661,64.64466 z" stroke="black" stroke-width="1" fill="none"></path>'

		//Keep track of how big our symbol is
		this.markerBBox = {	x1:Math.min(this.markerBBox.x1,symbolBaseGeometry.BBox[symbol.baseGeometryType].x),
							y1:Math.min(this.markerBBox.y1,symbolBaseGeometry.BBox[symbol.baseGeometryType].y),
							x2:Math.max(this.markerBBox.x2,symbolBaseGeometry.BBox[symbol.baseGeometryType].x + symbolBaseGeometry.BBox[symbol.baseGeometryType].width),
							y2:Math.max(this.markerBBox.y2,symbolBaseGeometry.BBox[symbol.baseGeometryType].y + symbolBaseGeometry.BBox[symbol.baseGeometryType].height)}
		
		
		var Geometry = document.createElementNS(svgNS, "g");
		Geometry.setAttribute('id', 'BaseGeometry');
		Geometry.setAttribute("fill", this._symbolColors.fillColor[symbol.affiliationType]);
		Geometry.setAttribute("stroke", this._symbolColors.frameColor[symbol.affiliationType]);		
		Geometry.setAttribute("stroke-width", (this.size>=10?this.strokeWidth:10));
		
		//Add a dashed outline to the frame if we are using monocolor and the status is set to A or the affiliation is P,A,S or G.	
		if((this.monoColor != '' || !this.fill) && symbol.anticipated )Geometry.setAttribute("stroke-dasharray", symbol.anticipated);
							
		Geometry.appendChild(
			Geometry.ownerDocument.importNode(
				parseXML(
					'<g xmlns="'+svgNS+'">' + symbolBaseGeometry[symbol.baseGeometryType] + extraModifier + testGeometry + '</g>'
				), true
			)
		);

		return {"geometry" : Geometry, "symbols" : symbolBaseGeometry};
	}


//Affiliation and dimension addons to base geometries ####################################
	this.symbolAffliationDimensionGeometry = function(){

		var symbol = this._symbol;
		
		var affliationDimensionGeometry = '';

		if(symbol.dimensionUnknown){
			affliationDimensionGeometry += '<text x="100" y="120" font-family="Arial" font-size="70" font-weight="bold" text-anchor="middle">?</text>';
		
		}
		//TODO: Refactorate this code!
		if(symbol.context == "Exercise"){
			if(!symbol.jokerFaker){
				var spacing = 10;
				if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
				affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">X</text>';
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20))
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))
			}
			if(symbol.jokerFaker == 'Joker'){	
				var spacing = 10;
				if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
				affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">J</text>';
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20))
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))		
			}
			if(symbol.jokerFaker == 'Faker'){	
				var spacing = 10;
				if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
				affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">K</text>';
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20))
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))
			}
		}		
	

		if(symbol.context == "Simulation"){
			var spacing = 10;
			if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
			affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">S</text>';
			this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20))
			this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))
		}
		var Geometry = document.createElementNS(svgNS, "g");
		Geometry.setAttribute('id', 'AffliationDimensionGeometry');
		Geometry.setAttribute("fill", this._symbolColors.frameColor[symbol.affiliationType]);	
		Geometry.appendChild(
			Geometry.ownerDocument.importNode(
				parseXML(
					'<g xmlns="'+svgNS+'">'  + affliationDimensionGeometry + '</g>'
				), true
			)
		);
		return Geometry;
	}


//Symbol Modifiers #######################################################################
	this.symbolModifier = function(){

		var modifier = '';
		var symbol = this._symbol;
		
		var symbolBBox = symbolBaseGeometry.BBox[symbol.baseGeometryType];
		
		if(symbol.hqETC.headquarters){
			//HEADQUARTERS
			//HQ staf should go down one octagon =100px from bottom of icon.
			var startY = 100;
			if(['AirFriend','AirNeutral','GroundFriend','GroundNeutral','SeaNeutral','SubsurfaceNeutral'].indexOf(symbol.baseGeometryType) > -1 )startY = symbolBBox.y + symbolBBox.height;
			if(symbol.baseGeometryType == 'SubsurfaceFriend')startY = symbolBBox.y;
			//If size is less than 10 we will draw it with a small circle.
			if(this.size < 10 )startY = 100;
			modifier += '<line x1="' + symbolBBox.x + '" y1="' + startY + '" x2="' + symbolBBox.x + '" y2="' + (symbolBBox.y+symbolBBox.height+100) + '" />';
			this.markerBBox.y2 = Math.max(this.markerBBox.y2,(symbolBBox.y+symbolBBox.height+100));	
		}
		
		if(symbol.hqETC.taskForce){
			//TASK FORCE
			modifier += '<polyline fill="none" points="55,' + (symbolBBox.y) + ' 55,' + (symbolBBox.y-40) + ' 145,' + (symbolBBox.y-40) +' 145,'+(symbolBBox.y)+'" />';
			this.markerBBox.y1 = Math.min(this.markerBBox.y1,symbolBBox.y-40);
		}
		//TODO fix stupid use of installation variable here, it's used in the unit size modifiers but can be done in a much more elegant way.
		var installation = 0;
		if(symbol.installation){
			//INSTALLATION
			var gapFiller = 0;
			if(['AirHostile','GroundHostile','SeaHostile'].indexOf(symbol.baseGeometryType) > -1) gapFiller = 14;
			if(['AirUnknown','GroundUnknown','SeaUnknown','AirFriend','SeaFriend'].indexOf(symbol.baseGeometryType) > -1) gapFiller = 3;
			modifier += '<polyline points="85,' + (symbolBBox.y+gapFiller) + ' 85,' + (symbolBBox.y-10) + ' 115,' + (symbolBBox.y-10) +' 115,'+(symbolBBox.y+gapFiller)+'" />';
			installation = 15;
			this.markerBBox.y1 = Math.min(this.markerBBox.y1,symbolBBox.y-10);
		}
					
		if(symbol.hqETC.feintDummy){
			//FEINT DUMMY
			modifier += '<polyline fill="none" stroke-dasharray="8,8" points="'+symbolBBox.x+','+symbolBBox.y+' 100,-28 '+(symbolBBox.x+symbolBBox.width)+','+symbolBBox.y+'" />';	
			this.markerBBox.y1 = Math.min(this.markerBBox.y1,-28);
		}

		//Unit Size
			if(symbol.echelonETC["Team/Crew"]){
				modifier += translate(0,-installation,'<circle cx="100" cy="'+(symbolBBox.y-25)+'" r="15" fill="none"  /><line x1="80" y1="'+(symbolBBox.y-15)+'" x2="120" y2="'+(symbolBBox.y-35)+'" stroke-width="' + (this.strokeWidth*2/3) + '"  />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Squad"]){
				//The standard says that dots should be at least 0.15L in diameter, I think it's too big but follow the standard... 
				modifier += translate(0,-installation,'<circle cx="100" cy="'+(symbolBBox.y-20)+'" r="7.5" stroke="none"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-20-7.5-installation));
			}
			if(symbol.echelonETC["Section"]){
				modifier += translate(0,-installation,'<circle cx="115" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/><circle cx="85" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-20-7.5-installation));
			}
			if(symbol.echelonETC["Platoon/detachment"]){
				modifier += translate(0,-installation,'<circle cx="100" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/><circle cx="70" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/><circle cx="130" cy="'+(symbolBBox.y-20)+'" r="7.5" stroke="none"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-20-7.5-installation));
			}
			if(symbol.echelonETC["Company/battery/troop"]){
				modifier += translate(0,-installation+10,'<line x1="100" y1="'+(symbolBBox.y-15)+'" x2="100" y2="'+(symbolBBox.y-40)+'" stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Battalion/squadron"]){
				modifier += translate(0,-installation+10,'<line x1="90" y1="'+(symbolBBox.y-15)+'" x2="90" y2="'+(symbolBBox.y-40)+'"  stroke-width="' + (this.strokeWidth*5/3) + '"/><line x1="110" y1="'+(symbolBBox.y-15)+'" x2="110" y2="'+(symbolBBox.y-40)+'"  stroke-width="' + (this.strokeWidth*5/3) + '"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Regiment/group"]){
				modifier += translate(0,-installation+10,'<line x1="100" y1="'+(symbolBBox.y-15)+'" x2="100" y2="'+(symbolBBox.y-40)+'"  stroke-width="' + (this.strokeWidth*5/3) + '"/><line x1="120" y1="'+(symbolBBox.y-15)+'" x2="120" y2="'+(symbolBBox.y-40)+'" stroke-width="' + (this.strokeWidth*5/3) + '"/><line x1="80" y1="'+(symbolBBox.y-15)+'" x2="80" y2="'+(symbolBBox.y-40)+'" stroke-width="' + (this.strokeWidth*5/3) + '"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Brigade"]){
				modifier += translate(0,-installation+10,'<path d="M87.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
			}
			if(symbol.echelonETC["Division"]){
				modifier += translate(0,-installation+10,'<path d="M70,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M105,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,70);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,130);
			}
			if(symbol.echelonETC["Corps/MEF"]){
				modifier += translate(0,-installation+10,'<path d="M52.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M87.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M122.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,52.5);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,147.5);
			}
			if(symbol.echelonETC["Army"]){
				modifier += translate(0,-installation+10,'<path d="M35,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M70,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M105,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M140,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1=Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,35);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,165);
			}
			if(symbol.echelonETC["Army Group/front"]){
				modifier += translate(0,-installation+10,'<path d="M17.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M52.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M87.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M122.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25       M157.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    "  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,17.5);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,182.5);
			}
			if(symbol.echelonETC["Region/Theater"]){
				modifier += translate(0,-installation+10,'<path d="M0,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M35,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M70,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M105,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M140,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25     M175,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,0);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,200);
			}
			if(symbol.echelonETC["Command"]){
				modifier += translate(0,-installation+10,'<path d="M70,'+ (symbolBBox.y-27.5) +' l25,0 m-12.5,12.5 l0,-25   M105,'+ (symbolBBox.y-27.5) +' l25,0 m-12.5,12.5 l0,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,70);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,130);
			}
			
			//This is for movability indicators.
			if(symbol.mobility){
				var symbolbottom = symbolBBox.y + symbolBBox.height;
				//TODO fix this for 2525D
				if(!this.frame){
					symbolbottom = equipmentBottom[symbol.functionid]==undefined ? symbolbottom : equipmentBottom[symbol.functionid];
				}
				
				modifier += '<g transform="translate(0,' + symbolbottom + ')" stroke="' + this._symbolColors.iconColor[symbol.affiliationType] + '">'
				if(symbol.echelonETC["Wheeled limited cross country"]){
					modifier += '<path d="M 50,1 l 100,0"  fill="none" /><circle cx="55" cy="6" r="5" fill="none"  /><circle cx="145" cy="6" r="5" fill="none"  />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+6+5);
				}
				if(symbol.echelonETC["Wheeled cross country"]){
					modifier += '<path d="M 50,1 l 100,0"  fill="none" /><circle cx="55" cy="6" r="5" fill="none"  /><circle cx="145" cy="6" r="5" fill="none"  /><circle cx="100" cy="6" r="5" fill="none"  />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+6+5);
				}
				if(symbol.echelonETC["Tracked"]){
					modifier += '<path d="M 50,1 l 100,0 c10,0 10,10 0,10 l -100,0 c-10,0 -10,-10 0,-10"  fill="none" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Wheeled and tracked combination"]){
					modifier += '<circle cx="55" cy="6" r="5" fill="none"  /><path d="M 80,1 l 70,0 c10,0 10,10 0,10 l -70,0 c-10,0 -10,-10 0,-10"  fill="none" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+6+5);
				}
				if(symbol.echelonETC["Towed"]){
					modifier += '<path d="M 60,1 l 80,0"  fill="none" /><circle cx="55" cy="1" r="5" fill="none"  /><circle cx="145" cy="1" r="5" fill="none"  />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+1+5);
				}
				if(symbol.echelonETC["Rail"]){
					modifier += '<path d="M 50,1 l 100,0"  fill="none" /><circle cx="55" cy="6" r="5" fill="none"  /><circle cx="70" cy="6" r="5" fill="none"  /><circle cx="130" cy="6" r="5" fill="none"  /><circle cx="145" cy="6" r="5" fill="none"  />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+6+5);
				}
				if(symbol.echelonETC["Over snow (prime mover)"]){
					modifier += '<path d="M 50,-9 l10,10 90,0"  fill="none" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+9);
				}
				if(symbol.echelonETC["Sled"]){
					modifier += '<path d="M 150,-9  c10,0 10,10 0,10 l -100,0 c-10,0 -10,-10 0,-10"  fill="none" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Pack animals"]){
					modifier += '<path d="M 80,20 l 10,-20 10,20 10,-20 10,20 "  fill="none" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+20);
				}
				if(symbol.echelonETC["Barge"]){
					modifier += '<path d="M 50,1 l 100,0 c0,10 -100,10 -100,0"  fill="none" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Amphibious"]){
					modifier += '<path d="M 65,10 c 0,-10 10,-10 10,0 0,10 10,10 10,0   0,-10 10,-10 10,0 0,10 10,10 10,0   0,-10 10,-10 10,0 0,10 10,10 10,0   0,-10 10,-10 10,0  "  fill="none" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+20);
				}
				if(symbol.echelonETC["Short towed array"]){
					modifier += '<path d="M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M100,0 l5,5 -5,5 -5,-5 z" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Long towed Array"]){
					modifier += '<path d="M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M105,0 l-10,0 0,10 10,0 z M75,0 l5,5 -5,5 -5,-5 z  M125,0 l5,5 -5,5 -5,-5 z" />'
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				modifier += '</g>';
			}
			if(this.sigint){
				var symbolbottom = symbolBBox.y + symbolBBox.height;
				modifier += '<text font-family="Arial" font-weight="bold" stroke="none" text-anchor="middle" x="100" y="'+ (30 + symbolbottom )+'" font-size="35" >'+this.sigint+'</text>'
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+30);
			}
			
		var Geometry = document.createElementNS(svgNS, "g");
		Geometry.setAttribute('id', 'SymbolModifier');
		Geometry.setAttribute("fill", this._symbolColors.frameColor[symbol.affiliationType]);
		Geometry.setAttribute("stroke", this._symbolColors.frameColor[symbol.affiliationType]);		
		Geometry.setAttribute("stroke-width", this.strokeWidth);	
//		Geometry.setAttribute("stroke-dasharray", this.symbolStatus());
		Geometry.appendChild(
			Geometry.ownerDocument.importNode(
				parseXML(
					'<g xmlns="'+svgNS+'">' + modifier + '</g>'
				), true
			)
		);
		return Geometry;
	}
	

//Icons ##################################################################################
	this.symbolIcon = function(element){

	//remove element after testing... 		
		
		var symbolColors = this._symbolColors;
		var symbol = this._symbol;

		var icons = [];
		//Main Symbol
		var sID = [];
		//Modifier 1
		var sIDm1 = [];
		//Modifier 2
		var sIDm2 = [];
		//Symbol Library =================================================================
		//The symbol library is modeled after APP6(C). This should make it possible to 
		//reuse the code in the future. However there are some symbols used in the SIDC 
		//in 2525C and APP6(B) that you can't build with the icons defined in APP6(C), 
		//all extra icons that were added are indented one extra level.
		//And there area a lot of symbols in APP6(C) that not are used they are listed and
		//marked TODO or just left as an empty string.
		
	//if(symbol.codingscheme == "S"){	
		// SPACE =========================================================================
			icons['SPACE.ICON.FULLFRAME.SATELLITE'] = '<rect x="65" y="70" width="20" height="55" stroke="none"/><rect x="90" y="75" width="20" height="45" stroke="none"/><rect x="115" y="70" width="20" height="55" stroke="none"/><path fill="none" d="M80,135 c10,-10 30,-10 40,0 M100,127 L100,100 M70,100 L130,100" />';
			icons['SPACE.ICON.FULLFRAME.CREWED SPACE VEHICLE'] = '<path stroke="none" d="m 100.25,62.40625 c -1.845174,-0.0053 -4.302906,3.67518 -4.5,5.4375 -2.53105,11.27685 -3.42928,23.062008 -6.1875,33.4375 -2.91893,6.7317 -6.79222,8.31963 -9.90625,12.09375 -2.9653,3.59387 -8.46875,10.375 -8.46875,10.375 l 0,6.4375 c 0,0 5.91213,0.94934 8.90625,1.15625 3.00114,0.2074 8.6875,0.0937 8.6875,0.0937 l 0.34375,4.25 4.25,0.15625 0.1875,3.09375 5.8125,0 0.90625,6.46875 0.875,-6.4375 5.84375,0 0.1875,-3.09375 4.25,-0.15625 0.34375,-4.25 c 0,0 5.65511,0.11365 8.65625,-0.0937 2.99412,-0.20691 8.9375,-1.15625 8.9375,-1.15625 l 0,-6.4375 c 0,0 -5.5347,-6.74988 -8.5,-10.34375 -3.11403,-3.77412 -6.95607,-5.3933 -9.875,-12.125 -2.75822,-10.37549 -3.6877,-22.16065 -6.21875,-33.4375 -0.27679,-2.862714 -2.68608,-5.463411 -4.53125,-5.46875 z" />';
			icons['SPACE.ICON.FULLFRAME.SPACE STATION'] = '<path d="m 103.05285,97.425623 c -12.431045,0.283567 -25.660897,0.141164 -36.733694,6.654857 -4.087626,2.1038 -8.503974,5.88034 -7.81527,10.97915 0.162154,3.68449 0.324308,7.36899 0.486462,11.05349 6.235296,7.80892 16.594083,10.35394 26.032728,11.75016 14.009202,1.78839 28.518974,1.15663 42.062494,-3.0286 5.24945,-1.70697 10.38525,-4.25475 14.21728,-8.31531 0.25256,-5.10392 -0.33459,-10.3614 0.65243,-15.32567 -1.23672,-4.30522 -5.9142,-6.38019 -9.65879,-8.19508 -9.19469,-3.976679 -19.29318,-5.373984 -29.24364,-5.572997 z m -3.187501,9.593747 c 10.105661,-0.16111 20.495121,1.93646 29.093751,7.4375 -12.9594,8.39878 -29.561277,9.74296 -44.323417,6.12118 -4.899607,-1.28416 -9.676319,-3.29367 -13.707835,-6.40243 8.786222,-4.94037 18.947817,-6.87905 28.937501,-7.15625 z" fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : symbolColors.none[symbol.affiliationType] ) +'" /><path fill="none" stroke="'+ symbolColors.black[symbol.affiliationType] +'" d="m 96.924972,107.00822 c 0.702355,-8.147318 1.40471,-16.294637 2.107065,-24.441955 M 89.33954,121.75767 c 3.090361,-13.15745 6.180723,-26.314898 9.271084,-39.472347 4.869666,12.736036 9.739326,25.472067 14.608986,38.208107 m 27.78905,-5.27205 c -0.0835,3.88149 -0.16697,7.76298 -0.25046,11.64447 M 58.607507,113.34104 c 0.166973,4.50827 0.333947,9.01653 0.50092,13.5248 m -0.483907,-1.23947 c 3.544101,6.32645 11.039439,8.5784 17.55808,10.47407 16.387937,4.05097 33.90485,3.87094 50.1393,-0.80948 5.52719,-1.77621 11.759,-4.30976 14.67881,-9.66459 m 0.47489,-12.97517 c -0.4984,5.42269 -6.07059,8.13892 -10.50352,10.02684 -15.41405,5.72673 -32.392567,6.11304 -48.505097,3.62676 -7.903582,-1.37711 -16.274711,-3.43816 -22.184361,-9.205 -3.613065,-3.9082 -0.852911,-9.62926 3.388151,-11.68266 8.287462,-5.24975 18.327732,-6.61442 27.912301,-7.52056 13.519516,-0.962593 27.515366,0.0024 40.197426,5.08486 4.1634,1.83475 9.30049,4.55159 9.6951,9.66976 z m -13.26421,1.5919 c -8.24079,-5.90141 -18.80298,-6.79547 -28.636002,-6.95655 -9.471196,0.0776 -19.489566,1.20884 -27.616223,6.44685 l -0.643519,0.5097 m 58.939284,-2.58133 c -0.80638,4.77745 -6.06227,6.43309 -10.04114,7.82563 -13.15806,3.67802 -27.396162,3.67573 -40.540964,-0.0497 -3.754818,-1.20128 -8.077905,-2.81413 -9.771554,-6.6996 -0.716487,-4.91556 4.98161,-7.14767 8.735577,-8.51676 12.74132,-4.0029 26.599591,-3.99075 39.542741,-0.95536 4.4496,1.22635 9.78352,2.81569 11.91484,7.30577 l 0.1202,0.54074 0.0403,0.54927 z" /><path fill="'+ symbolColors.black[symbol.affiliationType] +'" stroke="none" d="M 75.151971,93.101588 C 88.871304,86.967689 102.59064,80.83379 116.30997,74.699891 c 2.34118,1.311062 4.68237,2.622125 7.02355,3.933187 -13.67251,5.993428 -27.345019,11.986857 -41.017529,17.980285 -2.388007,-1.170592 -4.776013,-2.341183 -7.16402,-3.511775 z"/>';
			icons['SPACE.ICON.SPACE LAUNCH VEHICLE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SLV</text>';
				icons['SPACE.ICON.MILITARY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MIL</text>';
				icons['SPACE.ICON.SPACE VEHICLE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SV</text>';
				icons['SPACE.ICON.RE-ENTRY VEHICLE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >RV</text>';
				icons['SPACE.PLANET LANDER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PL</text>';
				icons['SPACE.ICON.ORBITER SHUTTLE'] = '<path d="m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"  />';
				icons['SPACE.ICON.CAPSULE'] = '<path d="m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"  />';
				icons['SPACE.ICON.SATELLITE, GENERAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SAT</text>';
				icons['SPACE.ICON.SATELLITE'] = '<path d="m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"  />';
				icons['SPACE.ICON.ANTISATELLITE WEAPON'] = '<path d="m 100,110 0,9 m 0,-34 0,5 m 0,-9 -2,4 4,0 z m -10,9 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"  />';
				icons['SPACE.ICON.ASTRONOMICAL SATELLITE'] = '<path d="m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"  />';
				icons['SPACE.ICON.BIOSATELLITE'] = '<path d="m 100,89 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"  />';
				icons['SPACE.ICON.COMMUNICATIONS SATELLITE'] = '<path d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><path fill="none" d="m 100,90 0,9 M 75,81 c 16,12 34,12 50,0"  />';
				icons['SPACE.ICON.EARTH OBSERVATION SATELLITE'] = '<path d="m 107,113 c 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"/><path fill="none" d="m 88,107 c 8,-9 16,-9 24,0"  />';
				icons['SPACE.ICON.MINIATURIZED SATELLITE'] = '<path d="m 91.125,92 0,16 17.75,0 0,-16 z m 22.1875,0 0,16 22.1875,0 0,-16 z m -26.625,0 -22.1875,0 0,16 22.1875,0 z m 0,8 4.4375,0 m 17.75,0 4.4375,0"/><path fill="none" d="m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"  />';
				icons['SPACE.ICON.NAVIGATIONAL SATELLITE'] = '<path d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><path fill="none" d="m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"  />';
				icons['SPACE.ICON.RECONNAISSANCE SATELLITE'] = '<path d="m 106,100 9,20 m -21,-20 -9,20 m 17,-20 3,20 m -7,-20 -3,20 m 15,-30 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"  />';
				icons['SPACE.ICON.SPACE STATION'] = '<path d="m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3125,7.5625 C 83.320458,88.202625 72.5,93.527913 72.5,100 c 0,6.90356 12.312169,12.5 27.5,12.5 15.18783,0 27.5,-5.59644 27.5,-12.5 0,-6.520004 -10.98528,-11.86269 -25,-12.4375 l 0,5.59375 c 9.85386,0.380275 17.5,3.212883 17.5,6.625 0,3.6706 -8.85579,6.65625 -19.78125,6.65625 -10.925462,0 -19.78125,-2.98565 -19.78125,-6.65625 0,-3.361079 7.422101,-6.147668 17.0625,-6.59375 l 0,-5.625 c -0.102999,0.0042 -0.209832,-0.0047 -0.3125,0 z"  />';
				icons['SPACE.ICON.TETHERED SATELLITE'] = '<path d="m 120,87 -20,12 m 33,-12 c 0,3.589851 -2.91015,6.5 -6.5,6.5 -3.58985,0 -6.5,-2.910149 -6.5,-6.5 0,-3.589851 2.91015,-6.5 6.5,-6.5 3.58985,0 6.5,2.910149 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/>';
				icons['SPACE.ICON.WEATHER SATELLITE'] = '<path d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><text stroke="none" text-anchor="middle" x="100" y="100" font-size="25" >WX</text>';
				icons['SPACE.ICON.CIVILIAN'] = '<text fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
				icons['SPACE.ICON.CIVILIAN ORBITER SHUTTLE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"  />';
				icons['SPACE.ICON.CIVILIAN CAPSULE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"  />';
				icons['SPACE.ICON.CIVILIAN SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"  />';
				icons['SPACE.ICON.CIVILIAN ASTRONOMICAL SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"  />';
				icons['SPACE.ICON.CIVILIAN BIOSATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 100,89 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"  />';
				icons['SPACE.ICON.CIVILIAN COMMUNICATIONS SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><path fill="none" d="m 100,90 0,9 M 75,81 c 16,12 34,12 50,0"  />';
				icons['SPACE.ICON.CIVILIAN EARTH OBSERVATION SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 107,113 c 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"/><path fill="none" d="m 88,107 c 8,-9 16,-9 24,0"  />';
				icons['SPACE.ICON.CIVILIAN MINIATURIZED SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 91.125,92 0,16 17.75,0 0,-16 z m 22.1875,0 0,16 22.1875,0 0,-16 z m -26.625,0 -22.1875,0 0,16 22.1875,0 z m 0,8 4.4375,0 m 17.75,0 4.4375,0"/><path fill="none" d="m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"  />';
				icons['SPACE.ICON.CIVILIAN NAVIGATIONAL SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><path fill="none" d="m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"  />';
				icons['SPACE.ICON.CIVILIAN SPACE STATION'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3125,7.5625 C 83.320458,88.202625 72.5,93.527913 72.5,100 c 0,6.90356 12.312169,12.5 27.5,12.5 15.18783,0 27.5,-5.59644 27.5,-12.5 0,-6.520004 -10.98528,-11.86269 -25,-12.4375 l 0,5.59375 c 9.85386,0.380275 17.5,3.212883 17.5,6.625 0,3.6706 -8.85579,6.65625 -19.78125,6.65625 -10.925462,0 -19.78125,-2.98565 -19.78125,-6.65625 0,-3.361079 7.422101,-6.147668 17.0625,-6.59375 l 0,-5.625 c -0.102999,0.0042 -0.209832,-0.0047 -0.3125,0 z"  />';
				icons['SPACE.ICON.CIVILIAN TETHERED SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 120,87 -20,12 m 33,-12 c 0,3.589851 -2.91015,6.5 -6.5,6.5 -3.58985,0 -6.5,-2.910149 -6.5,-6.5 0,-3.589851 2.91015,-6.5 6.5,-6.5 3.58985,0 6.5,2.910149 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/>';
				icons['SPACE.ICON.CIVILIAN WEATHER SATELLITE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><text stroke="none" text-anchor="middle" x="100" y="100" font-size="25" >WX</text>';
				icons['SPACE.ICON.MANUAL TRACK'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MAN</text>';
		
				icons['SPACE.M1.LOW EARTH ORBIT (LEO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LEO</text>';
				icons['SPACE.M1.MEDIUM EARTH ORBIT (MEO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MEO</text>';
				icons['SPACE.M1.HIGH EARTH ORBIT (HEO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >HEO</text>';
				icons['SPACE.M1.GEOSYNCHRONOUS ORBIT (GSO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GSO</text>'
				icons['SPACE.M1.GEOSTATIONARY ORBIT (GO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GO</text>'
				icons['SPACE.M1.MOLNIYA ORBIT (MO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MO</text>'

				icons['SPACE.M2.OPTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >O</text>';
				icons['SPACE.M2.INFRARED'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >IR</text>';
				icons['SPACE.M2.RADAR'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >R</text>';
				icons['SPACE.M2.SIGNALS INTELLIGENCE (SIGINT)'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >SI</text>';

//Space Missile
		icons['SPACE.MISSILE.ICON'] = '<path d="M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z" ' + (this.force2525 ? ('fill="' + (this.frame?symbolColors.fillColor['Unknown']:symbolColors.iconFillColor['Unknown']) + '"'):'') + ' />';

		icons['SPACE.MISSILE.M1.BALLISTIC'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >B</text>';
		icons['SPACE.MISSILE.M1.SPACE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="68" dy="0">S</tspan><tspan x="68" dy="30">P</tspan></text>';
		icons['SPACE.MISSILE.M1.INTERCEPTOR'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >I</text>';

		icons['SPACE.MISSILE.M2.SHORT RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">R</tspan></text>';
		icons['SPACE.MISSILE.M2.MEDIUM RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">M</tspan><tspan x="132" dy="30">R</tspan></text>';
		icons['SPACE.MISSILE.M2.INTERMEDIATE RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">I</tspan><tspan x="132" dy="30">R</tspan></text>';
		icons['SPACE.MISSILE.M2.LONG RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">L</tspan><tspan x="132" dy="30">R</tspan></text>';
		icons['SPACE.MISSILE.M2.INTERCONTINENTAL'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">I</tspan><tspan x="132" dy="30">C</tspan></text>';
		icons['SPACE.MISSILE.M2.ARROW'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">A</tspan><tspan x="132" dy="30">R</tspan></text>';
		icons['SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >G</text>';
		icons['SPACE.MISSILE.M2.PATRIOT'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >P</text>';
		icons['SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">T</tspan></text>';
		icons['SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">3</tspan></text>';
		icons['SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >T</text>';
		icons['SPACE.MISSILE.M2.SPACE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">P</tspan></text>';




		// AIR ===========================================================================
		icons['AIR.ICON.MILITARY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MIL</text>';
		icons['AIR.ICON.CIVILIAN'] = '<text fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
		icons['AIR.ICON.MILITARY FIXED WING'] = '<path d="M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z" />';
		icons['AIR.ICON.CIVILIAN FIXED WING'] = '<path fill="none" d="M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z" />';
			icons['AIR.ICON.FULLFRAME.CIVILIAN FIXED WING'] = '<path  stroke="' + symbolColors.black[symbol.affiliationType] + '" d="M62,80 l30,0 0,-10 16,0 0,10 30,0 0,15 -30,0 0,25 10,0 0,5 -36,0 0,-5 10,0 0,-25 -30,0 Z M95,70 l0,-5 10,0 0,5" fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '"/>';
		icons['AIR.ICON.MILITARY ROTARY WING'] = '<path d="M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z" />';
		icons['AIR.ICON.CIVILIAN ROTARY WING'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '" d="M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z" />';
			icons['AIR.ICON.FULLFRAME.CIVILIAN ROTARY WING'] = '<path  stroke="' + symbolColors.black[symbol.affiliationType] + '" d="M80,70 l10,10 M120,110 l-10,-10 M80,110 l10,-10 M120,70 l-10,10 M100,115 l0,20 M95,135 l10,0" fill="none"/><ellipse stroke="' + symbolColors.black[symbol.affiliationType] + '" transform="translate(100 90)" rx="13" ry="25" fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') +'"/>';
		icons['AIR.ICON.MILITARY BALLOON'] = '<circle cx="100" cy="95" r="15"/><path d="M95,110 l0,10 10,0 0,-10 z" />';
			icons['AIR.ICON.FULLFRAME.MILITARY BALLOON'] = '<path   d="M90,115 l20,0 0,20 -20,0 z" /><circle  cx="100" cy="90" r="35"  />';
		icons['AIR.ICON.CIVILIAN BALLOON'] = '<circle fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"   cx="100" cy="95" r="15"/><path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"   d="M95,110 l0,10 10,0 0,-10 z" />';
			icons['AIR.ICON.FULLFRAME.CIVILIAN BALLOON'] = '<path  fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '" d="M90,125 l20,0 0,10 -20,0 z" /><circle fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '" cx="100" cy="90" r="35"  />';
		icons['AIR.ICON.MILITARY AIRSHIP'] = '<path   d="m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.17374,10 c 0,6.11171 -12.1661,11.06623 -27.17374,11.06623 -15.00764,0 -27.173737,-4.95452 -27.173737,-11.06623 0,-6.111709 12.166097,-11.066227 27.173737,-11.066227 15.00764,0 27.17374,4.954518 27.17374,11.066227 z"/>';
		icons['AIR.ICON.CIVILIAN AIRSHIP'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"   d="m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.17374,10 c 0,6.11171 -12.1661,11.06623 -27.17374,11.06623 -15.00764,0 -27.173737,-4.95452 -27.173737,-11.06623 0,-6.111709 12.166097,-11.066227 27.173737,-11.066227 15.00764,0 27.17374,4.954518 27.17374,11.066227 z"/>';
		icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] = '<path d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z" stroke="none"  />';
		icons['AIR.ICON.AIR DECOY'] = '<path d="M65,95 l15,-15 0,30 Z M92.5,95 l15,-15 0,30 Z M120,95 l15,-15 0,30 Z M65,120 l70,0 0,-5 -70,0 Z" />';
					icons['SUB.ICON.AIR DECOY DSymbol'] = '<path d="M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z "/>';
		icons['AIR.ICON.MEDICAL EVACUATION'] = '<path d="M93,83 l14,0 0,10 10,0 0,14 -10,0 0,10 -14,0 0,-10 -10,0 0,-14 10,0 Z"  />';
		icons['AIR.ICON.ATTACK/STRIKE'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >A</text>';
		icons['AIR.ICON.BOMBER'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >B</text>';
		icons['AIR.ICON.CARGO'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >C</text>';
			icons['AIR.ICON.ESCORT'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >E</text>';
		icons['AIR.ICON.FIGHTER'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >F</text>';
			icons['AIR.ICON.FIGHTER INTERCEPTOR'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >I</text>';
		icons['AIR.ICON.JAMMER / ELECTRONIC COUNTER-MEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >J</text>';
		icons['AIR.ICON.TANKER'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >K</text>';
		icons['AIR.ICON.PATROL'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >P</text>';
		icons['AIR.ICON.RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >R</text>';
			icons['AIR.ICON.2525 PHOTOGRAPHIC'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >P</text>';
		icons['AIR.ICON.TRAINER'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >T</text>';
		icons['AIR.ICON.UTILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >U</text>';
		icons['AIR.ICON.VSTOL'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >' + ((this.force2525&&isNaN(this.SIDC)) ? 'L' : 'V' )+ '</text>';
		icons['AIR.ICON.AIRBORNE COMMAND POST'] =  ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >D</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ACP</text>');
		icons['AIR.ICON.AIRBORNE EARLY WARNING'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >W</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AEW</text>');
		icons['AIR.ICON.ANTISURFACE WARFARE'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >N</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="29" >ASUW</text>');
		icons['AIR.ICON.ANTISUBMARINE WARFARE'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >S</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ASW</text>');
		icons['AIR.ICON.COMMUNICATIONS'] = ((this.force2525&&isNaN(this.SIDC))? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >Y</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >COM</text>');
		icons['AIR.ICON.COMBAT SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >CSAR</text>';
		icons['AIR.ICON.ELECTRONIC SUPPORT MEASURES'] =  (this.force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >Z</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ESM</text>');
		icons['AIR.ICON.GOVERNMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GOV</text>';
		icons['AIR.ICON.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MCM</text>';
			icons['AIR.ICON.PERSONNEL RECOVERY'] = (this.force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >H</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PRO</text>');
		icons['AIR.ICON.PASSENGER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PX</text>';
		icons['AIR.ICON.SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SAR</text>';
		icons['AIR.ICON.SUPRESSION OF ENEMY AIR DEFENCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >SEAD</text>';
		icons['AIR.ICON.SPECIAL OPERATIONS FORCES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SOF</text>';
		icons['AIR.ICON.ULTRA LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >UL</text>';
		icons['AIR.ICON.VIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >VIP</text>';
			icons['AIR.ICON.FULLFRAME.MILITARY FIXED WING'] = '<path d="m 99.15625,58.1875 c -2.988505,0.764206 -2.46875,5.78125 -2.46875,5.78125 l -0.34375,16 -37.1875,36.53125 1.3125,4.5625 L 96.6875,96.59375 97,128.5625 l -8.46875,8.15625 0,4.5625 9.34375,-4.1875 c 0.678132,0.62239 1.84375,1.65625 1.84375,1.65625 0,0 1.23407,-1.08208 1.875,-1.65625 l 9.3125,4.1875 0,-4.5625 -8.46875,-8.15625 0.3125,-31.96875 36.21875,24.46875 1.3125,-4.5625 -37.1875,-36.53125 -0.34375,-16 c 0,0 0.51975,-5.017044 -2.46875,-5.78125 -0.434485,-0.06593 -0.743457,-0.06323 -1.125,0 z" stroke="none"  />';
			//2525D
				icons['AIR.ICON.FIXED-WING DSymbol'] = '<path   d="M 99.4375 80.78125 C 97.879578 81.12974 98.125 83.40625 98.125 83.40625 L 97.96875 90.71875 L 78.5625 107.375 L 79.25 109.4375 L 98.125 98.28125 L 98.3125 112.875 L 93.875 116.59375 L 93.875 118.65625 L 98.75 116.75 C 99.103514 117.03382 99.71875 117.5 99.71875 117.5 C 99.71875 117.5 100.35338 117.01183 100.6875 116.75 L 105.5625 118.65625 L 105.5625 116.59375 L 101.125 112.875 L 101.3125 98.28125 L 120.1875 109.4375 L 120.875 107.375 L 101.46875 90.71875 L 101.3125 83.40625 C 101.3125 83.40625 101.55792 81.12974 100 80.78125 C 99.773505 80.75118 99.6364 80.75242 99.4375 80.78125 z "  />';
				icons['AIR.ICON.CIVILIAN FIXED-WING DSymbol'] = '<path  fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"  d="m 75.138353,90.27611 19.627614,0 0,-6.482594 10.468063,0 0,6.482594 19.62762,0 0,9.72389 -19.62762,0 0,16.20648 6.54254,0 0,3.2413 -23.55314,0 0,-3.2413 6.542537,0 0,-16.20648 -19.627614,0 z m 21.590376,-6.482594 0,-3.241296 6.542531,0 0,3.241296"  />';
				icons['AIR.ICON.FIGHTER/BOMBER'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >F/B</text>';
				icons['AIR.ICON.ELECTRONIC SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >ES</text>';
				icons['AIR.ICON.PERSONNEL RECOVERY DSymbol'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >PR</text>';
				icons['AIR.ICON.PHOTOGRAPHIC RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >PH</text>';
				icons['AIR.ICON.ELECTRONIC ATTACK (EA)'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >EA</text>';
				icons['AIR.ICON.VERTICAL-TAKEOFF UAV (VT-UAV)'] = '<path   d="m 70,85 30,10 30,-10 0,-5 -30,5 -30,-5 z m -10,5 40,15 40,-15 0,30 -40,-15 -40,15 z" />';
				icons['AIR.ICON.TETHERED LIGHTER THAN AIR'] = '<path   d="M 75,110 85,95 m -5,20 c 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.28427 -6.71573,15 -15,15 -8.284271,0 -15,-6.71573 -15,-15 0,-8.284271 6.715729,-15 15,-15 8.28427,0 15,6.715729 15,15 z" />';
				icons['AIR.ICON.CIVILIAN TETHERED LIGHTER THAN AIR'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"  d="M 75,110 85,95 m -5,20 c 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.28427 -6.71573,15 -15,15 -8.284271,0 -15,-6.71573 -15,-15 0,-8.284271 6.715729,-15 15,-15 8.28427,0 15,6.715729 15,15 z" />';
				icons['AIR.ICON.CIVILIAN UNMANNED AERIAL VEHICLE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '" d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z"  />';
				icons['AIR.ICON.WEAPON'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >WPN</text>';
				icons['AIR.ICON.UNDERWATER DECOY DSymbol'] = '<path d="M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z "/>';
				icons['AIR.ICON.BOMB']= '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >BOMB</text>';
				icons['AIR.ICON.MANUAL TRACK'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MAN</text>';
		
		icons['AIR.M1.ATTACK'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >A</text>';
		icons['AIR.M1.BOMBER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >B</text>';
		icons['AIR.M1.CARGO'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >C</text>';
		icons['AIR.M1.FIGHTER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >F</text>';
		icons['AIR.M1.INTERCEPTOR'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >I</text>';
		icons['AIR.M1.TANKER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >K</text>';
		icons['AIR.M1.UTILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >U</text>';
		icons['AIR.M1.VSTOL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >' + ((this.force2525&&isNaN(this.SIDC)) ? 'L' : 'V' )+ '</text>';
		icons['AIR.M1.PASSENGER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >PX</text>';
		icons['AIR.M1.ULTRA LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >UL</text>';
		icons['AIR.M1.AIRBORNE COMMAND POST'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >D</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="28" >ACP</text>');
		icons['AIR.M1.ANTISURFACE WARFARE'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >N</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="22" >ASUW</text>');
		icons['AIR.M1.AIRBORNE EARLY WARNING'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >W</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >AEW</text>');
		icons['AIR.M1.GOVERNMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GOV</text>';
		icons['AIR.M1.MEDEVAC'] = '<path stroke="none" d="M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z"  />';
		icons['AIR.M1.ESCORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >E</text>';
		icons['AIR.M1.INTENSIVE CARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >IC</text>';
		icons['AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >J</text>';
		icons['AIR.M1.PATROL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >P</text>';
		icons['AIR.M1.RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >R</text>';
		icons['AIR.M1.TRAINER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >T</text>';
		icons['AIR.M1.PHOTOGRAPHIC'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >X</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >PH</text>');
		icons['AIR.M1.PERSONNEL RECOVERY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >PR</text>';
		icons['AIR.M1.ANTISUBMARINE WARFARE'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >S</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ASW</text>');
		icons['AIR.M1.COMMUNICATIONS'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >Y</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >COM</text>');
		icons['AIR.M1.ELECTRONIC SURVEILLANCE MEASURES'] = (this.force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >Z</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ESM</text>');
		icons['AIR.M1.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCM</text>';
		icons['AIR.M1.SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SAR</text>';
		icons['AIR.M1.SPECIAL OPERATIONS FORCES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SOF</text>';
		icons['AIR.M1.SURFACE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SUW</text>';
		icons['AIR.M1.VIP'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="28" >VIP</text>';
		icons['AIR.M1.COMBAT SEARCH AND RESCUE'] = ((this.force2525&&isNaN(this.SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >H</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >CSAR</text>');
		icons['AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >SEAD</text>';
			icons['AIR.M1.UNMANNED AERIAL VEHICLE']  = '<g transform="translate(20,-10),scale(0.8)">' + icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + '</g>'
			icons['AIR.M1.BOOM-ONLY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >B</text>';
			icons['AIR.M1.DROUGE-ONLY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >D</text>';
				//2525D
				icons['AIR.M1.ELECTRONIC SUPPORT (ES)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ES</text>';
				icons['AIR.M1.FIGHTER/BOMBER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >F/B</text>';
				icons['AIR.M1.ELECTRONIC ATTACK (EA)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >EA</text>';
				icons['AIR.M1.MULTIMISSION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MM</text>';
				icons['AIR.M1.HIJACKING'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >H</text>';
				icons['AIR.M1.ASW HELO-LAMPS'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LP</text>';
				icons['AIR.M1.ASW HELO – SH-60R'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >60R</text>'


		icons['AIR.M2.HEAVY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >H</text>';
		icons['AIR.M2.MEDIUM'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >M</text>';
		icons['AIR.M2.LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >L</text>';
		icons['AIR.M2.BOOM-ONLY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >B</text>';
		icons['AIR.M2.DROUGE-ONLY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >D</text>';
		icons['AIR.M2.BOOM AND DROUGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >B/D</text>';
		icons['AIR.M2.CLOSE RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >CR</text>';
		icons['AIR.M2.SHORT RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >SR</text>';
		icons['AIR.M2.MEDIUM RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >MR</text>';
		icons['AIR.M2.LONG RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >LR</text>';
			icons['AIR.M2.PHOTOGRAPHIC'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >P</text>';
				//2525D
				icons['AIR.M2.DOWNLINKED'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >DL</text>';
				
		icons['AIR.MISSILE.ICON'] = '<path d="M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z" ' + (this.force2525 ? ('fill="' + (this.frame?symbolColors.fillColor['Unknown']:symbolColors.iconFillColor['Unknown']) + '"'):'') + ' />';
			icons['AIR.MISSILE.ICON.ANTIBALLISTIC MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="25" >ABM</text>';
			icons['AIR.MISSILE.ICON.BOMB'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="25" >BOMB</text>';

		icons['AIR.MISSILE.M1.AIR'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >A</text>';
		icons['AIR.MISSILE.M1.SURFACE'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >S</text>';
		icons['AIR.MISSILE.M1.SUBSURFACE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="68" dy="0">S</tspan><tspan x="68" dy="30">U</tspan></text>';
		icons['AIR.MISSILE.M1.SPACE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="68" dy="0">S</tspan><tspan x="68" dy="30">P</tspan></text>';
		icons['AIR.MISSILE.M1.ANTI-BALLISTIC'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="68" dy="0">A</tspan><tspan x="68" dy="30">B</tspan></text>';
		icons['AIR.MISSILE.M1.BALLISTIC'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >B</text>';
		icons['AIR.MISSILE.M1.CRUISE'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >C</text>';
			icons['AIR.MISSILE.M1.LAND'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >L</text>';
			//2525D
				icons['AIR.MISSILE.M1.INTERCEPTOR'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="30" >I</text>';

		icons['AIR.MISSILE.M2.AIR'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >A</text>';
		icons['AIR.MISSILE.M2.SURFACE'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >S</text>';
		icons['AIR.MISSILE.M2.SUBSURFACE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">U</tspan></text>';
		icons['AIR.MISSILE.M2.SPACE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">P</tspan></text>';
		icons['AIR.MISSILE.M2.LAUNCHED'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >L</text>';
		icons['AIR.MISSILE.M2.MISSILE'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >M</text>';
			//2525D
		 		icons['AIR.MISSILE.M2.PATRIOT'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >P</text>';
		 		icons['AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">2</tspan></text>';
		 		icons['AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">6</tspan></text>';
		 		icons['AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">S</tspan></text>';
		 		icons['AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >R</text>';
		 		icons['AIR.MISSILE.M2.SHORT RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">S</tspan><tspan x="132" dy="30">R</tspan></text>';
		 		icons['AIR.MISSILE.M2.MEDIUM RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">M</tspan><tspan x="132" dy="30">R</tspan></text>';
		 		icons['AIR.MISSILE.M2.INTERMEDIATE RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">I</tspan><tspan x="132" dy="30">R</tspan></text>';
		 		icons['AIR.MISSILE.M2.LONG RANGE'] = '<text stroke="none" text-anchor="middle" y="95" font-size="30" ><tspan x="132" dy="0">L</tspan><tspan x="132" dy="30">R</tspan></text>';
		 		icons['AIR.MISSILE.M2.INTERCONTINENTAL'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="30" >I</text>';

		
		// GROUND ========================================================================
		
		icons['GROUND.ICON.ADMINISTRATIVE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ADM</text>';
			icons['GROUND.ICON.AIR DEFENSE CHAPARRAL'] = '<rect x="75" y="80" width="50" height="25" rx="10" fill="none" /><text stroke="none" text-anchor="middle" x="100" y="101" font-size="20" >C</text>';
			icons['GROUND.ICON.AIR DEFENSE COMPOSITE'] = '<path d="M85,120 C85,110 115,110 115,120 M90,115 L90,90 C90,80 110,80 110,90 L110,115 M100,112 l0,-30"  fill="none" />';
			icons['GROUND.ICON.AIR DEFENSE H/MAD'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >HMD</text>';
			icons['GROUND.ICON.AIR DEFENSE H/MAD HAWK'] = '<text stroke="none" text-anchor="middle" x="100" y="101" font-size="20" >H</text>';
			icons['GROUND.ICON.AIR DEFENSE H/MAD PATRIOT'] = '<text stroke="none" text-anchor="middle" x="100" y="101" font-size="20" >P</text>';
			icons['GROUND.ICON.AIR DEFENSE MISSILE'] = '<path d="M90,120 L90,90 C90,80 110,80 110,90 L110,120"  fill="none"/>';
			icons['GROUND.ICON.AIR DEFENSE TARGETING UNIT'] = '<path d="M80,100 l20,-15 0,15 20,-15 M75,80 C75,100 85,115 105,115"  fill="none" /><circle cx="75" cy="110" r="5" />';
			icons['GROUND.ICON.AIR DEFENSE THEATER MISSILE DEFENSE UNIT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >TMD</text>';
			icons['GROUND.ICON.AIR DEFENSE SHORT RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SRD</text>';
			icons['GROUND.ICON.AIR DEFENSE STINGER'] = '<rect x="75" y="80" width="50" height="25" rx="10" fill="none" /><text stroke="none" text-anchor="middle" x="100" y="101" font-size="20" >S</text>';
			icons['GROUND.ICON.AIR DEFENSE VULCAN'] = '<rect x="75" y="80" width="50" height="25" rx="10" fill="none" /><text stroke="none" text-anchor="middle" x="100" y="101" font-size="20" >V</text>';
			icons['GROUND.ICON.AIR DEFENSE GUN UNIT'] = '<path d="M100,80 L100,120 M92,90 l0,20 M108,90 l0,20" fill="none" />';
		icons['GROUND.ICON.AIR TRAFFIC SERVICES'] = '<path d="m 100,95 0,25 m 7.5,-32.5 c 0,4.142136 -3.35786,7.5 -7.5,7.5 -4.142136,0 -7.5,-3.357864 -7.5,-7.5 0,-4.142136 3.357864,-7.5 7.5,-7.5 4.14214,0 7.5,3.357864 7.5,7.5 z M 60,85 l 40,15 40,-15 0,30 -40,-15 -40,15 z" />';
		icons['GROUND.ICON.AIRPORT OF DEBARKATION'] = '<path fill="none" d="M80,70 l40,0 M80,80 l25,-25 M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 "></path><circle cx="100" cy="100" r="20" fill="none"  />';
		icons['GROUND.ICON.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ARRC</text>';
		icons['GROUND.ICON.ALLIED COMMAND OPERATIONS'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ACO</text>';
		icons['GROUND.ICON.AMMUNITION'] = '<path d="m 90,117 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0"  fill="none"/>';
		icons['GROUND.ICON.ARMOUR'] = '<path d="M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z"  fill="none"/>';
		icons['GROUND.ICON.AVIATION ROTARY WING'] = icons['AIR.ICON.MILITARY ROTARY WING']; 
		icons['GROUND.ICON.AVIATION FIXED WING'] = icons['AIR.ICON.MILITARY FIXED WING']; 
		icons['GROUND.ICON.AVIATION COMPOSITE'] = scale(0.5,icons['GROUND.ICON.AVIATION FIXED WING'] + rotate(90,icons['GROUND.ICON.AVIATION ROTARY WING']));
			icons['GROUND.ICON.AVIATION TACTICAL AIR CONTROL PARTY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >TACP</text>';
			icons['GROUND.ICON.AVIATION FORWARD AIR CONTROLLER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >FAC</text>';
		icons['GROUND.ICON.BAND'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >BAND</text>'; 
				icons['GROUND.ICON.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ATF</text>';
		icons['GROUND.ICON.CBRN'] = '<path  d="M80,120 c0,-20 10,-40 50,-43 m-10,43 c0,-20 -10,-40 -50,-43 " fill="none"/><circle cx="70" cy="85" r="8"/><circle cx="130" cy="85" r="8"/>';
		icons['GROUND.ICON.CIVIL AFFAIRS'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CA</text>'; 
		icons['GROUND.ICON.CIVIL-MILITARY-COOPERATION'] = '<path d="m 60,80 80,0 0,20 c 0,25 -80,25 -80,0 z"  fill="none"/>';
					icons['GROUND.ICON.COMMAND AND CONTROL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >C2</text>'; 
		icons['GROUND.ICON.COMBAT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CBT</text>';
		icons['GROUND.ICON.COMBAT SERVICE SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CSS</text>';		
			icons['GROUND.ICON.COMBAT SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CS</text>';
		icons['GROUND.ICON.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)'] =  '<path d="m 85,80 0,25 15,15 15,-15 0,-25 z" />';	
		icons['GROUND.ICON.COMBINED ARMS'] = '<path d="m 70,80 60,40 m 0,-40 -60,40 m 55,-40 c 25,0 25,40 0,40 l -50,0 C 50,120 50,80 75,80 z"  fill="none"/>';	
		icons['GROUND.ICON.COUNTER-INTELLIGENCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CI</text>'; 		
		icons['GROUND.ICON.CRIMINAL INVESTIGATION DIVISION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CID</text>';
		icons['GROUND.ICON.DIVING'] = ''; //TODO		
		icons['GROUND.ICON.DOG'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >DOG</text>';
		icons['GROUND.ICON.DRILLING'] = '<path d="m 85,80 5,40 20,0 5,-40 z"/>'; 			
				icons['GROUND.ICON.DRUG ENFORCEMENT AGENCY (DEA)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >DEA</text>';
		icons['GROUND.ICON.ELECTRONIC RANGING'] ='<path d="M120,130 c-40,20 -80,-45 -40,-70 z M100,95 L140,75" fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '"/>';
		icons['GROUND.ICON.ELECTRONIC WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >EW</text>'; 		
		icons['GROUND.ICON.EMERGENCY MEDICAL OPERATION'] = '<path d="m 90,60 0,22.6875 -19.65625,-11.34375 -10,17.3125 L 80,100 l -19.65625,11.34375 10,17.3125 L 90,117.3125 90,140 l 20,0 0,-22.6875 19.65625,11.34375 10,-17.3125 L 120,100 l 19.65625,-11.34375 -10,-17.3125 L 110,82.6875 110,60 90,60 z"/>'; 	
		icons['GROUND.ICON.ENGINEER'] = '<polyline fill="none" points="60,120 60,80 140,80 140,120" /><line x1="100" y1="80" x2="100" y2="110" />';	
		icons['GROUND.ICON.ENVIRONMENTAL PROTECTION'] = '<path d="m 100,80 -10,15 5,0 -10,10 5,0 -10,10 15,0 0,5 10,0 0,-5 15,0 -10,-10 5,0 -10,-10 5,0 z" fill="none"/>';
		icons['GROUND.ICON.EXPLOSIVE ORDNANCE DISPOSAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >EOD</text>';
				icons['GROUND.ICON.FEDERAL BUREAU OF INVESTIGATION (FBI)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >FBI</text>';
		icons['GROUND.ICON.FIELD ARTILLERY'] = '<circle cx="100" cy="100" r="15" />';
		icons['GROUND.ICON.FIELD ARTILLERY OBSERVER'] = '<circle cx="100" cy="108" r="5" /><path d="m 80,120 30,-20 m -30,20 20,-40 20,40 z" fill="none"/>';	
		icons['GROUND.ICON.FIELD CAMP CONSTRUCTION'] = '<polyline fill="none" points="60,120 60,80 140,80 140,120" /><line x1="100" y1="80" x2="100" y2="110" />' + '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CAMP</text>';	
		icons['GROUND.ICON.FINANCE'] = '<path d="m 80,95 10,-10 20,0 10,10 m -40,0 0,20 40,0 0,-20 z " fill="none"/>'; 	
		icons['GROUND.ICON.FIRE PROTECTION'] = '<path d="m 120,90 -5,5 -10,-10 5,-5 -20,0 5,5 -10,10 -5,-5 0,20 5,-5 10,10 -5,5 20,0 -5,-5 10,-10 5,5 z"/>';
		icons['GROUND.ICON.FIXED WING MISO'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"  d="M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0 " />' + '<path d="M 78.75 61.5 C 68.125 61.5 68.125 78.5 78.75 78.5 L 100 70 L 78.75 61.5 z M 100 70 L 121.25 78.5 C 131.875 78.5 131.875 61.5 121.25 61.5 L 100 70 z " />';
		icons['GROUND.ICON.GEOSPATIAL SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GEO</text>';
		icons['GROUND.ICON.GOVERNMENT ORGANIZATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GO</text>';
		icons['GROUND.ICON.INFORMATION OPERATIONS'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(this.force2525?'IW':'IO')+'</text>';
				icons['GROUND.ICON.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ISAF</text>';
		icons['GROUND.ICON.INTERROGATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IPW</text>';
		icons['GROUND.ICON.JOINT FIRE SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >JFS</text>';
			icons['GROUND.ICON.JOINT INFORMATION BUREAU'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >JIB</text>';
			icons['GROUND.ICON.JOINT INTELLIGENCE CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >JIC</text>';
		icons['GROUND.ICON.JUDGE ADVOCATE GENERAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >JAG</text>';
		icons['GROUND.ICON.LABOUR'] = '<path d="m 90,85 20,0 m -10,0 0,25 -10,0 10,10 10,-10 -10,0" fill="none"/>';	
		icons['GROUND.ICON.LAUNDRY/BATH'] = '<path d="m 95,80 10,10 0,30 m 0,-30 -10,0 m 10,0 -10,10" fill="none" />';	
			icons['GROUND.ICON.LAW ENFORCEMENT'] = '<path d="M100,140 c-20,-10 -40,-10 -40,-70 c0,15 40,15 40,0 c0,15 40,15 40,0 c0,60 -20,60 -40,70 z" fill="none"/>';
		icons['GROUND.ICON.LIAISON'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LO</text>';
		icons['GROUND.ICON.MAINTENANCE'] = '<path d="M70,90 c10,0 10,20 0,20 m10,-10 l40,0 m10,-10 c-10,0 -10,20 0,20" fill="none"/>';		
		icons['GROUND.ICON.MATERIEL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MAT</text>';
		icons['GROUND.ICON.METEOROLOGICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MET</text>';
				icons['GROUND.ICON.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)'] = '<path  d="M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0 " />'; 
		icons['GROUND.ICON.MILITARY INTELLIGENCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MI</text>';
		icons['GROUND.ICON.MILITARY POLICE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MP</text>';
		icons['GROUND.ICON.MINE'] = '<path d="m 120,100 c 0,5.52285 -8.95431,10 -20,10 -11.045695,0 -20,-4.47715 -20,-10 0,-5.522847 8.954305,-10 20,-10 11.04569,0 20,4.477153 20,10 z m -5,-20 -30,40 m 0,-40 30,40 m -15,-40 0,40"/>';
		icons['GROUND.ICON.MINE CLEARING'] = icons['GROUND.ICON.MINE'] + '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CLR</text>';
		icons['GROUND.ICON.MINE LAUNCHING'] = icons['GROUND.ICON.MINE'] + '<path d="m 80,125 0,10 40,0 0,-10 z"/>';
		icons['GROUND.ICON.MINE LAYING'] = icons['GROUND.ICON.MINE'] + '<path d="m 80,65 0,10 40,0 0,-10 z"/>';	
		icons['GROUND.ICON.MISSILE'] = '<path d="M90,120 L90,90 C90,80 110,80 110,90 L110,120 M100,120 L100,80"  fill="none"/>';
			icons['GROUND.ICON.MISSILE.LIGHT'] = '<line x1="90" y1="90" x2="110" y2="90"  />';
			icons['GROUND.ICON.MISSILE.MEDIUM'] = '<line x1="90" y1="90" x2="110" y2="90" /><line x1="90" y1="97" x2="110" y2="97"  />';
			icons['GROUND.ICON.MISSILE.HEAVY'] = '<line x1="90" y1="90" x2="110" y2="90"  /><line x1="90" y1="97" x2="110" y2="97"  /><line x1="90" y1="104" x2="110" y2="104"  />';
		icons['GROUND.ICON.MORALE, WELFARE, AND RECREATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >MWR</text>';
		icons['GROUND.ICON.MORTAR'] = '<circle cx="100" cy="115" r="5" fill="none"/><path d="M100,111 l0,-30 M90,90 l10,-10 10,10" fill="none" />'
		icons['GROUND.ICON.MORTUARY AFFAIRS'] = '<path d="m 90,95 20,0 m -10,-10 0,30 m -15,-35 30,0 0,40 -30,0 z" fill="none"/>';
				icons['GROUND.ICON.MULTINATIONAL (MN)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MN</text>';
		icons['GROUND.ICON.NAVAL'] = '<path d="m 105,85 c 0,2.761424 -2.23858,5 -5,5 -2.761424,0 -5,-2.238576 -5,-5 0,-2.761424 2.238576,-5 5,-5 2.76142,0 5,2.238576 5,5 z m -20,5 30,0 m -15,0 0,30" fill="none"/><path d="m 83.923,105 c -0.842446,0.0508 0.519951,7.66585 1.077,8.20521 0.324017,0.31374 1.381807,-1.40397 1.78412,-0.96106 6.803781,7.49029 12.911811,7.33568 13.57672,7.29583 0,0 0.0915,-0.002 0.13055,0 0.66491,0.0398 6.77294,0.19446 13.57672,-7.29583 0.40232,-0.44291 1.46011,1.2748 1.78412,0.96106 0.55705,-0.53936 1.91945,-8.15438 1.077,-8.20521 -0.84245,-0.0508 -1.5471,1.54498 -2.62178,2.38715 -1.16069,0.90958 -2.93544,1.27034 -3.00255,1.65345 -0.0529,0.30189 1.93453,1.3145 1.51215,1.80846 -1.989,2.32604 -5.91274,6.16671 -12.26039,6.30376 l -0.13054,1.59143 -0.13055,-1.59143 c -6.347647,-0.13705 -10.271382,-3.97772 -12.260389,-6.30376 -0.422382,-0.49396 1.565034,-1.50657 1.512151,-1.80846 -0.06711,-0.38311 -1.841853,-0.74387 -3.002544,-1.65345 -1.074682,-0.84217 -1.779345,-2.43798 -2.621788,-2.38715 z" stroke="none"/>';	
		icons['GROUND.ICON.OBSERVER/OBSERVATION'] = '<path d="m 100,80 -25,40 50,0 z" fill="none"/>';
		icons['GROUND.ICON.ORDNANCE'] = '<path d="M 90,97 83,83 m 27,14 7,-14 M 95,95 90,81 m 15,14 5,-14 m 10,26.5 c 0,6.90356 -8.95431,12.5 -20,12.5 -11.045695,0 -20,-5.59644 -20,-12.5 0,-6.90356 8.954305,-12.5 20,-12.5 11.04569,0 20,5.59644 20,12.5 z" fill="none"/>';		
		icons['GROUND.ICON.PERSONNEL SERVICES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PS</text>';
		icons['GROUND.ICON.PETROLEUM OIL LUBRICANTS'] = '<path d="m 100,119 0,-24 m 0,0 C 99,95 85,81 85,81 l 30,0 z" fill="none"/>';	
		icons['GROUND.ICON.PIPELINE'] = '<path d="m 115,110 15,0 m -15,-15 15,0 m -45,15 -15,0 M 85,95 70,95 m 30,-15 0,10 -15,0 0,25 30,0 0,-25 -15,0 m -10,-10 20,0	" fill="none"/>';
		icons['GROUND.ICON.POSTAL'] = '<path d="m 80,80 30,0 c -1.38071,15.460237 0,25 10,35 -20,0 -40,-20 -40,-35 z" fill="none"/>';		
		icons['GROUND.ICON.PUBLIC AFFAIRS'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PA</text>';
			icons['GROUND.ICON.PUBLIC AFFAIRS BROADCAST'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >BPAD</text>';
		icons['GROUND.ICON.PSYCHOLOGICAL OPERATIONS'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '"  d="M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0 " />'; //TODO		
		icons['GROUND.ICON.QUARTERMASTER'] = '<path fill="none" d="m 115,95 c 0,15 15,15 15,0 0,-15 -15,-15 -15,0 z m 0,0 -45,0 0,10 10,0 0,-10" />';
		icons['GROUND.ICON.RADAR'] = '<path d="M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50"  fill="none" />';
		icons['GROUND.ICON.RADIO'] = '<circle cx="100" cy="130" r="10" fill="none" /><path fill="none" d="M100,120 l0,-60 M70,70 l10,-10 10,10 10,-10 10,10 10,-10 10,10" />';
		icons['GROUND.ICON.RADIO RELAY'] = '<circle cx="100" cy="130" r="10" fill="none" /><path fill="none" d="M100,120 l-15,-40 15,0 0,-20 M70,60 l60,0" />';
		icons['GROUND.ICON.RADIO TELETYPE CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-family="Arial" font-size="30" font-weight="bold" >C</text><path fill="none" d="M100,140 l0,-80  M70,60 l60,0 M80,70 l40,0" />';
		icons['GROUND.ICON.RAILHEAD'] = '<path fill="none" d="M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 "></path><circle cx="100" cy="100" r="20" fill="none"  />' + translate(0,-50,'<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="75" cy="125" r="5" /><circle fill="none" cx="125" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />');
		icons['GROUND.ICON.RELIGIOUS SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >REL</text>';
		icons['GROUND.ICON.REPLACEMENT HOLDING UNIT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >RHU</text>';
		icons['GROUND.ICON.SEA-AIR-LAND'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >SEAL</text>';
		icons['GROUND.ICON.SEAPORT OF DEBARKATION'] = '<path fill="none" d="M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 "></path><circle cx="100" cy="100" r="20" fill="none"  />' + translate(0,-35,scale(0.6, icons['GROUND.ICON.NAVAL']));		
		icons['GROUND.ICON.SECURITY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SEC</text>';
		icons['GROUND.ICON.SECURITY POLICE (AIR)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SP</text>' + '<path d="M 78.75 121.5 C 68.125 121.5 68.125 138.5 78.75 138.5 L 100 130 L 78.75 121.5 z M 100 130 L 121.25 138.5 C 131.875 138.5 131.875 121.5 121.25 121.5 L 100 130 z " />';
		icons['GROUND.ICON.SENSOR'] = '<path d="m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z" />';//'<path fill="none" d="m 70,75 10,-15 10,15 10,-15 10,15 10,-15 10,15" />';	
		icons['GROUND.ICON.SHORE PATROL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SP</text>';
		icons['GROUND.ICON.SNIPER'] = '<path fill="none" d="M 60 85 L 90 85 L 60 85 z M 110 85 L 140 85 L 110 85 z M 100 90 L 100 115 L 100 90 z " />';		
		icons['GROUND.ICON.SPECIAL FORCES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SF</text>';
		icons['GROUND.ICON.SPECIAL OPERATIONS FORCES'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'];
		icons['GROUND.ICON.SURVEILLANCE'] = '<path d="m 100,80 -25,40 50,0 z" />';	
		icons['GROUND.ICON.SURVEY'] = '<path d="M85,120 l15,-15 15,15 " fill="none"/><path d="M100,105 l0,-25 20,12.5 z" fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" />';
		icons['GROUND.ICON.SUSTAINMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >SUST</text>';
		icons['GROUND.ICON.TACTICAL SATELLITE'] = '<rect x="60" y="70" width="20" height="55"/><rect x="90" y="75" width="20" height="45"/><rect x="120" y="70" width="20" height="55"/><path fill="none" d="M80,135 c10,-10 30,-10 40,0 M100,127 L100,100 M80,100 L120,100" />';
			icons['GROUND.ICON.TELEPHONE SWITCH'] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-family="Arial" font-size="30" font-weight="bold" >C</text><path fill="none" d="M100,140 l0,-80  M70,60 l60,0" />';
		icons['GROUND.ICON.TOPOGRAPHIC'] = '<path fill="none" d="m 85,105 c 10,5 20,5 30,0 m -15,-15 15,30 m -30,0 15,-30 0,-10" />';
		icons['GROUND.ICON.TRANSPORTATION'] = '<path fill="none" d="M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 "></path><circle cx="100" cy="100" r="20" fill="none"  />';
				icons['GROUND.ICON.TRANSPORTATION SECURITY AGENCY (TSA)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >TSA</text>';
		icons['GROUND.ICON.UNMANNED SYSTEMS'] = icons['AIR.ICON.UNMANNED AERIAL VEHICLE'];	
		icons['GROUND.ICON.VIDEO IMAGERY'] = '<path fill="none" d="m 140,110 -26,0 m 7,-20 19,0 m -15,-10 -65,0 0,40 50,0 z m 15,5 0,30"/>';
				icons['GROUND.ICON.UNITED STATES SECRET SERVICE(TREAS) (USSS)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >USSS</text>';
		icons['GROUND.ICON.WATER'] = '<path d="m 65,90 50,0 c 10,0 20,10 20,20 m -40,-30 20,0 m -10,0 0,10" fill="none" />';
		icons['GROUND.ICON.WATER PURIFICATION'] = icons['GROUND.ICON.WATER'] + '<text stroke="none"  x="65" y="110" font-family="Arial" font-size="20" font-weight="bold" >PURE</text>';	
		
		icons['GROUND.ICON.FULLFRAME.AIR ASSAULT WITH ORGANIC LIFT'] = {"Unknown" : '<path d="M35,120 L 90,120 l10,10 10,-10 L165,120 " fill="none" />',"Friend" : '<path d="M25,120 L 90,120 l10,10 10,-10 L175,120 " fill="none" />',"Neutral" : '<path d="M45,120 L 90,120 l10,10 10,-10 L155,120 " fill="none" />',"Hostile" : '<path d="M50,120 L 90,120 l10,10 10,-10 L150,120 " fill="none" />'}[symbol.affiliationType];	
		icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] = {"Unknown" : '<path d="M65,140 C65,115 135,115 135,140 "  fill="none"></path>',"Friend" : '<path d="M25,150 C25,110 175,110 175,150 "  fill="none"></path>',"Neutral" : '<path d="M45,150 C45,110 155,110 155,150 "  fill="none"></path>',"Hostile" : '<path d="M70,140 C70,115 130,115 130,140 "  fill="none"></path>'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.AIR AND NAVAL GUNFIRE LIAISON COMPANY'] = ''; //TODO		
		icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] = {"Unknown" : '<path d="M30,105 c10,0 0,-15 13.5,-15  c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c13.5,0 3.5,15 13.5,15 "  fill="none" />',"Friend" : '<path d="M25,110 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 20,20"  fill="none" />',"Neutral" : '<path d="M45,90   c18.75,0 0,20 18,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18,-20  "  fill="none" />',"Hostile" : '<path d="M32,105 c10,0 0,-15 11.5,-15  c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c11.5,0 1.5,15 11.5,15 "  fill="none" />'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.ANALYSIS'] = '<path d="m 100,120 0,-65 m 0,90 -30,-25 60,0 z"  fill="none"/>'; 	
		icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] = {"Unknown" : '<polyline fill="none"  points="55,135 100,33 145,135" />',"Friend" : '<polyline fill="none"   points="25,150 100,52 175,150" />',"Neutral" : '<polyline fill="none"   points="45,150 100,47 155,150" />',"Hostile" : '<polyline fill="none"  points="60,132 100,30 140,132" />'}[symbol.affiliationType];
				icons['GROUND.ICON.FULLFRAME.BORDER PATROL'] = '<path stroke="none" d="M 122.84375 66.78125 C 119.8942 66.78125 117.375 68.644201 117.375 71.59375 L 117.375 73.0625 L 128.71875 73.0625 L 128.71875 72.4375 C 128.71875 68.750564 126.53068 66.78125 122.84375 66.78125 z M 108.5625 74.75 L 108.5625 75.96875 L 117.59375 75.96875 L 117.53125 77.5 L 118.03125 80.8125 C 119.11793 81.511078 118.90326 82.498503 120.84375 83.46875 C 122.12448 84.089708 123.97683 84.019648 125.21875 83.4375 C 127.46972 82.350824 129.01863 79.221218 128.28125 76 L 137.53125 76 L 137.53125 74.75 L 108.5625 74.75 z M 94.75 82.09375 C 93.275225 82.05494 92.03125 83.478856 92.03125 85.03125 L 92.03125 85.21875 C 92.03125 86.615905 96.037314 91.344275 96.96875 92.625 C 98.210666 94.293824 100.82766 98.84375 103.15625 98.84375 C 104.51459 98.84375 111.12654 93.720246 112.5625 92.75 L 112.625 106.15625 L 126.40625 85.59375 C 122.95218 85.59375 114.85782 85.215232 112.21875 85.875 C 110.23944 86.418338 104.99846 91.57107 103.5625 91.6875 C 103.36845 91.027732 100.58971 87.462686 99.96875 86.53125 C 99.192552 85.366954 97.216205 82.09375 95.625 82.09375 L 94.75 82.09375 z M 130.375 85.625 C 129.55999 85.625 117.46924 104.06052 116.34375 106.15625 L 128.0625 106.15625 L 128.0625 110.5625 L 112.53125 110.5625 L 112.53125 133.1875 L 120.65625 133.1875 L 122 117.5 L 124.34375 117.5 L 125.5625 133.21875 L 133.53125 133.21875 L 133.53125 87.9375 C 133.53125 87.161302 131.19001 85.625 130.375 85.625 z M 66.90625 90.65625 C 66.518151 91.432447 62.46875 96.9375 62.46875 96.9375 C 62.46875 97.752507 76.745996 107.17946 78.53125 108.34375 C 81.36437 110.24543 83.88563 112.09832 86.71875 114 C 88.154715 115.00906 89.415345 115.88106 90.8125 116.8125 C 92.132035 117.70513 94.125 118.50456 94.125 120.40625 L 94.125 133.1875 L 105.46875 133.1875 L 105.46875 121.6875 C 105.46875 120.56202 107.15625 118.98286 107.15625 118.75 C 107.15625 117.62452 106.05191 118.57507 105.625 116.90625 C 105.2369 115.43147 105.35382 115.63304 104.5 114.46875 C 103.52976 113.14921 101.94704 112.03125 99.8125 112.03125 C 96.785331 112.03125 97.641091 111.76359 95.3125 110.25 C 93.876535 109.27976 92.538286 108.3765 91.21875 107.40625 C 88.73492 105.50457 85.78776 103.52014 83.1875 101.8125 C 80.858908 100.26011 68.225785 90.966728 66.90625 90.65625 z M 67.9375 92.5625 L 72.71875 95.71875 L 72.75 103.03125 L 67.9375 99.875 L 67.9375 92.5625 z M 77.8125 99.25 L 82.625 102.59375 L 82.625 109.96875 L 77.8125 106.59375 L 77.8125 99.25 z M 87.4375 106.15625 L 92.46875 109.5 L 92.4375 116.875 L 87.4375 113.5 L 87.4375 106.15625 z "/>' +  '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="none"  d="M 117.375 73.0625 L 117.375 74.75 L 128.71875 74.75 L 128.71875 73.0625 L 117.375 73.0625 z M 126.4375 85.625 L 112.625 106.21875 L 112.5625 110.5625 L 128.09375 110.5625 L 128.09375 106.15625 L 116.375 106.15625 C 117.46168 104.06052 129.58368 85.625 130.4375 85.625 L 126.4375 85.625 z M 67.9375 92.5625 L 67.9375 99.875 L 72.75 103.03125 L 72.71875 95.71875 L 67.9375 92.5625 z M 77.8125 99.25 L 77.8125 106.59375 L 82.5625 109.96875 L 82.625 102.59375 L 77.8125 99.25 z M 87.4375 106.15625 L 87.4375 113.5 L 92.4375 116.875 L 92.46875 109.5 L 87.4375 106.15625 z " />';
		icons['GROUND.ICON.FULLFRAME.BROADCAST TRANSMITTER ANTENNA'] = '<path fill="none" d="m 80,60 20,20 20,-20 m -20,0 0,80"  />';
		icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] = {"Unknown" : '<path d="M160,75 l-15,25 15,25" fill="none"/>',"Friend" : '<path d="M175,50 l-30,50 30,50" fill="none"/>',"Neutral" : '<path d="M155,50 l-20,50 20,50" fill="none"/>',"Hostile" : '<path d="M150,80 l-15,20 15,20" fill="none"/>'}[symbol.affiliationType];
				icons['GROUND.ICON.FULLFRAME.CUSTOMS SERVICE'] = '<path stroke="none" d="M 115.5 69.84375 C 115.81302 70.430653 116.90522 72.875 117.53125 72.875 L 128.25 72.875 L 128.25 69.84375 L 115.5 69.84375 z M 117.34375 74.71875 C 116.75685 74.71875 115.98476 75.733732 115.75 76.125 L 117.15625 76.125 L 117.15625 76.75 C 117.15625 79.645385 119.79973 81.8125 122.8125 81.8125 C 126.52955 81.8125 128.3125 78.631431 128.3125 74.71875 L 117.34375 74.71875 z M 111.28125 83.5625 C 110.53784 83.5625 99.432453 91.810699 97.75 92.90625 C 95.558898 94.353942 93.042471 96.083301 90.96875 97.6875 C 89.051536 99.213446 85.375 100.53399 85.375 103.625 L 85.375 104.03125 C 85.375 104.65728 87.131076 106.65625 88.1875 106.65625 L 88.78125 106.65625 C 90.228943 106.65625 108.0416 93.377829 111.25 91.65625 L 111.34375 105.28125 L 126.03125 83.5625 L 111.28125 83.5625 z M 75.25 83.59375 C 74.467464 83.59375 73.40625 84.373971 73.40625 85 L 73.40625 108.90625 C 73.40625 109.80617 73.858474 110.17911 74.40625 110.53125 L 78.5 110.53125 L 78.5 83.59375 L 75.25 83.59375 z M 78.5 110.53125 L 78.5 135.21875 L 105.59375 135.21875 L 105.59375 110.53125 L 78.5 110.53125 z M 130.5 83.59375 C 129.60009 83.59375 123.77491 92.888439 122.875 94.21875 C 121.89683 95.744696 115.73477 104.45959 115.5 105.28125 L 127.625 105.28125 L 127.625 110.34375 L 111.46875 110.34375 L 111.46875 134.8125 L 119.5625 134.8125 C 120.61893 134.8125 121.05436 127.92407 121.25 126.59375 C 121.71952 123.894 122.39811 120.39487 122.59375 117.8125 L 122.90625 117.8125 L 125.40625 134.78125 L 133.90625 134.78125 L 133.90625 86.65625 C 133.90625 85.638953 131.90831 83.59375 130.65625 83.59375 L 130.5 83.59375 z "/>' +  '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="none"  d="M 117.53125 72.875 L 117.34375 74.71875 L 128.25 74.71875 L 128.25 72.875 L 117.53125 72.875 z M 126.03125 83.65625 L 111.34375 105.34375 L 111.46875 110.34375 L 127.6875 110.34375 L 127.6875 105.28125 L 115.53125 105.28125 C 115.72689 104.49871 121.88896 95.736819 122.90625 94.25 C 123.80617 92.919689 129.63133 83.65625 130.53125 83.65625 L 126.03125 83.65625 z " />';
		icons['GROUND.ICON.FULLFRAME.DEPARTMENT OF JUSTICE (DOJ)'] = '<path  stroke="none" d="M 100.21875 62.25 C 100.13455 63.218228 99.024275 66.322578 98.6875 67.375 C 97.845562 69.900813 99.375 70.028422 99.375 72.34375 L 99.375 72.96875 C 99.375 73.726494 98.901856 73.517822 98.3125 73.8125 C 96.628625 72.381206 94.238878 71.03125 91.25 71.03125 L 89.96875 71.03125 C 84.159381 71.03125 80.035095 75.53125 74.5625 75.53125 L 73.90625 75.53125 C 72.264472 75.53125 71.470041 74.066125 71.34375 75.75 L 74.25 77.1875 C 71.766284 82.365416 69.888676 89.69063 67.53125 95.5 C 66.268344 98.573072 65.345809 101.60358 64.125 104.71875 C 63.493546 106.31843 63.131454 107.69242 62.5 109.25 C 61.994838 110.51291 61.818431 113.14541 60.21875 113.1875 C 62.365691 116.38687 68.01914 120.46875 73.28125 120.46875 L 76.03125 120.46875 C 81.630136 120.46875 87.300115 116.55526 89.53125 113.1875 L 88.21875 113.1875 L 75.375 77.21875 L 74.53125 77.21875 L 74.53125 77 L 75.375 77.21875 L 78.5625 77.71875 L 79.25 77.65625 L 89.25 76.21875 L 90.375 76.34375 C 93.700654 76.34375 93.814312 80.1875 94.65625 80.1875 L 97.65625 80.1875 L 97.65625 129.1875 L 86.09375 129.1875 L 86.09375 131.53125 L 81.40625 131.53125 L 81.40625 134.09375 L 77.53125 134.09375 L 77.53125 138.1875 L 123.3125 138.1875 L 123.3125 133.9375 L 119.25 133.9375 L 119.25 131.5625 L 114.53125 131.5625 L 114.53125 129.21875 L 102.5625 129.21875 L 102.5625 80.21875 L 105.96875 80.21875 C 106.97907 80.21875 106.6041 76.375 110.6875 76.375 L 111.3125 76.375 L 121.1875 77.65625 L 122.21875 77.6875 L 125.4375 77.3125 C 124.30088 79.712022 123.07282 83.785396 122.0625 86.4375 C 120.88378 89.594766 119.93956 92.634831 118.71875 95.75 C 117.49794 98.907266 116.55371 101.88483 115.375 105 C 114.86984 106.3892 114.18182 108.13121 113.71875 109.5625 C 113.42408 110.44654 113.12758 111.10641 112.875 111.90625 C 112.49612 113.16915 112.75594 113.1875 111.15625 113.1875 C 113.30319 116.38687 119.2366 120.46875 124.625 120.46875 L 127.1875 120.46875 C 132.61799 120.46875 138.77016 116.38687 140.875 113.1875 L 139.78125 113.1875 L 126.4375 77.0625 C 127.44783 76.93621 129.3125 76.185688 129.3125 75.34375 C 129.3125 74.501812 127.77117 75.53125 126.71875 75.53125 L 126.3125 75.53125 C 120.79781 75.53125 116.58933 71.03125 110.90625 71.03125 L 109.625 71.03125 C 106.67821 71.03125 104.16218 72.423303 102.5625 73.8125 C 101.76266 73.433628 101.25 73.575406 101.25 72.3125 C 101.25 71.891531 102.36287 68.847622 102.53125 68.46875 L 100.5625 62.28125 L 100.21875 62.25 z M 126.0625 80.75 L 137.8125 113.1875 L 114.09375 113.1875 L 126.0625 80.75 z M 74.75 80.8125 L 86.5 113.21875 L 63.09375 113.125 L 74.75 80.8125 z "/>';
		icons['GROUND.ICON.FULLFRAME.DIRECTION FINDING'] = '<path  d="M100,140 l0,-80 M80,80 l20,-20 20,20 " fill="none"/>';
				icons['GROUND.ICON.FULLFRAME.DIVISION AND BELOW SUPPORT'] = {"Unknown" : '<path d="M40,75 l15,25 -15,25" fill="none"/>',"Friend" : '<path d="M25,50 l30,50 -30,50" fill="none"/>',"Neutral" : '<path d="M45,50 l20,50 -20,50" fill="none"/>',"Hostile" : '<path d="M50,80 l15,20 -15,20" fill="none"/>'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION'] = '<path  d="M 100 65 L 115.15625 91.25 L 130.3125 117.5 C 133.29057 112.35191 135 106.37513 135 100 C 135 80.670034 119.32997 65 100 65 z M 100 65 C 80.670034 65 65 80.670034 65 100 C 65 106.37513 66.709432 112.35191 69.6875 117.5 L 84.84375 91.25 L 100 65 z M 69.6875 117.5 C 75.739201 127.96138 87.045164 135 100 135 C 112.95484 135 124.2608 127.96138 130.3125 117.5 L 100 117.5 L 69.6875 117.5 z " />'+'<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="none"  d="M 69.6875,117.5 100,65 l 30.3125,52.5 z" />';
			icons['GROUND.ICON.FULLFRAME.FIELD ARTILLERY ROCKET'] = '<path  d="M100,150 l0,-97 M85,130 l0,-50 M115,130 l0,-50 M85,73 l15,-20 15,20" fill="none"/>';
		icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'] = {"Unknown" : '<path d="M35,80 l130,0 " fill="none" />',"Friend" : '<path d="M25,80 l150,0 " fill="none" />',"Neutral" : '<path d="M45,80 l110,0 " fill="none" />',"Hostile" : '<path d="M50,80 l100,0 " fill="none" />'}[symbol.affiliationType];
			icons['GROUND.ICON.FULLFRAME.HORSE'] = '<path d="m 129.02826,72.816978 c 0,0 -6.31831,2.015821 -8.95372,2.578473 -3.421,0.730371 -4.85395,1.798526 -7.73318,3.10818 -4.15516,1.890028 -6.80372,3.628523 -11.31459,4.328272 -3.307178,0.513027 -7.734291,1.732275 -10.99552,0.980597 -3.858159,-0.889265 -6.146533,-2.89337 -10.105791,-2.91466 -3.682324,-0.0198 -7.441926,-0.625799 -10.598529,1.270451 -2.618553,1.573031 -4.652507,4.230533 -5.82693,7.050459 -2.262545,5.432634 -0.829202,12.49915 -1.15625,18.375 -0.171746,3.08565 -0.431969,9.29338 -0.591361,10.15262 0,0 1.583246,-0.01 3.429091,-2.46273 0.895347,-1.22107 1.666253,-3.43552 1.900229,-4.93148 0.484657,-3.09872 -0.708058,-7.45188 -0.400229,-9.96636 1.123089,-0.2883 2.439708,2.84704 2.64545,4.6767 0.219551,1.95245 -1.015426,3.28413 -1.35818,5.21875 -0.524666,2.9614 0.323638,5.02104 0.565018,8.30998 0.120689,1.64447 0.756822,3.9306 0.533203,5.98227 -0.217418,1.99477 -0.213569,4.33275 -0.213569,4.33275 l 6.861717,0 -0.41466,-3.83534 c 0,0 -1.797321,-2.48145 -2.144209,-4.28966 -0.520165,-2.71146 -0.531167,-5.3573 0.15625,-8.03125 0.518837,-2.01819 3.059801,-4.2693 4.081709,-6.08534 1.754275,-3.11754 3.114201,-7.082951 3.114201,-7.082951 0,0 5.133389,3.408901 9.074541,4.218751 3.781078,0.77696 11.635799,1.35579 11.635799,1.35579 0,0 -0.17653,7.31287 0.0625,12.375 -0.037,0.0803 0.33104,3.86771 0.29614,3.12838 -1.43617,3.20417 -0.0155,8.19559 -0.0155,8.19559 0,0 2.93751,0.004 6.28188,-0.0427 l -0.28125,-3.375 c 0,0 -1.49675,-3.49293 -1.46875,-5.3125 0.0485,-3.14535 0.0631,-5.88448 0.9375,-8.90625 0.35017,-1.2102 0.66073,-2.94136 1.34375,-4 1.39935,-2.16891 3.13345,-3.75514 4.15625,-6.125 1.12616,-2.609388 2.29743,-5.334561 3.55653,-7.882463 1.60813,-3.254188 7.78722,-7.34375 7.78722,-7.34375 0,0 5.0302,2.888656 8.44706,4.895859 1.18382,0.695427 3.00549,0.12849 3.72195,-1.042726 0.65417,-1.069393 0.78712,-2.203755 0.25192,-3.337372 -3.15475,-6.682052 -7.83017,-9.384791 -7.83017,-9.384791 z" stroke="none"  />'; // Yes the horse looks like crap, but who uses it really... And the reason for how this comment is done is if I sort all base geometries it should still be close to the Horse...
		icons['GROUND.ICON.FULLFRAME.INFANTRY'] = {"Unknown" : '<line x1="50" y1="65" x2="150" y2="135"  /><line x1="50" y1="135" x2="150" y2="65"  />',"Friend" : '<line x1="25" y1="50" x2="175" y2="150"  /><line x1="25" y1="150" x2="175" y2="50"  />',"Neutral" : '<line x1="45" y1="45" x2="155" y2="155"  /><line x1="45" y1="155" x2="155" y2="45"  />',"Hostile" : '<line x1="60" y1="70" x2="140" y2="130"  /><line x1="60" y1="130" x2="140" y2="70"  />'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.INTERCEPT'] = '<path  d="M100,120 l0,-60 M80,120 l20,20 20,-20 "/>';
		icons['GROUND.ICON.FULLFRAME.JAMMING'] = {"Unknown" : '<path d="M63,60 c10,0 0,10 7,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10 M40,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 " fill="none" stroke-width="2"/>',"Friend" : '<path d="M25,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 M25,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10" fill="none" stroke-width="2"/>',"Neutral" : '<path d="M45,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10  M45,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10  " fill="none" stroke-width="2"/>',"Hostile" : '<path d="M67,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 13,10   M52,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10   " fill="none" stroke-width="2"/>'}[symbol.affiliationType];
				icons['GROUND.ICON.FULLFRAME.LAW ENFORCEMENT'] = '<path d="m 99.59375,50.96875 c -2.766962,0 -5.03125,2.348087 -5.03125,5.25 0,2.083265 1.16779,3.868908 2.84375,4.71875 L 87.75,78.34375 69.53125,78.40625 c -0.06442,-2.843135 -2.304838,-5.125 -5.03125,-5.125 -2.766962,0 -5,2.348087 -5,5.25 0,2.901913 2.233038,5.28125 5,5.28125 0.701529,0 1.393843,-0.164446 2,-0.4375 l 9.1875,16.84375 -9.375,17.21875 c -0.558377,-0.22539 -1.178405,-0.375 -1.8125,-0.375 -2.766962,0 -5,2.37934 -5,5.28125 0,2.90191 2.233038,5.25 5,5.25 2.766962,0 5.03125,-2.34809 5.03125,-5.25 0,-0.10101 -0.02589,-0.2129 -0.03125,-0.3125 l 18.25,0.0625 9.46875,17.09375 c -1.568145,0.88776 -2.65625,2.59371 -2.65625,4.59375 0,2.90191 2.264288,5.25 5.03125,5.25 2.76696,0 5,-2.34809 5,-5.25 0,-1.87114 -0.93946,-3.50659 -2.34375,-4.4375 l 9.59375,-17.25 18.65625,-0.0625 c -0.005,0.0996 -0.0312,0.21149 -0.0312,0.3125 0,2.90191 2.26429,5.25 5.03125,5.25 2.76696,0 5,-2.34809 5,-5.25 0,-2.90191 -2.23304,-5.28125 -5,-5.28125 -0.757,0 -1.48163,0.21601 -2.125,0.53125 l -9.5,-17.375 9.5,-17.375 c 0.64337,0.315236 1.368,0.53125 2.125,0.53125 2.76696,0 5,-2.379337 5,-5.28125 0,-2.901913 -2.23304,-5.25 -5,-5.25 -2.76696,0 -5.03125,2.348087 -5.03125,5.25 0,0.101009 0.0259,0.212899 0.0312,0.3125 L 111.84375,78.34375 102.0625,60.75 c 1.50211,-0.907251 2.53125,-2.58277 2.53125,-4.53125 0,-2.901913 -2.23304,-5.25 -5,-5.25 z" />'; 
		icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'] = {"Unknown" : '<line x1="55" y1="65" x2="55" y2="135"  />',"Friend" : '<line x1="55" y1="50" x2="55" y2="150"  />',"Neutral" : '<line x1="55" y1="45" x2="55" y2="155"  />',"Hostile" : '<line x1="55" y1="72" x2="55" y2="128"  />'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.MEDICAL'] = '<line x1="100" y1="'+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].y+'" x2="100" y2="'+(symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].y+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].height)+'"  /><line x1="'+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].x+'" y1="100" x2="'+(symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].x+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].width)+'" y2="100"  />';
			icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'] = {"Unknown" : '<path d="M100,170 l0,-140 M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M55,100 l90,0 " fill="none" />',"Friend" : '<path d="M100,150 l0,-100 M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M55,100 l90,0 " fill="none" />',"Neutral" : '<path d="M100,155 l0,-110  M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M65,100 l70,0 " fill="none" />',"Hostile" : '<path d="M100,172 l0,-144 M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M65,100 l70,0 " fill="none" />'}[symbol.affiliationType];
			icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'] = {"Unknown" : '<path d="M100,170 l0,-140 M160,75 l-15,25 15,25 M30,100 l115,0 " fill="none" />',"Friend" : '<path d="M100,150 l0,-100  M175,50 l-30,50 30,50 M25,100 l120,0 " fill="none" />',"Neutral" : '<path d="M100,155 l0,-110 M155,50 l-20,50 20,50 M45,100 l90,0 " fill="none" />',"Hostile" : '<path d="M100,172 l0,-144  M150,80 l-15,20 15,20 M28,100 l110,0 " fill="none" />'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'] =  icons['GROUND.ICON.FULLFRAME.MEDICAL'] + '<path fill="none" d="M70,90 l0,20  M130,90 l0,20 " />';
		icons['GROUND.ICON.FULLFRAME.MOTORIZED'] = '<line x1="100" y1="'+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].y+'" x2="100" y2="'+(symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].y+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].height)+'"  />';
			icons['GROUND.ICON.FULLFRAME.NAVAL'] = '<path d="M 100,145 100,65"  fill="none"></path><path d="m 70,70 60,0"  fill="none"></path><path d="m 57.804999,105.46002 c -2.153957,0.1368 1.329404,20.63315 2.753662,22.08491 0.828444,0.84444 3.532992,-3.77889 4.561621,-2.58676 17.395838,20.16063 33.012786,19.74448 34.712829,19.63722 0,0 0.233929,-0.005 0.333769,0 1.70004,0.10724 17.317,0.52341 34.71284,-19.63722 1.02862,-1.19213 3.73318,3.4312 4.56162,2.58676 1.42426,-1.45176 4.90762,-21.9481 2.75366,-22.08491 -2.15396,-0.13682 -3.95562,4.15843 -6.70335,6.4252 -2.96765,2.44819 -7.5053,3.41919 -7.67689,4.45036 -0.1352,0.81256 4.9462,3.53808 3.86625,4.86759 -5.08546,6.26072 -15.11764,16.59815 -31.34724,16.96701 l -0.333772,4.28347 -0.333776,-4.28347 c -16.2296,-0.36886 -26.261768,-10.70629 -31.347241,-16.96701 -1.079943,-1.32951 4.001463,-4.05503 3.866252,-4.86759 -0.171589,-1.03117 -4.709231,-2.00217 -7.676875,-4.45036 -2.747734,-2.26677 -4.549411,-6.56202 -6.703359,-6.4252 z" stroke="none" ></path><circle cx="100" cy="60" r="5" fill-opacity="0" />';
				icons['GROUND.ICON.FULLFRAME.PRISON'] = '<path   stroke="none" d="M 62.5 67.90625 L 62.5 73.40625 L 69.9375 73.40625 L 69.9375 106 C 66.847607 106.72039 64.40625 109.5964 64.40625 113.40625 C 64.40625 116.04342 65.765118 116.90178 65.875 118.4375 C 66.013012 120.35165 65.625 122.45293 65.625 124.6875 L 65.625 126.59375 L 62.5 126.59375 L 62.5 132.09375 L 137.5 132.09375 L 137.5 126.59375 L 136.03125 126.59375 L 135.59375 117.5 C 138.33202 113.41017 135.82014 107.00696 131.5 106 L 131.5 73.40625 L 137.5 73.40625 L 137.5 67.90625 L 62.5 67.90625 z M 74.46875 73.40625 L 87.1875 73.40625 L 87.1875 108.375 C 87.1875 109.18594 84.806803 109.65448 83.875 110.59375 C 83.125163 111.34974 82.246934 112.69627 81.625 113.625 C 80.54112 115.24379 78.617442 118.65568 78.5625 121.09375 L 76.125 117.03125 C 76.460801 116.38734 76.875 114.61882 76.875 113.65625 L 76.875 112.21875 C 76.875 109.48312 74.46875 107.90821 74.46875 106.46875 L 74.46875 73.40625 z M 91.5 73.40625 L 110.1875 73.40625 L 110.1875 90.90625 C 109.04472 89.591617 108.84528 87.751092 106.78125 85.6875 C 105.40992 84.315729 103.46818 83 100.84375 83 L 100.34375 83 C 98.244992 83 96.116274 83.583581 94.90625 84.5 C 94.256185 84.993592 93.648392 85.417184 93.0625 86 C 92.419028 86.639955 92.203247 87.310514 91.5 87.78125 L 91.5 73.40625 z M 114.25 73.40625 L 127.1875 73.40625 L 127.1875 106.46875 C 127.1875 106.89202 124.826 109.18224 124.40625 111.09375 C 123.72806 114.1832 124.4845 114.6472 125.03125 117 L 123.25 120.1875 C 122.70366 118.30587 120.70369 115.01198 119.6875 113.5 C 118.29859 111.42938 117.33725 109.1308 114.25 108.875 L 114.25 73.40625 z M 99.65625 84.90625 L 100.59375 84.90625 C 104.76664 84.90625 108.5 90.428502 108.5 94.71875 L 108.5 96.40625 C 108.5 100.39102 104.96895 106.21875 101.3125 106.21875 L 99.40625 106.21875 C 94.907665 106.21875 91.374381 100.1849 91.5625 95.46875 C 91.751497 90.710843 94.937022 84.90625 99.65625 84.90625 z M 110.28125 100.53125 L 110.1875 106.9375 L 106.71875 106.3125 L 110.28125 100.53125 z M 91.5 103.59375 L 94.3125 106.75 L 91.5 107.4375 L 91.5 103.59375 z M 70.65625 107.90625 C 72.94488 107.90625 74.71875 110.43139 74.71875 112.6875 L 74.71875 113.40625 C 74.71875 117.88593 70.024831 120.24154 67.625 116.6875 C 65.677444 113.80463 66.883768 107.90625 70.65625 107.90625 z M 130.5625 107.90625 C 132.81597 107.90625 134.375 110.81272 134.375 113.1875 L 134.375 113.40625 C 134.375 116.67547 133.04212 116.65886 132 118.21875 L 128.875 118.28125 L 126.65625 115.40625 L 126.46875 113.1875 C 126.13822 110.98062 128.23519 107.90625 130.5625 107.90625 z M 105.875 108.15625 C 107.1782 108.15625 108.90539 109.04487 110.1875 109.34375 L 110.1875 126.59375 L 91.5 126.59375 L 91.5 110.0625 C 91.5 108.61029 96.633231 108.87412 98.4375 108.875 C 101.14895 108.877 104.02414 108.15625 105.875 108.15625 z M 114.25 110.78125 C 117.18957 112.33454 117.35479 113.42971 118.96875 116.375 C 120.11064 118.45749 121.6875 120.896 121.6875 123.96875 C 121.86858 124.23906 122.26111 124.90625 122.65625 124.90625 C 124.03286 124.90625 125.51708 119.81743 126.71875 118.9375 L 126.71875 119.40625 L 127.1875 119.40625 L 127.1875 126.59375 L 114.25 126.59375 L 114.25 110.78125 z M 87.1875 111.25 L 87.1875 126.59375 L 74.46875 126.59375 L 74.46875 118.9375 C 75.83261 119.43109 77.410053 125.40625 78.5625 125.40625 C 80.592247 125.40625 80.666777 119.58293 81.90625 117.5 C 83.198027 115.33224 84.353853 111.91105 87.1875 111.25 z M 133.59375 119.65625 L 133.90625 126.59375 L 131.5 126.59375 L 131.5 120.375 L 133.59375 119.65625 z M 68.0625 119.90625 C 68.643998 120.05393 69.9375 120.34083 69.9375 121.09375 L 69.9375 126.59375 L 67.71875 126.59375 L 68.0625 119.90625 z "/>';
		icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] = {"Unknown" : '<line x1="50" y1="135" x2="150" y2="65"  />',"Friend" : '<line x1="25" y1="150" x2="175" y2="50"  />',"Neutral" : '<line x1="45" y1="155" x2="155" y2="45"  />',"Hostile" : '<line x1="60" y1="130" x2="140" y2="70"  />'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.SEARCH'] = '<path d="m 100,145 0,-90 m 30,65 -30,25 -30,-25"  fill="none"/>'; 
			icons['GROUND.ICON.FULLFRAME.SENSOR'] = '<path d="M'+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].x+',100 L75,100 M'+(200-symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].x)+',100 L125,100 " /><path d="M65,85 l70,0 -15,30 -40,0 z"  fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" />';	
		icons['GROUND.ICON.FULLFRAME.SIGNAL'] = {"Unknown" : '<path fill="none" d="M50,65 100,110 100,90 150,135" />',"Friend" : '<path fill="none" d="M25,50 100,110 100,90 175,150" />',"Neutral" : '<path fill="none" d="M45,45 100,110 100,90 155,155" />',"Hostile" : '<path fill="none" d="M57,70 100,110 100,90 143,130" />'}[symbol.affiliationType];
			icons['GROUND.ICON.FULLFRAME.SOUND'] = '<path d="M'+symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].x+',100 L75,100 M'+(200-symbolBaseGeometry.BBox['Ground'+symbol.affiliationType].x)+',100 L125,100 " /><path d="M65,85 l70,0 -15,30 -40,0 z"  fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" /><text stroke="none" text-anchor="middle" x="100" y="110" font-family="Arial" font-size="25" font-weight="bold">S</text>';
		icons['GROUND.ICON.FULLFRAME.SUPPLY'] = {"Unknown" : '<path d="M35,120 l130,0 " fill="none" />',"Friend" : '<path d="M25,120 l150,0 " fill="none" />',"Neutral" : '<path d="M45,120 l110,0 " fill="none" />',"Hostile" : '<path d="M50,120 l100,0 " fill="none" />'}[symbol.affiliationType];

			icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] = {"Unknown" : '<path d="M160,75 l-15,25 15,25 M35,120 l120,0" fill="none" />',"Friend" : '<path d="M175,50 l-30,50 30,50 M25,120 l135,0 " fill="none" />',"Neutral" : '<path d="M155,50 l-20,50 20,50 M45,120 l100,0 " fill="none" />',"Hostile" : '<path d="M150,80 l-15,20 15,20 M50,120 l100,0" fill="none" />'}[symbol.affiliationType];		
				icons['GROUND.ICON.FULLFRAME.SUPPLY DIVISION AND BELOW'] = {"Unknown" : '<path d="m 45,120 120,0 M 40,75 55,100 40,125" fill="none" />',"Friend" : '<path d="m 45,120 130,0 M 25,50 55,100 25,150" fill="none" />',"Neutral" : '<path d="m 57,120 98,0 M 45,50 65,100 45,150" fill="none" />',"Hostile" : '<path d="m 50,120 100,0 M 50,80 65,100 50,120" fill="none" />'}[symbol.affiliationType];
			icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] = {"Unknown" : '<path d="M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M45,120 l110,0 " fill="none" />',"Friend" : '<path d="M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M40,120 l120,0 " fill="none" />',"Neutral" : '<path d=" M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M55,120 l90,0 " fill="none" />',"Hostile" : '<path d="M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M50,120 l100,0" fill="none" />'}[symbol.affiliationType];

				icons['GROUND.ICON.FULLFRAME.CLASS ALL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-family="Arial" font-size="30" font-weight="bold" >ALL</text>';
				icons['GROUND.ICON.FULLFRAME.CLASS MULTIPLE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-family="Arial" font-size="30" font-weight="bold" >MULT</text>';
		icons['GROUND.ICON.FULLFRAME.CLASS I'] = '<path d="m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30" fill="none" />'; 
		icons['GROUND.ICON.FULLFRAME.NATO SUPPLY CLASS I'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >I</text>';
		icons['GROUND.ICON.FULLFRAME.CLASS II'] = icons['GROUND.ICON.QUARTERMASTER']; 
		icons['GROUND.ICON.FULLFRAME.NATO SUPPLY CLASS II'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >II</text>';
		icons['GROUND.ICON.FULLFRAME.CLASS III'] = '<path d="m 100,120 0,-20 -15,-20 30,0 -15,20 " fill="none" />';
		icons['GROUND.ICON.FULLFRAME.CLASS IV'] = icons['GROUND.ICON.ENGINEER']; 
		icons['GROUND.ICON.FULLFRAME.NATO SUPPLY CLASS IV'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IV</text>';
		icons['GROUND.ICON.FULLFRAME.CLASS V'] = '<path d="m 90,115 0,-25 c 0,-10 20,-10 20,0 l 0,25 m -25,0 30,0" fill="none" />';
		icons['GROUND.ICON.FULLFRAME.CLASS VI'] = '<circle cx="100" cy="85" r="5" fill="none"/><path d="m 85,95 30,0 m -15,15 0,-20 m -10,30 10,-10 10,10" fill="none" />';	
		icons['GROUND.ICON.FULLFRAME.CLASS VII'] = '<circle cx="75" cy="100" r="7"/><circle cx="125" cy="100" r="7"/><path d="M75,100 c0,-20 50,-20 50,0" fill="none" />';
		icons['GROUND.ICON.FULLFRAME.CLASS VIII'] = {"Unknown" : '<path fill="none" d="M100,120 l0,-90 M165,80 l-130,0" />',"Friend" : '<path fill="none" d="M100,120 l0,-70 M175,80 l-150,0" />',"Neutral" : '<path fill="none" d="M100,120 l0,-75 M155,80 l-110,0" />',"Hostile" : '<path fill="none" d="M100,120 l0,-92 M153,80 l-106,0" />'}[symbol.affiliationType];
			icons['GROUND.ICON.FULLFRAME.CLASS VIII.THEATER'] = {"Unknown" : '<path fill="none" d="M100,120 l0,-90 M155,80 l-110,0" />',"Friend" : '<path fill="none" d="M100,120 l0,-70 M155,80 l-110,0" />',"Neutral" : '<path fill="none" d="M100,120 l0,-75 M145,80 l-90,0" />',"Hostile" : '<path fill="none" d="M100,120 l0,-92 M153,80 l-106,0" />'}[symbol.affiliationType];
			icons['GROUND.ICON.FULLFRAME.CLASS VIII.CORPS'] = {"Unknown" : '<path fill="none" d="M100,120 l0,-90 M155,80 l-120,0" />',"Friend" : '<path fill="none" d="M100,120 l0,-70 M155,80 l-130,0" />',"Neutral" : '<path fill="none" d="M100,120 l0,-75 M145,80 l-100,0" />',"Hostile" : '<path fill="none" d="M100,120 l0,-92 M153,80 l-106,0" />'}[symbol.affiliationType];
		icons['GROUND.ICON.FULLFRAME.CLASS IX'] = '<circle cx="100" cy="100" r="10" fill="none" /><path d="m 100,110 0,10 m 0,-30 0,-10 m 8.66814,14.201619 8.41795,-4.782929 m -8.41795,15.87932 8.03532,5.35688 m -25.445182,-5.35688 -8.226637,5.35688 m 8.226637,-16.261954 -8.03532,-5.35688" fill="none" />';
		icons['GROUND.ICON.FULLFRAME.CLASS X'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-family="Arial" font-size="30" font-weight="bold" >CA</text>';
		icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] = {"Unknown" : '<path d="M40,75 l15,25 -15,25 M160,75 l-15,25 15,25" fill="none"/>',"Friend" : '<path d="M25,50 l30,50 -30,50 M175,50 l-30,50 30,50" fill="none"/>',"Neutral" : '<path d="M45,50 l20,50 -20,50 M155,50 l-20,50 20,50" fill="none"/>',"Hostile" : '<path d="M50,80 l15,20 -15,20 M150,80 l-15,20 15,20" fill="none"/>'}[symbol.affiliationType];
				icons['GROUND.ICON.FULLFRAME.US MARSHALS SERVICE'] = '<path d="m 100,70 7.05342,20.291796 21.47828,0.437695 -17.11902,12.978709 6.22088,20.56231 L 100,112 82.366442,124.27051 88.587322,103.7082 71.468305,90.729489 92.946577,90.291796 z m 0,-5 c -19.329966,0 -35,15.670034 -35,35 0,19.32997 15.670034,35 35,35 19.32997,0 35,-15.67003 35,-35 0,-19.329966 -15.67003,-35 -35,-35 z m 0,5 c 16.56854,0 30,13.431458 30,30 0,16.56854 -13.43146,30 -30,30 -16.568542,0 -30,-13.43146 -30,-30 0,-16.568542 13.431458,-30 30,-30 z"  />';


				icons['GROUND.M1.ACCIDENT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ACC</text>';
		icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'] = '<polyline fill="none" points="85,55 100,75 115,55" />';
			icons['GROUND.M2.AMMUNITION'] = '<path d="M95,75 L95,60 C95,55 105,55 105,60 L105,75 M90,75 L110,75"  fill="none"/>';
			icons['GROUND.M1.ANTISUBMARINE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >P</text>';		
		icons['GROUND.M1.AREA'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >AREA</text>';
		icons['GROUND.M1.ATTACK'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >A</text>';
				icons['GROUND.M2.AVIATION'] = '<path d="m 75,60 0,15 50,-15 0,15 z"  />';
		icons['GROUND.M1.BIOLOGICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >B</text>';
		icons['GROUND.M1.BORDER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >BOR</text>';
		icons['GROUND.M1.BRIDGING'] = '<path d="m 80,80 5,-5 30,0 5,5 m -40,-20 5,5 30,0 5,-5"  />';
		icons['GROUND.M1.CHEMICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >C</text>';
			icons['GROUND.M1.CHEMICAL SURVEILLANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RS</text>';
				icons['GROUND.M1.CIVILIAN'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CIV</text>';
		icons['GROUND.M1.CLOSE PROTECTION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CLP</text>';
		icons['GROUND.M1.COMBAT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CBT</text>';
		icons['GROUND.M1.COMMAND AND CONTROL'] = (this.force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >Y</text>' : '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >C2</text>');
		icons['GROUND.M1.COMMUNICATIONS CONTINGENCY PACKAGE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CCP</text>';
		icons['GROUND.M1.CONSTRUCTION'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >CONST</text>';
		icons['GROUND.M1.CROSS CULTURAL COMMUNICATION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CCC</text>';
		icons['GROUND.M1.CROWD AND RIOT CONTROL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CRC</text>';
		icons['GROUND.M1.DECONTAMINATION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >D</text>';
		icons['GROUND.M1.DETENTION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >DET</text>';
		icons['GROUND.M1.DIRECT COMMUNICATIONS'] = '<path fill="none" d="m 95,65 -5,5 5,5 m 10,-10 5,5 -5,5 M 90,70 c 20,0 20,0 20,0 m 15,0 c 0,2.761424 -2.23858,5 -5,5 -2.76142,0 -5,-2.238576 -5,-5 0,-2.761424 2.23858,-5 5,-5 2.76142,0 5,2.238576 5,5 z m -40,0 c 0,2.761424 -2.238576,5 -5,5 -2.761424,0 -5,-2.238576 -5,-5 0,-2.761424 2.238576,-5 5,-5 2.761424,0 5,2.238576 5,5 z"  />';
		icons['GROUND.M1.DIVING'] = '<path fill="none" d="m 104.58333,64.824562 c 0,2.664531 -2.05202,4.824561 -4.583336,4.824561 -2.531301,0 -4.583329,-2.16003 -4.583329,-4.824561 0,-2.664533 2.052028,-4.824562 4.583329,-4.824562 2.531316,0 4.583346,2.160029 4.583346,4.824562 z m 0,8.684212 4.58334,4.824559 -18.333339,0 4.583334,-4.824559 M 108.25,60 l 4.58334,0 0,9.649123 -4.58334,0 m -16.500002,0 -4.583333,0 0,-9.649123 4.583333,0 m 17.416672,4.824562 c 0,5.329061 -4.10406,9.64912 -9.166676,9.64912 -5.062606,0 -9.166663,-4.320059 -9.166663,-9.64912 0,-5.329066 4.104057,-9.649123 9.166663,-9.649123 5.062616,0 9.166676,4.320057 9.166676,9.649123 z"/>';
			icons['GROUND.M1.DIVISION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >D</text>';
		icons['GROUND.M1.DOG'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >DOG</text>';
		icons['GROUND.M1.DRILLING'] = '<path d="m 90,60 5,15 10,0 5,-15 z"/>';
		icons['GROUND.M1.ELECTRO-OPTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >EO</text>';
		icons['GROUND.M1.ENHANCED'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ENH</text>';
		icons['GROUND.M1.EXPLOSIVE ORDNANCE DISPOSAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >EOD</text>';
		icons['GROUND.M1.FIRE DIRECTION CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >FDC</text>';
		icons['GROUND.M1.FORCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >F</text>';
		icons['GROUND.M1.FORWARD'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >FWD</text>';
		icons['GROUND.M1.GROUND STATION MODULE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GSM</text>';
		icons['GROUND.M1.LANDING SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LS</text>';
			icons['GROUND.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LCCP</text>';
		icons['GROUND.M1.LARGE EXTENSION NODE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LEN</text>';
		icons['GROUND.M1.MAINTENANCE'] = '<path fill="none" d="m 84,70 32,0 m 4,-5 c -5,0 -5,10 0,10 M 80,65 c 5,0 5,10 0,10"/>';
			icons['GROUND.M1.MEDEVAC'] = icons['AIR.M1.MEDEVAC']
		icons['GROUND.M1.METEOROLOGICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MET</text>';
		icons['GROUND.M1.MINE COUNTERMEASURE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCM</text>';
		icons['GROUND.M1.MISSILE'] = '<path d="M95,80 L95,60 C95,55 105,55 105,60 L105,80 M100,80 L100,55"  fill="none"/>';
		icons['GROUND.M1.(MOBILE) ADVISOR AND SUPPORT'] = '<path d="m 105,65 5,5 -5,5 M 90,70 c 20,0 20,0 20,0 m 15,0 c 0,2.761424 -2.23858,5 -5,5 -2.76142,0 -5,-2.238576 -5,-5 0,-2.761424 2.23858,-5 5,-5 2.76142,0 5,2.238576 5,5 z m -40,0 c 0,2.761424 -2.238576,5 -5,5 -2.761424,0 -5,-2.238576 -5,-5 0,-2.761424 2.238576,-5 5,-5 2.761424,0 5,2.238576 5,5 z"  fill="none"/>';
		icons['GROUND.M1.MOBILE SUBSCRIBER EQUIPMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MSE</text>';
		icons['GROUND.M1.MOBILITY SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MS</text>';
		icons['GROUND.M1.MOVEMENT CONTROL CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCC</text>';
		icons['GROUND.M1.MULTINATIONAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MN</text>';
		icons['GROUND.M1.MULTINATIONAL SPECIALIZED UNIT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MSU</text>';
		icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] = '<path  d="M85,75 l15,-15 15,15 M85,67 l15,-15 15,15" fill="none"/>';
		icons['GROUND.M1.NATO MEDICAL ROLE 1'] = '<text stroke="none" text-anchor="middle" x="120" y="77" font-size="25" >1</text>';
		icons['GROUND.M1.NATO MEDICAL ROLE 2'] = '<text stroke="none" text-anchor="middle" x="120" y="77" font-size="25" >2</text>';
		icons['GROUND.M1.NATO MEDICAL ROLE 3'] = '<text stroke="none" text-anchor="middle" x="120" y="77" font-size="25" >3</text>';
		icons['GROUND.M1.NATO MEDICAL ROLE 4'] = '<text stroke="none" text-anchor="middle" x="120" y="77" font-size="25" >4</text>';
		icons['GROUND.M1.NAVAL'] = translate(0,-35,scale(0.6, icons['GROUND.ICON.NAVAL']))
		icons['GROUND.M1.NODE CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >NC</text>';
		icons['GROUND.M1.NUCLEAR'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >N</text>';
		icons['GROUND.M1.OPERATIONS'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OPS</text>';
			icons['GROUND.M1.OPTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OPT</text>';
				icons['GROUND.M1.OTHER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OTH</text>';
			icons['GROUND.M1.PERSONNEL RECOVERY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >H</text>';
		icons['GROUND.M1.RADAR'] =  translate(0,-30,scale(0.5, icons['GROUND.ICON.RADAR']));
				icons['GROUND.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RF</text>';
			icons['GROUND.M1.RAILROAD'] = translate(0,-50,'<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="75" cy="125" r="5" /><circle fill="none" cx="125" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />');
		icons['GROUND.M1.RADIOLOGICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RAD</text>';
				icons['GROUND.M1.RANGER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RGR</text>';
			icons['GROUND.M1.RECON'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >R</text>';
		icons['GROUND.M1.SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SAR</text>';
		icons['GROUND.M1.SECURITY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SEC</text>';
		icons['GROUND.M1.SENSOR'] = '<path  d="m 100,55 c -2,5 -5,8 -10,10 5,2 8,5 10,10 2,-5 5,-8 10,-10 -5,-2 -8,-5 -10,-10 z"/>';
		icons['GROUND.M1.SENSOR CONTROL MODULE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SCM</text>';
		icons['GROUND.M1.SIGNALS INTELLIGENCE'] = '<path fill="none" d="m 100,55 0,23 m -15,-18 5,-5 5,5 5,-5 5,5 5,-5 5,5"/>';
			icons['GROUND.M1.SIGNAL SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SPT</text>';
		icons['GROUND.M1.SINGLE SHELTER SWITCH'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SSS</text>';
		icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] = '<path  d="M85,75 l15,-15 15,15" fill="none"/>';
			icons['GROUND.M1.SMALL EXTENSION NODE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SEN</text>';
		icons['GROUND.M1.SMOKE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >S</text>';
			icons['GROUND.M1.SMOKE/DECON'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SD</text>';
		icons['GROUND.M1.SNIPER'] = '<path d="M75,55 l20,0 M100,80 l0,-20 M125,55 l-20,0" fill="none" />';
		icons['GROUND.M1.SOUND RANGING'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SDR</text>';
				icons['GROUND.M1.SPECIAL OPERATIONS FORCES (SOF)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >SOF</text>';
		icons['GROUND.M1.SPECIAL WEAPONS AND TACTICS'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >SWAT</text>';
				icons['GROUND.M1.SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >SPT</text>';
		icons['GROUND.M1.SURVEY'] = '<path d="m 108,78 -8,-8 m 0,0 -8,8 m 8,-8 0,-15 15,8 z"/>';
		icons['GROUND.M1.TACTICAL EXPLOITATION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >TE</text>';
		icons['GROUND.M1.TARGET ACQUISITION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >TA</text>';
		icons['GROUND.M1.TOPOGRAPHIC'] = '<path fill="none" d="m 92,65 c 6,3 10,3 16,0 m -18,13 10,-23 10,23"/>';
			icons['GROUND.M1.UNMANNED AERIAL VEHICLE'] = icons['AIR.M1.UNMANNED AERIAL VEHICLE'];
		icons['GROUND.M1.UTILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >U</text>';
		icons['GROUND.M1.VIDEO IMAGERY'] = '<path fill="none" d="m 120,65 -11,0 m 11,10 -14,0 m 4,-14 -30,0 0,18 25,0 z m 10,2 0,14"/>';




		icons['GROUND.M2.AIRBORNE'] = '<path d="M75,140 C75,125 100,125 100,140 C100,125 125,125 125,140"  stroke-width="'+(this.strokeWidth/3*2)+'" fill="none"></path>';
		icons['GROUND.M2.ARCTIC'] = '<path d="M115,125 C125,125 125,135 115,135 L85,135 C75,135 75,125 85,125" fill="none"/>';
				icons['GROUND.M2.ATTACK'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >A</text>';
		icons['GROUND.M2.BATTLE DAMAGE REPAIR'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >BDR</text>';
		icons['GROUND.M2.BICYCLE EQUIPPED'] = '<path d="m 111,133 a 11,11 0 1 1 -22,0 11,11 0 1 1 22,0 z" fill="none"/>';
		icons['GROUND.M2.CASUALTY STAGING'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >CS</text>';
		icons['GROUND.M2.CLEARING'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >CLR</text>';
		icons['GROUND.M2.CLOSE RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >CR</text>';
				icons['GROUND.M2.COMBAT SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-size="20" >CSAR</text>';
		icons['GROUND.M2.CONTROL'] = '<path d="m 98,130 2,-4 2,4 m -8,8 -4,-2 4,-2 m 8,8 -2,4 -2,-4 m 8,-8 4,2 -4,2 m -14,-2 16,0 m -8,-8 0,16" fill="none" />';
			icons['GROUND.M2.CROSS-COUNTRY TRUCK'] = '<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="100" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />';
			icons['GROUND.M2.CAVALRY'] = '<text stroke="none" text-anchor="middle" x="110" y="140" font-size="25" >CAV</text>';
		icons['GROUND.M2.DECONTAMINATION'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >D</text>';
		icons['GROUND.M2.DEMOLITION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >DEM</text>';
		icons['GROUND.M2.DENTAL'] = '<text stroke="none"  x="108" y="133" font-family="Arial" font-size="25" font-weight="bold" >D</text>';
		icons['GROUND.M2.DIGITAL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >DIG</text>';
		icons['GROUND.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM'] = '<path d="m 87,142 13,-12 13,12 m -13,-20 0,20 0,0" fill="none"/>';
		icons['GROUND.M2.EQUIPMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >E</text>';
			icons['GROUND.M2.EQUIMENT/TROOP'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >E/T</text>';
		icons['GROUND.M2.HEAVY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >H</text>';
		icons['GROUND.M2.HIGH ALTITUDE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >HA</text>';
				icons['GROUND.M2.HIGH TO MEDIUM ALTITUDE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >HMA</text>';
				icons['GROUND.M2.HIGH TO LOW ALTITUDE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >HLA</text>';
		icons['GROUND.M2.INTERMODAL'] = '<path d="m 80,125 40,0 0,-4 8,9 -8,9 0,-4 -40,0 0,4 -8,-9 8,-9 z" fill="none"/>';
		icons['GROUND.M2.INTENSIVE CARE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >IC</text>';
		icons['GROUND.M2.LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >L</text>';
		icons['GROUND.M2.LABORATORY'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >LAB</text>';
		icons['GROUND.M2.LAUNCHER'] = '<polyline fill="none" points="80,140 115,120 120,140" />';
		icons['GROUND.M2.LONG RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >LR</text>';
			icons['GROUND.M2.LONG RANGE SURVEILLANCE'] = '<text stroke="none" text-anchor="middle" x="110" y="140" font-size="25" >LRS</text>';
		icons['GROUND.M2.LOW ALTITUDE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >LA</text>';
		icons['GROUND.M2.MEDIUM'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >M</text>';
		icons['GROUND.M2.MEDIUM ALTITUDE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >MA</text>';
				icons['GROUND.M2.MEDIUM TO LOW ALTITUDE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >MLA</text>';
		icons['GROUND.M2.MEDIUM RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >MR</text>';
		icons['GROUND.M2.MOUNTAIN'] = '<polyline  stroke="none" stroke-width="0" points="90,140 100,120 110,140" />';
		icons['GROUND.M2.MULTIPLE ALTITUDES'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >H/MA</text>';
		icons['GROUND.M2.MULTI-CHANNEL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >MC</text>';
		icons['GROUND.M2.OPTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >OPT</text>';
		icons['GROUND.M2.PACK ANIMAL'] = '<path d="m 84,140 9,-15 7,15 7,-15 9,15" fill="none"/>';
		icons['GROUND.M2.PATIENT EVACUATION COORDINATION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >PEC</text>';
		icons['GROUND.M2.PREVENTIVE MAINTENANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >PM</text>';
		icons['GROUND.M2.PSYCHOLOGICAL'] = '<text stroke="none"  x="108" y="133" font-family="Arial" font-size="25" font-weight="bold" >P</text>';
		icons['GROUND.M2.RADIO RELAY LINE OF SIGHT'] = '<path d="m 110,132 a 10,10 0 1 1 -20,0 10,10 0 1 1 20,0 z" fill="none"/><path d="M 90.75 128.15625 C 90.260514 129.33588 90 130.64329 90 132 C 90 133.35671 90.260514 134.66412 90.75 135.84375 L 100 132 L 90.75 128.15625 z M 100 132 L 109.25 135.84375 C 109.73949 134.66412 110 133.35671 110 132 C 110 130.64329 109.73949 129.33588 109.25 128.15625 L 100 132 z "/>';
		icons['GROUND.M2.RAILROAD'] = '<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="75" cy="125" r="5" /><circle fill="none" cx="125" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />';
		icons['GROUND.M2.RECOVERY (UNMANNED SYSTEMS)'] = '<path d="m 70,125 c0,20 60,20 60,0" fill="none" />';
		icons['GROUND.M2.RECOVERY (MAINTENANCE)'] = '<path fill="none" d="M75,125 c8,0 8,16 0,16 m8,-8 l35,0 m8,-8 c-8,0 -8,16 0,16"/>';
				icons['GROUND.M2.REFUEL'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >K</text>';
		icons['GROUND.M2.RESCUE COORDINATION CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >RCC</text>';
		icons['GROUND.M2.RIVERINE'] = '<path d="m 80,125 c 0,10 40,10 40,0 z" fill="none" />';
		icons['GROUND.M2.SINGLE CHANNEL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >SC</text>';
		icons['GROUND.M2.SKI'] = '<path d="m 95,145 -9,-8 m 28,0 -9,8 m -15,-24 20,20 m 0,-20 -20,20" fill="none" />';
		icons['GROUND.M2.SHORT RANGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >SR</text>';
		icons['GROUND.M2.STRATEGIC'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >STR</text>';
			icons['GROUND.M2.STRATEGIC MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >S</text>';
		icons['GROUND.M2.SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >SPT</text>';
		icons['GROUND.M2.TACTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >TAC</text>';
			icons['GROUND.M2.TACTICAL MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >T</text>';
			icons['GROUND.M2.TARGET ACQUISITION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >TA</text>';
		icons['GROUND.M2.TOWED'] = '<path  d="M70,120 l60,0" fill="none"/><circle fill="none" cx="65" cy="120" r="5" /><circle fill="none" cx="135" cy="120" r="5" />';
		icons['GROUND.M2.TROOP'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >T</text>';
			icons['GROUND.M2.TRACKED'] = '<path d="M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10"  fill="none" />'
			icons['GROUND.M2.TRUCK'] = '<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />';
				icons['GROUND.M2.UTILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >U</text>';
		icons['GROUND.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING '] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-size="20" >VSTOL</text>';
		icons['GROUND.M2.VETERINARY'] = '<text stroke="none"  x="108" y="133" font-family="Arial" font-size="25" font-weight="bold" >V</text>';
		icons['GROUND.M2.WHEELED'] = '<circle cx="70" cy="125" r="4" fill="none"  /><circle cx="100" cy="125" r="4" fill="none"  /><circle cx="130" cy="125" r="4" fill="none"  />';

		// Individual and Organization ---------------------------------------------------

		//TODO Put in APP6C symbols here, some we already have... 

		// Ground Equipment --------------------------------------------------------------
			icons['GROUND.EQUIPMENT.SHORT RANGE'] = '<path d="m 85,100 30,0" fill="none" />';
			icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'] = '<path d="m 85,105 30,0 m -30,-10 30,0" fill="none" />';
			icons['GROUND.EQUIPMENT.LONG RANGE'] = '<path d="m 85,110 30,0 m -30,-20 30,0 m -30,10 30,0" fill="none" />';
		icons['GROUND.EQUIPMENT.RIFLE'] = '<path d="m 100,60 0,80 M 85,75 100,60 115,75" fill="none" />';
		icons['GROUND.EQUIPMENT.MACHINE GUN'] = '';
		icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] = icons['GROUND.EQUIPMENT.RIFLE'] + '<circle cx="100" cy="90" r="15" fill="none"/>';
		icons['GROUND.EQUIPMENT.FLAME THROWER'] = '<path fill="none" d="m 90,135 0,-70 c 0,-15 20,-15 20,0" />';
		icons['GROUND.EQUIPMENT.AIR DEFENCE GUN'] = '<path d="m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-80 0,65 m 15,-45 0,40 m -30,-40 0,40" fill="none" />' + (this.force2525?'':'<path d="M 85,75 100,60 115,75" fill="none" />');
		icons['GROUND.EQUIPMENT.ANTITANK GUN'] = '<path d="m 85,140 15,-15 15,15 m -15,-80 0,65 m -15,-45 0,40 m 30,-40 0,40" fill="none" />';
		icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] = '<path d="m 100,60 0,80 m 15,-60 0,40 m -30,-40 0,40" fill="none" />';
		icons['GROUND.EQUIPMENT.RECOILLESS GUN'] = '<path d="m 85,75 15,-15 15,15 m 0,5 0,40 m -30,-40 0,40 m 15,-60 0,80" fill="none" />';
		icons['GROUND.EQUIPMENT.HOWITZER'] = '<circle cx="100" cy="130" r="10" fill="none"/><path d="m 115,80 0,40 m -30,-40 0,40 m 15,-60 0,60" fill="none" />' + (this.force2525?'':'<path d="M 85,75 100,60 115,75" fill="none" />');
			icons['GROUND.EQUIPMENT.HOWITZER TRACKED'] = '<path d="M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10"  fill="none" />'
		icons['GROUND.EQUIPMENT.MISSILE LAUNCHER'] = '<path d="m 100,140 0,-80 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65" fill="none" />';
		icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] = '<path d="m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-15 0,-65 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65" fill="none" />';
			icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >R</text>';
			icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >E</text><text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >R</text>';
			icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >T</text>';
		icons['GROUND.EQUIPMENT.ANTITANK MISSILE LAUNCHER'] = '<path d="m 85,140 15,-15 15,15 M 85,130 85,75 c 0,-20 30,-20 30,0 l 0,55 m -15,-5 0,-65" fill="none" />';
		icons['GROUND.EQUIPMENT.SURFACE-TO-SURFACE MISSILE LAUNCHER'] = icons['GROUND.EQUIPMENT.MISSILE LAUNCHER'] + (this.force2525?'<path d="m 85,140 30,0" fill="none" />':'');		
		icons['GROUND.EQUIPMENT.MORTAR'] = '<path d="m 100,60 0,60 M 85,75 100,60 115,75" fill="none" /><circle cx="100" cy="130" r="10" fill="none"/>';	
		icons['GROUND.EQUIPMENT.SINGLE ROCKET LAUNCHER'] = '<path d="m 85,75 15,-15 15,15 m -15,-5 0,70 M 85,85 100,70 115,85" fill="none" /> ';
		icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] = '<path d="m 115,90 0,40 m -30,-40 0,40 m 0,-55 15,-15 15,15 m -15,-5 0,70 M 85,85 100,70 115,85" fill="none" /> ';
		icons['GROUND.EQUIPMENT.ANTITANK ROCKET LAUNCHER'] = '<path d="m 85,140 15,-15 15,15 M 85,85 100,70 115,85 m -15,-15 0,55 M 85,75 100,60 115,75" fill="none" /> ';
		icons['GROUND.EQUIPMENT.NON-LETHAL WEAPON'] = '';		
		icons['GROUND.EQUIPMENT.TASER'] = '';		
		icons['GROUND.EQUIPMENT.WATER CANNON'] = '';	

			icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] = '<path d="m 70,130 60,0" fill="none" /><circle cx="75" cy="135" r="5" fill="none"/><circle cx="125" cy="135" r="5" fill="none"/>';				
			icons['GROUND.EQUIPMENT.CROSS-COUNTRY'] = '<path d="m 70,130 60,0" fill="none" /><circle cx="75" cy="135" r="5" fill="none"/><circle cx="100" cy="135" r="5" fill="none"/><circle cx="125" cy="135" r="5" fill="none"/>';	

		icons['GROUND.EQUIPMENT.ARMOURED FIGHTING VEHICLE'] = '<path d="m 70,100 30,-30 30,30 -30,30 z m 60,-30 0,60 m -60,-60 0,60 0,0" fill="none" />';			
		icons['GROUND.EQUIPMENT.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL'] = icons['GROUND.EQUIPMENT.ARMOURED FIGHTING VEHICLE'] + '<path d="m 80,90 20,15 0,-10 20,15" fill="none" />';			
		icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] = '<path fill="none" d="m 70,80 30,-10 30,10 0,0 m -60,50 60,0 m 0,-60 0,60 m -60,-60 0,60 0,0" />';
			icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + '<path d="m 70,972.36218 60,0" fill="none" />';
			icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE'] = '<path fill="none" d="M 130,80 70,130" />';
		icons['GROUND.EQUIPMENT.AMPHIBIOUS ARMOURED PERSONNEL CARRIER'] = '';		
		icons['GROUND.EQUIPMENT.ARMOURED MEDICAL PERSONNEL CARRIER'] = '<path fill="none" d="m 70,100 60,0 m -30,-30 0,60" />';		
		icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE'] = '';		
		icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];		
			icons['GROUND.EQUIPMENT.ARMOURED VEHICLE'] =  '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >A</text>';
			icons['GROUND.EQUIPMENT.ARMORED CARRIER WITH VOLCANO'] =  '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >V</text>';
		icons['GROUND.EQUIPMENT.ARMOURED PROTECTED RECOVERY VEHICLE'] = '';	
		icons['GROUND.EQUIPMENT.MEDICAL EVACUATION ARMOURED PROTECTED VEHICLE'] = '';		
		
		icons['GROUND.EQUIPMENT.TANK'] = '<path fill="none" d="m 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60" />';
		icons['GROUND.EQUIPMENT.LIGHT TANK'] = '<path fill="none" d="m 100,80 0,40" />';
		icons['GROUND.EQUIPMENT.MEDIUM TANK'] = '<path fill="none" d="m 105,80 0,40 m -10,-40 0,40" />';
		icons['GROUND.EQUIPMENT.HEAVY TANK'] = '<path fill="none" d="m 110,80 0,40 m -20,-40 0,40 m 10,-40 0,40" />';
		icons['GROUND.EQUIPMENT.TANK RECOVERY VEHICLE'] = '<path fill="none" d="m 85,100 30,0 m 10,-10 c -13.06403,0 -12.36705,20 0,20 M 75,90 c 12.673413,0.258545 12.735146,20.25161 0,20" />';		
		
		icons['GROUND.EQUIPMENT.BRIDGE'] = '<path d="m 115,75 -10,10 0,30 10,10 m -30,-50 10,10 0,30 -10,10 m -15,-55 60,0 0,60 -60,0 0,-60" fill="none" />';		
		icons['GROUND.EQUIPMENT.BRIDGE MOUNTED ON UTILITY VEHICLE'] = '';		
		icons['GROUND.EQUIPMENT.FIXED BRIDGE'] = '';		
		icons['GROUND.EQUIPMENT.FOLDING GIRDER BRIDGE'] = '';		
		icons['GROUND.EQUIPMENT.HOLLOW DECK BRIDGE'] = '';		
		icons['GROUND.EQUIPMENT.DRILL'] = icons['GROUND.ICON.DRILLING'];		
		icons['GROUND.EQUIPMENT.DRILL MOUNTED ON VEHICLE'] = '';		
			icons['GROUND.EQUIPMENT.DOZER'] = '<path d="m 90,60 20,0 m -10,0 0,20 m -30,0 60,0 m -60,-10 0,60 0,0 m 60,-60 0,60 m -60,-10 60,0" fill="none" />';
			icons['GROUND.EQUIPMENT.DOZER ARMORED'] = '<path d="m 70,130 60,0 m -30,-70 0,10 m -30,10 30,-10 30,10 m 0,-10 0,60 m -60,-60 0,60 0,0 m 20,-70 20,0" fill="none" />';
		icons['GROUND.EQUIPMENT.EARTHMOVER'] = '<path d="m 100,60 0,20 m -25,-15 5,-5 40,0 5,5 m -55,15 60,0 m -60,40 60,0 m 0,-50 0,60 m -60,-60 0,60 0,0" fill="none" />';		
		icons['GROUND.EQUIPMENT.MULTIFUNCTIONAL EARTHMOVER/DIGGER'] = '';			
		icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] = '<path d="m 100,80 0,15 -30,25 60,0 -30,-25" fill="none" />';
		icons['GROUND.EQUIPMENT.MINE CLEARING VEHICLE'] = '';		
		icons['GROUND.EQUIPMENT.MINE LAYING EQUIPMENT'] = '';			
		icons['GROUND.EQUIPMENT.MINE LAYING VEHICLE'] = '<path d="m 90,85 20,30 m 0,-30 -20,30 m 10,-30 0,30" fill="none" /><circle cx="100" cy="100" r="10"/>';
			icons['GROUND.EQUIPMENT.MINE SCATTERABLE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >S</text><circle cx="85" cy="115" r="5" fill="none"/><circle cx="100" cy="115" r="5" fill="none"/><circle cx="115" cy="115" r="5" fill="none"/>'
		
		icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] = '<path fill="none" d="m 70,70 c 0,15 60,15 60,0 m -60,60 60,0 m -60,-60 0,60 0,0 m 60,-60 0,60" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE BACKHOE'] = '<path fill="none" d="M 130,130 100,80 75,95 75,95" /><path d="M 75,105 85,95 75,95 z" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE FERRY TRANSPORTER'] = '<path fill="none" d="m 75,100 c 15,15 35,15 50,0 z" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE LIGHT'] = '<path fill="none" d="M 100,81.25 100,130" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE MEDIUM'] = '<path fill="none" d="m 105,130 0.009,-48.890538 M 95,130 95.01288,81.110678" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE HEAVY'] = '<path fill="none" d="m 110,130 0,-50 m -20,50 0,-50 m 10,1.25 0,48.75" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK'] = '<path fill="none" d="m 130,130 -40,-40 0,25 c 0,5 -10,5 -10,0" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK.LIGHT'] = '<path fill="none" d="m 105,115 10,-10" />';
			icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK.HEAVY'] = '<path fill="none" d="m 120,110 -10,10 m -10,-10 10,-10 m -5,15 10,-10" />';
		icons['GROUND.EQUIPMENT.MEDICAL VEHICLE'] = '';			
		icons['GROUND.EQUIPMENT.MEDICAL EVACUATION'] = '<path d="m 95,85 10,0 0,10 10,0 0,10 -10,0 0,10 -10,0 0,-10 -10,0 0,-10 10,0 z" />';		
		icons['GROUND.EQUIPMENT.BUS'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >B</text>';		
		icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY TRUCK'] = '';		
		icons['GROUND.EQUIPMENT.CROSS-COUNTRY TRUCK'] = '';		
		icons['GROUND.EQUIPMENT.SEMI-TRAILER TRUCK'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + '<path fill="none" d="m 140,90 0,20 m -10,-10 10,0" /><circle cx="75" cy="135" r="5" fill="none"/><circle cx="85" cy="135" r="5" fill="none"/><circle cx="125" cy="135" r="5" fill="none"/>';		
		icons['GROUND.EQUIPMENT.POL VEHICLE'] = '';		
		icons['GROUND.EQUIPMENT.WATER VEHICLE'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + '<path fill="none" d="m 70,95 c 10,0 0,10 10,10 10,0 0,-10 10,-10 10,0 0,10 10,10 10,0 0,-10 10,-10 10,0 0,10 10,10 10,0 0,-10 10,-10" />';		
		icons['GROUND.EQUIPMENT.TRAIN LOCOMOTIVE'] = '<path fill="none" d="m 70,70 0,60 60,0 0,-30 -30,0 0,-30 z" />';		
		icons['GROUND.EQUIPMENT.RAILCAR'] = '';		
		icons['GROUND.EQUIPMENT.CBRN EQUIPMENT'] = '<path  d="M80,140 c0,-20 10,-60 50,-63 m-10,63 c0,-20 -10,-60 -50,-63 " fill="none"/><circle cx="70" cy="85" r="8"/><circle cx="130" cy="85" r="8"/>'
		icons['GROUND.EQUIPMENT.COMPUTER SYSTEM'] = '';		
		icons['GROUND.EQUIPMENT.LASER'] = '<path fill="none" d="m 100,55 0,25 10,5 -20,5 20,5 -20,5 10,5 0,15 10,5 -20,5 20,5 -20,5 20,5 M 90,65 100,55 110,65" />';
		
		//2525  
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'] = '<path fill="none" d="m 100,125 0,-20" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'] = '<path fill="none" d="m 103,105 0,20 m -6,-20 0,20" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'] = '<path fill="none" d="m 106,105 0,20 m -12,-20 0,20 m 6,-20 0,20" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'] = '<path fill="none" d="m 140,105 0,20 m -10,-10 10,0" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.AUTOMOBILE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 5,0 0,-20 -20,0 0,-20 -20,0 0,20 -20,0 0,20 5,0 m 50,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z" /><path fill="none" stroke-width="'+(this.strokeWidth/3*2)+'" d="m 95,90 0,15 10,0 0,-15 z" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m 0,0 5,0 0,-20 -20,0 -20,0 0,-20 -20,0 0,20 0,20 5,0" /><path fill="none" stroke-width="'+(this.strokeWidth/3*2)+'" d="m 75,90 0,15 10,0 0,-15 z" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m 0,0 5,0 0,-20 0,-20 -20,0 -20,0 -20,0 0,20 0,20 5,0" /><path fill="none" stroke-width="'+(this.strokeWidth/3*2)+'" d="m 115,90 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 90,125 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m -35,0 20,0 m 15,0 5,0 0,-20 0,-20 -20,0 -20,0 0,20 -20,0 0,20 5,0" /><path fill="none" stroke-width="'+(this.strokeWidth/3*2)+'" d="m 95,90 0,15 10,0 0,-15 z" />';
			icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.JEEP TYPE VEHICLE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m 0,0 5,0 0,-20 -60,0 0,20 5,0 m 15,-20 5,-15" />';
			icons['GROUND.EQUIPMENT.PACK ANIMAL'] = '<path fill="none"  d="m 70,125 15,-50 15,50 15,-50 15,50 " />';
			icons['GROUND.EQUIPMENT.MISSILE SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="100" font-size="20" >MSL</text><text stroke="none" text-anchor="middle" x="100" y="115" font-size="20" >SPT</text>';
			icons['GROUND.EQUIPMENT.MISSILE TRANSLOADER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >MSL</text><path fill="none"  d="m 75,70 50,0 m -25,10 c 0,-5 0,-10 0,-10" />';
			icons['GROUND.EQUIPMENT.MISSILE TRANSPORTER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >MSL</text><path fill="none"  d="m 55,85 90,0" />';
			icons['GROUND.EQUIPMENT.MISSILE CRANE/LOADING DEVICE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >MSL</text><path fill="none"  d="m 75,80 25,-20 c 0,0 0,15 0,15 l 5,0 0,-5" />';
			icons['GROUND.EQUIPMENT.MISSILE PROPELLANT TRANSPORTER'] = '<text stroke="none" text-anchor="middle" x="90" y="110" font-size="20" >MSL</text><path fill="none"  d="m 120,115 0,-15 -10,-10 20,0 -10,10" />';
			icons['GROUND.EQUIPMENT.MISSILE WARHEAD TRANSPORTER'] = '<text stroke="none" text-anchor="middle" x="100" y="100" font-size="20" >MSL</text><text stroke="none" text-anchor="middle" x="100" y="115" font-size="20" >WHD</text>';
		//End 2525			

		icons['GROUND.EQUIPMENT.LAND MINE'] = '<path fill="none" d="m 70,65 60,0 -30,65 z" /><text stroke="none" text-anchor="middle" x="100" y="90" font-family="Arial" font-size="30" font-weight="bold" >M</text>';
		icons['GROUND.EQUIPMENT.ANTIPERSONNEL LAND MINE'] = '<circle cx="100" cy="100" r="22"/><path d="M117,82 l20,-18 -18,25z M83,82 l-20,-18 18,25z" stroke="none" />';
			icons['GROUND.EQUIPMENT.ANTIPERSONNEL LAND MINE LESS THAN LETHAL'] = '<circle cx="100" cy="100" r="22" fill="none" /><path d="M117,82 l20,-18 -18,25z M83,82 l-20,-18 18,25z" stroke="none" />';
		icons['GROUND.EQUIPMENT.ANTITANK LAND MINE'] = '';		
		icons['GROUND.EQUIPMENT.IMPROVISED EXPLOSIVE DEVICE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IED</text>';		
			icons['GROUND.EQUIPMENT.LAND MINES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >M</text><path fill="none" d="' + (this.force2525?'m 135,70 -70,0 35,70 z':'m 65,130 70,0 -35,-70 z') + '" />';


		icons['GROUND.EQUIPMENT.SENSOR'] = '<path d="m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z" />';		
		icons['GROUND.EQUIPMENT.SENSOR EMPLACED'] = scale(0.9,icons['GROUND.EQUIPMENT.SENSOR']) + '<path fill="none" d="m 70,75 10,-15 10,15 10,-15 10,15 10,-15 10,15" />';
		icons['GROUND.EQUIPMENT.RADAR'] = '<path d="M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50"  fill="none" />';		

		icons['GROUND.EQUIPMENT.ANTENNAE'] = '';		
		icons['GROUND.EQUIPMENT.GENERATOR SET'] = '';		
		icons['GROUND.EQUIPMENT.PSYCHOLOGICAL OPERATIONS EQUIPMENT'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '" d="m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z" />';	
		icons['GROUND.EQUIPMENT.BOMB'] = '';		
		icons['GROUND.EQUIPMENT.BOOBY TRAP'] = '';		

		// Installation
		// Installations are not so structured in APP6C so we will reuse as many Symbols
		// as possible and just add new ones added here.
				icons['GROUND.INSTALLATION.ICON.ELDER CARE'] = '<path d="m 120.08612,119.14001 c 0,-6.28 2.28,-8.16 3.88,-12.6 0.96,-2.64 1.6,-3.28 1.84,-6.52 0.16,-2.4 0.88,-4.68 0.88,-7.24 v -2.64 c 0,-2.56 -2.24,-8.88 -3.32,-10.52 -1.32,-2 -4.84,-5.4 -6.72,-6.88 -2.24,-1.76 -5.36,-4.64 -8.24,-5.6 -1.56,-0.48 -9.8,-2.44 -11.4,-2.28 l -5.72,0.56 v 0.8 c 0,0.76 2,2.68 2.4,3.28 0,3.32 0.84,6.84 -1.32,8.36 -2.2,1.6 -2.76,3.44 -3.76,6.28 -0.36,0.96 -0.88,3.08 -1,4.04 -0.16,1.04 -0.2,4 -0.44,4.6 -1.08,2.44 -2.64,4.2 -3.76,6.36 l -5.08,0.48 c -2.12,3.16 -4.6,4.12 -4.6,9.64 v 26.36 c 0.64,0.16 0.36,0.2 0.88,0.2 0.48,0 0.28,-0.08 0.88,-0.2 v -27.48 c 0,-0.72 0.8,-3 1.08,-3.52 0.36,0.24 0.8,0.64 1.32,0.64 0.28,0 1.08,-0.32 1.32,-0.44 l 2.6,0.92 0.84,-0.56 0.56,2.48 c 0.36,0.32 0.36,0.48 0.84,0.48 h 0.44 c 0.52,0 0.64,-0.16 0.64,-0.64 v -0.44 c 0,-0.96 -1.16,-3 -1.52,-3.72 1.2,-2.48 6.32,-2.64 8.2,-5.84 0.92,-1.56 1.8,-2.96 2.56,-4.52 0.44,-0.88 2.32,-4.12 2.4,-4.4 h 4.4 c 2.32,0 2.12,2.52 2.6,4.2 0.6,1.96 2,2.04 2,4.56 0,2.8 -2.88,6.96 -4,8.96 -0.32,0.72 -3.88,8.76 -3.88,8.88 v 1.96 c 0,3 2.64,9.12 2.64,11.2 v 2.2 c -1.16,0.28 -6.8,2.44 -6.8,3.52 0,0.28 0.44,0.64 0.88,0.64 h 6.8 c 2.32,0 4.48,-1.04 6.6,-1.08 v -3.04 c 0,-0.56 -1.08,-2.16 -1.08,-3.72 -0.88,-1.32 -1.76,-5.96 -1.76,-8.16 0,-3.16 1.2,-5.44 2.48,-7.44 2.52,-4 0.4,-2.32 4.56,-5.08 l 1.8,1.72 c -1,1.8 -2.28,3.68 -2.28,6.4 v 5.92 h 0.44 v 0.64 c 0,0.92 5,8.96 5.72,10.32 -1.52,2.28 -6.72,1.64 -6.8,5.04 h 7.48 c 1.2,0 3.32,-1 4.52,-1.4 1.56,-0.52 2.92,-1.08 2.92,-3 0,-0.68 -2.92,-4.64 -3.56,-5.68 -0.32,-0.44 -2.36,-5.96 -2.36,-6.56 v -0.44 z m -45.28,-47.88 v 0.64 c 0,4.28 3.68,7.92 8.12,7.92 h 0.2 c 3.68,0 7.68,-3.64 7.68,-7.04 v -2.2 c 0,-3.16 -3.88,-6.8 -7.48,-6.8 h -1.24 c -3.44,0 -7.28,3.96 -7.28,7.48 z"  stroke="none" />';

			icons['GROUND.INSTALLATION.ICON.RAW MATERIAL PRODUCTION/STORAGE'] = '<text stroke="none" text-anchor="middle" x="100" y="90" font-size="30" >PS</text><text stroke="none" text-anchor="middle" x="100" y="120" font-size="30" >RM</text>';	
		icons['GROUND.INSTALLATION.ICON.MINE'] = '<path d="m 105,85 10,10 5,-5 c -5,-5 -10,-5 -15,-5 z M 95,85 85,95 80,90 c 5,-5 10,-5 15,-5 z m -5,5 30,30 m -40,0 30,-30" />';
			icons['GROUND.INSTALLATION.ICON.PROCESSING FACILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="90" font-size="30" >PROC</text><text stroke="none" text-anchor="middle" x="100" y="120" font-size="30" >FAC</text>';	
			icons['GROUND.INSTALLATION.ICON.UTILITY FACILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >UTIL</text>';	
			icons['GROUND.INSTALLATION.ICON.RESEARCH'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >R&amp;D</text>';	
			icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS'] = '<path d="m 95,80 10,20 -10,0 10,20"  fill="none" />';
			icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER'] = '<path d="M 100 80 C 91.715729 80 85 86.715729 85 95 C 85 101.53161 89.173315 107.06621 95 109.125 L 95 119.125 C 96.563504 119.67745 98.24734 120 100 120 C 101.75266 120 103.4365 119.67745 105 119.125 L 105 109.125 C 110.82668 107.06621 115 101.53161 115 95 C 115 86.715729 108.28427 80 100 80 z "  fill="none" />';
			icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER NUCLEAR'] = '<text stroke="none" text-anchor="middle" x="100" y="103" font-size="23" >N</text>';
			icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER DAM'] = '<text stroke="none" text-anchor="middle" x="100" y="103" font-size="23" >H</text>';
			icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER FOSSIL'] = '<text stroke="none" text-anchor="middle" x="100" y="103" font-size="23" >F</text>';
			icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY'] = '<path d="' + (this.force2525?'M 90.40625,82.4375 C 84.205239,85.834177 80,92.43094 80,100 l 20,0 -9.59375,-17.5625 z m 19.3125,0.09375 L 100,100 l 20,0 c 0,-7.513587 -4.15485,-14.050664 -10.28125,-17.46875 z M 100,100 89.71875,117.125 C 92.72722,118.93597 96.23267,120 100,120 c 3.76733,0 7.27278,-1.06403 10.28125,-2.875 L 100,100 z':'M 89.915583,82.533279 109.98318,82.70863 89.670332,117.12941 80.000085,99.941218 120.14717,100 110.01504,117.34656 z') + '"  fill="none" />';
			icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY WEAPONS GRADE'] = '<path d="' + (this.force2525?'M 90.40625,82.4375 C 84.205239,85.834177 80,92.43094 80,100 l 20,0 -9.59375,-17.5625 z m 19.3125,0.09375 L 100,100 l 20,0 c 0,-7.513587 -4.15485,-14.050664 -10.28125,-17.46875 z M 100,100 89.71875,117.125 C 92.72722,118.93597 96.23267,120 100,120 c 3.76733,0 7.27278,-1.06403 10.28125,-2.875 L 100,100 z':'M 89.915583,82.533279 109.98318,82.70863 89.670332,117.12941 80.000085,99.941218 120.14717,100 110.01504,117.34656 z') + '"  />';
			icons['GROUND.INSTALLATION.ICON.AIRCRAFT PRODUCTION & ASSEMBLY'] = '<path stroke="none" d="m 95.115068,109.26257 c 0,0 -20.792024,4.91169 -30.050651,6.66323 -2.232756,0.42239 -5.694141,0.17703 -6.467246,-1.95977 -0.408299,-1.12851 3.309817,-6.56991 6.467246,-7.25116 8.677581,-1.87229 25.673009,-5.48736 25.673009,-5.48736 l 3.135634,-16.070126 4.049866,-0.784892 0.261631,15.875138 25.608833,-5.814157 6.53142,-13.195632 5.29138,-1.37184 -3.26645,16.135289 14.0452,4.83427 -4.3115,1.17586 -13.71988,-2.809334 -23.58241,6.728864 31.61895,11.75864 -5.48736,2.54771 z" />';
			icons['GROUND.INSTALLATION.ICON.BRIDGE'] = '<path d="m 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10"  fill="none" />';
			icons['GROUND.INSTALLATION.ICON.BASE'] = '<path d="m 75,85 50,30 m -50,0 50,-30"  fill="none" />';
			icons['GROUND.INSTALLATION.ICON.SEA SURFACE INSTALLATION, OIL RIG/PLATFORM'] = '<path d="m 85,105 0,-40 m 25,40 0,15 m -35,0 0,-15 50,0 0,15"  fill="none" /><path d="m 85,90 15,0 0,15 -15,0 0,-15" />';

			icons['GROUND.INSTALLATION.M2.ATOMIC ENERGY REACTOR'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >A</text>';
			icons['GROUND.INSTALLATION.M2.NUCLEAR MATERIAL PRODUCTION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >P</text>';
			icons['GROUND.INSTALLATION.M2.NUCLEAR MATERIAL STORAGE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >S</text>';
			icons['GROUND.INSTALLATION.M2.CHEMICAL & BIOLOGICAL WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >B</text>';
			icons['GROUND.INSTALLATION.M2.SHIP CONSTRUCTION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >YRD</text>';

		icons['SEA.ICON.MILITARY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MIL</text>';
		icons['SEA.ICON.COMBATANT'] = '<path d="m 86.90058,110 c -3.58686,1.97051 -7.17372,3.94101 -10.76058,5.91152 2.10233,2.85955 6.67765,3.89305 10,2.06795 2.57091,-0.9204 4.65314,-3.78198 3.05804,-6.10243 -0.76582,-0.62567 -1.53164,-1.25136 -2.29746,-1.87704 z m 26.33903,0.12 c 3.58686,1.97051 7.17372,3.94101 10.76058,5.91152 -2.10233,2.85955 -6.67765,3.89305 -10,2.06795 -2.57091,-0.9204 -4.65314,-3.78198 -3.05804,-6.10243 0.76582,-0.62567 1.53164,-1.25136 2.29746,-1.87704 z"  fill="none" /><path d="m 112.86403,110 c -5.60278,-3.95772 -11.34647,-7.87086 -16.055296,-12.54103 -4.173483,-4.54288 -6.986826,-9.79084 -9.215516,-15.11341 -0.812657,4.42298 -0.887217,9.34081 2.406782,13.17851 3.631081,4.50958 8.646979,8.14967 13.46707,11.82149 2.31514,1.65315 4.68734,3.2543 7.0812,4.83359 0.77192,-0.72638 1.54384,-1.45277 2.31576,-2.17915 m -25.740383,0 c 5.602782,-3.95772 11.346472,-7.87086 16.055303,-12.54103 4.17348,-4.54288 6.98682,-9.79084 9.21551,-15.11341 0.81266,4.42298 0.88722,9.34081 -2.40678,13.17851 -3.63108,4.50957 -8.64698,8.14967 -13.467071,11.82149 -2.315138,1.65315 -4.687341,3.2543 -7.0812,4.83359 -0.771921,-0.72638 -1.543842,-1.45277 -2.315762,-2.17915" fill="' + symbolColors.white[symbol.affiliationType] + '" stroke-width="'+(this.strokeWidth/3*2)+'"/>';
		icons['SEA.ICON.SURFACE COMBATANT, LINE'] = '<path d="m 100,120 -25,-15 15,0 0,-10 5,0 0,-5 -15,0 0,-5 15,0 0,-5 10,0 0,5 15,0 0,5 -15,0 c 0,0 0,5 0,5 l 5,0 0,10 15,0 z"/>';
		icons['SEA.ICON.CARRIER'] = '<path d="m 80,100 20,20 20,-20 -20,0 0,-20 -20,0 z"/>';
		icons['SEA.ICON.BATTLESHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >BB</text>';
			icons['SEA.ICON.CRUISER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CC</text>';
		icons['SEA.ICON.CRUISER, GUIDED MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >CG</text>';
		icons['SEA.ICON.DESTROYER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >DD</text>';
		icons['SEA.ICON.FRIGATE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >FF</text>';
		icons['SEA.ICON.CORVETTE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >FS</text>';
		icons['SEA.ICON.LITTORAL COMBATANT SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LL</text>';
		icons['SEA.ICON.AMPHIBIOUS WARFARE SHIP'] = '<path d="m 100,120 20,0 m -20,0 -20,-20 10,0 0,-20 20,0 0,20 10,0 z"/>';
		icons['SEA.ICON.AMPHIBIOUS FORCE FLAGSHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LCC</text>';
		icons['SEA.ICON.AMPHIBIOUS ASSAULT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LA</text>';
		icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, GENERAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LHA</text>';
		icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LHD</text>';
		icons['SEA.ICON.AMPHIBIOUS TRANSPORT, DOCK'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LPD</text>';
		icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, HELICOPTER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LPH</text>';
		icons['SEA.ICON.LANDING SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LS</text>';
		icons['SEA.ICON.LANDING CRAFT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >LC</text>';
		icons['SEA.ICON.MINE WARFARE VESSEL'] = '<path d="M 98.34375 81.03125 L 98.34375 85.125 C 95.894986 85.449013 93.69472 86.471197 91.90625 88 L 88.40625 84.5 L 86.03125 86.875 L 89.625 90.46875 C 89.62027 90.47572 89.629716 90.49302 89.625 90.5 C 88.277196 92.495013 87.5 94.911166 87.5 97.5 C 87.5 98.352396 87.587435 99.195533 87.75 100 L 80 100 L 100 120 L 120 100 L 112.25 100 C 112.41256 99.195533 112.5 98.352396 112.5 97.5 C 112.5 94.797032 111.64589 92.294762 110.1875 90.25 L 113.84375 86.59375 L 111.46875 84.21875 L 107.875 87.8125 C 106.12557 86.384992 104.00534 85.435824 101.65625 85.125 L 101.65625 81.03125 L 98.34375 81.03125 z "/>';
		icons['SEA.ICON.MINELAYER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ML</text>';
		icons['SEA.ICON.MINESWEEPER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MS</text>';
		icons['SEA.ICON.MINESWEEPER, DRONE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MSD</text>';
		icons['SEA.ICON.MINEHUNTER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MH</text>';
		icons['SEA.ICON.MINE COUNTER MEASURE SUPPORT SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+ (this.force2525?'MA':'MCS') +'</text>';
		icons['SEA.ICON.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MCM</text>';
		icons['SEA.ICON.SEA SURFACE DECOY'] = '<path d="M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z"/>';
		icons['SEA.ICON.PATROL'] = '<path d="m 80,100 20,20 20,-20 -10,0 -10,-20 -10,20 z"/>';
		icons['SEA.ICON.PATROL CRAFT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PC</text>';
			icons['SEA.ICON.PATROL ANTI SUBMARINE WARFARE'] = '<path d="m 100,120 -25,-25 5,-5 10,10 5,0 0,-20 10,0 0,20 5,0 10,-10 5,5 z"/>';
			icons['SEA.ICON.PATROL ANTISHIP MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PM</text>';
			icons['SEA.ICON.PATROL TORPEDO'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PT</text>';
			icons['SEA.ICON.PATROL GUN'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PG</text>';
		icons['SEA.ICON.PATROL SHIP'] = '';
		icons['SEA.ICON.MILITARY SPEEDBOAT'] = '<path stroke="none" d="m 120,120 -40,0 -15,-25 15,0 5,-15 10,0 -5,15 45,0 z"/>';
		icons['SEA.ICON.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT'] = '<path stroke="none" d="M 85 80 L 80 95 L 65 95 L 80 120 L 120 120 L 135 95 L 90 95 L 95 80 L 85 80 z M 87 100.6875 L 93.09375 100.6875 C 94.623689 100.68751 95.747386 100.8021 96.4375 101.0625 C 97.134103 101.31642 97.677071 101.77996 98.09375 102.4375 C 98.510404 103.09506 98.718737 103.84116 98.71875 104.6875 C 98.718737 105.76173 98.412748 106.67188 97.78125 107.375 C 97.149728 108.07162 96.194 108.50521 94.9375 108.6875 C 95.56249 109.05209 96.096344 109.43881 96.5 109.875 C 96.910145 110.3112 97.434884 111.10547 98.125 112.21875 L 99.875 115 L 96.4375 115 L 94.34375 111.875 C 93.601554 110.76172 93.08593 110.06771 92.8125 109.78125 C 92.539056 109.48829 92.243483 109.29167 91.9375 109.1875 C 91.631504 109.07683 91.164057 109.03126 90.5 109.03125 L 89.90625 109.03125 L 89.90625 115 L 87 115 L 87 100.6875 z M 101.46875 100.6875 L 107.1875 100.6875 C 108.3203 100.68751 109.16536 100.74611 109.71875 100.84375 C 110.27864 100.93491 110.78254 101.10678 111.21875 101.40625 C 111.66145 101.70574 112.01952 102.12371 112.3125 102.625 C 112.60546 103.1198 112.74999 103.66277 112.75 104.28125 C 112.74999 104.95183 112.58332 105.56511 112.21875 106.125 C 111.86067 106.6849 111.36848 107.12631 110.75 107.40625 C 111.62238 107.66016 112.28124 108.07553 112.75 108.6875 C 113.21874 109.29948 113.46874 110.01693 113.46875 110.84375 C 113.46874 111.4948 113.30598 112.13151 113 112.75 C 112.70051 113.36198 112.27733 113.84766 111.75 114.21875 C 111.22916 114.58333 110.58072 114.82161 109.8125 114.90625 C 109.33072 114.95833 108.18619 114.98698 106.34375 115 L 101.46875 115 L 101.46875 100.6875 z M 104.34375 103.0625 L 104.34375 106.375 L 106.25 106.375 C 107.37629 106.37501 108.0703 106.34506 108.34375 106.3125 C 108.83853 106.25391 109.22004 106.09246 109.5 105.8125 C 109.78645 105.52605 109.93749 105.14975 109.9375 104.6875 C 109.93749 104.2448 109.80989 103.89845 109.5625 103.625 C 109.32161 103.34506 108.98176 103.18361 108.5 103.125 C 108.21353 103.09246 107.36067 103.06251 106 103.0625 L 104.34375 103.0625 z M 89.90625 103.09375 L 89.90625 106.75 L 92.03125 106.75 C 93.417961 106.75001 94.279939 106.6797 94.625 106.5625 C 94.970043 106.44532 95.242178 106.25522 95.4375 105.96875 C 95.632802 105.6823 95.74999 105.3047 95.75 104.875 C 95.74999 104.39324 95.604157 104.01173 95.34375 103.71875 C 95.089834 103.41928 94.749991 103.23439 94.28125 103.15625 C 94.046867 103.12371 93.328117 103.09376 92.15625 103.09375 L 89.90625 103.09375 z M 104.34375 108.75 L 104.34375 112.59375 L 107.03125 112.59375 C 108.07291 112.59375 108.72004 112.5586 109 112.5 C 109.42968 112.42188 109.79556 112.23698 110.0625 111.9375 C 110.33593 111.63151 110.46874 111.22657 110.46875 110.71875 C 110.46874 110.28907 110.36457 109.92448 110.15625 109.625 C 109.94791 109.32553 109.64713 109.10547 109.25 108.96875 C 108.85937 108.83204 108.0026 108.75001 106.6875 108.75 L 104.34375 108.75 z "/>'+ '<text  fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="none" text-anchor="middle" x="100" y="115" font-size="20" >RB</text>'
		icons['SEA.ICON.MILITARY JETSKI'] = '<path stroke="none" d="m 135,105 0,15 -60,0 -10,-15 20,-25 10,0 0,10 -5,0 -5,15 z"/>';
		icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'] = icons['AIR.ICON.UNMANNED AERIAL VEHICLE'];
		icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] = '<path d="m 110,80 15,15 0,25 M 90,80 75,95 l 0,25" fill="none"/>' + (this.force2525?'<path d="m 100,80 -15,15 0,25 30,0 0,-25 -15,-15"/>':'');
		icons['SEA.ICON.NAVY TASK FORCE'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(this.force2525?150:120)+'" font-size="30" >TF</text>';
		icons['SEA.ICON.NAVY TASK GROUP'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(this.force2525?150:120)+'" font-size="30" >TG</text>';
		icons['SEA.ICON.NAVY TASK UNIT'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(this.force2525?150:120)+'" font-size="30" >TU</text>';
		icons['SEA.ICON.NAVY TASK ELEMENT'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(this.force2525?150:120)+'" font-size="30" >TE</text>';
		icons['SEA.ICON.CONVOY'] = '<path d="m 80,115 -20,0 0,-35 80,0 0,35 -20,0 0,-20 -40,0 z"/>';
		icons['SEA.ICON.NONCOMBATANT'] = '<path d="m 80,100 0,-20 40,0 0,20 15,0 0,20 -70,0 0,-20 z"/>';
		icons['SEA.ICON.AUXILIARY SHIP'] =  '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(this.force2525?'AR':'AA')+'</text>';
		icons['SEA.ICON.AMMUNITION SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AE</text>';
		icons['SEA.ICON.STORES SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AF</text>';
		icons['SEA.ICON.AUXILIARY FLAG OR COMMAND SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AGF</text>';
		icons['SEA.ICON.INTELLIGENCE COLLECTOR'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(this.force2525?'JI':'AI')+'</text>';
		icons['SEA.ICON.OCEAN RESEARCH SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AGO</text>';
		icons['SEA.ICON.SURVEY SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AGS</text>';
		icons['SEA.ICON.HOSPITAL SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AH</text>';
		icons['SEA.ICON.CARGO SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AK</text>';
		icons['SEA.ICON.COMBAT SUPPORT SHIP, FAST'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AOE</text>';
		icons['SEA.ICON.OILER, REPLENISHMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AO</text>';
		icons['SEA.ICON.REPAIR SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AR</text>';
		icons['SEA.ICON.SUBMARINE TENDER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AS</text>';
		icons['SEA.ICON.TUG, OCEAN GOING'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(this.force2525?'AS':'AT')+'</text>';
		icons['SEA.ICON.SERVICE CRAFT, YARD, GENERAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YY</text>';
		icons['SEA.ICON.BARGE, NOT SELF-PROPELLED'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YB</text>';
		icons['SEA.ICON.BARGE, SELF-PROPELLED'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YS</text>';
		icons['SEA.ICON.TUG, HARBOUR'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YT</text>';
		icons['SEA.ICON.LAUNCH'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YFT</text>';
		icons['SEA.ICON.CIVILIAN'] = '<text fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
		icons['SEA.ICON.MERCHANT SHIP, GENERAL'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"/>';
		icons['SEA.ICON.CARGO, GENERAL'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >'+(this.force2525?'CA':'A')+'</text>';
		icons['SEA.ICON.CONTAINER SHIP'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >C</text>';
		icons['SEA.ICON.DREDGE'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >D</text>';
		icons['SEA.ICON.ROLL ON-ROLL OFF'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >'+(this.force2525?'RO':'E')+'</text>';
		icons['SEA.ICON.FERRY'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >'+(this.force2525?'FE':'F')+'</text>';
		icons['SEA.ICON.HEAVY LIFT'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >H</text>';
		icons['SEA.ICON.HOVERCRAFT'] = '<path d="' + (this.force2525?'m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z':'m 90,80 0,15.5625 C 78.357887,96.937054 70,100.64828 70,105 c 0,5.52285 13.431458,10 30,10 16.56854,0 30,-4.47715 30,-10 0,-4.35172 -8.35789,-8.062946 -20,-9.4375 L 110,80 90,80 z m -15,40 50,0') + '" ' + (this.force2525?'stroke-width="0"':'') + '/>';
				icons['SEA.ICON.HOVERCRAFT 2525D'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >J</text>';
			icons['SEA.ICON.HOVERCRAFT CIVILIAN'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="' + (this.force2525?'m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z':'m 90,80 0,15.5625 C 78.357887,96.937054 70,100.64828 70,105 c 0,5.52285 13.431458,10 30,10 16.56854,0 30,-4.47715 30,-10 0,-4.35172 -8.35789,-8.062946 -20,-9.4375 L 110,80 90,80 z m -15,40 50,0') + '" />';
			icons['SEA.ICON.HOVERCRAFT NONCOMBATANT'] = '<path d="m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z" stroke-width="0" />' + (this.force2525?'<text fill="'+ symbolColors.white[symbol.affiliationType]+'" stroke="none" text-anchor="middle" x="100" y="120" font-size="30" >NC</text>':'');
		icons['SEA.ICON.MERCHANT SHIP, LASH CARRIER (WITH BARGES)'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >L</text>';
		icons['SEA.ICON.OILER/TANKER'] =  icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >'+(this.force2525?'OT':'O')+'</text>';
		icons['SEA.ICON.PASSENGER SHIP'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >'+(this.force2525?'PA':'P')+'</text>';
		icons['SEA.ICON.TUG, OCEAN GOING CIVILIAN'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(this.force2525?'30':'30')+'" >'+(this.force2525?'TU':'T')+'</text>';
		icons['SEA.ICON.TOW'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >TW</text>';
		icons['SEA.ICON.TRANSPORT SHIP, HAZARDOUS MATERIAL'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >HZ</text>';
		icons['SEA.ICON.JUNK/DHOW'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >QJ</text>';
		icons['SEA.ICON.BARGE, NOT SELF-PROPELLED'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >YB</text>';
				icons['SEA.ICON.HOSPITAL SHIP'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<path stroke="none" d="m 95,95 0,-15 10,0 0,15 15,0 0,10 -15,0 0,15 -10,0 0,-15 -15,0 0,-10 z"/>';
		icons['SEA.ICON.FISHING VESSEL'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 75,100 0,-15 20,0 0,15 50,0 -15,35 -60,0 -15,-35 z M 105,57.36218 105,100 m 30,-35 -30,35"/>';
		icons['SEA.ICON.DRIFTER'] = icons['SEA.ICON.FISHING VESSEL']  + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >DF</text>';
		icons['SEA.ICON.TRAWLER'] = icons['SEA.ICON.FISHING VESSEL']  + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >TR</text>';
			icons['SEA.ICON.FISHING VESSEL DREDGE'] = icons['SEA.ICON.FISHING VESSEL']  + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >DR</text>';
		icons['SEA.ICON.LAW ENFORCEMENT VESSEL'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<path d="m 135,100 -15,35 -10,0 15,-35 z"/>';
		icons['SEA.ICON.LEISURE CRAFT, SAILING BOAT'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 105,55 0,40 35,0 z m -5,-5 0,50 m 45,0 -15,35 -60,0 -15,-35 z"/>';
		icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 70,97.36218 15,-30 10,0 -15,30 65,0 -15,35 -60,0 -15,-35 z"/>';
		icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'] + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >RB</text>';
		icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, SPEEDBOAT'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'] + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >SP</text>';
		icons['SEA.ICON.LEISURE CRAFT, JETSKI'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 85,60 -30,45 10,15 75,0 0,-20 -60,0 10,-30 5,0 0,-10 z"/>';
		icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE (USV)'] = icons['AIR.ICON.CIVILIAN UNMANNED AERIAL VEHICLE'];
		icons['SEA.ICON.OWN SHIP'] = '<path fill="none" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" d="m 50,100 100,0 m -50,-50 0,100 m 50,-50 c 0,27.61424 -22.38576,50 -50,50 -27.614237,0 -50,-22.38576 -50,-50 0,-27.614237 22.385763,-50 50,-50 27.61424,0 50,22.385763 50,50 z"/>';
			icons['SEA.ICON.DITCHED AIRCRAFT'] = '<path fill="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" d="m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"/>';
			icons['SEA.ICON.PERSON IN WATER'] = '<path fill="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" d="m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"/>';
			icons['SEA.ICON.DISTRESSED VESSEL'] = '<path fill="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" d="m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"/>';
			icons['SEA.ICON.SEA MINELIKE'] = '<path fill="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" d="m 117.67767,75 c 3.53553,-3.53553 7.07107,-7.07107 7.07107,-7.07107 l 7.07107,7.07107 -7.07107,7.07107 m -49.497477,0 c -3.535534,-3.53553 -7.071068,-7.07107 -7.071068,-7.07107 l 7.071068,-7.07107 7.071067,7.07107 M 95,70 c 0,-5 0,-10 0,-10 l 10,0 0,10 m 25,30 c 0,16.56854 -13.43146,30 -30,30 -16.568542,0 -30,-13.43146 -30,-30 0,-16.56854 13.431458,-30 30,-30 16.56854,0 30,13.43146 30,30 z"/>';
			icons['SEA.ICON.NAVIGATIONAL'] = '<path fill="none" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:'red')+'" d="m 75,90 -10,10 70,0 -10,10"/>';
			icons['SEA.ICON.ICEBERG'] = '<path fill="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" stroke="'+(this.monoColor?symbolColors.iconColor[symbol.affiliationType]:symbolColors.iconFillColor[symbol.affiliationType])+'" d="m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0"/>';
		
				icons['SEA.M1.OWN SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OWN</text>';
		icons['SEA.M1.ANTIAIR WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >AAW</text>';
		icons['SEA.M1.ANTISUBMARINE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ASW</text>';
		icons['SEA.M1.ESCORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >E</text>';
		icons['SEA.M1.ELECTRONIC WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >EW</text>';
		icons['SEA.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ISR</text>';
		icons['SEA.M1.MINE COUNTER MEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCM</text>';
				icons['SEA.M1.MISSILE DEFENSE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MD</text>';
		icons['SEA.M1.MEDICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ME</text>';
			icons['SEA.M1.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCM</text>';
		icons['SEA.M1.MINE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MIW</text>';
		icons['SEA.M1.REMOTE MULTI-MISSION VEHIHLE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RMV</text>';
		icons['SEA.M1.SPECIAL OPERATIONS FORCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SOF</text>';
		icons['SEA.M1.SURFACE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SUW</text>';
		icons['SEA.M1.BALLISTIC MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >B</text>';
		icons['SEA.M1.GUIDED MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >G</text>';
		icons['SEA.M1.OTHER GUIDED MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >M</text>';
		icons['SEA.M1.TORPEDO'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >T</text>';
		icons['SEA.M1.DRONE-EQUIPPED'] = icons['AIR.M1.UNMANNED AERIAL VEHICLE'];
		icons['SEA.M1.HELICOPTER-EQUIPPED'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >H</text>';
				icons['SEA.M1.BALLISTIC MISSILE DEFENSE, SHOOTER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >BM</text>';
				icons['SEA.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ST</text>';
				icons['SEA.M1.SEA-BASE X-BAND'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SBX</text>';
				icons['SEA.M1.HIJACKING/HIJACKED'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >H</text>';


		icons['SEA.M2.NUCLEAR POWERED'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N</text>';
		icons['SEA.M2.HEAVY'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >H</text>';
		icons['SEA.M2.LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >L</text>';
		icons['SEA.M2.MEDIUM'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >M</text>';
		icons['SEA.M2.DOCK'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >D</text>';
		icons['SEA.M2.LOGISTICS'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >LOG</text>';
		icons['SEA.M2.TANK'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >T</text>';
		icons['SEA.M2.VEHICLE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >V</text>';
		icons['SEA.M2.FAST'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >F</text>';
		icons['SEA.M2.AIR-CUSHIONED'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >J</text>';
		icons['SEA.M2.AIR-CUSHIONED (USA ONLY)'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >AC</text>';
		icons['SEA.M2.HYDROFOIL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >K</text>';
		icons['SEA.M2.AUTONOMOUS CONTROL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >AUT</text>';
		icons['SEA.M2.REMOTELY PILOTED'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >RP</text>';
		icons['SEA.M2.EXPENDABLE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >EXP</text>';

		icons['SUB.ICON.MILITARY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MIL</text>';
		icons['SUB.ICON.SUBMARINE'] = '<path d="m 75,85 50,0 15,15 -15,15 -50,0 -15,-15 z"/>';
			icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION'] = '<path d="m 75,110 -10,-10 10,-10 20,0 0,-10 10,0 0,10 20,0 10,10 -10,10 z"/>';
			icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION, SURFACED'] = '<path d="m 75,110 -10,-10 10,-10 20,0 0,-10 10,0 0,10 20,0 10,10 -10,10 z"/><path fill="none" d="m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
			icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] = '<path d="m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"/>';
			icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION, SURFACED'] = '<path d="m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"/><path fill="none" d="m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
			icons['SUB.ICON.SUBMARINE ATTACK (SSN)'] = '<text fill="'+ symbolColors.white[symbol.affiliationType]+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >A</text>';
			icons['SUB.ICON.SUBMARINE MISSILE (TYPE UNKNOWN)'] = '<text fill="'+ symbolColors.white[symbol.affiliationType]+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >M</text>';
			icons['SUB.ICON.SUBMARINE GUIDED MISSILE (SSGN)'] = '<text fill="'+ symbolColors.white[symbol.affiliationType]+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >G</text>';
			icons['SUB.ICON.SUBMARINE BALLISTIC MISSILE (SSBN)'] = '<text fill="'+ symbolColors.white[symbol.affiliationType]+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >B</text>';
		icons['SUB.ICON.SUBMARINE, SURFACED'] = '<path d="m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z"/><path fill="none" d="m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
		icons['SUB.ICON.SUBMARINE, BOTTOMED'] = '<path d="m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z"/><path d="m 70,120 0,-5 60,0 0,5 z"/>';
		icons['SUB.ICON.SUBMARINE, SNORKELING'] = '<path d="m 75,120 -10,-10 10,-10 20,0 0,-20 10,0 0,20 20,0 10,10 -10,10 z"/><path fill="none" d="m 65,95 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
		icons['SUB.ICON.OTHER SUBMERSIBLE'] = '<path d="m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.52285 -15.67003,10 -35,10 -19.329966,0 -35,-4.47715 -35,-10 0,-5.522847 15.670034,-10 35,-10 19.32997,0 35,4.477153 35,10 z"/>';
			icons['SUB.ICON.OTHER SUBMERSIBLE, SURFACED'] = icons['SUB.ICON.OTHER SUBMERSIBLE'] + '<path fill="none" d="m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
		icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'] = '<path d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z" stroke="none"  />';
		icons['SUB.ICON.NON-SUBMARINE'] = (this.force2525&&isNaN(this.SIDC))?'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >NON</text>':'<text stroke="none" text-anchor="middle" x="100" y="100" font-size="25" >NON</text><text stroke="none" text-anchor="middle" x="100" y="120" font-size="25" >SUB</text>';
		icons['SUB.ICON.DIVER, MILITARY'] = '<path  stroke="none"  d="M 100 80 C 93.731592 80 88.315512 82.687903 85.75 88.25 L 85.75 88.34375 L 77.84375 88.34375 L 77.84375 105 L 85.75 105 L 85.75 104.8125 C 87.305963 108.18587 88.823559 110.02388 92.03125 111.65625 L 92.09375 111.65625 L 84.15625 120 L 115.84375 120 L 107.90625 111.65625 L 107.96875 111.65625 C 111.14747 110.03863 112.80044 108.31359 114.34375 105 L 122.15625 105 L 122.15625 88.34375 L 114.25 88.34375 L 114.25 88.3125 C 111.68449 82.7504 106.26841 80 100 80 z M 100 86.59375 C 105.44032 86.59375 109.84375 91.109195 109.84375 96.59375 C 109.84375 102.0783 105.44032 106.5625 100 106.5625 C 94.559678 106.5625 90.125 102.0783 90.125 96.59375 C 90.125 91.109195 94.559678 86.59375 100 86.59375 z M 100 89.59375 C 96.204841 89.59375 93.125 92.707018 93.125 96.59375 C 93.125 100.48048 96.204841 103.5625 100 103.5625 C 103.79515 103.5625 106.84375 100.48048 106.84375 96.59375 C 106.84375 92.707018 103.79515 89.59375 100 89.59375 z " />';	
		icons['SUB.ICON.CIVILIAN'] = '<text fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
		icons['SUB.ICON.SUBMERSIBLE, CIVILIAN'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.52285 -15.67003,10 -35,10 -19.329966,0 -35,-4.47715 -35,-10 0,-5.522847 15.670034,-10 35,-10 19.32997,0 35,4.477153 35,10 z"/>';
		icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN'] = '<path  fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z" />';
		icons['SUB.ICON.DIVER, CIVILIAN'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '"  d="m 107.91667,96.666667 c 0,4.602373 -3.54441,8.333333 -7.916674,8.333333 -4.37225,0 -7.916663,-3.73096 -7.916663,-8.333333 0,-4.602375 3.544413,-8.333334 7.916663,-8.333334 4.372264,0 7.916674,3.730959 7.916674,8.333334 z m 0,15.000003 7.91667,8.33333 -31.666674,0 7.916667,-8.33333 M 114.25,88.333333 l 7.91667,0 0,16.666667 -7.91667,0 m -28.5,0 -7.916667,0 0,-16.666667 7.916667,0 m 30.08334,8.333334 c 0,9.204743 -7.08883,16.666663 -15.833343,16.666663 -8.744506,0 -15.833331,-7.46192 -15.833331,-16.666663 C 84.166666,87.461917 91.255491,80 99.999996,80 c 8.744514,0 15.833344,7.461917 15.833344,16.666667 z" />';	
		icons['SUB.ICON.UNDERWATER WEAPON'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >WPN</text>';
		icons['SUB.ICON.TORPEDO'] = '<path d="m 65,105 -5,-5 5,-5 60,0 c 0,0 5,5 5,5 l 5,-5 0,10 -5,-5 -5,5 z"/>';
		icons['SUB.ICON.IMPROVISED EXPLOSIVE DEVICE (IED)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IED</text>';
											//Yes the color settings here looks like crap, but the person implementing 2525 mines obviously didn't read the standard so we have to make a lot of special cases... 
		icons['SUB.ICON.UNDERWATER DECOY'] = '<path  stroke="' + symbolColors.black[symbol.affiliationType] + '" d="'+(this.force2525?'M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z':'M 105,120 90,105 105,90 z M 85,120 70,105 85,90 z m 40,-30 -15,15 15,15 z m -55,-5 0,-5 55,0 0,5 z')+'" '+ (this.force2525 ? '' : 'fill="' +symbolColors.iconFillColor[symbol.affiliationType]+'"') + '/>';
		icons['SUB.ICON.UNDERWATER DECOY DSymbol'] = '<path d="M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z "/>';

		icons['SUB.ICON.SEA MINE DECOY'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 105,100 0,20 -10,-10 z m -15,0 0,20 -10,-10 z m 30,0 0,20 -10,-10 10,-10 M 100,80 c -11.045695,0 -20,8.9543 -20,20 l 40,0 c 0,-11.0457 -8.95431,-20 -20,-20 z m -5,0 0,-10 10,0 0,10 m -22.67767,9.3934 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 m 21.213202,0 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107"/>';
		icons['SUB.ICON.SEA MINE DECOY, BOTTOM/GROUND'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,120 0,5 40,0 0,-5 z m 25,-20 0,20 -10,-10 z m -15,0 0,20 -10,-10 z m 30,0 0,20 -10,-10 10,-10 M 100,80 c -11.045695,0 -20,8.9543 -20,20 l 40,0 c 0,-11.0457 -8.95431,-20 -20,-20 z m -5,0 0,-10 10,0 0,10 m -22.67767,9.3934 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 m 21.213202,0 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107"/>';
		icons['SUB.ICON.SEA MINE DECOY, MOORED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 100,100 0,25 m -20,0 40,0 m -15,-25 0,20 -10,-10 z m -15,0 0,20 -10,-10 z m 30,0 0,20 -10,-10 10,-10 M 100,80 c -11.045695,0 -20,8.9543 -20,20 l 40,0 c 0,-11.0457 -8.95431,-20 -20,-20 z m -5,0 0,-10 10,0 0,10 m -22.67767,9.3934 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 m 21.213202,0 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107"/>';
		icons['SUB.ICON.SEA MINE'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,82 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/>';
			icons['SUB.ICON.SEA MINE NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,82 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path  '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/>';
		icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND)'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,120 40,0 0,10 -40,0 z m 30.6066,-37.67767 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/>';
			icons['SUB.SEA MINE (BOTTOM/ GROUND) NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 255, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,120 40,0 0,10 -40,0 z m 30.6066,-37.67767 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path  '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/>';
			icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) EXERCISE MINE'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,120 40,0 0,10 -40,0 z m 30.6066,-37.67767 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >EX</text><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text>';
			icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) MILEC'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 -10,10 m -30,10 0,-10 40,0 0,10 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >E</text>';
			icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) MILCO'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,141,42)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 -10,10 m -30,10 0,-10 40,0 0,10 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >#</text>';
			icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 -10,10 m -30,10 0,-10 40,0 0,10 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >NR</text>';
			icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,130,23)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 -10,10 m -30,10 0,-10 40,0 0,10 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >N</text>';
		icons['SUB.ICON.SEA MINE (MOORED)'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,130 40,0 m -20,-10 0,10 m 20,-30 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z m -25,-20 0,-10 10,0 0,10 m -22.67767,9.3934 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 m 21.213202,0 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107"/>';
			icons['SUB.ICON.SEA MINE (MOORED) NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,130 40,0 m -20,-10 0,10 m 20,-30 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z m -25,-20 0,-10 10,0 0,10 m -22.67767,9.3934 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 m 21.213202,0 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107"/><path  '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/>';
			icons['SUB.ICON.SEA MINE (MOORED) EXERCISE MINE'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 80,130 40,0 m -20,-10 0,10 m 20,-30 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z m -25,-20 0,-10 10,0 0,10 m -22.67767,9.3934 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 m 21.213202,0 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >EX</text><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text>';
			icons['SUB.ICON.SEA MINE (MOORED) MILEC'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z m -10,10 0,-10 m -20,10 40,0"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >E</text>';
			icons['SUB.ICON.SEA MINE (MOORED) MILCO'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,141,42)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z m -10,10 0,-10 m -20,10 40,0"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >#</text>';
			icons['SUB.ICON.SEA MINE (MOORED) NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z m -10,10 0,-10 m -20,10 40,0"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >NR</text>';
			icons['SUB.ICON.SEA MINE (MOORED) NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,130,23)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z m -10,10 0,-10 m -20,10 40,0"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >N</text>';
		icons['SUB.ICON.SEA MINE (FLOATING)'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
			icons['SUB.ICON.SEA MINE (FLOATING) NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
			icons['SUB.ICON.SEA MINE (FLOATING) EXERCISE MINE'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >EX</text><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
			icons['SUB.ICON.SEA MINE (FLOATING) MILEC'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >E</text><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
			icons['SUB.ICON.SEA MINE (FLOATING) MILCO'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,141,42)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >#</text><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
			icons['SUB.ICON.SEA MINE (FLOATING) NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >NR</text><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
			icons['SUB.ICON.SEA MINE (FLOATING) NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,130,23)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >N</text><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 75,130 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
		icons['SUB.ICON.SEA MINE (IN OTHER POSITION)'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 120,100 10,0 m -60,0 10,0"/>';
			icons['SUB.ICON.SEA MINE (IN OTHER POSITION) NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 120,100 10,0 m -60,0 10,0"/>';
			icons['SUB.ICON.SEA MINE EXERCISE MINE'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >EX</text><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text>';
			icons['SUB.ICON.SEA MINE MILEC'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >E</text>';
			icons['SUB.ICON.SEA MINE MINE ANCHOR'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="105" font-size="13" >ANCR</text>';
			icons['SUB.ICON.SEA MINE MILCO'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,141,42)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >#</text>';
			icons['SUB.ICON.SEA MINE NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >NR</text>';
			icons['SUB.ICON.SEA MINE GENERAL OBSTRUCTOR'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >OB</text>';
			icons['SUB.ICON.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,255,0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >OB</text><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/>';
			icons['SUB.ICON.SEA MINE NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0,130,23)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >N</text>';
		icons['SUB.ICON.SEA MINE (RISING)'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path fill="'+(this.force2525&&!this.monoColor?'rgb(255, 0, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 100,120 -5,10 10,0 z"/>';
			icons['SUB.ICON.SEA MINE (RISING) NEUTRALIZED'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 255, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><path fill="none" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 130,70 -60,60 m 0,-60 60,60"/><path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 255, 0)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 100,120 -5,10 10,0 z"/>';
			icons['SUB.ICON.SEA MINE (RISING) EXERCISE MINE'] = '<path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 110.6066,85 7.07107,-7.07107 7.07107,7.07107 -7.07107,7.07107 m -35.35534,0 -7.071067,-7.07107 7.071067,-7.07107 7.071068,7.07107 M 95,80 l 0,-10 10,0 0,10 m 15,20 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="110" font-size="25" >EX</text><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text><path fill="'+(this.force2525&&!this.monoColor?'rgb(0, 130, 24)':symbolColors.iconFillColor[symbol.affiliationType])+'" '+ (this.force2525&&!this.monoColor?'stroke="black"':'') +' d="m 100,120 -5,10 10,0 z"/>';
		icons['SUB.ICON.UNEXPLODED EXPLOSIVE ORDNANCE'] = '<path stroke-dasharray="8,4" fill="none" stroke="'+(this.force2525&&!this.monoColor?symbolColors.iconColor['Hostile']:symbolColors.iconColor[symbol.affiliationType])+'"  d="m 110,120 -20,0 -10,-10 0,-20 10,-10 20,0 10,10 0,20 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="'+symbolColors.iconColor['Hostile']+'"':'') +'  text-anchor="middle" x="100" y="105" font-size="20" >UXO</text>';
		icons['SUB.ICON.SEABED INSTALLATION, MAN-MADE, MILITARY'] = '';
		icons['SUB.ICON.SEABED INSTALLATION, MAN-MADE, NON-MILITARY'] = '';
		
			icons['SUB.ICON.ENVIRONMENTAL REPORT LOCATION'] = '<path fill="none" stroke="'+(this.force2525&&!this.monoColor?symbolColors.iconColor['Neutral']:symbolColors.iconColor[symbol.affiliationType])+'"  d="m 75,75 0,50 50,0 0,-50 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="'+symbolColors.iconColor['Neutral']+'"':'') +'  text-anchor="middle" x="100" y="115" font-size="40" >E</text>';
			icons['SUB.ICON.DIVE REPORT LOCATION'] = '<path fill="none" stroke="'+(this.force2525&&!this.monoColor?symbolColors.iconColor['Neutral']:symbolColors.iconColor[symbol.affiliationType])+'"  d="m 75,75 0,50 50,0 0,-50 z"/><text stroke="none" '+ (this.force2525&&!this.monoColor?'fill="'+symbolColors.iconColor['Neutral']+'"':'') +'  text-anchor="middle" x="100" y="115" font-size="40" >D</text>';
			icons['SUB.ICON.SEABED INSTALLATION/MANMADE'] = '<path fill="'+ symbolColors.iconFillColor[symbol.affiliationType] +'" stroke="'+symbolColors.black[symbol.affiliationType]+'"  d="m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z" />';	
			icons['SUB.ICON.SEABED ROCK/STONE, OBSTACLE, OTHER'] = '<path d="m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z" />';	
			icons['SUB.ICON.WRECK'] = '<path d="m 125,85 0,30 m -50,-30 0,30 m 25,-40 0,45 m -40,-20 80,0" />';	
			icons['SUB.ICON.MARINE LIFE'] = '<path d="m 60,100 20,-20 45,20 15,-10 0,20 -15,-10 -45,20 z" />';	
			icons['SUB.ICON.SEA ANOMALY'] = '<path fill="none" d="m 65,100 15,-20 20,30 20,-30 15,20 m -70,10 15,-20 20,30 20,-30 15,20" />';	
			
		icons['SUB.M1.ANTISUBMARINE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ASW</text>';
		icons['SUB.M1.AUXILIARY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >AUX</text>';
		icons['SUB.M1.COMMAND AND CONTROL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >C2</text>';
		icons['SUB.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ISR</text>';
		icons['SUB.M1.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCM</text>';
		icons['SUB.M1.MINE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MIW</text>';
		icons['SUB.M1.SURFACE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SUW</text>';
		icons['SUB.M1.ATTACK'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >A</text>';
		icons['SUB.M1.BALLISTIC MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >B</text>';
		icons['SUB.M1.GUIDED MISSILE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >G</text>';
		icons['SUB.M1.OTHER GUIDED MISSILES (POINT DEFENCE)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >M</text>';
		icons['SUB.M1.SPECIAL OPERATIONS FORCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SOF</text>';
		icons['SUB.M1.POSSIBLE SUBMARINE - LOW 1'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >P1</text>';
		icons['SUB.M1.POSSIBLE SUBMARINE - LOW 2'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >P2</text>';
		icons['SUB.M1.POSSIBLE SUBMARINE - HIGH 3'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >P3</text>';
		icons['SUB.M1.POSSIBLE SUBMARINE - HIGH 4'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >P4</text>';
		icons['SUB.M1.PROBABLE SUBMARINE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >PB</text>';
		icons['SUB.M1.CERTAIN SUBMARINE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CT</text>';
				icons['SUB.M1.ANTI-TORPEDO TORPEDO'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ATT</text>';
		 		icons['SUB.M1.HIJACKING/HIJACKED'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >H</text>';
		 		
		icons['SUB.M2.AIR INDEPENDENT PROPULSION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >AI</text>';
			icons['SUB.M2.CERTSUB'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >CT</text>';
		icons['SUB.M2.DIESEL PROPULSION'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >D</text>';
		icons['SUB.M2.DIESEL - TYPE 1'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >D1</text>';
		icons['SUB.M2.DIESEL - TYPE 2'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >D2</text>';
		icons['SUB.M2.DIESEL - TYPE 3'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >D3</text>';
		icons['SUB.M2.NUCLEAR POWERED'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N</text>';
		icons['SUB.M2.NUCLEAR - TYPE 1'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N1</text>';
		icons['SUB.M2.NUCLEAR - TYPE 2'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N2</text>';
		icons['SUB.M2.NUCLEAR - TYPE 3'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N3</text>';
		icons['SUB.M2.NUCLEAR - TYPE 4'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N4</text>';
		icons['SUB.M2.NUCLEAR - TYPE 5'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N5</text>';
		icons['SUB.M2.NUCLEAR - TYPE 6'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N6</text>';
		icons['SUB.M2.NUCLEAR - TYPE 7'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >N7</text>';
		icons['SUB.M2.AUTONOMOUS CONTROL'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >AUT</text>';
		icons['SUB.M2.REMOTELY PILOTED'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >RP</text>';
		icons['SUB.M2.EXPENDABLE'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >EXP</text>';

			icons['SOF.ICON.UNDERWATER DEMOLITION TEAM'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >UDT</text>';

			icons['SOF.M2.ATTACK'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >A</text>';
			icons['SOF.M2.REFUEL'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >K</text>';
			icons['SOF.M2.UTILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >U</text>';
			icons['SOF.M2.VSTOL'] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-size="20" >VSTOL</text>';
			icons['SOF.M2.COMBAT SEARCH AND RESCUE'] = (this.force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="135" font-size="23" >CSAR</text>':'<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >H</text>');


		// SIGNALS INTELLIGENCE ==========================================================
	//if(symbol.codingscheme == "I"){
			icons['SIGNALS.ICON.COMMUNICATIONS'] = '<path d="m 93,120 14,0 0,0 m -7,-27 0,27 m 2,-25 8,2 -5,5 13,3 m -20,-10 -8,2 5,5 -14,3 m 21,-13 8,-2 -5,-5 13,-3 m -37,0 14,3 -5,5 8,2"  fill="none" />';			
			icons['SIGNALS.ICON.RADAR'] = '<path d="m 115,90 -15,15 0,-15 -15,15 M 80,85 c 0,25 15,35 35,35"  fill="none" />';	

			icons['SIGNALS.M1.ALPHA'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >A</text>';
			icons['SIGNALS.M1.CHARLIE'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >C</text>';
			icons['SIGNALS.M1.DELTA'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >D</text>';
			icons['SIGNALS.M1.ECHO'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >E</text>';
			icons['SIGNALS.M1.FOXTROT'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >F</text>';
			icons['SIGNALS.M1.INDY'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >I</text>';
			icons['SIGNALS.M1.MIKE'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >M</text>';
			icons['SIGNALS.M1.OSCAR'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >O</text>';
			icons['SIGNALS.M1.PAPA'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >P</text>';
			icons['SIGNALS.M1.SIERRA'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >S</text>';
			icons['SIGNALS.M1.TANGO'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >T</text>';
			icons['SIGNALS.M1.UNIFORM'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >U</text>';

			icons['SIGNALS.M2.ALPHA'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >A</text>';
			icons['SIGNALS.M2.BRAVO'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >B</text>';
			icons['SIGNALS.M2.CHARLIE'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >C</text>';
			icons['SIGNALS.M2.DELTA'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >D</text>';
			icons['SIGNALS.M2.ECHO'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >E</text>';
			icons['SIGNALS.M2.FOXTROT'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >F</text>';
			icons['SIGNALS.M2.GOLF'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >G</text>';
			icons['SIGNALS.M2.INDY'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >I</text>';
			icons['SIGNALS.M2.LIMA'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >L</text>';
			icons['SIGNALS.M2.MIKE'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >M</text>';
			icons['SIGNALS.M2.NOVEMBER'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >N</text>';
			icons['SIGNALS.M2.PAPA'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >P</text>';
			icons['SIGNALS.M2.SIERRA'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >S</text>';
			icons['SIGNALS.M2.TANGO'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >T</text>';
			icons['SIGNALS.M2.UNIFORM'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >U</text>';
			icons['SIGNALS.M2.WHISKEY '] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >W</text>';

			icons['SIGNALS.M3.SPACE'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >S</text>';
			icons['SIGNALS.M3.GROUND'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >G</text>';
		// STABILITY OPERATIONS ==========================================================
	//if(symbol.codingscheme == "O"){
		icons['STABILITY.ICON.ARREST'] = '<path d="m 92.5,100 15,0 m -2.5,-10 c 0,2.76142 -2.23858,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.76142,0 5,2.23858 5,5 z m -5,5 0,20 m 20,-15 c 0,11.04569 -8.95431,20 -20,20 -11.045695,0 -20,-8.95431 -20,-20 0,-11.0457 8.954305,-20 20,-20 11.04569,0 20,8.9543 20,20 z"  fill="none" />';	
		icons['STABILITY.ICON.ARSON/FIRE'] = this.force2525?'<path d="m 84.621209,101.63458 c 1.281221,23.11649 30.961141,23.1693 30.722351,-1.886459 -1.48231,2.125949 -4.56579,6.508219 -8.08482,7.276349 1.88705,-2.42485 2.58401,-8.465252 2.42544,-12.935729 -1.65222,3.370363 -3.96739,7.913059 -7.00685,7.815329 1.73795,-4.311905 2.73634,-9.432296 -0.53899,-13.744204 -0.20243,3.046262 0.84105,7.114344 -1.88646,7.006852 -2.727509,-0.107492 -2.862151,-4.430587 -1.077978,-10.779772 -4.034448,4.12669 -6.15609,9.825094 -3.77292,17.517124 -1.887944,-0.19153 -4.409492,-1.948467 -7.006852,-7.815329 -1.505442,4.900459 1.161669,9.559299 3.233932,13.744209 -2.397347,-1.07521 -6.039025,-2.97887 -7.006853,-6.19837 z"  stroke="none" /><text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >ASN</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >FIRE</text>';
		icons['STABILITY.ICON.ATTEMPTED CRIMINAL ACTIVITY'] = '<path d="m 127,127 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5" fill="none" />';
			icons['STABILITY.ICON.BLACK LIST LOCATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >BLK</text>';
			icons['STABILITY.ICON.BOMB'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >BOMB</text>';
			icons['STABILITY.ICON.BOOBY TRAP'] = '<path d="m 85,105 15,-25 15,25 m -35,5 c 0,-10 40,-10 40,0 0,10 -40,10 -40,0 z"  fill="none" />';	
		icons['STABILITY.ICON.COMPOSITE LOSS'] = '<path d="m 100,85 0,30 m -35,-15 45,0 m 20,0 c 0,5.52285 -4.47715,10 -10,10 -5.52285,0 -10,-4.47715 -10,-10 0,-5.522847 4.47715,-10 10,-10 5.52285,0 10,4.477153 10,10 z" fill="none" />'
		icons['STABILITY.ICON.DEMONSTRATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MASS</text>';
		icons['STABILITY.ICON.DRIVE-BY SHOOTING'] = '<path d="m 95,85 5,-5 5,5 m -5,-5 0,30 m -15,0 30,0 m 5,5 c 0,2.76142 -2.23858,5 -5,5 -2.76142,0 -5,-2.23858 -5,-5 0,-2.76142 2.23858,-5 5,-5 2.76142,0 5,2.23858 5,5 z m -30,0 c 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z"  fill="none" />';	
		icons['STABILITY.ICON.DRUG RELATED ACTIVITIES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >DRUG</text>';
		icons['STABILITY.ICON.EXPLOSION'] = '<path d="m 110,55 5,20 15,-10 0,15 15,5 -15,10 15,10 -15,5 5,15 -20,-5 -5,20 -10,-15 -10,20 -5,-25 -20,10 5,-15 L 55,105 70,95 60,85 70,80 70,65 85,75 90,55 100,70 z"  fill="none" />';
		icons['STABILITY.ICON.EXTORTION'] = '<text stroke="none" text-anchor="middle" x="100" y="130" font-size="80" >$</text>';
			icons['STABILITY.ICON.FOOD DISTRIBUTION'] = '<path d="m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30" fill="none" />' + {"Unknown" : '<path d="M35,120 l130,0 " fill="none" />',"Friend" : '<path d="M25,120 l150,0 " fill="none" />',"Neutral" : '<path d="M45,120 l110,0 " fill="none" />',"Hostile" : '<path d="M50,120 l100,0 " fill="none" />'}[symbol.affiliationType];
		icons['STABILITY.ICON.GRAFFITI'] = '<path d="m 110,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10 M 90,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10"  fill="none" />';	
		icons['STABILITY.ICON.GROUP'] = '<path d="m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0" fill="none" />'
			icons['STABILITY.ICON.HIJACKING (AIRPLANE)'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 70,95 0,10 65,0 0,-10 z m 55,10 0,10 5,0 0,-10 z m 0,-10 0,-10 5,0 0,10 z m -45,10 0,15 10,0 0,-15 z m 0,-10 0,-15 10,0 0,15 z" />';
			icons['STABILITY.ICON.HIJACKING (BOAT)'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : !this.frame?symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 105,80 0,20 20,0 z m -5,25 0,-25 m -30,25 10,15 40,0 10,-15 z"/>';
			icons['STABILITY.ICON.GRAY LIST LOCATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GRAY</text>';
			icons['STABILITY.ICON.IED'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IED</text>';
		icons['STABILITY.ICON.INDIVIDUAL'] = '<path d="m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0"  fill="none" />';
			icons['STABILITY.ICON.INTERNAL SECURITY FORCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ISF</text>';
		icons['STABILITY.ICON.KILLING VICTIM'] = '<path d="m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0"  fill="none" />' + {"Unknown" : '<path fill="none" d="M50,65 150,135" />',"Friend" : '<path fill="none" d="M25,50 175,150" />',"Neutral" : '<path fill="none" d="M45,45 155,155" />',"Hostile" : '<path fill="none" d="M57,70 143,130" />'}[symbol.affiliationType];;
		icons['STABILITY.ICON.KILLING VICTIMS'] = '<path d="m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0" fill="none" />' + {"Unknown" : '<path fill="none" d="M50,65 150,135" />',"Friend" : '<path fill="none" d="M25,50 175,150" />',"Neutral" : '<path fill="none" d="M45,45 155,155" />',"Hostile" : '<path fill="none" d="M57,70 143,130" />'}[symbol.affiliationType];
			icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE'] = '<path d="m 65,95 70,0 m 0,10 c 0,5.52285 -4.47715,10 -10,10 -5.52285,0 -10,-4.47715 -10,-10 0,-5.522847 4.47715,-10 10,-10 5.52285,0 10,4.477153 10,10 z m -50,0 c 0,5.52285 -4.477153,10 -10,10 -5.522847,0 -10,-4.47715 -10,-10 0,-5.522847 4.477153,-10 10,-10 5.522847,0 10,4.477153 10,10 z" fill="none" />';
			icons['STABILITY.ICON.MASS GRAVE LOCATION'] = '<path d="m 77.5,90 10,0 m -5,-5 0,15 m 7.5,-20 0,30 -15,0 0,-30 z m 22.5,10 10,0 m -5,-5 0,15 m -7.5,-20 0,30 15,0 0,-30 z m -15,20 10,0 m -5,-5 0,20 m -7.5,-25 15,0 0,30 -15,0 z"  fill="none" />';
			icons['STABILITY.ICON.MINE LAYING'] = '<path d="m 60,85 80,0 0,30 -80,0 z"  fill="none" /><path d="m 135,100 c 0,5.52285 -4.47715,10 -10,10 -5.52285,0 -10,-4.47715 -10,-10 0,-5.52285 4.47715,-10 10,-10 5.52285,0 10,4.47715 10,10 z m -25,0 c 0,5.52285 -4.47715,10 -10,10 -5.522847,0 -10,-4.47715 -10,-10 0,-5.52285 4.477153,-10 10,-10 5.52285,0 10,4.47715 10,10 z m -25,0 c 0,5.52285 -4.477153,10 -10,10 -5.522847,0 -10,-4.47715 -10,-10 0,-5.52285 4.477153,-10 10,-10 5.522847,0 10,4.47715 10,10 z"  stroke="none" />';	
		icons['STABILITY.ICON.PATROLLING'] = '<path d="m 131,97 0,-14 5,0 c 4,0 4,7 0,7 l -5,0 m -71,15 15,10 M 60,105 75,95 m -15,10 40,0 -15,-15 40,0"  fill="none" />';	
		icons['STABILITY.ICON.POISONING'] = '<path d="m 85,95 c 0,-20 30,-20 30,0 0,20 -30,20 -30,0 z m -15,10 60,15 m -60,0 60,-15"  fill="none" />';
			icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" stroke="' + symbolColors.black[symbol.affiliationType] + '" d="m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z" />';
		icons['STABILITY.ICON.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS'] = icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'] + {"Unknown" : '<path fill="none" d="M50,65 100,110 100,90 150,135" />',"Friend" : '<path fill="none" d="M25,50 100,110 100,90 175,150" />',"Neutral" : '<path fill="none" d="M45,45 100,110 100,90 155,155" />',"Hostile" : '<path fill="none" d="M57,70 100,110 100,90 143,130" />'}[symbol.affiliationType];
		icons['STABILITY.ICON.RIOT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >RIOT</text>';
			icons['STABILITY.ICON.SAFE HOUSE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SAFE</text>';
		icons['STABILITY.ICON.SEARCHING'] = '<path d="m 140,105 c -10,0 -5,0 -10,0 -15,0 -5,-15 -20,-15 -15,0 -5,20 -20,20 -15,0 -5,-20 -20,-20 -10,0 -10,10 -10,10 m 70,0 10,5 -10,5"  fill="none" />';	
		icons['STABILITY.ICON.SPY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SPY</text>';
			icons['STABILITY.ICON.SNIPING'] = '<path d="m 95,85 5,-5 5,5 m -5,-5 0,40"  fill="none" /><text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >S</text>';
			icons['STABILITY.ICON.VANDALISM/LOOT/RANSACK/PLUNDER/SACK'] = '<path d="m 115,100 c 0,-5 5,-10 10,-10 M 85,100 C 85,95 80,90 75,90 m 5,25 c -0.524784,-29.475216 39.99992,-29.999923 40,0 z"  fill="none" />';
			icons['STABILITY.ICON.WHITE LIST LOCATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >WHT</text>';
		
		icons['STABILITY.M1.ACCIDENT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >ACC</text>';			
		icons['STABILITY.M1.ASSASSINATION'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >AS</text>';	
		icons['STABILITY.M1.CIVILIAN'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >CIV</text>';	
		icons['STABILITY.M1.COERCED/IMPRESSED'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >C</text>';	
		icons['STABILITY.M1.COMBAT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >CBT</text>';	
		icons['STABILITY.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >DPRE</text>';	
			icons['STABILITY.M1.DRUG'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >DRUG</text>';	
		icons['STABILITY.M1.EXECUTION (WRONGFUL KILLING)'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >EX</text>';
		icons['STABILITY.M1.FOREIGN FIGHTERS'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >FF</text>';	
		icons['STABILITY.M1.GANG'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >GANG</text>';	
		icons['STABILITY.M1.GOVERNMENT ORGANIZATION'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >GO</text>';	
		icons['STABILITY.M1.HIJACKING/HIJACKED'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >H</text>';
		icons['STABILITY.M1.HOUSE-TO-HOUSE'] = '<path fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="m 110,65 -20,0 0,15 20,0 z m -10,-10 -10,10 20,0 z" />';	
		icons['STABILITY.M1.INCIDENT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >INC</text>';			
		icons['STABILITY.M1.KIDNAPPING'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >K</text>';	
		icons['STABILITY.M1.LEADER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >LDR</text>';	
		icons['STABILITY.M1.LOOT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >LOOT</text>';	
		icons['STABILITY.M1.MURDER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >MU</text>';	
		icons['STABILITY.M1.NONGOVERNMENTAL ORGANIZATION (NGO)'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >NGO</text>';			
		icons['STABILITY.M1.OTHER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >OTH</text>';			
		icons['STABILITY.M1.PIRACY'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >PI</text>';	
		icons['STABILITY.M1.RAPE'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >RA</text>';	
		icons['STABILITY.M1.RELIGIOUS'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >REL</text>';	
		icons['STABILITY.M1.SPEAKER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >SPK</text>';	
		icons['STABILITY.M1.TARGETED'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >TGT</text>';	
		icons['STABILITY.M1.TERRORIST'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >TER</text>';	
		icons['STABILITY.M1.WILLING RECRUIT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >WR</text>';	
		icons['STABILITY.M1.WRITTEN PSYCHOLOGICAL OPERATIONS'] = icons['STABILITY.M1.WILLING'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >W</text>';				
		
		icons['STABILITY.M2.LEADER OR LEADERSHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="140" font-size="25" >LDR</text>';


		icons['ACTIVITIES.ICON.CRIMINAL.ACTIVITY.INCIDENT'] = '<path stroke="none" d="m 98.6875,66.71875 c -3.16495,0.654128 -6.324994,3.669586 -6.40625,7.024048 0.319085,3.57768 5.281945,2.750677 6.974689,0.585063 1.986541,-1.176345 1.737071,-4.536373 4.490891,-3.702861 2.59058,-0.557347 3.18506,3.211007 5.8505,3.214613 1.57585,1.527309 4.37017,-0.618559 5.35772,1.229873 0.74415,1.091421 1.4883,2.182843 2.23245,3.274264 -2.04685,3.070534 -1.27192,7.943143 1.87326,9.9969 3.47958,1.082074 4.7569,-3.469396 4.10224,-6.163894 -0.19849,-2.992888 -2.52303,-5.002635 -5.05796,-5.372403 -1.52212,-1.890038 -2.71544,-3.434969 -1.56439,-5.641323 -0.96974,-3.340668 -5.0604,-4.525112 -8.21283,-4.282292 -2.19973,0.321489 -2.92884,2.588214 -5.33026,1.869262 -1.91674,0.435279 -1.85451,-2.847701 -4.31006,-2.03125 z m 0.15625,1.3125 c 2.74185,0.451859 0.908553,0.610342 -0.569598,1.259519 -0.496874,2.166259 3.776688,0.383028 1.38396,2.867116 -0.948281,1.860881 -5.837776,4.692169 -5.908112,1.068067 0.05898,-2.50012 2.708884,-4.750662 5.09375,-5.194702 z m 10.3125,0.0625 c 2.36948,-0.533025 7.0752,2.314938 5.55177,3.715255 -0.80492,-2.100613 -2.96999,0.0017 -1.17677,1.159745 -1.73996,0.859067 -7.38069,-1.589398 -5.67627,-2.375 2.54081,0.779423 2.83087,-2.670245 -0.0245,-1.851458 -1.425,0.188902 1.12378,-0.825766 1.32579,-0.648542 z M 81.875,71.5625 c -1.822917,1.947917 -3.645833,3.895833 -5.46875,5.84375 -7.490909,-0.115458 -14.013994,6.201866 -15.708579,13.214763 -0.577682,4.18601 0.535644,8.499145 2.789789,12.049507 0.720852,3.8949 -3.242927,6.72531 -2.95621,10.72506 -0.776621,7.41697 4.766429,14.54043 11.664516,16.78124 2.319328,-0.41538 1.339332,1.26388 1.378386,2.02077 1.516949,-0.3992 3.033899,-0.79839 4.550848,-1.19759 -0.157386,1.54427 -0.09977,2.68254 1.362716,1.16794 0.887347,-0.28411 2.322749,-2.21982 2.865759,-1.46623 0.229366,2.23029 1.218588,0.13486 1.983596,-0.68416 0.795946,-1.20548 1.594526,-2.26463 2.444179,-0.4863 1.246774,-2.44176 4.071418,-7.18988 -0.775738,-7.25846 -3.39304,2.34564 -7.529495,4.55979 -11.800401,3.51219 -6.253694,-1.46855 -10.862254,-8.75917 -8.224506,-14.9137 0.423532,-3.85959 6.785655,-3.44473 5.035067,-8.22011 -1.832088,-2.64618 -5.67116,-2.89109 -5.701849,-6.984689 -1.497827,-7.306303 5.649692,-14.651824 12.975481,-13.665196 4.690583,0.507692 7.367903,4.917131 10.784827,7.64129 1.909871,1.896107 4.078219,5.135242 5.854462,1.397583 2.797737,-1.990189 4.311003,-4.667272 1.81439,-7.59021 C 94.758284,79.736076 90.930339,77.345489 88.027205,74.351839 86.267543,72.907066 83.858514,72.604329 81.875,71.5625 z m 3.25,3.78125 c 1.586665,1.1369 2.879872,2.106232 0.25,3.25 -0.929526,3.655087 -5.144826,-0.46486 -1.46875,-1.46875 0.389785,-0.604001 0.949831,-1.102565 1.21875,-1.78125 z m 34.15625,3.09375 c 3.04886,1.445107 3.91973,6.431177 1.40511,8.752093 -2.85485,0.06477 -3.5992,-4.257454 -3.10875,-6.565279 0.0657,-2.860073 2.50888,2.734011 2.54739,-0.749314 -0.20313,-0.524109 -0.53633,-0.97428 -0.84375,-1.4375 z M 127.25,90.21875 c -4.34525,0.37638 -8.80068,-0.03203 -13.0625,0.96875 -2.08362,1.067713 -5.73215,1.511661 -4.63363,4.541693 0.11746,1.798602 0.23492,3.597205 0.35238,5.395807 -4.93086,4.93925 -5.46496,13.25257 -2.18661,19.21456 2.4323,4.29343 7.00706,7.0067 11.78036,7.84794 3.25353,4.87131 7.2727,-1.31732 11.18813,-1.70745 5.51358,-2.49008 8.91467,-8.52407 8.52692,-14.51555 0.15127,-5.03107 -2.35985,-10.10265 -6.65255,-12.777 -0.0833,-2.302083 -0.16667,-4.604167 -0.25,-6.90625 -1.64281,-0.790575 -3.35483,-1.428415 -5.0625,-2.0625 z M 127.84375,92.5 c -0.87107,1.697256 0.59853,3.798771 -0.8764,4.870901 -2.28039,0.687031 -1.72364,-2.417998 -1.9388,-3.841426 -0.62509,-1.669652 1.93904,-0.677215 2.8152,-1.029475 z m -2.875,8.34375 c 4.13419,0.89738 8.02849,3.70794 9.28995,7.868 0.89252,3.73108 0.5189,8.04273 -2.264,10.93428 -1.74332,2.0068 -5.33742,4.29909 -7.67928,3.13248 -3.06602,-0.78134 -5.77247,2.12978 -8.64253,-0.53281 -6.85268,-4.15492 -7.17679,-16.01511 0.20729,-19.82343 2.73566,-1.64192 6.01062,-1.5662 9.08857,-1.57852 z" />' + '<path stroke="none" fill="'+ (this.force2525 ? symbolColors.iconFillColor[symbol.affiliationType] : 'none') + '" d="M 85.09375 75.34375 C 84.967379 75.764987 84.169866 76.66164 83.875 77.125 C 83.580135 77.630484 82.375 77.930645 82.375 78.5625 L 82.375 79.03125 C 82.375 79.368239 83.267634 80.0625 83.5625 80.0625 L 83.8125 80.0625 C 84.823468 80.0625 84.995887 79.067984 85.375 78.5625 C 85.669866 78.22551 86.72414 77.368239 87.1875 77.03125 L 85.09375 75.34375 z M 127.84375 92.53125 L 124.96875 92.65625 L 125.21875 96.46875 C 125.30305 97.479718 125.89939 97.330134 126.53125 97.625 C 127.07885 97.330134 127.84375 97.1441 127.84375 96.34375 C 127.84375 95.796142 127.72107 95.61824 127.46875 95.28125 L 127.84375 92.53125 z " />';	
		icons['ACTIVITIES.ICON.CRIMINAL.CIVIL DISTURBANCE'] = '<path stroke="none" d="m 110.6,142.37367 0,-28.56 -7.08,0 0,28.56 z m -21.24,0 7.08,0 0,-28.56 -7.08,0 z m 7.08,-28.56 h 7.08 v -11.76 h 24.36 V 77.173667 h -6.32 v 18.6 h -18.04 v -10.72 c 0,-0.92 2.08,-1.24 2.96,-1.72 0.7596,-0.4 2.12,-1.44 2.72,-2 1.48,-1.44 3.2,-3.6 3.8,-5.92 1.6,-6.32 -0.2404,-10.56 -3.8,-14.12 -3,-3.08 -9.24,-4.88 -14.32,-2.72 -3.6,1.56 -8.36,6.16 -8.36,11 v 3.16 c 0,2.76 1.92,6.2 3.32,7.68 1,1 1.76,1.72 3.04,2.48 0.96,0.56 3.6,1.32 3.6,2.16 v 10.72 H 78.4 v -18.6 h -6.28 v 24.880003 h 24.36 v 11.76 h -0.04 z" />';	
		icons['ACTIVITIES.ICON.SHOOTING'] = '<path stroke="none" d="m 93.18612,89.65981 h 16.8 v 9.32 c -2.5596,0 -7.32,1.5596 -9,1 -2.32,-0.8 -5.4,-2 -7.8,-2.56 v -7.76 l 0,0 z m -29.96,0 h 26.08 v 9.56 c 0,0.88 4.08,2 4.96,2.28 1.88,0.64 3.56,1.36 5.48,2 2,0.68 3.3596,0.4 5.9596,-0.08 1.56,-0.28 5.68,-0.44 6.6,-0.88 0.6404,2.68 4.6404,13.96 4.6404,15.2404 0,1.6 -1.2404,3.9596 -1.28,5.68 l 21.52,0.04 -8.16,-25.8804 7.8,-7.68 c -0.76,-1.64 -4.08,-13.44 -5.16,-13.44 h -68.44 v 13.16 l 0,0 z" />';	
		icons['ACTIVITIES.ICON.FIRE EVENT'] = '<path stroke="none" d="m 96.48632,78.53981 c 0,-5.08 4.08,-9.68 4.08,-13.04 v -0.44 c 0,-1.28 -0.0404,-3.8 -1.08,-4.08 -1.04,4.48 -3.48,8 -5.92,11.16 -1.24,1.64 -2.36,3.28 -3.6,4.96 -1.04,1.36 -3.12,3.48 -3.12,5.52 0,1.44 6.12,17.72 3,17.72 -0.12,0 -3.76,-2.52 -4.2,-2.88 -1.4,-1.04 -2.36,-2.28 -3.32,-3.72 -3.08,-4.56 -2.44,-4.4 -3.8,-10.28 -1.52,0.4 -2.56,4.96 -2.92,6.92 -0.44,2.36 -0.28,6.64 0.24,9 0.64,2.84 1.36,5 2.52,7.32 0.6,1.2 3.04,5.48 3.12,6.48 -2.16,-0.5204 -7.04,-4.6 -8.6,-6.16 -1.48,-1.52 -5.48,-8.28 -5.92,-8.6 0,9.88 5,22.8 9.76,27.64 3.08,3.08 6.32,6.36 10.16,8.6404 2.44,1.48 10.48,4.32 14.28,4.32 h 2.3596 c 2.8404,0 10.8,-3.04 12.88,-4.2 3.4,-1.88 6.88,-4.72 9,-7.88 4.4,-6.52 8.04,-15 8.04,-25.7596 v -1.28 l -0.44,-5.76 c -0.72,0.36 -2.24,4.36 -2.52,5.16 -0.52,1.32 -2.0404,3.4 -2.88,4.64 -1.4,2.12 -5.24,6.28 -7.84,6.88 v -1.08 c 0,-4.4 2.7596,-8.8 2.7596,-12.4 v -1.92 l -1.28,-12.16 h -0.6392 c -0.32,3.88 -1.64,7.88 -3.36,10.48 -1.32,2 -5.2796,5.6 -7.72,6.16 -0.24,-0.4 -0.44,-0.64 -0.44,-1.28 v -2.32 c 0,-5.08 3,-8.88 3,-12.84 v -0.84 c 0,-1.52 -2.08,-3.88 -2.92,-5.2 -0.68,-1.12 -2.4,-4.32 -3.5204,-4.6 v 1.28 c 0,6.16 -1.3596,10.6 -5.5596,12.6 -1.08,-1.68 -3.6,-3.16 -3.6,-6.24 v -1.9208 l 0,0 z" />';	
		icons['ACTIVITIES.ICON.NON-RESIDENTIAL FIRE'] = '<path stroke="none" d="m 121.24592,122.28001 -6.16,0 0,5.92 6.16,0 z m -12.0796,0 -6.1204,0 0,5.92 6.1204,0 z m -12.2404,0 -5.92,0 0,5.92 5.92,0 z m -12.28,0 -5.68,0 0,5.92 5.68,0 z m 30.44,-4.7596 h 6.12 v -6.16 h -2.48 c -1.2,0 -2.48,1.52 -3.64,1.8 v 4.36 z m -5.9196,-6.1604 -6.1204,0 0,6.1604 6.1204,0 z m -12.2404,0 -5.92,0 0,6.1604 5.92,0 z m -12.28,0 -5.68,0 0,6.1604 5.68,0 z m 25,-33.4 c 0,-3.44 3.4,-7.44 3.4,-9.08 0,-1.36 -0.7596,-4.16 -1.8,-4.56 0,7.12 -8.64,12.84 -8.64,15.68 v 0.44 c 0,0.72 1.92,5.24 2.28,6.6 0.44,1.72 1.44,5.6 1.6,7.28 -6.2,-0.12 -7.32,-9.84 -10.28,-11.84 l -0.28,2.96 0.04,4.56 c 0,4.68 3.36,11.44 5.64,13.92 1,1.12 4.16,3.68 5.52,4.2796 0.8404,0.4 6.28,2.96 6.6,2.96 1.4404,0 9.2,-7.24 10.52,-8.56 2.5204,-2.5196 4.0404,-9.6 4.0404,-14.84 v -0.72 l -0.72,-5.72 c -0.96,0.6 -2.1204,5.64 -2.76,7 -1.52,3.16 -1.76,3.12 -5.4,3.96 -0.28,-12.2 6.68,-8.28 -2.72,-19.12 0,4.88 -0.92,7.88 -4.08,9.56 -1.3604,-0.7196 -2.9604,-2.7196 -2.9604,-4.7596 z m -14.8,26.3604 h 3.64 c -0.12,-0.6404 -0.32,-1.36 -1.12,-1.36 h -1.16 v -2.72 c 0,-0.92 -0.88,-2.4 -1.36,-2.96 v 7.04 z m -16.36,-28.6404 h 3.88 v 28.64 h 8.88 v -28.64 h 3.64 v 5.44 c 0.28,-0.2 1.36,-1.4 1.36,-1.8 v -5 h -6.4 v 28.64 h -6.36 v -28.64 h -6.12 v 28.64 h -5.24 v 32.72 h 54.76 v -30.68 c -0.4,0.2404 -1.12,1.0404 -1.12,1.6 v 27.48 h -52.48 v -29.7596 h 5.24 v -28.64 h -0.04 z" />';	
		icons['ACTIVITIES.ICON.RESIDENTIAL FIRE'] = '<path stroke="none" d="m 91.54,88.3 -0.68,-2.96 -30.12,25.2 15.6,0.12 v 25.6 h 50.48 v -25.6 h 12.44 c -0.3596,-0.52 -7.64,-5.88 -8,-5.88 -0.28,0 -1.2,1.6 -1.4,1.88 l 1.4,1.4 h -2.3596 c -0.68,0.52 -4.88,3.12 -4.88,3.8 v 22.32 h -18.32 v -12.92 h -8.68 v 12.92 h -18.08 v -23.52 h 22.56 l -2.2,-2.72 -30.72,-0.12 L 91.54,88.3 z m 27.56,28 -8.2404,0 0,8.48 8.2404,0 z m -27,0.24 -8.68,0 0,8.24 8.68,0 z m 11.04,-36.36 c 0,0.88 2.08,5.28 2.48,6.92 0.44,1.76 1.48,6.08 1.48,7.84 -7.08,-1.64 -6.92,-9.92 -10.32,-12.2 -1.72,7.48 0.76,15.12 3.72,19.52 2.44,3.64 2.56,3.44 5.96,6 0.4404,0.4 7.9204,4.28 7.9204,4.28 2.04,0 9.5596,-7.08 11.0796,-8.6404 1.8,-1.8 5.56,-10.8 5.56,-14.4 V 83.46 c 0,-1.88 -0.28,-3.24 -1.4,-4 0,2 -1.8,6.96 -2.56,8.44 -0.84,1.76 -4.2796,4.24 -6.32,4.72 v -1.68 c 0,-4.44 2.36,-6.84 2.36,-10.08 0,-1.96 -4.0404,-7.24 -5.16,-8 0,5.36 -0.72,8 -4.24,9.84 -1.16,-0.72 -3.08,-2.64 -3.08,-4.4 v -0.96 c 0,-1.52 1.84,-5.4 2.52,-6.64 2,-3.92 0.48,-3.76 -0.4,-6.96 h -0.44 c -1.32,5.48 -0.8,4.84 -3.76,8.92 -1,1.36 -5.4,5.88 -5.4,7.52 z" />';
		icons['ACTIVITIES.ICON.SCHOOL FIRE'] = '<path stroke="none" d="m 131.28,72.96 c -4.0404,-1.04 -17,-7.2 -19.8,-7.2 h -2.44 V 96 h -0.72 c 0,5.6 -3.7596,15.32 -6.2,18.64 -1.96,2.7204 -3.72,4.1204 -6.24,6.16 -0.84,0.64 -7.04,4.92 -7.04,5.4 v 8.04 h 44.08 V 96 h -20.44 l 0.04,-14.8 18.76,-8.24 z m -49.24,11.8 c 0,-3.04 3.64,-8 3.64,-10 0,-1.8 -0.84,-3.88 -1.96,-4.64 -0.36,0.8 -0.36,3.56 -0.92,4.96 -0.28,0.72 -1.8,2.68 -2.32,3.52 -1.56,2.32 -3.4,4.16 -5.08,6.36 -2.16,2.84 0,5 1.12,8.24 0.8,2.24 1.4,7.88 2.08,9.36 C 71.88,102.4 70.56,91.84 67.64,89.88 l -0.56,7.56 0.08,0.24 c 0,5.04 3.56,12.28 5.92,15.04 1.12,1.32 4.28,3.6 5.88,4.6 1.12,0.68 2.52,1.0404 3.72,1.6404 0.36,0.2 3.24,1.8796 3.24,1.8796 2.12,0 9.88,-7.3596 11.52,-8.9596 1.84,-1.8 5.8,-10.96 5.8,-14.44 v -6.32 c 0,-2.08 -0.4,-2.64 -0.72,-4.16 h -0.76 c -0.16,1.92 -2.2,7.12 -3,8.72 -0.68,1.28 -6.28,5.72 -6.28,3.72 v -1.2 c 0,-3.8 2.44,-7.16 2.44,-10 v -0.76 c 0,-1.52 -4.32,-6.84 -5.36,-7.56 0,2.52 0.12,4.8 -0.8,6.52 -0.48,0.88 -2.48,3.48 -3.56,3.48 -1.08,0 -3.16,-3.4404 -3.16,-5.1204 z" />';
		
		icons['ACTIVITIES.M1.RIOT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >RIOT</text>';	
		icons['ACTIVITIES.M1.THREAT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >?</text>';	


	if(!isNaN(this.SIDC)){ //New SIDCs.
	var symbolSet = String(this.SIDC).replace("*","-").replace(" ","").substr(4,2);
	
//Air
		if(symbolSet == "01" ){
			sID['110000'] = icons['AIR.ICON.MILITARY'];
			sID['110100'] = icons['AIR.ICON.FIXED-WING DSymbol'];
			sID['110101'] = icons['AIR.ICON.MEDICAL EVACUATION'];
			sID['110102'] = icons['AIR.ICON.ATTACK/STRIKE'];
			sID['110103'] = icons['AIR.ICON.BOMBER'];
			sID['110104'] = icons['AIR.ICON.FIGHTER'];
			sID['110105'] = icons['AIR.ICON.FIGHTER/BOMBER'];
			sID['110106'] = '';//{Reserved for Future Use}
			sID['110107'] = icons['AIR.ICON.CARGO'];
			sID['110108'] = icons['AIR.ICON.JAMMER / ELECTRONIC COUNTER-MEASURES'];
			sID['110109'] = icons['AIR.ICON.TANKER'];
			sID['110110'] = icons['AIR.ICON.PATROL'];
			sID['110111'] = icons['AIR.ICON.RECONNAISSANCE'];
			sID['110112'] = icons['AIR.ICON.TRAINER'];
			sID['110113'] = icons['AIR.ICON.UTILITY'];
			sID['110114'] = icons['AIR.ICON.VSTOL'];
			sID['110115'] = icons['AIR.ICON.AIRBORNE COMMAND POST'];
			sID['110116'] = icons['AIR.ICON.AIRBORNE EARLY WARNING'];
			sID['110117'] = icons['AIR.ICON.ANTISURFACE WARFARE'];
			sID['110118'] = icons['AIR.ICON.ANTISUBMARINE WARFARE'];
			sID['110119'] = icons['AIR.ICON.COMMUNICATIONS'];
			sID['110120'] = icons['AIR.ICON.COMBAT SEARCH AND RESCUE'];
			sID['110121'] = icons['AIR.ICON.ELECTRONIC SUPPORT'];
			sID['110122'] = icons['AIR.ICON.GOVERNMENT'];
			sID['110123'] = icons['AIR.ICON.MINE COUNTERMEASURES'];
			sID['110124'] = icons['AIR.ICON.PERSONNEL RECOVERY DSymbol'];
			sID['110125'] = icons['AIR.ICON.SEARCH AND RESCUE'];
			sID['110126'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'];
			sID['110127'] = icons['AIR.ICON.ULTRA LIGHT'];
			sID['110128'] = icons['AIR.ICON.PHOTOGRAPHIC RECONNAISSANCE'];
			sID['110129'] = icons['AIR.ICON.VIP'];
			sID['110130'] = icons['AIR.ICON.SUPRESSION OF ENEMY AIR DEFENCE'];
			sID['110131'] = icons['AIR.ICON.PASSENGER'];
			sID['110132'] = icons['AIR.ICON.ESCORT'];
			sID['110133'] = icons['AIR.ICON.ELECTRONIC ATTACK (EA)'];
			sID['110200'] = icons['AIR.ICON.MILITARY ROTARY WING'];
			sID['110300'] = icons['AIR.ICON.UNMANNED AERIAL VEHICLE'];
			sID['110400'] = icons['AIR.ICON.VERTICAL-TAKEOFF UAV (VT-UAV)'];
			sID['110500'] = icons['AIR.ICON.MILITARY BALLOON'];
			sID['110600'] = icons['AIR.ICON.MILITARY AIRSHIP'];
			sID['110700'] = icons['AIR.ICON.TETHERED LIGHTER THAN AIR'];
			sID['120000'] = icons['AIR.ICON.CIVILIAN'];
			sID['120100'] = icons['AIR.ICON.CIVILIAN FIXED-WING DSymbol'];
			sID['120200'] = icons['AIR.ICON.CIVILIAN ROTARY WING'];
			sID['120300'] = icons['AIR.ICON.CIVILIAN UNMANNED AERIAL VEHICLE'];
			sID['120400'] = icons['AIR.ICON.CIVILIAN BALLOON'];
			sID['120500'] = icons['AIR.ICON.CIVILIAN AIRSHIP'];
			sID['120600'] = icons['AIR.ICON.CIVILIAN TETHERED LIGHTER THAN AIR'];
			sID['130000'] = icons['AIR.ICON.WEAPON'];
			sID['130100'] = icons['AIR.ICON.BOMB'];
			sID['130200'] = icons['AIR.ICON.UNDERWATER DECOY DSymbol'];
			sID['140000'] = icons['AIR.ICON.MANUAL TRACK'];

			
			sIDm1['01'] = icons['AIR.M1.ATTACK'];
			sIDm1['02'] = icons['AIR.M1.BOMBER'];
			sIDm1['03'] = icons['AIR.M1.CARGO'];
			sIDm1['04'] = icons['AIR.M1.FIGHTER'];
			sIDm1['05'] = icons['AIR.M1.INTERCEPTOR'];
			sIDm1['06'] = icons['AIR.M1.TANKER'];
			sIDm1['07'] = icons['AIR.M1.UTILITY'];
			sIDm1['08'] = icons['AIR.M1.VSTOL'];
			sIDm1['09'] = icons['AIR.M1.PASSENGER'];
			sIDm1['10'] = icons['AIR.M1.ULTRA LIGHT'];
			sIDm1['11'] = icons['AIR.M1.AIRBORNE COMMAND POST'];
			sIDm1['12'] = icons['AIR.M1.AIRBORNE EARLY WARNING'];
			sIDm1['13'] = icons['AIR.M1.GOVERNMENT'];
			sIDm1['14'] = icons['AIR.M1.MEDEVAC'];
			sIDm1['15'] = icons['AIR.M1.ESCORT'];
			sIDm1['16'] = icons['AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES'];
			sIDm1['17'] = icons['AIR.M1.PATROL'];
			sIDm1['18'] = icons['AIR.M1.RECONNAISSANCE'];
			sIDm1['19'] = icons['AIR.M1.TRAINER'];
			sIDm1['20'] = icons['AIR.M1.PHOTOGRAPHIC'];
			sIDm1['21'] = icons['AIR.M1.PERSONNEL RECOVERY'];
			sIDm1['22'] = icons['AIR.M1.ANTISUBMARINE WARFARE'];
			sIDm1['23'] = icons['AIR.M1.COMMUNICATIONS'];
			sIDm1['24'] = icons['AIR.M1.ELECTRONIC SUPPORT (ES)'];
			sIDm1['25'] = icons['AIR.M1.MINE COUNTERMEASURES'];
			sIDm1['26'] = icons['AIR.M1.SEARCH AND RESCUE'];
			sIDm1['27'] = icons['AIR.M1.SPECIAL OPERATIONS FORCES'];
			sIDm1['28'] = icons['AIR.M1.SURFACE WARFARE'];
			sIDm1['29'] = icons['AIR.M1.VIP'];
			sIDm1['30'] = icons['AIR.M1.COMBAT SEARCH AND RESCUE'];
			sIDm1['31'] = icons['AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE'];
			sIDm1['32'] = icons['AIR.M1.ANTISURFACE WARFARE'];
			sIDm1['33'] = icons['AIR.M1.FIGHTER/BOMBER'];
			sIDm1['34'] = icons['AIR.M1.INTENSIVE CARE'];
			sIDm1['35'] = icons['AIR.M1.ELECTRONIC ATTACK (EA)'];
			sIDm1['36'] = icons['AIR.M1.MULTIMISSION'];
			sIDm1['37'] = icons['AIR.M1.HIJACKING'];
			sIDm1['38'] = icons['AIR.M1.ASW HELO-LAMPS'];
			sIDm1['39'] = icons['AIR.M1.ASW HELO – SH-60R'];

			sIDm2['01'] = icons['AIR.M2.HEAVY'];
			sIDm2['02'] = icons['AIR.M2.MEDIUM'];
			sIDm2['03'] = icons['AIR.M2.LIGHT'];
			sIDm2['04'] = icons['AIR.M2.BOOM-ONLY'];
			sIDm2['05'] = icons['AIR.M2.DROUGE-ONLY'];
			sIDm2['06'] = icons['AIR.M2.BOOM AND DROUGE'];
			sIDm2['07'] = icons['AIR.M2.CLOSE RANGE'];
			sIDm2['08'] = icons['AIR.M2.SHORT RANGE'];
			sIDm2['09'] = icons['AIR.M2.MEDIUM RANGE'];
			sIDm2['10'] = icons['AIR.M2.LONG RANGE'];
			sIDm2['11'] = icons['AIR.M2.DOWNLINKED'];
		}	

//Air Missile
		if(symbolSet == "02" ){
			sID['110000'] = icons['AIR.MISSILE.ICON'];

			sIDm1['01'] = icons['AIR.MISSILE.M1.AIR'];
			sIDm1['02'] = icons['AIR.MISSILE.M1.SURFACE'];
			sIDm1['03'] = icons['AIR.MISSILE.M1.SUBSURFACE'];
			sIDm1['04'] = icons['AIR.MISSILE.M1.SPACE'];
			sIDm1['05'] = icons['AIR.MISSILE.M1.ANTI-BALLISTIC'];
			sIDm1['06'] = icons['AIR.MISSILE.M1.BALLISTIC'];
			sIDm1['07'] = icons['AIR.MISSILE.M1.CRUISE'];
			sIDm1['08'] = icons['AIR.MISSILE.M1.INTERCEPTOR'];

			sIDm2['01'] = icons['AIR.MISSILE.M2.AIR'];
			sIDm2['02'] = icons['AIR.MISSILE.M2.SURFACE'];
			sIDm2['03'] = icons['AIR.MISSILE.M2.SUBSURFACE'];
			sIDm2['04'] = icons['AIR.MISSILE.M2.SPACE'];
			sIDm2['05'] = icons['AIR.MISSILE.M2.LAUNCHED'];
			sIDm2['06'] = icons['AIR.MISSILE.M2.MISSILE'];
			sIDm2['07'] = icons['AIR.MISSILE.M2.PATRIOT'];
			sIDm2['08'] = icons['AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)'];
			sIDm2['09'] = icons['AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)'];
			sIDm2['10'] = icons['AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)'];
			sIDm2['11'] = icons['AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)'];
			sIDm2['12'] = icons['AIR.MISSILE.M2.SHORT RANGE'];
			sIDm2['13'] = icons['AIR.MISSILE.M2.MEDIUM RANGE'];			
			sIDm2['14'] = icons['AIR.MISSILE.M2.INTERMEDIATE RANGE'];
			sIDm2['15'] = icons['AIR.MISSILE.M2.LONG RANGE'];
			sIDm2['16'] = icons['SPACE.MISSILE.M2.SPACE'];
			
		}
			
//Space
		if(symbolSet == "05" ){
			sID['110000'] = icons['SPACE.ICON.MILITARY'];
			sID['110100'] = icons['SPACE.ICON.SPACE VEHICLE'];
			sID['110200'] = icons['SPACE.ICON.RE-ENTRY VEHICLE'];
			sID['110300'] = icons['SPACE.PLANET LANDER'];
			sID['110400'] = icons['SPACE.ICON.ORBITER SHUTTLE'];
			sID['110500'] = icons['SPACE.ICON.CAPSULE'];
			sID['110600'] = icons['SPACE.ICON.SATELLITE, GENERAL'];
			sID['110700'] = icons['SPACE.ICON.SATELLITE'];
			sID['110800'] = icons['SPACE.ICON.ANTISATELLITE WEAPON'];
			sID['110900'] = icons['SPACE.ICON.ASTRONOMICAL SATELLITE'];
			sID['111000'] = icons['SPACE.ICON.BIOSATELLITE'];
			sID['111100'] = icons['SPACE.ICON.COMMUNICATIONS SATELLITE'];
			sID['111200'] = icons['SPACE.ICON.EARTH OBSERVATION SATELLITE'];
			sID['111300'] = icons['SPACE.ICON.MINIATURIZED SATELLITE'];
			sID['111400'] = icons['SPACE.ICON.NAVIGATIONAL SATELLITE'];
			sID['111500'] = icons['SPACE.ICON.RECONNAISSANCE SATELLITE'];
			sID['111600'] = icons['SPACE.ICON.SPACE STATION'];
			sID['111700'] = icons['SPACE.ICON.TETHERED SATELLITE'];
			sID['111800'] = icons['SPACE.ICON.WEATHER SATELLITE'];
			sID['111900'] = icons['SPACE.ICON.SPACE LAUNCH VEHICLE'];

			sID['120000'] = icons['SPACE.ICON.CIVILIAN'];
			sID['120100'] = icons['SPACE.ICON.CIVILIAN ORBITER SHUTTLE'];
			sID['120200'] = icons['SPACE.ICON.CIVILIAN CAPSULE'];
			sID['120300'] = icons['SPACE.ICON.CIVILIAN SATELLITE'];
			sID['120400'] = icons['SPACE.ICON.CIVILIAN ASTRONOMICAL SATELLITE'];
			sID['120500'] = icons['SPACE.ICON.CIVILIAN BIOSATELLITE'];
			sID['120600'] = icons['SPACE.ICON.CIVILIAN COMMUNICATIONS SATELLITE'];
			sID['120700'] = icons['SPACE.ICON.CIVILIAN EARTH OBSERVATION SATELLITE'];
			sID['120800'] = icons['SPACE.ICON.CIVILIAN MINIATURIZED SATELLITE'];
			sID['120900'] = icons['SPACE.ICON.CIVILIAN NAVIGATIONAL SATELLITE'];
			sID['121000'] = icons['SPACE.ICON.CIVILIAN SPACE STATION'];
			sID['121100'] = icons['SPACE.ICON.CIVILIAN TETHERED SATELLITE'];
			sID['121120'] = icons['SPACE.ICON.CIVILIAN WEATHER SATELLITE'];
			sID['130000'] = icons['SPACE.ICON.MANUAL TRACK'];

			sIDm1['01'] = icons['SPACE.M1.LOW EARTH ORBIT (LEO)'];
			sIDm1['02'] = icons['SPACE.M1.MEDIUM EARTH ORBIT (MEO)'];
			sIDm1['03'] = icons['SPACE.M1.HIGH EARTH ORBIT (HEO)'];
			sIDm1['04'] = icons['SPACE.M1.GEOSYNCHRONOUS ORBIT (GSO)'];
			sIDm1['05'] = icons['SPACE.M1.GEOSTATIONARY ORBIT (GO)'];
			sIDm1['06'] = icons['SPACE.M1.MOLNIYA ORBIT (MO)'];

			sIDm2['01'] = icons['SPACE.M2.OPTICAL'];
			sIDm2['02'] = icons['SPACE.M2.INFRARED'];
			sIDm2['03'] = icons['SPACE.M2.RADAR'];
			sIDm2['04'] = icons['SPACE.M2.SIGNALS INTELLIGENCE (SIGINT)'];
	
		}
//Space Missile
		if(symbolSet == "06" ){
			sID['110000'] = icons['SPACE.MISSILE.ICON'];

			sIDm1['01'] = icons['SPACE.MISSILE.M1.BALLISTIC'];
			sIDm1['02'] = icons['SPACE.MISSILE.M1.SPACE'];
			sIDm1['03'] = icons['SPACE.MISSILE.M1.INTERCEPTOR'];

			sIDm2['01'] = icons['SPACE.MISSILE.M2.SHORT RANGE'] ;
			sIDm2['02'] = icons['SPACE.MISSILE.M2.MEDIUM RANGE'];
			sIDm2['03'] = icons['SPACE.MISSILE.M2.INTERMEDIATE RANGE'];
			sIDm2['04'] = icons['SPACE.MISSILE.M2.LONG RANGE'];
			sIDm2['05'] = icons['SPACE.MISSILE.M2.INTERCONTINENTAL'];
			sIDm2['06'] = icons['SPACE.MISSILE.M2.ARROW'];
			sIDm2['07'] = icons['SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)'];
			sIDm2['08'] = icons['SPACE.MISSILE.M2.PATRIOT'];
			sIDm2['09'] = icons['SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)'];
			sIDm2['10'] = icons['SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)'];
			sIDm2['11'] = icons['SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)'];
			sIDm2['12'] = icons['SPACE.MISSILE.M2.SPACE'];
		}

//Land Unit
		if(symbolSet == "10" ){
			sID['110000'] = icons['GROUND.ICON.COMMAND AND CONTROL'];
			sID['110100'] = icons['GROUND.ICON.FULLFRAME.BROADCAST TRANSMITTER ANTENNA'];
			sID['110200'] = icons['GROUND.ICON.CIVIL AFFAIRS'];
			sID['110300'] = icons['GROUND.ICON.CIVIL-MILITARY-COOPERATION'];
			sID['110400'] = icons['GROUND.ICON.INFORMATION OPERATIONS'];
			sID['110500'] = icons['GROUND.ICON.LIAISON'];
			sID['110600'] = icons['GROUND.ICON.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)'];
			sID['110601'] = icons['GROUND.ICON.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)'] + icons['GROUND.ICON.FULLFRAME.BROADCAST TRANSMITTER ANTENNA'];
			sID['110700'] = icons['GROUND.ICON.RADIO'];
			sID['110800'] = icons['GROUND.ICON.RADIO RELAY'];
			sID['110900'] = icons['GROUND.ICON.RADIO TELETYPE CENTRE'];
			sID['111000'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'];
			sID['111001'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.RADIO'];
			sID['111002'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.RADIO RELAY'];
			sID['111003'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.RADIO TELETYPE CENTRE'];
			sID['111004'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.TACTICAL SATELLITE'];
			sID['111005'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.VIDEO IMAGERY'];
			//sID['111095'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['111097'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['111098'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['111100'] = icons['GROUND.ICON.TACTICAL SATELLITE'];
			sID['111200'] = icons['GROUND.ICON.VIDEO IMAGERY'];
			sID['120100'] = icons['GROUND.ICON.FULLFRAME.AIR ASSAULT WITH ORGANIC LIFT'];
			sID['120200'] = icons['GROUND.ICON.AIR TRAFFIC SERVICES'];
			sID['120300'] = icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];
			sID['120400'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'];
			sID['120401'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.ARMOUR'];
			sID['120402'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			sID['120500'] = icons['GROUND.ICON.ARMOUR'];
			sID['120501'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
			sID['120502'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];
			//sID['120595'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];;
			sID['120600'] = icons['GROUND.ICON.AVIATION ROTARY WING'];
			sID['120601'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
			//sID['120695'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['120697'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['120698'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['120700'] = icons['GROUND.ICON.AVIATION COMPOSITE'];
			//sID['120795'] = icons['GROUND.ICON.AVIATION COMPOSITE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['120800'] = icons['GROUND.ICON.AVIATION FIXED WING'];
			sID['120801'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
			//sID['120895'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['120900'] = icons['GROUND.ICON.COMBAT'];
			sID['121000'] = icons['GROUND.ICON.COMBINED ARMS'];
			//sID['121095'] = icons['GROUND.ICON.COMBINED ARMS'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['121100'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'];
			sID['121101'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];
			sID['121102'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.ARMOUR'];
			sID['121103'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'];
			sID['121104'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			sID['121105'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'];
			//sID['121195'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['121200'] = icons['GROUND.ICON.OBSERVER/OBSERVATION'];
			sID['121300'] = icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
			sID['121301'] = icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.SURVEILLANCE'];
			sID['121302'] = icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];
			sID['121303'] = icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			//sID['121395'] = icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['121400'] = icons['GROUND.ICON.SEA-AIR-LAND'];
			sID['121500'] = icons['GROUND.ICON.SNIPER'];
			sID['121600'] = icons['GROUND.ICON.SURVEILLANCE'];
			sID['121700'] = icons['GROUND.ICON.SPECIAL FORCES'];
			//sID['121795'] = icons['GROUND.ICON.SPECIAL FORCES'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['121800'] = icons['GROUND.ICON.SPECIAL OPERATIONS FORCES'];
			sID['121801'] = icons['GROUND.ICON.FIXED WING MISO'];
			sID['121802'] = icons['GROUND.ICON.SPECIAL OPERATIONS FORCES'] + icons['GROUND.ICON.FULLFRAME.INFANTRY'];
			sID['121803'] = icons['SEA.ICON.COMBATANT'] + icons['GROUND.M1.SPECIAL OPERATIONS FORCES (SOF)']; //SPECIAL BOAT
			sID['121804'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] + icons['GROUND.M1.SPECIAL OPERATIONS FORCES (SOF)'];//SPECIAL SSNR)
			sID['121805'] = icons['SOF.ICON.UNDERWATER DEMOLITION TEAM'];
			sID['121900'] = icons['GROUND.ICON.UNMANNED SYSTEMS'];
			sID['130100'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'];
			sID['130101'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'];
			sID['130102'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'];
			//sID['130195'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['130200'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.NAVAL'];
			sID['130300'] = icons['GROUND.ICON.FIELD ARTILLERY'];
			sID['130301'] = scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.ARMOUR']; //ARTILLERY SELF–PROPELLED
			sID['130302'] = scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE']; //ARTILLERY TARGET ACQUISITION
			//sID['130395'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['130400'] = icons['GROUND.ICON.FIELD ARTILLERY OBSERVER'];
			sID['130500'] = icons['GROUND.ICON.JOINT FIRE SUPPORT'];
			sID['130600'] = icons['GROUND.ICON.METEOROLOGICAL'];
			sID['130700'] = icons['GROUND.ICON.MISSILE'];
			sID['130800'] = icons['GROUND.ICON.MORTAR'];
			sID['130801'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TRACKED'];
			sID['130802'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TRUCK'];
			sID['130803'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TOWED'];
			sID['130900'] = icons['GROUND.ICON.SURVEY'];
			sID['140100'] = icons['GROUND.ICON.CBRN'];
			sID['140101'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.ARMOUR'];
			sID['140102'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			sID['140103'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
			sID['140104'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'];
			sID['140105'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			//sID['140195'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['140200'] = icons['GROUND.ICON.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)'];
			//sID['140295'] = icons['GROUND.ICON.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['140300'] = icons['GROUND.ICON.CRIMINAL INVESTIGATION DIVISION'];
			sID['140400'] = icons['SUB.ICON.DIVER, CIVILIAN'];
			sID['140500'] = icons['GROUND.ICON.DOG'];
			sID['140600'] = icons['GROUND.ICON.DRILLING'];
			sID['140700'] = icons['GROUND.ICON.ENGINEER'];
			sID['140701'] = scale(0.7,icons['GROUND.ICON.ENGINEER']) + icons['GROUND.ICON.ARMOUR'];
			sID['140702'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			sID['140703'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
			//sID['140795'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['140800'] = icons['GROUND.ICON.EXPLOSIVE ORDNANCE DISPOSAL'];
			sID['140900'] = icons['GROUND.ICON.FIELD CAMP CONSTRUCTION'];
			sID['141000'] = icons['GROUND.ICON.FIRE PROTECTION'];
			sID['141100'] = icons['GROUND.ICON.GEOSPATIAL SUPPORT'];
			sID['141200'] = icons['GROUND.ICON.MILITARY POLICE'];
			//sID['141295'] = icons['GROUND.ICON.MILITARY POLICE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['141300'] = icons['GROUND.ICON.MINE'];
			sID['141400'] = icons['GROUND.ICON.MINE CLEARING'];
			sID['141500'] = icons['GROUND.ICON.MINE LAUNCHING'];
			sID['141600'] = icons['GROUND.ICON.MINE LAYING'];
			sID['141700'] = icons['GROUND.ICON.SECURITY'];
			sID['141701'] = icons['GROUND.ICON.SECURITY'] + icons['GROUND.ICON.ARMOUR'];
			sID['141702'] = icons['GROUND.ICON.SECURITY'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
			sID['141800'] = icons['AIR.ICON.SEARCH AND RESCUE'];
			sID['141900'] = icons['GROUND.ICON.SECURITY POLICE (AIR)'];
			sID['142000'] = icons['GROUND.ICON.SHORE PATROL'];
			sID['142100'] = icons['GROUND.ICON.TOPOGRAPHIC'];
			sID['150100'] = icons['GROUND.ICON.FULLFRAME.ANALYSIS'];
			sID['150200'] = icons['GROUND.ICON.COUNTER-INTELLIGENCE'];
			sID['150300'] = icons['GROUND.ICON.FULLFRAME.DIRECTION FINDING'];
			sID['150400'] = icons['GROUND.ICON.ELECTRONIC RANGING'];
			sID['150500'] = icons['GROUND.ICON.ELECTRONIC WARFARE'];
			sID['150501'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.ANALYSIS'];
			sID['150502'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.DIRECTION FINDING'];
			sID['150503'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.INTERCEPT'];
			sID['150504'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.JAMMING'];
			sID['150505'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.SEARCH'];
			sID['150600'] = icons['GROUND.ICON.FULLFRAME.INTERCEPT'];
			sID['150700'] = icons['GROUND.ICON.INTERROGATION'];
			sID['150800'] = icons['GROUND.ICON.FULLFRAME.JAMMING'];
			sID['150900'] = icons['GROUND.ICON.JOINT INTELLIGENCE CENTRE'];
			sID['151000'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'];
			//sID['151095'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['151100'] = icons['GROUND.ICON.FULLFRAME.SEARCH'];
			sID['151200'] = icons['GROUND.ICON.SENSOR'];
			sID['160000'] = icons['GROUND.ICON.SUSTAINMENT'];
			//sID['160095'] = icons['GROUND.ICON.SUSTAINMENT'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['160097'] = icons['GROUND.ICON.SUSTAINMENT'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['160098'] = icons['GROUND.ICON.SUSTAINMENT'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['160100'] = icons['GROUND.ICON.ADMINISTRATIVE'];
			//sID['160197'] = icons['GROUND.ICON.ADMINISTRATIVE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['160198'] = icons['GROUND.ICON.ADMINISTRATIVE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['160200'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS ALL'];
			sID['160300'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.AIRPORT OF DEBARKATION'];
			sID['160400'] = icons['GROUND.ICON.AMMUNITION'];
			sID['160500'] = icons['GROUND.ICON.BAND'];
			sID['160600'] = icons['GROUND.ICON.COMBAT SERVICE SUPPORT'];
			sID['160700'] = icons['GROUND.ICON.FINANCE'];
			//sID['160797'] = icons['GROUND.ICON.FINANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['160798'] = icons['GROUND.ICON.FINANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['160800'] = icons['GROUND.ICON.JUDGE ADVOCATE GENERAL'];
			sID['160900'] = icons['GROUND.ICON.LABOUR'];
			sID['161000'] = icons['GROUND.ICON.LAUNDRY/BATH'];
			sID['161100'] = icons['GROUND.ICON.MAINTENANCE'];
			//sID['161195'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['161197'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['161198'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['161200'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.MATERIEL'];
			sID['161300'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'];
			//sID['161395'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['161397'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS']
			//sID['161398'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER']
			sID['161400'] = icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'];
			sID['161500'] = icons['GROUND.ICON.MORALE, WELFARE, AND RECREATION'];
			sID['161600'] = icons['GROUND.ICON.MORTUARY AFFAIRS'];
			sID['161700'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS MULTIPLE'];
			sID['161800'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.NATO SUPPLY CLASS I'];
			sID['161900'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.NATO SUPPLY CLASS II'];
			sID['162000'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS III'];
			sID['162100'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.NATO SUPPLY CLASS IV'];
			sID['162200'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS V'];
			sID['162300'] = icons['GROUND.ICON.ORDNANCE'];
			//sID['162395'] = icons['GROUND.ICON.ORDNANCE'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['162397'] = icons['GROUND.ICON.ORDNANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['162398'] = icons['GROUND.ICON.ORDNANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['162400'] = icons['GROUND.ICON.PERSONNEL SERVICES'];
			//sID['162495'] = icons['GROUND.ICON.PERSONNEL SERVICES'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			sID['162500'] = icons['GROUND.ICON.PETROLEUM OIL LUBRICANTS'];
			sID['162600'] = icons['GROUND.ICON.PIPELINE'];
			sID['162700'] = icons['GROUND.ICON.POSTAL'];
			sID['162800'] = icons['GROUND.ICON.PUBLIC AFFAIRS'];
			sID['162900'] = icons['GROUND.ICON.QUARTERMASTER'];
			//sID['162995'] = icons['GROUND.ICON.QUARTERMASTER'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['162997'] = icons['GROUND.ICON.QUARTERMASTER'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['162998'] = icons['GROUND.ICON.QUARTERMASTER'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['163000'] = icons['GROUND.ICON.RAILHEAD'];
			sID['163100'] = icons['GROUND.ICON.RELIGIOUS SUPPORT'];
			sID['163200'] = icons['GROUND.ICON.REPLACEMENT HOLDING UNIT'];
			sID['163300'] = icons['GROUND.ICON.SEAPORT OF DEBARKATION'];
			sID['163400'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'];
			sID['163500'] = icons['GROUND.ICON.JOINT INFORMATION BUREAU'];
			//sID['163597'] = icons['GROUND.ICON.JOINT INFORMATION BUREAU'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['163598'] = icons['GROUND.ICON.JOINT INFORMATION BUREAU'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['163600'] = icons['GROUND.ICON.TRANSPORTATION'];
			//sID['163695'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			//sID['163697'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			//sID['163698'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			sID['163700'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS I'];
			sID['163800'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS II'];
			sID['163900'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS III'];
			sID['164000'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS IV'];
			sID['164100'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS V'];
			sID['164200'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS VI'];
			sID['164300'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS VII'];
			sID['164400'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS VIII'];
			sID['164500'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS IX'];
			sID['164600'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS X'];
			sID['164700'] = icons['GROUND.ICON.WATER'];
			sID['164800'] = icons['GROUND.ICON.WATER PURIFICATION'];
			sID['164900'] = icons['GROUND.ICON.PUBLIC AFFAIRS BROADCAST'];
			sID['170100'] = icons['GROUND.ICON.NAVAL'];
			sID['180100'] = icons['GROUND.ICON.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)'];
			sID['180200'] = icons['GROUND.ICON.ALLIED COMMAND OPERATIONS'];
			sID['180300'] = icons['GROUND.ICON.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)'];
			sID['180400'] = icons['GROUND.ICON.MULTINATIONAL (MN)'];
			sID['190000'] = icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION'];
			sID['200000'] = icons['GROUND.ICON.FULLFRAME.LAW ENFORCEMENT'];
			sID['200100'] = icons['GROUND.ICON.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)'];
			sID['200200'] = icons['GROUND.ICON.FULLFRAME.BORDER PATROL'];
			sID['200300'] = icons['GROUND.ICON.FULLFRAME.CUSTOMS SERVICE'];
			sID['200400'] = icons['GROUND.ICON.DRUG ENFORCEMENT AGENCY (DEA)'];
			sID['200500'] = icons['GROUND.ICON.FULLFRAME.DEPARTMENT OF JUSTICE (DOJ)'];
			sID['200600'] = icons['GROUND.ICON.FEDERAL BUREAU OF INVESTIGATION (FBI)'];
			sID['200700'] = icons['GROUND.ICON.LAW ENFORCEMENT'];
			sID['200800'] = icons['GROUND.ICON.FULLFRAME.PRISON'];
			sID['200900'] = icons['GROUND.ICON.UNITED STATES SECRET SERVICE(TREAS) (USSS)'];
			sID['201000'] = icons['GROUND.ICON.TRANSPORTATION SECURITY AGENCY (TSA)'];
			sID['201100'] = icons['SEA.ICON.LAW ENFORCEMENT VESSEL'];
			sID['201200'] = icons['GROUND.ICON.FULLFRAME.US MARSHALS SERVICE'];
			sID['201300'] = icons['STABILITY.ICON.INTERNAL SECURITY FORCE'];
			
			sIDm1['01'] = icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];
			sIDm1['02'] = icons['GROUND.M1.AREA'];
			sIDm1['03'] = icons['GROUND.M1.ATTACK'];
			sIDm1['04'] = icons['GROUND.M1.BIOLOGICAL'];
			sIDm1['05'] = icons['GROUND.M1.BORDER'];
			sIDm1['06'] = icons['GROUND.M1.BRIDGING']; 
			sIDm1['07'] = icons['GROUND.M1.CHEMICAL'];
			sIDm1['08'] = icons['GROUND.M1.CLOSE PROTECTION'];
			sIDm1['09'] = icons['GROUND.M1.COMBAT'];
			sIDm1['10'] = icons['GROUND.M1.COMMAND AND CONTROL'];		
			sIDm1['11'] = icons['GROUND.M1.COMMUNICATIONS CONTINGENCY PACKAGE']
			sIDm1['12'] = icons['GROUND.M1.CONSTRUCTION'] 
			sIDm1['13'] = icons['GROUND.M1.CROSS CULTURAL COMMUNICATION']
			sIDm1['14'] = icons['GROUND.M1.CROWD AND RIOT CONTROL']
			sIDm1['15'] = icons['GROUND.M1.DECONTAMINATION']
			sIDm1['16'] = icons['GROUND.M1.DETENTION'] 
			sIDm1['17'] = icons['GROUND.M1.DIRECT COMMUNICATIONS'];
			sIDm1['18'] = icons['GROUND.M1.DIVING'];
			sIDm1['19'] = icons['GROUND.M1.DIVISION']
			sIDm1['20'] = icons['GROUND.M1.DOG']
			sIDm1['21'] = icons['GROUND.M1.DRILLING'];
			sIDm1['22'] = icons['GROUND.M1.ELECTRO-OPTICAL']
			sIDm1['23'] = icons['GROUND.M1.ENHANCED']
			sIDm1['24'] = icons['GROUND.M1.EXPLOSIVE ORDNANCE DISPOSAL']
			sIDm1['25'] = icons['GROUND.M1.FIRE DIRECTION CENTRE']
			sIDm1['26'] = icons['GROUND.M1.FORCE']
			sIDm1['27'] = icons['GROUND.M1.FORWARD']
			sIDm1['28'] = icons['GROUND.M1.GROUND STATION MODULE']
			sIDm1['29'] = icons['GROUND.M1.LANDING SUPPORT']
			sIDm1['30'] = icons['GROUND.M1.LARGE EXTENSION NODE']
			sIDm1['31'] = icons['GROUND.M1.MAINTENANCE'];
			sIDm1['32'] = icons['GROUND.M1.METEOROLOGICAL']
			sIDm1['33'] = icons['GROUND.M1.MINE COUNTERMEASURE']
			sIDm1['34'] = icons['GROUND.M1.MISSILE']
			sIDm1['35'] = icons['GROUND.M1.(MOBILE) ADVISOR AND SUPPORT'];
			sIDm1['36'] = icons['GROUND.M1.MOBILE SUBSCRIBER EQUIPMENT']
			sIDm1['37'] = icons['GROUND.M1.MOBILITY SUPPORT'] 
			sIDm1['38'] = icons['GROUND.M1.MOVEMENT CONTROL CENTRE']
			sIDm1['39'] = icons['GROUND.M1.MULTINATIONAL']
			sIDm1['40'] = icons['GROUND.M1.MULTINATIONAL SPECIALIZED UNIT']
			sIDm1['41'] = icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER']
			sIDm1['42'] = icons['GROUND.M1.NATO MEDICAL ROLE 1'];
			sIDm1['43'] = icons['GROUND.M1.NATO MEDICAL ROLE 2'];
			sIDm1['44'] = icons['GROUND.M1.NATO MEDICAL ROLE 3'];
			sIDm1['45'] = icons['GROUND.M1.NATO MEDICAL ROLE 4'];
			sIDm1['46'] = icons['GROUND.M1.NAVAL']
			sIDm1['47'] = icons['GROUND.M1.NODE CENTRE']
			sIDm1['48'] = icons['GROUND.M1.NUCLEAR']
			sIDm1['49'] = icons['GROUND.M1.OPERATIONS']
			sIDm1['50'] = icons['GROUND.M1.RADAR']
			sIDm1['51'] = icons['GROUND.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR']
			sIDm1['52'] = icons['GROUND.M1.RADIOLOGICAL']
			sIDm1['53'] = icons['GROUND.M1.SEARCH AND RESCUE']
			sIDm1['54'] = icons['GROUND.M1.SECURITY']
			sIDm1['55'] = icons['GROUND.M1.SENSOR'];
			sIDm1['56'] = icons['GROUND.M1.SENSOR CONTROL MODULE']
			sIDm1['57'] = icons['GROUND.M1.SIGNALS INTELLIGENCE'];
			sIDm1['58'] = icons['GROUND.M1.SINGLE SHELTER SWITCH']
			sIDm1['59'] = icons['GROUND.M1.SINGLE ROCKET LAUNCHER']
			sIDm1['60'] = icons['GROUND.M1.SMOKE']
			sIDm1['61'] = icons['GROUND.M1.SNIPER']
			sIDm1['62'] = icons['GROUND.M1.SOUND RANGING']
			sIDm1['63'] = icons['GROUND.M1.SPECIAL OPERATIONS FORCES (SOF)']
			sIDm1['64'] = icons['GROUND.M1.SPECIAL WEAPONS AND TACTICS']
			sIDm1['65'] = icons['GROUND.M1.SURVEY'];
			sIDm1['66'] = icons['GROUND.M1.TACTICAL EXPLOITATION']
			sIDm1['67'] = icons['GROUND.M1.TARGET ACQUISITION']
			sIDm1['68'] = icons['GROUND.M1.TOPOGRAPHIC'];
			sIDm1['69'] = icons['GROUND.M1.UTILITY']
			sIDm1['70'] = icons['GROUND.M1.VIDEO IMAGERY'];
			sIDm1['71'] = icons['GROUND.M1.ACCIDENT']
			sIDm1['72'] = icons['GROUND.M1.OTHER']
			sIDm1['73'] = icons['GROUND.M1.CIVILIAN']
			sIDm1['74'] = icons['GROUND.M1.ANTISUBMARINE WARFARE']
			sIDm1['75'] = icons['GROUND.M1.MEDEVAC']
			sIDm1['76'] = icons['GROUND.M1.RANGER']
			sIDm1['77'] = icons['GROUND.M1.SUPPORT']
			sIDm1['78'] = icons['GROUND.M2.AVIATION']
			
			
			sIDm2['01'] = icons['GROUND.M2.AIRBORNE'];
			sIDm2['02'] = icons['GROUND.M2.ARCTIC'];
			sIDm2['03'] = icons['GROUND.M2.BATTLE DAMAGE REPAIR'];
			sIDm2['04'] = icons['GROUND.M2.BICYCLE EQUIPPED'];
			sIDm2['05'] = icons['GROUND.M2.CASUALTY STAGING'];
			sIDm2['06'] = icons['GROUND.M2.CLEARING'];
			sIDm2['07'] = icons['GROUND.M2.CLOSE RANGE'];
			sIDm2['08'] = icons['GROUND.M2.CONTROL'];
			sIDm2['09'] = icons['GROUND.M2.DECONTAMINATION'];
			sIDm2['10'] = icons['GROUND.M2.DEMOLITION'];
			sIDm2['11'] = icons['GROUND.M2.DENTAL']
			sIDm2['12'] = icons['GROUND.M2.DIGITAL']
			sIDm2['13'] = icons['GROUND.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM'];
			sIDm2['14'] = icons['GROUND.M2.EQUIPMENT']
			sIDm2['15'] = icons['GROUND.M2.HEAVY']
			sIDm2['16'] = icons['GROUND.M2.HIGH ALTITUDE']
			sIDm2['17'] = icons['GROUND.M2.INTERMODAL'];
			sIDm2['18'] = icons['GROUND.M2.INTENSIVE CARE']
			sIDm2['19'] = icons['GROUND.M2.LIGHT']
			sIDm2['20'] = icons['GROUND.M2.LABORATORY']
			sIDm2['21'] = icons['GROUND.M2.LAUNCHER']
			sIDm2['22'] = icons['GROUND.M2.LONG RANGE']
			sIDm2['23'] = icons['GROUND.M2.LOW ALTITUDE']
			sIDm2['24'] = icons['GROUND.M2.MEDIUM'] 
			sIDm2['25'] = icons['GROUND.M2.MEDIUM ALTITUDE']
			sIDm2['26'] = icons['GROUND.M2.MEDIUM RANGE']
			sIDm2['27'] = icons['GROUND.M2.MOUNTAIN']
			sIDm2['28'] = icons['GROUND.M2.HIGH TO MEDIUM ALTITUDE']
			sIDm2['29'] = icons['GROUND.M2.MULTI-CHANNEL']
			sIDm2['30'] = icons['GROUND.M2.OPTICAL']
			sIDm2['31'] = icons['GROUND.M2.PACK ANIMAL'];
			sIDm2['32'] = icons['GROUND.M2.PATIENT EVACUATION COORDINATION']
			sIDm2['33'] = icons['GROUND.M2.PREVENTIVE MAINTENANCE']
			sIDm2['34'] = icons['GROUND.M2.PSYCHOLOGICAL']
			sIDm2['35'] = icons['GROUND.M2.RADIO RELAY LINE OF SIGHT'];
			sIDm2['36'] = icons['GROUND.M2.RAILROAD']
			sIDm2['37'] = icons['GROUND.M2.RECOVERY (UNMANNED SYSTEMS)']
			sIDm2['38'] = icons['GROUND.M2.RECOVERY (MAINTENANCE)']
			sIDm2['39'] = icons['GROUND.M2.RESCUE COORDINATION CENTRE']
			sIDm2['40'] = icons['GROUND.M2.RIVERINE'];
			sIDm2['41'] = icons['GROUND.M2.SINGLE CHANNEL']
			sIDm2['42'] = icons['GROUND.M2.SKI'];
			sIDm2['43'] = icons['GROUND.M2.SHORT RANGE']
			sIDm2['44'] = icons['GROUND.M2.STRATEGIC']
			sIDm2['45'] = icons['GROUND.M2.SUPPORT'] 
			sIDm2['46'] = icons['GROUND.M2.TACTICAL']
			sIDm2['47'] = icons['GROUND.M2.TOWED']
			sIDm2['48'] = icons['GROUND.M2.TROOP']
			sIDm2['49'] = icons['GROUND.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING ']
			sIDm2['50'] = icons['GROUND.M2.VETERINARY']
			sIDm2['51'] = icons['GROUND.M2.WHEELED']
			sIDm2['52'] = icons['GROUND.M2.HIGH TO LOW ALTITUDE']
			sIDm2['53'] = icons['GROUND.M2.MEDIUM TO LOW ALTITUDE']
			sIDm2['54'] = icons['GROUND.M2.ATTACK']
			sIDm2['55'] = icons['GROUND.M2.REFUEL']
			sIDm2['56'] = icons['GROUND.M2.UTILITY']
			sIDm2['57'] = icons['GROUND.M2.COMBAT SEARCH AND RESCUE']
		}		

//Land civilian individuals/organization
		if(symbolSet == "11" ){
			sID['110000'] = icons['AIR.ICON.CIVILIAN'];
			sID['110100'] = icons['GROUND.ICON.ENVIRONMENTAL PROTECTION']
			sID['110200'] = icons['GROUND.ICON.GOVERNMENT ORGANIZATION'];
			sID['110300'] = icons['STABILITY.ICON.INDIVIDUAL'];
			sID['110400'] = icons['STABILITY.ICON.GROUP'];
			sID['110500'] = icons['STABILITY.ICON.KILLING VICTIM'];
			sID['110600'] = icons['STABILITY.ICON.KILLING VICTIMS'];
			sID['110700'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.ICON.ATTEMPTED CRIMINAL ACTIVITY'];//VICTIM OF AN ATTEMPTED CRIME
			sID['110800'] = icons['STABILITY.ICON.SPY'];
			sID['110900'] = icons['STABILITY.ICON.COMPOSITE LOSS'];
			sID['111000'] = icons['GROUND.ICON.EMERGENCY MEDICAL OPERATION'];
			
			sIDm1['01'] = icons['STABILITY.M1.ASSASSINATION'];
			sIDm1['02'] = icons['STABILITY.M1.EXECUTION (WRONGFUL KILLING)'];
			sIDm1['03'] = icons['STABILITY.M1.MURDER'];
			sIDm1['04'] = icons['STABILITY.M1.HIJACKING/HIJACKED'];
			sIDm1['05'] = icons['STABILITY.M1.KIDNAPPING'];
			sIDm1['06'] = icons['STABILITY.M1.PIRACY'];
			sIDm1['07'] = icons['STABILITY.M1.RAPE'];
			sIDm1['08'] = icons['STABILITY.M1.CIVILIAN'];
			sIDm1['09'] = icons['STABILITY.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES'];
			sIDm1['10'] = icons['STABILITY.M1.FOREIGN FIGHTERS'];
			sIDm1['11'] = icons['STABILITY.M1.GANG'] ;
			sIDm1['12'] = icons['STABILITY.M1.GOVERNMENT ORGANIZATION'];
			sIDm1['13'] = icons['STABILITY.M1.LEADER'];
			sIDm1['14'] = icons['STABILITY.M1.NONGOVERNMENTAL ORGANIZATION (NGO)'];
			sIDm1['15'] = icons['STABILITY.M1.COERCED/IMPRESSED'];
			sIDm1['16'] = icons['STABILITY.M1.WILLING RECRUIT'];
			sIDm1['17'] = icons['STABILITY.M1.RELIGIOUS'];
			sIDm1['18'] = icons['STABILITY.M1.TARGETED'];
			sIDm1['19'] = icons['STABILITY.M1.TERRORIST'];
			sIDm1['20'] = icons['STABILITY.M1.SPEAKER'];
			sIDm1['21'] = icons['STABILITY.M1.ACCIDENT'];
			sIDm1['22'] = icons['STABILITY.M1.COMBAT'];
			sIDm1['23'] = icons['STABILITY.M1.OTHER'];
			sIDm1['24'] = icons['STABILITY.M1.LOOT'];

			sIDm2['01'] = icons['STABILITY.M2.LEADER OR LEADERSHIP'];

		}	

//Land Equipment
		if(symbolSet == "15" ){
		
			sID['110000'] = 'Weapons/Weapons System';
			sID['110100'] = 'Weapons/Weapons System.Rifle';
			sID['110101'] = 'Weapons/Weapons System.Rifle.Single Shot Rifle';
			sID['110102'] = 'Weapons/Weapons System.Rifle.Semiautomatic Rifle';
			sID['110103'] = 'Weapons/Weapons System.Rifle.Automatic Rifle';
			sID['110200'] = 'Weapons/Weapons System.Machine Gun';
			sID['110201'] = 'Weapons/Weapons System.Machine Gun.Light ';
			sID['110202'] = 'Weapons/Weapons System.Machine Gun.Medium ';
			sID['110203'] = 'Weapons/Weapons System.Machine Gun.Heavy';
			sID['110300'] = 'Weapons/Weapons System.Grenade Launcher';
			sID['110301'] = 'Weapons/Weapons System.Grenade Launcher.Light';
			sID['110302'] = 'Weapons/Weapons System.Grenade Launcher.Medium';
			sID['110303'] = 'Weapons/Weapons System.Grenade Launcher.Heavy';
			sID['110400'] = 'Weapons/Weapons System.Flame Thrower';
			sID['110500'] = 'Weapons/Weapons System.Air Defense Gun';
			sID['110501'] = 'Weapons/Weapons System.Air Defense Gun.Light';
			sID['110502'] = 'Weapons/Weapons System.Air Defense Gun.Medium';
			sID['110503'] = 'Weapons/Weapons System.Air Defense Gun.Heavy';
			sID['110600'] = 'Weapons/Weapons System.Antitank Gun';
			sID['110601'] = 'Weapons/Weapons System.Antitank Gun.Light';
			sID['110602'] = 'Weapons/Weapons System.Antitank Gun.Medium';
			sID['110603'] = 'Weapons/Weapons System.Antitank Gun.Heavy';
			sID['110700'] = 'Weapons/Weapons System.Direct Fire Gun';
			sID['110701'] = 'Weapons/Weapons System.Direct Fire Gun.Light';
			sID['110702'] = 'Weapons/Weapons System.Direct Fire Gun.Medium';
			sID['110703'] = 'Weapons/Weapons System.Direct Fire Gun.Heavy';
			sID['110800'] = 'Weapons/Weapons System.Recoilless Gun';
			sID['110801'] = 'Weapons/Weapons System.Recoilless Gun.Light';
			sID['110802'] = 'Weapons/Weapons System.Recoilless Gun.Medium';
			sID['110803'] = 'Weapons/Weapons System.Recoilless Gun.Heavy';
			sID['110900'] = 'Weapons/Weapons System.Howitzer';
			sID['110901'] = 'Weapons/Weapons System.Howitzer.Light';
			sID['110902'] = 'Weapons/Weapons System.Howitzer.Medium';
			sID['110903'] = 'Weapons/Weapons System.Howitzer.Heavy';
			sID['111000'] = 'Weapons/Weapons System.Missile Launcher';
			sID['111001'] = 'Weapons/Weapons System.Missile Launcher.Light';
			sID['111002'] = 'Weapons/Weapons System.Missile Launcher.Medium';
			sID['111003'] = 'Weapons/Weapons System.Missile Launcher.Heavy';
			sID['111100'] = 'Weapons/Weapons System.Air Defense Missile Launcher';
			sID['111101'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Light';
			sID['111102'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Light, Light Transporter-Launcher and Radar (TLAR)';
			sID['111103'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Light, Light Tactical Landing Approach Radar (TELAR)';
			sID['111104'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Medium';
			sID['111105'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Medium, TLAR';
			sID['111106'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Medium, TELAR';
			sID['111107'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Heavy';
			sID['111108'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Heavy, TLAR';
			sID['111109'] = 'Weapons/Weapons System.Air Defense Missile Launcher.Heavy, TELAR';
			sID['111200'] = 'Weapons/Weapons System.Antitank Missile Launcher';
			sID['111201'] = 'Weapons/Weapons System.Antitank Missile Launcher.Light';
			sID['111202'] = 'Weapons/Weapons System.Antitank Missile Launcher.Medium';
			sID['111203'] = 'Weapons/Weapons System.Antitank Missile Launcher.Heavy';
			sID['111300'] = 'Weapons/Weapons System.Surface-to-Surface Missile Launcher';
			sID['111301'] = 'Weapons/Weapons System.Surface-to-Surface Missile Launcher.Light';
			sID['111302'] = 'Weapons/Weapons System.Surface-to-Surface Missile Launcher.Medium';
			sID['111303'] = 'Weapons/Weapons System.Surface-to-Surface Missile Launcher.Heavy';
			sID['111400'] = 'Weapons/Weapons System.Mortar';
			sID['111401'] = 'Weapons/Weapons System.Mortar.Light';
			sID['111402'] = 'Weapons/Weapons System.Mortar.Medium';
			sID['111403'] = 'Weapons/Weapons System.Mortar.Heavy';
			sID['111500'] = 'Weapons/Weapons System.Single Rocket Launcher';
			sID['111501'] = 'Weapons/Weapons System.Single Rocket Launcher.Light';
			sID['111502'] = 'Weapons/Weapons System.Single Rocket Launcher.Medium';
			sID['111503'] = 'Weapons/Weapons System.Single Rocket Launcher.Heavy';
			sID['111600'] = 'Weapons/Weapons System.Multiple Rocket Launcher';
			sID['111601'] = 'Weapons/Weapons System.Multiple Rocket Launcher.Light';
			sID['111602'] = 'Weapons/Weapons System.Multiple Rocket Launcher.Medium';
			sID['111603'] = 'Weapons/Weapons System.Multiple Rocket Launcher.Heavy';
			sID['111701'] = 'Weapons/Weapons System.Antitank Rocket Launcher';
			sID['111701'] = 'Weapons/Weapons System.Antitank Rocket Launcher.Light';
			sID['111702'] = 'Weapons/Weapons System.Antitank Rocket Launcher.Medium';
			sID['111703'] = 'Weapons/Weapons System.Antitank Rocket Launcher.Heavy';
			sID['111800'] = 'Weapons/Weapons System.Nonlethal Weapon';
			sID['111900'] = 'Weapons/Weapons System.Taser';
			sID['112000'] = 'Weapons/Weapons System.Water Cannon';
			sID['120000'] = 'Vehicle';
			sID['120100'] = 'Vehicle.Armored';
			sID['120101'] = 'Vehicle.Armored.Armored Fighting Vehicle';
			sID['120102'] = 'Vehicle.Armored.Armored Fighting Vehicle Command and Control';
			sID['120103'] = 'Vehicle.Armored.Armored Personnel Carrier';
			sID['120104'] = 'Vehicle.Armored.Armored Personnel Carrier Ambulance';
			sID['120105'] = 'Vehicle.Armored.Armored Protected Vehicle';
			sID['120106'] = 'Vehicle.Armored.Armored Protected Vehicle Recovery';
			sID['120107'] = 'Vehicle.Armored.Armored Protected Vehicle Medical Evacuation';
			sID['120108'] = 'Vehicle.Armored.Armored Personnel Carrier, Recovery';
			sID['120109'] = 'Vehicle.Armored.Combat Service Support Vehicle';
			sID['120110'] = 'Vehicle.Armored.Light Wheeled Armored Vehicle';
			sID['120200'] = 'Vehicle.Tank';
			sID['120201'] = 'Vehicle.Tank.Light';
			sID['120202'] = 'Vehicle.Tank.Medium';
			sID['120203'] = 'Vehicle.Tank.Heavy';
			sID['120300'] = 'Vehicle.Tank Recovery Vehicle';
			sID['120301'] = 'Vehicle.Tank Recovery Vehicle.Light';
			sID['120302'] = 'Vehicle.Tank Recovery Vehicle.Medium';
			sID['120303'] = 'Vehicle.Tank Recovery Vehicle.Heavy';
			sID['130000'] = 'Engineer Vehicles and Equipment';
			sID['130100'] = 'Engineer Vehicles and Equipment.Bridge';
			sID['130200'] = 'Engineer Vehicles and Equipment.Bridge Mounted on Utility Vehicle';
			sID['130300'] = 'Engineer Vehicles and Equipment.Fixed Bridge';
			sID['130400'] = 'Engineer Vehicles and Equipment.Floating Bridge';
			sID['130500'] = 'Engineer Vehicles and Equipment.Folding Girder Bridge';
			sID['130600'] = 'Engineer Vehicles and Equipment.Hollow Deck Bridge';
			sID['130700'] = 'Engineer Vehicles and Equipment.Drill';
			sID['130701'] = 'Engineer Vehicles and Equipment.Drill.Drill Mounted on Utility Vehicle';
			sID['130800'] = 'Engineer Vehicles and Equipment.Earthmover';
			sID['130801'] = 'Engineer Vehicles and Equipment.Earthmover.Multifunctional Earthmover/Digger';
			sID['130900'] = 'Engineer Vehicles and Equipment.Mine Clearing Equipment';
			sID['130901'] = 'Engineer Vehicles and Equipment.Mine Clearing Equipment.Trailer Mounted';
			sID['130902'] = 'Engineer Vehicles and Equipment.Mine Clearing Equipment.Mine Clearing Equipment on Tank Chassis';
			sID['131000'] = 'Engineer Vehicles and Equipment.Mine Laying Equipment';
			sID['131001'] = 'Engineer Vehicles and Equipment.Mine Laying Equipment.Mine Laying Equipment on Utility Vehicle';
			sID['131002'] = 'Engineer Vehicles and Equipment.Mine Laying Equipment.Armored Carrier with Volcano';
			sID['131003'] = 'Engineer Vehicles and Equipment.Mine Laying Equipment.Truck Mounted with Volcano';
			sID['131100'] = 'Engineer Vehicles and Equipment.Dozer';
			sID['131101'] = 'Engineer Vehicles and Equipment.Dozer.Dozer , Armored';
			sID['131200'] = 'Engineer Vehicles and Equipment.Armored Assault';
			sID['131300'] = 'Engineer Vehicles and Equipment.Armored Engineer Recon Vehicle (AERV)';
			sID['131400'] = 'Engineer Vehicles and Equipment.Backhoe';
			sID['131500'] = 'Engineer Vehicles and Equipment.Construction Vehicle';
			sID['131600'] = 'Engineer Vehicles and Equipment.Ferry Transporter';
			sID['140000'] = 'Utility Vehicles';
			sID['140100'] = 'Utility Vehicles.Utility Vehicle';
			sID['140200'] = 'Utility Vehicles.Medical';
			sID['140300'] = 'Utility Vehicles.Medical Evacuation';
			sID['140400'] = 'Utility Vehicles.Mobile Emergency Physician';
			sID['140500'] = 'Utility Vehicles.Bus';
			sID['140600'] = 'Utility Vehicles.Semi-Trailer and Truck';
			sID['140601'] = 'Utility Vehicles.Semi-Trailer and Truck.Light';
			sID['140602'] = 'Utility Vehicles.Semi-Trailer and Truck.Medium';
			sID['140603'] = 'Utility Vehicles.Semi-Trailer and Truck.Heavy';
			sID['140700'] = 'Utility Vehicles.Limited Cross Country Truck';
			sID['140800'] = 'Utility Vehicles.Cross Country Truck';
			sID['140900'] = 'Utility Vehicles.Petroleum, Oil and Lubricant';
			sID['141000'] = 'Utility Vehicles.Water';
			sID['141100'] = 'Utility Vehicles.Amphibious Utility Wheeled Vehicle';
			sID['141200'] = 'Utility Vehicles.Tow Truck';
			sID['141201'] = 'Utility Vehicles.Tow Truck.Light';
			sID['141202'] = 'Utility Vehicles.Tow Truck.Heavy';
			sID['150000'] = 'Train';
			sID['150100'] = 'Train.Locomotive';
			sID['150200'] = 'Train.Railcar';
			sID['160000'] = 'Civilian Vehicle';
			sID['160100'] = 'Civilian Vehicle.Automobile';
			sID['160101'] = 'Civilian Vehicle.Automobile.Compact';
			sID['160102'] = 'Civilian Vehicle.Automobile.Midsize';
			sID['160103'] = 'Civilian Vehicle.Automobile.Sedan';
			sID['160200'] = 'Civilian Vehicle.Open-Bed Truck';
			sID['160201'] = 'Civilian Vehicle.Open-Bed Truck.Pickup';
			sID['160202'] = 'Civilian Vehicle.Open-Bed Truck.Small';
			sID['160203'] = 'Civilian Vehicle.Open-Bed Truck.Large';
			sID['160300'] = 'Civilian Vehicle.Multiple Passenger Vehicle';
			sID['160301'] = 'Civilian Vehicle.Multiple Passenger Vehicle.Van';
			sID['160302'] = 'Civilian Vehicle.Multiple Passenger Vehicle.Small Bus';
			sID['160303'] = 'Civilian Vehicle.Multiple Passenger Vehicle.Large Bus';
			sID['160400'] = 'Civilian Vehicle.Utility Vehicle';
			sID['160401'] = 'Civilian Vehicle.Utility Vehicle.Sport Utility Vehicle (SUV)';
			sID['160402'] = 'Civilian Vehicle.Utility Vehicle.Small Box Truck';
			sID['160403'] = 'Civilian Vehicle.Utility Vehicle.Large Box Truck';
			sID['160500'] = 'Civilian Vehicle.Jeep Type Vehicle';
			sID['160501'] = 'Civilian Vehicle.Jeep Type Vehicle.Small/Light';
			sID['160502'] = 'Civilian Vehicle.Jeep Type Vehicle.Medium';
			sID['160503'] = 'Civilian Vehicle.Jeep Type Vehicle.Large/Heavy';
			sID['160600'] = 'Civilian Vehicle.Tractor Trailer Truck with Box';
			sID['160601'] = 'Civilian Vehicle.Tractor Trailer Truck with Box.Small/Light';
			sID['160602'] = 'Civilian Vehicle.Tractor Trailer Truck with Box.Medium';
			sID['160603'] = 'Civilian Vehicle.Tractor Trailer Truck with Box.Large/Heavy';
			sID['160700'] = 'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer';
			sID['160701'] = 'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer.Small/Light';
			sID['160702'] = 'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer.Medium';
			sID['160703'] = 'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer.Large/Heavy';
			sID['160800'] = 'Civilian Vehicle.Known Insurgent Vehicle';
			sID['160900'] = 'Civilian Vehicle.Drug Vehicle';
			sID['170000'] = 'Law Enforcement';
			sID['170100'] = 'Law Enforcement.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)';
			sID['170200'] = 'Law Enforcement.Border Patrol';
			sID['170300'] = 'Law Enforcement.Customs Service';
			sID['170400'] = 'Law Enforcement.Drug Enforcement Administration (DEA)';
			sID['170500'] = 'Law Enforcement.Department of Justice (DOJ)';
			sID['170600'] = 'Law Enforcement.Federal Bureau of Investigation (FBI)';
			sID['170700'] = 'Law Enforcement.Police';
			sID['170800'] = 'Law Enforcement.United States Secret Service (USSS)';
			sID['170900'] = 'Law Enforcement.Transportation Security Administration (TSA)';
			sID['171000'] = 'Law Enforcement.Coast Guard';
			sID['171100'] = 'Law Enforcement.US Marshals Service';
			sID['180000'] = 'Pack Animals';
			sID['190000'] = 'Missile Support';
			sID['190100'] = 'Missile Support.Transloader';
			sID['190200'] = 'Missile Support.Transporter';
			sID['190300'] = 'Missile Support.Crane/Loading Device';
			sID['190400'] = 'Missile Support.Propellant Transporter';
			sID['190500'] = 'Missile Support.Warhead Transporter';
			sID['200000'] = 'Other Equipment';
			sID['200100'] = 'Other Equipment.Antennae';
			sID['200200'] = 'Other Equipment.Bomb';
			sID['200300'] = 'Other Equipment.Booby Trap';
			sID['200400'] = 'Other Equipment.CBRN Equipment';
			sID['200500'] = 'Other Equipment.Computer System';
			sID['200600'] = 'Other Equipment.Command Launch Equipment (CLE)';
			sID['200700'] = 'Other Equipment.Generator Set';
			sID['200800'] = 'Other Equipment.Ground-based Midcourse Defense (GMD) Fire Control (GFC) Center';
			sID['200900'] = 'Other Equipment.In-Flight Interceptor Communications System (IFICS) Data Terminal (IDT)';
			sID['201000'] = 'Other Equipment.Laser';
			sID['201100'] = 'Other Equipment.Military Information Support Operations (MISO)';
			sID['201200'] = 'Other Equipment.Sustainment Shipments';
			sID['201300'] = 'Other Equipment.Tent';
			sID['201400'] = 'Other Equipment.Unit Deployment Shipments';
			sID['201500'] = 'Other Equipment.Emergency Medical Operation';
			sID['201501'] = 'Other Equipment.Emergency Medical Operation.Medical Evacuation Helicopter';
			sID['210000'] = 'Land Mines';
			sID['210100'] = 'Land Mines.Land Mine';
			sID['210200'] = 'Land Mines.Antipersonnel Land mine (APL)';
			sID['210300'] = 'Land Mines.Antitank Mine';
			sID['210400'] = 'Land Mines.Improvised Explosives Device (IED)';
			sID['210500'] = 'Land Mines.Less than lethal';
			sID['220000'] = 'Sensors';
			sID['220100'] = 'Sensors.Sensor';
			sID['220200'] = 'Sensors.Sensor Emplaced';
			sID['220300'] = 'Sensors.Radar';
			sID['230000'] = 'Emergency Operation';
			sID['230100'] = 'Emergency Operation.Ambulance';
			sID['230200'] = 'Emergency Operation.Fire Fighting/Fire Protection';
			sID['240000'] = 'Manual Track';		

			sIDm1['00'] = 'Unspecified';
			sIDm1['01'] = 'Biological';
			sIDm1['02'] = 'Chemical';
			sIDm1['03'] = 'Early Warning Radar';
			sIDm1['04'] = 'Intrusion';
			sIDm1['05'] = 'Nuclear';
			sIDm1['06'] = 'Radiological';
			sIDm1['07'] = 'Upgraded Early Warning Radar';
			sIDm1['08'] = 'Hijacking';
			sIDm1['09'] = 'Civilian';
		
		}

//Land Installation
		if(symbolSet == "20" ){
		
			sID['110000'] = 'Military/Civilian';
			sID['110100'] = 'Military/Civilian.Aircraft Production/Assembly';
			sID['110200'] = 'Military/Civilian.Ammunition and Explosives/Assembly';
			sID['110300'] = 'Military/Civilian.Ammunition Cache';
			sID['110400'] = 'Military/Civilian.Armament Production';
			sID['110500'] = 'Military/Civilian.Black List Location';
			sID['110600'] = 'Military/Civilian.Chemical, Biological, Radiological and Nuclear (CBRN)';
			sID['110700'] = 'Military/Civilian.Engineering Equipment Production';
			sID['110701'] = 'Military/Civilian.Engineering Equipment Production.Bridge';
			sID['110800'] = 'Military/Civilian.Equipment Manufacture';
			sID['110900'] = 'Military/Civilian.Government Leadership';
			sID['111000'] = 'Military/Civilian.Gray List Location';
			sID['111100'] = 'Military/Civilian.Mass Grave Site';
			sID['111200'] = 'Military/Civilian.Materiel';
			sID['111300'] = 'Military/Civilian.Mine';
			sID['111400'] = 'Military/Civilian.Missile and Space System Production';
			sID['111500'] = 'Military/Civilian.Nuclear (Non CBRN Defense)';
			sID['111600'] = 'Military/Civilian.Printed Media';
			sID['111700'] = 'Military/Civilian.Safe House';
			sID['111800'] = 'Military/Civilian.White List Location';
			sID['111900'] = 'Military/Civilian.Tented Camp';
			sID['111901'] = 'Military/Civilian.Tented Camp.Displaced Persons/ Refugee/Evacuees Camp';
			sID['111902'] = 'Military/Civilian.Tented Camp.Training Camp';
			sID['112000'] = 'Military/Civilian.Warehouse/Storage Facility';
			sID['112100'] = 'Military/Civilian.Law  Enforcement';
			sID['112101'] = 'Military/Civilian.Law  Enforcement.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)';
			sID['112102'] = 'Military/Civilian.Law  Enforcement.Border Patrol';
			sID['112103'] = 'Military/Civilian.Law  Enforcement.Customs Service';
			sID['112104'] = 'Military/Civilian.Law  Enforcement.Drug Enforcement Administration (DEA)';
			sID['112105'] = 'Military/Civilian.Law  Enforcement.Department of Justice (DOJ)';
			sID['112106'] = 'Military/Civilian.Law  Enforcement.Federal Bureau of Investigation (FBI)';
			sID['112107'] = 'Military/Civilian.Law  Enforcement.Police';
			sID['112108'] = 'Military/Civilian.Law  Enforcement.Prison';
			sID['112109'] = 'Military/Civilian.Law  Enforcement.United States Secret Service (USSS)';
			sID['112110'] = 'Military/Civilian.Law  Enforcement.Transportation Security Administration (TSA)';
			sID['112111'] = 'Military/Civilian.Law  Enforcement.Coast Guard';
			sID['112112'] = 'Military/Civilian.Law  Enforcement.US Marshals Service';
			sID['112200'] = 'Military/Civilian.Emergency Operation';
			sID['112201'] = 'Military/Civilian.Emergency Operation.Fire Station';
			sID['112202'] = 'Military/Civilian.Emergency Operation.Emergency Medical Operation';
			sID['120000'] = 'Infrastructure';
			sID['120100'] = 'Infrastructure.Agriculture and Food Infrastructure';
			sID['120101'] = 'Infrastructure.Agriculture and Food Infrastructure.Agriculture Laboratory';
			sID['120102'] = 'Infrastructure.Agriculture and Food Infrastructure.Animal Feedlot';
			sID['120103'] = 'Infrastructure.Agriculture and Food Infrastructure.Commercial Food Distribution Center';
			sID['120104'] = 'Infrastructure.Agriculture and Food Infrastructure.Farm/Ranch';
			sID['120105'] = 'Infrastructure.Agriculture and Food Infrastructure.Food Distribution';
			sID['120106'] = 'Infrastructure.Agriculture and Food Infrastructure.Food Production Center';
			sID['120107'] = 'Infrastructure.Agriculture and Food Infrastructure.Food Retail';
			sID['120108'] = 'Infrastructure.Agriculture and Food Infrastructure.Grain Storage';
			sID['120200'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure';
			sID['120201'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.ATM';
			sID['120202'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Bank';
			sID['120203'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Bullion Storage';
			sID['120204'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Economic Infrastructure Asset';
			sID['120205'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Federal Reserve Bank';
			sID['120206'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Financial Exchange';
			sID['120207'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Financial Services, Other';
			sID['120300'] = 'Infrastructure.Commercial Infrastructure';
			sID['120301'] = 'Infrastructure.Commercial Infrastructure.Chemical Plant';
			sID['120302'] = 'Infrastructure.Commercial Infrastructure.Firearms Manufacturer';
			sID['120303'] = 'Infrastructure.Commercial Infrastructure.Firearms Retailer';
			sID['120304'] = 'Infrastructure.Commercial Infrastructure.Hazardous Material Production';
			sID['120305'] = 'Infrastructure.Commercial Infrastructure.Hazardous Material Storage';
			sID['120306'] = 'Infrastructure.Commercial Infrastructure.Industrial Site';
			sID['120307'] = 'Infrastructure.Commercial Infrastructure.Landfill';
			sID['120308'] = 'Infrastructure.Commercial Infrastructure.Pharmaceutical Manufacturer';
			sID['120309'] = 'Infrastructure.Commercial Infrastructure.Contaminated Hazardous Waste Site';
			sID['120310'] = 'Infrastructure.Commercial Infrastructure.Toxic Release Inventory';
			sID['120400'] = 'Infrastructure.Educational Facilities Infrastructure';
			sID['120401'] = 'Infrastructure.Educational Facilities Infrastructure.College/University';
			sID['120402'] = 'Infrastructure.Educational Facilities Infrastructure.School';
			sID['120500'] = 'Infrastructure.Energy Facility Infrastructure';
			sID['120501'] = 'Infrastructure.Energy Facility Infrastructure.Electric Power';
			sID['120502'] = 'Infrastructure.Energy Facility Infrastructure.Generation Station';
			sID['120503'] = 'Infrastructure.Energy Facility Infrastructure.Natural Gas Facility';
			sID['120504'] = 'Infrastructure.Energy Facility Infrastructure.Petroleum Facility';
			sID['120505'] = 'Infrastructure.Energy Facility Infrastructure.Petroleum/Gas/Oil';
			sID['120506'] = 'Infrastructure.Energy Facility Infrastructure.Propane Facility';
			sID['120600'] = 'Infrastructure.Government Site Infrastructure';
			sID['120700'] = 'Infrastructure.Medical Infrastructure';
			sID['120701'] = 'Infrastructure.Medical Infrastructure.Medical';
			sID['120702'] = 'Infrastructure.Medical Infrastructure.Medical Treatment Facility (Hospital)';
			sID['120800'] = 'Infrastructure.Military Infrastructure';
			sID['120801'] = 'Infrastructure.Military Infrastructure.Military Armory';
			sID['120802'] = 'Infrastructure.Military Infrastructure.Military Base';
			sID['120900'] = 'Infrastructure.Postal Services Infrastructure';
			sID['120901'] = 'Infrastructure.Postal Services Infrastructure.Postal Distribution Center';
			sID['120902'] = 'Infrastructure.Postal Services Infrastructure.Post Office';
			sID['121000'] = 'Infrastructure.Public Venues Infrastructure';
			sID['121001'] = 'Infrastructure.Public Venues Infrastructure.Enclosed Facility';
			sID['121002'] = 'Infrastructure.Public Venues Infrastructure.Open Facility';
			sID['121003'] = 'Infrastructure.Public Venues Infrastructure.Recreational Area';
			sID['121004'] = 'Infrastructure.Public Venues Infrastructure.Religious Institution';
			sID['121100'] = 'Infrastructure.Special Needs Infrastructure';
			sID['121101'] = 'Infrastructure.Special Needs Infrastructure.Adult Day Care';
			sID['121102'] = 'Infrastructure.Special Needs Infrastructure.Child Day Care';
			sID['121103'] = icons['GROUND.INSTALLATION.ICON.ELDER CARE'];
			sID['121200'] = 'Infrastructure.Telecommunications Infrastructure';
			sID['121201'] = 'Infrastructure.Telecommunications Infrastructure.Broadcast Transmitter Antennae';
			sID['121202'] = 'Infrastructure.Telecommunications Infrastructure.Telecommunications';
			sID['121203'] = 'Infrastructure.Telecommunications Infrastructure.Telecommunications Tower';
			sID['121300'] = 'Infrastructure.Transportation Infrastructure';
			sID['121301'] = 'Infrastructure.Transportation Infrastructure.Airport/Air Base';
			sID['121302'] = 'Infrastructure.Transportation Infrastructure.Air Traffic Control Facility';
			sID['121303'] = 'Infrastructure.Transportation Infrastructure.Bus Station';
			sID['121304'] = 'Infrastructure.Transportation Infrastructure.Ferry Terminal';
			sID['121305'] = 'Infrastructure.Transportation Infrastructure.Helicopter Landing Site';
			sID['121306'] = 'Infrastructure.Transportation Infrastructure.Maintenance Facility';
			sID['121307'] = 'Infrastructure.Transportation Infrastructure.Railhead/Railroad Station';
			sID['121308'] = 'Infrastructure.Transportation Infrastructure.Rest Stop';
			sID['121309'] = 'Infrastructure.Transportation Infrastructure.Sea Port/Naval Base';
			sID['121310'] = 'Infrastructure.Transportation Infrastructure.Ship Yard';
			sID['121311'] = 'Infrastructure.Transportation Infrastructure.Toll Facility';
			sID['121312'] = 'Infrastructure.Transportation Infrastructure.Traffic Inspection Facility';
			sID['121313'] = 'Infrastructure.Transportation Infrastructure.Tunnel';
			sID['121400'] = 'Infrastructure.Water Supply Infrastructure';
			sID['121401'] = 'Infrastructure.Water Supply Infrastructure.Control Valve';
			sID['121402'] = 'Infrastructure.Water Supply Infrastructure.Dam';
			sID['121403'] = 'Infrastructure.Water Supply Infrastructure.Discharge Outfall';
			sID['121404'] = 'Infrastructure.Water Supply Infrastructure.Ground Water Well';
			sID['121405'] = 'Infrastructure.Water Supply Infrastructure.Pumping Station';
			sID['121406'] = 'Infrastructure.Water Supply Infrastructure.Reservoir';
			sID['121407'] = 'Infrastructure.Water Supply Infrastructure.Storage Tower';
			sID['121408'] = 'Infrastructure.Water Supply Infrastructure.Surface Water Intake';
			sID['121409'] = 'Infrastructure.Water Supply Infrastructure.Wastewater Treatment Facility';
			sID['121410'] = 'Infrastructure.Water Supply Infrastructure.Water';
			sID['121411'] = 'Infrastructure.Water Supply Infrastructure.Water Treatment';		

			sIDm1['00'] = 'Unspecified';
			sIDm1['01'] = 'Biological';
			sIDm1['02'] = 'Chemical ';
			sIDm1['03'] = 'Nuclear';
			sIDm1['04'] = 'Radiological';
			sIDm1['05'] = 'Decontamination';
			sIDm1['06'] = 'Coal';
			sIDm1['07'] = 'Geothermal';
			sIDm1['08'] = 'Hydroelectric';
			sIDm1['09'] = 'Natural Gas';
			sIDm1['10'] = 'Petroleum';
			sIDm1['11'] = 'Civilian ';
			sIDm1['12'] = 'Civilian Telephone';
			sIDm1['13'] = 'Civilian Television';

			sIDm2['00'] = 'Unspecified';
			sIDm2['01'] = 'Biological';
			sIDm2['02'] = 'Chemical ';
			sIDm2['03'] = 'Nuclear';
			sIDm2['04'] = 'Radiological';
			sIDm2['05'] = 'Atomic Energy Reactor';
			sIDm2['06'] = 'Nuclear Material Production';
			sIDm2['07'] = 'Nuclear Material Storage';
			sIDm2['08'] = 'Weapons Grade';
		}
		
//Sea
		if(symbolSet == "30" ){
			sID['110000'] = icons['SEA.ICON.MILITARY'];
			sID['120000'] = icons['SEA.ICON.COMBATANT'];
			sID['120100'] = icons['SEA.ICON.CARRIER'];
			sID['120200'] = icons['SEA.ICON.SURFACE COMBATANT, LINE'];
			sID['120201'] = icons['SEA.ICON.BATTLESHIP'];
			sID['120202'] = icons['SEA.ICON.CRUISER, GUIDED MISSILE'];
			sID['120203'] = icons['SEA.ICON.DESTROYER'];
			sID['120204'] = icons['SEA.ICON.FRIGATE'];
			sID['120205'] = icons['SEA.ICON.CORVETTE'];
			sID['120206'] = icons['SEA.ICON.LITTORAL COMBATANT SHIP'];
			sID['120300'] = icons['SEA.ICON.AMPHIBIOUS WARFARE SHIP'];
			sID['120301'] = icons['SEA.ICON.AMPHIBIOUS FORCE FLAGSHIP'];
			sID['120302'] = icons['SEA.ICON.AMPHIBIOUS ASSAULT'];
			sID['120303'] = icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, GENERAL'];
			sID['120304'] = icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE'];
			sID['120305'] = icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, HELICOPTER'];
			sID['120306'] = icons['SEA.ICON.AMPHIBIOUS TRANSPORT, DOCK'];
			sID['120307'] = icons['SEA.ICON.LANDING SHIP'];
			sID['120308'] = icons['SEA.ICON.LANDING CRAFT'];
			sID['120400'] = icons['SEA.ICON.MINE WARFARE VESSEL'];
			sID['120401'] = icons['SEA.ICON.MINELAYER'];
			sID['120402'] = icons['SEA.ICON.MINESWEEPER'];
			sID['120403'] = icons['SEA.ICON.MINESWEEPER, DRONE'];
			sID['120404'] = icons['SEA.ICON.MINEHUNTER'];
			sID['120405'] = icons['SEA.ICON.MINE COUNTERMEASURES'];
			sID['120406'] = icons['SEA.ICON.MINE COUNTER MEASURE SUPPORT SHIP'];
			sID['120500'] = icons['SEA.ICON.PATROL'];
			sID['120501'] = icons['SEA.ICON.PATROL CRAFT'];
			sID['120502'] = icons['SEA.ICON.PATROL GUN'];
			sID['120600'] = icons['SEA.ICON.SEA SURFACE DECOY'];
			sID['120700'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'];
			sID['120800'] = icons['SEA.ICON.MILITARY SPEEDBOAT'];
			sID['120801'] = icons['SEA.ICON.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT'];
			sID['120900'] = icons['SEA.ICON.MILITARY JETSKI'];
			sID['121000'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'];
			sID['121001'] = icons['SEA.ICON.NAVY TASK ELEMENT'];
			sID['121002'] = icons['SEA.ICON.NAVY TASK FORCE'];
			sID['121003'] = icons['SEA.ICON.NAVY TASK GROUP'];
			sID['121004'] = icons['SEA.ICON.NAVY TASK UNIT'];
			sID['121005'] = icons['SEA.ICON.CONVOY'];
			sID['121100'] = icons['GROUND.ICON.RADAR'];
			sID['130000'] = icons['SEA.ICON.NONCOMBATANT'];
			sID['130100'] = icons['SEA.ICON.AUXILIARY SHIP'];
			sID['130101'] = icons['SEA.ICON.AMMUNITION SHIP'];
			sID['130102'] = icons['SEA.ICON.STORES SHIP'];
			sID['130103'] = icons['SEA.ICON.AUXILIARY FLAG OR COMMAND SHIP'];
			sID['130104'] = icons['SEA.ICON.INTELLIGENCE COLLECTOR'];
			sID['130105'] = icons['SEA.ICON.OCEAN RESEARCH SHIP'];
			sID['130106'] = icons['SEA.ICON.SURVEY SHIP'];
			sID['130107'] = icons['SEA.ICON.HOSPITAL SHIP'];
			sID['130108'] = icons['SEA.ICON.CARGO SHIP'];
			sID['130109'] = icons['SEA.ICON.COMBAT SUPPORT SHIP, FAST'];
			sID['130110'] = icons['SEA.ICON.OILER, REPLENISHMENT'];
			sID['130111'] = icons['SEA.ICON.REPAIR SHIP'];
			sID['130112'] = icons['SEA.ICON.SUBMARINE TENDER'];
			sID['130113'] = icons['SEA.ICON.TUG, OCEAN GOING'];
			sID['130200'] = icons['SEA.ICON.SERVICE CRAFT, YARD, GENERAL'];
			sID['130201'] = icons['SEA.ICON.BARGE, NOT SELF-PROPELLED'];
			sID['130202'] = icons['SEA.ICON.BARGE, SELF-PROPELLED'];
			sID['130203'] = icons['SEA.ICON.TUG, HARBOUR'];
			sID['130204'] = icons['SEA.ICON.LAUNCH'];
			sID['140000'] = icons['SEA.ICON.CIVILIAN'];
			sID['140100'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'];
			sID['140101'] = icons['SEA.ICON.CARGO, GENERAL'];
			sID['140102'] = icons['SEA.ICON.CONTAINER SHIP'];
			sID['140103'] = icons['SEA.ICON.DREDGE'];
			sID['140104'] = icons['SEA.ICON.ROLL ON-ROLL OFF'];
			sID['140105'] = icons['SEA.ICON.FERRY'];
			sID['140106'] = icons['SEA.ICON.HEAVY LIFT'];
			sID['140107'] = icons['SEA.ICON.HOVERCRAFT 2525D'];
			sID['140108'] = icons['SEA.ICON.MERCHANT SHIP, LASH CARRIER (WITH BARGES)'];
			sID['140109'] = icons['SEA.ICON.OILER/TANKER'];
			sID['140110'] = icons['SEA.ICON.PASSENGER SHIP'];
			sID['140111'] = icons['SEA.ICON.TUG, OCEAN GOING CIVILIAN'];
			sID['140112'] = icons['SEA.ICON.TOW'];
			sID['140113'] = icons['SEA.ICON.TRANSPORT SHIP, HAZARDOUS MATERIAL'];
			sID['140114'] = icons['SEA.ICON.JUNK/DHOW'];
			sID['140115'] = icons['SEA.ICON.BARGE, NOT SELF-PROPELLED'];
			sID['140116'] = icons['SEA.ICON.HOSPITAL SHIP'];
			sID['140200'] = icons['SEA.ICON.FISHING VESSEL'];
			sID['140201'] = icons['SEA.ICON.DRIFTER'];
			sID['140202'] = icons['SEA.ICON.TRAWLER'];
			sID['140203'] = icons['SEA.ICON.FISHING VESSEL DREDGE'];
			sID['140300'] = icons['SEA.ICON.LAW ENFORCEMENT VESSEL'];
			sID['140400'] = icons['SEA.ICON.LEISURE CRAFT, SAILING BOAT'];
			sID['140500'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'];
			sID['140501'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT'];
			sID['140502'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, SPEEDBOAT'];
			sID['140600'] = icons['SEA.ICON.LEISURE CRAFT, JETSKI'];
			sID['140700'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE (USV)'];
sID['150000'] = 'Own Ship';
sID['160000'] = 'Fused Track';
sID['170000'] = 'Manual Track';


			sIDm1['01'] = icons['SEA.M1.OWN SHIP'];
			sIDm1['02'] = icons['SEA.M1.ANTIAIR WARFARE'];
			sIDm1['03'] = icons['SEA.M1.ANTISUBMARINE WARFARE'];
			sIDm1['04'] = icons['SEA.M1.ESCORT'];
			sIDm1['05'] = icons['SEA.M1.ELECTRONIC WARFARE'];
			sIDm1['06'] = icons['SEA.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE'];
			sIDm1['07'] = icons['SEA.M1.MINE COUNTER MEASURES'];
			sIDm1['08'] = icons['SEA.M1.MISSILE DEFENSE'];
			sIDm1['09'] = icons['SEA.M1.MEDICAL'];
			sIDm1['10'] = icons['SEA.M1.MINE WARFARE'];
			sIDm1['11'] = icons['SEA.M1.REMOTE MULTI-MISSION VEHIHLE'];
			sIDm1['12'] = icons['SEA.M1.SPECIAL OPERATIONS FORCE'];
			sIDm1['13'] = icons['SEA.M1.SURFACE WARFARE'];
			sIDm1['14'] = icons['SEA.M1.BALLISTIC MISSILE'];
			sIDm1['15'] = icons['SEA.M1.GUIDED MISSILE'];
			sIDm1['16'] = icons['SEA.M1.OTHER GUIDED MISSILE'];
			sIDm1['17'] = icons['SEA.M1.TORPEDO'];
			sIDm1['18'] = icons['SEA.M1.DRONE-EQUIPPED'];
			sIDm1['19'] = icons['SEA.M1.HELICOPTER-EQUIPPED'];
			sIDm1['20'] = icons['SEA.M1.BALLISTIC MISSILE DEFENSE, SHOOTER'];
			sIDm1['21'] = icons['SEA.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)'];
			sIDm1['22'] = icons['SEA.M1.SEA-BASE X-BAND'];
			sIDm1['23'] = icons['SEA.M1.HIJACKING/HIJACKED'];


			sIDm2['01'] = icons['SEA.M2.NUCLEAR POWERED'];
			sIDm2['02'] = icons['SEA.M2.HEAVY'];
			sIDm2['03'] = icons['SEA.M2.LIGHT'];
			sIDm2['04'] = icons['SEA.M2.MEDIUM'];
			sIDm2['05'] = icons['SEA.M2.DOCK'];
			sIDm2['06'] = icons['SEA.M2.LOGISTICS'];
			sIDm2['07'] = icons['SEA.M2.TANK'];
			sIDm2['08'] = icons['SEA.M2.VEHICLE'];
			sIDm2['09'] = icons['SEA.M2.FAST'];
			sIDm2['10'] = icons['SEA.M2.AIR-CUSHIONED (USA ONLY)'];
			sIDm2['11'] = icons['SEA.M2.AIR-CUSHIONED'];
			sIDm2['12'] = icons['SEA.M2.HYDROFOIL'];
			sIDm2['13'] = icons['SEA.M2.AUTONOMOUS CONTROL'];
			sIDm2['14'] = icons['SEA.M2.REMOTELY PILOTED'];
			sIDm2['15'] = icons['SEA.M2.EXPENDABLE'];

		}

//Subsurface
		if(symbolSet == "35" ){
			sID['110000'] = icons['SUB.ICON.MILITARY'];
			sID['110100'] = icons['SUB.ICON.SUBMARINE'];
			sID['110101'] = icons['SUB.ICON.SUBMARINE, SURFACED'];
			sID['110102'] = icons['SUB.ICON.SUBMARINE, SNORKELING'];
			sID['110103'] = icons['SUB.ICON.SUBMARINE, BOTTOMED'];
			sID['110200'] = icons['SUB.ICON.OTHER SUBMERSIBLE'];
			sID['110300'] = icons['SUB.ICON.NON-SUBMARINE'];
			sID['110400'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'];
			sID['110500'] = icons['SUB.ICON.DIVER, MILITARY'];
			sID['120000'] = icons['SUB.ICON.CIVILIAN'];
			sID['120100'] = icons['SUB.ICON.SUBMERSIBLE, CIVILIAN'];
			sID['120200'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN'];
			sID['120300'] = icons['SUB.ICON.DIVER, CIVILIAN'];
			sID['130000'] = icons['SUB.ICON.UNDERWATER WEAPON'];
			sID['130100'] = icons['SUB.ICON.TORPEDO'];
			sID['130200'] = icons['SUB.ICON.IMPROVISED EXPLOSIVE DEVICE (IED)'];
			sID['130300'] = icons['SUB.ICON.UNDERWATER DECOY DSymbol'];
sID['140000'] = 'Echo Tracker Classifier (ETC) / Possible Contact (POSCON)';
sID['150000'] = 'Fused Track';
sID['160000'] = 'Manual Track';

			sIDm1['01'] = icons['SUB.M1.ANTISUBMARINE WARFARE'];
			sIDm1['02'] = icons['SUB.M1.AUXILIARY'];
			sIDm1['03'] = icons['SUB.M1.COMMAND AND CONTROL'];
			sIDm1['04'] = icons['SUB.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE'];
			sIDm1['05'] = icons['SUB.M1.MINE COUNTERMEASURES'];
			sIDm1['06'] = icons['SUB.M1.MINE WARFARE'];
			sIDm1['07'] = icons['SUB.M1.SURFACE WARFARE'];
			sIDm1['08'] = icons['SUB.M1.ATTACK'];
			sIDm1['09'] = icons['SUB.M1.BALLISTIC MISSILE'];
			sIDm1['10'] = icons['SUB.M1.GUIDED MISSILE'];
			sIDm1['11'] = icons['SUB.M1.OTHER GUIDED MISSILES (POINT DEFENCE)'];
			sIDm1['12'] = icons['SUB.M1.SPECIAL OPERATIONS FORCE'];
			sIDm1['13'] = icons['SUB.M1.POSSIBLE SUBMARINE - LOW 1'];
			sIDm1['14'] = icons['SUB.M1.POSSIBLE SUBMARINE - LOW 2'];
			sIDm1['15'] = icons['SUB.M1.POSSIBLE SUBMARINE - HIGH 3'];
			sIDm1['16'] = icons['SUB.M1.POSSIBLE SUBMARINE - HIGH 4'];
			sIDm1['17'] = icons['SUB.M1.PROBABLE SUBMARINE'];
			sIDm1['18'] = icons['SUB.M1.CERTAIN SUBMARINE'];
			sIDm1['19'] = icons['SUB.M1.ANTI-TORPEDO TORPEDO'];
			sIDm1['20'] = icons['SUB.M1.HIJACKING/HIJACKED'];

			sIDm2['01'] = icons['SUB.M2.AIR INDEPENDENT PROPULSION'];
			sIDm2['02'] = icons['SUB.M2.DIESEL PROPULSION'];
			sIDm2['03'] = icons['SUB.M2.DIESEL - TYPE 1'] ;
			sIDm2['04'] = icons['SUB.M2.DIESEL - TYPE 2'];
			sIDm2['05'] = icons['SUB.M2.DIESEL - TYPE 3'];
			sIDm2['06'] = icons['SUB.M2.NUCLEAR POWERED'];
			sIDm2['07'] = icons['SUB.M2.NUCLEAR - TYPE 1'];
			sIDm2['08'] = icons['SUB.M2.NUCLEAR - TYPE 2'];
			sIDm2['09'] = icons['SUB.M2.NUCLEAR - TYPE 3'];
			sIDm2['10'] = icons['SUB.M2.NUCLEAR - TYPE 4'];
			sIDm2['11'] = icons['SUB.M2.NUCLEAR - TYPE 5'];
			sIDm2['12'] = icons['SUB.M2.NUCLEAR - TYPE 6'];
			sIDm2['13'] = icons['SUB.M2.NUCLEAR - TYPE 7'];
			sIDm2['14'] = icons['SUB.M2.AUTONOMOUS CONTROL'];
			sIDm2['15'] = icons['SUB.M2.REMOTELY PILOTED'];
			sIDm2['16'] = icons['SUB.M2.EXPENDABLE'] ;

		}				

//Mine Warfare
		if(symbolSet == "36" ){
		
			sID['110000'] = 'Sea Mine, General';
			sID['110100'] = 'Sea Mine, General.Sea Mine, Bottom';
			sID['110200'] = 'Sea Mine, General.Sea Mine, Moored';
			sID['110300'] = 'Sea Mine, General.Sea Mine, Floating';
			sID['110400'] = 'Sea Mine, General.Sea Mine, Rising';
			sID['110500'] = 'Sea Mine, General.Sea Mine, Other Position';
			sID['110600'] = 'Sea Mine, General.Kingfisher';
			sID['110700'] = 'Sea Mine, General.Small Object, Mine-Like';
			sID['110800'] = 'Sea Mine, General.Exercise Mine, General';
			sID['110801'] = 'Sea Mine, General.Exercise Mine, General.Exercise Mine, Bottom';
			sID['110802'] = 'Sea Mine, General.Exercise Mine, General.Exercise Mine, Moored';
			sID['110803'] = 'Sea Mine, General.Exercise Mine, General.Exercise Mine, Floating';
			sID['110804'] = 'Sea Mine, General.Exercise Mine, General.Exercise Mine, Rising';
			sID['110900'] = 'Sea Mine, General.Neutralized Mine, General';
			sID['110901'] = 'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Bottom';
			sID['110902'] = 'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Moored';
			sID['110903'] = 'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Floating';
			sID['110904'] = 'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Rising';
			sID['110905'] = 'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Other Position';
			sID['120000'] = 'Unexploded Ordnance';
			sID['130000'] = 'Sea Mine Decoy';
			sID['130100'] = 'Sea Mine Decoy.Sea Mine Decoy, Bottom';
			sID['130200'] = 'Sea Mine Decoy.Sea Mine Decoy, Moored';
			sID['140000'] = 'Mine-Like Contact (MILCO)';
			sID['140100'] = 'Mine-Like Contact (MILCO).MILCO - General';
			sID['140101'] = 'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence';
			sID['140102'] = 'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence';
			sID['140103'] = 'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence';
			sID['140104'] = 'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence';
			sID['140105'] = 'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence';
			sID['140200'] = 'Mine-Like Contact (MILCO).MILCO - Bottom';
			sID['140201'] = 'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence';
			sID['140202'] = 'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence';
			sID['140203'] = 'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence';
			sID['140204'] = 'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence';
			sID['140205'] = 'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence';
			sID['140300'] = 'Mine-Like Contact (MILCO).MILCO - Moored';
			sID['140301'] = 'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence';
			sID['140302'] = 'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence';
			sID['140303'] = 'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence';
			sID['140304'] = 'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence';
			sID['140305'] = 'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence';
			sID['140400'] = 'Mine-Like Contact (MILCO).MILCO - Floating';
			sID['140401'] = 'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence';
			sID['140402'] = 'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence';
			sID['140403'] = 'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence';
			sID['140404'] = 'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence';
			sID['140405'] = 'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence';
			sID['150000'] = 'Mine-Like Echo (MILEC), General';
			sID['150100'] = 'Mine-Like Echo (MILEC), General.Mine-Like Echo, Bottom';
			sID['150200'] = 'Mine-Like Echo (MILEC), General.Mine-Like Echo, Moored';
			sID['150300'] = 'Mine-Like Echo (MILEC), General.Mine-Like Echo, Floating';
			sID['160000'] = 'Negative Reacquisition, General';
			sID['160100'] = 'Negative Reacquisition, General.Negative Reacquisition, Bottom';
			sID['160200'] = 'Negative Reacquisition, General.Negative Reacquisition, Moored';
			sID['160300'] = 'Negative Reacquisition, General.Negative Reacquisition, Floating';
			sID['170000'] = 'Obstructor';
			sID['170100'] = 'Obstructor.Neutralized Obstructor';
			sID['180000'] = 'General Mine Anchor';
			sID['190000'] = 'Non-Mine Mine-Like Object (NMLO), General';
			sID['190100'] = 'Non-Mine Mine-Like Object (NMLO), General.Non-Mine Mine-Like Object, Bottom';
			sID['190200'] = 'Non-Mine Mine-Like Object (NMLO), General.Non-Mine Mine-Like Object, Moored';
			sID['190300'] = 'Non-Mine Mine-Like Object (NMLO), General.Non-Mine Mine-Like Object, Floating';
			sID['200000'] = 'Environmental Report Location';
			sID['210000'] = 'Dive Report Location';		
		
		}		

//Activities
		if(symbolSet == "40" ){
		
			sID['110000'] = 'Incident';
			sID['110100'] = 'Incident.Criminal Activity Incident';
			sID['110101'] = 'Incident.Criminal Activity Incident.Arrest';
			sID['110102'] = 'Incident.Criminal Activity Incident.Arson';
			sID['110103'] = 'Incident.Criminal Activity Incident.Attempted Criminal Activity';
			sID['110104'] = 'Incident.Criminal Activity Incident.Drive-by Shooting';
			sID['110105'] = 'Incident.Criminal Activity Incident.Drug Related';
			sID['110106'] = 'Incident.Criminal Activity Incident.Extortion';
			sID['110107'] = 'Incident.Criminal Activity Incident.Graffiti';
			sID['110108'] = 'Incident.Criminal Activity Incident.Killing';
			sID['110109'] = 'Incident.Criminal Activity Incident.Poisoning';
			sID['110110'] = 'Incident.Criminal Activity Incident.Civil Rioting';
			sID['110111'] = 'Incident.Criminal Activity Incident.Booby Trap';
			sID['110112'] = 'Incident.Criminal Activity Incident.Home Eviction';
			sID['110113'] = 'Incident.Criminal Activity Incident.Black Marketing';
			sID['110114'] = 'Incident.Criminal Activity Incident.Vandalism/Loot/Ransack/Plunder';
			sID['110115'] = 'Incident.Criminal Activity Incident.Jail Break';
			sID['110116'] = 'Incident.Criminal Activity Incident.Robbery';
			sID['110117'] = 'Incident.Criminal Activity Incident.Theft';
			sID['110118'] = 'Incident.Criminal Activity Incident.Burglary';
			sID['110119'] = 'Incident.Criminal Activity Incident.Smuggling';
			sID['110120'] = 'Incident.Criminal Activity Incident.Rock Throwing';
			sID['110121'] = 'Incident.Criminal Activity Incident.Dead Body';
			sID['110122'] = 'Incident.Criminal Activity Incident.Sabotage';
			sID['110123'] = 'Incident.Criminal Activity Incident.Suspicious Activity';
			sID['110200'] = 'Incident.Bomb/Bombing';
			sID['110201'] = 'Incident.Bomb/Bombing.Bomb Threat';
			sID['110300'] = 'Incident.IED Event';
			sID['110301'] = 'Incident.IED Event.IED Explosion';
			sID['110302'] = 'Incident.IED Event.Premature IED Explosion';
			sID['110303'] = 'Incident.IED Event.IED Cache';
			sID['110304'] = 'Incident.IED Event.IED Suicide Bomber';
			sID['110400'] = 'Incident.Shooting';
			sID['110401'] = 'Incident.Shooting.Sniping';
			sID['110500'] = 'Incident.Illegal Drug Operation';
			sID['110501'] = 'Incident.Illegal Drug Operation.Trafficking';
			sID['110502'] = 'Incident.Illegal Drug Operation.Illegal Drug Lab';
			sID['110600'] = 'Incident.Explosion';
			sID['110601'] = 'Incident.Explosion.Grenade Explosion';
			sID['110602'] = 'Incident.Explosion.Incendiary Explosion';
			sID['110603'] = 'Incident.Explosion.Mine Explosion';
			sID['110604'] = 'Incident.Explosion.Mortar Fire Explosion';
			sID['110605'] = 'Incident.Explosion.Rocket Explosion';
			sID['110606'] = 'Incident.Explosion.Bomb Explosion';
			sID['120000'] = icons['ACTIVITIES.ICON.CRIMINAL.CIVIL DISTURBANCE'];
			sID['120100'] = 'Civil Disturbance.Demonstration';
			sID['130000'] = 'Operation';
			sID['130100'] = 'Operation.Patrolling';
			sID['130200'] = 'Operation.Military Information Support Operation (MISO)';
			sID['130201'] = 'Operation.Military Information Support Operation (MISO).TV and Radio Propaganda';
			sID['130300'] = 'Operation.Foraging/Searching';
			sID['130400'] = 'Operation.Recruitment';
			sID['130401'] = 'Operation.Recruitment.Willing';
			sID['130402'] = 'Operation.Recruitment.Coerced/Impressed';
			sID['130500'] = 'Operation.Mine Laying';
			sID['130600'] = 'Operation.Spy';
			sID['130700'] = 'Operation.Warrant Served';
			sID['130800'] = 'Operation.Exfiltration';
			sID['130900'] = 'Operation.Infiltration';
			sID['131000'] = 'Operation.Meeting';
			sID['131001'] = 'Operation.Meeting.Polling Place/Election';
			sID['131100'] = 'Operation.Raid on House';
			sID['131200'] = 'Operation.Emergency Operation';
			sID['131201'] = 'Operation.Emergency Operation.Emergency Collection Evacuation Point';
			sID['131202'] = 'Operation.Emergency Operation.Emergency Food Distribution';
			sID['131203'] = 'Operation.Emergency Operation.Emergency Incident Command Center';
			sID['131204'] = 'Operation.Emergency Operation.Emergency Operations Center';
			sID['131205'] = 'Operation.Emergency Operation.Emergency Public Information Center';
			sID['131206'] = 'Operation.Emergency Operation.Emergency Shelter';
			sID['131207'] = 'Operation.Emergency Operation.Emergency Staging Area';
			sID['131208'] = 'Operation.Emergency Operation.Emergency Water Distribution Center';
			sID['131300'] = 'Operation.Emergency Medical Operation';
			sID['131301'] = 'Operation.Emergency Medical Operation.EMT Station Location';
			sID['131302'] = 'Operation.Emergency Medical Operation.Health Department Facility';
			sID['131303'] = 'Operation.Emergency Medical Operation.Medical Facilities Outpatient';
			sID['131304'] = 'Operation.Emergency Medical Operation.Morgue';
			sID['131305'] = 'Operation.Emergency Medical Operation.Pharmacy';
			sID['131306'] = 'Operation.Emergency Medical Operation.Triage';
			sID['131400'] = 'Operation.Fire Fighting Operation';
			sID['131401'] = 'Operation.Fire Fighting Operation.Fire Hydrant';
			sID['131402'] = 'Operation.Fire Fighting Operation.Fire Station';
			sID['131403'] = 'Operation.Fire Fighting Operation.Other Water Supply Location';
			sID['131500'] = 'Operation.Law Enforcement Operation';
			sID['131501'] = 'Operation.Law Enforcement Operation.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)';
			sID['131502'] = 'Operation.Law Enforcement Operation.Border Patrol';
			sID['131503'] = 'Operation.Law Enforcement Operation.Customs Service';
			sID['131504'] = 'Operation.Law Enforcement Operation.Drug Enforcement Administration (DEA)';
			sID['131505'] = 'Operation.Law Enforcement Operation.Department of Justice (DOJ)';
			sID['131506'] = 'Operation.Law Enforcement Operation.Federal Bureau of Investigation (FBI)';
			sID['131507'] = 'Operation.Law Enforcement Operation.Police';
			sID['131508'] = 'Operation.Law Enforcement Operation.Prison';
			sID['131509'] = 'Operation.Law Enforcement Operation.United States Secret Service(Treas) (USSS)';
			sID['131510'] = 'Operation.Law Enforcement Operation.Transportation Security Administration (TSA)';
			sID['131511'] = 'Operation.Law Enforcement Operation.Coast Guard';
			sID['131512'] = 'Operation.Law Enforcement Operation.US Marshals Service';
			sID['131513'] = 'Operation.Law Enforcement Operation.Internal Security Force';
			sID['140000'] = icons['ACTIVITIES.ICON.FIRE EVENT'];
			sID['140100'] = 'Fire Event.Fire Origin';
			sID['140200'] = 'Fire Event.Smoke';
			sID['140300'] = 'Fire Event.Hot Spot';
			sID['140400'] = icons['ACTIVITIES.ICON.NON-RESIDENTIAL FIRE'];
			sID['140500'] = icons['ACTIVITIES.ICON.RESIDENTIAL FIRE'];
			sID['140600'] = icons['ACTIVITIES.ICON.SCHOOL FIRE'];
			sID['140700'] = 'Fire Event.Special Needs Fire';
			sID['140800'] = 'Fire Event.Wild Fire';
			sID['150000'] = 'Hazardous Materials';
			sID['150100'] = 'Hazardous Materials.Hazardous Materials Incident';
			sID['150101'] = 'Hazardous Materials.Hazardous Materials Incident.Chemical Agent';
			sID['150102'] = 'Hazardous Materials.Hazardous Materials Incident.Corrosive Material';
			sID['150103'] = 'Hazardous Materials.Hazardous Materials Incident.Hazardous when Wet';
			sID['150104'] = 'Hazardous Materials.Hazardous Materials Incident.Explosive Material';
			sID['150105'] = 'Hazardous Materials.Hazardous Materials Incident.Flammable Gas';
			sID['150106'] = 'Hazardous Materials.Hazardous Materials Incident.Flammable Liquid';
			sID['150107'] = 'Hazardous Materials.Hazardous Materials Incident.Flammable Solid';
			sID['150108'] = 'Hazardous Materials.Hazardous Materials Incident.Non-Flammable Gas';
			sID['150109'] = 'Hazardous Materials.Hazardous Materials Incident.Organic Peroxide';
			sID['150110'] = 'Hazardous Materials.Hazardous Materials Incident.Oxidizer';
			sID['150111'] = 'Hazardous Materials.Hazardous Materials Incident.Radioactive Material';
			sID['150112'] = 'Hazardous Materials.Hazardous Materials Incident.Spontaneously Combustible Material';
			sID['150113'] = 'Hazardous Materials.Hazardous Materials Incident.Toxic Gas';
			sID['150114'] = 'Hazardous Materials.Hazardous Materials Incident.Toxic Infectious Material';
			sID['150115'] = 'Hazardous Materials.Hazardous Materials Incident.Unexploded Ordnance';
			sID['160000'] = 'Transportation Incident';
			sID['160100'] = 'Transportation Incident.Air-';
			sID['160200'] = 'Transportation Incident.Marine-';
			sID['160300'] = 'Transportation Incident.Rail-';
			sID['160400'] = 'Transportation Incident.Vehicle-';
			sID['160500'] = 'Transportation Incident.Wheeled Vehicle Explosion';
			sID['170000'] = 'Natural Event';
			sID['170100'] = 'Natural Event.Geologic';
			sID['170101'] = 'Natural Event.Geologic.Aftershock';
			sID['170102'] = 'Natural Event.Geologic.Avalanche';
			sID['170103'] = 'Natural Event.Geologic.Earthquake Epicenter';
			sID['170104'] = 'Natural Event.Geologic.Landslide';
			sID['170105'] = 'Natural Event.Geologic.Subsidence';
			sID['170106'] = 'Natural Event.Geologic.Volcanic Eruption';
			sID['170107'] = 'Natural Event.Geologic.Volcanic Threat';
			sID['170108'] = 'Natural Event.Geologic.Cave Entrance';
			sID['170200'] = 'Natural Event.Hydro-Meteorological';
			sID['170201'] = 'Natural Event.Hydro-Meteorological.Drought';
			sID['170202'] = 'Natural Event.Hydro-Meteorological.Flood';
			sID['170203'] = 'Natural Event.Hydro-Meteorological.Tsunami';
			sID['170300'] = 'Natural Event.Infestation';
			sID['170301'] = 'Natural Event.Infestation.Bird';
			sID['170302'] = 'Natural Event.Infestation.Insect';
			sID['170303'] = 'Natural Event.Infestation.Microbial';
			sID['170304'] = 'Natural Event.Infestation.Reptile';
			sID['170305'] = 'Natural Event.Infestation.Rodent';
			sID['180000'] = 'Individual';
			sID['180100'] = 'Individual.Religious Leader';
			sID['180200'] = 'Individual.Speaker';		
	
			sIDm1['00'] = 'Unspecified';
			sIDm1['01'] = 'Assassination';
			sIDm1['02'] = 'Execution (Wrongful Killing)';
			sIDm1['03'] = 'Hijacking/Hijacked';
			sIDm1['04'] = 'House-to-House';
			sIDm1['05'] = 'Kidnapping';
			sIDm1['06'] = 'Murder';
			sIDm1['07'] = 'Piracy';
			sIDm1['08'] = 'Rape';
			sIDm1['09'] = 'Written Military Information Support Operations';
			sIDm1['10'] = 'Pirate';
			sIDm1['11'] = 'False';
			sIDm1['12'] = 'Find';
			sIDm1['13'] = 'Found and Cleared';
			sIDm1['14'] = 'Hoax (Decoy)';
			sIDm1['15'] = 'Attempted';
			sIDm1['16'] = 'Accident';
			sIDm1['17'] = 'Incident';
			sIDm1['18'] = 'Theft';		
		}	
		
//Signals Intelligence
		if(	symbolSet == "50" || symbolSet == "51" || symbolSet == "52" || symbolSet == "53" || symbolSet == "54" ){

			sID['110000'] = 'Signal Intercept';
			sID['110100'] = 'Signal Intercept.Communications';
			sID['110200'] = 'Signal Intercept.Jammer';
			sID['110300'] = 'Signal Intercept.Radar';
		
			sIDm1['00'] = 'Unspecified';
			sIDm1['01'] = 'Anti-Aircraft Fire Control';
			sIDm1['02'] = 'Airborne Search and Bombing';
			sIDm1['03'] = 'Airborne Intercept';
			sIDm1['04'] = 'Altimeter';
			sIDm1['05'] = 'Airborne Reconnaissance and Mapping';
			sIDm1['06'] = 'Air Traffic Control';
			sIDm1['07'] = 'Beacon Transponder (not IFF)';
			sIDm1['08'] = 'Battlefield Surveillance';
			sIDm1['09'] = 'Controlled Approach';
			sIDm1['10'] = 'Controlled Intercept';
			sIDm1['11'] = 'Cellular/Mobile';
			sIDm1['12'] = 'Coastal Surveillance';
			sIDm1['13'] = 'Decoy/Mimic';
			sIDm1['14'] = 'Data Transmission';
			sIDm1['15'] = 'Earth Surveillance';
			sIDm1['16'] = 'Early Warning';
			sIDm1['17'] = 'Fire Control';
			sIDm1['18'] = 'Ground Mapping';
			sIDm1['19'] = 'Height Finding';
			sIDm1['20'] = 'Harbor Surveillance';
			sIDm1['21'] = 'Identification, Friend or Foe (Interrogator)';
			sIDm1['22'] = 'Instrument Landing System';
			sIDm1['23'] = 'Ionospheric Sounding';
			sIDm1['24'] = 'Identification, Friend or Foe (Transponder)';
			sIDm1['25'] = 'Barrage Jammer';
			sIDm1['26'] = 'Click Jammer';
			sIDm1['27'] = 'Deceptive Jammer';
			sIDm1['28'] = 'Frequency Swept Jammer';
			sIDm1['29'] = 'Jammer (general)';
			sIDm1['30'] = 'Noise Jammer';
			sIDm1['31'] = 'Pulsed Jammer';
			sIDm1['32'] = 'Repeater Jammer';
			sIDm1['33'] = 'Spot Noise Jammer';
			sIDm1['34'] = 'Transponder Jammer';
			sIDm1['35'] = 'Missile Acquisition';
			sIDm1['36'] = 'Missile Control';
			sIDm1['37'] = 'Missile Downlink';
			sIDm1['38'] = 'Meteorological';
			sIDm1['39'] = 'Multi-Function';
			sIDm1['40'] = 'Missile Guidance';
			sIDm1['41'] = 'Missile Homing';
			sIDm1['42'] = 'Missile Tracking';
			sIDm1['43'] = 'Navigational/General';
			sIDm1['44'] = 'Navigational/Distance Measuring Equipment';
			sIDm1['45'] = 'Navigation/Terrain Following';
			sIDm1['46'] = 'Navigational/Weather Avoidance';
			sIDm1['47'] = 'Omni-Line of Sight (LOS)';
			sIDm1['48'] = 'Proximity Use';
			sIDm1['49'] = 'Point-to-Point Line of Sight (LOS)';
			sIDm1['50'] = 'Instrumentation';
			sIDm1['51'] = 'Range Only';
			sIDm1['52'] = 'Sonobuoy';
			sIDm1['53'] = 'Satellite Downlink';
			sIDm1['54'] = 'Space';
			sIDm1['55'] = 'Surface Search';
			sIDm1['56'] = 'Shell Tracking';
			sIDm1['57'] = 'Satellite Uplink';
			sIDm1['58'] = 'Target Acquisition';
			sIDm1['59'] = 'Target Illumination';
			sIDm1['60'] = 'Tropospheric Scatter';
			sIDm1['61'] = 'Target Tracking';
			sIDm1['62'] = 'Unknown';
			sIDm1['63'] = 'Video Remoting';
			sIDm1['64'] = 'Experimental';		
		
		}
		
//Cyberspace
		if(symbolSet == "60" ){
			sID['110000'] = 'Botnet';
			sID['110100'] = 'Botnet.Command and Control (C2)';
			sID['110200'] = 'Botnet.Herder';
			sID['110300'] = 'Botnet.Callback Domain';
			sID['110400'] = 'Botnet.Zombie';
			sID['120000'] = 'Infection';
			sID['120100'] = 'Infection.Advanced Persistent Threat (APT)';
			sID['120101'] = 'Infection.Advanced Persistent Threat (APT).APT with C2';
			sID['120102'] = 'Infection.Advanced Persistent Threat (APT).APT with Self Propagation';
			sID['120103'] = 'Infection.Advanced Persistent Threat (APT).APT with C2 and Self Propagation';
			sID['120104'] = 'Infection.Advanced Persistent Threat (APT).APT Other';
			sID['120200'] = 'Infection.Non-Advanced Persistent Threat (NAPT)';
			sID['120201'] = 'Infection.Non-Advanced Persistent Threat (NAPT).NAPT with C2';
			sID['120202'] = 'Infection.Non-Advanced Persistent Threat (NAPT).NAPT with Self Propagation';
			sID['120203'] = 'Infection.Non-Advanced Persistent Threat (NAPT).NAPT with C2 and Self Propagation';
			sID['120204'] = 'Infection.Non-Advanced Persistent Threat (NAPT).NAPT Other';
			sID['130000'] = 'Health and Status';
			sID['130100'] = 'Health and Status.Normal';
			sID['130200'] = 'Health and Status.Network Outage';
			sID['130300'] = 'Health and Status.Unknown';
			sID['130400'] = 'Health and Status.Impaired';
			sID['140000'] = 'Device Type';
			sID['140100'] = 'Device Type.Core Router';
			sID['140200'] = 'Device Type.Router';
			sID['140300'] = 'Device Type.Cross Domain Solution';
			sID['140400'] = 'Device Type.Mail Server';
			sID['140500'] = 'Device Type.Web Server';
			sID['140600'] = 'Device Type.Domain Server';
			sID['140700'] = 'Device Type.File Server';
			sID['140800'] = 'Device Type.Peer-to-Peer Node';
			sID['140900'] = 'Device Type.Firewall';
			sID['141000'] = 'Device Type.Switch';
			sID['141100'] = 'Device Type.Host';
			sID['141200'] = 'Device Type.Virtual Private Network (VPN)';
			sID['150000'] = 'Device Domain';
			sID['150100'] = 'Device Domain.Department of Defense (DoD)';
			sID['150200'] = 'Device Domain.Government';
			sID['150300'] = 'Device Domain.Contractor';
			sID['150400'] = 'Device Domain.Supervisory Control and Data Acquisition (SCADA)';
			sID['150500'] = 'Device Domain.Non-Government';
			sID['160000'] = 'Effect';
			sID['160100'] = 'Effect.Infection';
			sID['160200'] = 'Effect.Degradation';
			sID['160300'] = 'Effect.Data Spoofing';
			sID['160400'] = 'Effect.Data Manipulation';
			sID['160500'] = 'Effect.Exfiltration';
			sID['160600'] = 'Effect.Power Outage';
			sID['160700'] = 'Effect.Network Outage';
			sID['160800'] = 'Effect.Service Outage';
			sID['160900'] = 'Effect.Device Outage';		
		
		}	
	}
		
	if(isNaN(this.SIDC)){ //OLD SIDCs.
		if(symbol.battledimension == 'P'){
		// SPACE =========================================================================
		//1.X.1
		sID['S-P-------'] = '';
		//1.X.1.1
		sID['S-P-S-----'] = icons['SPACE.ICON.FULLFRAME.SATELLITE'] ;
		//1.X.1.2
		sID['S-P-V-----'] = icons['SPACE.ICON.FULLFRAME.CREWED SPACE VEHICLE'];		
		//1.X.1.3
		sID['S-P-T-----'] = icons['SPACE.ICON.FULLFRAME.SPACE STATION'];		
		//N/A
		sID['S-P-L-----'] = icons['SPACE.ICON.SPACE LAUNCH VEHICLE'];						
		}
		if(symbol.battledimension == 'A'){
		// AIR ===========================================================================	
		//1.X.2
		sID['S-A-------'] = '';
		//1.X.2.1
		sID['S-A-M-----'] = icons['AIR.ICON.MILITARY'];
		//1.X.2.1.1
		sID['S-A-MF----'] = icons['AIR.ICON.FULLFRAME.MILITARY FIXED WING'];
		//1.X.2.1.1.1
		sID['S-A-MFB---'] = icons['AIR.ICON.BOMBER'] ;		
		//1.X.2.1.1.2
		sID['S-A-MFF---'] = icons['AIR.ICON.FIGHTER'] ;			
		//1.X.2.1.1.2.1
		sID['S-A-MFFI--'] = icons['AIR.ICON.FIGHTER INTERCEPTOR'];				
		//1.X.2.1.1.3
		sID['S-A-MFT---'] = icons['AIR.ICON.TRAINER'] ;				
		//1.X.2.1.1.4
		sID['S-A-MFA---'] = icons['AIR.ICON.ATTACK/STRIKE'] ;			
		//1.X.2.1.1.5
		sID['S-A-MFL---'] = icons['AIR.ICON.VSTOL'] ;			
		//1.X.2.1.1.6
		sID['S-A-MFK---'] = icons['AIR.ICON.TANKER'];
		//N/A
		sID['S-A-MFKB--'] = icons['AIR.ICON.TANKER'] + icons['AIR.M1.BOOM-ONLY'];		
		//N/A
		sID['S-A-MFKD--'] = icons['AIR.ICON.TANKER'] + icons['AIR.M1.DROUGE-ONLY'];		
		//1.X.2.1.1.7
		sID['S-A-MFC---'] = icons['AIR.ICON.CARGO'];
		//1.X.2.1.1.7.1
		sID['S-A-MFCL--'] = icons['AIR.ICON.CARGO'] + icons['AIR.M2.LIGHT'];	
		//1.X.2.1.1.7.2
		sID['S-A-MFCM--'] = icons['AIR.ICON.CARGO'] + icons['AIR.M2.MEDIUM'];	
		//1.X.2.1.1.7.3
		sID['S-A-MFCH--'] = icons['AIR.ICON.CARGO'] + icons['AIR.M2.HEAVY'];			
		//1.X.2.1.1.8
		sID['S-A-MFJ---'] = icons['AIR.ICON.JAMMER / ELECTRONIC COUNTER-MEASURES'];		
		//1.X.2.1.1.9
		sID['S-A-MFO---'] = icons['AIR.ICON.MEDICAL EVACUATION'];		
		//1.X.2.1.1.10
		sID['S-A-MFR---'] = icons['AIR.ICON.RECONNAISSANCE'];			
		//1.X.2.1.1.10.1
		sID['S-A-MFRW--'] = icons['AIR.ICON.AIRBORNE EARLY WARNING'];		
		//1.X.2.1.1.10.2
		sID['S-A-MFRZ--'] = icons['AIR.ICON.ELECTRONIC SUPPORT MEASURES'] ;			
		//1.X.2.1.1.10.3
		sID['S-A-MFRX--'] = (this.force2525 ? icons['AIR.ICON.2525 PHOTOGRAPHIC'] : icons['AIR.ICON.RECONNAISSANCE'] + icons['AIR.M2.PHOTOGRAPHIC']);
		//1.X.2.1.1.11
		sID['S-A-MFP---'] = icons['AIR.ICON.PATROL'];
		//1.X.2.1.1.11.1
		sID['S-A-MFPN--'] = icons['AIR.ICON.ANTISURFACE WARFARE'];
		//1.X.2.1.1.11.2
		sID['S-A-MFPM--'] = icons['AIR.ICON.MINE COUNTERMEASURES'];		
		//1.X.2.1.1.12
		sID['S-A-MFU---'] = icons['AIR.ICON.UTILITY'] ;			
		//1.X.2.1.1.12.1
		sID['S-A-MFUL--'] = icons['AIR.ICON.UTILITY'] + icons['AIR.M2.LIGHT'];	
		//1.X.2.1.1.12.2
		sID['S-A-MFUM--'] = icons['AIR.ICON.UTILITY'] + icons['AIR.M2.MEDIUM'];
		//1.X.2.1.1.12.3
		sID['S-A-MFUH--'] = icons['AIR.ICON.UTILITY'] + icons['AIR.M2.HEAVY'];			
		//1.X.2.1.1.13
		sID['S-A-MFY---'] = icons['AIR.ICON.COMMUNICATIONS'];			
		//1.X.2.1.1.14
		sID['S-A-MFH---'] = icons['AIR.ICON.PERSONNEL RECOVERY'];			
		//1.X.2.1.1.15
		sID['S-A-MFD---'] =	icons['AIR.ICON.AIRBORNE COMMAND POST'];
		//1.X.2.1.1.16
		sID['S-A-MFQ---'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'];	
		//1.X.2.1.1.16.1
		sID['S-A-MFQA--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.ATTACK'];	
		//1.X.2.1.1.16.2
		sID['S-A-MFQB--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.BOMBER'];	
		//1.X.2.1.1.16.3
		sID['S-A-MFQC--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.CARGO'];	
		//1.X.2.1.1.16.4
		sID['S-A-MFQD--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.AIRBORNE COMMAND POST'];	
		//1.X.2.1.1.16.5
		sID['S-A-MFQF--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.FIGHTER'];	
		//1.X.2.1.1.16.6
		sID['S-A-MFQH--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.COMBAT SEARCH AND RESCUE'] ;	
		//1.X.2.1.1.16.7
		sID['S-A-MFQJ--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES'];	
		//1.X.2.1.1.16.8
		sID['S-A-MFQK--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.TANKER'];	
		//1.X.2.1.1.16.9
		sID['S-A-MFQL--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.VSTOL'];	
		//1.X.2.1.1.16.10
		sID['S-A-MFQM--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];	
		//1.X.2.1.1.16.11
		sID['S-A-MFQI--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.MINE COUNTERMEASURES'];	
		//1.X.2.1.1.16.12
		sID['S-A-MFQN--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.ANTISURFACE WARFARE'];	
		//1.X.2.1.1.16.13
		sID['S-A-MFQP--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.PATROL'];	
		//1.X.2.1.1.16.14
		sID['S-A-MFQR--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.RECONNAISSANCE'];	
		//1.X.2.1.1.16.14.1
		sID['S-A-MFQRW-'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.AIRBORNE EARLY WARNING'];	
		//1.X.2.1.1.16.14.2
		sID['S-A-MFQRZ-'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.ELECTRONIC SURVEILLANCE MEASURES'];	
		//1.X.2.1.1.16.14.3
		sID['S-A-MFQRX-'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.PHOTOGRAPHIC'];
		//1.X.2.1.1.16.15
		sID['S-A-MFQS--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.ANTISUBMARINE WARFARE'];	
		//1.X.2.1.1.16.16
		sID['S-A-MFQT--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.TRAINER'];	
		//1.X.2.1.1.16.17
		sID['S-A-MFQU--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.UTILITY'];	
		//1.X.2.1.1.16.18
		sID['S-A-MFQY--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.COMMUNICATIONS'];	
		//1.X.2.1.1.16.19
		sID['S-A-MFQO--'] =	icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + icons['AIR.M1.MEDEVAC'];	
		//1.X.2.1.1.17
		sID['S-A-MFS---'] = icons['AIR.ICON.ANTISUBMARINE WARFARE'];					
		//1.X.2.1.1.18
		sID['S-A-MFM---'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'];			
		//1.X.2.1.2
		sID['S-A-MH----'] = icons['AIR.ICON.MILITARY ROTARY WING'];			
		//1.X.2.1.2.1
		sID['S-A-MHA---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.ATTACK'];
		//1.X.2.1.2.2
		sID['S-A-MHS---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.ANTISUBMARINE WARFARE'];
		//1.X.2.1.2.3
		sID['S-A-MHU---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.UTILITY'];
		//1.X.2.1.2.3.1
		sID['S-A-MHUL--'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.UTILITY'] + icons['AIR.M2.LIGHT'];
		//1.X.2.1.2.3.2
		sID['S-A-MHUM--'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.UTILITY'] + icons['AIR.M2.MEDIUM'];
		//1.X.2.1.2.3.3
		sID['S-A-MHUH--'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.UTILITY'] + icons['AIR.M2.HEAVY'];
		//1.X.2.1.2.4
		sID['S-A-MHI---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.MINE COUNTERMEASURES'];
		//1.X.2.1.2.5
		sID['S-A-MHH---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.COMBAT SEARCH AND RESCUE'];
		//1.X.2.1.2.6
		sID['S-A-MHR---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.RECONNAISSANCE'];
		//1.X.2.1.2.7
		sID['S-A-MHQ---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.UNMANNED AERIAL VEHICLE'];
		//1.X.2.1.2.8
		sID['S-A-MHC---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.CARGO'];
		//1.X.2.1.2.8.1
		sID['S-A-MHCL--'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.CARGO'] + icons['AIR.M2.LIGHT'];
		//1.X.2.1.2.8.2
		sID['S-A-MHCM--'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.CARGO'] + icons['AIR.M2.MEDIUM'];
		//1.X.2.1.2.8.3
		sID['S-A-MHCH--'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.CARGO'] + icons['AIR.M2.HEAVY'];
		//1.X.2.1.2.9
		sID['S-A-MHT---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.TRAINER'];
		//1.X.2.1.2.10
		sID['S-A-MHO---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.MEDEVAC'];
		//1.X.2.1.2.11
		sID['S-A-MHM---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];
		//1.X.2.1.2.12
		sID['S-A-MHD---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.AIRBORNE COMMAND POST'];
		//1.X.2.1.2.13
		sID['S-A-MHK---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.TANKER'];
		//1.X.2.1.2.14
		sID['S-A-MHJ---'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES'];
		//1.X.2.1.3
		sID['S-A-ML----'] = icons['AIR.ICON.FULLFRAME.MILITARY BALLOON'];
		//N/A
		sID['S-A-MV----'] = icons['AIR.ICON.VIP'];		
		//N/A
		sID['S-A-ME----'] = icons['AIR.ICON.ESCORT'];			
		//1.X.2.2
		sID['S-A-W-----'] = icons['AIR.MISSILE.ICON'];			
		//1.X.2.2.1
		sID['S-A-WM----'] = icons['AIR.MISSILE.ICON'];	
		//1.X.2.2.1.1
		sID['S-A-WMS---'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.SURFACE'] + icons['AIR.MISSILE.M2.LAUNCHED'];	
		//1.X.2.2.1.1.1
		sID['S-A-WMSS--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.SURFACE'] + icons['AIR.MISSILE.M2.SURFACE'];	
		//1.X.2.2.1.1.2
		sID['S-A-WMSA--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.SURFACE'] + icons['AIR.MISSILE.M2.AIR'];	
		//N/A
		sID['S-A-WMSU--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.SURFACE'] + icons['AIR.MISSILE.M2.SUBSURFACE'];	
		//N/A
		sID['S-A-WMSB--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.ICON.ANTIBALLISTIC MISSILE'];			
		//1.X.2.2.1.2
		sID['S-A-WMA---'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.AIR'] + icons['AIR.MISSILE.M2.LAUNCHED'];	
		//1.X.2.2.1.2.1
		sID['S-A-WMAS--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.AIR'] + icons['AIR.MISSILE.M2.SURFACE'];	
		//1.X.2.2
		sID['S-A-WMAA--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.AIR'] + icons['AIR.MISSILE.M2.AIR'];	
		//N/A
		sID['S-A-WMAP--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.AIR'] + icons['AIR.MISSILE.M2.SPACE'];	
		//1.X.2.2.1.3
		sID['S-A-WMU---'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.SUBSURFACE'] + icons['AIR.MISSILE.M2.SURFACE'];	
		//1.X.2.2.1.4
		sID['S-A-WML---'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.LAND'] + icons['AIR.MISSILE.M2.AIR'];	
		sID['S-A-WMCM--'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.CRUISE'] + icons['AIR.MISSILE.M2.MISSILE'];
		//N/A
		sID['S-A-WMB---'] = icons['AIR.MISSILE.ICON'] + icons['AIR.MISSILE.M1.BALLISTIC'] + icons['AIR.MISSILE.M2.MISSILE'];	
		//N/A
		sID['S-A-WB----'] = icons['AIR.MISSILE.ICON.BOMB'];	
		//1.X.2.2.2
		sID['S-A-WD----'] = icons['AIR.ICON.AIR DECOY'];
		//1.X.2.2.3
		sID['S-A-C-----'] = icons['AIR.ICON.CIVILIAN'];			
		//1.X.2.2.3.1
		sID['S-A-CF----'] = icons['AIR.ICON.FULLFRAME.CIVILIAN FIXED WING'];	
		//1.X.2.2.3.2
		sID['S-A-CH----'] = icons['AIR.ICON.FULLFRAME.CIVILIAN ROTARY WING'];		
		//1.X.2.2.3.3
		sID['S-A-CL----'] = icons['AIR.ICON.FULLFRAME.CIVILIAN BALLOON'];
		}
		if(symbol.battledimension == 'G'){
		// GROUND ========================================================================			
		//1.X.3
		sID['S-G-------'] = '';
		//1.X.3.1
		sID['S-G-U-----'] = '';
		//1.X.3.1.1
		sID['S-G-UC----'] = icons['GROUND.ICON.COMBAT'];
		//1.X.3.1.1.1
		sID['S-G-UCD---'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'];		
		//1.X.3.1.1.1.1
		sID['S-G-UCDS--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE SHORT RANGE'];	
		//1.X.3.1.1.1.1.1
		sID['S-G-UCDSC-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.AIR DEFENSE CHAPARRAL'];			
		//1.X.3.1.1.1.1.1
		sID['S-G-UCDSS-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.AIR DEFENSE STINGER'];			
		//1.X.3.1.1.1.1.1
		sID['S-G-UCDSV-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'] + icons['GROUND.ICON.AIR DEFENSE VULCAN'];			
		//1.X.3.1.1.1.2
		sID['S-G-UCDM--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'];			
		//1.X.3.1.1.1.2.1
		sID['S-G-UCDML-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.MISSILE.LIGHT'];			
		//1.X.3.1.1.1.2.1.1
		sID['S-G-UCDMLA'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];			
		//1.X.3.1.1.1.2.2
		sID['S-G-UCDMM-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.MISSILE.MEDIUM'];			
		//1.X.3.1.1.1.2.3
		sID['S-G-UCDMH-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.MISSILE.HEAVY'];	
		//1.X.3.1.1.1.2.4
		sID['S-G-UCDH--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE H/MAD'];
		//1.X.3.1.1.1.2.4.1
		sID['S-G-UCDHH-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.AIR DEFENSE H/MAD HAWK'];
		//1.X.3.1.1.1.2.4.2
		sID['S-G-UCDHP-'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE MISSILE'] + icons['GROUND.ICON.AIR DEFENSE H/MAD PATRIOT'];
		//1.X.3.1.1.1.3
		sID['S-G-UCDG--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE GUN UNIT'];		
		//1.X.3.1.1.1.4
		sID['S-G-UCDC--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE COMPOSITE'];			
		//1.X.3.1.1.1.5
		sID['S-G-UCDT--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE TARGETING UNIT'];		
		//1.X.3.1.1.1.6
		sID['S-G-UCDO--'] = icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] + icons['GROUND.ICON.AIR DEFENSE THEATER MISSILE DEFENSE UNIT'];		
		//1.X.3.1.1.2
		sID['S-G-UCA---'] = icons['GROUND.ICON.ARMOUR'];			
		//1.X.3.1.1.2.1
		sID['S-G-UCAT--'] = icons['GROUND.ICON.ARMOUR'];		
		//1.X.3.1.1.2.1.1
		sID['S-G-UCATA-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.AIRBORNE'];		
		//1.X.3.1.1.2.1.2
		sID['S-G-UCATW-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];		
		//1.X.3.1.1.2.1.2.1
		sID['S-G-UCATWR'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + icons['GROUND.M2.RECOVERY (MAINTENANCE)'];		
		//1.X.3.1.1.2.1.3
		sID['S-G-UCATL-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.LIGHT'];		
		//1.X.3.1.1.2.1.4
		sID['S-G-UCATM-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.MEDIUM'];		
		//1.X.3.1.1.2.1.5
		sID['S-G-UCATH-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.HEAVY'];						
		//1.X.3.1.1.2.1.6
		sID['S-G-UCATR-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.RECOVERY (MAINTENANCE)'];
		//1.X.3.1.1.2.2
		sID['S-G-UCAW--'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];		
		//1.X.3.1.1.2.2.1
		sID['S-G-UCAWS-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.2.2.2
		sID['S-G-UCAWA-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.M2.AIRBORNE'];				
		//1.X.3.1.1.2.2.3
		sID['S-G-UCAWW-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];			
		//1.X.3.1.1.2.2.3.1
		sID['S-G-UCAWWR'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + icons['GROUND.M2.RECOVERY (MAINTENANCE)'];	
		//1.X.3.1.1.2.2.4
		sID['S-G-UCAWL-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.M2.LIGHT'];	
		//1.X.3.1.1.2.2.5
		sID['S-G-UCAWM-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.M2.MEDIUM'];			
		//1.X.3.1.1.2.2.6
		sID['S-G-UCAWH-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.M2.HEAVY'];			
		//1.X.3.1.1.2.2.7
		sID['S-G-UCAWR-'] = icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + icons['GROUND.M2.RECOVERY (MAINTENANCE)'];		
		//1.X.3.1.1.3
		sID['S-G-UCAA--'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'];		
		//1.X.3.1.1.3.1
		sID['S-G-UCAAD-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'];			
		//1.X.3.1.1.3.2
		sID['S-G-UCAAL-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.M2.LIGHT'];
		//1.X.3.1.1.3.3
		sID['S-G-UCAAM-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.M2.AIRBORNE'];
		//1.X.3.1.1.3.4
		sID['S-G-UCAAS-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];	
		//1.X.3.1.1.3.5
		sID['S-G-UCAAU-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.M2.MOUNTAIN'];		
		//1.X.3.1.1.3.6
		sID['S-G-UCAAC-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.M2.ARCTIC'];			
		//1.X.3.1.1.3.7
		sID['S-G-UCAAA-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.ARMOUR'];			
		//1.X.3.1.1.3.7.1
		sID['S-G-UCAAAT'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.ARMOUR'];			
		//1.X.3.1.1.3.7.2
		sID['S-G-UCAAAW'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];	
		//1.X.3.1.1.3.7.3
		sID['S-G-UCAAAS'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.3.8
		sID['S-G-UCAAO-'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];	
		//1.X.3.1.1.3.8.1
		sID['S-G-UCAAOS'] = icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];
		//1.X.3.1.1.4
		sID['S-G-UCV---'] = icons['GROUND.ICON.AVIATION ROTARY WING'];		
		//1.X.3.1.1.4.1
		sID['S-G-UCVF--'] = icons['GROUND.ICON.AVIATION FIXED WING'];		
		//1.X.3.1.1.4.1.1
		sID['S-G-UCVFU-'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.M1.UTILITY'];		
		//1.X.3.1.1.4.1.2
		sID['S-G-UCVFA-'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.M1.ATTACK'];			
		//1.X.3.1.1.4.1.2.1
		sID['S-G-UCVUTP'] = icons['GROUND.ICON.AVIATION TACTICAL AIR CONTROL PARTY'];
		//1.X.3.1.1.4.1.2.2
		sID['S-G-UCVUFC'] = icons['GROUND.ICON.AVIATION FORWARD AIR CONTROLLER'];	
		//1.X.3.1.1.4.1.3
		sID['S-G-UCVFR-'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.M1.RECON'];	
		//1.X.3.1.1.4.2			//2525 Requirers a stupid extra line for just this symbol.
		sID['S-G-UCVR--'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + (this.force2525 ? '<line x1="100" y1="100" x2="100" y2="140" />' : '');			
		//1.X.3.1.1.4.2.1
		sID['S-G-UCVRA-'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.ATTACK'];			
		//1.X.3.1.1.4.2.2
		sID['S-G-UCVRS-'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.RECON'];	
		//1.X.3.1.1.4.2.3
		sID['S-G-UCVRW-'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.ANTISUBMARINE WARFARE'];			
		//1.X.3.1.1.4.2.4
		sID['S-G-UCVRU-'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.UTILITY'];				
		//1.X.3.1.1.4.2.4.1
		sID['S-G-UCVRUL'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.UTILITY'] + icons['GROUND.M2.LIGHT'];
		//1.X.3.1.1.4.2.4.2
		sID['S-G-UCVRUM'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.UTILITY'] + icons['GROUND.M2.MEDIUM'];
		//1.X.3.1.1.4.2.4.3
		sID['S-G-UCVRUH'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.UTILITY'] + icons['GROUND.M2.HEAVY'];
		//1.X.3.1.1.4.2.5
		sID['S-G-UCVRUC'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.COMMAND AND CONTROL'];		
		//1.X.3.1.1.4.2.6
		sID['S-G-UCVRUE'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.MEDEVAC'];		
		//1.X.3.1.1.4.2.7
		sID['S-G-UCVRM-'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.MINE COUNTERMEASURE'];			
		//1.X.3.1.1.4.3
		sID['S-G-UCVS--'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.PERSONNEL RECOVERY'];			
		//1.X.3.1.1.4.4
		sID['S-G-UCVC--'] = scale(0.5,icons['GROUND.ICON.AVIATION FIXED WING'] + rotate(90,icons['GROUND.ICON.AVIATION ROTARY WING']));		
		//1.X.3.1.1.4.5
		sID['S-G-UCVV--'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING '];		
		//1.X.3.1.1.4.6
		sID['S-G-UCVU--'] = icons['GROUND.ICON.UNMANNED SYSTEMS'];			
		//1.X.3.1.1.4.6.1
		sID['S-G-UCVUF-'] = icons['GROUND.ICON.AVIATION FIXED WING'] + icons['GROUND.M1.UNMANNED AERIAL VEHICLE'];		
		//1.X.3.1.1.4.6.1.1 WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCVU--'] = icons['GROUND.ICON.UNMANNED SYSTEMS'] + icons['GROUND.M2.CONTROL'];			
		//1.X.3.1.1.4.6.1.2 WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCVU--'] = icons['GROUND.ICON.UNMANNED SYSTEMS'] + icons['GROUND.M2.LAUNCHER'];	
		//1.X.3.1.1.4.6.1.3 WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCVU--'] = icons['GROUND.ICON.UNMANNED SYSTEMS'] + icons['GROUND.M2.RECOVERY (UNMANNED SYSTEMS)'];		
		//1.X.3.1.1.4.6.2
		sID['S-G-UCVUR-'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.UNMANNED AERIAL VEHICLE'];				
		//1.X.3.1.1.5
		sID['S-G-UCI---'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'];			
		//1.X.3.1.1.5.1
		sID['S-G-UCIL--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.M2.LIGHT'];
		//1.X.3.1.1.5.2
		sID['S-G-UCIM--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];		
		//1.X.3.1.1.5.3
		sID['S-G-UCIO--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.M2.MOUNTAIN'];			
		//1.X.3.1.1.5.4
		sID['S-G-UCIA--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.M2.AIRBORNE'];			
		//1.X.3.1.1.5.5
		sID['S-G-UCIS--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.5.6
		sID['S-G-UCIZ--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.ARMOUR'];
		//1.X.3.1.1.5.7
		sID['S-G-UCIN--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.FULLFRAME.NAVAL'];			
		//1.X.3.1.1.5.8
		sID['S-G-UCII--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'];		
		//1.X.3.1.1.5.9
		sID['S-G-UCIC--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.M2.ARCTIC'];			 
		//1.X.3.1.1.5.10  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCIC--'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['GROUND.M1.SNIPER'];		
		//1.X.3.1.1.6
		sID['S-G-UCE---'] = icons['GROUND.ICON.ENGINEER'];	
		//1.X.3.1.1.6.1
		sID['S-G-UCEC--'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.COMBAT'];			
		//1.X.3.1.1.6.1.1
		sID['S-G-UCECS-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.6.1.2
		sID['S-G-UCECA-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M2.AIRBORNE'];						
		//1.X.3.1.1.6.1.3
		sID['S-G-UCECC-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M2.ARCTIC'];		
		//1.X.3.1.1.6.1.4
		sID['S-G-UCECL-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.COMBAT'] + icons['GROUND.M2.LIGHT'];			
		//1.X.3.1.1.6.1.5
		sID['S-G-UCECM-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.COMBAT'] + icons['GROUND.M2.MEDIUM'];		
		//1.X.3.1.1.6.1.6
		sID['S-G-UCECH-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.COMBAT'] + icons['GROUND.M2.HEAVY'];		
		//1.X.3.1.1.6.1.7
		sID['S-G-UCECT-'] = scale(0.7,icons['GROUND.ICON.ENGINEER']) + icons['GROUND.ICON.ARMOUR'];		
		//1.X.3.1.1.6.1.8
		sID['S-G-UCECW-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];			
		//1.X.3.1.1.6.1.9
		sID['S-G-UCECO-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M2.MOUNTAIN'];		
		//1.X.3.1.1.6.1.10
		sID['S-G-UCECR-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.6.1.11  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCEC--'] = 
		//1.X.3.1.1.6.1.12  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCEC--'] = 		
		//1.X.3.1.1.6.1.13  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCEC--'] = 		
		//1.X.3.1.1.6.1.14  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCEC--'] = 		
		//1.X.3.1.1.6.2
		sID['S-G-UCEN--'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.CONSTRUCTION'];
		//1.X.3.1.1.6.2.1
		sID['S-G-UCENN-'] = icons['GROUND.ICON.ENGINEER'] + icons['GROUND.M1.NAVAL'];		
		//1.X.3.1.1.7
		sID['S-G-UCF---'] = icons['GROUND.ICON.FIELD ARTILLERY'];		
		//1.X.3.1.1.7.1
		sID['S-G-UCFH--'] = icons['GROUND.ICON.FIELD ARTILLERY'];			
		//1.X.3.1.1.7.1.1	
		sID['S-G-UCFHE-'] = scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.ARMOUR'];		
		//1.X.3.1.1.7.1.2	
		sID['S-G-UCFHS-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.7.1.3	
		sID['S-G-UCFHA-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.AIRBORNE'];	
		//1.X.3.1.1.7.1.4	
		sID['S-G-UCFHC-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.ARCTIC'];	
		//1.X.3.1.1.7.1.5	
		sID['S-G-UCFHO-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.MOUNTAIN'];		
		//1.X.3.1.1.7.1.6	
		sID['S-G-UCFHL-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.LIGHT'];			
		//1.X.3.1.1.7.1.7	
		sID['S-G-UCFHM-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.MEDIUM'];			
		//1.X.3.1.1.7.1.8	
		sID['S-G-UCFHH-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.HEAVY'];			
		//1.X.3.1.1.7.1.9	
		sID['S-G-UCFHX-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];	
		//1.X.3.1.1.7.2	
		sID['S-G-UCFR--'] = icons['GROUND.ICON.FULLFRAME.FIELD ARTILLERY ROCKET'];	
		//1.X.3.1.1.7.2.1	
		sID['S-G-UCFRS-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'];		
		//1.X.3.1.1.7.2.1	
		sID['S-G-UCFRS-'] = scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + (this.force2525 ? '' : icons['GROUND.ICON.ARMOUR']);			
		//1.X.3.1.1.7.2.1.1	
		sID['S-G-UCFRSS'] = scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + icons['GROUND.ICON.ARMOUR'];			
		//1.X.3.1.1.7.2.1.2	
		sID['S-G-UCFRSR'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + icons['GROUND.M2.TRUCK'];			
		//1.X.3.1.1.7.2.1.3	
		sID['S-G-UCFRST'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + icons['GROUND.M2.TOWED'];		
		//1.X.3.1.1.7.2.2
		sID['S-G-UCFRM-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + (this.force2525 ? '' : icons['GROUND.M2.CROSS-COUNTRY TRUCK'] );				
		//1.X.3.1.1.7.2.2.1
		sID['S-G-UCFRMS'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + icons['GROUND.ICON.ARMOUR'];		
		//1.X.3.1.1.7.2.2.2
		sID['S-G-UCFRMR'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + icons['GROUND.M2.TRUCK'];	
		//1.X.3.1.1.7.2.2.3
		sID['S-G-UCFRMT'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + icons['GROUND.M2.TOWED'];		
		//1.X.3.1.1.7.3.1
		sID['S-G-UCFT--'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.TARGET ACQUISITION'];
		//1.X.3.1.1.7.3.1
		sID['S-G-UCFTR-'] = translate(-30,10,scale(0.6,icons['GROUND.ICON.FIELD ARTILLERY'])) + icons['GROUND.ICON.RADAR'];			
		//1.X.3.1.1.7.3.2
		sID['S-G-UCFTS-'] = translate(0,30,scale(0.7,icons['GROUND.ICON.FIELD ARTILLERY']))+ icons['GROUND.ICON.FULLFRAME.SOUND'];
		//1.X.3.1.1.7.3.3
		sID['S-G-UCFTF-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.OPTICAL'] + icons['GROUND.M2.TARGET ACQUISITION'];
		//1.X.3.1.1.7.3.4
		sID['S-G-UCFTC-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.7.3.4.1
		sID['S-G-UCFTCD'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.7.3.4.2
		sID['S-G-UCFTCM'] = scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'];			
		//1.X.3.1.1.7.3.5
		sID['S-G-UCFTA-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['GROUND.M1.NAVAL'];		
		//1.X.3.1.1.7.4
		sID['S-G-UCFM--'] = icons['GROUND.ICON.MORTAR'];			
		//1.X.3.1.1.7.4.1
		sID['S-G-UCFMS-'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TRACKED'];		
		//1.X.3.1.1.7.4.2
		sID['S-G-UCFMW-'] = sID['S-G-UCFMSW'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TRUCK'];		
		//1.X.3.1.1.7.4.3
		sID['S-G-UCFMT-'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TOWED'];	
		//1.X.3.1.1.7.4.3.1
		sID['S-G-UCFMTA'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TOWED'] + icons['GROUND.M2.AIRBORNE'];
		//1.X.3.1.1.7.4.3.2
		sID['S-G-UCFMTS'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TOWED'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];		
		//1.X.3.1.1.7.4.3.3
		sID['S-G-UCFMTC'] = icons['GROUND.ICON.MORTAR'] +  icons['GROUND.M2.ARCTIC'];	
		//1.X.3.1.1.7.4.3.4
		sID['S-G-UCFMTO'] = icons['GROUND.ICON.MORTAR'] + icons['GROUND.M2.TOWED'] + icons['GROUND.M2.MOUNTAIN'];
		//1.X.3.1.1.7.4.4
		sID['S-G-UCFML-'] = translate(0,-20,icons['GROUND.ICON.MORTAR']) + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];
		//1.X.3.1.1.7.5
		sID['S-G-UCFS--'] =	icons['GROUND.ICON.SURVEY'];	
		//1.X.3.1.1.7.5.1
		sID['S-G-UCFSS-'] =	icons['GROUND.ICON.SURVEY'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.7.5.2
		sID['S-G-UCFSA-'] =	icons['GROUND.ICON.SURVEY'] + icons['GROUND.M2.AIRBORNE'];
		//1.X.3.1.1.7.5.3
		sID['S-G-UCFSL-'] =	icons['GROUND.ICON.SURVEY'] + icons['GROUND.M2.LIGHT'];	
		//1.X.3.1.1.7.5.4
		sID['S-G-UCFSO-'] =	icons['GROUND.ICON.SURVEY'] + icons['GROUND.M2.MOUNTAIN'];
		//1.X.3.1.1.7.6
		sID['S-G-UCFO--'] =	icons['GROUND.ICON.METEOROLOGICAL'];		
		//1.X.3.1.1.7.6.1
		sID['S-G-UCFOS-'] =	icons['GROUND.ICON.METEOROLOGICAL'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];			
		//1.X.3.1.1.7.6.2
		sID['S-G-UCFOA-'] =	icons['GROUND.ICON.METEOROLOGICAL'] + icons['GROUND.M2.AIRBORNE'];	
		//1.X.3.1.1.7.6.3
		sID['S-G-UCFOL-'] =	icons['GROUND.ICON.METEOROLOGICAL'] + icons['GROUND.M2.LIGHT'];
		//1.X.3.1.1.7.6.4
		sID['S-G-UCFOO-'] =	icons['GROUND.ICON.METEOROLOGICAL'] + icons['GROUND.M2.MOUNTAIN'];
		//1.X.3.1.1.7.7  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCF---'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.FIRE DIRECTION CENTRE'];		
		//1.X.3.1.1.7.8  WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UCF---'] = icons['GROUND.ICON.FIELD ARTILLERY OBSERVER'];			
		//1.X.3.1.1.8
		sID['S-G-UCR---'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.8.1
		sID['S-G-UCRH--'] =	icons['GROUND.ICON.FULLFRAME.HORSE'];			
		//1.X.3.1.1.8.2
		sID['S-G-UCRV--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + (this.force2525?icons['GROUND.M2.CAVALRY']:'');		
		//1.X.3.1.1.8.2.1
		sID['S-G-UCRVA-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'];
		//1.X.3.1.1.8.2.2
		sID['S-G-UCRVM-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
		//1.X.3.1.1.8.2.3
		sID['S-G-UCRVG-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.8.2.4
		sID['S-G-UCRVO-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.AVIATION ROTARY WING'];			
		//1.X.3.1.1.8.3
		sID['S-G-UCRC--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.M2.ARCTIC'];			
		//1.X.3.1.1.8.4
		sID['S-G-UCRS--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.M1.AIRMOBILE/AIR ASSAULT'];	
		//1.X.3.1.1.8.5
		sID['S-G-UCRA--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.M2.AIRBORNE'];		
		//1.X.3.1.1.8.6
		sID['S-G-UCRO--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.M2.MOUNTAIN'];		
		//1.X.3.1.1.8.7
		sID['S-G-UCRL--'] =	sID['S-G-UCRLL-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.M2.LIGHT'];
		//1.X.3.1.1.8.8
		sID['S-G-UCRR--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];		
		//1.X.3.1.1.8.8.1
		sID['S-G-UCRRD-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + (this.force2525?icons['GROUND.M1.DIVISION']:'');
		//1.X.3.1.1.8.8.2
		sID['S-G-UCRRF-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + icons['GROUND.M1.FORCE'];		
		//1.X.3.1.1.8.8.3
		sID['S-G-UCRRL-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];
		//1.X.3.1.1.8.9
		sID['S-G-UCRX--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + (this.force2525 ? icons['GROUND.M2.LONG RANGE SURVEILLANCE'] : translate(0,-20,icons['GROUND.M2.MOUNTAIN'])+icons['GROUND.M2.LONG RANGE']);		
		//1.X.3.1.1.9
		sID['S-G-UCM---'] =	icons['GROUND.ICON.MISSILE'];		
		//1.X.3.1.1.9.1
		sID['S-G-UCMT--'] =	icons['GROUND.ICON.MISSILE'] + icons['GROUND.M2.TACTICAL MISSILE'];			
		//1.X.3.1.1.9.2
		sID['S-G-UCMS--'] =	icons['GROUND.ICON.MISSILE'] + icons['GROUND.M2.STRATEGIC MISSILE'];			
		//1.X.3.1.1.10
		sID['S-G-UCS---'] =	icons['GROUND.ICON.SECURITY'];		
		//1.X.3.1.1.10.1
		sID['S-G-UCSW--'] =	translate(0,-20,icons['GROUND.ICON.SECURITY']) + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];			
		//1.X.3.1.1.10.2
		sID['S-G-UCSG--'] =	icons['GROUND.ICON.SECURITY'];			
		//1.X.3.1.1.10.2.1
		sID['S-G-UCSGD-'] =	icons['GROUND.ICON.SECURITY'] + icons['GROUND.ICON.FULLFRAME.INFANTRY'];
		//1.X.3.1.1.10.2.2
		sID['S-G-UCSGM-'] =	icons['GROUND.ICON.SECURITY'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
		//1.X.3.1.1.10.2.3
		sID['S-G-UCSGA-'] =	icons['GROUND.ICON.SECURITY'] + icons['GROUND.ICON.ARMOUR'];				
		//1.X.3.1.1.10.3
		sID['S-G-UCSM--'] =	icons['GROUND.ICON.SECURITY'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];
		//1.X.3.1.1.10.4
		sID['S-G-UCSR--'] =	icons['GROUND.ICON.SECURITY'] + icons['GROUND.M2.RAILROAD'];				
		//1.X.3.1.1.10.5
		sID['S-G-UCSA--'] =	translate(0,-20,icons['GROUND.ICON.SECURITY']) + icons['GROUND.ICON.AVIATION ROTARY WING'];					
		//1.X.3.1.1.11 TOTALLY FUCKED UP SIDC IN APP6B
		//sID['S-G-F-S---'] = ;					
		//1.X.3.1.2
		sID['S-G-UU----'] =	icons['GROUND.ICON.COMBAT SUPPORT'];				
		//1.X.3.1.2.1
		sID['S-G-UUA---'] =	icons['GROUND.ICON.CBRN'];				
		//1.X.3.1.2.1.1
		sID['S-G-UUAC--'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.CHEMICAL'];					
		//1.X.3.1.2.1.1.1
		sID['S-G-UUACC-'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.SMOKE/DECON'];				
		//1.X.3.1.2.1.1.1.1
		sID['S-G-UUACCK'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.SMOKE/DECON'] + icons['GROUND.ICON.ARMOUR'];
		//1.X.3.1.2.1.1.1.2
		sID['S-G-UUACCM'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.SMOKE/DECON'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];			
		//1.X.3.1.2.1.1.2
		sID['S-G-UUACS-'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.SMOKE'];					
		//1.X.3.1.2.1.1.2.1
		sID['S-G-UUACSM'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.SMOKE'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'];
		//1.X.3.1.2.1.1.2.2
		sID['S-G-UUACSA'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.SMOKE'] + icons['GROUND.ICON.ARMOUR'];	
		//1.X.3.1.2.1.1.3
		sID['S-G-UUACR-'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.CHEMICAL'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];			
		//1.X.3.1.2.1.1.3.1
		sID['S-G-UUACRW'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];
		//1.X.3.1.2.1.1.3.2
		sID['S-G-UUACRS'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + (this.force2525?icons['GROUND.M1.CHEMICAL SURVEILLANCE']:'');				
		//1.X.3.1.2.1.2
		sID['S-G-UUAN--'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.NUCLEAR'];				
		//1.X.3.1.2.1.3
		sID['S-G-UUAB--'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.BIOLOGICAL'];					
		//1.X.3.1.2.1.3.1
		sID['S-G-UUABR-'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.BIOLOGICAL'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];
		//1.X.3.1.2.1.4
		sID['S-G-UUAD--'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.DECONTAMINATION'];					
		//1.X.3.1.2.1.4.1
		sID['S-G-UUADT-'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.DECONTAMINATION'] + icons['GROUND.M2.TROOP'];					
		//1.X.3.1.2.1.4.2
		sID['S-G-UUADE-'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.DECONTAMINATION'] + icons['GROUND.M2.EQUIPMENT'];					
		//1.X.3.1.2.1.4.3
		sID['S-G-UUADET'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.DECONTAMINATION'] + icons['GROUND.M2.EQUIMENT/TROOP'];					
		//1.X.3.1.2.1.5
		sID['S-G-UUAL--'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.M2.LABORATORY'];					
		//1.X.3.1.2.2
		sID['S-G-UUM---'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'];					
		//1.X.3.1.2.2.1
		sID['S-G-UUMA--'] =	icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.M1.UNMANNED AERIAL VEHICLE'];					
		//1.X.3.1.2.2.2
		sID['S-G-UUMS--'] =	translate(-25,0,icons['GROUND.ICON.MILITARY INTELLIGENCE']) + icons['GROUND.ICON.RADIO'];	
		//1.X.3.1.2.2.2.1
		sID['S-G-UUMSE-'] = icons['GROUND.ICON.ELECTRONIC WARFARE'];			
		//1.X.3.1.2.2.2.1.1
		sID['S-G-UUMSEA'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];
		//1.X.3.1.2.2.2.1.2
		sID['S-G-UUMSED'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.DIRECTION FINDING'];		
		//1.X.3.1.2.2.2.1.3
		sID['S-G-UUMSEI'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.INTERCEPT'];	
		//1.X.3.1.2.2.2.1.4
		sID['S-G-UUMSEJ'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.JAMMING'];	
		//1.X.3.1.2.2.2.1.5
		sID['S-G-UUMSET'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.2.2.2.1.6
		sID['S-G-UUMSEC'] = icons['GROUND.ICON.ELECTRONIC WARFARE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.2.2.3
		sID['S-G-UUMC--'] = icons['GROUND.ICON.COUNTER-INTELLIGENCE'];
		//1.X.3.1.2.2.4
		sID['S-G-UUMR--'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'];
		//1.X.3.1.2.2.4.1
		sID['S-G-UUMRG-'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.M1.RADAR'];
		//1.X.3.1.2.2.4.2
		sID['S-G-UUMRS-'] = translate(0,30,scale(0.8,icons['GROUND.ICON.MILITARY INTELLIGENCE'])) + icons['GROUND.ICON.FULLFRAME.SENSOR'];
		//1.X.3.1.2.2.4.2.1
		sID['S-G-UUMRSS'] = translate(0,30,scale(0.8,icons['GROUND.ICON.MILITARY INTELLIGENCE'])) + icons['GROUND.ICON.FULLFRAME.SENSOR'] + icons['GROUND.M1.SENSOR CONTROL MODULE'];
		//1.X.3.1.2.2.4.3
		sID['S-G-UUMRX-'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.M1.GROUND STATION MODULE'];
		//1.X.3.1.2.2.4.4
		sID['S-G-UUMMO-'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.M1.METEOROLOGICAL'];
		//1.X.3.1.2.2.5
		sID['S-G-UUMO--'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.M1.OPERATIONS'];
		//1.X.3.1.2.2.6
		sID['S-G-UUMT--'] = icons['GROUND.ICON.MILITARY INTELLIGENCE'] + icons['GROUND.M1.TACTICAL EXPLOITATION'];
		//1.X.3.1.2.2.7
		sID['S-G-UUMQ--'] = icons['GROUND.ICON.INTERROGATION'];
		//1.X.3.1.2.2.8
		sID['S-G-UUMJ--'] = icons['GROUND.ICON.JOINT INTELLIGENCE CENTRE'];
		//1.X.3.1.2.3
		sID['S-G-UUL---'] = icons['GROUND.ICON.LAW ENFORCEMENT'] + icons['GROUND.ICON.MILITARY POLICE'];
		//1.X.3.1.2.3.1
		sID['S-G-UULS--'] = icons['GROUND.ICON.SHORE PATROL'];
		//1.X.3.1.2.3.2
		sID['S-G-UULM--'] = icons['GROUND.ICON.MILITARY POLICE'];
		//1.X.3.1.2.3.3
		sID['S-G-UULC--'] = icons['GROUND.ICON.LAW ENFORCEMENT'];
		//1.X.3.1.2.3.4
		sID['S-G-UULF--'] = translate(0,-20,icons['GROUND.ICON.SHORE PATROL']) + icons['GROUND.ICON.AVIATION FIXED WING'];		
		//1.X.3.1.2.3.5
		sID['S-G-UULD--'] = icons['GROUND.ICON.CRIMINAL INVESTIGATION DIVISION'];
		//1.X.3.1.2.4
		sID['S-G-UUS---'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'];
		//1.X.3.1.2.4.1
		sID['S-G-UUSA--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.AREA'];
		//1.X.3.1.2.4.2
		sID['S-G-UUSC--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.COMMUNICATIONS CONTINGENCY PACKAGE'];
		//1.X.3.1.2.4.2.1
		sID['S-G-UUSCL-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE'] + icons['GROUND.M2.AIRBORNE'];
		//1.X.3.1.2.4.3
		sID['S-G-UUSO--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.OPERATIONS'];
		//1.X.3.1.2.4.4
		sID['S-G-UUSF--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.FORWARD'];
		//1.X.3.1.2.4.5
		sID['S-G-UUSM--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.MOBILE SUBSCRIBER EQUIPMENT'];
		//1.X.3.1.2.4.5.1
		sID['S-G-UUSMS-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.SMALL EXTENSION NODE'];
		//1.X.3.1.2.4.5.2
		sID['S-G-UUSML-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.LARGE EXTENSION NODE'];
		//1.X.3.1.2.4.5.3
		sID['S-G-UUSMN-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.NODE CENTRE'];
		//1.X.3.1.2.4.6
		sID['S-G-UUSR--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.RADIO'];
		//1.X.3.1.2.4.6.1
		sID['S-G-UUSRS-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.TACTICAL SATELLITE'];
		//1.X.3.1.2.4.6.2
		sID['S-G-UUSRT-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.RADIO TELETYPE CENTRE'];
		//1.X.3.1.2.4.6.3
		sID['S-G-UUSRW-'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.RADIO RELAY'];
		//1.X.3.1.2.4.7
		sID['S-G-UUSS--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.M1.SIGNAL SUPPORT'];
		//1.X.3.1.2.4.8
		sID['S-G-UUSW--'] = icons['GROUND.ICON.FULLFRAME.SIGNAL'] + icons['GROUND.ICON.TELEPHONE SWITCH'];
		//1.X.3.1.2.4.9
		sID['S-G-UUSX--'] = icons['GROUND.ICON.ELECTRONIC RANGING'];
		//1.X.3.1.2.5
		sID['S-G-UUI---'] = icons['GROUND.ICON.INFORMATION OPERATIONS'];
		//1.X.3.1.2.6
		sID['S-G-UUP---'] = sID['S-G-UUX---'] = icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + icons['GROUND.M1.LANDING SUPPORT'];
		//1.X.3.1.2.7
		sID['S-G-UUE---'] = icons['GROUND.ICON.EXPLOSIVE ORDNANCE DISPOSAL'];
		//1.X.3.1.2.8
		sID['S-G-UUT---'] = icons['GROUND.ICON.TOPOGRAPHIC'];
		//1.X.3.1.2.9 WRONG SIDC IN STANDARD APP6B
		//sID['S-G-UU----'] = icons['GROUND.ICON.DOG'];
		//1.X.3.1.2.10
		sID['S-G-UUD---'] = icons['GROUND.ICON.DRILLING'];
		//1.X.3.1.3
		sID['S-G-US----'] = icons['GROUND.ICON.COMBAT SERVICE SUPPORT'];
		//1.X.3.1.3.1
		sID['S-G-USA---'] = icons['GROUND.ICON.ADMINISTRATIVE'];
		//1.X.3.1.3.1.1
		sID['S-G-USAT--'] = icons['GROUND.ICON.ADMINISTRATIVE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.2
		sID['S-G-USAC--'] = icons['GROUND.ICON.ADMINISTRATIVE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.3
		sID['S-G-USAJ--'] = icons['GROUND.ICON.JUDGE ADVOCATE GENERAL'];
		//1.X.3.1.3.1.3.1
		sID['S-G-USAJT-'] = icons['GROUND.ICON.JUDGE ADVOCATE GENERAL'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.3.2
		sID['S-G-USAJC-'] = icons['GROUND.ICON.JUDGE ADVOCATE GENERAL'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.4
		sID['S-G-USAO--'] = icons['GROUND.ICON.POSTAL'];
		//1.X.3.1.3.1.4.1
		sID['S-G-USAOT-'] = icons['GROUND.ICON.POSTAL'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.4.2
		sID['S-G-USAOC-'] = icons['GROUND.ICON.POSTAL'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.5
		sID['S-G-USAF--'] = icons['GROUND.ICON.FINANCE'];
		//1.X.3.1.3.1.5.1
		sID['S-G-USAFT-'] = icons['GROUND.ICON.FINANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.5.2
		sID['S-G-USAFC-'] = icons['GROUND.ICON.FINANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.6
		sID['S-G-USAS--'] = icons['GROUND.ICON.PERSONNEL SERVICES'];		
		//1.X.3.1.3.1.6.1
		sID['S-G-USAST-'] = icons['GROUND.ICON.PERSONNEL SERVICES'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.6.2
		sID['S-G-USASC-'] = icons['GROUND.ICON.PERSONNEL SERVICES'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.7
		sID['S-G-USAM--'] = icons['GROUND.ICON.MORTUARY AFFAIRS'];		
		//1.X.3.1.3.1.7.1
		sID['S-G-USAMT-'] = icons['GROUND.ICON.MORTUARY AFFAIRS'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.7.2
		sID['S-G-USAMC-'] = icons['GROUND.ICON.MORTUARY AFFAIRS'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.8
		sID['S-G-USAR--'] = icons['GROUND.ICON.RELIGIOUS SUPPORT'];		
		//1.X.3.1.3.1.8.1
		sID['S-G-USART-'] = icons['GROUND.ICON.RELIGIOUS SUPPORT'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.8.2
		sID['S-G-USARC-'] = icons['GROUND.ICON.RELIGIOUS SUPPORT'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.9
		sID['S-G-USAP--'] = icons['GROUND.ICON.PUBLIC AFFAIRS'];			
		//1.X.3.1.3.1.9.1
		sID['S-G-USAPT-'] = icons['GROUND.ICON.PUBLIC AFFAIRS'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];	
		//1.X.3.1.3.1.9.2
		sID['S-G-USAPC-'] = icons['GROUND.ICON.PUBLIC AFFAIRS'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.9.3
		sID['S-G-USAPB-'] = icons['GROUND.ICON.PUBLIC AFFAIRS BROADCAST'];		
		//1.X.3.1.3.1.9.3.1
		sID['S-G-USAPBT'] = icons['GROUND.ICON.PUBLIC AFFAIRS BROADCAST'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.9.3.2
		sID['S-G-USAPBC'] = icons['GROUND.ICON.PUBLIC AFFAIRS BROADCAST'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.9.4
		sID['S-G-USAPM-'] = icons['GROUND.ICON.JOINT INFORMATION BUREAU'];		
		//1.X.3.1.3.1.9.4.1
		sID['S-G-USAPMT'] = icons['GROUND.ICON.JOINT INFORMATION BUREAU'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.9.4.2
		sID['S-G-USAPMC'] = icons['GROUND.ICON.JOINT INFORMATION BUREAU'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.10
		sID['S-G-USAX--'] = icons['GROUND.ICON.REPLACEMENT HOLDING UNIT'];		
		//1.X.3.1.3.1.10.1
		sID['S-G-USAXT-'] = icons['GROUND.ICON.REPLACEMENT HOLDING UNIT'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.10.2
		sID['S-G-USAXC-'] = icons['GROUND.ICON.REPLACEMENT HOLDING UNIT'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.11
		sID['S-G-USAL--'] = icons['GROUND.ICON.LABOUR'];		
		//1.X.3.1.3.1.11
		sID['S-G-USALT-'] = icons['GROUND.ICON.LABOUR'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.11
		sID['S-G-USALC-'] = icons['GROUND.ICON.LABOUR'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.12
		sID['S-G-USAW--'] = icons['GROUND.ICON.MORALE, WELFARE, AND RECREATION'];		
		//1.X.3.1.3.1.12.1
		sID['S-G-USAWT-'] = icons['GROUND.ICON.MORALE, WELFARE, AND RECREATION'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.12.2
		sID['S-G-USAWC-'] = icons['GROUND.ICON.MORALE, WELFARE, AND RECREATION'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.1.13
		sID['S-G-USAQ--'] = icons['GROUND.ICON.QUARTERMASTER'];
		//1.X.3.1.3.1.13.1
		sID['S-G-USAQT-'] = icons['GROUND.ICON.QUARTERMASTER'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.1.13.2
		sID['S-G-USAQC-'] = icons['GROUND.ICON.QUARTERMASTER'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
		//1.X.3.1.3.2
		sID['S-G-USM---'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'];		
		//1.X.3.1.3.2.1
		sID['S-G-USMT--'] = icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'];		
		//1.X.3.1.3.2.2
		sID['S-G-USMC--'] = icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'];		
		//1.X.3.1.3.2.3
		sID['S-G-USMM--'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'];		
		//1.X.3.1.3.2.3.1
		sID['S-G-USMMT-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'] + icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'];		
		//1.X.3.1.3.2.3.2
		sID['S-G-USMMC-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'] + icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'];		
		//1.X.3.1.3.2.4
		sID['S-G-USMV--'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.M2.VETERINARY'];
		//1.X.3.1.3.2.4.1
		sID['S-G-USMVT-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'] + icons['GROUND.M2.VETERINARY'];
		//1.X.3.1.3.2.4.2
		sID['S-G-USMVC-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'] + icons['GROUND.M2.VETERINARY'];	
		//1.X.3.1.3.2.5
		sID['S-G-USMD--'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.M2.DENTAL'];
		//1.X.3.1.3.2.5.1
		sID['S-G-USMDT-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'] + icons['GROUND.M2.DENTAL'];
		//1.X.3.1.3.2.5.2
		sID['S-G-USMDC-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'] + icons['GROUND.M2.DENTAL'];	
		//1.X.3.1.3.2.6
		sID['S-G-USMP--'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'] + icons['GROUND.M2.PSYCHOLOGICAL'];
		//1.X.3.1.3.2.6.1
		sID['S-G-USMPT-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'] + icons['GROUND.M2.PSYCHOLOGICAL'];
		//1.X.3.1.3.2.6.2
		sID['S-G-USMPC-'] = icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'] + icons['GROUND.M2.PSYCHOLOGICAL'];			
		//1.X.3.1.3.3
		sID['S-G-USS---'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'];		
		//1.X.3.1.3.3.1
		sID['S-G-USST--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'];			
		//1.X.3.1.3.3.2
		sID['S-G-USSC--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'];			
		//1.X.3.1.3.3.3
		sID['S-G-USS1--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS I'];		
		//1.X.3.1.3.3.3.1
		sID['S-G-USS1T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS I'];		
		//1.X.3.1.3.3.3.2
		sID['S-G-USS1C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS I'];	
		//1.X.3.1.3.3.4
		sID['S-G-USS2--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS II'];		
		//1.X.3.1.3.3.4.1
		sID['S-G-USS2T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS II'];		
		//1.X.3.1.3.3.4.2
		sID['S-G-USS2C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS II'];	
		//1.X.3.1.3.3.5
		sID['S-G-USS3--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS III'];		
		//1.X.3.1.3.3.5.1
		sID['S-G-USS3T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS III'];		
		//1.X.3.1.3.3.5.2
		sID['S-G-USS3C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS III'];	
		//1.X.3.1.3.3.5.3
		sID['S-G-USS3A-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS III'] + translate(25,5,scale(0.5,icons['GROUND.ICON.AVIATION ROTARY WING']));		
		//1.X.3.1.3.3.5.3.1
		sID['S-G-USS3AT'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS III'] + translate(25,5,scale(0.5,icons['GROUND.ICON.AVIATION ROTARY WING']));
		//1.X.3.1.3.3.5.3.2
		sID['S-G-USS3AC'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS III'] + translate(25,5,scale(0.5,icons['GROUND.ICON.AVIATION ROTARY WING']));
		//1.X.3.1.3.3.6
		sID['S-G-USS4--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS IV'];		
		//1.X.3.1.3.3.6.1
		sID['S-G-USS4T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS IV'];		
		//1.X.3.1.3.3.6.2
		sID['S-G-USS4C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS IV'];			
		//1.X.3.1.3.3.7
		sID['S-G-USS5--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS V'];		
		//1.X.3.1.3.3.7.1
		sID['S-G-USS5T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS V'];		
		//1.X.3.1.3.3.7.2
		sID['S-G-USS5C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS V'];		
		//1.X.3.1.3.3.8
		sID['S-G-USS6--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS VI'];		
		//1.X.3.1.3.3.8.1
		sID['S-G-USS6T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS VI'];		
		//1.X.3.1.3.3.8.2
		sID['S-G-USS6C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS VI'];		
		//1.X.3.1.3.3.9
		sID['S-G-USS7--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS VII'];		
		//1.X.3.1.3.3.9.1
		sID['S-G-USS7T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS VII'];		
		//1.X.3.1.3.3.9.2
		sID['S-G-USS7C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS VII'];		
		//1.X.3.1.3.3.10
		sID['S-G-USS8--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS VIII'];		
		//1.X.3.1.3.3.10.1
		sID['S-G-USS8T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS VIII'];
		//1.X.3.1.3.3.10.2
		sID['S-G-USS8C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS VIII'];
		//1.X.3.1.3.3.11
		sID['S-G-USS9--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS IX'];		
		//1.X.3.1.3.3.11.1
		sID['S-G-USS9T-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS IX'];		
		//1.X.3.1.3.3.11.2
		sID['S-G-USS9C-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS IX'];		
		//1.X.3.1.3.3.12
		sID['S-G-USSX--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS X'];		
		//1.X.3.1.3.3.12.1
		sID['S-G-USSXT-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS X'];		
		//1.X.3.1.3.3.12.2
		sID['S-G-USSXC-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS X'];		
		//1.X.3.1.3.3.13
		sID['S-G-USSL--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.LAUNDRY/BATH'];		
		//1.X.3.1.3.3.13.1
		sID['S-G-USSLT-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.LAUNDRY/BATH'];		
		//1.X.3.1.3.3.13.2
		sID['S-G-USSLC-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.LAUNDRY/BATH'];
		//1.X.3.1.3.3.14
		sID['S-G-USSW--'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.WATER'];		
		//1.X.3.1.3.3.14.1
		sID['S-G-USSWT-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.WATER'];		
		//1.X.3.1.3.3.14.2
		sID['S-G-USSWC-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.WATER'];		
		//1.X.3.1.3.3.14.3
		sID['S-G-USSWP-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.WATER PURIFICATION'];		
		//1.X.3.1.3.3.14.3.1
		sID['S-G-USSWPT'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.WATER PURIFICATION'];		
		//1.X.3.1.3.3.14.3.2
		sID['S-G-USSWPC'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.WATER PURIFICATION'];		
		//1.X.3.1.3.3.15  ANOTHER SIDC THAT DOESN'T WORK OUT...
		//sID['S-G-US----'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.WATER PURIFICATION'];		
		//1.X.3.1.3.4
		sID['S-G-UST---'] = icons['GROUND.ICON.TRANSPORTATION'];		
		//1.X.3.1.3.4.1
		sID['S-G-USTT--'] = icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'];		
		//1.X.3.1.3.4.2
		sID['S-G-USTC--'] = icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'];			
		//1.X.3.1.3.4.3
		sID['S-G-USTM--'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.MOVEMENT CONTROL CENTRE'];		
		//1.X.3.1.3.4.3.1
		sID['S-G-USTMT-'] = icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.MOVEMENT CONTROL CENTRE'];	
		//1.X.3.1.3.4.3.2
		sID['S-G-USTMC-'] = icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.MOVEMENT CONTROL CENTRE'];
		//1.X.3.1.3.4.4
		sID['S-G-USTR--'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.RAILROAD'];		
		//1.X.3.1.3.4.4.1
		sID['S-G-USTRT-'] = icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.RAILROAD'];	
		//1.X.3.1.3.4.4.2
		sID['S-G-USTRC-'] = icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.RAILROAD'];		
		//1.X.3.1.3.4.5
		sID['S-G-USTS--'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.NAVAL'];		
		//1.X.3.1.3.4.5.1
		sID['S-G-USTST-'] = icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.NAVAL'];	
		//1.X.3.1.3.4.5.2
		sID['S-G-USTSC-'] = icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.NAVAL'];		
		//1.X.3.1.3.4.6
		sID['S-G-USTA--'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.AIRPORT OF DEBARKATION'];		
		//1.X.3.1.3.4.6.1
		sID['S-G-USTAT-'] = icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.AIRPORT OF DEBARKATION'];	
		//1.X.3.1.3.4.6.2
		sID['S-G-USTAC-'] = icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.AIRPORT OF DEBARKATION'];				
		//1.X.3.1.3.4.7
		sID['S-G-USTI--'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.MISSILE'];		
		//1.X.3.1.3.4.7.1
		sID['S-G-USTIT-'] = icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.MISSILE'];	
		//1.X.3.1.3.4.7.2
		sID['S-G-USTIC-'] = icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.M1.MISSILE'];	
		//1.X.3.1.3.4.8 SIDC BROKEN
		//sID['S-G-UST---']
		//1.X.3.1.3.5
		sID['S-G-USX---'] = icons['GROUND.ICON.MAINTENANCE'];		
		//1.X.3.1.3.5.1
		sID['S-G-USXT--'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
		//1.X.3.1.3.5.2
		sID['S-G-USXC--'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];	
		//1.X.3.1.3.5.3
		sID['S-G-USXH--'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M2.HEAVY'];
		//1.X.3.1.3.5.3.1
		sID['S-G-USXHT-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.M2.HEAVY'];
		//1.X.3.1.3.5.3.2
		sID['S-G-USXHC-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.M2.HEAVY'];
		//1.X.3.1.3.5.4
		sID['S-G-USXR--'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M2.RAILROAD'];
		//1.X.3.1.3.5.4.1
		sID['S-G-USXRT-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.M2.RAILROAD'];
		//1.X.3.1.3.5.4.2
		sID['S-G-USXRC-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.M2.RAILROAD'];		
		//1.X.3.1.3.5.5
		sID['S-G-USXO--'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M2.AMMUNITION'];
		//1.X.3.1.3.5.5.1
		sID['S-G-USXOT-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.M2.AMMUNITION'];
		//1.X.3.1.3.5.5.2
		sID['S-G-USXOC-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.M2.AMMUNITION'];
		//1.X.3.1.3.5.5.3
		sID['S-G-USXOM-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M1.MISSILE'];
		//1.X.3.1.3.5.5.3.1
		sID['S-G-USXOMT'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.M1.MISSILE'];
		//1.X.3.1.3.5.5.3.2
		sID['S-G-USXOMC'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.M1.MISSILE'];
		//1.X.3.1.3.5.6
		sID['S-G-USXE--'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M1.ELECTRO-OPTICAL'];
		//1.X.3.1.3.5.6.1
		sID['S-G-USXET-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] + icons['GROUND.M1.ELECTRO-OPTICAL'];
		//1.X.3.1.3.5.6.2
		sID['S-G-USXEC-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] + icons['GROUND.M1.ELECTRO-OPTICAL'];
		//1.X.3.1.3.5.7
		sID['S-G-USXBDR'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M2.BATTLE DAMAGE REPAIR'];
		//1.X.3.1.3.5.8
		sID['S-G-USXPM-'] = icons['GROUND.ICON.MAINTENANCE'] + icons['GROUND.M2.PREVENTIVE MAINTENANCE'];
		//1.X.3.1.3.6
		sID['S-G-USXP--'] = icons['GROUND.ICON.PIPELINE'];
		//1.X.3.1.3.7
		sID['S-G-USXEP-'] = icons['GROUND.ICON.ENVIRONMENTAL PROTECTION'];
		
		
		//1.X.3.1.4
		sID['S-G-UH----'] = '';
		//1.X.3.1.5 BROKEN SIDC
		sID['S-G-UH1---'] = icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
		//1.X.3.1.6 BROKEN SIDC
		sID['S-G-UH2---'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
		//1.X.3.1.7
		sID['S-G-UHGL--'] = sID['S-G-GL----'] = icons['GROUND.ICON.LIAISON'];
		
		//1.X.3.2
		sID['S-G-E-----'] = '';		
		//1.X.3.2.1.1
		sID['S-G-EWM---'] = icons['GROUND.EQUIPMENT.MISSILE LAUNCHER'];	
		//1.X.3.2.1.1.1
		sID['S-G-EWMA--'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'];
		//1.X.3.2.1.1.1.1
		sID['S-G-EWMAS-'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//N/A
		sID['S-G-EWMASR'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.SHORT RANGE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'];		
		//N/A
		sID['S-G-EWMASE'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.SHORT RANGE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'];			
		//1.X.3.2.1.1.1.2
		sID['S-G-EWMAI-'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//N/A
		sID['S-G-EWMAIR'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'];	
		//N/A
		sID['S-G-EWMAIE'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'];
		//1.X.3.2.1.1.1.3
		sID['S-G-EWMAL-'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//N/A
		sID['S-G-EWMALR'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.LONG RANGE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'];	
		//N/A
		sID['S-G-EWMALE'] = icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] + icons['GROUND.EQUIPMENT.LONG RANGE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'];
		//1.X.3.2.1.1.1.4
		sID['S-G-EWMAT-'] = translate(0,-15,scale(0.7,icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'])) + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'];
		//N/A
		sID['S-G-EWMATR'] = translate(0,-15,scale(0.7,icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'])) + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'];
		//N/A
		sID['S-G-EWMATE'] = translate(0,-15,scale(0.7,icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'])) + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'];
		//1.X.3.2.1.1.2
		sID['S-G-EWMS--'] = icons['GROUND.EQUIPMENT.SURFACE-TO-SURFACE MISSILE LAUNCHER'];
		//1.X.3.2.1.1.2.1
		sID['S-G-EWMSS-'] = icons['GROUND.EQUIPMENT.SURFACE-TO-SURFACE MISSILE LAUNCHER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.1.2.2
		sID['S-G-EWMSI-'] = icons['GROUND.EQUIPMENT.SURFACE-TO-SURFACE MISSILE LAUNCHER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.1.2.3
		sID['S-G-EWMSL-'] = icons['GROUND.EQUIPMENT.SURFACE-TO-SURFACE MISSILE LAUNCHER'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.1.3
		sID['S-G-EWMT--'] = icons['GROUND.EQUIPMENT.ANTITANK MISSILE LAUNCHER'];		
		//1.X.3.2.1.1.3.1
		sID['S-G-EWMTL-'] = icons['GROUND.EQUIPMENT.ANTITANK MISSILE LAUNCHER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.1.3.2
		sID['S-G-EWMTM-'] = icons['GROUND.EQUIPMENT.ANTITANK MISSILE LAUNCHER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.1.3.3
		sID['S-G-EWMTH-'] = icons['GROUND.EQUIPMENT.ANTITANK MISSILE LAUNCHER'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.2
		sID['S-G-EWS---'] = icons['GROUND.EQUIPMENT.SINGLE ROCKET LAUNCHER'];		
		//1.X.3.2.1.2.1
		sID['S-G-EWSL--'] = icons['GROUND.EQUIPMENT.SINGLE ROCKET LAUNCHER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.2.2
		sID['S-G-EWSM--'] = icons['GROUND.EQUIPMENT.SINGLE ROCKET LAUNCHER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.2.3
		sID['S-G-EWSH--'] = icons['GROUND.EQUIPMENT.SINGLE ROCKET LAUNCHER'] + icons['GROUND.EQUIPMENT.LONG RANGE'];		
		//1.X.3.2.1.3
		sID['S-G-EWX---'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'];		
		//1.X.3.2.1.3.1
		sID['S-G-EWXL--'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] + translate(0,10,icons['GROUND.EQUIPMENT.SHORT RANGE']);
		//1.X.3.2.1.3.2
		sID['S-G-EWXM--'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] + translate(0,10,icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE']);
		//1.X.3.2.1.3.3
		sID['S-G-EWXH--'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] + translate(0,10,icons['GROUND.EQUIPMENT.LONG RANGE']);		
		//1.X.3.2.1.4
		sID['S-G-EWT---'] = icons['GROUND.EQUIPMENT.ANTITANK ROCKET LAUNCHER'];		
		//1.X.3.2.1.4.1
		sID['S-G-EWTL--'] = icons['GROUND.EQUIPMENT.ANTITANK ROCKET LAUNCHER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.4.2
		sID['S-G-EWTM--'] = icons['GROUND.EQUIPMENT.ANTITANK ROCKET LAUNCHER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.4.3
		sID['S-G-EWTH--'] = icons['GROUND.EQUIPMENT.ANTITANK ROCKET LAUNCHER'] + icons['GROUND.EQUIPMENT.LONG RANGE'];		
		//1.X.3.2.1.5
		sID['S-G-EWR---'] = icons['GROUND.EQUIPMENT.RIFLE'];		
		//1.X.3.2.1.5.1
		sID['S-G-EWRR--'] = icons['GROUND.EQUIPMENT.RIFLE'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.5.2
		sID['S-G-EWRL--'] = icons['GROUND.EQUIPMENT.RIFLE'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.5.3
		sID['S-G-EWRH--'] = icons['GROUND.EQUIPMENT.RIFLE'] + icons['GROUND.EQUIPMENT.LONG RANGE'];		
		//1.X.3.2.1.6
		sID['S-G-EWZ---'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'];		
		//1.X.3.2.1.6.1
		sID['S-G-EWZL--'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] + translate(0,20,icons['GROUND.EQUIPMENT.SHORT RANGE']);
		//1.X.3.2.1.6.2
		sID['S-G-EWZM--'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] + translate(0,20,icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE']);
		//1.X.3.2.1.6.3
		sID['S-G-EWZH--'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] + translate(0,20,icons['GROUND.EQUIPMENT.LONG RANGE']);		
		//1.X.3.2.1.7
		sID['S-G-EWO---'] = icons['GROUND.EQUIPMENT.MORTAR'];		
		//1.X.3.2.1.7.1
		sID['S-G-EWOL--'] = icons['GROUND.EQUIPMENT.MORTAR'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.7.2
		sID['S-G-EWOM--'] = icons['GROUND.EQUIPMENT.MORTAR'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.7.3
		sID['S-G-EWOH--'] = icons['GROUND.EQUIPMENT.MORTAR'] + icons['GROUND.EQUIPMENT.LONG RANGE'];			
		//1.X.3.2.1.8
		sID['S-G-EWH---'] = icons['GROUND.EQUIPMENT.HOWITZER'];		
		//1.X.3.2.1.8.1
		sID['S-G-EWHL--'] = icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.8.1.1
		sID['S-G-EWHLS-'] = translate(0,-15,scale(0.8,icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.8.2
		sID['S-G-EWHM--'] = icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.8.2.1
		sID['S-G-EWHMS-'] = translate(0,-15,scale(0.8,icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.8.3
		sID['S-G-EWHH--'] = icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.8.3.1
		sID['S-G-EWHHS-'] = translate(0,-15,scale(0.8,icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.LONG RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.9
		sID['S-G-EWG---'] = icons['GROUND.EQUIPMENT.ANTITANK GUN'];		
		//1.X.3.2.1.9.1
		sID['S-G-EWGL--'] = icons['GROUND.EQUIPMENT.ANTITANK GUN'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.9.2
		sID['S-G-EWGM--'] = icons['GROUND.EQUIPMENT.ANTITANK GUN'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.9.3
		sID['S-G-EWGH--'] = icons['GROUND.EQUIPMENT.ANTITANK GUN'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.9.4
		sID['S-G-EWGR--'] = icons['GROUND.EQUIPMENT.RECOILLESS GUN'];
		//1.X.3.2.1.10
		sID['S-G-EWD---'] = icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'];		
		//1.X.3.2.1.10.1
		sID['S-G-EWDL--'] = icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.10.1.1
		sID['S-G-EWDLS-'] = translate(0,-15,scale(0.8,icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.SHORT RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.10.2
		sID['S-G-EWDM--'] = icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.10.2.1
		sID['S-G-EWDMS-'] = translate(0,-15,scale(0.8,icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.10.3
		sID['S-G-EWDH--'] = icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.10.3.1
		sID['S-G-EWDHS-'] = translate(0,-15,scale(0.8,icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.LONG RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.11
		sID['S-G-EWA---'] = icons['GROUND.EQUIPMENT.AIR DEFENCE GUN'];		
		//1.X.3.2.1.11.1
		sID['S-G-EWAL--'] = icons['GROUND.EQUIPMENT.AIR DEFENCE GUN'] + icons['GROUND.EQUIPMENT.SHORT RANGE'];
		//1.X.3.2.1.11.2
		sID['S-G-EWAM--'] = icons['GROUND.EQUIPMENT.AIR DEFENCE GUN'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.11.3
		sID['S-G-EWAH--'] = icons['GROUND.EQUIPMENT.AIR DEFENCE GUN'] + icons['GROUND.EQUIPMENT.LONG RANGE'];

		//1.X.3.2.2
		sID['S-G-EV----'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'];
		//1.X.3.2.2.1
		sID['S-G-EVA---'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.ARMOURED VEHICLE'];
		//1.X.3.2.2.1.1
		sID['S-G-EVAT--'] = icons['GROUND.EQUIPMENT.TANK'];
		//1.X.3.2.2.1.1.1
		sID['S-G-EVATL-'] = icons['GROUND.EQUIPMENT.TANK'] + icons['GROUND.EQUIPMENT.LIGHT TANK'];
		//1.X.3.2.2.1.1.1.1
		sID['S-G-EVATLR'] = sID['S-G-EVATW-'] = icons['GROUND.EQUIPMENT.TANK'] + icons['GROUND.EQUIPMENT.LIGHT TANK'] + icons['GROUND.EQUIPMENT.TANK RECOVERY VEHICLE'];
		//1.X.3.2.2.1.1.2
		sID['S-G-EVATM-'] = icons['GROUND.EQUIPMENT.TANK'] + icons['GROUND.EQUIPMENT.MEDIUM TANK'];
		//1.X.3.2.2.1.1.2.1
		sID['S-G-EVATMR'] = sID['S-G-EVATX-'] = icons['GROUND.EQUIPMENT.TANK'] + icons['GROUND.EQUIPMENT.MEDIUM TANK'] + icons['GROUND.EQUIPMENT.TANK RECOVERY VEHICLE'];
		//1.X.3.2.2.1.1.3
		sID['S-G-EVATH-'] = icons['GROUND.EQUIPMENT.TANK'] + icons['GROUND.EQUIPMENT.HEAVY TANK'];
		//1.X.3.2.2.1.1.3.1
		sID['S-G-EVATHR'] = sID['S-G-EVATY-'] = icons['GROUND.EQUIPMENT.TANK'] + icons['GROUND.EQUIPMENT.HEAVY TANK'] + icons['GROUND.EQUIPMENT.TANK RECOVERY VEHICLE'];
		//1.X.3.2.2.1.2
		sID['S-G-EVAA--'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'];
		//1.X.3.2.2.1.2.1
		sID['S-G-EVAAR-'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + icons['GROUND.EQUIPMENT.TANK RECOVERY VEHICLE'];
		//1.X.3.2.2.1.3
		sID['S-G-EVAI--'] = icons['GROUND.EQUIPMENT.ARMOURED FIGHTING VEHICLE'];
		//1.X.3.2.2.1.4
		sID['S-G-EVAC--'] = icons['GROUND.EQUIPMENT.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL'];
		//1.X.3.2.2.1.5
		sID['S-G-EVAS--'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE'];
		//1.X.3.2.2.1.6
		sID['S-G-EVAL--'] = icons['GROUND.EQUIPMENT.ARMOURED FIGHTING VEHICLE'] + icons['GROUND.EQUIPMENT.CROSS-COUNTRY'];
		//1.X.3.2.2.2
		sID['S-G-EVU---'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'];
		//1.X.3.2.2.2.1
		sID['S-G-EVUB--'] = icons['GROUND.EQUIPMENT.BUS'];
		//1.X.3.2.2.2.2
		sID['S-G-EVUS--'] = icons['GROUND.EQUIPMENT.SEMI-TRAILER TRUCK'];
		//N/A
		sID['S-G-EVUSL-'] = icons['GROUND.EQUIPMENT.SEMI-TRAILER TRUCK'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE LIGHT'];
		///N/A
		sID['S-G-EVUSM-'] = icons['GROUND.EQUIPMENT.SEMI-TRAILER TRUCK'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE MEDIUM'];
		///N/A
		sID['S-G-EVUSH-'] = icons['GROUND.EQUIPMENT.SEMI-TRAILER TRUCK'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE HEAVY'];
		//1.X.3.2.2.2.3
		sID['S-G-EVUL--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'];
		//1.X.3.2.2.2.4
		sID['S-G-EVUX--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CROSS-COUNTRY'];
		//1.X.3.2.2.2.5
		sID['S-G-EVUR--'] = icons['GROUND.EQUIPMENT.WATER VEHICLE'];
		//N/A
		sID['S-G-EVUT--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK'];
		//N/A
		sID['S-G-EVUTL-'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK.LIGHT'];
		//N/A
		sID['S-G-EVUTH-'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE.TOW TRUCK.HEAVY'];
		//N/A
		sID['S-G-EVUA--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.MEDICAL EVACUATION'];
		//N/A
		sID['S-G-EVUAA-'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + icons['GROUND.EQUIPMENT.MEDICAL EVACUATION'];
		//1.X.3.2.2.3
		sID['S-G-EVE---'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + scale(0.7,icons['GROUND.ICON.ENGINEER']);
		//1.X.3.2.2.3.1
		sID['S-G-EVEB--'] = icons['GROUND.EQUIPMENT.BRIDGE'];
		//1.X.3.2.2.3.2
		sID['S-G-EVEE--'] = icons['GROUND.EQUIPMENT.EARTHMOVER'];
		//.X.3.2.2.3.2 .1 WRONG SIDC
		//sID['S-G-EVEE--'] = '';
		//1.X.3.2.2.3.3
		sID['S-G-EVEC--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] + scale(0.6,icons['GROUND.ICON.ENGINEER']);
		//1.X.3.2.2.3.4
		sID['S-G-EVEM--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.MINE LAYING VEHICLE'];
		//1.X.3.2.2.3.4.1
		//APP6		
		sID['S-G-EVEMA-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + icons['GROUND.EQUIPMENT.TANK'];
		//2525
		sID['S-G-EVEMV-'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + icons['GROUND.EQUIPMENT.ARMORED CARRIER WITH VOLCANO'];
		//1.X.3.2.2.3.4.2
		//APP6
		sID['S-G-EVEMT-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + translate(0,-10,icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY']);
		//2525
		sID['S-G-EVEML-'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] + icons['GROUND.EQUIPMENT.ARMORED CARRIER WITH VOLCANO'];
		//1.X.3.2.2.3.5
		sID['S-G-EVEA--'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'];
		//1.X.3.2.2.3.5.1
		sID['S-G-EVEAA-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + icons['GROUND.EQUIPMENT.TANK'];
		//1.X.3.2.2.3.5.2
		sID['S-G-EVEAT-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + translate(0,-10,icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY']);
		//1.X.3.2.2.3.4.5
		sID['S-G-EVEMSM'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + icons['GROUND.EQUIPMENT.MINE SCATTERABLE'];
		//1.X.3.2.2.3.5
		sID['S-G-EVED--'] = icons['GROUND.EQUIPMENT.DOZER'];
		//N/A
		sID['S-G-EVEDA-'] = icons['GROUND.EQUIPMENT.DOZER ARMORED'];
		//N/A
		sID['S-G-EVES--'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + scale(0.6,icons['GROUND.ICON.ENGINEER']);
		//N/A
		sID['S-G-EVER--'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + scale(0.6,icons['GROUND.ICON.ENGINEER']) + icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE'];
		//N/A
		sID['S-G-EVEH--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE BACKHOE'];
		//N/A
		sID['S-G-EVEF--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CROSS-COUNTRY'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE FERRY TRANSPORTER'];
		//1.X.3.2.2.3.6
		sID['S-G-EVD---'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CROSS-COUNTRY'] + scale(0.7,icons['GROUND.ICON.DRILLING']);
		//1.X.3.2.2.4
		sID['S-G-EVT---'] = icons['GROUND.EQUIPMENT.TRAIN LOCOMOTIVE'];
		//1.X.3.2.2.5
		sID['S-G-EVC---'] = icons['AIR.ICON.CIVILIAN'];
		//N/A
		sID['S-G-EVCA--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.AUTOMOBILE'];
		//N/A
		sID['S-G-EVCAL-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.AUTOMOBILE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'];		
		//N/A
		sID['S-G-EVCAM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.AUTOMOBILE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'];		
		//N/A
		sID['S-G-EVCAH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.AUTOMOBILE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'];		
		//N/A
		sID['S-G-EVCO--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'];		
		//N/A
		sID['S-G-EVCOL-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'];		
		//N/A
		sID['S-G-EVCOM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'];		
		//N/A
		sID['S-G-EVCOH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'];
		//N/A
		sID['S-G-EVCM--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE'];		
		//N/A
		sID['S-G-EVCML-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'];		
		//N/A
		sID['S-G-EVCMM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'];		
		//N/A
		sID['S-G-EVCMH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'];
		//N/A
		sID['S-G-EVCU--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'];		
		//N/A
		sID['S-G-EVCUL-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'];		
		//N/A
		sID['S-G-EVCUM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'];		
		//N/A
		sID['S-G-EVCUH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'];
		//N/A
		sID['S-G-EVCJ--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.JEEP TYPE VEHICLE'];		
		//N/A
		sID['S-G-EVCJL-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.JEEP TYPE VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'];		
		//N/A
		sID['S-G-EVCJM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.JEEP TYPE VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'];		
		//N/A
		sID['S-G-EVCJH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.JEEP TYPE VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'];																								
		//N/A
		sID['S-G-EVCT--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];		
		//N/A
		sID['S-G-EVCTL-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVCTM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVCTH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVCF--'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVCFL-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVCFM-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVCFH-'] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'] + icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'];
		//N/A
		sID['S-G-EVM---'] = icons['GROUND.EQUIPMENT.PACK ANIMAL'];
		//N/A
		sID['S-G-EVS---'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.MISSILE SUPPORT'];
		//N/A
		sID['S-G-EVST--'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.MISSILE TRANSLOADER'];
		//N/A
		sID['S-G-EVSR--'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.MISSILE TRANSPORTER'];
		//N/A
		sID['S-G-EVSC--'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.MISSILE CRANE/LOADING DEVICE'];
		//N/A
		sID['S-G-EVSP--'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.MISSILE PROPELLANT TRANSPORTER'];
		//N/A
		sID['S-G-EVSW--'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + icons['GROUND.EQUIPMENT.MISSILE WARHEAD TRANSPORTER'];
		//1.X.3.2.3
		sID['S-G-ES----'] = icons['GROUND.EQUIPMENT.SENSOR'];
		//1.X.3.2.3.1
		sID['S-G-ESR---'] = icons['GROUND.EQUIPMENT.RADAR'];
		//1.X.3.2.3.2
		sID['S-G-ESE---'] = icons['GROUND.EQUIPMENT.SENSOR EMPLACED'];
		//N/A
		sID['S-G-EXI---'] = icons['GROUND.EQUIPMENT.IMPROVISED EXPLOSIVE DEVICE'];
		//1.X.3.2.4.1
		sID['S-G-EXL---'] = icons['GROUND.EQUIPMENT.LASER'];
		//1.X.3.2.4.2
		sID['S-G-EXN---'] = icons['GROUND.EQUIPMENT.CBRN EQUIPMENT'];
		//1.X.3.2.4.3
		sID['S-G-EXF---'] = icons['GROUND.EQUIPMENT.FLAME THROWER'];
		//1.X.3.2.4.4
		sID['S-G-EXM---'] = icons['GROUND.EQUIPMENT.LAND MINES'];
		//1.X.3.2.4.4.1
		sID['S-G-EXMC--'] = icons['GROUND.EQUIPMENT.ANTIPERSONNEL LAND MINE'];
		//1.X.3.2.4.4.2
		sID['S-G-EXML--'] = icons['GROUND.EQUIPMENT.ANTIPERSONNEL LAND MINE LESS THAN LETHAL'];

		//1.X.3.3
		sID['S-G-I-----'] = '';
		//1.X.3.3.1
		sID['S-G-IR----'] = icons['GROUND.INSTALLATION.ICON.RAW MATERIAL PRODUCTION/STORAGE'];
		//1.X.3.3.1.1
		sID['S-G-IRM---'] = icons['GROUND.INSTALLATION.ICON.MINE'];	
		//1.X.3.3.1.2
		sID['S-G-IRP---'] = icons['GROUND.ICON.FULLFRAME.CLASS III'];	
		//1.X.3.3.1.3
		sID['S-G-IRN---'] = icons['GROUND.ICON.CBRN'];		
		//1.X.3.3.1.3.1
		sID['S-G-IRNB--'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.BIOLOGICAL'];			
		//1.X.3.3.1.3.2
		sID['S-G-IRNC--'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.CHEMICAL'];			
		//1.X.3.3.1.3.3
		sID['S-G-IRNN--'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.NUCLEAR'];			
		//1.X.3.3.2
		sID['S-G-IP----'] = icons['GROUND.INSTALLATION.ICON.PROCESSING FACILITY'];		
		//1.X.3.3.2.1
		sID['S-G-IPD---'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.M1.DECONTAMINATION'];			
		//1.X.3.3.3
		sID['S-G-IE----'] = icons['GROUND.ICON.FULLFRAME.CLASS IX'];			
		//1.X.3.3.4
		sID['S-G-IU----'] = icons['GROUND.INSTALLATION.ICON.UTILITY FACILITY'];		
		//1.X.3.3.4.1
		sID['S-G-IUR---'] = icons['GROUND.INSTALLATION.ICON.RESEARCH'];		
		//1.X.3.3.4.2
		sID['S-G-IUT---'] = icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS'];			
		//1.X.3.3.4.3
		sID['S-G-IUE---'] = icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER'];
		//1.X.3.3.4.3.1
		sID['S-G-IUEN--'] = icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER'] + icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER NUCLEAR'];
		//1.X.3.3.4.3.2
		sID['S-G-IUED--'] = icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER'] + icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER DAM'];
		//1.X.3.3.4.3.3
		sID['S-G-IUEF--'] = icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER'] + icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER FOSSIL'];
		//1.X.3.3.4.4
		sID['S-G-IUP---'] = icons['GROUND.ICON.WATER'];
		//1.X.3.3.5.1
		sID['S-G-IMF---'] = icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY'];
		//1.X.3.3.5.1.1
		sID['S-G-IMFA--'] = icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY'] + icons['GROUND.INSTALLATION.M2.ATOMIC ENERGY REACTOR'];
		//1.X.3.3.5.1.2
		sID['S-G-IMFP--'] = icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY'] + icons['GROUND.INSTALLATION.M2.NUCLEAR MATERIAL PRODUCTION'];
		//1.X.3.3.5.1.2.1
		sID['S-G-IMFPW-'] = icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY WEAPONS GRADE'] + icons['GROUND.INSTALLATION.M2.NUCLEAR MATERIAL PRODUCTION'];
		//1.X.3.3.5.1.4
		sID['S-G-IMFS--'] = icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY'] + icons['GROUND.INSTALLATION.M2.NUCLEAR MATERIAL STORAGE'];
		//1.X.3.3.5.2
		sID['S-G-IMA---'] = icons['GROUND.INSTALLATION.ICON.AIRCRAFT PRODUCTION & ASSEMBLY'];
		//1.X.3.3.5.3
		sID['S-G-IME---'] = icons['GROUND.ICON.FULLFRAME.CLASS V'];
		//1.X.3.3.5.4
		sID['S-G-IMG---'] = icons['GROUND.EQUIPMENT.TANK'];
		//1.X.3.3.5.5
		sID['S-G-IMV---'] = icons['GROUND.ICON.MAINTENANCE'];
		//1.X.3.3.5.6
		sID['S-G-IMN---'] = icons['GROUND.EQUIPMENT.DOZER'];
		//1.X.3.3.5.6.1
		sID['S-G-IMNB--'] = icons['GROUND.INSTALLATION.ICON.BRIDGE'];
		//1.X.3.3.5.7
		sID['S-G-IMC---'] = icons['GROUND.ICON.CBRN'] + icons['GROUND.INSTALLATION.M2.CHEMICAL & BIOLOGICAL WARFARE'];
		//1.X.3.3.5.8
		sID['S-G-IMS---'] = icons['GROUND.ICON.NAVAL'] + icons['GROUND.INSTALLATION.M2.SHIP CONSTRUCTION'];
		//1.X.3.3.5.9
		sID['S-G-IMM---'] = icons['GROUND.ICON.MISSILE'];
		//1.X.3.3.6
		sID['S-G-IG----'] = icons['AIR.ICON.GOVERNMENT'];
		//1.X.3.3.7
		sID['S-G-IB----'] = icons['GROUND.INSTALLATION.ICON.BASE'];
		//1.X.3.3.7.1
		sID['S-G-IBA---'] = icons['GROUND.ICON.TRANSPORTATION'] + icons['GROUND.ICON.AIRPORT OF DEBARKATION'];
		//1.X.3.3.7.2
		sID['S-G-IBN---'] = icons['GROUND.ICON.NAVAL'];
		//1.X.3.3.8
		sID['S-G-IT----'] = icons['GROUND.ICON.TRANSPORTATION'];
		//1.X.3.3.9
		sID['S-G-IX----'] = icons['GROUND.ICON.FULLFRAME.MEDICAL'];
		//1.X.3.3.9.1
		sID['S-G-IXH---'] = icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'];
		//1.X.3.4.1
		sID['S-G-IRR---'] = sID['S-G-IRSR--'] = icons['GROUND.INSTALLATION.ICON.SEA SURFACE INSTALLATION, OIL RIG/PLATFORM'];
		}
		if(symbol.battledimension == 'S'){
		// SEA ===========================================================================		
		//1.X.4
		sID['S-S-------'] = '';
		//1.X.4.1
		sID['S-S-C-----'] = icons['SEA.ICON.COMBATANT'];
		//1.X.4.1.1
		sID['S-S-CL----'] = icons['SEA.ICON.SURFACE COMBATANT, LINE'];
		//1.X.4.1.1.1
		sID['S-S-CLCV--'] = icons['SEA.ICON.CARRIER'];
		//1.X.4.1.1.2
		sID['S-S-CLBB--'] = icons['SEA.ICON.BATTLESHIP'];
		//1.X.4.1.1.3
		sID['S-S-CLCC--'] = icons['SEA.ICON.CRUISER'];
		//1.X.4.1.1.4
		sID['S-S-CLDD--'] = icons['SEA.ICON.DESTROYER']
		//1.X.4.1.1.5
		sID['S-S-CLFF--'] = icons['SEA.ICON.FRIGATE'];
		//N/A
		sID['S-S-CLLL--'] = icons['SEA.ICON.LITTORAL COMBATANT SHIP'];
		//N/A
		sID['S-S-CLLLAS'] = icons['SEA.ICON.LITTORAL COMBATANT SHIP'] + icons['SEA.M1.ANTISUBMARINE WARFARE'];
		//N/A
		sID['S-S-CLLLMI'] = icons['SEA.ICON.LITTORAL COMBATANT SHIP'] + icons['SEA.M1.MINE WARFARE'];
		//N/A
		sID['S-S-CLLLSU'] = icons['SEA.ICON.LITTORAL COMBATANT SHIP'] + icons['SEA.M1.SURFACE WARFARE'];
		//1.X.4.1.2
		sID['S-S-CA----'] = icons['SEA.ICON.AMPHIBIOUS WARFARE SHIP'];
		//1.X.4.1.2.1
		sID['S-S-CALA--'] = this.force2525?icons['SEA.ICON.AMPHIBIOUS ASSAULT']:icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, GENERAL'];
		//1.X.4.1.2.2
		sID['S-S-CALS--'] = icons['SEA.ICON.LANDING SHIP'];
		//N/A
		sID['S-S-CALSM-'] = icons['SEA.ICON.LANDING SHIP'] + icons['SEA.M2.MEDIUM'];
		//N/A
		sID['S-S-CALST-'] = icons['SEA.ICON.LANDING SHIP'] + icons['SEA.M2.TANK'];
		//1.X.4.1.2.3
		sID['S-S-CALC--'] = icons['SEA.ICON.LANDING CRAFT'];		
		//1.X.4.1.3
		sID['S-S-CM----'] = icons['SEA.ICON.MINE WARFARE VESSEL'];		
		//1.X.4.1.3.1
		sID['S-S-CMML--'] = icons['SEA.ICON.MINELAYER'];		
		//1.X.4.1.3.2
		sID['S-S-CMMS--'] = icons['SEA.ICON.MINESWEEPER'];			
		//1.X.4.1.3.3
		sID['S-S-CMMH--'] = icons['SEA.ICON.MINEHUNTER'];		
		//1.X.4.1.3.4 wrong sidc in app6
		sID['S-S-CMMA--'] = icons['SEA.ICON.MINE COUNTER MEASURE SUPPORT SHIP'];		
		//1.X.4.1.3.5
		sID['S-S-CMMD--'] = icons['SEA.ICON.MINESWEEPER, DRONE'];			
		//1.X.4.1.4
		sID['S-S-CP----'] = icons['SEA.ICON.PATROL'];		
		//1.X.4.1.4.1
		sID['S-S-CPSB--'] = icons['SEA.ICON.PATROL CRAFT'];			
		//1.X.4.1.4.2
		sID['S-S-CPSU--'] = icons['SEA.ICON.PATROL ANTI SUBMARINE WARFARE'];			
		//N/A
		sID['S-S-CPSUM-'] = icons['SEA.ICON.PATROL ANTISHIP MISSILE'];		
		//N/A
		sID['S-S-CPSUT-'] = icons['SEA.ICON.PATROL TORPEDO'];		
		//N/A
		sID['S-S-CPSUG-'] = icons['SEA.ICON.PATROL GUN'];		
		//1.X.4.1.5
		sID['S-S-CH----'] = icons['SEA.ICON.HOVERCRAFT'];			
		//1.X.4.1.6  in 2525 listed as 1.X.4.1.7
		sID['S-S-G-----'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'];		
		//1.X.4.1.6.1  in 2525 listed as 1.X.4.1.7.1 Different SIDC listed let's support both
		sID['S-S-GF----'] = sID['S-S-GT----'] = icons['SEA.ICON.NAVY TASK FORCE'];			
		//1.X.4.1.6.2  in 2525 listed as 1.X.4.1.7.2 
		sID['S-S-GG----'] = icons['SEA.ICON.NAVY TASK GROUP'];			
		//1.X.4.1.6.3  in 2525 listed as 1.X.4.1.7.3 
		sID['S-S-GU----'] = icons['SEA.ICON.NAVY TASK UNIT'];	
		//1.X.4.1.6.4  
		sID['S-S-GE----'] = icons['SEA.ICON.NAVY TASK ELEMENT'];			
		//1.X.4.1.6.5  in 2525 listed as 1.X.4.1.7.4
		sID['S-S-GC----'] = icons['SEA.ICON.CONVOY'];
		//N/A
		sID['S-S-CD----'] = icons['SEA.ICON.SEA SURFACE DECOY'];		
		//N/A
		sID['S-S-CU----'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'];			
		//N/A
		sID['S-S-CUM---'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'] + icons['SEA.M1.MINE COUNTERMEASURES'];			
		//N/A
		sID['S-S-CUS---'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'] + icons['SEA.M1.ANTISUBMARINE WARFARE'];		
		//N/A
		sID['S-S-CUN---'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'] + icons['SEA.M1.SURFACE WARFARE'];			
		//N/A
		sID['S-S-CUR---'] = icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'] + icons['SEA.M1.REMOTE MULTI-MISSION VEHIHLE'];			
		//1.X.4.2
		sID['S-S-N-----'] = icons['SEA.ICON.NONCOMBATANT'];		
		//1.X.4.2.1
		sID['S-S-NR----'] = icons['SEA.ICON.AUXILIARY SHIP'];				
		//1.X.4.2.1.1
		sID['S-S-NRA---'] = icons['SEA.ICON.AMMUNITION SHIP'];			
		//1.X.4.2.1.2
		sID['S-S-NRO---'] = icons['SEA.ICON.OILER, REPLENISHMENT'] ;					
		//1.X.4.2.2 Different SIDC listed let's support both
		sID['S-S-NF----'] = sID['S-S-NFT---'] = icons['SEA.ICON.TUG, OCEAN GOING'];			
		//1.X.4.2.3
		sID['S-S-NI----'] = icons['SEA.ICON.INTELLIGENCE COLLECTOR'];				
		//1.X.4.2.4 1.x.4.2.5
		//APP6
		sID['S-S-NM----'] = icons['SEA.ICON.HOSPITAL SHIP'];		
		//2525
		sID['S-S-NS----'] = icons['SEA.ICON.SERVICE CRAFT, YARD, GENERAL'];			
		//1.X.4.2.5
		sID['S-S-NR----'] = icons['SEA.ICON.REPAIR SHIP'];			
		//1.X.4.2.6
		sID['S-S-NTS---'] = icons['SEA.ICON.SUBMARINE TENDER'];			
		//1.X.4.2.7
		sID['S-S-NH----'] = icons['SEA.ICON.HOVERCRAFT NONCOMBATANT'];				
		//1.X.4.2.8
		sID['S-S-NS----'] = icons['SEA.ICON.TUG, HARBOUR'];			
		//1.X.4.3.1
		sID['S-S-XM----'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'];			
		//1.X.4.3.1.1
		sID['S-S-XMC---'] = icons['SEA.ICON.CARGO, GENERAL'];			
		//1.X.4.3.1.2
		sID['S-S-XME---'] = sID['S-S-XMR---'] = icons['SEA.ICON.ROLL ON-ROLL OFF'];			
		//1.X.4.3.1.3
		sID['S-S-XMO---'] = icons['SEA.ICON.OILER/TANKER'];				
		//1.X.4.3.1.4
		sID['S-S-XMT---'] = sID['S-S-XMTU--'] = icons['SEA.ICON.TUG, OCEAN GOING CIVILIAN'];			
		//1.X.4.3.1.5
		sID['S-S-XMF---'] = icons['SEA.ICON.FERRY'];			
		//1.X.4.3.1.6
		sID['S-S-XMP---'] = icons['SEA.ICON.PASSENGER SHIP'];			
		//1.X.4.3.1.7
		sID['S-S-XMH---'] = icons['SEA.ICON.TRANSPORT SHIP, HAZARDOUS MATERIAL'];			
		//1.X.4.3.1.8
		sID['S-S-XMD---'] = icons['SEA.ICON.DREDGE'];			
		sID['S-S-XMTO--'] = icons['SEA.ICON.TOW'];			
		//1.X.4.3.2
		sID['S-S-XF----'] = icons['SEA.ICON.FISHING VESSEL'];			
		//1.X.4.3.2.1
		sID['S-S-XFDF--'] = icons['SEA.ICON.DRIFTER'];			
		//1.X.4.3.2.2
		sID['S-S-XFTR--'] = icons['SEA.ICON.TRAWLER'];	
		sID['S-S-XFDR--'] = icons['SEA.ICON.FISHING VESSEL DREDGE'];			
		//1.X.4.3.3
		sID['S-S-XR----'] = icons['SEA.ICON.LEISURE CRAFT, SAILING BOAT'];			
		//1.X.4.3.4
		sID['S-S-XL----'] = icons['SEA.ICON.LAW ENFORCEMENT VESSEL'];			
		//1.X.4.3.5
		sID['S-S-XH----'] = icons['SEA.ICON.HOVERCRAFT CIVILIAN'];		
		//N/A
		sID['S-S-XA----'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'];				
		//N/A
		sID['S-S-XAR---'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT'];			
		//N/A
		sID['S-S-XAS---'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, SPEEDBOAT'];			
		//N/A
		sID['S-S-XP----'] = icons['SEA.ICON.LEISURE CRAFT, JETSKI'];			
		//1.X.4.4
		sID['S-S-O-----'] = icons['SEA.ICON.OWN SHIP'];			
		//1.X.4.5.1
		sID['S-S-ED----'] = icons['SEA.ICON.DITCHED AIRCRAFT'];			
		//1.X.4.5.2
		sID['S-S-EP----'] = icons['SEA.ICON.PERSON IN WATER'];				
		//1.X.4.5.3
		sID['S-S-EV----'] = icons['SEA.ICON.DISTRESSED VESSEL'];			
		//1.X.4.6.1
		sID['S-S-ZM----'] = icons['SEA.ICON.SEA MINELIKE'];			
		//1.X.4.6.2
		sID['S-S-ZN----'] = icons['SEA.ICON.NAVIGATIONAL'];				
		//1.X.4.6.3
		sID['S-S-ZI----'] = icons['SEA.ICON.ICEBERG'];		
		}
		if(symbol.battledimension == 'U'){
		// SUBSURFACE ====================================================================
		//1.X.5
		sID['S-U-------'] = '';			
		//1.X.5.1
		sID['S-U-S-----'] = icons['SUB.ICON.SUBMARINE'];			
		//1.X.5.1.1
		sID['S-U-SF----'] = icons['SUB.ICON.SUBMARINE, SURFACED'];			
		//N/A
		sID['S-U-SB----'] = icons['SUB.ICON.SUBMARINE, BOTTOMED'];			
		//N/A
		sID['S-U-SR----'] = icons['SUB.ICON.SUBMARINE'] + icons['SUB.M2.CERTSUB'];		
		//N/A
		sID['S-U-SX----'] = icons['SUB.ICON.NON-SUBMARINE'];		
		//1.X.5.1.1
		sID['S-U-SN----'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'];		
		//N/A
		sID['S-U-SNF---'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION, SURFACED'];	
		//N/A
		sID['S-U-SNA---'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] + icons['SUB.ICON.SUBMARINE ATTACK (SSN)'];	
		//N/A
		sID['S-U-SNM---'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] + icons['SUB.ICON.SUBMARINE MISSILE (TYPE UNKNOWN)'];
		//N/A
		sID['S-U-SNG---'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] + icons['SUB.ICON.SUBMARINE GUIDED MISSILE (SSGN)'];		
		//N/A
		sID['S-U-SNB---'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] + icons['SUB.ICON.SUBMARINE BALLISTIC MISSILE (SSBN)'];		
		//1.X.5.1.2
		sID['S-U-SC----'] = icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION'];			
		//N/A
		sID['S-U-SCF---'] = icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION, SURFACED'];			
		//N/A
		sID['S-U-SCA---'] = icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION'] + icons['SUB.ICON.SUBMARINE ATTACK (SSN)'];	
		//N/A
		sID['S-U-SCM---'] = icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION'] + icons['SUB.ICON.SUBMARINE MISSILE (TYPE UNKNOWN)'];
		//N/A
		sID['S-U-SCG---'] = icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION'] + icons['SUB.ICON.SUBMARINE GUIDED MISSILE (SSGN)'];		
		//N/A
		sID['S-U-SCB---'] = icons['SUB.ICON.SUBMARINE CONVENTIONAL PROPULSION'] + icons['SUB.ICON.SUBMARINE BALLISTIC MISSILE (SSBN)'];			
		//1.X.5.1.3
		sID['S-U-SO----'] = icons['SUB.ICON.OTHER SUBMERSIBLE'];		
		//N/A
		sID['S-U-SOF---'] = icons['SUB.ICON.OTHER SUBMERSIBLE, SURFACED'];		
		//1.X.5.1.3.1
		sID['S-U-SU----'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'];
		//N/A
		sID['S-U-SUM---'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'] + icons['SUB.M1.MINE COUNTERMEASURES'];		
		//N/A
		sID['S-U-SUS---'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'] + icons['SUB.M1.ANTISUBMARINE WARFARE'];	
		//N/A
		sID['S-U-SUN---'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'] + icons['SUB.M1.SURFACE WARFARE'];			
		//N/A
		sID['S-U-S1----'] = icons['SUB.ICON.SUBMARINE'] + icons['SUB.M1.POSSIBLE SUBMARINE - LOW 1'];		
		//N/A
		sID['S-U-S2----'] = icons['SUB.ICON.SUBMARINE'] + icons['SUB.M1.POSSIBLE SUBMARINE - LOW 2'];			
		//N/A
		sID['S-U-S3----'] = icons['SUB.ICON.SUBMARINE'] + icons['SUB.M1.POSSIBLE SUBMARINE - HIGH 3'];			
		//N/A
		sID['S-U-S4----'] = icons['SUB.ICON.SUBMARINE'] + icons['SUB.M1.POSSIBLE SUBMARINE - HIGH 4'];			
		//N/A
		sID['S-U-SL----'] = icons['SUB.ICON.SUBMARINE'] + icons['SUB.M1.PROBABLE SUBMARINE'];		
		//N/A
		sID['S-U-SK----'] = icons['SUB.ICON.SUBMARINE, SNORKELING'];			
		//1.X.5.2
		sID['S-U-W-----'] = icons['SUB.ICON.UNDERWATER WEAPON'];			
		//1.X.5.2.1
		sID['S-U-WT----'] = icons['SUB.ICON.TORPEDO'];		
		//1.X.5.2.2
		sID['S-U-WM----'] = icons['SUB.ICON.SEA MINE'];		
		//1.X.5.2.2.1
		sID['S-U-WMD---'] = icons['SUB.ICON.SEA MINE NEUTRALIZED'];			
		//1.X.5.2.2.2
		sID['S-U-WMG---'] = icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND)'];		
		//1.X.5.2.2.2.1
		sID['S-U-WMGD--'] = icons['SUB.SEA MINE (BOTTOM/ GROUND) NEUTRALIZED'];				
		//N/A
		sID['S-U-WMGX--'] = icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) EXERCISE MINE'];			
		//N/A
		sID['S-U-WMGE--'] = icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) MILEC'];			
		//N/A
		sID['S-U-WMGC--'] = icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) MILCO'];			
		//N/A
		sID['S-U-WMGR--'] = icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) NEGATIVE REACQUISITION'];					
		//N/A
		sID['S-U-WMGO--'] = icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) NON-MINE MINE-LIKE CONTACT'];			
		//N/A
		sID['S-U-WMM---'] = icons['SUB.ICON.SEA MINE (MOORED)'];			
		//N/A
		sID['S-U-WMMD--'] = icons['SUB.ICON.SEA MINE (MOORED) NEUTRALIZED'];			
		//N/A
		sID['S-U-WMMX--'] = icons['SUB.ICON.SEA MINE (MOORED) EXERCISE MINE'];			
		//N/A
		sID['S-U-WMME--'] = icons['SUB.ICON.SEA MINE (MOORED) MILEC'];			
		//N/A
		sID['S-U-WMMC--'] = icons['SUB.ICON.SEA MINE (MOORED) MILCO'];			
		//N/A
		sID['S-U-WMMR--'] = icons['SUB.ICON.SEA MINE (MOORED) NEGATIVE REACQUISITION'];					
		//N/A
		sID['S-U-WMMO--'] = icons['SUB.ICON.SEA MINE (MOORED) NON-MINE MINE-LIKE CONTACT'];				
		//N/A
		sID['S-U-WMF---'] = icons['SUB.ICON.SEA MINE (FLOATING)'];			
		//N/A
		sID['S-U-WMFD--'] = icons['SUB.ICON.SEA MINE (FLOATING) NEUTRALIZED'];			
		//N/A
		sID['S-U-WMFX--'] = icons['SUB.ICON.SEA MINE (FLOATING) EXERCISE MINE'];			
		//N/A
		sID['S-U-WMFE--'] = icons['SUB.ICON.SEA MINE (FLOATING) MILEC'];			
		//N/A
		sID['S-U-WMFC--'] = icons['SUB.ICON.SEA MINE (FLOATING) MILCO'];			
		//N/A
		sID['S-U-WMFR--'] = icons['SUB.ICON.SEA MINE (FLOATING) NEGATIVE REACQUISITION'];					
		//N/A
		sID['S-U-WMFO--'] = icons['SUB.ICON.SEA MINE (FLOATING) NON-MINE MINE-LIKE CONTACT'];			
		//N/A
		sID['S-U-WMO---'] = icons['SUB.ICON.SEA MINE (IN OTHER POSITION)'];			
		//N/A
		sID['S-U-WMOD--'] = icons['SUB.ICON.SEA MINE (IN OTHER POSITION) NEUTRALIZED'];			
		//N/A
		sID['S-U-WMX---'] = icons['SUB.ICON.SEA MINE EXERCISE MINE'];			
		//N/A
		sID['S-U-WME---'] = icons['SUB.ICON.SEA MINE MILEC'];	
		//N/A
		sID['S-U-WMA---'] = icons['SUB.ICON.SEA MINE MINE ANCHOR'];			
		//N/A
		sID['S-U-WMC---'] = icons['SUB.ICON.SEA MINE MILCO'];			
		//N/A
		sID['S-U-WMR---'] = icons['SUB.ICON.SEA MINE NEGATIVE REACQUISITION'];	
		//N/A
		sID['S-U-WMB---'] = icons['SUB.ICON.SEA MINE GENERAL OBSTRUCTOR'];			
		//N/A
		sID['S-U-WMBD--'] = icons['SUB.ICON.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED'];					
		//N/A
		sID['S-U-WMN---'] = icons['SUB.ICON.SEA MINE NON-MINE MINE-LIKE CONTACT'];			
		//N/A
		sID['S-U-WMS---'] = icons['SUB.ICON.SEA MINE (RISING)'];		
		//N/A
		sID['S-U-WMSX--'] = icons['SUB.ICON.SEA MINE (RISING) EXERCISE MINE'];				
		//N/A
		sID['S-U-WMSD--'] = icons['SUB.ICON.SEA MINE (RISING) NEUTRALIZED'];				
		//1.X.5.2.3
		sID['S-U-WV----'] = icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'];
		//1.X.5.3
		sID['S-U-WD----'] = icons['SUB.ICON.UNDERWATER DECOY'];		
		//1.X.5.3.1
		sID['S-U-WDM---'] = icons['SUB.ICON.SEA MINE DECOY'];			
		//N/A
		sID['S-U-WDMG--'] = icons['SUB.ICON.SEA MINE DECOY, BOTTOM/GROUND'];		
		//N/A
		sID['S-U-WDMM--'] = icons['SUB.ICON.SEA MINE DECOY, MOORED'];	
		//1.X.5.4
		sID['S-U-N-----'] = icons['SUB.ICON.NON-SUBMARINE'];
		//1.X.5.4.1
		sID['S-U-ND----'] = icons['SUB.ICON.DIVER, CIVILIAN'];
		//N/A
		sID['S-U-E-----'] = icons['SUB.ICON.ENVIRONMENTAL REPORT LOCATION'];
		//N/A
		sID['S-U-V-----'] = icons['SUB.ICON.DIVE REPORT LOCATION'];
		//N/A
		sID['S-U-X-----'] = icons['SUB.ICON.UNEXPLODED EXPLOSIVE ORDNANCE'];		
		//1.X.5.4.2.1
		sID['S-U-NBS---'] = icons['SUB.ICON.SEABED INSTALLATION/MANMADE'];			
		//1.X.5.4.2.2
		sID['S-U-NBR---'] = icons['SUB.ICON.SEABED ROCK/STONE, OBSTACLE, OTHER'];			
		//1.X.5.4.2.3
		sID['S-U-NBW---'] = icons['SUB.ICON.WRECK'];			
		//1.X.5.4.3
		sID['S-U-NM----'] = icons['SUB.ICON.MARINE LIFE'];			
		//1.X.5.4.4
		sID['S-U-NA----'] = icons['SUB.ICON.SEA ANOMALY'];			
		}
		if(symbol.battledimension == 'F'){
		// SOF ===========================================================================
		//1.X.6
		sID['S-F-------'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'];	
		//1.X.6.1
		sID['S-F-A-----'] = icons['AIR.ICON.MILITARY ROTARY WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];		
		//1.X.6.1.1
		sID['S-F-AF----'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];				
		//1.X.6.1.1.1
		sID['S-F-AFA---'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.ATTACK'];			
		//1.X.6.1.1.2
		sID['S-F-AFK---'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.REFUEL'];				
		//1.X.6.1.1.3
		sID['S-F-AFU---'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.UTILITY'];				
		//1.X.6.1.1.3.1
		sID['S-F-AFUL--'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['AIR.M2.LIGHT'];
		//1.X.6.1.1.3.2
		sID['S-F-AFUM--'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['AIR.M2.MEDIUM'];
		//1.X.6.1.1.3.3
		sID['S-F-AFUH--'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['AIR.M2.HEAVY'];		
		//1.X.6.1.2
		sID['S-F-AV----'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.VSTOL'];	
		//1.X.6.1.3
		sID['S-F-AH----'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + (this.force2525 ? '<line x1="100" y1="100" x2="100" y2="140" />' : '') + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];		
		//1.X.6.1.3.1
		sID['S-F-AHH---'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.COMBAT SEARCH AND RESCUE'];		
		//1.X.6.1.3.2
		sID['S-F-AHA---'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.ATTACK'];	
		//1.X.6.1.3.3
		sID['S-F-AHU---'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['SOF.M2.UTILITY'];				
		//1.X.6.1.3.3.1
		sID['S-F-AHUL--'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['AIR.M2.LIGHT'];
		//1.X.6.1.3.3.2
		sID['S-F-AHUM--'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['AIR.M2.MEDIUM'];
		//1.X.6.1.3.3.3
		sID['S-F-AHUH--'] = icons['AIR.ICON.MILITARY FIXED WING'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'] + icons['AIR.M2.HEAVY'];			
		//1.X.6.2
		sID['S-F-SN----'] = sID['S-F-N-----'] = icons['GROUND.ICON.NAVAL'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];			
		//1.X.6.2.1
		sID['S-F-SNS---'] = sID['S-F-NS----'] = icons['GROUND.ICON.SEA-AIR-LAND'];			
		//1.X.6.2.2
		sID['S-F-SNU---'] = sID['S-F-NU----'] = icons['SOF.ICON.UNDERWATER DEMOLITION TEAM'];	
		//1.X.6.2.3
		sID['S-F-SNB---'] = sID['S-F-NB----'] = icons['SEA.ICON.COMBATANT'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];			
		//1.X.6.2.4
		sID['S-F-SNN---'] = sID['S-F-NN----'] = icons['SUB.ICON.SUBMARINE NUCLEAR PROPULSION'] + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];			
		//1.X.6.3
		sID['S-F-G-----'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['AIR.ICON.SPECIAL OPERATIONS FORCES'];			
		//1.X.6.3.1
		sID['S-F-GS----'] = icons['GROUND.ICON.SPECIAL FORCES'];			
		//1.X.6.3.2
		sID['S-F-GR----'] = sID['S-F-GSR---'] = icons['GROUND.ICON.FULLFRAME.INFANTRY'] + icons['AIR.M1.RECONNAISSANCE'] + icons['GROUND.M2.AIRBORNE'];
		//1.X.6.3.3
		sID['S-F-GP----'] = sID['S-F-GSP---'] = icons['GROUND.EQUIPMENT.PSYCHOLOGICAL OPERATIONS EQUIPMENT'];		
		//1.X.6.3.3.1
		sID['S-F-GPA---'] = sID['S-F-GSPA--'] = icons['GROUND.EQUIPMENT.PSYCHOLOGICAL OPERATIONS EQUIPMENT'] + translate(0,-30,scale(0.7,icons['AIR.ICON.MILITARY FIXED WING']));			
		//1.X.6.3.4
		sID['S-F-GC----'] = sID['S-F-GCA---'] = icons['GROUND.ICON.CIVIL AFFAIRS'];			
		//1.X.6.4
		sID['S-F-GB----'] = sID['S-F-B-----'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'] + icons['GROUND.M2.SUPPORT'];								
		}
	//}	
		
	
			
		//4.X.1.1.1.1
		sID['I-P-SCD---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.DELTA'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.1
		sID['I-P-SRD---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.DELTA'] + icons['SIGNALS.M2.TANGO'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.2
		sID['I-P-SRE---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ECHO'] + icons['SIGNALS.M2.SIERRA'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.3
		sID['I-P-SRI---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.INDY'] + icons['SIGNALS.M2.FOXTROT'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.4
		sID['I-P-SRM---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.FOXTROT'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.5
		sID['I-P-SRT---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.ALPHA'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.6
		sID['I-P-SRS---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.PAPA'] + icons['SIGNALS.M3.SPACE'];
		//4.X.1.1.2.7
		sID['I-P-SRU---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.UNIFORM'] + icons['SIGNALS.M2.NOVEMBER'] + icons['SIGNALS.M3.SPACE'];

		//4.X.2.1.1.1
		sID['I-A-SCC---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.MIKE'];
		//4.X.2.1.1.2
		sID['I-A-SCO---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.OSCAR'] + icons['SIGNALS.M2.LIMA'];
		//4.X.2.1.1.3
		sID['I-A-SCP---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.PAPA'] + icons['SIGNALS.M2.PAPA'];
		//4.X.2.1.1.4
		sID['I-A-SCS---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.UNIFORM'];
		//4.X.2.1.2.1
		sID['I-A-SRAI--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ALPHA'] + icons['SIGNALS.M2.INDY'];
		//4.X.2.1.2.2
		sID['I-A-SRAS--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ALPHA'] + icons['SIGNALS.M2.BRAVO'];
		//4.X.2.1.2.3
		sID['I-A-SRC---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.INDY'];
		//4.X.2.1.2.4
		sID['I-A-SRD---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.DELTA'] + icons['SIGNALS.M2.TANGO'];
		//4.X.2.1.2.5
		sID['I-A-SRE---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ECHO'] + icons['SIGNALS.M2.WHISKEY'];
		//4.X.2.1.2.6
		sID['I-A-SRF---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.FOXTROT'] + icons['SIGNALS.M2.CHARLIE'];
		//4.X.2.1.2.7
		sID['I-A-SRI---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.INDY'] + icons['SIGNALS.M2.FOXTROT'];
		//4.X.2.1.2.8
		sID['I-A-SRMA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.2.1.2.9
		sID['I-A-SRMD--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.DELTA'];
		//4.X.2.1.2.10
		sID['I-A-SRMG--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.GOLF'];
		//4.X.2.1.2.11
		sID['I-A-SRMT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.TANGO'];
		//4.X.2.1.2.12
		sID['I-A-SRMF--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.FOXTROT'];
		//4.X.2.1.2.13
		sID['I-A-SRTI--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.INDY'];
		//4.X.2.1.2.14
		sID['I-A-SRTA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.2.1.2.15
		sID['I-A-SRTT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.TANGO'];
		//4.X.2.1.2.16
		sID['I-A-SRU---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.UNIFORM'] + icons['SIGNALS.M2.NOVEMBER'];



		//4.X.3.1.1.1
		sID['I-G-SCC---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.MIKE'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.1.2
		sID['I-G-SCO---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.OSCAR'] + icons['SIGNALS.M2.LIMA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.1.3
		sID['I-G-SCP---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.PAPA'] + icons['SIGNALS.M2.PAPA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.1.4
		sID['I-G-SCS---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.UNIFORM'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.1.5
		sID['I-G-SCT---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.SIERRA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.1
		sID['I-G-SRAT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ALPHA'] + icons['SIGNALS.M2.TANGO'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.2
		sID['I-G-SRAA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ALPHA'] + icons['SIGNALS.M2.ALPHA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.3
		sID['I-G-SRB---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.BRAVO'] + icons['SIGNALS.M2.SIERRA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.4
		sID['I-G-SRCS--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.SIERRA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.5
		sID['I-G-SRCA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.ALPHA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.6
		sID['I-G-SRD---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.DELTA'] + icons['SIGNALS.M2.TANGO'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.7
		sID['I-G-SRE---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ECHO'] + icons['SIGNALS.M2.WHISKEY'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.8
		sID['I-G-SRF---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.FOXTROT'] + icons['SIGNALS.M2.CHARLIE'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.9
		sID['I-G-SRH---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.HOTEL'] + icons['SIGNALS.M2.FOXTROT'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.10
		sID['I-G-SRI---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.INDY'] + icons['SIGNALS.M2.FOXTROT'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.11
		sID['I-G-SRMM--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.ECHO'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.12
		sID['I-G-SRMA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.ALPHA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.13
		sID['I-G-SRMG--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.GOLF'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.14
		sID['I-G-SRMT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.TANGO'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.15
		sID['I-G-SRMF--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.FOXTROT'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.16
		sID['I-G-SRS---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.TANGO'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.17
		sID['I-G-SRTA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.ALPHA'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.18
		sID['I-G-SRTI--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.INDY'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.19
		sID['I-G-SRTT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.TANGO'] + icons['SIGNALS.M3.GROUND'];
		//4.X.3.1.2.20
		sID['I-G-SRU---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.UNIFORM'] + icons['SIGNALS.M2.NOVEMBER'] + icons['SIGNALS.M3.GROUND'];

		//4.X.4.1.1.1
		sID['I-S-SCC---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.MIKE'];
		//4.X.2.1.1.2
		sID['I-S-SCO---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.OSCAR'] + icons['SIGNALS.M2.LIMA'];
		//4.X.2.1.1.3
		sID['I-S-SCP---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.PAPA'] + icons['SIGNALS.M2.PAPA'];
		//4.X.2.1.1.4
		sID['I-S-SCS---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.UNIFORM'];

		//4.X.4.1.2.1
		sID['I-S-SRAT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ALPHA'] + icons['SIGNALS.M2.TANGO'];
		//4.X.4.1.2.2
		sID['I-S-SRAA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ALPHA'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.4.1.2.3
		sID['I-S-SRCA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.4.1.2.4
		sID['I-S-SRCI--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.CHARLIE'] + icons['SIGNALS.M2.INDY'];
		//4.X.4.1.2.5
		sID['I-S-SRD---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.DELTA'] + icons['SIGNALS.M2.TANGO'];
		//4.X.4.1.2.6
		sID['I-S-SRE---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ECHO'] + icons['SIGNALS.M2.WHISKEY'];
		//4.X.4.1.2.7
		sID['I-S-SRF---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.FOXTROT'] + icons['SIGNALS.M2.CHARLIE'];
		//4.X.4.1.2.8
		sID['I-S-SRH---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.HOTEL'] + icons['SIGNALS.M2.FOXTROT'];
		//4.X.4.1.2.9
		sID['I-S-SRI---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.INDY'] + icons['SIGNALS.M2.FOXTROT'];
		//4.X.4.1.2.10
		sID['I-S-SRMM--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.ECHO'];
		//4.X.4.1.2.11
		sID['I-S-SRMA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.4.1.2.12
		sID['I-S-SRMG--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.GOLF'];
		//4.X.4.1.2.13
		sID['I-S-SRMT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.TANGO'];
		//4.X.4.1.2.14
		sID['I-S-SRMF--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.FOXTROT'];
		//4.X.4.1.2.15
		sID['I-S-SRS---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.SIERRA'];
		//4.X.4.1.2.16
		sID['I-S-SRTA--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.4.1.2.17
		sID['I-S-SRTI--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.INDY'];
		//4.X.4.1.2.18
		sID['I-S-SRTT--'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.TANGO'];
		//4.X.4.1.2.19
		sID['I-S-SRU---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.UNIFORM'] + icons['SIGNALS.M2.NOVEMBER'];


		//4.X.5.1.1.1
		sID['I-U-SCO---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.OSCAR'] + icons['SIGNALS.M2.LIMA'];
		//4.X.5.1.1.2
		sID['I-U-SCP---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.PAPA'] + icons['SIGNALS.M2.PAPA'];
		//4.X.5.1.1.3
		sID['I-U-SCS---'] = icons['SIGNALS.ICON.COMMUNICATIONS'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.UNIFORM'];
		//4.X.5.1.2.1
		sID['I-U-SRD---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.DELTA'] + icons['SIGNALS.M2.TANGO'];
		//4.X.5.1.2.2
		sID['I-U-SRE---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.ECHO'] + icons['SIGNALS.M2.WHISKY'];
		//4.X.5.1.2.3
		sID['I-U-SRM---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.MIKE'] + icons['SIGNALS.M2.FOXTROT'];
		//4.X.5.1.2.4
		sID['I-U-SRS---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.SIERRA'] + icons['SIGNALS.M2.SIERRA'];
		//4.X.5.1.2.5
		sID['I-U-SRT---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.TANGO'] + icons['SIGNALS.M2.ALPHA'];
		//4.X.5.1.2.6
		sID['I-U-SRU---'] = icons['SIGNALS.ICON.RADAR'] + icons['SIGNALS.M1.UNIFORM'] + icons['SIGNALS.M2.NOVEMBER'];				
	//}

		
		//5.X.1.1
		sID['O-V-A-----'] = icons['STABILITY.ICON.ARSON/FIRE'];
		//5.X.1.2
		sID['O-V-M-----'] = icons['STABILITY.ICON.KILLING VICTIM'];
		//N/A
		sID['O-V-MA----'] = icons['STABILITY.ICON.KILLING VICTIM'] + icons['STABILITY.M1.MURDER'];
		//N/A
		sID['O-V-MB----'] = icons['STABILITY.ICON.KILLING VICTIM'] + icons['STABILITY.M1.EXECUTION (WRONGFUL KILLING)'];
		//N/A
		sID['O-V-MC----'] = icons['STABILITY.ICON.KILLING VICTIM'] + icons['STABILITY.M1.ASSASSINATION'];
		//5.X.1.3
		sID['O-V-B-----'] = icons['STABILITY.ICON.BOMB'];
		//5.X.1.4
		sID['O-V-Y-----'] = icons['STABILITY.ICON.BOOBY TRAP'];
		//5.X.1.5
		sID['O-V-D-----'] = icons['STABILITY.ICON.DRIVE-BY SHOOTING'];
		//5.X.1.6
		sID['O-V-S-----'] = icons['STABILITY.ICON.SNIPING'];
		//5.X.1.7
		sID['O-V-P-----'] = icons['STABILITY.ICON.POISONING'];	
		//N/A
		sID['O-V-E-----'] = icons['STABILITY.ICON.EXPLOSION'];			
		//N/A
		sID['O-V-EI----'] = icons['STABILITY.ICON.EXPLOSION'] + icons['STABILITY.ICON.IED'];			
		
		
		//5.X.2.1
		sID['O-L-B-----'] = icons['STABILITY.ICON.BLACK LIST LOCATION'];
		//5.X.2.2
		sID['O-L-G-----'] = icons['STABILITY.ICON.GRAY LIST LOCATION'];
		//5.X.2.3
		sID['O-L-W-----'] = icons['STABILITY.ICON.WHITE LIST LOCATION'];
		//N/A
		sID['O-L-M-----'] = icons['STABILITY.ICON.MASS GRAVE LOCATION']

		//5.X.3.1
		sID['O-O-P-----'] = icons['STABILITY.ICON.PATROLLING'];
		//5.X.3.2.1
		sID['O-O-RW----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.WILLING'];
		//5.X.3.2.2
		sID['O-O-RC----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.COERCED/IMPRESSED'];		
		//5.X.3.3
		sID['O-O-D-----'] = icons['STABILITY.ICON.DEMONSTRATION'];		
		//5.X.3.4
		sID['O-O-M-----'] = icons['STABILITY.ICON.MINE LAYING'];
		//5.X.3.5
		sID['O-O-Y-----'] = icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'];
		//5.X.3.5.1
		sID['O-O-YT----'] = icons['STABILITY.ICON.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS'];
		//5.X.3.5.2
		sID['O-O-YW----'] = icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'] + icons['STABILITY.M1.WRITTEN PSYCHOLOGICAL OPERATIONS'];
		//5.X.3.5.3
		sID['O-O-YH----'] = icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'] + icons['STABILITY.M1.HOUSE-TO-HOUSE'];
		//5.X.3.6
		sID['O-O-F-----'] = icons['STABILITY.ICON.SEARCHING'];
		//5.X.3.7
		sID['O-O-S-----'] = icons['STABILITY.ICON.SPY'];
		//5.X.3.8
		sID['O-O-O-----'] = icons['STABILITY.ICON.FOOD DISTRIBUTION'];
		//5.X.3.9
		sID['O-O-E-----'] = icons['STABILITY.ICON.EXTORTION'];

		//5.X.3.10.1
		sID['O-O-HT----'] = icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE'] + icons['STABILITY.M1.HIJACKING/HIJACKED'];
		//5.X.3.10.2
		sID['O-O-HA----'] = icons['STABILITY.ICON.HIJACKING (AIRPLANE)'] + icons['STABILITY.M1.HIJACKING/HIJACKED'];
		//5.X.3.10.3
		sID['O-O-HV----'] = icons['STABILITY.ICON.HIJACKING (BOAT)'] + icons['STABILITY.M1.HIJACKING/HIJACKED'];
		//5.X.3.11
		sID['O-O-K-----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.KIDNAPPING'];
		//N/A
		sID['O-O-KA----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.KIDNAPPING'] + icons['STABILITY.ICON.ATTEMPTED CRIMINAL ACTIVITY'];
		//5.X.3.12
		sID['O-O-A-----'] = icons['STABILITY.ICON.ARREST'];
		//5.X.3.13
		sID['O-O-U-----'] = icons['STABILITY.ICON.DRUG RELATED ACTIVITIES'];
		//N/A
		sID['O-O-C-----'] = icons['STABILITY.ICON.COMPOSITE LOSS'];
		//N/A
		sID['O-O-CA----'] = icons['STABILITY.ICON.COMPOSITE LOSS'] + icons['STABILITY.M1.COMBAT'];
		//N/A
		sID['O-O-CB----'] = icons['STABILITY.ICON.COMPOSITE LOSS'] + icons['STABILITY.M1.ACCIDENT'];
		//N/A
		sID['O-O-CC----'] = icons['STABILITY.ICON.COMPOSITE LOSS'] + icons['STABILITY.M1.OTHER'];		

		//5.X.4.1
		sID['O-I-R-----'] = icons['STABILITY.ICON.GROUP'];
		//5.X.4.2
		sID['O-I-S-----'] = icons['STABILITY.ICON.SAFE HOUSE'];
		//5.X.4.3
		sID['O-I-G-----'] = icons['STABILITY.ICON.GRAFFITI'];
		//5.X.4.4
		sID['O-I-V-----'] = icons['STABILITY.ICON.VANDALISM/LOOT/RANSACK/PLUNDER/SACK'];
		//5.X.4.5
		sID['O-I-I-----'] = icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE'];		
		//5.X.4.6
		sID['O-I-D-----'] = icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE'] + icons['STABILITY.M1.DRUG'];		
		//5.X.4.7
		sID['O-I-F-----'] = icons['STABILITY.ICON.INTERNAL SECURITY FORCE'];		
		
		//N/A
		sID['O-P-------'] = icons['STABILITY.ICON.INDIVIDUAL'];
		//N/A
		sID['O-P-A-----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.LEADER'];
		//N/A
		sID['O-P-B-----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.TARGETED'];
		//N/A
		sID['O-P-C-----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.TERRORIST'];

		//N/A
		sID['O-G-------'] = icons['STABILITY.ICON.GROUP'];
		//N/A
		sID['O-G-A-----'] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES'];
		//N/A
		sID['O-G-B-----'] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.NONGOVERNMENTAL ORGANIZATION (NGO)'];
		//N/A
		sID['O-G-C-----'] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.TERRORIST'];
		//N/A
		sID['O-G-D-----'] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.RELIGIOUS'];
		//N/A
		sID['O-G-E-----'] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.FOREIGN FIGHTERS'];
		//N/A
		sID['O-G-F-----'] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.GANG'];

		//N/A
		sID['O-R-------'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.RAPE'];
		//N/A
		sID['O-R-A-----'] = icons['STABILITY.ICON.INDIVIDUAL'] + icons['STABILITY.M1.RAPE'] + icons['STABILITY.ICON.ATTEMPTED CRIMINAL ACTIVITY'];
	//}
	
	
	//EMS =====================================================================================

		//EMS.INCDNT.CVDIS 
		sID["E-I-A-----"] = icons['ACTIVITIES.ICON.CRIMINAL.CIVIL DISTURBANCE']; 

		//EMS.INCDNT.CVDIS.CVRIOT 
		sID["E-I-AC----"] = icons['STABILITY.ICON.GROUP'] + icons['ACTIVITIES.M1.RIOT']; 
		//EMS.INCDNT.CRMACT 
		sID["E-I-B-----"] = icons['ACTIVITIES.ICON.CRIMINAL.ACTIVITY.INCIDENT']; 
		//EMS.INCDNT.CRMACT.BMTHT 
		sID["E-I-BA----"] = icons['STABILITY.ICON.BOMB'] + icons['ACTIVITIES.M1.THREAT']; 

		//EMS.INCDNT.CRMACT.EXPLN 
		sID["E-I-BC----"] = icons['STABILITY.ICON.EXPLOSION'] + scale(0.6,icons['STABILITY.ICON.BOMB']); 
		//EMS.INCDNT.CRMACT.LOOT 
		sID["E-I-BD----"] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.LOOT']; 

		//EMS.INCDNT.CRMACT.SHTG 
		sID["E-I-BF----"] = icons['ACTIVITIES.ICON.SHOOTING']; 
		//EMS.INCDNT.FIRE 
		sID["E-I-C-----"] = icons['ACTIVITIES.ICON.FIRE EVENT']; 
//EMS.INCDNT.FIRE.HTSPT 
sID["E-I-CA----"] = "HOT SPOT"; 
		//EMS.INCDNT.FIRE.NRES 
		sID["E-I-CB----"] = icons['ACTIVITIES.ICON.NON-RESIDENTIAL FIRE']; 
//EMS.INCDNT.FIRE.ORGN 
sID["E-I-CC----"] = "ORIGIN (OF FIRE)"; 
		//EMS.INCDNT.FIRE.RES 
		sID["E-I-CD----"] = icons['ACTIVITIES.ICON.RESIDENTIAL FIRE']; 
		//EMS.INCDNT.FIRE.SCH 
		sID["E-I-CE----"] = icons['ACTIVITIES.ICON.SCHOOL FIRE']; 
//EMS.INCDNT.FIRE.SMK 
sID["E-I-CF----"] = "SMOKE"; 
//EMS.INCDNT.FIRE.SN 
sID["E-I-CG----"] = "SPECIAL NEEDS FIRE"; 
//EMS.INCDNT.FIRE.WLD 
sID["E-I-CH----"] = "WILD FIRE"; 
//EMS.INCDNT.HAZMAT 
sID["E-I-D-----"] = "HAZARDOUS MATERIAL INCIDENT"; 
//EMS.INCDNT.HAZMAT.CHMAGT 
sID["E-I-DA----"] = "CHEMICAL AGENT"; 
//EMS.INCDNT.HAZMAT.CORMTL 
sID["E-I-DB----"] = "CORROSIVE MATERIAL"; 
//EMS.INCDNT.HAZMAT.WHWET 
sID["E-I-DC----"] = "HAZARDOUS WHEN WET"; 
//EMS.INCDNT.HAZMAT.EXPLV 
sID["E-I-DD----"] = "EXPLOSIVE"; 
//EMS.INCDNT.HAZMAT.FLGAS 
sID["E-I-DE----"] = "FLAMMABLE GAS"; 
//EMS.INCDNT.HAZMAT.FLLIQ 
sID["E-I-DF----"] = "FLAMMABLE LIQUID"; 
//EMS.INCDNT.HAZMAT.FLSLD 
sID["E-I-DG----"] = "FLAMMABLE SOLID"; 
//EMS.INCDNT.HAZMAT.NFLGAS 
sID["E-I-DH----"] = "NON-FLAMMABLE GAS"; 
//EMS.INCDNT.HAZMAT.ORGPER 
sID["E-I-DI----"] = "ORGANIC PEROXIDE"; 
//EMS.INCDNT.HAZMAT.OXDZR 
sID["E-I-DJ----"] = "OXIDIZER"; 
//EMS.INCDNT.HAZMAT.RADMTL 
sID["E-I-DK----"] = "RADIOACTIVE MATERIAL"; 
//EMS.INCDNT.HAZMAT.SPCMB 
sID["E-I-DL----"] = "SPONTANEOUSLY COMBUSTIBLE"; 
//EMS.INCDNT.HAZMAT.TXGAS 
sID["E-I-DM----"] = "TOXIC GAS"; 
//EMS.INCDNT.HAZMAT.TXINF 
sID["E-I-DN----"] = "TOXIC AND INFECTIOUS"; 
//EMS.INCDNT.HAZMAT.UNXORD 
sID["E-I-DO----"] = "UNEXPLODED ORDNANCE"; 
//EMS.INCDNT.AIR 
sID["E-I-E-----"] = icons['STABILITY.M1.INCIDENT'] + icons['STABILITY.ICON.HIJACKING (AIRPLANE)']; 
//EMS.INCDNT.AIR.ACDNT 
sID["E-I-EA----"] = icons['STABILITY.M1.ACCIDENT'] + icons['STABILITY.ICON.HIJACKING (AIRPLANE)']; 

//EMS.INCDNT.MRN 
sID["E-I-F-----"] = icons['STABILITY.M1.INCIDENT'] + icons['STABILITY.ICON.HIJACKING (BOAT)']; 
//EMS.INCDNT.MRN.ACDNT 
sID["E-I-FA----"] = icons['STABILITY.M1.ACCIDENT'] + icons['STABILITY.ICON.HIJACKING (BOAT)']; 

//EMS.INCDNT.RAIL 
sID["E-I-G-----"] = icons['STABILITY.M1.INCIDENT'] + icons['GROUND.EQUIPMENT.TRAIN LOCOMOTIVE']; 
//EMS.INCDNT.RAIL.ACDNT 
sID["E-I-GA----"] = icons['STABILITY.M1.ACCIDENT'] + icons['GROUND.EQUIPMENT.TRAIN LOCOMOTIVE']; 
//EMS.INCDNT.RAIL.HJCK 
sID["E-I-GB----"] =  icons['GROUND.EQUIPMENT.TRAIN LOCOMOTIVE'] + icons['STABILITY.M1.HIJACKING/HIJACKED']; 
//EMS.INCDNT.VEH 
sID["E-I-H-----"] = icons['STABILITY.M1.INCIDENT'] + icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE']; 
//EMS.INCDNT.VEH.ACDNT 
sID["E-I-HA----"] = icons['STABILITY.M1.ACCIDENT'] + icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE']; 

//EMS.NATEVT 
sID["E-N-------"] = "NATURAL EVENTS"; 
//EMS.NATEVT.GEO 
sID["E-N-A-----"] = "GEOLOGIC"; 
//EMS.NATEVT.GEO.AFTSHK 
sID["E-N-AA----"] = "AFTERSHOCK"; 
//EMS.NATEVT.GEO.AVL 
sID["E-N-AB----"] = "AVALANCHE"; 
//EMS.NATEVT.GEO.EQKEPI 
sID["E-N-AC----"] = "EARTHQUAKE EPICENTER"; 
//EMS.NATEVT.GEO.LNDSLD 
sID["E-N-AD----"] = "LANDSLIDE"; 
//EMS.NATEVT.GEO.SBSDNC 
sID["E-N-AE----"] = "SUBSIDENCE"; 
//EMS.NATEVT.GEO.VOLERN 
sID["WAS-WSVE--"] = "VOLCANIC ERUPTION"; 
//EMS.NATEVT.GEO.VLCTHT 
sID["E-N-AG----"] = "VOLCANIC THREAT"; 
//EMS.NATEVT.HYDMET 
sID["E-N-B-----"] = "HYDRO-METEOROLOGICAL"; 
//EMS.NATEVT.HYDMET.DZ 
sID["WAS-WSD-LI"] = "DRIZZLE"; 
//EMS.NATEVT.HYDMET.DRGHT 
sID["E-N-BB----"] = "DROUGHT"; 
//EMS.NATEVT.HYDMET.FLD 
sID["E-N-BC----"] = "FLOOD"; 
//EMS.NATEVT.HYDMET.FG 
sID["WAS-WSFGSO"] = "FOG"; 
//EMS.NATEVT.HYDMET.HL 
sID["WAS-WSGRL-"] = "HAIL"; 
//EMS.NATEVT.HYDMET.INV 
sID["E-N-BF----"] = "INVERSION"; 
//EMS.NATEVT.HYDMET.RA 
sID["WAS-WSR-LI"] = "RAIN"; 
//EMS.NATEVT.HYDMET.DT/SD 
sID["WAS-WSDSLM"] = "SAND DUST STORM"; 
//EMS.NATEVT.HYDMET.SN 
sID["WAS-WSS-LI"] = "SNOW"; 
//EMS.NATEVT.HYDMET.TSTRM 
sID["WAS-WSTMH-"] = "THUNDER STORM"; 
//EMS.NATEVT.HYDMET.TNDO 
sID["WAS-WST-FC"] = "TORNADO"; 
//EMS.NATEVT.HYDMET.TRPCYC 
sID["WAS-WSTSS-"] = "TROPICAL CYCLONE"; 
//EMS.NATEVT.HYDMET.TSNMI 
sID["E-N-BM----"] = "TSUNAMI"; 
//EMS.NATEVT.INFST 
sID["E-N-C-----"] = "INFESTATION"; 
//EMS.NATEVT.INFST.BIRD 
sID["E-N-CA----"] = "BIRD INFESTATION"; 
//EMS.NATEVT.INFST.INSCT 
sID["E-N-CB----"] = "INSECT INFESTATION"; 
//EMS.NATEVT.INFST.MICROB 
sID["E-N-CC----"] = "MICROBIAL INFESTATION"; 
//EMS.NATEVT.INFST.REPT 
sID["E-N-CD----"] = "REPTILE INFESTATION"; 
//EMS.NATEVT.INFST.RDNT 
sID["E-N-CE----"] = "RODENT INFESTATION"; 
//EMS.OPN 
sID["E-O-------"] = "OPERATIONS"; 
		//EMS.OPN.EMMED
		sID['E-O-A-----'] = sID['E-O-AA----'] = sID['E-O-AB----'] = sID['E-O-AC----'] = sID['E-O-AD----'] = icons['GROUND.ICON.EMERGENCY MEDICAL OPERATION'];
//EMS.OPN.EMMED.AMBLNC 
sID["E-O-AE----"] = "AMBULANCE"; 
//EMS.OPN.EMMED.MEH 
sID["E-O-AF----"] = "MEDICAL EVACUATION HELICOPTER"; 
//EMS.OPN.EMMED.HDF 
sID["E-O-AG----"] = "HEALTH DEPARTMENT FACILITY"; 

//EMS.OPN.EMMED.MFOP 
sID["E-O-AJ----"] = "MEDICAL FACILITIES OUT PATIENT"; 
//EMS.OPN.EMMED.MRG 
sID["E-O-AK----"] = "MORGUE"; 
//EMS.OPN.EMMED.RX 
sID["E-O-AL----"] = "PHARMACY"; 
//EMS.OPN.EMMED.TRIAGE 
sID["E-O-AM----"] = "TRIAGE";
		//EMS.OPN.EMOPN
		sID['E-O-B-----'] = sID['E-O-BA----'] = sID['E-O-BB----'] = sID['E-O-BC----'] = icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION'];
//EMS.OPN.EMOPN.ECEP 
sID["E-O-BD----"] = "EMERGENCY COLLECTION EVACUATION POINT"; 
//EMS.OPN.EMOPN.EICC 
sID["E-O-BE----"] = "EMERGENCY INCIDENT COMMAND CENTER"; 
//EMS.OPN.EMOPN.EOC 
sID["E-O-BF----"] = "EMERGENCY OPERATIONS CENTER"; 
//EMS.OPN.EMOPN.EPIC 
sID["E-O-BG----"] = "EMERGENCY PUBLIC INFORMATION CENTER"; 
//EMS.OPN.EMOPN.EMSHLT 
sID["E-O-BH----"] = "EMERGENCY SHELTER"; 
//EMS.OPN.EMOPN.ESA 
sID["E-O-BI----"] = "EMERGENCY STAGING AREA"; 
//EMS.OPN.EMOPN.EMTM 
sID["E-O-BJ----"] = "EMERGENCY TEAM"; 
//EMS.OPN.EMOPN.EWDC 
sID["E-O-BK----"] = "EMERGENCY WATER DISTRIBUTION CENTER"; 
//EMS.OPN.EMOPN.FDDIST 
sID["E-O-BL----"] = "EMERGENCY FOOD DISTRIBUTION CENTER"; 
		//EMS.OPN.FIRFT
		sID['E-O-C-----'] = sID['E-O-CA----'] = sID['E-O-CB----']  = sID['E-O-CE----']= icons['GROUND.ICON.FIRE PROTECTION'];
//EMS.OPN.FIRFT.FIRHYD 
sID["E-O-CC----"] = "FIRE HYDRANT"; 
//EMS.OPN.FIRFT.OTHH2O 
sID["E-O-CD----"] = "OTHER WATER SUPPLY LOCATION"; 
		//EMS.OPN.LAWENF
		sID['E-O-D-----'] = sID['E-O-DA----'] = sID['E-O-DB----'] = sID['E-O-DC----'] = icons['GROUND.ICON.FULLFRAME.LAW ENFORCEMENT'];
		//EMS.OPN.LAWENF.ATF
		sID['E-O-DD----'] = sID['E-O-DDA---'] = sID['E-O-DDB---'] = sID['E-O-DDC---'] = icons['GROUND.ICON.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)']; 
		//EMS.OPN.LAWENF.BDRPT
		sID['E-O-DE----'] = sID['E-O-DEA---'] = sID['E-O-DEB---'] = sID['E-O-DEC---'] = icons['GROUND.ICON.FULLFRAME.BORDER PATROL'];
		//EMS.OPN.LAWENF.CSTM
		sID['E-O-DF----'] = sID['E-O-DFA---'] = sID['E-O-DFB---'] = sID['E-O-DFC---'] = icons['GROUND.ICON.FULLFRAME.CUSTOMS SERVICE'];	 
		//EMS.OPN.LAWENF.DEA
		sID['E-O-DG----'] = sID['E-O-DGA---'] = sID['E-O-DGB---'] = sID['E-O-DGC---'] = icons['GROUND.ICON.DRUG ENFORCEMENT AGENCY (DEA)'];
		//EMS.OPN.LAWENF.DOJ
		sID['E-O-DH----'] = sID['E-O-DHA---'] = sID['E-O-DHB---'] = sID['E-O-DHC---'] = icons['GROUND.ICON.FULLFRAME.DEPARTMENT OF JUSTICE (DOJ)'];
		//EMS.OPN.LAWENF.FBI
		sID['E-O-DI----'] = sID['E-O-DIA---'] = sID['E-O-DIB---'] = sID['E-O-DIC---'] = icons['GROUND.ICON.FEDERAL BUREAU OF INVESTIGATION (FBI)'];
		//EMS.OPN.LAWENF.POL
		sID['E-O-DJ----'] = sID['E-O-DJB---'] = sID['E-O-DJC---'] = icons['GROUND.ICON.LAW ENFORCEMENT'];
		//EMS.OPN.LAWENF.PRSN
		sID['E-O-DK----'] = icons['GROUND.ICON.FULLFRAME.PRISON'];

		//EMS.OPN.LAWENF.SECSR
		sID['E-O-DL----'] = sID['E-O-DLA---'] = sID['E-O-DLB---'] = sID['E-O-DLC---'] = icons['GROUND.ICON.UNITED STATES SECRET SERVICE(TREAS) (USSS)'];
		//EMS.OPN.LAWENF.TSA
		sID['E-O-DM----'] = sID['E-O-DMA---'] = sID['E-O-DMB---'] = sID['E-O-DMC---'] = icons['GROUND.ICON.TRANSPORTATION SECURITY AGENCY (TSA)'];
		//EMS.OPN.LAWENF.CSTGD
		sID['E-O-DN----'] = sID['E-O-DNA---'] = sID['E-O-DNC---'] = icons['SEA.ICON.LAW ENFORCEMENT VESSEL'];

		//EMS.OPN.LAWENF.USMAR
		sID['E-O-DO----'] = sID['E-O-DOA---'] = sID['E-O-DOB---'] = sID['E-O-DOC---'] = icons['GROUND.ICON.FULLFRAME.US MARSHALS SERVICE'];

//EMS.OPN.SNS.BIO 
sID["E-O-EA----"] = "BIOLOGICAL SENSOR"; 
//EMS.OPN.SNS.CML 
sID["E-O-EB----"] = "CHEMICAL SENSOR"; 
//EMS.OPN.SNS.INT 
sID["E-O-EC----"] = "INTRUSION SENSOR"; 
//EMS.OPN.SNS.NUC 
sID["E-O-ED----"] = "NUCLEAR SENSOR"; 
//EMS.OPN.SNS.RAD 
sID["E-O-EE----"] = "RADIOLOGICAL SENSOR"; 
//EMS.INFSTR 
sID["E-F-------"] = "INFRASTRUCTURE"; 
//EMS.INFSTR.AGFD 
sID["E-F-A-----"] = "AGRICULTURE AND FOOD INFRASTRUCTURE"; 
//EMS.INFSTR.AGFD.AGLAB 
sID["E-F-AA----"] = "AGRICULTURAL LABORATORY"; 
//EMS.INFSTR.AGFD.AFL 
sID["E-F-AB----"] = "ANIMAL FEEDLOT"; 
//EMS.INFSTR.AGFD.CFDC 
sID["E-F-AC----"] = "COMMERCIAL FOOD DISTRIBUTION CENTER"; 
//EMS.INFSTR.AGFD.FRMRNC 
sID["E-F-AD----"] = "FARM/RANCH"; 
//EMS.INFSTR.AGFD.FPC 
sID["E-F-AE----"] = "FOOD PRODUCTION CENTER"; 
//EMS.INFSTR.AGFD.FDRTL 
sID["E-F-AF----"] = "FOOD RETAIL"; 
//EMS.INFSTR.AGFD.GRSTR 
sID["E-F-AG----"] = "GRAIN STORAGE"; 
//EMS.INFSTR.BFI 
sID["E-F-B-----"] = "BANKING FINANCE AND INSURANCE INFRASTRUCTURE"; 
//EMS.INFSTR.BFI.ATM 
sID["E-F-BA----"] = "ATM"; 
//EMS.INFSTR.BFI.BANK 
sID["E-F-BB----"] = "BANK"; 
//EMS.INFSTR.BFI.BLSTR 
sID["E-F-BC----"] = "BULLION STORAGE"; 
//EMS.INFSTR.BFI.FRB 
sID["E-F-BD----"] = "FEDERAL RESERVE BANK"; 
//EMS.INFSTR.BFI.FINEX 
sID["E-F-BE----"] = "FINANCIAL EXCHANGE"; 
//EMS.INFSTR.BFI.FSO 
sID["E-F-BF----"] = "FINANCIAL SERVICES OTHER"; 
//EMS.INFSTR.CMCL 
sID["E-F-C-----"] = "COMMERCIAL INFRASTRUCTURE"; 
//EMS.INFSTR.CMCL.CMLPLN 
sID["E-F-CA----"] = "CHEMICAL PLANT"; 
//EMS.INFSTR.CMCL.FIRMAN 
sID["E-F-CB----"] = "FIREARMS MANUFACTURER"; 
//EMS.INFSTR.CMCL.FIRRET 
sID["E-F-CC----"] = "FIREARMS RETAILER"; 
//EMS.INFSTR.CMCL.HZMTPR 
sID["E-F-CD----"] = "HAZARDOUS MATERIAL PRODUCTION"; 
//EMS.INFSTR.CMCL.HZMTST 
sID["E-F-CE----"] = "HAZARDOUS MATERIAL STORAGE"; 
//EMS.INFSTR.CMCL.INDSTE 
sID["E-F-CF----"] = "INDUSTRIAL SITE"; 
//EMS.INFSTR.CMCL.LNDFL 
sID["E-F-CG----"] = "LANDFILL"; 
//EMS.INFSTR.CMCL.RXMFG 
sID["E-F-CH----"] = "PHARMACEUTICAL MANUFACTURER"; 
//EMS.INFSTR.CMCL.CHWS 
sID["E-F-CI----"] = "CONTAMINATED HAZARDOUS WASTE SITE"; 
//EMS.INFSTR.CMCL.TXRLIN 
sID["E-F-CJ----"] = "TOXIC RELEASE INVENTORY"; 
//EMS.INFSTR.EDFAC 
sID["E-F-D-----"] = "EDUCATIONAL FACILITIES INFRASTRUCTURE"; 
//EMS.INFSTR.EDFAC.COLUNI 
sID["E-F-DA----"] = "COLLEGE UNIVERSITY"; 
//EMS.INFSTR.EDFAC.SCHOOL 
sID["E-F-DB----"] = "SCHOOL"; 

//EMS.INFSTR.ENGFAC.GENSTA 
sID["E-F-EA----"] = "GENERATION STATION"; 
//EMS.INFSTR.ENGFAC.NTLGAS 
sID["E-F-EB----"] = "NATURAL GAS FACILITY"; 

//EMS.INFSTR.ENGFAC.PROPNE 
sID["E-F-EE----"] = "PROPANE FACILITY"; 
//EMS.INFSTR.GVTSTE 
sID["E-F-F-----"] = "GOVERNMENT SITE INFRASTRUCTURE"; 
//EMS.INFSTR.MIL 
sID["E-F-G-----"] = "MILITARY INFRASTRUCTURE"; 
//EMS.INFSTR.MIL.ARMORY 
sID["E-F-GA----"] = "MILITARY ARMORY"; 

//EMS.INFSTR.PSTSRV 
sID["E-F-H-----"] = "POSTAL SERVICE INFRASTRUCTURE"; 
//EMS.INFSTR.PSTSRV.PDC 
sID["E-F-HA----"] = "POSTAL DISTRIBUTION CENTER"; 
//EMS.INFSTR.PSTSRV.PO 
sID["E-F-HB----"] = "POST OFFICE"; 
//EMS.INFSTR.PUBVEN 
sID["E-F-I-----"] = "PUBLIC VENUES INFRASTRUCTURE"; 
//EMS.INFSTR.PUBVEN.ENCFAC 
sID["E-F-IA----"] = "ENCLOSED FACILITY"; 
//EMS.INFSTR.PUBVEN.OPNFAC 
sID["E-F-IB----"] = "OPEN FACILITY"; 
//EMS.INFSTR.PUBVEN.RECARE 
sID["E-F-IC----"] = "RECREATIONAL AREA"; 
//EMS.INFSTR.PUBVEN.RELIG 
sID["E-F-ID----"] = "RELIGIOUS INSTITUTION"; 
//EMS.INFSTR.SPCNDS 
sID["E-F-J-----"] = "SPECIAL NEEDS INFRASTRUCTURE"; 
//EMS.INFSTR.SPCNDS.ADLTDC 
sID["E-F-JA----"] = "ADULT DAY CARE"; 
//EMS.INFSTR.SPCNDS.CHLDDC 
sID["E-F-JB----"] = "CHILD DAY CARE"; 
		//EMS.INFSTR.SPCNDS.ELDERC 
		sID["E-F-JC----"] = icons['GROUND.INSTALLATION.ICON.ELDER CARE']; 
//EMS.INFSTR.TELCOM 
sID["E-F-K-----"] = "TELECOMMUNICATIONS INFRASTRUCTURE"; 

//EMS.INFSTR.TELCOM.TCTWR 
sID["E-F-KB----"] = "TELECOMMUNICATIONS TOWER"; 

//EMS.INFSTR.TSP.ATCF 
sID["E-F-LA----"] = "AIR TRAFFIC CONTROL FACILITY"; 
 
//EMS.INFSTR.TSP.BRG 
sID["G-M-BCB---"] = "BRIDGE"; 
//EMS.INFSTR.TSP.BSTN 
sID["E-F-LD----"] = "BUS STATION"; 
//EMS.INFSTR.TSP.FRYTRM 
sID["E-F-LE----"] = "FERRY TERMINAL"; 
//EMS.INFSTR.TSP.HLS 
sID["E-F-LF----"] = "HELICOPTER LANDING SITE"; 
//EMS.INFSTR.TSP.LCK 
sID["WOS-ML----"] = "LOCK"; 
//EMS.INFSTR.TSP.MAINTF 
sID["E-F-LH----"] = "MAINTENANCE FACILITY"; 
//EMS.INFSTR.TSP.RLSTN 
sID["E-F-LJ----"] = "RAIL STATION"; 
//EMS.INFSTR.TSP.RSTSTP 
sID["E-F-LK----"] = "REST STOP"; 
//EMS.INFSTR.TSP.ANCRG 
sID["WOS-HPBA--"] = "SHIP ANCHORAGE"; 
//EMS.INFSTR.TSP.TOLLF 
sID["E-F-LM----"] = "TOLL FACILITY"; 
//EMS.INFSTR.TSP.TCP 
sID["G-S-PO----"] = "TRAFFIC CONTROL POINT"; 
//EMS.INFSTR.TSP.TIF 
sID["E-F-LO----"] = "TRAFFIC INSPECTION FACILITY"; 
//EMS.INFSTR.TSP.TNL 
sID["E-F-LP----"] = "TUNNEL"; 
//EMS.INFSTR.WS.CV 
sID["E-F-MA----"] = "CONTROL VALVE"; 
//EMS.INFSTR.WS.DAM 
sID["E-F-MB----"] = "DAM"; 
//EMS.INFSTR.WS.DO 
sID["E-F-MC----"] = "DISCHARGE OUTFALL"; 
//EMS.INFSTR.WS.GWWELL 
sID["E-F-MD----"] = "GROUND WATER WELL"; 
//EMS.INFSTR.WS.PMPSTN 
sID["E-F-ME----"] = "PUMPING STATION"; 
//EMS.INFSTR.WS.RSVR 
sID["E-F-MF----"] = "RESERVOIR"; 
//EMS.INFSTR.WS.STRTWR 
sID["E-F-MG----"] = "STORAGE TOWER"; 
//EMS.INFSTR.WS.SWI 
sID["E-F-MH----"] = "SURFACE WATER INTAKE"; 
//EMS.INFSTR.WS.WH20TF 
sID["E-F-MI----"] = "WASTEWATER TREATMENT FACILITY"; 		


	}

	//THIS IS JUST FOR Printing bottom coords of all equipment ===========================
		/*
			if(element){
				listBBoxes = '';
				for (var property in sID) {
					if(property.substr(4,1) == 'E'){
						var BaseGeometry = document.createElementNS(svgNS, "g");
						BaseGeometry.setAttribute('id', 'BaseGeometryEquipment');
							BaseGeometry.appendChild(
								BaseGeometry.ownerDocument.importNode(
									parseXML(
										'<g xmlns="'+svgNS+'">' + sID[property] + '</g>'
									), true
								)
							);
						var svgSymbol = document.createElementNS(svgNS, "svg");
						svgSymbol.setAttribute("width", 200);
						svgSymbol.setAttribute("height", 200);
						svgSymbol.setAttribute("version", 1.1);
						svgSymbol.setAttribute("baseProfile", "tiny");
						svgSymbol.setAttribute("xmlns", svgNS);
						svgSymbol.appendChild(BaseGeometry);
						
						var targetElement = document.getElementById(element);
						if(targetElement.hasChildNodes()){
							targetElement.removeChild(targetElement.childNodes[0])
						}
						targetElement.appendChild(svgSymbol);
						var BBox = document.getElementById("BaseGeometryEquipment").getBBox()
  						listBBoxes += '\'' + property.substr(4,6) + '\':' + (BBox.y+ BBox.height)+',';
					}
					}
				document.getElementById(element).innerHTML=listBBoxes;
			}		
	*/
	
	/*		if(element){//For printing all implemented symbols

			var symbols = "<table>";
			var i=0;
			var t = new Date()
			var symbol =  new MilSymbol("S-S",{force2525:mySymbol.force2525,fill:mySymbol.fill,frame:mySymbol.frame,monoColor:mySymbol.monoColor,size:mySymbol.size,strokeWidth:mySymbol.strokeWidth});
			for(var index in sID) {
				var ID = index;
				i++
							
				symbols += "<tr><td colspan=3>"+ i + '   ' + ID  + "</td></tr><tr><td>";

				symbol.force2525 = false;
				symbol.frame = true;
				symbol.SIDC = ID.substr(0,1)+document.getElementById("SIDCAFFILIATION").value + ID.substr(2,8) + document.getElementById("SIDCSYMBOLMODIFIER11").value +document.getElementById("SIDCSYMBOLMODIFIER12").value ;
				symbols += symbol.symbolMarker().textXML + '</td><td>'
				
				symbol.force2525 = true;
				symbols += symbol.symbolMarker().textXML + '</td><td>'
				
				var t2 = new Date()
				//symbols += symbol.symbolSvg().textXML + '</td></tr>'
				//symbols += "<tr><td colspan=3>" + " Time to draw: " + (t2-t)  +"</td></tr>";
				t=t2
			}
			symbols += "</table>";
			document.getElementById(element).innerHTML = symbols			
		}	
*/	
// Put all this togheter and return the Icon. ============================================
		var icon = ""
		if(!isNaN(this.SIDC)){
			icon = sID[symbol.functionid.substr(0,6)];//Main symbol
			if(icon == undefined)icon = sID[symbol.functionid.substr(0,4)+'00'];//We have som sepcial entity subtype and will try to find original symbol.
			if(symbol.functionid.substr(4,2) == '95')icon += icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'];
			if(symbol.functionid.substr(4,2) == '96')icon += icons['GROUND.ICON.FULLFRAME.DIVISION AND BELOW SUPPORT'];
			if(symbol.functionid.substr(4,2) == '97')icon += icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'];
			if(symbol.functionid.substr(4,2) == '98')icon += icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'];
			icon += (symbol.functionid.substr(6,2)!='00'?sIDm1[symbol.functionid.substr(6,2)]:'');//Modifier 1
			icon += (symbol.functionid.substr(8,2)!='00'?sIDm2[symbol.functionid.substr(8,2)]:'');//Modifier 2
		}else{
			icon = sID[this.SIDC.substr(0,1)+'-'+this.SIDC.substr(2,1)+'-'+this.SIDC.substr(4,6)]
		}
		//var test =  document.createTextNode(icon)
		var Geometry = document.createElementNS(svgNS, "g");
		Geometry.setAttribute('id', 'Icon');
		Geometry.setAttribute("fill", symbolColors.iconColor[symbol.affiliationType]);
		Geometry.setAttribute("stroke", symbolColors.iconColor[symbol.affiliationType]);		
		Geometry.setAttribute("stroke-width", this.strokeWidth);	
		Geometry.setAttribute("font-family", "Arial");
		Geometry.setAttribute("font-weight", "bold");
		Geometry.appendChild(
			Geometry.ownerDocument.importNode(
				parseXML(
					'<g xmlns="'+svgNS+'">' + icon + '</g>'
				), true
			)
		);
		return Geometry;
	}


//Combines all parts and returns the symbol as an SVG object. mySymbol.symbolSvg() #######
	this.symbolSvg = function(markerUpdate){

	if(!markerUpdate){ //If we call symbolSvg directly we need to update _symbol and _symbolColors
		this._symbol = this.symbol();		
		this._symbolColors = this.symbolColors();
	}
	var symbol = this._symbol;

	//For the map markers we want to remove as much spacing as possible, so we need to keep track of the boundingbox
	this.markerBBox = {x1:50,y1:50,x2:150,y2:150}	

	this._symbolModifier = this.symbolModifier();
	this._symbolBaseGeometry = this.symbolBaseGeometry();
	this._symbolStatus = this.symbolStatus();
	this._symbolAffliationDimensionGeometry = this.symbolAffliationDimensionGeometry();
	this._symbolIcon = this.symbolIcon();

		//WOOPS we had to lite space on top of the symbols...
		var Geometry = document.createElementNS(svgNS, "g");
		if(symbol.affiliationType){//If this is false we don't have an affiliationType and we won't get a symbol.
			Geometry.setAttribute("transform", "translate(0," + symbolOffset + ")");	
			Geometry.setAttribute("overflow", "visible");
			if(this.size >= 10)Geometry.appendChild(this._symbolModifier);
			if(this.fill||this.frame||(!this.fill&&!this.frame&&!this.icon))Geometry.appendChild(this._symbolBaseGeometry.geometry);
			Geometry.appendChild(this._symbolStatus)
			Geometry.appendChild(this._symbolAffliationDimensionGeometry);
			if(this.icon&&this.size>=10)Geometry.appendChild(this._symbolIcon);
		}
		var svgSymbol = document.createElementNS(svgNS, "svg");
		//IE gets crazy over if you happen to set xmlns twice, but other browsers wants it, this is a dirty workaround 
		if(navigator.userAgent.toLowerCase().indexOf('msie')==-1){svgSymbol.setAttribute("xmlns", svgNS)};
		svgSymbol.setAttribute("version", 1.2);
		svgSymbol.setAttribute("baseProfile", "tiny");
		svgSymbol.setAttribute("width", this.size*3);
		svgSymbol.setAttribute("height", this.size*3.4);
		svgSymbol.setAttribute("viewBox", "0 0 300 340");
		svgSymbol.appendChild(Geometry);
		var xml = (new XMLSerializer()).serializeToString(svgSymbol) 
		return {"object" : svgSymbol, "textXML" : xml};
	}

//Makes a mapmarker with a lot of stuff around the symbol ################################
	this.symbolMarker = function(symbolObject){
		this._symbol = this.symbol();		
		var symbol = this._symbol;
	
		this._symbolColors = this.symbolColors();
		var symbolColors = this._symbolColors;
	
		var pixelMargin = 5;
		var symbolObject = symbolObject==undefined?this.symbolSvg(true).object:symbolObject.object;

		//Get the bounds for the base geometry.
		var symbolBBox = symbolBaseGeometry.BBox[symbol.baseGeometryType];
			
		//Calculates center of icon and the base marker size. 
		//TODO shift center for symbols where center is not in the middle of the octagon.
		var center = {x:parseFloat(this.size-(this.markerBBox.x1-pixelMargin)*this.size/100),y:parseFloat(parseFloat(this.size)-((this.markerBBox.y1-pixelMargin)*this.size/100))}

		var markerSize = {x:(this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100, y:(this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100}
		var offsetx = 0;

		//If it is a HQ we will have to move the center and make the canvas bigger =======
		if(symbol.hqETC.headquarters){
			center = {x: pixelMargin*this.size/100, y: markerSize.y-pixelMargin*this.size/100}	
			//markerSize.y = center.y
		}	
				
		//If we have a Symbol Status and a mobility indicator we will have to make the canvas bigger. 
		//if(['C','D','X','F'].indexOf(symbol.status) > -1&&symbol.symbolmodifier11=='M'){
			//markerSize.y = Math.max(markerSize.y, this.size*2+(this.size/100 * 10 +symbolOffset))
		//}
		
		//Add text =======================================================================
		if(this.infoFields){	
			if(true){

				var textInformation = '';

				if(this.specialHeadquarters)textInformation 			+= '<text x="100" y="110" text-anchor="middle">' + this.specialHeadquarters + '</text>';

				if(this.quantity){
					if(this.markerBBox.y1>(symbolBBox.y-15-30)){
						center.y += (this.markerBBox.y1-(symbolBBox.y-15-30))*this.size/100;
						this.markerBBox.y1 = Math.min(this.markerBBox.y1, (symbolBBox.y-15-30))
					}
					textInformation += '<text x="100" y="' + (symbolBBox.y-15) + '" text-anchor="middle">' + this.quantity + '</text>';
				}

				
					var textInformationStrings = {L1:"",L2:"",L3:"",L4:"",L5:"",R1:"",R2:"",R3:"",R4:"",R5:""};//Text information on left and right side.

					//Air & Space (They should be different but we skip that at the moment) TODO
					if(!isNaN(this.SIDC) && symbol.dimensionType == "Air"){
						textInformationStrings.R1 = this.uniqueDesignation;
						textInformationStrings.R2 = this.iffSif;
						textInformationStrings.R3 = this.type;
						if(this.speed||this.altitudeDepth){
							var a = new Array;
							this.speed?a.push(this.speed):'';
							this.location?a.push(this.altitudeDepth):'';
							textInformationStrings.R4 = (a.join(" "));
						}
						if(this.staffComments||this.location){
							var a = new Array;
							this.staffComments?a.push(this.staffComments):'';
							this.additionalInformation?a.push(this.additionalInformation):'';
							textInformationStrings.R5 = (a.join(" "));
						}
					}
					//Land
					if(isNaN(this.SIDC) || symbol.dimensionType == "Ground"){
						textInformationStrings.L1 = this.dtg;
						if(this.altitudeDepth||this.location){
							var a = new Array;
							this.altitudeDepth?a.push(this.altitudeDepth):'';
							this.location?a.push(this.location):'';
							textInformationStrings.L2 = (a.join(" "));
						}
						if(this.type||this.platformType||this.commonIdentifier){
							var a = new Array;
							this.type?a.push(this.type):'';
							this.platformType?a.push(this.platformType):'';
							this.commonIdentifier?a.push(this.commonIdentifier):'';
							textInformationStrings.L3 = (a.join(" "));
						}
						textInformationStrings.L4 = this.uniqueDesignation;
						textInformationStrings.L5 = this.speed;
						textInformationStrings.R1 = this.reinforcedReduced;
						textInformationStrings.R2 = this.staffComments;
						if(this.additionalInformation||this.equipmentTeardownTime){
							var a = new Array;
							this.additionalInformation?a.push(this.additionalInformation):'';
							this.equipmentTeardownTime?a.push(this.equipmentTeardownTime):'';
							textInformationStrings.R3 = (a.join(" "));
						}						
						textInformationStrings.R4 = this.higherFormation;
						if(this.evaluationRating||this.combatEffectiveness||this.signatureEquipment||this.hostile||this.iffSif){
							var a = new Array;
							this.evaluationRating?a.push(this.evaluationRating):'';
							this.combatEffectiveness?a.push(this.combatEffectiveness):'';
							this.signatureEquipment?a.push(this.signatureEquipment):'';				
							this.hostile?a.push(this.hostile):'';				
							this.iffSif?a.push(this.iffSif):'';				
							textInformationStrings.R5 = (a.join(" "));
						}
					}					
					//Sea
					if(!isNaN(this.SIDC) && symbol.dimensionType == "Sea"){
						textInformationStrings.R1 = this.uniqueDesignation;
						textInformationStrings.R2 = this.type;
						textInformationStrings.R3 = this.iffSif;
						if(this.staffComments||this.location){
							var a = new Array;
							this.staffComments?a.push(this.staffComments):'';
							this.additionalInformation?a.push(this.additionalInformation):'';
							textInformationStrings.R4 = (a.join(" "));
						}
						if(this.location||this.speed){
							var a = new Array;
							this.location?a.push(this.location):'';
							this.speed?a.push(this.speed):'';
							textInformationStrings.R5 = (a.join(" "));
						}
					}					
					//Sub
					if(!isNaN(this.SIDC) && symbol.dimensionType == "Subsurface"){
						textInformationStrings.R1 = this.uniqueDesignation;
						textInformationStrings.R2 = this.type;
						textInformationStrings.R3 = this.altitudeDepth;
						textInformationStrings.R4 = this.staffComments;
						textInformationStrings.R5 = this.additionalInformation;
					}					
				function strWidth(str){
					if(str.length == 0)return 0;
					//We need to calculate how long our string will be in pixels
					strWidths = {" ":9,"!":10,"\"":15,"#":17,"$":17,"%":27,"&":22,"'":8,"(":10,")":10,"*":12,"+":18,",":9,"-":10,".":9,"/":9,"0":17,"1":17,"2":17,"3":17,"4":17,"5":17,"6":17,"7":17,"8":17,"9":17,":":10,";":10,"<":18,"=":18,">":18,"?":19,"@":30,"A":22,"B":22,"C":22,"D":22,"E":21,"F":19,"G":24,"H":22,"I":9,"J":17,"K":22,"L":19,"M":25,"N":22,"O":24,"P":21,"Q":24,"R":22,"S":21,"T":19,"U":22,"V":21,"W":29,"X":21,"Y":21,"Z":19,"[":10,"]":10,"^":18,"_":17,"`":10,"a":17,"b":19,"c":17,"d":19,"e":17,"f":10,"g":19,"h":19,"i":9,"j":9,"k":17,"l":9,"m":27,"n":19,"o":19,"p":19,"q":19,"r":12,"s":17,"t":10,"u":19,"v":17,"w":24,"x":17,"y":17,"z":15,"{":12,"|":9,"}":12,"~":18};
					w = 0;
					for(var i in str){
						//If we dont know how wide the char is, set it to 28.5 that is the width of W and no char is wider than that.
						w += strWidths[str[i]]?strWidths[str[i]]:28.5;
					}
					//This is for the space between the text and the symbol.
					w+=20
					return w;
				}	
					
				//Add space on left side
				offsetx =  Math.max(	
					strWidth(textInformationStrings.L1), 
					strWidth(textInformationStrings.L2),
					strWidth(textInformationStrings.L3),
					strWidth(textInformationStrings.L4),
					strWidth(textInformationStrings.L5))

				this.markerBBox.x2 += offsetx;
				center.x += (this.size/100)*offsetx;	

				//Add space for text on right side
				var extraPadding = (symbol.context == "Exercise" || symbol.context == "Simulation")?18:0;
				this.markerBBox.x2 += extraPadding;
				
				this.markerBBox.x2 +=  Math.max(
					strWidth(textInformationStrings.R1),
					strWidth(textInformationStrings.R2),
					strWidth(textInformationStrings.R3),
					strWidth(textInformationStrings.R4),
					strWidth(textInformationStrings.R5))+20;
				
				//Extra space above for field 1
				if((textInformationStrings.L1||textInformationStrings.R1)&&this.markerBBox.y1>20){
					center.y += (this.markerBBox.y1-20)*this.size/100;
					this.markerBBox.y1 = Math.min(this.markerBBox.y1, 20)
				}
				//Extra space below for field 5
				if(textInformationStrings.L5||textInformationStrings.R5){
					this.markerBBox.y2 = Math.max(this.markerBBox.y2, 170)
				}
					
					textInformation += '<text x="' + (symbolBBox.x-20) + '" y="50" text-anchor="end">' + textInformationStrings.L1 + '</text>';
					textInformation += '<text x="' + (symbolBBox.x-20) + '" y="80" text-anchor="end">' + textInformationStrings.L2 +'</text>';
					textInformation += '<text x="' + (symbolBBox.x-20) + '" y="110" text-anchor="end">' + textInformationStrings.L3 + '</text>';
					textInformation += '<text x="' + (symbolBBox.x-20) + '" y="140" text-anchor="end">' + textInformationStrings.L4 + '</text>';
					textInformation += '<text x="' + (symbolBBox.x-20) + '" y="170" text-anchor="end">' + textInformationStrings.L5 + '</text>';
		
					textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="50">' + textInformationStrings.R1 + '</text>';	
					textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="80">' + textInformationStrings.R2 + '</text>';	
					textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="110">' + textInformationStrings.R3 + '</text>';
					textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="140">' + textInformationStrings.R4 + '</text>';	
					textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="170">' + textInformationStrings.R5 + '</text>';				
			}
			
			var Text = document.createElementNS(svgNS, "g");
			Text.setAttribute('id', 'Texts');
			Text.setAttribute("fill", symbolColors.black[symbol.affiliationType]);
			Text.setAttribute("stroke", "none");		
			Text.setAttribute("font-family", "Arial");
			Text.setAttribute("font-weight", "bold");
			Text.setAttribute("font-size", "30");
			Text.setAttribute("transform", "scale(" + this.size/100 + ") translate(0," + symbolOffset + ")")	
			Text.appendChild(
				Text.ownerDocument.importNode(
					parseXML(
						'<g xmlns="'+svgNS+'">'  
						+ textInformation										
						+'</g>'
					), true
				)
			);
		}

		//Add direction arrow ============================================================
		if(this.infoFields){
			if(this.direction && this.direction!=''){
				//offsetx = Math.max(offsetx, this.size/100*symbolBBox.width-this.size)
				//markerSize.y = this.size/100*((symbolBBox.y +(symbolBBox.height/2) + symbolOffset))
				//markerSize.x = Math.max(markerSize.x+offsetx, this.size*2)
				//Movement indicator
				//The length of the lines in a direction of movement indicator is a bit discussed but I use one frame height. (=100px)
				
				var directionIndicator = '';
				var groundDirectionOffset = 100;
				if(symbol.dimensionTypeUnModified == 'Ground'){
					//markerSize.y = this.size/100*((symbolBBox.y +(symbolBBox.height) + 2*100 + symbolOffset))
					directionIndicator += '<path  d="M' + (symbolBBox.x+symbolBBox.width/2) + ',' + (symbolBBox.y+symbolBBox.height) +  'l0,' + 100 + '" />'
					groundDirectionOffset = symbolBBox.y+(symbolBBox.height)+100;
				}
			
				//center = {x:Math.min(center.x,(100+pixelMargin)*this.size/100),y:Math.max(center.y,(100+pixelMargin)*this.size/100)}
				center.x += this.markerBBox.x1>0?this.markerBBox.x1*this.size/100:0;
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,0);
				
				if(symbol.dimensionTypeUnModified != 'Ground'){
					center.y += this.markerBBox.y1>0?this.markerBBox.y1*this.size/100:0;
					this.markerBBox.y1 = Math.min(this.markerBBox.y1,0);
				}
				
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,2*100+offsetx);
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,groundDirectionOffset+Math.max(Math.sin((((this.direction-360)-90)/360)*Math.PI*2)*100,10));
					
				directionIndicator += '<g transform="rotate(' + this.direction +' 100 ' + groundDirectionOffset + ' )"><path  d="M100,' + groundDirectionOffset + ' l0,-' + (100-15) + ' -5,0 5,-10 5,10 -5,0" /></g>'
				var Direction = document.createElementNS(svgNS, "g");
				Direction.setAttribute('id', 'DirectionArrow');		
				Direction.setAttribute("fill", symbolColors.black[symbol.affiliationType]);
				Direction.setAttribute("stroke", symbolColors.black[symbol.affiliationType]);	
				Direction.setAttribute("stroke-width", "3");
				Direction.setAttribute("transform", "scale(" + this.size/100 + ") translate(0," + symbolOffset + ")")		
				Direction.appendChild(
					Direction.ownerDocument.importNode(
						parseXML(
							'<g xmlns="'+svgNS+'">'  
							+ directionIndicator
							+'</g>'
						), true
					)
				);	
		
			}
		}
		var Geometry = document.createElementNS(svgNS, "g");
		Geometry.setAttribute("transform", "translate("+ (this.size/100)*offsetx + ",0)");	
		Geometry.setAttribute("overflow", "visible");
		
		Geometry.appendChild(symbolObject);
		if(this.infoFields){
			if(this.size >= 10)Geometry.appendChild(Text);
			if(this.direction && this.direction!='')Geometry.appendChild(Direction); 
		}
		var svgSymbol = document.createElementNS(svgNS, "svg");
		//IE gets crazy over if you happen to set xmlns twice, but other browsers wants it, this is a dirty workaround 
		if(navigator.userAgent.toLowerCase().indexOf('msie')==-1){svgSymbol.setAttribute("xmlns", svgNS)};
		svgSymbol.setAttribute("version", 1.2);
		svgSymbol.setAttribute("baseProfile", "tiny");
		svgSymbol.setAttribute("width", (this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100);
		svgSymbol.setAttribute("height", (this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100);
		svgSymbol.setAttribute("viewBox", (this.markerBBox.x1-pixelMargin)*this.size/100 + " " + (this.markerBBox.y1+symbolOffset-pixelMargin)*this.size/100 + " " + (this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100 + " " + (this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100);
		svgSymbol.appendChild(Geometry);
		
		var xml = (new XMLSerializer()).serializeToString(svgSymbol)
		return {"object" : svgSymbol, "textXML" : xml, "x" : center.x , "y": center.y, "width":(this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100, "height":(this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100};
	}	
}

//END ####################################################################################
