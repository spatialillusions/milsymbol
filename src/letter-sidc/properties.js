var ms = require('../ms.js');

module.exports = function(properties, mapping){
	this.SIDC = this.SIDC.toUpperCase();

	var codingscheme 		= this.SIDC.charAt(0)!=''?this.SIDC.charAt(0):'-';
	var affiliation 		= this.SIDC.charAt(1)!=''?this.SIDC.charAt(1):'-';
	var battledimension 	= this.SIDC.charAt(2)!=''?this.SIDC.charAt(2):'-';
	var status 				= this.SIDC.charAt(3)!=''?this.SIDC.charAt(3):'-';
	var functionid 			= properties.functionid	= this.SIDC.substr(4,6)!=''?this.SIDC.substr(4,6):'------';
	var symbolmodifier11 	= this.SIDC.charAt(10)!=''?this.SIDC.charAt(10):'-';
	var symbolmodifier12 	= this.SIDC.charAt(11)!=''?this.SIDC.charAt(11):'-';
	var countrycode 		= this.SIDC.substr(12,2)!=''?this.SIDC.substr(12,2):'--';
	var orderofbattle 		= this.SIDC.charAt(14)!=''?this.SIDC.charAt(14):'-';

	if(['H','S','J','K'].indexOf(affiliation) > -1)		properties.affiliation = mapping.affiliation[0];
	if(['F','A','D','M'].indexOf(affiliation) > -1)		properties.affiliation = mapping.affiliation[1];
	if(['N','L'].indexOf(affiliation) > -1)			properties.affiliation = mapping.affiliation[2];
	if(['P','U','G','W','O'].indexOf(affiliation) > -1)	properties.affiliation = mapping.affiliation[3];

	if(['P','A'].indexOf(battledimension) > -1)		properties.dimension = mapping.dimension[0];
	if(['G','Z','F','X'].indexOf(battledimension) > -1)	properties.dimension = mapping.dimension[1];
	if(['S'].indexOf(battledimension) > -1)			properties.dimension = mapping.dimension[2];
	if(['U'].indexOf(battledimension) > -1)			properties.dimension = mapping.dimension[3];
	


	//dimension is in Space
	if(battledimension == 'P'  && codingscheme != "O")	properties.space = true;
	//codingscheme that are Activities
	if(codingscheme == "O" && (['V','O','R'].indexOf(battledimension)>-1)){
											properties.activity = true;
	}
	//symbolmodifier11 that are Installations
	if(symbolmodifier11 == "H")				properties.installation = true;
	//Planned/Anticipated/Suspect symbols should have a dashed outline
	if(this.frame && status == 'A' )		properties.notpresent = ms._dashArrays.anticipated;
	if(this.frame && (['P','A','S','G','M'].indexOf(affiliation) > -1)){
											properties.notpresent = ms._dashArrays.pending;
	}
	//Should it have a Condition Bar
	if(status == 'C')						properties.condition = mapping.status[2];
	if(status == 'D')						properties.condition = mapping.status[3];
	if(status == 'X')						properties.condition = mapping.status[4];
	if(status == 'F')						properties.condition = mapping.status[5];
	//Is it part of Exercise Symbols
	if(['G','W','D','L','M','J','K'].indexOf(affiliation) > -1){
											properties.context = mapping.context[1];
	}
	//Framing of SO tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
	if(codingscheme == "O")					properties.dimension = mapping.dimension[1];
	//Framing of EMS tactical symbols differs slightly from C2 Symbology: UEI tactical symbols in that there is only one battle dimension: ground.
	if(codingscheme == "E")					properties.dimension = mapping.dimension[1];
	//First save the dimensionType and affiliationType before we modifies it...
	properties.baseDimension = properties.dimension;
	properties.baseAffilation = properties.affiliation;
	//Joker and faker should have the shape of friendly
	if(affiliation == 'J')					properties.joker = true;
	if(affiliation == 'K')					properties.faker = true;
	if(properties.joker || properties.faker){
		properties.affiliation = mapping.affiliation[1];
	}
	//Ground Equipment should have the same geometry as sea Friend...
	if(codingscheme == 'S' && battledimension == 'G' && functionid.charAt(0)=='E') properties.dimension = mapping.dimension[2];
	//Signal INTELLIGENCE Ground should have the same geometry as sea Friend...
	if(codingscheme == 'I' && battledimension == 'G') properties.dimension = mapping.dimension[2];
	//Some EMS symbosls should have the same geometry as sea Friend...
	if(	codingscheme == 'E' &&
		((battledimension=='O'&&
			['AB----','AE----','AF----','BB----','CB----','CC----','DB----','DDB---','DEB---','DFB---','DGB---','DHB---','DIB---','DJB---','DLB---','DMB---','DOB---','EA----','EB----','EC----','ED----','EE----'].indexOf(functionid) > -1)||
			(battledimension=='F'&& ['BA----','MA----','MC----'].indexOf(functionid) > -1)
		)){
			properties.dimension = mapping.dimension[2];
		}
	//Setting up Headquarters/task force/dummy
	if(['F','G','C','D'].indexOf(symbolmodifier11) > -1 || (symbolmodifier11 == 'H' && symbolmodifier12 == 'B')){
		properties.feintDummy = true;
	}
	if(['A','B','C','D'].indexOf(symbolmodifier11) > -1){
		properties.headquarters = true;
	}
	if(['E','B','G','D'].indexOf(symbolmodifier11) > -1){
		properties.taskForce = true;
	}
	//Setting up Echelon/Mobility/Towed Array Amplifier
	if(symbolmodifier12=='A') properties.echelon = mapping.echelonMobility[11];//Team/Crew
	if(symbolmodifier12=='B' && symbolmodifier11 != 'H') properties.echelon = mapping.echelonMobility[12];//Squad
	if(symbolmodifier12=='C') properties.echelon = mapping.echelonMobility[13];//Section
	if(symbolmodifier12=='D') properties.echelon = mapping.echelonMobility[14];//Platoon/detachment
	if(symbolmodifier12=='E') properties.echelon = mapping.echelonMobility[15];//Company/battery/troop
	if(symbolmodifier12=='F') properties.echelon = mapping.echelonMobility[16];//Battalion/squadron
	if(symbolmodifier12=='G') properties.echelon = mapping.echelonMobility[17];//Regiment/group
	if(symbolmodifier12=='H') properties.echelon = mapping.echelonMobility[18];//Brigade
	if(symbolmodifier12=='I') properties.echelon = mapping.echelonMobility[21];//Division
	if(symbolmodifier12=='J') properties.echelon = mapping.echelonMobility[22];//Corps/MEF
	if(symbolmodifier12=='K') properties.echelon = mapping.echelonMobility[23];//Army
	if(symbolmodifier12=='L' && symbolmodifier11!='N') properties.echelon = mapping.echelonMobility[24];//Army Group/front
	if(symbolmodifier12=='M') properties.echelon = mapping.echelonMobility[25];//Region/Theater
	if(symbolmodifier12=='N') properties.echelon = mapping.echelonMobility[26];//Command
	if(symbolmodifier11=='M'){
		if(symbolmodifier12=='O') properties.mobility = mapping.echelonMobility[31];//Wheeled limited cross country
		if(symbolmodifier12=='P') properties.mobility = mapping.echelonMobility[32];//Wheeled cross country
		if(symbolmodifier12=='Q') properties.mobility = mapping.echelonMobility[33];//Tracked
		if(symbolmodifier12=='R') properties.mobility = mapping.echelonMobility[34];//Wheeled and tracked combination
		if(symbolmodifier12=='S') properties.mobility = mapping.echelonMobility[35];//Towed
		if(symbolmodifier12=='T') properties.mobility = mapping.echelonMobility[36];//Rail
		if(symbolmodifier12=='U') properties.mobility = mapping.echelonMobility[41];//Over snow (prime mover)
		if(symbolmodifier12=='V') properties.mobility = mapping.echelonMobility[42];//Sled
		if(symbolmodifier12=='W') properties.mobility = mapping.echelonMobility[37];//Pack animals
		if(symbolmodifier12=='Y') properties.mobility = mapping.echelonMobility[51];//Barge
		if(symbolmodifier12=='Z') properties.mobility = mapping.echelonMobility[52];//Amphibious
	}
	if(symbolmodifier11=='N'){
		if(symbolmodifier12=='S') properties.mobility = mapping.echelonMobility[61];//Short towed array
		if(symbolmodifier12=='L') properties.mobility = mapping.echelonMobility[62];//Long towed Array
	}
	//This is for 2525
	//Civilian stuff
	if(
		(battledimension == 'A' && functionid.charAt(0)=='C')||
		(battledimension == 'G' && functionid.substring(0,3)=='EVC')||
		(battledimension == 'S' && functionid.charAt(0)=='X')
	){
		properties.civilian = true;
	}
	//Colors will be have to be fixed in symbolColors
	if(battledimension == 'Z' || battledimension == 'X'){
		if((['P','U','F','N','H','A','S','G','W'].indexOf(affiliation) > -1)) properties.dimensionUnknown = true;
		//To get the correct geometry for a lot of stuff later we will have to modify the affliationType.
		if(['F','A'].indexOf(affiliation) > -1) properties.dimension = 'Sea';
		//If battle dimension is unknown and the affiliation is D,L,M,J,K we should not have a symbol
		if(['D','L','M','J','K'].indexOf(affiliation) > -1) properties.affiliation = 'none';
	}
	//Forcing unframing of symbols that shouldn't have a frame.
	if((battledimension=='S')&&["O-----",'ED----','EP----','EV----','ZM----','ZN----','ZI----'].indexOf(functionid) > -1){
		properties.frame = false;
	}
	if((codingscheme=='E')&&(battledimension=='N')&&["AA----","AB----","AC----","AD----","AE----","AG----","BB----","BC----","BF----","BM----","-C-----","CA----","CB----","CC----","CD----","CE----"].indexOf(functionid) > -1){
		properties.frame = false;
	}

	//We have some special symbols that should be unframed but filled, like mines, let us fix them.
	if((battledimension=='U')&&[	"WM----","WMD---",
									"WMG---","WMGD--","WMGX--","WMGE--","WMGC--","WMGR--","WMGO--",
									"WMM---","WMMD--","WMMX--","WMME--","WMMC--","WMMR--","WMMO--",
									"WMF---","WMFD--","WMFX--","WMFE--","WMFC--","WMFR--","WMFO--",
									"WMO---","WMOD--","WMX---","WME---","WMA---","WMC---","WMR---","WMB---","WMBD--","WMN---",
									"WMS---","WMSX--","WMSD--",
									"WD----",
									"WDM---","WDMG--","WDMM--",
									"ND----","E-----","V-----","X-----",
									"NBS---","NBR---","NBW---","NM----","NA----"].indexOf(functionid) > -1){
		if(ms._STD2525){
			properties.fill = false;
			if(properties.functionid=="WD----"){
				properties.fill = true;
			}
			if(["ND----","NBS---","NBR---","NBW---","NM----","NA----"].indexOf(functionid) > -1){
				properties.fill = true;
				properties.frame = false;
			}
		}else{
			properties.frame = false;
			if(["E-----","V-----","X-----"].indexOf(functionid) > -1){
				properties.fill = false;
				properties.frame = false;
			}
		}
	}

	//Some symbols in EMS and symbols from tactical graphics
	if(this.SIDC.substr(0,3) == "WAS" || this.SIDC.substr(0,3) == "WOS" || codingscheme == "G"){
		properties.frame = false;
	}

	//This is for APP6 tactical points with frames
	if(codingscheme == 'G' && battledimension == 'O' && ['V','L','P','I'].indexOf(functionid.charAt(0)) > -1){
	  properties.frame = true;
	  properties.dimension = mapping.dimension[1];
	}

	return properties;
};