module.exports = function(iconParts,STD2525){
	var iconSIDC = {};
	var iconBbox = {};

	for (var i in MS._letterSIDCicons){
		if (!MS._letterSIDCicons.hasOwnProperty(i)) continue;
		MS._letterSIDCicons[i].call(this,iconSIDC,iconBbox,iconParts,STD2525);
	}
	return {icons:iconSIDC,bbox:iconBbox};
};