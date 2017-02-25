var ms = require('../ms.js');

module.exports = function(properties,mapping){
	var version  			= this.SIDC.substr(0,2);
	var standardIdentity1 	= this.SIDC.substr(2,1);
	var standardIdentity2 	= this.SIDC.substr(3,1);
	var symbolSet 			= this.SIDC.substr(4,2);
	var status 				= this.SIDC.substr(6,1);
	var headquartersTaskForceDummy = this.SIDC.substr(7,1);
	var echelonMobility 	= this.SIDC.substr(8,2);

	var affiliationMapping = {
		'0':'Unknown',
		'1':'Unknown',
		'2':'Friend',
		'3':'Friend',
		'4':'Neutral',
		'5':'Hostile',
		'6':'Hostile'};

	var dimensionMapping = {
		'00':'Sea',
		'01':'Air',
		'02':'Air',
		'05':'Air',
		'06':'Air',
		'10':'Ground',
		'11':'Ground',
		'12':'Ground',
		'15':'Ground',
		'20':'Ground',
		'30':'Sea',
		'35':'Subsurface',
		'36':'Subsurface',
		'39':'Subsurface',
		'40':'Ground',
		'50':'Air',
		'51':'Air',
		'52':'Ground',
		'53':'Sea',
		'54':'Subsurface',
		'60':'Ground'};

	var functionid = properties.functionid = this.SIDC.substr(10,10);

	properties.context = mapping.context[parseInt(this.SIDC.substr(2,1))];
	properties.affiliation = affiliationMapping[standardIdentity2];
	properties.dimension = dimensionMapping[symbolSet];

	//SymbolSets in Space
	if(symbolSet == '05' || symbolSet == '06' || symbolSet == '50')properties.space = true;
	//SymbolSets that are Activities
	if(symbolSet == '40')properties.activity = true;
	//SymbolSets that are Installations
	if(symbolSet == '20')properties.installation = true;
	//Sea Mines with MEDAL icn
	if(symbolSet == '36' && this.alternateMedal == false)properties.fill = false;
	//Sea own track
	if(symbolSet == '30' && functionid.substr(0,6) == 150000)properties.frame = false;

	//Planned/Anticipated/Suspect symbols should have a dashed outline
	if(status == '1' )properties.notpresent = ms._dashArrays.anticipated;
	if(standardIdentity2 == '0' || standardIdentity2 == '2' || standardIdentity2 == '5')properties.notpresent = ms._dashArrays.pending;

	//All ETC/POSCON tracks shall have a pending standard identity frame.
	//All fused tracks shall have a pending standard identity frame.
	if(symbolSet == '30' && functionid.substr(0,6) == 160000)properties.notpresent = ms._dashArrays.pending;
	if(symbolSet == '35' && functionid.substr(0,6) == 140000)properties.notpresent = ms._dashArrays.pending;
	if(symbolSet == '35' && functionid.substr(0,6) == 150000)properties.notpresent = ms._dashArrays.pending;


	//Should it have a Condition Bar
	if(status == '2' || status == '3' || status == '4' || status == '5')properties.condition = mapping.status[parseInt(status)];

	//First save the dimensionType and affiliationType before we modifies it...
	properties.baseDimension = properties.dimension;
	properties.baseAffilation = properties.affiliation;

	//Joker and faker should have the shape of friendly
	if(standardIdentity2 == '5' && standardIdentity1 == '1')properties.joker = true;
	if(standardIdentity2 == '6' && standardIdentity1 == '1')properties.faker = true;
	if(properties.joker || properties.faker){
		properties.affiliation = mapping.affiliation[1];
	}

	if(symbolSet=='00')properties.dimensionUnknown = true;

	//If battle dimension is unknown, standard identity is Exersize and other than Unknown we should not have a symbol
	if(symbolSet=='00' && standardIdentity1 == '1' && properties.affiliation != 'Unknown') properties.affiliation = '';

	//Land Dismounted Individual should have special icons
	if(symbolSet == '12'){
		properties.dimension = 'LandDismountedIndividual';
		properties.dismounted = true;
	}
	
	//Ground Equipment should have the same geometry as sea Friend...
	//Signal INTELLIGENCE Ground should have the same geometry as sea Friend...
	if(symbolSet == '15' || symbolSet == '52' )properties.dimension = mapping.dimension[2];

	//Setting up Headquarters/task force/dummy
	if(['1','3','5','7'].indexOf(headquartersTaskForceDummy) > -1)properties.feintDummy = true;
	if(['2','3','6','7'].indexOf(headquartersTaskForceDummy) > -1)properties.headquarters = true;
	if(['4','5','6','7'].indexOf(headquartersTaskForceDummy) > -1)properties.taskForce = true;

	//Setting up Echelon/Mobility/Towed Array Amplifier
	if(echelonMobility <= 30){
		properties.echelon = mapping.echelonMobility[echelonMobility];
	}
	if(echelonMobility >= 30 && echelonMobility < 70){
		properties.mobility = mapping.echelonMobility[echelonMobility];
	}
	if(echelonMobility >= 70 && echelonMobility < 80){
		properties.leadership = mapping.echelonMobility[echelonMobility];
	}
	//Civilian stuff
	if(
		(symbolSet == '01' && functionid.substring(0,2)=='12')||
		(symbolSet == '05' && functionid.substring(0,2)=='12')||
		(symbolSet == '11')||
		(symbolSet == '12' && functionid.substring(0,2)=='12')||
		(symbolSet == '15' && functionid.substring(0,2)=='16')||
		(symbolSet == '30' && functionid.substring(0,2)=='14')||
		(symbolSet == '35' && functionid.substring(0,2)=='12')	
	){properties.civilian = true;}

	return properties;
};