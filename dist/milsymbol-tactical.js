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
	iconParts['TP.DESTROY'] = [{type:'path',fill:false,d:'m 0,45 85,46.75 m 30,16.5 85,46.75 M 0,155 85,108.25 M 115,91.75 200,45'},{type:'text',stroke:false,textanchor:"middle",x:100,y:110,fontsize:32,text:'D'}];
	iconParts['TP.INTERDICT'] = [{type:'path',fill:false,d:'m 194.203,65.6674 5.49,-20.4904 -20.49,-5.4904 M 115,91.75 200,45 M 0,155 85,108.25 M 185,85 l 15,15 -15,15 m -70,-15 85,0 m -200,0 85,0'},{type:'text',stroke:false,textanchor:"middle",x:100,y:110,fontsize:32,text:'I'}];
	iconParts['TP.NEUTRALIZE'] = [{type:'path',fill:false,d:'M 115,108.25 200,155 M 0,45 85,91.75'},{type:'path',fill:false,strokedasharray:'12,5',d:'M 115,91.75 200,45 M 0,155 85,108.25'},{type:'text',stroke:false,textanchor:"middle",x:100,y:110,fontsize:32,text:'N'}];

	
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
	sidc['G-G-GPUUD-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
	sidc['G-G-GPUUB-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
	sidc['G-G-GPUUL-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
	sidc['G-G-GPUUS-'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
	sidc['G-G-GPUY--'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY
	sidc['G-G-GPUYP-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
	sidc['G-G-GPUYD-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
	sidc['G-G-GPUYL-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
	sidc['G-G-GPUYC-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
	sidc['G-G-GPUYS-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
	sidc['G-G-GPUYB-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
	sidc['G-G-GPUYA-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
	sidc['G-G-GPUYV-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
	sidc['G-G-GPUYT-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
	sidc['G-G-GPUYR-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
	sidc['G-G-GPUYK-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
	sidc['G-G-GPUYX-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
	sidc['G-G-GPUS--'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH
	sidc['G-G-GPUSA-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
	sidc['G-G-GPUSD-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
	sidc['G-G-GPUSC-'] = [];//TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
	sidc['G-G-GPR---'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT
	sidc['G-G-GPRN--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
	sidc['G-G-GPRS--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
	sidc['G-G-GPRD--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
	sidc['G-G-GPRP--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.PIM
	sidc['G-G-GPRM--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
	sidc['G-G-GPRW--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.WAP
	sidc['G-G-GPRC--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
	sidc['G-G-GPRI--'] = [];//TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
	bbox['G-G-GPRI--'] = {x1:50,x2:150,y1:50,y2:150};
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
	sidc['G-G-GPP---'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT
	sidc['G-G-GPPK--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.CHKPNT
	sidc['G-G-GPPC--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
	sidc['G-G-GPPO--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
	sidc['G-G-GPPD--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
	sidc['G-G-GPPL--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.LNKUPT
	sidc['G-G-GPPP--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.PSSPNT
	sidc['G-G-GPPR--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.RAYPNT
	sidc['G-G-GPPE--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.RELPNT
	sidc['G-G-GPPS--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.STRPNT
	sidc['G-G-GPPA--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.AMNPNT
	sidc['G-G-GPPW--'] = [];//TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
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
	sidc['G-G-OPP---'] = [];//TACGRP.C2GM.OFF.PNT.PNTD
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
	sidc['G-M-BCP---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
	sidc['G-M-SE----'] = [];//TACGRP.MOBSU.SU.ESTOF
	sidc['G-M-SF----'] = [];//TACGRP.MOBSU.SU.FRT
	sidc['G-M-SS----'] = [];//TACGRP.MOBSU.SU.SUFSHL
	sidc['G-M-SU----'] = [];//TACGRP.MOBSU.SU.UGDSHL
	sidc['G-M-NZ----'] = [];//TACGRP.MOBSU.CBRN.NDGZ
	sidc['G-M-NF----'] = [];//TACGRP.MOBSU.CBRN.FAOTP
	sidc['G-M-NEB---'] = [];//TACGRP.MOBSU.CBRN.REEVNT.BIO
	sidc['G-M-NEC---'] = [];//TACGRP.MOBSU.CBRN.REEVNT.CML
	sidc['G-M-NDP---'] = [];//TACGRP.MOBSU.CBRN.DECONP.USP
	sidc['G-M-NDA---'] = [];//TACGRP.MOBSU.CBRN.DECONP.ALTUSP
	sidc['G-M-NDT---'] = [];//TACGRP.MOBSU.CBRN.DECONP.TRP
	sidc['G-M-NDE---'] = [];//TACGRP.MOBSU.CBRN.DECONP.EQT
	sidc['G-M-NDB---'] = [];//TACGRP.MOBSU.CBRN.DECONP.EQTTRP
	sidc['G-M-NDO---'] = [];//TACGRP.MOBSU.CBRN.DECONP.OPDECN
	sidc['G-M-NDD---'] = [];//TACGRP.MOBSU.CBRN.DECONP.TRGH
	sidc['G-F-PTS---'] = [];//TACGRP.FSUPP.PNT.TGT.PTGT
	sidc['G-F-PTN---'] = [];//TACGRP.FSUPP.PNT.TGT.NUCTGT
	sidc['G-F-PCF---'] = [];//TACGRP.FSUPP.PNT.C2PNT.FSS
	sidc['G-F-PCS---'] = [];//TACGRP.FSUPP.PNT.C2PNT.SCP
	sidc['G-F-PCB---'] = [];//TACGRP.FSUPP.PNT.C2PNT.FP
	sidc['G-F-PCR---'] = [];//TACGRP.FSUPP.PNT.C2PNT.RP
	sidc['G-F-PCH---'] = [];//TACGRP.FSUPP.PNT.C2PNT.HP
	sidc['G-F-PCL---'] = [];//TACGRP.FSUPP.PNT.C2PNT.LP
	sidc['G-F-ATR---'] = [];//TACGRP.FSUPP.ARS.ARATGT.RTGTGT
	sidc['G-F-ATC---'] = [];//TACGRP.FSUPP.ARS.ARATGT.CIRTGT
	sidc['G-F-ACSC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.FSA.CIRCLR
	sidc['G-F-ACAC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.ACA.CIRCLR
	sidc['G-F-ACFC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.FFA.CIRCLR
	sidc['G-F-ACNC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA.CIRCLR
	sidc['G-F-ACRC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.RFA.CIRCLR
	sidc['G-F-ACPC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.PAA.CIRCLR
	sidc['G-F-ACEC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.SNSZ.CIRCLR
	sidc['G-F-ACDC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.DA.CIRCLR
	sidc['G-F-ACZC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.ZOR.CIRCLR
	sidc['G-F-ACBC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.TBA.CIRCLR
	sidc['G-F-ACVC--'] = [];//TACGRP.FSUPP.ARS.C2ARS.TVAR.CIRCLR
	sidc['G-F-AXC---'] = [];//TACGRP.FSUPP.ARS.WPNRF.CIRCLR
	sidc['G-F-AKBC--'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE.CIRCLR
	sidc['G-F-AKPC--'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE.CIRCLR
	sidc['G-S-PX----'] = [];//TACGRP.CSS.PNT.AEP
	sidc['G-S-PC----'] = [];//TACGRP.CSS.PNT.CBNP
	sidc['G-S-PY----'] = [];//TACGRP.CSS.PNT.CCP
	sidc['G-S-PT----'] = [];//TACGRP.CSS.PNT.CVP
	sidc['G-S-PD----'] = [];//TACGRP.CSS.PNT.DCP
	sidc['G-S-PE----'] = [];//TACGRP.CSS.PNT.EPWCP
	sidc['G-S-PL----'] = [];//TACGRP.CSS.PNT.LRP
	sidc['G-S-PM----'] = [];//TACGRP.CSS.PNT.MCP
	sidc['G-S-PR----'] = [];//TACGRP.CSS.PNT.RRRP
	sidc['G-S-PU----'] = [];//TACGRP.CSS.PNT.ROM
	sidc['G-S-PO----'] = [];//TACGRP.CSS.PNT.TCP
	sidc['G-S-PI----'] = [];//TACGRP.CSS.PNT.TTP
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