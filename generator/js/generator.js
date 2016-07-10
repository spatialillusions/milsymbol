
	var mySymbol = new MS.symbol(), activeStandard, standardVersion;
	//This is to check for internet explorer since it can't draw canvas symbols in a good way.
	var ua = window.navigator.userAgent;
	var isIE = ( ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/')  > 0) ? true : false;
	if(!isIE){
		var image = document.createElement("img");
		image.id = "ImageSymbol";
		document.getElementById("MapMarker").appendChild(image);
	}
	//Activates tab for choosen standard
	function activateTab(id){
		document.getElementById("2525C").className = "";
		document.getElementById("APP6B").className = "";
		document.getElementById("2525D").className = "";
		document.getElementById(id).className = "active";
		
		document.getElementById("letterSIDCtab").className = "";
		document.getElementById("numberSIDCtab").className = "";
		activeStandard = ((id == "2525D")?"number":"letter");
		standardVersion = ((id == "APP6B")?"NATO":"US");
		if(activeStandard == 'number'){
			MS.setStandard("2525");
			numberSIDC.icons();
		}else{
			if(standardVersion == 'NATO'){
				MS.setStandard("APP6");
			}else{
				MS.setStandard("2525");
			}
			letterSIDC.sidccodingscheme();
			letterSIDC.affiliation();
			letterSIDC.battledimension();
			letterSIDC.status();
			letterSIDC.icons();
		}
		document.getElementById(activeStandard+"SIDCtab").className = "active";
	}
	//This is for initiating the letterbased UI with a SIDC
	function sidcCreatorInit(existingSidc){
		var sidc = existingSidc;
		if(window.location.hash){sidc = window.location.hash.substring(1);}
		//We have to initiate this if we start with a number sidc and then switch to a letter sidc
		letterSIDC.modifier12();
		
		if(isNaN(sidc)){
			activateTab('2525C');
			value = sidc.charAt(0).toUpperCase();
			selection = document.getElementById('SIDCCODINGSCHEME');
			for (i = 0; i < selection.length; i++) {
				if (selection.options[i].value == value) {
					selection.selectedIndex = i;
					break;
				}
			}
			value = sidc.charAt(1).toUpperCase();
			selection = document.getElementById('SIDCAFFILIATION');
			for (i in selection){
				if(selection.options[i].value == value){
					selection.selectedIndex = i;
					break;
				}
			}
			letterSIDC.battledimension()
			value = sidc.charAt(2).toUpperCase();
			selection = document.getElementById('SIDCBATTLEDIMENSION');
			for (i in selection){
				if(selection.options[i].value == value){
					selection.selectedIndex = i;
					break;
				}
			}
			value = sidc.charAt(3).toUpperCase();
			selection = document.getElementById('SIDCSTATUS');
			for (i in selection){
				if(selection.options[i].value == value){
					selection.selectedIndex = i;
					break;
				}
			}
		
			letterSIDC.icons();
			value = sidc.substring(4,10).toUpperCase();
			selection = document.getElementById('SIDCFUNCTIONID');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.charAt(10).toUpperCase();
			selection = document.getElementById('SIDCSYMBOLMODIFIER11');
			for (i in selection){
				if(selection.options[i].value == value){
					selection.selectedIndex = i;
					break;
				}
			}
			
			letterSIDC.modifier12();
			value = sidc.charAt(11).toUpperCase();
			selection = document.getElementById('SIDCSYMBOLMODIFIER12');
			for (var i in selection){
				if(selection.options[i].value == value){
					selection.selectedIndex = i;
					break;
				}
			}
		}else{
			activateTab('2525D');
		//fix for number sidc... =========================================================
		
			value = sidc.substring(0,2);
			selection = document.getElementById('2525DVersion');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.substring(2,3);
			selection = document.getElementById('2525DStandardIdentity1');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.substring(3,4);
			selection = document.getElementById('2525DStandardIdentity2');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.substring(4,6);
			selection = document.getElementById('2525DSymbolset');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}	
			value = sidc.substring(6,7);
			selection = document.getElementById('2525DStatus');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.substring(7,8);
			selection = document.getElementById('2525DHQetc');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.substring(8,10);
			selection = document.getElementById('2525DEchelonetc');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			
			numberSIDC.icons();
			value = sidc.substring(10,16);
			selection = document.getElementById('2525DIcon');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			
			numberSIDC.displaySpecialSubtypes();
			value = sidc.substring(14,16);
			selection = document.getElementById('2525DSpecialSubtypes');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
			value = sidc.substring(16,18);
			selection = document.getElementById('2525Dm1');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}			
			value = sidc.substring(18,20);
			selection = document.getElementById('2525Dm2');
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}			
		}
	}
	//Draws a symbol when something changes
	function drawSymbol(){
		function updateProperties(){
			mySymbol.colorMode = MS.getColorMode(document.getElementById("ColorMode")[document.getElementById("ColorMode").selectedIndex].value);
			mySymbol.monoColor = document.getElementById("MonoColor")[document.getElementById("MonoColor").selectedIndex].value;
			mySymbol.frame =  document.getElementById("Frame").checked;
			mySymbol.fill = document.getElementById("Fill").checked;
			mySymbol.icon = document.getElementById("DisplayIcon").checked;
			mySymbol.civilianColor = document.getElementById("CivilianColors").checked;
			mySymbol.infoFields = document.getElementById("infoFields").checked;
			//mySymbol.force2525 = document.getElementById("Force2525").checked;
			mySymbol.size = document.getElementById("Size")[document.getElementById("Size").selectedIndex].value;
			mySymbol.strokeWidth = document.getElementById("StrokeWidth")[document.getElementById("StrokeWidth").selectedIndex].value;
		}
		function updateTexts(){
			function validateTexts(id,valid){
				if(valid){
					document.getElementById(id).className = '';
				}else{
					document.getElementById(id).className = 'textError';
				}
			}
		
			//FieldID C
			mySymbol.quantity = document.getElementById("Quantity").value
			validateTexts("Quantity",(!isNaN(mySymbol.quantity) && mySymbol.quantity.length <= 9));
		
			//FieldID F
			mySymbol.reinforcedReduced = document.getElementById("ReinforcedReduced").value
			validateTexts("ReinforcedReduced",(mySymbol.reinforcedReduced.length <= 3));

			//FieldID G
			mySymbol.staffComments = document.getElementById("StaffComments").value
			validateTexts("StaffComments",(mySymbol.staffComments.length <= 20));
		
			//FieldID H
			mySymbol.additionalInformation = document.getElementById("AdditionalInformation").value
			validateTexts("AdditionalInformation",(mySymbol.additionalInformation.length <= 20));
		
			//FieldID J
			mySymbol.evaluationRating = document.getElementById("evaluationRating").value
			validateTexts("evaluationRating",(mySymbol.evaluationRating.length <= 2));
		
			//FieldID K
			mySymbol.combatEffectiveness = document.getElementById("combatEffectiveness").value
			validateTexts("combatEffectiveness",(mySymbol.combatEffectiveness.length <= 5));
		
			//FieldID L
			mySymbol.signatureEquipment = document.getElementById("signatureEquipment").value
			validateTexts("signatureEquipment",(mySymbol.signatureEquipment.length <= 1));
		
			//FieldID M
			mySymbol.higherFormation = document.getElementById("higherFormation").value
			validateTexts("higherFormation",(mySymbol.higherFormation.length <= 21));
		
			//FieldID N
			mySymbol.hostile = document.getElementById("hostile").value
			validateTexts("hostile",(mySymbol.hostile.length <= 3));
		
			//FieldID P
			mySymbol.iffSif = document.getElementById("iffSif").value
			validateTexts("iffSif",(mySymbol.iffSif.length <= 5));
		
			//FieldID Q
			mySymbol.direction = document.getElementById("Direction").value
			validateTexts("Direction",(!isNaN(mySymbol.direction) && mySymbol.direction.length <= 4));
		
			//FieldID R2
			//mySymbol.sigint = document.getElementById("sigint").value
			//validateTexts("ReinforcedReduced",(mySymbol.reinforcedReduced.length <= 3));
		
			//FieldID T
			mySymbol.uniqueDesignation = document.getElementById("uniqueDesignation").value
			validateTexts("uniqueDesignation",(mySymbol.uniqueDesignation.length <= 21));
		
			//FieldID V
			mySymbol.type = document.getElementById("type").value
			validateTexts("type",(mySymbol.type.length <= 24));
		
			//FieldID W
			mySymbol.dtg = document.getElementById("Dtg").value
			validateTexts("Dtg",(mySymbol.dtg.length <= 16));
		
			//FieldID X
			mySymbol.altitudeDepth = document.getElementById("altitudeDepth").value
			validateTexts("altitudeDepth",(mySymbol.altitudeDepth.length <= 14));
		
			//FieldID Y
			mySymbol.location = document.getElementById("location").value
			validateTexts("location",(mySymbol.location.length <= 19));
		
			//FieldID Z
			mySymbol.speed = document.getElementById("speed").value
			validateTexts("speed",(mySymbol.speed.length <= 8));
		
			//FieldID AA
			mySymbol.specialHeadquarters = document.getElementById("specialHeadquarters").value
			validateTexts("specialHeadquarters",(mySymbol.specialHeadquarters.length <= 9));
		
			//FieldID AD
			//mySymbol.platformType = document.getElementById("platformType").value
			//FieldID AE
			//mySymbol.equipmentTeardownTime = document.getElementById("equipmentTeardownTime").value
			//FieldID AF
			//mySymbol.commonIdentifier = document.getElementById("commonIdentifier").value
			//FieldID AG
			//this.auxiliaryEquipmentIndicator	= 	options.auxiliaryEquipmentIndicator!=undefined?options.auxiliaryEquipmentIndicator:'';
			//FieldID AM Distance

			//FieldID AN Azimuth

			//FieldID AO EngagementBar
		}
		var sidc = '';
		if(activeStandard == 'letter'){
			var SIDCCODINGSCHEME= document.getElementById('SIDCCODINGSCHEME').value;//document.getElementById("SIDCCODINGSCHEME")[document.getElementById("SIDCCODINGSCHEME").selectedIndex].value;
			var SIDCAFFILIATION= document.getElementById("SIDCAFFILIATION")[document.getElementById("SIDCAFFILIATION").selectedIndex].value;
			var SIDCBATTLEDIMENSION= document.getElementById("SIDCBATTLEDIMENSION")[document.getElementById("SIDCBATTLEDIMENSION").selectedIndex].value;
			var SIDCSTATUS= document.getElementById("SIDCSTATUS")[document.getElementById("SIDCSTATUS").selectedIndex].value;
			var SIDCFUNCTIONID = document.getElementById("SIDCFUNCTIONID")[document.getElementById("SIDCFUNCTIONID").selectedIndex].value;
			var SIDCSYMBOLMODIFIER11 = document.getElementById("SIDCSYMBOLMODIFIER11")[document.getElementById("SIDCSYMBOLMODIFIER11").selectedIndex].value;
			var SIDCSYMBOLMODIFIER12 = document.getElementById("SIDCSYMBOLMODIFIER12")[document.getElementById("SIDCSYMBOLMODIFIER12").selectedIndex].value;
			sidc = SIDCCODINGSCHEME + SIDCAFFILIATION + SIDCBATTLEDIMENSION + SIDCSTATUS + SIDCFUNCTIONID + SIDCSYMBOLMODIFIER11 + SIDCSYMBOLMODIFIER12// +  " ** *";
		}else{
			sidc = document.getElementById('2525DVersion').value+document.getElementById('2525DStandardIdentity1').value+document.getElementById('2525DStandardIdentity2').value+document.getElementById('2525DSymbolset').value+document.getElementById('2525DStatus').value+document.getElementById('2525DHQetc').value+document.getElementById('2525DEchelonetc').value+document.getElementById('2525DIcon').value+document.getElementById('2525Dm1').value+document.getElementById('2525Dm2').value;
			if(document.getElementById('2525DSymbolset').value == "10" && document.getElementById('2525DIcon').value.substr(4,2) == "00" ){
				sidc = sidc.substr(0,14) + document.getElementById('2525DSpecialSubtypes').value + sidc.substr(16,4);
			}
		}
		document.getElementById("SIDC").innerHTML = sidc;

		window.location.hash = sidc;	
		mySymbol.SIDC = sidc;
		
		updateProperties();
		updateTexts();
		if(isIE){
			document.getElementById("MapMarker").innerHTML = mySymbol.getMarker().XML
		}else{
			document.getElementById("ImageSymbol").src = mySymbol.getMarker().asCanvas().toDataURL();
		}
	}
	
	var letterSIDC = {
		icons : function(){
			values = {'------':'-'};
			if(document.getElementById('SIDCCODINGSCHEME').value == "S" ){
				if( standardVersion == 'NATO' ){
					//space
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "P" )
						values = {
							"------":"Space Track",
							"S-----":"Satellite",
							"V-----":"Crewed Space Vehicle",
							"T-----":"Space Station"
						};
					//air
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "A" )
						values = {
							"------":"Air Track",
							"M-----":"Military",
							"MF----":"Military.Fixed Wing",
							"MFB---":"Military.Fixed Wing.Bomber",
							"MFF---":"Military.Fixed Wing.Fighter",
							"MFFI--":"Military.Fixed Wing.Fighter.Interceptor",
							"MFT---":"Military.Fixed Wing.Trainer",
							"MFA---":"Military.Fixed Wing.Attack/strike",
							"MFL---":"Military.Fixed Wing.Vstol",
							"MFK---":"Military.Fixed Wing.Tanker",
							"MFC---":"Military.Fixed Wing.Cargo Airlift (Transport)",
							"MFCL--":"Military.Fixed Wing.Cargo Airlift (Transport).Cargo Airlift (Light)",
							"MFCM--":"Military.Fixed Wing.Cargo Airlift (Transport).Cargo Airlift (Medium)",
							"MFCH--":"Military.Fixed Wing.Cargo Airlift (Transport).Cargo Airlift (Heavy)",
							"MFJ---":"Military.Fixed Wing.Electronic Countermeasures(ECM/Jammer)",
							"MFO---":"Military.Fixed Wing.Medevac",
							"MFR---":"Military.Fixed Wing.Reconnaissance",
							"MFRW--":"Military.Fixed Wing.Reconnaissance.Airborne Early Warning (AEW)",
							"MFRZ--":"Military.Fixed Wing.Reconnaissance.Electronic Surveillance Measures",
							"MFRX--":"Military.Fixed Wing.Reconnaissance.Photographic",
							"MFP---":"Military.Fixed Wing.Patrol",
							"MFPN--":"Military.Fixed Wing.Patrol.Anti Surface Warfare/ASUW",
							"MFPM--":"Military.Fixed Wing.Patrol.Mine Counter Measures",
							"MFU---":"Military.Fixed Wing.Utility",
							"MFUL--":"Military.Fixed Wing.Utility.Utility (Light)",
							"MFUM--":"Military.Fixed Wing.Utility.Utility (Medium)",
							"MFUH--":"Military.Fixed Wing.Utility.Utility (Heavy)",
							"MFY---":"Military.Fixed Wing.Communications (C3I)",
							"MFH---":"Military.Fixed Wing.Search And Rescue (CSAR)",
							"MFD---":"Military.Fixed Wing.Airborne Command Post (C2)",
							"MFQ---":"Military.Fixed Wing.Drone (RPV/UAV)",
							"MFS---":"Military.Fixed Wing. Anti Submarine Warfare (ASW) Carrier Based",
							"MFM---":"Military.Fixed Wing.Special Operations Force (SOF)",
							"MH----":"Military.Rotary Wing",
							"MHA---":"Military.Rotary Wing.Attack",
							"MHS---":"Military.Rotary Wing.Antisubmarine Warfare",
							"MHU---":"Military.Rotary Wing.Utility",
							"MHUL--":"Military.Rotary Wing.Utility.Utility (Light)",
							"MHUM--":"Military.Rotary Wing.Utility.Utility (Medium)",
							"MHUH--":"Military.Rotary Wing.Utility.Utility (Heavy)",
							"MHI---":"Military.Rotary Wing.Mine Counter Measures",
							"MHH---":"Military.Rotary Wing.Combat Search And Rescue (CSAR)",
							"MHR---":"Military.Rotary Wing.Reconnaissance",
							"MHQ---":"Military.Rotary Wing.Drone (Rpv/uav)",
							"MHC---":"Military.Rotary Wing.Cargo Airlift (Transport)",
							"MHCL--":"Military.Rotary Wing.Cargo Airlift (Transport).Cargo Airlift (Light)",
							"MHCM--":"Military.Rotary Wing.Cargo Airlift (Transport).Cargo Airlift (Medium)",
							"MHCH--":"Military.Rotary Wing.Cargo Airlift (Transport).Cargo Airlift (Heavy)",
							"MHT---":"Military.Rotary Wing.Trainer",
							"MHO---":"Military.Rotary Wing.Medevac",
							"MHM---":"Military.Rotary Wing.Special Operations Force (SOF)",
							"MHD---":"Military.Rotary Wing.Airborne Command Post (C2)",
							"MHK---":"Military.Rotary Wing.Tanker",
							"MHJ---":"Military.Rotary Wing.Electronic Counter Measures (ECM/Jammer)",
							"ML----":"Military.Lighter Than Air",
							"W-----":"Weapon",
							"WM----":"Weapon.Missile In Flight",
							"WMS---":"Weapon.Missile In Flight.Surface/land Launched Missile",
							"WMSS--":"Weapon.Missile In Flight.Surface/land Launched Missile.Surface To Surface Missile (SSM)",
							"WMSA--":"Weapon.Missile In Flight.Surface/land Launched Missile.Surface To Air Missile (SAM)",
							"WMA---":"Weapon.Missile In Flight.Air Launched Missile",
							"WMAS--":"Weapon.Missile In Flight.Air Launched Missile.Air To Surface Missile (ASM)",
							"WMAA--":"Weapon.Missile In Flight.Air Launched Missile.Air To Air Missile (AAM)",
							"WMU---":"Weapon.Missile In Flight.Subsurface To Surface Missile (S/SSM)",
							"WML---":"Weapon.Missile In Flight.Land Attack Missile",
							"WD----":"Weapon.Decoy",
							"C-----":"Civil Aircraft",
							"CF----":"Civil Aircraft.Fixed Wing",
							"CH----":"Civil Aircraft.Rotary Wing",
							"CL----":"Civil Aircraft.Lighter Than Air"
						};
					//Ground
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "G" )
						values = {
							"------":"Ground Track",
							"U-----":"Unit",
							"UC----":"Unit.Combat",
							"UCD---":"Unit.Combat.Air Defence",
							"UCDS--":"Unit.Combat.Air Defence.Short Range",
							"UCDS--":"Unit.Combat.Air Defence.Short Range.Missile",
							"UCDS--":"Unit.Combat.Air Defence.Short Range.Gun",
							"UCDM--":"Unit.Combat.Air Defence.Air Defence Missile",
							"UCDML-":"Unit.Combat.Air Defence.Air Defence Missile.Air Defence Missile Light",
							"UCDMLA":"Unit.Combat.Air Defence.Air Defence Missile.Air Defence Missile Light.Air Defence Missile Motorized",
							"UCDMM-":"Unit.Combat.Air Defence.Air Defence Missile.Air Defence Missile Medium",
							"UCDMH-":"Unit.Combat.Air Defence.Air Defence Missile.Air Defence Missile Heavy",
							"UCDH--":"Unit.Combat.Air Defence.Air Defence Missile.H/mad",
							"UCDG--":"Unit.Combat.Air Defence.Gun Unit",
							"UCDC--":"Unit.Combat.Air Defence.Composite",
							"UCDT--":"Unit.Combat.Air Defence.Targeting Unit",
							"UCDO--":"Unit.Combat.Air Defence.Theatre Missile Defence Unit",
							"UCA---":"Unit.Combat.Armour",
							"UCAT--":"Unit.Combat.Armour.Armour Track",
							"UCATA-":"Unit.Combat.Armour.Armour Track.Armour Track Airborne",
							"UCATW-":"Unit.Combat.Armour.Armour Track.Armour Track Amphibious",
							"UCATWR":"Unit.Combat.Armour.Armour Track.Armour Track Amphibious.Armour Track Amphibious Recovery",
							"UCATL-":"Unit.Combat.Armour.Armour Track.Armour Track, Light",
							"UCATM-":"Unit.Combat.Armour.Armour Track.Armour Track, Medium",
							"UCATH-":"Unit.Combat.Armour.Armour Track.Armour Track, Heavy",
							"UCATR-":"Unit.Combat.Armour.Armour Track.Armour Track, Recovery",
							"UCAW--":"Unit.Combat.Armour.Armour, Wheeled",
							"UCAWS-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Air Assault",
							"UCAWA-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Airborne",
							"UCAWA-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Amphibious",
							"UCAWL-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Light",
							"UCAWM-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Medium",
							"UCAWH-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Heavy",
							"UCAWR-":"Unit.Combat.Armour.Armour, Wheeled.Armour, Wheeled Recovery",
							"UCAA--":"Unit.Combat.Anti Armour",
							"UCAAD-":"Unit.Combat.Anti Armour.Anti Armour Dismounted",
							"UCAAL-":"Unit.Combat.Anti Armour.Anti Armour Light",
							"UCAAM-":"Unit.Combat.Anti Armour.Anti Armour Airborne",
							"UCAAS-":"Unit.Combat.Anti Armour.Anti Armour Air Assault",
							"UCAAU-":"Unit.Combat.Anti Armour.Anti Armour Mountain",
							"UCAAC-":"Unit.Combat.Anti Armour.Anti Armour Arctic",
							"UCAAA-":"Unit.Combat.Anti Armour.Anti Armour Armoured",
							"UCAAAT":"Unit.Combat.Anti Armour.Anti Armour Armoured.Anti Armour Armoured Tracked",
							"UCAAAW":"Unit.Combat.Anti Armour.Anti Armour Armoured.Anti Armour Armoured Wheeled",
							"UCAAAS":"Unit.Combat.Anti Armour.Anti Armour Armoured.Anti Armour Armoured Air Assault",
							"UCAAO-":"Unit.Combat.Anti Armour.Anti Armour Motorized",
							"UCAAOS":"Unit.Combat.Anti Armour.Anti Armour Motorized.Anti Armour Motorized Air Assault",
							"UCV---":"Unit.Combat.Aviation",
							"UCVF--":"Unit.Combat.Aviation.Fixed Wing",
							"UCVFU-":"Unit.Combat.Aviation.Fixed Wing.Utility Fixed Wing",
							"UCVFA-":"Unit.Combat.Aviation.Fixed Wing.Attack Fixed Wing",
							"UCVUTP":"Unit.Combat.Aviation.Fixed Wing.Attack Fixed Wing.Tactical Air Control Party (TACP)",
							"UCVUFC":"Unit.Combat.Aviation.Fixed Wing.Attack Fixed Wing.Forward Air Controller (FAC)",
							"UCVFR-":"Unit.Combat.Aviation.Fixed Wing.Recon Fixed Wing",
							"UCVR--":"Unit.Combat.Aviation.Rotary Wing",
							"UCVRA-":"Unit.Combat.Aviation.Rotary Wing.Attack Rotary Wing",
							"UCVRS-":"Unit.Combat.Aviation.Rotary Wing.Scout Rotary Wing",
							"UCVRW-":"Unit.Combat.Aviation.Rotary Wing.Antisubmarine Warfare Rotary Wing",
							"UCVRU-":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing",
							"UCVRUL":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing.Light Utility Rotary Wing",
							"UCVRUM":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing.Medium Utility Rotary Wing",
							"UCVRUH":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing.Heavy Utility Rotary Wing",
							"UCVRUC":"Unit.Combat.Aviation.Rotary Wing.C2 Rotary Wing",
							"UCVRUE":"Unit.Combat.Aviation.Rotary Wing.Medevac Rotary Wing",
							"UCVRM-":"Unit.Combat.Aviation.Rotary Wing.Mine Countermeasure Rotary Wing",
							"UCVS--":"Unit.Combat.Aviation.Personnel Recovery",
							"UCVC--":"Unit.Combat.Aviation.Composite",
							"UCVV--":"Unit.Combat.Aviation.Vertical/short Takeoff And Landing (V/STOL)",
							"UCVU--":"Unit.Combat.Aviation.Unmanned Aerial Vehicle",
							"UCVUF-":"Unit.Combat.Aviation.Unmanned Aerial Vehicle.Unmanned Aerial Vehicle Fixed Wing",
							"UCVUR-":"Unit.Combat.Aviation.Unmanned Aerial Vehicle.Unmanned Aerial Vehicle Rotary Wing",
							"UCVUTP":"Unit.Combat.Aviation.Unmanned Aerial Vehicle.Tactical Air Control Party (TACP)",
							"UCVUFC":"Unit.Combat.Aviation.Unmanned Aerial Vehicle.Forward Air Controller (FAC)",
							"UCI---":"Unit.Combat.Infantry",
							"UCIL--":"Unit.Combat.Infantry.Infantry Light",
							"UCIM--":"Unit.Combat.Infantry.Infantry Motorized",
							"UCIO--":"Unit.Combat.Infantry.Infantry Mountain",
							"UCIA--":"Unit.Combat.Infantry.Infantry Airborne",
							"UCIS--":"Unit.Combat.Infantry.Infantry Air Assault",
							"UCIZ--":"Unit.Combat.Infantry.Infantry Mechanized",
							"UCIN--":"Unit.Combat.Infantry.Infantry Naval",
							"UCII--":"Unit.Combat.Infantry.Infantry Fighting Vehicle",
							"UCIC--":"Unit.Combat.Infantry.Infantry Arctic",
							"UCE---":"Unit.Combat.Engineer",
							"UCEC--":"Unit.Combat.Engineer.Engineer Combat",
							"UCECS-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Air Assault",
							"UCECA-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Airborne",
							"UCECC-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Arctic",
							"UCECL-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Light",
							"UCECM-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Medium",
							"UCECH-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Heavy",
							"UCECT-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Mechanized (Track)",
							"UCECW-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Motorized",
							"UCECO-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Mountain",
							"UCECR-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Recon",
							"UCEC--":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Bridging",
							"UCEC--":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Mine Clearing",
							"UCEC--":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Mine Laying",
							"UCEC--":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Diving",
							"UCEN--":"Unit.Combat.Engineer.Engineer Construction",
							"UCENN-":"Unit.Combat.Engineer.Engineer Construction.Engineer Naval Construction",
							"UCF---":"Unit.Combat.Field Artillery",
							"UCFH--":"Unit.Combat.Field Artillery.Howitzer/Gun",
							"UCFHE-":"Unit.Combat.Field Artillery.Howitzer/Gun.Self Propelled",
							"UCFHS-":"Unit.Combat.Field Artillery.Howitzer/Gun.Air Assault",
							"UCFHA-":"Unit.Combat.Field Artillery.Howitzer/Gun.Airborne",
							"UCFHC-":"Unit.Combat.Field Artillery.Howitzer/Gun.Arctic",
							"UCFHO-":"Unit.Combat.Field Artillery.Howitzer/Gun.Mountain",
							"UCFHL-":"Unit.Combat.Field Artillery.Howitzer/Gun.Light",
							"UCFHM-":"Unit.Combat.Field Artillery.Howitzer/Gun.Medium",
							"UCFHH-":"Unit.Combat.Field Artillery.Howitzer/Gun.Heavy",
							"UCFHX-":"Unit.Combat.Field Artillery.Howitzer/Gun.Amphibious",
							"UCFR--":"Unit.Combat.Field Artillery.Rocket",
							"UCFRS-":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher",
							"UCFRSS":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher.Single Rocket Self Propelled",
							"UCFRSR":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher.Single Rocket Truck",
							"UCFRST":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher.Single Rocket Towed",
							"UCFRM-":"Unit.Combat.Field Artillery.Rocket.Multi Rocket Launcher",
							"UCFRMS":"Unit.Combat.Field Artillery.Rocket.Multi Rocket Launcher.Multi Rocket Self Propelled",
							"UCFRMR":"Unit.Combat.Field Artillery.Rocket.Multi Rocket Launcher.Multi Rocket Truck",
							"UCFRMT":"Unit.Combat.Field Artillery.Rocket.Multi Rocket Launcher.Multi Rocket Towed",
							"UCFT--":"Unit.Combat.Field Artillery.Target Acquisition",
							"UCFTR-":"Unit.Combat.Field Artillery.Target Acquisition.Radar",
							"UCFTS-":"Unit.Combat.Field Artillery.Target Acquisition.Sound",
							"UCFTF-":"Unit.Combat.Field Artillery.Target Acquisition.Flash (Optical)",
							"UCFTC-":"Unit.Combat.Field Artillery.Target Acquisition.Target Acquisition Mounted",
							"UCFTCD":"Unit.Combat.Field Artillery.Target Acquisition.Target Acquisition Mounted.Target Acquisition Dismounted",
							"UCFTCM":"Unit.Combat.Field Artillery.Target Acquisition.Target Acquisition Mounted.Target Acquisition Tracked",
							"UCFTA-":"Unit.Combat.Field Artillery.Target Acquisition.Target Acquisition Naval Gunfire",
							"UCFM--":"Unit.Combat.Field Artillery.Mortar",
							"UCFMS-":"Unit.Combat.Field Artillery.Mortar.Self Propelled (SP) Tracked Mortar",
							"UCFMSW":"Unit.Combat.Field Artillery.Mortar.Sp Wheeled Mortar",
							"UCFMT-":"Unit.Combat.Field Artillery.Mortar.Towed Mortar",
							"UCFMTA":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Airborne Mortar",
							"UCFMTS":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Air Assault Mortar",
							"UCFMTC":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Arctic Mortar",
							"UCFMTO":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Mountain Mortar",
							"UCFML-":"Unit.Combat.Field Artillery.Mortar.Amphibious Mortar",
							"UCFS--":"Unit.Combat.Field Artillery.Artillery Survey",
							"UCFSS-":"Unit.Combat.Field Artillery.Artillery Survey.Air Assault",
							"UCFSA-":"Unit.Combat.Field Artillery.Artillery Survey.Airborne",
							"UCFSL-":"Unit.Combat.Field Artillery.Artillery Survey.Light",
							"UCFSO-":"Unit.Combat.Field Artillery.Artillery Survey.Mountain",
							"UCFO--":"Unit.Combat.Field Artillery.Meteorological",
							"UCFOS-":"Unit.Combat.Field Artillery.Meteorological.Air Assault Meteorological",
							"UCFOA-":"Unit.Combat.Field Artillery.Meteorological.Airborne Meteorological",
							"UCFOL-":"Unit.Combat.Field Artillery.Meteorological.Light Meteorological",
							"UCFOO-":"Unit.Combat.Field Artillery.Meteorological.Mountain Meteorological",
							"UCF---":"Unit.Combat.Field Artillery.Fire Direction Centre",
							"UCF---":"Unit.Combat.Field Artillery.Oberserver",
							"UCR---":"Unit.Combat.Reconnaissance",
							"UCRH--":"Unit.Combat.Reconnaissance.Reconnaissance Horse",
							"UCRV--":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry",
							"UCRVA-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Armoured",
							"UCRVM-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Motorized",
							"UCRVG-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Ground",
							"UCRVO-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Air",
							"UCRC--":"Unit.Combat.Reconnaissance.Reconnaissance Arctic",
							"UCRS--":"Unit.Combat.Reconnaissance.Reconnaissance Air Assault",
							"UCRA--":"Unit.Combat.Reconnaissance.Reconnaissance Airborne",
							"UCRO--":"Unit.Combat.Reconnaissance.Reconnaissance Mountain",
							"UCRLL-":"Unit.Combat.Reconnaissance. Reconnaissance Light",
							"UCRR--":"Unit.Combat.Reconnaissance.Reconnaissance Marine",
							"UCRRD-":"Unit.Combat.Reconnaissance.Reconnaissance Marine.Reconnaissance Marine Division",
							"UCRRF-":"Unit.Combat.Reconnaissance.Reconnaissance Marine.Reconnaissance Marine Force",
							"UCRRL-":"Unit.Combat.Reconnaissance.Reconnaissance Marine.Reconnaissance Marine Light Armoured Reconnaissance (LAR)",
							"UCRX--":"Unit.Combat.Reconnaissance.Reconnaissance Long Range Surveillance (LRS)",
							"UCM---":"Unit.Combat.Missile (Surface-surface)",
							"UCMT--":"Unit.Combat.Missile (Surface-surface).Missile (Surface-surface) Tactical",
							"UCMS--":"Unit.Combat.Missile (Surface-surface).Missile (Surface-surface) Strategic",
							"UCS---":"Unit.Combat.Internal Security Forces",
							"UCSW--":"Unit.Combat.Internal Security Forces.Riverine",
							"UCSG--":"Unit.Combat.Internal Security Forces.Ground",
							"UCSGD-":"Unit.Combat.Internal Security Forces.Ground.Dismounted Ground",
							"UCSGM-":"Unit.Combat.Internal Security Forces.Ground.Motorized Ground",
							"UCSGA-":"Unit.Combat.Internal Security Forces.Ground.Mechanized Ground",
							"UCSM--":"Unit.Combat.Internal Security Forces.Wheeled Mechanized",
							"UCSR--":"Unit.Combat.Internal Security Forces.Railroad",
							"UCSA--":"Unit.Combat.Internal Security Forces.Aviation",
							"UU----":"Unit.Combat Support",
							"UUA---":"Unit.Combat Support.Combat Support Cbrn",
							"UUAC--":"Unit.Combat Support.Combat Support Cbrn.Chemical",
							"UUACC-":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke/decon",
							"UUACCK":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke/decon.Mechanized Smoke/decon",
							"UUACCM":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke/decon.Motorized Smoke/decon",
							"UUACS-":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke",
							"UUACSM":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke.Motorized Smoke",
							"UUACSA":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke.Armour Smoke",
							"UUACR-":"Unit.Combat Support.Combat Support Cbrn.Chemical.Chemical Recon",
							"UUACRW":"Unit.Combat Support.Combat Support Cbrn.Chemical.Chemical Recon.Chemical Wheeled Armoured Vehicle",
							"UUACRS":"Unit.Combat Support.Combat Support Cbrn.Chemical.Chemical Recon.Chemical Wheeled Armoured Vehicle Reconnaissance Surveillance",
							"UUAN--":"Unit.Combat Support.Combat Support Cbrn.Nuclear",
							"UUAB--":"Unit.Combat Support.Combat Support Cbrn.Biological",
							"UUABR-":"Unit.Combat Support.Combat Support Cbrn.Biological.Recon Equipped",
							"UUAD--":"Unit.Combat Support.Combat Support Cbrn.Decontamination",
							"UUM---":"Unit.Combat Support.Military Intelligence",
							"UUMA--":"Unit.Combat Support.Military Intelligence.Aerial Exploitation",
							"UUMS--":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint)",
							"UUMSE-":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare",
							"UUMSEA":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Armoured Wheeled Vehicle",
							"UUMSED":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Direction Finding",
							"UUMSEI":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Intercept",
							"UUMSEJ":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Jamming",
							"UUMSET":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Theatre",
							"UUMSEC":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Corps",
							"UUMC--":"Unit.Combat Support.Military Intelligence.Counter Intelligence",
							"UUMR--":"Unit.Combat Support.Military Intelligence.Surveillance",
							"UUMRG-":"Unit.Combat Support.Military Intelligence.Surveillance.Ground Surveillance Radar",
							"UUMRS-":"Unit.Combat Support.Military Intelligence.Surveillance.Sensor",
							"UUMRSS":"Unit.Combat Support.Military Intelligence.Surveillance.Sensor.Sensor Scm",
							"UUMRX-":"Unit.Combat Support.Military Intelligence.Surveillance.Ground Station Module",
							"UUMMO-":"Unit.Combat Support.Military Intelligence.Surveillance.Meteorological",
							"UUMO--":"Unit.Combat Support.Military Intelligence.Operations",
							"UUMT--":"Unit.Combat Support.Military Intelligence.Tactical Exploit",
							"UUMQ--":"Unit.Combat Support.Military Intelligence.Interrogation",
							"UUMJ--":"Unit.Combat Support.Military Intelligence.Joint Intelligence Centre",
							"UUL---":"Unit.Combat Support.Law Enforcement Unit",
							"UULS--":"Unit.Combat Support.Law Enforcement Unit.Shore Patrol",
							"UULM--":"Unit.Combat Support.Law Enforcement Unit.Military Police",
							"UULC--":"Unit.Combat Support.Law Enforcement Unit.Civilian Law Enforcement",
							"UULF--":"Unit.Combat Support.Law Enforcement Unit.Security Police (Air)",
							"UULD--":"Unit.Combat Support.Law Enforcement Unit.Central Intelligence Division (CID)",
							"UUS---":"Unit.Combat Support.Signal Unit",
							"UUSA--":"Unit.Combat Support.Signal Unit.Area",
							"UUSC--":"Unit.Combat Support.Signal Unit.Communication Configured Package",
							"UUSCL-":"Unit.Combat Support.Signal Unit.Communication Configured Package.Large Communication Configured Package (LCCP)",
							"UUSO--":"Unit.Combat Support.Signal Unit.Command Operations",
							"UUSF--":"Unit.Combat Support.Signal Unit.Forward Communications",
							"UUSM--":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element",
							"UUSMS-":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element.Small Extension Node",
							"UUSML-":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element.Large Extension Node",
							"UUSMN-":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element.Node Centre",
							"UUSR--":"Unit.Combat Support.Signal Unit.Radio Unit",
							"UUSRS-":"Unit.Combat Support.Signal Unit.Radio Unit.Tactical Satellite",
							"UUSRT-":"Unit.Combat Support.Signal Unit.Radio Unit.Teletype Centre",
							"UUSRW-":"Unit.Combat Support.Signal Unit.Radio Unit.Relay",
							"UUSS--":"Unit.Combat Support.Signal Unit.Signal Support",
							"UUSW--":"Unit.Combat Support.Signal Unit.Telephone Switch",
							"UUSX--":"Unit.Combat Support.Signal Unit.Electronic Ranging",
							"UUI---":"Unit.Combat Support.Information Warfare Unit",
							"UUX---":"Unit.Combat Support.Landing Support",
							"UUE---":"Unit.Combat Support.Explosive Ordinance Disposal",
							"UUT---":"Unit.Combat Support.Topographic",
							"UU----":"Unit.Combat Support.Dog",
							"UUD---":"Unit.Combat Support.Drilling",
							"US----":"Unit.Combat Service Support",
							"USA---":"Unit.Combat Service Support.Administrative (Admin)",
							"USAT--":"Unit.Combat Service Support.Administrative (Admin).Admin Theatre",
							"USAC--":"Unit.Combat Service Support.Administrative (Admin).Admin Corps",
							"USAJ--":"Unit.Combat Service Support.Administrative (Admin).Judge Advocate General (JAG)",
							"USAJT-":"Unit.Combat Service Support.Administrative (Admin).Judge Advocate General (JAG).JAG Theatre",
							"USAJC-":"Unit.Combat Service Support.Administrative (Admin).Judge Advocate General (JAG).JAG Corps",
							"USAO--":"Unit.Combat Service Support.Administrative (Admin).Postal",
							"USAOT-":"Unit.Combat Service Support.Administrative (Admin).Postal.Postal Theatre",
							"USAOC-":"Unit.Combat Service Support.Administrative (Admin).Postal.Postal Corps",
							"USAF--":"Unit.Combat Service Support.Administrative (Admin).Finance",
							"USAFT-":"Unit.Combat Service Support.Administrative (Admin).Finance.Finance Theatre",
							"USAFC-":"Unit.Combat Service Support.Administrative (Admin).Finance.Finance Corps",
							"USAS--":"Unit.Combat Service Support.Administrative (Admin).Personnel Services",
							"USAST-":"Unit.Combat Service Support.Administrative (Admin).Personnel Services.Personnel Theatre",
							"USASC-":"Unit.Combat Service Support.Administrative (Admin).Personnel Services.Personnel Corps",
							"USAM--":"Unit.Combat Service Support.Administrative (Admin).Mortuary/graves Registry",
							"USAMT-":"Unit.Combat Service Support.Administrative (Admin).Mortuary/graves Registry.Mortuary/graves Registry Theatre",
							"USAMC-":"Unit.Combat Service Support.Administrative (Admin).Mortuary/graves Registry.Mortuary/graves Registry Corps",
							"USAR--":"Unit.Combat Service Support.Administrative (Admin).Religious/chaplain",
							"USART-":"Unit.Combat Service Support.Administrative (Admin).Religious/chaplain.Religious/chaplain Theatre",
							"USARC-":"Unit.Combat Service Support.Administrative (Admin).Religious/chaplain.Religious/chaplain Corps",
							"USAP--":"Unit.Combat Service Support.Administrative (Admin).Public Affairs",
							"USAPT-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Theatre",
							"USAPC-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Corps",
							"USAPB-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Broadcast",
							"USAPBT":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Broadcast.Public Affairs Broadcast Theatre",
							"USAPBC":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Broadcast.Public Affairs Broadcast Corps",
							"USAPM-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Joint Information Bureau (JIB)",
							"USAPMT":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Joint Information Bureau (JIB).Public Affairs JIB Theatre",
							"USAPMC":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Joint Information Bureau (JIB).Public Affairs JIB Corps",
							"USAX--":"Unit.Combat Service Support.Administrative (Admin).Replacement Holding Unit (RHU)",
							"USAXT-":"Unit.Combat Service Support.Administrative (Admin).Replacement Holding Unit (RHU).RHU Theatre",
							"USAXC-":"Unit.Combat Service Support.Administrative (Admin).Replacement Holding Unit (RHU).RHU Corps",
							"USAL--":"Unit.Combat Service Support.Administrative (Admin).Labour",
							"USALT-":"Unit.Combat Service Support.Administrative (Admin).Labour.Labour Theatre",
							"USALC-":"Unit.Combat Service Support.Administrative (Admin).Labour.Labour Corps",
							"USAW--":"Unit.Combat Service Support.Administrative (Admin).Moral, Welfare, Recreation (MWR)",
							"USAWT-":"Unit.Combat Service Support.Administrative (Admin).Moral, Welfare, Recreation (MWR).MWR Theatre",
							"USAWC-":"Unit.Combat Service Support.Administrative (Admin).Moral, Welfare, Recreation (MWR).MWR Corps",
							"USAQ--":"Unit.Combat Service Support.Administrative (Admin).Quartermaster (Supply)",
							"USAQT-":"Unit.Combat Service Support.Administrative (Admin).Quartermaster (Supply).Quartermaster (Supply) Theatre",
							"USAQC-":"Unit.Combat Service Support.Administrative (Admin).Quartermaster (Supply).Quartermaster (Supply) Corps",
							"USM---":"Unit.Combat Service Support.Medical",
							"USMT--":"Unit.Combat Service Support.Medical.Medical Theatre",
							"USMC--":"Unit.Combat Service Support.Medical.Medical Corps",
							"USMM--":"Unit.Combat Service Support.Medical.Medical Treatment Facility",
							"USMMT-":"Unit.Combat Service Support.Medical.Medical Treatment Facility.Medical Treatment Facility Theatre",
							"USMMC-":"Unit.Combat Service Support.Medical.Medical Treatment Facility.Medical Treatment Facility Corps",
							"USMV--":"Unit.Combat Service Support.Medical.Medical Veterinary",
							"USMVT-":"Unit.Combat Service Support.Medical.Medical Veterinary.Medical Veterinary Theatre",
							"USMVC-":"Unit.Combat Service Support.Medical.Medical Veterinary.Medical Veterinary Corps",
							"USMD--":"Unit.Combat Service Support.Medical.Medical Dental",
							"USMDT-":"Unit.Combat Service Support.Medical.Medical Dental.Medical Dental Theatre",
							"USMDC-":"Unit.Combat Service Support.Medical.Medical Dental.Medical Dental Corps",
							"USMP--":"Unit.Combat Service Support.Medical.Medical Psychological",
							"USMPT-":"Unit.Combat Service Support.Medical.Medical Psychological.Medical Psychological Theatre",
							"USMPC-":"Unit.Combat Service Support.Medical.Medical Psychological.Medical Psychological Corps",
							"USS---":"Unit.Combat Service Support.Supply",
							"USST--":"Unit.Combat Service Support.Supply.Supply Theatre",
							"USSC--":"Unit.Combat Service Support.Supply.Supply Corps",
							"USS1--":"Unit.Combat Service Support.Supply.Supply Class I",
							"USS1T-":"Unit.Combat Service Support.Supply.Supply Class I.Supply Class I Theatre",
							"USS1C-":"Unit.Combat Service Support.Supply.Supply Class I.Supply Class I Corps",
							"USS2--":"Unit.Combat Service Support.Supply.Supply Class II",
							"USS2T-":"Unit.Combat Service Support.Supply.Supply Class II.Supply Class II Theatre",
							"USS2C-":"Unit.Combat Service Support.Supply.Supply Class II.Supply Class II Corps",
							"USS3--":"Unit.Combat Service Support.Supply.Supply Class III",
							"USS3T-":"Unit.Combat Service Support.Supply.Supply Class III.Supply Class III Theatre",
							"USS3C-":"Unit.Combat Service Support.Supply.Supply Class III.Supply Class III Corps",
							"USS3A-":"Unit.Combat Service Support.Supply.Supply Class III.Supply Class III Aviation",
							"USS3AT":"Unit.Combat Service Support.Supply.Supply Class III.Supply Class III Aviation.Supply Class III Aviation",
							"USS3AC":"Unit.Combat Service Support.Supply.Supply Class III.Supply Class III Aviation.Supply Class III Aviation Corps",
							"USS4--":"Unit.Combat Service Support.Supply.Supply Class IV",
							"USS4T-":"Unit.Combat Service Support.Supply.Supply Class IV.Supply Class IV Theatre",
							"USS4C-":"Unit.Combat Service Support.Supply.Supply Class IV.Supply Class IV Corps",
							"USS5--":"Unit.Combat Service Support.Supply.Supply Class V",
							"USS5T-":"Unit.Combat Service Support.Supply.Supply Class V.Supply Class V Theatre",
							"USS5C-":"Unit.Combat Service Support.Supply.Supply Class V.Supply Class V Corps",
							"USS6--":"Unit.Combat Service Support.Supply.Supply Class VI",
							"USS6T-":"Unit.Combat SerVIce Support.Supply.Supply Class VI.Supply Class VI Theatre",
							"USS6C-":"Unit.Combat SerVIce Support.Supply.Supply Class VI.Supply Class VI Corps",
							"USS7--":"Unit.Combat Service Support.Supply.Supply Class VII",
							"USS7T-":"Unit.Combat Service Support.Supply.Supply Class VII.Supply Class VII Theatre",
							"USS7C-":"Unit.Combat Service Support.Supply.Supply Class VII.Supply Class VII Corps",
							"USS8--":"Unit.Combat Service Support.Supply.Supply Class VIII",
							"USS8T-":"Unit.Combat Service Support.Supply.Supply Class VIII.Supply Class VIII Theatre",
							"USS8C-":"Unit.Combat Service Support.Supply.Supply Class VIII.Supply Class VIII Corps",
							"USS9--":"Unit.Combat Service Support.Supply.Supply Class IX",
							"USS9T-":"Unit.Combat Service Support.Supply.Supply Class IX.Supply Class IX Theatre",
							"USS9C-":"Unit.Combat Service Support.Supply.Supply Class IX.Supply Class IX Corps",
							"USSX--":"Unit.Combat Service Support.Supply.Supply Class X",
							"USSXT-":"Unit.Combat Service Support.Supply.Supply Class X.Supply Class X Theatre",
							"USSXC-":"Unit.Combat Service Support.Supply.Supply Class X.Supply Class X Corps",
							"USSL--":"Unit.Combat Service Support.Supply.Supply Laundry/bath",
							"USSLT-":"Unit.Combat Service Support.Supply.Supply Laundry/bath.Supply Laundry/bath Theatre",
							"USSLC-":"Unit.Combat Service Support.Supply.Supply Laundry/bath.Supply Laundry/bath Corps",
							"USSW--":"Unit.Combat Service Support.Supply.Supply Water",
							"USSWT-":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Theatre",
							"USSWC-":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Corps",
							"USSWP-":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Purification",
							"USSWPT":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Purification.Supply Water Purification Theatre",
							"USSWPC":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Purification.Supply Water Purification Corps",
							"UST---":"Unit.Combat Service Support.Transportation",
							"USTT--":"Unit.Combat Service Support.Transportation.Transportation Theatre",
							"USTC--":"Unit.Combat Service Support.Transportation.Transportation Corps",
							"USTM--":"Unit.Combat Service Support.Transportation.Movement Control Centre(mcc)",
							"USTMT-":"Unit.Combat Service Support.Transportation.Movement Control Centre(mcc).Mcc Theatre",
							"USTMC-":"Unit.Combat Service Support.Transportation.Movement Control Centre(mcc).Mcc Corps",
							"USTR--":"Unit.Combat Service Support.Transportation.Railhead",
							"USTRT-":"Unit.Combat Service Support.Transportation.Railhead.Railhead Theatre",
							"USTRC-":"Unit.Combat Service Support.Transportation.Railhead.Railhead Corps",
							"USTS--":"Unit.Combat Service Support.Transportation.SPOD/SPOE",
							"USTST-":"Unit.Combat Service Support.Transportation.SPOD/SPOE.SPOD/SPOE Theatre",
							"USTSC-":"Unit.Combat Service Support.Transportation.SPOD/SPOE.SPOD/SPOE Corps",
							"USTA--":"Unit.Combat Service Support.Transportation.APOD/APOE",
							"USTAT-":"Unit.Combat Service Support.Transportation.APOD/APOE.APOD/APOE Theatre",
							"USTAC-":"Unit.Combat Service Support.Transportation.APOD/APOE.APOD/APOE Corps",
							"USTI--":"Unit.Combat Service Support.Transportation.Missile",
							"USTIT-":"Unit.Combat Service Support.Transportation.Missile.Missile Theatre",
							"USTIC-":"Unit.Combat Service Support.Transportation.Missile.Missile Corps",
							"USX---":"Unit.Combat Service Support.Maintenance",
							"USXT--":"Unit.Combat Service Support.Maintenance.Maintenance Theatre",
							"USXC--":"Unit.Combat Service Support.Maintenance.Maintenance Corps",
							"USXH--":"Unit.Combat Service Support.Maintenance.Maintenance Heavy",
							"USXHT-":"Unit.Combat Service Support.Maintenance.Maintenance Heavy.Maintenance Heavy Theatre",
							"USXHC-":"Unit.Combat Service Support.Maintenance.Maintenance Heavy.Maintenance Heavy Corps",
							"USXR--":"Unit.Combat Service Support.Maintenance.Maintenance Recovery",
							"USXRT-":"Unit.Combat Service Support.Maintenance.Maintenance Recovery.Maintenance Recovery Theatre",
							"USXRC-":"Unit.Combat Service Support.Maintenance.Maintenance Recovery.Maintenance Recovery Corps",
							"USXO--":"Unit.Combat Service Support.Maintenance.Ordinance",
							"USXOT-":"Unit.Combat Service Support.Maintenance.Ordinance.Ordinance Theatre",
							"USXOC-":"Unit.Combat Service Support.Maintenance.Ordinance.Ordinance Corps",
							"USXOM-":"Unit.Combat Service Support.Maintenance.Ordinance.Ordinance Missile",
							"USXOMT":"Unit.Combat Service Support.Maintenance.Ordinance.Ordinance Missile.Ordinance Missile Theatre",
							"USXOMC":"Unit.Combat Service Support.Maintenance.Ordinance.Ordinance Missile.Ordinance Missile Corps",
							"USXE--":"Unit.Combat Service Support.Maintenance.Electro-optical",
							"USXET-":"Unit.Combat Service Support.Maintenance.Electro-optical.Electro-optical Theatre",
							"USXEC-":"Unit.Combat Service Support.Maintenance.Electro-optical.Electro-optical Corps",
							"USXBDR":"Unit.Combat Service Support.Maintenance.Battle Damage Repair",
							"USXPM-":"Unit.Combat Service Support.Maintenance.Preventive Maintanance",
							"USXP--":"Unit.Combat Service Support.Pipeline",
							"USXEP-":"Unit.Combat Service Support.Environmental Protection",
							"UH----":"Unit.Special C2 Headquarters Component",
							"UH----":"Unit.Unit General Headquarters",
							"UH----":"Unit.General Headquarters And Service",
							"UHGL--":"Unit.Unit General Liaison",
							"E-----":"Ground Track Equipment",
							"EW----":"Ground Track Equipment.Weapons",
							"EWM---":"Ground Track Equipment.Weapons.Missile Launchers",
							"EWMA--":"Ground Track Equipment.Weapons.Missile Launchers.Air Defence (AD) Missile Launch",
							"EWMAS-":"Ground Track Equipment.Weapons.Missile Launchers.Air Defence (AD) Missile Launch.Short Range AD Missile Launchers",
							"EWMAI-":"Ground Track Equipment.Weapons.Missile Launchers.Air Defence (AD) Missile Launch.Intermediate Range AD Missile Launch",
							"EWMAL-":"Ground Track Equipment.Weapons.Missile Launchers.Air Defence (AD) Missile Launch.Long Range AD Missile Launch",
							"EWMAT-":"Ground Track Equipment.Weapons.Missile Launchers.Air Defence (AD) Missile Launch.AD Missile Launch Theatre",
							"EWMS--":"Ground Track Equipment.Weapons.Missile Launchers.Surface-surface (SS) Missile Launcher",
							"EWMSS-":"Ground Track Equipment.Weapons.Missile Launchers.Surface-surface (SS) Missile Launcher.Short Range Ss Missile Launch",
							"EWMSI-":"Ground Track Equipment.Weapons.Missile Launchers.Surface-surface (SS) Missile Launcher.Intermediate Range Ss Missile Launch",
							"EWMSL-":"Ground Track Equipment.Weapons.Missile Launchers.Surface-surface (SS) Missile Launcher.Long Range Ss Missile Launch",
							"EWMT--":"Ground Track Equipment.Weapons.Missile Launchers.Missile Launchers Anti Tank (AT)",
							"EWMTL-":"Ground Track Equipment.Weapons.Missile Launchers.Missile Launchers Anti Tank (AT).Missile Launchers AT Light",
							"EWMTM-":"Ground Track Equipment.Weapons.Missile Launchers.Missile Launchers Anti Tank (AT).Missile Launcher AT Medium",
							"EWMTH-":"Ground Track Equipment.Weapons.Missile Launchers.Missile Launchers Anti Tank (AT).Missile Launcher AT Heavy",
							"EWS---":"Ground Track Equipment.Weapons.Single Rocket Launcher",
							"EWSL--":"Ground Track Equipment.Weapons.Single Rocket Launcher.Single Rocket Launcher Light",
							"EWSM--":"Ground Track Equipment.Weapons.Single Rocket Launcher.Single Rocket Launcher Medium",
							"EWSH--":"Ground Track Equipment.Weapons.Single Rocket Launcher.Single Rocket Launcher Heavy",
							"EWX---":"Ground Track Equipment.Weapons.Multiple Rocket Launcher",
							"EWXL--":"Ground Track Equipment.Weapons.Multiple Rocket Launcher.Multiple Rocket Launcher Light",
							"EWXM--":"Ground Track Equipment.Weapons.Multiple Rocket Launcher.Multiple Rocket Launcher Medium",
							"EWXH--":"Ground Track Equipment.Weapons.Multiple Rocket Launcher.Multiple Rocket Launcher Heavy",
							"EWT---":"Ground Track Equipment.Weapons.Antitank Rocket Launcher",
							"EWTL--":"Ground Track Equipment.Weapons.Antitank Rocket Launcher.Antitank Rocket Launcher Light",
							"EWTM--":"Ground Track Equipment.Weapons.Antitank Rocket Launcher.Antitank Rocket Launcher Medium",
							"EWTH--":"Ground Track Equipment.Weapons.Antitank Rocket Launcher.Antitank Rocket Launcher Heavy",
							"EWR---":"Ground Track Equipment.Weapons.Rifle/automatic Weapon",
							"EWRR--":"Ground Track Equipment.Weapons.Rifle/automatic Weapon.Rifle",
							"EWRL--":"Ground Track Equipment.Weapons.Rifle/automatic Weapon.Light Machine Gun",
							"EWRH--":"Ground Track Equipment.Weapons.Rifle/automatic Weapon.Heavy Machine Gun",
							"EWZ---":"Ground Track Equipment.Weapons.Grenade Launcher",
							"EWZL--":"Ground Track Equipment.Weapons.Grenade Launcher.Grenade Launcher Light",
							"EWZM--":"Ground Track Equipment.Weapons.Grenade Launcher.Grenade Launcher Medium",
							"EWZH--":"Ground Track Equipment.Weapons.Grenade Launcher.Grenade Launcher Heavy",
							"EWO---":"Ground Track Equipment.Weapons.Mortar",
							"EWOL--":"Ground Track Equipment.Weapons.Mortar.Mortar Light",
							"EWOM--":"Ground Track Equipment.Weapons.Mortar.Mortar Medium",
							"EWOH--":"Ground Track Equipment.Weapons.Mortar.Mortar Heavy",
							"EWH---":"Ground Track Equipment.Weapons.Howitzer",
							"EWHL--":"Ground Track Equipment.Weapons.Howitzer.Howitzer Light",
							"EWHLS-":"Ground Track Equipment.Weapons.Howitzer.Howitzer Light.Howitzer Light Self-propelled",
							"EWHM--":"Ground Track Equipment.Weapons.Howitzer.Howitzer Medium",
							"EWHMS-":"Ground Track Equipment.Weapons.Howitzer.Howitzer Medium.Howitzer Medium Self-propelled",
							"EWHH--":"Ground Track Equipment.Weapons.Howitzer.Howitzer Heavy",
							"EWHHS-":"Ground Track Equipment.Weapons.Howitzer.Howitzer Heavy.Howitzer Heavy Self-propelled",
							"EWG---":"Ground Track Equipment.Weapons.Antitank Gun",
							"EWGR--":"Ground Track Equipment.Weapons.Antitank Gun.Antitank Gun Recoilless",
							"EWGL--":"Ground Track Equipment.Weapons.Antitank Gun.Antitank Gun Light",
							"EWGM--":"Ground Track Equipment.Weapons.Antitank Gun.Antitank Gun Medium",
							"EWGH--":"Ground Track Equipment.Weapons.Antitank Gun.Antitank Gun Heavy",
							"EWD---":"Ground Track Equipment.Weapons.Direct Fire Gun",
							"EWDL--":"Ground Track Equipment.Weapons.Direct Fire Gun.Direct Fire Gun Light",
							"EWDLS-":"Ground Track Equipment.Weapons.Direct Fire Gun.Direct Fire Gun Light.Direct Fire Gun Light Self-propelled",
							"EWDM--":"Ground Track Equipment.Weapons.Direct Fire Gun.Direct Fire Gun Medium",
							"EWDMS-":"Ground Track Equipment.Weapons.Direct Fire Gun.Direct Fire Gun Medium.Direct Fire Gun Medium Self-propelled",
							"EWDH--":"Ground Track Equipment.Weapons.Direct Fire Gun.Direct Fire Gun Heavy",
							"EWDHS-":"Ground Track Equipment.Weapons.Direct Fire Gun.Direct Fire Gun Heavy.Direct Fire Gun Heavy Self-propelled",
							"EWA---":"Ground Track Equipment.Weapons.Air Defence Gun",
							"EWAL--":"Ground Track Equipment.Weapons.Air Defence Gun.Air Defence Gun Light",
							"EWAM--":"Ground Track Equipment.Weapons.Air Defence Gun.Air Defence Gun Medium",
							"EWAH--":"Ground Track Equipment.Weapons.Air Defence Gun.Air Defence Gun Heavy",
							"EV----":"Ground Track Equipment.Ground Vehicle",
							"EVA---":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle",
							"EVAT--":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank",
							"EVATL-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank.Tank Light",
							"EVATW-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank.Tank Light.Tank Light Recovery",
							"EVATM-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank.Tank Medium",
							"EVATX-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank.Tank Medium.Tank Medium Recovery",
							"EVATH-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank.Tank Heavy",
							"EVATY-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Tank.Tank Heavy.Tank Heavy Recovery",
							"EVAA--":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Armoured Personnel Carrier",
							"EVAAR-":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Armoured Personnel Carrier.Armoured Personnel Carrier Recovery",
							"EVAI--":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Armoured Infantry",
							"EVAC--":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.C2v/acv",
							"EVAS--":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Combat Service Support Vehicle",
							"EVAL--":"Ground Track Equipment.Ground Vehicle.Armoured Vehicle.Light Armoured Vehicle",
							"EVU---":"Ground Track Equipment.Ground Vehicle.Utility Vehicle",
							"EVUB--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Bus",
							"EVUS--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Semi",
							"EVUL--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Limited Cross-country Truck",
							"EVUX--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Cross-country Truck",
							"EVUR--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Water Craft",
							"EVE---":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle",
							"EVEB--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Bridge",
							"EVEE--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Earthmover",
							"EVEE--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Earthmover.Multifunctional Earthmover/digger",
							"EVEC--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Construction Vehicle",
							"EVEM--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle",
							"EVEMA-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle.Armoured Vehicle Mounted",
							"EVEMT-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle.Trailer Mounted",
							"EVEMV-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle.Armoured Carrier With Volcano",
							"EVEMSM":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle.Armoured Carrier With Scatterable Mines",
							"EVED--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Dozer",
							"EVD---":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Drilling Vehicle",
							"EVST--":"Ground Track Equipment.Ground Vehicle.Train Locomotive",
							"EVC---":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle",
							"ES----":"Ground Track Equipment.Sensor",
							"ESR---":"Ground Track Equipment.Sensor.Radar",
							"ESE---":"Ground Track Equipment.Sensor.Emplaced Sensor",
							"EX----":"Ground Track Equipment.Special Equipment",
							"EXL---":"Ground Track Equipment.Special Equipment.Laser",
							"EXN---":"Ground Track Equipment.Special Equipment.Cbrn Equipment",
							"EXF---":"Ground Track Equipment.Special Equipment.Flame Thrower",
							"EXM---":"Ground Track Equipment.Special Equipment.Land Mines",
							"EXMC--":"Ground Track Equipment.Special Equipment.Land Mines.Land Mines, Lethal",
							"EXML--":"Ground Track Equipment.Special Equipment.Land Mines.Less Than Lethal"
						};
					//Ground installation
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "G" && document.getElementById('SIDCSYMBOLMODIFIER11').value == "H" )
						values = {
							"I-----":"Ground Track.Installation",
							"IR----":"Installation.Raw Material Production/storage",
							"IRM---":"Installation.Raw Material Production/storage.Mine",
							"IRP---":"Installation.Raw Material Production/storage.Petroleum/gas/oil",
							"IRN---":"Installation.Raw Material Production/storage.Cbrn",
							"IRNB--":"Installation.Raw Material Production/storage.Cbrn.Biological",
							"IRNC--":"Installation.Raw Material Production/storage.Cbrn.Chemical",
							"IRNN--":"Installation.Raw Material Production/storage.Cbrn.Nuclear",
							"IP----":"Installation.Processing Facility",
							"IPD---":"Installation.Processing Facility.Decon",
							"IE----":"Installation.Equipment Manufacture",
							"IU----":"Installation.Service, Research, Utility Facility",
							"IUR---":"Installation.Service, Research, Utility Facility.Technological Research Facility",
							"IUT---":"Installation.Service, Research, Utility Facility.Telecommunications Facility",
							"IUE---":"Installation.Service, Research, Utility Facility.Electric Power Facility",
							"IUP---":"Installation.Service, Research, Utility Facility.Public Water Services",
							"IM----":"Installation.Military Materiel Facility",
							"IMF---":"Installation.Military Materiel Facility.Atomic Energy Production",
							"IMA---":"Installation.Military Materiel Facility.Aircraft Production & Assembly",
							"IME---":"Installation.Military Materiel Facility.Ammunition And Explosives Production",
							"IMG---":"Installation.Military Materiel Facility.Armament Production",
							"IMV---":"Installation.Military Materiel Facility.Military Vehicle Production",
							"IMN---":"Installation.Military Materiel Facility.Engineering Equipment Production",
							"IMNB--":"Installation.Military Materiel Facility.Engineering Equipment Production.Bridge",
							"IMC---":"Installation.Military Materiel Facility.Chemical & Biological Warfare Production",
							"IMS---":"Installation.Military Materiel Facility.Ship Construction",
							"IMM---":"Installation.Military Materiel Facility.Missile & Space System Production",
							"IG----":"Installation.Government Leadership",
							"IB----":"Installation.Military Base/facility",
							"IBA---":"Installation.Military Base/facility.Airport/airbase",
							"IBN---":"Installation.Military Base/facility.Seaport/naval Base",
							"IT----":"Installation.Transport Facility",
							"IX----":"Installation.Medical Facility",
							"IXH---":"Installation.Medical Facility.Hospital",
							"IR----":"Sea Surface Installation",
							"IRR---":"Sea Surface Installation.Sea Surface Installation,"
						};
					//surface
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "S" )
						values = {
							"------":"Sea Surface Track",
							"C-----":"Combatant",
							"CL----":"Combatant.Line",
							"CLCV--":"Combatant.Line.Carrier",
							"CLBB--":"Combatant.Line.Battleship",
							"CLCC--":"Combatant.Line.Cruiser",
							"CLDD--":"Combatant.Line.Destroyer",
							"CLFF--":"Combatant.Line.Frigate/corvette",
							"CA----":"Combatant.Amphibious Warfare Ship",
							"CALA--":"Combatant.Amphibious Warfare Ship.Assault Vessel",
							"CALS--":"Combatant.Amphibious Warfare Ship.Landing Ship",
							"CALC--":"Combatant.Amphibious Warfare Ship.Landing Craft",
							"CM----":"Combatant.Mine Warfare Vessel",
							"CMML--":"Combatant.Mine Warfare Vessel.Minelayer",
							"CMMS--":"Combatant.Mine Warfare Vessel.Minesweeper",
							"CMMH--":"Combatant.Mine Warfare Vessel.Minehunter",
							"CMMA--":"Combatant.Mine Warfare Vessel.Mcm Support",
							"CMMD--":"Combatant.Mine Warfare Vessel.Mcm Drone",
							"CP----":"Combatant.Patrol",
							"CPSB--":"Combatant.Patrol.Anti Submarine Warfare",
							"CPSU--":"Combatant.Patrol.Anti Surface Warfare",
							"CH----":"Combatant.Hovercraft",
							"G-----":"Combatant.Navy Group",
							"GT----":"Combatant.Navy Group.Navy Task Force",
							"GG----":"Combatant.Navy Group.Navy Task Group",
							"GU----":"Combatant.Navy Group.Navy Task Unit",
							"GE----":"Combatant.Navy Group.Navy Task Element",
							"GC----":"Combatant.Navy Group.Convoy",
							"N-----":"Noncombatant",
							"NR----":"Noncombatant.Underway Replenishment",
							"NRA---":"Noncombatant.Underway Replenishment.Underway Replenishment, Ammo",
							"NRO---":"Noncombatant.Underway Replenishment.Underway Replenishment, Oil",
							"NFT---":"Noncombatant.Fleet Support, Tug, Ocean Going",
							"NI----":"Noncombatant.Intelligence",
							"NM----":"Noncombatant.Hospital Ship",
							"NR----":"Noncombatant.Repair Ship",
							"NTS---":"Noncombatant.Submarine Tender",
							"NH----":"Noncombatant.Hovercraft",
							"NS----":"Noncombatant.Service & Support Harbour",
							"X-----":"Non Military",
							"XM----":"Non Military.Merchant",
							"XMC---":"Non Military.Merchant.Cargo",
							"XME---":"Non Military.Merchant.Roll On-roll Off",
							"XMO---":"Non Military.Merchant.Oiler/tanker",
							"XMT--*":"Non Military.Merchant.Ug",
							"XMF---":"Non Military.Merchant.Ferry",
							"XMP---":"Non Military.Merchant.Passenger",
							"XMH---":"Non Military.Merchant.Hazardous Materials",
							"XMD--*":"Non Military.Merchant.Redge",
							"XF----":"Non Military.Fishing",
							"XFDF--":"Non Military.Fishing.Drifter",
							"XFDR--":"Non Military.Fishing.Dredge",
							"XFTR--":"Non Military.Fishing.Trawler",
							"XR----":"Non Military.Leisure Craft",
							"XL----":"Non Military.Law Enforcement Vessel",
							"XH----":"Non Military.Hovercraft",
							"O-----":"Own Track",
							"E-----":"Emergency",
							"ED----":"Emergency.Ditched Aircraft",
							"EP----":"Emergency.Person In Water",
							"EV----":"Emergency.Distressed Vessel",
							"Z-----":"Hazard",
							"ZM----":"Hazard.Sea Minelike",
							"ZN----":"Hazard.Navigational",
							"ZI----":"Hazard.Iceberg"
						};
					//sub
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "U" )
						values = {
							"------":"Subsurface Track",
							"S-----":"Submarine",
							"SN----":"Submarine.Nuclear Propulsion",
							"SC----":"Submarine.Conventional Propulsion",
							"SO----":"Submarine.Other Submersible",
							"W-----":"Underwater Weapon",
							"WT----":"Underwater Weapon.Torpedo",
							"WM----":"Underwater Weapon.Sea Mine",
							"WMD---":"Underwater Weapon.Sea Mine.Sea Mine Dealt",
							"WMG---":"Underwater Weapon.Sea Mine.Sea Mine (Ground)",
							"WMGD--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Sea Mine (Ground) Dealt",
							"WMM---":"Underwater Weapon.Sea Mine.Sea Mine (Moored)",
							"WMMD--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Sea Mine (Moored Dealt",
							"WMF---":"Underwater Weapon.Sea Mine.Sea Mine (Floating)",
							"WMFD--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Sea Mine (Floating) Dealt",
							"WMO---":"Underwater Weapon.Sea Mine.Sea Mine (In Other Position)",
							"WMOD--":"Underwater Weapon.Sea Mine.Sea Mine (In Other Position).Sea Mine (In Other Position) Dealt",
							"WV----":"Underwater Weapon.Drone (Uuv)",
							"WD----":"Underwater Decoy",
							"WDM---":"Underwater Decoy.Sea Mine Decoy",
							"N-----":"Non-submarine",
							"ND----":"Non-submarine.Diver",
							"NB----":"Non-submarine.Bottom Return/nombo",
							"NBS---":"Non-submarine.Bottom Return/nombo.Seabed Installation/manmade",
							"NBR---":"Non-submarine.Bottom Return/nombo.Seabed Rock/stone, Obstacle, Other",
							"NBW---":"Non-submarine.Bottom Return/nombo.Wreck",
							"NM----":"Non-submarine.Marine Life",
							"NA----":"Non-submarine.Sea Anomaly"
						};
					//sof
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "F" )
						values = {
							"------":"Special Operations Force (SOF) Unit",
							"A-----":"SOF Unit Aviation",
							"AF----":"SOF Unit Aviation.SOF Unit Fixed Wing",
							"AFA---":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Attack",
							"AFK---":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Refuel",
							"AFU---":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility",
							"AFUL--":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility.SOF Unit Utility (Light)",
							"AFUM--":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility.SOF Unit Utility (Medium)",
							"AFUH--":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility.SOF Unit Utility (Heavy)",
							"AV----":"SOF Unit Aviation.SOF Unit Vstol",
							"AH----":"SOF Unit Aviation.SOF Unit Rotary Wing",
							"AHH---":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Combat Search And Rescue",
							"AHA---":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Attack",
							"AHU---":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility",
							"AHUL--":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility.SOF Unit Utility (Light)",
							"AHUM--":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility.SOF Unit Utility (Medium)",
							"AHUH--":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility.SOF Unit Utility (Heavy)",
							"SN----":"SOF Unit SOF Unit Naval",
							"SNS---":"SOF Unit SOF Unit Naval.SOF Unit Seal",
							"SNU---":"SOF Unit SOF Unit Naval.SOF Unit Underwater Demolition Team",
							"SNB---":"SOF Unit SOF Unit Naval.SOF Unit Special Boat",
							"SNN---":"SOF Unit SOF Unit Naval.SOF Unit Special Ssnr",
							"G-----":"SOF Unit Ground",
							"GS----":"SOF Unit Ground.SOF Unit Special Forces",
							"GSR---":"SOF Unit Ground.SOF Unit Ranger",
							"GSP---":"SOF Unit Ground.SOF Unit Psychological Operations (Psyops)",
							"GSPA--":"SOF Unit Ground.SOF Unit Psychological Operations (Psyops).SOF Unit Fixed Aviation",
							"GCA---":"SOF Unit Ground.SOF Unit Civil Affairs",
							"GB----":"SOF Unit Support"
						};
				}else{
					//space
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "P" )
						values = {
							"------":"Space Track",
							"S-----":"Satellite",
							"V-----":"Crewed Space Vehicle",
							"T-----":"Space Station",
							"L-----":"Space Launch Vehicle"
						};
					//air
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "A" )
						values = {
							"------":"Air Track",
							"M-----":"Military",
							"MF----":"Military.Fixed Wing",
							"MFB---":"Military.Fixed Wing.Bomber",
							"MFF---":"Military.Fixed Wing.Fighter",
							"MFFI--":"Military.Fixed Wing.Fighter.Interceptor",
							"MFT---":"Military.Fixed Wing.Trainer",
							"MFA---":"Military.Fixed Wing.Attack/strike",
							"MFL---":"Military.Fixed Wing.V/stol",
							"MFK---":"Military.Fixed Wing.Tanker",
							"MFKB--":"Military.Fixed Wing.Tanker.Tanker Boom-only",
							"MFKD--":"Military.Fixed Wing.Tanker.Tanker Drogue-only",
							"MFC---":"Military.Fixed Wing.Cargo Airlift (Transport)",
							"MFCL--":"Military.Fixed Wing.Cargo Airlift (Transport).Cargo Airlift (Light)",
							"MFCM--":"Military.Fixed Wing.Cargo Airlift (Transport).Cargo Airlift (Medium)",
							"MFCH--":"Military.Fixed Wing.Cargo Airlift (Transport).Cargo Airlift (Heavy)",
							"MFJ---":"Military.Fixed Wing.Electronic Countermeasures (Ecm/jammer)",
							"MFO---":"Military.Fixed Wing.Medical Evacuation (Medevac)",
							"MFR---":"Military.Fixed Wing.Reconnaissance",
							"MFRW--":"Military.Fixed Wing.Reconnaissance.Airborne Early Warning (Aew)",
							"MFRZ--":"Military.Fixed Wing.Reconnaissance.Electronic Surveillance Measures",
							"MFRX--":"Military.Fixed Wing.Reconnaissance.Photographic",
							"MFP---":"Military.Fixed Wing.Patrol",
							"MFPN--":"Military.Fixed Wing.Patrol.Antisurface Warfare (Asuw)",
							"MFPM--":"Military.Fixed Wing.Patrol.Mine Countermeasures",
							"MFU---":"Military.Fixed Wing.Utility",
							"MFUL--":"Military.Fixed Wing.Utility.Utility (Light)",
							"MFUM--":"Military.Fixed Wing.Utility.Utility (Medium)",
							"MFUH--":"Military.Fixed Wing.Utility.Utility (Heavy)",
							"MFY---":"Military.Fixed Wing.Communications",
							"MFH---":"Military.Fixed Wing.Combat Search And Rescue (Csar)",
							"MFD---":"Military.Fixed Wing.Airborne Command Post (C2)",
							"MFQ---":"Military.Fixed Wing.Drone (Rpv/ua)",
							"MFQA--":"Military.Fixed Wing.Drone (Rpv/ua).Attack",
							"MFQB--":"Military.Fixed Wing.Drone (Rpv/ua).Bomber",
							"MFQC--":"Military.Fixed Wing.Drone (Rpv/ua).Cargo",
							"MFQD--":"Military.Fixed Wing.Drone (Rpv/ua).Airborne Command Post",
							"MFQF--":"Military.Fixed Wing.Drone (Rpv/ua).Fighter",
							"MFQH--":"Military.Fixed Wing.Drone (Rpv/ua).Search & Rescue (Csar)",
							"MFQJ--":"Military.Fixed Wing.Drone (Rpv/ua).Electronic Countermeasures (Jammer)",
							"MFQK--":"Military.Fixed Wing.Drone (Rpv/ua).Tanker",
							"MFQL--":"Military.Fixed Wing.Drone (Rpv/ua).V/stol",
							"MFQM--":"Military.Fixed Wing.Drone (Rpv/ua).Special Operations Forces (Sof)",
							"MFQI--":"Military.Fixed Wing.Drone (Rpv/ua).Mine Countermeasures",
							"MFQN--":"Military.Fixed Wing.Drone (Rpv/ua).Antisurface Warfare (Asuw)",
							"MFQP--":"Military.Fixed Wing.Drone (Rpv/ua).Patrol",
							"MFQR--":"Military.Fixed Wing.Drone (Rpv/ua).Reconnaissance",
							"MFQRW-":"Military.Fixed Wing.Drone (Rpv/ua).Reconnaissance.Airborne Early Warning (Aew)",
							"MFQRZ-":"Military.Fixed Wing.Drone (Rpv/ua).Reconnaissance.Electronic Surveillance Measures",
							"MFQRX-":"Military.Fixed Wing.Drone (Rpv/ua).Reconnaissance.Photographic",
							"MFQS--":"Military.Fixed Wing.Drone (Rpv/ua).Antisubmarine Warfare (Asw)",
							"MFQT--":"Military.Fixed Wing.Drone (Rpv/ua).Trainer",
							"MFQU--":"Military.Fixed Wing.Drone (Rpv/ua).Utility",
							"MFQY--":"Military.Fixed Wing.Drone (Rpv/ua).Communications",
							"MFQO--":"Military.Fixed Wing.Drone (Rpv/ua).Medevac",
							"MFS---":"Military.Fixed Wing.Antisubmarine Warfare (Asw) Carrier Based",
							"MFM---":"Military.Fixed Wing.Special Operations Forces (Sof)",
							"MH----":"Military.Rotary Wing",
							"MHA---":"Military.Rotary Wing.Attack",
							"MHS---":"Military.Rotary Wing.Antisubmarine Warfare/mpa",
							"MHU---":"Military.Rotary Wing.Utility",
							"MHUL--":"Military.Rotary Wing.Utility.Utility (Light)",
							"MHUM--":"Military.Rotary Wing.Utility.Utility (Medium)",
							"MHUH--":"Military.Rotary Wing.Utility.Utility (Heavy)",
							"MHI---":"Military.Rotary Wing.Mine Countermeasures",
							"MHH---":"Military.Rotary Wing.Combat Search And Rescue (Csar)",
							"MHR---":"Military.Rotary Wing.Reconnaissance",
							"MHQ---":"Military.Rotary Wing.Drone (Rpv/ua)",
							"MHC---":"Military.Rotary Wing.Cargo Airlift (Transport)",
							"MHCL--":"Military.Rotary Wing.Cargo Airlift (Transport).Cargo Airlift (Light)",
							"MHCM--":"Military.Rotary Wing.Cargo Airlift (Transport).Cargo Airlift (Medium)",
							"MHCH--":"Military.Rotary Wing.Cargo Airlift (Transport).Cargo Airlift (Heavy)",
							"MHT---":"Military.Rotary Wing.Trainer",
							"MHO---":"Military.Rotary Wing.Medevac",
							"MHM---":"Military.Rotary Wing.Special Operations Forces (Sof)",
							"MHD---":"Military.Rotary Wing.Airborne Command Post (C2)",
							"MHK---":"Military.Rotary Wing.Tanker",
							"MHJ---":"Military.Rotary Wing.Electronic Countermeasures (Ecm/jammer)",
							"ML----":"Military.Lighter Than Air",
							"MV----":"Military.Very Important Person (Vip)",
							"ME----":"Military.Escort",
							"W-----":"Weapon",
							"WM----":"Weapon.Missile In Flight",
							"WMS---":"Weapon.Missile In Flight.Surface Launched Missile",
							"WMSS--":"Weapon.Missile In Flight.Surface Launched Missile.Surface-to-surface Missile (Ssm)",
							"WMSA--":"Weapon.Missile In Flight.Surface Launched Missile.Surface-to-air Missile (Sam)",
							"WMSU--":"Weapon.Missile In Flight.Surface Launched Missile.Surface-to-subsurface Missile",
							"WMSB--":"Weapon.Missile In Flight.Surface Launched Missile.Antiballistic Missile (Abm)",
							"WMA---":"Weapon.Missile In Flight.Air Launched Missile",
							"WMAS--":"Weapon.Missile In Flight.Air Launched Missile.Air-to-surface Missile (Asm)",
							"WMAA--":"Weapon.Missile In Flight.Air Launched Missile.Air-to-air Missile (Aam)",
							"WMAP--":"Weapon.Missile In Flight.Air Launched Missile.Air-to-space Missile",
							"WMU---":"Weapon.Missile In Flight.Subsurface-to-surface Missile (S/ssm)",
							"WMCM--":"Weapon.Missile In Flight.Cruise Missile",
							"WMB---":"Weapon.Missile In Flight.Ballistic Missile",
							"WB----":"Weapon.Bomb",
							"WD----":"Weapon.Decoy",
							"C-----":"Civil Aircraft",
							"CF----":"Civil Aircraft.Fixed Wing",
							"CH----":"Civil Aircraft.Rotary Wing",
							"CL----":"Civil Aircraft.Lighter Than Air"
						};
					//Ground
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "G" )
						values = {
							"------":"Ground Track",
							"U-----":"Unit",
							"UC----":"Unit.Combat",
							"UCD---":"Unit.Combat.Air Defense",
							"UCDS--":"Unit.Combat.Air Defense.Short Range",
							"UCDSC-":"Unit.Combat.Air Defense.Short Range.Chaparral",
							"UCDSS-":"Unit.Combat.Air Defense.Short Range.Stinger",
							"UCDSV-":"Unit.Combat.Air Defense.Short Range.Vulcan",
							"UCDM--":"Unit.Combat.Air Defense.Air Defense Missile",
							"UCDML-":"Unit.Combat.Air Defense.Air Defense Missile.Air Defense Missile Light",
							"UCDMLA":"Unit.Combat.Air Defense.Air Defense Missile.Air Defense Missile Light.Air Defense Missile Motorized (Avenger)",
							"UCDMM-":"Unit.Combat.Air Defense.Air Defense Missile.Air Defense Missile Medium",
							"UCDMH-":"Unit.Combat.Air Defense.Air Defense Missile.Air Defense Missile Heavy",
							"UCDH--":"Unit.Combat.Air Defense.Air Defense Missile.H/mad",
							"UCDHH-":"Unit.Combat.Air Defense.Air Defense Missile.H/mad.Hawk",
							"UCDHP-":"Unit.Combat.Air Defense.Air Defense Missile.H/mad.Patriot",
							"UCDG--":"Unit.Combat.Air Defense.Gun Unit",
							"UCDC--":"Unit.Combat.Air Defense.Composite",
							"UCDT--":"Unit.Combat.Air Defense.Targeting Unit",
							"UCDO--":"Unit.Combat.Air Defense.Theater Missile Defense Unit",
							"UCA---":"Unit.Combat.Armor",
							"UCAT--":"Unit.Combat.Armor.Armor Track",
							"UCATA-":"Unit.Combat.Armor.Armor Track.Armor Track Airborne",
							"UCATW-":"Unit.Combat.Armor.Armor Track.Armor Track Amphibious",
							"UCATWR":"Unit.Combat.Armor.Armor Track.Armor Track Amphibious.Armor Track Amphibious Recovery",
							"UCATL-":"Unit.Combat.Armor.Armor Track.Armor Track, Light",
							"UCATM-":"Unit.Combat.Armor.Armor Track.Armor Track, Medium",
							"UCATH-":"Unit.Combat.Armor.Armor Track.Armor Track, Heavy",
							"UCATR-":"Unit.Combat.Armor.Armor Track.Armor Track, Recovery",
							"UCAW--":"Unit.Combat.Armor.Armor, Wheeled",
							"UCAWS-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Air Assault",
							"UCAWA-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Airborne",
							"UCAWW-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Amphibious",
							"UCAWWR":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Amphibious.Armor, Wheeled Amphibious Recovery",
							"UCAWL-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Light",
							"UCAWM-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Medium",
							"UCAWH-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Heavy",
							"UCAWR-":"Unit.Combat.Armor.Armor, Wheeled.Armor, Wheeled Recovery",
							"UCAA--":"Unit.Combat.Antiarmor",
							"UCAAD-":"Unit.Combat.Antiarmor.Antiarmor Dismounted",
							"UCAAL-":"Unit.Combat.Antiarmor.Antiarmor Light",
							"UCAAM-":"Unit.Combat.Antiarmor.Antiarmor Airborne",
							"UCAAS-":"Unit.Combat.Antiarmor.Antiarmor Air Assault",
							"UCAAU-":"Unit.Combat.Antiarmor.Antiarmor Mountain",
							"UCAAC-":"Unit.Combat.Antiarmor.Antiarmor Arctic",
							"UCAAA-":"Unit.Combat.Antiarmor.Antiarmor Armored",
							"UCAAAT":"Unit.Combat.Antiarmor.Antiarmor Armored.Antiarmor Armored Tracked",
							"UCAAAW":"Unit.Combat.Antiarmor.Antiarmor Armored.Antiarmor Armored Wheeled",
							"UCAAAS":"Unit.Combat.Antiarmor.Antiarmor Armored.Antiarmor Armored Air Assault",
							"UCAAO-":"Unit.Combat.Antiarmor.Antiarmor Motorized",
							"UCAAOS":"Unit.Combat.Antiarmor.Antiarmor Motorized.Antiarmor Motorized Air Assault",
							"UCV---":"Unit.Combat.Aviation",
							"UCVF--":"Unit.Combat.Aviation.Fixed Wing",
							"UCVFU-":"Unit.Combat.Aviation.Fixed Wing.Utility Fixed Wing",
							"UCVFA-":"Unit.Combat.Aviation.Fixed Wing.Attack Fixed Wing",
							"UCVFR-":"Unit.Combat.Aviation.Fixed Wing.Recon Fixed Wing",
							"UCVR--":"Unit.Combat.Aviation.Rotary Wing",
							"UCVRA-":"Unit.Combat.Aviation.Rotary Wing.Attack Rotary Wing",
							"UCVRS-":"Unit.Combat.Aviation.Rotary Wing.Scout Rotary Wing",
							"UCVRW-":"Unit.Combat.Aviation.Rotary Wing.Antisubmarine Warfare Rotary Wing",
							"UCVRU-":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing",
							"UCVRUL":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing.Light Utility Rotary Wing",
							"UCVRUM":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing.Medium Utility Rotary Wing",
							"UCVRUH":"Unit.Combat.Aviation.Rotary Wing.Utility Rotary Wing.Heavy Utility Rotary Wing",
							"UCVRUC":"Unit.Combat.Aviation.Rotary Wing.C2 Rotary Wing",
							"UCVRUE":"Unit.Combat.Aviation.Rotary Wing.Medevac Rotary Wing",
							"UCVRM-":"Unit.Combat.Aviation.Rotary Wing.Mine Countermeasure Rotary Wing",
							"UCVS--":"Unit.Combat.Aviation.Search And Rescue",
							"UCVC--":"Unit.Combat.Aviation.Composite",
							"UCVV--":"Unit.Combat.Aviation.Vertical And/or Short Takeoff And Landing Aircraft(v/stol)",
							"UCVU--":"Unit.Combat.Aviation.Unmanned Aircraft",
							"UCVUF-":"Unit.Combat.Aviation.Unmanned Aircraft.Unmanned Aircraft Fixed Wing",
							"UCVUR-":"Unit.Combat.Aviation.Unmanned Aircraft.Unmanned Aircraft Rotary Wing",
							"UCI---":"Unit.Combat.Infantry",
							"UCIL--":"Unit.Combat.Infantry.Infantry Light",
							"UCIM--":"Unit.Combat.Infantry.Infantry Motorized",
							"UCIO--":"Unit.Combat.Infantry.Infantry Mountain",
							"UCIA--":"Unit.Combat.Infantry.Infantry Airborne",
							"UCIS--":"Unit.Combat.Infantry.Infantry Air Assault",
							"UCIZ--":"Unit.Combat.Infantry.Infantry Mechanized",
							"UCIN--":"Unit.Combat.Infantry.Infantry Naval",
							"UCII--":"Unit.Combat.Infantry.Infantry Fighting Vehicle",
							"UCIC--":"Unit.Combat.Infantry.Infantry Arctic",
							"UCE---":"Unit.Combat.Engineer",
							"UCEC--":"Unit.Combat.Engineer.Engineer Combat",
							"UCECS-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Air Assault",
							"UCECA-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Airborne",
							"UCECC-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Arctic",
							"UCECL-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Light (Sapper)",
							"UCECM-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Medium",
							"UCECH-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Heavy",
							"UCECT-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Mechanized (Track)",
							"UCECW-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Motorized",
							"UCECO-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Mountain",
							"UCECR-":"Unit.Combat.Engineer.Engineer Combat.Engineer Combat Recon",
							"UCEN--":"Unit.Combat.Engineer.Engineer Construction",
							"UCENN-":"Unit.Combat.Engineer.Engineer Construction.Engineer Naval Construction",
							"UCF---":"Unit.Combat.Field Artillery",
							"UCFH--":"Unit.Combat.Field Artillery.Howitzer/gun",
							"UCFHE-":"Unit.Combat.Field Artillery.Howitzer/gun.Self-propelled",
							"UCFHS-":"Unit.Combat.Field Artillery.Howitzer/gun.Air Assault",
							"UCFHA-":"Unit.Combat.Field Artillery.Howitzer/gun.Airborne",
							"UCFHC-":"Unit.Combat.Field Artillery.Howitzer/gun.Arctic",
							"UCFHO-":"Unit.Combat.Field Artillery.Howitzer/gun.Mountain",
							"UCFHL-":"Unit.Combat.Field Artillery.Howitzer/gun.Light",
							"UCFHM-":"Unit.Combat.Field Artillery.Howitzer/gun.Medium",
							"UCFHH-":"Unit.Combat.Field Artillery.Howitzer/gun.Heavy",
							"UCFHX-":"Unit.Combat.Field Artillery.Howitzer/gun.Amphibious",
							"UCFR--":"Unit.Combat.Field Artillery.Rocket",
							"UCFRS-":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher",
							"UCFRSS":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher.Single Rocket Self-propelled",
							"UCFRSR":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher.Single Rocket Truck",
							"UCFRST":"Unit.Combat.Field Artillery.Rocket.Single Rocket Launcher.Single Rocket Towed",
							"UCFRM-":"Unit.Combat.Field Artillery.Rocket.Multiple Rocket Launcher",
							"UCFRMS":"Unit.Combat.Field Artillery.Rocket.Multiple Rocket Launcher.Multiple Rocket Self-propelled",
							"UCFRMR":"Unit.Combat.Field Artillery.Rocket.Multiple Rocket Launcher.Multiple Rocket Truck",
							"UCFRMT":"Unit.Combat.Field Artillery.Rocket.Multiple Rocket Launcher.Multiple Rocket Towed",
							"UCFT--":"Unit.Combat.Field Artillery.Target Acquisition",
							"UCFTR-":"Unit.Combat.Field Artillery.Target Acquisition.Radar",
							"UCFTS-":"Unit.Combat.Field Artillery.Target Acquisition.Sound",
							"UCFTF-":"Unit.Combat.Field Artillery.Target Acquisition.Flash (Optical)",
							"UCFTC-":"Unit.Combat.Field Artillery.Target Acquisition.Colt/fist",
							"UCFTCD":"Unit.Combat.Field Artillery.Target Acquisition.Colt/fist.Dismounted Colt/fist",
							"UCFTCM":"Unit.Combat.Field Artillery.Target Acquisition.Colt/fist.Tracked Colt/fist",
							"UCFTA-":"Unit.Combat.Field Artillery.Target Acquisition.Anglico",
							"UCFM--":"Unit.Combat.Field Artillery.Mortar",
							"UCFMS-":"Unit.Combat.Field Artillery.Mortar.Self-propelled (Sp) Tracked Mortar",
							"UCFMW-":"Unit.Combat.Field Artillery.Mortar.Sp Wheeled Mortar",
							"UCFMT-":"Unit.Combat.Field Artillery.Mortar.Towed Mortar",
							"UCFMTA":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Airborne Mortar",
							"UCFMTS":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Air Assault Mortar",
							"UCFMTC":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Arctic Mortar",
							"UCFMTO":"Unit.Combat.Field Artillery.Mortar.Towed Mortar.Towed Mountain Mortar",
							"UCFML-":"Unit.Combat.Field Artillery.Mortar.Amphibious Mortar",
							"UCFS--":"Unit.Combat.Field Artillery.Artillery Survey",
							"UCFSS-":"Unit.Combat.Field Artillery.Artillery Survey.Air Assault",
							"UCFSA-":"Unit.Combat.Field Artillery.Artillery Survey.Airborne",
							"UCFSL-":"Unit.Combat.Field Artillery.Artillery Survey.Light",
							"UCFSO-":"Unit.Combat.Field Artillery.Artillery Survey.Mountain",
							"UCFO--":"Unit.Combat.Field Artillery.Meteorological",
							"UCFOS-":"Unit.Combat.Field Artillery.Meteorological.Air Assault Meteorological",
							"UCFOA-":"Unit.Combat.Field Artillery.Meteorological.Airborne Meteorological",
							"UCFOL-":"Unit.Combat.Field Artillery.Meteorological.Light Meteorological",
							"UCFOO-":"Unit.Combat.Field Artillery.Meteorological.Mountain Meteorological",
							"UCR---":"Unit.Combat.Reconnaissance",
							"UCRH--":"Unit.Combat.Reconnaissance.Reconnaissance Horse",
							"UCRV--":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry",
							"UCRVA-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Armored",
							"UCRVM-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Motorized",
							"UCRVG-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Ground",
							"UCRVO-":"Unit.Combat.Reconnaissance.Reconnaissance Cavalry.Reconnaissance Cavalry Air",
							"UCRC--":"Unit.Combat.Reconnaissance.Reconnaissance Arctic",
							"UCRS--":"Unit.Combat.Reconnaissance.Reconnaissance Air Assault",
							"UCRA--":"Unit.Combat.Reconnaissance.Reconnaissance Airborne",
							"UCRO--":"Unit.Combat.Reconnaissance.Reconnaissance Mountain",
							"UCRL--":"Unit.Combat.Reconnaissance.Reconnaissance Light",
							"UCRR--":"Unit.Combat.Reconnaissance.Reconnaissance Marine",
							"UCRRD-":"Unit.Combat.Reconnaissance.Reconnaissance Marine.Reconnaissance Marine Division",
							"UCRRF-":"Unit.Combat.Reconnaissance.Reconnaissance Marine.Reconnaissance Marine Force",
							"UCRRL-":"Unit.Combat.Reconnaissance.Reconnaissance Marine.Reconnaissance Marine Light Armored Reconnaissnace (Lar)",
							"UCRX--":"Unit.Combat.Reconnaissance.Reconnaissance Long Range Surveillance (Lrs)",
							"UCM---":"Unit.Combat.Missile (Surf-surf)",
							"UCMT--":"Unit.Combat.Missile (Surf-surf).Missile (Surf-surf) Tactical",
							"UCMS--":"Unit.Combat.Missile (Surf-surf).Missile (Surf-surf) Strategic",
							"UCS---":"Unit.Combat.Internal Security Forces",
							"UCSW--":"Unit.Combat.Internal Security Forces.Riverine",
							"UCSG--":"Unit.Combat.Internal Security Forces.Ground",
							"UCSGD-":"Unit.Combat.Internal Security Forces.Ground.Dismounted Ground",
							"UCSGM-":"Unit.Combat.Internal Security Forces.Ground.Motorized Ground",
							"UCSGA-":"Unit.Combat.Internal Security Forces.Ground.Mechanized Ground",
							"UCSM--":"Unit.Combat.Internal Security Forces.Wheeled Mechanized",
							"UCSR--":"Unit.Combat.Internal Security Forces.Railroad",
							"UCSA--":"Unit.Combat.Internal Security Forces.Aviation",
							"UU----":"Unit.Combat Support",
							"UUA---":"Unit.Combat Support.Combat Support Cbrn",
							"UUAC--":"Unit.Combat Support.Combat Support Cbrn.Chemical",
							"UUACC-":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke/decon",
							"UUACCK":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke/decon.Mechanized Smoke/decon",
							"UUACCM":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke/decon.Motorized Smoke/decon",
							"UUACS-":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke",
							"UUACSM":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke.Motorized Smoke",
							"UUACSA":"Unit.Combat Support.Combat Support Cbrn.Chemical.Smoke.Armor Smoke",
							"UUACR-":"Unit.Combat Support.Combat Support Cbrn.Chemical.Chemical Recon",
							"UUACRW":"Unit.Combat Support.Combat Support Cbrn.Chemical.Chemical Recon.Chemical Wheeled Armored Vehicle",
							"UUACRS":"Unit.Combat Support.Combat Support Cbrn.Chemical.Chemical Recon.Chemical Wheeled Armored Vehicle Reconnaissance ",
							"UUAN--":"Unit.Combat Support.Combat Support Cbrn.Nuclear",
							"UUAB--":"Unit.Combat Support.Combat Support Cbrn.Biological",
							"UUABR-":"Unit.Combat Support.Combat Support Cbrn.Biological.Recon Equipped",
							"UUAD--":"Unit.Combat Support.Combat Support Cbrn.Decontamination",
							"UUM---":"Unit.Combat Support.Military Intelligence",
							"UUMA--":"Unit.Combat Support.Military Intelligence.Aerial Exploitation",
							"UUMS--":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint)",
							"UUMSE-":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare",
							"UUMSEA":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Armored Wheeled Vehicle",
							"UUMSED":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Direction Finding",
							"UUMSEI":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Intercept",
							"UUMSEJ":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Jamming",
							"UUMSET":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Theater",
							"UUMSEC":"Unit.Combat Support.Military Intelligence.Signal Intelligence (Sigint).Electronic Warfare.Corps",
							"UUMC--":"Unit.Combat Support.Military Intelligence.Counterintelligence",
							"UUMR--":"Unit.Combat Support.Military Intelligence.Surveillance",
							"UUMRG-":"Unit.Combat Support.Military Intelligence.Surveillance.Ground Surveillance Radar",
							"UUMRS-":"Unit.Combat Support.Military Intelligence.Surveillance.Sensor",
							"UUMRSS":"Unit.Combat Support.Military Intelligence.Surveillance.Sensor.Sensor Scm",
							"UUMRX-":"Unit.Combat Support.Military Intelligence.Surveillance.Ground Station Module",
							"UUMMO-":"Unit.Combat Support.Military Intelligence.Surveillance.Meteorological",
							"UUMO--":"Unit.Combat Support.Military Intelligence.Operations",
							"UUMT--":"Unit.Combat Support.Military Intelligence.Tactical Exploit",
							"UUMQ--":"Unit.Combat Support.Military Intelligence.Interrogation",
							"UUMJ--":"Unit.Combat Support.Military Intelligence.Joint Intelligence Center",
							"UUL---":"Unit.Combat Support.Law Enforcement Unit",
							"UULS--":"Unit.Combat Support.Law Enforcement Unit.Shore Patrol",
							"UULM--":"Unit.Combat Support.Law Enforcement Unit.Military Police",
							"UULC--":"Unit.Combat Support.Law Enforcement Unit.Civilian Law Enforcement",
							"UULF--":"Unit.Combat Support.Law Enforcement Unit.Security Police (Air)",
							"UULD--":"Unit.Combat Support.Law Enforcement Unit.Central Intelligence Division (Cid)",
							"UUS---":"Unit.Combat Support.Signal Unit",
							"UUSA--":"Unit.Combat Support.Signal Unit.Area",
							"UUSC--":"Unit.Combat Support.Signal Unit.Communication Configured Package",
							"UUSCL-":"Unit.Combat Support.Signal Unit.Communication Configured Package.Large Communication Configured Package (Lccp)",
							"UUSO--":"Unit.Combat Support.Signal Unit.Command Operations",
							"UUSF--":"Unit.Combat Support.Signal Unit.Forward Communications",
							"UUSM--":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element",
							"UUSMS-":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element.Small Extension Node",
							"UUSML-":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element.Large Extension Node",
							"UUSMN-":"Unit.Combat Support.Signal Unit.Multiple Subscriber Element.Node Center",
							"UUSR--":"Unit.Combat Support.Signal Unit.Radio Unit",
							"UUSRS-":"Unit.Combat Support.Signal Unit.Radio Unit.Tactical Satellite",
							"UUSRT-":"Unit.Combat Support.Signal Unit.Radio Unit.Teletype Center",
							"UUSRW-":"Unit.Combat Support.Signal Unit.Radio Unit.Relay",
							"UUSS--":"Unit.Combat Support.Signal Unit.Signal Support",
							"UUSW--":"Unit.Combat Support.Signal Unit.Telephone Switch",
							"UUSX--":"Unit.Combat Support.Signal Unit.Electronic Ranging",
							"UUI---":"Unit.Combat Support.Information Warfare Unit",
							"UUP---":"Unit.Combat Support.Landing Support",
							"UUE---":"Unit.Combat Support.Explosive Ordnance Disposal",
							"US----":"Unit.Combat Service Support",
							"USA---":"Unit.Combat Service Support.Administrative (Admin)",
							"USAT--":"Unit.Combat Service Support.Administrative (Admin).Admin Theater",
							"USAC--":"Unit.Combat Service Support.Administrative (Admin).Admin Corps",
							"USAJ--":"Unit.Combat Service Support.Administrative (Admin).Judge Advocate General (Jag)",
							"USAJT-":"Unit.Combat Service Support.Administrative (Admin).Judge Advocate General (Jag).Jag Theater",
							"USAJC-":"Unit.Combat Service Support.Administrative (Admin).Judge Advocate General (Jag).Jag Corps",
							"USAO--":"Unit.Combat Service Support.Administrative (Admin).Postal",
							"USAOT-":"Unit.Combat Service Support.Administrative (Admin).Postal.Postal Theater",
							"USAOC-":"Unit.Combat Service Support.Administrative (Admin).Postal.Postal Corps",
							"USAF--":"Unit.Combat Service Support.Administrative (Admin).Finance",
							"USAFT-":"Unit.Combat Service Support.Administrative (Admin).Finance.Finance Theater",
							"USAFC-":"Unit.Combat Service Support.Administrative (Admin).Finance.Finance Corps",
							"USAS--":"Unit.Combat Service Support.Administrative (Admin).Personnel Services",
							"USAST-":"Unit.Combat Service Support.Administrative (Admin).Personnel Services.Personnel Theater",
							"USASC-":"Unit.Combat Service Support.Administrative (Admin).Personnel Services.Personnel Corps",
							"USAM--":"Unit.Combat Service Support.Administrative (Admin).Mortuary/graves Registry",
							"USAMT-":"Unit.Combat Service Support.Administrative (Admin).Mortuary/graves Registry.Mortuary/graves Registry Theater",
							"USAMC-":"Unit.Combat Service Support.Administrative (Admin).Mortuary/graves Registry.Mortuary/graves Registry Corps",
							"USAR--":"Unit.Combat Service Support.Administrative (Admin).Religious/chaplain",
							"USART-":"Unit.Combat Service Support.Administrative (Admin).Religious/chaplain.Religious/chaplain Theater",
							"USARC-":"Unit.Combat Service Support.Administrative (Admin).Religious/chaplain.Religious/chaplain Corps",
							"USAP--":"Unit.Combat Service Support.Administrative (Admin).Public Affairs",
							"USAPT-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Theater",
							"USAPC-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Corps",
							"USAPB-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Broadcast",
							"USAPBT":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Broadcast.Public Affairs Broadcast Theater",
							"USAPBC":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Broadcast.Public Affairs Broadcast Corps",
							"USAPM-":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Joint Information Bureau (Jib)",
							"USAPMT":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Joint Information Bureau (Jib).Public Affairs Jib Theater",
							"USAPMC":"Unit.Combat Service Support.Administrative (Admin).Public Affairs.Public Affairs Joint Information Bureau (Jib).Public Affairs Jib Corps",
							"USAX--":"Unit.Combat Service Support.Administrative (Admin).Replacement Holding Unit (Rhu)",
							"USAXT-":"Unit.Combat Service Support.Administrative (Admin).Replacement Holding Unit (Rhu).Rhu Theater",
							"USAXC-":"Unit.Combat Service Support.Administrative (Admin).Replacement Holding Unit (Rhu).Rhu Corps",
							"USAL--":"Unit.Combat Service Support.Administrative (Admin).Labor",
							"USALT-":"Unit.Combat Service Support.Administrative (Admin).Labor.Labor Theater",
							"USALC-":"Unit.Combat Service Support.Administrative (Admin).Labor.Labor Corps",
							"USAW--":"Unit.Combat Service Support.Administrative (Admin).Morale, Welfare, Recreation (Mwr)",
							"USAWT-":"Unit.Combat Service Support.Administrative (Admin).Morale, Welfare, Recreation (Mwr).Mwr Theater",
							"USAWC-":"Unit.Combat Service Support.Administrative (Admin).Morale, Welfare, Recreation (Mwr).Mwr Corps",
							"USAQ--":"Unit.Combat Service Support.Administrative (Admin).Quartermaster (Supply)",
							"USAQT-":"Unit.Combat Service Support.Administrative (Admin).Quartermaster (Supply).Quartermaster (Supply) Theater",
							"USAQC-":"Unit.Combat Service Support.Administrative (Admin).Quartermaster (Supply).Quartermaster (Supply) Corps",
							"USM---":"Unit.Combat Service Support.Medical",
							"USMT--":"Unit.Combat Service Support.Medical.Medical Theater",
							"USMC--":"Unit.Combat Service Support.Medical.Medical Corps",
							"USMM--":"Unit.Combat Service Support.Medical.Medical Treatment Facility",
							"USMMT-":"Unit.Combat Service Support.Medical.Medical Treatment Facility.Medical Treatment Facility Theater",
							"USMMC-":"Unit.Combat Service Support.Medical.Medical Treatment Facility.Medical Treatment Facility Corps",
							"USMV--":"Unit.Combat Service Support.Medical.Medical Veterinary",
							"USMVT-":"Unit.Combat Service Support.Medical.Medical Veterinary.Medical Veterinary Theater",
							"USMVC-":"Unit.Combat Service Support.Medical.Medical Veterinary.Medical Veterinary Corps",
							"USMD--":"Unit.Combat Service Support.Medical.Medical Dental",
							"USMDT-":"Unit.Combat Service Support.Medical.Medical Dental.Medical Dental Theater",
							"USMDC-":"Unit.Combat Service Support.Medical.Medical Dental.Medical Dental Corps",
							"USMP--":"Unit.Combat Service Support.Medical.Medical Psychological",
							"USMPT-":"Unit.Combat Service Support.Medical.Medical Psychological.Medical Psychological Theater",
							"USMPC-":"Unit.Combat Service Support.Medical.Medical Psychological.Medical Psychological Corps",
							"USS---":"Unit.Combat Service Support.Supply",
							"USST--":"Unit.Combat Service Support.Supply.Supply Theater",
							"USSC--":"Unit.Combat Service Support.Supply.Supply Corps",
							"USS1--":"Unit.Combat Service Support.Supply.Supply Class I",
							"USS1T-":"Unit.Combat Service Support.Supply.Supply Class I.Supply Class I Theater",
							"USS1C-":"Unit.Combat Service Support.Supply.Supply Class I.Supply Class I Corps",
							"USS2--":"Unit.Combat Service Support.Supply.Supply Class Ii",
							"USS2T-":"Unit.Combat Service Support.Supply.Supply Class Ii.Supply Class Ii Theater",
							"USS2C-":"Unit.Combat Service Support.Supply.Supply Class Ii.Supply Class Ii Corps",
							"USS3--":"Unit.Combat Service Support.Supply.Supply Class Iii",
							"USS3T-":"Unit.Combat Service Support.Supply.Supply Class Iii.Supply Class Iii Theater",
							"USS3C-":"Unit.Combat Service Support.Supply.Supply Class Iii.Supply Class Iii Corps",
							"USS3A-":"Unit.Combat Service Support.Supply.Supply Class Iii.Supply Class Iii Aviation",
							"USS3AT":"Unit.Combat Service Support.Supply.Supply Class Iii.Supply Class Iii Aviation.Supply Class Iii Aviation Theater",
							"USS3AC":"Unit.Combat Service Support.Supply.Supply Class Iii.Supply Class Iii Aviation.Supply Class Iii Aviation Corps",
							"USS4--":"Unit.Combat Service Support.Supply.Supply Class Iv",
							"USS4T-":"Unit.Combat Service Support.Supply.Supply Class Iv.Supply Class Iv Theater",
							"USS4C-":"Unit.Combat Service Support.Supply.Supply Class Iv.Supply Class Iv Corps",
							"USS5--":"Unit.Combat Service Support.Supply.Supply Class V",
							"USS5T-":"Unit.Combat Service Support.Supply.Supply Class V.Supply Class V Theater",
							"USS5C-":"Unit.Combat Service Support.Supply.Supply Class V.Supply Class V Corps",
							"USS6--":"Unit.Combat Service Support.Supply.Supply Class Vi",
							"USS6T-":"Unit.Combat Service Support.Supply.Supply Class Vi.Supply Class Vi Theater",
							"USS6C-":"Unit.Combat Service Support.Supply.Supply Class Vi.Supply Class Vi Corps",
							"USS7--":"Unit.Combat Service Support.Supply.Supply Class Vii",
							"USS7T-":"Unit.Combat Service Support.Supply.Supply Class Vii.Supply Class Vii Theater",
							"USS7C-":"Unit.Combat Service Support.Supply.Supply Class Vii.Supply Class Vii Corps",
							"USS8--":"Unit.Combat Service Support.Supply.Supply Class Viii",
							"USS8T-":"Unit.Combat Service Support.Supply.Supply Class Viii.Supply Class Viii Theater",
							"USS8C-":"Unit.Combat Service Support.Supply.Supply Class Viii.Supply Class Viii Corps",
							"USS9--":"Unit.Combat Service Support.Supply.Supply Class Ix",
							"USS9T-":"Unit.Combat Service Support.Supply.Supply Class Ix.Supply Class Ix Theater",
							"USS9C-":"Unit.Combat Service Support.Supply.Supply Class Ix.Supply Class Ix Corps",
							"USSX--":"Unit.Combat Service Support.Supply.Supply Class X",
							"USSXT-":"Unit.Combat Service Support.Supply.Supply Class X.Supply Class X Theater",
							"USSXC-":"Unit.Combat Service Support.Supply.Supply Class X.Supply Class X Corps",
							"USSL--":"Unit.Combat Service Support.Supply.Supply Laundry/bath",
							"USSLT-":"Unit.Combat Service Support.Supply.Supply Laundry/bath.Supply Laundry/bath Theater",
							"USSLC-":"Unit.Combat Service Support.Supply.Supply Laundry/bath.Supply Laundry/bath Corps",
							"USSW--":"Unit.Combat Service Support.Supply.Supply Water",
							"USSWT-":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Theater",
							"USSWC-":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Corps",
							"USSWP-":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Purification",
							"USSWPT":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Purification.Supply Water Purification Theater",
							"USSWPC":"Unit.Combat Service Support.Supply.Supply Water.Supply Water Purification.Supply Water Purification Corps",
							"UST---":"Unit.Combat Service Support.Transportation",
							"USTT--":"Unit.Combat Service Support.Transportation.Transportation Theater",
							"USTC--":"Unit.Combat Service Support.Transportation.Transportation Corps",
							"USTM--":"Unit.Combat Service Support.Transportation.Movement Control Center (Mcc)",
							"USTMT-":"Unit.Combat Service Support.Transportation.Movement Control Center (Mcc).Mcc Theater",
							"USTMC-":"Unit.Combat Service Support.Transportation.Movement Control Center (Mcc).Mcc Corps",
							"USTR--":"Unit.Combat Service Support.Transportation.Railhead",
							"USTRT-":"Unit.Combat Service Support.Transportation.Railhead.Railhead Theater",
							"USTRC-":"Unit.Combat Service Support.Transportation.Railhead.Railhead Corps",
							"USTS--":"Unit.Combat Service Support.Transportation.Spod/spoe",
							"USTST-":"Unit.Combat Service Support.Transportation.Spod/spoe.Spod/spoe Theater",
							"USTSC-":"Unit.Combat Service Support.Transportation.Spod/spoe.Spod/spoe Corps",
							"USTA--":"Unit.Combat Service Support.Transportation.Apod/apoe",
							"USTAT-":"Unit.Combat Service Support.Transportation.Apod/apoe.Apod/apoe Theater",
							"USTAC-":"Unit.Combat Service Support.Transportation.Apod/apoe.Apod/apoe Corps",
							"USTI--":"Unit.Combat Service Support.Transportation.Missile",
							"USTIT-":"Unit.Combat Service Support.Transportation.Missile.Missile Theater",
							"USTIC-":"Unit.Combat Service Support.Transportation.Missile.Missile Corps",
							"USX---":"Unit.Combat Service Support.Maintenance",
							"USXT--":"Unit.Combat Service Support.Maintenance.Maintenance Theater",
							"USXC--":"Unit.Combat Service Support.Maintenance.Maintenance Corps",
							"USXH--":"Unit.Combat Service Support.Maintenance.Maintenance Heavy",
							"USXHT-":"Unit.Combat Service Support.Maintenance.Maintenance Heavy.Maintenance Heavy Theater",
							"USXHC-":"Unit.Combat Service Support.Maintenance.Maintenance Heavy.Maintenance Heavy Corps",
							"USXR--":"Unit.Combat Service Support.Maintenance.Maintenance Recovery",
							"USXRT-":"Unit.Combat Service Support.Maintenance.Maintenance Recovery.Maintenance Recovery Theater",
							"USXRC-":"Unit.Combat Service Support.Maintenance.Maintenance Recovery.Maintenance Recovery Corps",
							"USXO--":"Unit.Combat Service Support.Maintenance.Ordnance",
							"USXOT-":"Unit.Combat Service Support.Maintenance.Ordnance.Ordnance Theater",
							"USXOC-":"Unit.Combat Service Support.Maintenance.Ordnance.Ordnance Corps",
							"USXOM-":"Unit.Combat Service Support.Maintenance.Ordnance.Ordnance Missile",
							"USXOMT":"Unit.Combat Service Support.Maintenance.Ordnance.Ordnance Missile.Ordnance Missile Theater",
							"USXOMC":"Unit.Combat Service Support.Maintenance.Ordnance.Ordnance Missile.Ordnance Missile Corps",
							"USXE--":"Unit.Combat Service Support.Maintenance.Electro-optical",
							"USXET-":"Unit.Combat Service Support.Maintenance.Electro-optical.Electro-optical Theater",
							"USXEC-":"Unit.Combat Service Support.Maintenance.Electro-optical.Electro-optical Corps",
							"UH----":"Unit.Special C2 Headquarters Component",
							"E-----":"Ground Track Equipment",
							"EW----":"Ground Track Equipment.Weapon",
							"EWM---":"Ground Track Equipment.Weapon.Missile Launcher",
							"EWMA--":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher",
							"EWMAS-":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Short Range Ad Missile Launcher",
							"EWMASR":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Short Range Ad Missile Launcher.Transporter Launcher And Radar (Tlar)",
							"EWMASE":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Short Range Ad Missile Launcher.Transporter Erector Launcher And Radar (Telar)",
							"EWMAI-":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Intermediate Range Ad Missile Launcher",
							"EWMAIR":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Intermediate Range Ad Missile Launcher.Transporter Launcher And Radar (Tlar)",
							"EWMAIE":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Intermediate Range Ad Missile Launcher.Transporter Erector Launcher And Radar (Telar)",
							"EWMAL-":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Long Range Ad Missile Launcher",
							"EWMALR":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Long Range Ad Missile Launcher.Transporter Launcher And Radar (Tlar)",
							"EWMALE":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Long Range Ad Missile Launcher.Transporter Erector Launcher And Radar (Telar)",
							"EWMAT-":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Ad Missile Launcher Theater",
							"EWMATR":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Ad Missile Launcher Theater.Transporter Launcher And Radar (Tlar)",
							"EWMATE":"Ground Track Equipment.Weapon.Missile Launcher.Air Defense (Ad) Missile Launcher.Ad Missile Launcher Theater.Transporter Erector Launcher And Radar (Telar)",
							"EWMS--":"Ground Track Equipment.Weapon.Missile Launcher.Surf-surf (Ss) Missile Launcher",
							"EWMSS-":"Ground Track Equipment.Weapon.Missile Launcher.Surf-surf (Ss) Missile Launcher.Short Range Ss Missile Launcher",
							"EWMSI-":"Ground Track Equipment.Weapon.Missile Launcher.Surf-surf (Ss) Missile Launcher.Intermediate Range Ss Missile Launcher",
							"EWMSL-":"Ground Track Equipment.Weapon.Missile Launcher.Surf-surf (Ss) Missile Launcher.Long Range Ss Missile Launcher",
							"EWMT--":"Ground Track Equipment.Weapon.Missile Launcher.Missile Launcher Antitank (At)",
							"EWMTL-":"Ground Track Equipment.Weapon.Missile Launcher.Missile Launcher Antitank (At).Missile Launcher At Light",
							"EWMTM-":"Ground Track Equipment.Weapon.Missile Launcher.Missile Launcher Antitank (At).Missile Launcher At Medium",
							"EWMTH-":"Ground Track Equipment.Weapon.Missile Launcher.Missile Launcher Antitank (At).Missile Launcher At Heavy",
							"EWS---":"Ground Track Equipment.Weapon.Single Rocket Launcher",
							"EWSL--":"Ground Track Equipment.Weapon.Single Rocket Launcher.Single Rocket Launcher Light",
							"EWSM--":"Ground Track Equipment.Weapon.Single Rocket Launcher.Single Rocket Launcher Medium",
							"EWSH--":"Ground Track Equipment.Weapon.Single Rocket Launcher.Single Rocket Launcher Heavy",
							"EWX---":"Ground Track Equipment.Weapon.Multiple Rocket Launcher",
							"EWXL--":"Ground Track Equipment.Weapon.Multiple Rocket Launcher.Multiple Rocket Launcher Light",
							"EWXM--":"Ground Track Equipment.Weapon.Multiple Rocket Launcher.Multiple Rocket Launcher Medium",
							"EWXH--":"Ground Track Equipment.Weapon.Multiple Rocket Launcher.Multiple Rocket Launcher Heavy",
							"EWT---":"Ground Track Equipment.Weapon.Antitank Rocket Launcher",
							"EWTL--":"Ground Track Equipment.Weapon.Antitank Rocket Launcher.Antitank Rocket Launcher Light",
							"EWTM--":"Ground Track Equipment.Weapon.Antitank Rocket Launcher.Antitank Rocket Launcher Medium",
							"EWTH--":"Ground Track Equipment.Weapon.Antitank Rocket Launcher.Antitank Rocket Launcher Heavy",
							"EWR---":"Ground Track Equipment.Weapon.Rifle/automatic Weapon",
							"EWRR--":"Ground Track Equipment.Weapon.Rifle/automatic Weapon.Rifle",
							"EWRL--":"Ground Track Equipment.Weapon.Rifle/automatic Weapon.Light Machine Gun",
							"EWRH--":"Ground Track Equipment.Weapon.Rifle/automatic Weapon.Heavy Machine Gun",
							"EWZ---":"Ground Track Equipment.Weapon.Grenade Launcher",
							"EWZL--":"Ground Track Equipment.Weapon.Grenade Launcher.Grenade Launcher Light",
							"EWZM--":"Ground Track Equipment.Weapon.Grenade Launcher.Grenade Launcher Medium",
							"EWZH--":"Ground Track Equipment.Weapon.Grenade Launcher.Grenade Launcher Heavy",
							"EWO---":"Ground Track Equipment.Weapon.Mortar",
							"EWOL--":"Ground Track Equipment.Weapon.Mortar.Mortar Light",
							"EWOM--":"Ground Track Equipment.Weapon.Mortar.Mortar Medium",
							"EWOH--":"Ground Track Equipment.Weapon.Mortar.Mortar Heavy",
							"EWH---":"Ground Track Equipment.Weapon.Howitzer",
							"EWHL--":"Ground Track Equipment.Weapon.Howitzer.Howitzer Light",
							"EWHLS-":"Ground Track Equipment.Weapon.Howitzer.Howitzer Light.Howitzer Light Self-propelled",
							"EWHM--":"Ground Track Equipment.Weapon.Howitzer.Howitzer Medium",
							"EWHMS-":"Ground Track Equipment.Weapon.Howitzer.Howitzer Medium.Howitzer Medium Self-propelled",
							"EWHH--":"Ground Track Equipment.Weapon.Howitzer.Howitzer Heavy",
							"EWHHS-":"Ground Track Equipment.Weapon.Howitzer.Howitzer Heavy.Howitzer Heavy Self-propelled",
							"EWG---":"Ground Track Equipment.Weapon.Antitank Gun",
							"EWGL--":"Ground Track Equipment.Weapon.Antitank Gun.Antitank Gun Light",
							"EWGM--":"Ground Track Equipment.Weapon.Antitank Gun.Antitank Gun Medium",
							"EWGH--":"Ground Track Equipment.Weapon.Antitank Gun.Antitank Gun Heavy",
							"EWGR--":"Ground Track Equipment.Weapon.Antitank Gun.Antitank Gun Recoilless",
							"EWD---":"Ground Track Equipment.Weapon.Direct Fire Gun",
							"EWDL--":"Ground Track Equipment.Weapon.Direct Fire Gun.Direct Fire Gun Light",
							"EWDLS-":"Ground Track Equipment.Weapon.Direct Fire Gun.Direct Fire Gun Light.Direct Fire Gun Light Self-propelled",
							"EWDM--":"Ground Track Equipment.Weapon.Direct Fire Gun.Direct Fire Gun Medium",
							"EWDMS-":"Ground Track Equipment.Weapon.Direct Fire Gun.Direct Fire Gun Medium.Direct Fire Gun Medium Self-propelled",
							"EWDH--":"Ground Track Equipment.Weapon.Direct Fire Gun.Direct Fire Gun Heavy",
							"EWDHS-":"Ground Track Equipment.Weapon.Direct Fire Gun.Direct Fire Gun Heavy.Direct Fire Gun Heavy Self-propelled",
							"EWA---":"Ground Track Equipment.Weapon.Air Defense Gun",
							"EWAL--":"Ground Track Equipment.Weapon.Air Defense Gun.Air Defense Gun Light",
							"EWAM--":"Ground Track Equipment.Weapon.Air Defense Gun.Air Defense Gun Medium",
							"EWAH--":"Ground Track Equipment.Weapon.Air Defense Gun.Air Defense Gun Heavy",
							"EV----":"Ground Track Equipment.Ground Vehicle",
							"EVA---":"Ground Track Equipment.Ground Vehicle.Armored Vehicle",
							"EVAT--":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank",
							"EVATL-":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank.Tank Light",
							"EVATLR":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank.Tank Light.Tank Light Recovery",
							"EVATM-":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank.Tank Medium",
							"EVATMR":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank.Tank Medium.Tank Medium Recovery",
							"EVATH-":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank.Tank Heavy",
							"EVATHR":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Tank.Tank Heavy.Tank Heavy Recovery",
							"EVAA--":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Armored Personnel Carrier",
							"EVAAR-":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Armored Personnel Carrier.Armored Personnel Carrier Recovery",
							"EVAI--":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Armored Infantry",
							"EVAC--":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.C2v/acv",
							"EVAS--":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Combat Service Support Vehicle",
							"EVAL--":"Ground Track Equipment.Ground Vehicle.Armored Vehicle.Light Armored Vehicle",
							"EVU---":"Ground Track Equipment.Ground Vehicle.Utility Vehicle",
							"EVUB--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Bus",
							"EVUS--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Semi",
							"EVUSL-":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Semi.Semi Light",
							"EVUSM-":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Semi.Semi Medium",
							"EVUSH-":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Semi.Semi Heavy",
							"EVUL--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Limited Cross-country Truck",
							"EVUX--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Cross-country Truck",
							"EVUR--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Water Craft",
							"EVUT--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Tow Truck",
							"EVUTL-":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Tow Truck.Tow Truck Light",
							"EVUTH-":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Tow Truck.Tow Truck Heavy",
							"EVUA--":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Ambulance",
							"EVUAA-":"Ground Track Equipment.Ground Vehicle.Utility Vehicle.Ambulance.Armored Ambulance",
							"EVE---":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle",
							"EVEB--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Bridge",
							"EVEE--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Earthmover",
							"EVEC--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Construction Vehicle",
							"EVEM--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle",
							"EVEMV-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle.Armored Carrier With Volcano",
							"EVEML-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Laying Vehicle.Truck Mounted With Volcano",
							"EVEA--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Clearing Vehicle",
							"EVEAA-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Clearing Vehicle.Armored Mounted Mine Clearing Vehicle",
							"EVEAT-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Mine Clearing Vehicle.Trailer Mounted Mine Clearing Vehicle",
							"EVED--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Dozer",
							"EVEDA-":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Dozer.Armored Dozer",
							"EVES--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Armored Assault",
							"EVER--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Armored Engineer Recon Vehicle (Aerv)",
							"EVEH--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Backhoe",
							"EVEF--":"Ground Track Equipment.Ground Vehicle.Engineer Vehicle.Ferry Transporter",
							"EVT---":"Ground Track Equipment.Ground Vehicle.Train Locomotive",
							"EVC---":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle",
							"EVCA--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Automobile",
							"EVCAL-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Automobile.Compact Automobile",
							"EVCAM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Automobile.Midsize Automobile",
							"EVCAH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Automobile.Sedan Automobile",
							"EVCO--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Open-bed Truck",
							"EVCOL-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Open-bed Truck.Pickup Open-bed Truck",
							"EVCOM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Open-bed Truck.Small Open-bed Truck",
							"EVCOH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Open-bed Truck.Large Open-bed Truck",
							"EVCM--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Multiple Passenger Vehicle",
							"EVCML-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Multiple Passenger Vehicle.Van Multiple Passenger Vehicle",
							"EVCMM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Multiple Passenger Vehicle.Small Bus Multiple Passenger Vehicle",
							"EVCMH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Multiple Passenger Vehicle.Large Bus Multiple Passenger Vehicle",
							"EVCU--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Utility Vehicle",
							"EVCUL-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Utility Vehicle.Sport Utility Vehicle (Suv), Utility Vehicle",
							"EVCUM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Utility Vehicle.Small Box Truck, Utility Vehicle",
							"EVCUH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Utility Vehicle.Large Box Truck, Utility Vehicle",
							"EVCJ--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Jeep Type Vehicle",
							"EVCJL-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Jeep Type Vehicle.Small/light Jeep Type Vehicle",
							"EVCJM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Jeep Type Vehicle.Medium Jeep Type Vehicle",
							"EVCJH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Jeep Type Vehicle.Large/heavy Jeep Type Vehicle",
							"EVCT--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Box Trailer",
							"EVCTL-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Box Trailer.Small/light Box Trailer, Tractor Trailer Truck",
							"EVCTM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Box Trailer.Medium Box Trailer, Tractor Trailer Truck",
							"EVCTH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Box Trailer.Large/heavy Box Trailer, Tractor Trailer Truck",
							"EVCF--":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Flatbed Trailer",
							"EVCFL-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Flatbed Trailer.Small/light Flatbed Trailer, Tractor Trailer Truck",
							"EVCFM-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Flatbed Trailer.Medium Flatbed Trailer, Tractor Trailer Truck",
							"EVCFH-":"Ground Track Equipment.Ground Vehicle.Civilian Vehicle.Tractor Trailer Truck With Flatbed Trailer.Large/heavy Flatbed Trailer, Tractor Trailer Truck",
							"EVM---":"Ground Track Equipment.Ground Vehicle.Pack Animal(s)",
							"EVS---":"Ground Track Equipment.Ground Vehicle.Missile Support Vehicle",
							"EVST--":"Ground Track Equipment.Ground Vehicle.Missile Support Vehicle.Missile Support Vehicle Transloader",
							"EVSR--":"Ground Track Equipment.Ground Vehicle.Missile Support Vehicle.Missile Support Vehicle Transporter",
							"EVSC--":"Ground Track Equipment.Ground Vehicle.Missile Support Vehicle.Missile Support Vehicle Crane/loading Device",
							"EVSP--":"Ground Track Equipment.Ground Vehicle.Missile Support Vehicle.Missile Support Vehicle Propellant Transporter",
							"EVSW--":"Ground Track Equipment.Ground Vehicle.Missile Support Vehicle.Missile Support Vehicle Warhead Transporter",
							"ES----":"Ground Track Equipment.Sensor",
							"ESR---":"Ground Track Equipment.Sensor.Radar",
							"ESE---":"Ground Track Equipment.Sensor.Emplaced Sensor",
							"EX----":"Ground Track Equipment.Special Equipment",
							"EXI---":"Ground Track Equipment.Special Equipment.Improvised Explosive Device",
							"EXL---":"Ground Track Equipment.Special Equipment.Laser",
							"EXN---":"Ground Track Equipment.Special Equipment.Cbrn Equipment",
							"EXF---":"Ground Track Equipment.Special Equipment.Flame Thrower",
							"EXM---":"Ground Track Equipment.Special Equipment.Land Mines",
							"EXMC--":"Ground Track Equipment.Special Equipment.Land Mines.Claymore",
							"EXML--":"Ground Track Equipment.Special Equipment.Land Mines.Less Than Lethal"
						};
					//Ground installation
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "G" && document.getElementById('SIDCSYMBOLMODIFIER11').value == "H" )
						values = {
							"I-----":"Installation",
							"IR----":"Installation.Raw Material Production/storage",
							"IRM---":"Installation.Raw Material Production/storage.Mine",
							"IRP---":"Installation.Raw Material Production/storage.Petroleum/gas/oil",
							"IRN---":"Installation.Raw Material Production/storage.Cbrn",
							"IRNB--":"Installation.Raw Material Production/storage.Cbrn.Biological",
							"IRNC--":"Installation.Raw Material Production/storage.Cbrn.Chemical",
							"IRNN--":"Installation.Raw Material Production/storage.Cbrn.Nuclear",
							"IP----":"Installation.Processing Facility",
							"IPD---":"Installation.Processing Facility.Decontamination",
							"IE----":"Installation.Equipment Manufacture",
							"IU----":"Installation.Service, Research, Utility Facility",
							"IUR---":"Installation.Service, Research, Utility Facility.Technological Research Facility",
							"IUT---":"Installation.Service, Research, Utility Facility.Telecommunications Facility",
							"IUE---":"Installation.Service, Research, Utility Facility.Electric Power Facility",
							"IUEN--":"Installation.Service, Research, Utility Facility.Electric Power Facility.Nuclear Plant",
							"IUED--":"Installation.Service, Research, Utility Facility.Electric Power Facility.Dam",
							"IUEF--":"Installation.Service, Research, Utility Facility.Electric Power Facility.Fossil Fuel",
							"IUP---":"Installation.Service, Research, Utility Facility.Public Water Services",
							"IM----":"Installation.Military Materiel Facility",
							"IMF---":"Installation.Military Materiel Facility.Nuclear Energy",
							"IMFA--":"Installation.Military Materiel Facility.Nuclear Energy.Atomic Energy Reactor",
							"IMFP--":"Installation.Military Materiel Facility.Nuclear Energy.Nuclear Material Production",
							"IMFPW-":"Installation.Military Materiel Facility.Nuclear Energy.Nuclear Material Production.Weapons Grade",
							"IMFS--":"Installation.Military Materiel Facility.Nuclear Energy.Nuclear Material Storage",
							"IMA---":"Installation.Military Materiel Facility.Aircraft Production & Assembly",
							"IME---":"Installation.Military Materiel Facility.Ammunition And Explosives Production",
							"IMG---":"Installation.Military Materiel Facility.Armament Production",
							"IMV---":"Installation.Military Materiel Facility.Military Vehicle Production",
							"IMN---":"Installation.Military Materiel Facility.Engineering Equipment Production",
							"IMNB--":"Installation.Military Materiel Facility.Engineering Equipment Production.Bridge",
							"IMC---":"Installation.Military Materiel Facility.Chemical & Biological Warfare Production",
							"IMS---":"Installation.Military Materiel Facility.Ship Construction",
							"IMM---":"Installation.Military Materiel Facility.Missile & Space System Production",
							"IG----":"Installation.Government Leadership",
							"IB----":"Installation.Military Base/facility",
							"IBA---":"Installation.Military Base/facility.Airport/airbase",
							"IBN---":"Installation.Military Base/facility.Seaport/naval Base",
							"IT----":"Installation.Transport Facility",
							"IX----":"Installation.Medical Facility",
							"IXH---":"Installation.Medical Facility.Hospital"
						};
					//surface
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "S" )
						values = {
							"------":"Sea Surface Track",
							"C-----":"Combatant",
							"CL----":"Combatant.Line",
							"CLCV--":"Combatant.Line.Carrier",
							"CLBB--":"Combatant.Line.Battleship",
							"CLCC--":"Combatant.Line.Cruiser",
							"CLDD--":"Combatant.Line.Destroyer",
							"CLFF--":"Combatant.Line.Frigate/corvette",
							"CLLL--":"Combatant.Line.Littoral Combatant",
							"CLLLAS":"Combatant.Line.Littoral Combatant.Antisubmarine Warfare Mission Package",
							"CLLLMI":"Combatant.Line.Littoral Combatant.Mine Warfare Mission Package",
							"CLLLSU":"Combatant.Line.Littoral Combatant.Surface Warfare (Suw) Mission Package",
							"CA----":"Combatant.Amphibious Warfare Ship",
							"CALA--":"Combatant.Amphibious Warfare Ship.Assault Vessel",
							"CALS--":"Combatant.Amphibious Warfare Ship.Landing Ship",
							"CALSM-":"Combatant.Amphibious Warfare Ship.Landing Ship.Landing Ship Medium",
							"CALST-":"Combatant.Amphibious Warfare Ship.Landing Ship.Landing Ship Tank",
							"CALC--":"Combatant.Amphibious Warfare Ship.Landing Craft",
							"CM----":"Combatant.Mine Warfare Vessel",
							"CMML--":"Combatant.Mine Warfare Vessel.Minelayer",
							"CMMS--":"Combatant.Mine Warfare Vessel.Minesweeper",
							"CMMH--":"Combatant.Mine Warfare Vessel.Minehunter",
							"CMMA--":"Combatant.Mine Warfare Vessel.Mcm Support",
							"CP----":"Combatant.Patrol",
							"CPSB--":"Combatant.Patrol.Antisubmarine Warfare",
							"CPSU--":"Combatant.Patrol.Antisurface Warfare",
							"CPSUM-":"Combatant.Patrol.Antisurface Warfare.Antiship Missile Patrol Craft",
							"CPSUT-":"Combatant.Patrol.Antisurface Warfare.Torpedo Patrol Craft",
							"CPSUG-":"Combatant.Patrol.Antisurface Warfare.Gun Patrol Craft",
							"CH----":"Combatant.Hovercraft",
							"G-----":"Combatant.Navy Group",
							"GT----":"Combatant.Navy Group.Navy Task Force",
							"GG----":"Combatant.Navy Group.Navy Task Group",
							"GU----":"Combatant.Navy Group.Navy Task Unit",
							"GC----":"Combatant.Navy Group.Convoy",
							"CD----":"Combatant.Surface Decoy",
							"CU----":"Combatant.Unmanned Surface Vehicle",
							"CUM---":"Combatant.Unmanned Surface Vehicle.Mine Countermeasures Surface Drone",
							"CUS---":"Combatant.Unmanned Surface Vehicle.Antisubmarine Warfare Surface Drone",
							"CUN---":"Combatant.Unmanned Surface Vehicle.Antisurface Warfare Surface Drone",
							"CUR---":"Combatant.Unmanned Surface Vehicle.Remote Multimission Vehicle",
							"N-----":"Noncombatant",
							"NR----":"Noncombatant.Underway Replenishment",
							"NF----":"Noncombatant.Fleet Support",
							"NI----":"Noncombatant.Intelligence",
							"NS----":"Noncombatant.Service & Support Harbor",
							"NM----":"Noncombatant.Hospital Ship",
							"NH----":"Noncombatant.Hovercraft",
							"X-----":"Non-military",
							"XM----":"Non-military.Merchant",
							"XMC---":"Non-military.Merchant.Cargo",
							"XMR---":"Non-military.Merchant.Roll On/roll Off",
							"XMO---":"Non-military.Merchant.Oiler/tanker",
							"XMTU--":"Non-military.Merchant.Tug",
							"XMF---":"Non-military.Merchant.Ferry",
							"XMP---":"Non-military.Merchant.Passenger",
							"XMH---":"Non-military.Merchant.Hazardous Materials (Hazmat)",
							"XMTO--":"Non-military.Merchant.Towing Vessel",
							"XF----":"Non-military.Fishing",
							"XFDF--":"Non-military.Fishing.Drifter",
							"XFDR--":"Non-military.Fishing.Dredge",
							"XFTR--":"Non-military.Fishing.Trawler",
							"XR----":"Non-military.Leisure Craft",
							"XL----":"Non-military.Law Enforcement Vessel",
							"XH----":"Non-military.Hovercraft",
							"XA----":"Non-military.Fast Recreactional Craft",
							"XAR---":"Non-military.Fast Recreactional Craft.Rigid-hull Inflatable Boat",
							"XAS---":"Non-military.Fast Recreactional Craft.Speed Boat",
							"XP----":"Non-military.Personal Watercraft",
							"O-----":"Own Track"
						};
					//sub
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "U" )
						values = {
							"------":"Subsurface Track",
							"S-----":"Submarine",
							"SF----":"Submarine.Surfaced Submarine",
							"SB----":"Submarine.Bottomed",
							"SR----":"Submarine.Certain Submarine",
							"SX----":"Submarine.Nonsubmarine",
							"SN----":"Submarine.Nuclear Propulsion",
							"SNF---":"Submarine.Nuclear Propulsion.Surfaced Nuclear Propulsion Submarine",
							"SNA---":"Submarine.Nuclear Propulsion.Attack Submarine (Ssn)",
							"SNM---":"Submarine.Nuclear Propulsion.Missile Submarine (Type Unknown)",
							"SNG---":"Submarine.Nuclear Propulsion.Guided Missile Submarine (Ssgn)",
							"SNB---":"Submarine.Nuclear Propulsion.Ballistic Missile Submarine (Ssbn)",
							"SC----":"Submarine.Conventional Propulsion",
							"SCF---":"Submarine.Conventional Propulsion.Surfaced Conventional Propulsion Submarine",
							"SCA---":"Submarine.Conventional Propulsion.Attack Submarine (Ss)",
							"SCM---":"Submarine.Conventional Propulsion.Missile Submarine (Type Unknown)",
							"SCG---":"Submarine.Conventional Propulsion.Guided Missile Submarine (Ssg)",
							"SCB---":"Submarine.Conventional Propulsion.Ballistic Missile Submarine (Ssb)",
							"SO----":"Submarine.Other Submersible",
							"SOF---":"Submarine.Other Submersible.Surfaced Other Submersible",
							"SU----":"Submarine.Unmanned Underwater Vehicle (Uuv)",
							"SUM---":"Submarine.Unmanned Underwater Vehicle (Uuv).Mine Warfare Subsurface Drone",
							"SUS---":"Submarine.Unmanned Underwater Vehicle (Uuv).Antisubmarine Warfare Subsurface Drone",
							"SUN---":"Submarine.Unmanned Underwater Vehicle (Uuv).Antisurface Warfare Subsurface Drone",
							"S1----":"Submarine.Possible Submarine 1",
							"S2----":"Submarine.Possible Submarine 2",
							"S3----":"Submarine.Possible Submarine 3",
							"S4----":"Submarine.Possible Submarine 4",
							"SL----":"Submarine.Probable Submarine",
							"SK----":"Submarine.Snorkeling Submarine",
							"W-----":"Underwater Weapon",
							"WT----":"Underwater Weapon.Torpedo",
							"WM----":"Underwater Weapon.Sea Mine",
							"WMD---":"Underwater Weapon.Sea Mine.Sea Mine Neutralized",
							"WMG---":"Underwater Weapon.Sea Mine.Sea Mine (Ground)",
							"WMGD--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Sea Mine (Ground) Neutralized",
							"WMGX--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Ground (Bottom) Exercise Mine",
							"WMGE--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Ground (Bottom) Mine-like Echo (Milec)",
							"WMGC--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Ground (Bottom) Mine-like Contact (Milco)",
							"WMGR--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Ground (Bottom) Negative Reacquisition",
							"WMGO--":"Underwater Weapon.Sea Mine.Sea Mine (Ground).Ground (Bottom) Non-mine Mine-like Contact",
							"WMM---":"Underwater Weapon.Sea Mine.Sea Mine (Moored)",
							"WMMD--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Sea Mine (Moored) Neutralized",
							"WMMX--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Moored Exercise Mine",
							"WMME--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Moored Mine-like Echo",
							"WMMC--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Moored Mine-like Contact",
							"WMMR--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Moored Negative Reacquisition",
							"WMMO--":"Underwater Weapon.Sea Mine.Sea Mine (Moored).Moored Non-mine Mine-like Object",
							"WMF---":"Underwater Weapon.Sea Mine.Sea Mine (Floating)",
							"WMFD--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Sea Mine (Floating) Neutralized",
							"WMFX--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Floating Exercise Mine",
							"WMFE--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Floating Mine-like Echo (Milec)",
							"WMFC--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Floating Mine-like Contact (Milco)",
							"WMFR--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Floating Negative Reacquisition",
							"WMFO--":"Underwater Weapon.Sea Mine.Sea Mine (Floating).Floating Non-mine Mine-like Contact",
							"WMO---":"Underwater Weapon.Sea Mine.Sea Mine (Other Position)",
							"WMOD--":"Underwater Weapon.Sea Mine.Sea Mine (Other Position).Sea Mine (Other Position) Neutralized",
							"WMX---":"Underwater Weapon.Sea Mine.General Exercise Mine",
							"WME---":"Underwater Weapon.Sea Mine.General Mine-like Echo (Milec)",
							"WMA---":"Underwater Weapon.Sea Mine.General Mine Anchor",
							"WMC---":"Underwater Weapon.Sea Mine.General Mine-like Contact (Milco)",
							"WMR---":"Underwater Weapon.Sea Mine.General Negative Reacquisition",
							"WMB---":"Underwater Weapon.Sea Mine.General Obstructor",
							"WMBD--":"Underwater Weapon.Sea Mine.General Obstructor.General Neutralized Obstructor",
							"WMN---":"Underwater Weapon.Sea Mine.General Non-mine Mine-like Object",
							"WMS---":"Underwater Weapon.Sea Mine.Rising Mine",
							"WMSX--":"Underwater Weapon.Sea Mine.Rising Mine.Rising Exercise Mine",
							"WMSD--":"Underwater Weapon.Sea Mine.Rising Mine.Rising Neutralized Mine",
							"WD----":"Underwater Decoy",
							"WDM---":"Underwater Decoy.Sea Mine Decoy",
							"WDMG--":"Underwater Decoy.Sea Mine Decoy.Ground (Bottom) Decoy",
							"WDMM--":"Underwater Decoy.Sea Mine Decoy.Moored Decoy",
							"N-----":"Non-submarine",
							"ND----":"Non-submarine.Diver",
							"E-----":"Environmental Report Location",
							"V-----":"Dive Report Location",
							"X-----":"Unexploded Ordnance Area"
						};
					//sof
					if(document.getElementById('SIDCBATTLEDIMENSION').value == "F" )
						values = {
							"------":"Special Operations Forces (SOF) Unit",
							"A-----":"SOF Unit Aviation",
							"AF----":"SOF Unit Aviation.SOF Unit Fixed Wing",
							"AFA---":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Attack",
							"AFK---":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Refuel",
							"AFU---":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility",
							"AFUL--":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility.SOF Unit Utility (Light)",
							"AFUM--":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility.SOF Unit Utility (Medium)",
							"AFUH--":"SOF Unit Aviation.SOF Unit Fixed Wing.SOF Unit Utility.SOF Unit Utility (Heavy)",
							"AV----":"SOF Unit Aviation.SOF Unit V/stol",
							"AH----":"SOF Unit Aviation.SOF Unit Rotary Wing",
							"AHH---":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Combat Search And Rescue",
							"AHA---":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Attack",
							"AHU---":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility",
							"AHUL--":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility.SOF Unit Utility (Light)",
							"AHUM--":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility.SOF Unit Utility (Medium)",
							"AHUH--":"SOF Unit Aviation.SOF Unit Rotary Wing.SOF Unit Utility.SOF Unit Utility (Heavy)",
							"N-----":"SOF Unit SOF Unit Naval",
							"NS----":"SOF Unit SOF Unit Naval.SOF Unit Seal",
							"NU----":"SOF Unit SOF Unit Naval.SOF Unit Underwater Demolition Team",
							"NB----":"SOF Unit SOF Unit Naval.SOF Unit Special Boat",
							"NN----":"SOF Unit SOF Unit Naval.SOF Unit Special Ssnr",
							"G-----":"SOF Unit Ground",
							"GS----":"SOF Unit Ground.SOF Unit Special Forces",
							"GR----":"SOF Unit Ground.SOF Unit Ranger",
							"GP----":"SOF Unit Ground.SOF Unit Psychological Operations (Psyop)",
							"GPA---":"SOF Unit Ground.SOF Unit Psychological Operations (Psyop).SOF Unit Fixed Wing Aviation",
							"GC----":"SOF Unit Ground.SOF Unit Civil Affairs",
							"B-----":"SOF Unit Support"
						};
				}
			}
			if(document.getElementById('SIDCCODINGSCHEME').value == "I" ){
				//space
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "P" )
					values = {
						'SCD---':'SIGNAL INTERCEPT/COMMUNICATIONS/SATELLITE DOWNLINK',
						'SRD---':'SIGNAL INTERCEPT/RADAR/DATA TRANSMISSION',
						'SRE---':'SIGNAL INTERCEPT/RADAR/EARTH SURVEILLANCE',
						'SRI---':'SIGNAL INTERCEPT/RADAR/MULTIFUNCTION',
						'SRM---':'SIGNAL INTERCEPT/RADAR/MULTIFUNCTION',
						'SRT---':'SIGNAL INTERCEPT/RADAR/TARGET ACQUISITION',
						'SRS---':'SIGNAL INTERCEPT/RADAR/SPACE',
						'SRU---':'SIGNAL INTERCEPT/RADAR/UNKNOWN'
					};
				//air
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "A" )
					values = {
						'SCC---':'SIGNAL INTERCEPT/COMMUNICATIONS/CELLULAR-MOBILE',
						'SCO---':'SIGNAL INTERCEPT/COMMUNICATIONS/OMNI-LINE OF SIGHT (LOS)',
						'SCP---':'SIGNAL INTERCEPT/COMMUNICATIONS/POINT-TO-POINT LINE OF SIGHT (LOS)',
						'SCS---':'SIGNAL INTERCEPT/COMMUNICATIONS/SATELLITE UPLINK',
						'SRAI--':'SIGNAL INTERCEPT/RADAR/AIRBORNE INTERCEPT',
						'SRAS--':'SIGNAL INTERCEPT/RADAR/AIRBORNE SEARCH & BOMBING',
						'SRC---':'SIGNAL INTERCEPT/RADAR/CONTROLLED INTERCEPT',
						'SRD---':'SIGNAL INTERCEPT/RADAR/DATA TRANSMISSION',
						'SRE---':'SIGNAL INTERCEPT/RADAR/EARLY WARNING',
						'SRF---':'SIGNAL INTERCEPT/RADAR/FIRE CONTROL',
						'SRI---':'SIGNAL INTERCEPT/RADAR/IFF (TRANSPONDER)',
						'SRMA--':'SIGNAL INTERCEPT/RADAR/MISSILE ACQUISITION',
						'SRMD--':'SIGNAL INTERCEPT/RADAR/MISSILE DOWNLINK',
						'SRMG--':'SIGNAL INTERCEPT/RADAR/MISSILE GUIDANCE',
						'SRMT--':'SIGNAL INTERCEPT/RADAR/MISSILE TRACKING',
						'SRMF--':'SIGNAL INTERCEPT/RADAR/MULTIFUNCTION',
						'SRTI--':'SIGNAL INTERCEPT/RADAR/TARGET ILLUMINATOR',
						'SRTA--':'SIGNAL INTERCEPT/RADAR/TARGET ACQUISITION',
						'SRTT--':'SIGNAL INTERCEPT/RADAR/TARGET TRACKING',
						'SRU---':'SIGNAL INTERCEPT/RADAR/UNKNOWN'
					};
				//Ground
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "G" )
					values = {
						'SCC---':'SIGNAL INTERCEPT/COMMUNICATIONS/CELLULAR-MOBILE',
						'SCO---':'SIGNAL INTERCEPT/COMMUNICATIONS/OMNI-LINE OF SIGHT (LOS)',
						'SCP---':'SIGNAL INTERCEPT/COMMUNICATIONS/POINT-TO-POINT LINE OF SIGHT (LOS)',
						'SCS---':'SIGNAL INTERCEPT/COMMUNICATIONS/SATELLITE UPLINK',
						'SCT---':'SIGNAL INTERCEPT/COMMUNICATIONS/TROPOSPHERIC SCATTER',
						'SRAT--':'SIGNAL INTERCEPT/RADAR/AIR TRAFFIC CONTROL',
						'SRAA--':'SIGNAL INTERCEPT/RADAR/ANTIAIRCRAFT',
						'SRB---':'SIGNAL INTERCEPT/RADAR/BATTLEFIELD SURVEILLANCE',
						'SRB---':'SIGNAL INTERCEPT/RADAR/BATTLEFIELD SURVEILLANCE',
						'SRCS--':'SIGNAL INTERCEPT/RADAR/COASTAL SURVEILLANCE',
						'SRCA--':'SIGNAL INTERCEPT/RADAR/CONTROLLED APPROACH',
						'SRD---':'SIGNAL INTERCEPT/RADAR/DATA TRANSMISSION',
						'SRE---':'SIGNAL INTERCEPT/RADAR/EARLY WARNING',
						'SRF---':'SIGNAL INTERCEPT/RADAR/FIRE CONTROL',
						'SRH---':'SIGNAL INTERCEPT/RADAR/HEIGHT FINDING',
						'SRI---':'SIGNAL INTERCEPT/RADAR/IDENTIFICATION FRIEND-FOE (INTERROGATOR)',
						'SRMM--':'SIGNAL INTERCEPT/RADAR/METEOROLOGICAL (MILITARY)',
						'SRMA--':'SIGNAL INTERCEPT/RADAR/MISSILE ACQUISITION',
						'SRMG--':'SIGNAL INTERCEPT/RADAR/MISSILE GUIDANCE',
						'SRMT--':'SIGNAL INTERCEPT/RADAR/MISSILE TRACKING',
						'SRMF--':'SIGNAL INTERCEPT/RADAR/MULTIFUNCTION',
						'SRS---':'SIGNAL INTERCEPT/RADAR/SHELL TRACKING',
						'SRTA--':'SIGNAL INTERCEPT/RADAR/TARGET ACQUISITION',
						'SRTI--':'SIGNAL INTERCEPT/RADAR/TARGET ILLUMINATOR',
						'SRTT--':'SIGNAL INTERCEPT/RADAR/TARGET TRACKING',
						'SRU---':'SIGNAL INTERCEPT/RADAR/UNKNOWN'
					};
				//surface
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "S" )
					values = {
						'SRAT--':'SIGNAL INTERCEPT/RADAR/AIR TRAFFIC CONTROL',
						'SRAA--':'SIGNAL INTERCEPT/RADAR/ANTIAIRCRAFT',
						'SRCA--':'SIGNAL INTERCEPT/RADAR/CONTROLLED APPROACH',
						'SRCI--':'SIGNAL INTERCEPT/RADAR/CONTROLLED INTERCEPT',
						'SRD---':'SIGNAL INTERCEPT/RADAR/DATA TRANSMISSION',
						'SRE---':'SIGNAL INTERCEPT/RADAR/EARLY WARNING',
						'SRF---':'SIGNAL INTERCEPT/RADAR/FIRE CONTROL',
						'SRH---':'SIGNAL INTERCEPT/RADAR/HEIGHT FINDING',
						'SRI---':'SIGNAL INTERCEPT/RADAR/IDENTIFICATION FRIEND-FOE (INTERROGATOR)',
						'SRMM--':'SIGNAL INTERCEPT/RADAR/METEOROLOGICAL (MILITARY)',
						'SRMA--':'SIGNAL INTERCEPT/RADAR/MISSILE ACQUISITION',
						'SRMG--':'SIGNAL INTERCEPT/RADAR/MISSILE GUIDANCE',
						'SRMT--':'SIGNAL INTERCEPT/RADAR/MISSILE TRACKING',
						'SRMF--':'SIGNAL INTERCEPT/RADAR/MULTIFUNCTION',
						'SRS---':'SIGNAL INTERCEPT/RADAR/SURFACE SEARCH',
						'SRTA--':'SIGNAL INTERCEPT/RADAR/TARGET ACQUISITION',
						'SRTI--':'SIGNAL INTERCEPT/RADAR/TARGET ILLUMINATOR',
						'SRTT--':'SIGNAL INTERCEPT/RADAR/TARGET TRACKING',
						'SRU---':'SIGNAL INTERCEPT/RADAR/UNKNOWN'
					};
				//sub
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "U" )
					values = {
						'SCO---':'SIGNAL INTERCEPT/COMMUNICATIONS/OMNI-LINE OF SIGHT (LOS)',
						'SCP---':'SIGNAL INTERCEPT/COMMUNICATIONS/POINT-TO-POINT LINE OF SIGHT (LOS)',
						'SCS---':'SIGNAL INTERCEPT/COMMUNICATIONS/SATELLITE UPLINK',
						'SRD---':'SIGNAL INTERCEPT/RADAR/DATA TRANSMISSION',
						'SRE---':'SIGNAL INTERCEPT/RADAR/EARLY WARNING',
						'SRM---':'SIGNAL INTERCEPT/RADAR/MULTIFUNCTION',
						'SRS---':'SIGNAL INTERCEPT/RADAR/SURFACE SEARCH',
						'SRT---':'SIGNAL INTERCEPT/RADAR/TARGET ACQUISITION',
						'SRU---':'SIGNAL INTERCEPT/RADAR/UNKNOWN'
					};
			}
			if(document.getElementById('SIDCCODINGSCHEME').value == "O" ){
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "V" )
					values = {
						"A-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/ARSON-FIRE",
						"M-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/KILLING (GENERAL)",
						"MA----":"VIOLENT ACTIVITIES (DEATH CAUSING)/KILLING (GENERAL)/MURDER",
						"MB----":"VIOLENT ACTIVITIES (DEATH CAUSING)/KILLING (GENERAL)/EXECUTION",
						"MC----":"VIOLENT ACTIVITIES (DEATH CAUSING)/KILLING (GENERAL)/ASSASSINATION",
						"B-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/BOMB-BOMBING",
						"Y-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/BOOBY TRAP",
						"D-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/DRIVE-BY SHOOTING",
						"S-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/SNIPING",
						"P-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/POISONING",
						"E-----":"VIOLENT ACTIVITIES (DEATH CAUSING)/EXPLOSION",
						"EI----":"VIOLENT ACTIVITIES (DEATH CAUSING)/IED EXPLOSION"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "L" )
					values={
						"B-----":"LOCATIONS/BLACK LIST LOCATION",
						"G-----":"LOCATIONS/GRAY LIST LOCATION",
						"W-----":"LOCATIONS/WHITE LIST LOCATION",
						"M-----":"LOCATIONS/MASS GRAVE LOCATION"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "O" )
					values={
						"P-----":"OPERATIONS/PATROLLING",
						"RW----":"OPERATIONS/RECRUITMENT/RECRUITMENT (WILLING)",
						"RC----":"OPERATIONS/RECRUITMENT/RECRUITMENT (COERCED/IMPRESSED)",
						"D-----":"OPERATIONS/DEMONSTRATION",
						"M-----":"OPERATIONS/MINE LAYING",
						"Y-----":"OPERATIONS/PSYCHOLOGICAL OPERATIONS (PSYOP)",
						"YT----":"OPERATIONS/PSYCHOLOGICAL OPERATIONS (PSYOP)/PSYOP (TV AND RADIO PROPAGANDA)",
						"YW----":"OPERATIONS/PSYCHOLOGICAL OPERATIONS (PSYOP)/PSYOP (WRITTEN PROPAGANDA)",
						"YH----":"OPERATIONS/PSYCHOLOGICAL OPERATIONS (PSYOP)/HOUSE-TO-HOUSE PROPAGANDA",
						"F-----":"OPERATIONS/FORAGING-SEARCHING",
						"S-----":"OPERATIONS/SPY",
						"O-----":"OPERATIONS/FOOD DISTRIBUTION",
						"E-----":"OPERATIONS/EXTORTION",
						"HT----":"OPERATIONS/HIJACKING/HIJACKING (VEHICLE)",
						"HA----":"OPERATIONS/HIJACKING/HIJACKING (AIRPLANE)",
						"HV----":"OPERATIONS/HIJACKING/HIJACKING (BOAT)",
						"K-----":"OPERATIONS/KIDNAPPING",
						"KA----":"OPERATIONS/KIDNAPPING/ATTEMPTED",
						"A-----":"OPERATIONS/ARREST",
						"U-----":"OPERATIONS/DRUG OPERATION",
						"C-----":"OPERATIONS/COMPOSITE LOSS",
						"CA----":"OPERATIONS/COMPOSITE LOSS/COMBAT",
						"CB----":"OPERATIONS/COMPOSITE LOSS/ACCIDENT",
						"CC----":"OPERATIONS/COMPOSITE LOSS/OTHER"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "I" )
					values={
						"R-----":"ITEMS/REFUGEES",
						"S-----":"ITEMS/SAFE HOUSE",
						"G-----":"ITEMS/GRAFFITI",
						"V-----":"ITEMS/VANDALISM-LOOT-RANSACK-PLUNDER-SACK",
						"I-----":"ITEMS/KNOWN INSURGENT VEHICLE",
						"D-----":"ITEMS/DRUG VEHICLE",
						"F-----":"ITEMS/INTERNAL SECURITY FORCE"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "P" )
					values={
						"------":"INDIVIDUAL",
						"A-----":"INDIVIDUAL/LEADER",
						"B-----":"INDIVIDUAL/TARGETED",
						"C-----":"INDIVIDUAL/TERRORIST"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "G" )
					values={
						"------":"NONMILITARY GROUP OR ORGANIZATION",
						"A-----":"NONMILITARY GROUP OR ORGANIZATION/DISPLACED PERSONS, REFUGEES, AND EVACUEES",
						"B-----":"NONMILITARY GROUP OR ORGANIZATION/NONGOVERNMENTAL ORGANIZATION (NGO)",
						"C-----":"NONMILITARY GROUP OR ORGANIZATION/TERRORIST",
						"D-----":"NONMILITARY GROUP OR ORGANIZATION/RELIGIOUS",
						"E-----":"NONMILITARY GROUP OR ORGANIZATION/FOREIGN FIGHTERS",
						"F-----":"NONMILITARY GROUP OR ORGANIZATION/GANG"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "R" )
					values={
						"------":"RAPE",
						"A-----":"RAPE/ATTEMPTED"
					};
			}
			if(document.getElementById('SIDCCODINGSCHEME').value == "E" ){
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "I" )
					values = {
						"------":"Incident",
						"A-----":"Civil Disturbance Incident",
						"AC----":"Civil Disturbance Incident.Civil Rioting",
						"B-----":"Criminal Activity Incident",
						"BA----":"Criminal Activity Incident.Bomb Threat",
						"BC----":"Criminal Activity Incident.Explosion",
						"BD----":"Criminal Activity Incident.Looting",
						"BF----":"Criminal Activity Incident.Shooting",
						"C-----":"Fire Incident",
						"CA----":"Fire Incident.Hot Spot",
						"CB----":"Fire Incident.Non-residential Fire",
						"CC----":"Fire Incident.Origin (Of Fire)",
						"CD----":"Fire Incident.Residential Fire",
						"CE----":"Fire Incident.School Fire",
						"CF----":"Fire Incident.Smoke",
						"CG----":"Fire Incident.Special Needs Fire",
						"CH----":"Fire Incident.Wild Fire",
						"D-----":"Hazardous Material Incident",
						"DA----":"Hazardous Material Incident.Chemical Agent",
						"DB----":"Hazardous Material Incident.Corrosive Material",
						"DC----":"Hazardous Material Incident.Hazardous When Wet",
						"DD----":"Hazardous Material Incident.Explosive",
						"DE----":"Hazardous Material Incident.Flammable Gas",
						"DF----":"Hazardous Material Incident.Flammable Liquid",
						"DG----":"Hazardous Material Incident.Flammable Solid",
						"DH----":"Hazardous Material Incident.Non-flammable Gas",
						"DI----":"Hazardous Material Incident.Organic Peroxide",
						"DJ----":"Hazardous Material Incident.Oxidizer",
						"DK----":"Hazardous Material Incident.Radioactive Material",
						"DL----":"Hazardous Material Incident.Spontaneously Combustible",
						"DM----":"Hazardous Material Incident.Toxic Gas",
						"DN----":"Hazardous Material Incident.Toxic And Infectious",
						"DO----":"Hazardous Material Incident.Unexploded Ordnance",
						"E-----":"Air Incident",
						"EA----":"Air Incident.Air Accident",
						"F-----":"Marine Incident",
						"FA----":"Marine Incident.Marine Accident",
						"G-----":"Rail Incident",
						"GA----":"Rail Incident.Rail Accident",
						"GB----":"Rail Incident.Rail Hijacking",
						"H-----":"Vehicle Incident",
						"HA----":"Vehicle Incident.Vehicle Accident"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "N" )
					values = {
						"------":"Natural Events",
						"A-----":"Geologic",
						"AA----":"Geologic.Aftershock",
						"AB----":"Geologic.Avalanche",
						"AC----":"Geologic.Earthquake Epicenter",
						"AD----":"Geologic.Landslide",
						"AE----":"Geologic.Subsidence",
						"AG----":"Geologic.Volcanic Threat",
						"B-----":"Hydro-meteorological",
						"BB----":"Hydro-meteorological.Drought",
						"BC----":"Hydro-meteorological.Flood",
						"BF----":"Hydro-meteorological.Inversion",
						"BM----":"Hydro-meteorological.Tsunami",
						"C-----":"Infestation",
						"CA----":"Infestation.Bird Infestation",
						"CB----":"Infestation.Insect Infestation",
						"CC----":"Infestation.Microbial Infestation",
						"CD----":"Infestation.Reptile Infestation",
						"CE----":"Infestation.Rodent Infestation"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "O" )
					values = {
						"------":"Operations",
						"A-----":"Emergency Medical Operation",
						"AA----":"Emergency Medical Operation.Emergency Medical Operation Unit",
						"AB----":"Emergency Medical Operation.Emergency Medical Operation Equipment",
						"AC----":"Emergency Medical Operation.Emergency Medical Operation Installation",
						"AD----":"Emergency Medical Operation.Emt Station Location",
						"AE----":"Emergency Medical Operation.Ambulance",
						"AF----":"Emergency Medical Operation.Medical Evacuation Helicopter",
						"AG----":"Emergency Medical Operation.Health Department Facility",
						"AJ----":"Emergency Medical Operation.Medical Facilities Out Patient",
						"AK----":"Emergency Medical Operation.Morgue",
						"AL----":"Emergency Medical Operation.Pharmacy",
						"AM----":"Emergency Medical Operation.Triage",
						"B-----":"Emergency Operation",
						"BA----":"Emergency Operation.Emergency Operation Unit",
						"BB----":"Emergency Operation.Emergency Operation Equipment",
						"BC----":"Emergency Operation.Emergency Operation Installation",
						"BD----":"Emergency Operation.Emergency Collection Evacuation Point",
						"BE----":"Emergency Operation.Emergency Incident Command Center",
						"BF----":"Emergency Operation.Emergency Operations Center",
						"BG----":"Emergency Operation.Emergency Public Information Center",
						"BH----":"Emergency Operation.Emergency Shelter",
						"BI----":"Emergency Operation.Emergency Staging Area",
						"BJ----":"Emergency Operation.Emergency Team",
						"BK----":"Emergency Operation.Emergency Water Distribution Center",
						"BL----":"Emergency Operation.Emergency Food Distribution Center",
						"C-----":"Fire Fighting Operation",
						"CA----":"Fire Fighting Operation.Fire Fighting Operation Unit",
						"CB----":"Fire Fighting Operation.Fire Fighting Operation Equipment",
						"CC----":"Fire Fighting Operation.Fire Hydrant",
						"CD----":"Fire Fighting Operation.Other Water Supply Location",
						"CE----":"Fire Fighting Operation.Fire Station",
						"D-----":"Law Enforcement Operation",
						"DA----":"Law Enforcement Operation.Law Enforcement Operation Unit",
						"DB----":"Law Enforcement Operation.Law Enforcement Operation Equipment",
						"DC----":"Law Enforcement Operation.Law Enforcement Operation Installation",
						"DD----":"Law Enforcement Operation.Atf",
						"DDA---":"Law Enforcement Operation.Atf.Atf Unit",
						"DDB---":"Law Enforcement Operation.Atf.Atf Equipment",
						"DDC---":"Law Enforcement Operation.Atf.Atf Installation",
						"DE----":"Law Enforcement Operation.Border Patrol",
						"DEA---":"Law Enforcement Operation.Border Patrol.Border Patrol Unit",
						"DEB---":"Law Enforcement Operation.Border Patrol.Border Patrol Equipment",
						"DEC---":"Law Enforcement Operation.Border Patrol.Border Patrol Installation",
						"DF----":"Law Enforcement Operation.Customs Service",
						"DFA---":"Law Enforcement Operation.Customs Service.Customs Service Unit",
						"DFB---":"Law Enforcement Operation.Customs Service.Customs Service Equipment",
						"DFC---":"Law Enforcement Operation.Customs Service.Customs Service Installation",
						"DG----":"Law Enforcement Operation.Dea",
						"DGA---":"Law Enforcement Operation.Dea.Dea Unit",
						"DGB---":"Law Enforcement Operation.Dea.Dea Equipment",
						"DGC---":"Law Enforcement Operation.Dea.Dea Installation",
						"DH----":"Law Enforcement Operation.Doj",
						"DHA---":"Law Enforcement Operation.Doj.Doj Unit",
						"DHB---":"Law Enforcement Operation.Doj.Doj Equipment",
						"DHC---":"Law Enforcement Operation.Doj.Doj Installation",
						"DI----":"Law Enforcement Operation.Fbi",
						"DIA---":"Law Enforcement Operation.Fbi.Fbi Unit",
						"DIB---":"Law Enforcement Operation.Fbi.Fbi Equipment",
						"DIC---":"Law Enforcement Operation.Fbi.Fbi Installation",
						"DJ----":"Law Enforcement Operation.Police",
						"DJB---":"Law Enforcement Operation.Police.Police Equipment",
						"DJC---":"Law Enforcement Operation.Police.Police Installation",
						"DK----":"Law Enforcement Operation.Prison",
						"DL----":"Law Enforcement Operation.Secret Service",
						"DLA---":"Law Enforcement Operation.Secret Service.Secret Service Unit",
						"DLB---":"Law Enforcement Operation.Secret Service.Secret Service Equipment",
						"DLC---":"Law Enforcement Operation.Secret Service.Secret Service Installation",
						"DM----":"Law Enforcement Operation.Tsa",
						"DMA---":"Law Enforcement Operation.Tsa.Tsa Unit",
						"DMB---":"Law Enforcement Operation.Tsa.Tsa Equipment",
						"DMC---":"Law Enforcement Operation.Tsa.Tsa Installation",
						"DN----":"Law Enforcement Operation.Coast Guard",
						"DNA---":"Law Enforcement Operation.Coast Guard.Coast Guard Unit",
						"DNC---":"Law Enforcement Operation.Coast Guard.Coast Guard Installation",
						"DO----":"Law Enforcement Operation.Us Marshals Service",
						"DOA---":"Law Enforcement Operation.Us Marshals Service.Us Marshals Service Unit",
						"DOB---":"Law Enforcement Operation.Us Marshals Service.Us Marshals Service Equipment",
						"DOC---":"Law Enforcement Operation.Us Marshals Service.Us Marshals Service Installation",
						"EA----":"Law Enforcement Operation.Biological Sensor",
						"EB----":"Law Enforcement Operation.Chemical Sensor",
						"EC----":"Law Enforcement Operation.Intrusion Sensor",
						"ED----":"Law Enforcement Operation.Nuclear Sensor",
						"EE----":"Law Enforcement Operation.Radiological Sensor"
					};
				if(document.getElementById('SIDCBATTLEDIMENSION').value == "F" )
					values = {
						"------":"Infrastructure",
						"A-----":"Agriculture And Food Infrastructure",
						"AA----":"Agriculture And Food Infrastructure.Agricultural Laboratory",
						"AB----":"Agriculture And Food Infrastructure.Animal Feedlot",
						"AC----":"Agriculture And Food Infrastructure.Commercial Food Distribution Center",
						"AD----":"Agriculture And Food Infrastructure.Farm/ranch",
						"AE----":"Agriculture And Food Infrastructure.Food Production Center",
						"AF----":"Agriculture And Food Infrastructure.Food Retail",
						"AG----":"Agriculture And Food Infrastructure.Grain Storage",
						"B-----":"Banking Finance And Insurance Infrastructure",
						"BA----":"Banking Finance And Insurance Infrastructure.Atm",
						"BB----":"Banking Finance And Insurance Infrastructure.Bank",
						"BC----":"Banking Finance And Insurance Infrastructure.Bullion Storage",
						"BD----":"Banking Finance And Insurance Infrastructure.Federal Reserve Bank",
						"BE----":"Banking Finance And Insurance Infrastructure.Financial Exchange",
						"BF----":"Banking Finance And Insurance Infrastructure.Financial Services Other",
						"C-----":"Commercial Infrastructure",
						"CA----":"Commercial Infrastructure.Chemical Plant",
						"CB----":"Commercial Infrastructure.Firearms Manufacturer",
						"CC----":"Commercial Infrastructure.Firearms Retailer",
						"CD----":"Commercial Infrastructure.Hazardous Material Production",
						"CE----":"Commercial Infrastructure.Hazardous Material Storage",
						"CF----":"Commercial Infrastructure.Industrial Site",
						"CG----":"Commercial Infrastructure.Landfill",
						"CH----":"Commercial Infrastructure.Pharmaceutical Manufacturer",
						"CI----":"Commercial Infrastructure.Contaminated Hazardous Waste Site",
						"CJ----":"Commercial Infrastructure.Toxic Release Inventory",
						"D-----":"Educational Facilities Infrastructure",
						"DA----":"Educational Facilities Infrastructure.College University",
						"DB----":"Educational Facilities Infrastructure.School",
						"EA----":"Educational Facilities Infrastructure.Generation Station",
						"EB----":"Educational Facilities Infrastructure.Natural Gas Facility",
						"EE----":"Educational Facilities Infrastructure.Propane Facility",
						"F-----":"Government Site Infrastructure",
						"G-----":"Military Infrastructure",
						"GA----":"Military Infrastructure.Military Armory",
						"H-----":"Postal Service Infrastructure",
						"HA----":"Postal Service Infrastructure.Postal Distribution Center",
						"HB----":"Postal Service Infrastructure.Post Office",
						"I-----":"Public Venues Infrastructure",
						"IA----":"Public Venues Infrastructure.Enclosed Facility",
						"IB----":"Public Venues Infrastructure.Open Facility",
						"IC----":"Public Venues Infrastructure.Recreational Area",
						"ID----":"Public Venues Infrastructure.Religious Institution",
						"J-----":"Special Needs Infrastructure",
						"JA----":"Special Needs Infrastructure.Adult Day Care",
						"JB----":"Special Needs Infrastructure.Child Day Care",
						"JC----":"Special Needs Infrastructure.Elder Care",
						"K-----":"Telecommunications Infrastructure",
						"KB----":"Telecommunications Infrastructure.Telecommunications Tower",
						"LA----":"Telecommunications Infrastructure.Air Traffic Control Facility",
						"LD----":"Telecommunications Infrastructure.Bus Station",
						"LE----":"Telecommunications Infrastructure.Ferry Terminal",
						"LF----":"Telecommunications Infrastructure.Helicopter Landing Site",
						"LH----":"Telecommunications Infrastructure.Maintenance Facility",
						"LJ----":"Telecommunications Infrastructure.Rail Station",
						"LK----":"Telecommunications Infrastructure.Rest Stop",
						"LM----":"Telecommunications Infrastructure.Toll Facility",
						"LO----":"Telecommunications Infrastructure.Traffic Inspection Facility",
						"LP----":"Telecommunications Infrastructure.Tunnel",
						"MA----":"Telecommunications Infrastructure.Control Valve",
						"MB----":"Telecommunications Infrastructure.Dam",
						"MC----":"Telecommunications Infrastructure.Discharge Outfall",
						"MD----":"Telecommunications Infrastructure.Ground Water Well",
						"ME----":"Telecommunications Infrastructure.Pumping Station",
						"MF----":"Telecommunications Infrastructure.Reservoir",
						"MG----":"Telecommunications Infrastructure.Storage Tower",
						"MH----":"Telecommunications Infrastructure.Surface Water Intake",
						"MI----":"Telecommunications Infrastructure.Wastewater Treatment Facility"
					};
			}
			selection = document.getElementById('SIDCFUNCTIONID');
			value = selection.value.toUpperCase();

			selection.innerHTML = "";

			for (var key in values){
				selection.add(new Option(values[key], key));
			}

			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
		},
		battledimension: function(){
			values = {
				"P":"Space",
				"A":"Air",
				"G":"Ground",
				"S":"Sea Surface",
				"U":"Sea Subsurface",
				"F":"SOF"
			};
			if(document.getElementById('SIDCCODINGSCHEME').value == "O")
				values = {
					"V":"Violent Activities",
					"L":"Locations",
					"O":"Operations",
					"I":"Items",
					"P":"Individual",
					"G":"Nonmilitary Group Or Organization",
					"R":"Rape"
				};
			if(document.getElementById('SIDCCODINGSCHEME').value == "E")
				values = {
					"I":"Incident",
					"N":"Natural Events",
					"O":"Operations",
					"F":"Infrastructure"
				};

			selection = document.getElementById('SIDCBATTLEDIMENSION');
			value = selection.value.toUpperCase();
			selection.innerHTML = "";
			for (var key in values){
				selection.add(new Option(values[key], key))
			}
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
		},
		modifier12: function(){
			values = {"-":"-","A":"Team/Crew","B":"Squad","C":"Section","D":"Platoon/Detachment","E":"Company/Battery/Troop","F":"Battalion/Squadron","G":"Regiment/Group","H":"Brigade","I":"Division","J":"Corps/Mef","K":"Army","L":"Army Group/Front","M":"Region","N":"Command"};
			if(document.getElementById('SIDCSYMBOLMODIFIER11').value == "M" )values = {"O":"Wheeled/Limited","P":"Wheeled","Q":"Tracked","R":"Wheeled And Tracked","S":"Towed","T":"Rail","U":"Over The Snow","V":"Sled","W":"Pack Animals","Y":"Barge","Z":"Amphibious"};
			if(document.getElementById('SIDCSYMBOLMODIFIER11').value == "N" )values = {"S":"Towed Array (Short)","L":"Towed Array (Long)"};
			selection = document.getElementById('SIDCSYMBOLMODIFIER12');
			value = selection.value.toUpperCase();
			selection.innerHTML = "";
			for (var key in values){
				selection.add(new Option(values[key], key))
			}
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
		},
		affiliation: function(){
			if(standardVersion == 'NATO'){
				values = {	"P":"Pending",
							"U":"Unknown",
							"A":"Assumed Friend",
							"F" :"Friend",
							"N":"Neutral",
							"S":"Suspect",
							"H":"Hostile",
							"J":"Joker",
							"K":"Faker",
							"O":"None Specified"};
			}else{
				values = {	"P":"Pending",
							"U":"Unknown",
							"A":"Assumed Friend",
							"F" :"Friend",
							"N":"Neutral",
							"S":"Suspect",
							"H":"Hostile",
							"G":"Exercise Pending",
							"W":"Exercise Unknown",
							"D":"Exercise Friend",
							"L":"Exercise Neutral",
							"M":"Exercise Assumed Friend",
							"J":"Joker",
							"K":"Faker",
							"O":"None Specified"};
			}
			selection = document.getElementById('SIDCAFFILIATION');
			value = selection.value.toUpperCase();
			selection.innerHTML = "";
			for (var key in values){
				selection.add(new Option(values[key], key))
			}
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
		},
		status: function(){
			if(standardVersion == 'NATO'){
				values = {"-":"-","A":"Anticipated/Planned","P":"Present"};
			}else{
				values = {"-":"-","A":"Anticipated/Planned","P":"Present","C":"Present/Fully Capable","D":"Present/Damaged","X":"Present/Destroyed","F":"Present/Full To Capacity"};
			}
			selection = document.getElementById('SIDCSTATUS');
			value = selection.value.toUpperCase();
			selection.innerHTML = "";
			for (var key in values){
				selection.add(new Option(values[key], key))
			}
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}	
		},
		sidccodingscheme: function(){
			if(standardVersion == 'NATO'){
				values = {"S":"Warfighting"};
			}else{
				values = {"S":"Warfighting","I":"Intelligence","O":"Stability Operations","E":"Emergency Management Symbols"};
			}
			selection = document.getElementById('SIDCCODINGSCHEME');
			value = selection.value.toUpperCase();
			selection.innerHTML = "";
			for (var key in values){
				selection.add(new Option(values[key], key))
			}
			for (var i in selection){
				if(!isNaN(i)){
					if(selection.options[i].value == value){
						selection.selectedIndex = i;
						break;
					}
				}
			}
		}
	};
		
	var numberSIDC = {
		icons: function(){
			icons = {'000000':'-'};
			m1 = {'00':'-'};
			m2 = {'00':'-'};

			//Air
			if(document.getElementById('2525DSymbolset').value == "01" ){
				icons = {'110000':'Military','110100':'Military.Fixed Wing','110101':'Military.Fixed Wing.Medical Evacuation (MEDEVAC)','110102':'Military.Fixed Wing.Attack/Strike','110103':'Military.Fixed Wing.Bomber','110104':'Military.Fixed Wing.Fighter','110105':'Military.Fixed Wing.Fighter/Bomber','110106':'Military.Fixed Wing.{reserved for future use}','110107':'Military.Fixed Wing.Cargo','110108':'Military.Fixed Wing.Electronic Combat (EC)/Jammer','110109':'Military.Fixed Wing.Tanker','110110':'Military.Fixed Wing.Patrol','110111':'Military.Fixed Wing.Reconnaissance','110112':'Military.Fixed Wing.Trainer','110113':'Military.Fixed Wing.Utility','110114':'Military.Fixed Wing.Vertical or Short Take-off and Landing (VSTOL)','110115':'Military.Fixed Wing.Airborne Command Post (ACP)','110116':'Military.Fixed Wing.Airborne Early Warning (AEW)','110117':'Military.Fixed Wing.Antisurface Warfare','110118':'Military.Fixed Wing.Antisubmarine Warfare','110119':'Military.Fixed Wing.Communications','110120':'Military.Fixed Wing.Combat Search and Rescue (CSAR)','110121':'Military.Fixed Wing.Electronic Support (ES)','110122':'Military.Fixed Wing.Government','110123':'Military.Fixed Wing.Mine Countermeasures (MCM)','110124':'Military.Fixed Wing.Personnel Recovery','110125':'Military.Fixed Wing.Search and Rescue','110126':'Military.Fixed Wing.Special Operations Forces','110127':'Military.Fixed Wing.Ultra Light','110128':'Military.Fixed Wing.Photographic Reconnaissance','110129':'Military.Fixed Wing.Very Important Person (VIP)','110130':'Military.Fixed Wing.Suppression of Enemy Air Defense','110131':'Military.Fixed Wing.Passenger','110132':'Military.Fixed Wing.Escort','110133':'Military.Fixed Wing.Electronic Attack (EA)','110200':'Military.Rotary Wing','110300':'Military.Unmanned Aircraft (UA) / Unmanned Aerial Vehicle (UAV) / Unmanned Aircraft System (UAS) / Remotely Piloted Vehicle (RPV)','110400':'Military.Vertical-Takeoff UAV (VT-UAV)','110500':'Military.Lighter Than Air','110600':'Military.Airship','110700':'Military.Tethered Lighter than Air','120000':'Civilian','120100':'Civilian.Fixed Wing','120200':'Civilian.Rotary Wing','120300':'Civilian.Unmanned Aircraft (UA) / Unmanned Aerial Vehicle (UAV) / Unmanned Aircraft System (UAS) / Remotely Piloted Vehicle (RPV)','120400':'Civilian.Lighter Than Air','120500':'Civilian.Airship','120600':'Civilian.Tethered Lighter than Air','130000':'Weapon','130100':'Weapon.Bomb','130200':'Weapon.Decoy','140000':'Manual Track'};
				m1 = {'00':'Not Applicable','01':'Attack/Strike','02':'Bomber','03':'Cargo','04':'Fighter','05':'Interceptor','06':'Tanker','07':'Utility','08':'Vertical or Short Take-off and Landing (VSTOL)/ Vertical Take-off and Landing (VTOL)','09':'Passenger','10':'Ultra Light','11':'Airborne Command Post (ACP)','12':'Airborne Early Warning (AEW)','13':'Government','14':'Medical Evacuation (MEDEVAC)','15':'Escort','16':'Electronic Combat (EC)/Jammer','17':'Patrol','18':'Reconnaissance','19':'Trainer','20':'Photographic (Reconnaissance)','21':'Personnel Recovery ','22':'Antisubmarine Warfare','23':'Communications','24':'Electronic Support (ES)','25':'Mine Countermeasures (MCM)','26':'Search and Rescue','27':'Special Operations Forces','28':'Surface Warfare','29':'Very Important Person (VIP) Transport','30':'Combat Search and Rescue (CSAR)','31':'Suppression of Enemy Air Defenses','32':'Antisurface Warfare','33':'Fighter/Bomber','34':'Intensive Care','35':'Electronic Attack (EA)','36':'Multimission','37':'Hijacking','38':'ASW Helo- LAMPS','39':'ASW Helo - SH-60R'};
				m2 = {'00':'Not Applicable','01':'Heavy','02':'Medium','03':'Light','04':'Boom-Only','05':'Drogue-Only','06':'Boom and Drogue','07':'Close Range','08':'Short Range','09':'Medium Range','10':'Long Range','11':'Downlinked'};
			}
			//Air Missile
			if(document.getElementById('2525DSymbolset').value == "02" ){
				icons = {'110000':'Missile'};
				m1 = {'00':'Unspecified','01':'Air','02':'Surface','03':'Subsurface','04':'Space','05':'Anti-Ballistic','06':'Ballistic','07':'Cruise','08':'Interceptor'};
				m2 = {'00':'Unspecified','01':'Air','02':'Surface','03':'Subsurface','04':'Space','05':'Launched','06':'Missile','07':'Patriot','08':'Standard Missile-2 (SM-2)','09':'Standard Missile-6 (SM-6)','10':'Evolved Sea Sparrow Missile (ESSM)','11':'Rolling Airframe Missile (RAM)','12':'Short Range','13':'Medium Range','14':'Intermediate Range','15':'Long Range','16':'Intercontinental'};
			}
			//Space
			if(document.getElementById('2525DSymbolset').value == "05" ){
				icons = {'110000':'Military','110100':'Military.Space Vehicle','110200':'Military.Re-Entry Vehicle','110300':'Military.Planet Lander','110400':'Military.Orbiter Shuttle','110500':'Military.Capsule','110600':'Military.Satellite, General','110700':'Military.Satellite','110800':'Military.Antisatellite Weapon','110900':'Military.Astronomical Satellite','111000':'Military.Biosatellite','111100':'Military.Communications Satellite','111200':'Military.Earth Observation Satellite','111300':'Military.Miniaturized Satellite','111400':'Military.Navigational Satellite','111500':'Military.Reconnaissance Satellite','111600':'Military.Space Station','111700':'Military.Tethered Satellite','111800':'Military.Weather Satellite','111900':'Military.Space Launched Vehicle (SLV)','120000':'Civilian','120100':'Civilian.Orbiter Shuttle','120200':'Civilian.Capsule','120300':'Civilian.Satellite','120400':'Civilian.Astronomical Satellite','120500':'Civilian.Biosatellite','120600':'Civilian.Communications Satellite','120700':'Civilian.Earth Observation Satellite','120800':'Civilian.Miniaturized Satellite','120900':'Civilian.Navigational Satellite','121000':'Civilian.Space Station','121100':'Civilian.Tethered Satellite','121200':'Civilian.Weather Satellite','130000':'Manual Track'};
				m1 = {'00':'Unspecified','01':'Low Earth Orbit (LEO)','02':'Medium Earth Orbit  (MEO)','03':'High Earth Orbit  (HEO)','04':'Geosynchronous Orbit (GSO)','05':'Geostationary Orbit (GO)','06':'Molniya Orbit (MO)'};
				m2 = {'00':'Unspecified','01':'Optical','02':'Infrared','03':'Radar','04':'Signals Intelligence (SIGINT)'};
			}
			//Space Missile
			if(document.getElementById('2525DSymbolset').value == "06" ){
				icons = {'110000':'Missile'};
				m1 = {'00':'Unspecified','01':'Ballistic','02':'Space','03':'Interceptor','04-98':'Reserved for Future Use'};
				m2 = {'00':'Unspecified','01':'Short Range','02':'Medium Range','03':'Intermediate Range','04':'Long Range','05':'Intercontinental ','06':'Arrow','07':'Ground-Based Interceptor (GBI)','08':'Patriot','09':'Standard Missile Terminal Phase (SM-T)','10':'Standard Missile - 3 (SM-3)','11':'Terminal High Altitude Area Defense (THAAD)','12':'Space'};
			}
			//Land Unit
			if(document.getElementById('2525DSymbolset').value == "10" ){
				icons = {'110000':'Command and Control','110100':'Command and Control.Broadcast Transmitter Antennae','110200':'Command and Control.Civil Affairs ','110300':'Command and Control.Civil-Military Cooperation ','110400':'Command and Control.Information Operations','110500':'Command and Control.Liaison','110600':'Command and Control.Military Information Support Operations (MISO)','110601':'Command and Control.Military Information Support Operations (MISO).Broadcast Transmitter Antennae','110700':'Command and Control.Radio','110800':'Command and Control.Radio Relay','110900':'Command and Control.Radio Teletype Center','111000':'Command and Control.Signal','111001':'Command and Control.Signal.Radio','111002':'Command and Control.Signal.Radio Relay','111003':'Command and Control.Signal.Teletype','111004':'Command and Control.Signal.Tactical Satellite  ','111005':'Command and Control.Signal.Video Imagery (Combat Camera)','111095':'Command and Control.Signal.Headquarters Element','111097':'Command and Control.Signal.Corps Support ','111098':'Command and Control.Signal.Theatre/Echelons Above Corps Support','111100':'Command and Control.Tactical Satellite','111200':'Command and Control.Video Imagery (Combat Camera)','120000':'Movement and Maneuver','120100':'Movement and Maneuver.Air Assault with Organic Lift','120200':'Movement and Maneuver.Air Traffic Services/Airfield Operations','120300':'Movement and Maneuver.Amphibious','120400':'Movement and Maneuver.Antitank/Antiarmor','120401':'Movement and Maneuver.Antitank/Antiarmor.Armored','120402':'Movement and Maneuver.Antitank/Antiarmor.Motorized','120500':'Movement and Maneuver.Armor/Armored/Mechanized/Self-Propelled/ Tracked','120501':'Movement and Maneuver.Armor/Armored/Mechanized/Self-Propelled/ Tracked.Reconnaissance/Cavalry/Scout','120502':'Movement and Maneuver.Armor/Armored/Mechanized/Self-Propelled/ Tracked.Amphibious','120595':'Movement and Maneuver.Armor/Armored/Mechanized/Self-Propelled/ Tracked.Headquarters Element','120600':'Movement and Maneuver.Army Aviation/Aviation Rotary Wing','120601':'Movement and Maneuver.Army Aviation/Aviation Rotary Wing.Reconnaissance','120695':'Movement and Maneuver.Army Aviation/Aviation Rotary Wing.Headquarters Element','120697':'Movement and Maneuver.Army Aviation/Aviation Rotary Wing.Corps Support','120698':'Movement and Maneuver.Army Aviation/Aviation Rotary Wing.Theatre/Echelons Above Corps Support','120700':'Movement and Maneuver.Aviation Composite','120795':'Movement and Maneuver.Aviation Composite.Headquarters Element','120800':'Movement and Maneuver.Aviation Fixed Wing','120801':'Movement and Maneuver.Aviation Fixed Wing.Reconnaissance','120895':'Movement and Maneuver.Aviation Fixed Wing.Headquarters Element','120900':'Movement and Maneuver.Combat','121000':'Movement and Maneuver.Combined Arms','121095':'Movement and Maneuver.Combined Arms.Headquarters Element','121100':'Movement and Maneuver.Infantry','121101':'Movement and Maneuver.Infantry.Amphibious','121102':'Movement and Maneuver.Infantry.Armored/Mechanized/Tracked','121103':'Movement and Maneuver.Infantry.Main Gun System ','121104':'Movement and Maneuver.Infantry.Motorized ','121105':'Movement and Maneuver.Infantry.Infantry Fighting Vehicle','121195':'Movement and Maneuver.Infantry.Headquarters Element ','121200':'Movement and Maneuver.Observer','121300':'Movement and Maneuver.Reconnaissance/Cavalry/Scout','121301':'Movement and Maneuver.Reconnaissance/Cavalry/Scout.Reconnaissance and Surveillance','121302':'Movement and Maneuver.Reconnaissance/Cavalry/Scout.Marine','121303':'Movement and Maneuver.Reconnaissance/Cavalry/Scout.Motorized','121395':'Movement and Maneuver.Reconnaissance/Cavalry/Scout.Headquarters Element','121400':'Movement and Maneuver.Sea Air Land (SEAL)','121500':'Movement and Maneuver.Sniper','121600':'Movement and Maneuver.Surveillance','121700':'Movement and Maneuver.Special Forces','121795':'Movement and Maneuver.Special Forces.Headquarters Element','121800':'Movement and Maneuver.Special Operations Forces (SOF)','121801':'Movement and Maneuver.Special Operations Forces (SOF).Fixed Wing MISO','121802':'Movement and Maneuver.Special Operations Forces (SOF).Ground','121803':'Movement and Maneuver.Special Operations Forces (SOF).Special Boat','121804':'Movement and Maneuver.Special Operations Forces (SOF).Special SSNR','121805':'Movement and Maneuver.Special Operations Forces (SOF).Underwater Demolition Team','121900':'Movement and Maneuver.Unmanned Aerial Systems','130000':'Fires','130100':'Fires.Air Defense','130101':'Fires.Air Defense.Main Gun System','130102':'Fires.Air Defense.Missile','130195':'Fires.Air Defense.Headquarters Element','130200':'Fires.Air/Land Naval Gunfire Liaison','130300':'Fires.Field Artillery','130301':'Fires.Field Artillery.Self-propelled','130302':'Fires.Field Artillery.Target Acquition','130395':'Fires.Field Artillery.Headquarters Element','130400':'Fires.Field Artillery Observer','130500':'Fires.Joint Fire Support','130600':'Fires.Meteorological','130700':'Fires.Missile','130800':'Fires.Mortar','130801':'Fires.Mortar.Armored/Mechanized/Tracked','130802':'Fires.Mortar.Self-Propelled Wheeled','130803':'Fires.Mortar.Towed','130900':'Fires.Survey','140000':'Protection','140100':'Protection.Chemical Biological Radiological Nuclear Defense','140101':'Protection.Chemical Biological Radiological Nuclear Defense.Mechanized','140102':'Protection.Chemical Biological Radiological Nuclear Defense.Motorized','140103':'Protection.Chemical Biological Radiological Nuclear Defense.Reconnaissance','140104':'Protection.Chemical Biological Radiological Nuclear Defense.Reconnaissance Armored','140105':'Protection.Chemical Biological Radiological Nuclear Defense.Reconnaissance Equiped','140195':'Protection.Chemical Biological Radiological Nuclear Defense.Headquarters Element','140200':'Protection.Combat Support (Maneuver Enhancement)','140295':'Protection.Combat Support (Maneuver Enhancement).Headquarters Element','140300':'Protection.Criminal Investigation Division','140400':'Protection.Diving','140500':'Protection.Dog','140600':'Protection.Drilling','140700':'Protection.Engineer','140701':'Protection.Engineer.Mechanized','140702':'Protection.Engineer.Motorized','140703':'Protection.Engineer.Reconnaissance','140795':'Protection.Engineer.Headquarters Element','140800':'Protection.Explosive Ordnance Disposal (EOD)','140900':'Protection.Field Camp Construction','141000':'Protection.Fire Fighting/Fire Protection','141100':'Protection.Geospatial Support/Geospatial Information Support','141200':'Protection.Military Police','141295':'Protection.Military Police.Headquarters Element','141300':'Protection.Mine','141400':'Protection.Mine Clearing','141500':'Protection.Mine Launching','141600':'Protection.Mine Laying','141700':'Protection.Security','141701':'Protection.Security.Mechanized','141702':'Protection.Security.Motorized','141800':'Protection.Search and Rescue','141900':'Protection.Security Police (Air)','142000':'Protection.Shore Patrol','142100':'Protection.Topographic','150000':'Intelligence','150100':'Intelligence.Analysis','150200':'Intelligence.Counterintelligence','150300':'Intelligence.Direction Finding','150400':'Intelligence.Electronic Ranging','150500':'Intelligence.Electronic Warfare','150501':'Intelligence.Electronic Warfare.Analysis','150502':'Intelligence.Electronic Warfare.Direction Finding','150503':'Intelligence.Electronic Warfare.Intercept','150504':'Intelligence.Electronic Warfare.Jamming','150505':'Intelligence.Electronic Warfare.Search','150600':'Intelligence.Intercept (Search and Recording)','150700':'Intelligence.Interrogation','150800':'Intelligence.Jamming','150900':'Intelligence.Joint Intelligence Center','151000':'Intelligence.Military Intelligence','151095':'Intelligence.Military Intelligence.Headquarters Element','151100':'Intelligence.Search','151200':'Intelligence.Sensor','160000':'Sustainment','160095':'Sustainment.Headquarters Element ','160097':'Sustainment.Corps Support ','160098':'Sustainment.Theatre/Echelons Above Corps Support','160100':'Sustainment.Administrative','160197':'Sustainment.Administrative.Corps Support','160198':'Sustainment.Administrative.Theatre/Echelons Above Corps Support','160200':'Sustainment.All Classes of Supply','160300':'Sustainment.Airport of Debarkation/Airport of Embarkation ','160400':'Sustainment.Ammunition','160500':'Sustainment.Band','160600':'Sustainment.Combat Service Support','160700':'Sustainment.Finance','160797':'Sustainment.Finance.Corps Support','160798':'Sustainment.Finance.Theatre/Echelons Above Corps Support','160800':'Sustainment.Judge Advocate General','160900':'Sustainment.Labor','161000':'Sustainment.Laundry/Bath','161100':'Sustainment.Maintenance','161195':'Sustainment.Maintenance.Headquarters Element ','161197':'Sustainment.Maintenance.Corps Support ','161198':'Sustainment.Maintenance.Theatre/Echelons Above Corps Support','161200':'Sustainment.Material','161300':'Sustainment.Medical','161395':'Sustainment.Medical.Headquarters Element ','161397':'Sustainment.Medical.Corps Support ','161398':'Sustainment.Medical.Theatre/Echelons Above Corps Support','161400':'Sustainment.Medical Treatment Facility','161500':'Sustainment.Morale, Welfare and Recreation','161600':'Sustainment.Mortuary Affairs/Graves Registration','161700':'Sustainment.Multiple Classes of Supply','161800':'Sustainment.NATO Supply Class I','161900':'Sustainment.NATO Supply Class II','162000':'Sustainment.NATO Supply Class III','162100':'Sustainment.NATO Supply Class IV','162200':'Sustainment.NATO Supply Class V','162300':'Sustainment.Ordnance','162395':'Sustainment.Ordnance.Headquarters Element ','162397':'Sustainment.Ordnance.Corps Support ','162398':'Sustainment.Ordnance.Theatre/Echelons Above Corps Support','162400':'Sustainment.Personnel Services','162495':'Sustainment.Personnel Services.Headquarters Element','162500':'Sustainment.Petroleum, Oil and Lubricants','162600':'Sustainment.Pipeline','162700':'Sustainment.Postal','162800':'Sustainment.Public Affairs/Public Information','162900':'Sustainment.Quartermaster','162995':'Sustainment.Quartermaster.Headquarters Element ','162997':'Sustainment.Quartermaster.Corps Support ','162998':'Sustainment.Quartermaster.Theatre/Echelons Above Corps Support','163000':'Sustainment.Railhead','163100':'Sustainment.Religious Support','163200':'Sustainment.Replacement Holding Unit','163300':'Sustainment.Sea Port of Debarkation/Sea Port of Embarkation ','163400':'Sustainment.Supply','163500':'Sustainment.Joint Information Bureau','163597':'Sustainment.Joint Information Bureau.Corps Support ','163598':'Sustainment.Joint Information Bureau.Theatre/Echelons Above Corps Support','163600':'Sustainment.Transportation','163695':'Sustainment.Transportation.Headquarters Element ','163697':'Sustainment.Transportation.Corps Support ','163698':'Sustainment.Transportation.Theatre/Echelons Above Corps Support','163700':'Sustainment.US Supply Class I','163800':'Sustainment.US Supply Class II','163900':'Sustainment.US Supply Class III','164000':'Sustainment.US Supply Class IV','164100':'Sustainment.US Supply Class V','164200':'Sustainment.US Supply Class VI','164300':'Sustainment.US Supply Class VII','164400':'Sustainment.US Supply Class VIII','164500':'Sustainment.US Supply Class IX','164600':'Sustainment.US Supply Class X','164700':'Sustainment.Water','164800':'Sustainment.Water Purification','164900':'Sustainment.Broadcast','170000':'Naval ','170100':'Naval .Naval','180000':'Named Headquarters','180100':'Named Headquarters.Allied Command Europe Rapid Reaction Corps (ARRC)','180200':'Named Headquarters.Allied Command Operations','180300':'Named Headquarters.International Security Assistance Force (ISAF)','180400':'Named Headquarters.Multinational (MN)','190000':'Emergency Operation','200000':'Law Enforcement','200100':'Law Enforcement.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)','200200':'Law Enforcement.Border Patrol','200300':'Law Enforcement.Customs Service','200400':'Law Enforcement.Drug Enforcement Administration (DEA)','200500':'Law Enforcement.Department of Justice (DOJ)','200600':'Law Enforcement.Federal Bureau of Investigation (FBI)','200700':'Law Enforcement.Police','200800':'Law Enforcement.Prison','200900':'Law Enforcement.United States Secret Service (USSS)','201000':'Law Enforcement.Transportation Security Administration (TSA)','201100':'Law Enforcement.Coast Guard','201200':'Law Enforcement.US Marshals Service','201300':'Law Enforcement.Internal Security Force'};
				m1 = {'00':'Unspecified','01':'Air Mobile/Air Assault (US only)','02':'Area','03':'Attack','04':'Biological','05':'Border','06':'Bridging','07':'Chemical','08':'Close Protection','09':'Combat','10':'Command and Control','11':'Communications Contingency Package','12':'Construction','13':'Cross Cultural Communication','14':'Crowd and Riot Control','15':'Decontamination','16':'Detention','17':'Direct Communications','18':'Diving','19':'Division','20':'Dog','21':'Drilling','22':'Electro-Optical','23':'Enhanced','24':'Explosive Ordnance Disposal (EOD)','25':'Fire Direction Center','26':'Force','27':'Forward','28':'Ground Station Module','29':'Landing Support','30':'Large Extension Node','31':'Maintenance','32':'Meteorological','33':'Mine Countermeasure','34':'Missile','35':'Mobile Advisor and Support','36':'Mobile Subscriber Equipment','37':'Mobility Support','38':'Movement Control Center','39':'Multinational','40':'Multinational Specialized Unit','41':'Multiple Rocket Launcher','42':'NATO Medical Role 1 ','43':'NATO Medical Role 2','44':'NATO Medical Role 3','45':'NATO Medical Role 4','46':'Naval','47':'Node Center','48':'Nuclear','49':'Operations','50':'Radar','51':'Radio Frequency Identification (RFID) Interrogator / Sensor','52':'Radiological','53':'Search and Rescue','54':'Security','55':'Sensor','56':'Sensor Control Module (SCM)','57':'Signals Intelligence','58':'Single Shelter Switch','59':'Single Rocket Launcher','60':'Smoke','61':'Sniper','62':'Sound Ranging','63':'Special Operations Forces (SOF)','64':'Special Weapons and Tactics','65':'Survey','66':'Tactical Exploitation','67':'Target Acquisition','68':'Topographic','69':'Utility','70':'Video Imagery (Combat Camera)','71':'Accident','72':'Other','73':'Civilian','74':'Antisubmarine Warfare','75':'Medevac','76':'Ranger','77':'Support','78':'Aviation'};
				m2 = {'00':'Unspecified','01':'Airborne','02':'Arctic','03':'Battle Damage Repair','04':'Bicycle Equipped','05':'Casualty Staging','06':'Clearing','07':'Close Range','08':'Control','09':'Decontamination','10':'Demolition','11':'Dental','12':'Digital','13':'Enhanced Position Location Reporting System (EPLRS)','14':'Equipment','15':'Heavy','16':'High Altitude','17':'Intermodal','18':'Intensive Care','19':'Light','20':'Laboratory','21':'Launcher','22':'Long Range','23':'Low Altitude','24':'Medium','25':'Medium Altitude','26':'Medium Range','27':'Mountain','28':'High to Medium Altitude','29':'Multi–Channel','30':'Optical (Flash)','31':'Pack Animal','32':'Patient Evacuation Coordination','33':'Preventive Maintenance','34':'Psychological','35':'Radio Relay Line of Sight','36':'Railroad','37':'Recovery (Unmanned Systems)','38':'Recovery (Maintenance)','39':'Rescue Coordination Center','40':'Riverine','41':'Single Channel','42':'Ski','43':'Short Range','44':'Strategic','45':'Support','46':'Tactical','47':'Towed','48':'Troop','49':'Vertical or Short Take–Off and Landing (VTOL/VSTOL)','50':'Veterinary','51':'Wheeled','52':'High to Low Altitude','53':'Medium to Low Altitude','54':'Attack','55':'Refuel','56':'Utility','57':'Combat Search and Rescue'};
			}
			//Land civilian unit
			if(document.getElementById('2525DSymbolset').value == "11" ){
				icons = {'110000':'Civilian','110100':'Civilian.Environmental Protection','110200':'Civilian.Governmental Organization','110300':'Civilian.Individual','110400':'Civilian.Organization or Group','110500':'Civilian.Killing Victim','110600':'Civilian.Killing Victims','110700':'Civilian.Victim of an Attempted Crime','110800':'Civilian.Spy','110900':'Civilian.Composite Loss','111000':'Civilian.Emergency Medical Operation'};
				m1 = {'00':'Unspecified','01':'Assassination','02':'Execution (Wrongful Killing)','03':'Murder Victims','04':'Hijacking','05':'Kidnapping','06':'Piracy','07':'Rape','08':'Civilian','09':'Displaced Person(s), Refugee(s) and Evacuee(s)','10':'Foreign Fighter(s)','11':'Gang Member or Gang','12':'Government Organization','13':'Leader or Leadership','14':'Nongovernmental Organization Member or Nongovernmental Organization','15':'Coerced/Impressed Recruit','16':'Willing Recruit','17':'Religious or Religious Organization','18':'Targeted Individual or Organization','19':'Terrorist or Terrorist Organization','20':'Speaker','21':'Accident','22':'Combat','23':'Other','24':'Loot'};
				m2 = {'00':'Unspecified','01':'Leader or Leadership'}
			}
			//Land Equipment
			if(document.getElementById('2525DSymbolset').value == "15" ){
				icons = {'110000':'Weapons/Weapons System','110100':'Weapons/Weapons System.Rifle','110101':'Weapons/Weapons System.Rifle.Single Shot Rifle','110102':'Weapons/Weapons System.Rifle.Semiautomatic Rifle','110103':'Weapons/Weapons System.Rifle.Automatic Rifle','110200':'Weapons/Weapons System.Machine Gun','110201':'Weapons/Weapons System.Machine Gun.Light ','110202':'Weapons/Weapons System.Machine Gun.Medium ','110203':'Weapons/Weapons System.Machine Gun.Heavy','110300':'Weapons/Weapons System.Grenade Launcher','110301':'Weapons/Weapons System.Grenade Launcher.Light','110302':'Weapons/Weapons System.Grenade Launcher.Medium','110303':'Weapons/Weapons System.Grenade Launcher.Heavy','110400':'Weapons/Weapons System.Flame Thrower','110500':'Weapons/Weapons System.Air Defense Gun','110501':'Weapons/Weapons System.Air Defense Gun.Light','110502':'Weapons/Weapons System.Air Defense Gun.Medium','110503':'Weapons/Weapons System.Air Defense Gun.Heavy','110600':'Weapons/Weapons System.Antitank Gun','110601':'Weapons/Weapons System.Antitank Gun.Light','110602':'Weapons/Weapons System.Antitank Gun.Medium','110603':'Weapons/Weapons System.Antitank Gun.Heavy','110700':'Weapons/Weapons System.Direct Fire Gun','110701':'Weapons/Weapons System.Direct Fire Gun.Light','110702':'Weapons/Weapons System.Direct Fire Gun.Medium','110703':'Weapons/Weapons System.Direct Fire Gun.Heavy','110800':'Weapons/Weapons System.Recoilless Gun','110801':'Weapons/Weapons System.Recoilless Gun.Light','110802':'Weapons/Weapons System.Recoilless Gun.Medium','110803':'Weapons/Weapons System.Recoilless Gun.Heavy','110900':'Weapons/Weapons System.Howitzer','110901':'Weapons/Weapons System.Howitzer.Light','110902':'Weapons/Weapons System.Howitzer.Medium','110903':'Weapons/Weapons System.Howitzer.Heavy','111000':'Weapons/Weapons System.Missile Launcher','111001':'Weapons/Weapons System.Missile Launcher.Light','111002':'Weapons/Weapons System.Missile Launcher.Medium','111003':'Weapons/Weapons System.Missile Launcher.Heavy','111100':'Weapons/Weapons System.Air Defense Missile Launcher','111101':'Weapons/Weapons System.Air Defense Missile Launcher.Light','111102':'Weapons/Weapons System.Air Defense Missile Launcher.Light, Light Transporter-Launcher and Radar (TLAR)','111103':'Weapons/Weapons System.Air Defense Missile Launcher.Light, Light Tactical Landing Approach Radar (TELAR)','111104':'Weapons/Weapons System.Air Defense Missile Launcher.Medium','111105':'Weapons/Weapons System.Air Defense Missile Launcher.Medium, TLAR','111106':'Weapons/Weapons System.Air Defense Missile Launcher.Medium, TELAR','111107':'Weapons/Weapons System.Air Defense Missile Launcher.Heavy','111108':'Weapons/Weapons System.Air Defense Missile Launcher.Heavy, TLAR','111109':'Weapons/Weapons System.Air Defense Missile Launcher.Heavy, TELAR','111200':'Weapons/Weapons System.Antitank Missile Launcher','111201':'Weapons/Weapons System.Antitank Missile Launcher.Light','111202':'Weapons/Weapons System.Antitank Missile Launcher.Medium','111203':'Weapons/Weapons System.Antitank Missile Launcher.Heavy','111300':'Weapons/Weapons System.Surface-to-Surface Missile Launcher','111301':'Weapons/Weapons System.Surface-to-Surface Missile Launcher.Light','111302':'Weapons/Weapons System.Surface-to-Surface Missile Launcher.Medium','111303':'Weapons/Weapons System.Surface-to-Surface Missile Launcher.Heavy','111400':'Weapons/Weapons System.Mortar','111401':'Weapons/Weapons System.Mortar.Light','111402':'Weapons/Weapons System.Mortar.Medium','111403':'Weapons/Weapons System.Mortar.Heavy','111500':'Weapons/Weapons System.Single Rocket Launcher','111501':'Weapons/Weapons System.Single Rocket Launcher.Light','111502':'Weapons/Weapons System.Single Rocket Launcher.Medium','111503':'Weapons/Weapons System.Single Rocket Launcher.Heavy','111600':'Weapons/Weapons System.Multiple Rocket Launcher','111601':'Weapons/Weapons System.Multiple Rocket Launcher.Light','111602':'Weapons/Weapons System.Multiple Rocket Launcher.Medium','111603':'Weapons/Weapons System.Multiple Rocket Launcher.Heavy','111701':'Weapons/Weapons System.Antitank Rocket Launcher','111701':'Weapons/Weapons System.Antitank Rocket Launcher.Light','111702':'Weapons/Weapons System.Antitank Rocket Launcher.Medium','111703':'Weapons/Weapons System.Antitank Rocket Launcher.Heavy','111800':'Weapons/Weapons System.Nonlethal Weapon','111900':'Weapons/Weapons System.Taser','112000':'Weapons/Weapons System.Water Cannon','120000':'Vehicle','120100':'Vehicle.Armored','120101':'Vehicle.Armored.Armored Fighting Vehicle','120102':'Vehicle.Armored.Armored Fighting Vehicle Command and Control','120103':'Vehicle.Armored.Armored Personnel Carrier','120104':'Vehicle.Armored.Armored Personnel Carrier Ambulance','120105':'Vehicle.Armored.Armored Protected Vehicle','120106':'Vehicle.Armored.Armored Protected Vehicle Recovery','120107':'Vehicle.Armored.Armored Protected Vehicle Medical Evacuation','120108':'Vehicle.Armored.Armored Personnel Carrier, Recovery','120109':'Vehicle.Armored.Combat Service Support Vehicle','120110':'Vehicle.Armored.Light Wheeled Armored Vehicle','120200':'Vehicle.Tank','120201':'Vehicle.Tank.Light','120202':'Vehicle.Tank.Medium','120203':'Vehicle.Tank.Heavy','120300':'Vehicle.Tank Recovery Vehicle','120301':'Vehicle.Tank Recovery Vehicle.Light','120302':'Vehicle.Tank Recovery Vehicle.Medium','120303':'Vehicle.Tank Recovery Vehicle.Heavy','130000':'Engineer Vehicles and Equipment','130100':'Engineer Vehicles and Equipment.Bridge','130200':'Engineer Vehicles and Equipment.Bridge Mounted on Utility Vehicle','130300':'Engineer Vehicles and Equipment.Fixed Bridge','130400':'Engineer Vehicles and Equipment.Floating Bridge','130500':'Engineer Vehicles and Equipment.Folding Girder Bridge','130600':'Engineer Vehicles and Equipment.Hollow Deck Bridge','130700':'Engineer Vehicles and Equipment.Drill','130701':'Engineer Vehicles and Equipment.Drill.Drill Mounted on Utility Vehicle','130800':'Engineer Vehicles and Equipment.Earthmover','130801':'Engineer Vehicles and Equipment.Earthmover.Multifunctional Earthmover/Digger','130900':'Engineer Vehicles and Equipment.Mine Clearing Equipment','130901':'Engineer Vehicles and Equipment.Mine Clearing Equipment.Trailer Mounted','130902':'Engineer Vehicles and Equipment.Mine Clearing Equipment.Mine Clearing Equipment on Tank Chassis','131000':'Engineer Vehicles and Equipment.Mine Laying Equipment','131001':'Engineer Vehicles and Equipment.Mine Laying Equipment.Mine Laying Equipment on Utility Vehicle','131002':'Engineer Vehicles and Equipment.Mine Laying Equipment.Armored Carrier with Volcano','131003':'Engineer Vehicles and Equipment.Mine Laying Equipment.Truck Mounted with Volcano','131100':'Engineer Vehicles and Equipment.Dozer','131101':'Engineer Vehicles and Equipment.Dozer.Dozer , Armored','131200':'Engineer Vehicles and Equipment.Armored Assault','131300':'Engineer Vehicles and Equipment.Armored Engineer Recon Vehicle (AERV)','131400':'Engineer Vehicles and Equipment.Backhoe','131500':'Engineer Vehicles and Equipment.Construction Vehicle','131600':'Engineer Vehicles and Equipment.Ferry Transporter','140000':'Utility Vehicles','140100':'Utility Vehicles.Utility Vehicle','140200':'Utility Vehicles.Medical','140300':'Utility Vehicles.Medical Evacuation','140400':'Utility Vehicles.Mobile Emergency Physician','140500':'Utility Vehicles.Bus','140600':'Utility Vehicles.Semi-Trailer and Truck','140601':'Utility Vehicles.Semi-Trailer and Truck.Light','140602':'Utility Vehicles.Semi-Trailer and Truck.Medium','140603':'Utility Vehicles.Semi-Trailer and Truck.Heavy','140700':'Utility Vehicles.Limited Cross Country Truck','140800':'Utility Vehicles.Cross Country Truck','140900':'Utility Vehicles.Petroleum, Oil and Lubricant','141000':'Utility Vehicles.Water','141100':'Utility Vehicles.Amphibious Utility Wheeled Vehicle','141200':'Utility Vehicles.Tow Truck','141201':'Utility Vehicles.Tow Truck.Light','141202':'Utility Vehicles.Tow Truck.Heavy','150000':'Train','150100':'Train.Locomotive','150200':'Train.Railcar','160000':'Civilian Vehicle','160100':'Civilian Vehicle.Automobile','160101':'Civilian Vehicle.Automobile.Compact','160102':'Civilian Vehicle.Automobile.Midsize','160103':'Civilian Vehicle.Automobile.Sedan','160200':'Civilian Vehicle.Open-Bed Truck','160201':'Civilian Vehicle.Open-Bed Truck.Pickup','160202':'Civilian Vehicle.Open-Bed Truck.Small','160203':'Civilian Vehicle.Open-Bed Truck.Large','160300':'Civilian Vehicle.Multiple Passenger Vehicle','160301':'Civilian Vehicle.Multiple Passenger Vehicle.Van','160302':'Civilian Vehicle.Multiple Passenger Vehicle.Small Bus','160303':'Civilian Vehicle.Multiple Passenger Vehicle.Large Bus','160400':'Civilian Vehicle.Utility Vehicle','160401':'Civilian Vehicle.Utility Vehicle.Sport Utility Vehicle (SUV)','160402':'Civilian Vehicle.Utility Vehicle.Small Box Truck','160403':'Civilian Vehicle.Utility Vehicle.Large Box Truck','160500':'Civilian Vehicle.Jeep Type Vehicle','160501':'Civilian Vehicle.Jeep Type Vehicle.Small/Light','160502':'Civilian Vehicle.Jeep Type Vehicle.Medium','160503':'Civilian Vehicle.Jeep Type Vehicle.Large/Heavy','160600':'Civilian Vehicle.Tractor Trailer Truck with Box','160601':'Civilian Vehicle.Tractor Trailer Truck with Box.Small/Light','160602':'Civilian Vehicle.Tractor Trailer Truck with Box.Medium','160603':'Civilian Vehicle.Tractor Trailer Truck with Box.Large/Heavy','160700':'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer','160701':'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer.Small/Light','160702':'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer.Medium','160703':'Civilian Vehicle.Tractor Trailer Truck with Flatbed Trailer.Large/Heavy','160800':'Civilian Vehicle.Known Insurgent Vehicle','160900':'Civilian Vehicle.Drug Vehicle','170000':'Law Enforcement','170100':'Law Enforcement.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)','170200':'Law Enforcement.Border Patrol','170300':'Law Enforcement.Customs Service','170400':'Law Enforcement.Drug Enforcement Administration (DEA)','170500':'Law Enforcement.Department of Justice (DOJ)','170600':'Law Enforcement.Federal Bureau of Investigation (FBI)','170700':'Law Enforcement.Police','170800':'Law Enforcement.United States Secret Service (USSS)','170900':'Law Enforcement.Transportation Security Administration (TSA)','171000':'Law Enforcement.Coast Guard','171100':'Law Enforcement.US Marshals Service','180000':'Pack Animals','190000':'Missile Support','190100':'Missile Support.Transloader','190200':'Missile Support.Transporter','190300':'Missile Support.Crane/Loading Device','190400':'Missile Support.Propellant Transporter','190500':'Missile Support.Warhead Transporter','200000':'Other Equipment','200100':'Other Equipment.Antennae','200200':'Other Equipment.Bomb','200300':'Other Equipment.Booby Trap','200400':'Other Equipment.CBRN Equipment','200500':'Other Equipment.Computer System','200600':'Other Equipment.Command Launch Equipment (CLE)','200700':'Other Equipment.Generator Set','200800':'Other Equipment.Ground-based Midcourse Defense (GMD) Fire Control (GFC) Center','200900':'Other Equipment.In-Flight Interceptor Communications System (IFICS) Data Terminal (IDT)','201000':'Other Equipment.Laser','201100':'Other Equipment.Military Information Support Operations (MISO)','201200':'Other Equipment.Sustainment Shipments','201300':'Other Equipment.Tent','201400':'Other Equipment.Unit Deployment Shipments','201500':'Other Equipment.Emergency Medical Operation','201501':'Other Equipment.Emergency Medical Operation.Medical Evacuation Helicopter','210000':'Land Mines','210100':'Land Mines.Land Mine','210200':'Land Mines.Antipersonnel Land mine (APL)','210300':'Land Mines.Antitank Mine','210400':'Land Mines.Improvised Explosives Device (IED)','210500':'Land Mines.Less than lethal','220000':'Sensors','220100':'Sensors.Sensor','220200':'Sensors.Sensor Emplaced','220300':'Sensors.Radar','230000':'Emergency Operation','230100':'Emergency Operation.Ambulance','230200':'Emergency Operation.Fire Fighting/Fire Protection','240000':'Manual Track'};
				m1 = {'00':'Unspecified','01':'Biological','02':'Chemical','03':'Early Warning Radar','04':'Intrusion','05':'Nuclear','06':'Radiological','07':'Upgraded Early Warning Radar','08':'Hijacking','09':'Civilian'};
				m2 = {'00':''};
			}
			//Land Installation
			if(document.getElementById('2525DSymbolset').value == "20" ){
				icons = {'110000':'Military/Civilian','110100':'Military/Civilian.Aircraft Production/Assembly','110200':'Military/Civilian.Ammunition and Explosives/Assembly','110300':'Military/Civilian.Ammunition Cache','110400':'Military/Civilian.Armament Production','110500':'Military/Civilian.Black List Location','110600':'Military/Civilian.Chemical, Biological, Radiological and Nuclear (CBRN)','110700':'Military/Civilian.Engineering Equipment Production','110701':'Military/Civilian.Engineering Equipment Production.Bridge','110800':'Military/Civilian.Equipment Manufacture','110900':'Military/Civilian.Government Leadership','111000':'Military/Civilian.Gray List Location','111100':'Military/Civilian.Mass Grave Site','111200':'Military/Civilian.Materiel','111300':'Military/Civilian.Mine','111400':'Military/Civilian.Missile and Space System Production','111500':'Military/Civilian.Nuclear (Non CBRN Defense)','111600':'Military/Civilian.Printed Media','111700':'Military/Civilian.Safe House','111800':'Military/Civilian.White List Location','111900':'Military/Civilian.Tented Camp','111901':'Military/Civilian.Tented Camp.Displaced Persons/ Refugee/Evacuees Camp','111902':'Military/Civilian.Tented Camp.Training Camp','112000':'Military/Civilian.Warehouse/Storage Facility','112100':'Military/Civilian.Law  Enforcement','112101':'Military/Civilian.Law  Enforcement.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)','112102':'Military/Civilian.Law  Enforcement.Border Patrol','112103':'Military/Civilian.Law  Enforcement.Customs Service','112104':'Military/Civilian.Law  Enforcement.Drug Enforcement Administration (DEA)','112105':'Military/Civilian.Law  Enforcement.Department of Justice (DOJ)','112106':'Military/Civilian.Law  Enforcement.Federal Bureau of Investigation (FBI)','112107':'Military/Civilian.Law  Enforcement.Police','112108':'Military/Civilian.Law  Enforcement.Prison','112109':'Military/Civilian.Law  Enforcement.United States Secret Service (USSS)','112110':'Military/Civilian.Law  Enforcement.Transportation Security Administration (TSA)','112111':'Military/Civilian.Law  Enforcement.Coast Guard','112112':'Military/Civilian.Law  Enforcement.US Marshals Service','112200':'Military/Civilian.Emergency Operation','112201':'Military/Civilian.Emergency Operation.Fire Station','112202':'Military/Civilian.Emergency Operation.Emergency Medical Operation','120000':'Infrastructure','120100':'Infrastructure.Agriculture and Food Infrastructure','120101':'Infrastructure.Agriculture and Food Infrastructure.Agriculture Laboratory','120102':'Infrastructure.Agriculture and Food Infrastructure.Animal Feedlot','120103':'Infrastructure.Agriculture and Food Infrastructure.Commercial Food Distribution Center','120104':'Infrastructure.Agriculture and Food Infrastructure.Farm/Ranch','120105':'Infrastructure.Agriculture and Food Infrastructure.Food Distribution','120106':'Infrastructure.Agriculture and Food Infrastructure.Food Production Center','120107':'Infrastructure.Agriculture and Food Infrastructure.Food Retail','120108':'Infrastructure.Agriculture and Food Infrastructure.Grain Storage','120200':'Infrastructure.Banking Finance and Insurance  Infrastructure','120201':'Infrastructure.Banking Finance and Insurance  Infrastructure.ATM','120202':'Infrastructure.Banking Finance and Insurance  Infrastructure.Bank','120203':'Infrastructure.Banking Finance and Insurance  Infrastructure.Bullion Storage','120204':'Infrastructure.Banking Finance and Insurance  Infrastructure.Economic Infrastructure Asset','120205':'Infrastructure.Banking Finance and Insurance  Infrastructure.Federal Reserve Bank','120206':'Infrastructure.Banking Finance and Insurance  Infrastructure.Financial Exchange','120207':'Infrastructure.Banking Finance and Insurance  Infrastructure.Financial Services, Other','120300':'Infrastructure.Commercial Infrastructure','120301':'Infrastructure.Commercial Infrastructure.Chemical Plant','120302':'Infrastructure.Commercial Infrastructure.Firearms Manufacturer','120303':'Infrastructure.Commercial Infrastructure.Firearms Retailer','120304':'Infrastructure.Commercial Infrastructure.Hazardous Material Production','120305':'Infrastructure.Commercial Infrastructure.Hazardous Material Storage','120306':'Infrastructure.Commercial Infrastructure.Industrial Site','120307':'Infrastructure.Commercial Infrastructure.Landfill','120308':'Infrastructure.Commercial Infrastructure.Pharmaceutical Manufacturer','120309':'Infrastructure.Commercial Infrastructure.Contaminated Hazardous Waste Site','120310':'Infrastructure.Commercial Infrastructure.Toxic Release Inventory','120400':'Infrastructure.Educational Facilities Infrastructure','120401':'Infrastructure.Educational Facilities Infrastructure.College/University','120402':'Infrastructure.Educational Facilities Infrastructure.School','120500':'Infrastructure.Energy Facility Infrastructure','120501':'Infrastructure.Energy Facility Infrastructure.Electric Power','120502':'Infrastructure.Energy Facility Infrastructure.Generation Station','120503':'Infrastructure.Energy Facility Infrastructure.Natural Gas Facility','120504':'Infrastructure.Energy Facility Infrastructure.Petroleum Facility','120505':'Infrastructure.Energy Facility Infrastructure.Petroleum/Gas/Oil','120506':'Infrastructure.Energy Facility Infrastructure.Propane Facility','120600':'Infrastructure.Government Site Infrastructure','120700':'Infrastructure.Medical Infrastructure','120701':'Infrastructure.Medical Infrastructure.Medical','120702':'Infrastructure.Medical Infrastructure.Medical Treatment Facility (Hospital)','120800':'Infrastructure.Military Infrastructure','120801':'Infrastructure.Military Infrastructure.Military Armory','120802':'Infrastructure.Military Infrastructure.Military Base','120900':'Infrastructure.Postal Services Infrastructure','120901':'Infrastructure.Postal Services Infrastructure.Postal Distribution Center','120902':'Infrastructure.Postal Services Infrastructure.Post Office','121000':'Infrastructure.Public Venues Infrastructure','121001':'Infrastructure.Public Venues Infrastructure.Enclosed Facility','121002':'Infrastructure.Public Venues Infrastructure.Open Facility','121003':'Infrastructure.Public Venues Infrastructure.Recreational Area','121004':'Infrastructure.Public Venues Infrastructure.Religious Institution','121100':'Infrastructure.Special Needs Infrastructure','121101':'Infrastructure.Special Needs Infrastructure.Adult Day Care','121102':'Infrastructure.Special Needs Infrastructure.Child Day Care','121103':'Infrastructure.Special Needs Infrastructure.Elder Care','121200':'Infrastructure.Telecommunications Infrastructure','121201':'Infrastructure.Telecommunications Infrastructure.Broadcast Transmitter Antennae','121202':'Infrastructure.Telecommunications Infrastructure.Telecommunications','121203':'Infrastructure.Telecommunications Infrastructure.Telecommunications Tower','121300':'Infrastructure.Transportation Infrastructure','121301':'Infrastructure.Transportation Infrastructure.Airport/Air Base','121302':'Infrastructure.Transportation Infrastructure.Air Traffic Control Facility','121303':'Infrastructure.Transportation Infrastructure.Bus Station','121304':'Infrastructure.Transportation Infrastructure.Ferry Terminal','121305':'Infrastructure.Transportation Infrastructure.Helicopter Landing Site','121306':'Infrastructure.Transportation Infrastructure.Maintenance Facility','121307':'Infrastructure.Transportation Infrastructure.Railhead/Railroad Station','121308':'Infrastructure.Transportation Infrastructure.Rest Stop','121309':'Infrastructure.Transportation Infrastructure.Sea Port/Naval Base','121310':'Infrastructure.Transportation Infrastructure.Ship Yard','121311':'Infrastructure.Transportation Infrastructure.Toll Facility','121312':'Infrastructure.Transportation Infrastructure.Traffic Inspection Facility','121313':'Infrastructure.Transportation Infrastructure.Tunnel','121400':'Infrastructure.Water Supply Infrastructure','121401':'Infrastructure.Water Supply Infrastructure.Control Valve','121402':'Infrastructure.Water Supply Infrastructure.Dam','121403':'Infrastructure.Water Supply Infrastructure.Discharge Outfall','121404':'Infrastructure.Water Supply Infrastructure.Ground Water Well','121405':'Infrastructure.Water Supply Infrastructure.Pumping Station','121406':'Infrastructure.Water Supply Infrastructure.Reservoir','121407':'Infrastructure.Water Supply Infrastructure.Storage Tower','121408':'Infrastructure.Water Supply Infrastructure.Surface Water Intake','121409':'Infrastructure.Water Supply Infrastructure.Wastewater Treatment Facility','121410':'Infrastructure.Water Supply Infrastructure.Water','121411':'Infrastructure.Water Supply Infrastructure.Water Treatment'};
				m1 = {'00':'Unspecified','01':'Biological','02':'Chemical ','03':'Nuclear','04':'Radiological','05':'Decontamination','06':'Coal','07':'Geothermal','08':'Hydroelectric','09':'Natural Gas','10':'Petroleum','11':'Civilian ','12':'Civilian Telephone','13':'Civilian Television'};
				m2 = {'00':'Unspecified','01':'Biological','02':'Chemical ','03':'Nuclear','04':'Radiological','05':'Atomic Energy Reactor','06':'Nuclear Material Production','07':'Nuclear Material Storage','08':'Weapons Grade'};
			}
			//Surface
			if(document.getElementById('2525DSymbolset').value == "30" ){
				icons = {'110000':'Military','120000':'Military Combatant','120100':'Military Combatant.Carrier','120200':'Military Combatant.Surface Combatant, Line','120201':'Military Combatant.Surface Combatant, Line.Battleship','120202':'Military Combatant.Surface Combatant, Line.Cruiser','120203':'Military Combatant.Surface Combatant, Line.Destroyer','120204':'Military Combatant.Surface Combatant, Line.Frigate','120205':'Military Combatant.Surface Combatant, Line.Corvette','120206':'Military Combatant.Surface Combatant, Line.Littoral Combatant Ship','120300':'Military Combatant.Amphibious Warfare Ship','120301':'Military Combatant.Amphibious Warfare Ship.Amphibious Command Ship','120302':'Military Combatant.Amphibious Warfare Ship.Amphibious Assault, Non-specified','120303':'Military Combatant.Amphibious Warfare Ship.Amphibious Assault Ship, General','120304':'Military Combatant.Amphibious Warfare Ship.Amphibious Assault Ship, Multipurpose','120305':'Military Combatant.Amphibious Warfare Ship.Amphibious Assault Ship, Helicopter','120306':'Military Combatant.Amphibious Warfare Ship.Amphibious Transport Dock','120307':'Military Combatant.Amphibious Warfare Ship.Landing Ship','120308':'Military Combatant.Amphibious Warfare Ship.Landing Craft','120400':'Military Combatant.Mine Warfare Ship','120401':'Military Combatant.Mine Warfare Ship.Mine Layer','120402':'Military Combatant.Mine Warfare Ship.Mine Sweeper','120403':'Military Combatant.Mine Warfare Ship.Mine Sweeper, Drone','120404':'Military Combatant.Mine Warfare Ship.Mine Hunter','120405':'Military Combatant.Mine Warfare Ship.Mine Countermeasures','120406':'Military Combatant.Mine Warfare Ship.Mine Countermeasures, Support Ship','120500':'Military Combatant.Patrol Boat','120501':'Military Combatant.Patrol Boat.Patrol Craft, Submarine Chaser/Escort, General','120502':'Military Combatant.Patrol Boat.Patrol Ship, General','120600':'Military Combatant.Decoy','120700':'Military Combatant.Unmanned Surface Water Vehicle (USV)','120800':'Military Combatant.Speedboat','120801':'Military Combatant.Speedboat.Rigid-Hull Inflatable Boat (RHIB)','120900':'Military Combatant.Jet Ski','121000':'Military Combatant.Navy Task Organization','121001':'Military Combatant.Navy Task Organization.Navy Task Element','121002':'Military Combatant.Navy Task Organization.Navy Task Force','121003':'Military Combatant.Navy Task Organization.Navy Task Group','121004':'Military Combatant.Navy Task Organization.Navy Task Unit','121005':'Military Combatant.Navy Task Organization.Convoy','121100':'Military Combatant.Sea-Based X-Band Radar','130000':'Military Non Combatant','130100':'Military Non Combatant.Auxiliary Ship','130101':'Military Non Combatant.Auxiliary Ship.Ammunition Ship','130102':'Military Non Combatant.Auxiliary Ship.Naval Stores Ship','130103':'Military Non Combatant.Auxiliary Ship.Auxiliary Flag Ship','130104':'Military Non Combatant.Auxiliary Ship.Intelligence Collector','130105':'Military Non Combatant.Auxiliary Ship.Oceanographic Research Ship','130106':'Military Non Combatant.Auxiliary Ship.Survey Ship','130107':'Military Non Combatant.Auxiliary Ship.Hospital Ship','130108':'Military Non Combatant.Auxiliary Ship.Naval Cargo Ship','130109':'Military Non Combatant.Auxiliary Ship.Combat Support Ship, Fast','130110':'Military Non Combatant.Auxiliary Ship.Oiler, Replenishment','130111':'Military Non Combatant.Auxiliary Ship.Repair Ship','130112':'Military Non Combatant.Auxiliary Ship.Submarine Tender','130113':'Military Non Combatant.Auxiliary Ship.Tug, Ocean Going','130200':'Military Non Combatant.Service Craft/Yard','130201':'Military Non Combatant.Service Craft/Yard.Barge, not Self-Propelled','130202':'Military Non Combatant.Service Craft/Yard.Barge, Self-Propelled','130203':'Military Non Combatant.Service Craft/Yard.Tug, Harbor','130204':'Military Non Combatant.Service Craft/Yard.Launch','140000':'Civilian','140100':'Civilian.Merchant Ship','140101':'Civilian.Merchant Ship.Cargo, General','140102':'Civilian.Merchant Ship.Container Ship','140103':'Civilian.Merchant Ship.Dredge','140104':'Civilian.Merchant Ship.Roll On/Roll Off','140105':'Civilian.Merchant Ship.Ferry','140106':'Civilian.Merchant Ship.Heavy Lift','140107':'Civilian.Merchant Ship.Hovercraft','140108':'Civilian.Merchant Ship.Lash Carrier (with Barges)','140109':'Civilian.Merchant Ship.Oiler/Tanker','140110':'Civilian.Merchant Ship.Passenger','140111':'Civilian.Merchant Ship.Tug, Ocean Going','140112':'Civilian.Merchant Ship.Tow','140113':'Civilian.Merchant Ship.Transport Ship, Hazardous Material','140114':'Civilian.Merchant Ship.Junk/Dhwo','140115':'Civilian.Merchant Ship.Barge, not Self-Propelled','140116':'Civilian.Merchant Ship.Hospital Ship','140200':'Civilian.Fishing Vessel','140201':'Civilian.Fishing Vessel.Drifter','140202':'Civilian.Fishing Vessel.Trawler','140203':'Civilian.Fishing Vessel.Dredger','140300':'Civilian.Law Enforcement Vessel','140400':'Civilian.Leisure Craft, Sailing','140500':'Civilian.Leisure Craft, Motorized','140501':'Civilian.Leisure Craft, Motorized.Rigid-Hull Inflatable Boat (RHIB)','140502':'Civilian.Leisure Craft, Motorized.Speedboat','140600':'Civilian.Jet Ski','140700':'Civilian.Unmanned Surface Water Vehicle (USV)','150000':'Own Ship','160000':'Fused Track','170000':'Manual Track'};
				m1 = {'00':'Unspecified','01':'Own Ship','02':'Antiair Warfare','03':'Antisubmarine Warfare','04':'Escort','05':'Electronic Warfare','06':'Intelligence, Surveillance, Reconnaissance','07':'Mine Countermeasures','08':'Missile Defense','09':'Medical','10':'Mine Warfare','11':'Remote Multi-Mission Vehicle (USV-only)','12':'Special Operations Forces (SOF)','13':'Surface Warfare','14':'Ballistic Missile ','15':'Guided Missile ','16':'Other Guided Missile ','17':'Torpedo','18':'Drone-Equipped','19':'Helicopter-Equipped/VSTOL','20':'Ballistic Missile Defense, Shooter ','21':'Ballistic Missile Defense, Long-Range Surveillance and Track (LRS&T)','22':'Sea-Base X-Band','23':'Hijacking'};
				m2 = {'00':'Unspecified','01':'Nuclear Powered','02':'Heavy','03':'Light','04':'Medium','05':'Dock','06':'Logistics','07':'Tank','08':'Vehicle','09':'Fast','10':'Air-Cushioned (US)','11':'Air-Cushioned (NATO)','12':'Hydrofoil','13':'Autonomous Control','14':'Remotely Piloted','15':'Expendable'};
			}
			//Sub
			if(document.getElementById('2525DSymbolset').value == "35" ){
				icons = {'110000':'Military','110100':'Military.Submarine','110101':'Military.Submarine.Submarine, Surfaced','110102':'Military.Submarine.Submarine, Snorkeling','110103':'Military.Submarine.Submarine, Bottomed','110200':'Military.Other Submersible','110300':'Military.Nonsubmarine','110400':'Military.Autonomous Underwater Vehicle (AUV)/Unmanned Underwater Vehicle (UUV)','110500':'Military.Diver','120000':'Civilian','120100':'Civilian.Submersible','120200':'Civilian.Autonomous Underwater Vehicle (AUV)/ Unmanned Underwater Vehicle (UUV)','120300':'Civilian.Diver','130000':'Weapon','130100':'Weapon.Torpedo','130200':'Weapon.Improvised Explosive Device (IED)','130300':'Weapon.Decoy','140000':'Echo Tracker Classifier (ETC) / Possible Contact (POSCON)','150000':'Fused Track','160000':'Manual Track'};
				m1 = {'00':'Unspecified','01':'Antisubmarine Warfare','02':'Auxiliary','03':'Command and Control','04':'Intelligence, Surveillance, Reconnaissance','05':'Mine Countermeasures','06':'Mine Warfare','07':'Surface Warfare','08':'Attack','09':'Ballistic Missile ','10':'Guided Missile ','11':'Other Guided Missile','12':'Special Operations Forces (SOF)','13':'Possible Submarine Low 1 ','14':'Possible Submarine Low 2','15':'Possible Submarine High 3','16':'Possible Submarine High 4','17':'Probable Submarine','18':'Certain Submarine','19':'Anti-torpedo Torpedo','20':'Hijacking/Highjacked'};
				m2 = {'00':'Unspecified','01':'Air Independent Propulsion','02':'Diesel Electric, General','03':'Diesel - Type 1','04':'Diesel - Type 2','05':'Diesel - Type 3','06':'Nuclear Powered, General','07':'Nuclear - Type 1','08':'Nuclear - Type 2','09':'Nuclear - Type 3','10':'Nuclear - Type 4','11':'Nuclear - Type 5','12':'Nuclear - Type 6','13':'Nuclear - Type 7','14':'Autonomous Control','15':'Remotely Piloted','16':'Expendable'};
			}
			//Mine Warfare
			if(document.getElementById('2525DSymbolset').value == "36" ){
				icons = {'110000':'Sea Mine, General','110100':'Sea Mine, General.Sea Mine, Bottom','110200':'Sea Mine, General.Sea Mine, Moored','110300':'Sea Mine, General.Sea Mine, Floating','110400':'Sea Mine, General.Sea Mine, Rising','110500':'Sea Mine, General.Sea Mine, Other Position','110600':'Sea Mine, General.Kingfisher','110700':'Sea Mine, General.Small Object, Mine-Like','110800':'Sea Mine, General.Exercise Mine, General','110801':'Sea Mine, General.Exercise Mine, General.Exercise Mine, Bottom','110802':'Sea Mine, General.Exercise Mine, General.Exercise Mine, Moored','110803':'Sea Mine, General.Exercise Mine, General.Exercise Mine, Floating','110804':'Sea Mine, General.Exercise Mine, General.Exercise Mine, Rising','110900':'Sea Mine, General.Neutralized Mine, General','110901':'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Bottom','110902':'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Moored','110903':'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Floating','110904':'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Rising','110905':'Sea Mine, General.Neutralized Mine, General.Neutralized Mine, Other Position','120000':'Unexploded Ordnance','130000':'Sea Mine Decoy','130100':'Sea Mine Decoy.Sea Mine Decoy, Bottom','130200':'Sea Mine Decoy.Sea Mine Decoy, Moored','140000':'Mine-Like Contact (MILCO)','140100':'Mine-Like Contact (MILCO).MILCO - General','140101':'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence.Level 1','140102':'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence.Level 2','140103':'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence.Level 3','140104':'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence.Level 4','140105':'Mine-Like Contact (MILCO).MILCO - General.MILCO - General, Confidence.Level 5','140200':'Mine-Like Contact (MILCO).MILCO - Bottom','140201':'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, ConfidenceLevel 1','140202':'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence.Level 2','140203':'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence.Level 3','140204':'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, Confidence.Level 4','140205':'Mine-Like Contact (MILCO).MILCO - Bottom.MILCO - Bottom, ConfidenceLevel 5','140300':'Mine-Like Contact (MILCO).MILCO - Moored','140301':'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence.Level 1','140302':'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence.Level 2','140303':'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence.Level 3','140304':'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence.Level 4','140305':'Mine-Like Contact (MILCO).MILCO - Moored.MILCO - Moored, Confidence.Level 5','140400':'Mine-Like Contact (MILCO).MILCO - Floating','140401':'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence.Level 1','140402':'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence.Level 2','140403':'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence.Level 3','140404':'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence.Level 4','140405':'Mine-Like Contact (MILCO).MILCO - Floating.MILCO - Floating, Confidence.Level 5','150000':'Mine-Like Echo (MILEC), General','150100':'Mine-Like Echo (MILEC), General.Mine-Like Echo, Bottom','150200':'Mine-Like Echo (MILEC), General.Mine-Like Echo, Moored','150300':'Mine-Like Echo (MILEC), General.Mine-Like Echo, Floating','160000':'Negative Reacquisition, General','160100':'Negative Reacquisition, General.Negative Reacquisition, Bottom','160200':'Negative Reacquisition, General.Negative Reacquisition, Moored','160300':'Negative Reacquisition, General.Negative Reacquisition, Floating','170000':'Obstructor','170100':'Obstructor.Neutralized Obstructor','180000':'General Mine Anchor','190000':'Non-Mine Mine-Like Object (NMLO), General','190100':'Non-Mine Mine-Like Object (NMLO), General.Non-Mine Mine-Like Object, Bottom','190200':'Non-Mine Mine-Like Object (NMLO), General.Non-Mine Mine-Like Object, Moored','190300':'Non-Mine Mine-Like Object (NMLO), General.Non-Mine Mine-Like Object, Floating','200000':'Environmental Report Location','210000':'Dive Report Location'};
				m1 = {'00':''};
				m2 = {'00':''};
			}
			//Activities
			if(document.getElementById('2525DSymbolset').value == "40" ){
				icons = {'110000':'Incident','110100':'Incident.Criminal Activity Incident','110101':'Incident.Criminal Activity Incident.Arrest','110102':'Incident.Criminal Activity Incident.Arson','110103':'Incident.Criminal Activity Incident.Attempted Criminal Activity','110104':'Incident.Criminal Activity Incident.Drive-by Shooting','110105':'Incident.Criminal Activity Incident.Drug Related','110106':'Incident.Criminal Activity Incident.Extortion','110107':'Incident.Criminal Activity Incident.Graffiti','110108':'Incident.Criminal Activity Incident.Killing','110109':'Incident.Criminal Activity Incident.Poisoning','110110':'Incident.Criminal Activity Incident.Civil Rioting','110111':'Incident.Criminal Activity Incident.Booby Trap','110112':'Incident.Criminal Activity Incident.Home Eviction','110113':'Incident.Criminal Activity Incident.Black Marketing','110114':'Incident.Criminal Activity Incident.Vandalism/Loot/Ransack/Plunder','110115':'Incident.Criminal Activity Incident.Jail Break','110116':'Incident.Criminal Activity Incident.Robbery','110117':'Incident.Criminal Activity Incident.Theft','110118':'Incident.Criminal Activity Incident.Burglary','110119':'Incident.Criminal Activity Incident.Smuggling','110120':'Incident.Criminal Activity Incident.Rock Throwing','110121':'Incident.Criminal Activity Incident.Dead Body','110122':'Incident.Criminal Activity Incident.Sabotage','110123':'Incident.Criminal Activity Incident.Suspicious Activity','110200':'Incident.Bomb/Bombing','110201':'Incident.Bomb/Bombing.Bomb Threat','110300':'Incident.IED Event','110301':'Incident.IED Event.IED Explosion','110302':'Incident.IED Event.Premature IED Explosion','110303':'Incident.IED Event.IED Cache','110304':'Incident.IED Event.IED Suicide Bomber','110400':'Incident.Shooting','110401':'Incident.Shooting.Sniping','110500':'Incident.Illegal Drug Operation','110501':'Incident.Illegal Drug Operation.Trafficking','110502':'Incident.Illegal Drug Operation.Illegal Drug Lab','110600':'Incident.Explosion','110601':'Incident.Explosion.Grenade Explosion','110602':'Incident.Explosion.Incendiary Explosion','110603':'Incident.Explosion.Mine Explosion','110604':'Incident.Explosion.Mortar Fire Explosion','110605':'Incident.Explosion.Rocket Explosion','110606':'Incident.Explosion.Bomb Explosion','120000':'Civil Disturbance','120100':'Civil Disturbance.Demonstration','130000':'Operation','130100':'Operation.Patrolling','130200':'Operation.Military Information Support Operation (MISO)','130201':'Operation.Military Information Support Operation (MISO).TV and Radio Propaganda','130300':'Operation.Foraging/Searching','130400':'Operation.Recruitment','130401':'Operation.Recruitment.Willing','130402':'Operation.Recruitment.Coerced/Impressed','130500':'Operation.Mine Laying','130600':'Operation.Spy','130700':'Operation.Warrant Served','130800':'Operation.Exfiltration','130900':'Operation.Infiltration','131000':'Operation.Meeting','131001':'Operation.Meeting.Polling Place/Election','131100':'Operation.Raid on House','131200':'Operation.Emergency Operation','131201':'Operation.Emergency Operation.Emergency Collection Evacuation Point','131202':'Operation.Emergency Operation.Emergency Food Distribution','131203':'Operation.Emergency Operation.Emergency Incident Command Center','131204':'Operation.Emergency Operation.Emergency Operations Center','131205':'Operation.Emergency Operation.Emergency Public Information Center','131206':'Operation.Emergency Operation.Emergency Shelter','131207':'Operation.Emergency Operation.Emergency Staging Area','131208':'Operation.Emergency Operation.Emergency Water Distribution Center','131300':'Operation.Emergency Medical Operation','131301':'Operation.Emergency Medical Operation.EMT Station Location','131302':'Operation.Emergency Medical Operation.Health Department Facility','131303':'Operation.Emergency Medical Operation.Medical Facilities Outpatient','131304':'Operation.Emergency Medical Operation.Morgue','131305':'Operation.Emergency Medical Operation.Pharmacy','131306':'Operation.Emergency Medical Operation.Triage','131400':'Operation.Fire Fighting Operation','131401':'Operation.Fire Fighting Operation.Fire Hydrant','131402':'Operation.Fire Fighting Operation.Fire Station','131403':'Operation.Fire Fighting Operation.Other Water Supply Location','131500':'Operation.Law Enforcement Operation','131501':'Operation.Law Enforcement Operation.Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) (Department of Justice)','131502':'Operation.Law Enforcement Operation.Border Patrol','131503':'Operation.Law Enforcement Operation.Customs Service','131504':'Operation.Law Enforcement Operation.Drug Enforcement Administration (DEA)','131505':'Operation.Law Enforcement Operation.Department of Justice (DOJ)','131506':'Operation.Law Enforcement Operation.Federal Bureau of Investigation (FBI)','131507':'Operation.Law Enforcement Operation.Police','131508':'Operation.Law Enforcement Operation.Prison','131509':'Operation.Law Enforcement Operation.United States Secret Service(Treas) (USSS)','131510':'Operation.Law Enforcement Operation.Transportation Security Administration (TSA)','131511':'Operation.Law Enforcement Operation.Coast Guard','131512':'Operation.Law Enforcement Operation.US Marshals Service','131513':'Operation.Law Enforcement Operation.Internal Security Force','140000':'Fire Event','140100':'Fire Event.Fire Origin','140200':'Fire Event.Smoke','140300':'Fire Event.Hot Spot','140400':'Fire Event.Non-Residential Fire','140500':'Fire Event.Residential Fire','140600':'Fire Event.School Fire','140700':'Fire Event.Special Needs Fire','140800':'Fire Event.Wild Fire','150000':'Hazardous Materials','150100':'Hazardous Materials.Hazardous Materials Incident','150101':'Hazardous Materials.Hazardous Materials Incident.Chemical Agent','150102':'Hazardous Materials.Hazardous Materials Incident.Corrosive Material','150103':'Hazardous Materials.Hazardous Materials Incident.Hazardous when Wet','150104':'Hazardous Materials.Hazardous Materials Incident.Explosive Material','150105':'Hazardous Materials.Hazardous Materials Incident.Flammable Gas','150106':'Hazardous Materials.Hazardous Materials Incident.Flammable Liquid','150107':'Hazardous Materials.Hazardous Materials Incident.Flammable Solid','150108':'Hazardous Materials.Hazardous Materials Incident.Non-Flammable Gas','150109':'Hazardous Materials.Hazardous Materials Incident.Organic Peroxide','150110':'Hazardous Materials.Hazardous Materials Incident.Oxidizer','150111':'Hazardous Materials.Hazardous Materials Incident.Radioactive Material','150112':'Hazardous Materials.Hazardous Materials Incident.Spontaneously Combustible Material','150113':'Hazardous Materials.Hazardous Materials Incident.Toxic Gas','150114':'Hazardous Materials.Hazardous Materials Incident.Toxic Infectious Material','150115':'Hazardous Materials.Hazardous Materials Incident.Unexploded Ordnance','160000':'Transportation Incident','160100':'Transportation Incident.Air-','160200':'Transportation Incident.Marine-','160300':'Transportation Incident.Rail-','160400':'Transportation Incident.Vehicle-','160500':'Transportation Incident.Wheeled Vehicle Explosion','170000':'Natural Event','170100':'Natural Event.Geologic','170101':'Natural Event.Geologic.Aftershock','170102':'Natural Event.Geologic.Avalanche','170103':'Natural Event.Geologic.Earthquake Epicenter','170104':'Natural Event.Geologic.Landslide','170105':'Natural Event.Geologic.Subsidence','170106':'Natural Event.Geologic.Volcanic Eruption','170107':'Natural Event.Geologic.Volcanic Threat','170108':'Natural Event.Geologic.Cave Entrance','170200':'Natural Event.Hydro-Meteorological','170201':'Natural Event.Hydro-Meteorological.Drought','170202':'Natural Event.Hydro-Meteorological.Flood','170203':'Natural Event.Hydro-Meteorological.Tsunami','170300':'Natural Event.Infestation','170301':'Natural Event.Infestation.Bird','170302':'Natural Event.Infestation.Insect','170303':'Natural Event.Infestation.Microbial','170304':'Natural Event.Infestation.Reptile','170305':'Natural Event.Infestation.Rodent','180000':'Individual','180100':'Individual.Religious Leader','180200':'Individual.Speaker'};
				m1 = {'00':'Unspecified','01':'Assassination','02':'Execution (Wrongful Killing)','03':'Hijacking/Hijacked','04':'House-to-House','05':'Kidnapping','06':'Murder','07':'Piracy','08':'Rape','09':'Written Military Information Support Operations','10':'Pirate','11':'False','12':'Find','13':'Found and Cleared','14':'Hoax (Decoy)','15':'Attempted','16':'Accident','17':'Incident','18':'Theft'};
				m2 = {'00':''};
			}

			//Signals Intelligence
			if(	document.getElementById('2525DSymbolset').value == "50" ||
				document.getElementById('2525DSymbolset').value == "51" ||
				document.getElementById('2525DSymbolset').value == "52" ||
				document.getElementById('2525DSymbolset').value == "53" ||
				document.getElementById('2525DSymbolset').value == "54" ){
				icons = {'110000':'Signal Intercept','110100':'Signal Intercept.Communications','110200':'Signal Intercept.Jammer','110300':'Signal Intercept.Radar'};
				m1 = {'00':'Unspecified','01':'Anti-Aircraft Fire Control','02':'Airborne Search and Bombing','03':'Airborne Intercept','04':'Altimeter','05':'Airborne Reconnaissance and Mapping','06':'Air Traffic Control','07':'Beacon Transponder (not IFF)','08':'Battlefield Surveillance','09':'Controlled Approach','10':'Controlled Intercept','11':'Cellular/Mobile','12':'Coastal Surveillance','13':'Decoy/Mimic','14':'Data Transmission','15':'Earth Surveillance','16':'Early Warning','17':'Fire Control','18':'Ground Mapping','19':'Height Finding','20':'Harbor Surveillance','21':'Identification, Friend or Foe (Interrogator)','22':'Instrument Landing System','23':'Ionospheric Sounding','24':'Identification, Friend or Foe (Transponder)','25':'Barrage Jammer','26':'Click Jammer','27':'Deceptive Jammer','28':'Frequency Swept Jammer','29':'Jammer (general)','30':'Noise Jammer','31':'Pulsed Jammer','32':'Repeater Jammer','33':'Spot Noise Jammer','34':'Transponder Jammer','35':'Missile Acquisition','36':'Missile Control','37':'Missile Downlink','38':'Meteorological','39':'Multi-Function','40':'Missile Guidance','41':'Missile Homing','42':'Missile Tracking','43':'Navigational/General','44':'Navigational/Distance Measuring Equipment','45':'Navigation/Terrain Following','46':'Navigational/Weather Avoidance','47':'Omni-Line of Sight (LOS)','48':'Proximity Use','49':'Point-to-Point Line of Sight (LOS)','50':'Instrumentation','51':'Range Only','52':'Sonobuoy','53':'Satellite Downlink','54':'Space','55':'Surface Search','56':'Shell Tracking','57':'Satellite Uplink','58':'Target Acquisition','59':'Target Illumination','60':'Tropospheric Scatter','61':'Target Tracking','62':'Unknown','63':'Video Remoting','64':'Experimental'};
				m2 = {'00':''};
			}

			//Cyberspace
			if(document.getElementById('2525DSymbolset').value == "60" ){
				icons = {'110000':'Botnet','110100':'Botnet.Command and Control (C2)','110200':'Botnet.Herder','110300':'Botnet.Callback Domain','110400':'Botnet.Zombie','120000':'Infection','120100':'Infection.Advanced Persistent Threat (APT)','120101':'Infection.Advanced Persistent Threat (APT).APT with C2','120102':'Infection.Advanced Persistent Threat (APT).APT with Self Propagation','120103':'Infection.Advanced Persistent Threat (APT).APT with C2 and Self Propagation','120104':'Infection.Advanced Persistent Threat (APT).APT Other','120200':'Infection.Non-Advanced Persistent Threat (NAPT)','120201':'Infection.Non-Advanced Persistent Threat (NAPT).NAPT with C2','120202':'Infection.Non-Advanced Persistent Threat (NAPT).NAPT with Self Propagation','120203':'Infection.Non-Advanced Persistent Threat (NAPT).NAPT with C2 and Self Propagation','120204':'Infection.Non-Advanced Persistent Threat (NAPT).NAPT Other','130000':'Health and Status','130100':'Health and Status.Normal','130200':'Health and Status.Network Outage','130300':'Health and Status.Unknown','130400':'Health and Status.Impaired','140000':'Device Type','140100':'Device Type.Core Router','140200':'Device Type.Router','140300':'Device Type.Cross Domain Solution','140400':'Device Type.Mail Server','140500':'Device Type.Web Server','140600':'Device Type.Domain Server','140700':'Device Type.File Server','140800':'Device Type.Peer-to-Peer Node','140900':'Device Type.Firewall','141000':'Device Type.Switch','141100':'Device Type.Host','141200':'Device Type.Virtual Private Network (VPN)','150000':'Device Domain','150100':'Device Domain.Department of Defense (DoD)','150200':'Device Domain.Government','150300':'Device Domain.Contractor','150400':'Device Domain.Supervisory Control and Data Acquisition (SCADA)','150500':'Device Domain.Non-Government','160000':'Effect','160100':'Effect.Infection','160200':'Effect.Degradation','160300':'Effect.Data Spoofing','160400':'Effect.Data Manipulation','160500':'Effect.Exfiltration','160600':'Effect.Power Outage','160700':'Effect.Network Outage','160800':'Effect.Service Outage','160900':'Effect.Device Outage'};
				m1 = {'00':''};
				m2 = {'00':''};
			}

			selection = document.getElementById('2525DIcon');
			selection.innerHTML = "";

			for (var key in icons){
				selection.add(new Option(icons[key], key))
			}

			selection = document.getElementById('2525Dm1');
			selection.innerHTML = "";

			//Because of Javascript object enumeration we will have to do some stuff here.
			var m1keys = Object.keys(m1).sort();
			for (var key in m1keys){
				selection.add(new Option(m1[m1keys[key]], m1keys[key]))
			}

			selection = document.getElementById('2525Dm2');
			selection.innerHTML = "";
			//Because of Javascript object enumeration we will have to do some stuff here.
			var m2keys = Object.keys(m2).sort();
			for (var key in m2keys){
				selection.add(new Option(m2[m2keys[key]], m2keys[key]))
			}

		},
		displaySpecialSubtypes: function(){
			if(document.getElementById('2525DSymbolset').value == "10" && document.getElementById('2525DIcon').value.substr(4,2) == "00" ){
				document.getElementById("specialSubtypes").style.display = "inline";
			}else{
				document.getElementById("specialSubtypes").style.display = "none";
			}
		}
	};

