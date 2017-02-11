// Icon parts for tactical points
module.exports = function (iconParts, properties, colors, STD2525, monoColor, alternateMedal){
	/*
	iconParts
	The existing object of icon parts
	
	properties
	propterties object
	
	colors
	color object
	
	STD2525
	Is it 2525 then true, otherwise false
	
	alternateMedal
	true/false for sea mine stuff
	*/
	iconParts['TP.DESTROY'] = [{type:'path',fill:false,d:'m 0,45 85,46.75 m 30,16.5 85,46.75 M 0,155 85,108.25 M 115,91.75 200,45'},{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'D'}];
	iconParts['TP.INTERDICT'] = [{type:'path',fill:false,d:'m 194.203,65.6674 5.49,-20.4904 -20.49,-5.4904 M 115,91.75 200,45 M 0,155 85,108.25 M 185,85 l 15,15 -15,15 m -70,-15 85,0 m -200,0 85,0'},{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'I'}];
	iconParts['TP.NEUTRALIZE'] = [{type:'path',fill:false,d:'M 115,108.25 200,155 M 0,45 85,91.75'},{type:'path',fill:false,strokedasharray:'12,5',d:'M 115,91.75 200,45 M 0,155 85,108.25'},{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'N'}];
	iconParts['TP.DATUM'] = [{type:'path',stroke:false,d:'M 100 50 L 100 100 L 150 100 A 50 50 0 0 0 100 50 z M 100 100 L 50 100 A 50 50 0 0 0 100 150 L 100 100 z '},{type:'circle',fill:false,cx:100,cy:100,r:50}];
	iconParts['TP.BRIEF CONTACT'] = [{type:'path',d:'m 65,0 70,0 m -35,80 0,-80 m 0,100 -45,-20 90,0 z'},{type:'text',stroke:false,textanchor:"middle",x:75,y:55,fontsize:45,text:'B'},{type:'text',stroke:false,textanchor:"middle",x:125,y:55,fontsize:45,text:'C'}];
	iconParts['TP.LOST CONTACT'] = [{type:'path',d:'m 65,0 70,0 m -35,80 0,-80 m 0,100 -45,-20 90,0 z'},{type:'text',stroke:false,textanchor:"middle",x:75,y:55,fontsize:45,text:'L'},{type:'text',stroke:false,textanchor:"middle",x:125,y:55,fontsize:45,text:'C'}];
	iconParts['TP.SINKER'] = [{type:'path',fill:false,d:'m 100,15 0,65 M 60,15 80,0 100,15 120,0 140,15'},{type:'path',d:'M 100,100 55,80 145,80 Z'}];
	iconParts['TP.SONOBUOY'] = [{type:'path',fill:false,d:'M 100,60 l 0,-35 10,10 0,-45'},{type:'circle',fill:false,cx:100,cy:100,r:40}];
	iconParts['TP.SONOBUOY PATTERN CENTER'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'P'}];
	iconParts['TP.SONOBUOY DIFAR'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'D'}];
	iconParts['TP.SONOBUOY LOFAR'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'L'}];
	iconParts['TP.SONOBUOY CASS'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'C'}];
	iconParts['TP.SONOBUOY DICASS'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'S'}];
	iconParts['TP.SONOBUOY BT'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'B'}];
	iconParts['TP.SONOBUOY ANM'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'A'}];
	iconParts['TP.SONOBUOY VLAD'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'V'}];
	iconParts['TP.SONOBUOY ATAC'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'T'}];
	iconParts['TP.SONOBUOY RO'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'R'}];
	iconParts['TP.SONOBUOY KINGPIN'] = [iconParts['TP.SONOBUOY'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'K'}];
	iconParts['TP.SONOBUOY EXPIRED'] = [iconParts['TP.SONOBUOY'],{type:'path',fill:false,d:'M 40,60 l 120,80 M 40,140 l 120,-80'}];
	iconParts['TP.SEARCH'] = {type:'path',d:'m 80,80 20,20 -20,20 40,0 -20,-20 20,-20 z M 50,150 150,50 M 50,50 150,150'};
	iconParts['TP.SEARCH AREA'] = [iconParts['TP.SEARCH'],{type:'text',stroke:false,textanchor:"middle",x:60,y:115,fontsize:45,text:'S'},{type:'text',stroke:false,textanchor:"middle",x:140,y:115,fontsize:45,text:'A'}];;
	iconParts['TP.DIP POSITION'] = [iconParts['TP.SEARCH'],{type:'text',stroke:false,textanchor:"middle",x:60,y:115,fontsize:45,text:'D'},{type:'text',stroke:false,textanchor:"middle",x:140,y:115,fontsize:45,text:'P'}];;
	iconParts['TP.SEARCH CENTER'] = {type:'path',stroke:false,d:'m 100,100 -50,10 0,-20 z m 0,0 10,50 -20,0 z m 0,0 50,-10 0,20 z m 0,0 -10,-50 20,0 z'};
	iconParts['TP.REFERENCE POINT'] = [{type:'path',fill:false,d:'M 160,160 40,160 40,40 160,40 Z'},{type:'circle',cx:100,cy:100,r:15}];
	iconParts['TP.NAVIGATIONAL REFERENCE'] = {type:'path',fill:false,d:'M 160,160 40,160 40,40 160,40 Z M 160,160 40,40 M 40,160 160,40'};
	iconParts['TP.SPECIAL POINT'] = [iconParts['TP.NAVIGATIONAL REFERENCE'],{type:'circle',cx:100,cy:100,r:15}];
	iconParts['TP.DLRP'] = [iconParts['TP.SPECIAL POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'D'}];
	iconParts['TP.POINT OF INTENDED MOVEMENT'] = [iconParts['TP.REFERENCE POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'P'}];
	iconParts['TP.MARSHALL POINT'] = [iconParts['TP.REFERENCE POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'M'}];
	iconParts['TP.REFERENCE POINT WAYPOINT'] = [iconParts['TP.REFERENCE POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'W'}];
	iconParts['TP.CORRIDOR TAB'] = [iconParts['TP.REFERENCE POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'C'}];
	iconParts['TP.POINT OF INTEREST'] = [{type:'path',d:'M 129.021,41.957 A 40,40 0 0 1 100,54.5 40,40 0 0 1 71.0234,42.0469 L 100,100 129.021,41.957 Z'},{type:'circle',fill:false,cx:100,cy:15,r:40}];
	iconParts['TP.AIM POINT'] = [{type:'circle',cx:100,cy:100,r:15},{type:'circle',cx:100,cy:100,r:35,fill:false},{type:'circle',cx:100,cy:100,r:45,fill:false}];
	iconParts['TP.DROP POINT'] = {type:'path',fill:false,d:'m 130,100 0,-40 m -60,40 0,-40 m 60,40 0,0 a 15,15 0 0 1 -15,15 15,15 0 0 1 -15,-15 m 0,0 0,0 A 15,15 0 0 1 85,115 15,15 0 0 1 70,100 m 30,-40 0,40'};
	iconParts['TP.ENTRY POINT'] = {type:'path',fill:false,d:'m 100,100 0,-50 m -35,15 35,35 35,-35 m -85,35 100,0'};
	iconParts['TP.GROUND ZERO'] = {type:'path',stroke:false,d:'M 100 28 C 100 28 65.4398 29.8261 61.6543 55 C 60.2826 64.1213 75.0115 70.4884 82.2363 71.6543 C 89.4611 72.8201 91.7277 55.3462 98.5098 56.0371 L 93 90 C 93 90 70 90 67 97 C 65.0304 101.596 100 100 100 100 C 100 100 134.97 101.596 133 97 C 130 90 107 90 107 90 L 101.49 56.0371 C 108.272 55.3462 110.539 72.8201 117.764 71.6543 C 124.988 70.4884 139.718 64.1213 138.346 55 C 134.56 29.8261 100 28 100 28 z'};
	iconParts['TP.MSL DETECT POINT'] = {type:'path',d:'m 95,100 0,-55 -10,0 15,-15 15,15 -10,0 0,55 m -55,0 100,0'};
	iconParts['TP.IMPACT POINT'] = {type:'path',d:'m 50,100 40,-10 10,-40 10,40 40,10 -40,10 -10,40 -10,-40 -40,-10'};
	iconParts['TP.PREDICTED IMPACT POINT'] = {type:'path',fill:false,strokedasharray:'12,5',d:'m 50,100 40,-10 10,-40 10,40 40,10 -40,10 -10,40 -10,-40 -40,-10'};
	iconParts['TP.FORMATION'] = {type:'path',fill:false,d:'m 100,50 0,100 m -50,-50 100,0'};
	iconParts['TP.HARBOR'] = {type:'path',fill:false,d:'M 80,140 50,60 150,60 120,140'};
	iconParts['TP.HARBOR POINT Q'] = [iconParts['TP.HARBOR'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'Q'}];
	iconParts['TP.HARBOR POINT A'] = [iconParts['TP.HARBOR'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'A'}];
	iconParts['TP.HARBOR POINT Y'] = [iconParts['TP.HARBOR'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'Y'}];
	iconParts['TP.HARBOR POINT X'] = [iconParts['TP.HARBOR'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'X'}];
	iconParts['TP.ROUTE'] = {type:'path',fill:false,d:'m 138.484,76.82 a 13.5484,13.5484 0 0 1 13.548,-13.548 13.5484,13.5484 0 0 1 13.549,13.548 m -27.097,0 0,0 A 12.5807,12.5807 0 0 1 125.902,89.4 12.5807,12.5807 0 0 1 113.322,76.82 m -27.097,0 A 13.5484,13.5484 0 0 1 99.773,63.272 13.5484,13.5484 0 0 1 113.322,76.82 m -79.3554,0 A 13.5484,13.5484 0 0 1 47.515,63.272 13.5484,13.5484 0 0 1 61.0634,76.82 m 25.1616,0 0,0 A 12.5807,12.5807 0 0 1 73.6437,89.4 12.5807,12.5807 0 0 1 61.0634,76.82 m 77.4206,47.328 a 13.5484,13.5484 0 0 1 13.548,-13.548 13.5484,13.5484 0 0 1 13.549,13.548 m -27.097,0 0,0 a 12.5807,12.5807 0 0 1 -12.582,12.58 12.5807,12.5807 0 0 1 -12.58,-12.58 m -27.097,0 a 13.5484,13.5484 0 0 1 13.548,-13.548 13.5484,13.5484 0 0 1 13.549,13.548 m -79.3554,0 A 13.5484,13.5484 0 0 1 47.515,110.6 13.5484,13.5484 0 0 1 61.0634,124.148 m 25.1616,0 0,0 a 12.5807,12.5807 0 0 1 -12.5813,12.58 12.5807,12.5807 0 0 1 -12.5803,-12.58 m -27.0968,-23.664 132.5184,0'};
	iconParts['TP.ROUTE RENDEZVOUS'] = [iconParts['TP.ROUTE'],{type:'text',stroke:false,textanchor:"middle",x:100,y:170,fontsize:45,text:'R'}];
	iconParts['TP.ROUTE DIVERSIONS'] = [iconParts['TP.ROUTE'],{type:'text',stroke:false,textanchor:"middle",x:100,y:170,fontsize:45,text:'D'}];
	iconParts['TP.ROUTE WAYPOINT'] = [iconParts['TP.ROUTE'],{type:'text',stroke:false,textanchor:"middle",x:100,y:170,fontsize:45,text:'W'}];
	iconParts['TP.ROUTE PIM'] = [iconParts['TP.ROUTE'],{type:'text',stroke:false,textanchor:"middle",x:100,y:170,fontsize:45,text:'M'}];
	iconParts['TP.ROUTE POINT R'] = [iconParts['TP.ROUTE'],{type:'text',stroke:false,textanchor:"middle",x:100,y:170,fontsize:45,text:'P'}];
	iconParts['TP.AIR CONTROL'] = {type:'path',fill:false,d:'m 140,165 0,-130 m -80,0 0,130'};
	iconParts['TP.AIR CONTROL POINT'] = [iconParts['TP.AIR CONTROL'],{type:'circle',cx:100,cy:100,r:15}];
	iconParts['TP.COMBAT AIR PATROL (CAP)'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'C'}];
	iconParts['TP.AIRBORNE EARLY WARNING (AEW)'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'W'}];
	iconParts['TP.TANKING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'K'}];
	iconParts['TP.FIXED WING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:32,text:'ASW'},{type:'path',d:'m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z',stroke:false}];
	iconParts['TP.ROTARY WING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:32,text:'ASW'},{type:'path',d:'m 65,80 0,40 70,-40 0,40 -70,-40',stroke:false}];
	iconParts['TP.SUCAP - FIXED WING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:32,text:'SUW'},{type:'path',d:'m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z',stroke:false}];
	iconParts['TP.SUCAP - ROTARY WING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:32,text:'ASW'},{type:'path',d:'m 65,80 0,40 70,-40 0,40 -70,-40',stroke:false}];
	iconParts['TP.MIW - FIXED WING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:32,text:'MIW'},{type:'path',d:'m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z',stroke:false}];
	iconParts['TP.MIW - ROTARY WING'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:32,text:'MIW'},{type:'path',d:'m 65,80 0,40 70,-40 0,40 -70,-40',stroke:false}];
	iconParts['TP.STRIKE IP'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'S'}];
	iconParts['TP.TACAN'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'T'}];
	iconParts['TP.TOMCAT'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'TC'}];
	iconParts['TP.RESCUE'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'RC'}];
	iconParts['TP.REPLENISH'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'RP'}];
	iconParts['TP.UNMANNED AERIAL SYSTEM'] = [iconParts['TP.AIR CONTROL'],{type:'path',stroke:false,d:'m 70,85 30,15 30,-15 0,15 -30,15 -30,-15 z'}];
	iconParts['TP.VTUA'] = [iconParts['TP.AIR CONTROL'],{type:'path',stroke:false,d:'m 70,95 30,15 30,-15 0,30 -30,-15 -30,15 z m 0,-25 30,15 30,-15 0,15 -30,15 -30,-15 z'}];
	iconParts['TP.ORBIT'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'O'}];
	iconParts['TP.ORBIT - FIGURE EIGHT'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'O'},{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'F8'}];
	iconParts['TP.ORBIT - RACE TRACK'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'O'},{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'RT'}];
	iconParts['TP.ORBIT - RANDOM, CLOSED'] = [iconParts['TP.AIR CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'O'},{type:'text',stroke:false,textanchor:"middle",x:100,y:150,fontsize:40,text:'RC'}];
	iconParts['TP.ACTION POINT'] = {type:'path',fill:false,d:'m 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z'};
	iconParts['TP.ACTION CHECK POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'CKP'}];
	iconParts['TP.CONTACT POINT'] = {type:'path',fill:false,d:'m 100,100 0,-35 -45,0 0,-75 90,0 0,75 -45,0'};
	iconParts['TP.COORDINATION POINT'] = [{type:'path',fill:false,d:'m 65,135 70,-70 m -70,0 70,70'},{type:'circle',fill:false,cx:100,cy:100,r:50}];
	iconParts['TP.DECISION POINT'] = {type:'path',fill:false,d:'M 99.9998,25.5886 117.061,76.5192 170.77,77.0054 127.604,108.968 143.738,160.2 100,129.024 56.2624,160.2 72.3967,108.968 29.2306,77.0059 82.9403,76.5192 Z'};
	iconParts['TP.ACTION LINKUP POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'LU'}];
	iconParts['TP.ACTION PASSAGE POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'PP'}];
	iconParts['TP.ACTION RALLY POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'RLY'}];
	iconParts['TP.ACTION RELEASE POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'RP'}];
	iconParts['TP.ACTION START POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'SP'}];
	iconParts['TP.ACTION AMNESTY POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'AMN'}];
	iconParts['TP.WAYPOINT'] = {type:'path',fill:false,strokewidth:8,d:'m 65,135 70,-70 m -70,0 70,70'};
	iconParts['TP.SEA SURFACE CONTROL'] = {type:'path',fill:false,d:'m 30,60 140,0 m -140,80 140,0'};
	iconParts['TP.SEA SURFACE CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'circle',cx:100,cy:100,r:15}];
	iconParts['TP.(USV) CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'path',stroke:false,d:'m 100,115 45,-20 0,-15 -45,20 -45,-20 0,15 z'}];
	iconParts['TP.(USV)'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'path',stroke:false,d:'m 55,100 45,20 45,-20 0,15 -45,20 -45,-20 z'}];
	iconParts['TP.(RMV) USV CONTROL STATION'] = [iconParts['TP.(USV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'RMV'}];
	iconParts['TP.USV - ASW CONTROL STATION'] = [iconParts['TP.(USV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'ASW'}];
	iconParts['TP.USV - SUW CONTROL STATION'] = [iconParts['TP.(USV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'SUW'}];
	iconParts['TP.USV - MIW CONTROL STATION'] = [iconParts['TP.(USV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'MIW'}];
	iconParts['TP.ASW CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'ASW'}];
	iconParts['TP.SUW CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'SUW'}];
	iconParts['TP.MIW CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'MIW'}];
	iconParts['TP.PICKET CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'PK'}];
	iconParts['TP.RENDEZVOUS CONTROL POINT'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'RZ'}];
	iconParts['TP.RESCUE CONTROL POINT'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'RS'}];
	iconParts['TP.REPLENISHMENT CONTROL POINT'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'RP'}];
	iconParts['TP.NONCOMBATANT CONTROL STATION'] = [iconParts['TP.SEA SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,text:'NC'}];
	iconParts['TP.SUB SURFACE CONTROL'] = [{type:'path',fill:false,d:'m 30,140 140,0'},{type:'path',fill:false,strokedasharray:'12,4',d:'m 30,60 140,0'}];
	iconParts['TP.SUB SURFACE CONTROL STATION'] = [iconParts['TP.SUB SURFACE CONTROL'],{type:'circle',cx:100,cy:100,r:15}];
	iconParts['TP.(UUV) CONTROL STATION'] = [iconParts['TP.SUB SURFACE CONTROL'],{type:'path',stroke:false,d:'m 100,115 45,-20 0,-15 -45,20 -45,-20 0,15 z'}];
	iconParts['TP.(UUV)'] = [iconParts['TP.SUB SURFACE CONTROL'],{type:'path',stroke:false,d:'m 55,100 45,20 45,-20 0,15 -45,20 -45,-20 z'}];
	iconParts['TP.UUV - ASW CONTROL STATION'] = [iconParts['TP.(UUV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'ASW'}];
	iconParts['TP.UUV - SUW CONTROL STATION'] = [iconParts['TP.(UUV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'SUW'}];
	iconParts['TP.UUV - MIW CONTROL STATION'] = [iconParts['TP.(UUV)'],{type:'text',stroke:false,textanchor:"middle",x:100,y:95,fontsize:40,text:'MIW'}];
	iconParts['TP.SUBMARINE CONTROL STATION'] = [iconParts['TP.SUB SURFACE CONTROL'],{type:'text',stroke:false,textanchor:"middle",x:100,y:130,fontsize:35,text:'SS'},{type:'path',d:'m 75,95 0,-20 50,0 0,20 z m 25,-30 0,40'}];
	iconParts['TP.ASW SUBMARINE CONTROL STATION'] = [iconParts['TP.SUB SURFACE CONTROL'],{type:'path',d:'m 68.75,105 -12.5,12.5 12.5,12.5 62.5,0 12.5,-12.5 -12.5,-12.5 z M 75,95 l 0,-20 50,0 0,20 z m 25,-30 0,40'}];


	iconParts['TP.AIR CONTROL POINT (ACP)'] = [{type:'circle',fill:false,cx:100,cy:100,r:50},{type:'text',stroke:false,textanchor:"middle",x:100,y:90,fontsize:30,text:'ACP'}];
	iconParts['TP.COMMUNICATIONS CHECKPOINT'] = [{type:'circle',fill:false,cx:100,cy:100,r:50},{type:'text',stroke:false,textanchor:"middle",x:100,y:90,fontsize:30,text:'CCP'}];
	iconParts['TP.PULL-UP POINT'] = [{type:'circle',fill:false,cx:100,cy:100,r:50},{type:'text',stroke:false,textanchor:"start",x:160,y:115,fontsize:40,text:'PUP'},{type:'path',fill:false,d:'m 65,80 0,40 70,-40 0,40 z'}];
	iconParts['TP.DOWNED AIRCREW PICKUP POINT'] = [iconParts['TP.ACTION POINT'],{type:'circle',cx:100,cy:-35,r:12},{type:'path',fill:false,d:'m 75,35 50,0 m -25,-45 0,45 m -30,-75 30,30 30,-30'}];

	iconParts['TP.DUMMY MINEFIELD'] = [{type:'path',fill:false,d:'M 75,100 A 10,10 0 0 1 65,110 10,10 0 0 1 55,100 10,10 0 0 1 65,90 10,10 0 0 1 75,100 Z m 70,0 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 10,10 0 0 1 10,-10 10,10 0 0 1 10,10 z m -35,0 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 10,10 0 0 1 10,-10 10,10 0 0 1 10,10 z m -70,-40 0,80 120,0 0,-80 z'},{type:'path',fill:false,strokedasharray:'15,10',d:'M 160,60 100,-5 M 40,60 100,-5'}];


	iconParts['TP.TARGET REFERENCE'] = {type:'path',fill:false,d:'m 50,100 100,0 m -50,-50 0,100'};
	iconParts['TP.OBSERVATION POST/OUTPOST'] = {type:'path',fill:false,d:'m 100,45 47.6,82.5 -95.2,0 z'};
	iconParts['TP.COMBAT OUTPOST'] = {type:'path',fill:false,d:'m 140,140 0,-12.5 m -16,12.5 0,-12.5 m -16,12.5 0,-12.5 m -48.0001,12.5 3e-4,-12.5 m 15.9993,12.5 4e-4,-12.501 m 16,12.501 3e-4,-12.5 m -46.43,-12.493 10.8256,6.25 m -2.8256,-20.107 10.8256,6.251 m -2.8257,-20.1071 10.8257,6.2506 m 13.1743,-47.8198 10.8257,6.2506 m -18.8253,7.6056 10.8256,6.2506 m -18.826,7.606 10.8257,6.2506 M 114.43,45.725 l -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 34.826,35.3192 -10.826,6.25 m 2.826,-20.106 -10.826,6.25 m 2.826,-20.1068 -10.826,6.25 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z'};
	iconParts['TP.OBSERVATION POST/RECONNAISSANCE'] = {type:'path',fill:false,d:'M 52.3687,127.5 123.816,86.2499 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z'};
	iconParts['TP.FORWARD OBSERVER POSITION'] = [iconParts['TP.OBSERVATION POST/RECONNAISSANCE'],{type:'path',d:'m 115,100 a 15,15 0 0 1 -15,15 15,15 0 0 1 -15,-15 15,15 0 0 1 15,-15 15,15 0 0 1 15,15 z'}];
	iconParts['TP.SENSOR OUTPOST'] = {type:'path',fill:false,d:'m 61.1738,112.25 23.6601,0 m 30.3321,0 23.66,0 M 80,105 l 10,15 20,0 10,-15 z m 19.9998,-60 47.6312,82.5 -95.2623,0 z'};
	iconParts['TP.CBRN OBSERVATION POST'] = [{type:'path',fill:false,d:'m 99.9998,45 47.6312,82.5 -95.2623,0 z M 88,119 c 2.1824,-13.288 7.7157,-24.22 22,-29 m 1.829,29 C 109.664,105.712 104.173,94.78 90,90 M 52.3687,127.5 123.816,86.2499'},{type:'path',d:'m 91,92 a 5,5 0 0 1 -5,5 5,5 0 0 1 -5,-5 5,5 0 0 1 5,-5 5,5 0 0 1 5,5 z m 28.011,0 A 5.01149,5.01149 0 0 1 114,97.012 5.01149,5.01149 0 0 1 108.989,92 5.01149,5.01149 0 0 1 114,86.9885 5.01149,5.01149 0 0 1 119.011,92 Z'}];




	iconParts['TP.POINT OF DEPARTURE'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'PD'}];

	iconParts['TP.FIXED AND PREFABRICATED'] = {type:'path',d:'m 60,100 40,-65 40,65 z'};
	iconParts['TP.TETRAHEDRONS'] = {type:'path',fill:false,d:'m 60,100 40,-65 40,65'};
	iconParts['TP.TETRAHEDRONS MOVABLE'] = {type:'path',fill:false,d:'m 60,100 40,-65 40,65 z'};
	iconParts['TP.BOOBY TRAP'] = {type:'path',fill:false,d:'M 77.2413,87.9311 100,50 122.781,87.9687 M 130,100 A 30,18.541 0 0 1 100,118.541 30,18.541 0 0 1 70,100 30,18.541 0 0 1 100,81.459 30,18.541 0 0 1 130,100 Z'};
	iconParts['TP.UNSPECIFIED MINE'] = {type:'path',fill:false,d:'M 129,100 A 29,29 0 0 1 100,129 29,29 0 0 1 71,100 29,29 0 0 1 100,71 29,29 0 0 1 129,100 Z'};
	iconParts['TP.ANTITANK MINE (AT)'] = {type:'path',d:'M 129,100 A 29,29 0 0 1 100,129 29,29 0 0 1 71,100 29,29 0 0 1 100,71 29,29 0 0 1 129,100 Z'};
	iconParts['TP.(AT) ANTIHANDLING DEVICE'] = [iconParts['TP.ANTITANK MINE (AT)'],{type:'path',fill:false,d:'m 100,130 0,65 15,-15'}];
	iconParts['TP.(AT) DIRECTIONAL'] = [iconParts['TP.ANTITANK MINE (AT)'],{type:'path',fill:false,strokedasharray:'5,5',d:'m 100,70 0,-60'},{type:'path',fill:false,d:'m 90,20 10,-10 10,10'}];
	iconParts['TP.ANTIPERSONNEL (AP) MINES'] = [iconParts['TP.ANTITANK MINE (AT)'],{type:'path',fill:false,d:'m 50,50 29.5,29.5 m 41,0 L 150,50'}];
	iconParts['TP.WIDE AREA MINES'] = [iconParts['TP.ANTITANK MINE (AT)'],{type:'path',fill:false,d:'m 50,110 25,40 12,-24 M 113,126 125,150 150,110'}];
	iconParts['TP.MINEFIELDS STATIC'] = {type:'path',fill:false,d:'m 40,65 0,70 120,0 0,-70 z m 70,35 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z'};
	//This is to solve anticipated minefields... Don't we just love special cases...
	if(properties.notpresent)iconParts['TP.MINEFIELDS STATIC'] = [{type:'path',fill:false,strokedasharray:'15,15',d:'m 40,65 0,70 120,0 0,-70 z'},{type:'path',fill:false,d:'m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z'}];
	iconParts['TP.TOWER LOW'] = [{type:'circle',stroke:false,cx:100,cy:100,r:7},{type:'path',fill:false,strokewidth:8,d:'m 75,105 25,-65 25,65'}];
	iconParts['TP.TOWER HIGH'] = [{type:'circle',stroke:false,cx:100,cy:100,r:7},{type:'path',fill:false,strokewidth:8,d:'m 100,40 c 2.358,31.6754 7.162,59.2531 25,64.999 M 100,40 c -2.358,31.6754 -7.1624,59.2531 -25,65'}];
	iconParts['TP.ENGINEER REGULATING POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'ERP'}];
	iconParts['TP.EARTHWORK/FORTIFICATION'] = {type:'path',d:'m 65,65 0,70 70,0 0,-70 -70,0z'};
	iconParts['TP.FORT'] = {type:'path',fill:false,d:'m 135,65 15,-15 m -15,85 15,15 M 65,135 50,150 m 15,-85 0,70 70,0 0,-70 -70,0 -15,-15'};
	iconParts['TP.SURFACE SHELTER'] = {type:'path',d:'m 135,135 15,0 m -100,0 15,0 m 0,-70 0,70 70,0 0,-70 -70,0'};
	iconParts['TP.UNDERGROUND SHELTER'] = {type:'path',d:'m 135,65 15,0 m -100,0 15,0 m 0,70 0,-70 70,0 0,70 -70,0'};
	iconParts['TP.NUCLEAR DETONATIONS GROUND ZERO'] = [{type:'path',fill:(!monoColor?'rgb(255,255,0)':false),d:'m 85,25 0,75 30,0 0,-75 m -50,0 c 0,-50 70,-50 70,0 z'},{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:35,text:'N'}];
	iconParts['TP.NUCLEAR FALLOUT PRODUCING'] = [{type:'path',fill:false,d:'m 120,85 -15,15 m -25,0 40,-35 M 80,80 120,40 M 80,55 115,25 M 80,40 95,25 m -40,0 c 0,-60 90,-60 90,0 z m 25,0 0,75 40,0 0,-75'},{type:'text',stroke:false,textanchor:"middle",x:100,y:75,fontsize:35,text:'N'}];
	iconParts['TP.RELEASE EVENTS BIOLOGICAL'] = [{type:'path',fill:(!monoColor?'rgb(255,255,0)':false),d:'m 85,-15 0,60 -25,55 80,0 -25,-55 0,-60 z'},{type:'text',stroke:false,textanchor:"middle",x:100,y:85,fontsize:35,text:'B'},{type:'text',stroke:false,textanchor:"end",x:50,y:60,fontsize:35,text:'BIO'}];
	iconParts['TP.RELEASE EVENTS CHEMICAL'] = [{type:'path',fill:(!monoColor?'rgb(255,255,0)':false),d:'M 85 -15 L 85 44.0625 A 30 30 0 0 0 70 70 A 30 30 0 0 0 100 100 A 30 30 0 0 0 130 70 A 30 30 0 0 0 115 44.0508 L 115 -15 L 85 -15 z'},{type:'text',stroke:false,textanchor:"middle",x:100,y:80,fontsize:35,text:'C'},{type:'text',stroke:false,textanchor:"end",x:50,y:60,fontsize:35,text:'CML'}];
	iconParts['TP.DECON SITE/POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'}];
	iconParts['TP.ALTERNATE DECON SITE/POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'ALT'}];
	iconParts['TP.DECON SITE/POINT (TROOPS)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'T'}];
	iconParts['TP.DECON SITE/POINT (EQUIPMENT)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'E'}];
	iconParts['TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'E/T'}];
	iconParts['TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'O'}];
	iconParts['TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'TH'}];
	iconParts['TP.POINT/SINGLE TARGET'] = {type:'path',fill:false,d:'m 50,100 100,0 m -50,-50 0,100'};
	iconParts['TP.NUCLEAR TARGET'] = {type:'path',fill:false,d:'m 90,100 -40,0 m 50,10 0,40 m 10,-50 40,0 m -50,-10 0,-40 m 2.5,50 a 2.5,2.5 0 0 1 -2.5,2.5 2.5,2.5 0 0 1 -2.5,-2.5 2.5,2.5 0 0 1 2.5,-2.5 2.5,2.5 0 0 1 2.5,2.5 z'};
	iconParts['TP.FIRE SUPPORT STATION'] = {type:'path',fill:false,d:'M 50,50 150,150 M 50,150 150,50'};
	iconParts['TP.SURVEY CONTROL POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'SCP'}];
	iconParts['TP.FIRING POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'FP'}];
	iconParts['TP.RELOAD POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'RLP'}];
	iconParts['TP.HIDE POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'HP'}];
	iconParts['TP.LAUNCH POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'LP'}];
	iconParts['TP.AMBULANCE EXCHANGE POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'AXP'}];
	iconParts['TP.CANNIBALIZATION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'CAN'}];
	iconParts['TP.CASUALTY COLLECTION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'CCP'}];
	iconParts['TP.CIVILIAN COLLECTION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'CIV'}];
	iconParts['TP.DETAINEE COLLECTION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DET'}];
	iconParts['TP.EPW COLLECTION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'EPW'}];
	iconParts['TP.LOGISTICS RELEASE POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'LRP'}];
	iconParts['TP.MAINTENANCE COLLECTION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'MCP'}];
	iconParts['TP.REARM, REFUEL AND RESUPPLY POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'R3P'}];
	iconParts['TP.REFUEL ON THE MOVE POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'ROM'}];
	iconParts['TP.TRAFFIC CONTROL POST'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'TCP'}];
	iconParts['TP.TRAILER TRANSFER POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'TTP'}];
	iconParts['TP.UNIT MAINTENANCE COLLECTION POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:25,text:'UMCP'}];
	iconParts['TP.SUPPLY POINT'] = {type:'path',fill:false,d:'m 60,30 80,0 m -80,15 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z'};
	iconParts['TP.SP CLASS I'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 115,-50 c -45,5 -45,65 0,70 -20,-25 -20,-50 0,-70 z'}];
	iconParts['TP.SP CLASS II'] = [iconParts['TP.SUPPLY POINT'],{type:'path',stroke:false,d:'m 101.143,3.91602 q 3.662,-0.26368 4.746,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.746,-1.1426 l 0,-1.1133 17.753,0 0,1.1133 q -3.662,0.1758 -4.746,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.746,1.08399 l 0,1.08398 -17.753,0 0,-1.08398 z m 8.877,-38.61332 0,0 z M 81.1035,3.91602 q 3.6621,-0.26368 4.7461,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.7461,-1.1426 l 0,-1.1133 17.7539,0 0,1.1133 q -3.6621,0.1758 -4.7461,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.7461,1.08399 l 0,1.08398 -17.7539,0 0,-1.08398 z m 8.877,-38.61332 0,0 z'}];
	iconParts['TP.SP CLASS III'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 100,20 0,-30 -20,-40 40,0 -20,40'}];
	iconParts['TP.SP CLASS IV'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 100,-40 0,20 m -25,10 0,-30 50,0 0,30'}];
	iconParts['TP.SP CLASS V'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 80,15 0,-50 c 0,-20 40,-20 40,0 l 0,50 m -50,0 60,0'}];
	iconParts['TP.SP CLASS VI'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 75,-20 50,0 m -25,15 15,25 m -15,-50 0,25 -20,25 m 30,-60 a 10,10 0 0 1 -10,10 10,10 0 0 1 -10,-10 10,10 0 0 1 10,-10 10,10 0 0 1 10,10 z'}];
	iconParts['TP.SP CLASS VII'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 85,-25 c 10,-10 20,-10 30,0'},{type:'path',d:'M 129.6,-20 A 9.59984,9.59984 0 0 1 120,-10.4002 9.59984,9.59984 0 0 1 110.4,-20 9.59984,9.59984 0 0 1 120,-29.5998 9.59984,9.59984 0 0 1 129.6,-20 Z m -40.4886,0 A 9.11138,9.11138 0 0 1 80,-10.8886 9.11138,9.11138 0 0 1 70.8886,-20 9.11138,9.11138 0 0 1 80,-29.1114 9.11138,9.11138 0 0 1 89.1114,-20 Z'}];
	iconParts['TP.SP CLASS VIII'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 60,-15 80,0 m -40,-45 0,90'}];
	iconParts['TP.SP CLASS IX'] = [iconParts['TP.SUPPLY POINT'],{type:'path',fill:false,d:'m 121.213,-36.2132 -7.08,7.0802 M 85.8669,-0.866982 78.7868,6.2132 m 0,-42.4264 7.0801,7.0802 m 28.2661,28.266018 7.08,7.080182 M 100,-45 l 0,10 m 0,40 0,10 m -30,-30 10,0 m 40,0 10,0 m -10,0 a 20,20 0 0 1 -20,20 20,20 0 0 1 -20,-20 20,20 0 0 1 20,-20 20,20 0 0 1 20,20 z'}];
	iconParts['TP.SP CLASS X'] = [iconParts['TP.SUPPLY POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-10,fontsize:40,text:'CA'}];
	iconParts['TP.AMMUNITION SUPPLY POINT (ASP)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'ASP'}];
	iconParts['TP.AMMUNITION TRANSFER POINT (ATP)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'CIV'}];
	iconParts['TP.DITCHED AIRCRAFT'] = {type:'path',d:'m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z'};
	iconParts['TP.PERSON IN WATER'] = {type:'path',d:'m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15'};
	iconParts['TP.DISTRESSED VESSEL'] = {type:'path',d:'m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15'};
	iconParts['TP.SEA MINELIKE'] = {type:'path',d:'M 75,75 55,55 m 45,-15 0,25 m 25,10 20,-20 m -80,60 0,-30 20,-20 30,0 20,20 0,30 -20,20 -30,0 z'};
	iconParts['TP.ICEBERG'] = {type:'path',d:'m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0'};
	iconParts['TP.OIL RIG/PLATFORM'] = [{type:'path',d:'m 55,100 0,-50 m 75,50 0,40 m 20,-40 0,40 m -115,0 0,-40 130,0',fill:false },{type:'path',d:'m 55,100 0,-15 25,0 0,15 z'}];
	iconParts['TP.BOTTOM RETURN'] = {type:'path',d:'m 50,100 15,-35 15,30 20,-55 20,55 15,-35 15,40 z'};
	iconParts['TP.INSTALLATION/MANMADE'] = {type:'path',fill:false,d:'m 50,100 15,-35 15,30 20,-55 20,55 15,-35 15,40 z'};
	iconParts['TP.WRECK, NON DANGEROUS'] = {type:'path',fill:false,d:'m 135,85 0,30 m -85,-15 100,0 m -85,-15 0,30 m 35,-40 0,50'};
	iconParts['TP.WRECK, DANGEROUS'] = [iconParts['TP.WRECK, NON DANGEROUS'],{type:'path',strokedasharray:'5,5',fill:false,d:'M 156.547,100 A 56.2017,29.6618 0 0 1 100.345,129.662 56.2017,29.6618 0 0 1 44.1433,100 56.2017,29.6618 0 0 1 100.345,70.3382 56.2017,29.6618 0 0 1 156.547,100 Z'},];
	iconParts['TP.MARINE LIFE'] = {type:'path',stroke:false,d:'m 132,75 0,50 83,-37.5 0,25 L 132,75 m -32,25 25.5,-25 0,50 z'};
	iconParts['TP.SEA ANOMALY'] = {type:'path',fill:false,d:'M 150,80 130,35 100,100 70,35 50,80 m 0,20 20,-45 30,65 30,-65 20,45'};
	iconParts['TP.FIX ACOUSTIC'] = {type:'path',fill:false,d:'M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100'};
	iconParts['TP.FIX ELECTRO-MAGNETIC'] = {type:'path',fill:false,d:'m 50,90 15,20 5,-20 15,20 5,-20 20,20 5,-20 15,20 5,-20 15,20 M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100'};
	iconParts['TP.FIX ELECTRO-OPTICAL'] = {type:'path',fill:false,d:'M 150,100 A 50,12.5 0 0 1 100,112.5 50,12.5 0 0 1 50,100 50,12.5 0 0 1 100,87.5 50,12.5 0 0 1 150,100 Z M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100'};
}
