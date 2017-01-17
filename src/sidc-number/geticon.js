var MS = require('../ms.js');

module.exports = function(symbolSet,iconParts,STD2525){
	var iconSIDC = {};
	var iconModifier1 = {};
	var iconModifier2 = {};
	var iconBbox = {};

	for (var i in MS._numberSIDCicons){
		if (!MS._numberSIDCicons.hasOwnProperty(i)) continue;
		MS._numberSIDCicons[i].call(this,iconSIDC,iconModifier1,iconModifier2,iconBbox,symbolSet,iconParts,STD2525);
	}
	return {icons:iconSIDC,m1:iconModifier1,m2:iconModifier2,bbox:iconBbox};
};
