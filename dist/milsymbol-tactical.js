/* =======================================================================================

Copyright (c) 2015 Måns Beckman  http://www.spatialillusions.com
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

======================================================================================= 

This is an extension to milsymbol that provides support for tactical point symbols. 
Simply load this file after milsymbol has been loaded and it will extend milsymbol 
with the needed symbol codes and graphics.

Tactcial points will only support MIL-STD-2525C untill MIL-STD-2525D change 1 and 
APP6-D are released.

*/



MS.addIconParts(
function (iconParts, properties, colors, STD2525, monoColor, alternateMedal){
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


	iconParts['TP.ACTION POINT'] = [{type:'path',fill:false,d:'m 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z'}];
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



	iconParts['TP.POINT OF DEPARTURE'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'PD'}];


	iconParts['TP.ENGINEER REGULATING POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'ERP'}];



	iconParts['TP.DECON SITE/POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'}];
	iconParts['TP.ALTERNATE DECON SITE/POINT'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'ALT'}];
	iconParts['TP.DECON SITE/POINT (TROOPS)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'T'}];
	iconParts['TP.DECON SITE/POINT (EQUIPMENT)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'E'}];
	iconParts['TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'E/T'}];
	iconParts['TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'O'}];
	iconParts['TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)'] = [iconParts['TP.ACTION POINT'],{type:'text',stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,text:'DCN'},{type:'text',stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,text:'TH'}];



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


}
);


MS.addLetterSIDCicons(
function tacticalPoints(sidc,bbox,icn,_STD2525){
	// Tactical Point Symbols =========================================================================
	sidc['G-T-D-----'] = icn['TP.DESTROY'];//TACGRP.TSK.DSTY
	bbox['G-T-D-----'] = {x1:0,x2:200,y1:40,y2:160};
	sidc['G-T-I-----'] = icn['TP.INTERDICT'];//TACGRP.TSK.ITDT
	bbox['G-T-I-----'] = {x1:0,x2:200,y1:40,y2:160};
	sidc['G-T-N-----'] = icn['TP.NEUTRALIZE'];//TACGRP.TSK.NEUT
	bbox['G-T-N-----'] = {x1:0,x2:200,y1:40,y2:160};
	sidc['G-G-GPUUD-'] = icn['TP.DATUM'];//TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
	bbox['G-G-GPUUD-'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPUUB-'] = icn['TP.BRIEF CONTACT'];//TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
	bbox['G-G-GPUUB-'] = {x1:50,x2:150,y1:0,y2:100};
	sidc['G-G-GPUUL-'] = icn['TP.LOST CONTACT'];//TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
	bbox['G-G-GPUUL-'] = {x1:50,x2:150,y1:0,y2:100};
	sidc['G-G-GPUUS-'] = icn['TP.SINKER'];//TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
	bbox['G-G-GPUUS-'] = {x1:50,x2:150,y1:0,y2:100};
	sidc['G-G-GPUY--'] = icn['TP.SONOBUOY'];//TACGRP.C2GM.GNL.PNT.USW.SNBY
	bbox['G-G-GPUY--'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYP-'] = icn['TP.SONOBUOY PATTERN CENTER'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
	bbox['G-G-GPUYP-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYD-'] = icn['TP.SONOBUOY DIFAR'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
	bbox['G-G-GPUYD-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYL-'] = icn['TP.SONOBUOY LOFAR'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
	bbox['G-G-GPUYL-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYC-'] = icn['TP.SONOBUOY CASS'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
	bbox['G-G-GPUYC-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYS-'] = icn['TP.SONOBUOY DICASS'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
	bbox['G-G-GPUYS-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYB-'] = icn['TP.SONOBUOY BT'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
	bbox['G-G-GPUYB-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYA-'] = icn['TP.SONOBUOY ANM'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
	bbox['G-G-GPUYA-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYV-'] = icn['TP.SONOBUOY VLAD'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
	bbox['G-G-GPUYV-'] = {x1:60,x2:140,y1:-10,y2:160};	
	sidc['G-G-GPUYT-'] = icn['TP.SONOBUOY ATAC'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
	bbox['G-G-GPUYT-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYR-'] = icn['TP.SONOBUOY RO'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
	bbox['G-G-GPUYR-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYK-'] = icn['TP.SONOBUOY KINGPIN'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
	bbox['G-G-GPUYK-'] = {x1:60,x2:140,y1:-10,y2:160};
	sidc['G-G-GPUYX-'] = icn['TP.SONOBUOY EXPIRED'];//TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
	bbox['G-G-GPUYX-'] = {x1:40,x2:160,y1:-10,y2:160};
	sidc['G-G-GPUS--'] = icn['TP.SEARCH'];//TACGRP.C2GM.GNL.PNT.USW.SRH
	bbox['G-G-GPUS--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPUSA-'] = icn['TP.SEARCH AREA'];//TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
	bbox['G-G-GPUSA-'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPUSD-'] = icn['TP.DIP POSITION'];//TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
	bbox['G-G-GPUSD-'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPUSC-'] = icn['TP.SEARCH CENTER'];//TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
	bbox['G-G-GPUSC-'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPR---'] = icn['TP.REFERENCE POINT'];//TACGRP.C2GM.GNL.PNT.REFPNT
	bbox['G-G-GPR---'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRN--'] = icn['TP.NAVIGATIONAL REFERENCE'];//TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
	bbox['G-G-GPRN--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRS--'] = icn['TP.SPECIAL POINT'];//TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
	bbox['G-G-GPRS--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRD--'] = icn['TP.DLRP'];//TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
	bbox['G-G-GPRD--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRP--'] = icn['TP.POINT OF INTENDED MOVEMENT'];//TACGRP.C2GM.GNL.PNT.REFPNT.PIM
	bbox['G-G-GPRP--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRM--'] = icn['TP.MARSHALL POINT'];//TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
	bbox['G-G-GPRM--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRW--'] = icn['TP.REFERENCE POINT WAYPOINT'];//TACGRP.C2GM.GNL.PNT.REFPNT.WAP
	bbox['G-G-GPRW--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRC--'] = icn['TP.CORRIDOR TAB'];//TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
	bbox['G-G-GPRC--'] = {x1:40,x2:160,y1:40,y2:160};
	sidc['G-G-GPRI--'] = icn['TP.POINT OF INTEREST'];//TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
	bbox['G-G-GPRI--'] = {x1:50,x2:150,y1:-25};
	sidc['G-G-GPWA--'] = icn['TP.AIM POINT'];//TACGRP.C2GM.GNL.PNT.WPN.AIMPNT
	bbox['G-G-GPWA--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPWD--'] = icn['TP.DROP POINT'];//TACGRP.C2GM.GNL.PNT.WPN.DRPPNT
	bbox['G-G-GPWD--'] = {x1:50,x2:150,y1:50,y2:120};	
	sidc['G-G-GPWE--'] = icn['TP.ENTRY POINT'];//TACGRP.C2GM.GNL.PNT.WPN.ENTPNT
	bbox['G-G-GPWE--'] = {x1:50,x2:150,y1:50};
	sidc['G-G-GPWG--'] = icn['TP.GROUND ZERO'];//TACGRP.C2GM.GNL.PNT.WPN.GRDZRO
	bbox['G-G-GPWG--'] = {x1:50,x2:150,y1:30};
	sidc['G-G-GPWM--'] = icn['TP.MSL DETECT POINT'];//TACGRP.C2GM.GNL.PNT.WPN.MSLPNT
	bbox['G-G-GPWM--'] = {x1:50,x2:150,y1:30};
	sidc['G-G-GPWI--'] = icn['TP.IMPACT POINT'];//TACGRP.C2GM.GNL.PNT.WPN.IMTPNT
	bbox['G-G-GPWI--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPWP--'] = icn['TP.PREDICTED IMPACT POINT'];//TACGRP.C2GM.GNL.PNT.WPN.PIPNT
	bbox['G-G-GPWP--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPF---'] = icn['TP.FORMATION'];//TACGRP.C2GM.GNL.PNT.FRMN
	bbox['G-G-GPF---'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPH---'] = icn['TP.HARBOR'];//TACGRP.C2GM.GNL.PNT.HBR
	bbox['G-G-GPH---'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPHQ--'] = icn['TP.HARBOR POINT Q'];//TACGRP.C2GM.GNL.PNT.HBR.PNTQ
	bbox['G-G-GPHQ--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPHA--'] = icn['TP.HARBOR POINT A'];//TACGRP.C2GM.GNL.PNT.HBR.PNTA
	bbox['G-G-GPHA--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPHY--'] = icn['TP.HARBOR POINT Y'];//TACGRP.C2GM.GNL.PNT.HBR.PNTY
	bbox['G-G-GPHY--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPHX--'] = icn['TP.HARBOR POINT X'];//TACGRP.C2GM.GNL.PNT.HBR.PNTX
	bbox['G-G-GPHX--'] = {x1:50,x2:150,y1:50,y2:150};

	sidc['G-G-GPO---'] = icn['TP.ROUTE'];//TACGRP.C2GM.GNL.PNT.RTE
	bbox['G-G-GPO---'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPOZ--'] = icn['TP.ROUTE RENDEZVOUS'];//TACGRP.C2GM.GNL.PNT.RTE.RDV
	bbox['G-G-GPOZ--'] = {x1:30,x2:170,y1:60,y2:170};
	sidc['G-G-GPOD--'] = icn['TP.ROUTE DIVERSIONS'];//TACGRP.C2GM.GNL.PNT.RTE.DVSN
	bbox['G-G-GPOD--'] = {x1:30,x2:170,y1:60,y2:170};
	sidc['G-G-GPOW--'] = icn['TP.ROUTE WAYPOINT'];//TACGRP.C2GM.GNL.PNT.RTE.WAP
	bbox['G-G-GPOW--'] = {x1:30,x2:170,y1:60,y2:170};
	sidc['G-G-GPOP--'] = icn['TP.ROUTE PIM'];//TACGRP.C2GM.GNL.PNT.RTE.PIM
	bbox['G-G-GPOP--'] = {x1:30,x2:170,y1:60,y2:170};
	sidc['G-G-GPOR--'] = icn['TP.ROUTE POINT R'];//TACGRP.C2GM.GNL.PNT.RTE.PNTR
	bbox['G-G-GPOR--'] = {x1:30,x2:170,y1:60,y2:170};
	sidc['G-G-GPA---'] = icn['TP.AIR CONTROL POINT'];//TACGRP.C2GM.GNL.PNT.ACTL
	bbox['G-G-GPA---'] = {x1:60,x2:140,y1:40,y2:160};
	sidc['G-G-GPAP--'] = icn['TP.COMBAT AIR PATROL (CAP)'];//TACGRP.C2GM.GNL.PNT.ACTL.CAP
	bbox['G-G-GPAP--'] = {x1:60,x2:140,y1:40,y2:160};
	sidc['G-G-GPAW--'] = icn['TP.AIRBORNE EARLY WARNING (AEW)'];//TACGRP.C2GM.GNL.PNT.ACTL.ABNEW
	bbox['G-G-GPAW--'] = {x1:60,x2:140,y1:40,y2:160};
	sidc['G-G-GPAK--'] = icn['TP.TANKING'];//TACGRP.C2GM.GNL.PNT.ACTL.TAK
	bbox['G-G-GPAK--'] = {x1:60,x2:140,y1:40,y2:160};
	sidc['G-G-GPAA--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ASBWF
	sidc['G-G-GPAH--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ASBWR
	sidc['G-G-GPAB--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.SUWF
	sidc['G-G-GPAC--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.SUWR
	sidc['G-G-GPAD--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.MIWF
	sidc['G-G-GPAE--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.MIWR
	sidc['G-G-GPAS--'] = icn['TP.STRIKE IP'];//TACGRP.C2GM.GNL.PNT.ACTL.SKEIP
	bbox['G-G-GPAS--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAT--'] = icn['TP.TACAN'];//TACGRP.C2GM.GNL.PNT.ACTL.TCN
	bbox['G-G-GPAT--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAO--'] = icn['TP.TOMCAT'];//TACGRP.C2GM.GNL.PNT.ACTL.TMC
	bbox['G-G-GPAO--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAR--'] = icn['TP.RESCUE'];//TACGRP.C2GM.GNL.PNT.ACTL.RSC
	bbox['G-G-GPAR--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAL--'] = icn['TP.REPLENISH'];//TACGRP.C2GM.GNL.PNT.ACTL.RPH
	bbox['G-G-GPAL--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAF--'] = icn['TP.UNMANNED AERIAL SYSTEM'];//TACGRP.C2GM.GNL.PNT.ACTL.UA
	bbox['G-G-GPAF--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAG--'] = icn['TP.VTUA'];//TACGRP.C2GM.GNL.PNT.ACTL.VTUA
	bbox['G-G-GPAG--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAI--'] = icn['TP.ORBIT'];//TACGRP.C2GM.GNL.PNT.ACTL.ORB
	bbox['G-G-GPAI--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAJ--'] = icn['TP.ORBIT - FIGURE EIGHT'];//TACGRP.C2GM.GNL.PNT.ACTL.ORBF8
	bbox['G-G-GPAJ--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAM--'] = icn['TP.ORBIT - RACE TRACK'];//TACGRP.C2GM.GNL.PNT.ACTL.ORBRT
	bbox['G-G-GPAM--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPAN--'] = icn['TP.ORBIT - RANDOM, CLOSED'];//TACGRP.C2GM.GNL.PNT.ACTL.ORBRD
	bbox['G-G-GPAN--'] = {x1:60,x2:140,y1:30,y2:170};
	sidc['G-G-GPP---'] = icn['TP.ACTION POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT
	bbox['G-G-GPP---'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPK--'] = icn['TP.ACTION CHECK POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.CHKPNT
	bbox['G-G-GPPK--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPC--'] = icn['TP.CONTACT POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
	bbox['G-G-GPPC--'] = {x1:55,x2:145,y1:-10};
	sidc['G-G-GPPO--'] = icn['TP.COORDINATION POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
	bbox['G-G-GPPO--'] = {x1:50,x2:150,y1:50,y2:150};
	sidc['G-G-GPPD--'] = icn['TP.DECISION POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
	bbox['G-G-GPPD--'] = {x1:30,x2:170,y1:25,y2:160};
	sidc['G-G-GPPL--'] = icn['TP.ACTION LINKUP POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.LNKUPT
	bbox['G-G-GPPL--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPP--'] = icn['TP.ACTION PASSAGE POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.PSSPNT
	bbox['G-G-GPPP--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPR--'] = icn['TP.ACTION RALLY POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.RAYPNT
	bbox['G-G-GPPR--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPE--'] = icn['TP.ACTION RELEASE POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.RELPNT
	bbox['G-G-GPPE--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPS--'] = icn['TP.ACTION START POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.STRPNT
	bbox['G-G-GPPS--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPA--'] = icn['TP.ACTION AMNESTY POINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.AMNPNT
	bbox['G-G-GPPA--'] = {x1:60,x2:140,y1:-60};
	sidc['G-G-GPPW--'] = icn['TP.WAYPOINT'];//TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
	bbox['G-G-GPPW--'] = {x1:60,x2:140,y1:60,y2:140};
	sidc['G-G-GPC---'] = icn['TP.SEA SURFACE CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL
	bbox['G-G-GPC---'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCU--'] = icn['TP.(USV) CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.USV
	bbox['G-G-GPCU--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCUR-'] = icn['TP.(RMV) USV CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV
	bbox['G-G-GPCUR-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCUA-'] = icn['TP.USV - ASW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW
	bbox['G-G-GPCUA-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCUS-'] = icn['TP.USV - SUW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW
	bbox['G-G-GPCUS-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCUM-'] = icn['TP.USV - MIW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW
	bbox['G-G-GPCUM-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCA--'] = icn['TP.ASW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.ASW
	bbox['G-G-GPCA--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCS--'] = icn['TP.SUW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.SUW
	bbox['G-G-GPCS--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCM--'] = icn['TP.MIW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.MIW
	bbox['G-G-GPCM--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCP--'] = icn['TP.PICKET CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.PKT
	bbox['G-G-GPCP--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCR--'] = icn['TP.RENDEZVOUS CONTROL POINT'];//TACGRP.C2GM.GNL.PNT.SCTL.RDV
	bbox['G-G-GPCR--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCC--'] = icn['TP.RESCUE CONTROL POINT'];//TACGRP.C2GM.GNL.PNT.SCTL.RSC
	bbox['G-G-GPCC--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCE--'] = icn['TP.REPLENISHMENT CONTROL POINT'];//TACGRP.C2GM.GNL.PNT.SCTL.REP
	bbox['G-G-GPCE--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPCN--'] = icn['TP.NONCOMBATANT CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.SCTL.NCBTT
	bbox['G-G-GPCN--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPB---'] = icn['TP.SUB SURFACE CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.UCTL
	bbox['G-G-GPB---'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPBU--'] = icn['TP.(UUV) CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.UCTL.UUV
	bbox['G-G-GPBU--'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPBUA-'] = icn['TP.UUV - ASW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW
	bbox['G-G-GPBUA-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPBUS-'] = icn['TP.UUV - SUW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW
	bbox['G-G-GPBUS-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPBUM-'] = icn['TP.UUV - MIW CONTROL STATION'];//TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW
	bbox['G-G-GPBUM-'] = {x1:30,x2:170,y1:60,y2:140};
	sidc['G-G-GPBS--'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.SBSTN
	sidc['G-G-GPBSA-'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW
	sidc['G-G-APP---'] = [];//TACGRP.C2GM.AVN.PNT.ACP
	sidc['G-G-APC---'] = [];//TACGRP.C2GM.AVN.PNT.COMMCP
	sidc['G-G-APU---'] = [];//TACGRP.C2GM.AVN.PNT.PUP
	sidc['G-G-APD---'] = [];//TACGRP.C2GM.AVN.PNT.DAPP
	sidc['G-G-PN----'] = [];//TACGRP.C2GM.DCPN.DMYMS
	sidc['G-G-DPT---'] = [];//TACGRP.C2GM.DEF.PNT.TGTREF
	sidc['G-G-DPO---'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST
	sidc['G-G-DPOC--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST
	sidc['G-G-DPOR--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.RECON
	sidc['G-G-DPOF--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP
	sidc['G-G-DPOS--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.SOP
	sidc['G-G-DPON--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP
	sidc['G-G-OPP---'] = icn['TP.POINT OF DEPARTURE'];//TACGRP.C2GM.OFF.PNT.PNTD
	bbox['G-G-OPP---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-OAOF--'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD
	sidc['G-M-OAOM--'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM.MVB
	sidc['G-M-OAOP--'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD
	sidc['G-M-OB----'] = [];//TACGRP.MOBSU.OBST.BBY
	sidc['G-M-OMU---'] = [];//TACGRP.MOBSU.OBST.MNE.USPMNE
	sidc['G-M-OMT---'] = [];//TACGRP.MOBSU.OBST.MNE.ATMNE
	sidc['G-M-OMD---'] = [];//TACGRP.MOBSU.OBST.MNE.ATMAHD
	sidc['G-M-OME---'] = [];//TACGRP.MOBSU.OBST.MNE.ATMDIR
	sidc['G-M-OMP---'] = [];//TACGRP.MOBSU.OBST.MNE.APMNE
	sidc['G-M-OMW---'] = [];//TACGRP.MOBSU.OBST.MNE.WAMNE
	sidc['G-M-OFS---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.STC
	sidc['G-M-OHTL--'] = [];//TACGRP.MOBSU.OBST.AVN.TWR.LOW
	sidc['G-M-OHTH--'] = [];//TACGRP.MOBSU.OBST.AVN.TWR.HIGH
	sidc['G-M-BCP---'] = icn['TP.ENGINEER REGULATING POINT'];//TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
	bbox['G-M-BCP---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-SE----'] = [];//TACGRP.MOBSU.SU.ESTOF
	sidc['G-M-SF----'] = [];//TACGRP.MOBSU.SU.FRT
	sidc['G-M-SS----'] = [];//TACGRP.MOBSU.SU.SUFSHL
	sidc['G-M-SU----'] = [];//TACGRP.MOBSU.SU.UGDSHL
	sidc['G-M-NZ----'] = [];//TACGRP.MOBSU.CBRN.NDGZ
	sidc['G-M-NF----'] = [];//TACGRP.MOBSU.CBRN.FAOTP
	sidc['G-M-NEB---'] = [];//TACGRP.MOBSU.CBRN.REEVNT.BIO
	sidc['G-M-NEC---'] = [];//TACGRP.MOBSU.CBRN.REEVNT.CML
	sidc['G-M-NDP---'] = icn['TP.DECON SITE/POINT'];//TACGRP.MOBSU.CBRN.DECONP.USP
	bbox['G-M-NDP---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-NDA---'] = icn['TP.ALTERNATE DECON SITE/POINT'];//TACGRP.MOBSU.CBRN.DECONP.ALTUSP
	bbox['G-M-NDA---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-NDT---'] = icn['TP.DECON SITE/POINT (TROOPS)'];//TACGRP.MOBSU.CBRN.DECONP.TRP
	bbox['G-M-NDT---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-NDE---'] = icn['TP.DECON SITE/POINT (EQUIPMENT)'];//TACGRP.MOBSU.CBRN.DECONP.EQT
	bbox['G-M-NDE---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-NDB---'] = icn['TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)'];//TACGRP.MOBSU.CBRN.DECONP.EQTTRP
	bbox['G-M-NDB---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-NDO---'] = icn['TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)'];//TACGRP.MOBSU.CBRN.DECONP.OPDECN
	bbox['G-M-NDO---'] = {x1:60,x2:140,y1:-60};
	sidc['G-M-NDD---'] = icn['TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)'];//TACGRP.MOBSU.CBRN.DECONP.TRGH
	bbox['G-M-NDD---'] = {x1:60,x2:140,y1:-60};
	sidc['G-F-PTS---'] = [];//TACGRP.FSUPP.PNT.TGT.PTGT
	sidc['G-F-PTN---'] = [];//TACGRP.FSUPP.PNT.TGT.NUCTGT
	sidc['G-F-PCF---'] = [];//TACGRP.FSUPP.PNT.C2PNT.FSS
	sidc['G-F-PCS---'] = icn['TP.SURVEY CONTROL POINT'];//TACGRP.FSUPP.PNT.C2PNT.SCP
	bbox['G-F-PCS---'] = {x1:60,x2:140,y1:-60};
	sidc['G-F-PCB---'] = icn['TP.FIRING POINT'];//TACGRP.FSUPP.PNT.C2PNT.FP
	bbox['G-F-PCB---'] = {x1:60,x2:140,y1:-60};
	sidc['G-F-PCR---'] = icn['TP.RELOAD POINT'];//TACGRP.FSUPP.PNT.C2PNT.RP
	bbox['G-F-PCR---'] = {x1:60,x2:140,y1:-60};
	sidc['G-F-PCH---'] = icn['TP.HIDE POINT'];//TACGRP.FSUPP.PNT.C2PNT.HP
	bbox['G-F-PCH---'] = {x1:60,x2:140,y1:-60};
	sidc['G-F-PCL---'] = icn['TP.LAUNCH POINT'];//TACGRP.FSUPP.PNT.C2PNT.LP
	bbox['G-F-PCL---'] = {x1:60,x2:140,y1:-60};

	sidc['G-S-PX----'] = icn['TP.AMBULANCE EXCHANGE POINT'];//TACGRP.CSS.PNT.AEP
	bbox['G-S-PX----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PC----'] = icn['TP.CANNIBALIZATION POINT'];//TACGRP.CSS.PNT.CBNP
	bbox['G-S-PC----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PY----'] = icn['TP.CASUALTY COLLECTION POINT'];//TACGRP.CSS.PNT.CCP
	bbox['G-S-PY----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PT----'] = icn['TP.CIVILIAN COLLECTION POINT'];//TACGRP.CSS.PNT.CVP
	bbox['G-S-PT----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PD----'] = icn['TP.DETAINEE COLLECTION POINT'];//TACGRP.CSS.PNT.DCP
	bbox['G-S-PD----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PE----'] = icn['TP.EPW COLLECTION POINT'];//TACGRP.CSS.PNT.EPWCP
	bbox['G-S-PE----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PL----'] = icn['TP.LOGISTICS RELEASE POINT'];//TACGRP.CSS.PNT.LRP
	bbox['G-S-PL----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PM----'] = icn['TP.MAINTENANCE COLLECTION POINT'];//TACGRP.CSS.PNT.MCP
	bbox['G-S-PM----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PR----'] = icn['TP.REARM, REFUEL AND RESUPPLY POINT'];//TACGRP.CSS.PNT.RRRP
	bbox['G-S-PR----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PU----'] = icn['TP.REFUEL ON THE MOVE POINT'];//TACGRP.CSS.PNT.ROM
	bbox['G-S-PU----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PO----'] = icn['TP.TRAFFIC CONTROL POST'];//TACGRP.CSS.PNT.TCP
	bbox['G-S-PO----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PI----'] = icn['TP.TRAILER TRANSFER POINT'];//TACGRP.CSS.PNT.TTP
	bbox['G-S-PI----'] = {x1:60,x2:140,y1:-60};
	sidc['G-S-PN----'] = [];//TACGRP.CSS.PNT.UMC
	sidc['G-S-PS----'] = [];//TACGRP.CSS.PNT.SPT
	sidc['G-S-PSZ---'] = [];//TACGRP.CSS.PNT.SPT.GNL
	sidc['G-S-PSA---'] = [];//TACGRP.CSS.PNT.SPT.CLS1
	sidc['G-S-PSB---'] = [];//TACGRP.CSS.PNT.SPT.CLS2
	sidc['G-S-PSC---'] = [];//TACGRP.CSS.PNT.SPT.CLS3
	sidc['G-S-PSD---'] = [];//TACGRP.CSS.PNT.SPT.CLS4
	sidc['G-S-PSE---'] = [];//TACGRP.CSS.PNT.SPT.CLS5
	sidc['G-S-PSF---'] = [];//TACGRP.CSS.PNT.SPT.CLS6
	sidc['G-S-PSG---'] = [];//TACGRP.CSS.PNT.SPT.CLS7
	sidc['G-S-PSH---'] = [];//TACGRP.CSS.PNT.SPT.CLS8
	sidc['G-S-PSI---'] = [];//TACGRP.CSS.PNT.SPT.CLS9
	sidc['G-S-PSJ---'] = [];//TACGRP.CSS.PNT.SPT.CLS10
	sidc['G-S-PA----'] = [];//TACGRP.CSS.PNT.AP
	sidc['G-S-PAS---'] = [];//TACGRP.CSS.PNT.AP.ASP
	sidc['G-S-PAT---'] = [];//TACGRP.CSS.PNT.AP.ATP
	sidc['G-O-ED----'] = [];//TACGRP.OTH.ER.DTHAC
	sidc['G-O-EP----'] = [];//TACGRP.OTH.ER.PIW
	sidc['G-O-EV----'] = [];//TACGRP.OTH.ER.DSTVES
	sidc['G-O-HM----'] = [];//TACGRP.OTH.HAZ.SML
	sidc['G-O-HI----'] = [];//TACGRP.OTH.HAZ.IB
	sidc['G-O-HO----'] = [];//TACGRP.OTH.HAZ.OLRG
	sidc['G-O-SB----'] = [];//TACGRP.OTH.SSUBSR.BTMRTN
	sidc['G-O-SBM---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.INS
	sidc['G-O-SBN---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO
	sidc['G-O-SBW---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.WRKND
	sidc['G-O-SBX---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.WRKD
	sidc['G-O-SM----'] = [];//TACGRP.OTH.SSUBSR.MARLFE
	sidc['G-O-SS----'] = [];//TACGRP.OTH.SSUBSR.SA
	sidc['G-O-FA----'] = [];//TACGRP.OTH.FIX.ACU
	sidc['G-O-FE----'] = [];//TACGRP.OTH.FIX.EM
	sidc['G-O-FO----'] = [];//TACGRP.OTH.FIX.EOP
}
);

MS.addLetterLabelOverrides(
function tacticalPoints(sidc){
	// Tactical Point Symbols =========================================================================
	//sidc['G-T-D-----'] = [];//TACGRP.TSK.DSTY
	//sidc['G-T-I-----'] = [];//TACGRP.TSK.ITDT
	//sidc['G-T-N-----'] = [];//TACGRP.TSK.NEUT
	//sidc['G-G-GPUUD-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
	//sidc['G-G-GPUUB-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
	//sidc['G-G-GPUUL-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
	//sidc['G-G-GPUUS-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
	//sidc['G-G-GPUY--'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY
	//sidc['G-G-GPUYP-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
	//sidc['G-G-GPUYD-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
	//sidc['G-G-GPUYL-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
	//sidc['G-G-GPUYC-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
	//sidc['G-G-GPUYS-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
	//sidc['G-G-GPUYB-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
	//sidc['G-G-GPUYA-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
	//sidc['G-G-GPUYV-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
	//sidc['G-G-GPUYT-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
	//sidc['G-G-GPUYR-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
	//sidc['G-G-GPUYK-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
	//sidc['G-G-GPUYX-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
	//sidc['G-G-GPUS--'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH
	//sidc['G-G-GPUSA-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
	//sidc['G-G-GPUSD-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
	//sidc['G-G-GPUSC-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
	//sidc['G-G-GPR---'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT
	//sidc['G-G-GPRN--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
	//sidc['G-G-GPRS--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
	//sidc['G-G-GPRD--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
	//sidc['G-G-GPRP--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.PIM
	//sidc['G-G-GPRM--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
	//sidc['G-G-GPRW--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.WAP
	//sidc['G-G-GPRC--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
	sidc['G-G-GPRI--'] = {	uniqueDesignation:{stroke:false,textanchor:"middle",x:100,y:30,fontsize:45,fontweight:'bold'}};//TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
	//sidc['G-G-GPWA--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.AIMPNT
	//sidc['G-G-GPWD--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.DRPPNT
	//sidc['G-G-GPWE--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.ENTPNT
	//sidc['G-G-GPWG--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.GRDZRO
	//sidc['G-G-GPWM--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.MSLPNT
	//sidc['G-G-GPWI--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.IMTPNT
	//sidc['G-G-GPWP--'] = [];//TACGRP.C2GM.GNL.PNT.WPN.PIPNT
	//sidc['G-G-GPF---'] = [];//TACGRP.C2GM.GNL.PNT.FRMN
	sidc['G-G-GPH---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,fontweight:'bold'}};//TACGRP.C2GM.GNL.PNT.HBR
	//sidc['G-G-GPHQ--'] = [];//TACGRP.C2GM.GNL.PNT.HBR.PNTQ
	//sidc['G-G-GPHA--'] = [];//TACGRP.C2GM.GNL.PNT.HBR.PNTA
	//sidc['G-G-GPHY--'] = [];//TACGRP.C2GM.GNL.PNT.HBR.PNTY
	//sidc['G-G-GPHX--'] = [];//TACGRP.C2GM.GNL.PNT.HBR.PNTX
	//sidc['G-G-GPO---'] = [];//TACGRP.C2GM.GNL.PNT.RTE
	//sidc['G-G-GPOZ--'] = [];//TACGRP.C2GM.GNL.PNT.RTE.RDV
	//sidc['G-G-GPOD--'] = [];//TACGRP.C2GM.GNL.PNT.RTE.DVSN
	//sidc['G-G-GPOW--'] = [];//TACGRP.C2GM.GNL.PNT.RTE.WAP
	//sidc['G-G-GPOP--'] = [];//TACGRP.C2GM.GNL.PNT.RTE.PIM
	//sidc['G-G-GPOR--'] = [];//TACGRP.C2GM.GNL.PNT.RTE.PNTR
	//sidc['G-G-GPA---'] = [];//TACGRP.C2GM.GNL.PNT.ACTL
	//sidc['G-G-GPAP--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.CAP
	//sidc['G-G-GPAW--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ABNEW
	//sidc['G-G-GPAK--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.TAK
	//sidc['G-G-GPAA--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ASBWF
	//sidc['G-G-GPAH--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ASBWR
	//sidc['G-G-GPAB--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.SUWF
	//sidc['G-G-GPAC--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.SUWR
	//sidc['G-G-GPAD--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.MIWF
	//sidc['G-G-GPAE--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.MIWR
	//sidc['G-G-GPAS--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.SKEIP
	//sidc['G-G-GPAT--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.TCN
	//sidc['G-G-GPAO--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.TMC
	//sidc['G-G-GPAR--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.RSC
	//sidc['G-G-GPAL--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.RPH
	//sidc['G-G-GPAF--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.UA
	//sidc['G-G-GPAG--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.VTUA
	//sidc['G-G-GPAI--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ORB
	//sidc['G-G-GPAJ--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ORBF8
	//sidc['G-G-GPAM--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ORBRT
	//sidc['G-G-GPAN--'] = [];//TACGRP.C2GM.GNL.PNT.ACTL.ORBRD
	sidc['G-G-GPP---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							additionalInformation1:{stroke:false,textanchor:"middle",x:100,y:-20,fontsize:35,fontweight:'bold'},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};//TACGRP.C2GM.GNL.PNT.ACTPNT
	sidc['G-G-GPPK--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPC--'] = {	uniqueDesignation:{stroke:false,textanchor:"middle",x:100,y:40,fontsize:45,fontweight:'bold'}};//TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
	//sidc['G-G-GPPO--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
	sidc['G-G-GPPD--'] = {	uniqueDesignation:{stroke:false,textanchor:"middle",x:100,y:115,fontsize:45,fontweight:'bold'}};//TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
	sidc['G-G-GPPL--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPP--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPR--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPE--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPS--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPA--'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	sidc['G-G-GPPW--'] = {	uniqueDesignation:{stroke:false,textanchor:"start",x:140,y:125,fontsize:70}};//TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

	//sidc['G-G-GPPW--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
	//sidc['G-G-GPC---'] = [];//TACGRP.C2GM.GNL.PNT.SCTL
	//sidc['G-G-GPCU--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.USV
	//sidc['G-G-GPCUR-'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV
	//sidc['G-G-GPCUA-'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW
	//sidc['G-G-GPCUS-'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW
	//sidc['G-G-GPCUM-'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW
	//sidc['G-G-GPCA--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.ASW
	//sidc['G-G-GPCS--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.SUW
	//sidc['G-G-GPCM--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.MIW
	//sidc['G-G-GPCP--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.PKT
	//sidc['G-G-GPCR--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.RDV
	//sidc['G-G-GPCC--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.RSC
	//sidc['G-G-GPCE--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.REP
	//sidc['G-G-GPCN--'] = [];//TACGRP.C2GM.GNL.PNT.SCTL.NCBTT
	//sidc['G-G-GPB---'] = [];//TACGRP.C2GM.GNL.PNT.UCTL
	//sidc['G-G-GPBU--'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.UUV
	//sidc['G-G-GPBUA-'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW
	//sidc['G-G-GPBUS-'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW
	//sidc['G-G-GPBUM-'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW
	//sidc['G-G-GPBS--'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.SBSTN
	//sidc['G-G-GPBSA-'] = [];//TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW
	//sidc['G-G-APP---'] = [];//TACGRP.C2GM.AVN.PNT.ACP
	//sidc['G-G-APC---'] = [];//TACGRP.C2GM.AVN.PNT.COMMCP
	//sidc['G-G-APU---'] = [];//TACGRP.C2GM.AVN.PNT.PUP
	//sidc['G-G-APD---'] = [];//TACGRP.C2GM.AVN.PNT.DAPP
	//sidc['G-G-PN----'] = [];//TACGRP.C2GM.DCPN.DMYMS
	//sidc['G-G-DPT---'] = [];//TACGRP.C2GM.DEF.PNT.TGTREF
	//sidc['G-G-DPO---'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST
	//sidc['G-G-DPOC--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST
	//sidc['G-G-DPOR--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.RECON
	//sidc['G-G-DPOF--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP
	//sidc['G-G-DPOS--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.SOP
	//sidc['G-G-DPON--'] = [];//TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP
	sidc['G-G-OPP---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-M-OAOF--'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD
	//sidc['G-M-OAOM--'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM.MVB
	//sidc['G-M-OAOP--'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD
	//sidc['G-M-OB----'] = [];//TACGRP.MOBSU.OBST.BBY
	//sidc['G-M-OMU---'] = [];//TACGRP.MOBSU.OBST.MNE.USPMNE
	//sidc['G-M-OMT---'] = [];//TACGRP.MOBSU.OBST.MNE.ATMNE
	//sidc['G-M-OMD---'] = [];//TACGRP.MOBSU.OBST.MNE.ATMAHD
	//sidc['G-M-OME---'] = [];//TACGRP.MOBSU.OBST.MNE.ATMDIR
	//sidc['G-M-OMP---'] = [];//TACGRP.MOBSU.OBST.MNE.APMNE
	//sidc['G-M-OMW---'] = [];//TACGRP.MOBSU.OBST.MNE.WAMNE
	//sidc['G-M-OFS---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.STC
	//sidc['G-M-OHTL--'] = [];//TACGRP.MOBSU.OBST.AVN.TWR.LOW
	//sidc['G-M-OHTH--'] = [];//TACGRP.MOBSU.OBST.AVN.TWR.HIGH
	//sidc[] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
	sidc['G-M-BCP---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-M-SE----'] = [];//TACGRP.MOBSU.SU.ESTOF
	//sidc['G-M-SF----'] = [];//TACGRP.MOBSU.SU.FRT
	//sidc['G-M-SS----'] = [];//TACGRP.MOBSU.SU.SUFSHL
	//sidc['G-M-SU----'] = [];//TACGRP.MOBSU.SU.UGDSHL
	//sidc['G-M-NZ----'] = [];//TACGRP.MOBSU.CBRN.NDGZ
	//sidc['G-M-NF----'] = [];//TACGRP.MOBSU.CBRN.FAOTP
	//sidc['G-M-NEB---'] = [];//TACGRP.MOBSU.CBRN.REEVNT.BIO
	//sidc['G-M-NEC---'] = [];//TACGRP.MOBSU.CBRN.REEVNT.CML
	//sidc[] = [];//TACGRP.MOBSU.CBRN.DECONP.USP
	sidc['G-M-NDP---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc[] = [];//TACGRP.MOBSU.CBRN.DECONP.ALTUSP
	sidc['G-M-NDA---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	//sidc[] = [];//TACGRP.MOBSU.CBRN.DECONP.TRP
	sidc['G-M-NDT---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-M-NDE---'] = [];//TACGRP.MOBSU.CBRN.DECONP.EQT
	sidc['G-M-NDE---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-M-NDB---'] = [];//TACGRP.MOBSU.CBRN.DECONP.EQTTRP
	sidc['G-M-NDB---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-M-NDO---'] = [];//TACGRP.MOBSU.CBRN.DECONP.OPDECN
	sidc['G-M-NDO---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	//sidc['G-M-NDD---'] = [];//TACGRP.MOBSU.CBRN.DECONP.TRGH
	sidc['G-M-NDD---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	//sidc['G-F-PTS---'] = [];//TACGRP.FSUPP.PNT.TGT.PTGT
	//sidc['G-F-PTN---'] = [];//TACGRP.FSUPP.PNT.TGT.NUCTGT
	//sidc['G-F-PCF---'] = [];//TACGRP.FSUPP.PNT.C2PNT.FSS
	//sidc['G-F-PCS---'] = [];//TACGRP.FSUPP.PNT.C2PNT.SCP
	sidc['G-F-PCS---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	//sidc['G-F-PCB---'] = [];//TACGRP.FSUPP.PNT.C2PNT.FP
	sidc['G-F-PCB---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-F-PCR---'] = [];//TACGRP.FSUPP.PNT.C2PNT.RP
	sidc['G-F-PCR---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-F-PCH---'] = [];//TACGRP.FSUPP.PNT.C2PNT.HP
	sidc['G-F-PCH---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-F-PCL---'] = [];//TACGRP.FSUPP.PNT.C2PNT.LP
	sidc['G-F-PCL---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};
	//sidc['G-S-PX----'] = [];//TACGRP.CSS.PNT.AEP
	sidc['G-S-PX----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							uniqueDesignation1:{stroke:false,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:'bold'},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};//TACGRP.C2GM.GNL.PNT.ACTPNT
	//sidc['G-S-PC----'] = [];//TACGRP.CSS.PNT.CBNP
	sidc['G-S-PC----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PY----'] = [];//TACGRP.CSS.PNT.CCP
	sidc['G-S-PY----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PT----'] = [];//TACGRP.CSS.PNT.CVP
	sidc['G-S-PT----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PD----'] = [];//TACGRP.CSS.PNT.DCP
	sidc['G-S-PD----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PE----'] = [];//TACGRP.CSS.PNT.EPWCP
	sidc['G-S-PE----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PL----'] = [];//TACGRP.CSS.PNT.LRP
	sidc['G-S-PL----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PM----'] = [];//TACGRP.CSS.PNT.MCP
	sidc['G-S-PM----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PR----'] = [];//TACGRP.CSS.PNT.RRRP
	sidc['G-S-PR----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PU----'] = [];//TACGRP.CSS.PNT.ROM
	sidc['G-S-PU----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PO----'] = [];//TACGRP.CSS.PNT.TCP
	sidc['G-S-PO----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PI----'] = [];//TACGRP.CSS.PNT.TTP
	sidc['G-S-PI----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PN----'] = [];//TACGRP.CSS.PNT.UMC
	sidc['G-S-PN----'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PS----'] = [];//TACGRP.CSS.PNT.SPT
	//sidc['G-S-PSZ---'] = [];//TACGRP.CSS.PNT.SPT.GNL
	//sidc['G-S-PSA---'] = [];//TACGRP.CSS.PNT.SPT.CLS1
	//sidc['G-S-PSB---'] = [];//TACGRP.CSS.PNT.SPT.CLS2
	//sidc['G-S-PSC---'] = [];//TACGRP.CSS.PNT.SPT.CLS3
	//sidc['G-S-PSD---'] = [];//TACGRP.CSS.PNT.SPT.CLS4
	//sidc['G-S-PSE---'] = [];//TACGRP.CSS.PNT.SPT.CLS5
	//sidc['G-S-PSF---'] = [];//TACGRP.CSS.PNT.SPT.CLS6
	//sidc['G-S-PSG---'] = [];//TACGRP.CSS.PNT.SPT.CLS7
	//sidc['G-S-PSH---'] = [];//TACGRP.CSS.PNT.SPT.CLS8
	//sidc['G-S-PSI---'] = [];//TACGRP.CSS.PNT.SPT.CLS9
	//sidc['G-S-PSJ---'] = [];//TACGRP.CSS.PNT.SPT.CLS10
	//sidc['G-S-PA----'] = [];//TACGRP.CSS.PNT.AP
	//sidc['G-S-PAS---'] = [];//TACGRP.CSS.PNT.AP.ASP
	sidc['G-S-PAS---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-S-PAT---'] = [];//TACGRP.CSS.PNT.AP.ATP
	sidc['G-S-PAT---'] = {	additionalInformation:{stroke:false,textanchor:"middle",x:100,y:-70,fontsize:40},
							hostile:{stroke:false,textanchor:"start",x:150,y:45,fontsize:40},
							uniqueDesignation:{stroke:false,textanchor:"start",x:150,y:0,fontsize:80},
							dtg:{stroke:false,textanchor:"end",x:50,y:-30,fontsize:40},
							dtg1:{stroke:false,textanchor:"end",x:50,y:10,fontsize:40}};

	//sidc['G-O-ED----'] = [];//TACGRP.OTH.ER.DTHAC
	//sidc['G-O-EP----'] = [];//TACGRP.OTH.ER.PIW
	//sidc['G-O-EV----'] = [];//TACGRP.OTH.ER.DSTVES
	//sidc['G-O-HM----'] = [];//TACGRP.OTH.HAZ.SML
	//sidc['G-O-HI----'] = [];//TACGRP.OTH.HAZ.IB
	//sidc['G-O-HO----'] = [];//TACGRP.OTH.HAZ.OLRG
	//sidc['G-O-SB----'] = [];//TACGRP.OTH.SSUBSR.BTMRTN
	//sidc['G-O-SBM---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.INS
	//sidc['G-O-SBN---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO
	//sidc['G-O-SBW---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.WRKND
	//sidc['G-O-SBX---'] = [];//TACGRP.OTH.SSUBSR.BTMRTN.WRKD
	//sidc['G-O-SM----'] = [];//TACGRP.OTH.SSUBSR.MARLFE
	//sidc['G-O-SS----'] = [];//TACGRP.OTH.SSUBSR.SA
	//sidc['G-O-FA----'] = [];//TACGRP.OTH.FIX.ACU
	//sidc['G-O-FE----'] = [];//TACGRP.OTH.FIX.EM
	//sidc['G-O-FO----'] = [];//TACGRP.OTH.FIX.EOP

}
);