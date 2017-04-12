var ms = require('../ms.js');

module.exports = function seabedinstallations(sId,sIdm1,sIdm2,bbox,symbolSet,icn,_STD2525){
	//Seabed Installations
	if(symbolSet == "39" ){
		sId['110000'] = [icn['SU.IC.SEABED INSTALLATION, MAN-MADE, MILITARY']];
		sId['120000'] = [icn['SU.IC.SEABED INSTALLATION, MAN-MADE, NON-MILITARY']];
	}
};