
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
console.log("MilSymbol 0.4.6 Copyright (c) 2013 Måns Beckman http://www.spatialillusions.com");

var _MilSymbol = {
	sID : {},
	sIDm1 : {},
	sIDm2 : {},
	icons : {},
	symbolBaseGeometry : {},
	//Quck function to move icons and stuff
	translate : function(x, y, svg){
		return '<g transform="translate('+ x +','+ y +')">' + svg + '</g>';
	},
	//Quick function to scale icons and stuff, will keep center at center.
	scale : function(factor, svg){
		return '<g transform="translate('+(100-factor*100)+','+(100-factor*100)+'),scale('+ factor +')">' + svg + '</g>';
	},
	//Quick function to rotate icons and stuff, will keep center at center.
	rotate : function(angle, svg){
		return '<g transform="rotate('+angle+',100,100)">' + svg + '</g>';
	},
	userAgentIE : (navigator.userAgent.toLowerCase().indexOf('msie')==-1)
};
function _MilSymbolIcons(fill,frame,strokeWidth,monoColor,civilianColors,colorMode,force2525,affiliationType,symbol,symbolColors,SIDC){
	var icons = [];
	var symbolBaseGeometry = _MilSymbol.symbolBaseGeometry;

	var fillColor = symbolColors.fillColor[affiliationType];
	var iconColor = symbolColors.iconColor[affiliationType];
	var iconFillColor = symbolColors.iconFillColor[affiliationType];
	var none = symbolColors.none[affiliationType];
	var black = symbolColors.black[affiliationType];
	var white = symbolColors.white[affiliationType];	
	
	// SPACE =========================================================================
	icons['SPACE.ICON.FULLFRAME.SATELLITE'] = '<rect x="65" y="70" width="20" height="55" stroke="none"/><rect x="90" y="75" width="20" height="45" stroke="none"/><rect x="115" y="70" width="20" height="55" stroke="none"/><path fill="none" d="M80,135 c10,-10 30,-10 40,0 M100,127 L100,100 M70,100 L130,100" />';
	icons['SPACE.ICON.FULLFRAME.CREWED SPACE VEHICLE'] = '<path stroke="none" d="m 100.25,62.40625 c -1.845174,-0.0053 -4.302906,3.67518 -4.5,5.4375 -2.53105,11.27685 -3.42928,23.062008 -6.1875,33.4375 -2.91893,6.7317 -6.79222,8.31963 -9.90625,12.09375 -2.9653,3.59387 -8.46875,10.375 -8.46875,10.375 l 0,6.4375 c 0,0 5.91213,0.94934 8.90625,1.15625 3.00114,0.2074 8.6875,0.0937 8.6875,0.0937 l 0.34375,4.25 4.25,0.15625 0.1875,3.09375 5.8125,0 0.90625,6.46875 0.875,-6.4375 5.84375,0 0.1875,-3.09375 4.25,-0.15625 0.34375,-4.25 c 0,0 5.65511,0.11365 8.65625,-0.0937 2.99412,-0.20691 8.9375,-1.15625 8.9375,-1.15625 l 0,-6.4375 c 0,0 -5.5347,-6.74988 -8.5,-10.34375 -3.11403,-3.77412 -6.95607,-5.3933 -9.875,-12.125 -2.75822,-10.37549 -3.6877,-22.16065 -6.21875,-33.4375 -0.27679,-2.862714 -2.68608,-5.463411 -4.53125,-5.46875 z" />';
	icons['SPACE.ICON.FULLFRAME.SPACE STATION'] = '<path d="m 103.05285,97.425623 c -12.431045,0.283567 -25.660897,0.141164 -36.733694,6.654857 -4.087626,2.1038 -8.503974,5.88034 -7.81527,10.97915 0.162154,3.68449 0.324308,7.36899 0.486462,11.05349 6.235296,7.80892 16.594083,10.35394 26.032728,11.75016 14.009202,1.78839 28.518974,1.15663 42.062494,-3.0286 5.24945,-1.70697 10.38525,-4.25475 14.21728,-8.31531 0.25256,-5.10392 -0.33459,-10.3614 0.65243,-15.32567 -1.23672,-4.30522 -5.9142,-6.38019 -9.65879,-8.19508 -9.19469,-3.976679 -19.29318,-5.373984 -29.24364,-5.572997 z m -3.187501,9.593747 c 10.105661,-0.16111 20.495121,1.93646 29.093751,7.4375 -12.9594,8.39878 -29.561277,9.74296 -44.323417,6.12118 -4.899607,-1.28416 -9.676319,-3.29367 -13.707835,-6.40243 8.786222,-4.94037 18.947817,-6.87905 28.937501,-7.15625 z" fill="'+ (force2525 ? iconFillColor : none ) +'" /><path fill="none" stroke="'+ black +'" d="m 96.924972,107.00822 c 0.702355,-8.147318 1.40471,-16.294637 2.107065,-24.441955 M 89.33954,121.75767 c 3.090361,-13.15745 6.180723,-26.314898 9.271084,-39.472347 4.869666,12.736036 9.739326,25.472067 14.608986,38.208107 m 27.78905,-5.27205 c -0.0835,3.88149 -0.16697,7.76298 -0.25046,11.64447 M 58.607507,113.34104 c 0.166973,4.50827 0.333947,9.01653 0.50092,13.5248 m -0.483907,-1.23947 c 3.544101,6.32645 11.039439,8.5784 17.55808,10.47407 16.387937,4.05097 33.90485,3.87094 50.1393,-0.80948 5.52719,-1.77621 11.759,-4.30976 14.67881,-9.66459 m 0.47489,-12.97517 c -0.4984,5.42269 -6.07059,8.13892 -10.50352,10.02684 -15.41405,5.72673 -32.392567,6.11304 -48.505097,3.62676 -7.903582,-1.37711 -16.274711,-3.43816 -22.184361,-9.205 -3.613065,-3.9082 -0.852911,-9.62926 3.388151,-11.68266 8.287462,-5.24975 18.327732,-6.61442 27.912301,-7.52056 13.519516,-0.962593 27.515366,0.0024 40.197426,5.08486 4.1634,1.83475 9.30049,4.55159 9.6951,9.66976 z m -13.26421,1.5919 c -8.24079,-5.90141 -18.80298,-6.79547 -28.636002,-6.95655 -9.471196,0.0776 -19.489566,1.20884 -27.616223,6.44685 l -0.643519,0.5097 m 58.939284,-2.58133 c -0.80638,4.77745 -6.06227,6.43309 -10.04114,7.82563 -13.15806,3.67802 -27.396162,3.67573 -40.540964,-0.0497 -3.754818,-1.20128 -8.077905,-2.81413 -9.771554,-6.6996 -0.716487,-4.91556 4.98161,-7.14767 8.735577,-8.51676 12.74132,-4.0029 26.599591,-3.99075 39.542741,-0.95536 4.4496,1.22635 9.78352,2.81569 11.91484,7.30577 l 0.1202,0.54074 0.0403,0.54927 z" /><path fill="'+ black +'" stroke="none" d="M 75.151971,93.101588 C 88.871304,86.967689 102.59064,80.83379 116.30997,74.699891 c 2.34118,1.311062 4.68237,2.622125 7.02355,3.933187 -13.67251,5.993428 -27.345019,11.986857 -41.017529,17.980285 -2.388007,-1.170592 -4.776013,-2.341183 -7.16402,-3.511775 z"/>';
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
	icons['SPACE.ICON.CIVILIAN'] = '<text fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
	icons['SPACE.ICON.CIVILIAN ORBITER SHUTTLE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"  />';
	icons['SPACE.ICON.CIVILIAN CAPSULE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"  />';
	icons['SPACE.ICON.CIVILIAN SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"  />';
	icons['SPACE.ICON.CIVILIAN ASTRONOMICAL SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"  />';
	icons['SPACE.ICON.CIVILIAN BIOSATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 100,89 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"  />';
	icons['SPACE.ICON.CIVILIAN COMMUNICATIONS SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><path fill="none" d="m 100,90 0,9 M 75,81 c 16,12 34,12 50,0"  />';
	icons['SPACE.ICON.CIVILIAN EARTH OBSERVATION SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 107,113 c 0,3.86599 -3.13401,7 -7,7 -3.86599,0 -7,-3.13401 -7,-7 0,-3.86599 3.13401,-7 7,-7 3.86599,0 7,3.13401 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"/><path fill="none" d="m 88,107 c 8,-9 16,-9 24,0"  />';
	icons['SPACE.ICON.CIVILIAN MINIATURIZED SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 91.125,92 0,16 17.75,0 0,-16 z m 22.1875,0 0,16 22.1875,0 0,-16 z m -26.625,0 -22.1875,0 0,16 22.1875,0 z m 0,8 4.4375,0 m 17.75,0 4.4375,0"/><path fill="none" d="m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"  />';
	icons['SPACE.ICON.CIVILIAN NAVIGATIONAL SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><path fill="none" d="m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"  />';
	icons['SPACE.ICON.CIVILIAN SPACE STATION'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3125,7.5625 C 83.320458,88.202625 72.5,93.527913 72.5,100 c 0,6.90356 12.312169,12.5 27.5,12.5 15.18783,0 27.5,-5.59644 27.5,-12.5 0,-6.520004 -10.98528,-11.86269 -25,-12.4375 l 0,5.59375 c 9.85386,0.380275 17.5,3.212883 17.5,6.625 0,3.6706 -8.85579,6.65625 -19.78125,6.65625 -10.925462,0 -19.78125,-2.98565 -19.78125,-6.65625 0,-3.361079 7.422101,-6.147668 17.0625,-6.59375 l 0,-5.625 c -0.102999,0.0042 -0.209832,-0.0047 -0.3125,0 z"  />';
	icons['SPACE.ICON.CIVILIAN TETHERED SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 120,87 -20,12 m 33,-12 c 0,3.589851 -2.91015,6.5 -6.5,6.5 -3.58985,0 -6.5,-2.910149 -6.5,-6.5 0,-3.589851 2.91015,-6.5 6.5,-6.5 3.58985,0 6.5,2.910149 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/>';
	icons['SPACE.ICON.CIVILIAN WEATHER SATELLITE'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"/><text stroke="none" text-anchor="middle" x="100" y="100" font-size="25" >WX</text>';
	icons['SPACE.ICON.MANUAL TRACK'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MAN</text>';

	icons['SPACE.M1.LOW EARTH ORBIT (LEO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LEO</text>';
	icons['SPACE.M1.MEDIUM EARTH ORBIT (MEO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MEO</text>';
	icons['SPACE.M1.HIGH EARTH ORBIT (HEO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >HEO</text>';
	icons['SPACE.M1.GEOSYNCHRONOUS ORBIT (GSO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GSO</text>';
	icons['SPACE.M1.GEOSTATIONARY ORBIT (GO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GO</text>';
	icons['SPACE.M1.MOLNIYA ORBIT (MO)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MO</text>';

	icons['SPACE.M2.OPTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >O</text>';
	icons['SPACE.M2.INFRARED'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >IR</text>';
	icons['SPACE.M2.RADAR'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >R</text>';
	icons['SPACE.M2.SIGNALS INTELLIGENCE (SIGINT)'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >SI</text>';

	//Space Missile
	icons['SPACE.MISSILE.ICON'] = '<path d="M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z" ' + (force2525 ? ('fill="' + (frame?symbolColors.fillColor['Unknown']:symbolColors.iconFillColor['Unknown']) + '"'):'') + ' />';

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
	icons['AIR.ICON.CIVILIAN'] = '<text fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
	icons['AIR.ICON.MILITARY FIXED WING'] = '<path d="M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z" />';
	icons['AIR.ICON.CIVILIAN FIXED WING'] = '<path fill="none" d="M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z" />';
	icons['AIR.ICON.FULLFRAME.CIVILIAN FIXED WING'] = '<path  stroke="' + black + '" d="M62,80 l30,0 0,-10 16,0 0,10 30,0 0,15 -30,0 0,25 10,0 0,5 -36,0 0,-5 10,0 0,-25 -30,0 Z M95,70 l0,-5 10,0 0,5" fill="'+ (force2525 ? iconFillColor : 'none') + '"/>';
	icons['AIR.ICON.MILITARY ROTARY WING'] = '<path d="M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z" />';
	icons['AIR.ICON.CIVILIAN ROTARY WING'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '" d="M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z" />';
	icons['AIR.ICON.FULLFRAME.CIVILIAN ROTARY WING'] = '<path  stroke="' + black + '" d="M80,70 l10,10 M120,110 l-10,-10 M80,110 l10,-10 M120,70 l-10,10 M100,115 l0,20 M95,135 l10,0" fill="none"/><ellipse stroke="' + black + '" transform="translate(100 90)" rx="13" ry="25" fill="'+ (force2525 ? iconFillColor : 'none') +'"/>';
	icons['AIR.ICON.MILITARY BALLOON'] = '<circle cx="100" cy="95" r="15"/><path d="M95,110 l0,10 10,0 0,-10 z" />';
	icons['AIR.ICON.FULLFRAME.MILITARY BALLOON'] = '<path   d="M90,115 l20,0 0,20 -20,0 z" /><circle  cx="100" cy="90" r="35"  />';
	icons['AIR.ICON.CIVILIAN BALLOON'] = '<circle fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"   cx="100" cy="95" r="15"/><path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"   d="M95,110 l0,10 10,0 0,-10 z" />';
	icons['AIR.ICON.FULLFRAME.CIVILIAN BALLOON'] = '<path  fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '" d="M90,125 l20,0 0,10 -20,0 z" /><circle fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '" cx="100" cy="90" r="35"  />';
	icons['AIR.ICON.MILITARY AIRSHIP'] = '<path   d="m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.17374,10 c 0,6.11171 -12.1661,11.06623 -27.17374,11.06623 -15.00764,0 -27.173737,-4.95452 -27.173737,-11.06623 0,-6.111709 12.166097,-11.066227 27.173737,-11.066227 15.00764,0 27.17374,4.954518 27.17374,11.066227 z"/>';
	icons['AIR.ICON.CIVILIAN AIRSHIP'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"   d="m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.17374,10 c 0,6.11171 -12.1661,11.06623 -27.17374,11.06623 -15.00764,0 -27.173737,-4.95452 -27.173737,-11.06623 0,-6.111709 12.166097,-11.066227 27.173737,-11.066227 15.00764,0 27.17374,4.954518 27.17374,11.066227 z"/>';
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
	icons['AIR.ICON.VSTOL'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >' + ((force2525&&isNaN(SIDC)) ? 'L' : 'V' )+ '</text>';
	icons['AIR.ICON.AIRBORNE COMMAND POST'] =  ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >D</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ACP</text>');
	icons['AIR.ICON.AIRBORNE EARLY WARNING'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >W</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AEW</text>');
	icons['AIR.ICON.ANTISURFACE WARFARE'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >N</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="29" >ASUW</text>');
	icons['AIR.ICON.ANTISUBMARINE WARFARE'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >S</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ASW</text>');
	icons['AIR.ICON.COMMUNICATIONS'] = ((force2525&&isNaN(SIDC))? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >Y</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >COM</text>');
	icons['AIR.ICON.COMBAT SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >CSAR</text>';
	icons['AIR.ICON.ELECTRONIC SUPPORT MEASURES'] =  (force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >Z</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ESM</text>');
	icons['AIR.ICON.GOVERNMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GOV</text>';
	icons['AIR.ICON.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MCM</text>';
	icons['AIR.ICON.PERSONNEL RECOVERY'] = (force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >H</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PRO</text>');
	icons['AIR.ICON.PASSENGER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >PX</text>';
	icons['AIR.ICON.SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SAR</text>';
	icons['AIR.ICON.SUPRESSION OF ENEMY AIR DEFENCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >SEAD</text>';
	icons['AIR.ICON.SPECIAL OPERATIONS FORCES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SOF</text>';
	icons['AIR.ICON.ULTRA LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >UL</text>';
	icons['AIR.ICON.VIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >VIP</text>';
	icons['AIR.ICON.FULLFRAME.MILITARY FIXED WING'] = '<path d="m 99.15625,58.1875 c -2.988505,0.764206 -2.46875,5.78125 -2.46875,5.78125 l -0.34375,16 -37.1875,36.53125 1.3125,4.5625 L 96.6875,96.59375 97,128.5625 l -8.46875,8.15625 0,4.5625 9.34375,-4.1875 c 0.678132,0.62239 1.84375,1.65625 1.84375,1.65625 0,0 1.23407,-1.08208 1.875,-1.65625 l 9.3125,4.1875 0,-4.5625 -8.46875,-8.15625 0.3125,-31.96875 36.21875,24.46875 1.3125,-4.5625 -37.1875,-36.53125 -0.34375,-16 c 0,0 0.51975,-5.017044 -2.46875,-5.78125 -0.434485,-0.06593 -0.743457,-0.06323 -1.125,0 z" stroke="none"  />';
	//2525D
	icons['AIR.ICON.FIXED-WING DSymbol'] = '<path   d="M 99.4375 80.78125 C 97.879578 81.12974 98.125 83.40625 98.125 83.40625 L 97.96875 90.71875 L 78.5625 107.375 L 79.25 109.4375 L 98.125 98.28125 L 98.3125 112.875 L 93.875 116.59375 L 93.875 118.65625 L 98.75 116.75 C 99.103514 117.03382 99.71875 117.5 99.71875 117.5 C 99.71875 117.5 100.35338 117.01183 100.6875 116.75 L 105.5625 118.65625 L 105.5625 116.59375 L 101.125 112.875 L 101.3125 98.28125 L 120.1875 109.4375 L 120.875 107.375 L 101.46875 90.71875 L 101.3125 83.40625 C 101.3125 83.40625 101.55792 81.12974 100 80.78125 C 99.773505 80.75118 99.6364 80.75242 99.4375 80.78125 z "  />';
	icons['AIR.ICON.CIVILIAN FIXED-WING DSymbol'] = '<path  fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"  d="m 75.138353,90.27611 19.627614,0 0,-6.482594 10.468063,0 0,6.482594 19.62762,0 0,9.72389 -19.62762,0 0,16.20648 6.54254,0 0,3.2413 -23.55314,0 0,-3.2413 6.542537,0 0,-16.20648 -19.627614,0 z m 21.590376,-6.482594 0,-3.241296 6.542531,0 0,3.241296"  />';
	icons['AIR.ICON.FIGHTER/BOMBER'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >F/B</text>';
	icons['AIR.ICON.ELECTRONIC SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >ES</text>';
	icons['AIR.ICON.PERSONNEL RECOVERY DSymbol'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >PR</text>';
	icons['AIR.ICON.PHOTOGRAPHIC RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >PH</text>';
	icons['AIR.ICON.ELECTRONIC ATTACK (EA)'] = '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="45" >EA</text>';
	icons['AIR.ICON.VERTICAL-TAKEOFF UAV (VT-UAV)'] = '<path   d="m 70,85 30,10 30,-10 0,-5 -30,5 -30,-5 z m -10,5 40,15 40,-15 0,30 -40,-15 -40,15 z" />';
	icons['AIR.ICON.TETHERED LIGHTER THAN AIR'] = '<path   d="M 75,110 85,95 m -5,20 c 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.28427 -6.71573,15 -15,15 -8.284271,0 -15,-6.71573 -15,-15 0,-8.284271 6.715729,-15 15,-15 8.28427,0 15,6.715729 15,15 z" />';
	icons['AIR.ICON.CIVILIAN TETHERED LIGHTER THAN AIR'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"  d="M 75,110 85,95 m -5,20 c 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.28427 -6.71573,15 -15,15 -8.284271,0 -15,-6.71573 -15,-15 0,-8.284271 6.715729,-15 15,-15 8.28427,0 15,6.715729 15,15 z" />';
	icons['AIR.ICON.CIVILIAN UNMANNED AERIAL VEHICLE'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '" d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z"  />';
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
	icons['AIR.M1.VSTOL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >' + ((force2525&&isNaN(SIDC)) ? 'L' : 'V' )+ '</text>';
	icons['AIR.M1.PASSENGER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >PX</text>';
	icons['AIR.M1.ULTRA LIGHT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >UL</text>';
	icons['AIR.M1.AIRBORNE COMMAND POST'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >D</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="28" >ACP</text>');
	icons['AIR.M1.ANTISURFACE WARFARE'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >N</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="22" >ASUW</text>');
	icons['AIR.M1.AIRBORNE EARLY WARNING'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >W</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >AEW</text>');
	icons['AIR.M1.GOVERNMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >GOV</text>';
	icons['AIR.M1.MEDEVAC'] = '<path stroke="none" d="M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z"  />';
	icons['AIR.M1.ESCORT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >E</text>';
	icons['AIR.M1.INTENSIVE CARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >IC</text>';
	icons['AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >J</text>';
	icons['AIR.M1.PATROL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >P</text>';
	icons['AIR.M1.RECONNAISSANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >R</text>';
	icons['AIR.M1.TRAINER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >T</text>';
	icons['AIR.M1.PHOTOGRAPHIC'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >X</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >PH</text>');
	icons['AIR.M1.PERSONNEL RECOVERY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >PR</text>';
	icons['AIR.M1.ANTISUBMARINE WARFARE'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >S</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ASW</text>');
	icons['AIR.M1.COMMUNICATIONS'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >Y</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >COM</text>');
	icons['AIR.M1.ELECTRONIC SURVEILLANCE MEASURES'] = (force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >Z</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ESM</text>');
	icons['AIR.M1.MINE COUNTERMEASURES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MCM</text>';
	icons['AIR.M1.SEARCH AND RESCUE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SAR</text>';
	icons['AIR.M1.SPECIAL OPERATIONS FORCES'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SOF</text>';
	icons['AIR.M1.SURFACE WARFARE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >SUW</text>';
	icons['AIR.M1.VIP'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="28" >VIP</text>';
	icons['AIR.M1.COMBAT SEARCH AND RESCUE'] = ((force2525&&isNaN(SIDC)) ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >H</text>':'<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >CSAR</text>');
	icons['AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >SEAD</text>';
	icons['AIR.M1.UNMANNED AERIAL VEHICLE']  = '<g transform="translate(20,-10),scale(0.8)">' + icons['AIR.ICON.UNMANNED AERIAL VEHICLE'] + '</g>';
	icons['AIR.M1.BOOM-ONLY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >B</text>';
	icons['AIR.M1.DROUGE-ONLY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >D</text>';
	//2525D
	icons['AIR.M1.ELECTRONIC SUPPORT (ES)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >ES</text>';
	icons['AIR.M1.FIGHTER/BOMBER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >F/B</text>';
	icons['AIR.M1.ELECTRONIC ATTACK (EA)'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >EA</text>';
	icons['AIR.M1.MULTIMISSION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >MM</text>';
	icons['AIR.M1.HIJACKING'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >H</text>';
	icons['AIR.M1.ASW HELO-LAMPS'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >LP</text>';
	icons['AIR.M1.ASW HELO – SH-60R'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="23" >60R</text>';

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

	icons['AIR.MISSILE.ICON'] = '<path d="M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z" ' + (force2525 ? ('fill="' + (frame?symbolColors.fillColor['Unknown']:symbolColors.iconFillColor['Unknown']) + '"'):'') + ' />';
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
	icons['GROUND.ICON.AVIATION COMPOSITE'] = _MilSymbol.scale(0.5,icons['GROUND.ICON.AVIATION FIXED WING'] + _MilSymbol.rotate(90,icons['GROUND.ICON.AVIATION ROTARY WING']));
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
	icons['GROUND.ICON.ELECTRONIC RANGING'] ='<path d="M120,130 c-40,20 -80,-45 -40,-70 z M100,95 L140,75" fill="'+ (force2525 ? iconFillColor : 'none') + '"/>';
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
	icons['GROUND.ICON.FIXED WING MISO'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"  d="M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0 " />' + '<path d="M 78.75 61.5 C 68.125 61.5 68.125 78.5 78.75 78.5 L 100 70 L 78.75 61.5 z M 100 70 L 121.25 78.5 C 131.875 78.5 131.875 61.5 121.25 61.5 L 100 70 z " />';
	icons['GROUND.ICON.GEOSPATIAL SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GEO</text>';
	icons['GROUND.ICON.GOVERNMENT ORGANIZATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GO</text>';
	icons['GROUND.ICON.INFORMATION OPERATIONS'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(force2525?'IW':'IO')+'</text>';
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
	icons['GROUND.ICON.MORTAR'] = '<circle cx="100" cy="115" r="5" fill="none"/><path d="M100,111 l0,-30 M90,90 l10,-10 10,10" fill="none" />';
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
	icons['GROUND.ICON.PSYCHOLOGICAL OPERATIONS'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '"  d="M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0 " />'; //TODO		
	icons['GROUND.ICON.QUARTERMASTER'] = '<path fill="none" d="m 115,95 c 0,15 15,15 15,0 0,-15 -15,-15 -15,0 z m 0,0 -45,0 0,10 10,0 0,-10" />';
	icons['GROUND.ICON.RADAR'] = '<path d="M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50"  fill="none" />';
	icons['GROUND.ICON.RADIO'] = '<circle cx="100" cy="130" r="10" fill="none" /><path fill="none" d="M100,120 l0,-60 M70,70 l10,-10 10,10 10,-10 10,10 10,-10 10,10" />';
	icons['GROUND.ICON.RADIO RELAY'] = '<circle cx="100" cy="130" r="10" fill="none" /><path fill="none" d="M100,120 l-15,-40 15,0 0,-20 M70,60 l60,0" />';
	icons['GROUND.ICON.RADIO TELETYPE CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-family="Arial" font-size="30" font-weight="bold" >C</text><path fill="none" d="M100,140 l0,-80  M70,60 l60,0 M80,70 l40,0" />';
	icons['GROUND.ICON.RAILHEAD'] = '<path fill="none" d="M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 "></path><circle cx="100" cy="100" r="20" fill="none"  />' + _MilSymbol.translate(0,-50,'<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="75" cy="125" r="5" /><circle fill="none" cx="125" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />');
	icons['GROUND.ICON.RELIGIOUS SUPPORT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >REL</text>';
	icons['GROUND.ICON.REPLACEMENT HOLDING UNIT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >RHU</text>';
	icons['GROUND.ICON.SEA-AIR-LAND'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="32" >SEAL</text>';
	icons['GROUND.ICON.SEAPORT OF DEBARKATION'] = '<path fill="none" d="M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19 "></path><circle cx="100" cy="100" r="20" fill="none"  />' + _MilSymbol.translate(0,-35,_MilSymbol.scale(0.6, icons['GROUND.ICON.NAVAL']));		
	icons['GROUND.ICON.SECURITY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SEC</text>';
	icons['GROUND.ICON.SECURITY POLICE (AIR)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SP</text>' + '<path d="M 78.75 121.5 C 68.125 121.5 68.125 138.5 78.75 138.5 L 100 130 L 78.75 121.5 z M 100 130 L 121.25 138.5 C 131.875 138.5 131.875 121.5 121.25 121.5 L 100 130 z " />';
	icons['GROUND.ICON.SENSOR'] = '<path d="m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z" />';//'<path fill="none" d="m 70,75 10,-15 10,15 10,-15 10,15 10,-15 10,15" />';	
	icons['GROUND.ICON.SHORE PATROL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SP</text>';
	icons['GROUND.ICON.SNIPER'] = '<path fill="none" d="M 60 85 L 90 85 L 60 85 z M 110 85 L 140 85 L 110 85 z M 100 90 L 100 115 L 100 90 z " />';		
	icons['GROUND.ICON.SPECIAL FORCES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >SF</text>';
	icons['GROUND.ICON.SPECIAL OPERATIONS FORCES'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'];
	icons['GROUND.ICON.SURVEILLANCE'] = '<path d="m 100,80 -25,40 50,0 z" />';	
	icons['GROUND.ICON.SURVEY'] = '<path d="M85,120 l15,-15 15,15 " fill="none"/><path d="M100,105 l0,-25 20,12.5 z" fill="'+ (force2525 ? iconFillColor : 'none') + '" />';
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

	icons['GROUND.ICON.FULLFRAME.AIR ASSAULT WITH ORGANIC LIFT'] = {"Unknown" : '<path d="M35,120 L 90,120 l10,10 10,-10 L165,120 " fill="none" />',"Friend" : '<path d="M25,120 L 90,120 l10,10 10,-10 L175,120 " fill="none" />',"Neutral" : '<path d="M45,120 L 90,120 l10,10 10,-10 L155,120 " fill="none" />',"Hostile" : '<path d="M50,120 L 90,120 l10,10 10,-10 L150,120 " fill="none" />'}[affiliationType];	
	icons['GROUND.ICON.FULLFRAME.AIR DEFENCE'] = {"Unknown" : '<path d="M65,140 C65,115 135,115 135,140 "  fill="none"></path>',"Friend" : '<path d="M25,150 C25,110 175,110 175,150 "  fill="none"></path>',"Neutral" : '<path d="M45,150 C45,110 155,110 155,150 "  fill="none"></path>',"Hostile" : '<path d="M70,140 C70,115 130,115 130,140 "  fill="none"></path>'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.AIR AND NAVAL GUNFIRE LIAISON COMPANY'] = ''; //TODO		
	icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] = {"Unknown" : '<path d="M30,105 c10,0 0,-15 13.5,-15  c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c13.5,0 3.5,15 13.5,15 "  fill="none" />',"Friend" : '<path d="M25,110 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 20,20"  fill="none" />',"Neutral" : '<path d="M45,90   c18.75,0 0,20 18,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18,-20  "  fill="none" />',"Hostile" : '<path d="M32,105 c10,0 0,-15 11.5,-15  c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c18.75,0 0,20 18.75,20 c18.75,0 0,-20 18.75,-20 c11.5,0 1.5,15 11.5,15 "  fill="none" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.ANALYSIS'] = '<path d="m 100,120 0,-65 m 0,90 -30,-25 60,0 z"  fill="none"/>'; 	
	icons['GROUND.ICON.FULLFRAME.ANTITANK/ANTIARMOUR'] = {"Unknown" : '<polyline fill="none"  points="55,135 100,33 145,135" />',"Friend" : '<polyline fill="none"   points="25,150 100,52 175,150" />',"Neutral" : '<polyline fill="none"   points="45,150 100,47 155,150" />',"Hostile" : '<polyline fill="none"  points="60,132 100,30 140,132" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.BORDER PATROL'] = '<path stroke="none" d="M 122.84375 66.78125 C 119.8942 66.78125 117.375 68.644201 117.375 71.59375 L 117.375 73.0625 L 128.71875 73.0625 L 128.71875 72.4375 C 128.71875 68.750564 126.53068 66.78125 122.84375 66.78125 z M 108.5625 74.75 L 108.5625 75.96875 L 117.59375 75.96875 L 117.53125 77.5 L 118.03125 80.8125 C 119.11793 81.511078 118.90326 82.498503 120.84375 83.46875 C 122.12448 84.089708 123.97683 84.019648 125.21875 83.4375 C 127.46972 82.350824 129.01863 79.221218 128.28125 76 L 137.53125 76 L 137.53125 74.75 L 108.5625 74.75 z M 94.75 82.09375 C 93.275225 82.05494 92.03125 83.478856 92.03125 85.03125 L 92.03125 85.21875 C 92.03125 86.615905 96.037314 91.344275 96.96875 92.625 C 98.210666 94.293824 100.82766 98.84375 103.15625 98.84375 C 104.51459 98.84375 111.12654 93.720246 112.5625 92.75 L 112.625 106.15625 L 126.40625 85.59375 C 122.95218 85.59375 114.85782 85.215232 112.21875 85.875 C 110.23944 86.418338 104.99846 91.57107 103.5625 91.6875 C 103.36845 91.027732 100.58971 87.462686 99.96875 86.53125 C 99.192552 85.366954 97.216205 82.09375 95.625 82.09375 L 94.75 82.09375 z M 130.375 85.625 C 129.55999 85.625 117.46924 104.06052 116.34375 106.15625 L 128.0625 106.15625 L 128.0625 110.5625 L 112.53125 110.5625 L 112.53125 133.1875 L 120.65625 133.1875 L 122 117.5 L 124.34375 117.5 L 125.5625 133.21875 L 133.53125 133.21875 L 133.53125 87.9375 C 133.53125 87.161302 131.19001 85.625 130.375 85.625 z M 66.90625 90.65625 C 66.518151 91.432447 62.46875 96.9375 62.46875 96.9375 C 62.46875 97.752507 76.745996 107.17946 78.53125 108.34375 C 81.36437 110.24543 83.88563 112.09832 86.71875 114 C 88.154715 115.00906 89.415345 115.88106 90.8125 116.8125 C 92.132035 117.70513 94.125 118.50456 94.125 120.40625 L 94.125 133.1875 L 105.46875 133.1875 L 105.46875 121.6875 C 105.46875 120.56202 107.15625 118.98286 107.15625 118.75 C 107.15625 117.62452 106.05191 118.57507 105.625 116.90625 C 105.2369 115.43147 105.35382 115.63304 104.5 114.46875 C 103.52976 113.14921 101.94704 112.03125 99.8125 112.03125 C 96.785331 112.03125 97.641091 111.76359 95.3125 110.25 C 93.876535 109.27976 92.538286 108.3765 91.21875 107.40625 C 88.73492 105.50457 85.78776 103.52014 83.1875 101.8125 C 80.858908 100.26011 68.225785 90.966728 66.90625 90.65625 z M 67.9375 92.5625 L 72.71875 95.71875 L 72.75 103.03125 L 67.9375 99.875 L 67.9375 92.5625 z M 77.8125 99.25 L 82.625 102.59375 L 82.625 109.96875 L 77.8125 106.59375 L 77.8125 99.25 z M 87.4375 106.15625 L 92.46875 109.5 L 92.4375 116.875 L 87.4375 113.5 L 87.4375 106.15625 z "/>' +  '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="none"  d="M 117.375 73.0625 L 117.375 74.75 L 128.71875 74.75 L 128.71875 73.0625 L 117.375 73.0625 z M 126.4375 85.625 L 112.625 106.21875 L 112.5625 110.5625 L 128.09375 110.5625 L 128.09375 106.15625 L 116.375 106.15625 C 117.46168 104.06052 129.58368 85.625 130.4375 85.625 L 126.4375 85.625 z M 67.9375 92.5625 L 67.9375 99.875 L 72.75 103.03125 L 72.71875 95.71875 L 67.9375 92.5625 z M 77.8125 99.25 L 77.8125 106.59375 L 82.5625 109.96875 L 82.625 102.59375 L 77.8125 99.25 z M 87.4375 106.15625 L 87.4375 113.5 L 92.4375 116.875 L 92.46875 109.5 L 87.4375 106.15625 z " />';
	icons['GROUND.ICON.FULLFRAME.BROADCAST TRANSMITTER ANTENNA'] = '<path fill="none" d="m 80,60 20,20 20,-20 m -20,0 0,80"  />';
	icons['GROUND.ICON.FULLFRAME.CORPS SUPPORT'] = {"Unknown" : '<path d="M160,75 l-15,25 15,25" fill="none"/>',"Friend" : '<path d="M175,50 l-30,50 30,50" fill="none"/>',"Neutral" : '<path d="M155,50 l-20,50 20,50" fill="none"/>',"Hostile" : '<path d="M150,80 l-15,20 15,20" fill="none"/>'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.CUSTOMS SERVICE'] = '<path stroke="none" d="M 115.5 69.84375 C 115.81302 70.430653 116.90522 72.875 117.53125 72.875 L 128.25 72.875 L 128.25 69.84375 L 115.5 69.84375 z M 117.34375 74.71875 C 116.75685 74.71875 115.98476 75.733732 115.75 76.125 L 117.15625 76.125 L 117.15625 76.75 C 117.15625 79.645385 119.79973 81.8125 122.8125 81.8125 C 126.52955 81.8125 128.3125 78.631431 128.3125 74.71875 L 117.34375 74.71875 z M 111.28125 83.5625 C 110.53784 83.5625 99.432453 91.810699 97.75 92.90625 C 95.558898 94.353942 93.042471 96.083301 90.96875 97.6875 C 89.051536 99.213446 85.375 100.53399 85.375 103.625 L 85.375 104.03125 C 85.375 104.65728 87.131076 106.65625 88.1875 106.65625 L 88.78125 106.65625 C 90.228943 106.65625 108.0416 93.377829 111.25 91.65625 L 111.34375 105.28125 L 126.03125 83.5625 L 111.28125 83.5625 z M 75.25 83.59375 C 74.467464 83.59375 73.40625 84.373971 73.40625 85 L 73.40625 108.90625 C 73.40625 109.80617 73.858474 110.17911 74.40625 110.53125 L 78.5 110.53125 L 78.5 83.59375 L 75.25 83.59375 z M 78.5 110.53125 L 78.5 135.21875 L 105.59375 135.21875 L 105.59375 110.53125 L 78.5 110.53125 z M 130.5 83.59375 C 129.60009 83.59375 123.77491 92.888439 122.875 94.21875 C 121.89683 95.744696 115.73477 104.45959 115.5 105.28125 L 127.625 105.28125 L 127.625 110.34375 L 111.46875 110.34375 L 111.46875 134.8125 L 119.5625 134.8125 C 120.61893 134.8125 121.05436 127.92407 121.25 126.59375 C 121.71952 123.894 122.39811 120.39487 122.59375 117.8125 L 122.90625 117.8125 L 125.40625 134.78125 L 133.90625 134.78125 L 133.90625 86.65625 C 133.90625 85.638953 131.90831 83.59375 130.65625 83.59375 L 130.5 83.59375 z "/>' +  '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="none"  d="M 117.53125 72.875 L 117.34375 74.71875 L 128.25 74.71875 L 128.25 72.875 L 117.53125 72.875 z M 126.03125 83.65625 L 111.34375 105.34375 L 111.46875 110.34375 L 127.6875 110.34375 L 127.6875 105.28125 L 115.53125 105.28125 C 115.72689 104.49871 121.88896 95.736819 122.90625 94.25 C 123.80617 92.919689 129.63133 83.65625 130.53125 83.65625 L 126.03125 83.65625 z " />';
	icons['GROUND.ICON.FULLFRAME.DEPARTMENT OF JUSTICE (DOJ)'] = '<path  stroke="none" d="M 100.21875 62.25 C 100.13455 63.218228 99.024275 66.322578 98.6875 67.375 C 97.845562 69.900813 99.375 70.028422 99.375 72.34375 L 99.375 72.96875 C 99.375 73.726494 98.901856 73.517822 98.3125 73.8125 C 96.628625 72.381206 94.238878 71.03125 91.25 71.03125 L 89.96875 71.03125 C 84.159381 71.03125 80.035095 75.53125 74.5625 75.53125 L 73.90625 75.53125 C 72.264472 75.53125 71.470041 74.066125 71.34375 75.75 L 74.25 77.1875 C 71.766284 82.365416 69.888676 89.69063 67.53125 95.5 C 66.268344 98.573072 65.345809 101.60358 64.125 104.71875 C 63.493546 106.31843 63.131454 107.69242 62.5 109.25 C 61.994838 110.51291 61.818431 113.14541 60.21875 113.1875 C 62.365691 116.38687 68.01914 120.46875 73.28125 120.46875 L 76.03125 120.46875 C 81.630136 120.46875 87.300115 116.55526 89.53125 113.1875 L 88.21875 113.1875 L 75.375 77.21875 L 74.53125 77.21875 L 74.53125 77 L 75.375 77.21875 L 78.5625 77.71875 L 79.25 77.65625 L 89.25 76.21875 L 90.375 76.34375 C 93.700654 76.34375 93.814312 80.1875 94.65625 80.1875 L 97.65625 80.1875 L 97.65625 129.1875 L 86.09375 129.1875 L 86.09375 131.53125 L 81.40625 131.53125 L 81.40625 134.09375 L 77.53125 134.09375 L 77.53125 138.1875 L 123.3125 138.1875 L 123.3125 133.9375 L 119.25 133.9375 L 119.25 131.5625 L 114.53125 131.5625 L 114.53125 129.21875 L 102.5625 129.21875 L 102.5625 80.21875 L 105.96875 80.21875 C 106.97907 80.21875 106.6041 76.375 110.6875 76.375 L 111.3125 76.375 L 121.1875 77.65625 L 122.21875 77.6875 L 125.4375 77.3125 C 124.30088 79.712022 123.07282 83.785396 122.0625 86.4375 C 120.88378 89.594766 119.93956 92.634831 118.71875 95.75 C 117.49794 98.907266 116.55371 101.88483 115.375 105 C 114.86984 106.3892 114.18182 108.13121 113.71875 109.5625 C 113.42408 110.44654 113.12758 111.10641 112.875 111.90625 C 112.49612 113.16915 112.75594 113.1875 111.15625 113.1875 C 113.30319 116.38687 119.2366 120.46875 124.625 120.46875 L 127.1875 120.46875 C 132.61799 120.46875 138.77016 116.38687 140.875 113.1875 L 139.78125 113.1875 L 126.4375 77.0625 C 127.44783 76.93621 129.3125 76.185688 129.3125 75.34375 C 129.3125 74.501812 127.77117 75.53125 126.71875 75.53125 L 126.3125 75.53125 C 120.79781 75.53125 116.58933 71.03125 110.90625 71.03125 L 109.625 71.03125 C 106.67821 71.03125 104.16218 72.423303 102.5625 73.8125 C 101.76266 73.433628 101.25 73.575406 101.25 72.3125 C 101.25 71.891531 102.36287 68.847622 102.53125 68.46875 L 100.5625 62.28125 L 100.21875 62.25 z M 126.0625 80.75 L 137.8125 113.1875 L 114.09375 113.1875 L 126.0625 80.75 z M 74.75 80.8125 L 86.5 113.21875 L 63.09375 113.125 L 74.75 80.8125 z "/>';
	icons['GROUND.ICON.FULLFRAME.DIRECTION FINDING'] = '<path  d="M100,140 l0,-80 M80,80 l20,-20 20,20 " fill="none"/>';
	icons['GROUND.ICON.FULLFRAME.DIVISION AND BELOW SUPPORT'] = {"Unknown" : '<path d="M40,75 l15,25 -15,25" fill="none"/>',"Friend" : '<path d="M25,50 l30,50 -30,50" fill="none"/>',"Neutral" : '<path d="M45,50 l20,50 -20,50" fill="none"/>',"Hostile" : '<path d="M50,80 l15,20 -15,20" fill="none"/>'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION'] = '<path  d="M 100 65 L 115.15625 91.25 L 130.3125 117.5 C 133.29057 112.35191 135 106.37513 135 100 C 135 80.670034 119.32997 65 100 65 z M 100 65 C 80.670034 65 65 80.670034 65 100 C 65 106.37513 66.709432 112.35191 69.6875 117.5 L 84.84375 91.25 L 100 65 z M 69.6875 117.5 C 75.739201 127.96138 87.045164 135 100 135 C 112.95484 135 124.2608 127.96138 130.3125 117.5 L 100 117.5 L 69.6875 117.5 z " />'+'<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="none"  d="M 69.6875,117.5 100,65 l 30.3125,52.5 z" />';
	icons['GROUND.ICON.FULLFRAME.FIELD ARTILLERY ROCKET'] = '<path  d="M100,150 l0,-97 M85,130 l0,-50 M115,130 l0,-50 M85,73 l15,-20 15,20" fill="none"/>';
	icons['GROUND.ICON.FULLFRAME.HEADQUARTERS OR HEADQUARTERS ELEMENT'] = {"Unknown" : '<path d="M35,80 l130,0 " fill="none" />',"Friend" : '<path d="M25,80 l150,0 " fill="none" />',"Neutral" : '<path d="M45,80 l110,0 " fill="none" />',"Hostile" : '<path d="M50,80 l100,0 " fill="none" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.HORSE'] = '<path d="m 129.02826,72.816978 c 0,0 -6.31831,2.015821 -8.95372,2.578473 -3.421,0.730371 -4.85395,1.798526 -7.73318,3.10818 -4.15516,1.890028 -6.80372,3.628523 -11.31459,4.328272 -3.307178,0.513027 -7.734291,1.732275 -10.99552,0.980597 -3.858159,-0.889265 -6.146533,-2.89337 -10.105791,-2.91466 -3.682324,-0.0198 -7.441926,-0.625799 -10.598529,1.270451 -2.618553,1.573031 -4.652507,4.230533 -5.82693,7.050459 -2.262545,5.432634 -0.829202,12.49915 -1.15625,18.375 -0.171746,3.08565 -0.431969,9.29338 -0.591361,10.15262 0,0 1.583246,-0.01 3.429091,-2.46273 0.895347,-1.22107 1.666253,-3.43552 1.900229,-4.93148 0.484657,-3.09872 -0.708058,-7.45188 -0.400229,-9.96636 1.123089,-0.2883 2.439708,2.84704 2.64545,4.6767 0.219551,1.95245 -1.015426,3.28413 -1.35818,5.21875 -0.524666,2.9614 0.323638,5.02104 0.565018,8.30998 0.120689,1.64447 0.756822,3.9306 0.533203,5.98227 -0.217418,1.99477 -0.213569,4.33275 -0.213569,4.33275 l 6.861717,0 -0.41466,-3.83534 c 0,0 -1.797321,-2.48145 -2.144209,-4.28966 -0.520165,-2.71146 -0.531167,-5.3573 0.15625,-8.03125 0.518837,-2.01819 3.059801,-4.2693 4.081709,-6.08534 1.754275,-3.11754 3.114201,-7.082951 3.114201,-7.082951 0,0 5.133389,3.408901 9.074541,4.218751 3.781078,0.77696 11.635799,1.35579 11.635799,1.35579 0,0 -0.17653,7.31287 0.0625,12.375 -0.037,0.0803 0.33104,3.86771 0.29614,3.12838 -1.43617,3.20417 -0.0155,8.19559 -0.0155,8.19559 0,0 2.93751,0.004 6.28188,-0.0427 l -0.28125,-3.375 c 0,0 -1.49675,-3.49293 -1.46875,-5.3125 0.0485,-3.14535 0.0631,-5.88448 0.9375,-8.90625 0.35017,-1.2102 0.66073,-2.94136 1.34375,-4 1.39935,-2.16891 3.13345,-3.75514 4.15625,-6.125 1.12616,-2.609388 2.29743,-5.334561 3.55653,-7.882463 1.60813,-3.254188 7.78722,-7.34375 7.78722,-7.34375 0,0 5.0302,2.888656 8.44706,4.895859 1.18382,0.695427 3.00549,0.12849 3.72195,-1.042726 0.65417,-1.069393 0.78712,-2.203755 0.25192,-3.337372 -3.15475,-6.682052 -7.83017,-9.384791 -7.83017,-9.384791 z" stroke="none"  />'; // Yes the horse looks like crap, but who uses it really... And the reason for how this comment is done is if I sort all base geometries it should still be close to the Horse...
	icons['GROUND.ICON.FULLFRAME.INFANTRY'] = {"Unknown" : '<line x1="50" y1="65" x2="150" y2="135"  /><line x1="50" y1="135" x2="150" y2="65"  />',"Friend" : '<line x1="25" y1="50" x2="175" y2="150"  /><line x1="25" y1="150" x2="175" y2="50"  />',"Neutral" : '<line x1="45" y1="45" x2="155" y2="155"  /><line x1="45" y1="155" x2="155" y2="45"  />',"Hostile" : '<line x1="60" y1="70" x2="140" y2="130"  /><line x1="60" y1="130" x2="140" y2="70"  />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.INTERCEPT'] = '<path  d="M100,120 l0,-60 M80,120 l20,20 20,-20 "/>';
	icons['GROUND.ICON.FULLFRAME.JAMMING'] = {"Unknown" : '<path d="M63,60 c10,0 0,10 7,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10 M40,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 " fill="none" stroke-width="2"/>',"Friend" : '<path d="M25,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 M25,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10" fill="none" stroke-width="2"/>',"Neutral" : '<path d="M45,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10  M45,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10  " fill="none" stroke-width="2"/>',"Hostile" : '<path d="M67,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 13,10   M52,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10   " fill="none" stroke-width="2"/>'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.LAW ENFORCEMENT'] = '<path d="m 99.59375,50.96875 c -2.766962,0 -5.03125,2.348087 -5.03125,5.25 0,2.083265 1.16779,3.868908 2.84375,4.71875 L 87.75,78.34375 69.53125,78.40625 c -0.06442,-2.843135 -2.304838,-5.125 -5.03125,-5.125 -2.766962,0 -5,2.348087 -5,5.25 0,2.901913 2.233038,5.28125 5,5.28125 0.701529,0 1.393843,-0.164446 2,-0.4375 l 9.1875,16.84375 -9.375,17.21875 c -0.558377,-0.22539 -1.178405,-0.375 -1.8125,-0.375 -2.766962,0 -5,2.37934 -5,5.28125 0,2.90191 2.233038,5.25 5,5.25 2.766962,0 5.03125,-2.34809 5.03125,-5.25 0,-0.10101 -0.02589,-0.2129 -0.03125,-0.3125 l 18.25,0.0625 9.46875,17.09375 c -1.568145,0.88776 -2.65625,2.59371 -2.65625,4.59375 0,2.90191 2.264288,5.25 5.03125,5.25 2.76696,0 5,-2.34809 5,-5.25 0,-1.87114 -0.93946,-3.50659 -2.34375,-4.4375 l 9.59375,-17.25 18.65625,-0.0625 c -0.005,0.0996 -0.0312,0.21149 -0.0312,0.3125 0,2.90191 2.26429,5.25 5.03125,5.25 2.76696,0 5,-2.34809 5,-5.25 0,-2.90191 -2.23304,-5.28125 -5,-5.28125 -0.757,0 -1.48163,0.21601 -2.125,0.53125 l -9.5,-17.375 9.5,-17.375 c 0.64337,0.315236 1.368,0.53125 2.125,0.53125 2.76696,0 5,-2.379337 5,-5.28125 0,-2.901913 -2.23304,-5.25 -5,-5.25 -2.76696,0 -5.03125,2.348087 -5.03125,5.25 0,0.101009 0.0259,0.212899 0.0312,0.3125 L 111.84375,78.34375 102.0625,60.75 c 1.50211,-0.907251 2.53125,-2.58277 2.53125,-4.53125 0,-2.901913 -2.23304,-5.25 -5,-5.25 z" />'; 
	icons['GROUND.ICON.FULLFRAME.MAIN GUN SYSTEM'] = {"Unknown" : '<line x1="55" y1="65" x2="55" y2="135"  />',"Friend" : '<line x1="55" y1="50" x2="55" y2="150"  />',"Neutral" : '<line x1="55" y1="45" x2="55" y2="155"  />',"Hostile" : '<line x1="55" y1="72" x2="55" y2="128"  />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.MEDICAL'] = '<line x1="100" y1="'+symbolBaseGeometry.BBox['Ground'+affiliationType].y+'" x2="100" y2="'+(symbolBaseGeometry.BBox['Ground'+affiliationType].y+symbolBaseGeometry.BBox['Ground'+affiliationType].height)+'"  /><line x1="'+symbolBaseGeometry.BBox['Ground'+affiliationType].x+'" y1="100" x2="'+(symbolBaseGeometry.BBox['Ground'+affiliationType].x+symbolBaseGeometry.BBox['Ground'+affiliationType].width)+'" y2="100"  />';
	icons['GROUND.ICON.FULLFRAME.MEDICAL THEATER'] = {"Unknown" : '<path d="M100,170 l0,-140 M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M55,100 l90,0 " fill="none" />',"Friend" : '<path d="M100,150 l0,-100 M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M55,100 l90,0 " fill="none" />',"Neutral" : '<path d="M100,155 l0,-110  M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M65,100 l70,0 " fill="none" />',"Hostile" : '<path d="M100,172 l0,-144 M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M65,100 l70,0 " fill="none" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.MEDICAL CORPS'] = {"Unknown" : '<path d="M100,170 l0,-140 M160,75 l-15,25 15,25 M30,100 l115,0 " fill="none" />',"Friend" : '<path d="M100,150 l0,-100  M175,50 l-30,50 30,50 M25,100 l120,0 " fill="none" />',"Neutral" : '<path d="M100,155 l0,-110 M155,50 l-20,50 20,50 M45,100 l90,0 " fill="none" />',"Hostile" : '<path d="M100,172 l0,-144  M150,80 l-15,20 15,20 M28,100 l110,0 " fill="none" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.MEDICAL TREATMENT FACILITY'] =  icons['GROUND.ICON.FULLFRAME.MEDICAL'] + '<path fill="none" d="M70,90 l0,20  M130,90 l0,20 " />';
	icons['GROUND.ICON.FULLFRAME.MOTORIZED'] = '<line x1="100" y1="'+symbolBaseGeometry.BBox['Ground'+affiliationType].y+'" x2="100" y2="'+(symbolBaseGeometry.BBox['Ground'+affiliationType].y+symbolBaseGeometry.BBox['Ground'+affiliationType].height)+'"  />';
	icons['GROUND.ICON.FULLFRAME.NAVAL'] = '<path d="M 100,145 100,65"  fill="none"></path><path d="m 70,70 60,0"  fill="none"></path><path d="m 57.804999,105.46002 c -2.153957,0.1368 1.329404,20.63315 2.753662,22.08491 0.828444,0.84444 3.532992,-3.77889 4.561621,-2.58676 17.395838,20.16063 33.012786,19.74448 34.712829,19.63722 0,0 0.233929,-0.005 0.333769,0 1.70004,0.10724 17.317,0.52341 34.71284,-19.63722 1.02862,-1.19213 3.73318,3.4312 4.56162,2.58676 1.42426,-1.45176 4.90762,-21.9481 2.75366,-22.08491 -2.15396,-0.13682 -3.95562,4.15843 -6.70335,6.4252 -2.96765,2.44819 -7.5053,3.41919 -7.67689,4.45036 -0.1352,0.81256 4.9462,3.53808 3.86625,4.86759 -5.08546,6.26072 -15.11764,16.59815 -31.34724,16.96701 l -0.333772,4.28347 -0.333776,-4.28347 c -16.2296,-0.36886 -26.261768,-10.70629 -31.347241,-16.96701 -1.079943,-1.32951 4.001463,-4.05503 3.866252,-4.86759 -0.171589,-1.03117 -4.709231,-2.00217 -7.676875,-4.45036 -2.747734,-2.26677 -4.549411,-6.56202 -6.703359,-6.4252 z" stroke="none" ></path><circle cx="100" cy="60" r="5" fill-opacity="0" />';
	icons['GROUND.ICON.FULLFRAME.PRISON'] = '<path   stroke="none" d="M 62.5 67.90625 L 62.5 73.40625 L 69.9375 73.40625 L 69.9375 106 C 66.847607 106.72039 64.40625 109.5964 64.40625 113.40625 C 64.40625 116.04342 65.765118 116.90178 65.875 118.4375 C 66.013012 120.35165 65.625 122.45293 65.625 124.6875 L 65.625 126.59375 L 62.5 126.59375 L 62.5 132.09375 L 137.5 132.09375 L 137.5 126.59375 L 136.03125 126.59375 L 135.59375 117.5 C 138.33202 113.41017 135.82014 107.00696 131.5 106 L 131.5 73.40625 L 137.5 73.40625 L 137.5 67.90625 L 62.5 67.90625 z M 74.46875 73.40625 L 87.1875 73.40625 L 87.1875 108.375 C 87.1875 109.18594 84.806803 109.65448 83.875 110.59375 C 83.125163 111.34974 82.246934 112.69627 81.625 113.625 C 80.54112 115.24379 78.617442 118.65568 78.5625 121.09375 L 76.125 117.03125 C 76.460801 116.38734 76.875 114.61882 76.875 113.65625 L 76.875 112.21875 C 76.875 109.48312 74.46875 107.90821 74.46875 106.46875 L 74.46875 73.40625 z M 91.5 73.40625 L 110.1875 73.40625 L 110.1875 90.90625 C 109.04472 89.591617 108.84528 87.751092 106.78125 85.6875 C 105.40992 84.315729 103.46818 83 100.84375 83 L 100.34375 83 C 98.244992 83 96.116274 83.583581 94.90625 84.5 C 94.256185 84.993592 93.648392 85.417184 93.0625 86 C 92.419028 86.639955 92.203247 87.310514 91.5 87.78125 L 91.5 73.40625 z M 114.25 73.40625 L 127.1875 73.40625 L 127.1875 106.46875 C 127.1875 106.89202 124.826 109.18224 124.40625 111.09375 C 123.72806 114.1832 124.4845 114.6472 125.03125 117 L 123.25 120.1875 C 122.70366 118.30587 120.70369 115.01198 119.6875 113.5 C 118.29859 111.42938 117.33725 109.1308 114.25 108.875 L 114.25 73.40625 z M 99.65625 84.90625 L 100.59375 84.90625 C 104.76664 84.90625 108.5 90.428502 108.5 94.71875 L 108.5 96.40625 C 108.5 100.39102 104.96895 106.21875 101.3125 106.21875 L 99.40625 106.21875 C 94.907665 106.21875 91.374381 100.1849 91.5625 95.46875 C 91.751497 90.710843 94.937022 84.90625 99.65625 84.90625 z M 110.28125 100.53125 L 110.1875 106.9375 L 106.71875 106.3125 L 110.28125 100.53125 z M 91.5 103.59375 L 94.3125 106.75 L 91.5 107.4375 L 91.5 103.59375 z M 70.65625 107.90625 C 72.94488 107.90625 74.71875 110.43139 74.71875 112.6875 L 74.71875 113.40625 C 74.71875 117.88593 70.024831 120.24154 67.625 116.6875 C 65.677444 113.80463 66.883768 107.90625 70.65625 107.90625 z M 130.5625 107.90625 C 132.81597 107.90625 134.375 110.81272 134.375 113.1875 L 134.375 113.40625 C 134.375 116.67547 133.04212 116.65886 132 118.21875 L 128.875 118.28125 L 126.65625 115.40625 L 126.46875 113.1875 C 126.13822 110.98062 128.23519 107.90625 130.5625 107.90625 z M 105.875 108.15625 C 107.1782 108.15625 108.90539 109.04487 110.1875 109.34375 L 110.1875 126.59375 L 91.5 126.59375 L 91.5 110.0625 C 91.5 108.61029 96.633231 108.87412 98.4375 108.875 C 101.14895 108.877 104.02414 108.15625 105.875 108.15625 z M 114.25 110.78125 C 117.18957 112.33454 117.35479 113.42971 118.96875 116.375 C 120.11064 118.45749 121.6875 120.896 121.6875 123.96875 C 121.86858 124.23906 122.26111 124.90625 122.65625 124.90625 C 124.03286 124.90625 125.51708 119.81743 126.71875 118.9375 L 126.71875 119.40625 L 127.1875 119.40625 L 127.1875 126.59375 L 114.25 126.59375 L 114.25 110.78125 z M 87.1875 111.25 L 87.1875 126.59375 L 74.46875 126.59375 L 74.46875 118.9375 C 75.83261 119.43109 77.410053 125.40625 78.5625 125.40625 C 80.592247 125.40625 80.666777 119.58293 81.90625 117.5 C 83.198027 115.33224 84.353853 111.91105 87.1875 111.25 z M 133.59375 119.65625 L 133.90625 126.59375 L 131.5 126.59375 L 131.5 120.375 L 133.59375 119.65625 z M 68.0625 119.90625 C 68.643998 120.05393 69.9375 120.34083 69.9375 121.09375 L 69.9375 126.59375 L 67.71875 126.59375 L 68.0625 119.90625 z "/>';
	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] = {"Unknown" : '<line x1="50" y1="135" x2="150" y2="65"  />',"Friend" : '<line x1="25" y1="150" x2="175" y2="50"  />',"Neutral" : '<line x1="45" y1="155" x2="155" y2="45"  />',"Hostile" : '<line x1="60" y1="130" x2="140" y2="70"  />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.SEARCH'] = '<path d="m 100,145 0,-90 m 30,65 -30,25 -30,-25"  fill="none"/>'; 
	icons['GROUND.ICON.FULLFRAME.SENSOR'] = '<path d="M'+symbolBaseGeometry.BBox['Ground'+affiliationType].x+',100 L75,100 M'+(200-symbolBaseGeometry.BBox['Ground'+affiliationType].x)+',100 L125,100 " /><path d="M65,85 l70,0 -15,30 -40,0 z"  fill="'+ (force2525 ? iconFillColor : 'none') + '" />';	
	icons['GROUND.ICON.FULLFRAME.SIGNAL'] = {"Unknown" : '<path fill="none" d="M50,65 100,110 100,90 150,135" />',"Friend" : '<path fill="none" d="M25,50 100,110 100,90 175,150" />',"Neutral" : '<path fill="none" d="M45,45 100,110 100,90 155,155" />',"Hostile" : '<path fill="none" d="M57,70 100,110 100,90 143,130" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.SOUND'] = '<path d="M'+symbolBaseGeometry.BBox['Ground'+affiliationType].x+',100 L75,100 M'+(200-symbolBaseGeometry.BBox['Ground'+affiliationType].x)+',100 L125,100 " /><path d="M65,85 l70,0 -15,30 -40,0 z"  fill="'+ (force2525 ? iconFillColor : 'none') + '" /><text stroke="none" text-anchor="middle" x="100" y="110" font-family="Arial" font-size="25" font-weight="bold">S</text>';
	icons['GROUND.ICON.FULLFRAME.SUPPLY'] = {"Unknown" : '<path d="M35,120 l130,0 " fill="none" />',"Friend" : '<path d="M25,120 l150,0 " fill="none" />',"Neutral" : '<path d="M45,120 l110,0 " fill="none" />',"Hostile" : '<path d="M50,120 l100,0 " fill="none" />'}[affiliationType];

	icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] = {"Unknown" : '<path d="M160,75 l-15,25 15,25 M35,120 l120,0" fill="none" />',"Friend" : '<path d="M175,50 l-30,50 30,50 M25,120 l135,0 " fill="none" />',"Neutral" : '<path d="M155,50 l-20,50 20,50 M45,120 l100,0 " fill="none" />',"Hostile" : '<path d="M150,80 l-15,20 15,20 M50,120 l100,0" fill="none" />'}[affiliationType];		
	icons['GROUND.ICON.FULLFRAME.SUPPLY DIVISION AND BELOW'] = {"Unknown" : '<path d="m 45,120 120,0 M 40,75 55,100 40,125" fill="none" />',"Friend" : '<path d="m 45,120 130,0 M 25,50 55,100 25,150" fill="none" />',"Neutral" : '<path d="m 57,120 98,0 M 45,50 65,100 45,150" fill="none" />',"Hostile" : '<path d="m 50,120 100,0 M 50,80 65,100 50,120" fill="none" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] = {"Unknown" : '<path d="M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M45,120 l110,0 " fill="none" />',"Friend" : '<path d="M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M40,120 l120,0 " fill="none" />',"Neutral" : '<path d=" M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M55,120 l90,0 " fill="none" />',"Hostile" : '<path d="M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M50,120 l100,0" fill="none" />'}[affiliationType];

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
	icons['GROUND.ICON.FULLFRAME.CLASS VIII'] = {"Unknown" : '<path fill="none" d="M100,120 l0,-90 M165,80 l-130,0" />',"Friend" : '<path fill="none" d="M100,120 l0,-70 M175,80 l-150,0" />',"Neutral" : '<path fill="none" d="M100,120 l0,-75 M155,80 l-110,0" />',"Hostile" : '<path fill="none" d="M100,120 l0,-92 M153,80 l-106,0" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.CLASS VIII.THEATER'] = {"Unknown" : '<path fill="none" d="M100,120 l0,-90 M155,80 l-110,0" />',"Friend" : '<path fill="none" d="M100,120 l0,-70 M155,80 l-110,0" />',"Neutral" : '<path fill="none" d="M100,120 l0,-75 M145,80 l-90,0" />',"Hostile" : '<path fill="none" d="M100,120 l0,-92 M153,80 l-106,0" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.CLASS VIII.CORPS'] = {"Unknown" : '<path fill="none" d="M100,120 l0,-90 M155,80 l-120,0" />',"Friend" : '<path fill="none" d="M100,120 l0,-70 M155,80 l-130,0" />',"Neutral" : '<path fill="none" d="M100,120 l0,-75 M145,80 l-100,0" />',"Hostile" : '<path fill="none" d="M100,120 l0,-92 M153,80 l-106,0" />'}[affiliationType];
	icons['GROUND.ICON.FULLFRAME.CLASS IX'] = '<circle cx="100" cy="100" r="10" fill="none" /><path d="m 100,110 0,10 m 0,-30 0,-10 m 8.66814,14.201619 8.41795,-4.782929 m -8.41795,15.87932 8.03532,5.35688 m -25.445182,-5.35688 -8.226637,5.35688 m 8.226637,-16.261954 -8.03532,-5.35688" fill="none" />';
	icons['GROUND.ICON.FULLFRAME.CLASS X'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-family="Arial" font-size="30" font-weight="bold" >CA</text>';
	icons['GROUND.ICON.FULLFRAME.THEATRE SUPPORT'] = {"Unknown" : '<path d="M40,75 l15,25 -15,25 M160,75 l-15,25 15,25" fill="none"/>',"Friend" : '<path d="M25,50 l30,50 -30,50 M175,50 l-30,50 30,50" fill="none"/>',"Neutral" : '<path d="M45,50 l20,50 -20,50 M155,50 l-20,50 20,50" fill="none"/>',"Hostile" : '<path d="M50,80 l15,20 -15,20 M150,80 l-15,20 15,20" fill="none"/>'}[affiliationType];
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
	icons['GROUND.M1.INTRUSION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >I</text>';

	icons['GROUND.M1.CHEMICAL SURVEILLANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RS</text>';
	icons['GROUND.M1.CIVILIAN'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CIV</text>';
	icons['GROUND.M1.CLOSE PROTECTION'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CLP</text>';
	icons['GROUND.M1.COMBAT'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >CBT</text>';
	icons['GROUND.M1.COMMAND AND CONTROL'] = (force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >Y</text>' : '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >C2</text>');
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
	icons['GROUND.M1.MEDEVAC'] = icons['AIR.M1.MEDEVAC'];
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
	icons['GROUND.M1.NAVAL'] = _MilSymbol.translate(0,-35,_MilSymbol.scale(0.6, icons['GROUND.ICON.NAVAL']));
	icons['GROUND.M1.NODE CENTRE'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >NC</text>';
	icons['GROUND.M1.NUCLEAR'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >N</text>';
	icons['GROUND.M1.OPERATIONS'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OPS</text>';
	icons['GROUND.M1.OPTICAL'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OPT</text>';
	icons['GROUND.M1.OTHER'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >OTH</text>';
	icons['GROUND.M1.PERSONNEL RECOVERY'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="30" >H</text>';
	icons['GROUND.M1.RADAR'] =  _MilSymbol.translate(0,-30,_MilSymbol.scale(0.5, icons['GROUND.ICON.RADAR']));
	icons['GROUND.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR'] = '<text stroke="none" text-anchor="middle" x="100" y="77" font-size="25" >RF</text>';
	icons['GROUND.M1.RAILROAD'] = _MilSymbol.translate(0,-50,'<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="75" cy="125" r="5" /><circle fill="none" cx="125" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />');
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

	icons['GROUND.M2.AIRBORNE'] = '<path d="M75,140 C75,125 100,125 100,140 C100,125 125,125 125,140"  stroke-width="'+(strokeWidth/3*2)+'" fill="none"></path>';
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
	icons['GROUND.M2.TRACKED'] = '<path d="M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10"  fill="none" />';
	icons['GROUND.M2.TRUCK'] = '<path  d="M60,120 l80,0" fill="none"/><circle fill="none" cx="65" cy="125" r="5" /><circle fill="none" cx="135" cy="125" r="5" />';
	icons['GROUND.M2.UTILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >U</text>';
	icons['GROUND.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING '] = '<text stroke="none" text-anchor="middle" x="100" y="135" font-size="20" >VSTOL</text>';
	icons['GROUND.M2.VETERINARY'] = '<text stroke="none"  x="108" y="133" font-family="Arial" font-size="25" font-weight="bold" >V</text>';
	icons['GROUND.M2.WHEELED'] = '<circle cx="70" cy="125" r="4" fill="none"  /><circle cx="100" cy="125" r="4" fill="none"  /><circle cx="130" cy="125" r="4" fill="none"  />';

	// Ground Equipment --------------------------------------------------------------
	icons['GROUND.EQUIPMENT.SHORT RANGE'] = '<path d="m 85,100 30,0" fill="none" />';
	icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'] = '<path d="m 85,105 30,0 m -30,-10 30,0" fill="none" />';
	icons['GROUND.EQUIPMENT.LONG RANGE'] = '<path d="m 85,110 30,0 m -30,-20 30,0 m -30,10 30,0" fill="none" />';
	icons['GROUND.EQUIPMENT.RIFLE'] = '<path d="m 100,60 0,80 M 85,75 100,60 115,75" fill="none" />';
	icons['GROUND.EQUIPMENT.MACHINE GUN'] = '';
	icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] = icons['GROUND.EQUIPMENT.RIFLE'] + '<circle cx="100" cy="90" r="15" fill="none"/>';
	icons['GROUND.EQUIPMENT.FLAME THROWER'] = '<path fill="none" d="m 90,135 0,-70 c 0,-15 20,-15 20,0" />';
	icons['GROUND.EQUIPMENT.AIR DEFENCE GUN'] = '<path d="m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-80 0,65 m 15,-45 0,40 m -30,-40 0,40" fill="none" />' + (force2525?'':'<path d="M 85,75 100,60 115,75" fill="none" />');
	icons['GROUND.EQUIPMENT.ANTITANK GUN'] = '<path d="m 85,140 15,-15 15,15 m -15,-80 0,65 m -15,-45 0,40 m 30,-40 0,40" fill="none" />';
	icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] = '<path d="m 100,60 0,80 m 15,-60 0,40 m -30,-40 0,40" fill="none" />';
	icons['GROUND.EQUIPMENT.RECOILLESS GUN'] = '<path d="m 85,75 15,-15 15,15 m 0,5 0,40 m -30,-40 0,40 m 15,-60 0,80" fill="none" />';
	icons['GROUND.EQUIPMENT.HOWITZER'] = '<circle cx="100" cy="130" r="10" fill="none"/><path d="m 115,80 0,40 m -30,-40 0,40 m 15,-60 0,60" fill="none" />' + (force2525?'':'<path d="M 85,75 100,60 115,75" fill="none" />');
	icons['GROUND.EQUIPMENT.HOWITZER TRACKED'] = '<path d="M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10"  fill="none" />';
	icons['GROUND.EQUIPMENT.MISSILE LAUNCHER'] = '<path d="m 100,140 0,-80 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65" fill="none" />';
	icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'] = '<path d="m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-15 0,-65 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65" fill="none" />';
	icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'] = '<text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >R</text>';
	icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'] = '<text stroke="none" text-anchor="middle" x="68" y="110" font-size="25" >E</text><text stroke="none" text-anchor="middle" x="132" y="110" font-size="25" >R</text>';
	icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'] = '<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >T</text>';
	icons['GROUND.EQUIPMENT.ANTITANK MISSILE LAUNCHER'] = '<path d="m 85,140 15,-15 15,15 M 85,130 85,75 c 0,-20 30,-20 30,0 l 0,55 m -15,-5 0,-65" fill="none" />';
	icons['GROUND.EQUIPMENT.SURFACE-TO-SURFACE MISSILE LAUNCHER'] = icons['GROUND.EQUIPMENT.MISSILE LAUNCHER'] + (force2525?'<path d="m 85,140 30,0" fill="none" />':'');		
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
	icons['GROUND.EQUIPMENT.MINE SCATTERABLE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >S</text><circle cx="85" cy="115" r="5" fill="none"/><circle cx="100" cy="115" r="5" fill="none"/><circle cx="115" cy="115" r="5" fill="none"/>';

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
	icons['GROUND.EQUIPMENT.CBRN EQUIPMENT'] = '<path  d="M80,140 c0,-20 10,-60 50,-63 m-10,63 c0,-20 -10,-60 -50,-63 " fill="none"/><circle cx="70" cy="85" r="8"/><circle cx="130" cy="85" r="8"/>';
	icons['GROUND.EQUIPMENT.COMPUTER SYSTEM'] = '';		
	icons['GROUND.EQUIPMENT.LASER'] = '<path fill="none" d="m 100,55 0,25 10,5 -20,5 20,5 -20,5 10,5 0,15 10,5 -20,5 20,5 -20,5 20,5 M 90,65 100,55 110,65" />';

	//2525  
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.LIGHT'] = '<path fill="none" d="m 100,125 0,-20" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MEDIUM'] = '<path fill="none" d="m 103,105 0,20 m -6,-20 0,20" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.HEAVY'] = '<path fill="none" d="m 106,105 0,20 m -12,-20 0,20 m 6,-20 0,20" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.TRAILER'] = '<path fill="none" d="m 140,105 0,20 m -10,-10 10,0" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.AUTOMOBILE'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 5,0 0,-20 -20,0 0,-20 -20,0 0,20 -20,0 0,20 5,0 m 50,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z" /><path fill="none" stroke-width="'+(strokeWidth/3*2)+'" d="m 95,90 0,15 10,0 0,-15 z" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.OPEN-BED TRUCK'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m 0,0 5,0 0,-20 -20,0 -20,0 0,-20 -20,0 0,20 0,20 5,0" /><path fill="none" stroke-width="'+(strokeWidth/3*2)+'" d="m 75,90 0,15 10,0 0,-15 z" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m 0,0 5,0 0,-20 0,-20 -20,0 -20,0 -20,0 0,20 0,20 5,0" /><path fill="none" stroke-width="'+(strokeWidth/3*2)+'" d="m 115,90 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 90,125 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m -35,0 20,0 m 15,0 5,0 0,-20 0,-20 -20,0 -20,0 0,20 -20,0 0,20 5,0" /><path fill="none" stroke-width="'+(strokeWidth/3*2)+'" d="m 95,90 0,15 10,0 0,-15 z" />';
	icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.JEEP TYPE VEHICLE'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 90,125 20,0 m -20,0 c 0,-4.14213 -3.357864,-7.5 -7.5,-7.5 -4.142136,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.357864,7.5 7.5,7.5 4.142136,0 7.5,-3.35787 7.5,-7.5 z m 35,0 c 0,-4.14213 -3.35787,-7.5 -7.5,-7.5 -4.14213,0 -7.5,3.35787 -7.5,7.5 0,4.14213 3.35787,7.5 7.5,7.5 4.14213,0 7.5,-3.35787 7.5,-7.5 z m 0,0 5,0 0,-20 -60,0 0,20 5,0 m 15,-20 5,-15" />';
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
	icons['GROUND.EQUIPMENT.LAND MINES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >M</text><path fill="none" d="' + (force2525?'m 135,70 -70,0 35,70 z':'m 65,130 70,0 -35,-70 z') + '" />';


	icons['GROUND.EQUIPMENT.SENSOR'] = '<path d="m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z" />';		
	icons['GROUND.EQUIPMENT.SENSOR EMPLACED'] = _MilSymbol.scale(0.9,icons['GROUND.EQUIPMENT.SENSOR']) + '<path fill="none" d="m 70,75 10,-15 10,15 10,-15 10,15 10,-15 10,15" />';
	icons['GROUND.EQUIPMENT.RADAR'] = '<path d="M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50"  fill="none" />';		

	icons['GROUND.EQUIPMENT.ANTENNAE'] = '';		
	icons['GROUND.EQUIPMENT.GENERATOR SET'] = '';		
	icons['GROUND.EQUIPMENT.PSYCHOLOGICAL OPERATIONS EQUIPMENT'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '" d="m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z" />';	
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
	icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY'] = '<path d="' + (force2525?'M 90.40625,82.4375 C 84.205239,85.834177 80,92.43094 80,100 l 20,0 -9.59375,-17.5625 z m 19.3125,0.09375 L 100,100 l 20,0 c 0,-7.513587 -4.15485,-14.050664 -10.28125,-17.46875 z M 100,100 89.71875,117.125 C 92.72722,118.93597 96.23267,120 100,120 c 3.76733,0 7.27278,-1.06403 10.28125,-2.875 L 100,100 z':'M 89.915583,82.533279 109.98318,82.70863 89.670332,117.12941 80.000085,99.941218 120.14717,100 110.01504,117.34656 z') + '"  fill="none" />';
	icons['GROUND.INSTALLATION.ICON.ATOMIC ENERGY WEAPONS GRADE'] = '<path d="' + (force2525?'M 90.40625,82.4375 C 84.205239,85.834177 80,92.43094 80,100 l 20,0 -9.59375,-17.5625 z m 19.3125,0.09375 L 100,100 l 20,0 c 0,-7.513587 -4.15485,-14.050664 -10.28125,-17.46875 z M 100,100 89.71875,117.125 C 92.72722,118.93597 96.23267,120 100,120 c 3.76733,0 7.27278,-1.06403 10.28125,-2.875 L 100,100 z':'M 89.915583,82.533279 109.98318,82.70863 89.670332,117.12941 80.000085,99.941218 120.14717,100 110.01504,117.34656 z') + '"  />';
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
	icons['SEA.ICON.COMBATANT'] = '<path d="m 86.90058,110 c -3.58686,1.97051 -7.17372,3.94101 -10.76058,5.91152 2.10233,2.85955 6.67765,3.89305 10,2.06795 2.57091,-0.9204 4.65314,-3.78198 3.05804,-6.10243 -0.76582,-0.62567 -1.53164,-1.25136 -2.29746,-1.87704 z m 26.33903,0.12 c 3.58686,1.97051 7.17372,3.94101 10.76058,5.91152 -2.10233,2.85955 -6.67765,3.89305 -10,2.06795 -2.57091,-0.9204 -4.65314,-3.78198 -3.05804,-6.10243 0.76582,-0.62567 1.53164,-1.25136 2.29746,-1.87704 z"  fill="none" /><path d="m 112.86403,110 c -5.60278,-3.95772 -11.34647,-7.87086 -16.055296,-12.54103 -4.173483,-4.54288 -6.986826,-9.79084 -9.215516,-15.11341 -0.812657,4.42298 -0.887217,9.34081 2.406782,13.17851 3.631081,4.50958 8.646979,8.14967 13.46707,11.82149 2.31514,1.65315 4.68734,3.2543 7.0812,4.83359 0.77192,-0.72638 1.54384,-1.45277 2.31576,-2.17915 m -25.740383,0 c 5.602782,-3.95772 11.346472,-7.87086 16.055303,-12.54103 4.17348,-4.54288 6.98682,-9.79084 9.21551,-15.11341 0.81266,4.42298 0.88722,9.34081 -2.40678,13.17851 -3.63108,4.50957 -8.64698,8.14967 -13.467071,11.82149 -2.315138,1.65315 -4.687341,3.2543 -7.0812,4.83359 -0.771921,-0.72638 -1.543842,-1.45277 -2.315762,-2.17915" fill="' + white + '" stroke-width="'+(strokeWidth/3*2)+'"/>';
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
	icons['SEA.ICON.MINE COUNTER MEASURE SUPPORT SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+ (force2525?'MA':'MCS') +'</text>';
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
	icons['SEA.ICON.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT'] = '<path stroke="none" d="M 85 80 L 80 95 L 65 95 L 80 120 L 120 120 L 135 95 L 90 95 L 95 80 L 85 80 z M 87 100.6875 L 93.09375 100.6875 C 94.623689 100.68751 95.747386 100.8021 96.4375 101.0625 C 97.134103 101.31642 97.677071 101.77996 98.09375 102.4375 C 98.510404 103.09506 98.718737 103.84116 98.71875 104.6875 C 98.718737 105.76173 98.412748 106.67188 97.78125 107.375 C 97.149728 108.07162 96.194 108.50521 94.9375 108.6875 C 95.56249 109.05209 96.096344 109.43881 96.5 109.875 C 96.910145 110.3112 97.434884 111.10547 98.125 112.21875 L 99.875 115 L 96.4375 115 L 94.34375 111.875 C 93.601554 110.76172 93.08593 110.06771 92.8125 109.78125 C 92.539056 109.48829 92.243483 109.29167 91.9375 109.1875 C 91.631504 109.07683 91.164057 109.03126 90.5 109.03125 L 89.90625 109.03125 L 89.90625 115 L 87 115 L 87 100.6875 z M 101.46875 100.6875 L 107.1875 100.6875 C 108.3203 100.68751 109.16536 100.74611 109.71875 100.84375 C 110.27864 100.93491 110.78254 101.10678 111.21875 101.40625 C 111.66145 101.70574 112.01952 102.12371 112.3125 102.625 C 112.60546 103.1198 112.74999 103.66277 112.75 104.28125 C 112.74999 104.95183 112.58332 105.56511 112.21875 106.125 C 111.86067 106.6849 111.36848 107.12631 110.75 107.40625 C 111.62238 107.66016 112.28124 108.07553 112.75 108.6875 C 113.21874 109.29948 113.46874 110.01693 113.46875 110.84375 C 113.46874 111.4948 113.30598 112.13151 113 112.75 C 112.70051 113.36198 112.27733 113.84766 111.75 114.21875 C 111.22916 114.58333 110.58072 114.82161 109.8125 114.90625 C 109.33072 114.95833 108.18619 114.98698 106.34375 115 L 101.46875 115 L 101.46875 100.6875 z M 104.34375 103.0625 L 104.34375 106.375 L 106.25 106.375 C 107.37629 106.37501 108.0703 106.34506 108.34375 106.3125 C 108.83853 106.25391 109.22004 106.09246 109.5 105.8125 C 109.78645 105.52605 109.93749 105.14975 109.9375 104.6875 C 109.93749 104.2448 109.80989 103.89845 109.5625 103.625 C 109.32161 103.34506 108.98176 103.18361 108.5 103.125 C 108.21353 103.09246 107.36067 103.06251 106 103.0625 L 104.34375 103.0625 z M 89.90625 103.09375 L 89.90625 106.75 L 92.03125 106.75 C 93.417961 106.75001 94.279939 106.6797 94.625 106.5625 C 94.970043 106.44532 95.242178 106.25522 95.4375 105.96875 C 95.632802 105.6823 95.74999 105.3047 95.75 104.875 C 95.74999 104.39324 95.604157 104.01173 95.34375 103.71875 C 95.089834 103.41928 94.749991 103.23439 94.28125 103.15625 C 94.046867 103.12371 93.328117 103.09376 92.15625 103.09375 L 89.90625 103.09375 z M 104.34375 108.75 L 104.34375 112.59375 L 107.03125 112.59375 C 108.07291 112.59375 108.72004 112.5586 109 112.5 C 109.42968 112.42188 109.79556 112.23698 110.0625 111.9375 C 110.33593 111.63151 110.46874 111.22657 110.46875 110.71875 C 110.46874 110.28907 110.36457 109.92448 110.15625 109.625 C 109.94791 109.32553 109.64713 109.10547 109.25 108.96875 C 108.85937 108.83204 108.0026 108.75001 106.6875 108.75 L 104.34375 108.75 z "/>'+ '<text  fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" stroke="none" text-anchor="middle" x="100" y="115" font-size="20" >RB</text>';
	icons['SEA.ICON.MILITARY JETSKI'] = '<path stroke="none" d="m 135,105 0,15 -60,0 -10,-15 20,-25 10,0 0,10 -5,0 -5,15 z"/>';
	icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE'] = icons['AIR.ICON.UNMANNED AERIAL VEHICLE'];
	icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] = '<path d="m 110,80 15,15 0,25 M 90,80 75,95 l 0,25" fill="none"/>' + (force2525?'<path d="m 100,80 -15,15 0,25 30,0 0,-25 -15,-15"/>':'');
	icons['SEA.ICON.NAVY TASK FORCE'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(force2525?150:120)+'" font-size="30" >TF</text>';
	icons['SEA.ICON.NAVY TASK GROUP'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(force2525?150:120)+'" font-size="30" >TG</text>';
	icons['SEA.ICON.NAVY TASK UNIT'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(force2525?150:120)+'" font-size="30" >TU</text>';
	icons['SEA.ICON.NAVY TASK ELEMENT'] = icons['SEA.ICON.NAVY TASK ORGANIZATION UNIT'] + '<text stroke="none" text-anchor="middle" x="100" y="'+(force2525?150:120)+'" font-size="30" >TE</text>';
	icons['SEA.ICON.CONVOY'] = '<path d="m 80,115 -20,0 0,-35 80,0 0,35 -20,0 0,-20 -40,0 z"/>';
	icons['SEA.ICON.NONCOMBATANT'] = '<path d="m 80,100 0,-20 40,0 0,20 15,0 0,20 -70,0 0,-20 z"/>';
	icons['SEA.ICON.AUXILIARY SHIP'] =  '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(force2525?'AR':'AA')+'</text>';
	icons['SEA.ICON.AMMUNITION SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AE</text>';
	icons['SEA.ICON.STORES SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AF</text>';
	icons['SEA.ICON.AUXILIARY FLAG OR COMMAND SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AGF</text>';
	icons['SEA.ICON.INTELLIGENCE COLLECTOR'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(force2525?'JI':'AI')+'</text>';
	icons['SEA.ICON.OCEAN RESEARCH SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AGO</text>';
	icons['SEA.ICON.SURVEY SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AGS</text>';
	icons['SEA.ICON.HOSPITAL SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AH</text>';
	icons['SEA.ICON.CARGO SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AK</text>';
	icons['SEA.ICON.COMBAT SUPPORT SHIP, FAST'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AOE</text>';
	icons['SEA.ICON.OILER, REPLENISHMENT'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AO</text>';
	icons['SEA.ICON.REPAIR SHIP'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AR</text>';
	icons['SEA.ICON.SUBMARINE TENDER'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >AS</text>';
	icons['SEA.ICON.TUG, OCEAN GOING'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >'+(force2525?'AS':'AT')+'</text>';
	icons['SEA.ICON.SERVICE CRAFT, YARD, GENERAL'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YY</text>';
	icons['SEA.ICON.BARGE, NOT SELF-PROPELLED'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YB</text>';
	icons['SEA.ICON.BARGE, SELF-PROPELLED'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YS</text>';
	icons['SEA.ICON.TUG, HARBOUR'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YT</text>';
	icons['SEA.ICON.LAUNCH'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >YFT</text>';
	icons['SEA.ICON.CIVILIAN'] = '<text fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
	icons['SEA.ICON.MERCHANT SHIP, GENERAL'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"/>';
	icons['SEA.ICON.CARGO, GENERAL'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >'+(force2525?'CA':'A')+'</text>';
	icons['SEA.ICON.CONTAINER SHIP'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >C</text>';
	icons['SEA.ICON.DREDGE'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >D</text>';
	icons['SEA.ICON.ROLL ON-ROLL OFF'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >'+(force2525?'RO':'E')+'</text>';
	icons['SEA.ICON.FERRY'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >'+(force2525?'FE':'F')+'</text>';
	icons['SEA.ICON.HEAVY LIFT'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >H</text>';
	icons['SEA.ICON.HOVERCRAFT'] = '<path d="' + (force2525?'m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z':'m 90,80 0,15.5625 C 78.357887,96.937054 70,100.64828 70,105 c 0,5.52285 13.431458,10 30,10 16.56854,0 30,-4.47715 30,-10 0,-4.35172 -8.35789,-8.062946 -20,-9.4375 L 110,80 90,80 z m -15,40 50,0') + '" ' + (force2525?'stroke-width="0"':'') + '/>';
	icons['SEA.ICON.HOVERCRAFT 2525D'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >J</text>';
	icons['SEA.ICON.HOVERCRAFT CIVILIAN'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="' + (force2525?'m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z':'m 90,80 0,15.5625 C 78.357887,96.937054 70,100.64828 70,105 c 0,5.52285 13.431458,10 30,10 16.56854,0 30,-4.47715 30,-10 0,-4.35172 -8.35789,-8.062946 -20,-9.4375 L 110,80 90,80 z m -15,40 50,0') + '" />';
	icons['SEA.ICON.HOVERCRAFT NONCOMBATANT'] = '<path d="m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z" stroke-width="0" />' + (force2525?'<text fill="'+ white+'" stroke="none" text-anchor="middle" x="100" y="120" font-size="30" >NC</text>':'');
	icons['SEA.ICON.MERCHANT SHIP, LASH CARRIER (WITH BARGES)'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >L</text>';
	icons['SEA.ICON.OILER/TANKER'] =  icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >'+(force2525?'OT':'O')+'</text>';
	icons['SEA.ICON.PASSENGER SHIP'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >'+(force2525?'PA':'P')+'</text>';
	icons['SEA.ICON.TUG, OCEAN GOING CIVILIAN'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="'+(force2525?'30':'30')+'" >'+(force2525?'TU':'T')+'</text>';
	icons['SEA.ICON.TOW'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >TW</text>';
	icons['SEA.ICON.TRANSPORT SHIP, HAZARDOUS MATERIAL'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >HZ</text>';
	icons['SEA.ICON.JUNK/DHOW'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >QJ</text>';
	icons['SEA.ICON.BARGE, NOT SELF-PROPELLED'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<text stroke="none" text-anchor="middle" x="100" y="115" font-size="30" >YB</text>';
	icons['SEA.ICON.HOSPITAL SHIP2'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<path stroke="none" d="m 95,95 0,-15 10,0 0,15 15,0 0,10 -15,0 0,15 -10,0 0,-15 -15,0 0,-10 z"/>';
	icons['SEA.ICON.FISHING VESSEL'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 75,100 0,-15 20,0 0,15 50,0 -15,35 -60,0 -15,-35 z M 105,57.36218 105,100 m 30,-35 -30,35"/>';
	icons['SEA.ICON.DRIFTER'] = icons['SEA.ICON.FISHING VESSEL']  + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >DF</text>';
	icons['SEA.ICON.TRAWLER'] = icons['SEA.ICON.FISHING VESSEL']  + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >TR</text>';
	icons['SEA.ICON.FISHING VESSEL DREDGE'] = icons['SEA.ICON.FISHING VESSEL']  + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >DR</text>';
	icons['SEA.ICON.LAW ENFORCEMENT VESSEL'] = icons['SEA.ICON.MERCHANT SHIP, GENERAL'] + '<path d="m 135,100 -15,35 -10,0 15,-35 z"/>';
	icons['SEA.ICON.LEISURE CRAFT, SAILING BOAT'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 105,55 0,40 35,0 z m -5,-5 0,50 m 45,0 -15,35 -60,0 -15,-35 z"/>';
	icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 70,97.36218 15,-30 10,0 -15,30 65,0 -15,35 -60,0 -15,-35 z"/>';
	icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'] + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >RB</text>';
	icons['SEA.ICON.LEISURE CRAFT, MOTORIZED, SPEEDBOAT'] = icons['SEA.ICON.LEISURE CRAFT, MOTORIZED'] + '<text stroke="none" text-anchor="middle" x="100" y="125" font-size="30" >SP</text>';
	icons['SEA.ICON.LEISURE CRAFT, JETSKI'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 85,60 -30,45 10,15 75,0 0,-20 -60,0 10,-30 5,0 0,-10 z"/>';
	icons['SEA.ICON.UNMANNED SURFACE WATER VEHICLE (USV)'] = icons['AIR.ICON.CIVILIAN UNMANNED AERIAL VEHICLE'];
	icons['SEA.ICON.OWN SHIP'] = '<path fill="none" stroke="'+(monoColor?iconColor:iconFillColor)+'" d="m 50,100 100,0 m -50,-50 0,100 m 50,-50 c 0,27.61424 -22.38576,50 -50,50 -27.614237,0 -50,-22.38576 -50,-50 0,-27.614237 22.385763,-50 50,-50 27.61424,0 50,22.385763 50,50 z"/>';
	icons['SEA.ICON.DITCHED AIRCRAFT'] = '<path fill="'+(monoColor?iconColor:iconFillColor)+'" stroke="'+(monoColor?iconColor:iconFillColor)+'" d="m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"/>';
	icons['SEA.ICON.PERSON IN WATER'] = '<path fill="'+(monoColor?iconColor:iconFillColor)+'" stroke="'+(monoColor?iconColor:iconFillColor)+'" d="m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"/>';
	icons['SEA.ICON.DISTRESSED VESSEL'] = '<path fill="'+(monoColor?iconColor:iconFillColor)+'" stroke="'+(monoColor?iconColor:iconFillColor)+'" d="m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"/>';
	icons['SEA.ICON.SEA MINELIKE'] = '<path fill="'+(monoColor?iconColor:iconFillColor)+'" stroke="'+(monoColor?iconColor:iconFillColor)+'" d="m 117.67767,75 c 3.53553,-3.53553 7.07107,-7.07107 7.07107,-7.07107 l 7.07107,7.07107 -7.07107,7.07107 m -49.497477,0 c -3.535534,-3.53553 -7.071068,-7.07107 -7.071068,-7.07107 l 7.071068,-7.07107 7.071067,7.07107 M 95,70 c 0,-5 0,-10 0,-10 l 10,0 0,10 m 25,30 c 0,16.56854 -13.43146,30 -30,30 -16.568542,0 -30,-13.43146 -30,-30 0,-16.56854 13.431458,-30 30,-30 16.56854,0 30,13.43146 30,30 z"/>';
	icons['SEA.ICON.NAVIGATIONAL'] = '<path fill="none" stroke="'+(monoColor?iconColor:'red')+'" d="m 75,90 -10,10 70,0 -10,10"/>';
	icons['SEA.ICON.ICEBERG'] = '<path fill="'+(monoColor?iconColor:iconFillColor)+'" stroke="'+(monoColor?iconColor:iconFillColor)+'" d="m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0"/>';

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
	icons['SUB.ICON.SUBMARINE ATTACK (SSN)'] = '<text fill="'+ white+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >A</text>';
	icons['SUB.ICON.SUBMARINE MISSILE (TYPE UNKNOWN)'] = '<text fill="'+ white+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >M</text>';
	icons['SUB.ICON.SUBMARINE GUIDED MISSILE (SSGN)'] = '<text fill="'+ white+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >G</text>';
	icons['SUB.ICON.SUBMARINE BALLISTIC MISSILE (SSBN)'] = '<text fill="'+ white+'" stroke="none" text-anchor="middle" x="100" y="110" font-size="30" >B</text>';
	icons['SUB.ICON.SUBMARINE, SURFACED'] = '<path d="m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z"/><path fill="none" d="m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
	icons['SUB.ICON.SUBMARINE, BOTTOMED'] = '<path d="m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z"/><path d="m 70,120 0,-5 60,0 0,5 z"/>';
	icons['SUB.ICON.SUBMARINE, SNORKELING'] = '<path d="m 75,120 -10,-10 10,-10 20,0 0,-20 10,0 0,20 20,0 10,10 -10,10 z"/><path fill="none" d="m 65,95 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
	icons['SUB.ICON.OTHER SUBMERSIBLE'] = '<path d="m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.52285 -15.67003,10 -35,10 -19.329966,0 -35,-4.47715 -35,-10 0,-5.522847 15.670034,-10 35,-10 19.32997,0 35,4.477153 35,10 z"/>';
	icons['SUB.ICON.OTHER SUBMERSIBLE, SURFACED'] = icons['SUB.ICON.OTHER SUBMERSIBLE'] + '<path fill="none" d="m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"/>';
	icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)'] = '<path d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z" stroke="none"  />';
	icons['SUB.ICON.NON-SUBMARINE'] = (force2525&&isNaN(SIDC))?'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >NON</text>':'<text stroke="none" text-anchor="middle" x="100" y="100" font-size="25" >NON</text><text stroke="none" text-anchor="middle" x="100" y="120" font-size="25" >SUB</text>';
	icons['SUB.ICON.DIVER, MILITARY'] = '<path  stroke="none"  d="M 100 80 C 93.731592 80 88.315512 82.687903 85.75 88.25 L 85.75 88.34375 L 77.84375 88.34375 L 77.84375 105 L 85.75 105 L 85.75 104.8125 C 87.305963 108.18587 88.823559 110.02388 92.03125 111.65625 L 92.09375 111.65625 L 84.15625 120 L 115.84375 120 L 107.90625 111.65625 L 107.96875 111.65625 C 111.14747 110.03863 112.80044 108.31359 114.34375 105 L 122.15625 105 L 122.15625 88.34375 L 114.25 88.34375 L 114.25 88.3125 C 111.68449 82.7504 106.26841 80 100 80 z M 100 86.59375 C 105.44032 86.59375 109.84375 91.109195 109.84375 96.59375 C 109.84375 102.0783 105.44032 106.5625 100 106.5625 C 94.559678 106.5625 90.125 102.0783 90.125 96.59375 C 90.125 91.109195 94.559678 86.59375 100 86.59375 z M 100 89.59375 C 96.204841 89.59375 93.125 92.707018 93.125 96.59375 C 93.125 100.48048 96.204841 103.5625 100 103.5625 C 103.79515 103.5625 106.84375 100.48048 106.84375 96.59375 C 106.84375 92.707018 103.79515 89.59375 100 89.59375 z " />';	
	icons['SUB.ICON.CIVILIAN'] = '<text fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" text-anchor="middle" x="100" y="110" font-size="35" >CIV</text>';
	icons['SUB.ICON.SUBMERSIBLE, CIVILIAN'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.52285 -15.67003,10 -35,10 -19.329966,0 -35,-4.47715 -35,-10 0,-5.522847 15.670034,-10 35,-10 19.32997,0 35,4.477153 35,10 z"/>';
	icons['SUB.ICON.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN'] = '<path  fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z" />';
	icons['SUB.ICON.DIVER, CIVILIAN'] = '<path fill="'+ iconFillColor + '"  d="M 114.25,94.000001 C 114.25,102.28427 107.87007,109 99.999992,109 c -7.87005,0 -14.249994,-6.71573 -14.249994,-14.999999 0,-8.284275 6.379944,-15.000002 14.249994,-15.000002 7.870078,0 14.250008,6.715727 14.250008,15.000002 z m 0,27.000009 14.25001,14.99999 -57.000012,0 14.25,-14.99999 M 125.65,78.999999 l 14.25,0 0,30.000001 -14.25,0 m -51.300001,0 -14.250001,0 0,-30.000001 14.250001,0 m 54.150011,15.000002 c 0,16.568539 -12.75989,29.999989 -28.500017,29.999989 -15.74011,0 -28.499995,-13.43145 -28.499995,-29.999989 C 71.499998,77.431451 84.259883,64 99.999992,64 115.74012,64 128.50001,77.431451 128.50001,94.000001 z" />';	
	icons['SUB.ICON.UNDERWATER WEAPON'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >WPN</text>';
	icons['SUB.ICON.TORPEDO'] = '<path d="m 65,105 -5,-5 5,-5 60,0 c 0,0 5,5 5,5 l 5,-5 0,10 -5,-5 -5,5 z"/>';
	icons['SUB.ICON.IMPROVISED EXPLOSIVE DEVICE (IED)'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IED</text>';

	//Yes the color settings here looks like crap, but the person implementing 2525 mines obviously didn't read the standard so we have to make a lot of special cases... 
	icons['SUB.ICON.UNDERWATER DECOY'] = '<path  stroke="' + black + '" d="'+(force2525?'M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z':'M 105,120 90,105 105,90 z M 85,120 70,105 85,90 z m 40,-30 -15,15 15,15 z m -55,-5 0,-5 55,0 0,5 z')+'" '+ (force2525 ? '' : 'fill="' +iconFillColor+'"') + '/>';
	icons['SUB.ICON.UNDERWATER DECOY DSymbol'] = '<path d="M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z "/>';

	icons['SUB.ICON.SEA MINE DECOY'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 106.56864,101.56864 0,26.27448 -13.13727,-13.1372 z m -19.705896,0 0,26.27448 -13.137256,-13.1372 z m 39.411736,0 0,26.27448 -13.1372,-13.1372 13.1372,-13.13728 M 100,75.29412 c -14.511015,0 -26.274512,11.763492 -26.274512,26.27452 l 52.548992,0 C 126.27448,87.057612 114.51097,75.29412 100,75.29412 z m -6.56863,0 0,-13.137256 13.13727,0 0,13.137256 m -29.792246,12.340344 -9.289443,-9.289446 9.289443,-9.289438 9.289444,9.289438 m 27.868362,0 9.28939,-9.289438 9.28947,9.289438 -9.28947,9.289446"/>';
	icons['SUB.ICON.SEA MINE DECOY, BOTTOM/GROUND'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 74.317546,126.39272 0,6.42064 51.364934,0 0,-6.42064 z m 32.103094,-25.6824 0,25.6824 -12.841256,-12.8412 z m -19.261864,0 0,25.6824 -12.84123,-12.8412 z m 38.523704,0 0,25.6824 -12.84128,-12.8412 12.84128,-12.8412 M 100,75.027856 c -14.184026,0 -25.682454,11.49842 -25.682454,25.682464 l 51.364934,0 C 125.68248,86.526276 114.18401,75.027856 100,75.027856 z m -6.420616,0 0,-12.841224 12.841256,0 0,12.841224 m -29.120934,12.06228 -9.080118,-9.080126 9.080118,-9.080118 9.080116,9.080118 m 27.240378,0 9.08011,-9.080118 9.08011,9.080118 -9.08011,9.080126"/>';
	icons['SUB.ICON.SEA MINE DECOY, MOORED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 100,100.7056 0,32.05632 m -25.645032,0 51.290072,0 m -19.23376,-32.05632 0,25.64504 -12.822536,-12.82248 z m -19.2338,0 0,25.64504 -12.822512,-12.82248 z m 38.46756,0 0,25.64504 -12.82256,-12.82248 12.82256,-12.82256 M 100,75.060592 c -14.163359,0 -25.645032,11.481668 -25.645032,25.645008 l 51.290072,0 C 125.64504,86.54226 114.16337,75.060592 100,75.060592 z m -6.411256,0 0,-12.822512 12.822536,0 0,12.822512 m -29.078502,12.044704 -9.066891,-9.066886 9.066891,-9.066894 9.066888,9.066894 m 27.200694,0 9.06683,-9.066894 9.06691,9.066894 -9.06691,9.066886"/>';
	icons['SUB.ICON.SEA MINE'] = '<path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="M 115.9099,73 126.5165,62.393395 137.12311,73 126.5165,83.606605 m -53.033006,0 L 62.876894,73 73.483494,62.393395 84.090096,73 m 8.409903,-3 0,-15 15.000001,0 0,15 m 22.5,30 c 0,16.56853 -13.43147,30 -30.000001,30 -16.568542,0 -30,-13.43147 -30,-30 0,-16.56855 13.431458,-30 30,-30 C 116.56853,70 130,83.43145 130,100 z"/>';
	icons['SUB.ICON.SEA MINE NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="M 115.9099,73 126.5165,62.393395 137.12311,73 126.5165,83.606605 m -53.033006,0 L 62.876894,73 73.483494,62.393395 84.090096,73 m 8.409903,-3 0,-15 15.000001,0 0,15 m 22.5,30 c 0,16.56853 -13.43147,30 -30.000001,30 -16.568542,0 -30,-13.43147 -30,-30 0,-16.56855 13.431458,-30 30,-30 C 116.56853,70 130,83.43145 130,100 z"/><path  '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/>';
	icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND)'] = '<path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 74.796744,125.20328 50.406536,0 0,12.6016 -50.406536,0 z m 38.569296,-47.480022 8.91067,-8.910694 8.91075,8.910694 -8.91075,8.910702 m -44.553452,0 -8.910691,-8.910702 8.910691,-8.910694 8.9107,8.910694 m 7.065226,-2.926514 0,-12.601624 12.601616,0 0,12.601624 M 125.20328,100 c 0,13.91937 -11.28391,25.20328 -25.20328,25.20328 -13.919375,0 -25.203256,-11.28391 -25.203256,-25.20328 0,-13.91938 11.283881,-25.203256 25.203256,-25.203256 13.91937,0 25.20328,11.283876 25.20328,25.203256 z"/>';
	icons['SUB.SEA MINE (BOTTOM/ GROUND) NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 255, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 74.796744,125.20328 50.406536,0 0,12.6016 -50.406536,0 z m 38.569296,-47.480022 8.91067,-8.910694 8.91075,8.910694 -8.91075,8.910702 m -44.553452,0 -8.910691,-8.910702 8.910691,-8.910694 8.9107,8.910694 m 7.065226,-2.926514 0,-12.601624 12.601616,0 0,12.601624 M 125.20328,100 c 0,13.91937 -11.28391,25.20328 -25.20328,25.20328 -13.919375,0 -25.203256,-11.28391 -25.203256,-25.20328 0,-13.91938 11.283881,-25.203256 25.203256,-25.203256 13.91937,0 25.20328,11.283876 25.20328,25.203256 z"/><path  '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/>';
	icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) EXERCISE MINE'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 74.796744,125.20328 50.406536,0 0,12.6016 -50.406536,0 z m 38.569296,-47.480022 8.91067,-8.910694 8.91075,8.910694 -8.91075,8.910702 m -44.553452,0 -8.910691,-8.910702 8.910691,-8.910694 8.9107,8.910694 m 7.065226,-2.926514 0,-12.601624 12.601616,0 0,12.601624 M 125.20328,100 c 0,13.91937 -11.28391,25.20328 -25.20328,25.20328 -13.919375,0 -25.203256,-11.28391 -25.203256,-25.20328 0,-13.91938 11.283881,-25.203256 25.203256,-25.203256 13.91937,0 25.20328,11.283876 25.20328,25.203256 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >EX</text><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text>';
	icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) MILEC'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.1212,124.68184 -26.2424,0 -13.121202,-13.1212 0,-26.242442 13.121202,-13.121206 26.2424,0 13.1212,13.121206 0,26.242442 -13.1212,13.1212 m -39.363602,13.1212 0,-13.1212 52.484802,0 0,13.1212 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >E</text>';
	icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) MILCO'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,141,42)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.1212,124.68184 -26.2424,0 -13.121202,-13.1212 0,-26.242442 13.121202,-13.121206 26.2424,0 13.1212,13.121206 0,26.242442 -13.1212,13.1212 m -39.363602,13.1212 0,-13.1212 52.484802,0 0,13.1212 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >#</text>';
	icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.1212,124.68184 -26.2424,0 -13.121202,-13.1212 0,-26.242442 13.121202,-13.121206 26.2424,0 13.1212,13.121206 0,26.242442 -13.1212,13.1212 m -39.363602,13.1212 0,-13.1212 52.484802,0 0,13.1212 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >NR</text>';
	icons['SUB.ICON.SEA MINE (BOTTOM/ GROUND) NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,130,23)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.1212,124.68184 -26.2424,0 -13.121202,-13.1212 0,-26.242442 13.121202,-13.121206 26.2424,0 13.1212,13.121206 0,26.242442 -13.1212,13.1212 m -39.363602,13.1212 0,-13.1212 52.484802,0 0,13.1212 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >N</text>';
	icons['SUB.ICON.SEA MINE (MOORED)'] = '<path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75.475865,136.78622 49.048305,0 M 100,124.52417 l 0,12.26205 M 124.52417,100 c 0,13.54427 -10.9799,24.52417 -24.52417,24.52417 -13.54431,0 -24.524135,-10.9799 -24.524135,-24.52417 0,-13.544315 10.979825,-24.524135 24.524135,-24.524135 13.54427,0 24.52417,10.97982 24.52417,24.524135 z m -30.655202,-24.524135 0,-12.262071 12.262092,0 0,12.262071 m -27.807543,11.51825 -8.670588,-8.670598 8.670588,-8.670591 8.670596,8.670591 m 26.011807,0 8.67057,-8.670591 8.67057,8.670591 -8.67057,8.670598"/>';
	icons['SUB.ICON.SEA MINE (MOORED) NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75.475865,136.78622 49.048305,0 M 100,124.52417 l 0,12.26205 M 124.52417,100 c 0,13.54427 -10.9799,24.52417 -24.52417,24.52417 -13.54431,0 -24.524135,-10.9799 -24.524135,-24.52417 0,-13.544315 10.979825,-24.524135 24.524135,-24.524135 13.54427,0 24.52417,10.97982 24.52417,24.524135 z m -30.655202,-24.524135 0,-12.262071 12.262092,0 0,12.262071 m -27.807543,11.51825 -8.670588,-8.670598 8.670588,-8.670591 8.670596,8.670591 m 26.011807,0 8.67057,-8.670591 8.67057,8.670591 -8.67057,8.670598"/><path  '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/>';
	icons['SUB.ICON.SEA MINE (MOORED) EXERCISE MINE'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75.475865,136.78622 49.048305,0 M 100,124.52417 l 0,12.26205 M 124.52417,100 c 0,13.54427 -10.9799,24.52417 -24.52417,24.52417 -13.54431,0 -24.524135,-10.9799 -24.524135,-24.52417 0,-13.544315 10.979825,-24.524135 24.524135,-24.524135 13.54427,0 24.52417,10.97982 24.52417,24.524135 z m -30.655202,-24.524135 0,-12.262071 12.262092,0 0,12.262071 m -27.807543,11.51825 -8.670588,-8.670598 8.670588,-8.670591 8.670596,8.670591 m 26.011807,0 8.67057,-8.670591 8.67057,8.670591 -8.67057,8.670598"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >EX</text><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text>';
	icons['SUB.ICON.SEA MINE (MOORED) MILEC'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.09736,124.64608 -26.19476,0 -13.097392,-13.09736 0,-26.194816 13.097392,-13.097392 26.19476,0 13.09744,13.097392 0,26.194816 z M 100,137.74352 l 0,-13.09744 m -26.194792,13.09744 52.389592,0"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >E</text>';
	icons['SUB.ICON.SEA MINE (MOORED) MILCO'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,141,42)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.09736,124.64608 -26.19476,0 -13.097392,-13.09736 0,-26.194816 13.097392,-13.097392 26.19476,0 13.09744,13.097392 0,26.194816 z M 100,137.74352 l 0,-13.09744 m -26.194792,13.09744 52.389592,0"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >#</text>';
	icons['SUB.ICON.SEA MINE (MOORED) NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.09736,124.64608 -26.19476,0 -13.097392,-13.09736 0,-26.194816 13.097392,-13.097392 26.19476,0 13.09744,13.097392 0,26.194816 z M 100,137.74352 l 0,-13.09744 m -26.194792,13.09744 52.389592,0"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >NR</text>';
	icons['SUB.ICON.SEA MINE (MOORED) NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,130,23)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.09736,124.64608 -26.19476,0 -13.097392,-13.09736 0,-26.194816 13.097392,-13.097392 26.19476,0 13.09744,13.097392 0,26.194816 z M 100,137.74352 l 0,-13.09744 m -26.194792,13.09744 52.389592,0"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >N</text>';
	icons['SUB.ICON.SEA MINE (FLOATING)'] = '<path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (FLOATING) NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (FLOATING) EXERCISE MINE'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >EX</text><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (FLOATING) MILEC'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >E</text><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (FLOATING) MILCO'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,141,42)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >#</text><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (FLOATING) NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >NR</text><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (FLOATING) NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,130,23)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >N</text><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"/>';
	icons['SUB.ICON.SEA MINE (IN OTHER POSITION)'] = '<path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 125.24592,100 12.62296,0 m -75.737736,0 12.622952,0"/>';
	icons['SUB.ICON.SEA MINE (IN OTHER POSITION) NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 125.24592,100 12.62296,0 m -75.737736,0 12.622952,0"/>';
	icons['SUB.ICON.SEA MINE EXERCISE MINE'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >EX</text><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text>';
	icons['SUB.ICON.SEA MINE MILEC'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >E</text>';
	icons['SUB.ICON.SEA MINE MINE ANCHOR'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="105" font-size="18" >ANCR</text>';
	icons['SUB.ICON.SEA MINE MILCO'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,141,42)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >#</text>';
	icons['SUB.ICON.SEA MINE NEGATIVE REACQUISITION'] = '<path stroke-dasharray="8,4" fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >NR</text>';
	icons['SUB.ICON.SEA MINE GENERAL OBSTRUCTOR'] = '<path fill="'+(force2525&&!monoColor?'rgb(255,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >OB</text>';
	icons['SUB.ICON.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,255,0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >OB</text><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/>';
	icons['SUB.ICON.SEA MINE NON-MINE MINE-LIKE CONTACT'] = '<path fill="'+(force2525&&!monoColor?'rgb(0,130,23)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.79424,127.58848 -27.588472,0 -13.794224,-13.79424 0,-27.588472 13.794224,-13.794224 27.588472,0 13.79424,13.794224 0,27.588472 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >N</text>';
	icons['SUB.ICON.SEA MINE (RISING)'] = '<path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><path fill="'+(force2525&&!monoColor?'rgb(255, 0, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 100,128 -10,15 20,0 z"/>';
	icons['SUB.ICON.SEA MINE (RISING) NEUTRALIZED'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 255, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><path fill="none" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 135,65 -70,70 m 0,-70 70,70"/><path fill="'+(force2525&&!monoColor?'rgb(0, 255, 0)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 100,128 -10,15 20,0 z"/>';
	icons['SUB.ICON.SEA MINE (RISING) EXERCISE MINE'] = '<path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 113.44489,82.324047 8.96324,-8.963254 8.96324,8.963254 -8.96324,8.963254 m -44.81626,0 -8.963251,-8.963254 8.963251,-8.963254 8.963252,8.963254 m 7.106905,-6.337973 0,-12.675953 12.675953,0 0,12.675953 m 19.01394,25.351906 c 0,14.00144 -11.35048,25.35192 -25.35192,25.35192 -14.001469,0 -25.351904,-11.35048 -25.351904,-25.35192 0,-14.001478 11.350435,-25.351906 25.351904,-25.351906 14.00144,0 25.35192,11.350428 25.35192,25.351906 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +'  text-anchor="middle" x="100" y="112" font-size="30" >EX</text><text stroke="none" '+ (force2525&&!monoColor?'fill="black"':'') +' x="150" y="46" font-size="40" >X</text><path fill="'+(force2525&&!monoColor?'rgb(0, 130, 24)':iconFillColor)+'" '+ (force2525&&!monoColor?'stroke="black"':'') +' d="m 100,128 -10,15 20,0 z"/>';
	icons['SUB.ICON.UNEXPLODED EXPLOSIVE ORDNANCE'] = '<path stroke-dasharray="8,4" fill="none" stroke="'+(force2525&&!monoColor?symbolColors.iconColor['Hostile']:iconColor)+'"  d="m 85,65 30,0 20,20 0,30 -20,20 -30,0 -20,-20 0,-30 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="'+symbolColors.iconColor['Hostile']+'"':'') +'  text-anchor="middle" x="100" y="110" font-size="30" >UXO</text>';
	icons['SUB.ICON.SEABED INSTALLATION, MAN-MADE, MILITARY'] = '';
	icons['SUB.ICON.SEABED INSTALLATION, MAN-MADE, NON-MILITARY'] = '';

	icons['SUB.ICON.ENVIRONMENTAL REPORT LOCATION'] = '<path fill="none" stroke="'+(force2525&&!monoColor?symbolColors.iconColor['Neutral']:iconColor)+'"  d="m 70,70 0,60 60,0 0,-60 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="'+symbolColors.iconColor['Neutral']+'"':'') +'  text-anchor="middle" x="100" y="122" font-size="60" >E</text>';
	icons['SUB.ICON.DIVE REPORT LOCATION'] = '<path fill="none" stroke="'+(force2525&&!monoColor?symbolColors.iconColor['Neutral']:iconColor)+'"  d="m 70,70 0,60 60,0 0,-60 z"/><text stroke="none" '+ (force2525&&!monoColor?'fill="'+symbolColors.iconColor['Neutral']+'"':'') +'  text-anchor="middle" x="100" y="122" font-size="60" >D</text>';
	icons['SUB.ICON.SEABED INSTALLATION/MANMADE'] = '<path fill="'+ iconFillColor +'" stroke="'+black+'"  d="m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z" />';	
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
	icons['SOF.M2.COMBAT SEARCH AND RESCUE'] = (force2525 ? '<text stroke="none" text-anchor="middle" x="100" y="135" font-size="23" >CSAR</text>':'<text stroke="none" text-anchor="middle" x="100" y="145" font-size="30" >H</text>');


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
	icons['STABILITY.ICON.ARSON/FIRE'] = force2525?'<path d="m 84.621209,101.63458 c 1.281221,23.11649 30.961141,23.1693 30.722351,-1.886459 -1.48231,2.125949 -4.56579,6.508219 -8.08482,7.276349 1.88705,-2.42485 2.58401,-8.465252 2.42544,-12.935729 -1.65222,3.370363 -3.96739,7.913059 -7.00685,7.815329 1.73795,-4.311905 2.73634,-9.432296 -0.53899,-13.744204 -0.20243,3.046262 0.84105,7.114344 -1.88646,7.006852 -2.727509,-0.107492 -2.862151,-4.430587 -1.077978,-10.779772 -4.034448,4.12669 -6.15609,9.825094 -3.77292,17.517124 -1.887944,-0.19153 -4.409492,-1.948467 -7.006852,-7.815329 -1.505442,4.900459 1.161669,9.559299 3.233932,13.744209 -2.397347,-1.07521 -6.039025,-2.97887 -7.006853,-6.19837 z"  stroke="none" /><text stroke="none" text-anchor="middle" x="100" y="75" font-size="25" >ASN</text>':'<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >FIRE</text>';
	icons['STABILITY.ICON.ATTEMPTED CRIMINAL ACTIVITY'] = '<path d="m 127,127 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5" fill="none" />';
	icons['STABILITY.ICON.BLACK LIST LOCATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >BLK</text>';
	icons['STABILITY.ICON.BOMB'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >BOMB</text>';
	icons['STABILITY.ICON.BOOBY TRAP'] = '<path d="m 85,105 15,-25 15,25 m -35,5 c 0,-10 40,-10 40,0 0,10 -40,10 -40,0 z"  fill="none" />';	
	icons['STABILITY.ICON.COMPOSITE LOSS'] = '<path d="m 100,85 0,30 m -35,-15 45,0 m 20,0 c 0,5.52285 -4.47715,10 -10,10 -5.52285,0 -10,-4.47715 -10,-10 0,-5.522847 4.47715,-10 10,-10 5.52285,0 10,4.477153 10,10 z" fill="none" />';
	icons['STABILITY.ICON.DEMONSTRATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >MASS</text>';
	icons['STABILITY.ICON.DRIVE-BY SHOOTING'] = '<path d="m 95,85 5,-5 5,5 m -5,-5 0,30 m -15,0 30,0 m 5,5 c 0,2.76142 -2.23858,5 -5,5 -2.76142,0 -5,-2.23858 -5,-5 0,-2.76142 2.23858,-5 5,-5 2.76142,0 5,2.23858 5,5 z m -30,0 c 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.23858 -5,-5 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z"  fill="none" />';	
	icons['STABILITY.ICON.DRUG RELATED ACTIVITIES'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >DRUG</text>';
	icons['STABILITY.ICON.EXPLOSION'] = '<path d="m 110,55 5,20 15,-10 0,15 15,5 -15,10 15,10 -15,5 5,15 -20,-5 -5,20 -10,-15 -10,20 -5,-25 -20,10 5,-15 L 55,105 70,95 60,85 70,80 70,65 85,75 90,55 100,70 z"  fill="none" />';
	icons['STABILITY.ICON.EXTORTION'] = '<text stroke="none" text-anchor="middle" x="100" y="130" font-size="80" >$</text>';
	icons['STABILITY.ICON.FOOD DISTRIBUTION'] = '<path d="m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30" fill="none" />' + {"Unknown" : '<path d="M35,120 l130,0 " fill="none" />',"Friend" : '<path d="M25,120 l150,0 " fill="none" />',"Neutral" : '<path d="M45,120 l110,0 " fill="none" />',"Hostile" : '<path d="M50,120 l100,0 " fill="none" />'}[affiliationType];
	icons['STABILITY.ICON.GRAFFITI'] = '<path d="m 110,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10 M 90,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10"  fill="none" />';	
	icons['STABILITY.ICON.GROUP'] = '<path d="m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0" fill="none" />';
	icons['STABILITY.ICON.HIJACKING (AIRPLANE)'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 70,95 0,10 65,0 0,-10 z m 55,10 0,10 5,0 0,-10 z m 0,-10 0,-10 5,0 0,10 z m -45,10 0,15 10,0 0,-15 z m 0,-10 0,-15 10,0 0,15 z" />';
	icons['STABILITY.ICON.HIJACKING (BOAT)'] = '<path fill="'+ (force2525 ? iconFillColor : !frame?iconFillColor : 'none') + '" d="m 105,80 0,20 20,0 z m -5,25 0,-25 m -30,25 10,15 40,0 10,-15 z"/>';
	icons['STABILITY.ICON.GRAY LIST LOCATION'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >GRAY</text>';
	icons['STABILITY.ICON.IED'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >IED</text>';
	icons['STABILITY.ICON.INDIVIDUAL'] = '<path d="m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0"  fill="none" />';
	icons['STABILITY.ICON.INTERNAL SECURITY FORCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ISF</text>';
	icons['STABILITY.ICON.KILLING VICTIM'] = '<path d="m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0"  fill="none" />' + {"Unknown" : '<path fill="none" d="M50,65 150,135" />',"Friend" : '<path fill="none" d="M25,50 175,150" />',"Neutral" : '<path fill="none" d="M45,45 155,155" />',"Hostile" : '<path fill="none" d="M57,70 143,130" />'}[affiliationType];;
	icons['STABILITY.ICON.KILLING VICTIMS'] = '<path d="m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0" fill="none" />' + {"Unknown" : '<path fill="none" d="M50,65 150,135" />',"Friend" : '<path fill="none" d="M25,50 175,150" />',"Neutral" : '<path fill="none" d="M45,45 155,155" />',"Hostile" : '<path fill="none" d="M57,70 143,130" />'}[affiliationType];
	icons['STABILITY.ICON.KNOWN INSURGENT VEHICLE'] = '<path d="m 65,95 70,0 m 0,10 c 0,5.52285 -4.47715,10 -10,10 -5.52285,0 -10,-4.47715 -10,-10 0,-5.522847 4.47715,-10 10,-10 5.52285,0 10,4.477153 10,10 z m -50,0 c 0,5.52285 -4.477153,10 -10,10 -5.522847,0 -10,-4.47715 -10,-10 0,-5.522847 4.477153,-10 10,-10 5.522847,0 10,4.477153 10,10 z" fill="none" />';
	icons['STABILITY.ICON.MASS GRAVE LOCATION'] = '<path d="m 77.5,90 10,0 m -5,-5 0,15 m 7.5,-20 0,30 -15,0 0,-30 z m 22.5,10 10,0 m -5,-5 0,15 m -7.5,-20 0,30 15,0 0,-30 z m -15,20 10,0 m -5,-5 0,20 m -7.5,-25 15,0 0,30 -15,0 z"  fill="none" />';
	icons['STABILITY.ICON.MINE LAYING'] = '<path d="m 60,85 80,0 0,30 -80,0 z"  fill="none" /><path d="m 135,100 c 0,5.52285 -4.47715,10 -10,10 -5.52285,0 -10,-4.47715 -10,-10 0,-5.52285 4.47715,-10 10,-10 5.52285,0 10,4.47715 10,10 z m -25,0 c 0,5.52285 -4.47715,10 -10,10 -5.522847,0 -10,-4.47715 -10,-10 0,-5.52285 4.477153,-10 10,-10 5.52285,0 10,4.47715 10,10 z m -25,0 c 0,5.52285 -4.477153,10 -10,10 -5.522847,0 -10,-4.47715 -10,-10 0,-5.52285 4.477153,-10 10,-10 5.522847,0 10,4.47715 10,10 z"  stroke="none" />';	
	icons['STABILITY.ICON.PATROLLING'] = '<path d="m 131,97 0,-14 5,0 c 4,0 4,7 0,7 l -5,0 m -71,15 15,10 M 60,105 75,95 m -15,10 40,0 -15,-15 40,0"  fill="none" />';	
	icons['STABILITY.ICON.POISONING'] = '<path d="m 85,95 c 0,-20 30,-20 30,0 0,20 -30,20 -30,0 z m -15,10 60,15 m -60,0 60,-15"  fill="none" />';
	icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" stroke="' + black + '" d="m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z" />';
	icons['STABILITY.ICON.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS'] = icons['STABILITY.ICON.PSYCHOLOGICAL OPERATIONS'] + {"Unknown" : '<path fill="none" d="M50,65 100,110 100,90 150,135" />',"Friend" : '<path fill="none" d="M25,50 100,110 100,90 175,150" />',"Neutral" : '<path fill="none" d="M45,45 100,110 100,90 155,155" />',"Hostile" : '<path fill="none" d="M57,70 100,110 100,90 143,130" />'}[affiliationType];
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
	icons['STABILITY.M1.HOUSE-TO-HOUSE'] = '<path fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 110,65 -20,0 0,15 20,0 z m -10,-10 -10,10 20,0 z" />';	
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


	icons['ACTIVITIES.ICON.CRIMINAL.ACTIVITY.INCIDENT'] = '<path stroke="none" d="m 98.6875,66.71875 c -3.16495,0.654128 -6.324994,3.669586 -6.40625,7.024048 0.319085,3.57768 5.281945,2.750677 6.974689,0.585063 1.986541,-1.176345 1.737071,-4.536373 4.490891,-3.702861 2.59058,-0.557347 3.18506,3.211007 5.8505,3.214613 1.57585,1.527309 4.37017,-0.618559 5.35772,1.229873 0.74415,1.091421 1.4883,2.182843 2.23245,3.274264 -2.04685,3.070534 -1.27192,7.943143 1.87326,9.9969 3.47958,1.082074 4.7569,-3.469396 4.10224,-6.163894 -0.19849,-2.992888 -2.52303,-5.002635 -5.05796,-5.372403 -1.52212,-1.890038 -2.71544,-3.434969 -1.56439,-5.641323 -0.96974,-3.340668 -5.0604,-4.525112 -8.21283,-4.282292 -2.19973,0.321489 -2.92884,2.588214 -5.33026,1.869262 -1.91674,0.435279 -1.85451,-2.847701 -4.31006,-2.03125 z m 0.15625,1.3125 c 2.74185,0.451859 0.908553,0.610342 -0.569598,1.259519 -0.496874,2.166259 3.776688,0.383028 1.38396,2.867116 -0.948281,1.860881 -5.837776,4.692169 -5.908112,1.068067 0.05898,-2.50012 2.708884,-4.750662 5.09375,-5.194702 z m 10.3125,0.0625 c 2.36948,-0.533025 7.0752,2.314938 5.55177,3.715255 -0.80492,-2.100613 -2.96999,0.0017 -1.17677,1.159745 -1.73996,0.859067 -7.38069,-1.589398 -5.67627,-2.375 2.54081,0.779423 2.83087,-2.670245 -0.0245,-1.851458 -1.425,0.188902 1.12378,-0.825766 1.32579,-0.648542 z M 81.875,71.5625 c -1.822917,1.947917 -3.645833,3.895833 -5.46875,5.84375 -7.490909,-0.115458 -14.013994,6.201866 -15.708579,13.214763 -0.577682,4.18601 0.535644,8.499145 2.789789,12.049507 0.720852,3.8949 -3.242927,6.72531 -2.95621,10.72506 -0.776621,7.41697 4.766429,14.54043 11.664516,16.78124 2.319328,-0.41538 1.339332,1.26388 1.378386,2.02077 1.516949,-0.3992 3.033899,-0.79839 4.550848,-1.19759 -0.157386,1.54427 -0.09977,2.68254 1.362716,1.16794 0.887347,-0.28411 2.322749,-2.21982 2.865759,-1.46623 0.229366,2.23029 1.218588,0.13486 1.983596,-0.68416 0.795946,-1.20548 1.594526,-2.26463 2.444179,-0.4863 1.246774,-2.44176 4.071418,-7.18988 -0.775738,-7.25846 -3.39304,2.34564 -7.529495,4.55979 -11.800401,3.51219 -6.253694,-1.46855 -10.862254,-8.75917 -8.224506,-14.9137 0.423532,-3.85959 6.785655,-3.44473 5.035067,-8.22011 -1.832088,-2.64618 -5.67116,-2.89109 -5.701849,-6.984689 -1.497827,-7.306303 5.649692,-14.651824 12.975481,-13.665196 4.690583,0.507692 7.367903,4.917131 10.784827,7.64129 1.909871,1.896107 4.078219,5.135242 5.854462,1.397583 2.797737,-1.990189 4.311003,-4.667272 1.81439,-7.59021 C 94.758284,79.736076 90.930339,77.345489 88.027205,74.351839 86.267543,72.907066 83.858514,72.604329 81.875,71.5625 z m 3.25,3.78125 c 1.586665,1.1369 2.879872,2.106232 0.25,3.25 -0.929526,3.655087 -5.144826,-0.46486 -1.46875,-1.46875 0.389785,-0.604001 0.949831,-1.102565 1.21875,-1.78125 z m 34.15625,3.09375 c 3.04886,1.445107 3.91973,6.431177 1.40511,8.752093 -2.85485,0.06477 -3.5992,-4.257454 -3.10875,-6.565279 0.0657,-2.860073 2.50888,2.734011 2.54739,-0.749314 -0.20313,-0.524109 -0.53633,-0.97428 -0.84375,-1.4375 z M 127.25,90.21875 c -4.34525,0.37638 -8.80068,-0.03203 -13.0625,0.96875 -2.08362,1.067713 -5.73215,1.511661 -4.63363,4.541693 0.11746,1.798602 0.23492,3.597205 0.35238,5.395807 -4.93086,4.93925 -5.46496,13.25257 -2.18661,19.21456 2.4323,4.29343 7.00706,7.0067 11.78036,7.84794 3.25353,4.87131 7.2727,-1.31732 11.18813,-1.70745 5.51358,-2.49008 8.91467,-8.52407 8.52692,-14.51555 0.15127,-5.03107 -2.35985,-10.10265 -6.65255,-12.777 -0.0833,-2.302083 -0.16667,-4.604167 -0.25,-6.90625 -1.64281,-0.790575 -3.35483,-1.428415 -5.0625,-2.0625 z M 127.84375,92.5 c -0.87107,1.697256 0.59853,3.798771 -0.8764,4.870901 -2.28039,0.687031 -1.72364,-2.417998 -1.9388,-3.841426 -0.62509,-1.669652 1.93904,-0.677215 2.8152,-1.029475 z m -2.875,8.34375 c 4.13419,0.89738 8.02849,3.70794 9.28995,7.868 0.89252,3.73108 0.5189,8.04273 -2.264,10.93428 -1.74332,2.0068 -5.33742,4.29909 -7.67928,3.13248 -3.06602,-0.78134 -5.77247,2.12978 -8.64253,-0.53281 -6.85268,-4.15492 -7.17679,-16.01511 0.20729,-19.82343 2.73566,-1.64192 6.01062,-1.5662 9.08857,-1.57852 z" />' + '<path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 85.09375 75.34375 C 84.967379 75.764987 84.169866 76.66164 83.875 77.125 C 83.580135 77.630484 82.375 77.930645 82.375 78.5625 L 82.375 79.03125 C 82.375 79.368239 83.267634 80.0625 83.5625 80.0625 L 83.8125 80.0625 C 84.823468 80.0625 84.995887 79.067984 85.375 78.5625 C 85.669866 78.22551 86.72414 77.368239 87.1875 77.03125 L 85.09375 75.34375 z M 127.84375 92.53125 L 124.96875 92.65625 L 125.21875 96.46875 C 125.30305 97.479718 125.89939 97.330134 126.53125 97.625 C 127.07885 97.330134 127.84375 97.1441 127.84375 96.34375 C 127.84375 95.796142 127.72107 95.61824 127.46875 95.28125 L 127.84375 92.53125 z " />';	
	icons['ACTIVITIES.ICON.CRIMINAL.CIVIL DISTURBANCE'] = '<path stroke="none" d="m 110.6,142.37367 0,-28.56 -7.08,0 0,28.56 z m -21.24,0 7.08,0 0,-28.56 -7.08,0 z m 7.08,-28.56 h 7.08 v -11.76 h 24.36 V 77.173667 h -6.32 v 18.6 h -18.04 v -10.72 c 0,-0.92 2.08,-1.24 2.96,-1.72 0.7596,-0.4 2.12,-1.44 2.72,-2 1.48,-1.44 3.2,-3.6 3.8,-5.92 1.6,-6.32 -0.2404,-10.56 -3.8,-14.12 -3,-3.08 -9.24,-4.88 -14.32,-2.72 -3.6,1.56 -8.36,6.16 -8.36,11 v 3.16 c 0,2.76 1.92,6.2 3.32,7.68 1,1 1.76,1.72 3.04,2.48 0.96,0.56 3.6,1.32 3.6,2.16 v 10.72 H 78.4 v -18.6 h -6.28 v 24.880003 h 24.36 v 11.76 h -0.04 z" />';	
	icons['ACTIVITIES.ICON.SHOOTING'] = '<path stroke="none" d="m 93.18612,89.65981 h 16.8 v 9.32 c -2.5596,0 -7.32,1.5596 -9,1 -2.32,-0.8 -5.4,-2 -7.8,-2.56 v -7.76 l 0,0 z m -29.96,0 h 26.08 v 9.56 c 0,0.88 4.08,2 4.96,2.28 1.88,0.64 3.56,1.36 5.48,2 2,0.68 3.3596,0.4 5.9596,-0.08 1.56,-0.28 5.68,-0.44 6.6,-0.88 0.6404,2.68 4.6404,13.96 4.6404,15.2404 0,1.6 -1.2404,3.9596 -1.28,5.68 l 21.52,0.04 -8.16,-25.8804 7.8,-7.68 c -0.76,-1.64 -4.08,-13.44 -5.16,-13.44 h -68.44 v 13.16 l 0,0 z" />';	
	icons['ACTIVITIES.ICON.FIRE EVENT'] = '<path stroke="none" d="m 96.48632,78.53981 c 0,-5.08 4.08,-9.68 4.08,-13.04 v -0.44 c 0,-1.28 -0.0404,-3.8 -1.08,-4.08 -1.04,4.48 -3.48,8 -5.92,11.16 -1.24,1.64 -2.36,3.28 -3.6,4.96 -1.04,1.36 -3.12,3.48 -3.12,5.52 0,1.44 6.12,17.72 3,17.72 -0.12,0 -3.76,-2.52 -4.2,-2.88 -1.4,-1.04 -2.36,-2.28 -3.32,-3.72 -3.08,-4.56 -2.44,-4.4 -3.8,-10.28 -1.52,0.4 -2.56,4.96 -2.92,6.92 -0.44,2.36 -0.28,6.64 0.24,9 0.64,2.84 1.36,5 2.52,7.32 0.6,1.2 3.04,5.48 3.12,6.48 -2.16,-0.5204 -7.04,-4.6 -8.6,-6.16 -1.48,-1.52 -5.48,-8.28 -5.92,-8.6 0,9.88 5,22.8 9.76,27.64 3.08,3.08 6.32,6.36 10.16,8.6404 2.44,1.48 10.48,4.32 14.28,4.32 h 2.3596 c 2.8404,0 10.8,-3.04 12.88,-4.2 3.4,-1.88 6.88,-4.72 9,-7.88 4.4,-6.52 8.04,-15 8.04,-25.7596 v -1.28 l -0.44,-5.76 c -0.72,0.36 -2.24,4.36 -2.52,5.16 -0.52,1.32 -2.0404,3.4 -2.88,4.64 -1.4,2.12 -5.24,6.28 -7.84,6.88 v -1.08 c 0,-4.4 2.7596,-8.8 2.7596,-12.4 v -1.92 l -1.28,-12.16 h -0.6392 c -0.32,3.88 -1.64,7.88 -3.36,10.48 -1.32,2 -5.2796,5.6 -7.72,6.16 -0.24,-0.4 -0.44,-0.64 -0.44,-1.28 v -2.32 c 0,-5.08 3,-8.88 3,-12.84 v -0.84 c 0,-1.52 -2.08,-3.88 -2.92,-5.2 -0.68,-1.12 -2.4,-4.32 -3.5204,-4.6 v 1.28 c 0,6.16 -1.3596,10.6 -5.5596,12.6 -1.08,-1.68 -3.6,-3.16 -3.6,-6.24 v -1.9208 l 0,0 z" />';	
	icons['ACTIVITIES.ICON.NON-RESIDENTIAL FIRE'] = '<path stroke="none" d="m 121.24592,122.28001 -6.16,0 0,5.92 6.16,0 z m -12.0796,0 -6.1204,0 0,5.92 6.1204,0 z m -12.2404,0 -5.92,0 0,5.92 5.92,0 z m -12.28,0 -5.68,0 0,5.92 5.68,0 z m 30.44,-4.7596 h 6.12 v -6.16 h -2.48 c -1.2,0 -2.48,1.52 -3.64,1.8 v 4.36 z m -5.9196,-6.1604 -6.1204,0 0,6.1604 6.1204,0 z m -12.2404,0 -5.92,0 0,6.1604 5.92,0 z m -12.28,0 -5.68,0 0,6.1604 5.68,0 z m 25,-33.4 c 0,-3.44 3.4,-7.44 3.4,-9.08 0,-1.36 -0.7596,-4.16 -1.8,-4.56 0,7.12 -8.64,12.84 -8.64,15.68 v 0.44 c 0,0.72 1.92,5.24 2.28,6.6 0.44,1.72 1.44,5.6 1.6,7.28 -6.2,-0.12 -7.32,-9.84 -10.28,-11.84 l -0.28,2.96 0.04,4.56 c 0,4.68 3.36,11.44 5.64,13.92 1,1.12 4.16,3.68 5.52,4.2796 0.8404,0.4 6.28,2.96 6.6,2.96 1.4404,0 9.2,-7.24 10.52,-8.56 2.5204,-2.5196 4.0404,-9.6 4.0404,-14.84 v -0.72 l -0.72,-5.72 c -0.96,0.6 -2.1204,5.64 -2.76,7 -1.52,3.16 -1.76,3.12 -5.4,3.96 -0.28,-12.2 6.68,-8.28 -2.72,-19.12 0,4.88 -0.92,7.88 -4.08,9.56 -1.3604,-0.7196 -2.9604,-2.7196 -2.9604,-4.7596 z m -14.8,26.3604 h 3.64 c -0.12,-0.6404 -0.32,-1.36 -1.12,-1.36 h -1.16 v -2.72 c 0,-0.92 -0.88,-2.4 -1.36,-2.96 v 7.04 z m -16.36,-28.6404 h 3.88 v 28.64 h 8.88 v -28.64 h 3.64 v 5.44 c 0.28,-0.2 1.36,-1.4 1.36,-1.8 v -5 h -6.4 v 28.64 h -6.36 v -28.64 h -6.12 v 28.64 h -5.24 v 32.72 h 54.76 v -30.68 c -0.4,0.2404 -1.12,1.0404 -1.12,1.6 v 27.48 h -52.48 v -29.7596 h 5.24 v -28.64 h -0.04 z" />';	
	icons['ACTIVITIES.ICON.RESIDENTIAL FIRE'] = '<path stroke="none" d="m 91.54,88.3 -0.68,-2.96 -30.12,25.2 15.6,0.12 v 25.6 h 50.48 v -25.6 h 12.44 c -0.3596,-0.52 -7.64,-5.88 -8,-5.88 -0.28,0 -1.2,1.6 -1.4,1.88 l 1.4,1.4 h -2.3596 c -0.68,0.52 -4.88,3.12 -4.88,3.8 v 22.32 h -18.32 v -12.92 h -8.68 v 12.92 h -18.08 v -23.52 h 22.56 l -2.2,-2.72 -30.72,-0.12 L 91.54,88.3 z m 27.56,28 -8.2404,0 0,8.48 8.2404,0 z m -27,0.24 -8.68,0 0,8.24 8.68,0 z m 11.04,-36.36 c 0,0.88 2.08,5.28 2.48,6.92 0.44,1.76 1.48,6.08 1.48,7.84 -7.08,-1.64 -6.92,-9.92 -10.32,-12.2 -1.72,7.48 0.76,15.12 3.72,19.52 2.44,3.64 2.56,3.44 5.96,6 0.4404,0.4 7.9204,4.28 7.9204,4.28 2.04,0 9.5596,-7.08 11.0796,-8.6404 1.8,-1.8 5.56,-10.8 5.56,-14.4 V 83.46 c 0,-1.88 -0.28,-3.24 -1.4,-4 0,2 -1.8,6.96 -2.56,8.44 -0.84,1.76 -4.2796,4.24 -6.32,4.72 v -1.68 c 0,-4.44 2.36,-6.84 2.36,-10.08 0,-1.96 -4.0404,-7.24 -5.16,-8 0,5.36 -0.72,8 -4.24,9.84 -1.16,-0.72 -3.08,-2.64 -3.08,-4.4 v -0.96 c 0,-1.52 1.84,-5.4 2.52,-6.64 2,-3.92 0.48,-3.76 -0.4,-6.96 h -0.44 c -1.32,5.48 -0.8,4.84 -3.76,8.92 -1,1.36 -5.4,5.88 -5.4,7.52 z" />';
	icons['ACTIVITIES.ICON.SCHOOL FIRE'] = '<path stroke="none" d="m 131.28,72.96 c -4.0404,-1.04 -17,-7.2 -19.8,-7.2 h -2.44 V 96 h -0.72 c 0,5.6 -3.7596,15.32 -6.2,18.64 -1.96,2.7204 -3.72,4.1204 -6.24,6.16 -0.84,0.64 -7.04,4.92 -7.04,5.4 v 8.04 h 44.08 V 96 h -20.44 l 0.04,-14.8 18.76,-8.24 z m -49.24,11.8 c 0,-3.04 3.64,-8 3.64,-10 0,-1.8 -0.84,-3.88 -1.96,-4.64 -0.36,0.8 -0.36,3.56 -0.92,4.96 -0.28,0.72 -1.8,2.68 -2.32,3.52 -1.56,2.32 -3.4,4.16 -5.08,6.36 -2.16,2.84 0,5 1.12,8.24 0.8,2.24 1.4,7.88 2.08,9.36 C 71.88,102.4 70.56,91.84 67.64,89.88 l -0.56,7.56 0.08,0.24 c 0,5.04 3.56,12.28 5.92,15.04 1.12,1.32 4.28,3.6 5.88,4.6 1.12,0.68 2.52,1.0404 3.72,1.6404 0.36,0.2 3.24,1.8796 3.24,1.8796 2.12,0 9.88,-7.3596 11.52,-8.9596 1.84,-1.8 5.8,-10.96 5.8,-14.44 v -6.32 c 0,-2.08 -0.4,-2.64 -0.72,-4.16 h -0.76 c -0.16,1.92 -2.2,7.12 -3,8.72 -0.68,1.28 -6.28,5.72 -6.28,3.72 v -1.2 c 0,-3.8 2.44,-7.16 2.44,-10 v -0.76 c 0,-1.52 -4.32,-6.84 -5.36,-7.56 0,2.52 0.12,4.8 -0.8,6.52 -0.48,0.88 -2.48,3.48 -3.56,3.48 -1.08,0 -3.16,-3.4404 -3.16,-5.1204 z" />';
	icons['ACTIVITIES.ICON.HOT SPOT'] = '<path stroke="none" d="m 96.2608,78.5226 c 0,-5.07 4.0604,-9.6924 4.0604,-13.036 v -0.4272 c 0,-1.282 -0.0432,-3.7868 -1.0688,-4.0604 -1.0448,4.4844 -3.4856,7.9804 -5.9256,11.1704 -1.2508,1.6356 -2.3484,3.2644 -3.606,4.9428 -0.9968,1.3312 -3.0772,3.4472 -3.0772,5.4708 0,1.4376 6.1096,17.7376 2.992,17.7376 -0.1084,0 -3.7492,-2.532 -4.1896,-2.8628 -1.3876,-1.042 -2.3728,-2.278 -3.3332,-3.7192 -3.0604,-4.592 -2.4352,-4.4256 -3.804,-10.3004 -1.492,0.3984 -2.5508,4.9784 -2.9064,6.9236 -0.4344,2.3776 -0.2704,6.6576 0.2508,8.9816 0.6368,2.8416 1.3492,5.0112 2.5136,7.3168 0.612,1.212 3.052,5.4944 3.134,6.4832 -2.1712,-0.5068 -7.0572,-4.578 -8.6048,-6.1412 -1.5104,-1.5256 -5.5012,-8.2928 -5.9272,-8.6052 0,9.8788 4.9836,22.7856 9.774,27.6248 3.0704,3.1016 6.3096,6.376 10.1388,8.6668 2.4536,1.4688 10.486,4.3124 14.2804,4.3124 h 2.3504 c 2.8572,0 10.8008,-3.0432 12.8952,-4.2008 3.4072,-1.8824 6.8616,-4.7392 8.9916,-7.8916 4.3872,-6.492 8.032,-14.9708 8.032,-25.734 V 99.893 l -0.444,-5.7892 c -0.6884,0.3784 -2.2076,4.376 -2.5176,5.178 -0.5092,1.3184 -2.0388,3.4148 -2.8496,4.63 -1.4172,2.1236 -5.2484,6.2708 -7.8656,6.88 v -1.0688 c 0,-4.3928 2.7776,-8.7908 2.7776,-12.3944 v -1.9232 l -1.2728,-12.1824 -0.6508,8e-4 c -0.3232,3.8832 -1.656,7.9064 -3.3756,10.5148 -1.3152,1.9952 -5.2724,5.5804 -7.7368,6.1544 -0.2224,-0.42 -0.4272,-0.6304 -0.4272,-1.2824 v -2.3504 c 0,-5.0732 2.9916,-8.8872 2.9916,-12.8224 V 82.583 c 0,-1.5208 -2.0864,-3.8688 -2.9056,-5.2156 -0.6824,-1.1232 -2.404,-4.3208 -3.5056,-4.6148 v 1.2824 c 0,6.1544 -1.3648,10.5972 -5.5568,12.6084 -1.1072,-1.6532 -3.6328,-3.1112 -3.6328,-6.1976 v -1.9232 l 0.0012,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 113.0012,126.8998 c 0,6.29605 -5.10395,11.4 -11.4,11.4 -6.296044,0 -11.399996,-5.10395 -11.399996,-11.4 0,-6.29605 5.103952,-11.4 11.399996,-11.4 6.29605,0 11.4,5.10395 11.4,11.4 z" />';
	icons['ACTIVITIES.ICON.FIRE ORIGIN'] = '<path stroke="none" d="m 96.2608,78.5226 c 0,-5.07 4.0604,-9.6924 4.0604,-13.036 v -0.4272 c 0,-1.282 -0.0432,-3.7868 -1.0688,-4.0604 -1.0448,4.4844 -3.4856,7.9804 -5.9256,11.1704 -1.2508,1.6356 -2.3484,3.2644 -3.606,4.9428 -0.9968,1.3312 -3.0772,3.4472 -3.0772,5.4708 0,1.4376 6.1096,17.7376 2.992,17.7376 -0.1084,0 -3.7492,-2.532 -4.1896,-2.8628 -1.3876,-1.042 -2.3728,-2.278 -3.3332,-3.7192 -3.0604,-4.592 -2.4352,-4.4256 -3.804,-10.3004 -1.492,0.3984 -2.5508,4.9784 -2.9064,6.9236 -0.4344,2.3776 -0.2704,6.6576 0.2508,8.9816 0.6368,2.8416 1.3492,5.0112 2.5136,7.3168 0.612,1.212 3.052,5.4944 3.134,6.4832 -2.1712,-0.5068 -7.0572,-4.578 -8.6048,-6.1412 -1.5104,-1.5256 -5.5012,-8.2928 -5.9272,-8.6052 0,9.8788 4.9836,22.7856 9.774,27.6248 3.0704,3.1016 6.3096,6.376 10.1388,8.6668 2.4536,1.4688 10.486,4.3124 14.2804,4.3124 h 2.3504 c 2.8572,0 10.8008,-3.0432 12.8952,-4.2008 3.4072,-1.8824 6.8616,-4.7392 8.9916,-7.8916 4.3872,-6.492 8.032,-14.9708 8.032,-25.734 V 99.893 l -0.444,-5.7892 c -0.6884,0.3784 -2.2076,4.376 -2.5176,5.178 -0.5092,1.3184 -2.0388,3.4148 -2.8496,4.63 -1.4172,2.1236 -5.2484,6.2708 -7.8656,6.88 v -1.0688 c 0,-4.3928 2.7776,-8.7908 2.7776,-12.3944 v -1.9232 l -1.2728,-12.1824 -0.6508,8e-4 c -0.3232,3.8832 -1.656,7.9064 -3.3756,10.5148 -1.3152,1.9952 -5.2724,5.5804 -7.7368,6.1544 -0.2224,-0.42 -0.4272,-0.6304 -0.4272,-1.2824 v -2.3504 c 0,-5.0732 2.9916,-8.8872 2.9916,-12.8224 V 82.583 c 0,-1.5208 -2.0864,-3.8688 -2.9056,-5.2156 -0.6824,-1.1232 -2.404,-4.3208 -3.5056,-4.6148 v 1.2824 c 0,6.1544 -1.3648,10.5972 -5.5568,12.6084 -1.1072,-1.6532 -3.6328,-3.1112 -3.6328,-6.1976 v -1.9232 l 0.0012,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 99.59375 105.90625 C 93.297704 105.90625 88.1875 111.01645 88.1875 117.3125 C 88.1875 123.60855 93.297704 128.6875 99.59375 128.6875 C 105.8898 128.6875 111 123.60855 111 117.3125 C 111 111.01645 105.8898 105.90625 99.59375 105.90625 z M 105 109.375 L 106.78125 111 L 101.15625 117.09375 L 107.28125 123.1875 L 105.59375 124.875 L 99.53125 118.84375 L 93.65625 125.25 L 91.875 123.625 L 97.84375 117.15625 L 92.09375 111.4375 L 93.78125 109.75 L 99.46875 115.40625 L 105 109.375 z" />';
	icons['ACTIVITIES.ICON.SMOKE'] = '<path stroke="none" d="m 99.2598,69.226202 c 0.2,-2.6 4.3596,-5.52 7.24,-6 4.2404,-0.76 6.92,1.16 9.12,3.32 1.08,1.08 1.88,2.68 2.4,4.32 0.6404,2.2 1.88,1.28 4.0404,2.48 2.44,1.36 4.88,4.44 5.6,7.44 5.28,0 10.28,4.76 10.28,9.88 v 1.28 c 0,3 -1.2404,4.92 -2.8,6.48 -1.08,1.08 -1.2,1.2404 -2.56,2.079998 -1.32,0.8 -2.48,0.56 -2.68,1.96 -0.64,4.6 -4.1596,9 -9.4,9 3.32,4.9596 2.28,8.6796 -0.64,13.04 0,4.84 -0.2404,6.24 -2.8,8.76 -2.4404,2.4796 -4.48,2.3596 -8.56,2.3596 0.72,-1.04 1.2404,-1.04 1.96,-2.44 0.6,-1.08 0.84,-1.68 1.3596,-2.88 0.96,-2.2 1.76,-3.72 1.76,-6.84 v -2.1196 c 0,-1.3596 -0.2,-2.44 -0.84,-3.1596 -1.2404,5.24 -1.4404,6.4 -5.68,8.6 0,-8.28 3.84,-6.8404 -1.88,-13.4404 0,3.8404 -0.2,5.6 -2.72,6.9204 -0.8,-0.48 -2.12,-1.68 -2.12,-2.9204 v -0.4 c 0,-2 2.52,-5.24 2.52,-6.72 v -0.44 c 0,-1.12 -0.36,-2.08 -1.0404,-2.52 0,2.92 -3.3596,7.6 -4.88,9.2 -1.64,1.72 -1.12,2.8 -0.24,4.9596 0.68,1.68 1.12,3.52 1.12,5.8 v 1.0404 c -3.2,-0.28 -4.4,-6.2404 -6.08,-8.2 0,3.4 -0.84,6.2796 0.4,9.44 0.76,1.92 2.44,5.56 4.4,6.08 v 0.4 l -3.3596,0.56 -0.2,-0.0796 c -3.36,0 -6.36,-2.4 -7.76,-4.4 -0.76,-1.1204 -1.48,-2.68 -1.68,-4.4 -0.32,-2.3204 0.6,-3.6404 0.6,-5.0404 0,0 -5.12,-4.72 -4.4,-9.04 l 0.2,-1.68 c -0.36,-0.52 -1.4,-1.36 -2,-2.2 -0.6,-0.76 -1.12,-1.8 -1.56,-2.64 -1.36,0.04 -1.96,0.64 -3.16,0.64 h -0.64 c -5.4,0 -10.52,-5.16 -10.52,-10.519998 v -0.84 c 0,-4.88 4.12,-9.24 9.04,-9.24 h 2.12 c 0.76,-3.24 5.72,-6.88 10.08,-5.88 -0.36,-1.52 -1.04,-2.72 -1.04,-4.84 v -0.4 c 0,-3.84 3.24,-7.76 6.08,-8.84 1.88,-0.72 3.92,-0.96 6.12,-0.4 2.32,0.56 3.68,2.2 4.8,2.48 l 0,0 z m -0.4,-1.88 c -1.32,-0.12 -2.88,-2.08 -5.88,-2.08 h -1.92 c -5.04,0 -10.6,5.84 -9.96,11.36 l 0.48,3.36 h -0.6 c -4.28,0 -7.12,3.24 -8.6,6.08 -2.32,-1.12 -6.8,1.2 -7.92,2.36 -1.64,1.6 -3.64,4.2 -3.64,7.28 v 1.48 c 0,3.639998 2.4,7.319998 4.52,8.919998 1.76,1.32 2.04,1.56 4.36,2.36 2.68,0.8796 3.72,0.0796 5.92,0.1596 l 3.08,3.68 c -0.64,1.32 0.44,4.92 0.88,6.04 0.48,1.2 0.72,1.4404 1.36,2.4 0.24,0.4 1.72,2.0404 1.72,2.0404 0,1.12 -0.44,1.44 -0.44,2.72 v 0.2 c 0,6.28 4.76,11.96 10.72,11.96 2.12,0 3.6,-0.36 5.04,-1.0404 2.64,1.4 7.12,2.96 9.24,-0.08 l 3.4,0.5204 c 2.68,0.44 6.8,-2.2 7.9204,-3.6404 1.04,-1.4 3.72,-5.9596 2.4,-8.7596 1.12,-0.7204 2.5596,-3.7204 2.72,-5.48 0.12,-1.68 0.2,-1.8 -0.08,-3.6404 -0.24,-1.4 -0.88,-2.2 -1,-3.24 4.04,-0.32 8.4,-5.2 8.4,-9.68 2.48,-1.64 3.36,-1.1596 5.64,-3.839998 1.28,-1.44 2.56,-4.4 2.56,-7.04 0,-6.32 -4.68,-11.96 -10.72,-11.96 -0.88,-3.96 -4.8,-8.28 -9.2404,-8.64 -0.3596,-4.4 -5.72,-9.44 -10.72,-9.44 -4.12,-0.0396 -8.88,2.7204 -9.64,5.6404 l 0,0 z m 15.76,38.439998 c 0.48,0 1.0404,0.08 1.0404,-0.4404 0,-3.0796 -4.12,-6.719998 -7.56,-6.719998 h -1.88 c -0.64,0 -1,0.76 -0.5596,0.96 0.3596,0.24 1.5596,0.12 2.04,0.12 1.2404,0 2.6404,0.479998 3.4,0.999998 2.1192,1.6004 2.7992,2.0804 3.5192,5.0804 z m -34.48,-12.599998 v 1.68 c 0,1.44 0.64,2.2 0.64,3.16 0,0 -3.6,3.359998 -3.76,5.440398 l 0.6,0.24 c 0.96,-0.64 1.56,-2.6 3,-3.959998 0.96,-0.8796 3.08,-2.1596 4.8,-2.1596 h 0.64 c 1.28,0 3.56,1 3.56,-0.2 0,-0.92 -2.6,-1.04 -3.56,-1.04 h -0.24 c -1.6,0 -3.04,0.6 -4,1.28 -0.08,-1.04 -0.6,-1.92 -0.6,-3.16 0,-4.56 3.72,-8.6 8.4,-8.6 h 1.04 c 1,0 1.52,0.24 2.32,0.44 0.12,-0.2 0.4,-0.56 0.4,-0.68 0,-0.72 -1.76,-1.04 -2.52,-1.04 h -1.48 c -4.52,-8e-4 -9.24,4.3592 -9.24,8.5992 z m 19.12,-15.76 0.64,0.64 c 1.64,-0.88 3.4404,-2.32 5.88,-2.32 h 1.04 c 5.48,0 10.08,4.36 10.08,9.68 v 0.64 c -1.48,-0.04 -2.6,-0.84 -4.6,-0.84 h -1.04 c -1.52,0 -4.08,0.28 -4.2,1.68 0.5596,0.12 0.4,0.2 0.84,0.2 0.88,0 1.4404,-0.64 2.96,-0.64 h 2.32 c 2.2,0 5.56,1.84 6.56,3.12 2,2.6 1.84,3.68 2.64,7.2 0.48,0 1.04,0.08 1.04,-0.44 0,-4 -2.64,-8.08 -5.24,-9.44 0,-6.88 -4.48,-12.4 -11.12,-12.4 h -1.28 c -2.32,0 -5.56,1.56 -6.52,2.92 z" />';
	icons['ACTIVITIES.ICON.SPECIAL NEEDS FIRE'] = '<path stroke="none" d="m 75.28,133.86 h 49.4 v -28.88 c -0.56,0.4 -2.36,1.2404 -2.36,1.96 v 24.8 H 77.44 v -30 h -2.16 v 32.12 l 0,0 z M 93,129.14 h 1.96 c 4.24,0 7.56,-2.4404 9.28,-4.96 l -1.32,-3.48 c -1.2,0.3204 -2.08,5.16 -8.64,5.16 h -0.84 c -3.36,0 -6.28,-3.28 -7.2,-5.96 -0.6,-1.72 -0.6,-3.6 0,-5.3596 0.84,-2.48 1.6,-2.4 2.6,-4 l -0.36,-3.4 c -3.2,0.84 -7.08,7.9596 -5.72,12.8 1.16,4.1196 5.36,9.1996 10.24,9.1996 z M 88.88,97.86 v 0.44 c 0,0.8 0.52,1.44 0.8,1.96 l 1.36,14.68 11.32,0.04 4.2796,10.16 6.1604,-2.04 -1,-2.9596 -3.48,1 C 108.04,119.9 104.76,111.66 104,111.66 H 94.08 C 94,110.98 93.84,110.9 93.84,110.14 v -1.08 h 7.56 v -2.36 h -7.96 l -0.24,-3.68 v -2.16 c 3.44,-0.8 2.72,-6.24 -1.08,-6.24 -1.84,0 -3.24,1.4 -3.24,3.24 z m 19.88,-7.36 v 1.04 l -0.4404,0.28 C 105.08,89.66 100.96,86.06 100.96,80.78 99.64,81.7 98.8,84.82 98.8,87.06 v 1.08 c 0,4.52 3.04,10.68 5,13.32 2.8,3.72 7.4,4.76 11.6,6.96 1.6,-0.8404 9.32,-5.36 10.04,-6.3204 1.32,-1.7196 4.24,-9.7596 4.24,-12.4396 0,-1.92 -0.32,-8.16 -1.28,-8.84 -0.68,2.72 -0.76,4.68 -2.32,6.76 -1.0404,1.4 -3.28,3.52 -5.0404,4 l -0.2,-2.36 v -0.24 c 0,-2.96 1.96,-5.36 1.96,-8.84 0,-1 -3.4,-6.08 -4.08,-6.24 0,1.8 -0.24,4.08 -0.6,5.44 -0.32,1.04 -1.92,3.4 -2.92,3.4 h -0.64 c -0.36,-1.36 -1.9204,-1.68 -1.9204,-4.76 V 76.9 c 0,-2.28 2.6,-5.48 2.6,-7.76 l 0.0404,-0.64 -0.28,-2.36 c -1,0.24 -1.04,1.92 -1.44,2.88 -0.4404,1.04 -1,2.04 -1.6404,2.88 -1.32,1.72 -2.6,3.36 -3.92,5.12 -2,2.76 -2.12,2.68 -0.96,6.12 0.6408,1.96 1.7208,4.84 1.7208,7.36 z m 24.32,10.24 -3.32,-2 -1.2,1.88 3.48,1.96 z m -66.16,0 1.04,1.88 c 5.04,-2.68 11,-6.92 16,-10.08 2.68,-1.68 5.16,-3.36 7.8,-5.12 1.36,-0.92 2.56,-1.64 3.92,-2.56 1.8,-1.2 1.92,-1.88 2.44,-4.28 l -31.2,20.16 z" />';
	icons['ACTIVITIES.ICON.WILD FIRE'] = '<path stroke="none" d="m 110.78413,139.5476 c 0.2424,-0.4592 6.5236,-6.156 7.3912,-7.0144 2.6444,-2.6172 5.5572,-5.2036 7.7556,-8.1284 3.89,-5.1752 7.9756,-14.9656 7.9756,-23.9968 v -6.924 c 0,-1.0252 0.0308,-2.218 -0.8144,-2.4436 -0.7888,3.3852 -3.276,7.682 -5.1464,10.1264 -0.4744,0.6208 -7.8872,8.7232 -7.8872,6.1644 0,-4.7204 2.4968,-8.3884 2.8516,-13.44 0.2024,-2.8788 -0.7584,-11.3916 -1.4252,-14.256 -0.89,0.6512 -1.172,4.2072 -1.652,5.6788 -0.5552,1.6964 -1.1736,3.5776 -2.1308,4.9968 -0.716,1.06 -6.1268,7.2448 -7.0104,7.2448 -0.7344,0 -1.6292,-2.9328 -1.6292,-4.0728 0,-4.7408 3.2584,-9.74 3.2584,-13.4408 v -0.6108 c 0,-2.366 -1.9252,-3.6296 -2.9852,-5.568 -0.5604,-1.024 -2.6916,-4.704 -3.7352,-4.818 v 2.8508 c 0,2.2296 -0.5416,5.5664 -1.2808,7.0688 -0.406,0.8244 -3.2008,4.132 -4.014,4.132 -1.033603,0 -3.869203,-3.9156 -3.869203,-5.702 v -3.462 c 0,-4.0528 4.073203,-8.6404 4.073203,-12.626 v -0.2036 c 0,-1.4736 -0.0344,-3.9572 -1.426003,-4.0728 -0.6676,8.0248 -12.6256,18.7056 -12.6256,21.79 0,4.3984 3.8692,9.1784 3.8692,15.884 v 2.2404 c 0,0.702 -0.1508,0.7884 -0.2036,1.4256 -0.784,-0.2096 -1.3552,-1.3476 -1.8852,-1.9844 -0.6516,-0.7828 -1.3988,-1.1232 -2.1908,-1.6784 -1.482,-1.0388 -2.6876,-2.2544 -3.8112,-3.724 -1.8776,-2.4552 -4.128,-6.7168 -4.128,-10.9416 -1.7928,0.4788 -3.2584,6.3152 -3.2584,8.7568 v 3.462 c 0,8.2916 5.9056,15.0908 5.9056,18.1244 -3.16,-1.672 -6.0392,-3.9144 -8.504,-6.3612 -1.208,-1.1992 -5.506,-8.5336 -6.1584,-8.7076 0,5.6828 1.658,10.3492 2.5984,15.118 0.4536,2.3016 1.1544,5.1336 1.8532,7.1084 0.9724,2.7452 1.868,3.2752 3.4068,5.3496 2.952,3.9804 4.8588,6.0152 8.2804,9.4368 1.5084,1.5084 2.8788,2.8612 4.3784,4.3784 l 4.7296,3.434 5.9112,2.8272 V 129.936 h -13.0332 l 9.8552,-11.5388 -7.4116,-0.0696 9.8404,-11.1424 -6.5816,-0.0584 10.886803,-17.2504 0.1252,-0.1992 11.1844,17.4508 -6.1084,-0.001 9.3932,10.9748 -7.5608,0.0232 10.0852,11.7196 -13.1396,0.0916 v 13.0336 l 5.9976,-3.422 z" />';
	icons['ACTIVITIES.ICON.HAZARDOUS MATERIALS INCIDENT'] = '<path stroke="none" d="m 60.72,100.64 78.52,-0.04 -39.28,39.24 -39.24,-39.2 z M 127.64,87.8 c 0.6,0.4 6.08,5.88 6.08,6.24 V 100 h -6.08 V 87.8 z M 115.32,75.48 c 0.6,0.4 6.08,5.88 6.08,6.24 V 100 h -6.08 V 75.48 z M 90.8,69.52 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 100 H 90.8 V 69.52 z m -12.2,12.2 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 100 H 78.6 V 81.72 z m -6.28,6.04 0.04,12.2 H 66.44 V 94.2 c 0,-0.28 -0.04,-0.28 -0.12,-0.4 l 6,-6.04 z m 30.8,-24.48 6.2,6.12 c -0.1596,0.4 -0.12,-0.12 -0.12,0.44 V 100 h -6.08 V 63.28 z M 56.72,99.96 100.04,143.28 143.28,99.96 99.96,56.72 56.72,99.96 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 103.12,63.28 6.2,6.12 c -0.1596,0.4 -0.12,-0.12 -0.12,0.44 V 100 h -6.08 V 63.28 z m -30.8,24.48 0.04,12.2 H 66.44 V 94.2 c 0,-0.28 -0.04,-0.28 -0.12,-0.4 l 6,-6.04 z m 6.28,-6.04 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 100 H 78.6 V 81.72 z m 12.2,-12.2 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 100 H 90.8 V 69.52 z m 24.52,5.96 c 0.6,0.4 6.08,5.88 6.08,6.24 V 100 h -6.08 V 75.48 z m 12.32,12.32 c 0.6,0.4 6.08,5.88 6.08,6.24 V 100 h -6.08 V 87.8 z m -66.92,12.84 78.52,-0.04 -39.28,39.24 -39.24,-39.2 z" />';
	icons['ACTIVITIES.ICON.CHEMICAL AGENT'] = '<path stroke="none" d="m 100.65,107.7 c -3.210002,2e-5 -5.775027,0.98838 -7.6375,2.975 -1.862609,1.97724 -2.787502,4.686 -2.7875,8.0875 -2e-6,3.39228 0.925303,6.10116 2.7875,8.0875 1.862586,1.97721 4.427694,2.9625 7.6375,2.9625 1.25215,0 2.43947,-0.16989 3.5625,-0.5125 1.13206,-0.34248 2.2056,-0.85358 3.2125,-1.5375 l 0.0875,-0.0625 0,-0.1 0,-2.9625 0,-0.4625 -0.3375,0.3125 c -0.93792,0.87354 -1.94016,1.52058 -3,1.95 -1.05064,0.42939 -2.17133,0.65 -3.3625,0.65 -2.352562,0 -4.10698,-0.71351 -5.3375,-2.125 -1.23079,-1.42083 -1.862504,-3.47296 -1.8625,-6.2 -4e-6,-2.73647 0.632293,-4.80137 1.8625,-6.2125 1.230705,-1.42073 2.985198,-2.12498 5.3375,-2.125 1.19117,2e-5 2.31185,0.20813 3.3625,0.6375 1.05984,0.42944 2.06208,1.07648 3,1.95 l 0.3375,0.325 0,-0.4625 0,-2.9875 -0.2,0 0.1125,-0.1625 c -0.98894,-0.67511 -2.05508,-1.17941 -3.1875,-1.5125 -1.12333,-0.34268 -2.31693,-0.51248 -3.5875,-0.5125 z M 92.66,64.2404 h 14.68 v 33 c 0,8.2 12.92,9.6 12.4404,21.76 -0.28,6.84 -7,18.6 -14.28,18.6 h -11 c -6.84,0 -14.64,-13.12 -14.28,-19.96 0.56,-10.5596 12.44,-12.8 12.44,-20.4 v -33 z m -14.68,55.04 c 0,6.84 7.92,20.1596 14.68,20.1596 h 14.68 c 8.08,0 14.68,-13.04 14.68,-22 0,-11.84 -12.84,-13.6 -12.84,-22 V 60.56 H 90.82 V 95.4 c 0,7.8404 -12.84,8.7204 -12.84,23.8804 l 0,0 z" /><path stroke="none" fill="'+symbolColors.fillColor['Unknown']+'" d="m 92.6625,64.2375 0,33 c 0,7.6 -11.9175,9.84 -12.4375,20.4 C 79.865,124.4779 87.7,137.6 94.5,137.6 l 11,0 c 7.24,0 13.995,-11.8 14.275,-18.6 0.4796,-12.16 -12.4375,-13.5625 -12.4375,-21.7625 l 0,-33 -14.675,0 z M 100.65,107.7 c 1.27057,2e-5 2.46417,0.16982 3.5875,0.5125 1.13242,0.33309 2.19856,0.83739 3.1875,1.5125 l -0.1125,0.1625 0.2,0 0,2.9875 0,0.4625 -0.3375,-0.325 c -0.93792,-0.87352 -1.94016,-1.52056 -3,-1.95 -1.05065,-0.42937 -2.17133,-0.63748 -3.3625,-0.6375 -2.352302,2e-5 -4.106795,0.70427 -5.3375,2.125 -1.230207,1.41113 -1.862504,3.47603 -1.8625,6.2125 -4e-6,2.72704 0.63171,4.77917 1.8625,6.2 1.23052,1.41149 2.984938,2.125 5.3375,2.125 1.19117,0 2.31186,-0.22061 3.3625,-0.65 1.05984,-0.42942 2.06208,-1.07646 3,-1.95 l 0.3375,-0.3125 0,0.4625 0,2.9625 0,0.1 -0.0875,0.0625 c -1.0069,0.68392 -2.08044,1.19502 -3.2125,1.5375 -1.12303,0.34261 -2.31035,0.5125 -3.5625,0.5125 -3.209806,0 -5.774914,-0.98529 -7.6375,-2.9625 -1.862197,-1.98634 -2.787502,-4.69522 -2.7875,-8.0875 -2e-6,-3.4015 0.924891,-6.11026 2.7875,-8.0875 1.862473,-1.98662 4.427498,-2.97498 7.6375,-2.975 z" />';
	icons['ACTIVITIES.ICON.CORROSIVE MATERIAL'] = '<path stroke="none" d="m 102.94,135.38 c 0.8,0 1.3596,-0.76 1.3596,-1.5204 0,-0.6796 -0.64,-1.52 -1.2,-1.52 H 102.34 c -0.5204,0 -1.2,0.68 -1.2,1.36 v 0.32 c 0,0.76 0.6,1.36 1.3596,1.36 H 102.94 z M 96.9,132.5 c 0,0.68 0.64,1.52 1.2,1.52 h 0.6 c 0.8,0 1.36,-0.76 1.36,-1.52 v -0.16 c 0,-0.68 -0.64,-1.52 -1.2,-1.52 H 98.1 c -0.56,0 -1.2,0.88 -1.2,1.52 v 0.16 z m 8.48,-0.92 c 1.32,0 2.16,-1.76 1.12,-2.8 -1.04,-1.0404 -2.8,-0.2 -2.8,1.12 0,0.84 0.88,1.68 1.68,1.68 z m -6.2,-4.4 c 0,0.6 0.64,1.52 1.2,1.52 h 0.6 c 0.76,0 1.36,-0.6 1.36,-1.36 v -0.6 c 0,-0.52 -0.68,-1.2 -1.36,-1.2 h -0.32 c -0.84,0 -1.48,0.8 -1.48,1.64 z m -0.64,-4.08 c 0.6,0 1.2,-0.8404 1.2,-1.52 0,-0.96 -0.72,-1.68 -1.68,-1.68 -0.6,0 -1.52,0.64 -1.52,1.2 v 0.6 c 0,0.68 0.72,1.3596 1.2,1.3596 h 0.8 V 123.1 z m 2.44,-2.72 c 0,0.64 0.68,1.52 1.2,1.52 h 0.76 c 0.44,0 1.2,-0.76 1.2,-1.2 v -0.76 c 0,-0.6 -0.8404,-1.2 -1.5204,-1.2 h -0.12 c -0.7596,0 -1.52,0.76 -1.52,1.52 v 0.12 z m -2.72,-3.48 c 0.64,0 1.36,-0.8404 1.36,-1.52 v -0.16 c 0,-2.24 -3.2,-1.76 -3.2,-0.32 v 0.7596 c 0,0.6804 1.08,1.2404 1.84,1.2404 z m 4.08,-3.64 c 0,2 3.32,1.88 3.24,-0.12 -0.08,-2.32 -3.24,-1.84 -3.24,-0.32 v 0.44 z m 4.72,-16.2 0,2.88 -3.04,-0.2 0.92,2.76 -1.08,0.12 -1.64,-0.88 -0.36,3.04 -1.04,-1.52 -3.32,1.04 -0.64,-3.16 -2.04,1.28 -0.64,-1.6 -2.48,0.44 1.52,-2.72 -0.6,-1.48 -22.24,0 0,12.4 59.24,0 0,-12.4 z M 94.3,85.22 v 1.36 c 0,4.4 2.08,8.68 5.72,9.44 3.68,0.8 7.04,-4.52 7.04,-8.04 v -1.52 c 0,-2.96 -2.08,-8.6 -2.96,-11.28 -0.52,-1.4 -3.08,-10.56 -3.88,-10.56 -0.84,0 -0.88,4.48 -1.12,5.4 -0.56,2.12 -0.92,3.2 -1.56,5.12 -0.76,2.32 -3.24,7.6 -3.24,10.08 l 0,0 z" />';
	icons['ACTIVITIES.ICON.HAZARDOUS WHEN WET'] = '<path stroke="none" d="m 60.56,100.48 78.8,-0.0404 -39.4,39.4 L 60.56,100.48 z M 127.64,87.8 c 0.6,0.4 6.0796,5.88 6.0796,6.24 v 5.8 H 127.64 V 87.8 z M 115.28,75.48 c 0.6,0.4 6.08,5.88 6.08,6.24 v 18.12 h -6.08 V 75.48 z M 90.76,69.52 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 99.84 H 90.76 V 69.52 z M 78.6,81.72 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 99.84 H 78.6 V 81.72 z m -6.28,6.04 0.04,12.08 H 66.4 V 94.2 c 0,-0.28 -0.04,-0.28 -0.12,-0.4 l 6.04,-6.04 z m 30.8,-24.48 6.2,6.12 c -0.1596,0.36 -0.12,-0.16 -0.12,0.4 v 30 h -6.08 V 63.28 z M 56.72,99.96 100.04,143.28 143.28,99.96 99.96,56.72 56.72,99.96 z m 41.2,25.28 c 0.24,1.0404 0.56,1.56 1.64,1.8 l -0.8,0.56 c -1.28,-0.6 -1.32,-0.12 -1.72,-1.92 l 0.88,-0.44 z m -2.4,-1.04 c 0,2.92 1.32,4.92 4.16,4.92 h 0.88 c 1.88,0 2.9596,-1 3.6,-2.32 0.92,-1.8404 0.5596,-3.08 -0.2404,-4.56 -0.7596,-1.3596 -1.64,-2.28 -2.24,-3.7596 -0.52,-1.2404 -0.84,-3.76 -1.68,-4.36 C 99.64,118.08 95.52,122.52 95.52,124.2 z m -12.64,-9.4 c 0.4,0.88 0.44,1.44 1.52,1.68 l -0.56,0.64 C 82.2,116.68 82.6,116.48 82,115.28 l 0.88,-0.48 z m 1.64,3.76 H 86 c 2.28,0 3.72,-2.24 3.72,-4.6 0,-1.24 -1.92,-3.8796 -2.56,-4.8796 -0.88,-1.4404 -1.16,-4.68 -2.16,-5.4 -0.24,3.04 -2.28,5.92 -3.6,8 -1.88,2.8796 -0.36,6.8796 3.12,6.8796 z m 28.36,-3.76 c 0.16,1.6 0.92,1.12 1.52,2 l -0.7596,0.28 c -1.0404,-0.2404 -1.68,-0.76 -1.76,-1.9204 L 112.88,114.8 z m 1.96,-11.12 c -0.28,3.6 -2.2404,5.5596 -3.6404,8.0796 -1.68,3.08 -0.32,6.8 3.2,6.8 h 1.32 c 2.16,0 3.7204,-1.72 3.7204,-3.8796 v -0.88 c 0,-1.4404 -1.88,-3.8 -2.56,-4.88 -0.88,-1.4 -0.72,-4.36 -2.04,-5.24 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 112.88,114.8 c 0.16,1.6 0.92,1.12 1.52,2 l -0.7596,0.28 c -1.0404,-0.2404 -1.68,-0.76 -1.76,-1.9204 L 112.88,114.8 z m -30,0 c 0.4,0.88 0.44,1.44 1.52,1.68 l -0.56,0.64 C 82.2,116.68 82.6,116.48 82,115.28 l 0.88,-0.48 z m 15.04,10.44 c 0.24,1.0404 0.56,1.56 1.64,1.8 l -0.8,0.56 c -1.28,-0.6 -1.32,-0.12 -1.72,-1.92 l 0.88,-0.44 z m 5.2,-61.96 6.2,6.12 c -0.1596,0.36 -0.12,-0.16 -0.12,0.4 v 30 h -6.08 V 63.28 z m -30.8,24.48 0.04,12.08 H 66.4 V 94.2 c 0,-0.28 -0.04,-0.28 -0.12,-0.4 l 6.04,-6.04 z m 6.28,-6.04 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 99.84 H 78.6 V 81.72 z m 12.16,-12.2 c 0,-0.36 5.48,-5.84 6.08,-6.24 V 99.84 H 90.76 V 69.52 z m 24.52,5.96 c 0.6,0.4 6.08,5.88 6.08,6.24 v 18.12 h -6.08 V 75.48 z m 12.36,12.32 c 0.6,0.4 6.0796,5.88 6.0796,6.24 v 5.8 H 127.64 V 87.8 z m 11.735,12.6375 -78.8125,0.0312 39.40625,39.375 L 139.375,100.4375 z M 85,103.6875 c 1,0.72 1.27625,3.96585 2.15625,5.40625 0.64,1 2.5625,3.635 2.5625,4.875 0,2.36 -1.43875,4.59375 -3.71875,4.59375 l -1.46875,0 c -3.48,0 -5.005,-3.9954 -3.125,-6.875 1.32,-2.08 3.35375,-4.96 3.59375,-8 z m 29.84375,0 c 1.32,0.88 1.15125,3.81875 2.03125,5.21875 0.68,1.08 2.5625,3.46585 2.5625,4.90625 l 0,0.875 c 0,2.1596 -1.55875,3.875 -3.71875,3.875 l -1.3125,0 c -3.52,0 -4.89875,-3.7325 -3.21875,-6.8125 1.4,-2.52 3.37625,-4.4625 3.65625,-8.0625 z M 100,114.125 c 0.84,0.6 1.1675,3.10335 1.6875,4.34375 0.6,1.4796 1.45915,2.42165 2.21875,3.78125 0.8,1.48 1.17,2.7221 0.25,4.5625 -0.6404,1.32 -1.71375,2.3125 -3.59375,2.3125 l -0.875,0 c -2.84,0 -4.15625,-2.0175 -4.15625,-4.9375 0,-1.68 4.10915,-6.1029 4.46875,-10.0625 z" />';
	icons['ACTIVITIES.ICON.EXPLOSIVE MATERIAL'] = '<path stroke="none" d="m 96.52575,104.56738 0,0.2 -0.2,0 0,4.025 0,0.2 0.2,0 3.2125,0 0.2,0 0,-0.2 0,-4.025 0,-0.2 -0.2,0 -3.2125,0 z m 2.3125,-20.025005 c -1.104456,2.4e-5 -2.183839,0.149481 -3.225,0.45 -1.030677,0.300637 -2.045202,0.753229 -3.05,1.3625 l -0.1,0.0625 0,0.1125 0,2.975 0,0.375 0.325,-0.2125 c 1.012909,-0.699621 1.978741,-1.225189 2.9,-1.5875 0.93079,-0.361956 1.796322,-0.537479 2.6,-0.5375 1.105104,2.1e-5 1.95614,0.267722 2.6,0.8125 0.65533,0.546134 0.97499,1.235785 0.975,2.125 -10e-6,0.481445 -0.12754,0.955076 -0.3875,1.425 -0.24872,0.4676 -0.65975,0.988678 -1.25,1.5375 l -0.0125,0 -1.4125,1.4125 c -0.959932,0.917274 -1.59907,1.722391 -1.9125,2.45 -0.31021,0.720124 -0.462506,1.616292 -0.4625,2.700005 l 0,2.4375 0,0.2 0.2,0 3.025,0 0,-0.2 0.2,0 0,-1.9375 c -8e-6,-0.544585 0.007,-0.982477 0.03748,-1.287505 0.03076,-0.307856 0.0787,-0.556732 0.1375,-0.7625 0.0765,-0.239052 0.20973,-0.489628 0.4,-0.75 0.19936,-0.26914 0.5453,-0.657795 1.0375,-1.15 l 1.3875,-1.35 c 0.95861,-0.916005 1.64186,-1.740202 2.0375,-2.4875 0.3936,-0.754416 0.58748,-1.554344 0.5875,-2.3875 -2e-5,-1.723893 -0.61539,-3.141528 -1.8375,-4.2 -1.21194,-1.059053 -2.82424,-1.587476 -4.8,-1.5875 z m 4.7505,-31.078 -1.5125,4.525 -4.275,12.9 -4.4875,-6.975 -1.575,-2.45 -0.2625,2.9 -1.325,14.3875 -9.4625,-10.7375 -2.8,-3.1875 1.0875,4.1125 3.4375,12.925 -13.125,-0.65 -0.65,-0.0375 -0.3,0.5875 -0.0875,0.2 -0.3875,0.75 0.6875,0.5 11.25,8.125 -20.1375,1.35 -5.625,0.375 5.4125,1.575 18.0125,5.25 -12.325,7.137505 -0.75,0.4375 0.325,0.8 0.0875,0.2375 0.2875,0.7125 0.7625,-0.0875 16.15,-1.975 -4.8,8.25 -1.4875,2.5625 2.7375,-1.125 8.85,-3.675 -3.3875,14.5125 -1.0625,4.525 2.825,-3.6875 8.8875,-11.575 5,19.2375 0.2,0.75 0.775,0 0.425,0 0.95,0 0.05,-0.95001 0.9375,-18.67499 9.2,11.15 2.625,3.1875 -0.875,-4.0375 -3.325,-15.2125 10.55,5.8875 4.6875,2.6125 -3.4375,-4.125 -5.525,-6.6375 15.575,4.4375 4.0375,1.1625 -3.0875,-2.8625 -10.7125,-9.8625 13.7375,-2.1375 4.6125,-0.7125 -4.5,-1.237505 -15.5,-4.2625 18.85,-9.575 4.65,-2.3625 -5.1875,0.475 -17.1,1.55 6.7125,-10.825 1.9875,-3.2 -3.3125,1.7875 -14.5875,7.9 5.1625,-16.4625 1.7125,-5.4625 -3.4625,4.55 -10.6375,14 -1.725,-18.8125 -0.4375,-4.75 z m -1.1125,9.6875 1.525,16.6125 0.2375,2.5625 1.55,-2.05 8.7375,-11.4875 -4.1875,13.3625 -0.75,2.35 2.175,-1.175 13.4375,-7.275 -5.7875,9.325 -1.0625,1.7125 2,-0.1875 13.925,-1.2625 -16.525,8.4 -2.3125,1.175 2.5,0.6875 13.5,3.7 -11.1875,1.737505 -2.05,0.3125 1.525,1.4125 9.1375,8.4125 -14.6125,-4.1625 -3.1125,-0.8875 2.0625,2.4875 4.15,4.9875 -7.7875,-4.3375 -1.9375,-1.075 0.475,2.1625 2.9125,13.3375 -8.225,-9.9625 -1.6375,-1.9875 -0.125,2.575 -0.8,16.12499 -4.2375,-16.28749 -0.525,-1.975 -1.2375,1.625 -7.3,9.5125 2.775,-11.8875 0.4375,-1.9 -1.8,0.7375 -7.9125,3.2875 4.3125,-7.425 1.0125,-1.7375 -1.9875,0.2375 -13.925,1.7 10.3125,-5.975 0.5,-0.3 0,-0.575005 0,-0.2875 0,-0.75 -0.7125,-0.2 -14.5,-4.225 17.2625,-1.1625 2.7625,-0.1875 -2.25,-1.625 -11.0375,-7.975 11.5125,0.5625 1.3625,0.075 -0.35,-1.325 -2.6875,-10.1375 8.175,9.275 1.525,1.75 0.2125,-2.3125 1.275,-13.825 4.05,6.3 1.125,1.7625 0.6625,-1.9875 3.4375,-10.35 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 102.46875 63.15625 L 99.03125 73.5 L 98.375 75.5 L 97.25 73.71875 L 93.1875 67.4375 L 91.9375 81.25 L 91.71875 83.5625 L 90.1875 81.8125 L 82 72.53125 L 84.6875 82.6875 L 85.0625 84 L 83.6875 83.9375 L 72.1875 83.375 L 83.21875 91.34375 L 85.46875 92.96875 L 82.6875 93.15625 L 65.4375 94.3125 L 79.9375 98.53125 L 80.65625 98.75 L 80.65625 99.5 L 80.65625 99.78125 L 80.65625 100.34375 L 80.15625 100.65625 L 69.84375 106.625 L 83.75 104.9375 L 85.75 104.6875 L 84.75 106.4375 L 80.4375 113.84375 L 88.34375 110.5625 L 90.125 109.8125 L 89.6875 111.71875 L 86.9375 123.625 L 94.21875 114.09375 L 95.46875 112.46875 L 96 114.4375 L 100.21875 130.75 L 101.03125 114.625 L 101.15625 112.03125 L 102.78125 114.03125 L 111 124 L 108.09375 110.65625 L 107.625 108.5 L 109.5625 109.5625 L 117.34375 113.90625 L 113.1875 108.90625 L 111.125 106.4375 L 114.25 107.3125 L 128.875 111.46875 L 119.71875 103.0625 L 118.1875 101.65625 L 120.25 101.34375 L 131.4375 99.59375 L 117.9375 95.90625 L 115.4375 95.21875 L 117.75 94.03125 L 134.28125 85.625 L 120.34375 86.90625 L 118.34375 87.09375 L 119.40625 85.375 L 125.1875 76.0625 L 111.75 83.3125 L 109.59375 84.5 L 110.34375 82.15625 L 114.53125 68.78125 L 105.78125 80.28125 L 104.25 82.3125 L 104 79.75 L 102.46875 63.15625 z M 98.84375 84.53125 C 100.81951 84.531274 102.41306 85.065947 103.625 86.125 C 104.84711 87.183472 105.46873 88.619857 105.46875 90.34375 C 105.46873 91.176906 105.2686 91.964334 104.875 92.71875 C 104.47936 93.466048 103.80236 94.302745 102.84375 95.21875 L 101.46875 96.5625 C 100.97655 97.054705 100.63686 97.44961 100.4375 97.71875 C 100.24723 97.979122 100.10775 98.229698 100.03125 98.46875 C 99.97245 98.674518 99.90576 98.910894 99.875 99.21875 C 99.84452 99.523778 99.843742 99.955415 99.84375 100.5 L 99.84375 102.4375 L 99.65625 102.4375 L 99.65625 102.65625 L 96.625 102.65625 L 96.4375 102.65625 L 96.4375 102.4375 L 96.4375 100 C 96.437494 98.916287 96.56479 98.032624 96.875 97.3125 C 97.18843 96.584891 97.852568 95.761024 98.8125 94.84375 L 100.21875 93.4375 C 100.809 92.888678 101.22003 92.37385 101.46875 91.90625 C 101.72871 91.436326 101.87499 90.950195 101.875 90.46875 C 101.87499 89.579535 101.53033 88.889884 100.875 88.34375 C 100.23114 87.798972 99.386354 87.531271 98.28125 87.53125 C 97.477572 87.531271 96.61829 87.731794 95.6875 88.09375 C 94.766241 88.456061 93.794159 88.956629 92.78125 89.65625 L 92.46875 89.875 L 92.46875 89.5 L 92.46875 86.53125 L 92.46875 86.40625 L 92.5625 86.34375 C 93.567298 85.734479 94.594323 85.300637 95.625 85 C 96.666161 84.699481 97.739294 84.531274 98.84375 84.53125 z M 96.53125 104.5625 L 99.75 104.5625 L 99.9375 104.5625 L 99.9375 104.78125 L 99.9375 108.78125 L 99.9375 109 L 99.75 109 L 96.53125 109 L 96.3125 109 L 96.3125 108.78125 L 96.3125 104.78125 L 96.53125 104.78125 L 96.53125 104.5625 z" />';
	icons['ACTIVITIES.ICON.FLAMMABLE GAS'] = '<path stroke="none" d="m 93.304681,82.478995 c 0,-4.272 13.775599,-4.32 13.775599,0 v 55.631995 c 0,1.2956 -4.368,1.2 -5.904,1.2 h -1.967999 c -1.536,0 -5.904,0.096 -5.904,-1.2 V 82.478995 l 4e-4,0 z m 5.328,-20.64 h -6.528 v 2.928 h 6.288 v 3.168 h -3.696 v 1.968 h 3.744 v 5.328 h -4.56 v 4.512 c -1.056,0.288 -1.968,1.584 -1.968,2.976 v 54.815995 c 0,3.312 3.744,3.168 7.056,3.168 h 2.351999 c 3.3596,0 7.056,0.192 7.056,-3.168 V 83.102995 c 0,-2.784 -1.7756,-2.784 -1.7756,-3.744 v -4.128 h -4.6564 v -10.416 h 6.2884 v -2.976 h -6.6724 v -2.544 h -2.927999 v 2.544 l 0,0 z m 21.791999,32.256 v 0.576 c 0,2.16 2.256,5.136 1.584,8.063995 -1.344,-0.288 -3.12,-1.968 -3.84,-3.023995 -0.336,-0.432 -0.912,-1.68 -1.152,-2.208 -0.384,-0.912 -0.432,-2.256 -0.7204,-2.832 -1.104,0.816 -1.584,3.504 -1.584,5.519995 v 0.192 c 0,3.216 2.4,7.536 3.792,9.6 1.968,2.976 6.288,3.264 8.4,5.136 1.584,-0.864 6.864,-3.7436 7.68,-4.896 0.8636,-1.2476 3.216,-7.44 3.024,-9.6476 l -0.672,-5.903995 h -0.384 c -0.048,3.216 -2.736,7.631995 -5.52,7.871995 v -1.968 c 0,-1.727995 1.3916,-4.032395 1.3916,-6.095995 v -0.192 c 0,-0.912 -2.448,-4.368 -3.168,-4.704 0,3.408 -0.288,5.472 -2.544,6.672 -0.816,-0.72 -1.7756,-1.584 -1.7756,-3.12 v -1.2 c 0,-2.064 1.968,-4.08 1.968,-6.096 0,-0.864 -0.096,-1.584 -0.576,-1.968 -0.8636,3.7916 -5.9036,8.9276 -5.9036,10.2236 z m -52.703999,0 v 0.384 c 0,1.152 1.776,4.32 1.776,6.095995 v 2.1596 c -2.352,-0.1916 -5.664,-4.991995 -5.664,-8.063995 -1.68,1.104 -1.488,4.32 -1.392,6.671995 0.096,2.4 1.344,4.656 2.16,6.336 1.296,2.5916 1.632,2.9276 3.984,4.464 0.624,0.432 5.28,2.784 5.856,2.784 1.152,0 6.816,-3.8884 7.536,-4.6564 0.864,-1.008 3.264,-7.2956 3.12,-9.12 l -0.624,-6.479995 h -0.432 c -0.528,2.256 -0.336,3.312 -1.632,5.04 -0.576,0.816395 -2.736,2.735995 -3.84,2.832395 0,-0.912 -0.192,-0.6724 -0.192,-1.392 0,-1.823995 1.44,-4.319995 1.68,-6.575995 0.096,-0.96 -2.592,-4.56 -3.264,-5.04 0.432,1.968 -0.816,6.48 -2.352,6.48 h -0.192 c -0.864,0 -1.776,-2.16 -1.776,-3.36 0,-3.936 2.592,-4.464 1.584,-8.832 -0.048,0.048 -2.16,4.512 -2.88,5.376 -0.576,0.6244 -3.456,4.3204 -3.456,4.8964 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 93.304681,82.478995 c 0,-4.272 13.775599,-4.32 13.775599,0 v 55.631995 c 0,1.2956 -4.368,1.2 -5.904,1.2 h -1.967999 c -1.536,0 -5.904,0.096 -5.904,-1.2 V 82.478995 l 4e-4,0 z" />';
	icons['ACTIVITIES.ICON.FLAMMABLE LIQUID'] = '<path stroke="none" d="m 100.07676,135.376 c -7.439998,0 -11.327998,-5.3756 -13.103998,-11.136 -2.064,-6.672 -2.352,-14.448 0.816,-20.1596 5.856,-10.56 10.656,-21.6 11.904,-36.672 3.983998,4.608 3.599998,17.424 6.287998,23.904 2.64,6.5276 8.928,13.4396 8.928,21.0236 v 1.68 c 0,9.984 -4.464,21.312 -14.16,21.312 h -0.672 v 0.048 z m -0.623998,1.68 h 1.919998 c 10.128,0 15.408,-11.664 15.408,-21.936 v -2.976 c 0,-9.456 -7.6796,-15.7916 -9.888,-24.096 -2.4,-8.928 -1.728,-21.168 -9.119998,-25.104 0,8.64 -1.344,15.984 -3.6,22.368 -1.152,3.264 -2.352,6.24 -3.648,9.456 -1.152,2.736 -3.12,5.808 -4.512,8.5916 -1.392,2.6884 -2.976,6.144 -2.64,10.464 0.384,4.416 0.576,7.632 1.776,11.328 1.968,5.9044 6.672,11.9044 14.304,11.9044 z M 122.01276,87.04 v 0.192 c 0,2.304 2.4,5.52 1.68,8.64 -1.344,-0.096 -3.504,-2.208 -4.128,-3.216 -0.5276,-0.864 -0.8636,-1.344 -1.2,-2.4 -0.288,-0.72 -0.5756,-2.64 -0.768,-3.024 -1.2,0.864 -1.68,3.984 -1.68,6.144 0,3.216 2.6404,8.4 3.9844,10.3676 0.9596,1.344 2.4956,2.3044 4.0796,3.0724 0.6244,0.288 4.848,2.4 4.992,2.4 0.864,0 7.632,-4.416 8.16,-5.136 0.8636,-1.0564 3.456,-8.0164 3.3116,-10.08 l -0.672,-6.768 h -0.432 c -0.096,3.504 -2.832,8.208 -5.904,8.448 0,0 0.288,-3.456 0.5276,-4.368 0.3364,-1.344 0.96,-2.88 0.96,-4.32 V 86.8 c 0,-0.96 -2.688,-4.608 -3.36,-5.088 0,3.696 -0.1916,5.952 -2.736,7.2 -0.672,-0.576 -1.92,-1.728 -1.92,-2.976 v -1.44 c 0,-2.304 2.112,-4.704 2.112,-6.528 l 0.048,-0.24 -0.2884,-1.872 c -1.008,0.24 -1.056,1.968 -1.536,2.88 -0.48,0.864 -1.2,1.872 -1.7756,2.64 -0.9112,1.152 -3.4552,4.08 -3.4552,5.664 z m -56.591998,0 c 0,1.296 1.92,4.656 1.92,6.96 v 1.92 c -2.592,-0.24 -6.144,-5.232 -6.144,-8.64 -3.408,2.448 -0.72,11.424 0.864,14.112 1.536,2.592 1.824,3.0244 4.368,4.7044 0.432,0.288 6.144,3.072 6.192,3.072 1.344,0 4.08,-2.544 5.28,-3.168 2.496,-1.248 2.928,-1.68 4.176,-4.272 0.432,-0.864 1.632,-5.4244 1.872,-6.576 0.384,-2.064 -0.48,-5.76 -0.528,-7.92 h -0.48 c -0.288,3.456 -2.88,8.4 -5.904,8.448 -0.048,-0.864 -0.192,-0.48 -0.192,-1.248 0,-2.016 1.488,-4.896 1.824,-7.056 0.192,-1.152 -2.688,-5.184 -3.504,-5.424 1.008,2.112 -1.056,6.096 -2.736,6.96 -0.864,-0.576 -1.92,-2.16 -1.92,-3.6 v -0.384 c 0,-3.696 2.736,-4.608 1.68,-9.072 -0.528,0.384 -0.768,2.016 -1.44,2.976 -0.672,1.008 -1.008,1.728 -1.776,2.688 -0.768,1.0076 -3.552,4.2236 -3.552,5.5196 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 100.07676,135.376 c -7.439998,0 -11.327998,-5.3756 -13.103998,-11.136 -2.064,-6.672 -2.352,-14.448 0.816,-20.1596 5.856,-10.56 10.656,-21.6 11.904,-36.672 3.983998,4.608 3.599998,17.424 6.287998,23.904 2.64,6.5276 8.928,13.4396 8.928,21.0236 v 1.68 c 0,9.984 -4.464,21.312 -14.16,21.312 h -0.672 v 0.048 z" />';
	icons['ACTIVITIES.ICON.FLAMMABLE SOLID'] = '<path stroke="none" d="m 68.552465,101.9798 c 0,-1.98 1.936,-4.2244 1.936,-6.292 v -1.496 c 0,-0.616 -0.088,-0.396 -0.44,-0.66 -0.836,3.652 -6.072,9.108 -6.072,10.4276 0,1.628 1.936,4.576 1.936,8.228 -2.552,-0.22 -5.852,-4.928 -5.852,-8.008 -0.836,0.924 -1.496,2.64 -1.496,4.3116 0,4.4 1.672,8.0524 3.476,10.648 0.792,1.1884 7.04,5.192 8.668,5.192 1.1,0 6.732,-3.7404 7.26,-4.444 0.88,-1.232 3.168,-6.82 3.168,-8.58 0,-1.6276 -0.044,-6.556 -0.88,-7.172 -1.1,4.752 -1.452,5.94 -5.412,8.052 0,-4.268 1.32,-5.72 1.32,-8.228 v -0.44 c 0,-0.132 -2.772,-4.4 -3.036,-4.576 0,2.42 -0.66,6.732 -2.596,6.732 -0.968,8e-4 -1.98,-2.4192 -1.98,-3.6952 z m 60.324005,-0.396 c 0,-1.716 2.1564,-4.488 2.1564,-6.292 0,-0.748 -0.2204,-1.628 -0.66,-1.936 -0.88,3.74 -5.852,8.888 -5.852,10.164 v 0.44 c 0,1.892 1.54,3.7404 1.54,6.0724 v 2.156 c -2.332,-0.616 -5.588,-4.884 -5.6756,-8.008 -1.012,0.704 -1.496,2.9916 -1.496,4.752 v 1.1 c 0,2.772 2.508,7.7436 3.784,9.4596 1.98,2.684 6.38,3.1244 8.36,4.8404 2.068,-1.1 3.124,-1.76 5.0596,-2.948 2.596,-1.584 2.2,-1.54 3.52,-4.268 0.66,-1.364 1.6724,-4.532 1.8044,-6.204 0.088,-1.5404 -0.132,-6.38 -0.88,-6.9524 -0.792,3.5204 -2.068,7.128 -5.368,8.0084 -0.044,-0.66 -0.2204,-0.748 -0.2204,-1.496 v -0.22 c 0,-1.76 1.6724,-4.928 1.4524,-6.424 -0.132,-0.8364 -2.5084,-4.752 -2.992,-5.104 0,2.816 -0.528,6.688 -3.036,6.732 -0.3528,-1.3204 -1.4968,-1.0124 -1.4968,-3.8724 z m -35.596005,1.892 v -19.976 l 19.976005,-0.396 v 19.404 l -19.976005,0.968 z m -13.904,-7.568 0.044,-16.808 10.824,4.004 v 19.756 c -1.232,-0.66 -10.868,-6.248 -10.868,-6.952 z m 1.54,-18.436 c 5.72,0 11.44,0 17.16,0 2.068005,0 12.100005,3.124 13.244005,3.872 l -3.7404,0.264 H 92.620465 c -0.924,0 -11.088,-3.696 -11.704,-4.136 z m -3.476,-1.452 0.044,14.696 -0.264,6.732 c 2.244,1.188 5.324,3.036 7.48,4.488 1.892,1.232 5.456,3.96 8.14,3.96 7.568005,0 15.312005,-1.1 23.056005,-1.1 l -0.0436,-23.628 c -1.012,-0.484 -14.784,-5.412 -15.18,-5.412 l -3.916005,-0.088 -19.3164,0.352 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 80.916465,77.4718 c 5.72,0 11.44,0 17.16,0 2.068005,0 12.100005,3.124 13.244005,3.872 l -3.7404,0.264 H 92.620465 c -0.924,0 -11.088,-3.696 -11.704,-4.136 z m -1.54,18.436 0.044,-16.808 10.824,4.004 v 19.756 c -1.232,-0.66 -10.868,-6.248 -10.868,-6.952 z m 13.904,7.568 v -19.976 l 19.976005,-0.396 v 19.404 l -19.976005,0.968 z" />';
	icons['ACTIVITIES.ICON.NON-FLAMMABLE GAS'] = '<path stroke="none" d="m 92.6738,81.298673 c 0,-4.576 14.696,-4.62 14.696,0 v 59.443997 c 0,1.364 -4.664,1.276 -6.292,1.276 h -2.112 c -1.628,0 -6.292,0.088 -6.292,-1.276 V 81.298673 z m 5.676,-22.044 h -6.952 v 3.168 h 6.732 v 3.344 h -4.004 v 2.112 h 4.004 v 5.676 h -4.84 v 4.84 c -1.1,0.264 -2.112,1.672 -2.112,3.124 v 58.607997 c 0,3.5204 4.004,3.344 7.568,3.344 h 2.5084 c 3.608,0 7.568,0.22 7.568,-3.344 V 81.914673 c 0,-2.992 -1.892,-2.992 -1.892,-4.004 v -4.4 h -5.016 v -11.132 h 6.732 v -3.124 h -7.172 v -2.728 h -3.124 v 2.728 l -4e-4,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 92.6738,81.298673 c 0,-4.576 14.696,-4.62 14.696,0 v 59.443997 c 0,1.364 -4.664,1.276 -6.292,1.276 h -2.112 c -1.628,0 -6.292,0.088 -6.292,-1.276 V 81.298673 z" />';
	icons['ACTIVITIES.ICON.ORGANIC PEROXIDE'] = '<path stroke="none" d="m 132.098,128.20028 v 6.204 l -36.608,2.156 v -6.732 l 0.616,0.0884 35.992,-1.7164 z m -63.8,-11.132 c 2.596,1.716 26.136,12.1 26.136,13.156 v 5.852 l -0.088,0.2204 -26.048,-14.6524 v -4.576 z m 61.072,10.032 c -4.664,0 -33,2.112 -34.584,1.54 -1.848,-0.6596 -23.76,-11.44 -24.376,-12.012 3.784,0 7.524,0 11.308,0 2.948,0 8.8,-0.7916 10.032,1.0564 l -9.02,0.572 2.068,0.748 v 0.352 h -1.232 l -1.848,0.22 c 2.024,1.276 18.348,5.192 22.352,5.192 h 1.8916 c 4.796,0 9.196,-1.276 12.98,-1.4084 0.6604,0 9.8564,3.344 10.4284,3.74 z m -25.432,-23.188 1.1,9.4156 5.412,-6.82 -2.464,8.228 7.7436,-4.268 -3.74,5.94 8.404,-0.7916 -9.152,4.664 8.14,2.5956 -14.4316,1.6724 c -3.3,0.1756 -19.0084,-3.696 -20.5484,-4.752 l 10.252,-0.5724 -6.16,-4.532 6.776,0.132 -1.672,-5.896 5.06,5.192 0.66,-7.48 2.552,3.916 2.0684,-6.6436 z m 0.704,-2.156 -0.132,-0.572 h -0.308 l -1.804,6.248 -0.352,-0.044 -2.376,-3.696 -0.044,2.112 -0.704,-1.056 -0.616,6.1596 -4.884,-5.368 0.572,2.552 -1.496,-1.232 1.76,6.248 -2.508,0.044 -4.048,-0.176 1.54,1.144 -2.376,-0.132 1.54,1.4084 h -21.34 c -0.132,0.484 -0.22,0.484 -0.22,1.056 v 5.016 c 0,1.584 4.84,3.696 6.204,4.444 2.332,1.32 4.576,2.42 6.864,3.8276 4.444,2.728 9.24,4.9724 13.728,7.612 1.76,1.056 6.82,0.528 9.592,0.1756 2.8164,-0.308 7.2164,-0.1756 9.944,-0.6596 2.816,-0.528 7.0404,-0.4404 9.944,-0.748 2.728,-0.352 7.436,-0.616 10.032,-0.66 v -7.92 c 0,-0.924 -5.28,-2.42 -6.4244,-2.816 -1.6276,-0.5276 -5.72,-1.8916 -6.7756,-2.64 l 2.948,-0.3084 -8.4044,-2.2 0.044,-0.352 9.152,-4.708 -1.452,0.1756 1.672,-1.1 -9.988,0.968 3.872,-6.6 -8.0956,4.7092 2.948,-10.032 -6.38,8.36 -1.0564,-11.132398 -0.5716,1.892398 z m 1.1,-6.247998 c -5.588,0 -9.636,-3.432 -9.636,-8.976 v -1.056 c 0,-4.796 8.9756,-12.54 8.9756,-21.12 2.7724,3.212 2.244,7.612 4.312,10.956 1.188,1.892 5.3244,7.788 5.3244,9.944 v 1.056 c 0,5.28 -3.696,9.196 -8.976,9.196 z m -10.868,-10.032 v 1.056 c 0,13.683998 21.12,13.156 21.12,0.836 v -2.112 c 0,-3.52 -4.532,-8.316 -5.94,-11.66 -2.2,-5.104 -1.0564,-8.844 -6.204,-11.572 0,11.176 -8.976,17.6 -8.976,23.452 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 105.742,95.508282 c -5.588,0 -9.636,-3.432 -9.636,-8.976 v -1.056 c 0,-4.796 8.9756,-12.54 8.9756,-21.12 2.7724,3.212 2.244,7.612 4.312,10.956 1.188,1.892 5.3244,7.788 5.3244,9.944 v 1.056 c 0,5.28 -3.696,9.196 -8.976,9.196 z m -1.804,8.403998 1.1,9.4156 5.412,-6.82 -2.464,8.228 7.7436,-4.268 -3.74,5.94 8.404,-0.7916 -9.152,4.664 8.14,2.5956 -14.4316,1.6724 c -3.3,0.1756 -19.0084,-3.696 -20.5484,-4.752 l 10.252,-0.5724 -6.16,-4.532 6.776,0.132 -1.672,-5.896 5.06,5.192 0.66,-7.48 2.552,3.916 2.0684,-6.6436 z m -35.64,13.156 c 2.596,1.716 26.136,12.1 26.136,13.156 v 5.852 l -0.088,0.2204 -26.048,-14.6524 v -4.576 z m 63.8,11.132 v 6.204 l -36.608,2.156 v -6.732 l 0.616,0.0884 35.992,-1.7164 z m -2.728,-1.1 c -4.664,0 -33,2.112 -34.584,1.54 -1.848,-0.6596 -23.76,-11.44 -24.376,-12.012 3.784,0 7.524,0 11.308,0 2.948,0 8.8,-0.7916 10.032,1.0564 l -9.02,0.572 2.068,0.748 v 0.352 h -1.232 l -1.848,0.22 c 2.024,1.276 18.348,5.192 22.352,5.192 h 1.8916 c 4.796,0 9.196,-1.276 12.98,-1.4084 0.6604,0 9.8564,3.344 10.4284,3.74 z" />';
	icons['ACTIVITIES.ICON.OXIDIZER'] = '<path stroke="none" d="m 80.861769,135.2695 0,0.2 0,4.225 0,0.2 0.2,0 40.650001,0 0.2,0 0,-0.2 0,-4.225 0,-0.2 -0.2,0 -40.650001,0 -0.2,0 z m 6.4895,-20.749 c 0,-7.392 6.116,-14.0364 13.420001,-14.0364 h 1.0564 c 7.48,0 13.64,6.5564 13.64,14.0364 0,7.1276 -6.204,13.8596 -13.2,13.8596 h -1.936 c -6.820401,-0.0436 -12.980401,-6.7756 -12.980401,-13.8596 z m 12.760001,-35.86 c -0.704001,0 -2.068001,-2.068 -2.332001,-2.948 -0.308,-1.232 -0.352,-2.992 0,-4.444 0.528,-2.112 2.772001,-5.852 2.772001,-7.524 0,-1.1 -0.132,-3.036 -1.276001,-3.124 -1.012,4.444 -2.068,4.928 -4.136,8.008 -0.968,1.452 -4.664,5.764 -4.664,7.304 v 0.44 c 0,2.376 3.124,8.14 2.728,10.472 l -0.22,1.672 c -3.52,-0.836 -8.14,-7.348 -8.14,-11.968 -1.364,0.132 -2.508,4.4 -2.508,6.072 v 2.948 c 0,5.72 3.344,8.316 4.18,11.968 -2.684,-1.408 -3.96,-2.156 -5.94,-4.356 -1.056,-1.188 -3.652,-5.588 -4.136,-5.94 -1.144,2.376 1.716,10.252 2.42,12.056 0.704,1.716 1.408,3.52 2.288,5.016 1.056,1.76 2.244,2.64 3.212,4.092 0,1.672 -0.528,2.42 -0.572,4.6636 -0.044,1.848 -0.044,2.596 0.22,4.576 0.22,2.068 2.068,6.116 3.212,7.304 2.42,2.596 2.376,2.816 5.632,4.8404 1.98,1.2756 4.928,2.156 8.140401,2.156 h 0.6156 c 6.4244,0 11.396,-3.476 14.1684,-7.216 3.8276,-5.1916 3.784,-9.944 2.2,-16.72 3.4756,-6.6 5.852,-9.328 5.852,-19.712 v -0.44 l -0.352,-3.96 c -0.0884,0 -3.2564,6.16 -3.784,6.952 -1.012,1.54 -3.6524,4.84 -5.7204,5.016 0.0884,-3.212 2.112,-6.16 2.112,-9.416 v -2.156 l -1.056,-7.964 c -0.968,0.704 -1.452,5.852 -2.992,7.744 -0.44,0.528 -5.632,5.544 -5.632,3.608 v -1.672 c 0,-3.08 2.112,-6.336 2.112,-9.02 v -1.276 c 0,-0.836 -3.916,-6.468 -4.62,-6.908 0,2.288 -0.22,4.356 -0.748,6.16 -0.308,1.056 -1.98,3.696 -3.036,3.696 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 87.351269,114.5205 c 0,-7.392 6.116,-14.0364 13.420001,-14.0364 h 1.0564 c 7.48,0 13.64,6.5564 13.64,14.0364 0,7.1276 -6.204,13.8596 -13.2,13.8596 h -1.936 c -6.820401,-0.0436 -12.980401,-6.7756 -12.980401,-13.8596 z" />';
	icons['ACTIVITIES.ICON.RADIOACTIVE MATERIAL'] = '<path stroke="none" d="m 83.663966,130.3779 c -10.0584,-5.61 -16.6196,-17.0276 -16.4024,-28.5428 l 17.844,-0.003 c -0.1512,5.0232 3.1292,10.7316 7.5452,13.1304 l -8.9868,15.4152 z m 49.075204,-28.2096 c 0.2016,11.516 -6.3748,22.9248 -16.4404,28.522 l -8.966,-15.4272 c 4.4188,-2.3924 7.7076,-8.0968 7.5616,-13.12 l 17.8448,0.0252 z M 83.536366,73.7539 c 9.876,-5.9256 23.044004,-5.9256 32.920804,0 l -8.8896,15.4724 c -4.2792,-2.6336 -10.863604,-2.6336 -15.142804,0 l -8.8884,-15.4724 z m 26.490794,28.5412 c 0,5.45436 -4.42163,9.876 -9.876,9.876 -5.454362,0 -9.875998,-4.42164 -9.875998,-9.876 0,-5.454364 4.421636,-9.876 9.875998,-9.876 5.45437,0 9.876,4.421636 9.876,9.876 z" />';
	icons['ACTIVITIES.ICON.SPONTANEOUSLY COMBUSTIBLE MATERIAL'] = '<path stroke="none" d="m 101.1764,128.392 -2.1124,0 0,12.624 2.1124,0 z m 26.5436,0.576 -8.736,-8.592 -1.248,1.248 8.736,8.736 z m -45.024,-7.536 -1.344,-1.296 -8.832,8.832 1.344,1.392 z m 55.488,-19.728 -12.192,0 0,1.872 12.192,0 z m -63.312,0 -13.056,0 0,1.872 12.816,0 z m 52.848,-25.296 -1.344,-1.248 -8.976,8.688 1.488,1.488 z m -46.08,9.12 1.392,-1.488 -9.264,-9.216 -0.048,0.24 -1.2,1.344 z m 19.5364,-26.544 -2.1124,0 0,9.696 2.1124,0 z M 91.72,88.024 v 0.624 c 0,0.48 1.44,4.32 1.68,5.088 0.72,2.208 0.72,3.36 0.672,5.664 -1.248,-0.144 -4.416,-2.976 -5.088,-4.032 -1.68,-2.496 -1.728,-3.408 -2.544,-6.72 -0.912,0.672 -1.872,3.792 -1.872,5.472 v 2.304 c 0,5.568 3.552,8.448 3.792,11.136 -0.912,-0.192 -4.848,-3.168 -5.424,-3.8404 -0.72,-0.816 -3.264,-5.28 -3.84,-5.424 0,3.936 1.056,6.912 2.064,9.696 0.576,1.536 1.152,2.8796 1.68,4.224 0.816,2.16 1.44,2.016 2.592,3.504 2.88,3.648 9.36,8.2564 15.744,8.2564 h 0.8156 c 2.16,0 6.432,-1.728 7.9204,-2.592 2.352,-1.344 4.4636,-2.688 6,-4.752 2.832,-3.84 5.2796,-9.312 5.2796,-15.984 v -2.736 l -0.24,-2.304 h -0.432 c -1.104,4.656 -4.1756,8.448 -8.016,10.512 0,-3.648 1.344,-5.2796 1.872,-8.448 0.384,-2.4 -0.9596,-6.912 -1.008,-9.216 -0.432,0.288 -1.2,5.376 -2.496,6.96 -0.336,0.432 -5.088,5.232 -5.088,3.12 v -2.112 c 0,-2.976 1.872,-4.8 1.872,-8.208 0,-0.816 -3.456,-5.952 -4.0796,-6.288 l 0.0956,0.864 c 0,1.152 -0.384,4.08 -0.72,4.992 -0.1916,0.48 -2.256,2.976 -2.64,2.976 -1.2,0 -2.544,-2.928 -2.544,-4.416 v -1.056 c 0,-2.88 2.784,-6.096 2.5916,-8.016 l -0.4796,-2.928 c -0.528,0.384 -1.2,3.024 -1.584,3.888 -0.576,1.344 -1.392,2.16 -2.208,3.216 C 95.368,82.36 91.72,87.112 91.72,88.024 z" />';
	icons['ACTIVITIES.ICON.UNEXPLODED ORDNANCE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >UXO</text>';
	icons['ACTIVITIES.ICON.TOXIC INFECTIOUS MATERIAL'] = '<path stroke="none" d="m 104.5996,116.1804 c 0,-3.64 0.88,-4.6 1.5204,-7.28 l -2.5204,-1.24 c -2.44,2.12 -4.4,1.6 -6.7596,0 l -2.48,1.36 c 0.2,2.64 2.04,3.8796 1.48,8.72 -0.36,3.08 -1.12,5.7596 -2.64,7.84 -2.92,3.92 -7,7.4404 -13.68,7.4404 h -1 c -4.68,0 -10.2,-3.2404 -12.04,-6.0404 l -1.2,0.56 c 3.28,4.88 11.44,9.9596 19.8,9.9596 h 0.24 c 6.44,0 10.92,-2.6796 14.8,-5.2796 3.72,2.4796 7.64,5 13.8,5 h 3 c 3.84,0 8.24,-1.6404 10.6,-3.2 1.8396,-1.24 6.6796,-4.52 7.2396,-6.56 -1.12,-0.28 -0.48,-0.48 -1.28,-0.48 -0.52,0 -1.68,1.92 -2.2,2.32 -0.7596,0.56 -1.8,1.08 -2.64,1.6404 -1.36,0.92 -4.68,1.8 -6.96,1.8 h -1.76 c -7.88,0 -15.3204,-7.72 -15.3204,-15.8 v -0.7604 z m 2.28,3.52 2.52,4.28 c 3.2404,-0.7596 7.7204,-5.2 9.28,-7.7596 2.2404,-3.7204 3.52,-7.8404 3.52,-13.8 h -5.52 c 0.12,5.24 -0.08,7.1596 -2.52,10.8 -1.24,1.84 -1.72,2.0796 -3.2,3.5596 -1.04,1.04 -3.56,2.24 -4.08,2.92 z m -28.6,-13.8 c 0,7.4 6.84,16.7204 12.52,18.0404 l 2.28,-4.48 c -6.52,-3.44 -9.52,-7.96 -9.52,-17.08 h -5.28 v 3.5196 z m -2.52,-17.04 v 1 c 0,0.48 -4.96,3.2 -5.76,3.76 -1.6,1.12 -3.48,3.24 -4.68,4.84 -2.76,3.56 -4.84,8.08 -4.84,14.24 0,4.36 1,6.0404 1.8,9.36 l 1.2,-0.6 c -0.12,-1.48 -0.76,-2.32 -0.76,-4 v -2 c 0,-7.8 7.88,-15.56 16.04,-15.56 h 1.76 c 2.56,0 5.92,1.28 7.52,2.24 2.16,1.32 3.56,3.64 5.28,4.7596 l 2.28,-1 v -1.7596 c 0,-2.0404 1.64,-3.88 3.28,-4.28 v -3 c -7.56,-0.16 -15.32,-7.8 -15.32,-15.52 v -1.52 c 0,-4.12 2.12,-8.56 4.2,-10.6 1.28,-1.24 2.48,-2.28 4,-3.24 0.84,-0.52 5.08,-1.48 5.08,-2.48 v -1 c -6.64,1.56 -11.72,3.84 -15.36,8.48 -4.28,5.52 -5.72,9.04 -5.72,17.88 l 0,0 z m 27.6,-25.36 c 0,0.64 4.16,2.08 5.04,2.52 1.2404,0.64 3.48,2.44 4.2404,3.52 2.12,2.88 4.28,6.04 4.28,11.04 0,8.16 -7.4404,16.32 -15.56,16.32 v 3 c 2.32,0.2 4.44,3.36 3.28,5.76 0.64,0.16 2.48,1.24 2.52,1.24 0.72,0 4.96,-7.04 14.28,-7.04 h 0.24 c 4.48,0 9,2.56 11.12,4.96 1.68,1.8796 5.28,7.64 4.8,11.3596 l -0.84,5.48 1.24,0.56 c 0.08,-0.88 0.8,-2.3204 1.1204,-3.6404 0.2796,-1.24 0.4,-3 0.4,-4.3596 v -3.28 c 0,-8.4404 -8.3204,-18.76 -15.0404,-20.32 0,-5.04 0.4404,-6.36 -0.92,-10.88 -0.88,-2.84 -2.6,-6.44 -4.32,-8.28 -5.08,-5.32 -7.52,-7 -15.88,-8.96 v 1.0004 l -4e-4,0 z m -15.8,22.6 2.76,4.76 c 2.96,-1.56 4.84,-3.28 9.52,-3.28 h 0.52 c 5.8,0 6.92,2.6 9.68,3.2 l 2.64,-4.68 c -9.48,-5 -15.68,-5 -25.12,0 z" />';
	icons['ACTIVITIES.ICON.TOXIC GAS'] = '<path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 90.164253,102.29768 c 0.631531,-1.88544 5.686401,-1.89224 11.290367,-0.0152 5.60397,1.87705 9.63492,4.92715 9.00339,6.8126 -0.63153,1.88544 -5.6864,1.89225 -11.290366,0.0152 -5.603964,-1.87705 -9.63492,-4.92715 -9.003391,-6.8126 z m 7.712478,-22.232524 c 10e-7,3.680427 -1.692363,6.663998 -3.779997,6.663999 -2.087638,-2e-6 -3.78,-2.983573 -3.780002,-6.664 2e-6,-3.680425 1.692367,-6.664001 3.780002,-6.664001 2.087634,0 3.779999,2.983577 3.779997,6.664002 z m 17.024409,2.240002 c 0,4.051562 -2.82061,7.336 -6.3,7.335999 -3.47939,2e-6 -6.3,-3.284438 -6.3,-7.336 0,-4.051558 2.8206,-7.335998 6.3,-7.335999 3.47939,0 6.3,3.284442 6.3,7.336 z m -7.85013,49.562192 c -1.03887,2.91311 -8.493171,2.91663 -16.649654,0.008 -8.156481,-2.90876 -13.926443,-7.62831 -12.887575,-10.54141 1.038873,-2.91311 8.493174,-2.91662 16.649655,-0.008 8.156484,2.90876 13.926444,7.62831 12.887574,10.54141 z" /><path stroke="none" d="M 107.5 64.25 C 102.24595 64.220924 96.88149 67.125801 92.8125 71.59375 C 90.604697 73.644857 89.1875 76.839713 89.1875 80.40625 C 89.1875 82.99321 89.961078 85.360987 91.21875 87.25 C 92.09475 89.8772 92.65625 91.77845 92.65625 94.53125 L 92.40625 96.6875 L 90.71875 101.625 C 92.282154 100.47534 96.673048 100.67493 101.46875 102.28125 C 106.60414 104.00135 110.38401 106.70245 110.5 108.59375 L 112.03125 104.15625 C 115.94466 103.99471 120.53779 96.947006 122.65625 87.59375 C 124.85965 77.865478 123.54661 69.25851 119.75 67.90625 C 118.39379 66.58964 116.10263 65.499865 112.78125 65.34375 C 111.07255 64.603306 109.28617 64.259885 107.5 64.25 z M 94.09375 73.40625 C 94.354704 73.40625 94.597681 73.44248 94.84375 73.53125 C 95.089819 73.62002 95.336384 73.768892 95.5625 73.9375 C 96.241025 74.442235 96.810954 75.281531 97.21875 76.34375 C 97.490467 77.052804 97.711794 77.85113 97.8125 78.71875 C 97.862887 79.152348 97.875 79.602447 97.875 80.0625 C 97.875 80.522554 97.862887 80.972651 97.8125 81.40625 C 97.711794 82.273871 97.490467 83.072196 97.21875 83.78125 C 96.87892 84.666432 96.442018 85.394347 95.90625 85.90625 C 95.58051 86.221809 95.218977 86.458385 94.84375 86.59375 C 94.720698 86.638029 94.595832 86.664806 94.46875 86.6875 C 94.341677 86.710251 94.224227 86.71875 94.09375 86.71875 C 93.832796 86.71875 93.589819 86.68252 93.34375 86.59375 C 92.968523 86.458385 92.60699 86.221809 92.28125 85.90625 C 92.174096 85.803869 92.069335 85.71328 91.96875 85.59375 C 91.566409 85.115631 91.240614 84.489396 90.96875 83.78125 C 90.832891 83.426723 90.720639 83.054885 90.625 82.65625 C 90.433604 81.859707 90.3125 80.982607 90.3125 80.0625 C 90.3125 79.142394 90.433604 78.265293 90.625 77.46875 C 90.720639 77.070115 90.832891 76.698277 90.96875 76.34375 C 91.240614 75.635604 91.566409 75.00937 91.96875 74.53125 C 92.169847 74.291736 92.398884 74.106108 92.625 73.9375 C 92.851116 73.768892 93.097681 73.62002 93.34375 73.53125 C 93.589819 73.44248 93.832796 73.40625 94.09375 73.40625 z M 108.59375 74.96875 C 110.43067 74.96875 112.09843 75.88328 113.25 77.34375 C 113.32538 77.439352 113.39776 77.524831 113.46875 77.625 C 113.47722 77.636986 113.49159 77.6442 113.5 77.65625 C 113.6214 77.830283 113.70478 78.031818 113.8125 78.21875 C 113.84969 78.283293 113.90201 78.340263 113.9375 78.40625 C 113.96372 78.454665 113.97473 78.513329 114 78.5625 C 114.07521 78.708867 114.15225 78.847252 114.21875 79 C 114.2838 79.149436 114.34991 79.282395 114.40625 79.4375 C 114.426 79.491715 114.45008 79.538886 114.46875 79.59375 C 114.51324 79.724488 114.55563 79.865701 114.59375 80 C 114.61689 80.081389 114.6355 80.167408 114.65625 80.25 C 114.70356 80.43917 114.74696 80.617349 114.78125 80.8125 C 114.86685 81.294687 114.90625 81.802719 114.90625 82.3125 C 114.90625 84.591502 113.99737 86.621074 112.59375 87.96875 C 111.96992 88.567717 111.25879 89.026118 110.46875 89.3125 C 110.27148 89.383948 110.08006 89.451139 109.875 89.5 C 109.46454 89.597934 109.02867 89.65625 108.59375 89.65625 C 108.16928 89.65625 107.74419 89.593396 107.34375 89.5 C 107.33434 89.497759 107.32189 89.50229 107.3125 89.5 C 107.1077 89.451033 106.91566 89.384095 106.71875 89.3125 C 105.93109 89.026118 105.21374 88.567717 104.59375 87.96875 C 103.97146 87.370736 103.45044 86.644069 103.0625 85.8125 C 102.86853 85.396715 102.71647 84.959424 102.59375 84.5 C 102.53239 84.270288 102.47946 84.020028 102.4375 83.78125 C 102.3958 83.542366 102.36512 83.309172 102.34375 83.0625 C 102.32224 82.815885 102.3125 82.565722 102.3125 82.3125 C 102.3125 82.048889 102.32046 81.787673 102.34375 81.53125 C 102.34684 81.498197 102.37153 81.470407 102.375 81.4375 C 102.42085 80.988275 102.48142 80.545549 102.59375 80.125 C 102.60225 80.093194 102.61614 80.062869 102.625 80.03125 C 103.44763 77.094193 105.79685 74.96875 108.59375 74.96875 z M 88.78125 104.03125 C 86.584225 104.03225 84.849042 104.41275 83.875 105.1875 L 83.78125 105.15625 L 83.71875 105.3125 C 83.435435 105.57173 83.245253 105.88155 83.125 106.21875 C 83.015589 106.52555 82.994779 106.84485 83.03125 107.1875 L 78.09375 120.46875 C 80.221889 118.45423 86.9062 118.72699 94.15625 121.3125 C 101.19262 123.82181 106.44863 127.68028 107.09375 130.5625 L 111.8125 117.8125 C 112.20441 117.5156 112.50825 117.16502 112.65625 116.75 C 113.69512 113.8369 107.90669 109.12759 99.75 106.21875 C 95.671655 104.76433 91.794313 104.02985 88.78125 104.03125 z M 82.03125 120.8125 C 79.018231 120.8135 76.925722 121.54334 76.40625 123 C 75.367306 125.91331 81.124769 130.65374 89.28125 133.5625 C 97.437731 136.47126 104.89856 136.47581 105.9375 133.5625 C 106.97644 130.64919 101.18773 125.90876 93.03125 123 C 88.953009 121.54562 85.044269 120.81101 82.03125 120.8125 z M 86.125 125.625 C 87.390253 125.52279 89.374957 125.87809 91.46875 126.625 C 94.818819 127.82006 97.238713 129.60541 96.875 130.625 C 96.511287 131.64459 93.475069 131.50756 90.125 130.3125 C 86.774931 129.11744 84.355037 127.30084 84.71875 126.28125 C 84.855142 125.89891 85.365848 125.68633 86.125 125.625 z " />';

	icons['ACTIVITIES.ICON.AFTERSHOCK'] = '<path stroke="none" d="m 99.02491,62.474955 -0.0125,0 -0.0125,0 -0.95,0.0375 -0.025,0 -0.0125,0 -0.9375,0.0625 -0.025,0 -0.0125,0 -0.9375,0.075 -0.0125,0.0125 -0.025,0 -0.925,0.1 -0.0125,0 -0.0125,0 -0.925,0.125 -0.0125,0.0125 -0.025,0 -0.9125,0.15 -0.0125,0 -0.025,0 -0.9,0.175 -0.0125,0 -0.025,0 -0.7,0.15 0.5875,2.7375 0.6625,-0.1375 0.0375,-0.0125 0.8375,-0.15 0.0375,-0.0125 0.8375,-0.1375 0.0375,0 0.85,-0.125 0,0.0125 0.9,-0.1125 0,0.0125 0.9,-0.0875 0.025,0 0.875,-0.05 0.0375,0 0.875,-0.0375 0.0375,0 0.8875,-0.0125 0.0125,0 0.01248,0 0.8875,0.0125 0.0375,0 0.875,0.0375 0.0375,0 0.1,0 0.175,-2.7875 -0.1375,-0.0125 -0.0125,0 -0.025,0 -0.95,-0.0375 -0.0125,0 -0.0125,0 -0.9625,-0.0125 -0.01248,0 -0.0125,0 z m 8.8,3.6375 0.1875,0.0375 0.0375,0.0125 0.825,0.1875 0.025,0.0125 0.8125,0.2125 0.0375,0.0125 0.8125,0.2375 0.025,0.0125 0.8,0.25 0.025,0.0125 0.0125,0 0.7875,0.2625 0,0.0125 0.8125,0.3 0.025,0.0125 0.775,0.3 0.025,0.0125 0.7625,0.325 0.0375,0.0125 0.75,0.35 0.025,0.0125 0.75,0.3625 0.0125,0 0.0125,0.0125 0.725,0.375 0.0375,0.025 0.075,0.0375 1.3375,-2.4625 -0.1,-0.05 -0.0125,-0.0125 -0.0125,0 -0.8,-0.4125 -0.0125,-0.0125 -0.0125,0 -0.8,-0.4 -0.0125,0 -0.025,-0.0125 -0.8125,-0.3625 -0.0125,-0.0125 -0.0125,0 -0.825,-0.3625 -0.0125,0 -0.0125,-0.0125 -0.8375,-0.325 -0.0125,-0.0125 -0.025,0 -0.8375,-0.3125 -0.0125,-0.0125 -0.025,0 -0.85,-0.3 -0.0125,0 -0.025,-0.0125 -0.8625,-0.275 -0.0125,0 -0.0125,0 -0.875,-0.2625 -0.0125,0 -0.025,0 -0.875,-0.2375 -0.0125,0 -0.025,-0.0125 -0.8875,-0.2125 -0.0125,0 -0.0125,0 -0.225,-0.05 z m -22.725,-0.7125 -0.0125,0.0125 -0.0125,0 -0.825,0.3625 -0.0125,0 -0.0125,0.0125 -0.8125,0.3625 -0.025,0.0125 -0.0125,0 -0.8,0.4 -0.0125,0 -0.0125,0.0125 -0.8,0.4125 -0.0125,0 -0.0125,0.0125 -0.775,0.425 -0.0125,0.0125 -0.025,0 -0.7625,0.45 -0.0125,0 -0.0125,0.0125 -0.7625,0.4625 -0.0125,0.0125 -0.0125,0 -0.7375,0.4875 -0.025,0 -0.0125,0.0125 -0.725,0.5 -0.0125,0.0125 -0.0125,0 -0.725,0.5125 -0.0125,0.0125 -0.0125,0.0125 -0.7,0.525 -0.0125,0.0125 -0.0125,0.0125 -0.0875,0.0625 1.7375,2.2 0.05,-0.05 0.025,-0.0125 0.65,-0.4875 0.0375,-0.025 0.6625,-0.475 0.025,-0.0125 0.675,-0.4625 0.025,-0.0125 0.6875,-0.45 0.025,-0.0125 0.7,-0.425 0.0375,-0.025 0.7,-0.4125 0.0375,-0.0125 0.7125,-0.3875 0.0375,-0.025 0.725,-0.375 0.0125,-0.0125 0.0125,0 0.75,-0.3625 0.025,-0.0125 0.75,-0.35 0.0375,-0.0125 0.7625,-0.325 0.025,-0.0125 0.325,-0.125 -1.0375,-2.6 z m 36.8875,7.3125 0.6125,0.4875 0.025,0.0125 0.625,0.525 0.025,0.0125 0.6125,0.5375 0.025,0.025 0.6,0.5375 0.025,0.025 0.5875,0.5625 0.0125,0.0125 0.0125,0.0125 0.5625,0.575 0.025,0.025 0.5625,0.575 0.025,0.025 0.5375,0.6 0.025,0.025 0.525,0.6125 0.025,0.025 0.5125,0.625 0.025,0.025 0.5,0.6375 0.0125,0.025 0.3875,0.525 2.25,-1.675 -0.4125,-0.55 -0.0125,-0.0125 0,-0.0125 -0.55,-0.6875 -0.0125,-0.0125 0,-0.0125 -0.5625,-0.675 -0.0125,-0.0125 -0.0125,-0.0125 -0.5625,-0.6625 -0.0125,-0.0125 -0.0125,-0.0125 -0.5875,-0.65 -0.0125,-0.0125 -0.0125,-0.0125 -0.6,-0.6375 -0.0125,-0.0125 -0.0125,-0.0125 -0.625,-0.6125 -0.0125,-0.0125 -0.0125,-0.0125 -0.625,-0.6125 -0.0125,-0.0125 -0.0125,0 -0.65,-0.6 -0.0125,-0.0125 -0.0125,0 -0.6625,-0.575 -0.0125,-0.0125 -0.0125,-0.0125 -0.675,-0.5625 -0.0125,-0.0125 -0.025,-0.0125 -0.625,-0.4875 z m -50.95,2.7 -0.0125,0.0125 -0.0125,0.0125 -0.5625,0.6625 -0.0125,0.0125 -0.0125,0.0125 -0.5625,0.675 0,0.0125 -0.0125,0.0125 -0.55,0.6875 0,0.0125 -0.0125,0.0125 -0.525,0.7125 -0.0125,0.0125 -0.0125,0.0125 -0.5,0.7125 -0.0125,0.0125 -0.0125,0.0125 -0.4875,0.725 -0.0125,0.0125 0,0.025 -0.475,0.7375 -0.0125,0.0125 0,0.0125 -0.4625,0.75 0,0.0125 -0.0125,0.0125 -0.4375,0.7625 -0.0125,0.025 0,0.0125 -0.425,0.775 0,0.0125 -0.0125,0.0125 -0.325,0.6375 2.5,1.275 0.3125,-0.6125 0.0125,-0.025 0.3875,-0.7125 0.0125,-0.0375 0.4,-0.7 0.0125,-0.025 0.425,-0.7 0.0125,-0.025 0.4375,-0.6875 0.025,-0.025 0.45,-0.675 0.0125,-0.025 0.475,-0.6625 0.0125,-0.025 0.4875,-0.65 0.0125,-0.025 0.5,-0.6375 0.025,-0.025 0.5125,-0.625 0.025,-0.025 0.525,-0.6125 0.025,-0.025 0.4875,-0.5375 -2.075,-1.875 z m 60.9125,9.3875 0.075,0.1375 0.0125,0.0125 0,0.0125 0.35,0.7375 0.0125,0.0375 0.3375,0.7375 0.0125,0.025 0.3125,0.7625 0.0125,0.025 0.3,0.7625 0.0125,0.0375 0.275,0.7625 0.0125,0.025 0,0.0125 0.25,0.775 0.0125,0.0375 0.2375,0.775 0.0125,0.0375 0.225,0.8 0,0.025 0.2,0.8 0.0125,0.0375 0.175,0.8125 0.0125,0.0375 0.1625,0.8125 0,0.0375 0.0375,0.225 2.7625,-0.475 -0.0375,-0.25 -0.0125,-0.025 0,-0.0125 -0.175,-0.8875 0,-0.025 0,-0.0125 -0.2,-0.875 0,-0.025 -0.0125,-0.0125 -0.2125,-0.875 0,-0.0125 -0.0125,-0.0125 -0.2375,-0.8625 0,-0.025 -0.0125,-0.0125 -0.25,-0.85 -0.0125,-0.025 0,-0.0125 -0.2875,-0.8375 0,-0.025 -0.0124,-0.0125 -0.3,-0.8375 0,-0.0125 -0.0125,-0.025 -0.3125,-0.825 -0.0125,-0.0125 0,-0.0125 -0.35,-0.8125 0,-0.025 -0.0125,-0.0125 -0.35,-0.8 -0.0125,-0.025 -0.0125,-0.0125 -0.375,-0.8 -0.0125,-0.0125 0,-0.0125 -0.0875,-0.175 z m -68.8125,4.9 -0.0125,0.0125 0,0.025 -0.2375,0.8625 -0.0125,0.0125 0,0.0125 -0.2125,0.875 -0.0125,0.0125 0,0.025 -0.2,0.875 0,0.0125 0,0.025 -0.175,0.8875 0,0.0125 -0.0125,0.025 -0.15,0.8875 0,0.0125 0,0.025 -0.125,0.9 -0.0125,0.0125 0,0.025 -0.1,0.9 0,0.025 -0.0125,0.0125 -0.075,0.9125 0,0.025 0,0.0125 -0.0625,0.925 0,0.0125 0,0.025 -0.0375,0.925 0,0.0125 0,0.025 -0.0125,0.9375 0,0.0125 0,0.01248 0,0.0125 1.4,-0.025 0.275,0 1.125,0.01247 0,-0.02499 0.0125,-0.8625 0,-0.0375 0.0375,-0.8875 -0.0125,0 0.0625,-0.85 0,-0.0375 0.0875,-0.875 -0.0125,0 0.1125,-0.875 0.125,-0.8625 -0.0125,0 0.15,-0.825 0,-0.0375 0.1625,-0.81244 0.0125,-0.0375 0.175,-0.8125 0.0125,-0.0375 0.2,-0.8 0,-0.025 0.225,-0.8 0.0125,-0.0375 0.05,-0.1625 -2.675,-0.8125 z m 72.95,10.2875 -0.5625,0 0,0.0125 0,0.01248 -0.0125,0.86249 0,0.0375 -0.0375,0.8875 0.0125,0 -0.0625,0.84999 0,0.0375 -0.0875,0.875 0.0125,0 -0.1125,0.875 -0.125,0.86249 0.0125,0 -0.15,0.82501 0,0.0375 -0.1625,0.8125 -0.0125,0.0375 -0.175,0.8125 -0.0125,0.0375 -0.2,0.8 0,0.025 -0.225,0.80001 -0.0125,0.0375 -0.05,0.17501 2.675,0.8125 0.0625,-0.21251 0.0125,-0.0125 0,-0.025 0.2375,-0.86251 0.0125,-0.0125 0,-0.0125 0.2125,-0.875 0.0125,-0.0125 0,-0.025 0.2,-0.875 0,-0.0125 0,-0.025 0.175,-0.8875 0,-0.0125 0.0125,-0.025 0.15,-0.88749 0,-0.0125 0,-0.025 0.125,-0.9 0.0125,-0.0125 0,-0.025 0.1,-0.89999 0,-0.025 0.0125,-0.0125 0.075,-0.9125 0,-0.025 0,-0.0125 0.0625,-0.925 0,-0.0125 0,-0.025 0.0375,-0.925 0,-0.0125 0,-0.025 0.0125,-0.9375 -1.4,-0.0125 1.4,-0.0125 0,-0.025 z m -73.8625,6.375005 0.0375,0.2625 0.0125,0.025 0,0.0125 0.175,0.8875 0,0.025 0,0.0125 0.2,0.875 0,0.025 0.0125,0.0125 0.2125,0.875 0,0.0125 0.0125,0.0125 0.2375,0.8625 0,0.025 0.0125,0.0125 0.25,0.84999 0.0125,0.025 0,0.0125 0.2875,0.8375 0,0.025 0.0125,0.0125 0.3,0.83749 0,0.0125 0.0125,0.025 0.3125,0.825 0.0125,0.0125 0,0.0125 0.35,0.8125 0,0.025 0.0125,0.0125 0.35,0.8 0.0125,0.025 0.0125,0.0125 0.375,0.8 0.0125,0.0125 0,0.0125 0.0875,0.1625 2.4875,-1.275 -0.0625,-0.125 -0.0125,-0.025 -0.35,-0.7372 -0.0125,-0.0375 -0.3375,-0.7375 -0.0125,-0.025 -0.3125,-0.7625 -0.0125,-0.025 -0.3,-0.7625 -0.0125,-0.0375 -0.275,-0.76251 -0.0125,-0.025 0,-0.0125 -0.25,-0.775 -0.0125,-0.0375 -0.2375,-0.77501 -0.0125,-0.0375 -0.225,-0.80001 0,-0.025 -0.2,-0.79999 -0.0125,-0.0375 -0.175,-0.8125 -0.0125,-0.0375 -0.1625,-0.8125 0,-0.0375 -0.0375,-0.2375 z m 69.425,9.42499 -0.0125,0.025 -0.3875,0.7125 -0.0125,0.0375 -0.4,0.7 -0.0125,0.025 -0.425,0.7 -0.0125,0.025 -0.4375,0.6875 -0.025,0.025 -0.45,0.675 -0.0125,0.025 -0.475,0.6625 -0.0125,0.025 -0.4875,0.65 -0.0125,0.025 -0.5,0.6375 -0.025,0.025 -0.5125,0.625 -0.025,0.025 -0.525,0.6125 -0.025,0.025 -0.5,0.55 2.075,1.875 0.525,-0.575 0.0125,-0.0125 0.0125,-0.0125 0.5625,-0.6625 0.0125,-0.0125 0.0125,-0.0125 0.5625,-0.675 0,-0.0125 0.0125,-0.0125 0.55,-0.6875 0,-0.0125 0.0125,-0.0125 0.525,-0.7125 0.0125,-0.0125 0.0125,-0.0125 0.5,-0.7125 0.0125,-0.0125 0.0125,-0.0125 0.4875,-0.725 0.0125,-0.0125 0,-0.025 0.475,-0.7375 0.0125,-0.0125 0,-0.0125 0.4625,-0.75 0,-0.0125 0.0125,-0.0125 0.4375,-0.7625 0.0125,-0.025 0,-0.0125 0.425,-0.775 0,-0.0125 0.0125,-0.0125 0.325,-0.6375 -2.5,-1.2625 z m -62.775,6.11251 0.4125,0.5625 0.0125,0.0125 0,0.0125 0.55,0.6875 0.0125,0.0125 0,0.0125 0.5625,0.675 0.0125,0.0125 0.0125,0.0125 0.5625,0.6625 0.0125,0.0125 0.0125,0.0125 0.5875,0.65 0.0125,0.0125 0.0125,0.0125 0.6,0.6375 0.0125,0.0125 0.0125,0.0125 0.625,0.6125 0.0125,0.0125 0.0125,0.0125 0.625,0.6125 0.0125,0.0125 0.0125,0 0.65,0.6 0.0125,0.0125 0.0125,0 0.6625,0.575 0.0125,0.0125 0.0125,0.0125 0.675,0.5625 0.0125,0.0125 0.025,0.0125 0.6125,0.4875 1.7375,-2.1996 -0.6,-0.47501 -0.025,-0.0125 -0.625,-0.52501 -0.025,-0.0125 -0.6125,-0.53751 -0.025,-0.025 -0.6,-0.53751 -0.025,-0.025 -0.5875,-0.5625 -0.0125,-0.0125 -0.0125,-0.0125 -0.5625,-0.575 -0.025,-0.025 -0.5625,-0.575 -0.025,-0.025 -0.5375,-0.6 -0.025,-0.025 -0.525,-0.6125 -0.025,-0.025 -0.5125,-0.625 -0.025,-0.025 -0.5,-0.6375 -0.0125,-0.025 -0.4,-0.5375 z m 53.0875,5.4125 -0.025,0.0125 -0.65,0.4875 -0.0375,0.025 -0.6625,0.47499 -0.025,0.0125 -0.675,0.46249 -0.025,0.0125 -0.6875,0.45 -0.025,0.0125 -0.7,0.425 -0.0375,0.025 -0.7,0.41251 -0.0375,0.0125 -0.7125,0.3875 -0.0375,0.025 -0.725,0.375 -0.0125,0.0125 -0.0125,0 -0.75,0.3625 -0.025,0.0125 -0.75,0.35 -0.0375,0.0125 -0.7625,0.325 -0.025,0.0125 -0.3375,0.125 1.0375,2.6 0.375,-0.1375 0.0125,-0.0125 0.0125,0 0.825,-0.3625 0.0125,0 0.0125,-0.0125 0.8125,-0.3625 0.025,-0.0125 0.0125,0 0.8,-0.4 0.0125,0 0.0125,-0.0125 0.8,-0.4125 0.0125,0 0.0125,-0.0125 0.775,-0.425 0.0125,-0.0125 0.025,0 0.7625,-0.45 0.0125,0 0.0125,-0.0125 0.7625,-0.46249 0.0125,-0.0125 0.0125,0 0.7375,-0.4875 0.025,0 0.0125,-0.0125 0.725,-0.5 0.0125,-0.0125 0.0125,0 0.725,-0.51251 0.0125,-0.0125 0.0125,-0.0125 0.7,-0.525 0.0125,-0.0125 0.0125,-0.0125 0.075,-0.05 -1.725,-2.2 z m -40.35,5.62499 0.1125,0.0625 0.0125,0.0125 0.0125,0 0.8,0.4125 0.0125,0.0125 0.0125,0 0.8,0.4 0.0125,0 0.025,0.0125 0.8125,0.36251 0.0125,0.0125 0.0125,0 0.825,0.36249 0.0125,0 0.0125,0.0125 0.8375,0.325 0.0125,0.0125 0.025,0 0.8375,0.3125 0.0125,0.0125 0.025,0 0.85,0.3 0.0125,0 0.025,0.0125 0.8625,0.275 0.0125,0 0.0125,0 0.875,0.2625 0.0125,0 0.025,0 0.875,0.2375 0.0125,0 0.025,0.0125 0.8875,0.2125 0.0125,0 0.0125,0 0.2125,0.05 0.5875,-2.7375 -0.175,-0.0375 -0.0375,-0.0125 -0.825,-0.1875 -0.025,-0.0125 -0.8125,-0.2125 -0.0375,-0.0125 -0.8125,-0.2375 -0.025,-0.0125 -0.8,-0.25 -0.025,-0.0125 -0.0125,0 -0.7875,-0.2625 0,-0.0125 -0.8125,-0.3 -0.025,-0.0125 -0.775,-0.3 -0.025,-0.0125 -0.7625,-0.325 -0.0375,-0.0125 -0.75,-0.35 -0.025,-0.0125 -0.75,-0.36249 -0.0125,0 -0.0125,-0.0125 -0.725,-0.375 -0.0375,-0.025 -0.075,-0.0375 z m 25.575,1.0875 -0.0375,0.0125 -0.8375,0.14999 -0.0375,0.0125 -0.8375,0.1375 -0.0375,0 -0.85,0.125 0,-0.0125 -0.9,0.1125 0,-0.0125 -0.9,0.0875 -0.025,0 -0.875,0.05 -0.0375,0 -0.875,0.0375 -0.0375,0 -0.8875,0.0125 -0.0125,0 -0.0125,0 -0.8875,-0.0125 -0.0375,0 -0.875,-0.0375 -0.0375,0 -0.1125,0 -0.1625,2.78751 0.1375,0.0125 0.0125,0 0.025,0 0.95,0.0375 0.0125,0 0.0125,0 0.9625,0.0125 0.0125,0 0.0125,0 0.9625,-0.0125 0.0125,0 0.0125,0 0.95,-0.0375 0.025,0 0.0125,0 0.9375,-0.0625 0.025,0 0.0125,0 0.9375,-0.075 0.0125,-0.0125 0.025,0 0.925,-0.1 0.0125,0 0.0125,0 0.925,-0.125 0.0125,-0.0125 0.025,0 0.9125,-0.15 0.0125,0 0.025,0 0.9,-0.175 0.0125,0 0.025,0 0.6875,-0.15 -0.575,-2.7375 z m -7.2,-58.937495 -0.025,1.225 0.0625,0 0.0125,0 1.2625,0.0375 0,-0.0125 1.25,0.1 1.15,0.1375 0.0625,0.0125 0.0125,0 1.125,0.2 0.075,0.0125 0.65,0.15 0.7,-3.125 -0.725,-0.1625 -0.0375,0 -0.0375,-0.0125 -1.2875,-0.225 -0.0375,0 -0.0375,-0.0125 -1.3,-0.1625 -0.0375,0 -0.0375,0 -1.325,-0.1 -0.0375,0 -0.05,0 -1.3375,-0.0375 -0.0375,0 -0.0375,0 -0.025,0 z m -5.5125,-1.4375 -0.0375,0.0125 -0.0375,0 -1.2625,0.2875 -0.0375,0 -0.0375,0.0125 -1.2375,0.35 -0.0375,0 -0.0375,0.0125 -1.2125,0.4 -0.0375,0.0125 -0.0375,0.0125 -0.9,0.35 1.15,2.9875 0.825,-0.325 0.0625,-0.025 0.0125,0 1.1375,-0.3625 0,-0.0125 1.0875,-0.2875 1.1875,-0.275 0.075,-0.0125 1.1375,-0.2 -0.55,-3.15 z m 14.7875,4.425 0.2375,0.0875 0.075,0.0375 1.075,0.475 0.9875,0.4875 0.075,0.0375 0.9625,0.5375 0.0375,0.025 0.025,0.0125 0.925,0.575 0.0625,0.0375 0.5125,0.3625 1.825,-2.6375 -0.5875,-0.4 -0.025,-0.025 -0.0375,-0.0125 -1.05,-0.6625 -0.0375,-0.0125 -0.0375,-0.025 -1.0875,-0.6125 -0.0375,-0.0125 -0.025,-0.0125 -1.125,-0.5625 -0.0375,-0.025 -0.0375,-0.0125 -1.15,-0.5 -0.0376,-0.0125 -0.0375,-0.025 -0.3125,-0.1125 z m -23.55,-1.1 -0.0375,0.025 -0.0375,0.0125 -1.05,0.6625 -0.0375,0.0125 -0.025,0.025 -1.025,0.7125 -0.0375,0.0125 -0.025,0.025 -0.9875,0.75 -0.025,0.025 -0.0375,0.025 -0.9375,0.8 -0.0375,0.025 -0.025,0.025 -0.775,0.7125 2.175,2.35 0.7125,-0.6625 0.0625,-0.05 0.825,-0.7 0.0375,-0.025 0.025,-0.025 0.8625,-0.6625 0.0625,-0.0375 0.9,-0.625 0.0625,-0.0375 0.925,-0.575 0.0375,-0.025 0.025,-0.0125 -0.3625,-0.5875 -1.225,-2.1875 z m 31.475,6.175 0.1,0.0875 0.0375,0.0375 0.0125,0.0125 0.7625,0.775 0.05,0.05 0.7125,0.8125 0.05,0.05 0.675,0.8375 0.0125,0.0125 0.0375,0.05 0.6375,0.8625 0.0375,0.0625 0.0125,0.0125 0.45,0.7 2.675,-1.7625 -0.5,-0.775 -0.025,-0.025 -0.025,-0.0375 -0.725,-0.9875 -0.025,-0.0375 -0.025,-0.025 -0.775,-0.95 -0.025,-0.0375 -0.025,-0.025 -0.8125,-0.9125 -0.025,-0.0375 -0.025,-0.025 -0.8625,-0.875 -0.0375,-0.025 -0.025,-0.025 -0.15,-0.15 z m -40.0875,1.7625 -0.025,0.0375 -0.025,0.025 -0.675,1.025 -0.025,0.0375 -0.0125,0.0375 -0.625,1.05 -0.025,0.0375 -0.0125,0.0375 -0.5875,1.0875 -0.0125,0.0375 -0.0125,0.0375 -0.525,1.125 -0.0125,0.025 -0.025,0.0375 -0.0125,0.05 2.4125,0.9875 0.5375,0.25 0.0125,-0.025 0.475,-1.025 0.025,-0.05 0.0125,-0.025 0.5,-0.95 0.0375,-0.075 0.55,-0.9125 0.625,-0.9625 0.0125,-0.0125 0.0375,-0.0625 0.5875,-0.7875 -2.5875,-1.9 z m 45.4375,5.8625 0.4375,1.0625 0.025,0.075 0.35,1.0125 0.025,0.0875 0.325,1.1125 0.275,1.15 0.175,0.975 3.15,-0.575 -0.2,-1.0625 0,-0.0375 -0.0125,-0.0375 -0.2875,-1.225 -0.0125,-0.0375 -0.0125,-0.05 -0.35,-1.2 -0.0125,-0.0375 -0.0126,-0.0375 -0.4125,-1.175 -0.0125,-0.0375 -0.0125,-0.0375 -0.4625,-1.125 z m -49.625,3.7625 -0.0125,0.0375 0,0.0375 -0.2375,1.25 0,0.0375 -0.0125,0.0375 -0.1625,1.275 -0.0125,0.0375 0,0.0375 -0.1,1.2875 0,0.0375 0,0.05 -0.0375,1.3 0,0.0375 0,0.03749 0,0.0125 1.8625,-0.04997 1.3375,0.03749 0,-0.06251 0,-0.0125 0.0375,-1.225 0.075,-1.1125 0.0125,0 0.15,-1.1875 0.0125,-0.05 0,-0.025 0.2,-1.0875 0.2125,-0.8875 -3.1125,-0.73748 z m 52.775,5.45 -1.225,-0.025 0,0.0625 0,0.0125 -0.0375,1.225 -0.075,1.11249 -0.0125,0 -0.15,1.1875 0,0.025 -0.0125,0.0625 -0.2,1.075 -0.2125,0.8875 3.1125,0.75 0.2125,-0.9 0.0125,-0.0375 0,-0.0375 0.2375,-1.25 0,-0.0375 0.0125,-0.0375 0.1625,-1.275 0.0125,-0.0375 0,-0.0375 0.1,-1.2875 0,-0.0375 0,-0.05 0.0375,-1.3 -1.6,-0.0375 1.6,-0.03751 0,-0.025 z m -52.9875,4.325005 0.2,1.075 0,0.0375 0.0125,0.0375 0.2875,1.22501 0.0125,0.0375 0.0125,0.05 0.35,1.2 0.0125,0.0375 0.0125,0.0375 0.4125,1.17499 0.0125,0.0375 0.0125,0.0375 0.45,1.11251 2.975,-1.20001 -0.4375,-1.04999 -0.025,-0.075 -0.35,-1.01249 -0.025,-0.0875 -0.325,-1.1125 -0.275,-1.14999 -0.175,-0.98751 z m 49.85,4.8875 -0.475,1.0125 -0.025,0.05 -0.0125,0.025 -0.5,0.95001 -0.0375,0.075 -0.55,0.91249 -0.625,0.96251 -0.0125,0.0125 -0.0375,0.0625 -0.5875,0.8 2.575,1.8875 0.6375,-0.8625 0.025,-0.0375 0.025,-0.025 0.675,-1.025 0.025,-0.0375 0.0125,-0.0375 0.625,-1.05 0.025,-0.0375 0.0125,-0.0375 0.5875,-1.0875 0.0125,-0.0375 0.0125,-0.0375 0.525,-1.1125 0.0125,-0.0375 0.025,-0.0375 0.0125,-0.0375 -2.1875,-0.9 -0.7625,-0.35 z m -46.0125,5.05 0.5125,0.775 0.025,0.025 0.025,0.0375 0.725,0.9875 0.025,0.0375 0.025,0.025 0.775,0.95 0.025,0.0375 0.025,0.025 0.8125,0.925 0.025,0.025 0.025,0.025 0.8625,0.875 0.0375,0.025 0.025,0.025 0.15,0.1375 2.175,-2.3375 -0.1,-0.0875 -0.0375,-0.0375 -0.0125,-0.0125 -0.7625,-0.775 -0.05,-0.05 -0.7125,-0.8125 -0.05,-0.05 -0.675,-0.8375 -0.0125,-0.0125 -0.0375,-0.05 -0.6375,-0.8625 -0.05,-0.075 -0.4625,-0.7 z m 39.9625,3.25 -0.0625,0.05 -0.825,0.6875 -0.025,0.025 -0.0375,0.025 -0.8625,0.66251 -0.0625,0.0375 -0.9,0.625 -0.0625,0.0375 -0.925,0.5875 0,-0.0125 -0.05,0.025 0.0125,0.0125 -0.025,0.0125 0.2625,0.425 1.3125,2.35 0.0375,-0.025 0.0375,-0.025 0.0375,-0.0125 1.05,-0.6625 0.0375,-0.0125 0.025,-0.025 1.025,-0.7 0.0375,-0.025 0.025,-0.025 0.9875,-0.75 0.025,-0.025 0.0375,-0.025 0.9375,-0.7875 0.0375,-0.025 0.025,-0.0375 0.7625,-0.7 -2.175,-2.35 z m -32.5625,4.3875 0.5875,0.39999 0.025,0.025 0.0375,0.0125 1.05,0.6625 0.0375,0.0125 0.0375,0.025 1.0875,0.6125 0.0375,0.0125 0.025,0.025 1.125,0.55 0.0375,0.025 0.0375,0.0125 1.15,0.5 0.0375,0.025 0.0375,0.0125 0.3,0.1125 1.15,-2.9875 -0.2375,-0.0875 -0.075,-0.025 -1.075,-0.4875 -0.9875,-0.4875 -0.075,-0.0375 -1.025,-0.575 0,0.0125 -0.925,-0.5875 -0.0625,-0.0375 -0.525,-0.3625 z m 24.525,0.35 -0.075,0.025 -1.0625,0.35 -0.075,0.025 -1.0875,0.2875 -1.1875,0.275 -0.075,0.0125 -1.15,0.2 0.55,3.15 1.225,-0.2125 0.0375,0 0.0375,-0.0125 1.2625,-0.28751 0.0375,0 0.0375,-0.0125 1.2375,-0.33751 0.0375,-0.0125 0.0375,-0.0125 1.2125,-0.4 0.0375,-0.0125 0.0375,-0.0125 0.8875,-0.3375 -1.15,-2.9875 z m -14.8,3.93749 0.7375,0.16251 0.0375,0.0125 0.0375,0 1.2875,0.225 0.0375,0 0.0375,0.0125 1.3,0.1625 0.0375,0 0.0375,0 1.325,0.1 0.0375,0 0.05,0 1.3375,0.0375 0.0375,0 0.03748,0 0.0125,0 -0.05,-1.6 0,-0.125 0.03748,-1.475 -0.075,0 -1.2625,-0.0375 0,0.0125 -1.25,-0.1 -1.15,-0.1375 -0.0625,-0.0125 -0.0125,0 -1.125,-0.2 -0.07494,-0.0125 -0.6625,-0.15 z m 6.282996,-43.123591 -0.425,0 0.1,4 0.325,-0.0125 0.05,0 0.05,0 0.6,0.025 0.1,0 0.5875,0.0375 0.1,0.0125 0.575,0.075 0.1,0.0125 0.5625,0.1 0.65,0.1375 0.05,0.0125 0.05,0.0125 0.6375,0.1875 0.525,0.175 0.0875,0.025 0.525,0.2 0.075,0.0375 0.0125,0 0.5125,0.225 0.0875,0.0375 0.4,0.2 1.7875,-3.575 -0.5,-0.25 -0.0375,-0.025 -0.05,-0.0125 -0.675,-0.3 -0.05,-0.025 -0.05,-0.0125 -0.7,-0.2625 -0.0375,-0.025 -0.05,-0.0125 -0.7125,-0.2375 -0.05,-0.0125 -0.0375,-0.0125 -0.7375,-0.2 -0.05,-0.0125 -0.05,-0.0125 -0.7375,-0.1625 -0.05,-0.0125 -0.05,-0.0125 -0.7625,-0.125 -0.0375,-0.0125 -0.05,-0.0125 -0.775,-0.0875 -0.05,-0.0125 -0.05,0 -0.775,-0.0625 -0.05,0 -0.05,0 -0.8,-0.0125 -0.05,-0.0125 z m -5.0625,0.7375 -0.05,0.0125 -0.0375,0.0125 -0.7125,0.2375 -0.05,0.0125 -0.05,0.025 -0.7,0.2625 -0.0375,0.0125 -0.05,0.025 -0.675,0.3 -0.05,0.0125 -0.0375,0.025 -0.675,0.3375 -0.0375,0.0125 -0.0375,0.025 -0.65,0.3625 -0.0375,0.025 -0.05,0.025 -0.625,0.3875 -0.0375,0.025 -0.0375,0.025 -0.6,0.4125 -0.0375,0.0375 -0.0375,0.025 -0.5875,0.4375 -0.0375,0.0375 -0.0375,0.025 -0.5625,0.475 -0.0375,0.025 -0.025,0.0375 -0.5375,0.4875 -0.0375,0.0375 -0.0375,0.0375 -0.1625,0.175 2.85,2.8 0.1,-0.1125 0.075,-0.0625 0.3875,-0.3625 0.075,-0.0625 0.4125,-0.35 0.0125,-0.0125 0.0625,-0.05 0.4375,-0.325 0.5125,-0.3625 0.0875,-0.05 0.55,-0.3375 0,-0.0125 0.475,-0.2625 0.0875,-0.0375 0.4875,-0.25 0.0875,-0.0375 0.5125,-0.225 0.0125,0 0.075,-0.0375 0.6125,-0.225 0,-0.0125 0.525,-0.1625 0.1,-0.0375 0.1375,-0.0375 -1.0625,-3.85 z m 14.200004,6.6875 0.3875,0.35 0.45,0.45 0.0625,0.075 0.35,0.4 0.0625,0.0625 0.3375,0.425 0.0625,0.075 0.3125,0.425 0.025,0.025 0.0375,0.0625 0.2875,0.4375 0.05,0.0875 0.275,0.45 0.0125,0.025 0.0375,0.0625 0.25,0.475 0.0375,0.0875 0.225,0.475 0.0375,0.1 0.2,0.4875 0.025,0.0625 0.0125,0.0375 0.2,0.5625 3.775,-1.3125 -0.225,-0.6625 -0.025,-0.05 -0.0125,-0.05 -0.275,-0.675 -0.025,-0.05 -0.025,-0.0375 -0.3,-0.6625 -0.025,-0.05 -0.025,-0.0375 -0.3375,-0.65 -0.025,-0.05 -0.025,-0.0375 -0.375,-0.625 -0.0125,-0.0375 -0.0375,-0.05 -0.4,-0.6 -0.025,-0.0375 -0.025,-0.05 -0.4375,-0.575 -0.025,-0.05 -0.025,-0.0375 -0.4625,-0.5625 -0.025,-0.0375 -0.0375,-0.0375 -0.4875,-0.5375 -0.025,-0.0375 -0.0375,-0.0375 -0.5125,-0.5125 -0.025,-0.0375 -0.0375,-0.0375 -0.4625,-0.4125 z m -24.350004,1.375 -0.025,0.0375 -0.025,0.05 -0.35,0.65 -0.0125,0.0375 -0.025,0.05 -0.3125,0.6625 -0.0125,0.0375 -0.025,0.05 -0.275,0.675 -0.025,0.05 -0.0125,0.05 -0.2375,0.6875 -0.025,0.05 -0.0125,0.05 -0.2,0.7125 -0.025,0.05 0,0.05 -0.175,0.725 -0.0125,0.05 -0.0125,0.05 -0.1375,0.7375 -0.0125,0.05 0,0.05 -0.1,0.75 0,0.05 -0.0125,0.05 -0.0625,0.7625 0,0.05 0,0.05 -0.025,0.775 0,0.05 0,0.05 0.0125,0.2875 4,-0.1 -0.0125,-0.1875 0,-0.0625 0,-0.0375 0.025,-0.6625 0.0375,-0.5625 0.0125,-0.0875 0,-0.0125 0.075,-0.5375 0.1125,-0.6375 0.025,-0.1 0.125,-0.525 0,-0.025 0.025,-0.075 0.15,-0.5125 0.2,-0.6 0.025,-0.0625 0.0125,-0.0375 0.2,-0.4875 0.2625,-0.575 0.05,-0.0875 0.25,-0.475 0.025,-0.05 0.025,-0.0375 0.025,-0.0375 -3.45,-2.0375 z m 28.662504,7.625 0.0125,0.475 0,0.0625 0,0.0375 -0.0125,0.5625 -0.05,0.65 -0.0125,0.0625 0,0.05 -0.0875,0.6375 -0.0875,0.5375 -0.025,0.1 -0.125,0.525 0,0.0125 -0.025,0.0875 -0.15,0.5125 -0.0375,0.1 -0.175,0.5 -0.0125,0.0375 -0.025,0.0625 -0.2,0.4875 -0.0125,0.0375 -0.025,0.05 -0.225,0.4875 -0.0375,0.0875 -0.25,0.475 -0.025,0.05 -0.025,0.0375 -0.175,0.275 3.45,2.05 0.2125,-0.375 0.025,-0.05 0.025,-0.0375 0.3375,-0.65 0.025,-0.0375 0.025,-0.05 0.3,-0.6625 0.025,-0.0375 0.025,-0.05 0.275,-0.675 0.0125,-0.05 0.025,-0.05 0.2375,-0.7 0.0125,-0.0375 0.0125,-0.05 0.2125,-0.7125 0.0125,-0.05 0.0125,-0.05 0.175,-0.725 0.0125,-0.05 0.0125,-0.05 0.1375,-0.7375 0,-0.05 0.0125,-0.05 0.1,-0.75 0,-0.05 0,-0.05 0.0625,-0.7625 0.0125,-0.05 0,-0.05 0.0125,-0.775 -2,-0.05 2,-0.05 -0.0125,-0.575 z m -30.100004,5.287501 0.0625,0.25 0.0125,0.05 0.025,0.0375 0.2375,0.7 0.0125,0.05 0.025,0.05 0.275,0.675 0.025,0.05 0.0125,0.0375 0.3125,0.6625 0.025,0.05 0.0125,0.0375 0.35,0.65 0.025,0.0375 0.025,0.05 0.3625,0.625 0.025,0.0375 0.025,0.05 0.4,0.6 0.0375,0.0375 0.025,0.0375 0.425,0.5875 0.0375,0.0375 0.025,0.0375 0.4625,0.575 0.025,0.0375 0.0375,0.0375 0.475,0.5375 0.0375,0.0375 0.0375,0.0375 0.5,0.5125 0.0375,0.0375 0.0375,0.025 0.2375,0.225 2.725,-2.9375 -0.175,-0.15 -0.0625,-0.0625 -0.0125,-0.0125 -0.375,-0.375 -0.0625,-0.075 -0.3625,-0.4 -0.0375,-0.05 -0.025,-0.025 -0.3375,-0.4125 -0.05,-0.075 -0.375,-0.5125 -0.2875,-0.4375 -0.0625,-0.0875 -0.2625,-0.45 -0.025,-0.0375 -0.025,-0.05 -0.25,-0.475 -0.05,-0.0875 -0.225,-0.4875 -0.025,-0.0625 -0.0125,-0.025 -0.2,-0.4875 -0.0125,-0.05 -0.025,-0.05 -0.2,-0.6 -0.0375,-0.15 z m 25.775004,4.775 -0.0625,0.0625 -0.4125,0.35 -0.025,0.0125 -0.05,0.05 -0.4375,0.325 -0.075,0.05 -0.45,0.3125 -0.025,0.0125 -0.05,0.0375 -0.4625,0.2875 -0.0625,0.0375 -0.025,0.0125 -0.5625,0.3125 -0.4875,0.25 -0.0875,0.0375 -0.5125,0.225 -0.0125,0 -0.075,0.0375 -0.525,0.2 -0.0875,0.025 -0.525,0.175 -0.5125,0.15 1.0625,3.85 0.5125,-0.1375 0.0375,-0.0125 0.05,-0.0125 0.7125,-0.2375 0.05,-0.0125 0.0375,-0.025 0.7,-0.2625 0.05,-0.025 0.05,-0.0125 0.675,-0.3 0.05,-0.025 0.0375,-0.0125 0.6625,-0.3375 0.05,-0.0125 0.0375,-0.025 0.65,-0.3625 0.0375,-0.025 0.0375,-0.025 0.625,-0.3875 0.0375,-0.025 0.05,-0.025 0.6,-0.425 0.0375,-0.025 0.0375,-0.025 0.5875,-0.45 0.0375,-0.025 0.0375,-0.025 0.55,-0.475 0.0375,-0.025 0.0375,-0.0375 0.5,-0.4625 -2.7125,-2.9375 z m -15.525004,1.825 -1.95,3.4875 0.0875,0.05 0.0375,0.025 0.0375,0.0125 0.675,0.3375 0.0375,0.0125 0.05,0.025 0.675,0.3 0.05,0.0125 0.0375,0.025 0.7,0.2625 0.05,0.025 0.05,0.0125 0.7125,0.2375 0.0375,0.0125 0.05,0.0125 0.7375,0.2 0.0375,0.0125 0.05,0.0125 0.75,0.1625 0.05,0.0125 0.05,0.0125 0.75,0.125 0.05,0.0125 0.05,0 0.775,0.1 0.05,0 0.05,0.0125 0.775,0.05 0.05,0.0125 0.05,0 0.7875,0.0125 0.05,0 0.05,0 0.15,0 -0.1,-4 -0.05,0 -0.100004,0 -0.5875,-0.0125 -0.1,0 -0.5875,-0.0375 0,-0.0125 -0.675,-0.075 -0.0125,0 -0.0875,-0.0125 -0.5625,-0.1 -0.1,-0.025 -0.55,-0.1125 0,-0.0125 -0.7375,-0.2 -0.525,-0.1625 0,-0.0125 -0.6125,-0.225 -0.075,-0.0375 -0.0125,0 -0.5125,-0.225 -0.0875,-0.0375 -0.4875,-0.25 -0.0875,-0.05 z M 99.97491,93.249955 c -3.472396,-4e-4 -6.725,2.912952 -6.725,6.5375 l 0,0.425005 c 0,3.52294 3.014962,6.5375 6.5375,6.5375 l 0.425,0 c 3.38555,0 6.5375,-3.03622 6.5375,-6.2875 l 0,-0.912505 c 0,-3.351323 -3.34706,-6.3 -6.775,-6.3 z" />';
	icons['ACTIVITIES.ICON.AVALANCHE'] = '<path stroke="none" d="m 115.68,87.32 -3.6,0.92 11,38.04 -4.64,1.52 9.64,9.16 3.08,-13 -4.56,1.36 z m 3.04,46.44 -8.48,-10 4.28,-1.24 -11.2,-40.64 -34.48,51.88 z m -12.08,-59.84 0,8.4 1.6,0 0.04,-8.32 7.12,4.28 0.76,-1.32 -7.36,-4.12 7.52,-4.4 -1.04,-1.16 -7.04,4 0,-8.24 -1.6,0 0,8.24 -7.36,-3.96 -0.64,1.08 7.16,4.44 -7.2,4.08 0.6,1.4 z" />';
	icons['ACTIVITIES.ICON.EARTHQUAKE EPICENTER'] = '<path stroke="none" d="m 62.799868,99.758 c 0,-10.78 4.928,-20.24 10.34,-25.696 5.06,-5.104 14.784,-11.308 24.728,-11.308 h 4.092002 c 4.884,0 10.516,1.892 13.8596,3.564 4.9724,2.508 6.38,3.96 10.384,7.04 4.62,3.564 11.0884,15.4 11.0884,23.76 v 5.3244 c 0,17.3796 -17.512,34.584 -35.068,34.584 h -4.576002 c -10.252,0 -19.36,-6.2044 -24.596,-11.4404 -5.456,-5.368 -10.252,-15.048 -10.252,-25.828 z m 39.424002,38.456 c 10.7364,0 19.976,-6.292 25.476,-11.792 6.732,-6.7316 9.856,-13.8596 10.692,-26.488 1.2756,-19.184 -17.732,-38.148 -36.1684,-38.148 h -4.840002 c -10.252,0 -20.108,6.644 -25.212,12.056 -3.036,3.212 -5.632,6.688 -7.524,11.088 -1.144,2.772 -3.52,11.264 -3.036,15.312 0.748,6.424 0.924,10.384 3.388,15.268 2.2,4.4 4.004,7.6116 7.304,11.0436 5.016,5.28 15.224,11.66 25.344,11.66 h 4.576402 z m -3.872002,-11.572 c -13.64,0 -24.684,-13.068 -25.168,-26.8404 -0.484,-13.2 12.452,-26.356 25.388,-26.356 h 2.904002 c 12.7596,0 25.168,12.408 25.168,25.168 v 2.42 c 0,12.76 -12.364,25.652 -25.168,25.652 h -3.124402 v -0.0436 z m -27.06,-26.884 c 0,8.756 3.74,15.972 8.052,20.504 2.288,2.3756 5.192,4.356 8.316,5.94 4.224,2.1564 6.336,1.936 11.484,2.7724 2.948402,0.484 10.032402,-1.3204 11.968002,-2.2 4.62,-2.2 5.016,-2.948 8.624,-5.632 4.268,-3.08 9.1084,-12.276 9.1084,-19.668 v -3.388 c 0,-13.684 -13.596,-26.84 -27.3244,-26.84 h -3.168002 c -14.476,-4e-4 -27.06,13.5956 -27.06,28.5116 z m 28.512,14.784 c -8.448,0 -13.508,-6.468 -14.388,-14.432 -0.748,-7.26 6.776,-14.608 13.904,-14.608 h 1.716002 c 7.348,0 13.552,6.864 13.552,14.52 0,7.7 -6.248,14.52 -13.772,14.52 h -1.012002 z m -18.612,-14.784 c 0,11.528 7.964,18.084 18.392,19.3164 6.204002,0.7916 10.252002,-2.9044 13.552002,-5.28 2.816,-2.0244 5.8084,-8.2724 5.8084,-13.288 V 99.758 c 0,-10.384 -8.2724,-18.612 -18.612,-18.612 h -0.748002 c -9.9444,0 -18.3924,8.624 -18.3924,18.612 z m 10.868,0 v 0.22 c 0,3.74 3.476,7.7436 6.996,7.7436 h 1.672002 c 3.916,0 7.2596,-3.872 7.2596,-7.7436 0,-3.96 -3.4756,-7.964 -6.9956,-7.964 h -1.672402 c -3.5196,0 -7.2596,4.048 -7.2596,7.744 z" />';
	icons['ACTIVITIES.ICON.LANDSLIDE'] = '<path stroke="none" d="m 129.3602,110.84 c -2.72,0 -6.2,4.12 -4.32,5.08 -1.04,1.52 -3.56,2 -3.56,4.04 0,1.76 2.6404,4.68 3.4404,6.16 1.08,2 3.1596,3.2 6.1596,3.2 h 1.76 c 2.72,0 4.56,-2.56 4.56,-5.32 v -1 c 0,-3.4404 -1.0404,-5.0404 -2.1204,-7.5204 -0.9596,-2.3596 -1.64,-4.64 -4.92,-4.64 h -0.9996 z m -22.16,-34.96 -5.3204,-5.2 -39.28,58.32 55.8404,0.08 v -1.24 c 0,-0.72 -1.04,-1.48 -1.52,-1.76 0,-1.9596 -0.56,-1.5596 -0.92,-2.8796 -0.2404,-0.9204 -0.08,-2.7204 -0.08,-3.7204 0,-2.7596 -0.12,-4.32 -1.72,-5.64 -2.2404,-1.88 -1.28,-1.52 -4.28,-3.08 -2,-1 -1.48,-2.08 -5.16,-2.2 v -1.52 c 0,-1.88 -2,-3.64 -2.8,-4.8 0,-2.28 -0.52,-4.68 -0.52,-6.84 0,-1.56 -0.2,-1.96 -0.24,-3.32 -0.08,-1.72 -0.76,-1.48 -0.76,-2.8 v -0.2 c 0,-3 0.52,-4.48 2.08,-6 2.1596,-2.12 0.88,-2.2 3.84,-3.92 l 0.84,-3.28 0,0 z m 9.72,33.96 c 0,3.64 6.08,2.76 6.08,-0.76 0,-4.16 -6.08,-1.88 -6.08,0.76 z m 2.8,-16.44 c -2.2,0 -7,6.36 -4,8.56 1.68,1.2 2.64,1.56 5.28,0.56 2,-0.76 2.7596,-1.56 2.7596,-4.32 4e-4,-2.36 -2.0396,-4.8 -4.0396,-4.8 z m -8.36,5.32 c 0.8404,0 0.96,-0.72 1.28,-1.28 -0.64,-1.36 -0.52,-2.52 -2.56,-2.52 h -0.24 c -1,0 -2.04,0.56 -2.04,1.52 0,0.68 1.64,2.28 2.8,2.28 h 0.76 z m -3.28,-13.68 c -0.12,1.04 -0.2796,0.56 -0.2796,1.52 0,0.96 0.8,3.04 1.7596,3.04 h 0.2404 c 3.12,0 3.0796,-0.24 4.8,-1.52 -1.0404,-2.28 -0.4404,-3.56 -4.2404,-3.56 -1.12,0 -1.4,0.28 -2.28,0.52 z" />';
	icons['ACTIVITIES.ICON.SUBSIDENCE'] = '<path stroke="none" d="m 56.82503,75.575 0,2 14.4,0 3.8375,7.8625 c -0.09641,0.272646 -0.275,0.744594 -0.275,1.6125 l 0,0.6125 c 0,0.72599 0.340683,1.097065 0.6625,1.5125 0.321817,0.415435 0.719059,0.831078 1.125,1.25 0.748436,0.772369 1.467714,1.541707 1.8,2.0375 l -0.3125,4.1 c -0.07316,1.04867 0.421577,1.957007 1.0375,2.5875 0.615923,0.630493 1.348347,1.08446 2.0375,1.5125 0.689153,0.42804 1.331442,0.83052 1.7375,1.2125 0.406058,0.38198 0.55,0.64883 0.55,1.0125 0,1.25358 -0.5375,2.17687 -0.5375,4.15 0,0.90153 0.521217,1.66303 1.1,2.1 0.578783,0.43697 1.203764,0.67932 1.775,0.9 0.571236,0.22068 1.09111,0.42249 1.3625,0.6 0.27139,0.17751 0.25,0.16113 0.25,0.275 0,0.56593 -0.128965,0.84714 -0.3,1.175 -0.171035,0.32786 -0.525,0.735 -0.525,1.475 l 0,0.6125 c 0,1.81905 1.011578,2.94194 1.8625,3.5125 0.837019,0.56124 1.325858,0.76746 1.525,1.2875 0.0033,0.009 0.0094,0.0162 0.0125,0.025 0.24682,0.78253 0.344392,1.95326 0.725,3.075 0.191944,0.5657 0.470245,1.15064 0.975,1.6125 0.504755,0.46186 1.23,0.7375 2.025,0.7375 l 0.3375,0 c 1.092148,0 1.901167,-0.0323 2.5875,-0.1625 0.686333,-0.13019 1.322836,-0.41241 1.7375,-0.925 0.414664,-0.51259 0.547826,-1.09404 0.65,-1.7 0.101588,-0.60248 0.169906,-1.27644 0.3,-2.125 7.6e-4,-0.005 -7.6e-4,-0.008 0,-0.0125 0.241979,-1.43693 0.712458,-2.05678 1.25,-2.7875 0.5394,-0.73324 1.2125,-1.69333 1.2125,-3.15 0,-0.5928 -0.24696,-0.9544 -0.4625,-1.3 -0.21554,-0.3456 -0.46152,-0.67045 -0.6875,-1.025 -0.45195,-0.70912 -0.825,-1.48204 -0.825,-2.43752 l 0,-0.875 c 0,-0.0318 -0.0079,-0.0421 0.15,-0.2 0.15787,-0.15788 0.46324,-0.38165 0.825,-0.6375 0.36176,-0.25585 0.78262,-0.54848 1.15,-0.9875 0.36738,-0.43902 0.6625,-1.07541 0.6625,-1.7875 0,-1.18333 -0.48447,-2.35352 -0.9125,-3.475 -0.42803,-1.121478 -0.7875,-2.236989 -0.7875,-2.5 0,-0.465022 0.224,-0.990739 0.6375,-1.625 0.4135,-0.634261 0.99029,-1.338507 1.4875,-2.1625 0.49721,-0.823993 0.92469,-1.813056 0.8875,-2.9625 -0.0372,-1.149444 -0.5432,-2.367975 -1.6125,-3.625 l -0.0125,-0.0125 -0.0125,0 c -0.30948,-0.348287 -0.66259,-1.255609 -0.75,-2.1875 -0.0874,-0.931891 0.0901,-1.877298 0.375,-2.325 0.30734,-0.483165 0.93645,-0.857265 1.675,-1.45 0.73855,-0.592735 1.5375,-1.602309 1.5375,-3.0375 l 0,-1.375 38.1,0 0,-2 -40.1,0 -30.6,0 -0.625,0 -15.025,0 z" />';
	icons['ACTIVITIES.ICON.VOLCANIC ERUPTION'] = '<path stroke="none" d="m 122.15,65.95 -10.4,17.95 1.725,1 10.4125,-17.95 -1.7375,-1 z m -23.1875,0.5 0,17.95 2,0 0,-17.95 -2,0 z m -19.5,-0.4125 -1.825,0.8125 7.95,17.95 1.825,-0.8125 -7.95,-17.95 z M 99.35,120.85 c -1.661758,-0.0312 -3.310088,0.78129 -4.5375,2 -1.230488,1.22176 -2.05,2.86033 -2.05,4.525 l 0,1.9 c 0,1.66448 0.828463,3.29964 2.05,4.5125 1.221537,1.21286 2.844325,2.0125 4.475,2.0125 l 1.2875,0 c 1.66467,0 3.28718,-0.82846 4.5,-2.05 1.21282,-1.22154 2.025,-2.84433 2.025,-4.475 l 0,-1.9 c 0,-1.66447 -0.82851,-3.28713 -2.05,-4.5 -1.22149,-1.21287 -2.84413,-2.025 -4.475,-2.025 l -1.2125,0 -0.0125,0 z M 80.3125,86.5125 c -0.488862,0 -0.94409,0.316364 -1.375,0.8125 -0.43091,0.496136 -0.845355,1.188025 -1.2625,2.025 -0.834291,1.67395 -1.646271,3.916145 -2.4,6.2625 -1.507458,4.69271 -2.780922,9.8113 -3.375,11.3625 l -0.0125,0.0125 c -1.964871,6.97908 -5.767552,15.20138 -7,21.6375 l -0.05,0.2375 0.2375,0 20.95,0.6125 0.2,0.0125 0,-0.2125 0,-1.9 0,-0.1875 -0.1875,-0.0125 -17.55,-0.6625 L 80.45,89.425 l 39.1,0 11.9125,37.0875 -17.5,0.6625 -0.1875,0.0125 0,0.1875 0,1.9 0,0.2125 0.2,-0.0125 20.95,-0.6125 0.2375,0 -0.05,-0.2375 c -1.30012,-6.43415 -5.10331,-14.65998 -7,-21.6375 L 128.1,106.975 c -0.59451,-1.55214 -1.88409,-6.66995 -3.4,-11.3625 -0.75796,-2.346277 -1.5691,-4.588851 -2.4,-6.2625 -0.41545,-0.836824 -0.83658,-1.529001 -1.2625,-2.025 -0.42592,-0.495999 -0.86769,-0.8125 -1.35,-0.8125 l -39.375,0 z" />';
	icons['ACTIVITIES.ICON.VOLCANIC THREAT'] = '<path stroke="none" d="m 80.3125,85.6125 c -0.488862,0 -0.94409,0.316364 -1.375,0.8125 -0.43091,0.496136 -0.845355,1.188025 -1.2625,2.025 -0.834291,1.67395 -1.646271,3.928645 -2.4,6.275 -1.507458,4.69271 -2.780922,9.7988 -3.375,11.35 l 0,0.0125 -0.0125,0 c -1.964871,6.97908 -5.767552,15.21388 -7,21.65 l -0.05,0.225 0.2375,0.0125 20.95,0.6125 0.2,0 0,-0.2 0,-1.9125 0,-0.1875 -0.1875,-0.0125 -17.55,-0.6625 11.9625,-37.0875 39.1,0 11.9125,37.0875 -17.5,0.6625 -0.1875,0.0125 0,0.1875 0,1.9125 0,0.2 0.2,0 20.95,-0.6125 0.2375,-0.0125 -0.05,-0.2375 c -1.30012,-6.43415 -5.10331,-14.65998 -7,-21.6375 l -0.0125,0 0,-0.0125 c -0.59451,-1.55214 -1.88409,-6.65745 -3.4,-11.35 -0.75796,-2.346277 -1.5691,-4.601351 -2.4,-6.275 -0.41545,-0.836824 -0.83658,-1.529001 -1.2625,-2.025 -0.42592,-0.495999 -0.86769,-0.8125 -1.35,-0.8125 l -39.375,0 z M 99.35,119.95 c -1.661758,-0.0312 -3.310088,0.78129 -4.5375,2 -1.230488,1.22176 -2.05,2.86033 -2.05,4.525 l 0,1.9125 c 0,1.66448 0.828463,3.28714 2.05,4.5 1.221537,1.21286 2.844325,2.025 4.475,2.025 l 1.2875,0 c 1.66467,0 3.28718,-0.82846 4.5,-2.05 1.21282,-1.22154 2.025,-2.84433 2.025,-4.475 l 0,-1.9125 c 0,-1.66447 -0.82851,-3.28713 -2.05,-4.5 -1.22149,-1.21287 -2.84413,-2.025 -4.475,-2.025 l -1.2125,0 -0.0125,0 z m -2.7375,-42.0875 0,0.2 -0.2,0 0,4.1625 0,0.2 0.2,0 3.325,0 0.2,0 0,-0.2 0,-4.1625 0,-0.2 -0.2,0 -3.325,0 z M 99,57.0875 c -1.14469,2.5e-5 -2.258449,0.163545 -3.3375,0.475 -1.068178,0.311575 -2.120984,0.780964 -3.1625,1.4125 l -0.1,0.0625 0,0.1125 0,3.0875 0,0.375 0.325,-0.2125 c 1.0508,-0.725792 2.043975,-1.274016 3,-1.65 0.965946,-0.375627 1.865462,-0.562478 2.7,-0.5625 1.147292,2.2e-5 2.04325,0.283738 2.7125,0.85 0.68111,0.567619 1.01249,1.28852 1.0125,2.2125 -1e-5,0.500586 -0.12989,0.986717 -0.4,1.475 -0.25849,0.48596 -0.69999,1.017976 -1.3125,1.5875 l 0,0.0125 -1.475,1.4625 c -0.990914,0.947915 -1.651449,1.786395 -1.975,2.5375 -0.321148,0.745516 -0.475007,1.67684 -0.475,2.8 l 0,2.525 0,0.2 0.2,0 3.125,0 0,-0.2 0.2,0 0,-2.0125 c -10e-6,-0.564893 0.0183,-1.008254 0.05,-1.325 0.032,-0.319573 0.0764,-0.586028 0.1375,-0.8 0.0796,-0.248817 0.2148,-0.504472 0.4125,-0.775 0.20599,-0.278089 0.58154,-0.681097 1.0875,-1.1875 l 1.4375,-1.4125 c 0.99377,-0.949598 1.6903,-1.801139 2.1,-2.575 l 0,-0.0125 c 0.40766,-0.781368 0.62498,-1.599656 0.625,-2.4625 -2e-5,-1.786001 -0.64664,-3.253637 -1.9125,-4.35 -1.2553,-1.096942 -2.92737,-1.649975 -4.975,-1.65 z" />';
	icons['ACTIVITIES.ICON.DROUGHT'] = '<path stroke="none" d="m 87.648,127.36 c 1.344,0.6404 4.48,0 6.08,0 h 4.224 l -2.048,-5.888 -4.864,-0.32 c -5.696,10.752 -2.432,4.288 -3.392,6.208 z m -24.064,-6.976 c -0.64,1.856 17.6,6.912 20.544,7.424 2.688,-1.7916 4.48,-2.432 4.8,-6.656 -3.968,0 -11.392,-0.768 -14.784,-1.664 -2.24,-0.5756 -4.16,-1.152 -6.4,-1.728 -3.456,-0.896 -4.16,-1.536 -4.16,2.624 z m 35.904,6.144 6.72,-0.2564 18.56,-1.664 c 1.536,-0.448 4.48,-0.384 6.016,-1.408 -1.28,-2.6244 -2.368,-4.096 -3.712,-6.592 -1.408,-2.5596 -1.856,-4.864 -3.008,-7.232 -3.712,0.832 -4.736,3.5204 -6.2724,3.968 -3.456,1.0884 -4.8,0.448 -6.72,3.776 -1.728,3.0084 -2.496,3.328 -5.312,5.184 -2.4316,1.6644 -3.6476,2.8164 -6.2716,4.2244 z m -2.816,-8.96 c 0,3.712 0.512,4.224 2.176,7.296 l 8.512,-7.1044 -0.1916,-0.1916 c -1.664,-0.384 -2.432,-1.472 -4.8,-2.176 -1.6,-0.448 -4.096,-1.2796 -5.76,-1.408 v 3.584 h 0.0636 z m 37.632,0.512 c -0.896,0 -0.96,-0.192 -1.92,-0.192 l 1.024,2.432 2.6884,-2.752 c -0.8964,0.192 -0.8324,0.512 -1.7924,0.512 z m -51.328,-0.256 c -0.064,1.92 7.68,1.536 9.344,1.536 h 2.816 c 0,-1.6636 -0.704,-2.816 -0.768,-4.352 -0.128,-2.4956 -0.384,-1.7916 -3.072,-2.1116 -4.032,-0.448 -4.608,-2.048 -7.68,-2.816 l -0.64,7.7436 z m -25.472,-12.608 3.008,12.096 c 0.704,-3.0084 2.176,-4.544 2.752,-7.296 0.32,-1.792 0.064,-2.6244 0.896,-3.968 0.448,-0.7044 1.28,-2.752 1.472,-3.648 -1.408,-0.32 -6.912,-1.6 -8.576,-1.6 l 0.448,4.416 z m 69.888,-2.24 c -0.9596,4.096 -0.704,3.5204 0.96,6.976 1.152,2.368 1.984,4.352 3.136,6.5916 5.76,-0.5116 6.2084,-0.5116 9.4084,-3.6476 1.6,-1.6 1.024,-6.784 2.0476,-8.3204 -2.4956,-1.216 -1.6636,-0.64 -4.608,-1.3436 -4.544,-1.024 -6.592,-0.384 -10.944,-0.256 z m -30.912,1.088 v 0.768 c 0,2.24 -0.064,3.264 0,5.3756 0.128,3.264 -0.32,2.496 3.072,2.816 1.152,0.128 3.456,0.96 4.48,1.4084 0.704,0.384 1.536,0.5116 2.048,0.768 0.832,0.384 0.256,0.64 1.6636,1.408 l -0.1916,-0.1916 5.568,-4.6724 c 3.136,0 4.16,0.3844 5.824,-1.3436 2.432,-2.496 0.832,-1.4084 4.032,-3.072 l 0.6404,-3.0724 c -2.496,0.6404 -5.504,2.2404 -8.192,1.088 -2.5596,-1.088 -3.7756,-2.8156 -7.424,-2.8156 l -1.6,-0.2564 -9.9204,1.792 z m -32.128,11.2 c 1.28,0 5.824,0.704 6.912,1.024 1.408,0.384 4.672,2.304 5.632,2.304 h 2.816 c 0.96,0 0.896,-0.32 1.664,-0.5116 l 1.728,-8.2564 -5.184,-4.5436 -8.96,-2.048 c -0.448,1.664 -2.432,3.008 -3.072,5.056 -0.256,0.7036 -1.472,6.2716 -1.536,6.9756 z m 41.024,-35.136 c 0.96,1.152 1.4084,2.816 2.2404,4.16 0.384,0.64 2.88,3.328 2.88,3.52 0,0.768 -0.896,2.304 -1.28,2.304 -2.6884,0 -3.8404,-6.72 -3.8404,-9.984 z m -1.792,-1.152 c -0.256,0.96 -1.92,4.48 -2.496,5.632 -0.896,1.792 -1.92,3.52 -4.416,3.52 -0.512,0 -1.024,-0.448 -1.024,-0.768 0,-3.136 3.84,-5.76 5.184,-7.552 l 2.752,-0.832 z m 9.472,8.576 h -0.768 c -2.304,0 -6.912,-8 -6.912,-9.728 0,-0.064 0.2564,-0.512 0.2564,-0.512 1.7276,0.512 7.936,5.952 7.936,8.704 -4e-4,0.512 -0.3844,0.832 -0.5124,1.536 z m 0.576,-5.952 c -0.704,-0.32 -1.664,-0.96 -2.432,-1.344 -1.4084,-0.768 -3.52,-2.88 -4.672,-3.264 l 1.088,-1.28 c 3.136,1.536 10.112,1.28 10.112,5.696 0,0.32 -0.7684,0.832 -1.0244,1.024 -0.7676,-0.32 -1.9836,-0.384 -3.0716,-0.832 z m -24.896,1.344 h -1.024 c 0.96,-1.984 -2.176,-6.656 -4.352,-7.168 -2.24,1.216 -4.224,0.64 -5.504,3.264 -0.448,1.024 -0.704,2.24 -1.536,2.816 -0.768,0.576 -2.432,0.768 -2.432,1.856 0,1.536 4.288,0.448 4.928,-0.192 1.152,-1.088 2.368,-2.112 4.544,-2.112 1.984,0 2.944,5.76 3.072,8.192 0.192,3.2 -2.304,7.744 -2.176,9.472 l 0.896,6.784 -4.352,-0.32 c 2.112,3.136 8.512,6.016 13.44,6.4 l -0.384,-7.68 -5.632,1.28 c 0,-4.352 -1.984,-5.504 -0.512,-9.472 0.64,-1.664 1.024,-2.176 0.96,-4.672 0,-1.088 0.192,-4.608 0.576,-5.312 1.536,-2.496 1.92,-5.568 3.072,-8.448 1.216,-2.816 4.992,-2.624 8.256,-3.456 l 1.216,1.28 -1.024,0.32 0.768,1.792 c -1.728,1.984 -2.944,2.88 -4.544,4.992 -0.768,1.024 -3.84,6.336 -0.64,6.336 h 1.024 c 3.904,0 5.12,-7.104 6.912,-9.216 0.448,4.416 1.216,9.536 4.416,11.2 1.728,-0.384 2.176,-1.088 2.56,-2.816 0.704,0.192 0.5116,0.256 1.024,0.256 1.344,0 2.048,-1.088 2.048,-2.304 V 85.76 c 0,-2.112 -1.152,-2.368 -1.536,-3.84 0.768,0.384 2.1756,1.024 3.328,1.024 h 0.5116 c 1.216,0 1.344,-0.576 1.792,-1.28 -0.192,-2.496 -1.536,-3.904 -3.52,-4.608 -1.28,-0.448 -5.184,-1.728 -6.7204,-1.728 l 0.512,-1.024 h -0.704 l 0.768,-1.6 -4.928,1.024 c -0.896,-0.576 -1.216,-1.536 -2.5596,-1.536 h -1.792 C 92.32,72.192 88.736,75.84 88.736,82.944 l 0,0 z" />';
	icons['ACTIVITIES.ICON.FLOOD'] = '<path stroke="none" d="m 135.80001,114.84991 a 0.61222124,0.61222124 0 0 0 -0.5375,0.6125 l 0,5.8875 a 0.6125,0.6125 0 0 0 1.225,0 l 0,-5.8875 a 0.61222124,0.61222124 0 0 0 -0.6875,-0.6125 z m -71.737502,0 a 0.61222124,0.61222124 0 0 0 -0.55,0.6125 l 0,5.8875 a 0.6125,0.6125 0 0 0 1.225,0 l 0,-5.8875 a 0.61222124,0.61222124 0 0 0 -0.675,-0.6125 z m 60.312502,-0.2875 c -0.0524,0.007 -0.11228,0.0186 -0.175,0.05 -3.3792,1.6904 -3.1259,6.5837 -8.8875,4.6625 -1.7652,-0.5888 -1.7271,-5.1461 -3.4375,-4.4125 -1.5844,0.6788 -1.7726,3.9147 -4.075,4.7375 -1.9384,0.692 -5.3655,0.2644 -6.9375,-1.15 -0.5972,-0.5372 -0.7269,-2.9065 -1.962502,-2.6125 -1.4272,0.34 -2.7443,3.4438 -4.7375,3.925 -4.2452,1.0248 -5.1741,-4.366 -7.2625,-4.25 -0.806,0.0448 -3.612,3.1395 -5.3,3.4375 -4.9156,0.8668 -3.6867,-2.6737 -6.5375,-3.5125 -0.5724,-0.1684 -6.8259,10.2067 -10.6875,-0.4125 l -0.325,5.225 c 0.09778,0.21515 0.386239,0.41148 0.825,0.6 l -1.2375,0 0,6.125 72.725002,0 0,-6.125 -0.3125,0 c 0.11065,-1.40815 -0.0963,-3.74619 -0.25,-4.275 -0.3816,-1.3076 -0.5109,-1.0084 -1.3125,-0.25 -2.1612,2.0488 -6.6262,4.3775 -8.975,1.3875 -0.65063,-0.82688 -0.351,-3.26107 -1.1375,-3.15 z m -24.737642,-42.41262 -0.425,0.3875 -22.0375,20.325 -1.15,1.0625 1.575,0 44.075002,0 1.5625,0 -1.15,-1.0625 -22.0375,-20.325 -0.412502,-0.3875 z m -0.0125,1.675 20.475002,18.875 -40.937502,0 20.4625,-18.875 z m -22.63736,19.12512 0,0.6125 0,28.65 0,0.6 0.6125,0 44.075002,0 0.6125,0 0,-0.6 0,-28.65 0,-0.6125 -0.6125,0 -44.075002,0 -0.6125,0 z m 1.225,1.225 42.850002,0 0,27.425 -42.850002,0 0,-27.425 z" />';
	icons['ATMOSPHERIC.ICON.INVERSION'] = '<path stroke="none" d="M 69.452,87.876 C 69.452,86.7 73.596,83.9 75.5,83.9 h 0.28 c 3.304,0 8.96,9.128 15.176,9.128 h 1.848 c 5.432,0 11.312,-9.128 14.896,-9.128 3.472,0 8.792,9.128 15.176,9.128 h 0.896 c 8.512,0 10.528,-4.368 15.512,-7 l -5.32,-6.44 c -3.36,1.792 -4.088,4.648 -9.464,5.32 -2.184,0.28 -6.552,-3.92 -8.344,-5.488 -7.952,-6.832 -13.048,-2.968 -19.432,2.016 -3.92,3.08 -3.864,5.32 -8.512,1.344 -2.184,-1.848 -5.6,-4.816 -8.232,-6.048 -3.752,-1.792 -8.568,-0.728 -11.368,1.176 -1.568,1.008 -7.336,5.152 -7.336,6.888 v 52.248 h 8.176 V 87.876 z m -9.408,-16.408 79.912,0 0,-8.512 -79.912,0 z" />';
	icons['ACTIVITIES.ICON.TSUNAMI'] = '<path stroke="none" d="m 63.01,122.05 39.48,-0.06 30.78,0.3 c -7.1404,0 -12.78,-1.74 -16.92,-4.8 -3.7204,-2.88 -7.68,-7.98 -7.68,-14.4 0,-9.06 6.9,-16.5 15.84,-16.5 h 0.66 c 6.54,0 8.1596,2.82 11.82,5.28 -2.04,-8.64 -10.56,-14.16 -21.36,-14.16 h -0.1796 c -18.2404,0 -44.8804,33 -52.4404,44.34 l 0,0 0,0 z" />';
	icons['ACTIVITIES.ICON.BIRD'] = '<path stroke="none" d="m 81.6066,92.503635 -18.428,2.924 v 0.34 l 6.596,0.476 c -0.748,0.544 -3.332,1.088 -4.488,1.496 -2.584,0.884 -2.04,0.34 -3.468,2.448005 l 3.4,0.068 -1.02,0.952 c 1.768,0 3.264,0.068 4.76,0.204 1.428,0.136 1.904,-1.2916 3.536,-1.428005 2.992,-0.204 5.712,0.204005 9.316,0.272005 l -0.816,0.544 c 0.612,0.068 0.68,0.204 1.36,0.204 h 1.564 l 0.136,0.884 2.924,1.224 1.564,-0.136 c 1.632,1.088 1.904,2.312 5.168,2.38 0.204,2.72 0.612,3.808 2.992,4.352 v 0.816 c 0,2.176 0.204,4.76 2.108,4.964 l 1.224,5.304 h -0.408 v 0.4084 c -0.34,-0.2724 -1.36,-1.1564 -1.768,-1.1564 h -0.204 c -0.544,0 -0.544,0.068 -1.02,0.204 0.612,0.816 2.652,1.7 3.06,2.6524 0.544,1.5636 0.136,3.808 0.204,5.304 l 0.884,0.612 0.816,-0.1364 0.068,-0.816 -0.068,-2.72 c 0.68,0.476 2.72,2.992 3.332,2.992 h 1.02 c -0.4756,-1.9724 -1.836,-2.38 -2.72,-3.876 l 3.74,1.088 c -1.02,-1.4956 -0.884,-1.768 -2.856,-2.3116 -3.06,-0.816 -1.836,-1.9044 -3.06,-2.244 l -1.02,-5.372 c 0.952,-0.204 1.36,-1.02 1.36,-2.176 l 0.068,-1.564 -0.272,-2.584 h 1.02 c 0.748,0 0.68,-0.204 1.3596,-0.408 0.068,1.564 1.1564,3.332 2.7204,3.4 l 3.0596,6.324 c -0.272,0.3404 -0.408,0.3404 -0.408,0.816 v 0.68 l -4.352,-0.884 v 0.204 c 0.816,0.748 3.672,1.7 5.1,2.7884 1.088,0.8156 1.224,0.6116 2.04,1.904 0.34,0.5436 1.2916,2.2436 1.904,2.2436 h 0.816 l 0.204,-0.136 -1.7,-3.196 4.284,1.9044 c -0.068,-2.1084 -2.108,-1.496 -3.604,-2.7884 h 2.992 c -1.292,-1.088 -1.564,-0.884 -3.536,-1.156 -1.632,-0.204 -1.7,-1.156 -2.6524,-2.108 -1.088,-1.1564 -2.04,-4.896 -2.924,-6.596 1.224,-1.836 1.02,-1.428 1.02,-4.352 4.828,-2.312 5.576,-2.1084 9.316,-5.916 2.72,-2.720005 3.944,-6.052005 5.78,-9.656005 0.884,-1.836 1.496,-3.332 2.244,-5.236 0.7476,-1.768 0.6796,-4.692 1.4276,-6.256 2.312,-4.624 8.976,-3.196 10.268,-5.168 l -4.352,0.204 v -0.204 l 4.964,-0.612 c -2.244,-1.904 -4.828,-1.36 -8.296,-1.768 -2.108,-0.272 -2.856,0.748 -4.42,-0.34 -1.428,-0.952 -1.564,-1.156 -3.672,-1.496 -3.06,-0.544 -5.576,1.156 -7.412,2.516 -1.7,1.292 -3.196,5.168 -4.216,6.052 -0.272,0.204 -6.12,2.72 -7.072,3.196 -2.924,1.496 -3.536,2.516 -7.276,3.128 -6.3228,1.0196 -9.8588,3.3996 -14.2108,6.3236 l 0,0 z" />';
	icons['ACTIVITIES.ICON.INSECT'] = '<path stroke="none" d="m 77.4238,88.848 0.068,-0.272 6.12,4.896 -0.136,0.204 c -2.244,1.496 -7.684,8.976 -9.996,8.976 l -1.632,-0.068 5.576,-13.736 z m 7.072,3.264 c -0.408,-1.7 -5.032,-6.392 -6.664,-7.208 -0.408,0.272 -1.768,1.02 -1.768,1.564 0,0.816 0.272,1.02 0.476,1.496 l -5.644,14.688 h -1.02 c 0.204,0.884 0.544,0.68 0.544,1.02 0,0.34 -2.992,7.82 -3.332,8.704 -0.612,1.4276 -1.02,2.652 -1.632,4.216 -0.34,0.8156 -0.612,1.6316 -0.884,2.2436 -0.544,1.088 -0.612,0.3404 -1.36,1.7 l -1.292,0.272 c 0.34,0.476 1.836,0.476 2.516,0.4084 1.156,-0.204 0.408,-1.02 0.816,-2.176 0.68,-1.768 1.428,-3.536 2.108,-5.372 0.476,-1.224 3.74,-10.268 4.624,-10.268 h 1.292 c 0.816,0 1.02,0.272 1.496,0.476 l 2.312,-2.788 c 2.652,1.768 8.5,4.624 12.784,4.624 h 0.748 l 0.204,-0.136 -3.468,-5.032 -9.86,-0.068 6.46,-6.324 c 4.284,2.856 11.696,16.932 14.892,16.932 h 0.272 c 1.428,0 1.292,-0.612 1.768,-1.564 -0.884,-3.74 -4.76,-6.324 -7.344,-8.5 -2.38,-2.04 -6.12,-6.46 -8.296,-7.888 1.156,-1.7 10.336,-10.812 12.24,-11.288 l 0.884,7.684 0.136,2.856 -1.156,7.412 h -1.836 l 5.168,4.352 7.208,-3.876 c -0.4756,2.108 -0.34,2.516 -2.2436,3.4 -0.612,0.34 -3.6724,1.904 -3.6724,2.312 0,0.544 0.748,1.7 0.748,3.06 0,2.856 -3.128,4.352 -5.78,3.2636 -2.108,-0.952 -4.896,-5.1 -5.508,-5.1 h -1.02 c -4.556,0 -6.732,1.564 -10.54,1.564 h -0.476 c -1.904,0 -2.516,-0.748 -4.08,-0.748 h -0.544 c -0.612,0 -1.02,0.4084 -1.02,1.0204 0,3.1956 12.308,4.6916 16.932,4.624 l 13.056,-0.272 v 0.272 c -0.884,1.292 -5.78,4.828 -7.956,4.828 -0.136,0.204 -0.476,0.68 -0.476,0.816 0,0.68 0.136,0.68 0.272,1.2916 0.68,0.136 0.476,0.2724 1.02,0.2724 0.544,0 0.544,-0.2044 1.02,-0.544 v -1.292 l 7.684,-5.372 -1.564,6.12 c -0.884,0.068 -1.2916,0.4084 -1.2916,1.292 0,0.8836 0.544,0.68 1.36,1.156 l 1.156,-1.3596 c 0,-0.2044 -0.68,-1.292 -0.68,-1.36 0,-1.292 2.38,-7.616 2.788,-9.52 l 15.6404,-0.476 1.156,8.432 -0.408,0.068 c 0.34,0.544 0.272,1.02 1.02,1.02 0.952,0 1.088,-0.34 1.564,-0.7476 -0.476,-0.9524 -0.476,-1.9044 -1.7,-1.292 l -0.816,-6.732 4.8276,5.5084 -0.6796,0.816 1.3596,1.156 c 0.544,-0.272 1.02,-0.204 1.02,-1.02 v -0.544 c 0,-0.884 -0.884,-1.02 -1.6316,-1.156 l -4.4888,-4.9652 0.3404,-1.02 h -8.5004 c 0,-4.964 1.972,-8.228 2.3116,-12.444 l -9.1796,0.408 -0.816,2.516 h -4.624 c -1.768,0 -2.788,-7.956 -2.856,-10.268 0,-2.38 -0.272,-4.08 -0.204,-6.392 0.068,-1.36 1.02,-5.1 -1.02,-5.1 h -0.748 c -1.02,0 -1.292,1.02 -1.564,1.768 -0.272,0.952 -0.952,1.36 -1.632,1.972 -1.224,1.292 -2.312,2.38 -3.536,3.604 -1.224,1.224 -6.188,6.664 -7.412,7.004 l 0,0 z m 37.944,7.956 c 0,-0.34 0.3404,-0.544 0.748,-0.544 h 0.748 l 0.136,0.544 -0.34,1.02 h -1.02 c -0.136,-0.748 -0.272,-0.408 -0.272,-1.02 z m 3.604,-1.836 c -0.2044,0 -1.564,-1.768 -3.332,-1.768 h -0.476 c -2.04,0 -1.972,2.244 -2.516,3.876 -0.5436,1.428 -1.3596,3.672 -1.3596,5.372 0,0.612 0.408,1.02 1.02,1.02 2.38,0 6.3916,-5.168 6.936,-7.412 3.944,0 11.084,-1.088 11.764,-3.876 -2.584,0.68 -2.8564,2.38 -7.9564,2.788 1.7684,-1.564 5.644,-4.284 5.916,-7.208 h -0.4756 c -0.8164,3.06 -5.6444,7.208 -9.5204,7.208 z" />';
	icons['ACTIVITIES.ICON.MICROBIAL'] = '<path stroke="none" d="m 83.9375,93.35 c -3.292412,0 -5.9625,2.670088 -5.9625,5.9625 0,3.29241 2.670088,5.9625 5.9625,5.9625 3.292412,0 5.975,-2.67009 5.975,-5.9625 0,-3.292412 -2.682588,-5.9625 -5.975,-5.9625 z M 100,85.55 c -11.148664,0 -21.246644,1.53702 -28.6125,4.0625 -3.682928,1.26274 -6.685936,2.776168 -8.8125,4.5 -2.126564,1.723832 -3.4,3.71602 -3.4,5.8875 0,2.17148 1.273436,4.16367 3.4,5.8875 2.126564,1.72383 5.129572,3.23726 8.8125,4.5 7.365856,2.52548 17.463836,4.0625 28.6125,4.0625 11.14866,0 21.24664,-1.53702 28.6125,-4.0625 3.68293,-1.26274 6.68594,-2.77617 8.8125,-4.5 2.12656,-1.72383 3.4,-3.71602 3.4,-5.8875 0,-2.17148 -1.27344,-4.163668 -3.4,-5.8875 -2.12656,-1.723832 -5.12957,-3.23726 -8.8125,-4.5 C 121.24664,87.08702 111.14866,85.55 100,85.55 z m 0,1.375 c 11.02115,0 20.99981,1.54418 28.1625,4 3.58134,1.227912 6.45147,2.68062 8.3875,4.25 1.93603,1.56938 2.9,3.195876 2.9,4.825 0,1.62912 -0.96397,3.25562 -2.9,4.825 -1.93603,1.56938 -4.80616,3.02209 -8.3875,4.25 -7.16269,2.45582 -17.14135,4 -28.1625,4 -11.021152,0 -20.999812,-1.54418 -28.1625,-4 -3.581344,-1.22791 -6.451472,-2.68062 -8.3875,-4.25 -1.936028,-1.56938 -2.9,-3.19588 -2.9,-4.825 0,-1.629124 0.963972,-3.25562 2.9,-4.825 1.936028,-1.56938 4.806156,-3.022088 8.3875,-4.25 7.162688,-2.45582 17.141348,-4 28.1625,-4 z" />';
	icons['ACTIVITIES.ICON.REPTILE'] = '<path stroke="none" d="m 93.4718,82.329053 c 0,-2.048 1.792,-2.688 1.792,-4.288 0,-1.024 -0.576,-1.536 -1.152,-1.984 -2.752,0.256 -6.464,0.64 -7.36,2.688 -0.512,1.152 -0.512,2.432 -1.152,3.904 -0.512,1.024 -1.152,2.432 -1.152,3.84 0,0.832 0.384,0.704 0.384,1.6 v 0.768 c 0,2.176 -2.368,3.456 -0.576,6.08 -0.192,0.256 -1.984,1.536 -2.368,1.728 -1.728,0.96 -1.792,-0.576 -2.56,-0.576 h -0.768 l -0.256,-1.152 c -0.512,-0.32 -0.96,-0.832 -1.728,-0.832 -0.768,0 -0.832,0.512 -0.576,0.96 l -2.112,0.448 -0.832,2.304 h 1.024 c 0.896,0 1.408,0.448 1.6,1.152 l -1.536,1.151997 -0.064,0.448 c 2.816,0.256 4.608,-0.575997 7.168,-1.215997 1.472,-0.384 6.784,-0.64 7.296,-0.96 l 0.064,-2.176 c 0.96,0.256 2.048,1.28 3.072,1.664 1.152,0.448 1.664,0.768 3.136,1.216 2.432,0.64 4.48,1.151997 7.68,1.151997 h 0.5756 l 6.08,-0.575997 c 0,2.623997 2.304,2.495997 2.752,4.479997 -1.3436,-0.3204 -2.304,-1.984 -3.52,-1.984 -0.064,0 -0.384,0.1276 -0.576,0.1916 l 0.2564,1.152 -1.6,0.2564 v 0.768 l 0.64,0.448 -0.896,0.64 0.96,0.96 c -0.192,0.832 -0.704,0.5756 -0.704,1.2796 0,0.448 0.128,0.576 0.5756,0.576 0.6404,0 1.6,-0.96 2.752,-0.96 1.8564,0 8.2564,0.832 8.2564,-0.768 v -0.1916 c 0,-1.4724 -3.456,-1.6 -3.328,-5.504 4.992,2.624 9.344,7.424 4.544,13.568 -1.536,1.984 -4.096,3.584 -6.72,4.4796 -1.4084,0.512 -7.4244,1.8564 -9.344,1.4724 -4.224,-0.768 -5.376,-0.768 -8.768,-2.432 -2.56,-1.216 -4.672,-2.496 -7.04,-3.968 -3.904,-2.368 -10.048,-6.08 -16.064,-6.08 -4.992,0 -11.392,3.136 -11.392,7.872 1.152,-0.64 1.28,-1.28 2.112,-2.24 0.512,-0.576 1.728,-1.28 2.432,-1.728 1.536,-1.024 3.904,-1.7916 6.464,-1.7916 h 0.96 c 4.352,0 11.648,4.736 14.528,6.656 4.48,3.072 8.064,5.504 14.656,6.656 7.0404,1.216 12.736,-0.0636 17.4084,-2.752 1.92,-1.088 4.288,-3.264 5.504,-5.056 1.024,-1.6 2.944,-5.4404 2.688,-8 l -0.32,-2.56 c 0.256,0.064 2.816,3.712 3.648,4.544 0.768,0.832 3.84,2.496 5.312,2.496 0.9596,0 4.352,-2.2404 4.736,-2.944 l -1.344,-0.64 1.152,-1.0244 c -1.472,-1.024 -0.768,-0.64 -2.432,-0.64 h -0.9596 c 0,-1.4084 -0.32,-1.792 -1.344,-1.6 l 0.192,0.1276 -1.664,3.392 c -1.4084,0 -2.944,-0.896 -3.584,-1.792 0,-0.0636 -1.344,-3.7756 -1.344,-3.904 -0.5756,-1.984 -0.64,-2.24 -1.7916,-3.583997 -1.216,-1.344 -1.8564,-1.152 -3.392,-1.92 l -0.064,0.64 c -0.64,-1.792 -6.208,-6.464 -8.064,-7.424 -2.1756,-1.152 -3.2,-1.216 -5.952,-1.728 -2.1116,-0.32 -5.3756,0.256 -6.9756,-0.512 0.384,-1.536 1.6,-0.576 1.6,-2.176 0,-0.512 -0.7044,-0.384 -1.152,-0.384 0.5756,-1.152 -0.2564,-0.96 -1.344,-0.96 0.128,-0.256 0.384,-0.64 0.384,-0.96 0,-0.256 -0.256,-0.384 -0.576,-0.384 -0.4476,0 0,0.576 -1.3436,0.576 -0.32,-1.024 -0.256,-1.344 -1.472,-1.408 v 1.6 h -1.344 v 0.576 c 0,0.768 0.64,1.536 0.96,2.176 -0.384,0.704 -0.256,1.984 -1.408,1.984 -0.576,0 -1.792,-1.536 -3.072,-1.856 -1.344,-0.384 -3.008,0.512 -3.008,-1.536 -0.002,-0.8956 2.11,-2.4956 2.75,-3.5196 l 0,0 z" />';
	icons['ACTIVITIES.ICON.RODENT'] = '<path stroke="none" d="m 117.21161,80.2878 c 0.5756,1.152 0.5756,1.664 1.536,2.624 0.64,0.704 1.792,1.216 1.92,2.24 -1.984,-0.128 -4.224,-3.328 -4.416,-5.312 -2.1116,-0.512 -8.384,-3.584 -10.9436,-4.672 -3.1364,-1.28 -8.319996,-2.688 -12.671996,-2.688 h -2.24 c -3.968,0 -8.96,2.496 -11.328,4.224 -3.008,2.24 -5.184,5.248 -5.184,10.432 v 0.704 c -4.608,1.088 -11.712,8.448 -11.712,13.888 v 2.432 c 0,6.2084 7.744,10.048 11.84,12.736 2.496,1.664 4.672,3.328 7.04,5.1204 2.176,1.6636 4.672,4.1596 6.72,5.504 -2.112,-9.0244 -22.4,-12.6724 -22.4,-25.088 0,-4.544 4.864,-9.344 8.512,-10.2404 -0.128,0.576 -0.256,0.576 -0.256,1.28 v 0.512 c 0,4.48 7.808,4.096 11.52,3.008 5.056,-1.472 8.064,-2.24 13.568,-1.152 5.375996,1.088 8.319996,1.536 12.671996,3.648 3.712,1.856 2.048,1.216 4.2244,3.84 1.088,1.28 0.9596,1.0884 2.88,1.28 0.832,0.128 1.7916,1.0244 2.432,1.472 h 1.7276 c -1.3436,-2.5596 -4.9276,-2.8796 -5.632,-5.824 0.768,-1.536 1.664,-1.728 3.9044,-1.728 0.832,0 0.9596,0.192 1.7276,0.256 -0.256,-0.576 -0.64,-1.728 0.512,-1.728 h 1.92 c 4.544,0 8.96,2.496 12.6724,0 0,-3.008 0.4476,-2.24 -0.896,-4.928 -0.512,-0.832 -2.112,-2.688 -2.752,-3.3916 -1.6,-1.536 -5.696,-4.096 -6.6564,-5.504 0,-2.816 -0.384,-3.392 -2.688,-3.904 l -0.512,0.96 0.512,2.688 -0.96,0.32 v 0.896 h -0.768 c -0.1916,-2.368 -1.152,-5.824 -3.648,-5.824 h -0.1916 c -1.7928,-4e-4 -1.5368,0.9596 -1.9848,1.9196 z m 9.536,24.576 h 1.216 c -0.192,-2.5596 -5.12,-2.816 -5.376,-5.3756 l -2.1756,0.32 c 0.1916,1.472 1.088,2.944 2.368,3.456 0.896,0.3204 1.472,0 2.304,0.6404 0.3836,0.2552 1.0876,0.9592 1.6636,0.9592 z m -45.055996,-6.08 c 1.152,1.792 5.888,4.16 8.768,4.16 0.96,0 1.6,-0.832 1.92,-1.472 -0.896,-1.28 -2.944,-2.752 -4.672,-3.072 -3.712,-0.832 -2.944,0.128 -6.016,0.384 l 0,0 z m 9.472,-1.92 c 1.344,1.984 4.992,2.944 8.256,2.944 0.767596,0 1.407996,-0.448 1.919996,-0.704 -2.047996,-2.944 -6.079996,-2.56 -10.175996,-2.24 z" />';

	icons['ACTIVITIES.ICON.PHARMACY'] = '<path stroke="none" d="m 83.28,74.46 h 13.16 c 3.04,0 6.2,3.8 6.04,7.28 -0.12,3.6 -2.92,6.64 -6.52,6.64 H 83.28 V 74.46 z m -8.72,45.88 h 8.72 V 97.98 h 2.36 c 0.56,0 13.64,16.12 13.64,17.16 0,0.6 -13.64,16.6408 -15.04,19.28 l 10.48,-0.08 10.28,-12.2 9.56,12.32 10.88,-0.04 -15.2,-19.32 14.44,-17.8 -10.2,-0.12 -9.68,10.8 -7.4,-10 c 8.52,-2 14.12,-6.84 14.12,-17.16 0,-8.08 -7.0408,-15.28 -15.0408,-15.28 H 74.56 v 54.8 z" />';
	icons['GROUND.INSTALLATION.ICON.EDUCATIONAL FACILITIES INFRASTRUCTURE'] = '<path stroke="none" d="m 99.581754,107.07463 h -14.784 v 31.6556 h 32.002796 v -31.6556 h -14.7836 V 95.248234 c 0,-0.64 6.5228,-3.0196 7.5312,-3.4252 1.3112,-0.5272 6.944,-2.9876 7.9476,-3.01 -0.2788,-0.3816 -14.6836,-6.2612 -15.6532,-6.2612 h -2.261196 v 24.522796 z m -3.081788,-45.040244 -5.6375,14.7625 1.7375,0 1.3375,-3.75 0.05,-0.1375 0.1375,0 6.837504,0 0.1375,0 0.05,0.1375 1.325,3.75 1.7125,0 -5.625004,-14.7625 -2.0625,0 z m 0.8375,1.75 0.2,0.075 0.175,-0.075 2.800004,7.55 0.1,0.275 -0.2875,0 -5.575004,0 -0.2875,0 0.0875,-0.275 2.7875,-7.55 z m -14.75,-1.75 8.3125,0 0,1.325 -6.4625,0 -0.2,0 0,0.2 0,4.475 0,0.2 0.2,0 5.8125,0 0,1.325 -5.8125,0 -0.2,0 0,0.2 0,7.0375 -1.65,0 0,-14.7625 z m 30.250004,-0.275 c 0.88937,1.5e-5 1.72124,0.12493 2.5,0.3625 l 0.0125,0 c 0.75507,0.222097 1.44825,0.570483 2.1125,1.0125 l 0,1.625 c -0.61187,-0.514971 -1.2514,-0.934502 -1.93748,-1.2125 -0.80309,-0.328199 -1.6582,-0.499986 -2.5625,-0.5 -1.77423,1.4e-5 -3.16351,0.552551 -4.125,1.6625 -0.96202,1.10349 -1.43751,2.690212 -1.4375,4.725 -1e-5,2.028136 0.47607,3.615126 1.4375,4.725 0.96167,1.103106 2.35103,1.650002 4.125,1.65 0.9043,2e-6 1.75941,-0.159285 2.5625,-0.4875 0.68608,-0.277986 1.32561,-0.71002 1.9375,-1.225 l 0,1.6125 c -0.67774,0.449355 -1.38173,0.796359 -2.1375,1.025 -0.77906,0.237676 -1.61194,0.3625 -2.4875,0.3625 -2.25462,0 -3.99436,-0.678042 -5.275,-2.0375 -1.28105,-1.366446 -1.925,-3.230477 -1.925,-5.625 0,-2.401379 0.64436,-4.265546 1.925,-5.625 1.28075,-1.366131 3.02058,-2.049985 5.275,-2.05 z" />';
	icons['ATMOSPHERIC.ICON.DRIZZLE.INTERMITTENT LIGHT'] = '<path stroke="none" fill="rgb(0, 128, 0)" d="m 100,82.700216 c -5.522848,0 -10,4.477152 -10,10 0,5.522847 4.477152,10.000004 10,10.000004 0.0757,0 0.14968,0.002 0.225,0 l -0.225,0.2 c 0.872,4.972 -8.4,14.4 -8.4,14.4 12.8428,0.072 18.3555,-13.4006 18.3375,-23.375004 l -0.0125,0.0125 c 0.0499,-0.404963 0.075,-0.819038 0.075,-1.2375 0,-5.522848 -4.47715,-10 -10,-10 z" />';
	icons['ATMOSPHERIC.ICON.FOG.SKY OBSCURED'] = '<path stroke="none" fill="rgb(255, 247, 0)" d="m 49.5625,59.7 0,8 100.875,0 0,-8 -100.875,0 z m 0,71.6 0,8 100.875,0 0,-8 -100.875,0 z m 0,-35.6 0,8 100.875,0 0,-8 -100.875,0 z" />';
	icons['ATMOSPHERIC.ICON.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER'] = '<path stroke="none" fill="rgb(198, 16, 33)" d="m 100,45.4625 -0.9125,2.0625 -16,36 -0.625,1.4 1.5375,0 32,0 1.5375,0 -0.625,-1.4 -16,-36 L 100,45.4625 z m -21.3875,46.6625 0.4375,1.3125 20,60 0.95,2.85 0.95,-2.85 20,-60 0.4375,-1.3125 -1.3875,0 -40,0 -1.3875,0 z m 2.775,2 37.225,0 L 100,149.9625 81.3875,94.125 z" />';
	icons['ATMOSPHERIC.ICON.RAIN.INTERMITTENT LIGHT'] = '<path stroke="none" fill="rgb(0, 128, 0)" d="m 100,79.8 c -11.153784,0 -20.2,9.046216 -20.2,20.2 0,11.15378 9.046216,20.2 20.2,20.2 11.15378,0 20.2,-9.04622 20.2,-20.2 0,-11.153784 -9.04622,-20.2 -20.2,-20.2 z" />';
	icons['ATMOSPHERIC.ICON.DUST OR SAND.LIGHT TO MODERATE'] = '<path stroke="none" fill="rgb(173, 105, 75)" d="m 140.65728,85 -1.97975,1.979759 13.02611,13.026111 -13.02611,13.02612 1.97975,1.97976 14.016,-14.016 0.98988,-0.98988 -0.98988,-0.989876 L 140.65728,85 z m -93.495439,13.607036 0,2.803194 106.521559,0 0,-2.803194 -106.521559,0 z M 98.495421,62.31875 c -3.232379,0.02624 -6.378665,0.834557 -9.176096,2.168099 -3.729909,1.778057 -6.927555,4.407026 -9.263697,7.314597 -2.336141,2.907572 -3.876298,6.103966 -3.876298,9.285597 0,5.606397 2.914976,9.948143 6.876597,13.249494 3.961622,3.301352 9.000897,5.803503 13.906495,8.256293 4.905598,2.4528 9.677518,4.85625 13.074298,7.6869 3.39677,2.83065 5.38739,5.8473 5.38739,10.0521 0,3.57408 -4.01584,8.97887 -10.03019,11.58509 -6.014357,2.60622 -13.600252,2.6945 -20.870693,-3.3945 l -2.693699,3.2193 c 8.427472,7.05801 18.019931,7.16293 25.250692,4.0296 7.23076,-3.13333 12.54869,-9.20238 12.54869,-15.43949 0,-5.6064 -2.93687,-9.97005 -6.89849,-13.2714 -3.96163,-3.30135 -8.979,-5.7816 -13.884599,-8.234394 -4.905598,-2.452799 -9.699419,-4.878151 -13.096195,-7.708797 -3.396775,-2.830647 -5.365498,-5.825398 -5.365498,-10.030196 0,-1.723968 1.009003,-4.260992 2.934599,-6.657598 1.925597,-2.396606 4.704896,-4.669731 7.818297,-6.153897 6.226803,-2.968333 13.473876,-3.136818 19.885196,4.358098 l 3.19739,-2.737499 C 109.51925,64.401354 103.88272,62.275023 98.495421,62.31875 z" />';
	icons['ATMOSPHERIC.ICON.SNOW.INTERMITTENT LIGHT'] = '<path stroke="none" fill="rgb(0, 128, 0)" d="m 111.53125,78.90625 -26.40625,40 3.34375,2.1875 26.40625,-40 -3.34375,-2.1875 z m -23.0625,0 -3.34375,2.1875 26.40625,40 3.34375,-2.1875 -26.40625,-40 z M 80,98 l 0,4 40,0 0,-4 -40,0 z" />';
	icons['ATMOSPHERIC.ICON.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL'] = '<path stroke="none" fill="rgb(198, 16, 33)" d="M 100.96875 51.875 L 99.71875 54.375 L 85.75 82.3125 L 84.75 84.34375 L 87 84.34375 L 114.9375 84.34375 L 117.21875 84.34375 L 116.1875 82.3125 L 102.21875 54.375 L 100.96875 51.875 z M 100.96875 58.125 L 112.6875 81.53125 L 89.25 81.53125 L 100.96875 58.125 z M 78.34375 87.71875 L 78.34375 90.5 L 83.9375 90.5 L 83.9375 145 L 86.71875 145 L 86.71875 90.5 L 117.84375 90.5 L 102.84375 116.375 L 102.40625 117.09375 L 102.875 117.8125 L 117.78125 140.90625 L 111.21875 136.8125 L 109.75 139.1875 L 120.90625 146.1875 L 123.34375 147.6875 L 123.03125 144.875 L 121.65625 130.875 L 118.875 131.15625 L 119.625 138.625 L 105.6875 117 L 121.46875 89.8125 L 122.6875 87.71875 L 120.25 87.71875 L 78.34375 87.71875 z " />';
	icons['ATMOSPHERIC.ICON.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)'] = '<path stroke="none" fill="rgb(198, 16, 33)" d="M 125.725,59.058333 112.39167,72.391667 112,72.783333 l 0,0.55 0,53.333337 0,0.55 0.39167,0.39166 13.33333,13.33334 1.88333,-1.88334 -12.94166,-12.94166 0,-52.233337 12.94166,-12.941666 -1.88333,-1.883334 z m -51.45,0 -1.883333,1.883334 12.941666,12.941666 0,52.233337 L 72.391667,139.05833 74.275,140.94167 87.608334,127.60833 88,127.21667 l 0,-0.55 0,-53.333337 0,-0.55 L 87.608334,72.391667 74.275,59.058333 z" />';
	icons['ATMOSPHERIC.ICON.TROPICAL STORM SYSTEMS.TROPICAL STORM'] = '<path stroke="none" fill="rgb(198, 16, 33)" d="M 112.0625 55 C 96.880967 59.859233 76.729817 81.756634 82.15625 101.4375 C 82.898969 110.62871 90.622213 117.90625 100 117.90625 C 100.02121 117.90625 100.04131 117.90632 100.0625 117.90625 C 99.275904 128.2097 87.9375 145 87.9375 145 C 103.11882 140.14076 123.27045 118.24337 117.84375 98.5625 C 117.10103 89.371294 109.37779 82.09375 100 82.09375 C 99.978792 82.09375 99.958691 82.093676 99.9375 82.09375 C 100.7241 71.790497 112.0625 55 112.0625 55 z M 100 84.5 C 106.76834 84.5 112.50566 88.811192 114.625 94.84375 C 114.75331 95.208196 114.86708 95.592676 114.96875 95.96875 C 114.99076 96.051037 115.01056 96.135923 115.03125 96.21875 C 115.11895 96.566376 115.18613 96.893488 115.25 97.25 C 115.4095 98.143726 115.5 99.059541 115.5 100 C 115.5 101.07219 115.39354 102.11482 115.1875 103.125 C 114.99814 104.05228 114.72133 104.95408 114.375 105.8125 C 114.35387 105.86482 114.33418 105.91672 114.3125 105.96875 C 114.14843 106.36288 113.9761 106.74824 113.78125 107.125 C 113.7434 107.19833 113.69523 107.27111 113.65625 107.34375 C 113.61654 107.41756 113.57212 107.48941 113.53125 107.5625 C 113.33146 107.92072 113.13292 108.2851 112.90625 108.625 C 112.4302 109.33717 111.89694 110.00314 111.3125 110.625 C 111.23165 110.71108 111.14528 110.79079 111.0625 110.875 C 110.81116 111.13061 110.54976 111.38729 110.28125 111.625 C 110.22016 111.67902 110.15569 111.72819 110.09375 111.78125 C 109.79442 112.03797 109.47483 112.26642 109.15625 112.5 C 109.14438 112.50869 109.1369 112.5226 109.125 112.53125 C 108.88372 112.70712 108.6266 112.86927 108.375 113.03125 C 108.07717 113.22225 107.78013 113.42305 107.46875 113.59375 C 107.43569 113.61193 107.40821 113.63831 107.375 113.65625 C 106.58518 114.08191 105.74025 114.43358 104.875 114.71875 C 104.70115 114.77619 104.52029 114.82359 104.34375 114.875 C 103.9862 114.97871 103.61781 115.07803 103.25 115.15625 C 103.18764 115.16953 103.12514 115.17496 103.0625 115.1875 C 102.07111 115.38558 101.05074 115.5 100 115.5 C 93.291665 115.5 87.601439 111.26111 85.4375 105.3125 C 85.418666 105.26075 85.393307 105.20825 85.375 105.15625 C 85.260719 104.83165 85.155705 104.49012 85.0625 104.15625 C 85.027579 104.03116 85.00062 103.90758 84.96875 103.78125 C 84.891767 103.4761 84.839923 103.18704 84.78125 102.875 C 84.703155 102.45968 84.637935 102.02026 84.59375 101.59375 C 84.540954 101.07187 84.5 100.53609 84.5 100 C 84.5 98.972235 84.591536 97.971183 84.78125 97 C 84.789494 96.957843 84.803917 96.917032 84.8125 96.875 C 84.902895 96.431809 85.029045 95.990907 85.15625 95.5625 C 85.264187 95.199135 85.39799 94.851579 85.53125 94.5 C 85.589866 94.345355 85.624133 94.183467 85.6875 94.03125 C 85.726694 93.937198 85.771519 93.843096 85.8125 93.75 C 85.976597 93.377116 86.151848 93.012951 86.34375 92.65625 C 86.383289 92.582568 86.42806 92.510458 86.46875 92.4375 C 86.668537 92.079279 86.867078 91.7149 87.09375 91.375 C 87.306004 91.05672 87.546633 90.769756 87.78125 90.46875 C 87.982578 90.210682 88.189281 89.963312 88.40625 89.71875 C 88.582642 89.519926 88.751212 89.314455 88.9375 89.125 C 89.025688 89.035291 89.128408 88.962543 89.21875 88.875 C 89.44524 88.655463 89.666686 88.424209 89.90625 88.21875 C 90.196394 87.970211 90.504278 87.758072 90.8125 87.53125 C 90.835879 87.514007 90.85152 87.485865 90.875 87.46875 C 91.118959 87.291351 91.370524 87.131952 91.625 86.96875 C 91.922828 86.777746 92.219872 86.576952 92.53125 86.40625 C 92.563558 86.388538 92.592552 86.361238 92.625 86.34375 C 93.052967 86.113102 93.517634 85.90915 93.96875 85.71875 C 94.350171 85.557766 94.728592 85.4119 95.125 85.28125 C 95.300403 85.22344 95.478115 85.176669 95.65625 85.125 C 96.0138 85.021291 96.382193 84.921967 96.75 84.84375 C 96.791965 84.834826 96.832909 84.821085 96.875 84.8125 C 96.895121 84.80839 96.91735 84.816532 96.9375 84.8125 C 97.423078 84.715482 97.905248 84.644434 98.40625 84.59375 C 98.928127 84.540954 99.463908 84.5 100 84.5 z " />';

	icons['ACTIVITIES.ICON.HEALTH DEPARTMENT FACILITY'] = '<path stroke="none" d="M 131.42,83.6 100.02,68.36 68.54,83.48 z m -26.36,14.56 0,-9.72 -10.12,0 0,9.72 -9.52,0 0,10.36 9.52,0 0,9.52 10.12,0 0,-9.52 9.56,0 0,-10.36 z m -27.16,19.48 0,-27.76 1.44,0 0,-3.68 -7.32,0 0,3.68 1.24,0 0,27.76 -1.24,0 0,3.84 7.32,0 0,-3.84 z m 48.68,0 0,-27.76 1.4,0 0,-3.68 -7.28,0 0,3.68 1.2,0 0,27.76 -1.2,0 0,3.84 7.28,0 0,-3.84 z m -56.36,5.08 0,3.04 59.4,0 0,-3.04 z m -1.84,6.08 0,2.84 63.24,0 0,-2.84 z" />';
	icons['ACTIVITIES.ICON.MEDICAL FACILITIES OUTPATIENT'] = '<path stroke="none" d="m 81.82,63.64 26.56,9.04 0.04,63.88 -26.6,-9.12 v -63.8 l 0,0 z m -1.64,65 29.88,10.36 v -10.56 h 9.76 V 61 H 80.18 v 67.64 l 0,0 z m 21.36,-18.08 c 0,1.08 1,2.6404 2.24,2.6404 0.8,0 1.2,-0.8404 1.2,-1.6404 v -0.4 c 0,-1.24 -1.08,-3.04 -2.04,-3.04 -0.8,0 -1.4404,0.7596 -1.4404,1.64 v 0.8 H 101.54 z M 85.86,90.88 c 0.88,0.08 5.28,1.76 5.28,2.44 v 7.12 l 5.68,2.2 v -7.48 l 5.48,1.88 V 89.08 C 101.5,88.84 96.86,87.24 96.86,86.6 V 79.48 L 91.18,77.6 v 7.36 l -5.32,-2 v 7.92 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 81.8125 63.625 L 81.8125 127.4375 L 108.40625 136.5625 L 108.375 72.6875 L 81.8125 63.625 z M 91.1875 77.59375 L 96.875 79.46875 L 96.875 86.59375 C 96.875 87.23375 101.5125 88.85375 102.3125 89.09375 L 102.3125 97.03125 L 96.8125 95.15625 L 96.8125 102.625 L 91.125 100.4375 L 91.125 93.3125 C 91.125 92.6325 86.755 90.955 85.875 90.875 L 85.875 82.96875 L 91.1875 84.96875 L 91.1875 77.59375 z M 102.9375 108.125 C 103.8975 108.125 104.96875 109.91625 104.96875 111.15625 L 104.96875 111.5625 C 104.96875 112.3625 104.58125 113.1875 103.78125 113.1875 C 102.54125 113.1875 101.53125 111.6425 101.53125 110.5625 L 101.5 110.5625 L 101.5 109.75 C 101.5 108.8696 102.1375 108.125 102.9375 108.125 z " />';
	icons['ACTIVITIES.ICON.OPERATION/EMERGENCY MEDICAL OPERATION'] = '<path stroke="none" d="m 73.696,89.728 c 0.432,4.896 2.304,11.28 3.36,15.648 1.44,5.664 3.456,8.688 6.144,13.104 2.208,3.552 3.408,9.6 5.568,13.44 0.72,1.296 2.784,5.28 3.648,5.952 0.48,0.384 5.52,4.032 5.616,4.032 1.584,0 9.696,-0.384 10.368,-0.72 0.336,-0.144 4.128,-6.576 4.128,-6.96 v -3.0244 h -7.824 c -2.7364,0 -5.6164,-1.296 -8.352,-1.296 V 112.624 c 0,-2.448 1.296,-17.28 2.064,-18 0.816,-0.72 11.376,-8.16 11.904,-8.304 l -0.9596,-8.544 c -0.48,0.24 -5.568,1.008 -6.048,0.912 -0.96,-0.192 -4.704,-1.44 -5.472,-1.824 -1.872,1.056 -4.416,1.776 -6.528,2.688 -1.632,0.72 -3.456,2.736 -5.472,3.696 -2.4,1.152 -3.888,1.728 -6.672,2.496 -1.584,0.432 -2.352,0.384 -3.264,1.488 -0.6724,0.816 -1.7284,1.824 -2.2084,2.496 z m 27.792,36.144 c 0,-8.0636 1.968,-16.8 1.92,-24.816 0,-1.1516 0.1916,-1.872 0.1916,-3.216 0.048,-1.392 0.432,-1.44 1.248,-2.16 1.2,-1.056 2.4,-1.968 3.648,-2.976 2.064,-1.728 5.04,-4.752 7.104,-6.144 0.336,0.144 0.2884,0.192 0.864,0.192 h 4.896 c 0.24,0.816 4.9436,6.384 5.808,7.44 2.6404,3.072 3.792,3.888 2.88,9.6484 -0.48,3.2156 -0.72,8.5916 -0.9596,12 -0.2884,4.0316 -0.864,8.1116 -0.864,12.1916 l -26.736,-2.16 z m -1.68,1.296 29.808,2.16 2.448,-31.44 -9.84,-12.576 -7.248,-0.288 c -0.2404,0 -6.864,5.856 -7.776,6.528 -1.3916,1.056 -2.4956,2.256 -3.888,3.216 -1.68,1.248 -1.2,3.264 -1.392,5.8564 -0.576,8.3516 -2.112,18.1436 -2.112,26.5436 z m 12.816,-9.024 0.24,0.048 c 2.256,0 6.528,2.784 8.112,2.784 h 2.9756 V 119.44 H 121.36 c -0.6244,0 -6.144,-2.3044 -7.152,-2.6884 -1.488,-0.624 -6.576,0.2884 -8.6404,0.336 v 1.344 l 7.0564,-0.2876 z m -5.568,-7.872 0.1916,1.4884 c 3.12,-0.72 5.568,-1.4404 8.736,-0.816 1.344,0.288 2.784,0.5756 4.2244,0.9116 2.496,0.576 2.784,1.1524 3.3116,-0.9596 -1.3436,0 -6.8156,-1.296 -8.352,-1.68 -2.4956,-0.6724 -5.4716,0.4316 -8.1116,1.0556 z m -0.192,-8.112 0.48,1.3916 5.664,-1.92 4.9916,3.696 7.968,-1.0084 -0.288,-1.6796 -7.2956,1.0084 c -0.816,-0.576 -4.656,-3.648 -5.3276,-3.648 -0.5284,0 -5.6164,1.872 -6.1924,2.16 z m 10.6556,-7.296 h 1.0564 c 1.2,0 2.5436,-1.296 2.5436,-2.544 v -0.432 c 0,-1.44 -1.584,-2.544 -2.9756,-2.544 -4.368,-0.048 -3.648,5.52 -0.6244,5.52 z M 67.936,81.808 c 0,1.488 3.216,4.416 4.224,5.088 l 1.536,-1.632 -2.112,-4.704 h -2.16 c -0.48,0 -1.488,1.056 -1.488,1.248 z M 110.224,70.48 c 0.816,0.432 2.4,0.768 2.4,1.92 0,0.864 -0.48,1.392 -0.6244,2.112 l -2.5916,-0.384 c -0.96,-0.144 -4.2244,0.624 -5.76,0.624 v 1.056 c 0,1.056 3.984,0 5.568,0 h 0.432 c 1.68,0 5.376,1.248 6.192,1.92 0.5276,0.48 1.3916,5.184 1.92,6.24 1.7756,-0.864 1.344,-0.48 0.624,-3.168 -0.288,-0.912 -1.056,-3.072 -1.104,-4.032 l -3.936,-1.632 1.2,-2.304 c -1.104,-2.064 -0.816,-3.552 -4.032,-3.6 l -0.288,1.248 z m -36.528,6.624 c 0,0.912 2.016,4.56 2.16,6 0.336,0.096 1.056,0.432 1.056,0.432 0.336,0 2.112,-0.912 2.784,-1.056 -0.72,-3.12 -1.728,-6.576 -4.272,-7.92 -0.192,0.72 -1.728,2.304 -1.728,2.544 z m 5.856,-3.552 c 1.92,4.128 0.432,3.744 4.176,6.96 l 2.352,-1.248 v -3.84 c 0,-1.488 -1.152,-3.6 -1.296,-5.328 l -1.92,-0.24 h -1.68 l -1.632,3.696 z m 7.632,-2.832 2.544,5.04 3.888,-0.768 c 0.048,-1.008 0.624,-2.544 0.624,-3.408 0,-2.208 -1.056,-4.656 -1.056,-6.864 H 88.48 l -1.296,6 z M 97.84,62.8 c 0,0.624 0.24,7.248 0.288,7.392 0.336,1.008 3.744,2.592 5.472,2.4 0.912,-0.096 2.544,-0.288 3.4564,-0.384 1.7756,-0.192 1.248,-0.576 1.488,-2.592 0.24,-1.92 0.624,-4.944 1.056,-6.816 -0.384,-0.768 -2.448,-4.704 -3.168,-4.704 h -5.136 c -0.7204,0 -2.9764,3.984 -3.4564,4.704 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 115.59375 86.5625 C 113.52975 87.9545 110.564 90.99075 108.5 92.71875 C 107.252 93.72675 106.04375 94.6315 104.84375 95.6875 C 104.02775 96.4075 103.64175 96.45175 103.59375 97.84375 C 103.59375 99.18775 103.40625 99.9109 103.40625 101.0625 C 103.45425 109.0785 101.5 117.8114 101.5 125.875 L 128.21875 128.03125 C 128.21875 123.95125 128.80535 119.87535 129.09375 115.84375 C 129.33335 112.43535 129.5825 107.05935 130.0625 103.84375 C 130.9745 98.08335 129.79665 97.2595 127.15625 94.1875 C 126.29185 93.1315 121.615 87.566 121.375 86.75 L 116.46875 86.75 C 115.89315 86.75 115.92975 86.7065 115.59375 86.5625 z M 118.15625 89.34375 C 119.54785 89.34375 121.125 90.435 121.125 91.875 L 121.125 92.3125 C 121.125 93.5605 119.7625 94.875 118.5625 94.875 L 117.53125 94.875 C 114.50765 94.875 113.78825 89.29575 118.15625 89.34375 z M 113.0625 100 C 113.7341 100 117.559 103.08025 118.375 103.65625 L 125.6875 102.625 L 125.96875 104.3125 L 118 105.3125 L 113 101.625 L 107.34375 103.5625 L 106.875 102.15625 C 107.451 101.86825 112.5341 100 113.0625 100 z M 113.21875 109 C 113.88994 108.98131 114.53235 109.05065 115.15625 109.21875 C 116.69265 109.60275 122.18765 110.90625 123.53125 110.90625 C 123.00365 113.01825 122.71475 112.41975 120.21875 111.84375 C 118.77835 111.50775 117.31275 111.2255 115.96875 110.9375 C 112.80075 110.3131 110.37 111.03 107.25 111.75 L 107.0625 110.28125 C 109.0425 109.81325 111.20517 109.05608 113.21875 109 z M 112.53125 116.53125 C 113.24976 116.53272 113.84675 116.594 114.21875 116.75 C 115.22675 117.134 120.7506 119.4375 121.375 119.4375 L 123.9375 119.4375 L 123.9375 120.96875 L 120.96875 120.96875 C 119.38475 120.96875 115.131 118.1875 112.875 118.1875 L 112.625 118.15625 L 105.5625 118.4375 L 105.5625 117.09375 C 107.1108 117.05805 110.37573 116.52684 112.53125 116.53125 z" />';
	icons['ACTIVITIES.ICON.TRIAGE'] = '<path stroke="none" d="M 91.59375 69 C 87.32575 69 83.625 71.51575 83.625 75.34375 L 83.625 83.3125 L 80.46875 83.3125 C 73.95675 83.3125 73.59475 88.068 71.21875 91.5 C 69.28275 94.316 63.03125 94.3815 63.03125 100.9375 L 63.03125 131 L 136.96875 131 L 136.96875 102.625 C 136.96875 99.501 136.21475 97.341 134.71875 95.625 C 133.22275 93.953 130.7534 93.59675 129.125 91.96875 C 125.957 88.80075 126.92535 83.3125 119.09375 83.3125 L 116.1875 83.3125 L 116.1875 75.5 C 116.1875 71.276 112.85065 69 108.40625 69 L 91.59375 69 z M 89.9375 75.96875 L 110.0625 75.96875 L 110.0625 83.3125 L 89.9375 83.3125 L 89.9375 75.96875 z M 95.28125 90.4375 L 104.40625 90.4375 L 104.4375 99.375 L 112.15625 94.9375 L 116.78125 102.84375 L 109.125 107.34375 L 116.75 111.875 L 112.125 119.75 L 104.40625 115.34375 L 104.40625 124.125 L 95.28125 124.125 L 95.28125 115.28125 L 87.5625 119.71875 L 83 111.8125 L 90.65625 107.3125 L 83.03125 102.84375 L 87.5625 94.9375 L 95.28125 99.34375 L 95.28125 90.4375 z " /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 112.132,119.75 4.62,-7.86 -7.64,-4.56 7.68,-4.48 -4.64,-7.92 -7.72,4.44 -0.02,-8.94 -9.12,0 0,8.9 -7.72,-4.4 -4.54,7.92 7.62,4.46 -7.64,4.5 4.54,7.92 7.72,-4.44 0.02,8.84 9.12,0 0,-8.8 z" />';
	icons['ACTIVITIES.ICON.EMERGENCY PUBLIC INFORMATION CENTER'] = icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION'] + '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >i</text>'; 

	icons['ACTIVITIES.ICON.FIRE HYDRANT'] = '<path stroke="none" d="m 80.0358,131.304 v -1.008 c 1.288,0.1116 5.712,1.848 7.728,2.24 2.8,0.56 5.768,1.0084 9.072,1.0084 h 6.496 c 3.3596,0 6.104,-0.448 8.904,-1.0084 2.016,-0.3916 6.496,-2.128 7.728,-2.24 v 1.008 c 0,2.856 -12.4884,4.48 -16.632,4.48 h -6.44 c -4.088,0 -16.856,-1.6244 -16.856,-4.48 l 0,0 z m 17.864,-43.4 4.48,0.056 12.3756,0.392 v 8.344 h 6.2724 v 11.928 h -6.328 v 17.416 l 4.48,1.344 c -1.176,1.624 -12.2084,3.304 -15.848,3.304 h -6.44 c -3.528,0 -14.952,-1.7916 -16.016,-3.248 l 4.592,-1.568 0.056,-17.248 h -6.272 V 96.696 h 6.272 v -8.344 l 12.376,-0.448 0,0 z m 25.704,5.936 h 3.0244 v 6.664 h 3.248 v 3.864 h -3.248 v 6.664 h -3.0244 V 93.84 z m -50.008,0 h 2.856 v 17.192 h -2.856 v -6.664 h -3.472 v -3.864 h 3.416 V 93.84 h 0.056 z m 26.096,-8.288 c -5.152,0 -9.688,0.168 -14.784,0.224 -4.368,0 -3.472,-2.576 -1.792,-2.8 2.128,-0.336 4.928,-0.112 6.888,-0.448 5.264,-0.784 23.632,-0.28 28.112,0.784 0.168,1.792 0.3916,1.512 -1.0084,2.408 l -15.7916,-0.224 -1.624,0.056 z m -1.008,-21.056 h 2.856 v 3.808 h 2.016 v 1.848 c 3.248,0.728 5.3204,1.064 7.448,3.08 1.344,1.288 3.472,4.312 3.696,6.664 l -10.36,-0.28 -9.912,0.056 0.224,-0.112 -9.128,0.504 c 0.392,-4.704 5.152,-9.744 10.36,-9.744 h 0.784 v -2.016 h 2.016 v -3.808 z m -2.632,1.176 h -2.016 v 2.24 c -5.656,0.504 -10.64,6.552 -11.144,12.544 -2.24,0.224 -2.296,1.288 -3.416,2.072 l -0.224,1.568 c -0.336,2.24 2.016,3.864 3.64,4.256 v 5.488 h -3.64 v -2.408 h -8.288 v 6.664 h -3.248 V 107 h 3.248 v 6.272 h 8.288 v -2.408 h 3.64 V 123.8 c -2.296,0.5596 -5.488,2.016 -5.488,4.872 v 2.016 c 0,6.328 12.88,7.672 19.824,7.672 h 5.88 c 6.944,0 19.432,-1.2316 19.432,-7.672 v -2.016 c 0,-2.8 -2.968,-4.312 -5.264,-4.872 v -12.936 h 3.6404 v 2.408 h 8.12 V 107 h 3.248 v -9.128 h -3.192 v -6.44 h -8.12 v 2.408 h -3.64 v -5.488 c 1.624,-0.336 3.64,-1.792 3.64,-3.808 0,-2.24 -1.624,-3.864 -3.64,-4.032 -0.504,-5.88 -5.712,-12.096 -11.368,-12.6 v -2.24 h -2.016 V 61.64 h -7.896 v 4.032 z m 2.856,47.208 c -3.976,0 -8.288,-4.984 -8.12,-9.296 0.168,-4.368 4.2,-8.96 8.288,-8.96 h 2.016 c 4.2,0 8.2884,4.704 8.2884,9.128 0,4.256 -4.032,9.128 -8.064,9.128 h -2.4084 l 0,0 z m -10.528,-9.912 v 1.848 c 0,5.152 5.376,10.752 10.528,10.752 h 2.408 c 5.6,0 10.752,-5.824 10.752,-11.76 0,-5.9916 -5.264,-11.7596 -10.92,-11.7596 h -2.072 C 93.6998,91.992 88.3798,97.48 88.3798,102.968 l 0,0 z m 9.52,0.784 c 0.336,-0.56 0.784,-1.848 1.4,-1.848 h 1.4 c 0.672,0 1.4,1.288 1.4,2.016 0,0.056 -0.896,1.6244 -1.4,1.6244 h -1.4 c -0.616,0.0556 -1.064,-1.2324 -1.4,-1.7924 z m -2.856,0 2.24,4.256 h 5.04 c 0.728,0 2.4084,-3.584 2.8564,-4.256 l -2.4084,-4.48 h -4.872 c -0.784,0.056 -2.464,3.696 -2.856,4.48 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 97.8998,103.752 c 0.336,-0.56 0.784,-1.848 1.4,-1.848 h 1.4 c 0.672,0 1.4,1.288 1.4,2.016 0,0.056 -0.896,1.6244 -1.4,1.6244 h -1.4 c -0.616,0.0556 -1.064,-1.2324 -1.4,-1.7924 z m 1.1627,-9.127 c -4.088,0 -8.11325,4.60075 -8.28125,8.96875 -0.168,4.312 4.149,9.28125 8.125,9.28125 l 2.40625,0 c 4.032,0 8.0625,-4.869 8.0625,-9.125 0,-4.424 -4.08125,-9.125 -8.28125,-9.125 l -2.03125,0 z m -1.15625,4.65625 4.875,0 2.40625,4.46875 c -0.448,0.672 -2.147,4.25 -2.875,4.25 l -5.03125,0 -2.25,-4.25 c 0.392,-0.784 2.091,-4.41275 2.875,-4.46875 z M 98.6838,64.496 h 2.856 v 3.808 h 2.016 v 1.848 c 3.248,0.728 5.3204,1.064 7.448,3.08 1.344,1.288 3.472,4.312 3.696,6.664 l -10.36,-0.28 -9.912,0.056 0.224,-0.112 -9.128,0.504 c 0.392,-4.704 5.152,-9.744 10.36,-9.744 h 0.784 v -2.016 h 2.016 v -3.808 z m 1.008,21.056 c -5.152,0 -9.688,0.168 -14.784,0.224 -4.368,0 -3.472,-2.576 -1.792,-2.8 2.128,-0.336 4.928,-0.112 6.888,-0.448 5.264,-0.784 23.632,-0.28 28.112,0.784 0.168,1.792 0.3916,1.512 -1.0084,2.408 l -15.7916,-0.224 -1.624,0.056 z m -26.096,8.288 h 2.856 v 17.192 h -2.856 v -6.664 h -3.472 v -3.864 h 3.416 V 93.84 h 0.056 z m 50.008,0 h 3.0244 v 6.664 h 3.248 v 3.864 h -3.248 v 6.664 h -3.0244 V 93.84 z m -25.69755,-5.93375 -12.375,0.4375 0,8.34375 -6.28125,0 0,11.9375 6.28125,0 -0.0625,17.25 -4.59375,1.5625 c 1.064,1.4564 12.50325,3.25 16.03125,3.25 l 6.4375,0 c 3.6396,0 14.66775,-1.6885 15.84375,-3.3125 l -4.5,-1.34375 0,-17.40625 6.34375,0 0,-11.9375 -6.28125,0 0,-8.34375 -12.375,-0.375 -4.46875,-0.0625 z m 1.15625,4.15625 2.09375,0 c 5.656,0 10.90625,5.7584 10.90625,11.75 0,5.936 -5.15,11.75 -10.75,11.75 l -2.40625,0 c -5.152,0 -10.53125,-5.598 -10.53125,-10.75 l 0,-1.84375 c 0,-5.488 5.3115,-10.96265 10.6875,-10.90625 z M 80.0358,131.304 v -1.008 c 1.288,0.1116 5.712,1.848 7.728,2.24 2.8,0.56 5.768,1.0084 9.072,1.0084 h 6.496 c 3.3596,0 6.104,-0.448 8.904,-1.0084 2.016,-0.3916 6.496,-2.128 7.728,-2.24 v 1.008 c 0,2.856 -12.4884,4.48 -16.632,4.48 h -6.44 c -4.088,0 -16.856,-1.6244 -16.856,-4.48 l 0,0 z" />';
	icons['ACTIVITIES.ICON.OTHER WATER SUPPLY LOCATION'] = '<path stroke="none" d="m 113.2,116.48019 c 0,-2.8796 4.4404,-9.2796 5.76,-11.7596 2.7596,-4.959999 3.12,-6.799999 4.5596,-12.959999 2.1204,1.4 2.2,4.32 3.0404,7.08 0.84,2.759999 1.6,4.799999 2.88,7.039999 2.1596,3.76 6.72,8 5,14.08 -1.6404,5.8 -5.2,7.76 -12.16,7.52 -5.76,-0.2004 -9.08,-4.9204 -9.08,-11.0004 z m -1.24,-0.4 v 0.6404 c 0,7.48 4.5596,12.24 12.04,12.24 6.8,0 12.0404,-4.64 12.0404,-10.9596 v -1.28 c 0,-5 -4.7204,-10 -6.6404,-13.8 -1.12,-2.2 -1.6,-5.519999 -2.32,-8.079999 -0.92,-3.28 -2.4,-4 -4.8,-5.56 0,13.559199 -10.32,20.039199 -10.32,26.799199 z m 4.84,3.6 c 0,2.36 1.76,4.4404 3.8,4.4404 0.72,0 1.52,-0.6404 1.68,-1.28 -1.6,-0.44 -3.2,-2.52 -3.36,-4.44 l -2.12,1.2796 z M 89.16,73.000191 v 15.84 h -2.12 v -15.84 l 0.64,-0.08 1.48,0.08 z m -10.36,2.32 h 6.56 v 10.96 H 78.8 v -10.96 z m 37.16,1.08 c 0,-0.48 0.1596,-0.64 0.64,-0.64 h 1.48 c 0.48,0 0.64,0.16 0.64,0.64 v 9.08 h -2.76 v -9.08 z m -24.92,-1.28 22.8,2.36 v 6.48 l -22.8,1.88 v -10.72 z m -27,11.8 h 12.88 v 1.04 l 8.28,0.08 1.24,2.4 1.64,0.28 c 0.56,0.12 1.04,-0.2 1.84,-0.28 l 0.92,-0.56 0.2,-2.4 22.8,-1.6 c 1.2,2.48 4.1596,1.6 6.5596,1.04 0.0404,-0.68 0.2,-0.76 0.2,-1.48 v -9.48 c 0,-1.52 -0.8,-2.12 -2.32,-2.12 h -2.12 c -3.8,0 0.1596,2.52 -5,1.6 -2.12,-0.4 -4.6404,-0.4 -6.68,-0.72 -3.28,-0.48 -10.4,-1.32 -13.48,-1.32 -0.08,-3.12 -5.6,-3.32 -5.68,0.44 h -8.4 v 0.64 h -12.96 l 0.0804,12.44 0,0 z m 15.6,-4.84 0,1.92 4.64,0 0,-1.92 z m 0,-4.2 0,1.68 4.64,0 0,-1.68 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 91.04,75.120191 22.8,2.36 v 6.48 l -22.8,1.88 v -10.72 z m 24.92,1.28 c 0,-0.48 0.1596,-0.64 0.64,-0.64 h 1.48 c 0.48,0 0.64,0.16 0.64,0.64 v 9.08 h -2.76 v -9.08 z M 78.8125,75.3125 l 0,10.96875 6.5625,0 0,-10.96875 -6.5625,0 z m 0.8125,2.5625 4.65625,0 0,1.6875 -4.65625,0 0,-1.6875 z m 0,4.21875 4.65625,0 0,1.90625 -4.65625,0 0,-1.90625 z M 123.53125,91.75 c -1.4396,6.16 -1.8029,8.008751 -4.5625,12.96875 -1.3196,2.48 -5.78125,8.8704 -5.78125,11.75 0,6.08 3.33375,10.7996 9.09375,11 6.96,0.24 10.51585,-1.7 12.15625,-7.5 1.72,-6.08 -2.8404,-10.33375 -5,-14.09375 -1.28,-2.24 -2.035,-4.27125 -2.875,-7.03125 -0.8404,-2.76 -0.91085,-5.69375 -3.03125,-7.09375 z m -4.625,26.65625 c 0.16,1.92 1.775,3.9975 3.375,4.4375 -0.16,0.6396 -0.9675,1.28125 -1.6875,1.28125 -2.04,0 -3.78125,-2.0775 -3.78125,-4.4375 l 2.09375,-1.28125 z M 89.16,73.000191 v 15.84 h -2.12 v -15.84 l 0.64,-0.08 1.48,0.08 z" />';
	icons['ACTIVITIES.ICON.BANKING FINANCE AND INSURANCE INFRASTRUCTURE'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >€$£</text>';
	icons['GROUND.INSTALLATION.ICON.PUBLIC VENUES INFRASTRUCTURE'] = '<path stroke="none" d="m 87.875,87.28125 c -3.191408,0 -5.78125,2.621092 -5.78125,5.8125 0,2.848188 2.069061,5.210882 4.78125,5.6875 l 0,3.3125 -3.78125,0 0,2 3.78125,0 0,9.375 2,0 0,-9.375 3.8125,0 0,-2 -3.8125,0 0,-3.3125 c 2.717543,-0.476618 4.8125,-2.839312 4.8125,-5.6875 0,-3.191408 -2.621092,-5.8125 -5.8125,-5.8125 z m 24,0 c -3.19141,0 -5.78125,2.621092 -5.78125,5.8125 0,2.848188 2.06585,5.20767 4.78125,5.6875 l 0,3.3125 -3.78125,0 0,2 3.78125,0 0,9.375 2,0 0,-9.375 3.8125,0 0,-2 -3.8125,0 0,-3.3125 c 2.7154,-0.47983 4.8125,-2.839312 4.8125,-5.6875 0,-3.191408 -2.62109,-5.8125 -5.8125,-5.8125 z m -24,2 c 2.110528,0 3.8125,1.701972 3.8125,3.8125 0,2.110528 -1.701972,3.78125 -3.8125,3.78125 -2.110528,0 -3.78125,-1.670722 -3.78125,-3.78125 0,-2.110528 1.670722,-3.8125 3.78125,-3.8125 z m 24,0 c 2.11053,0 3.8125,1.701972 3.8125,3.8125 0,2.110528 -1.70197,3.78125 -3.8125,3.78125 -2.11053,0 -3.78125,-1.670722 -3.78125,-3.78125 0,-2.110528 1.67072,-3.8125 3.78125,-3.8125 z m 24.165,37.75875 0,-3.04 -72.08,0 0,3.04 z m -3.04,-6.24 0,-2.84 -66.16,0 0,2.84 z M 66.84,98.2 c 0,1.32 -0.68,2.6 -0.72,4.28 -0.04,1.8 -0.2,3.08 -0.2,5 v 3.2 l 0.56,3.56 h 2.72 l -0.76,-6.44 v -1.76 c 0,-8.08 4.96,-17.88 9.28,-21.48 5.56,-4.6 11.64,-9.12 21.68,-9.12 h 0.88 c 8.96,0 17.08,4.36 21.56,8.84 3.2,3.2 4.12,4.72 6.44,8.72 1.4,2.4 3.32,8.36 3.32,12 v 4.28 c 0,1.4 -0.72,3.04 -0.72,4.44 v 0.52 h 2.72 l 0.64,-6.4 v -3.76 c 0,-1.6 -1,-5.24 -1.44,-6.6 -0.76,-2.52 -1.28,-3.6 -2.32,-5.68 -1.84,-3.8 -3.76,-6.44 -6.68,-9.28 -4.6,-4.56 -13.56,-9.56 -22.64,-9.56 h -2.48 c -7.84,0 -16.6,4.08 -20.6,7.88 -2.84,2.68 -4.44,4.12 -6.72,7.52 -1.08,1.64 -1.52,2.96 -2.48,4.6 -0.92,1.56 -1.2,3.96 -2.04,5.24 z" />';
	icons['GROUND.INSTALLATION.ICON.RECREATIONAL AREA'] = '<path stroke="none" d="m 96.43501,78.77101 8.096,-0.046 c 0.92,0 2.392,5.704 2.392,6.946 l 1.472,4.278 c 0.046,0.368 2.024,6.578 2.024,6.992 v 0.644 l -19.412,-0.046 5.428,-18.768 z m -19.872,-0.046 11.132,0.046 -3.542,11.224 c 0,1.748 -1.932,5.704 -1.932,6.946 v 0.644 h -20.838 v 7.176 l 18.538,0.046 -1.196,2.99 -0.092,0.828 -2.576,8.326 -3.634,11.454 c 1.15,0 9.292,0.138 9.66,-0.092 0.23,-0.138 2.024,-6.808 2.346,-7.682 0.46,-1.242 4.508,-15.042 4.508,-15.226 v -0.644 l 23.46,0.046 6.67,23.598 9.844,0.046 -1.426,-4.784 -0.69,-2.622 -2.392,-7.82 -0.874,-2.806 -1.656,-5.658 h 15.824 v -7.176 h -18.17 l -2.852,-8.878 -0.138,-0.828 -0.966,-2.99 -1.702,-6.164 h 10.626 v -7.176 h -47.932 v 7.176 l 0,0 0,0 z m 62.054,16.928 0,-6.072 -15.226,0 0,6.072 z m -62.284,0 0,-6.072 -14.95,0 0,6.072 z" />';
	icons['GROUND.INSTALLATION.ICON.SPECIAL NEEDS INFRASTRUCTURE'] = '<path stroke="none" d="m 73.096,111.23642 c 0,-3.84 0.96,-5.76 2.304,-8.352 1.44,-2.784 3.312,-3.792002 4.608,-5.760002 l -1.056,-8.16 c -2.64,0.672 -7.728,6.48 -9.168,9.024 -2.352,4.080002 -3.84,7.872002 -3.84,14.208002 v 3.264 c 0,2.16 2.16,8.064 3.072,9.552 1.968,3.216 2.976,4.512 5.52,7.104 3.6,3.648 10.656,7.104 17.904,7.104 h 0.96 c 4.944,0 9.888,-1.632 13.056,-3.552 1.68,-1.008 8.544,-6.192 8.544,-7.824 0,-1.152 -3.072,-6.624 -3.456,-8.4 -1.152,1.536 -1.632,3.024 -2.976,4.752 -1.152,1.536 -2.304,2.736 -3.84,3.84 -2.592,1.968 -6.768,3.984 -11.328,3.984 h -1.248 c -10.224,0 -19.056,-8.976 -19.056,-19.344 v -1.44 l 0,0 z m 8.928,-37.920002 c 0.528,0.432 0.48,2.88 0.48,3.984 L 85,106.77242 l 25.44,0.048 9.984,22.992 c 1.488,-0.144 5.472,-1.536 7.104,-2.064 1.2,-0.384 6.528,-1.392 6.528,-2.64 v -0.24 c 0,-0.72 -1.872,-4.8 -2.016,-6.288 l -7.584,2.64 -8.976,-21.648002 H 91.624 l -0.432,-5.952 h 17.328 v -5.424 H 90.808 l -1.104,-12.912 c 2.592,-0.24 5.184,-3.888 5.184,-6.672 v -2.208 h -0.48 v -0.768 c 0,-0.768 -2.064,-3.072 -2.688,-3.504 -0.96,-0.72 -3.264,-1.584 -4.848,-1.296 -2.16,0.384 -3.168,0.768 -4.416,2.016 -0.672,0.672 -2.16,3.168 -2.16,4.272 v 1.248 c 0,2.352 0.768,3.552 1.728,4.944 l 0,0 z m 0.48,3.984 c 0,-1.056 0.048,-3.552 -0.48,-3.984 0,1.056 -0.048,3.552 0.48,3.984 z" />';
	icons['GROUND.INSTALLATION.ICON.ADULT DAY CARE'] = '<path stroke="none" d="m 106.99201,118.262 v -0.184 c 0,-15.548 22.402,-14.674 22.402,-0.598 v 1.334 c 0,5.428 -5.336,10.442 -10.81,10.442 h -0.598 c -5.934,0 -10.994,-5.06 -10.994,-10.994 z m -1.564,-22.218 h 4.646 v 10.028 c 0,0 -3.22,3.312 -3.818,4.324 -0.46,0.828 -2.208,4.738 -2.208,5.75 v 2.3 c 0,6.808 6.578,13.708 13.34,13.708 h 0.966 c 5.75,0 10.764,-5.014 10.994,-5.014 h 7.13 v -1.932 h -3.22 c 0.23,-0.46 0.782,-1.334 0.782,-1.932 v -10.994 c 0,-1.932 -0.966,-3.266 -2.116,-4.048 h -3.312 l -0.828,-0.736 c 1.058,-0.276 1.978,-0.92 1.978,-2.162 v -0.414 c 0,-0.46 -0.966,-1.748 -1.564,-1.748 h -5.014 v -5.382 c 0,-2.668 -1.518,-4.232 -4.232,-4.232 h -2.116 c -5.888,0 -4.646,5.842 -4.646,11.592 l -0.552,0.414 V 94.71 c -0.368,-0.23 -0.368,-0.368 -0.782,-0.368 h -5.428 v 1.702 z m -22.586,0.966 c 0,-2.208 3.266,-4.83 4.462,-6.578 1.38,0.966 1.426,1.84 3.404,2.806 1.38,0.69 2.576,1.38 4.048,1.932 2.438,0.92 2.208,-0.138 4.278,1.932 0.92,0.92 1.84,2.484 3.542,2.484 0.368,0 0.782,-0.782 0.782,-1.334 v -1.058 c 0,-2.806 -3.266,-3.634 -5.336,-4.508 -2.254,-0.874 -5.29,-1.61 -6.072,-3.818 -0.828,-2.346 -2.208,-4.6 -2.944,-6.9 -0.69,-2.116 -1.886,-5.06 -4.6,-5.06 h -0.414 c -3.036,0 -7.36,7.544 -8.096,10.442 -0.552,2.346 -1.564,4.738 -2.07,7.222 -0.506,2.76 -0.598,5.198 -1.104,7.958 -0.322,1.84 0.092,2.3 -0.598,4.048 -0.414,1.196 -0.828,2.254 -1.242,3.358 -0.874,2.254 -1.702,4.6 -2.484,6.808 -0.782,2.07 -4.876,11.822 -4.876,13.478 0,2.576 6.21,1.288 7.728,1.15 -0.046,-1.886 -2.254,-1.564 -3.082,-2.668 2.07,-3.082 3.772,-6.302 5.75,-9.522 1.012,-1.656 4.6,-9.2 5.428,-9.798 0.644,0.414 3.036,3.128 3.818,3.91 1.932,1.932 1.978,1.84 2.76,4.784 1.104,4.232 1.932,7.682 1.932,13.11 l 1.748,0.23 4.232,-0.046 c 1.288,0 1.794,-0.184 2.3,-0.966 -0.644,-1.012 -3.128,-1.748 -4.6,-2.116 v -1.15 c 0,-0.414 -0.138,-0.414 -0.368,-0.782 v -12.144 c -1.518,-2.254 -2.944,-4.922 -4.554,-7.084 -1.15,-1.564 -3.772,-5.198 -3.772,-7.59 v -2.53 l 0,0 z m 30.314,-9.66 v 1.564 c 0,1.518 2.346,3.864 4.232,3.864 h 0.782 c 2.116,0 4.232,-2.3 4.232,-4.462 V 87.58 c 0,-2.208 -2.208,-4.232 -4.462,-4.232 h -0.138 c -2.346,-0.046 -4.646,1.978 -4.646,4.002 z m -28.382,-15.64 v 1.748 c 0,0.598 0.966,2.07 1.38,2.484 0.598,0.552 1.794,1.196 2.852,1.196 h 0.966 c 2.024,0 4.232,-2.162 4.232,-4.048 v -1.38 c 0,-1.61 -2.484,-3.864 -4.462,-3.864 h -0.736 c -1.794,0 -4.232,2.208 -4.232,3.864 z" />';

	icons['GROUND.INSTALLATION.ICON.AGRICULTURE AND FOOD INFRASTRUCTURE'] = '<path stroke="none" d="m 79.48,127.9 h -7.8 v -21.4 c 0,-1 6.76,-13.28 7.36,-13.64 1,-0.6 13.92,-7.12 14.08,-7.12 0.52,0 13.24,6.32 14.36,7.04 0.44,0.28 7.72,13.12 7.72,13.68 v 21.4 h -7.6 V 110.38 H 79.48 v 17.52 z m 37.4,-39.36 h 15.36 v 39.8 h -12.12 v -18.8 h 2.6 c -0.52,-0.8 -5.84,-9.84 -5.84,-9.96 V 88.54 z m 0.2,-1.92 c 0,-4.36 2.92,-8.24 7.16,-8.24 h 0.44 c 4.52,0 7.56,3.68 7.56,8.2 h -15.16 v 0.04 z M 105.2,82.06 h 8.88 c -0.16,1.64 -0.88,2.48 -0.88,4.96 0,1.96 0,3.88 0,5.84 -1.44,-0.96 -0.92,-2.84 -3.16,-3.96 -1.2,-0.56 -3.76,-2.04 -4.84,-2.28 v -4.56 z m 0,-2.8 c 0,-2.8 3.8,-7.36 6.92,-7.36 h 0.64 c 3.12,0 5.48,1.84 6.72,3.68 -0.2,0.24 -4.76,4.32 -4.76,4.32 h -9.52 v -0.64 z m -11.88,1.52 c -3.2,1.68 -6.56,3.16 -9.88,4.8 -1.72,0.88 -3.28,1.52 -4.96,2.4 -2.8,1.4 -2.28,0.68 -4,3.12 -0.92,1.28 -1.84,3.24 -2.68,4.68 -0.92,1.6 -1.88,3 -2.76,4.6 -1.56,2.88 -3.6,6.48 -5.36,9.12 h 2.8 v 22.48 H 84 V 114.7 h 19.04 v 17.28 h 33.28 V 87.46 c 0,-7.48 -4.24,-12.96 -11.68,-12.96 h -1.72 c -0.8,-2.92 -5.88,-6.48 -9.96,-6.48 h -0.4 c -6.36,0 -11.04,5.88 -11.04,12.12 v 4.56 l -8.2,-3.92 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 79.48,110.38 h 28.12 v 17.52 h 7.56 v -21.4 c 0,-0.56 -7.24,-13.4 -7.72,-13.68 -1.12,-0.76 -13.8,-7.08 -14.36,-7.08 -0.12,0 -13.04,6.52 -14.08,7.12 -0.56,0.36 -7.32,12.64 -7.32,13.64 v 21.4 h 7.8 v -17.52 z m 37.4,-10.8 c 0,0.12 5.32,9.16 5.84,9.96 h -2.6 v 18.8 h 12.12 v -39.8 h -15.36 v 11.04 z m 0.2,-12.96 h 15.12 c 0,-4.56 -3.04,-8.2 -7.56,-8.2 h -0.4 c -4.24,-0.04 -7.16,3.84 -7.16,8.2 z m -11.88,0 c 1.08,0.24 3.64,1.72 4.84,2.32 2.24,1.08 1.72,2.96 3.16,3.92 0,-1.96 0,-3.88 0,-5.84 0,-2.48 0.72,-3.36 0.88,-4.96 h -8.88 v 4.56 z m 0,-7.36 v 0.64 h 9.52 c 0,0 4.56,-4.08 4.76,-4.32 -1.24,-1.84 -3.56,-3.68 -6.72,-3.68 h -0.64 c -3.08,0 -6.92,4.56 -6.92,7.36 z" />';
	icons['GROUND.INSTALLATION.ICON.AGRICULTURAL LABORATORY'] = '<path stroke="none" d="m 98.366215,77.925364 -0.08,0.28 2.560005,0.6 0,-0.32 z m 2.120005,7.32 0.36,-3.16 -0.28,-0.12 -0.44,3.16 z m -3.760005,-16.8 0.08,-0.24 -1.4,-0.28 0.96,-2.64 -0.4,-0.28 -1.72,5.72 0.08,0 0.32,-0.08 0.68,-2.44 z m -1,5.28 c 0.8,0 0.52,-1.72 0.8,-2.28 l -0.44,-0.08 -0.36,2.36 z m 1.44,-5.52 0.6,-2.64 -0.36,-0.08 -0.6,2.72 z m 0.24,-2.72 0.08,-0.28 -1.04,-0.16 -0.08,0.24 z m 11.763505,65.638556 0,5.55547 3.29064,0 c 1.10364,0 1.91952,-0.2268 2.44768,-0.68048 0.53488,-0.4604 0.80232,-1.1612 0.80232,-2.10232 -10e-6,-0.94792 -0.2676,-1.64532 -0.80232,-2.0922 -0.52812,-0.45364 -1.344,-0.68048 -2.44768,-0.68048 l -3.29064,0 m 0,-6.23594 0,4.57032 3.03672,0 c 1.00208,0 1.74684,-0.186 2.23436,-0.5586 0.49428,-0.3792 0.7414,-0.95468 0.7414,-1.72656 -10e-6,-0.76508 -0.2472,-1.33724 -0.7414,-1.7164 -0.48752,-0.3792 -1.23228,-0.56872 -2.23436,-0.56876 l -3.03672,0 m -2.05156,-1.68592 5.24063,0 c 1.56404,1e-5 2.76924,0.3252 3.61564,0.975 0.84636,0.65 1.26952,1.57424 1.26952,2.77264 -2e-5,0.92764 -0.2168,1.66564 -0.65,2.21404 -0.43332,0.54844 -1.0698,0.8904 -1.90936,1.0258 1.00884,0.2168 1.79088,0.67032 2.34608,1.36092 0.56196,0.68388 0.84296,1.54036 0.84296,2.56952 -1e-5,1.35416 -0.46044,2.40028 -1.38124,3.13828 -0.92084,0.73804 -2.231,1.10704 -3.93048,1.10704 l -5.44375,0 0,-15.16328 m -9.150777,2.02108 -2.7828,7.54609 5.575777,0 -2.792961,-7.54609 m -1.1578,-2.02108 2.3258,0 5.778911,15.16328 -2.13284,0 -1.38124,-3.88984 -6.835163,0 -1.38124,3.88984 -2.16328,0 5.78906,-15.16328 m -15.97578,0 2.05156,0 0,13.43671 7.383592,0 0,1.72656 -9.435156,0 0,-15.16328 M 98.646215,92.525364 c 0.88,-0.24 0.8,-1.84 1.12,-2.56 l 0.879995,0.4 -1.359995,4.2 -0.64,-2.04 z m -0.16,-0.36 0.08,0.24 c -0.48,-0.08 -0.8,-1.32 -0.8,-1.92 l 0.36,0.6 -0.32,-2.16 1.6,0.8 c -0.04,0.68 -0.36,2.28 -0.92,2.44 z m -0.92,-2.28 -0.64,-1.4 c 0.44,0.08 0.64,0.32 0.64,0.88 v 0.52 z m 2.560005,-4.4 -0.600005,3.88 -1.68,-0.8 v -3.44 -0.28 l 2.280005,0.64 z m -2.640005,-1.12 0.36,0.08 v 0.36 h -0.36 v 3.52 l -0.76,-0.36 0.08,0.36 h -0.2 c 0,-0.88 -1.2,-2.76 -1.6,-3.52 0.08,-0.12 0.08,-0.12 0.08,-0.36 v -0.36 l 2.36,0.64 0.04,-0.36 z m 6.120005,-1.68 2.48,0.56 v 0.4 c 0,0.16 0.04,0.16 0.08,0.28 -1.24,0 -1.92,0.36 -2.76,0.8 l 0.2,-2.04 z m -6.120005,1.68 -2.36,-0.76 0.08,-1.8 v -0.96 l 2.44,0.52 -0.16,3 z m 8.599995,-1.6 c -0.28,0 -2.32,-0.4 -2.4,-0.56 0,0 0.16,-2.32 0.16,-2.68 l 2.16,0.44 0.12,1.64 -0.04,1.16 z m -12.719995,-2.36 c 0.4,0 0.68,0.16 1.08,0.24 0.8,0.16 0.4,0.08 0.4,0.72 v 2.12 c -0.32,-0.04 -0.68,-0.16 -0.96,-0.28 -0.72,-0.2 -0.52,0.08 -0.52,-0.44 v -2.36 z m 10.719995,-4.2 1.68,0.36 0.28,3.04 -2.16,-0.44 0.2,-2.96 z m -6.399995,5.16 v -0.44 l -2.36,-0.48 0.28,-2.84 2.36,0.52 -0.24,2.88 h 0.28 v 0.36 h -0.32 z m -4.04,-4.2 1.56,0.36 -0.28,2.88 -1.52,-0.36 0.24,-2.88 z m 7.560005,1.4 0.28,-3.08 2.36,0.6 -0.28,3 -2.36,-0.52 z m -0.36,-0.08 0.36,0.08 v 0.36 c 0.4,0 2.32,0.4 2.36,0.64 0.04,0.08 -0.24,2.32 -0.24,2.64 -0.76,0 -1.6,-0.44 -2.28,-0.44 -0.16,0 -0.16,0.2 -0.16,0.36 l 2.44,0.52 -0.24,2.24 h 0.2 c -0.48,0.72 -1.12,1.56 -1.44,2.4 -0.32,0.8 -0.72,2.08 -1.08,2.76 l -0.880001,-0.44 0.600001,-4 h -0.16 l -0.2,-0.12 v -0.36 l -2.280005,-0.68 0.2,-3 2.520005,0.52 v -0.32 h 0.36 l 0.2,-2.8 h -0.28 l -0.28,2.68 -2.440005,-0.44 0.16,-2.88 c -0.32,-0.08 -0.24,0 -0.28,-0.36 h 0.16 l 0.16,0.08 0.4,-3.16 2.440005,0.64 -0.32,3.08 z m 3.16,-5.44 v -0.28 l 0.28,0.08 v 0.28 c 0.96,0.08 1.08,0.08 1.2,1.04 0.04,0.32 0.2,1.76 0.28,1.92 l -1.68,-0.32 v 0.36 h -0.28 v -0.48 l -2.36,-0.56 0.28,-2.48 2.28,0.44 z m 0.24,-0.2 0.2,-2.88 c 0.6,0.08 0.72,2.44 0.84,3.08 l -1.04,-0.2 z m -5.120005,-0.88 2.360005,0.52 -0.32,2.56 -2.400005,-0.6 0.36,-2.48 z m 4.879995,0.8 c -3.28,-0.76 -2,0.04 -2,-3.32 l 2.16,0.44 -0.16,2.88 z m -4.439995,-3.76 c 3.200005,0.76 1.879995,-0.2 1.879995,3.24 l -2.279995,-0.52 0.4,-2.72 z m -2.52,-0.44 2.12,0.36 -0.36,2.68 -2.16,-0.44 0.4,-2.6 z m 7.119995,1.32 v -0.44 l -2.2,-0.4 0.2,-2.6 c 0.32,0.04 0.68,0.12 1.08,0.2 0.64,0.12 0.52,0.04 0.68,0.56 0.28,0.96 0.32,0.88 0.32,2.2 l 0.32,0.4 -0.4,0.08 z m -4.11999,-3.88 1.84,0.36 -0.16,2.64 -2.120001,-0.36 0.440001,-2.64 z m 2.28,-2.2 1.36,2.6 -1.48,-0.24 0.12,-2.36 z m -1.56,-1.56 0.04,-0.08 1.24,1.16 -0.08,0.04 c 0.32,-0.08 0.32,-0.12 0.36,0.28 l -0.24,-0.2 -0.16,2.64 -1.84,-0.36 0.68,-3.48 z m -2.920005,3.04 c 0.52,-1.08 0.32,-3.4 1.92,-3.4 0.319995,0 0.16,0.04 0.520005,0.08 l -0.600005,3.68 -1.84,-0.36 z m -0.36,-0.08 0.36,0.08 v 0.28 l 1.76,0.36 -0.36,2.64 -2.08,-0.36 v 0.16 l -0.12,0.2 -0.16,-0.12 h -0.2 l -0.52,2.6 -1.56,-0.28 v 0.28 c 0.48,0.04 0.96,0.28 1.4,0.28 0.16,0 0,-0.16 0.52,-0.16 v 0.36 l 2.2,0.44 -0.28,2.36 -2.36,-0.56 v 0.4 l 2.28,0.56 -0.32,3.12 -2.4,-0.56 0.36,-3.2 h -0.36 c -0.04,0.76 -0.32,1.72 -0.32,2.44 -0.04,0.76 -0.04,0.68 -0.72,0.52 -0.2,-0.04 -0.88,-0.08 -0.92,-0.32 -0.04,-0.28 0.2,-2.04 0.28,-2.4 0.2,-1.24 0.52,-0.36 1.68,-0.32 l 0.08,-0.28 c -0.24,-0.12 -1.56,-0.32 -1.56,-0.52 0,-0.8 0.36,-1.48 0.36,-2.28 -0.6,0.08 -0.72,2.32 -0.8,2.96 -0.12,0.84 -0.4,2.6 -0.36,3.28 0.04,0.84 -0.24,2.4 -0.24,3.48 0,1.32 -0.08,2.4 -0.08,3.76 h 0.28 v -0.92 l 1.48,0.4 v 0.96 l -3.44,-0.48 h -0.08 c -5.04,0 -8.76,9.72 -8.76,15.36 0,2.279996 0.76,5.359996 2,6.239996 0.72,-1.44 1.28,-3.08 2.04,-4.56 0.76,-1.479996 1.4,-3.079996 2.08,-4.599996 0.32,-0.72 0.68,-1.48 1.04,-2.2 0.4,-0.84 0.76,-1.48 1.84,-1.16 0.92,0.28 1.92,3.2 2.12,4.56 0.52,3.799996 0,9.039996 0.6,12.639996 0.68,4 2.32,6.36 5.36,7.96 0.960005,-0.4 2.479995,-0.56 3.360005,-1.16 0.92,-0.64 1.76,-1.24 2.39999,-2.16 1.24001,-1.8 1.96001,-4.12 1.96001,-7.16 l 0.04,-0.6 -0.31999,-5.6 v -0.28 c 0,-2.72 0.47999,-8.319996 2.8,-8.319996 h 0.08 c 1.43999,0 2.04,0.56 2.63999,1.4 0.56,0.76 1.24,1.44 1.84,2.2 1.16,1.48 2.56,2.88 2.56,5.519996 v 0.6 l 0.36,0.08 c 0.36,-1.6 1.84,-2.84 1.84,-5.159996 v -1.52 c 0,-3.52 -1.43999,-6.24 -2.95999,-8.28 -0.8,-1.08 -1.76001,-1.96 -2.84,-2.8 -0.72001,-0.48 -2.68,-1.88 -3.76,-1.88 l -0.80001,-0.04 -2.28,0.4 c -0.19999,-0.84 0.08,-2 -0.12,-3.12 -0.11999,-0.8 -0.16,-2.48 -0.19999,-3.32 -0.16,-2.08 -0.52,-4.24 -0.88,-6.12 -0.64,-3.28 -2,-8.16 -4.56,-9.4 v 0.28 l -0.40001,-0.12 0.12001,-0.32 -0.800005,-0.08 c -0.92,-0.12 -1.92,0.8 -2.32,1.28 -0.2,0.28 -1.68,1.96 -0.84,2.04 0.16,-0.6 1.28,-2.16 1.76,-2.44 l -0.8,2.68 z m 3.000005,20.36 1.64,0.48 0.2,-0.04 c -0.12,-0.48 -1.4,-0.56 -1.84,-0.8 v 0.36 z m 3.59999,-9.8 0.16001,-2.64 -0.24001,-0.08 -0.2,2.6 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 98.64621,92.525364 0.64001,2.04 1.35999,-4.2 -0.87999,-0.4 c -0.32,0.72 -0.24,2.32 -1.12001,2.56 z m -0.559995,-1.4 -0.32,-0.64 c 0,0.6 0.36,1.8 0.8,1.92 l -0.08,-0.24 c 0.56,-0.16 0.88,-1.76 0.96,-2.44 l -1.6,-0.8 0.24,2.2 z m 2.400005,-5.88 c 0.44,0.2 1.72,0.28 1.84,0.8 l -0.2,0.04 -1.64,-0.52 -0.6,4 0.88,0.48 c 0.36,-0.68 0.75999,-1.96 1.08,-2.76 0.36,-0.84 1,-1.68 1.44,-2.4 h -0.2 l 0.2,-2.28 -2.44,-0.52 -0.36,3.16 z m -0.960005,4.12 0.600005,-3.88 -2.280005,-0.6 0,0.24 0,3.44 z m 0.600005,-4.24 0.44,-3.16 -2.520005,-0.52 -0.2,3 z m 0.72,-6.64 0.32,-3.08 -2.440005,-0.64 -0.36,3.16 z m -5.120005,-4.76 -0.08,0.28 c -1.16,-0.04 -1.48,-0.92 -1.68,0.32 -0.08,0.36 -0.32,2.12 -0.28,2.4 0.04,0.2 0.72,0.24 0.96,0.32 0.68,0.16 0.68,0.24 0.68,-0.52 0,-0.76 0.28,-1.72 0.36,-2.44 h 0.36 l -0.36,3.2 2.36,0.56 0.36,-3.16 -2.32,-0.52 v -0.4 l 2.32,0.56 0.28,-2.44 -2.16,-0.44 c -0.28,0.56 0,2.28 -0.8,2.28 z m 8.279995,-0.96 0.16,-2.88 -2.2,-0.44 c 0,3.36 -1.28,2.56 2.04,3.32 z m -6.159995,11.68 -0.36,-0.08 v 0.36 l -2.36,-0.64 v 0.36 c 0,0.24 -0.04,0.2 -0.08,0.36 0.4,0.72 1.6,2.64 1.6,3.52 h 0.2 l -0.12,-0.36 0.8,0.36 v -3.52 h 0.36 l -0.04,-0.36 0,0 z m -0.28,5.44 0.04,-0.56 c 0,-0.52 -0.2,-0.76 -0.64,-0.88 l 0.6,1.44 z m 2.560005,-4.76 0,0.36 0.2,0.08 0.16,0 0,-0.32 z m 3.32,-0.44 c 0.8,-0.4 1.51999,-0.8 2.76,-0.8 -0.08,-0.08 -0.12001,-0.08 -0.12001,-0.24 v -0.4 l -2.47999,-0.56 -0.16,2 z m -8.320005,-1.08 2.36,0.76 0.2,-3 -2.48,-0.52 0.04,0.96 z m -1.76,-0.84 c 0,0.52 -0.2,0.2 0.52,0.44 0.28,0.12 0.64,0.24 1,0.28 v -2.12 c 0,-0.68 0.4,-0.56 -0.4,-0.72 -0.44,-0.08 -0.68,-0.24 -1.12,-0.24 v 2.36 z m 7.480005,-3.96 h 0.28 l -0.2,2.8 h -0.36 v 0.36 l 0.28,0.08 c 0,-0.16 0,-0.36 0.15999,-0.36 0.68,0 1.56,0.44 2.28001,0.44 0,-0.32 0.27999,-2.52 0.23999,-2.64 -0.04,-0.16 -1.95999,-0.56 -2.31999,-0.56 v -0.36 l -0.36,-0.08 v 0.32 z m 3.31999,-8.92 0.40001,-0.04 -0.32,-0.4 c 0,-1.32 -0.04,-1.24 -0.32,-2.2 -0.16,-0.56 -0.04,-0.48 -0.68,-0.6 -0.36,-0.08 -0.76,-0.16 -1.08,-0.2 l -0.2,2.6 2.19999,0.4 v 0.44 z m -2.43999,-0.88 0.16,-2.64 -1.84,-0.36 -0.440005,2.64 z m 4.35999,13.76 0.04,-1.16 -0.12,-1.64 -2.20001,-0.44 c 0,0.36 -0.15999,2.68 -0.15999,2.68 0.12,0.16 2.16,0.56 2.43999,0.56 z m -7.799995,-4.56 -0.16,2.88 2.440005,0.44 0.28,-2.72 z m -0.24,3.16 0,-0.36 -0.32,0 0.2,-2.88 -2.32,-0.52 -0.28,2.84 2.36,0.48 0,0.44 z m -3.12,-0.96 0.28,-2.88 -1.56,-0.36 -0.24,2.88 z m 11.120005,-0.8 -0.28,-3.04 -1.68001,-0.36 -0.19999,2.96 z m -2.04001,-6.56 -2.27999,-0.44 -0.28001,2.48 2.36,0.56 z m -0.43999,6.04 0.23999,-3 -2.36,-0.6 -0.23999,3.08 z m -2.4,-4.04 0.27999,-2.56 -2.319995,-0.52 -0.32,2.48 z m -2.880005,3.16 0.08,-0.28 -0.16,-0.08 h -0.16 c 0,0.36 -0.08,0.28 0.24,0.36 z m 5.799995,-2.44 1.68001,0.32 c -0.08,-0.16 -0.24,-1.6 -0.28,-1.92 -0.12001,-0.96 -0.24001,-0.96 -1.24,-1.04 l -0.16001,2.64 z m 0,0.32 0,-0.32 -0.28,-0.12 0,0.44 z m 0.16001,-2.96 0,-0.28 -0.24,-0.08 0,0.28 z m 0,-0.28 1.04,0.16 c -0.12,-0.6 -0.24,-3 -0.84001,-3.04 l -0.19999,2.88 z m -5.080005,-1.12 2.279995,0.52 c 0,-3.44 1.28,-2.48 -1.879995,-3.24 l -0.4,2.72 z m -2.52,-0.56 2.16,0.44 0.36,-2.68 -2.12,-0.36 z m 1.12,-5.6 -0.6,2.64 2.08,0.36 0.36,-2.64 -1.76,-0.36 0,-0.28 -0.36,-0.08 -0.08,0.28 z m -0.6,2.8 0,-0.16 -0.36,0 -0.08,0.24 0.16,0 0.16,0.12 z m 0.24,-2.88 -1.04,-0.2 -0.96,2.64 1.4,0.28 z m 4.800005,0.68 1.48,0.24 -1.36,-2.6 z m -2.12001,-0.44 1.84001,0.36 0.15999,-2.64 0.24001,0.2 c -0.04,-0.4 -0.04,-0.32 -0.36,-0.28 l 0.08,-0.08 -1.2,-1.12 -0.08,0.08 -0.68001,3.48 z m -2.239995,-0.44 1.84,0.36 0.640005,-3.68 c -0.360005,-0.04 -0.2,-0.08 -0.560005,-0.08 -1.6,0 -1.4,2.32 -1.92,3.4 z" />';
	icons['GROUND.INSTALLATION.ICON.ANIMAL FEEDLOT'] = '<path stroke="none" d="m 121.6,107.1422 -0.4,-2.28 -0.24,-2.04 h 16.32 l -1.68,13.2 h -12.96 v -0.64 l -1.04,-8.24 z m 16.08,4.32 0.4,-2.28 0.92,-6.16 -0.08,-1.64 h -19.6 l 1.36,10.72 0.32,0.6 0.48,4.32 -0.08,0.64 h 15.68 v -1.64 l 0.6,-4.56 z M 123.04,82.582196 c -3.28,-0.76 -4.56,0.36 -6.8,1.88 h -1.44 c -0.32,0.44 -0.6,1.24 -1.24,1.24 h -1.04 c -2.2,0 -3.92,-1.84 -5.76,-1.84 h -0.64 c -0.88,0 -2.08,0.84 -3.92,0.84 -5.12,0 -3.92,0.24 -8,1.48 -1.96,0.6 -6.24,0.8 -8.88,0.8 h -5.16 c -2.8,0 -4.96,-0.64 -7.2,-0.64 -2.6,0 -4.68,0.2 -7.44,0.2 -0.48,0 -0.52,-0.08 -0.84,-0.2 -2.36,1.24 -3.12,4.24 -3.08,7.8 0,3.56 -0.6,6.320004 -0.6,10.120004 v 0.2 c 0,0.56 0.08,0.56 0.2,1.04 l 1,-0.32 0.04,-0.52 h 0.4 l 0.24,-12.160004 h 0.16 c 0,2 0.12,4.52 0.6,6 0.44,1.2 1.68,3.760004 1.68,4.920004 v 0.2 l -1.64,13.24 h 3.68 c 0,-1.4 -0.4,-1.12 -0.4,-2.08 v -2.08 c 0,-1.4 1.04,-4.24 2.28,-4.32 0.36,1.52 3.28,3.72 3.28,6.8 v 0.64 c 0,0.56 -0.08,0.56 -0.2,1.04 0.44,-0.12 0.48,-0.24 1.04,-0.24 1.16,0 3.52,0.68 3.52,-0.4 0,-0.28 -1.92,-3.16 -2.24,-3.52 -0.4,-0.48 -1.28,-3.64 -1.28,-4.32 v -0.2 c 0,-0.2 1.24,-2.32 1.24,-4.76 4.04,2.16 3.52,2.68 9.88,2.68 2.16,0 4.2,0.48 6,0.44 1.04,-0.04 3.28,-1.36 4.32,-1.88 0,1.2 0.36,2.36 0.2,3.28 l -1.2,8.04 c 0.96,0.28 1.6,0.64 2.84,0.64 h 0.64 -0.24 l 0.72,-11.32 c 0.6,0.44 2.76,7.08 2.6,8.44 l -0.28,2.28 c 0.76,0.36 1.48,0.6 2.56,0.6 h 1.04 l -1.16,-7.44 -0.12,-0.8 c 0,-0.92 1.64,-0.72 2.48,-1.24 0.56,-0.32 1.36,-1.16 1.8,-1.72 1.08,-1.48 1.96,-2.68 3.04,-4.16 3.92,-5.400004 3.52,-2.440004 10.24,-4.000004 v -0.64 h 1.64 c 1,0 1.84,-0.84 1.84,-1.84 v -0.4 c 0,-2.4 -2.48,-2.52 -2.48,-5.56 l -3.28,-3.36 5.36,-2.88 z m 14.64,28.880004 c 0.4,-0.36 0.4,-1.48 0.4,-2.28 l -0.4,2.28 z m -16.08,-4.32 c 0,-0.8 0,-1.92 -0.4,-2.28 l 0.4,2.28 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 121.2,104.8622 c 0.4,0.36 0.4,1.48 0.4,2.28 l 1.04,8.24 v 0.6 h 12.96 l 1.68,-13.2 h -16.32 l 0.24,2.08 z" />';
	icons['GROUND.INSTALLATION.ICON.FARM/RANCH'] = '<path stroke="none" d="m 119.9,118.96 v -0.2 c 0,-2.04 1.48,-3.72 3.52,-3.72 h 0.44 c 2.24,0 3.72,1.64 3.72,3.96 v 0.64 c 0,1.2 -2.08,2.84 -3.72,2.84 h -0.44 c -1.92,0 -3.52,-1.6 -3.52,-3.52 z m -52,-10.72 c 1.32,-1.96 1.08,-2.72 3.24,-4.44 1.28,-1 3.32,-1.92 5.52,-1.92 h 0.64 c 4.68,0 9,4.08 9,8.76 v 1.08 c 0,4.96 -4,9.2 -8.76,9.2 H 76.9 c -5.36,0 -9.44,-4.24 -9.44,-9.64 0,-1.4 0.44,-1.64 0.44,-3.04 l 0,0 z m 7.88,-20.2 c -0.84,0 -1.52,-4.44 -1.76,-5.28 -0.24,-1 -1.32,-4.6 -1.32,-5.48 h 24.12 c 0.52,0 1.32,-0.8 1.32,-1.32 v -2.2 c 0,-0.72 -0.8,-1.08 -1.52,-1.08 h -31.8 c -0.72,0 -1.52,0.4 -1.52,1.08 v 2.2 c 0,0.52 0.8,1.32 1.32,1.32 h 3.48 l 2.64,16 -6.8,2.48 2.84,3.44 c -1,1.32 -2.28,2.12 -3.6,4.16 -0.44,0.8 -1.88,4.4 -1.88,5.52 v 2.2 c 0,5.36 1.64,8.76 4.32,11.48 2.32,2.32 6.48,4.76 11.04,4.76 h 0.44 c 8.8,0 15.8,-7.36 15.8,-16 h 13.4 c 0.56,0 1.92,1.44 2.4,1.76 h 8.56 c -1.12,1.64 -2.2,2.88 -2.2,5.68 0,4.64 3.88,8.56 8.56,8.56 4.36,0 8.76,-3.84 8.76,-7.88 v -2 c 0,-1.24 -1.48,-3.44 -1.96,-4.4 h 7.24 l 1.04,-4.6 h -7.16 v -0.64 l 1.2,-8.12 -0.12,-3.32 c 0,-0.64 -1.72,-2.08 -2.2,-2.4 l -16,-0.52 V 78.16 c 0,-0.52 -0.36,-0.88 -0.88,-0.88 -0.52,0 -0.88,0.36 -0.88,0.88 v 15.36 c -2.16,-0.2 -5.96,-0.44 -8.12,-0.44 -1.32,0 -2.92,0.08 -4.16,0 -2.12,-0.12 -2.04,-1.32 -2.88,-1.32 h -4.6 l 2,12.28 H 91.14 V 98.56 C 91.14,97.8 87.06,94.4 86.1,94.4 H 78.66 V 89.8 L 77.5,88.08 75.78,88.04 z M 88.06,92 c 0,0.52 0.08,0.24 0.2,0.88 h 0.64 c 0.88,0 8.52,-6.36 10.08,-6.8 V 85.4 c 0,-0.52 -0.16,-0.64 -0.64,-0.64 h -0.4 C 97.54,84.72 88.06,91.6 88.06,92 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 119.9,118.96 c 0,1.92 1.6,3.52 3.52,3.52 h 0.44 c 1.64,0 3.72,-1.64 3.72,-2.84 v -0.68 c 0,-2.32 -1.48,-3.96 -3.72,-3.96 h -0.44 c -2.04,0 -3.52,1.72 -3.52,3.72 v 0.24 z m -52,-10.72 c 0,1.4 -0.44,1.68 -0.44,3.08 0,5.4 4.08,9.64 9.44,9.64 h 0.64 c 4.76,0 8.76,-4.28 8.76,-9.2 v -1.12 c 0,-4.68 -4.32,-8.76 -9,-8.76 h -0.64 c -2.24,0 -4.28,0.92 -5.52,1.92 -2.16,1.68 -1.92,2.44 -3.24,4.44 z" />';
	icons['GROUND.INSTALLATION.ICON.GRAIN STORAGE'] = '<path stroke="none" d="m 122.76524,69.609383 c 0.44009,0.148965 0.86665,0.467194 1.27969,0.954687 0.41978,0.487506 0.83957,1.157818 1.25937,2.010938 l 2.08203,4.14375 -2.2039,0 -1.93985,-3.889844 c -0.50105,-1.01562 -0.98855,-1.689317 -1.4625,-2.021094 -0.46719,-0.331764 -1.10704,-0.497649 -1.91953,-0.497656 l -2.23437,0 0,6.408594 -2.05157,0 0,-15.163281 4.63125,0 c 1.73333,1.5e-5 3.02656,0.362254 3.87969,1.086719 0.85311,0.724492 1.27968,1.817981 1.27969,3.280468 -1e-5,0.954698 -0.22345,1.746884 -0.67031,2.376563 -0.44012,0.629695 -1.08335,1.066413 -1.92969,1.310156 m -5.13906,-6.367969 0,5.382813 2.57968,0 c 0.98854,8e-6 1.73333,-0.226815 2.23438,-0.680469 0.5078,-0.460407 0.76171,-1.134105 0.76172,-2.021094 -1e-5,-0.886967 -0.25392,-1.553894 -0.76172,-2.000781 -0.50105,-0.453632 -1.24584,-0.680455 -2.23438,-0.680469 l -2.57968,0 m -12.26875,-0.294531 c -1.48959,1.4e-5 -2.67449,0.555222 -3.55469,1.665625 -0.87344,1.110428 -1.31016,2.623707 -1.31016,4.539844 0,1.90938 0.43672,3.419275 1.31016,4.529687 0.8802,1.110419 2.0651,1.665626 3.55469,1.665625 1.48957,1e-6 2.66769,-0.555206 3.53437,-1.665625 0.87343,-1.110412 1.31014,-2.620307 1.31016,-4.529687 -2e-5,-1.916137 -0.43673,-3.429416 -1.31016,-4.539844 -0.86668,-1.110403 -2.0448,-1.665611 -3.53437,-1.665625 m 0,-1.665625 c 2.12603,1.6e-5 3.82551,0.714338 5.09843,2.142969 1.27291,1.421887 1.90936,3.33126 1.90938,5.728125 -2e-5,2.390109 -0.63647,4.299482 -1.90938,5.728124 -1.27292,1.421876 -2.9724,2.132813 -5.09843,2.132813 -2.13282,0 -3.83907,-0.710937 -5.11875,-2.132813 -1.272922,-1.421871 -1.909379,-3.331244 -1.909378,-5.728124 -10e-7,-2.396865 0.636456,-4.306238 1.909378,-5.728125 1.27968,-1.428631 2.98593,-2.142953 5.11875,-2.142969 m -20.972659,0.274219 12.827343,0 0,1.726562 -5.382812,0 0,13.436719 -2.061719,0 0,-13.436719 -5.382812,0 0,-1.726562 m -2.010937,0.497656 0,2.000781 c -0.778656,-0.372382 -1.513291,-0.649986 -2.203906,-0.832812 -0.690634,-0.182799 -1.35756,-0.274205 -2.000782,-0.274219 -1.117193,1.4e-5 -1.980473,0.21668 -2.589843,0.65 -0.602608,0.433346 -0.90391,1.049491 -0.903906,1.848438 -4e-6,0.670323 0.199736,1.178135 0.599218,1.523437 0.406246,0.338551 1.171349,0.61277 2.295313,0.822656 l 1.239062,0.253906 c 1.530199,0.291155 2.657542,0.805737 3.382031,1.54375 0.731239,0.731257 1.096863,1.713027 1.096875,2.945313 -1.2e-5,1.469273 -0.494282,2.583074 -1.482812,3.341406 -0.981781,0.758333 -2.423967,1.1375 -4.326563,1.1375 -0.717713,0 -1.482817,-0.08125 -2.295312,-0.24375 -0.805732,-0.1625 -1.641929,-0.402864 -2.508594,-0.721094 l 0,-2.1125 c 0.832811,0.46719 1.648695,0.819273 2.447657,1.05625 0.798953,0.236981 1.584369,0.35547 2.356249,0.355469 1.171347,1e-6 2.075253,-0.230207 2.711719,-0.690625 0.636449,-0.460414 0.954678,-1.117184 0.954688,-1.970312 -10e-6,-0.744787 -0.230218,-1.327078 -0.690625,-1.746875 -0.453655,-0.419786 -1.201831,-0.734629 -2.244532,-0.944532 l -1.249218,-0.24375 c -1.530213,-0.30468 -2.637243,-0.782023 -3.321094,-1.432031 -0.683856,-0.649991 -1.025782,-1.553896 -1.025781,-2.711718 -10e-7,-1.340613 0.470571,-2.396862 1.411719,-3.16875 0.947913,-0.77186 2.251297,-1.157797 3.910156,-1.157813 0.71093,1.6e-5 1.435408,0.06434 2.173437,0.192969 0.738011,0.128661 1.492958,0.321629 2.264844,0.578906 m 24.370306,48.089627 -0.224,2.368 h 0.416 l -1.664,3.03999 -1.024,-1.696 -0.096,2.04801 0.544,0.64 -1.184,2.976 -1.536,-3.04 0.384,3.58399 0.8,0.22401 -3.136,9.69599 -0.511997,-4.15999 0.096,-1.824 c 0,-1.50401 0.767997,-4.70401 1.023997,-6.336 0.256,-1.664 1.344,-4.48 1.376,-5.952 0.576,0.128 0.352,0.192 0.8,0.192 0.352,0 2.272,-1.504 2.592,-1.79201 l -3.04,0.57601 0.8,-2.72 c 0.576,0.128 0.352,0.192 0.8,0.192 0.352,0 2.56,-1.66401 2.784,-1.984 l -2.976,0.83199 0.736,-2.432 c 1.28,0.032 2.112,-0.768 2.816,-1.37599 l -2.368,0.384 0.8,-1.952 c 1.12,-0.032 1.536,-0.92801 1.76,-1.792005 l -1.344,0.672005 2.336,-6.144005 -0.768,-0.096 -2.08,5.919995 -0.32,0.032 -0.48,-2.144005 -0.096,-0.032 c 0,1.536 -0.384,1.568 -0.384,2.368005 0,0.54399 0.16,0.48 0.608,0.608 l -0.928,2.14399 -0.992,-1.40799 c -0.096,1.6 -0.352,1.888 0.704,2.43199 l -0.8,2.36801 -1.728,-2.208 0.448,2.81599 0.64,0.48001 -0.544,2.688 -1.504,-1.856 0.16,2.43199 0.896,0.48001 c 0.032,0.384 -1.024,4.64 -1.248,5.95199 -0.447997,2.30401 -0.895997,3.488 -0.895997,6.272 l -1.152,-3.58399 0.608,-0.768 -0.032,-1.984 -1.152,1.21599 -0.832,-2.816 0.608,-0.768 -0.032,-1.98399 -1.088,1.248 -0.672,-1.664 c 1.024,-0.544 0.992,-1.63201 0.992,-3.16801 l -1.312,2.11201 c -0.736,-0.16001 -1.056,-1.408 -1.28,-2.304 0.288,-0.416 0.608,-0.512 0.608,-0.992 v -1.6 h -0.416 l -0.672,1.75999 c -0.192,-0.15999 -0.704,-0.73599 -0.704,-1.152 0,-0.384 0.608,-0.288 0.608,-0.99199 v -0.19201 c 0,-1.11999 -0.384,-1.08799 -0.384,-2.36799 l -0.704,2.336 -0.32,0.032 -2.752,-5.85599 -0.384,0.19199 2.496,5.664 -1.312,-0.67199 0.992,1.85599 0.96,0.032 0.608,0.99199 -2.56,-0.44799 c 0.416,0.384 1.696,1.44 2.368,1.44 0.064,0 0.352,-0.128 0.608,-0.192 l 1.024,2.17599 -3.2,-0.60799 c 1.088,0.96 2.048,1.728 3.552,1.6 l 1.12,2.71999 -2.88,-0.41599 c 0.672,1.024 1.728,1.312 2.976,1.536 0.352,0.064 1.12,2.75199 1.152,3.456 l -2.976,-0.608 2.176,1.59999 h 0.992 c 1.184,2.27201 2.368,11.904 2.368,15.84 h 1.375997 l -0.224,-2.176 0.032,-0.992 c 0,-4.032 2.912,-9.312 3.168,-12.288 0.8,0.064 0.512,0.22401 1.024,0.22401 0.224,0 2.912,-1.216 3.168,-1.37601 l -3.584,0.32001 1.152,-3.136 0.832,0.416 3.008,-1.34401 -3.2,0.16001 1.376,-2.784 c 0.448,0.096 0.448,0.19199 0.992,0.19199 0.32,0 2.08,-0.992 2.368,-1.184 l -2.752,0.19201 1.408,-1.952 c 1.472,0.096 1.536,-0.384 2.368,-1.60001 l -1.376,0.44801 c 0.512,-1.056 1.184,-2.176 1.792,-3.2 0.384,-0.64 2.048,-2.65601 0.768,-3.008 l 0.192,0.096 -3.424,5.76001 -0.384,-2.27201 h -0.16 c 0,1.408 -0.608,1.696 -0.608,2.176 0,0.32 0.256,0.73601 0.384,0.99201 l -1.472,2.048 -0.672,-1.856 z m -25.375997,13.47199 c 0,-3.74399 0.128,-9.05599 0.704,-12.35199 0.352,-2.016 0.096,-4 0.608,-5.952 0.448,-1.696 0.352,-4.192 0.8,-5.760005 2.816,-10.08 0.992,-11.808 14.336,-11.808 h 4.351997 c 11.648,0 12.64,1.216 14.24,11.328 1.248,7.648005 2.016,14.560005 2.016,23.551995 v 8.32 l -0.416,3.584 c -1.088,1.632 -2.144,3.36 -4.928,3.36 H 86.712143 c -5.408,0 -5.344,-6.4 -5.344,-11.90399 v -2.36801 z m -5.76,-32.511995 c 2.144,-0.576 0.448,-1.28 4.352,-0.992 2.4,0.16 3.008,0.32 4.96,0.8 -0.704,1.088 -4.576,2.976 -6.528,2.976 h -0.384 c -0.928,0 -2.368,-1.184 -2.368,-1.984 v -0.8 h -0.032 z m 43.199997,-1.472 c 2.208,-0.224 4.768,0.864 4.768,3.072 v 0.608 c 0,0.608 -0.576,0.8 -1.184,0.8 h -0.608 c -1.792,0 -6.208,-2.688 -6.944,-3.872 l 3.968,-0.608 z m -36.639997,-6.656 c 0,-0.96 0.992,-2.176 1.792,-2.176 h 0.608 c 0.576,0 1.376,1.568 1.376,2.176 v 4.16 c 0,1.28 -0.384,1.504 -0.384,2.784 -0.96,-0.256 -3.36,-4.256 -3.36,-5.536 v -1.408 h -0.032 z m 31.711997,2.784 c 0,-2.752 -0.032,-5.152 2.784,-5.152 h 0.608 c 0.64,0 0.992,0.704 0.992,1.376 0,2.016 -3.008,6.848 -4.352,7.328 v -3.552 h -0.032 z m 1.376,3.776 c 0.48,-1.824 3.776,-4.992 3.776,-7.136 v -1.376 c -0.64,-0.256 -0.672,-1.184 -1.6,-1.184 h -0.576 c -2.56,0 -3.776,2.016 -3.776,4.544 v 4.16 c -2.016,-0.544 -2.304,-0.992 -5.152,-1.184 -1.984,-0.16 -3.68,-0.416 -5.952,-0.416 h -3.551997 c -4.8,0 -8.896,0.288 -12.096,1.984 0.16,-0.704 0.384,-0.928 0.384,-1.792 v -3.36 c 0,-1.44 -0.992,-3.776 -2.176,-3.776 h -0.8 c -0.8,0 -2.592,1.856 -2.592,2.976 0,1.952 2.112,5.472 2.976,6.752 l -5.728,-0.48 c -1.216,0 -3.36,1.12 -3.36,2.08 v 0.608 c 0,1.344 1.696,2.784 2.976,2.784 h 0.192 c 2.912,0 4.544,-1.952 6.336,-2.368 -1.856,3.52 -3.776,22.015995 -3.776,28.128005 v 5.95199 c 0,5.92 0.288,12.288 6.144,12.288 h 26.143997 c 4.096,0 6.144,-3.808 6.144,-7.936 v -10.52799 c 0,-2.27201 -0.16,-5.47201 -0.416,-7.712 -0.224,-1.79201 -0.768,-5.728 -0.768,-7.36 0,-2.592 -0.736,-4.73601 -0.992,-7.104005 -0.224,-2.08 -1.312,-4.32 -1.76,-6.176 1.152,0.608 4.896,2.976 6.144,2.976 h 1.184 c 0.992,0 1.792,-0.8 1.792,-1.792 v -0.192 c 0,-2.176 -1.472,-3.776 -3.776,-3.776 h -2.56 l -2.784,0.416 z m -28.127997,0.576 c 0.512,1.888 8.864,3.168 11.904,3.168 h 0.991997 c 3.104,0 12.512,-1.376 12.672,-3.552 -4.064,-0.96 -6.528,-1.792 -11.904,-1.792 h -1.375997 c -2.4,0 -4.384,0.352 -6.528,0.608 -2.88,0.352 -3.776,1.056 -5.76,1.568 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 105.33614,110.14276 c -0.32,0.256 -2.24,1.79199 -2.592,1.79199 -0.448,0 -0.224,-0.064 -0.8,-0.19199 0,1.47199 -1.088,4.288 -1.344,5.952 -0.256,1.632 -0.991997,4.832 -0.991997,6.304 l -0.096,1.792 0.511997,4.15999 3.136,-9.69599 -0.8,-0.19201 -0.384,-3.58399 1.536,3.04 1.216,-2.976 -0.544,-0.64 0.096,-2.04801 1.024,1.696 1.664,-3.03999 h -0.416 l 0.224,-2.368 -0.288,-1.18401 -1.152,1.18401 z m 0,0 1.152,-1.18401 0.256,1.18401 0.672,1.856 1.504,-2.048 c -0.128,-0.256 -0.416,-0.672 -0.416,-0.99201 0,-0.47999 0.608,-0.768 0.608,-2.176 h 0.16 l 0.384,2.27201 3.392,-5.728 -0.16,-0.128 c 1.312,0.35199 -0.384,2.368 -0.768,3.008 -0.608,1.024 -1.28,2.144 -1.792,3.2 l 1.376,-0.44801 c -0.832,1.21601 -0.896,1.69601 -2.368,1.60001 l -1.408,1.952 2.784,-0.16 c -0.32,0.192 -2.048,1.152 -2.4,1.152 -0.544,0 -0.544,-0.096 -0.992,-0.192 l -1.376,2.784 3.2,-0.16001 -3.008,1.34401 -0.832,-0.416 -1.152,3.136 3.584,-0.352 c -0.256,0.15999 -2.944,1.408 -3.168,1.408 -0.512,0 -0.192,-0.128 -0.992,-0.192 -0.256,2.94399 -3.168,8.22399 -3.168,12.25599 l -0.064,0.992 0.256,2.176 h -1.407997 c 0,-3.968 -1.184,-13.59999 -2.368,-15.84 h -0.992 l -2.176,-1.59999 2.976,0.608 c 0,-0.70401 -0.768,-3.39201 -1.152,-3.456 -1.28,-0.224 -2.304,-0.512 -3.008,-1.536 l 2.88,0.41599 -1.088,-2.75199 c -1.536,0.128 -2.496,-0.64 -3.552,-1.6 l 3.2,0.60799 -1.056,-2.176 c -0.224,0.064 -0.544,0.19201 -0.576,0.19201 -0.672,0 -1.952,-1.024 -2.368,-1.44 l 2.56,0.448 -0.608,-0.99201 h -0.96 l -0.992,-1.85599 1.312,0.67199 -2.496,-5.664 0.384,-0.19199 2.752,5.85599 0.32,-0.032 0.672,-2.368 c 0,1.28 0.384,1.248 0.384,2.368 v 0.19199 c 0,0.704 -0.608,0.608 -0.608,0.992 0,0.416 0.512,0.99201 0.704,1.15201 l 0.672,-1.76 h 0.384 v 1.6 c 0,0.48 -0.32,0.57599 -0.608,0.992 0.192,0.896 0.512,2.144 1.28,2.304 l 1.312,-2.112 c 0,1.536 0.032,2.62399 -0.992,3.168 l 0.672,1.664 1.12,-1.248 0.032,2.01599 -0.576,0.768 0.832,2.816 1.152,-1.21599 0.032,2.01599 -0.608,0.73601 1.184,3.58399 c 0,-2.784 0.448,-3.96799 0.863997,-6.23999 0.256,-1.28 1.28,-5.56801 1.248,-5.95201 l -0.896,-0.47999 -0.16,-2.464 1.504,1.856 0.544,-2.72 -0.64,-0.48001 -0.448,-2.78399 1.696,2.208 0.8,-2.36801 c -1.024,-0.54399 -0.768,-0.83199 -0.672,-2.43199 l 0.992,1.40799 0.896,-2.14399 c -0.448,-0.128 -0.608,-0.032 -0.608,-0.608 0,-0.800005 0.384,-0.864005 0.384,-2.368005 l 0.128,0.032 0.48,2.144005 0.32,-0.032 2.08,-5.919995 0.768,0.096 -2.336,6.144005 1.344,-0.672005 c -0.224,0.863995 -0.64,1.759995 -1.76,1.792005 l -0.8,1.952 2.368,-0.384 c -0.704,0.60799 -1.536,1.408 -2.816,1.37599 l -0.736,2.432 2.976,-0.79999 c -0.224,0.32 -2.4,1.98399 -2.784,1.98399 -0.448,0 -0.224,-0.064 -0.8,-0.19199 l -0.8,2.688 2.976,-0.544 z M 87.128143,90.110755 c 2.016,-0.544 2.912,-1.248 5.76,-1.568 2.144,-0.256 4.096,-0.608 6.528,-0.608 h 1.375997 c 5.376,0 7.808,0.832 11.904,1.792 -0.192,2.208 -9.6,3.584 -12.703997,3.584 h -0.992 c -3.04,0 -11.392,-1.28 -11.872,-3.2 z m -5.76,33.503995 v 2.368 c 0,5.504 -0.064,11.904 5.344,11.904 h 26.367997 c 2.784,0 3.84,-1.728 4.928,-3.36 l 0.416,-3.584 v -8.32 c 0,-8.99199 -0.768,-15.90399 -2.016,-23.551995 -1.6,-10.112 -2.592,-11.328 -14.24,-11.328 h -4.351997 c -13.344,0 -11.552,1.728 -14.336,11.808 -0.448,1.568005 -0.352,4.032005 -0.8,5.760005 -0.512,1.952 -0.224,3.936 -0.608,5.952 -0.576,3.296 -0.704,8.608 -0.704,12.35199 z M 114.84014,90.238755 c 0.736,1.184 5.152,3.872 6.944,3.872 h 0.608 c 0.608,0 1.184,-0.192 1.184,-0.8 v -0.608 c 0,-2.208 -2.56,-3.296 -4.768,-3.072 l -3.968,0.608 0,0 z m -39.231997,0.864 v 0.8 c 0,0.8 1.44,1.984 2.368,1.984 h 0.384 c 1.952,0 5.824,-1.888 6.528,-2.976 -1.952,-0.448 -2.56,-0.608 -4.96,-0.8 -3.84,-0.256 -2.144,0.416 -4.32,0.992 z m 38.271997,-5.344 v 3.552 c 1.344,-0.48 4.352,-5.312 4.352,-7.296 0,-0.672 -0.352,-1.376 -0.992,-1.376 h -0.608 c -2.816,-0.032 -2.752,2.368 -2.752,5.12 z m -31.711997,-2.784 v 1.376 c 0,1.312 2.4,5.28 3.36,5.536 0,-1.28 0.384,-1.504 0.384,-2.784 v -4.16 c 0,-0.608 -0.832,-2.176 -1.376,-2.176 h -0.608 c -0.768,0.032 -1.76,1.28 -1.76,2.208 z" />';
	icons['GROUND.INSTALLATION.ICON.ATM'] = '<path stroke="none" d="m 73.58,116.3 c 5.08,-0.12 15.8,-6.6 17,-6.6 0.4,0 7.36,3.8 8.88,4.16 -0.4,0.6 -5.08,4.6 -6.2,5.72 -1.24,1.2 -4.72,5.8 -5.52,6.36 -1.56,-0.84 -13.96,-8.88 -14.16,-9.64 z m -15.12,-6.2 11.88,-2.48 11.12,5.64 -9.64,3.04 16.2,10.68 -0.04,-0.2 6.36,-7.48 26.88,12.72 20.32,-46.84 -50.2,-17.2 c -0.56,2.2 -5.24,9.12 -6.52,11.8 -0.8,1.76 -2.28,4.4 -3.28,5.96 -1.2,1.76 -2.16,4.08 -3.28,5.96 -1.16,1.96 -2.12,3.84 -3.28,5.8 -1.16,1.88 -2.12,4.24 -3.32,5.96 -2.44,3.64 -0.24,2.68 -5.52,3.72 -2.6,0.52 -5.2,0.96 -7.68,1.56 m 62,21.48 -25.2,-11.84 4.76,-4 7.28,3.48 1.2,-2.36 -23.88,-11.68 v 0.24 l -1.04,2.24 6.04,2.88 -6.24,3.36 -11.84,-5.8 -0.2,0.04 20.68,-37.04 0.2,0.12 47.4,16.12 h 0.24 l -19.4,44.24 z m 7.84,-31.32 1.12,-2 -5.76,-2.32 -0.8,2.28 z m -2.72,5.2 1.2,-1.92 -5.6,-2.28 -0.84,2.2 z m -22.04,-7.28 c 0.56,0.36 2.12,1.4 2.12,2.12 v 2.44 c 0,0.84 -1.68,1.52 -2.64,1.52 h -0.2 c -0.8,0 -1.04,-0.24 -1.72,-0.4 l 2.44,-5.68 z m -3.36,-6.4 c 0,-2.16 1.08,-2.84 3.2,-2.84 h 0.2 c 0.68,0 1.04,0.16 1.52,0.36 l -2.16,5.08 c -0.92,-0.04 -2.76,-1.24 -2.76,-2.4 v -0.2 z m 5.64,-4.16 c -0.28,-0.12 -1.2,-0.52 -1.64,-0.52 h -1.92 c -0.68,0 -2.48,0.56 -2.92,0.88 -0.32,0.2 -1.4,2.12 -1.4,2.48 v 1.68 c 0,2.12 3.76,4.2 3.76,4.92 0,0.36 -2.2,4.6 -2.44,5.68 -0.64,-0.32 -2.48,-1.84 -2.48,-2.64 v -0.56 c 0,-0.84 0.56,-1.36 0.76,-2.08 -0.92,-0.2 -2,-1.12 -2.4,-1.2 -0.36,-0.12 -1,1.72 -1,2.32 v 0.36 c 0,2.72 4.16,5.4 4.16,5.68 0,0.6 -0.4,1.44 -0.52,2 l 1.68,0.8 0.56,-1.68 c 1.36,0.04 2,0.76 3.6,0.76 h 0.56 c 1.4,0 2.64,-0.52 3.2,-1.32 0.32,-0.44 1.52,-2.36 1.52,-3.04 v -0.36 c 0,-2.56 -2.76,-4.8 -4.36,-5.88 l 2.48,-5.64 h 0.36 c 0.44,1.2 1.52,0.64 1.52,3.56 l 2.84,1.16 v -1.68 c 0,-2.04 -2.04,-4.12 -3.84,-4.56 l 0.84,-2.08 -2.12,-0.52 -0.8,1.48 z m 13,18.4 -0.88,2 5.4,2.2 -0.04,-0.16 1.24,-1.84 z m -22.4,-25.2 26.08,9.48 -11,24.12 -26.68,-12.84 11.6,-20.76 z m -12.48,21.16 27.76,13.4 11.68,-25.68 c -0.96,-0.08 -11.76,-4.16 -13.44,-4.84 -1.2,-0.48 -13.32,-4.96 -13.52,-4.96 -0.88,0 -5.44,9.48 -6.36,10.84 -0.84,1.28 -5.88,10.28 -6.12,11.24 z m 31.72,11.16 5.44,2.2 -0.08,-0.24 1.28,-1.8 c -1.08,-0.24 -4.96,-2.24 -5.48,-2.24 -0.4,0 -1.12,1.56 -1.16,2.08 z m -25.84,0.56 4.28,2.88 -5.96,5.84 -6.04,-4.12 7.72,-4.6 z m -9.08,4.52 7.4,4.92 7.12,-6.6 c -0.52,-0.4 -5.28,-3.6 -5.44,-3.6 -1.04,0 -7.56,4.88 -9.08,5.28 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 115.66,111.78 c 0.04,-0.52 0.76,-2.08 1.16,-2.08 0.52,0 4.44,2.04 5.48,2.28 l -1.28,1.76 0.08,0.24 -5.44,-2.2 z m 3.16,-7.12 5.72,2.2 -1.24,1.84 0.04,0.2 -5.4,-2.24 0.88,-2 z m 2.36,-4.76 5.6,2.28 -1.2,1.92 -5.24,-2 0.84,-2.2 z m 2.48,-5.32 5.8,2.32 -1.12,2 -5.48,-2.04 0.8,-2.28 z m -39.72,6.04 c 0.24,-0.96 5.28,-9.96 6.12,-11.24 0.88,-1.36 5.44,-10.84 6.36,-10.84 0.24,0 12.32,4.48 13.52,4.96 1.68,0.68 12.48,4.76 13.48,4.84 l -11.68,25.68 -27.8,-13.4 z m 55.92,-14.64 h -0.24 l -47.36,-16.12 -0.2,-0.12 -20.72,37.04 0.2,-0.04 11.8,5.84 6.28,-3.4 -6.04,-2.88 1.04,-2.2 v -0.24 l 23.88,11.68 -1.2,2.36 -7.28,-3.52 -4.76,4 25.2,11.84 19.4,-44.24 0,0 z m -59.12,30.88 c 1.52,-0.4 8.04,-5.28 9.08,-5.28 0.2,0 4.92,3.2 5.48,3.6 l -7.16,6.6 -7.4,-4.92 z m -7.16,-0.56 c 0.2,0.76 12.6,8.8 14.16,9.64 0.8,-0.56 4.28,-5.16 5.52,-6.4 1.08,-1.08 5.76,-5.12 6.2,-5.72 -1.56,-0.32 -8.48,-4.12 -8.92,-4.12 -1.16,0 -11.88,6.48 -16.96,6.6 z m 26.6,-25.88 v 0.2 c 0,1.16 1.84,2.36 2.72,2.4 l 2.2,-5.04 c -0.44,-0.24 -0.84,-0.4 -1.52,-0.4 h -0.2 c -2.12,0 -3.2,0.68 -3.2,2.84 z m 0.92,12.08 c 0.72,0.16 0.92,0.4 1.72,0.4 h 0.2 c 0.96,0 2.64,-0.68 2.64,-1.52 v -2.44 c 0,-0.72 -1.56,-1.72 -2.12,-2.08 l -2.44,5.64 z m 5.52,-17.72 2.08,0.52 -0.84,2.08 c 1.8,0.44 3.84,2.52 3.84,4.56 v 1.68 l -2.84,-1.12 c 0,-2.96 -1.08,-2.4 -1.52,-3.56 h -0.36 l -2.48,5.64 c 1.64,1.08 4.36,3.28 4.36,5.88 v 0.36 c 0,0.64 -1.16,2.56 -1.52,3.04 -0.6,0.8 -1.84,1.32 -3.2,1.32 h -0.56 c -1.6,0 -2.24,-0.72 -3.6,-0.76 l -0.56,1.68 -1.68,-0.8 c 0.12,-0.56 0.52,-1.4 0.52,-2 0,-0.28 -4.16,-2.92 -4.16,-5.68 v -0.4 c 0,-0.6 0.6,-2.44 1,-2.36 0.4,0.12 1.44,1 2.4,1.2 -0.16,0.72 -0.72,1.28 -0.72,2.12 v 0.56 c 0,0.8 1.84,2.32 2.44,2.64 0.24,-1.04 2.44,-5.32 2.44,-5.68 0,-0.68 -3.76,-2.8 -3.76,-4.92 V 89.1 c 0,-0.36 1.12,-2.28 1.44,-2.52 0.4,-0.32 2.24,-0.88 2.92,-0.88 h 1.88 c 0.44,0 1.36,0.4 1.64,0.52 l 0.84,-1.44 z m -21.8,15.44 26.64,12.88 11,-24.12 -26.04,-9.52 -11.6,20.76 z m 5,12.12 -7.72,4.6 6.04,4.12 5.96,-5.84 z" />';
	icons['GROUND.INSTALLATION.ICON.BANK'] = '<path stroke="none" d="m 100.81,110.59 c 2.4,0 5.28,1.86 5.28,4.38 v 0.66 c 0,3.12 -2.1,4.86 -5.28,4.86 v -9.9 z m -6.6,-8.82 c 0,-2.34 1.68,-4.38 3.96,-4.38 h 0.66 v 9 c -1.86,-0.42 -4.62,-1.56 -4.62,-3.72 v -0.9 z m 6.6,-4.38 c 2.16,0 4.62,1.62 4.62,3.54 v 0.9 h 3.54 c 0,-5.34 -3.72,-6.66 -8.1,-7.68 v -2.4 h -2.04 v 2.4 c -3.9,0 -8.16,3.48 -8.16,6.96 v 2.64 c 0,1.26 2.04,3.6 3,4.2 0.96,0.6 3.78,1.8 5.1,1.92 v 10.56 c -3.42,-0.06 -5.22,-2.64 -5.22,-6.12 h -3.3 l 0.24,3.48 c 1.14,1.74 0.9,2.82 2.88,4.14 1.26,0.84 3.42,1.56 5.46,1.56 v 3.96 h 1.98 v -3.9 c 4.86,0 9,-3.42 9,-8.1 v -1.8 c 0,-4.2 -5.4,-6 -9,-6.84 v -9.42 z m -25.26,15.18 v -2.4 c 0,-2.22 2.58,-7.38 3.12,-9.42 0.72,-2.7 3.12,-5.94 4.74,-8.04 3.54,-4.56 8.52,-8.94 16.5,-8.94 h 4.38 c 3.42,0 8.82,4.32 10.44,6.48 1.32,1.74 2.22,3.12 3.36,4.98 0.48,0.72 2.7,5.16 2.7,5.88 v 0.66 h 0.42 v 0.66 c 0,0.42 0.9,1.5 0.84,3.12 l 0.48,0.66 c 0,2.04 1.08,6.78 1.32,9 0.36,3.18 1.32,5.58 -0.66,8.52 0,2.4 -5.16,8.7 -6.18,8.76 l -9.18,-1.5 c -1.8,-0.3 -6.78,1.98 -9.24,1.98 -2.04,0 -5.58,-1.74 -7.5,-1.74 -1.62,0 -3.24,1.32 -5.52,1.32 h -0.6 c -1.92,0 -5.94,-6.12 -7.02,-7.68 -1.8,-2.58 -2.4,-8.04 -2.4,-12.3 z m 30.66,-31.02 -6.06,-1.08 c -0.78,-0.12 -5.22,1.08 -5.76,1.32 l -6.3,-11.52 1.74,0.48 v -2.94 l 8.94,3.36 0.3,-3.54 3.24,2.46 5.7,-2.64 v 2.58 l 7.5,-1.44 -9.3,12.96 0,0 z m 11.76,-14.46 -9.06,1.62 v -2.76 c -0.9,0.48 -5.7,2.88 -6.6,2.88 -0.06,0 -3.36,-2.58 -3.96,-2.88 l -0.66,3.96 -8.76,-3.6 v 2.94 l -3.06,-0.96 8.1,15.12 -0.24,0.12 c -4.62,1.08 -10.26,6.78 -12.66,10.38 -0.78,1.14 -1.26,2.64 -2.04,3.66 -1.38,1.8 -0.9,2.46 -1.74,3.96 -0.6,1.14 -2.88,7.2 -2.88,8.58 v 3.72 c 0,1.02 0.72,5.76 0.96,6.72 0.42,1.38 0.36,1.98 0.78,3.24 0.3,0.9 0.9,1.56 1.38,2.34 1.32,2.04 4.8,7.5 7.62,7.5 2.52,0 4.26,-1.32 5.7,-1.32 2.28,0 5.22,1.74 7.26,1.74 h 0.66 c 2.04,0 5.7,-1.44 8.04,-1.86 1.8,-0.3 5.88,1.02 8.46,1.02 h 1.74 c 1.68,0 4.8,-4.2 5.76,-5.46 1.08,-1.38 1.32,-2.16 1.74,-4.02 0.12,-0.42 1.08,-4.32 1.08,-4.38 0,-3 -0.9,-4.08 -1.08,-5.94 -0.24,-2.4 -0.36,-4.02 -0.66,-6.12 -0.24,-1.74 -2.82,-8.64 -3.6,-10.26 -2.4,-4.92 -7.68,-13.2 -13.98,-13.74 l 11.7,-16.2 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 100.81,120.43 c 3.18,0 5.28,-1.74 5.28,-4.86 v -0.6 c 0,-2.46 -2.88,-4.32 -5.28,-4.38 v 9.84 z m -6.6,-18.66 v 0.9 c 0,2.16 2.76,3.3 4.62,3.72 v -9 h -0.66 c -2.28,0 -3.96,2.04 -3.96,4.38 z m 6.6,5.04 c 3.6,0.84 9,2.58 9,6.84 v 1.74 c 0,4.74 -4.14,8.1 -9,8.1 v 3.96 h -1.98 v -3.9 c -2.04,0 -4.2,-0.72 -5.46,-1.56 -1.98,-1.32 -1.74,-2.46 -2.88,-4.2 l -0.24,-3.48 h 3.3 c 0,3.48 1.8,6.06 5.28,6.18 v -10.56 c -1.32,-0.12 -4.14,-1.32 -5.1,-1.98 -1.02,-0.6 -3,-3 -3,-4.2 v -2.64 c 0,-3.54 4.2,-6.96 8.1,-7.02 v -2.4 h 1.98 v 2.4 c 4.38,1.02 8.1,2.34 8.1,7.68 h -3.48 v -0.9 c 0,-1.86 -2.46,-3.54 -4.62,-3.54 v 9.48 l 0,0 z m -25.26,5.76 c 0,4.26 0.6,9.78 2.4,12.3 1.08,1.56 5.1,7.68 7.02,7.68 h 0.66 c 2.28,0 3.9,-1.32 5.52,-1.32 1.86,0 5.46,1.74 7.5,1.74 2.46,0 7.44,-2.28 9.24,-1.98 l 9.12,1.5 c 1.02,0 6.18,-6.36 6.18,-8.76 1.98,-2.94 1.02,-5.34 0.66,-8.58 -0.24,-2.22 -1.32,-6.9 -1.32,-9 l -0.48,-0.6 c 0.06,-1.62 -0.84,-2.7 -0.84,-3.12 v -0.66 h -0.42 v -0.66 c 0,-0.72 -2.22,-5.16 -2.7,-5.88 -1.14,-1.86 -2.1,-3.18 -3.36,-4.98 -1.62,-2.16 -6.96,-6.48 -10.44,-6.48 h -4.38 c -7.98,0 -12.96,4.44 -16.5,8.94 -1.62,2.1 -4.02,5.34 -4.74,8.04 -0.54,1.98 -3.12,7.2 -3.12,9.42 v 2.4 z m 39.96,-43.98 -7.44,1.5 v -2.58 l -5.76,2.58 -3.24,-2.4 -0.3,3.54 -8.94,-3.36 v 2.94 l -1.74,-0.54 6.3,11.52 c 0.54,-0.24 5.04,-1.44 5.76,-1.32 l 6.06,1.08 9.3,-12.96 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.BULLION STORAGE'] = '<path stroke="none" d="m 123.06109,77.905381 c 0.44009,0.148965 0.86666,0.467194 1.27969,0.954687 0.41978,0.487506 0.83957,1.157817 1.25937,2.010937 l 2.08203,4.14375 -2.2039,0 -1.93985,-3.889843 c -0.50105,-1.01562 -0.98855,-1.689318 -1.4625,-2.021094 -0.46719,-0.331765 -1.10703,-0.49765 -1.91953,-0.497656 l -2.23437,0 0,6.408593 -2.05156,0 0,-15.16328 4.63125,0 c 1.73332,1.5e-5 3.02655,0.362254 3.87968,1.086718 0.85312,0.724493 1.27968,1.817981 1.27969,3.280469 -1e-5,0.954697 -0.22345,1.746884 -0.67031,2.376562 -0.44012,0.629696 -1.08335,1.066414 -1.92969,1.310157 m -5.13906,-6.367969 0,5.382812 2.57969,0 c 0.98853,8e-6 1.73332,-0.226814 2.23437,-0.680468 0.5078,-0.460408 0.76171,-1.134105 0.76172,-2.021094 -1e-5,-0.886968 -0.25392,-1.553894 -0.76172,-2.000781 -0.50105,-0.453633 -1.24584,-0.680456 -2.23437,-0.680469 l -2.57969,0 m -12.26875,-0.294531 c -1.48959,1.4e-5 -2.67449,0.555221 -3.55469,1.665625 -0.87344,1.110427 -1.31016,2.623707 -1.31015,4.539843 -10e-6,1.909381 0.43671,3.419275 1.31015,4.529688 0.8802,1.110418 2.0651,1.665626 3.55469,1.665625 1.48957,10e-7 2.6677,-0.555207 3.53437,-1.665625 0.87343,-1.110413 1.31015,-2.620307 1.31016,-4.529688 -1e-5,-1.916136 -0.43673,-3.429416 -1.31016,-4.539843 -0.86667,-1.110404 -2.0448,-1.665611 -3.53437,-1.665625 m 0,-1.665625 c 2.12603,1.5e-5 3.82551,0.714337 5.09844,2.142968 1.2729,1.421887 1.90936,3.33126 1.90937,5.728125 -1e-5,2.39011 -0.63647,4.299483 -1.90937,5.728125 -1.27293,1.421875 -2.97241,2.132812 -5.09844,2.132812 -2.13282,0 -3.83907,-0.710937 -5.11875,-2.132812 -1.272919,-1.421872 -1.909377,-3.331245 -1.909376,-5.728125 -10e-7,-2.396865 0.636457,-4.306238 1.909376,-5.728125 1.27968,-1.428631 2.98593,-2.142953 5.11875,-2.142968 m -20.972657,0.274219 12.827344,0 0,1.726562 -5.382813,0 0,13.436718 -2.061718,0 0,-13.436718 -5.382813,0 0,-1.726562 m -2.010937,0.497656 0,2.000781 c -0.778656,-0.372383 -1.51329,-0.649987 -2.203906,-0.832813 -0.690633,-0.182798 -1.357559,-0.274204 -2.000781,-0.274218 -1.117193,1.4e-5 -1.980473,0.21668 -2.589844,0.65 -0.602607,0.433346 -0.903909,1.049491 -0.903906,1.848437 -3e-6,0.670323 0.199736,1.178135 0.599219,1.523438 0.406246,0.338551 1.171349,0.612769 2.295312,0.822656 l 1.239063,0.253906 c 1.530199,0.291154 2.657542,0.805737 3.382031,1.54375 0.731238,0.731256 1.096863,1.713026 1.096875,2.945312 -1.2e-5,1.469274 -0.494282,2.583075 -1.482812,3.341407 -0.981781,0.758333 -2.423967,1.137499 -4.326563,1.137499 -0.717714,0 -1.482817,-0.08125 -2.295312,-0.24375 -0.805733,-0.162499 -1.64193,-0.402864 -2.508594,-0.721093 l 0,-2.1125 c 0.83281,0.46719 1.648695,0.819273 2.447656,1.05625 0.798954,0.23698 1.58437,0.35547 2.35625,0.355469 1.171347,10e-7 2.075252,-0.230207 2.711719,-0.690625 0.636449,-0.460415 0.954677,-1.117185 0.954687,-1.970313 -1e-5,-0.744787 -0.230218,-1.327078 -0.690625,-1.746875 -0.453654,-0.419785 -1.201831,-0.734629 -2.244531,-0.944531 l -1.249219,-0.24375 c -1.530212,-0.30468 -2.637242,-0.782023 -3.321093,-1.432031 -0.683856,-0.649991 -1.025783,-1.553896 -1.025781,-2.711719 -2e-6,-1.340612 0.470571,-2.396861 1.411718,-3.16875 0.947913,-0.77186 2.251297,-1.157797 3.910156,-1.157812 0.71093,1.5e-5 1.435409,0.06434 2.173438,0.192969 0.738011,0.128661 1.492958,0.321629 2.264843,0.578906 M 103.552,119.33473 h 9.648 c 0.432,0 9.024,9.168 9.648,10.128 H 95.584 c 0.24,-0.96 7.44,-10.128 7.968,-10.128 z m -29.232,0 h 9.888 c 0.576,0 8.208,9.024 8.928,10.128 H 65.872 c 0.288,-1.008 7.824,-10.128 8.448,-10.128 l 0,0 z m 11.52,0.048 h 15.36 l -6.864,9.888 -8.496,-9.888 z m -5.472,-1.008 c 0.72,-1.104 7.584,-9.408 8.448,-9.408 h 9.168 c 0.672,0 8.928,8.544 9.168,9.408 H 80.368 z m 43.728,10.848 -9.456,-10.368 10.368,-14.256 9.744,8.496 -10.656,16.128 0,0 z m -4.8,-24.816 4.8,-0.048 -10.512,14.112 -4.08,-0.144 9.792,-13.92 z m -31.104,-0.192 2.784,0.144 c -1.056,1.584 -4.56,4.896 -6.192,6.816 -1.728,2.064 -4.224,5.088 -5.616,7.2 l -4.224,-0.096 13.248,-14.064 z m 21.072,-8.591997 c 0.912,0.624 8.976,8.159997 8.976,8.495997 0,0.096 -9.312,13.584 -9.888,14.016 l -8.928,-9.936 9.84,-12.575997 z M 89.056,108.00673 c 0.864,-1.344 11.376,-12.575997 12.096,-12.575997 h 6.768 l -9.504,12.527997 -9.36,0.048 z m 2.88,-4.608 h -4.56 c -1.248,1.824 -4.32,4.896 -6,6.576 -2.064,2.112 -3.936,4.416 -6,6.528 -1.344,1.344 -11.184,12.768 -11.424,13.68 0.528,0.144 0.528,0.24 1.2,0.24 l 59.28,-0.048 11.616,-17.472 -0.288,0.096 -10.464,-9.6 h -5.808 c -1.536,-1.008 -9.6,-8.927997 -10.368,-8.927997 h -8.208 c -0.912,0 -7.584,8.015997 -8.976,8.927997 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 103.552,119.33473 c -0.528,0 -7.728,9.168 -7.968,10.128 h 27.264 c -0.624,-0.96 -9.216,-10.128 -9.648,-10.128 h -9.648 z m -29.232,0 c -0.624,0 -8.16,9.12 -8.448,10.128 h 27.264 c -0.72,-1.104 -8.304,-10.128 -8.928,-10.128 H 74.32 l 0,0 z m 50.736,-14.736 -10.416,14.256 9.456,10.368 10.656,-16.128 z m -30.72,24.672 6.864,-9.888 -15.36,0 z m 5.088,-21.072 8.928,9.936 c 0.624,-0.432 9.936,-13.92 9.936,-14.016 0,-0.336 -8.112,-7.871997 -8.976,-8.495997 l -9.888,12.575997 z m -19.056,10.176 h 26.784 c -0.24,-0.864 -8.496,-9.408 -9.168,-9.408 h -9.168 c -0.864,0 -7.728,8.304 -8.448,9.408 z m 33.216,0.096 10.512,-14.112 -4.8,0.048 -9.792,13.92 z m -38.64,-0.192 4.224,0.096 c 1.392,-2.112 3.936,-5.136 5.616,-7.2 1.632,-1.92 5.136,-5.232 6.192,-6.816 l -2.784,-0.144 -13.248,14.064 z m 14.112,-10.272 9.36,-0.048 9.456,-12.527997 h -6.72 c -0.72,0 -11.232,11.231997 -12.096,12.575997 z" />';
	icons['GROUND.INSTALLATION.ICON.FEDERAL RESERVE BANK'] = '<path stroke="none" d="m 65.572,125.40301 h 68.818 v 4.37 H 65.572 v -4.37 z m 58.064,-31.312 h 5.282 v 29.868 h -5.282 v -29.868 z m -10.564,0 h 5.092 v 29.868 h -5.092 v -29.868 z m -31.312,0 h 5.282 v 29.868 H 81.76 v -29.868 z m -10.564,0 h 5.092 v 29.868 h -5.092 v -29.868 z m 27.702,1.482 h 2.014 v 1.444 h 0.532 c 2.888,0 6.004,2.318 6.004,5.282 l -2.926,0.418 c -0.19,-0.038 -0.988,-1.9 -1.368,-2.356 -0.418,-0.532 -1.482,-1.102 -2.28,-1.178 v 7.828 c 3.04,0.266 7.296,2.318 7.296,5.282 v 1.102 c 0,3.99 -3.382,6.726 -7.296,6.726 v 2.546 h -1.976 v -2.546 c -1.71,-0.038 -4.066,-0.836 -5.054,-1.672 -0.836,-0.684 -2.432,-2.812 -2.432,-4.142 v -0.912 l 3.116,-0.494 c 0,2.318 2.014,4.864 4.37,4.864 v -8.55 c -2.28,-0.038 -6.916,-2.546 -6.916,-5.092 v -1.824 c 0,-3.002 3.192,-5.282 6.194,-5.282 h 0.722 v -1.444 z m -33.326,-7.486 h 68.818 v 4.56 H 65.572 v -4.56 z M 100,70.30301 c 0.684,0.57 6.498,3.382 7.866,4.066 2.736,1.368 5.244,2.736 7.942,4.066 2.698,1.33 5.282,2.736 7.942,4.066 1.14,0.57 7.676,3.572 8.056,3.952 H 68.46 l 31.54,-16.15 0,0 z m -35.872,17.062 v 6.004 c 0,0.418 0.304,0.722 0.722,0.722 h 4.902 v 29.868 h -5.624 v 7.448 h 71.744 v -7.448 h -5.51 v -29.868 h 4.902 c 0.418,0 0.532,-0.114 0.532,-0.532 v -6.726 c -2.014,-0.722 -6.65,-3.42 -8.93,-4.56 -3.002,-1.482 -5.89,-3.04 -8.93,-4.56 -1.672,-0.836 -17.784,-9.12 -17.86,-9.12 -0.38,0 -16.264,8.208 -18.126,9.158 -1.938,1.026 -17.822,8.664 -17.822,9.614 l 0,0 0,0 z m 36.746,30.4 c 1.71,0 3.99,-2.014 3.99,-3.458 v -1.444 c 0,-2.052 -2.28,-2.698 -3.99,-3.078 v 7.98 z m -5.624,-14.022 c 0,1.558 2.204,2.622 3.648,2.736 v -7.448 c -1.33,0.304 -3.648,1.444 -3.648,2.698 v 2.014 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 134.39,129.77301 0,-4.37 -68.818,0 0,4.37 z m -5.472,-5.814 0,-29.868 -5.282,0 0,29.868 z m -10.754,0 0,-29.868 -5.092,0 0,29.868 z m -31.122,0 0,-29.868 -5.282,0 0,29.868 z m -10.716,0 0,-29.868 -5.13,0 0,29.868 z m -7.866,-37.544 63.346,0.038 c -0.38,-0.342 -6.916,-3.382 -8.056,-3.952 -2.66,-1.33 -5.244,-2.736 -7.942,-4.066 -2.698,-1.33 -5.206,-2.698 -7.942,-4.066 -1.368,-0.684 -7.182,-3.496 -7.866,-4.066 l -31.54,16.112 0,0 z m 65.93,6.232 0,-4.56 -68.818,0 0,4.56 z m -33.516,25.118 v -8.018 c 1.71,0.38 3.99,1.026 3.99,3.078 v 1.482 c 0.038,1.444 -2.242,3.458 -3.99,3.458 z m -5.624,-14.022 v -2.014 c 0,-1.292 2.356,-2.432 3.648,-2.736 v 7.448 c -1.482,-0.076 -3.648,-1.14 -3.648,-2.698 z m 3.648,-6.726 h -0.76 c -3.002,0 -6.194,2.28 -6.194,5.282 v 1.824 c 0,2.546 4.636,5.054 6.916,5.092 v 8.55 c -2.356,0 -4.37,-2.546 -4.37,-4.864 l -3.078,0.494 v 0.912 c 0,1.33 1.596,3.458 2.432,4.142 0.988,0.836 3.344,1.634 5.054,1.672 v 2.546 h 2.014 v -2.546 c 3.876,0 7.296,-2.736 7.296,-6.726 v -1.102 c 0,-2.964 -4.256,-5.016 -7.296,-5.282 v -7.828 c 0.798,0.076 1.9,0.646 2.28,1.178 0.342,0.456 1.14,2.318 1.368,2.356 l 2.888,-0.418 c 0,-2.964 -3.116,-5.282 -6.004,-5.282 h -0.57 v -1.444 h -1.976 v 1.444 z" />';
	icons['GROUND.INSTALLATION.ICON.FINANCIAL EXCHANGE'] = '<path stroke="none" d="m 133.7,124.6 0,-1.4 -66.76,0 0.32,0 0,-47.04 -0.96,0 0,48.44 z m -29.48,-8.6 -9.8,-20.8 -5.92,14.4 -5.28,-6.48 -13.32,12.4 0.88,1 v 0.16 l 12.4,-11.32 5.52,7.04 h 0.32 c 0.04,-1.04 2.28,-5.56 2.76,-7 0.32,-1.04 1.08,-2.44 1.48,-3.36 0.32,-0.76 0.92,-3.08 1.52,-3.24 l 9.4,20.28 0.08,0.16 17.36,-27.36 0.16,0.12 8.04,15.56 1.36,-0.48 -9.4,-18.04 c -0.12,0.48 -7.72,12.12 -8.68,13.56 -1.04,1.6 -8.2,13.2 -8.88,13.4 z m 2.84,-19.44 V 89.2 c 2.12,0.04 4.08,1.44 4.08,3.6 v 0.16 c 0,2.12 -1.88,3.6 -4.08,3.6 z m -4.72,-13.64 c 0,-2.04 1,-3.44 2.96,-3.44 h 0.48 v 6.6 c -1.76,-0.08 -3.44,-1.32 -3.44,-3.16 z m 3.48,-5.64 h -0.96 c -2.6,0 -5.16,2.88 -5.16,5.64 v 0.96 c 0,1.12 1.32,2.8 2.12,3.36 1.12,0.76 2.48,1.16 4,1.52 v 7.84 c -2.56,-0.64 -4.08,-1.68 -4.08,-4.76 h -2.4 l 0.2,2.52 c 0.92,1.36 0.56,2.12 2.16,3.16 1.08,0.72 2.4,1.24 4.12,1.24 v 2.84 h 1.24 v -2.84 c 3.04,0 6.44,-2.28 6.44,-5 v -2.52 c 0,-2.88 -4,-4.28 -6.44,-4.84 v -6.92 c 1.96,0 3.4,1.36 3.44,3.28 h 2.68 c 0,-3.24 -2.8,-5.48 -6.12,-5.48 V 75.4 h -1.24 v 1.88 z" />';
	icons['GROUND.INSTALLATION.ICON.FINANCIAL SERVICES, OTHER'] = '<path stroke="none" d="m 103.37497,138.23398 -2.73437,0 -0.0274,-8.23046 c -1.914079,-0.0364 -3.82814,-0.25521 -5.74219,-0.65626 -1.914071,-0.41926 -3.837247,-1.03906 -5.769531,-1.85937 l 0,-4.92187 c 1.859368,1.16667 3.73697,2.05078 5.632812,2.65234 1.91405,0.58334 3.882798,0.88412 5.906249,0.90234 l 0,-12.46875 c -4.028657,-0.65623 -6.96355,-1.76821 -8.804687,-3.33593 -1.822922,-1.56769 -2.734379,-3.71873 -2.734374,-6.45313 -5e-6,-2.97133 0.993484,-5.31377 2.980468,-7.027343 1.98697,-1.713507 4.839832,-2.697881 8.558593,-2.953125 l 0,-6.425781 2.73438,0 0,6.34375 c 1.69529,0.07295 3.33591,0.255244 4.92187,0.546875 1.58592,0.273472 3.13539,0.656285 4.64844,1.148437 l 0,4.785157 c -1.51305,-0.765595 -3.07164,-1.358042 -4.67578,-1.777344 -1.58596,-0.419239 -3.21747,-0.665333 -4.89453,-0.738282 l 0,11.675786 c 4.13799,0.63804 7.18226,1.77736 9.13281,3.41796 1.95049,1.64064 2.92575,3.88283 2.92578,6.72657 -3e-5,3.08073 -1.03909,5.51433 -3.11719,7.30078 -2.05992,1.76823 -5.04039,2.78906 -8.9414,3.0625 l 0,8.28515 m -2.73438,-29.28515 0,-11.210939 c -2.114596,0.237011 -3.727876,0.838573 -4.839843,1.804687 -1.111989,0.966172 -1.667978,2.251332 -1.667968,3.855472 -1e-5,1.56773 0.510406,2.78908 1.53125,3.66406 1.03905,0.87502 2.697902,1.50393 4.976561,1.88672 m 2.73438,5.25 0,11.83984 c 2.31508,-0.30989 4.05596,-0.96614 5.22265,-1.96875 1.18487,-1.0026 1.77732,-2.32421 1.77735,-3.96484 -3e-5,-1.60416 -0.56513,-2.8802 -1.69531,-3.82813 -1.11201,-0.9479 -2.88024,-1.64061 -5.30469,-2.07812 m 5.82665,-52.158596 2.05156,0 0,6.215625 7.45468,0 0,-6.215625 2.05157,0 0,15.163282 -2.05157,0 0,-7.221094 -7.45468,0 0,7.221094 -2.05156,0 0,-15.163282 m -14.817975,0 12.827345,0 0,1.726563 -5.38281,0 0,13.436719 -2.061723,0 0,-13.436719 -5.382812,0 0,-1.726563 m -8.114844,1.391407 c -1.48959,1.3e-5 -2.674485,0.555221 -3.554688,1.665625 -0.873441,1.110427 -1.310159,2.623707 -1.310156,4.539843 -3e-6,1.909381 0.436715,3.419275 1.310156,4.529688 0.880203,1.110419 2.065098,1.665626 3.554688,1.665625 1.489574,1e-6 2.667698,-0.555206 3.534375,-1.665625 0.873425,-1.110413 1.310143,-2.620307 1.310156,-4.529688 -1.3e-5,-1.916136 -0.436731,-3.429416 -1.310156,-4.539843 -0.866677,-1.110404 -2.044801,-1.665612 -3.534375,-1.665625 m 0,-1.665625 c 2.126031,1.5e-5 3.825509,0.714337 5.098438,2.142968 1.272902,1.421887 1.909359,3.33126 1.909374,5.728125 -1.5e-5,2.39011 -0.636472,4.299483 -1.909374,5.728125 -1.272929,1.421876 -2.972407,2.132812 -5.098438,2.132813 -2.132818,-10e-7 -3.839067,-0.710937 -5.11875,-2.132813 -1.272918,-1.421871 -1.909376,-3.331244 -1.909375,-5.728125 -1e-6,-2.396865 0.636457,-4.306238 1.909375,-5.728125 1.279683,-1.428631 2.985932,-2.142953 5.11875,-2.142968" />';
	icons['GROUND.INSTALLATION.ICON.COMMERCIAL INFRASTRUCTURE'] = '<path stroke="none" d="m 101.9018,123.26527 -1.66015,0 -0.0166,-4.99707 c -1.162114,-0.0221 -2.324222,-0.15494 -3.486324,-0.39843 -1.162114,-0.25456 -2.329756,-0.63086 -3.50293,-1.12891 l 0,-2.98828 c 1.128903,0.70834 2.268876,1.24512 3.419922,1.61035 1.162102,0.35417 2.357414,0.53679 3.585942,0.54785 l 0,-7.57031 c -2.445975,-0.39843 -4.227874,-1.07356 -5.345707,-2.02539 -1.106775,-0.95181 -1.660159,-2.2578 -1.660157,-3.91797 -2e-6,-1.80402 0.603187,-3.226218 1.809571,-4.266602 1.206374,-1.040343 2.938469,-1.637999 5.196293,-1.792968 l 0,-3.901368 1.66015,0 0,3.851563 c 1.02929,0.04429 2.02538,0.15497 2.98828,0.332031 0.96288,0.166037 1.90363,0.398459 2.82227,0.697266 l 0,2.905278 c -0.91864,-0.46483 -1.86493,-0.82453 -2.83887,-1.079106 -0.9629,-0.254538 -1.95346,-0.403952 -2.97168,-0.448242 l 0,7.088868 c 2.51236,0.38738 4.36066,1.07911 5.54492,2.07519 1.18423,0.99611 1.77635,2.35743 1.77637,4.08399 -2e-5,1.87045 -0.63088,3.34798 -1.89258,4.43262 -1.25066,1.07356 -3.06023,1.69336 -5.42871,1.85937 l 0,5.03027 m -1.66015,-17.78027 0,-6.80664 c -1.283867,0.1439 -2.263358,0.509134 -2.938481,1.095703 -0.675136,0.586607 -1.012701,1.366877 -1.012695,2.340817 -6e-6,0.95184 0.30989,1.69338 0.929687,2.22461 0.630852,0.53127 1.638013,0.9131 3.021489,1.14551 m 1.66015,3.1875 0,7.18848 c 1.40559,-0.18815 2.46255,-0.58659 3.1709,-1.19532 0.71939,-0.60872 1.07909,-1.41112 1.0791,-2.40722 -1e-5,-0.97395 -0.34311,-1.74869 -1.02929,-2.32422 -0.67515,-0.57551 -1.74872,-0.99609 -3.22071,-1.26172 M 104.5414,74.823 h 4.4616 v 13.3852 h 9.8796 V 74.823 h 4.462 v 13.3852 h 6.6916 v 36.9684 H 69.9626 V 88.2082 h 34.5784 l 4e-4,-13.3852 0,0 z m -35.694,51.6288 h 62.3052 V 86.9334 h -6.374 V 73.5482 h -7.1704 v 13.3852 h -7.1708 V 73.5482 h -7.1708 V 86.9334 H 68.8474 v 39.5184 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 101.90181,108.6725 0,7.18848 c 1.40559,-0.18815 2.46255,-0.58659 3.1709,-1.19532 0.71939,-0.60872 1.07909,-1.41112 1.0791,-2.40722 -1e-5,-0.97395 -0.34311,-1.74869 -1.02929,-2.32422 -0.67515,-0.57551 -1.74872,-0.99609 -3.22071,-1.26172 m -1.66015,-3.1875 0,-6.80664 c -1.283867,0.1439 -2.263358,0.509134 -2.938481,1.095703 -0.675136,0.586607 -1.012701,1.366877 -1.012695,2.340817 -6e-6,0.95184 0.30989,1.69338 0.929687,2.22461 0.630852,0.53127 1.638013,0.9131 3.021489,1.14551 m 4.28959,-30.6725 0,13.40625 -34.5625,0 0,36.96875 60.0625,0 0,-36.96875 -6.6875,0 0,-13.40625 -4.46875,0 0,13.40625 -9.875,0 0,-13.40625 -4.46875,0 z m -4.28125,17.625 1.65625,0 0,3.84375 c 1.02929,0.04429 2.00585,0.166689 2.96875,0.34375 0.96288,0.166037 1.92511,0.388693 2.84375,0.6875 l 0,2.90625 c -0.91864,-0.46483 -1.86981,-0.807924 -2.84375,-1.0625 -0.9629,-0.254538 -1.95053,-0.42446 -2.96875,-0.46875 l 0,7.09375 c 2.51236,0.38738 4.34699,1.06642 5.53125,2.0625 1.18423,0.99611 1.78123,2.36719 1.78125,4.09375 -2e-5,1.87045 -0.6133,3.35286 -1.875,4.4375 -1.25066,1.07356 -3.06902,1.70899 -5.4375,1.875 l 0,5 -1.65625,0 -0.0312,-4.96875 c -1.162114,-0.0221 -2.306648,-0.16276 -3.46875,-0.40625 -1.162114,-0.25456 -2.326826,-0.62695 -3.5,-1.125 l 0,-3 c 1.128903,0.70834 2.255204,1.25977 3.40625,1.625 1.162102,0.35417 2.365222,0.52019 3.59375,0.53125 l 0,-7.5625 c -2.445975,-0.39843 -4.225917,-1.07942 -5.34375,-2.03125 -1.106775,-0.95181 -1.656252,-2.24608 -1.65625,-3.90625 -2e-6,-1.80402 0.574866,-3.240866 1.78125,-4.28125 1.206374,-1.040343 2.960926,-1.626281 5.21875,-1.78125 l 0,-3.90625 z" />';
	icons['GROUND.INSTALLATION.ICON.CHEMICAL PLANT'] = '<path stroke="none" d="m 94.441596,89.625 0,0.1 c -0.528658,0.09542 -1.008531,0.27541 -1.35,0.6375 -0.497561,0.527608 -0.635243,1.277541 -0.4875,1.9 0.191835,0.808221 0.848297,1.452856 1.7,1.775 -0.04396,0.540085 -0.08035,1.718356 0.0125,3.0375 l -0.0625,0 c -0.0018,2.732916 -2.316698,5.66132 -4.875,8.85 -2.444736,3.04713 -5.04641,6.36425 -5.275,10.3625 l -0.0625,0 c 0,0.0843 0.03415,0.15451 0.0375,0.2375 -0.0034,0.10616 -0.025,0.20537 -0.025,0.3125 l 0.075,0 c 0.223285,2.37728 1.742489,4.22737 3.675,5.35 2.085586,1.21155 4.61262,1.73194 6.8,1.55 l 0,-0.0125 8.912504,0 0.0125,0.075 c 0.25919,-0.03 0.51499,-0.0499 0.775,-0.075 l 0.45,0 0,-0.05 c 2.08838,-0.18874 4.18242,-0.31198 5.9875,-1.025 1.08024,-0.42671 2.06592,-1.10097 2.7625,-2.1375 0.61849,-0.92034 0.9493,-2.13054 1.0625,-3.5625 l 0.1625,0.0125 c 0.21806,-4.41086 -2.10723,-7.4532 -4.45,-10.3 -2.31956,-2.81858 -4.67255,-5.54322 -5.4,-9.6125 0.0388,-1.334111 0.0905,-3.044428 0.1,-3.3125 0.20626,-0.106817 0.42711,-0.206499 0.6,-0.3375 0.5202,-0.39418 0.94355,-0.969319 0.925,-1.6875 -0.0186,-0.718181 -0.52296,-1.292181 -1.1,-1.6 -0.42352,-0.225924 -0.94509,-0.345467 -1.5125,-0.4125 l 0,-0.075 c -0.15408,0.0015 -0.43243,-0.0011 -0.625,0 -2.49194,0.01419 -7.197998,0.0026 -8.087504,0 -0.08111,-2.39e-4 -0.7375,0 -0.7375,0 z m 0.675,2 c 0.813343,0.0024 5.524024,0.01396 8.100004,0 0.55695,0.01654 0.8641,0.124754 1.075,0.2125 -0.16701,0.116864 -0.52025,0.252977 -0.9125,0.375 l -8.137504,0 c -0.427994,-0.05502 -0.655489,-0.277635 -0.6875,-0.4125 -0.02001,-0.08429 -0.01875,-0.05587 -0.0125,-0.0625 0.0063,-0.0066 0.121323,-0.127508 0.575,-0.1125 z m 1.175,2.5875 6.675004,0 c -0.0236,0.672542 -0.0685,1.911039 -0.1,3.0625 -0.003,0.117524 -0.01,0.209064 -0.0125,0.3125 l 0.1,0 c 0.8724,4.5467 3.5155,7.60438 5.775,10.35 2.2041,2.6783 3.9535,5.0434 3.9625,8.4375 l -0.05,0 c -0.0458,1.42625 -0.35956,2.3696 -0.8,3.025 -0.44044,0.6554 -1.0259,1.07941 -1.8375,1.4 -1.43258,0.56588 -3.55561,0.69503 -5.825,0.925 l -10.275004,0 0,0.025 c -1.633019,0.0239 -3.57167,-0.40693 -5.0875,-1.2875 -1.594416,-0.92622 -2.632474,-2.21966 -2.7375,-3.9125 0.128808,-3.24986 2.394925,-6.2994 4.8625,-9.375 2.431987,-3.03124 5.05063,-6.05958 5.275,-9.625 l 0.1,-0.0125 c -0.1473,-0.994139 -0.0652,-2.658632 -0.025,-3.325 z m -6.993236,19.5757 v 1.92 c 0,3.48 6.04,4.32 9.88,4.32 h 3.2 c 2.48,0 7.96,-2.16 7.96,-4.16 v -0.8 c 0,-3.16 -6.6,-9.36 -7.32,-12.44 h -7.48 c -0.6,2.48 -6.24,9.96 -6.24,11.16 z m 14.8332,-38.9652 h 4.4616 v 13.3852 h 9.8796 V 74.823 h 4.462 v 13.3852 h 6.6916 v 36.9684 H 69.55276 V 88.2082 h 34.5784 l 4e-4,-13.3852 0,0 z m -35.694,51.6288 h 62.3052 V 86.9334 h -6.374 V 73.5482 h -7.1704 v 13.3852 h -7.1708 V 73.5482 h -7.1708 v 13.3852 h -34.4192 v 39.5184 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 104.125 74.8125 L 104.125 88.21875 L 69.5625 88.21875 L 69.5625 125.1875 L 129.625 125.1875 L 129.625 88.21875 L 122.9375 88.21875 L 122.9375 74.8125 L 118.46875 74.8125 L 118.46875 88.21875 L 108.59375 88.21875 L 108.59375 74.8125 L 104.125 74.8125 z M 94.4375 89.625 C 94.4375 89.625 95.10639 89.624761 95.1875 89.625 C 96.077006 89.6276 100.78931 89.63919 103.28125 89.625 C 103.47382 89.6239 103.75217 89.6265 103.90625 89.625 L 103.90625 89.6875 C 104.47366 89.75453 104.98273 89.899076 105.40625 90.125 C 105.98329 90.432819 106.4814 91.000569 106.5 91.71875 C 106.5186 92.436931 106.11395 93.01207 105.59375 93.40625 C 105.42086 93.537251 105.17501 93.643183 104.96875 93.75 C 104.95875 94.018072 104.9137 95.728389 104.875 97.0625 C 105.60245 101.13178 107.96169 103.83767 110.28125 106.65625 C 112.62402 109.50305 114.93681 112.55789 114.71875 116.96875 L 114.5625 116.9375 C 114.4493 118.36946 114.11849 119.57966 113.5 120.5 C 112.80342 121.53653 111.83024 122.22954 110.75 122.65625 C 108.94492 123.36927 106.83838 123.49876 104.75 123.6875 L 104.75 123.71875 L 104.3125 123.71875 C 104.05249 123.74385 103.79044 123.7825 103.53125 123.8125 L 103.53125 123.71875 L 94.59375 123.71875 L 94.59375 123.75 C 92.40637 123.93194 89.898086 123.39905 87.8125 122.1875 C 85.879989 121.06487 84.348285 119.22103 84.125 116.84375 L 84.0625 116.84375 C 84.0625 116.73662 84.09035 116.63741 84.09375 116.53125 C 84.09045 116.44825 84.03125 116.36555 84.03125 116.28125 L 84.09375 116.28125 C 84.32234 112.283 86.930264 108.98463 89.375 105.9375 C 91.933302 102.74882 94.2482 99.795416 94.25 97.0625 L 94.3125 97.0625 C 94.21965 95.743356 94.26854 94.571335 94.3125 94.03125 C 93.460797 93.709106 92.785585 93.058221 92.59375 92.25 C 92.446007 91.627541 92.59615 90.902608 93.09375 90.375 C 93.435219 90.01291 93.908842 89.81417 94.4375 89.71875 L 94.4375 89.625 z M 95.125 91.625 C 94.671323 91.609992 94.53755 91.7434 94.53125 91.75 C 94.525 91.75663 94.54249 91.72821 94.5625 91.8125 C 94.594511 91.947365 94.822006 92.16373 95.25 92.21875 L 103.375 92.21875 C 103.76725 92.096727 104.11424 91.960614 104.28125 91.84375 C 104.07035 91.756004 103.7757 91.64154 103.21875 91.625 C 100.64277 91.63896 95.938343 91.6274 95.125 91.625 z M 96.28125 94.21875 C 96.24105 94.885118 96.1652 96.537111 96.3125 97.53125 L 96.21875 97.5625 C 95.99438 101.12792 93.369487 104.15626 90.9375 107.1875 C 88.469925 110.2631 86.222558 113.31264 86.09375 116.5625 C 86.198776 118.25534 87.218084 119.54253 88.8125 120.46875 C 90.32833 121.34932 92.273231 121.7739 93.90625 121.75 L 93.90625 121.71875 L 104.1875 121.71875 C 106.45689 121.48878 108.56742 121.37838 110 120.8125 C 110.8116 120.49191 111.40331 120.06165 111.84375 119.40625 C 112.28419 118.75085 112.61045 117.80125 112.65625 116.375 L 112.6875 116.375 C 112.6785 112.9809 110.92285 110.6158 108.71875 107.9375 C 106.45925 105.19188 103.84115 102.14045 102.96875 97.59375 L 102.84375 97.59375 C 102.84625 97.490314 102.872 97.398774 102.875 97.28125 C 102.9065 96.129789 102.94515 94.891292 102.96875 94.21875 L 96.28125 94.21875 z M 95.53125 102.625 L 103.03125 102.625 C 103.75125 105.705 110.34375 111.9025 110.34375 115.0625 L 110.34375 115.875 C 110.34375 117.875 104.855 120.03125 102.375 120.03125 L 99.1875 120.03125 C 95.3475 120.03125 89.3125 119.19875 89.3125 115.71875 L 89.3125 113.78125 C 89.3125 112.58125 94.93125 105.105 95.53125 102.625 z " />';
	icons['GROUND.INSTALLATION.ICON.FIREARMS MANUFACTURER'] = '<path stroke="none" d="m 104.13156,74.823 h 4.4616 v 13.3852 h 9.8796 V 74.823 h 4.462 v 13.3852 h 6.6916 v 36.9684 H 69.55276 V 88.2082 h 34.5784 l 4e-4,-13.3852 0,0 z m -35.694,51.6288 h 62.3052 V 86.9334 h -6.374 V 73.5482 h -7.1704 v 13.3852 h -7.1708 V 73.5482 h -7.1708 v 13.3852 h -34.4192 v 39.5184 z m 25.77,-26.56 h 10.784 v 5.794 c -1.5704,0 -4.6592,1.0424 -5.8208,0.6716 -1.2244,-0.3916 -3.7976,-1.5404 -4.9632,-1.6372 v -4.8284 z m -19.1532,0 h 16.578 v 5.9556 c 0,0.5992 2.982,1.3864 3.652,1.6588 0.352,0.1436 3.9032,1.4 3.9244,1.488 l 7.1708,-0.8756 0.7728,2.696 1.0584,3.724 c 0.264,0.3944 0.9652,2.392 0.9652,3.0584 v 0.1604 c 0,1.1336 -0.6432,1.9148 -0.6432,3.5416 l 13.5308,-0.004 -0.9212,-3.0256 -0.556,-1.7424 -3.0412,-10.0356 c -0.2356,-0.3516 -0.4832,-0.686 -0.4832,-1.288 0,-1.2576 3.8792,-4.134 4.6544,-5.3068 l -2.7232,-8.374 h -43.9388 v 8.3688 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 94.20756,99.8918 h 10.784 v 5.794 c -1.5704,0 -4.6592,1.0424 -5.8208,0.6716 -1.2244,-0.3916 -3.7976,-1.5404 -4.9632,-1.6372 v -4.8284 z m 9.91744,-25.0793 0,13.40625 -34.5625,0 0,36.96875 60.0625,0 0,-36.96875 -6.6875,0 0,-13.40625 -4.46875,0 0,13.40625 -9.875,0 0,-13.40625 -4.46875,0 z m -29.0625,16.71875 43.9375,0 2.71875,8.375 c -0.7752,1.1728 -4.65625,4.0549 -4.65625,5.3125 0,0.602 0.23315,0.92965 0.46875,1.28125 l 3.0625,10.03125 0.5625,1.75 0.90625,3 -13.53125,0.0312 c 0,-1.6268 0.65625,-2.4289 0.65625,-3.5625 l 0,-0.15625 c 0,-0.6664 -0.70475,-2.6681 -0.96875,-3.0625 L 107.15625,110.8125 106.375,108.125 99.21875,109 c -0.0212,-0.088 -3.5855,-1.3564 -3.9375,-1.5 -0.67,-0.2724 -3.65625,-1.05705 -3.65625,-1.65625 l 0,-5.9375 -16.5625,0 0,-8.375 z" />';
	icons['GROUND.INSTALLATION.ICON.FIREARMS RETAILER'] = '<path stroke="none" d="m 85.135308,123.01194 -1.074219,0 -0.01074,-3.2334 c -0.751958,-0.0143 -1.503911,-0.10026 -2.255859,-0.25781 -0.751956,-0.16471 -1.507489,-0.4082 -2.266601,-0.73047 l 0,-1.93359 c 0.730466,0.45833 1.468095,0.80567 2.21289,1.04199 0.751948,0.22917 1.525385,0.34733 2.320313,0.35449 l 0,-4.89843 c -1.582687,-0.25781 -2.735681,-0.69466 -3.458985,-1.31055 -0.716148,-0.61588 -1.07422,-1.46093 -1.074218,-2.53516 -2e-6,-1.16731 0.390297,-2.08755 1.170898,-2.76074 0.780595,-0.67316 1.901362,-1.05988 3.362305,-1.16016 l 0,-2.52441 1.074218,0 0,2.49219 c 0.666008,0.0286 1.310539,0.10027 1.933594,0.21484 0.623037,0.10744 1.23176,0.25783 1.826172,0.45117 l 0,1.87988 c -0.594412,-0.30076 -1.206716,-0.53351 -1.836914,-0.69824 -0.623056,-0.1647 -1.264005,-0.26138 -1.922852,-0.29004 l 0,4.58692 c 1.625642,0.25066 2.821605,0.69825 3.587891,1.34277 0.766264,0.64454 1.149402,1.5254 1.149414,2.64258 -1.2e-5,1.21029 -0.408215,2.16634 -1.224609,2.86817 -0.809255,0.69466 -1.980153,1.0957 -3.512696,1.20312 l 0,3.25488 m -1.074218,-11.50488 0,-4.4043 c -0.830735,0.0931 -1.464523,0.32944 -1.901367,0.70899 -0.436854,0.37957 -0.655278,0.88445 -0.655274,1.51465 -4e-6,0.61589 0.200517,1.09571 0.601562,1.43945 0.408199,0.34376 1.059891,0.59083 1.955079,0.74121 m 1.074218,2.0625 0,4.65137 c 0.909497,-0.12175 1.593416,-0.37956 2.051758,-0.77344 0.465485,-0.39388 0.698232,-0.91308 0.698242,-1.55762 -1e-5,-0.6302 -0.222015,-1.1315 -0.666015,-1.50391 -0.436858,-0.37238 -1.131519,-0.64452 -2.083985,-0.8164 m 22.588034,-21.929189 -8.000001,20.799999 0.750001,0.2875 8,-20.799999 -0.75,-0.2875 z m -42.962501,6.5375 0.0125,0.8125 0.35,25.962499 0.0125,0.7875 0.7875,0 32.1875,-0.1875 0.3625,0 0.2375,-0.275 7.287501,-8.7125 0.2,-0.2375 -0.0125,-0.3 -0.175,-10.125 0,-0.3875 -0.3,-0.225 -8.362521,-6.587499 -0.2125,-0.1625 -0.275,0 -31.2875,-0.3625 -0.8125,0 z m 1.625,1.6125 30.1875,0.349999 7.850001,6.1625 0.1625,9.45 -6.862501,8.2 -31.0125,0.1875 -0.325,-24.349999 z M 97.344291,85.405199 h 14.399999 v 7.728 c -2.112,0 -6.192,1.392 -7.776,0.912 -1.632,-0.528 -5.039999,-2.064 -6.623999,-2.208 v -6.432 z m -25.536,0 h 22.08 v 7.92 c 0,0.816 3.984,1.872 4.848,2.208 0.48,0.192 5.183999,1.872 5.231999,1.968 l 9.552,-1.152 1.008,3.6 1.392,4.944001 c 0.336,0.528 1.296,3.168 1.296,4.08 v 0.192 c 0,1.488 -0.864,2.544 -0.864,4.704 h 18.048 l -1.104,-3.936 -0.768,-2.352 -4.032,-13.392001 c -0.336,-0.48 -0.624,-0.912 -0.624,-1.728 0,-1.68 5.184,-5.52 6.192,-7.056 l -3.648,-11.136 H 71.808291 v 11.136 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 85.13531,113.56956 0,4.65137 c 0.909497,-0.12175 1.593416,-0.37956 2.051758,-0.77344 0.465485,-0.39388 0.698232,-0.91308 0.698242,-1.55762 -1e-5,-0.6302 -0.222015,-1.1315 -0.666015,-1.50391 -0.436858,-0.37238 -1.131519,-0.64452 -2.083985,-0.8164 m -1.074218,-2.0625 0,-4.4043 c -0.830735,0.0931 -1.464523,0.32944 -1.901367,0.70899 -0.436854,0.37957 -0.655278,0.88445 -0.655274,1.51465 -4e-6,0.61589 0.200517,1.09571 0.601562,1.43945 0.408199,0.34376 1.059891,0.59083 1.955079,0.74121 M 66.375,99.78125 l 0.34375,24.34375 31,-0.1875 6.875,-8.1875 -0.15625,-9.4375 -7.875,-6.1875 -30.1875,-0.34375 z m 17.6875,3.28125 1.0625,0 0,2.5 c 0.666008,0.0286 1.314445,0.10418 1.9375,0.21875 0.623037,0.10744 1.249338,0.24416 1.84375,0.4375 l 0,1.875 c -0.594412,-0.30076 -1.213552,-0.52277 -1.84375,-0.6875 -0.623056,-0.1647 -1.278653,-0.25259 -1.9375,-0.28125 l 0,4.5625 c 1.625642,0.25066 2.827464,0.69923 3.59375,1.34375 0.766264,0.64454 1.156238,1.53907 1.15625,2.65625 -1.2e-5,1.21029 -0.402356,2.17317 -1.21875,2.875 -0.809255,0.69466 -1.998707,1.08008 -3.53125,1.1875 l 0,3.25 -1.0625,0 0,-3.21875 c -0.751958,-0.0143 -1.529302,-0.0924 -2.28125,-0.25 -0.751956,-0.16471 -1.490888,-0.42773 -2.25,-0.75 l 0,-1.9375 c 0.730466,0.45833 1.473955,0.82618 2.21875,1.0625 0.751948,0.22917 1.517572,0.33659 2.3125,0.34375 l 0,-4.90625 c -1.582687,-0.25781 -2.745446,-0.69661 -3.46875,-1.3125 -0.716148,-0.61588 -1.062502,-1.45702 -1.0625,-2.53125 -2e-6,-1.16731 0.375649,-2.07681 1.15625,-2.75 0.780595,-0.67316 1.914057,-1.05597 3.375,-1.15625 l 0,-2.53125 z" />';
	icons['GROUND.INSTALLATION.ICON.HAZARDOUS MATERIAL PRODUCTION'] = '<path stroke="none" d="m 104.67016,71.78 h 5 v 15 h 11.08 v -15 h 5 v 15 h 7.52 v 41.44 h -67.36 V 86.78 h 38.76 v -15 z m -40,57.88 h 69.84 V 85.54 h -7.12 v -15.2 h -8.04 v 15.2 h -8.04 v -15.2 h -8.04 v 15.2 h -38.6 v 44.12 l 0,0 z m 15.52,-21.8 h 38.6 l -19.32,18.64 -19.28,-18.64 z m 21.8,-16.8 c 0.52,0.36 4.32,3.84 4.32,4.28 v 12 h -4.32 V 91.06 z m -5.04,-0.04 0.04,16.32 h -4.28 l 0.12,-12.2 4.12,-4.12 0,0 z m -12.08,12.04 c 0,-0.44 3.12,-3.24 3.56,-3.56 v 7.84 h -3.56 v -4.28 z m 25.72,-3.6 3.72,3.44 c -0.2,0.44 -0.16,-0.2 -0.16,0.48 v 3.96 h -3.56 v -7.88 z m 9.44,8.2 -20.52,-20 -20.44,19.96 20.44,19.92 20.52,-19.88 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 99.47016,126.5 19.32,-18.64 -38.6,0 z m 0.04,1.04 -20.44,-19.92 20.44,-19.96 20.52,20.04 -20.52,19.84 z m 5.16,-40.76 h -38.76 v 41.44 h 67.36 V 86.78 h -7.52 v -15 h -5 v 15 h -11.08 v -15 h -5 v 15 z m 5.92,20.56 h 3.56 v -3.96 c 0,-0.68 -0.04,-0.08 0.16,-0.52 l -3.72,-3.4 v 7.88 z m -8.6,0 h 4.28 v -12 c 0,-0.44 -3.76,-3.92 -4.28,-4.28 v 16.28 z m -9.28,0 4.28,0 -0.04,-16.32 -4.12,4.12 z m -7.84,-4.28 v 4.28 h 3.56 v -7.88 c -0.48,0.32 -3.56,3.16 -3.56,3.6 z" />';
	icons['GROUND.INSTALLATION.ICON.HAZARDOUS MATERIAL STORAGE'] = '<path stroke="none" d="m 122.39125,68.849381 c 0.4401,0.148965 0.86666,0.467194 1.27969,0.954687 0.41978,0.487506 0.83957,1.157818 1.25937,2.010938 l 2.08204,4.143749 -2.20391,0 -1.93984,-3.889843 c -0.50105,-1.01562 -0.98855,-1.689317 -1.4625,-2.021094 -0.4672,-0.331764 -1.10704,-0.49765 -1.91953,-0.497656 l -2.23438,0 0,6.408593 -2.05156,0 0,-15.16328 4.63125,0 c 1.73332,1.5e-5 3.02655,0.362254 3.87969,1.086719 0.85311,0.724492 1.27967,1.81798 1.27968,3.280468 -10e-6,0.954697 -0.22345,1.746884 -0.67031,2.376563 -0.44011,0.629695 -1.08334,1.066413 -1.92969,1.310156 m -5.13906,-6.367969 0,5.382813 2.57969,0 c 0.98853,8e-6 1.73332,-0.226815 2.23437,-0.680469 0.50781,-0.460408 0.76171,-1.134105 0.76172,-2.021094 -10e-6,-0.886967 -0.25391,-1.553894 -0.76172,-2.000781 -0.50105,-0.453633 -1.24584,-0.680455 -2.23437,-0.680469 l -2.57969,0 m -12.26875,-0.294531 c -1.48959,1.4e-5 -2.67448,0.555222 -3.55469,1.665625 -0.87344,1.110428 -1.31016,2.623707 -1.31015,4.539844 -1e-5,1.90938 0.43671,3.419274 1.31015,4.529687 0.88021,1.110418 2.0651,1.665626 3.55469,1.665625 1.48957,1e-6 2.6677,-0.555207 3.53438,-1.665625 0.87342,-1.110413 1.31014,-2.620307 1.31015,-4.529687 -10e-6,-1.916137 -0.43673,-3.429416 -1.31015,-4.539844 -0.86668,-1.110403 -2.04481,-1.665611 -3.53438,-1.665625 m 0,-1.665625 c 2.12603,1.5e-5 3.82551,0.714338 5.09844,2.142969 1.2729,1.421887 1.90936,3.33126 1.90937,5.728125 -10e-6,2.390109 -0.63647,4.299482 -1.90937,5.728124 -1.27293,1.421876 -2.97241,2.132812 -5.09844,2.132813 -2.13282,-10e-7 -3.83907,-0.710937 -5.118749,-2.132813 -1.272918,-1.421871 -1.909376,-3.331244 -1.909374,-5.728124 -2e-6,-2.396865 0.636456,-4.306238 1.909374,-5.728125 1.279679,-1.428631 2.985929,-2.142954 5.118749,-2.142969 m -20.972655,0.274219 12.827344,0 0,1.726562 -5.382813,0 0,13.436718 -2.061718,0 0,-13.436718 -5.382813,0 0,-1.726562 m -2.010936,0.497656 0,2.000781 c -0.778657,-0.372383 -1.513291,-0.649986 -2.203907,-0.832812 -0.690633,-0.182799 -1.357559,-0.274205 -2.000781,-0.274219 -1.117193,1.4e-5 -1.980473,0.21668 -2.589843,0.65 -0.602608,0.433346 -0.90391,1.049491 -0.903907,1.848437 -3e-6,0.670323 0.199736,1.178135 0.599219,1.523438 0.406246,0.338551 1.171349,0.612769 2.295312,0.822656 l 1.239063,0.253906 c 1.530199,0.291155 2.657542,0.805737 3.382031,1.54375 0.731238,0.731257 1.096863,1.713026 1.096875,2.945313 -1.2e-5,1.469273 -0.494282,2.583074 -1.482812,3.341406 -0.981781,0.758333 -2.423967,1.137499 -4.326563,1.1375 -0.717714,-10e-7 -1.482817,-0.08125 -2.295312,-0.24375 -0.805732,-0.1625 -1.64193,-0.402864 -2.508594,-0.721094 l 0,-2.1125 c 0.83281,0.46719 1.648695,0.819273 2.447656,1.05625 0.798954,0.236981 1.58437,0.35547 2.35625,0.355469 1.171347,1e-6 2.075252,-0.230207 2.711719,-0.690625 0.636449,-0.460414 0.954677,-1.117184 0.954687,-1.970313 -1e-5,-0.744786 -0.230218,-1.327078 -0.690625,-1.746875 -0.453654,-0.419785 -1.201831,-0.734628 -2.244531,-0.944531 l -1.249219,-0.24375 c -1.530212,-0.30468 -2.637242,-0.782023 -3.321093,-1.432031 -0.683856,-0.649991 -1.025783,-1.553896 -1.025781,-2.711719 -2e-6,-1.340612 0.470571,-2.396861 1.411718,-3.168749 0.947913,-0.77186 2.251297,-1.157798 3.910156,-1.157813 0.710931,1.5e-5 1.435409,0.06434 2.173438,0.192969 0.738011,0.128661 1.492958,0.321629 2.264844,0.578906 M 70.55016,109.95876 h 57.9 l -28.98,27.9 -28.92,-27.9 z m 32.76,-25.200005 c 0.78,0.54 6.42,5.76 6.42,6.42 v 17.940005 h -6.42 V 84.758755 z m -7.56,-0.06 0.06,24.420005 h -6.48 l 0.18,-18.300005 6.24,-6.12 0,0 z m -18.18,18.000005 c 0,-0.66 4.68,-4.860005 5.34,-5.340005 v 11.820005 h -5.34 v -6.48 z m 38.58,-5.340005 5.58,5.160005 c -0.3,0.66 -0.24,-0.3 -0.24,0.72 v 5.88 h -5.34 V 97.358755 z m 14.16,12.300005 -30.72,-30.060005 -30.72,30.000005 30.66,29.88 30.78,-29.82 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 99.47016,137.85875 28.98,-27.9 -57.9,0 z m 16.68,-28.73999 h 5.34 v -5.88 c 0,-1.02 -0.06,-0.12 0.24,-0.72 l -5.58,-5.160005 v 11.760005 z m -12.84,0 h 6.42 V 91.178755 c 0,-0.66 -5.64,-5.88 -6.42,-6.42 v 24.360005 z m -13.98,-10e-6 6.48,0 -0.06,-24.419995 -6.24,6.12 z m -11.76,-6.41999 v 6.42 h 5.34 V 97.358755 c -0.72,0.48 -5.34,4.679995 -5.34,5.339995 z" />';
	icons['GROUND.INSTALLATION.ICON.INDUSTRIAL SITE'] = '<path stroke="none" d="m 104.13156,74.823 h 4.4616 v 13.3852 h 9.8796 V 74.823 h 4.462 v 13.3852 h 6.6916 v 36.9684 H 69.55276 V 88.2082 h 34.5784 l 4e-4,-13.3852 0,0 z m -35.694,51.6288 h 62.3052 V 86.9334 h -6.374 V 73.5482 h -7.1704 v 13.3852 h -7.1708 V 73.5482 h -7.1708 v 13.3852 h -34.4192 v 39.5184 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 104.13156,74.823 h 4.4616 v 13.3852 h 9.8796 V 74.823 h 4.462 v 13.3852 h 6.6916 v 36.9684 H 69.55276 V 88.2082 h 34.5784 l 4e-4,-13.3852 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.LANDFILL'] = '<path stroke="none" d="m 124.12416,115.786 c 0,2.484 1.584,2.736 2.952,3.636 h -22.752 c 1.152,-0.72 2.808,-1.188 2.808,-3.312 v -1.152 c 0,-1.332 -1.872,-2.808 -3.636,-2.808 -1.008,0 -1.8,0.396 -2.34,0.936 -0.36,0.36 -1.116,1.584 -1.116,2.052 v 1.332 c 0,0.216 0.864,1.728 1.044,1.944 0.612,0.684 1.152,0.612 1.764,1.044 h -8.604 c 0.576,-0.432 1.26,-0.54 1.764,-1.08 0.36,-0.396 0.576,-1.404 1.044,-1.584 v -1.656 c 0,-0.396 -0.864,-1.836 -1.188,-2.088 -0.648,-0.576 -1.296,-0.9 -2.448,-0.9 h -0.144 c -1.692,0 -3.456,1.476 -3.456,3.132 v 1.332 c 0,1.512 1.98,2.232 2.808,2.808 h -8.748 c -0.072,-3.24 -2.52,-1.836 -3.132,-2.952 -1.116,-1.944 0.9,-2.196 -2.844,-3.132 -3.132,-0.756 -2.016,-0.288 -3.888,-2.196 -0.648,-0.684 -2.988,-1.764 -4.176,-1.764 h -0.144 c -1.008,0 -1.908,1.152 -2.736,1.548 -1.116,0.54 -2.268,0.36 -3.24,1.08 -1.08,0.792 -2.268,4.356 -2.268,6.156 v 0.648 h -0.36 v 2.16 h 72.072 4.932 v -1.548 h -9.54 c 0.792,-0.504 0.936,-0.18 1.8,-1.044 0.36,-0.36 0.864,-1.476 1.188,-1.62 v -1.62 c 0,-0.468 -0.936,-1.872 -1.296,-2.16 -0.684,-0.468 -1.368,-0.828 -2.52,-0.828 -1.944,0 -3.636,1.512 -3.636,3.456 v 0.18 h 0.036 z m -1.008,-17.64 h 3.456 c 0.468,0 4.176,4.788 4.608,5.436 h -8.064 v -5.436 z m -4.14,-17.82 -0.72,-1.296 -6.984,3.852 1.404,3.528 -32.004,14.544 c 0.756,0.432 2.052,4.32 2.556,5.256 0.216,0.396 2.268,5.04 2.268,5.148 0,0.504 -0.9,0.216 -0.828,0.648 l 0.54,3.132 h 3.42 c 0,-2.448 1.98,-4.788 4.284,-4.788 h 0.972 c 2.376,0 4.284,2.304 4.284,4.788 h 0.648 c 0,-2.376 0.612,-2.304 1.476,-3.636 l -2.088,-5.616 9.54,-4.32 4.212,9.9 -5.148,0.036 c 0.864,1.296 1.62,1.296 1.62,3.636 h 14.364 v -0.504 c 0,-2.052 2.52,-4.284 4.788,-4.284 h 0.504 c 2.556,0 4.608,2.16 4.608,4.788 h 2.628 v -3.132 h -1.152 v -7.416 c 0,-1.224 -5.76,-6.804 -6.12,-8.064 h -6.408 v 15.012 h -4.14 l -5.328,-12.06 5.472,-2.268 -4.284,-9.468 5.616,-7.416 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 123.11616,103.582 h 8.1 c -0.468,-0.648 -4.176,-5.436 -4.644,-5.436 h -3.456 v 5.436 z" />';
	icons['GROUND.INSTALLATION.ICON.PHARMACEUTICAL MANUFACTURER'] = '<path stroke="none" d="m 105.18,71.3 h 5.08 V 86.54 H 121.5 V 71.3 h 5.08 v 15.24 h 7.64 v 42.12 H 65.78 V 86.58 h 39.4 V 71.3 z M 64.5,130.14 h 71 V 85.3 h -7.28 V 69.86 h -8.16 V 85.3 h -8.2 V 69.86 H 103.7 V 85.3 H 64.5 v 44.84 z M 90.26,93.1 h 7.64 c 1.24,0 3.44,1.8 3.44,2.72 v 2.56 c 0,1.28 -2.4,2.92 -3.64,2.92 h -7.44 v -8.2 z m -4.88,26.52 h 4.92 v -13.08 l 1.72,0.08 7.56,9.96 -8.76,11 5.88,0.08 5.92,-6.96 c 1.24,0.32 4.16,5.92 5.64,6.88 h 6.16 c -0.88,-1.68 -8.36,-10.36 -8.36,-11.04 0,-0.32 7.44,-9.72 8.16,-10.36 l -6.04,-0.08 -5.64,6.16 -4.28,-5.72 c 5.24,-1.24 8.36,-3.32 8.36,-9.8 v -0.56 c 0,-2 -1.68,-4.72 -2.76,-5.76 -1.04,-1 -4.08,-2.4 -6.16,-2.4 H 85.38 v 31.6 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 85.38,88.02 h 12.36 c 2.08,0 5.08,1.4 6.12,2.4 1.08,1.08 2.76,3.76 2.76,5.76 v 0.56 c 0,6.48 -3.12,8.6 -8.36,9.8 l 4.28,5.72 5.64,-6.16 6.08,0.08 c -0.76,0.64 -8.2,10.04 -8.2,10.36 0,0.72 7.44,9.4 8.36,11.08 h -6.16 c -1.48,-1 -4.4,-6.56 -5.64,-6.88 l -5.92,6.92 -5.88,-0.08 8.76,-11.04 -7.56,-9.92 -1.76,-0.08 v 13.08 h -4.88 v -31.6 z m 19.8,-1.44 h -39.4 v 42.12 h 68.44 V 86.58 h -7.64 V 71.3 H 121.5 V 86.54 H 110.26 V 71.3 h -5.08 v 15.28 z m -14.92,14.68 h 7.44 c 1.24,0 3.64,-1.64 3.64,-2.92 v -2.52 c 0,-0.96 -2.24,-2.72 -3.44,-2.72 h -7.64 v 8.16 z" />';
	icons['GROUND.INSTALLATION.ICON.CONTAMINATED HAZARDOUS WASTE SITE'] = '<path stroke="none" d="m 133.67805,71.510322 c -0.34409,0 -0.65714,0.087 -0.95,0.2375 l -49.450003,0 -0.725,0 0,0.1375 c -0.69898,0.261954 -1.27155,0.885768 -1.75,1.675 -0.634544,1.04672 -1.167242,2.475998 -1.6125,4.2125 -0.890514,3.473005 -1.425,8.19323 -1.425,13.4125 0,4.81873 0.466749,9.206718 1.2375,12.587498 -0.987068,0.12251 -2.092778,0.50018 -2.9875,0.3375 -1.152,-0.144 -2.5415,-0.0875 -3.8375,-0.0875 -1.344,0 -6.525,-0.861 -6.525,0.675 0,1.824 5.9995,3.3535 7.4875,6.1375 -0.816,1.488 -5.8565,1.391 -8.1125,1.775 -1.488,0.24 -2.9735,0.236 -3.8375,1.1 -1.008,1.008 0.188,2.2575 1.1,2.7375 1.68,0.912 6.0045,1.0095 8.2125,1.5375 1.344,0.336 2.5825,0.675 3.0625,1.875 0.432,1.056 0.5805,2.5875 2.2125,2.5875 l 0.15,0 c 2.112,0 5.0785,-1.725 7.8625,-1.725 l 1.0625,0 c 6.192,0 6.7675,7.389 12.2875,7.725 3.504003,0.24 5.281003,-0.8085 7.825003,-1.9125 1.584,-0.672 5.4635,-2.7875 7.2875,-2.7875 l 0.2875,0 c 1.824,0 3.314,1.0575 4.85,1.5375 1.632,0.528 3.313,1.0125 5.425,1.0125 l 0.525,0 c 1.248,0 2.263,-0.2015 3.175,-0.5375 1.248,-0.432 1.148,-0.96 1.1,-2.4 -0.096,-1.872 -2.202,-3.257 -3.45,-4.025 -1.44,-0.864 -3.364,-1.832 -4.9,-2.6 -0.816,-0.432 -1.53,-0.9095 -2.25,-1.4375 -1.344,-0.96 -1.0155,-0.6225 -1.6875,-2.0625 1.2,-1.824 6.9125,0.189 6.9125,-1.875 0,-0.234 -0.31816,-0.48087 -0.7375,-0.725 l 12.175,0 0.725,0 0,-0.3875 c 0.70247,-0.26195 1.28405,-0.88577 1.7625,-1.675 0.63454,-1.04672 1.16724,-2.47599 1.6125,-4.2125 0.89051,-3.473 1.425,-8.193224 1.425,-13.412498 0,-5.21927 -0.53449,-9.939495 -1.425,-13.4125 -0.44526,-1.736502 -0.97796,-3.16578 -1.6125,-4.2125 -0.63455,-1.046719 -1.44537,-1.8125 -2.4875,-1.8125 z m 0.275,1.4375 c 0.28035,0 0.74145,0.277152 1.25,1.125 0.50855,0.847848 1.0061,2.161349 1.425,3.8125 0.83779,3.302304 1.375,7.943003 1.375,13.0625 0,5.1195 -0.53721,9.760198 -1.375,13.062498 -0.4189,1.65115 -0.91645,2.96465 -1.425,3.8125 -0.50855,0.84785 -0.96965,1.125 -1.25,1.125 -0.18005,0 -0.42257,-0.11862 -0.7125,-0.425 l 0,0.6625 -47.887503,0 c 0.199099,-0.22163 0.390823,-0.4221 0.5875,-0.75 0.571433,-0.95268 1.082654,-2.31819 1.5125,-4.0125 0.859552,-3.38807 1.4,-8.067297 1.4,-13.237498 0,-5.170198 -0.540555,-9.837356 -1.4,-13.225 -0.429631,-1.693465 -0.939458,-3.069633 -1.5125,-4.025 -0.193078,-0.321898 -0.379755,-0.517951 -0.575,-0.7375 l 47.875003,0 0,0.175 c 0.28993,-0.306376 0.53245,-0.425 0.7125,-0.425 z m -50.675003,0.2375 c 0.283354,0 0.748516,0.277152 1.2625,1.125 0.513984,0.847848 1.014128,2.173849 1.4375,3.825 0.846745,3.302304 1.3875,7.930503 1.3875,13.05 0,5.1195 -0.540755,9.760198 -1.3875,13.062498 -0.423372,1.65115 -0.923516,2.96465 -1.4375,3.8125 -0.513984,0.84785 -0.979146,1.125 -1.2625,1.125 -0.283351,0 -0.736016,-0.27715 -1.25,-1.125 -0.283339,-0.46738 -0.560614,-1.08354 -0.825,-1.8125 0.422182,1.73584 0.97518,3.03749 1.675,3.5375 l 8.2625,-0.2 7.1,0.1 20.262503,-0.05 c 0.45476,0 1.48226,0.51109 2.2625,1 l 0.0375,0 c 0.45971,0.28763 0.83792,0.56483 0.9625,0.725 -0.14797,0.1942 -0.36309,0.33088 -0.625,0.4375 -0.24401,0.10574 -0.5364,0.18044 -0.85,0.225 -0.41937,0.0584 -0.88257,0.0654 -1.3375,0.0625 -0.23481,-0.002 -0.47263,-0.005 -0.7,-0.0125 -0.4448,-0.0155 -0.864,-0.0375 -1.2,-0.0375 l -0.2875,0 c -0.86401,0 -1.725,0.48599 -1.725,1.35 l 0,0.0875 0,0.05 c 0.003,0.084 0.0185,0.16635 0.0375,0.25 0.68447,3.01667 11.33793,5.84437 11.925,9.1625 0.0227,0.10991 0.0375,0.2265 0.0375,0.3375 -0.002,0.0501 -0.006,0.10183 -0.0125,0.15 -0.16521,1.56989 -2.93482,2.16286 -5.225,2.2 -0.65356,0.0224 -1.27057,0.002 -1.7625,-0.05 -2.592,-0.38399 -5.426,-2.2625 -7.25,-2.2625 -5.28,0 -9.513,5.52002 -15.225003,4.8 -4.416001,-0.576 -5.5195,-7.8625 -12.2875,-7.8625 l -1.2875,0 c -2.975999,0 -5.568004,1.725 -8.4,1.725 -0.470241,0 -0.728209,-0.25789 -0.9125,-0.6375 -0.02206,-0.0397 -0.04236,-0.0822 -0.0625,-0.125 -0.215673,-0.45827 -0.332788,-1.08117 -0.5875,-1.65 -0.0016,-0.003 0.0016,-0.009 0,-0.0125 -0.02482,-0.055 -0.05985,-0.10885 -0.0875,-0.1625 -0.01815,-0.0323 -0.03055,-0.0684 -0.05,-0.1 -0.02932,-0.0522 -0.06722,-0.0998 -0.1,-0.15 -0.113749,-0.15811 -0.250498,-0.299 -0.4125,-0.425 -1.152004,-0.86397 -2.307492,-1.06202 -3.9875,-1.35 -1.860686,-0.34176 -5.751825,-0.3353 -7.3,-1.525 -0.04343,-0.031 -0.08502,-0.0548 -0.125,-0.0875 -0.01789,-0.0159 -0.0329,-0.0337 -0.05,-0.05 -0.03662,-0.032 -0.07925,-0.0663 -0.1125,-0.1 -0.01233,-0.0138 -0.01322,-0.036 -0.025,-0.05 -0.0057,-0.006 -0.01946,-0.006 -0.025,-0.0125 -0.240117,-0.26445 -0.375,-0.575 -0.375,-0.95 l 0,-0.2875 c 0,-2.112 13.2,-0.921 13.2,-3.225 0,-0.276 -0.118781,-0.56086 -0.3375,-0.85 -0.04106,-0.0543 -0.09,-0.10789 -0.1375,-0.1625 -0.01507,-0.0166 -0.03437,-0.0333 -0.05,-0.05 -0.05091,-0.0562 -0.105354,-0.1185 -0.1625,-0.175 -0.01597,-0.0153 -0.0336,-0.0346 -0.05,-0.05 -0.136711,-0.13129 -0.296806,-0.25518 -0.4625,-0.3875 -1.719129,-1.349 -4.756732,-2.74207 -6.2625,-3.85 -0.14869,-0.1072 -0.281672,-0.19809 -0.4,-0.3 -0.01852,-0.0165 -0.03239,-0.0337 -0.05,-0.05 -0.04629,-0.0412 -0.08446,-0.0848 -0.125,-0.125 -0.01706,-0.0178 -0.03417,-0.0324 -0.05,-0.05 -0.03634,-0.0379 -0.06931,-0.0755 -0.1,-0.1125 -0.104596,-0.12625 -0.181186,-0.24768 -0.2125,-0.3625 0.336,-0.144 0.5825,-0.2875 1.0625,-0.2875 l 2.925,0 6.2875,0.2875 2.65,-0.3125 c 9.43e-4,0.004 -9.37e-4,0.009 0,0.0125 l 0.6625,-0.0875 0.8375,0.125 c -0.0034,-0.0132 -0.0091,-0.0241 -0.0125,-0.0375 -0.846744,-3.3023 -1.3875,-7.942998 -1.3875,-13.062498 0,-5.119497 0.540756,-9.747696 1.3875,-13.05 0.423373,-1.651152 0.923516,-2.977152 1.4375,-3.825 0.513984,-0.847848 0.966649,-1.125 1.25,-1.125 z m 27.650003,1.15 -17.375003,16.975 17.375003,16.924998 17.45,-16.899998 -17.45,-17 z m -2.175,2.8625 0.0375,13.8375 -3.6375,0 0.1,-10.375 3.5,-3.4625 z m 4.2875,0.025 c 0.442,0.306 3.6375,3.301 3.6375,3.675 l 0,10.1625 -3.6375,0 0,-13.8375 z m 7.275,7.15 3.1625,2.925 c -0.0637,0.14026 -0.0995,0.146068 -0.1125,0.1375 -0.003,-0.0096 0.0125,0.0062 0.0125,0.3 l 0,3.325 -3.0625,0 0,-6.6875 z m -18.8375,0.025 0,6.7 -3.025003,0 0,-3.675 c 0,-0.374 2.651003,-2.753 3.025003,-3.025 z m -6.962503,7.1125 32.800003,0 -16.45,15.837498 -16.350003,-15.837498 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 133.95305,72.947822 c -0.18005,0 -0.42257,0.118624 -0.7125,0.425 l 0,-0.175 -47.875003,0 c 0.195245,0.219549 0.381922,0.415602 0.575,0.7375 0.573042,0.955367 1.082869,2.331535 1.5125,4.025 0.859445,3.387644 1.4,8.054802 1.4,13.225 0,5.170201 -0.540448,9.849428 -1.4,13.237498 -0.429846,1.69431 -0.941067,3.05982 -1.5125,4.0125 -0.196677,0.3279 -0.388401,0.52837 -0.5875,0.75 l 47.887503,0 0,-0.6625 c 0.28993,0.30638 0.53245,0.425 0.7125,0.425 0.28035,0 0.74145,-0.27715 1.25,-1.125 0.50855,-0.84785 1.0061,-2.16135 1.425,-3.8125 0.83779,-3.3023 1.375,-7.942998 1.375,-13.062498 0,-5.119497 -0.53721,-9.760196 -1.375,-13.0625 -0.4189,-1.651151 -0.91645,-2.964652 -1.425,-3.8125 -0.50855,-0.847848 -0.96965,-1.125 -1.25,-1.125 z m -50.675003,0.2375 c -0.283351,0 -0.736016,0.277152 -1.25,1.125 -0.513984,0.847848 -1.014127,2.173848 -1.4375,3.825 -0.846744,3.302304 -1.3875,7.930503 -1.3875,13.05 0,5.1195 0.540756,9.760198 1.3875,13.062498 0.0034,0.0134 0.0091,0.0242 0.0125,0.0375 l -0.8375,-0.125 -3.3125,0.4375 -6.2375,-0.2875 -2.9375,0 c -0.480012,0 -0.761986,0.0954 -1.05,0.2875 0.432004,1.58399 8.4,4.317 8.4,6.525 0,2.30401 -13.2,1.05251 -13.2,3.2125 l 0,0.2875 c 0,2.448 5.6105,2.3055 7.9625,2.7375 1.680008,0.28798 2.835496,0.48603 3.9875,1.35 1.296012,1.008 0.820506,3.2625 2.2125,3.2625 2.831996,0 5.424001,-1.725 8.4,-1.725 l 1.2875,0 c 6.768,0 7.871499,7.2865 12.2875,7.8625 5.712003,0.72002 9.945003,-4.8 15.225003,-4.8 1.824,0 4.658,1.87851 7.25,2.2625 2.256,0.24004 7,-0.19008 7,-2.35 0,-3.552 -12,-6.534 -12,-9.75 l 0,-0.0875 c 0,-0.86401 0.86099,-1.35 1.725,-1.35 l 0.2875,0 c 1.39199,0 3.9425,0.33293 4.6625,-0.675 -0.33592,-0.432 -2.49252,-1.725 -3.2125,-1.725 l -20.262503,0.05 -7.1,-0.1 -8.2625,0.2 c -0.69982,-0.50001 -1.252818,-1.80164 -1.675,-3.53748 0.264386,0.72896 0.541661,1.34512 0.825,1.8125 0.513984,0.84785 0.966649,1.125 1.25,1.125 0.283354,0 0.748516,-0.27715 1.2625,-1.125 0.513984,-0.84785 1.014128,-2.16135 1.4375,-3.8125 0.846745,-3.3023 1.3875,-7.942998 1.3875,-13.062498 0,-5.119497 -0.540755,-9.747696 -1.3875,-13.05 -0.423372,-1.651151 -0.923516,-2.977152 -1.4375,-3.825 -0.513984,-0.847848 -0.979146,-1.125 -1.2625,-1.125 z m 27.650003,1.15 17.45,17 -17.45,16.899998 -17.375003,-16.924998 17.375003,-16.975 z m -2.175,2.8625 -3.5,3.4625 -0.1,10.375 3.6375,0 -0.0375,-13.8375 z m 4.2875,0.025 0,13.8375 3.6375,0 0,-10.1625 c 0,-0.374 -3.1955,-3.369 -3.6375,-3.675 z m 7.275,7.15 0,6.6875 3.0625,0 0,-3.325 c 0,-0.293779 -0.015,-0.309562 -0.0125,-0.3 0.013,0.0086 0.0487,0.0028 0.1125,-0.1375 l -3.1625,-2.925 z m -18.8375,0.025 c -0.374,0.272 -3.025003,2.651 -3.025003,3.025 l 0,3.675 3.025003,0 0,-6.7 z m -6.962503,7.1125 16.350003,15.837498 16.45,-15.837498 -32.800003,0 z" />';
	icons['GROUND.INSTALLATION.ICON.TOXIC RELEASE INVENTORY'] = '<path stroke="none" d="m 81.772366,61.037218 0,15.1625 2.05,0 0,-6.4125 2.2375,0 c 0.812493,6e-6 1.457805,0.168235 1.925,0.5 0.47395,0.331776 0.961454,1.00938 1.462504,2.025 l 1.9375,3.8875 2.2,0 -2.075,-4.15 c -0.41981,-0.85312 -0.84272,-1.524994 -1.2625,-2.0125 -0.41303,-0.487494 -0.84741,-0.801035 -1.2875,-0.95 0.84634,-0.243743 1.49738,-0.682805 1.9375,-1.3125 0.44686,-0.629678 0.66248,-1.420303 0.6625,-2.375 -2e-5,-1.462488 -0.42189,-2.550507 -1.275,-3.275 -0.85314,-0.724464 -2.141679,-1.087485 -3.875004,-1.0875 l -4.6375,0 z m 14.462504,0 0,15.1625 9.775,0 0,-1.725 -7.725,0 0,-5.5 7.225,0 0,-1.725 -7.225,0 0,-4.4875 7.5375,0 0,-1.725 -9.5875,0 z m 13.1625,0 0,15.1625 9.4375,0 0,-1.725 -7.3875,0 0,-13.4375 -2.05,0 z m -25.575004,1.6875 2.5875,0 c 0.988534,1.4e-5 1.72395,0.221367 2.225,0.675 0.507804,0.446887 0.762494,1.113032 0.762504,2 -10e-6,0.886989 -0.2547,1.564593 -0.762504,2.025 -0.50105,0.453654 -1.236466,0.675008 -2.225,0.675 l -2.5875,0 0,-5.375 z m 16.012504,14.7125 c -4.3494,1.1e-5 -8.28083,0.445398 -11.175004,1.1875 -1.447082,0.371051 -2.640233,0.808711 -3.5125,1.3375 -0.6542,0.396592 -1.179047,0.880716 -1.4,1.4625 l -0.1125,0 0,0.6 c -3.1e-5,0.0043 0,0.0082 0,0.0125 l 0,31.075002 -0.175,-0.7 c -0.107008,0.0268 -1.142619,0.0581 -2.35,0 -1.20738,-0.0581 -2.692875,-0.16171 -4.15,-0.25 -1.457124,-0.0883 -2.888219,-0.15299 -4.025,-0.1375 -0.56839,0.008 -1.05539,0.0301 -1.475,0.1 -0.209804,0.035 -0.404386,0.0832 -0.6,0.1625 -0.195613,0.0793 -0.431891,0.18636 -0.6125,0.4875 -0.255716,0.42619 -0.355925,0.9211 -0.2875,1.375 0.06843,0.45389 0.269041,0.84369 0.525,1.175 0.511918,0.66261 1.228069,1.17951 1.9375,1.7 0.709432,0.52049 1.417001,1.03659 1.8875,1.525 0.4705,0.48841 0.657985,0.86243 0.625,1.225 -0.0079,0.087 -0.02924,0.17096 -0.225,0.325 -0.19576,0.15403 -0.555257,0.32319 -1.0125,0.475 -0.914485,0.30361 -2.215762,0.51831 -3.5375,0.6875 -1.321737,0.16919 -2.65582,0.29747 -3.725,0.4875 -0.53459,0.095 -1.005176,0.20869 -1.4125,0.375 -0.203662,0.0832 -0.400726,0.17831 -0.5875,0.3375 -0.186773,0.15918 -0.375223,0.41386 -0.425,0.7375 -0.136554,0.88753 0.330672,1.70392 0.9875,2.3125 0.656828,0.60857 1.539081,1.11482 2.6,1.5875 2.121839,0.94535 4.944615,1.7328 7.8625,2.4125 2.917886,0.6797 5.929533,1.242 8.35,1.675 2.420468,0.433 4.356736,0.77831 4.7625,0.9 2.015534,0.60486 3.348954,1.82085 4.862504,3.1625 1.51354,1.34165 3.21083,2.79933 5.825,3.5125 2.98968,0.81545 6.21066,-0.5863 9.4125,-1.9625 3.20183,-1.3762 6.40587,-2.77037 9.125,-2.55 0.10949,0.009 0.95361,0.19893 1.925,0.45 0.97138,0.25107 2.16018,0.56263 3.375,0.8375 1.21482,0.27487 2.44065,0.51051 3.5,0.6 1.05934,0.0895 1.97086,0.16613 2.725,-0.4875 0.76314,-0.66132 1.26034,-1.37549 1.425,-2.15 0.16465,-0.77451 -0.0366,-1.54019 -0.425,-2.1875 -0.7767,-1.29462 -2.22957,-2.2864 -3.8625,-3.225 -1.63294,-0.93861 -3.47138,-1.79363 -4.9875,-2.5625 -1.51612,-0.76887 -2.73939,-1.56603 -2.9625,-1.875 -0.19984,-0.27666 -0.15008,-0.24783 -0.0875,-0.375 0.0626,-0.12717 0.31008,-0.40254 0.725,-0.6625 0.82983,-0.51992 2.1623,-1.01197 3.175,-1.5375 0.50634,-0.26277 0.95652,-0.4954 1.2875,-1.0125 0.16548,-0.25855 0.27175,-0.65167 0.175,-1.0125 -0.0968,-0.36083 -0.33199,-0.62127 -0.5875,-0.825 -0.51103,-0.40747 -1.21302,-0.70587 -2.3125,-1.05 -1.09948,-0.34413 -2.59094,-0.70205 -4.575,-1.1125 l -0.275,1.325 0,-35.362502 0,-0.6 -0.1125,0 c -0.21846,-0.586815 -0.74161,-1.075874 -1.4,-1.475 -0.87227,-0.528785 -2.06542,-0.966456 -3.5125,-1.3375 -2.89418,-0.742087 -6.82561,-1.175012 -11.175,-1.175 z m 0,1.2 c 4.26624,-1.1e-5 8.13558,0.431887 10.8875,1.1375 1.37596,0.352806 2.46846,0.771682 3.175,1.2 0.25423,0.154119 0.44502,0.311924 0.5875,0.45 0.12444,0.121563 0.20611,0.236633 0.2625,0.3375 0.011,0.02078 0.029,0.04273 0.0375,0.0625 0.0109,0.02476 0.018,0.05195 0.025,0.075 0.0124,0.0442 0.025,0.0878 0.025,0.125 0,0.02952 -0.005,0.06602 -0.0125,0.1 -0.002,0.0091 -0.01,0.01558 -0.0125,0.025 -0.007,0.02594 -0.0129,0.04687 -0.025,0.075 -0.009,0.02214 -0.0125,0.0391 -0.025,0.0625 -0.0108,0.0207 -0.024,0.04084 -0.0375,0.0625 -0.0207,0.03342 -0.0479,0.06468 -0.075,0.1 -0.0408,0.05234 -0.0808,0.106209 -0.1375,0.1625 -0.004,0.0045 -0.008,0.0079 -0.0125,0.0125 -0.14307,0.13976 -0.3421,0.293656 -0.6,0.45 -0.70654,0.428322 -1.79904,0.847186 -3.175,1.2 -2.75192,0.705628 -6.62126,1.162489 -10.8875,1.1625 -4.26625,1.1e-5 -8.13558,-0.444387 -10.8875,-1.15 -1.375965,-0.352806 -2.468462,-0.771682 -3.175004,-1.2 -0.264952,-0.160619 -0.468404,-0.319533 -0.6125,-0.4625 -0.04838,-0.04801 -0.08865,-0.09261 -0.125,-0.1375 -0.01078,-0.01325 -0.01517,-0.02452 -0.025,-0.0375 -0.02487,-0.03262 -0.04351,-0.05676 -0.0625,-0.0875 -0.0052,-0.0083 -0.0077,-0.01681 -0.0125,-0.025 -0.02046,-0.03526 -0.03669,-0.0675 -0.05,-0.1 -0.03269,-0.07604 -0.05,-0.140968 -0.05,-0.2 0,-0.03006 0.0048,-0.06472 0.0125,-0.1 0.05387,-0.23784 0.306779,-0.575218 0.925,-0.95 0.70654,-0.428322 1.799041,-0.847186 3.175004,-1.2 2.75191,-0.705628 6.62125,-1.149989 10.8875,-1.15 z m 15,5.2625 0,34.125002 0.0375,0 0,5.6 c 0.11516,0.15654 0.1625,0.29402 0.1625,0.4 0,0.23613 -0.23096,0.62168 -0.9375,1.05 -0.70654,0.42832 -1.79904,0.84719 -3.175,1.2 -2.75192,0.70563 -6.62126,1.14999 -10.8875,1.15 -4.26625,1e-5 -8.13558,-0.44439 -10.8875,-1.15 -1.375964,-0.35281 -2.468462,-0.77168 -3.175004,-1.2 -0.629093,-0.38137 -0.877299,-0.72423 -0.925,-0.9625 l -0.0125,0 0,-0.0875 0,-1.85 c -0.06687,0.0515 -0.135628,0.0993 -0.2,0.15 l 0,-38.412502 c 0.100986,0.07084 0.203467,0.133902 0.3125,0.2 0.87227,0.528785 2.065416,0.966456 3.5125,1.3375 2.894174,0.742087 6.825604,1.187511 11.175004,1.1875 4.34939,-1.2e-5 8.28082,-0.457898 11.175,-1.2 1.44708,-0.371051 2.64023,-0.808711 3.5125,-1.3375 0.10903,-0.0661 0.21151,-0.129164 0.3125,-0.2 z m -15.225,6.075 -14.600004,14.225002 14.175004,13.825 0.775,0 14.2375,-13.8 -14.5875,-14.250002 z m -1.825,2.3875 0.025,11.600002 -3.075,0 0.075,-8.687502 2.975,-2.9125 z m 3.5875,0.025 c 0.37063,0.256596 3.05,2.736383 3.05,3.05 l 0,8.525002 -3.05,0 0,-11.575002 z m -9.6875,5.9875 0,5.625002 -2.5375,0 0,-3.0875 c 0,-0.31362 2.22388,-2.309417 2.5375,-2.537502 z m 15.7875,0 2.65,2.462502 c -0.14256,0.31361 -0.1125,-0.14719 -0.1125,0.3375 l 0,2.7875 -2.5375,0 0,-5.587502 z m -21.662504,5.987502 27.512504,0 -13.775,13.2875 -13.737504,-13.2875 z m -12.85,9.2625 c 1.05017,-0.0143 2.454925,0.0499 3.9,0.1375 1.445076,0.0876 2.924731,0.19041 4.1625,0.25 1.118325,0.0538 1.940929,0.10716 2.6125,-0.0125 l 0,10.025 0,0.6 0.3,0 c 0.215148,0.59334 0.748703,1.07259 1.4125,1.475 0.87227,0.52879 2.065416,0.96645 3.5125,1.3375 2.894174,0.74209 6.825604,1.18751 11.175004,1.1875 4.34939,-1e-5 8.28082,-0.4454 11.175,-1.1875 1.44708,-0.37105 2.64023,-0.80871 3.5125,-1.3375 0.87226,-0.52879 1.5125,-1.20656 1.5125,-2.075 0,-0.28619 -0.0755,-0.54123 -0.2,-0.7875 l 0,-5.6 c 1.92601,0.39965 3.3551,0.75969 4.3625,1.075 0.89192,0.27916 1.33519,0.51297 1.5875,0.675 -0.11656,0.0891 -0.14961,0.13256 -0.4,0.2625 -0.84916,0.44066 -2.21927,0.94321 -3.2875,1.6125 -0.53412,0.33464 -1.02098,0.70752 -1.3125,1.3 -0.29153,0.59248 -0.20617,1.41076 0.2375,2.025 0.69888,0.96783 1.97226,1.58755 3.525,2.375 1.55274,0.78744 3.36578,1.62345 4.9125,2.5125 1.54671,0.88905 2.80983,1.8663 3.2875,2.6625 0.23883,0.39809 0.29625,0.70234 0.225,1.0375 -0.0713,0.33515 -0.30965,0.76342 -0.9,1.275 0.0397,-0.0344 -0.61373,0.16553 -1.5375,0.0875 -0.92378,-0.078 -2.09572,-0.29567 -3.275,-0.5625 -1.17928,-0.26683 -2.36156,-0.57275 -3.3375,-0.825 -0.97594,-0.25225 -1.6542,-0.45653 -2.1875,-0.5 -3.33208,-0.27004 -6.71654,1.3192 -9.9,2.6875 -3.18347,1.3683 -6.14459,2.47995 -8.3625,1.875 -2.25664,-0.61563 -3.67635,-1.83405 -5.175,-3.1625 -1.49866,-1.32845 -3.06483,-2.78046 -5.4625,-3.5 -0.788639,-0.23651 -2.538396,-0.50609 -4.950004,-0.9375 -2.411607,-0.43141 -5.392485,-0.98145 -8.2625,-1.65 -2.870014,-0.66855 -5.634963,-1.46065 -7.575,-2.325 -0.970018,-0.43218 -1.722743,-0.89255 -2.1625,-1.3 -0.346909,-0.32143 -0.442773,-0.54044 -0.4625,-0.7375 0.208836,-0.0853 0.605903,-0.18941 1.0875,-0.275 0.963195,-0.17119 2.297638,-0.30189 3.65,-0.475 1.352363,-0.17311 2.72651,-0.37699 3.85,-0.75 0.561745,-0.18651 1.062902,-0.41591 1.4875,-0.75 0.424599,-0.3341 0.78341,-0.82991 0.8375,-1.425 0.09102,-1.00043 -0.436124,-1.83728 -1.0625,-2.4875 -0.626375,-0.65023 -1.402331,-1.18814 -2.1,-1.7 -0.697668,-0.51186 -1.317743,-1.00598 -1.6125,-1.3875 -0.147378,-0.19077 -0.21094,-0.34424 -0.225,-0.4375 -0.0079,-0.0523 0.03434,-0.11891 0.05,-0.175 0.04529,-0.0119 0.06485,-0.0254 0.1375,-0.0375 0.275247,-0.0459 0.712416,-0.0678 1.2375,-0.075 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 85.805677,104.36724 13.742143,13.28597 13.77065,-13.28597 z m 21.668103,-0.39915 h 2.53745 v -2.79405 c 0,-0.48468 -0.0285,-0.057 0.11404,-0.37064 l -2.65149,-2.423404 v 5.588094 z m -6.10128,0 h 3.05064 v -8.524693 c 0,-0.313617 -2.68,-2.794045 -3.05064,-3.050641 v 11.575334 z m -6.55745,-8.695757 -0.0855,8.695757 3.07915,0 -0.0285,-11.603845 z m -5.67363,5.645107 v 3.05065 h 2.53745 v -5.588094 c -0.34212,0.228085 -2.53745,2.223834 -2.53745,2.537444 z M 99.83337,85.430978 c -4.26625,1.2e-5 -8.13558,-0.444367 -10.8875,-1.149977 -1.375956,-0.35282 -2.468456,-0.77167 -3.175008,-1.199986 -0.706551,-0.428315 -0.937487,-0.813865 -0.937487,-1.04999 0,-0.236069 0.230936,-0.621676 0.937487,-1.049991 0.706552,-0.428316 1.799052,-0.847195 3.174998,-1.200014 2.75191,-0.705639 6.62125,-1.150006 10.88749,-1.150035 4.26625,-1.1e-5 8.13559,0.444367 10.88751,1.149978 1.37595,0.352819 2.46845,0.771669 3.175,1.199985 0.70656,0.428316 0.93749,0.813866 0.93752,1.049991 0,0.236068 -0.23094,0.621675 -0.93752,1.049991 -0.70652,0.428316 -1.79902,0.847194 -3.17499,1.200014 -2.75191,0.705639 -6.62125,1.150006 -10.8875,1.150034 z m -14.98962,-1.524728 0,38.40625 c 0.06437,-0.0507 0.12063,-0.0735 0.1875,-0.125 l 0,1.84375 0,0.0937 0.03125,0 c 0.0477,0.23827 0.277157,0.55613 0.90625,0.9375 0.706542,0.42832 1.811536,0.86594 3.1875,1.21875 2.75192,0.70561 6.60875,1.15626 10.875,1.15625 4.26624,-1e-5 8.15433,-0.45062 10.90625,-1.15625 1.37596,-0.35281 2.44971,-0.79043 3.15625,-1.21875 0.70654,-0.42832 0.9375,-0.79512 0.9375,-1.03125 0,-0.10598 -0.0411,-0.24971 -0.15625,-0.40625 l 0,-5.59375 -0.0312,0 0,-34.125 c -0.10099,0.07084 -0.20347,0.1214 -0.3125,0.1875 -0.87227,0.528789 -2.08417,0.972699 -3.53125,1.34375 -2.89418,0.742102 -6.80686,1.187488 -11.15625,1.1875 -4.3494,1.1e-5 -8.293326,-0.445413 -11.1875,-1.1875 -1.447084,-0.371044 -2.62773,-0.783715 -3.5,-1.3125 -0.109033,-0.0661 -0.211514,-0.14791 -0.3125,-0.21875 z m 14.78125,6.0625 14.5625,14.25 -14.21875,13.8125 -0.78125,0 L 85,104.1875 99.625,89.96875 z m -26.665134,23.65597 c 1.05017,-0.0143 2.454925,0.0499 3.9,0.1375 1.445076,0.0876 2.924731,0.19041 4.1625,0.25 1.118325,0.0538 1.940929,0.10716 2.6125,-0.0125 l 0,10.025 0,0.6 0.3,0 c 0.215148,0.59334 0.748703,1.07259 1.4125,1.475 0.87227,0.52879 2.065416,0.96645 3.5125,1.3375 2.894174,0.74209 6.825604,1.18751 11.175004,1.1875 4.34939,-1e-5 8.28082,-0.4454 11.175,-1.1875 1.44708,-0.37105 2.64023,-0.80871 3.5125,-1.3375 0.87226,-0.52879 1.5125,-1.20656 1.5125,-2.075 0,-0.28619 -0.0755,-0.54123 -0.2,-0.7875 l 0,-5.6 c 1.92601,0.39965 3.3551,0.75969 4.3625,1.075 0.89192,0.27916 1.33519,0.51297 1.5875,0.675 -0.11656,0.0891 -0.14961,0.13256 -0.4,0.2625 -0.84916,0.44066 -2.21927,0.94321 -3.2875,1.6125 -0.53412,0.33464 -1.02098,0.70752 -1.3125,1.3 -0.29153,0.59248 -0.20617,1.41076 0.2375,2.025 0.69888,0.96783 1.97226,1.58755 3.525,2.375 1.55274,0.78744 3.36578,1.62345 4.9125,2.5125 1.54671,0.88905 2.80983,1.8663 3.2875,2.6625 0.23883,0.39809 0.29625,0.70234 0.225,1.0375 -0.0713,0.33515 -0.30965,0.76342 -0.9,1.275 0.0397,-0.0344 -0.61373,0.16553 -1.5375,0.0875 -0.92378,-0.078 -2.09572,-0.29567 -3.275,-0.5625 -1.17928,-0.26683 -2.36156,-0.57275 -3.3375,-0.825 -0.97594,-0.25225 -1.6542,-0.45653 -2.1875,-0.5 -3.33208,-0.27004 -6.71654,1.3192 -9.9,2.6875 -3.18347,1.3683 -6.14459,2.47995 -8.3625,1.875 -2.25664,-0.61563 -3.67635,-1.83405 -5.175,-3.1625 -1.49866,-1.32845 -3.06483,-2.78046 -5.4625,-3.5 -0.788639,-0.23651 -2.538396,-0.50609 -4.950004,-0.9375 -2.411607,-0.43141 -5.392485,-0.98145 -8.2625,-1.65 -2.870014,-0.66855 -5.634963,-1.46065 -7.575,-2.325 -0.970018,-0.43218 -1.722743,-0.89255 -2.1625,-1.3 -0.346909,-0.32143 -0.442773,-0.54044 -0.4625,-0.7375 0.208836,-0.0853 0.605903,-0.18941 1.0875,-0.275 0.963195,-0.17119 2.297638,-0.30189 3.65,-0.475 1.352363,-0.17311 2.72651,-0.37699 3.85,-0.75 0.561745,-0.18651 1.062902,-0.41591 1.4875,-0.75 0.424599,-0.3341 0.78341,-0.82991 0.8375,-1.425 0.09102,-1.00043 -0.436124,-1.83728 -1.0625,-2.4875 -0.626375,-0.65023 -1.402331,-1.18814 -2.1,-1.7 -0.697668,-0.51186 -1.317743,-1.00598 -1.6125,-1.3875 -0.147378,-0.19077 -0.21094,-0.34424 -0.225,-0.4375 -0.0079,-0.0523 0.03434,-0.11891 0.05,-0.175 0.04529,-0.0119 0.06485,-0.0254 0.1375,-0.0375 0.275247,-0.0459 0.712416,-0.0678 1.2375,-0.075 z" />';
	icons['GROUND.INSTALLATION.ICON.COLLEGE/UNIVERSITY'] = '<path stroke="none" d="m 97.398584,106.92774 h -14.784 v 31.6556 h 32.002796 v -31.6556 H 99.833784 V 95.101345 c 0,-0.64 6.522796,-3.0196 7.531196,-3.4252 1.3112,-0.5272 6.944,-2.9876 7.9476,-3.01 -0.2788,-0.3816 -14.6836,-6.2612 -15.653196,-6.2612 h -2.2612 v 24.522795 z m 23.274456,-30.073599 -9.56719,0 0,-15.122655 2.01094,0 0,13.335155 7.55625,0 0,1.7875 M 106.00742,63.468204 c 0.61613,0.677096 1.0867,1.506522 1.41172,2.488281 0.33175,0.981781 0.49764,2.095582 0.49765,3.341407 -1e-5,1.245839 -0.16928,2.363025 -0.50781,3.351562 -0.33178,0.981774 -0.79897,1.801044 -1.40156,2.457812 -0.62293,0.683856 -1.36095,1.198438 -2.21406,1.54375 -0.84637,0.345313 -1.8146,0.517969 -2.90469,0.517969 -1.06303,0 -2.031258,-0.176042 -2.904689,-0.528125 -0.866671,-0.352083 -1.604691,-0.86328 -2.214062,-1.533594 -0.609378,-0.67031 -1.07995,-1.492965 -1.411719,-2.467968 -0.325001,-0.974995 -0.487501,-2.088796 -0.4875,-3.341406 -10e-7,-1.232283 0.162499,-2.335928 0.4875,-3.310938 0.324998,-0.981759 0.798956,-1.821341 1.421875,-2.51875 0.595829,-0.663527 1.333849,-1.171339 2.214062,-1.523437 0.886973,-0.352068 1.851816,-0.52811 2.894533,-0.528125 1.08332,1.5e-5 2.05494,0.179442 2.91484,0.538281 0.86666,0.352098 1.60129,0.856524 2.20391,1.513281 m -0.18281,5.829688 c -2e-5,-1.963533 -0.44012,-3.476812 -1.32032,-4.539844 -0.88022,-1.069779 -2.08204,-1.604674 -3.60547,-1.604688 -1.536981,1.4e-5 -2.745574,0.534909 -3.625777,1.604688 -0.873441,1.063032 -1.310159,2.576311 -1.310156,4.539844 -3e-6,1.983859 0.446872,3.50391 1.340625,4.560156 0.893745,1.049481 2.092181,1.57422 3.595308,1.574218 1.50312,2e-6 2.69817,-0.524737 3.58516,-1.574218 0.89374,-1.056246 1.34061,-2.576297 1.34063,-4.560156 m -13.954692,6.459374 c -0.372409,0.162501 -0.71095,0.314845 -1.015625,0.457032 -0.297929,0.142188 -0.690637,0.291146 -1.178125,0.446874 -0.413032,0.128646 -0.863291,0.23698 -1.350781,0.325 -0.480739,0.09479 -1.012249,0.142188 -1.594531,0.142188 -1.096882,0 -2.095579,-0.152344 -2.996094,-0.457031 -0.893754,-0.311458 -1.672399,-0.795572 -2.335937,-1.452344 -0.650003,-0.643227 -1.157815,-1.459111 -1.523437,-2.447656 -0.365627,-0.995308 -0.548439,-2.149733 -0.548438,-3.463281 -10e-7,-1.245825 0.17604,-2.359626 0.528125,-3.341406 0.352081,-0.981759 0.859893,-1.811186 1.523437,-2.488282 0.643226,-0.656756 1.418485,-1.157797 2.325782,-1.503124 0.914056,-0.345298 1.926294,-0.517954 3.036718,-0.517969 0.812491,1.5e-5 1.621605,0.09819 2.427344,0.294531 0.812488,0.196369 1.713008,0.541681 2.701562,1.035938 l 0,2.386718 -0.152343,0 c -0.832826,-0.697383 -1.658866,-1.205195 -2.478125,-1.523437 -0.819281,-0.318216 -1.696103,-0.47733 -2.630469,-0.477344 -0.765112,1.4e-5 -1.455736,0.125274 -2.071875,0.375781 -0.609381,0.243763 -1.154432,0.626315 -1.635156,1.147656 -0.467192,0.507825 -0.832816,1.151053 -1.096875,1.929688 -0.257295,0.771884 -0.385941,1.665633 -0.385938,2.68125 -3e-6,1.063027 0.142185,1.977089 0.426563,2.742187 0.291142,0.765108 0.663537,1.388024 1.117187,1.86875 0.473953,0.501044 1.025776,0.87344 1.655469,1.117188 0.636451,0.23698 1.306763,0.35547 2.010938,0.355468 0.968219,2e-6 1.87551,-0.165883 2.721874,-0.497656 0.846343,-0.331768 1.638529,-0.829424 2.376563,-1.492969 l 0.142187,0 0,2.35625" />';
	icons['GROUND.INSTALLATION.ICON.SCHOOL'] = '<path stroke="none" d="M 98.435,96.434 H 83.651 v 31.6552 h 32.0028 V 96.434 H 100.8702 V 84.6072 c 0,-0.64 6.5228,-3.0196 7.5312,-3.4252 1.3112,-0.5272 6.944,-2.9876 7.9476,-3.01 -0.2788,-0.3816 -14.6836,-6.2612 -15.6532,-6.2612 H 98.4346 V 96.434 z" />';
	icons['GROUND.INSTALLATION.ICON.REST STOP'] = '<path stroke="none" d="m 108.38,89.64 v -0.4 l 0.6,-0.64 -0.36,1.44 -3.84,13.44 -0.16,0.8 -0.44,0.6 0.04,0.88 -2,6.68 7.24,0.04 v 19.68 h 5.24 v -19.72 h 2.72 v 19.68 h 5.24 v -19.68 h 7.12 l -1.32,-5.28 -0.16,-0.8 -4.8,-16.36 -0.48,-1.4 0.6,0.68 0.08,0.36 c 2.08,2.4 5.44,14.24 8.6,14.24 h 0.4 c 1.24,0 2.08,-1.12 2.08,-2.32 v -0.64 c 0,-0.48 -4.76,-10 -5.32,-11.64 -0.68,-2.04 -1.72,-4.16 -2.64,-5.96 -1.04,-2.08 -1.24,-3.76 -4.6,-3.76 h -12.36 c -3.4,0 -3.56,1.8 -4.68,3.88 -0.88,1.68 -1.88,4.04 -2.52,5.88 -0.56,1.6 -5.16,11.08 -5.16,11.6 v 0.64 c 0,1.32 0.6,2.32 1.88,2.32 h 0.84 c 2.36,0 6.36,-12.2 8.16,-14.24 z m 0.24,0.4 0.36,-1.48 -0.6,0.64 0,0.44 z m 15.08,-0.4 -0.08,-0.4 -0.6,-0.64 0.48,1.44 z M 69.62,88.8 h 2.32 v 43.6 h 6.08 v -25.6 h 2.72 v 25.56 h 5.88 v -43.6 h 2.32 v 16.36 h 4.6 V 86.28 l -0.28,-2.32 h -0.4 c 0,-2.32 -1.68,-4.4 -4,-4.4 H 69.62 c -2.96,0 -4.4,3.44 -4.4,6.48 v 19.08 h 4.4 V 88.8 z M 110.7,72.84 c 0,2.68 2.36,5.44 5.04,5.44 h 0.2 c 1.6,0 2.76,-0.64 3.6,-1.4 0.48,-0.4 1.84,-2.44 1.84,-3 v -1.64 c 0,-2.4 -2.76,-4.6 -5.44,-4.6 -2.96,-0.04 -5.24,2.36 -5.24,5.2 z m -36.68,1.08 c 0,1.96 2.8,4.4 5.04,4.4 h 0.2 c 4.2,0 4.32,-3.4 5.24,-3.76 V 71.6 c 0,-1.8 -2.84,-4 -5.24,-4 -2.32,0 -5.24,2.16 -5.24,4 v 2.32 z" />';
	icons['GROUND.INSTALLATION.ICON.CONTROL VALVE'] = '<path stroke="none" d="m 114,114.52 h 15.72 v 4.04 h 9.08 v -23.6 h -9.08 V 98.8 H 114.4 c -0.4,0 -2.6,-2.64 -2.6,-3.44 v -5.64 h -9.92 v -8.24 h 12.28 v -3.64 h -28.2 v 3.64 h 12.08 v 8.28 H 89.2 v 6.64 l -0.16,-0.16 -1.8,2.44 -17.16,0.12 V 94.96 H 61.2 v 23.56 h 8.88 v -4 H 87 c 0.36,0 2.04,2.44 2.36,2.84 0.48,0.6 2.16,1.88 2.88,2.36 1.92,1.24 4.72,2.44 7.84,2.44 h 0.6 c 3.52,0 5.84,-1.04 8.12,-2.36 1.44,-0.8 4.8,-3.8 5.2,-5.28 z" />';
	icons['GROUND.INSTALLATION.ICON.DAM'] = '<path stroke="none" d="m 68.26,89.1 c 2.32,0 3.16,-1.72 4.56,-2.64 1.08,0.8 2.24,2.64 4.4,2.64 h 0.16 c 2.6,0 3.32,-1.72 4.68,-2.64 1.4,0.92 2.2,2.64 4.68,2.64 2.4,0 3.28,-1.8 4.56,-2.64 0.64,0.44 1.12,1.12 1.92,1.6 0.4,0.24 2.2,0.88 2.2,1.32 v 6.76 C 94.1,95.82 91.78,93.78 91.46,92.62 h -0.32 c -0.28,1.12 -2.96,3.64 -4.52,3.64 -1.52,0 -4.08,-2.64 -4.4,-3.8 -0.96,0.64 -2.64,3.8 -4.56,3.8 h -0.44 c -1.2,0 -4,-2.72 -4.24,-3.68 -0.8,0.24 -2.56,3.68 -4.72,3.68 h -0.28 c -1.08,0 -1.68,-0.72 -2.36,-1.16 l -1.04,1.16 c 1,0.68 1.56,1.76 3.24,1.76 h 0.44 c 2.28,0 3.12,-1.84 4.56,-2.8 0.72,1.08 2.8,2.8 4.68,2.8 2.28,0 3.32,-1.96 4.56,-2.8 1.24,0.84 2.56,2.8 4.68,2.8 2.12,0 3.36,-2.08 4.68,-2.8 0.72,1.04 2.6,2.36 4,2.68 v 7.04 c -1.36,-0.12 -3.4,-2.44 -3.96,-3.52 -1.08,0.72 -2.52,3.64 -4.72,3.64 h -0.12 c -2.28,0 -4.08,-3.52 -4.68,-3.68 -0.28,0.96 -3,3.68 -4.12,3.68 h -0.44 c -2.16,0 -3.6,-2.92 -4.68,-3.68 -0.56,1.04 -2.8,3.68 -4.12,3.68 H 67.7 c -0.72,0 -1.68,-0.96 -2.2,-1.32 l -0.92,1.48 c 1.08,0.72 1.72,1.6 3.56,1.6 2.68,0 3.12,-1.8 4.68,-2.64 1.36,0.92 2.04,2.64 4.68,2.64 2.2,0 3.36,-1.84 4.56,-2.64 1.4,0.96 2.52,2.64 4.84,2.64 1.8,0 3.4,-1.96 4.4,-2.64 0.88,0.48 1,1 1.96,1.56 0.44,0.28 2.16,0.72 2.16,1.24 v 6.76 c -1.36,-0.32 -3.6,-2.24 -3.96,-3.52 -1.08,0.72 -2.52,3.8 -4.84,3.8 -1.44,0 -4.08,-2.64 -4.4,-3.8 -1.16,0.8 -2.56,3.8 -4.84,3.8 -2,0 -3.72,-3.16 -4.68,-3.8 -0.32,1.04 -3,3.8 -4.28,3.8 h -0.6 c -0.84,0 -1.8,-0.96 -2.36,-1.32 l -0.88,1.28 c 1.08,0.72 1.8,1.8 3.56,1.8 2.24,0 3.28,-1.84 4.68,-2.8 1.16,0.8 2.56,2.88 4.68,2.8 2.28,-0.12 3.28,-1.92 4.56,-2.8 1.2,0.8 2.72,2.8 4.68,2.8 1.88,0 3.44,-2.04 4.56,-2.8 1.56,1.04 1.76,1.96 4.12,2.48 v 5 h 17 l -1.36,-5.24 c 0.84,0.2 1.04,0.56 2.24,0.56 2,0 3.28,-1.92 4.56,-2.8 1.32,0.88 2.36,2.8 4.68,2.8 1.6,0 3.84,-1.76 4.4,-2.8 1.32,0.32 2.48,2.8 5.12,2.8 1.16,0 2.6,-1.36 3.36,-1.76 l -1,-1.32 c -0.68,0.44 -1.48,1.32 -2.64,1.32 -2.08,0 -3.68,-3.08 -4.68,-3.8 -0.68,1.4 -2.72,3.8 -4.72,3.8 -1.32,0 -4.28,-2.6 -4.4,-3.8 -1,0.68 -2.6,3.8 -4.68,3.8 h -0.16 c -1.08,0 -2.16,-0.92 -2.72,-1.52 -0.36,-0.36 -0.84,-2.52 -1.08,-3.16 -0.36,-1 -1.76,-5.64 -1.76,-6.6 l -0.32,-0.44 0.04,-0.6 -0.32,-0.44 v -0.6 l -0.28,-0.4 -5.28,-18.6 0.16,-0.04 -0.32,-0.4 0.04,-0.6 c -0.2,-0.32 -0.32,-0.28 -0.32,-0.64 v -0.44 h -5.56 v 7.76 c -1.4,-0.72 -1.2,-0.52 -2.4,-1.56 -0.12,-0.12 -1,-0.92 -1.04,-1 -0.4,-0.52 -0.12,-0.88 -0.8,-1.08 -0.12,1.16 -3.08,3.8 -4.28,3.8 h -0.16 c -2.52,0 -4.2,-3.64 -4.84,-3.8 -0.28,1.08 -2.96,3.8 -4.24,3.8 h -0.44 c -1.2,0 -4.16,-2.72 -4.24,-3.8 -0.48,0.12 -2.8,3.8 -4.4,3.8 H 67.7 c -0.72,0 -1.68,-0.96 -2.2,-1.32 l -0.88,1.32 c 1.04,0.68 1.6,1.6 3.36,1.6 h 0.28 v 0.04 z" />';
	icons['GROUND.INSTALLATION.ICON.DISCHARGE OUTFALL'] = '<path stroke="none" d="m 63.22,111.38 v 13.4 h 73.56 V 111.7 l -3.08,0.52 -1.08,-0.08 c -2.24,0 -3.64,-0.68 -4.92,-1.64 -0.6,-0.44 -1.08,-1.12 -1.52,-1.76 -0.36,-0.64 -0.24,-2.12 -1,-2.12 h -0.44 c -0.8,0 -0.72,1.56 -1.2,2.24 -0.44,0.64 -0.88,1.24 -1.56,1.72 -1.28,0.96 -2.96,1.56 -5.12,1.56 h -0.92 c -3.16,0 -6.84,-2.12 -6.84,-5.08 -0.32,-0.2 -0.4,-0.44 -0.76,-0.44 h -0.28 c -0.72,0 -0.8,1.48 -1.12,2.12 -0.36,0.64 -1,1.36 -1.52,1.8 -1.2,0.96 -2.68,1.6 -4.8,1.6 h -0.88 c -3.52,0 -7.28,-2.12 -7.28,-5.36 -0.36,-0.08 -0.36,-0.16 -0.8,-0.16 h -0.28 c -0.56,0 -0.6,1.48 -1.08,2.2 -0.52,0.84 -0.72,1.12 -1.52,1.72 -1.28,0.96 -2.72,1.6 -4.84,1.6 H 82.9 c -3.52,0 -6.72,-2.16 -7,-5.36 -0.32,-0.08 -0.36,-0.16 -0.76,-0.16 h -0.12 c -0.68,0 -0.76,1.52 -1.2,2.24 -0.4,0.64 -0.92,1.24 -1.56,1.72 -1.36,1.04 -2.68,1.56 -5,1.56 h -1.04 c -1.16,0 -2.24,-0.36 -3,-0.76 l 0,0 z m 0,-21.6 19.52,0 0,1.2 2.68,0 0,-15.76 -2.68,0 0,1.16 -19.52,0 z M 89.74,80.9 v 0.12 c 8.08,0 16.16,1.2 20.6,4.88 2.84,2.36 3.08,4.48 3.08,9.56 0,4.08 0.52,8.32 4.48,8.32 h 0.76 c 1.72,0 2.84,-2.6 2.84,-4.32 v -0.88 c 0,-5.12 -3.32,-10.68 -5.92,-13.28 -1.6,-1.56 -3.56,-3 -6.08,-3.64 -2.16,-0.52 -6.04,-1.08 -8.6,-1.08 l -1.76,-0.08 -9.4,0.4 z" />';
	icons['GROUND.INSTALLATION.ICON.GROUND WATER WELL'] = '<path stroke="none" d="M 85.59375 63.8125 L 85.59375 69.59375 L 74.71875 105.125 L 80.46875 106.875 L 91.8125 69.8125 L 98.59375 69.8125 L 98.59375 85.03125 A 3.0003 3.0003 0 0 0 98.59375 86.0625 L 98.59375 129 L 85.59375 129 L 85.59375 135 L 117.59375 135 L 117.59375 129 L 104.59375 129 L 104.59375 88.59375 L 119.40625 88.59375 L 119.40625 92.8125 L 125.40625 92.8125 L 125.40625 86.15625 A 3.0003 3.0003 0 0 0 122.40625 82.59375 L 104.59375 82.59375 L 104.59375 69.8125 L 106.40625 69.8125 L 106.40625 63.8125 L 85.59375 63.8125 z " />';
	icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS INFRASTRUCTURE'] = '<path stroke="none" d="m 109.658,116.632 4.092,13.42 -0.176,0.132 -12.188,-8.36 8.272,-5.192 z m -19.668,0.044 7.964,5.148 -12.1,8.448 4.136,-13.596 z m 9.768,-9.768 8.844,8.228 c -1.716,0.484 -8.052,5.632 -8.8,5.632 -0.176,0 -8.228,-5.368 -8.58,-5.808 l 8.536,-8.052 z m 5.28,-4.84 3.124,9.812 -6.864,-6.38 3.74,-3.432 z m -10.516,0.132 3.784,3.256 -6.908,6.424 3.124,-9.68 z m 2.068,-0.968 6.38,-0.044 -3.212,3.212 -3.168,-3.168 z M 99.186,84.776 C 99.142,85.392 99.01,85.48 99.01,86.14 v 1.98 h -2.992 c -0.484,0 -0.792,0.308 -0.792,0.792 0,0.528 0.088,0.528 0.22,0.968 0.44,0.088 0.44,0.22 0.968,0.22 h 2.552 v 2.772 h -4.532 c -0.616,0 -1.188,0.176 -1.188,0.792 0,0.484 0.308,0.792 0.792,0.792 h 4.928 v 4.928 h -4.532 c -0.528,0 -0.528,0.088 -0.88,0.22 l -2.508,7.92 -1.012,3.212 -4.136,13.288 -1.144,3.124 c 0,2.024 -1.364,3.476 -1.364,5.544 0,0.44 0.088,0.22 0.22,0.792 h 0.528 c 0.572,0 15.092,-10.296 15.444,-10.296 0.616,0 14.168,9.372 15.84,10.472 0.44,-0.22 0.968,-0.352 0.968,-0.968 v -0.616 c 0,-0.044 -1.496,-4.444 -1.716,-5.016 -0.352,-1.1 -1.408,-4.268 -1.54,-5.236 l -1.012,-3.168 -4.136,-13.244 -0.88,-3.432 c -0.968,-0.396 -0.264,-2.552 -1.584,-2.552 h -4.752 v -4.972 h 4.752 c 0.484,0 0.792,-0.308 0.792,-0.792 0,-0.484 -0.308,-0.792 -0.792,-0.792 H 100.77 V 90.1 h 2.376 c 0.66,0 1.364,-0.352 1.364,-0.968 v -0.22 c 0,-0.484 -0.308,-0.792 -0.792,-0.792 h -2.948 v -2.552 c 0,-0.396 -0.572,-0.968 -0.792,-0.968 -0.044,-0.044 -0.704,0.132 -0.792,0.176 z m 6.688,-15.664 c 6.952,1.628 10.912,4.576 15.136,8.888 2.992,3.036 7.26,11 7.26,16.896 v 3.96 c 0,2.068 -1.452,7.656 -2.244,9.02 -0.704,1.144 -1.188,2.376 -1.892,3.608 -0.264,0.44 -2.376,3.3 -2.376,3.388 0,0.66 0.968,1.628 1.188,2.552 1.672,-0.44 4.752,-6.336 5.676,-8.184 1.232,-2.508 2.684,-7.832 2.684,-11.396 V 94.28 c 0,-0.088 -0.924,-4.928 -1.012,-5.5 -0.264,-0.88 -1.408,-3.652 -1.848,-4.752 -0.88,-2.2 -3.652,-6.38 -5.236,-8.008 -3.564,-3.608 -10.56,-9.152 -16.896,-9.68 l -0.44,2.772 z m -1.584,10.692 c 6.028,0.484 13.332,9.152 13.332,16.06 v 2.156 c 0,1.496 -1.364,5.5 -1.364,5.544 0,0.22 1.232,2.86 1.364,3.168 l 0.176,0.088 1.584,-3.432 0.132,-0.572 0.66,-5.94 0.176,-0.44 -0.968,-5.94 c -0.704,-0.264 -0.616,-1.408 -1.1,-2.244 -0.44,-0.792 -0.836,-1.628 -1.276,-2.288 -1.056,-1.628 -1.848,-2.552 -3.212,-3.916 -2.156,-2.2 -5.764,-4.18 -9.24,-5.016 l -0.264,2.772 z M 68.694,95.248 v 5.148 c 0,4.224 5.368,16.324 7.92,17.028 0.132,-0.528 0.968,-2.2 0.968,-2.552 0,0 -2.068,-2.948 -2.332,-3.432 -0.704,-1.32 -1.32,-2.376 -1.936,-3.828 -1.012,-2.596 -1.848,-5.984 -1.848,-9.592 v -2.376 c 0,-8.008 3.344,-12.936 6.908,-17.468 1.364,-1.76 4.664,-4.4 6.688,-5.588 1.408,-0.836 2.464,-1.408 4.092,-2.068 0.528,-0.22 4.532,-1.276 4.532,-1.628 l -0.22,-2.552 c -2.376,0.088 -7.964,2.64 -9.636,3.652 -3.168,1.936 -4.84,3.608 -7.348,6.116 -3.608,3.608 -7.788,11.968 -7.788,19.14 l 0,0 z m 10.692,0 v 2.948 c 0,1.936 0.22,3.08 0.836,4.488 0.176,0.396 1.496,4.004 1.54,4.004 l 0.352,-0.044 1.452,-2.948 c -0.88,-1.188 -1.408,-4.048 -1.408,-6.248 v -1.76 c 0,-3.74 2.332,-8.272 4.224,-10.252 1.76,-1.804 5.852,-5.5 9.108,-5.588 L 95.05,77.076 C 88.01,77.648 79.386,87.328 79.386,95.248 z" />';
	icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS TOWER'] = '<path stroke="none" d="m 102.48,119.22089 11.96,-8.04 2.84,9.2 1.32,4 2.12,6.88 -18.24,-12.04 z m -23,12.04 3.4,-11.72 1.96,-5.88 0.8,-2.56 11.88,8.2 -18.04,11.96 z m 20.44,-34.640003 13,12.160003 c -1.52,1 -12.28,8.48 -13.12,8.48 -0.12,0 -11.56,-7.68 -12.72,-8.52 L 99.92,96.620887 z m 7.72,-7.12 0.24,0.16 1.8,5.68 2.52,8.680003 -10.12,-9.280003 5.56,-5.24 0,0 z m -15.48,0.64 v -0.64 l 0.44,0.2 5.36,5.04 -10,9.400003 2.6,-8.960003 1.6,-5.04 z m 2.92,-1.68 9.76,-0.04 -5,4.4 -4.76,-4.36 z m 3.64,-23.12 v 3.6 h -4.44 c -0.48,0 -1.04,0.56 -1.04,1.04 v 0.64 c 0,0.68 0.76,1.04 1.48,1.04 h 4.04 v 4.24 h -7.2 c -0.48,0 -1.04,0.56 -1.04,1.04 v 0.2 c 0,1 0.48,1.48 1.48,1.48 h 6.76 v 7 h -6.8 c -0.76,0 -1.04,0.32 -1.32,0.68 l -0.64,2 -4.88,15.640003 -2.96,9.56 -3.12,9.44 -0.08,0.84 -2.88,8.72 -0.12,0.8 -0.52,2.16 c 0.96,0.24 0.52,0.64 1.28,0.64 h 0.2 c 0.84,0 20.12,-13.68 23.08,-15.24 2.48,1.68 22.4,15.24 23.52,15.24 0.6,0 1.04,-0.72 1.04,-1.28 0,-0.12 -1.36,-4.04 -1.48,-4.24 l -0.12,-0.8 -3.08,-9.72 -2.88,-9.32 -4.72,-15.720003 c -0.56,-0.84 -1.36,-3.76 -1.76,-5.04 -0.64,-1.84 -0.52,-4.28 -2.48,-4.28 h -6.76 v -7 h 7.2 c 0.48,0 1.04,-0.56 1.04,-1.04 v -0.44 c 0,-0.64 -0.2,-1.28 -0.84,-1.28 h -7.4 v -4.24 h 4.04 c 0.72,0 1.48,-0.36 1.48,-1.04 v -0.64 c 0,-0.68 -0.76,-1.04 -1.48,-1.04 h -4.04 v -4.04 c 0,-0.6 -0.72,-1.04 -1.28,-1.04 -0.8,-0.04 -1.28,0.6 -1.28,1.44 l 0,0 z m -6.56,24.8 0.44,-0.44 -0.44,-0.2 z" />';
	icons['GROUND.INSTALLATION.ICON.AIR TRAFFIC CONTROL FACILITY'] = '<text stroke="none" text-anchor="middle" x="100" y="110" font-size="35" >ATC</text>';
	icons['GROUND.INSTALLATION.ICON.PROPANE FACILITY'] = '<path stroke="none" d="m 98.68,73.14 v 0.2 c 0,1 0.52,1.52 1.52,1.52 0.52,0 1.08,-0.6 1.08,-1.08 0,-0.76 -0.16,-0.84 -0.2,-1.52 -0.48,-0.08 -0.48,-0.2 -1.08,-0.2 h -0.2 c -0.52,0 -1.12,0.6 -1.12,1.08 z m -12.64,58.52 h 28.4 v 3.28 h -28.4 v -3.28 z M 75.76,118.98 h 48.48 v 3.28 c 0,1.96 -8.8,7.84 -9.84,7.84 H 85.8 c -1,0 -10.04,-5.76 -10.04,-7.64 v -3.48 l 0,0 z m 0,-27.48 c 0,-1.08 7.24,-5.8 8.52,-6.56 2.56,-1.48 7.44,-3.72 11.36,-3.72 h 8.52 c 4.08,0 9.12,2.04 11.56,3.72 1.28,0.88 8.52,5.36 8.52,6.56 v 4.16 H 75.76 V 91.5 l 0,0 z M 98.24,77.1 c 0.68,0.04 0.76,0.2 1.52,0.2 h 0.44 c 0.76,0 0.84,-0.16 1.52,-0.2 v 1.76 l 1.16,0.8 -5.48,0.04 c 0.32,-0.48 0.88,-0.76 0.88,-1.32 l -0.04,-1.28 0,0 z m -1.08,-3.96 c 0,-1.4 1.4,-2.4 2.84,-2.4 1.28,0 2.84,0.92 2.84,1.96 v 1.12 c 0,1.44 -1.6,2.4 -3.04,2.4 -1.04,0 -2.6,-1.16 -2.6,-2.4 v -0.68 h -0.04 z m 12.24,-8.08 h 3.48 v 3.48 h -1.76 v 6.76 c 0.72,0.04 2.4,0.56 2.4,1.32 v 3.72 H 109.4 V 65.06 z m -22.72,0 h 4.16 V 80.34 H 85.8 v -4.12 c 0.76,-0.2 3.08,-0.76 3.08,-1.52 v -6.12 h -2.2 v -3.52 z m 5.68,0 h 15.48 v 15.28 c -1.6,-0.36 -4.8,-0.92 -4.8,-2.6 v -0.88 c 0,-1.52 0.88,-2.08 0.88,-2.6 v -1.12 c 0,-3.2 -2.96,-3.24 -3.28,-4.36 h 4.16 v -1.52 h -9.6 v 1.52 h 4.16 v 0.64 c -1.92,0.08 -3.08,1.92 -3.08,3.96 v 0.64 c 0,0.96 0.88,1.96 0.88,2.4 v 1.32 c 0,1.44 -3.36,2.28 -4.8,2.6 V 65.06 l 0,0 z m -7.2,4.8 h 2.2 v 3.96 c 0,0.76 -2.08,1.24 -2.84,1.32 v 6.76 h 3.04 c -0.6,0.4 -2.68,1.24 -3.64,1.8 -1.24,0.72 -2.24,1.36 -3.36,2.12 -0.92,0.6 -6.08,4.72 -6.32,4.8 v 31.64 c 0,1.88 3.16,4.4 4.48,5.32 0.96,0.64 5.8,3.28 5.8,4.08 v 4.8 h 31.2 v -4.8 c 0,-1.56 10.04,-4.64 10.04,-10.04 V 91.06 c 0,-0.92 -5.04,-4.44 -6.04,-5.12 -1.16,-0.8 -2.08,-1.4 -3.32,-2.12 -0.92,-0.6 -3.16,-1.44 -3.72,-1.92 h 2.4 v -6.8 c -0.72,-0.16 -2.64,-0.52 -2.64,-1.28 v -3.96 h 1.96 V 63.54 H 85.16 v 6.32 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 114.4,134.94 0,-3.28 -28.36,0 0,3.28 z M 75.76,122.5 c 0,1.88 9.04,7.64 10.04,7.64 h 28.6 c 1,0 9.84,-5.88 9.84,-7.84 v -3.32 H 75.76 v 3.52 l 0,0 z m 0,-31 v 4.16 h 48.48 V 91.5 c 0,-1.2 -7.24,-5.68 -8.52,-6.56 -2.48,-1.68 -7.48,-3.72 -11.56,-3.72 h -8.52 c -3.92,0 -8.8,2.24 -11.36,3.72 -1.28,0.76 -8.52,5.44 -8.52,6.56 l 0,0 z M 109.4,80.34 h 4.16 v -3.68 c 0,-0.76 -1.72,-1.24 -2.4,-1.32 v -6.76 h 1.76 V 65.06 H 109.4 V 80.34 z M 86.68,68.58 h 2.2 v 6.12 c 0,0.8 -2.32,1.36 -3.04,1.52 v 4.16 h 5.04 V 65.06 h -4.2 v 3.52 z m 11.56,9.8 c 0,0.56 -0.56,0.84 -0.88,1.32 l 5.52,-0.08 -1.12,-0.8 V 77.1 c -0.68,0.04 -0.8,0.2 -1.52,0.2 H 99.8 c -0.76,0 -0.84,-0.16 -1.52,-0.2 l -0.04,1.28 0,0 z m 2.84,-6.12 c 0.08,0.72 0.24,0.8 0.24,1.56 0,0.52 -0.6,1.08 -1.08,1.08 -1,0 -1.52,-0.52 -1.52,-1.52 v -0.24 c 0,-0.52 0.6,-1.08 1.08,-1.08 h 0.2 c 0.6,0 0.6,0.12 1.08,0.2 z m -3.92,0.88 v 0.68 c 0,1.24 1.6,2.4 2.6,2.4 1.44,0 3.04,-0.96 3.04,-2.4 V 72.7 c 0,-1.04 -1.56,-1.96 -2.84,-1.96 -1.4,0 -2.8,1.04 -2.8,2.4 z" />';
	icons['GROUND.INSTALLATION.ICON.GOVERNMENT SITE INFRASTRUCTURE'] = '<path stroke="none" d="m 112.96,88.76 -7.64,0 0,3.16 2.16,0 -0.48,17.84 -0.4,7.64 -1.28,0 0,3.84 7.64,0 0,-3.84 -1.44,0 -0.68,-25.48 2.12,0 z m -43.28,28.64 0,3.84 8.04,0 0,-3.84 -1.48,0 -0.44,-8.68 -0.4,-16.8 2.32,0 0,-3.16 -8.04,0 0,3.16 2.4,0 -0.92,25.48 z m 64.08,15.28 0,-2.96 -67.72,0 0,2.96 z m -2.32,-6.36 0,-2.96 -63.28,0 0,2.96 z M 92.2,94.04 l -0.04,-2.12 2.32,0 0,-3.16 -7.84,0 0,3.16 2.32,0 0,2.12 -0.84,22.52 0,0.84 -1.48,0 0,3.84 7.84,0 0,-3.84 -1.68,0 0,-2.12 z m 14.4,23.36 0.44,-7.64 -0.44,7.64 z m -30.36,0 -0.44,-8.68 0.44,8.68 z m -6.56,0 0,3.84 8.04,0 0,-3.84 -1.48,0 -0.44,-8.68 -0.4,-16.8 2.32,0 0,-3.16 -8.04,0 0,3.16 2.4,0 -0.92,25.48 z m 43.28,-28.64 -7.64,0 0,3.16 2.16,0 -0.48,17.84 -0.4,7.64 -1.28,0 0,3.84 7.64,0 0,-3.84 -1.44,0 -0.68,-25.48 2.12,0 z m 15.56,27.8 -0.92,-23.12 0,-1.52 2.36,0 0,-3.16 -7.88,0 0,3.16 2.12,0 0.08,4.48 -0.72,21 -1.48,0 0,3.84 7.88,0 0,-3.84 -1.52,0 z M 74.12,83.64 C 74.88,82.96 99.6,70.68 99.8,70.68 c 0.2,0 24.48,11.96 25.88,12.96 H 74.12 l 0,0 z m -8.08,1.28 v 0.44 c 0,0.56 0.12,0.6 0.2,1.08 0.52,0.08 0.52,0.2 1.08,0.2 h 64.96 c 0.68,0 1.68,-0.64 1.68,-1.08 0,-2.24 -1.72,-2.36 -3.24,-3.12 -1.52,-0.76 -2.92,-1.44 -4.4,-2.16 -2.92,-1.48 -5.84,-2.8 -8.84,-4.32 -1.72,-0.88 -17.32,-8.64 -17.68,-8.64 -0.28,0 -15.6,7.68 -17.2,8.48 -2.84,1.44 -5.64,2.72 -8.56,4.16 -1.48,0.76 -2.72,1.4 -4.24,2.12 -1.16,0.6 -3.76,1.32 -3.76,2.84 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 74.12,83.64 h 51.56 C 124.28,82.68 100,70.72 99.8,70.72 99.6,70.72 74.88,83 74.12,83.64 l 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.MILITARY INFRASTRUCTURE'] = '<path stroke="none" d="m 65.248,93.136 c 0,-0.48 15.552,-11.52 17.328,-12.816 1.536,-1.152 17.28,-12.576 17.376,-12.576 0.576,0 15.888,11.232 17.616,12.528 1.728,1.296 17.28,12.384 17.28,12.864 0,0.048 -6.096,18.576 -6.72,20.256 -1.248,3.408 -2.208,6.768 -3.36,10.272 -1.008,3.024 -2.688,7.248 -3.312,10.032 H 78.4 c -0.144,-1.728 -5.568,-18.048 -6.528,-20.448 -0.576,-1.44 -6.624,-20.112 -6.624,-20.112 z m 8.352,38.496 2.016,6.096 49.008,0.048 8.448,-26.352 6.624,-20.544 -39.744,-28.656 -39.648,28.848 13.296,40.56 0,0 z M 100.048,76.24 c 2.736,2.448 26.64,18.672 26.64,19.632 0,0.768 -4.128,12.72 -4.512,13.392 l -5.568,17.376 -32.544,0.048 c -0.864,0 -3.024,-7.44 -3.504,-8.736 -0.624,-1.824 -2.88,-7.824 -2.88,-9.36 L 74.32,98.896 73.456,95.488 100.048,76.24 z m 30.528,18 c -3.072,-2.112 -30,-22.176 -30.672,-22.176 -0.096,0 -13.776,10.128 -15.168,11.088 -1.968,1.392 -14.256,10.656 -15.168,10.896 v 0.672 c 0,1.008 2.928,7.008 2.928,9.312 l 8.736,26.256 37.728,0.048 4.992,-15.696 6.624,-20.4 z m -50.4,3.216 c 0.816,-0.192 8.592,-6.096 9.984,-7.008 1.152,-0.816 9.456,-7.056 9.984,-7.056 0.048,0 8.976,6.528 10.032,7.2 1.2,0.816 9.696,6.48 9.696,7.296 0,1.152 -0.432,2.016 -0.912,2.736 0,1.584 -2.64,8.688 -3.264,10.56 -0.48,1.44 -2.832,10.08 -3.744,10.08 H 88.144 c -0.72,0 -1.776,-4.032 -2.016,-4.8 -0.576,-1.728 -1.2,-3.312 -1.728,-5.088 -0.624,-2.112 -3.072,-8.688 -3.072,-10.32 l -0.288,0.096 -0.864,-3.696 z m -3.168,-0.672 8.832,26.976 28.224,-0.048 8.736,-27.168 c -3.216,-1.728 -21.744,-16.32 -22.896,-16.32 -0.336,0 -20.592,15.024 -22.896,16.56 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 77.008,96.784 c 2.304,-1.536 22.56,-16.56 22.896,-16.56 1.152,0 19.68,14.592 22.896,16.32 l -8.688,27.168 -28.272,0.048 -8.832,-26.976 z m -3.552,-1.296 0.864,3.408 3.408,9.696 c 0,1.536 2.256,7.584 2.88,9.36 0.384,1.296 2.544,8.736 3.456,8.736 l 32.544,-0.048 5.52,-17.424 c 0.432,-0.624 4.512,-12.624 4.512,-13.392 0,-0.96 -23.904,-17.184 -26.64,-19.632 L 73.456,95.488 z m 6.72,1.968 0.864,3.696 0.288,-0.096 c 0,1.632 2.448,8.208 3.072,10.272 0.528,1.776 1.104,3.36 1.68,5.088 0.24,0.768 1.296,4.8 2.016,4.8 h 23.808 c 0.96,0 3.264,-8.592 3.744,-10.08 0.624,-1.872 3.264,-8.976 3.264,-10.56 0.528,-0.672 0.96,-1.536 0.96,-2.688 0,-0.816 -8.496,-6.48 -9.696,-7.296 -1.008,-0.672 -9.936,-7.2 -10.032,-7.2 -0.528,0 -8.832,6.24 -9.984,7.008 -1.344,0.96 -9.168,6.816 -9.984,7.056 z m 43.776,17.136 -4.992,15.744 -37.728,-0.048 -8.736,-26.256 c 0,-2.304 -2.928,-8.256 -2.928,-9.312 v -0.672 c 0.96,-0.24 13.2,-9.504 15.168,-10.896 1.392,-1.008 15.12,-11.088 15.168,-11.088 0.672,0 27.6,20.016 30.672,22.176 l -6.624,20.352 z M 65.248,93.136 c 0,0 6.048,18.672 6.624,20.112 0.96,2.4 6.384,18.72 6.528,20.448 h 43.056 c 0.624,-2.784 2.304,-7.008 3.312,-10.032 1.152,-3.504 2.112,-6.816 3.36,-10.272 0.624,-1.68 6.72,-20.208 6.72,-20.256 0,-0.48 -15.552,-11.52 -17.28,-12.864 C 115.84,78.976 100.48,67.744 99.904,67.744 99.808,67.744 84.112,79.168 82.528,80.32 80.8,81.616 65.248,92.656 65.248,93.136 z" />';
	icons['GROUND.INSTALLATION.ICON.POSTAL SERVICE INFRASTRUCTURE'] = '<path stroke="none" d="M 64.26,86.62 99.9,102.1 135.74,86.62 v 31.8 H 64.26 v -31.8 l 0,0 z m 62.48,1.88 c -3.08,1.24 -5.92,2.56 -9,3.88 -2.16,0.92 -17.12,7.72 -18.04,7.72 -0.52,0 -15.76,-6.96 -17.8,-7.76 -3,-1.2 -5.92,-2.76 -8.8,-3.88 -2.32,-0.92 -6.84,-3.4 -8.84,-3.84 v -3.24 h 71.48 v 3.24 c -2.08,0.44 -6.64,2.92 -9,3.88 z m -64.08,31.72 h 74.68 V 79.78 H 62.66 v 40.44 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 64.26,86.62 0,31.8 71.48,0 0,-31.8 -35.84,15.48 z m 0,-2 c 2,0.48 6.52,2.96 8.84,3.84 2.88,1.12 5.8,2.68 8.8,3.88 2.04,0.8 17.28,7.76 17.8,7.76 0.92,0 15.88,-6.8 18.04,-7.72 3.08,-1.32 5.92,-2.64 9,-3.88 2.36,-0.96 6.92,-3.44 9,-3.88 V 81.38 H 64.26 v 3.24 l 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.POSTAL DISTRIBUTION CENTER'] = '<path stroke="none" d="M 64.2728,94.628035 99.896,110.11803 135.728,94.628035 V 126.43083 H 64.2724 l 4e-4,-31.802795 0,0 z m 62.478,1.892 c -3.0764,1.248 -5.9092,2.5648 -9.0016,3.880395 -2.1752,0.9252 -17.1196,7.7132 -18.0508,7.7132 -0.5012,0 -15.7484,-6.9468 -17.7932,-7.7696 -3.0076,-1.209195 -5.9232,-2.758395 -8.8036,-3.877195 -2.3124,-0.8984 -6.832,-3.3864 -8.8288,-3.8516 v -3.2208 h 71.4556 v 3.2208 c -2.0536,0.4784 -6.6152,2.9468 -8.9776,3.9048 z M 62.6624,128.24203 h 74.6752 V 87.784435 H 62.6624 v 40.457595 z m 66.05357,-54.422347 -5.40312,0 0,13.335156 -2.01094,0 0,-13.335156 -5.40313,0 0,-1.7875 12.81719,0 0,1.7875 m -14.01562,9.018749 c -1e-5,0.589067 -0.13882,1.171358 -0.41641,1.746875 -0.27084,0.575523 -0.6534,1.063023 -1.14765,1.4625 -0.54168,0.433334 -1.17475,0.771876 -1.89922,1.015625 -0.71772,0.24375 -1.58439,0.365625 -2.6,0.365625 -1.09011,0 -2.07188,-0.101562 -2.94531,-0.304687 -0.86667,-0.203125 -1.75027,-0.504427 -2.65079,-0.903906 l 0,-2.51875 0.14219,0 c 0.7651,0.636461 1.6487,1.127346 2.65078,1.472656 1.00208,0.345314 1.94323,0.51797 2.82344,0.517969 1.24583,10e-7 2.21405,-0.233592 2.90469,-0.700782 0.69738,-0.467184 1.04608,-1.0901 1.04609,-1.86875 -1e-5,-0.670307 -0.1659,-1.164578 -0.49766,-1.482812 -0.32501,-0.318223 -0.82266,-0.565358 -1.49296,-0.741406 -0.50782,-0.13541 -1.05965,-0.247129 -1.65547,-0.335156 -0.58907,-0.08801 -1.21537,-0.199733 -1.87891,-0.335157 -1.34063,-0.284367 -2.33594,-0.768482 -2.98594,-1.452343 -0.64323,-0.690616 -0.96484,-1.587751 -0.96484,-2.691407 0,-1.266133 0.53489,-2.302069 1.60469,-3.107812 1.06979,-0.812485 2.42734,-1.218734 4.07265,-1.21875 1.06302,1.6e-5 2.03802,0.101578 2.925,0.304688 0.88697,0.203139 1.67239,0.45366 2.35625,0.751562 l 0,2.376563 -0.14218,0 c -0.57554,-0.487488 -1.33387,-0.890352 -2.275,-1.208594 -0.93439,-0.324987 -1.89246,-0.487487 -2.87422,-0.4875 -1.07657,1.3e-5 -1.94324,0.223451 -2.6,0.670312 -0.65001,0.446888 -0.97501,1.022408 -0.975,1.726563 -1e-5,0.629698 0.16249,1.123968 0.4875,1.482812 0.32499,0.358864 0.89713,0.633082 1.7164,0.822656 0.43333,0.0948 1.04948,0.209905 1.84844,0.345313 0.79895,0.135425 1.47603,0.274227 2.03125,0.416406 1.12395,0.297925 1.9703,0.748185 2.53906,1.350781 0.56874,0.602611 0.85312,1.445579 0.85313,2.528906 m -14.43203,4.316407 -5.971877,0 0,-1.54375 1.980469,0 0,-12.035156 -1.980469,0 0,-1.54375 5.971877,0 0,1.54375 -1.980471,0 0,12.035156 1.980471,0 0,1.54375 m -8.602346,-7.546094 c -1.5e-5,1.374485 -0.301317,2.620317 -0.903906,3.7375 -0.595847,1.11719 -1.391419,1.983856 -2.386719,2.6 -0.690636,0.426563 -1.46251,0.734636 -2.315625,0.924219 -0.846362,0.189583 -1.963549,0.284375 -3.351562,0.284375 l -3.81875,0 0,-15.122656 3.778125,0 c 1.476034,1.5e-5 2.647387,0.108348 3.514062,0.325 0.873427,0.20991 1.611447,0.501056 2.214063,0.873437 1.029154,0.643243 1.831496,1.499752 2.407031,2.569531 0.575506,1.069802 0.863266,2.339332 0.863281,3.808594 m -2.102344,-0.03047 c -1.2e-5,-1.184887 -0.206523,-2.183584 -0.619531,-2.996093 -0.413033,-0.812489 -1.029178,-1.452332 -1.848437,-1.919531 -0.595843,-0.338529 -1.228916,-0.572123 -1.899219,-0.700782 -0.67032,-0.135403 -1.472663,-0.203111 -2.407031,-0.203125 l -1.889063,0 0,11.669531 1.889063,0 c 0.968222,2e-6 1.81119,-0.07109 2.528906,-0.213281 0.72447,-0.142186 1.388011,-0.406248 1.990625,-0.792188 0.751551,-0.480726 1.31353,-1.113798 1.685937,-1.899218 0.379154,-0.785411 0.568738,-1.767181 0.56875,-2.945313" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 126.7508,96.520035 c -3.0764,1.248 -5.9092,2.5648 -9.0016,3.880395 -2.1752,0.9252 -17.1196,7.7132 -18.0508,7.7132 -0.5012,0 -15.7484,-6.9468 -17.7932,-7.7696 -3.0076,-1.209195 -5.9232,-2.758395 -8.8036,-3.877195 -2.3124,-0.8984 -6.832,-3.3864 -8.8288,-3.8516 v -3.2208 h 71.4556 v 3.2208 c -2.0536,0.4784 -6.6152,2.9468 -8.9776,3.9048 z m -62.478,-1.892 35.6232,15.489995 35.832,-15.489995 V 126.43083 H 64.2724 l 4e-4,-31.802795 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.POST OFFICE'] = '<path stroke="none" d="m 74.693994,92.84 24.948,10.836 L 124.72999,92.84 V 115.1 H 74.693994 V 92.84 l 0,0 z m 43.735996,1.316 c -2.156,0.868 -4.144,1.792 -6.3,2.716 -1.512,0.644 -11.984,5.404 -12.627996,5.404 -0.364,0 -11.032,-4.872 -12.46,-5.432 -2.1,-0.84 -4.144,-1.932 -6.16,-2.716 -1.624,-0.644 -4.788,-2.38 -6.188,-2.716 v -2.24 h 50.035996 v 2.268 c -1.456,0.308 -4.648,2.044 -6.3,2.716 z M 73.573994,116.36 H 125.84999 V 88.052 H 73.573994 V 116.36 z M 99.84999,64.28 c 0.2,0 35.52,19.8 37.08,21.16 h -4.84 v 38.64 h -63.88 v -38.6 h -4.88 c 1.56,-1.36 6.92,-4.08 9.08,-5.32 3.08,-1.8 6.04,-3.44 9.08,-5.28 1.6,-1 18.28,-10.6 18.36,-10.6 z m -43.32,23.12 9.92,-0.2 v 38.44 h 67.4 v -38.4 l 9.92,0.16 c -0.48,-0.64 -43.64,-25.04 -43.92,-25.04 -0.04,0 -19.48,11.36 -21.68,12.48 -3.48,1.84 -7.44,4.16 -10.88,6.24 -2.68,1.64 -8.8,4.64 -10.76,6.32 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="M 99.84375,64.28125 C 99.76375,64.28125 83.1,73.875 81.5,74.875 c -3.04,1.84 -6.01375,3.48125 -9.09375,5.28125 -2.16,1.24 -7.5025,3.9525 -9.0625,5.3125 l 4.875,0 0,38.625 63.875,0 0,-38.65625 4.84375,0 c -1.56,-1.36 -36.89375,-21.15625 -37.09375,-21.15625 z M 73.5625,88.0625 l 52.28125,0 0,28.3125 -52.28125,0 0,-28.3125 z m 44.86749,6.0935 c -2.156,0.868 -4.144,1.792 -6.3,2.716 -1.512,0.644 -11.984,5.404 -12.627996,5.404 -0.364,0 -11.032,-4.872 -12.46,-5.432 -2.1,-0.84 -4.144,-1.932 -6.16,-2.716 -1.624,-0.644 -4.788,-2.38 -6.188,-2.716 v -2.24 h 50.035996 v 2.268 c -1.456,0.308 -4.648,2.044 -6.3,2.716 z M 74.693994,92.84 99.641994,103.676 124.72999,92.84 V 115.1 H 74.693994 V 92.84 l 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.ENCLOSED FACITLITY (PUBLIC VENUE)'] = '<path stroke="none" d="m 114.87636,121.26 0,-1.16 -30.680003,0 0,1.16 z m -31.880003,-2.52 -10.36,-16.72 -1,0.44 10.56,16.64 z m 13.04,-13.8 h 7.000003 c 0.56,0 4.44,-6 5,-6.84 H 90.996357 c 0.6,0.88 4.36,6.84 5.04,6.84 z m 15.320003,12 0,-1 -23.520003,0 0,1 z m 2.44,-1.56 8.56,-13.56 -0.84,-0.4 -8.52,13.32 z M 76.836357,101.94 c 0,0.32 3.72,5.88 4.16,6.68 0.36,0.64 4.2,6.68 4.32,6.68 0.44,0 0.48,-0.24 0.68,-0.52 l -8.48,-13.36 c -0.2,0.12 -0.68,0.24 -0.68,0.52 z m 31.000003,10.84 0,-1 -16.480003,0 0,1 z m -19.320003,-1.16 0.68,-0.36 -6.68,-10.52 -0.68,0.36 z m 22.280003,-0.04 6.4,-10.48 -0.8,-0.32 -6.56,10.48 z m -6.44,-2.96 0,-1.04 -9.680003,0 0,1.04 z m 2.84,-1.84 c 0,0.56 0.32,0.64 0.72,0.6 l 4.24,-6.88 -0.64,-0.4 c -0.24,0.2 -4.32,6.6 -4.32,6.68 z m -20.320003,-6.32 4.12,6.96 c 0.28,-0.08 0.84,-0.2 0.84,-0.52 0,-0.56 -3.72,-5.6 -4,-6.88 l -0.96,0.44 z m -19.72,17.96 0.32,-2.84 c 0.08,-3.92 1.96,-11.4 3.04,-14.6 1.6,-4.68 3.16,-8.28 5.64,-12.04 4.36,-6.52 12,-12.36 22.8,-12.36 h 1.080003 c 9.64,0 17.04,4.8 21.32,10.2 1.2,1.52 2.28,2.84 3.2,4.64 0.48,0.88 0.96,1.56 1.44,2.56 0.4,0.88 0.68,1.92 1.12,2.72 0.76,1.44 3.6,10.28 3.6,12.08 v 0.64 h 0.32 v 1 l 1.24,10.84 -0.08,2.16 H 66.996357 l 0.16,-5 0,0 z m -2.32,-4 -0.32,2.36 -0.36,5.64 v 3.84 h 70.880003 v -1 c 0,-2.04 0.08,-6.36 -0.24,-8.12 -0.44,-2.4 -0.52,-5.16 -1.04,-7.48 -0.44,-2.04 -2.92,-12.68 -3.88,-13.08 0,-1.56 -3.48,-7.56 -4.32,-8.84 -1.76,-2.6 -3.76,-5 -6.24,-6.96 -4.92,-3.88 -10.48,-7.04 -19.28,-7.04 h -1.000003 c -11.76,0 -19.6,5.92 -24.56,12.76 -1.44,1.92 -2.36,3.8 -3.48,5.92 -1.16,2.28 -1.68,4.24 -2.64,6.68 -1.24,3.04 -3.44,11.36 -3.52,15.32 l 0,0 z m 52.200003,4.68 c 0.36,-1.32 4.24,-6.6 5.2,-8.32 0.56,-1.04 5.12,-7.88 5.12,-8.2 0,-0.32 -0.56,-0.44 -0.84,-0.52 l -10.6,16.64 1.12,0.4 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 84.196357,120.1 h 30.680003 v 1.16 H 84.196357 v -1.16 z m 3.64,-4.16 h 23.520003 v 1 H 87.836357 v -1 z m 3.52,-4.16 h 16.520003 v 1 H 91.356357 v -1 z m 3.32,-4.2 h 9.680003 v 1.04 h -9.680003 v -1.04 z m 22.360003,11.52 -1.08,-0.4 10.6,-16.6 c 0.28,0.08 0.8,0.16 0.8,0.48 0,0.32 -4.56,7.16 -5.12,8.2 -0.96,1.76 -4.88,7 -5.2,8.32 z m -45.400003,-16.64 1,-0.44 10.36,16.72 -0.8,0.36 -10.56,-16.64 z m 13.72,12.8 c -0.16,0 -3.96,-6.04 -4.32,-6.68 -0.48,-0.76 -4.2,-6.32 -4.2,-6.64 0,-0.28 0.44,-0.4 0.68,-0.48 l 8.52,13.28 c -0.2,0.28 -0.24,0.52 -0.68,0.52 z m 36.160003,-13.84 0.8,0.4 -8.56,13.6 -0.8,-0.64 8.56,-13.36 z m -5.12,-0.64 0.8,0.28 -6.4,10.48 -0.96,-0.28 6.56,-10.48 z m -33.880003,-0.04 6.72,10.48 -0.72,0.4 -6.68,-10.52 0.68,-0.36 z m 24.680003,6.04 c 0,-0.08 4.08,-6.48 4.32,-6.68 l 0.64,0.4 -4.24,6.88 c -0.4,0 -0.72,-0.08 -0.72,-0.6 z m -19.360003,-6.72 c 0.32,1.28 4,6.28 4,6.88 0,0.32 -0.56,0.44 -0.84,0.52 l -4.12,-7 0.96,-0.4 z m 8.2,4.88 c -0.64,0 -4.44,-5.96 -5,-6.84 h 17.000003 c -0.56,0.84 -4.44,6.84 -5,6.84 h -7.000003 z m -28.52,10.68 c 0,0.52 -0.04,2.84 -0.32,2.84 l -0.2,4.96 h 65.200003 l 0.08,-2.16 -1.24,-10.84 v -1 h -0.32 v -0.64 c 0,-1.8 -2.84,-10.64 -3.6,-12.08 -0.44,-0.8 -0.72,-1.84 -1.12,-2.72 -0.48,-1 -1,-1.64 -1.48,-2.56 -0.92,-1.8 -2,-3.12 -3.2,-4.64 -4.24,-5.4 -11.64,-10.2 -21.28,-10.2 h -1.000003 c -10.8,0 -18.48,5.84 -22.8,12.36 -2.52,3.76 -4.08,7.36 -5.68,12.04 -1.08,3.2 -2.96,10.68 -3.04,14.64 l 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.OPEN FACILITY (OPEN VENUE)'] = '<path stroke="none" d="m 122.36,117.12 0,-1.48 -45.12,0 0,1.48 z M 74.48,114 75.56,113.44 59.84,88.8 58.76,89.4 z m 49.56,-0.56 c 0.24,0.12 1,0.52 1.28,0.52 0.2,0 14.44,-22.44 15.92,-24.64 l -1.48,-0.52 -15.72,24.64 z m -6.64,-2.6 0,-1.68 -34.96,0 0,1.68 z m 2.4,-3.16 c 0,0.16 0.96,0.8 1.08,0.88 l 12.84,-20.04 h 0.24 l -1.6,-0.8 c -1.28,2.4 -12.56,19.32 -12.56,19.96 z m -41.08,0.92 1.4,-0.8 -12.72,-20.12 -1.32,0.84 z m 33.28,-3.88 0,-1.64 -24.4,0 0,1.64 z m 3.36,-2.76 c 0,0.6 0.64,0.68 1.08,0.92 l 9.6,-15.44 -1.24,-0.64 c -0.56,2.04 -9.44,14.52 -9.44,15.16 z m -32.16,0.96 1.36,-0.64 -9.72,-15.52 -1.28,0.8 z m 23.44,-4.48 0,-1.68 -13.84,0 0,1.68 z m 5.64,-1.72 6.4,-10.28 -1.24,-0.52 -6.6,10.24 z m -24.64,0.08 1.08,-0.76 -6.48,-10.16 -1.28,0.6 z m 6.56,-4 11,0.08 c 0.6,0 6.44,-8.88 7.04,-10 H 87.28 l 6.92,9.92 z" />';
	icons['GROUND.INSTALLATION.ICON.RELIGIOUS INSTITUTION'] = '<path stroke="none" d="m 101.2,68.08 c 7.872,0 18,3.84 21.696,8.016 4.992,5.664 6.96,12.336 6.96,22.8 V 131.92 H 101.2 V 68.08 z M 70.096,96.304 c 0,-8.448 3.408,-16.416 7.728,-20.736 3.936,-3.936 13.2,-7.488 20.928,-7.488 v 63.888 H 70.096 V 96.304 z m -2.592,38.256 h 64.992 V 99.328 c 0,-10.848 -2.544,-19.728 -8.064,-25.2 -4.848,-4.848 -15.024,-8.688 -24.576,-8.688 -8.304,0 -19.44,3.744 -23.568,7.92 -3.216,3.264 -4.32,4.992 -6.24,9.504 -0.96,2.352 -2.544,10.032 -2.544,13.2 v 38.496 l 0,0 z M 105.136,97.6 v 12.48 c 0,0.528 0.576,1.104 1.104,1.104 h 0.432 c 0.72,0 1.104,-0.816 1.104,-1.536 V 97.792 c 0,-0.528 -0.576,-1.104 -1.104,-1.104 H 106 c -0.528,0.048 -0.864,0.384 -0.864,0.912 z m -11.184,13.584 c 0.768,0 0.864,-0.96 0.864,-1.728 V 97.6 c 0,-0.528 -0.384,-0.864 -0.864,-0.864 h -0.624 c -0.528,0 -0.864,0.384 -0.864,0.864 v 12.48 c 0,0.528 0.576,1.104 1.104,1.104 h 0.384 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 105.136,97.6 c 0,-0.528 0.384,-0.864 0.864,-0.864 h 0.672 c 0.528,0 1.104,0.576 1.104,1.104 v 11.808 c 0,0.72 -0.384,1.536 -1.104,1.536 h -0.48 c -0.528,0 -1.104,-0.576 -1.104,-1.104 V 97.6 h 0.048 z m -3.936,34.368 h 28.656 V 98.896 c 0,-10.464 -1.968,-17.136 -6.96,-22.8 C 119.2,71.872 109.072,68.08 101.2,68.08 v 63.888 z M 93.952,111.184 H 93.52 c -0.528,0 -1.104,-0.576 -1.104,-1.104 V 97.6 c 0,-0.528 0.384,-0.864 0.864,-0.864 h 0.672 c 0.528,0 0.864,0.384 0.864,0.864 v 11.808 c 0,0.768 -0.096,1.776 -0.864,1.776 z M 70.096,96.304 v 35.664 H 98.752 V 68.08 c -7.728,0 -16.992,3.552 -20.928,7.488 -4.272,4.272 -7.728,12.288 -7.728,20.736 z" />';
	icons['GROUND.INSTALLATION.ICON.CHILD DAY CARE'] = '<path stroke="none" d="m 76.56,100.28 c 0,1.76 1.12,3.36 3,3.36 h 0.56 c 1.36,0 2.44,-1.52 2.44,-3 0,-4.32 -6,-4.2 -6,-0.36 z m 26.52,-11.92 v 0.36 c 0,1.48 1.4,3.16 2.8,3.16 h 0.36 c 1.56,0 3,-1.24 3,-2.8 V 87.8 c 0,-0.96 -1.56,-2.04 -2.8,-2.04 h -0.16 c -1.52,-0.04 -3.2,1.4 -3.2,2.6 z m -3.16,-16.84 35.4,21.72 c -1.32,0.16 -4.6,-0.28 -4.6,0.88 v 34.92 H 69.28 V 94.12 c 0,-1.2 -3.28,-0.76 -4.56,-0.88 l 35.2,-21.72 0,0 z m -39.8,22.44 c 0.2,0.8 0.28,1.28 1.32,1.28 h 6.16 v 34.56 c 0,0.52 0.08,0.52 0.2,0.92 h 64.04 c 0.44,0 0.76,-0.32 0.76,-0.76 V 95.24 h 5.96 c 0.76,0 1.32,-0.4 1.32,-1.12 0,-0.6 -17.84,-11.2 -19.8,-12.52 -1.56,-1.04 -19.96,-12.32 -20,-12.32 -0.24,0 -36.72,22.52 -39.96,24.68 l 0,0 z m 20.92,14.2 5.92,4.32 -0.12,0.08 -4.8,2.2 c -0.24,-0.8 -1,-1.88 -1,-2.52 v -4.08 z m 28.4,-8.8 c 0.52,-0.76 0.64,-2.92 1,-3.12 0.36,-0.16 2.44,0.76 2.92,0.88 v 3.56 l -4.44,1.72 v -0.6 c -0.04,-0.88 0.52,-1.04 0.52,-2.44 z m -3,2.04 c 0,0.92 0.04,1.12 -0.36,1.68 V 104 c -2.44,0.24 -15.44,7.52 -17,7.52 -0.52,0 -6.48,-6.72 -7.28,-6.72 h -4.28 c -0.52,0 -2.8,5.16 -2.8,5.6 v 4.68 c 0,0.88 1.8,1.4 2.04,2.44 l -4.08,1.68 1.28,2.56 6.16,-2.8 c 1.52,0.8 9.28,5.6 10.48,5.6 h 0.56 c 0.84,0 1.88,-0.76 1.88,-1.48 v -0.36 c 0,-0.92 -7.32,-4.84 -8.4,-5.8 l 14,-6.32 v 8.36 h -3 v 6.72 h 8.4 v -6.72 h -2.8 v -9.88 l 13.24,-5.84 c 0,1.56 0.2,3.68 0.36,5.08 0.2,1.8 -0.6,3.92 1.52,3.92 2.12,0 1.28,-2.52 1.32,-4.28 0,-1.88 -0.2,-3.52 -0.2,-5.6 v -0.56 l 9.12,-4 -1,-2.88 -6.2,2.84 c 0.32,-0.64 0.72,-0.76 1,-1.44 0.24,-0.68 0.36,-1.2 0.68,-1.76 0.52,-1 0.92,-2.6 1.44,-3.4 l -11.4,-1.56 c -0.6,0.48 -3.2,3.32 -3.2,4.16 v 0.56 h -0.36 l -1.12,7.08 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 81.04,112.24 c 0,0.6 0.76,1.72 1,2.52 l 4.8,-2.2 0.16,-0.12 -5.96,-4.28 v 4.08 z m 28.4,-12.88 c 0,1.4 -0.56,1.56 -0.56,2.44 v 0.6 l 4.48,-1.72 v -3.56 c -0.48,-0.12 -2.56,-1.04 -2.92,-0.88 -0.36,0.2 -0.48,2.36 -1,3.12 z m -32.88,0.92 c 0,-3.88 5.96,-4 5.96,0.36 0,1.44 -1.08,3 -2.44,3 h -0.52 c -1.84,0.04 -3,-1.56 -3,-3.36 z m 29.52,2.84 0.36,-1.72 1.12,-7.08 h 0.36 v -0.56 c 0,-0.84 2.56,-3.72 3.2,-4.16 l 11.4,1.56 c -0.52,0.8 -0.92,2.4 -1.44,3.4 -0.32,0.56 -0.44,1.08 -0.68,1.76 -0.28,0.68 -0.68,0.8 -1,1.44 l 6.2,-2.84 1,2.88 -9.12,4 v 0.56 c 0,2.08 0.2,3.72 0.2,5.6 0,1.76 0.84,4.28 -1.32,4.28 -2.08,0 -1.32,-2.16 -1.52,-3.92 -0.16,-1.36 -0.36,-3.48 -0.36,-5.08 l -13.24,5.84 v 9.88 h 2.8 v 6.72 h -8.4 v -6.72 h 3 v -8.36 l -14.04,6.32 c 1.08,0.92 8.4,4.88 8.4,5.8 v 0.36 c 0,0.72 -1.04,1.48 -1.88,1.48 H 90.6 c -1.2,0 -8.92,-4.8 -10.48,-5.6 l -6.16,2.8 -1.28,-2.56 4.08,-1.72 c -0.28,-1.04 -2.04,-1.52 -2.04,-2.44 v -4.64 c 0,-0.44 2.28,-5.6 2.8,-5.6 h 4.28 c 0.8,0 6.8,6.72 7.28,6.72 1.52,0 14.56,-7.28 17,-7.48 v -0.92 z m -3,-14.76 c 0,-1.2 1.68,-2.6 3.16,-2.6 h 0.2 c 1.24,0 2.8,1.08 2.8,2.04 v 1.32 c 0,1.56 -1.44,2.8 -3,2.8 h -0.36 c -1.4,0 -2.8,-1.72 -2.8,-3.16 v -0.4 z m -38.36,4.92 c 1.32,0.12 4.56,-0.32 4.56,0.84 v 34.92 h 61.44 V 94.12 c 0,-1.2 3.28,-0.76 4.56,-0.88 l -35.36,-21.72 -35.2,21.76 0,0 z" />';
	icons['GROUND.INSTALLATION.ICON.HELICOPTER LANDING SITE'] = icons['AIR.ICON.FULLFRAME.CIVILIAN ROTARY WING'] + '<path fill="none" d="m 140,100 a 40,40 0 1 1 -80,0 40,40 0 1 1 80,0 z"/>';
	icons['GROUND.INSTALLATION.ICON.TRANSPORTATION INFRASTRUCTURE LOCK'] = '<path fill="none" d="m 70,70 65,30 -65,30"/>';
	icons['GROUND.INSTALLATION.ICON.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE'] = '<path fill="none" stroke="rgb(255, 0, 255)" d="m 73.6,112.8 c 0.8,8 26.4,11.2 26.4,11.2 0,0 25.6,-3.2 26.4,-11.2 M 80,88 l 40,0 m -20,-12 0,48"/>';
	icons['GROUND.INSTALLATION.ICON.NATURAL GAS FACILITY'] = '<path stroke="none" d="M 99.53125,56.96875 C 82.923456,56.760716 69.739728,69.541063 65.875,84.4375 62.097002,98.999638 67.650279,115.85654 87,124.25 l 0,12.78125 c 0,1.56138 1.03334,2.37607 1.875,2.9375 0.84166,0.56143 1.790911,0.9611 2.875,1.34375 1.61874,0.57136 3.473804,0.88863 5.25,1.1875 l 0,0.53125 2,0 c 0.374493,0 0.627333,-0.0411 0.875,-0.0625 0.06062,0.004 0.17952,-0.006 0.25,0 0.24767,0.0214 0.50051,0.0625 0.875,0.0625 l 2,0 0,-0.53125 c 1.7762,-0.29887 3.63126,-0.61614 5.25,-1.1875 1.08409,-0.38265 2.03334,-0.78232 2.875,-1.34375 0.84166,-0.56143 1.875,-1.37612 1.875,-2.9375 L 113,124.25 c 19.45615,-8.43816 24.95876,-25.418784 21.0625,-40.03125 -3.97493,-14.907506 -17.29977,-27.639572 -34,-27.21875 -0.002,-6.4e-5 -0.104178,0.0024 -0.125,0 -0.06798,-0.0078 -0.142435,-0.02795 -0.40625,-0.03125 z m -0.0625,4 C 99.45372,60.968562 99.615873,60.99061 99.9375,61 l 0.0625,0 0.0625,0 c 14.65436,-0.42768 26.56776,10.90899 30.125,24.25 3.55724,13.34101 -0.9112,28.32698 -19.9375,35.9375 l -1.25,0.5 0,1.34375 0,13.53125 c -0.0275,0.03 -0.007,0.005 -0.0937,0.0625 -0.37811,0.25222 -1.10827,0.62275 -2,0.9375 -1.78345,0.6295 -4.1936,1.12926 -6.125,1.34375 l -0.5625,0.0625 c -0.042,-0.003 -0.0499,0.003 -0.0937,0 l -0.125,0 -0.125,0 c -0.04384,0.003 -0.05175,-0.003 -0.09375,0 l -0.5625,-0.0625 c -1.931395,-0.21449 -4.341545,-0.71425 -6.125,-1.34375 -0.891727,-0.31475 -1.621889,-0.68528 -2,-0.9375 -0.08678,-0.0579 -0.06622,-0.0325 -0.09375,-0.0625 l 0,-13.53125 0,-1.34375 -1.25,-0.5 C 70.824181,113.61717 66.300809,98.732265 69.75,85.4375 73.199191,72.142735 84.95722,60.786975 99.46875,60.96875 z m 26.80859,44.12682 c -1.42971,0.65625 -2.99416,1.23047 -4.69336,1.72265 -1.68751,0.48047 -3.32228,0.7207 -4.90429,0.72071 -2.03908,-10e-6 -3.90822,-0.28126 -5.60742,-0.84375 -1.69923,-0.5625 -3.1465,-1.40625 -4.3418,-2.53125 -1.20704,-1.13672 -2.13868,-2.55469 -2.79492,-4.253911 -0.65626,-1.710929 -0.98438,-3.708974 -0.98438,-5.994141 0,-4.183576 1.21875,-7.482401 3.65625,-9.896484 2.44921,-2.425756 5.80663,-3.638645 10.07227,-3.638672 1.48826,2.7e-5 3.00584,0.181667 4.55273,0.544922 1.55857,0.351588 3.23435,0.955103 5.02735,1.810547 l 0,4.130859 -0.31641,0 c -0.36331,-0.281229 -0.89065,-0.65037 -1.58203,-1.107422 -0.69143,-0.457009 -1.37112,-0.837868 -2.03906,-1.142578 -0.80862,-0.363258 -1.72854,-0.662086 -2.75977,-0.896484 -1.01955,-0.24607 -2.1797,-0.369117 -3.48047,-0.369141 -2.9297,2.4e-5 -5.25001,0.943382 -6.96094,2.830078 -1.69922,1.875019 -2.54883,4.417985 -2.54882,7.628907 -1e-5,3.386728 0.89061,6.023444 2.67187,7.91016 1.78124,1.875 4.20702,2.8125 7.27734,2.8125 1.12499,0 2.24413,-0.11133 3.35743,-0.33399 1.12498,-0.22265 2.10935,-0.50976 2.95312,-0.86133 l 0,-6.416012 -7.01367,0 0,-3.058594 10.45898,0 0,11.232426 m -28.792965,1.93359 -4.306641,0 -12.410156,-23.414063 0,23.414063 -3.251953,0 0,-26.173829 5.396484,0 11.320313,21.374999 0,-21.374999 3.251953,0 0,26.173829" />';
	icons['GROUND.INSTALLATION.ICON.TOLL FACILITY'] = '<path stroke="none" d="m 69.1,112.28 c 0,-0.68 0.8,-1.68 1.4,-1.68 h 0.48 c 0.76,0 1.52,0.76 1.52,1.52 v 1.24 c 0,0.48 -0.92,1.24 -1.52,1.24 h -0.2 c -0.76,0 -1.68,-0.76 -1.68,-1.4 v -0.92 l 0,0 z m -1.08,0.48 v 0.28 c 0,1.24 1.52,2.6 2.92,2.6 1.32,0 2.76,-1.52 2.76,-2.48 v -1.04 c 0,-1.16 -1.44,-2.6 -2.76,-2.6 -1.68,0 -2.92,1.6 -2.92,3.24 z m 27.64,-11.64 -1.96,-2.84 -2.32,0.04 4.28,2.8 z m -29.48,17.76 c 0,-0.52 0.84,-0.92 1.4,-0.92 H 99.1 c 0.84,0 1.32,0.6 1.4,1.4 -0.6,0.12 -1,0.32 -1.72,0.32 H 68.02 c -0.64,0 -1.84,0 -1.84,-0.6 v -0.2 z m 9.36,-10.16 15.08,0.04 8.16,0.16 c 0.48,0.88 1.96,3.04 1.84,4.28 l -0.2,2.6 c -0.48,0.16 -0.48,0.32 -1.04,0.32 H 67.1 c -0.56,0 -0.52,-0.2 -1.08,-0.32 -0.08,-0.72 -0.32,-0.96 -0.32,-1.84 v -0.6 c 0,-1.08 1.52,-3.48 2,-4.44 l 7.84,-0.2 z m -5.84,-1.96 c 0.08,-1.12 3.48,-7.08 4.32,-7.08 h 18.44 c 1,0 3.96,5.8 4.32,7.08 H 69.7 z m 21.68,-8.44 2.32,-0.04 1.96,2.84 -4.28,-2.8 z m 44.28,27.8 V 73.84 c -0.96,0.24 -10.28,6 -11.92,6.96 -1.32,0.8 -11.6,6.52 -11.6,7.16 0,0 1.28,2.12 1.4,2.32 l 4.92,-2.8 v 19.24 l -0.36,0.32 c -2.88,-1.96 -33.4,-21.96 -33.64,-21.96 -0.12,0 -3.88,5.6 -4,6.16 l 10.8,7 -18.32,0.04 c -0.92,1.4 -1.88,2.36 -2.76,3.84 -0.2,0.32 -2,4.44 -2,4.6 v 0.76 h -1.24 c -0.08,0.88 -2.6,4.64 -2.6,5.4 v 0.76 c 0,1.48 0.4,2.88 1.4,3.4 -0.24,0.32 -0.96,1.08 -0.96,1.56 v 0.92 c 0,1.12 1.52,1.52 2.6,1.52 v 2.32 l 0.16,2 c 0.52,0.2 0.32,0.48 1.2,0.6 0.64,0.08 0.96,0.16 1.68,0.16 h 1.08 l 1.68,-0.16 0.28,-0.32 0.2,-1.96 0.04,-2.48 h 19.08 v 3.08 c 0,0.84 0.32,1.16 0.6,1.68 l 1.4,0.2 1.24,-0.04 c 1.68,0 3.08,-0.12 3.08,-1.84 v -3.08 c 0.84,-0.2 2.6,-0.48 2.6,-1.4 v -1.68 c 0,-0.52 -0.48,-0.68 -0.92,-0.76 0.12,-0.52 1.2,-1.08 1.2,-2.48 v -2 c 0,-1.48 -2.12,-4.12 -2.48,-5.4 h -1.2 v -0.44 c 0,-1.12 -2.16,-4.76 -2.48,-5.84 l 19,12.48 c -0.4,1.56 -2.04,3.96 -2.04,5.2 v 7.24 h 22.88 l 0,0 z M 95.86,114.6 H 95.7 c -1.08,0 -1.84,-0.68 -1.84,-1.68 v -0.48 c 0,-1 0.56,-1.84 1.52,-1.84 h 0.48 c 0.96,0 1.52,1.08 1.52,2 0,1.08 -0.48,2 -1.52,2 z m -3.08,-2.48 v 1.08 c 0,1.04 1.56,2.48 2.92,2.48 1.44,0 2.6,-1.32 2.6,-2.76 v -0.8 c 0,-1.16 -1.28,-2.6 -2.48,-2.6 H 95.7 c -1.4,0 -2.92,1.36 -2.92,2.6 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 114.46,107.92 c 0,0.88364 -0.80588,1.6 -1.8,1.6 -0.99412,0 -1.8,-0.71636 -1.8,-1.6 0,-0.88364 0.80588,-1.6 1.8,-1.6 0.99412,0 1.8,0.71636 1.8,1.6 z m -11.24,-7.16 c 0,0.88364 -0.80588,1.6 -1.8,1.6 -0.99412,0 -1.799996,-0.71636 -1.799996,-1.6 0,-0.883644 0.805876,-1.600004 1.799996,-1.600004 0.99412,0 1.8,0.71636 1.8,1.600004 z m -5.519996,-3.680004 c 0,0.88364 -0.80588,1.6 -1.8,1.6 -0.99412,0 -1.8,-0.71636 -1.8,-1.6 0,-0.88364 0.80588,-1.6 1.8,-1.6 0.99412,0 1.8,0.71636 1.8,1.6 z M 108.9,104.48 c 0,0.88364 -0.80588,1.6 -1.8,1.6 -0.99412,0 -1.8,-0.71636 -1.8,-1.6 0,-0.88364 0.80588,-1.6 1.8,-1.6 0.99412,0 1.8,0.71636 1.8,1.6 z M 92.259996,93.52 c 0,0.88364 -0.80588,1.6 -1.8,1.6 -0.99412,0 -1.8,-0.71636 -1.8,-1.6 0,-0.88364 0.80588,-1.6 1.8,-1.6 0.99412,0 1.8,0.71636 1.8,1.6 z M 86.46,89.8 c 0,0.88364 -0.80588,1.6 -1.8,1.6 -0.99412,0 -1.8,-0.71636 -1.8,-1.6 0,-0.88364 0.80588,-1.6 1.8,-1.6 0.99412,0 1.8,0.71636 1.8,1.6 z m 35.6,2.64 10.84,0 0,16.12 -10.84,0 z m -55.88,26.44 v 0.16 c 0,0.6 1.2,0.6 1.84,0.6 h 30.76 c 0.72,0 1.12,-0.16 1.68,-0.32 -0.08,-0.76 -0.56,-1.36 -1.4,-1.36 H 67.54 c -0.52,0 -1.36,0.4 -1.36,0.92 z m 26.6,-6.76 c 0,-1.24 1.52,-2.6 2.92,-2.6 h 0.16 c 1.2,0 2.48,1.44 2.48,2.6 v 0.76 c 0,1.44 -1.16,2.76 -2.6,2.76 -1.36,0 -2.92,-1.44 -2.92,-2.48 v -1.04 h -0.04 z m -24.76,0.64 c 0,-1.6 1.24,-3.24 2.92,-3.24 1.32,0 2.76,1.48 2.76,2.6 v 1.08 c 0,0.92 -1.44,2.48 -2.76,2.48 -1.4,0 -2.92,-1.36 -2.92,-2.6 v -0.32 z m -0.32,-3.84 c -0.48,0.96 -2,3.36 -2,4.44 v 0.6 c 0,0.88 0.24,1.08 0.32,1.84 0.52,0.12 0.52,0.32 1.08,0.32 h 32.28 c 0.56,0 0.52,-0.2 1.04,-0.32 l 0.2,-2.6 c 0.08,-1.24 -1.36,-3.4 -1.84,-4.28 l -8.16,-0.16 -15.08,-0.04 -7.84,0.2 z m 2,-2.16 h 27.08 c -0.36,-1.28 -3.32,-7.08 -4.32,-7.08 H 74.02 c -0.84,0 -4.24,5.96 -4.32,7.08 z m 26.16,7.84 c 1.08,0 1.52,-0.92 1.52,-2 0,-0.92 -0.56,-2 -1.52,-2 h -0.48 c -0.96,0 -1.52,0.84 -1.52,1.84 v 0.48 c 0,1 0.76,1.68 1.84,1.68 h 0.16 l 0,0 z M 69.1,112.28 v 0.92 c 0,0.6 0.96,1.4 1.68,1.4 h 0.16 c 0.64,0 1.52,-0.76 1.52,-1.24 v -1.24 c 0,-0.76 -0.76,-1.52 -1.52,-1.52 h -0.48 c -0.56,0 -1.36,1 -1.36,1.68 z" />';
	icons['GROUND.INSTALLATION.ICON.TRAFFIC INSPECTION FACILITY'] = '<path stroke="none" d="m 121.38,81.7 h 1.08 v 0.64 c 0,0.6 0.8,2.08 1.2,2.36 0.52,0.36 1.88,0.92 2.68,0.92 2.6,0 3.88,-1.88 3.88,-4.52 v -0.48 h -7.44 c -0.48,0 -1.2,0.76 -1.4,1.08 z m -22.56,23.48 c 0,-1.68 1.68,-2.96 3.44,-2.96 1.68,0 3.12,1.44 3.12,3.12 v 0.64 c 0,1.28 -1.72,2.64 -3.12,2.64 -1.72,0 -3.44,-1.28 -3.44,-2.96 v -0.48 z m -29.72,0 c 0,-1.8 1.32,-2.96 3.12,-2.96 1.72,0 3.28,1.44 3.28,3.12 v 0.32 c 0,1.64 -1.64,2.96 -3.44,2.96 -1.48,0 -2.96,-1.2 -2.96,-2.64 v -0.8 z m 3.72,-7 c 0.04,-0.44 1.6,-4.24 1.88,-5 0.64,-1.68 0.92,-3.56 3.28,-3.56 H 96.5 c 2.84,0 2.2,1.84 3.2,3.64 0.24,0.44 1.76,4.48 1.76,4.92 H 72.82 z m -3.72,0.96 c -2.12,0 -3.72,1.48 -3.72,3.56 v 9.2 c 0,1.04 1.68,2.32 3.12,2.32 v 5.28 c 0,1.8 1.32,3.28 3.28,3.28 1.4,0 3.12,-1.6 3.12,-2.64 v -5.92 h 24.76 v 6.24 c 0,0.96 1.68,2.32 2.96,2.32 h 0.16 c 1.4,0 3.12,-1.32 3.12,-2.64 v -5.92 c 1.92,0 3.28,-1.36 3.28,-3.28 v -8.08 c 0,-2.04 -1.36,-3.32 -3.16,-3.68 -1.36,-0.24 -1.12,-0.84 -1.64,-1.88 -0.36,-0.76 -0.68,-1.64 -1.04,-2.4 -1.24,-2.64 -2.16,-8.24 -5.6,-8.24 h -21.2 c -2.92,0 -3.52,3.32 -4.48,5.48 -0.64,1.44 -2.68,5.8 -2.96,7 z m 56.48,20.2 0.32,-3.28 0.48,-6.24 h 1.72 l 0.76,12.92 h 5.76 V 88.86 c 0,-0.56 -1.24,-1.88 -2.04,-1.88 l -0.56,0.08 -9.88,14.56 h 8.4 v 3.56 h -11.2 v 17.6 h 6.08 l -0.04,-0.8 0.2,-2.64 z m -16.8,-30.8 c 0.2,-0.88 0.96,-1.52 2,-1.56 v 2.16 h -2 c 0.04,1.4 0.76,2.16 2.16,2.16 v -1.96 h 2.04 c -0.04,1.28 -0.76,1.44 -1.4,2 h 7.8 l 0.04,10.16 10.04,-14.32 -10.12,-0.2 h -6.4 v -7.6 c 0,-1.16 -0.76,-2.16 -1.88,-2.16 h -0.44 c -2.24,0 -2.04,2.4 -2.04,4.68 0.04,1.32 -0.36,5.8 0.2,6.64 z m 0,0 v 0.64 h 2.04 v -2.2 c -1.08,0.04 -1.84,0.68 -2.04,1.56 z m 2.16,2.8 h 0.64 c 0.64,-0.56 1.36,-0.72 1.4,-2.04 h -2.04 v 2.04 z m 19.32,-11.96 0,-2.04 -8.84,-0.04 0.96,2.04 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 130.26,79.38 -7.88,-0.04 0.4,1.28 7.48,0 z m -8.12,22.24 9.88,-14.56 0.56,-0.08 -3.12,0.2 -10.04,14.32 -0.08,3.68 11.2,0 0,-3.56 z m -23.32,3.56 v 0.48 c 0,1.68 1.68,2.96 3.44,2.96 1.36,0 3.12,-1.36 3.12,-2.64 v -0.64 c 0,-1.68 -1.44,-3.12 -3.12,-3.12 -1.76,0 -3.44,1.28 -3.44,2.96 z m -29.72,0 v 0.76 c 0,1.44 1.48,2.64 2.96,2.64 1.76,0 3.44,-1.32 3.44,-2.96 v -0.28 c 0,-1.64 -1.56,-3.12 -3.28,-3.12 -1.8,0 -3.12,1.16 -3.12,2.96 z m 3.72,-7 h 28.64 c 0,-0.48 -1.52,-4.48 -1.76,-4.92 -1.04,-1.76 -0.36,-3.64 -3.24,-3.64 H 77.94 c -2.36,0 -2.64,1.92 -3.28,3.56 -0.24,0.76 -1.8,4.56 -1.84,5 z" />';
	icons['GROUND.INSTALLATION.ICON.TUNNEL'] = '<path stroke="none" d="m 94.44,116.76 c 0,-3.48 2.56,-7.24 5.88,-7.24 3.16,0 5.56,3.96 5.56,7.08 v 0.84 H 94.44 v -0.68 z m 27.2,-4.72 9.04,-4.2 c 0.16,1.68 0.76,3.2 1.04,5.2 0.28,1.8 0.64,3.32 0.64,5.6 v 0.52 h -10 l -0.72,-7.12 z m -43.48,4.88 0.12,2.2 H 68 c 0.04,-1.6 0.28,-3.84 0.56,-5.36 0.12,-0.68 0.24,-1.76 0.48,-2.4 0.08,-0.24 0.68,-2.24 0.72,-2.44 l 9.24,3.12 -0.84,4.88 z m 39.04,-16.84 6.24,-6.24 c 0.6,0.96 1.24,1.76 1.92,2.76 0.76,1.12 1.16,1.96 1.84,3.08 0.64,1.04 2.8,5.6 2.76,6.88 l -8.72,4.16 c -0.08,-2.52 -2.96,-9 -4.04,-10.64 z m -37.92,10.44 -9.12,-3.04 c 0.12,-1.16 2.36,-5.88 3,-6.96 1.2,-2.08 2.96,-4.2 3.96,-6.04 l 7.56,4.4 c -0.16,0.52 -2.56,4.32 -3.04,5.4 -0.76,1.72 -1.64,4.88 -2.36,6.24 z M 111.24,83.2 c 2.84,0.68 9.8,7.12 11.32,9.44 l -6.32,6.16 c -0.52,-1.8 -6.04,-6.88 -8.16,-7.4 l 3.16,-8.2 z M 78.08,93.36 C 79.68,90.96 88,83.8 91.04,83.08 L 94.88,91 c -2.56,0.6 -7.92,4.96 -9.2,6.88 l -7.6,-4.52 z M 92.6,82.4 c 2.56,-0.6 4.08,-1.84 7.76,-1.84 h 1.36 c 4.04,0 5.32,1.2 8.08,1.84 -0.04,0.96 -1.88,5.16 -2.32,6.28 -0.56,1.4 -0.4,1.96 -2.16,1.52 -1.08,-0.28 -2.36,-0.56 -3.64,-0.56 h -1 L 96.12,90.28 92.6,82.4 z M 66.48,119.8 H 60.4 c -0.4,0 -0.52,0.12 -0.52,0.52 v 0.16 c 0,0.4 0.12,0.52 0.52,0.52 h 79.04 c 0.32,0 0.68,-0.32 0.68,-0.52 0,-0.4 -0.28,-0.68 -0.68,-0.68 h -5.72 v -1.52 c 0,-10.12 -4.88,-20.4 -9.48,-25.92 C 119.76,87.04 111.64,79 102.2,79 h -2.04 c -9.68,0 -18.76,8.44 -23.56,13.68 -5,5.56 -10.12,16.56 -10.12,27.12 l 0,0 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 78.96,112.04 -9.28,-3.12 c -0.04,0.2 -0.6,2.24 -0.68,2.44 -0.24,0.64 -0.36,1.72 -0.48,2.4 -0.24,1.52 -0.52,3.76 -0.52,5.36 h 10.28 l -0.12,-2.2 0.8,-4.88 z m 15.48,5.4 h 11.44 v -0.84 c 0,-3.12 -2.44,-7.08 -5.56,-7.08 -3.32,0 -5.88,3.76 -5.88,7.24 v 0.68 z m 27.92,1.68 h 10 v -0.48 c 0,-2.28 -0.36,-3.8 -0.64,-5.6 -0.28,-2 -0.92,-3.52 -1.04,-5.2 l -9.04,4.2 0.72,7.08 z m -5.16,-19.04 c 1.08,1.64 4,8.12 4.04,10.6 l 8.72,-4.16 c 0.04,-1.24 -2.12,-5.8 -2.76,-6.84 -0.68,-1.12 -1.08,-1.96 -1.84,-3.08 -0.68,-1 -1.32,-1.8 -1.92,-2.76 l -6.24,6.24 z m -37.92,10.44 c 0.72,-1.36 1.6,-4.52 2.36,-6.24 0.48,-1.08 2.88,-4.88 3.04,-5.36 l -7.56,-4.4 c -1,1.8 -2.76,3.96 -3.96,6 -0.64,1.08 -2.88,5.8 -3,6.96 l 9.12,3.04 z m 28.8,-19.12 c 2.12,0.52 7.64,5.6 8.16,7.4 l 6.32,-6.12 c -1.52,-2.32 -8.48,-8.8 -11.32,-9.48 l -3.16,8.2 z m -30,1.96 7.6,4.56 C 86.96,95.96 92.32,91.6 94.92,91 l -3.84,-7.92 c -3.08,0.68 -11.4,7.88 -13,10.28 z M 92.6,82.4 l 3.52,7.88 4.56,-0.64 h 1 c 1.28,0 2.56,0.28 3.64,0.56 1.72,0.44 1.6,-0.08 2.16,-1.52 0.44,-1.12 2.28,-5.32 2.28,-6.28 -2.76,-0.64 -4.04,-1.88 -8.08,-1.88 h -1.36 c -3.64,0 -5.2,1.28 -7.72,1.88 z" />';
	icons['GROUND.INSTALLATION.ICON.PUMPING STATION'] = '<path stroke="none" d="m 83.1875,83.8125 0,1.1875 0,5.59375 -11.34375,0 0,-0.03125 c -0.175227,0 -0.297921,0.0296 -0.46875,0.03125 -0.06802,6.59e-4 -0.120177,-9.64e-4 -0.1875,0 -2.717255,0.0389 -4.941393,0.308623 -6.53125,1.65625 -1.440366,1.220912 -1.969766,3.290471 -2.125,5.9375 l -0.125,0 0,1.21875 c 8e-6,0.108539 -0.03252,0.170541 -0.03125,0.28125 l 0.03125,0 0,14.125 -2.8125,0 0,2.375 80.8125,0 0,-2.375 -2.8125,0 0,-14 0,-1.625 -0.125,0 c -0.0871,-2.555646 -0.4504,-4.609899 -1.8125,-5.875 -1.53092,-1.421893 -3.80625,-1.658695 -6.84375,-1.6875 l 0,-0.03125 -0.28125,0 c -0.16485,-5.61e-4 -0.26776,-0.03199 -0.4375,-0.03125 l 0,0.03125 -11.28125,0 0,-5.59375 0,-1.1875 -1.21875,0 -31.1875,0 -1.21875,0 z m 2.40625,2.375 28.8125,0 0,27.21875 -28.8125,0 0,-27.21875 z M 71.1875,93 c 0.08272,-0.0019 0.133964,0.0013 0.21875,0 l 11.78125,0 0,8.40625 -7.5,0 c -0.813187,-0.0653 -1.42564,-0.10742 -2,-0.0312 -0.02174,0.003 -0.04056,0.0279 -0.0625,0.0312 -0.0086,0.001 -0.02258,-0.001 -0.03125,0 l 0,0.0312 c -0.547226,0.0923 -1.167449,0.31063 -1.53125,0.8125 -0.387343,0.53435 -0.420208,1.08557 -0.4375,1.5625 -0.01341,0.36987 -0.0061,0.76339 0,1.1875 l -0.03125,0 0,8.8125 -6.78125,0 0,-14.5 c 0.01519,-2.960729 0.517964,-4.497053 1.40625,-5.25 C 67.06443,93.345667 68.729023,93.056048 71.1875,93 z m 45.625,0 11.78125,0 c 0.0872,9.65e-4 0.13387,-0.0016 0.21875,0 2.76413,0.05088 4.46989,0.398222 5.21875,1.09375 0.77351,0.718424 1.16724,2.275827 1.15625,5.1875 l 0,14.53125 -6.78125,0 0,-8 0.0312,0 c -0.002,-0.1449 -0.0352,-0.2676 -0.0312,-0.40625 0.0242,-0.85181 0.16193,-1.61794 -0.0937,-2.5 -0.14865,-0.51282 -0.60854,-1.16089 -1.21875,-1.40625 -0.22383,-0.09 -0.46441,-0.008 -0.6875,-0.0312 l 0,-0.0625 -9.59375,0 0,-8.40625 z M 74,103.8125 l 9.1875,0 0,10 -9.1875,0 0,-8.46875 0.03125,0 c 0,-0.64723 -0.04251,-1.12697 -0.03125,-1.4375 0.0042,-0.11645 -0.0084,-0.0474 0,-0.0937 z m 42.8125,0 9.1875,0 c 0.0165,0.20677 0.0271,0.83486 0.0312,1.59375 l -0.0312,0 0,8.40625 -9.1875,0 0,-10 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 116.8125,93 11.78125,0 c 0.0872,9.65e-4 0.13387,-0.0016 0.21875,0 2.76413,0.05088 4.46989,0.398222 5.21875,1.09375 0.77351,0.718424 1.16724,2.275827 1.15625,5.1875 l 0,14.53125 -6.78125,0 0,-8 0.0312,0 c -0.002,-0.1449 -0.0352,-0.2676 -0.0312,-0.40625 0.0242,-0.85181 0.16193,-1.61794 -0.0937,-2.5 -0.14865,-0.51282 -0.60854,-1.16089 -1.21875,-1.40625 -0.22383,-0.09 -0.46441,-0.008 -0.6875,-0.0312 l 0,-0.0625 -9.59375,0 0,-8.40625 z m -45.625,0 c 0.08272,-0.0019 0.133964,0.0013 0.21875,0 l 11.78125,0 0,8.40625 -7.5,0 c -0.813187,-0.0653 -1.42564,-0.10742 -2,-0.0312 -0.02174,0.003 -0.04056,0.0279 -0.0625,0.0312 -0.0086,0.001 -0.02258,-0.001 -0.03125,0 l 0,0.0312 c -0.547226,0.0923 -1.167449,0.31063 -1.53125,0.8125 -0.387343,0.53435 -0.420208,1.08557 -0.4375,1.5625 -0.01341,0.36987 -0.0061,0.76339 0,1.1875 l -0.03125,0 0,8.8125 -6.78125,0 0,-14.5 c 0.01519,-2.960729 0.517964,-4.497053 1.40625,-5.25 C 67.06443,93.345667 68.729023,93.056048 71.1875,93 z m 14.40625,-6.8125 28.8125,0 0,27.21875 -28.8125,0 0,-27.21875 z" />';
	icons['GROUND.INSTALLATION.ICON.RESERVOIR'] = '<path stroke="none" d="M 127.34375 69.125 C 127.03535 69.128713 126.72361 69.150874 126.40625 69.1875 C 123.41295 69.532721 120.83573 71.946885 118.375 74.46875 C 115.91427 76.990615 113.54801 79.711545 111.5 80.90625 C 108.94431 82.396934 105.46521 82.474776 101.90625 82.59375 C 98.347294 82.712724 94.665859 82.86231 91.8125 84.9375 C 89.655155 86.506478 88.626242 88.535747 87.5 90.25 C 86.373758 91.964253 85.234348 93.386944 82.65625 94.21875 C 79.350184 95.285094 72.020939 96.390414 66.875 98.84375 C 64.30203 100.07042 62.142733 101.66535 61.46875 104 C 60.794767 106.33465 61.740301 109.09732 64.6875 112.3125 L 65.09375 111.9375 L 65.09375 120.0625 L 84.28125 120.0625 L 84.28125 129.65625 L 86.6875 129.65625 L 86.6875 120.0625 L 97.90625 120.0625 L 97.90625 129.65625 L 100.28125 129.65625 L 100.28125 120.0625 L 117.09375 120.0625 L 117.09375 112.53125 C 117.44664 112.2105 117.73859 111.86135 118 111.5 C 119.01444 110.09774 119.34439 108.47515 119.5 106.875 C 119.81122 103.6747 119.497 100.46438 121.71875 97.6875 C 123.13179 95.921073 125.99487 95.358815 129.0625 94.71875 C 132.13013 94.078685 135.44618 93.308382 137.1875 90.40625 C 139.38828 86.738142 139.1395 81.283093 137.21875 76.78125 C 136.2584 74.530329 134.85523 72.504011 133.03125 71.09375 C 131.43527 69.859772 129.50253 69.099006 127.34375 69.125 z M 127.375 70.71875 C 129.16055 70.687901 130.70702 71.295717 132.0625 72.34375 C 133.61162 73.541502 134.87515 75.355721 135.75 77.40625 C 137.4997 81.507307 137.60972 86.567008 135.8125 89.5625 C 134.47382 91.793568 131.74502 92.524815 128.71875 93.15625 C 125.69248 93.787685 122.40011 94.273127 120.46875 96.6875 C 117.82888 99.987013 118.19513 103.74815 117.90625 106.71875 C 117.76181 108.20405 117.45762 109.49795 116.6875 110.5625 C 116.51101 110.80646 116.29844 111.05409 116.0625 111.28125 L 65.84375 111.28125 L 65.875 111.25 C 63.116599 108.24078 62.559971 106.06999 63.03125 104.4375 C 63.502529 102.80501 65.17702 101.41853 67.5625 100.28125 C 72.333461 98.006686 79.487466 96.923256 83.125 95.75 C 86.097302 94.791006 87.650892 92.940647 88.84375 91.125 C 90.036608 89.309353 90.934145 87.539372 92.75 86.21875 C 95.090241 84.51674 98.429206 84.305826 101.96875 84.1875 C 105.50829 84.069174 109.22454 84.064166 112.28125 82.28125 C 114.74924 80.841555 117.09033 78.063285 119.5 75.59375 C 121.90967 73.124215 124.38465 71.036029 126.59375 70.78125 C 126.85867 70.750676 127.11992 70.723157 127.375 70.71875 z " /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 127.375,70.71875 c 1.78555,-0.03085 3.33202,0.576967 4.6875,1.625 1.54912,1.197752 2.81265,3.011971 3.6875,5.0625 1.7497,4.101057 1.85972,9.160758 0.0625,12.15625 -1.33868,2.231068 -4.06748,2.962315 -7.09375,3.59375 -3.02627,0.631435 -6.31864,1.116877 -8.25,3.53125 -2.63987,3.299513 -2.27362,7.06065 -2.5625,10.03125 -0.14444,1.4853 -0.44863,2.7792 -1.21875,3.84375 -0.17649,0.24396 -0.38906,0.49159 -0.625,0.71875 l -50.21875,0 0.03125,-0.0312 c -2.758401,-3.00922 -3.315029,-5.18001 -2.84375,-6.8125 0.471279,-1.63249 2.14577,-3.01897 4.53125,-4.15625 4.770961,-2.274564 11.924966,-3.357994 15.5625,-4.53125 2.972302,-0.958994 4.525892,-2.809353 5.71875,-4.625 1.192858,-1.815647 2.090395,-3.585628 3.90625,-4.90625 2.340241,-1.70201 5.679206,-1.912924 9.21875,-2.03125 3.53954,-0.118326 7.25579,-0.123334 10.3125,-1.90625 2.46799,-1.439695 4.80908,-4.217965 7.21875,-6.6875 2.40967,-2.469535 4.88465,-4.557721 7.09375,-4.8125 0.26492,-0.03057 0.52617,-0.05809 0.78125,-0.0625 z m -41.883461,48.95195 13.6,0 0,10 -13.6,0 z" />';
	icons['GROUND.INSTALLATION.ICON.STORAGE TOWER'] = '<path stroke="none" d="m 118.3,121.04 0.44,5.32 0.68,12.84 h 2.88 c 0,-6.08 -1.12,-12.6 -1.12,-18.64 0,-3.4 -0.4,-6.24 -0.44,-9.56 -0.08,-5.32 0.24,-2.96 2.64,-6.56 l -0.28,-3.12 0.04,-1.12 h -4.2 V 84.04 c -2.48,0.56 -5.24,1.8 -8.28,2.56 -2.56,0.64 -6.44,1.44 -9.44,1.44 h -2.44 c -7.56,0 -12.2,-2.64 -17.96,-4 v 16.2 h -4.2 v 0.68 l -0.28,3.72 3.2,3.72 -2,30.84 h 3.08 v -3.28 l 1.4,-21.72 c 0.52,0.4 2.12,2.72 3,3.6 0.88,0.88 2.4,2.16 3.48,2.92 2.2,1.48 5.56,3.84 8.72,4.12 v 14.4 h 5.56 v -14.4 c 3.72,-0.88 6.16,-2.24 8.8,-4.28 1.4,-1.08 2.2,-1.76 3.44,-3 0.68,-0.68 2.48,-3.16 3.04,-3.4 v 3.12 l 0.24,3.76 z M 99.66,85.16 c 7.44,0 23.04,-4.44 25.72,-8.44 -2.8,-1.48 -25.08,-15.96 -25.28,-15.96 -0.44,0 -24.92,15.4 -25.48,16.2 2.56,3.48 16.6,8.2 23.28,8.2 h 1.76 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 97.9,85.16 c -4.32,0 -11.68,-1.96 -17.04,-4.28 l -0.04,3.16 c 5.76,1.36 10.4,4 17.96,4 h 2.44 c 3,0 6.88,-0.76 9.44,-1.4 3,-0.76 5.8,-2 8.28,-2.56 V 80.8 c -5.96,2.44 -14.4,4.36 -19.28,4.36 H 97.9 z" />';
	icons['GROUND.INSTALLATION.ICON.SURFACE WATER INTAKE'] = '<path stroke="none" d="M 63.4375 75.5 L 63.4375 76.3125 L 63.4375 90.71875 L 63.4375 91.5 L 64.21875 91.5 L 75.71875 91.5 C 76.49382 96.600454 79.765679 99.108231 83.34375 100.96875 C 87.121837 102.93327 91.262395 104.33285 93.75 107.53125 C 94.815515 108.90115 94.885219 110.74116 95.21875 112.625 C 95.385516 113.56692 95.617407 114.50925 96.15625 115.375 C 96.695093 116.24075 97.534326 117.01176 98.78125 117.53125 C 101.24327 118.55704 108.6724 120.73552 115.9375 122.40625 C 119.57005 123.24162 123.14335 123.94513 126.03125 124.28125 C 127.4752 124.44931 128.74544 124.51456 129.78125 124.46875 C 130.81706 124.42295 131.6322 124.29565 132.21875 123.8125 C 134.84371 121.65079 136.12282 119.93575 136.46875 118.34375 C 136.81468 116.75175 136.07083 115.43024 134.96875 114.40625 C 133.86667 113.38226 132.39813 112.53365 131.03125 111.65625 C 129.66437 110.77885 128.40923 109.87955 127.71875 108.84375 C 124.21104 103.58202 121.02724 95.542877 113.4375 91.5 L 119.03125 91.5 L 119.8125 91.5 L 119.8125 90.71875 L 119.8125 76.3125 L 119.8125 75.5 L 119.03125 75.5 L 64.21875 75.5 L 63.4375 75.5 z M 65.03125 77.125 L 118.21875 77.125 L 118.21875 89.90625 L 109.4375 89.90625 L 109.4375 81.125 L 73.8125 81.125 L 73.8125 89.90625 L 65.03125 89.90625 L 65.03125 77.125 z M 76.9375 91.5 L 110.5 91.5 C 119.38488 94.780085 122.71784 103.49843 126.71875 109.5 C 127.59107 110.8086 128.97567 111.75802 130.375 112.65625 C 131.77433 113.55448 133.21048 114.40249 134.15625 115.28125 C 135.10202 116.16001 135.55885 116.96002 135.3125 118.09375 C 135.06615 119.22748 133.96674 120.82336 131.4375 122.90625 C 131.27415 123.0408 130.64884 123.24011 129.71875 123.28125 C 128.78866 123.32235 127.56181 123.25735 126.15625 123.09375 C 123.34512 122.76657 119.79425 122.07943 116.1875 121.25 C 108.974 119.59113 101.47398 117.33286 99.25 116.40625 C 98.197924 115.96794 97.601219 115.41471 97.1875 114.75 C 96.773781 114.08529 96.561934 113.28558 96.40625 112.40625 C 96.094881 110.64759 96.044385 108.52575 94.6875 106.78125 C 91.914305 103.21565 87.563663 101.80803 83.90625 99.90625 C 80.485337 98.127449 77.678511 96.074093 76.9375 91.5 z " /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 76.9375,91.5 33.5625,0 c 8.88488,3.280085 12.21784,11.99843 16.21875,18 0.87232,1.3086 2.25692,2.25802 3.65625,3.15625 1.39933,0.89823 2.83548,1.74624 3.78125,2.625 0.94577,0.87876 1.4026,1.67877 1.15625,2.8125 -0.24635,1.13373 -1.34576,2.72961 -3.875,4.8125 -0.16335,0.13455 -0.78866,0.33386 -1.71875,0.375 -0.93009,0.0411 -2.15694,-0.0239 -3.5625,-0.1875 -2.81113,-0.32718 -6.362,-1.01432 -9.96875,-1.84375 -7.2135,-1.65887 -14.71352,-3.91714 -16.9375,-4.84375 -1.052076,-0.43831 -1.648781,-0.99154 -2.0625,-1.65625 -0.413719,-0.66471 -0.625566,-1.46442 -0.78125,-2.34375 -0.311369,-1.75866 -0.361865,-3.8805 -1.71875,-5.625 -2.773195,-3.5656 -7.123837,-4.97322 -10.78125,-6.875 C 80.485337,98.127449 77.678511,96.074093 76.9375,91.5 z m -11.90625,-14.375 53.1875,0 0,12.78125 -8.78125,0 0,-8.78125 -35.625,0 0,8.78125 -8.78125,0 0,-12.78125 z" />';
	icons['GROUND.INSTALLATION.ICON.WASTEWATER TREATMENT FACILITY'] = '<path stroke="none" d="m 107.22,114.8 c 1.88,0 3.92,-1.04 4.32,-2.44 1.52,1.04 1.72,2.44 4.64,2.44 h 0.4 c 1.84,0 3.76,-1.08 4.12,-2.44 h 0.36 c 0.4,1.44 2.52,2.44 4.48,2.44 h 0.36 c 2.72,0 3.04,-1.48 4.48,-2.44 0.36,1.4 2.6,2.44 4.48,2.44 v -1.52 c -2.2,0 -3.52,-1.56 -3.92,-3.36 h -1.48 c -0.04,1.76 -1.72,3.36 -3.56,3.36 h -0.36 c -2.16,0 -3.56,-1.4 -3.76,-3.36 h -1.68 l -0.2,1.32 c -1,0.68 -1.12,2.04 -3.32,2.04 h -0.4 c -3.28,0 -3.16,-3.36 -4.12,-3.36 h -1.28 c -0.2,2 -1.4,3.36 -3.56,3.36 v 1.52 z m -2.24,-33.32 h 32 v 37.04 h -32 V 81.48 z M 65.1,114.8 v -1.52 c 1.96,0 3.72,-1.56 3.76,-3.36 h 1.88 c 0.04,1.8 1.52,3.36 3.36,3.36 h 0.36 c 1.84,0 3.52,-1.56 3.56,-3.36 h 1.88 c 0.04,2 1.68,3.36 3.76,3.36 h 0.2 c 2.16,0 3.16,-1.6 3.56,-3.36 h 1.68 c 0.04,1.96 1.68,3.36 3.76,3.36 v 1.48 c -2,0 -4.12,-1 -4.48,-2.44 -1.36,0.92 -1.72,2.48 -4.56,2.48 h -0.56 c -2.88,0 -3.08,-1.48 -4.48,-2.44 -0.36,1.32 -2.36,2.44 -4.12,2.44 H 74.1 c -2.36,0 -3.36,-1.24 -4.48,-2.44 -0.4,1.4 -2.6,2.44 -4.52,2.44 l 0,0 z M 96.54,93.44 h 6.72 v 13.28 H 96.54 V 93.44 z m -31.44,7.88 c 2.04,0 3.6,-1.52 3.76,-3.36 h 1.88 c 0.16,1.84 1.4,3.36 3.36,3.36 h 0.36 c 1.84,0 3.52,-1.72 3.56,-3.36 h 1.88 c 0.04,1.96 1.72,3.36 3.76,3.36 h 0.2 c 1.48,0 3.36,-1.48 3.36,-2.6 v -0.76 h 1.88 c 0,1.92 1.76,3.36 3.76,3.36 v 1.48 c -3.6,0 -3.8,-1.96 -4.88,-2.24 -0.4,1.28 -2.48,2.24 -4.16,2.24 h -0.56 c -1.68,0 -3.76,-0.96 -4.12,-2.24 -1,0.28 -1.4,2.24 -4.48,2.24 H 74.1 c -2.72,0 -3.04,-1.28 -4.48,-2.24 -0.96,1.4 -2.2,2.24 -4.52,2.24 v -1.48 l 0,0 z m 0,-11.96 c 2.04,0 3.6,-1.52 3.76,-3.36 h 1.88 c 0.12,1.84 1.4,3.36 3.36,3.36 h 0.36 c 1.84,0 3.52,-1.68 3.56,-3.36 h 1.88 c 0.04,1.96 1.72,3.36 3.76,3.36 h 0.2 c 1.48,0 3.36,-1.48 3.36,-2.6 v -0.8 h 1.88 c 0,1.92 1.76,3.36 3.76,3.36 v 1.48 c -3.08,0 -3.04,-0.96 -4.68,-2.04 -1.44,0.96 -1.68,2.08 -4.36,2.08 h -0.56 c -2.68,0 -2.92,-1.12 -4.32,-2.04 -1.56,1.04 -1.56,2.04 -4.48,2.04 H 73.9 c -2.44,0 -2.88,-1.16 -4.12,-2.04 -1.6,1.04 -1.68,2.04 -4.68,2.04 v -1.48 l 0,0 z m 31.44,21.32 h 6.72 v 10.12 h 35.56 V 79.44 L 103.3,79.2 V 89.52 H 96.54 V 79.44 L 61.18,79.2 v 41.6 h 35.36 v -10.12 z m 14.24,-12.16 c 0,1.36 -1.8,2.8 -3.56,2.8 v 1.48 c 3.44,0 3.52,-1.92 4.68,-2.24 0.36,1.32 2.68,2.24 4.48,2.24 h 0.2 c 2.88,0 3,-1.28 4.32,-2.24 1.24,0.92 1.68,2.24 4.32,2.24 h 0.76 c 2.6,0 3.04,-1.32 4.32,-2.24 1.44,1.04 1.48,2.24 4.6,2.24 v -1.48 c -1.72,0 -3.76,-1.56 -3.76,-2.8 v -0.56 h -1.68 c -0.12,1.8 -1.6,3.36 -3.56,3.36 h -0.56 c -1.4,0 -3.36,-1.44 -3.36,-2.44 v -0.92 h -1.88 c 0,1.72 -1.72,3.36 -3.52,3.36 h -0.4 c -1.88,0 -3.52,-1.52 -3.56,-3.36 h -1.84 v 0.56 z m 0,-12 c 0,1.36 -1.8,2.8 -3.56,2.8 v 1.48 c 1.8,0 3.96,-0.92 4.32,-2.24 1.64,1.08 1.72,2.24 4.88,2.24 h 0.36 c 2.64,0 2.92,-1.32 4.32,-2.24 0.28,1.32 2.4,2.28 4.08,2.28 h 0.76 c 2.72,0 3.04,-1.28 4.48,-2.24 0.36,1.32 2.68,2.24 4.48,2.24 v -1.48 c -1.72,0 -3.76,-1.56 -3.76,-2.8 v -0.6 h -1.68 c -0.12,1.8 -1.6,3.4 -3.56,3.4 h -0.56 c -1.56,0 -3.36,-1.4 -3.36,-2.8 v -0.6 h -1.88 c 0,1.72 -1.72,3.4 -3.52,3.4 h -0.4 c -1.88,0 -3.52,-1.52 -3.56,-3.36 h -1.84 v 0.52 z" /><path stroke="none" fill="'+ (force2525 ? iconFillColor : 'none') + '" d="m 65.1,114.8 c 1.88,0 4.12,-1.04 4.48,-2.44 1.12,1.2 2.16,2.44 4.48,2.44 h 0.56 c 1.76,0 3.76,-1.12 4.12,-2.44 1.44,0.96 1.64,2.44 4.52,2.44 h 0.56 c 2.84,0 3.2,-1.56 4.48,-2.44 0.36,1.44 2.48,2.44 4.48,2.44 v -1.52 c -2.08,0 -3.68,-1.4 -3.76,-3.36 h -1.64 c -0.4,1.76 -1.4,3.36 -3.56,3.36 h -0.2 c -2.08,0 -3.68,-1.36 -3.76,-3.36 h -1.84 c -0.04,1.8 -1.72,3.36 -3.56,3.36 H 74.1 c -1.84,0 -3.32,-1.56 -3.36,-3.36 h -1.88 c -0.04,1.84 -1.76,3.36 -3.76,3.36 v 1.52 l 0,0 z m 0,-13.48 v 1.48 c 2.32,0 3.56,-0.88 4.48,-2.24 1.44,0.96 1.8,2.24 4.52,2.24 h 0.56 c 3.08,0 3.48,-1.96 4.48,-2.24 0.36,1.28 2.44,2.24 4.12,2.24 h 0.56 c 1.68,0 3.76,-0.96 4.12,-2.24 1.08,0.28 1.24,2.24 4.88,2.24 v -1.48 c -2,0 -3.76,-1.44 -3.76,-3.36 h -1.88 v 0.76 c 0,1.16 -1.88,2.6 -3.36,2.6 h -0.2 c -2.04,0 -3.68,-1.4 -3.76,-3.36 h -1.84 c -0.04,1.64 -1.72,3.36 -3.56,3.36 H 74.1 c -1.96,0 -3.2,-1.52 -3.36,-3.36 h -1.88 c -0.16,1.84 -1.72,3.36 -3.76,3.36 l 0,0 z m 0,-11.96 v 1.48 c 3,0 3.08,-1 4.68,-2.04 1.24,0.92 1.68,2.04 4.12,2.04 h 0.56 c 2.92,0 2.92,-1 4.48,-2.04 1.4,0.92 1.64,2.04 4.32,2.04 h 0.56 c 2.68,0 2.92,-1.12 4.32,-2.04 1.64,1.08 1.6,2.04 4.68,2.04 v -1.48 c -2,0 -3.76,-1.44 -3.76,-3.36 h -1.88 v 0.76 c 0,1.16 -1.88,2.6 -3.36,2.6 h -0.2 c -2.04,0 -3.68,-1.4 -3.76,-3.36 h -1.84 c -0.04,1.68 -1.72,3.36 -3.56,3.36 H 74.1 c -1.96,0 -3.2,-1.52 -3.36,-3.36 h -1.88 c -0.16,1.8 -1.72,3.36 -3.76,3.36 l 0,0 z m 42.12,25.44 v -1.52 c 2.16,0 3.4,-1.4 3.56,-3.36 h 1.32 c 0.96,0 0.8,3.36 4.12,3.36 h 0.36 c 2.2,0 2.36,-1.4 3.32,-2.08 l 0.24,-1.32 h 1.68 c 0.16,2 1.56,3.36 3.76,3.36 h 0.36 c 1.84,0 3.52,-1.6 3.56,-3.36 h 1.48 c 0.4,1.8 1.72,3.36 3.92,3.36 v 1.48 c -1.88,0 -4.12,-1.04 -4.48,-2.44 -1.48,1.04 -1.76,2.52 -4.52,2.52 h -0.36 c -1.96,0 -4.12,-1 -4.48,-2.44 h -0.36 c -0.36,1.32 -2.32,2.44 -4.12,2.44 h -0.4 c -2.92,0 -3.12,-1.4 -4.68,-2.44 -0.36,1.4 -2.4,2.44 -4.28,2.44 z m 3.56,-16.84 h 1.88 c 0,1.84 1.64,3.36 3.52,3.36 h 0.4 c 1.8,0 3.52,-1.64 3.56,-3.36 h 1.88 v 0.92 c 0,0.96 1.96,2.44 3.36,2.44 h 0.56 c 1.92,0 3.4,-1.56 3.56,-3.36 h 1.68 v 0.56 c 0,1.24 2.04,2.8 3.76,2.8 v 1.48 c -3.12,0 -3.16,-1.24 -4.68,-2.24 -1.28,0.92 -1.72,2.24 -4.36,2.24 h -0.72 c -2.6,0 -3.04,-1.32 -4.32,-2.24 -1.32,0.96 -1.44,2.24 -4.28,2.24 h -0.2 c -1.8,0 -4.16,-0.96 -4.48,-2.24 -1.16,0.32 -1.2,2.24 -4.68,2.24 v -1.48 c 1.76,0 3.56,-1.44 3.56,-2.8 v -0.56 l 0,0 z m 0,-12 h 1.88 c 0,1.88 1.64,3.4 3.52,3.4 h 0.4 c 1.8,0 3.52,-1.64 3.56,-3.36 h 1.88 v 0.56 c 0,1.4 1.8,2.8 3.36,2.8 h 0.56 c 1.92,0 3.4,-1.56 3.56,-3.36 h 1.68 v 0.56 c 0,1.24 2.04,2.8 3.76,2.8 v 1.48 c -1.8,0 -4.16,-0.96 -4.48,-2.24 -1.48,0.96 -1.8,2.24 -4.56,2.24 h -0.72 c -1.68,0 -3.76,-0.96 -4.12,-2.24 -1.4,0.92 -1.68,2.24 -4.32,2.24 h -0.36 c -3.12,0 -3.24,-1.16 -4.88,-2.24 -0.36,1.32 -2.48,2.24 -4.28,2.24 v -1.48 c 1.76,0 3.56,-1.44 3.56,-2.8 v -0.6 z m -5.8,32.56 h 32 V 81.48 h -32 v 37.04 z m -1.68,-11.76 0,-13.32 -6.76,0 0,13.32 z" />';
	icons['GROUND.INSTALLATION.ICON.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT'] = '<path stroke="none" d="m 85.460011,81.327983 0.513655,0.680426 13.681905,18.244761 0.346879,0.46029 0.34022,-0.46029 13.6819,-18.244761 0.51366,-0.680426 -0.85387,0 -27.37048,0 -0.853869,0 z m 1.707737,0.853868 25.662742,0 L 100.00245,99.285899 87.167748,82.181851 z M 106.69205,50.686704 c 0,0.247658 -0.0438,0.477802 -0.13133,0.690432 -0.0851,0.210135 -0.20513,0.392749 -0.36023,0.547843 -0.19262,0.192623 -0.42026,0.337714 -0.68292,0.435273 -0.26267,0.09506 -0.59413,0.142591 -0.99438,0.142589 l -0.74296,0 0,2.082555 -0.74297,0 0,-5.58725 1.51595,0 c 0.33521,5e-6 0.61914,0.02877 0.85179,0.0863 0.23264,0.05504 0.43902,0.142595 0.61913,0.262664 0.21263,0.142595 0.37649,0.320206 0.49156,0.532834 0.11757,0.212638 0.17636,0.481556 0.17636,0.806756 m -0.77298,0.01876 c -1e-5,-0.192616 -0.0338,-0.360221 -0.10132,-0.502815 -0.0675,-0.142584 -0.17011,-0.258907 -0.30769,-0.348968 -0.12008,-0.07754 -0.25766,-0.132578 -0.41276,-0.165104 -0.15259,-0.03502 -0.34647,-0.05253 -0.58161,-0.05253 l -0.73546,0 0,2.232649 0.62664,0 c 0.30019,3e-6 0.54409,-0.02626 0.73171,-0.0788 0.18761,-0.05503 0.34021,-0.141336 0.45779,-0.258913 0.11757,-0.120072 0.20012,-0.246401 0.24765,-0.378987 0.05,-0.132579 0.075,-0.281423 0.0751,-0.44653 m -3.94002,3.47468 c -0.13759,0.06004 -0.26267,0.116323 -0.37523,0.168856 -0.11008,0.05253 -0.25517,0.107567 -0.43528,0.165103 -0.1526,0.04753 -0.31895,0.08756 -0.49906,0.120075 -0.17762,0.03502 -0.37399,0.05253 -0.58912,0.05253 -0.405256,0 -0.774237,-0.05629 -1.106943,-0.168855 -0.330208,-0.115072 -0.617888,-0.293934 -0.86304,-0.536587 -0.240152,-0.237648 -0.427769,-0.539086 -0.562853,-0.904316 -0.135085,-0.367729 -0.202627,-0.794245 -0.202627,-1.279552 0,-0.460285 0.06504,-0.871792 0.195122,-1.234523 0.130081,-0.362723 0.317698,-0.669164 0.562853,-0.919326 0.237647,-0.242647 0.524077,-0.427762 0.859288,-0.555348 0.337709,-0.127574 0.711693,-0.191364 1.12195,-0.19137 0.30019,6e-6 0.59912,0.03628 0.89681,0.108819 0.30019,0.07255 0.6329,0.20013 0.99813,0.382739 l 0,0.881803 -0.0563,0 c -0.30769,-0.257657 -0.61288,-0.445275 -0.91557,-0.562853 -0.30269,-0.117569 -0.62664,-0.176355 -0.97186,-0.17636 -0.282677,5e-6 -0.537837,0.04628 -0.765477,0.138837 -0.225143,0.09006 -0.426519,0.231399 -0.604128,0.424015 -0.17261,0.187622 -0.307695,0.425271 -0.405254,0.712947 -0.09506,0.285182 -0.142591,0.615388 -0.14259,0.99062 -10e-7,0.392749 0.05253,0.73046 0.157599,1.013135 0.107566,0.282679 0.245152,0.512822 0.412759,0.690432 0.175107,0.185117 0.378985,0.322703 0.611633,0.412759 0.235145,0.08756 0.482799,0.131333 0.742968,0.131332 0.35772,10e-7 0.69293,-0.06129 1.00563,-0.183865 0.31269,-0.122576 0.60537,-0.306441 0.87805,-0.551595 l 0.0525,0 0,0.870545 m -5.073138,-4.521579 -1.99625,0 0,4.926836 -0.742966,0 0,-4.926836 -1.99625,0 0,-0.660414 4.735466,0 0,0.660414 M 85.875,44.5625 l 0,0.4375 0,36.5 0,0.4375 0.4375,0 27.375,0 0.4375,0 0,-0.4375 0,-36.5 0,-0.4375 -0.4375,0 -27.375,0 -0.4375,0 z m 0.875,0.875 26.5,0 0,35.625 -26.5,0 0,-35.625 z" />';

	icons['ACTIVITIES.M1.RIOT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >RIOT</text>';	
	icons['ACTIVITIES.M1.THREAT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >?</text>';
	icons['ACTIVITIES.M1.EMERGENCY COLLECTION EVACUATION POINT'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >ECEP</text>';	
	icons['ACTIVITIES.M1.EMERGENCY INCIDENT COMMAND CENTER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >EICC</text>';	
	icons['ACTIVITIES.M1.EMERGENCY OPERATIONS CENTER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >EOC</text>';	
	icons['ACTIVITIES.M1.EMERGENCY SHELTER'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >ES</text>';	
	icons['ACTIVITIES.M1.EMERGENCY STAGING AREA'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >SA</text>';	
	icons['ACTIVITIES.M1.EMERGENCY'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >EMER</text>';	
	icons['ACTIVITIES.M1.COMMERCIAL'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >COM</text>';	
	icons['ACTIVITIES.M1.PRODUCTION'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >PROD</text>';	
	icons['ACTIVITIES.M1.RETAIL'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >RTL</text>';	
	icons['ACTIVITIES.M1.MILITARY ARMORY'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >RES</text>';	
	icons['ACTIVITIES.M1.GENERATION STATION'] = '<text stroke="none" text-anchor="middle" x="100" y="75" font-size="20" >GEN</text>';	

	return icons;
}
function _MilSymbolinitLetterSIDC(icons,force2525){
		var sID = [];
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
		sID['S-A-MFRX--'] = (force2525 ? icons['AIR.ICON.2525 PHOTOGRAPHIC'] : icons['AIR.ICON.RECONNAISSANCE'] + icons['AIR.M2.PHOTOGRAPHIC']);
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
		sID['S-G-UCVR--'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + (force2525 ? '<line x1="100" y1="100" x2="100" y2="140" />' : '');			
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
		sID['S-G-UCVC--'] = _MilSymbol.scale(0.5,icons['GROUND.ICON.AVIATION FIXED WING'] + _MilSymbol.rotate(90,icons['GROUND.ICON.AVIATION ROTARY WING']));		
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
		sID['S-G-UCECT-'] = _MilSymbol.scale(0.7,icons['GROUND.ICON.ENGINEER']) + icons['GROUND.ICON.ARMOUR'];		
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
		sID['S-G-UCFHE-'] = _MilSymbol.scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.ARMOUR'];		
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
		sID['S-G-UCFRS-'] = _MilSymbol.scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + (force2525 ? '' : icons['GROUND.ICON.ARMOUR']);			
		//1.X.3.1.1.7.2.1.1	
		sID['S-G-UCFRSS'] = _MilSymbol.scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + icons['GROUND.ICON.ARMOUR'];			
		//1.X.3.1.1.7.2.1.2	
		sID['S-G-UCFRSR'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + icons['GROUND.M2.TRUCK'];			
		//1.X.3.1.1.7.2.1.3	
		sID['S-G-UCFRST'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.SINGLE ROCKET LAUNCHER'] + icons['GROUND.M2.TOWED'];		
		//1.X.3.1.1.7.2.2
		sID['S-G-UCFRM-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + (force2525 ? '' : icons['GROUND.M2.CROSS-COUNTRY TRUCK'] );				
		//1.X.3.1.1.7.2.2.1
		sID['S-G-UCFRMS'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + icons['GROUND.ICON.ARMOUR'];		
		//1.X.3.1.1.7.2.2.2
		sID['S-G-UCFRMR'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + icons['GROUND.M2.TRUCK'];	
		//1.X.3.1.1.7.2.2.3
		sID['S-G-UCFRMT'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'] + icons['GROUND.M2.TOWED'];		
		//1.X.3.1.1.7.3.1
		sID['S-G-UCFT--'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M2.TARGET ACQUISITION'];
		//1.X.3.1.1.7.3.1
		sID['S-G-UCFTR-'] = _MilSymbol.translate(-30,10,_MilSymbol.scale(0.6,icons['GROUND.ICON.FIELD ARTILLERY'])) + icons['GROUND.ICON.RADAR'];			
		//1.X.3.1.1.7.3.2
		sID['S-G-UCFTS-'] = _MilSymbol.translate(0,30,_MilSymbol.scale(0.7,icons['GROUND.ICON.FIELD ARTILLERY']))+ icons['GROUND.ICON.FULLFRAME.SOUND'];
		//1.X.3.1.1.7.3.3
		sID['S-G-UCFTF-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.M1.OPTICAL'] + icons['GROUND.M2.TARGET ACQUISITION'];
		//1.X.3.1.1.7.3.4
		sID['S-G-UCFTC-'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.MOTORIZED'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.7.3.4.1
		sID['S-G-UCFTCD'] = icons['GROUND.ICON.FIELD ARTILLERY'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'];		
		//1.X.3.1.1.7.3.4.2
		sID['S-G-UCFTCM'] = _MilSymbol.scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'];			
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
		sID['S-G-UCFML-'] = _MilSymbol.translate(0,-20,icons['GROUND.ICON.MORTAR']) + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];
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
		sID['S-G-UCRV--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + (force2525?icons['GROUND.M2.CAVALRY']:'');		
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
		sID['S-G-UCRRD-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + (force2525?icons['GROUND.M1.DIVISION']:'');
		//1.X.3.1.1.8.8.2
		sID['S-G-UCRRF-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'] + icons['GROUND.M1.FORCE'];		
		//1.X.3.1.1.8.8.3
		sID['S-G-UCRRL-'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'];
		//1.X.3.1.1.8.9
		sID['S-G-UCRX--'] =	icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + (force2525 ? icons['GROUND.M2.LONG RANGE SURVEILLANCE'] : _MilSymbol.translate(0,-20,icons['GROUND.M2.MOUNTAIN'])+icons['GROUND.M2.LONG RANGE']);		
		//1.X.3.1.1.9
		sID['S-G-UCM---'] =	icons['GROUND.ICON.MISSILE'];		
		//1.X.3.1.1.9.1
		sID['S-G-UCMT--'] =	icons['GROUND.ICON.MISSILE'] + icons['GROUND.M2.TACTICAL MISSILE'];			
		//1.X.3.1.1.9.2
		sID['S-G-UCMS--'] =	icons['GROUND.ICON.MISSILE'] + icons['GROUND.M2.STRATEGIC MISSILE'];			
		//1.X.3.1.1.10
		sID['S-G-UCS---'] =	icons['GROUND.ICON.SECURITY'];		
		//1.X.3.1.1.10.1
		sID['S-G-UCSW--'] =	_MilSymbol.translate(0,-20,icons['GROUND.ICON.SECURITY']) + icons['GROUND.ICON.FULLFRAME.AMPHIBIOUS'];			
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
		sID['S-G-UCSA--'] =	_MilSymbol.translate(0,-20,icons['GROUND.ICON.SECURITY']) + icons['GROUND.ICON.AVIATION ROTARY WING'];					
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
		sID['S-G-UUACRS'] =	icons['GROUND.ICON.CBRN'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE'] + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.M2.WHEELED'] + (force2525?icons['GROUND.M1.CHEMICAL SURVEILLANCE']:'');				
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
		sID['S-G-UUMS--'] =	_MilSymbol.translate(-25,0,icons['GROUND.ICON.MILITARY INTELLIGENCE']) + icons['GROUND.ICON.RADIO'];	
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
		sID['S-G-UUMRS-'] = _MilSymbol.translate(0,30,_MilSymbol.scale(0.8,icons['GROUND.ICON.MILITARY INTELLIGENCE'])) + icons['GROUND.ICON.FULLFRAME.SENSOR'];
		//1.X.3.1.2.2.4.2.1
		sID['S-G-UUMRSS'] = _MilSymbol.translate(0,30,_MilSymbol.scale(0.8,icons['GROUND.ICON.MILITARY INTELLIGENCE'])) + icons['GROUND.ICON.FULLFRAME.SENSOR'] + icons['GROUND.M1.SENSOR CONTROL MODULE'];
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
		sID['S-G-UULF--'] = _MilSymbol.translate(0,-20,icons['GROUND.ICON.SHORE PATROL']) + icons['GROUND.ICON.AVIATION FIXED WING'];		
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
		sID['S-G-USS3A-'] = icons['GROUND.ICON.FULLFRAME.SUPPLY'] + icons['GROUND.ICON.FULLFRAME.CLASS III'] + _MilSymbol.translate(25,5,_MilSymbol.scale(0.5,icons['GROUND.ICON.AVIATION ROTARY WING']));		
		//1.X.3.1.3.3.5.3.1
		sID['S-G-USS3AT'] = icons['GROUND.ICON.FULLFRAME.SUPPLY THEATER'] + icons['GROUND.ICON.FULLFRAME.CLASS III'] + _MilSymbol.translate(25,5,_MilSymbol.scale(0.5,icons['GROUND.ICON.AVIATION ROTARY WING']));
		//1.X.3.1.3.3.5.3.2
		sID['S-G-USS3AC'] = icons['GROUND.ICON.FULLFRAME.SUPPLY CORPS'] + icons['GROUND.ICON.FULLFRAME.CLASS III'] + _MilSymbol.translate(25,5,_MilSymbol.scale(0.5,icons['GROUND.ICON.AVIATION ROTARY WING']));
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
		sID['S-G-EWMAT-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.7,icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'])) + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'];
		//N/A
		sID['S-G-EWMATR'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.7,icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'])) + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR'];
		//N/A
		sID['S-G-EWMATE'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.7,icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR'])) + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE'] + icons['GROUND.EQUIPMENT.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR'];
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
		sID['S-G-EWXL--'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] + _MilSymbol.translate(0,10,icons['GROUND.EQUIPMENT.SHORT RANGE']);
		//1.X.3.2.1.3.2
		sID['S-G-EWXM--'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] + _MilSymbol.translate(0,10,icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE']);
		//1.X.3.2.1.3.3
		sID['S-G-EWXH--'] = icons['GROUND.EQUIPMENT.MULTIPLE ROCKET LAUNCHER'] + _MilSymbol.translate(0,10,icons['GROUND.EQUIPMENT.LONG RANGE']);		
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
		sID['S-G-EWZL--'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] + _MilSymbol.translate(0,20,icons['GROUND.EQUIPMENT.SHORT RANGE']);
		//1.X.3.2.1.6.2
		sID['S-G-EWZM--'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] + _MilSymbol.translate(0,20,icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE']);
		//1.X.3.2.1.6.3
		sID['S-G-EWZH--'] = icons['GROUND.EQUIPMENT.GRENADE LAUNCHER'] + _MilSymbol.translate(0,20,icons['GROUND.EQUIPMENT.LONG RANGE']);		
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
		sID['S-G-EWHLS-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.8,icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.SHORT RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.8.2
		sID['S-G-EWHM--'] = icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.8.2.1
		sID['S-G-EWHMS-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.8,icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.8.3
		sID['S-G-EWHH--'] = icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.8.3.1
		sID['S-G-EWHHS-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.8,icons['GROUND.EQUIPMENT.HOWITZER'] + icons['GROUND.EQUIPMENT.LONG RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
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
		sID['S-G-EWDLS-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.8,icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.SHORT RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.10.2
		sID['S-G-EWDM--'] = icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'];
		//1.X.3.2.1.10.2.1
		sID['S-G-EWDMS-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.8,icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.INTERMEDIATE RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
		//1.X.3.2.1.10.3
		sID['S-G-EWDH--'] = icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.LONG RANGE'];
		//1.X.3.2.1.10.3.1
		sID['S-G-EWDHS-'] = _MilSymbol.translate(0,-15,_MilSymbol.scale(0.8,icons['GROUND.EQUIPMENT.DIRECT FIRE GUN'] + icons['GROUND.EQUIPMENT.LONG RANGE'])) + icons['GROUND.EQUIPMENT.HOWITZER TRACKED'];
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
		sID['S-G-EVE---'] = icons['GROUND.EQUIPMENT.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY'] + _MilSymbol.scale(0.7,icons['GROUND.ICON.ENGINEER']);
		//1.X.3.2.2.3.1
		sID['S-G-EVEB--'] = icons['GROUND.EQUIPMENT.BRIDGE'];
		//1.X.3.2.2.3.2
		sID['S-G-EVEE--'] = icons['GROUND.EQUIPMENT.EARTHMOVER'];
		//.X.3.2.2.3.2 .1 WRONG SIDC
		//sID['S-G-EVEE--'] = '';
		//1.X.3.2.2.3.3
		sID['S-G-EVEC--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] + _MilSymbol.scale(0.6,icons['GROUND.ICON.ENGINEER']);
		//1.X.3.2.2.3.4
		sID['S-G-EVEM--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.MINE LAYING VEHICLE'];
		//1.X.3.2.2.3.4.1
		//APP6		
		sID['S-G-EVEMA-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + icons['GROUND.EQUIPMENT.TANK'];
		//2525
		sID['S-G-EVEMV-'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + icons['GROUND.EQUIPMENT.ARMORED CARRIER WITH VOLCANO'];
		//1.X.3.2.2.3.4.2
		//APP6
		sID['S-G-EVEMT-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + _MilSymbol.translate(0,-10,icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY']);
		//2525
		sID['S-G-EVEML-'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] + icons['GROUND.EQUIPMENT.ARMORED CARRIER WITH VOLCANO'];
		//1.X.3.2.2.3.5
		sID['S-G-EVEA--'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'];
		//1.X.3.2.2.3.5.1
		sID['S-G-EVEAA-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + icons['GROUND.EQUIPMENT.TANK'];
		//1.X.3.2.2.3.5.2
		sID['S-G-EVEAT-'] = icons['GROUND.EQUIPMENT.MINE CLEARING EQUIPMENT'] + _MilSymbol.translate(0,-10,icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY']);
		//1.X.3.2.2.3.4.5
		sID['S-G-EVEMSM'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + icons['GROUND.EQUIPMENT.MINE SCATTERABLE'];
		//1.X.3.2.2.3.5
		sID['S-G-EVED--'] = icons['GROUND.EQUIPMENT.DOZER'];
		//N/A
		sID['S-G-EVEDA-'] = icons['GROUND.EQUIPMENT.DOZER ARMORED'];
		//N/A
		sID['S-G-EVES--'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + _MilSymbol.scale(0.6,icons['GROUND.ICON.ENGINEER']);
		//N/A
		sID['S-G-EVER--'] = icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER'] + _MilSymbol.scale(0.6,icons['GROUND.ICON.ENGINEER']) + icons['GROUND.EQUIPMENT.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE'];
		//N/A
		sID['S-G-EVEH--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.LIMITED CROSS-COUNTRY'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE BACKHOE'];
		//N/A
		sID['S-G-EVEF--'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CROSS-COUNTRY'] + icons['GROUND.EQUIPMENT.UTILITY VEHICLE FERRY TRANSPORTER'];
		//1.X.3.2.2.3.6
		sID['S-G-EVD---'] = icons['GROUND.EQUIPMENT.UTILITY VEHICLE'] + icons['GROUND.EQUIPMENT.CROSS-COUNTRY'] + _MilSymbol.scale(0.7,icons['GROUND.ICON.DRILLING']);
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
		sID['S-S-CLDD--'] = icons['SEA.ICON.DESTROYER'];
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
		sID['S-S-CALA--'] = force2525?icons['SEA.ICON.AMPHIBIOUS ASSAULT']:icons['SEA.ICON.AMPHIBIOUS ASSAULT SHIP, GENERAL'];
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
		sID['S-F-AH----'] = icons['GROUND.ICON.AVIATION ROTARY WING'] + (force2525 ? '<line x1="100" y1="100" x2="100" y2="140" />' : '') + icons['AIR.M1.SPECIAL OPERATIONS FORCES'];		
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
		sID['S-F-GPA---'] = sID['S-F-GSPA--'] = icons['GROUND.EQUIPMENT.PSYCHOLOGICAL OPERATIONS EQUIPMENT'] + _MilSymbol.translate(0,-30,_MilSymbol.scale(0.7,icons['AIR.ICON.MILITARY FIXED WING']));			
		//1.X.6.3.4
		sID['S-F-GC----'] = sID['S-F-GCA---'] = icons['GROUND.ICON.CIVIL AFFAIRS'];			
		//1.X.6.4
		sID['S-F-GB----'] = sID['S-F-B-----'] = icons['AIR.ICON.SPECIAL OPERATIONS FORCES'] + icons['GROUND.M2.SUPPORT'];								
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
		sID['O-L-M-----'] = icons['STABILITY.ICON.MASS GRAVE LOCATION'];
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
		sID["E-I-BC----"] = icons['STABILITY.ICON.EXPLOSION'] + _MilSymbol.scale(0.6,icons['STABILITY.ICON.BOMB']); 
		//EMS.INCDNT.CRMACT.LOOT 
		sID["E-I-BD----"] = icons['STABILITY.ICON.GROUP'] + icons['STABILITY.M1.LOOT']; 
		//EMS.INCDNT.CRMACT.SHTG 
		sID["E-I-BF----"] = icons['ACTIVITIES.ICON.SHOOTING']; 
		//EMS.INCDNT.FIRE 
		sID["E-I-C-----"] = icons['ACTIVITIES.ICON.FIRE EVENT']; 
		//EMS.INCDNT.FIRE.HTSPT 
		sID["E-I-CA----"] = icons['ACTIVITIES.ICON.HOT SPOT']; 
		//EMS.INCDNT.FIRE.NRES 
		sID["E-I-CB----"] = icons['ACTIVITIES.ICON.NON-RESIDENTIAL FIRE']; 
		//EMS.INCDNT.FIRE.ORGN 
		sID["E-I-CC----"] = icons['ACTIVITIES.ICON.FIRE ORIGIN']; 
		//EMS.INCDNT.FIRE.RES 
		sID["E-I-CD----"] = icons['ACTIVITIES.ICON.RESIDENTIAL FIRE']; 
		//EMS.INCDNT.FIRE.SCH 
		sID["E-I-CE----"] = icons['ACTIVITIES.ICON.SCHOOL FIRE']; 
		//EMS.INCDNT.FIRE.SMK 
		sID["E-I-CF----"] = icons['ACTIVITIES.ICON.SMOKE']; 
		//EMS.INCDNT.FIRE.SN 
		sID["E-I-CG----"] = icons['ACTIVITIES.ICON.SPECIAL NEEDS FIRE']; 
		//EMS.INCDNT.FIRE.WLD 
		sID["E-I-CH----"] = icons['ACTIVITIES.ICON.WILD FIRE']; 
		//EMS.INCDNT.HAZMAT 
		sID["E-I-D-----"] = icons['ACTIVITIES.ICON.HAZARDOUS MATERIALS INCIDENT']; 
		//EMS.INCDNT.HAZMAT.CHMAGT 
		sID["E-I-DA----"] = icons['ACTIVITIES.ICON.CHEMICAL AGENT']; 
		//EMS.INCDNT.HAZMAT.CORMTL 
		sID["E-I-DB----"] = icons['ACTIVITIES.ICON.CORROSIVE MATERIAL']; 
		//EMS.INCDNT.HAZMAT.WHWET 
		sID["E-I-DC----"] = icons['ACTIVITIES.ICON.HAZARDOUS WHEN WET']; 
		//EMS.INCDNT.HAZMAT.EXPLV 
		sID["E-I-DD----"] = icons['ACTIVITIES.ICON.EXPLOSIVE MATERIAL']; 
		//EMS.INCDNT.HAZMAT.FLGAS 
		sID["E-I-DE----"] = icons['ACTIVITIES.ICON.FLAMMABLE GAS']; 
		//EMS.INCDNT.HAZMAT.FLLIQ 
		sID["E-I-DF----"] = icons['ACTIVITIES.ICON.FLAMMABLE LIQUID']; 
		//EMS.INCDNT.HAZMAT.FLSLD 
		sID["E-I-DG----"] = icons['ACTIVITIES.ICON.FLAMMABLE SOLID']; 
		//EMS.INCDNT.HAZMAT.NFLGAS 
		sID["E-I-DH----"] = icons['ACTIVITIES.ICON.NON-FLAMMABLE GAS']; 
		//EMS.INCDNT.HAZMAT.ORGPER 
		sID["E-I-DI----"] = icons['ACTIVITIES.ICON.ORGANIC PEROXIDE']; 
		//EMS.INCDNT.HAZMAT.OXDZR 
		sID["E-I-DJ----"] = icons['ACTIVITIES.ICON.OXIDIZER']; 
		//EMS.INCDNT.HAZMAT.RADMTL 
		sID["E-I-DK----"] = icons['ACTIVITIES.ICON.RADIOACTIVE MATERIAL']; 
		//EMS.INCDNT.HAZMAT.SPCMB 
		sID["E-I-DL----"] = icons['ACTIVITIES.ICON.SPONTANEOUSLY COMBUSTIBLE MATERIAL']; 
		//EMS.INCDNT.HAZMAT.TXGAS 
		sID["E-I-DM----"] = icons['ACTIVITIES.ICON.TOXIC GAS']; 
		//EMS.INCDNT.HAZMAT.TXINF 
		sID["E-I-DN----"] = icons['ACTIVITIES.ICON.TOXIC INFECTIOUS MATERIAL']; 
		//EMS.INCDNT.HAZMAT.UNXORD 
		sID["E-I-DO----"] = icons['ACTIVITIES.ICON.UNEXPLODED ORDNANCE']; 
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
		//EMS.NATEVT.GEO.AFTSHK 
		sID["E-N-AA----"] = icons['ACTIVITIES.ICON.AFTERSHOCK']; 
		//EMS.NATEVT.GEO.AVL 
		sID["E-N-AB----"] = icons['ACTIVITIES.ICON.AVALANCHE']; 
		//EMS.NATEVT.GEO.EQKEPI 
		sID["E-N-AC----"] = icons['ACTIVITIES.ICON.EARTHQUAKE EPICENTER']; 
		//EMS.NATEVT.GEO.LNDSLD 
		sID["E-N-AD----"] = icons['ACTIVITIES.ICON.LANDSLIDE']; 
		//EMS.NATEVT.GEO.SBSDNC 
		sID["E-N-AE----"] = icons['ACTIVITIES.ICON.SUBSIDENCE']; 
		//EMS.NATEVT.GEO.VOLERN 
		sID["W-S-WSVE--"] = icons['ACTIVITIES.ICON.VOLCANIC ERUPTION']; 
		//EMS.NATEVT.GEO.VLCTHT 
		sID["E-N-AG----"] = icons['ACTIVITIES.ICON.VOLCANIC THREAT']; 
		//EMS.NATEVT.HYDMET.DZ 
		sID["W-S-WSD-LI"] = icons['ATMOSPHERIC.ICON.DRIZZLE.INTERMITTENT LIGHT']; 
		//EMS.NATEVT.HYDMET.DRGHT 
		sID["E-N-BB----"] = icons['ACTIVITIES.ICON.DROUGHT']; 
		//EMS.NATEVT.HYDMET.FLD 
		sID["E-N-BC----"] = icons['ACTIVITIES.ICON.FLOOD']; 
		//EMS.NATEVT.HYDMET.FG 
		sID["W-S-WSFGSO"] = icons['ATMOSPHERIC.ICON.FOG.SKY OBSCURED']; 
		//EMS.NATEVT.HYDMET.HL 
		sID["W-S-WSGRL-"] = icons['ATMOSPHERIC.ICON.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER']; 
		//EMS.NATEVT.HYDMET.INV 
		sID["E-N-BF----"] = icons['ATMOSPHERIC.ICON.INVERSION']; 
		//EMS.NATEVT.HYDMET.RA 
		sID["W-S-WSR-LI"] = icons['ATMOSPHERIC.ICON.RAIN.INTERMITTENT LIGHT']; 
		//EMS.NATEVT.HYDMET.DT/SD 
		sID["W-S-WSDSLM"] = icons['ATMOSPHERIC.ICON.DUST OR SAND.LIGHT TO MODERATE']; 
		//EMS.NATEVT.HYDMET.SN 
		sID["W-S-WSS-LI"] = icons['ATMOSPHERIC.ICON.SNOW.INTERMITTENT LIGHT']; 
		//EMS.NATEVT.HYDMET.TSTRM 
		sID["W-S-WSTMH-"] = icons['ATMOSPHERIC.ICON.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL']; 
		//EMS.NATEVT.HYDMET.TNDO 
		sID["W-S-WST-FC"] = icons['ATMOSPHERIC.ICON.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)']; 
		//EMS.NATEVT.HYDMET.TRPCYC 
		sID["W-S-WSTSS-"] = icons['ATMOSPHERIC.ICON.TROPICAL STORM SYSTEMS.TROPICAL STORM']; 
		//EMS.NATEVT.HYDMET.TSNMI 
		sID["E-N-BM----"] = icons['ACTIVITIES.ICON.TSUNAMI']; 
		//EMS.NATEVT.INFST.BIRD 
		sID["E-N-CA----"] = icons['ACTIVITIES.ICON.BIRD']; 
		//EMS.NATEVT.INFST.INSCT 
		sID["E-N-CB----"] = icons['ACTIVITIES.ICON.INSECT']; 
		//EMS.NATEVT.INFST.MICROB 
		sID["E-N-CC----"] = icons['ACTIVITIES.ICON.MICROBIAL']; 
		//EMS.NATEVT.INFST.REPT 
		sID["E-N-CD----"] = icons['ACTIVITIES.ICON.REPTILE']; 
		//EMS.NATEVT.INFST.RDNT 
		sID["E-N-CE----"] = icons['ACTIVITIES.ICON.RODENT']; 
		//EMS.OPN.EMMED
		sID['E-O-A-----'] = sID['E-O-AA----'] = sID['E-O-AB----'] = sID['E-O-AC----'] = sID['E-O-AD----'] = icons['GROUND.ICON.EMERGENCY MEDICAL OPERATION'];
		//EMS.OPN.EMMED.AMBLNC 
		sID["E-O-AE----"] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.UTILITY VEHICLE'] + icons['GROUND.M1.MEDEVAC']; 
		//EMS.OPN.EMMED.MEH 
		sID["E-O-AF----"] = _MilSymbol.translate(0,10,_MilSymbol.scale(0.8,icons['AIR.ICON.FULLFRAME.CIVILIAN ROTARY WING'])) + icons['GROUND.M1.MEDEVAC']; 
		//EMS.OPN.EMMED.HDF 
		sID["E-O-AG----"] = icons['ACTIVITIES.ICON.HEALTH DEPARTMENT FACILITY']; 
		//EMS.OPN.EMMED.MFOP 
		sID["E-O-AJ----"] = icons['ACTIVITIES.ICON.MEDICAL FACILITIES OUTPATIENT']; 
		//EMS.OPN.EMMED.MRG 
		sID["E-O-AK----"] = icons['ACTIVITIES.ICON.OPERATION/EMERGENCY MEDICAL OPERATION']; 
		//EMS.OPN.EMMED.RX 
		sID["E-O-AL----"] = icons['ACTIVITIES.ICON.PHARMACY']; 
		//EMS.OPN.EMMED.TRIAGE 
		sID["E-O-AM----"] = icons['ACTIVITIES.ICON.TRIAGE'];
		//EMS.OPN.EMOPN
		sID['E-O-B-----'] = sID['E-O-BA----'] = sID['E-O-BB----'] = sID['E-O-BC----'] = icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION'];
		//EMS.OPN.EMOPN.ECEP 
		sID["E-O-BD----"] = _MilSymbol.scale(0.7,icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION']) + icons['ACTIVITIES.M1.EMERGENCY COLLECTION EVACUATION POINT']; 
		//EMS.OPN.EMOPN.EICC 
		sID["E-O-BE----"] = _MilSymbol.scale(0.7,icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION']) + icons['ACTIVITIES.M1.EMERGENCY INCIDENT COMMAND CENTER']; 
		//EMS.OPN.EMOPN.EOC 
		sID["E-O-BF----"] = _MilSymbol.scale(0.7,icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION']) + icons['ACTIVITIES.M1.EMERGENCY OPERATIONS CENTER']; 
		//EMS.OPN.EMOPN.EPIC 
		sID["E-O-BG----"] = icons['ACTIVITIES.ICON.EMERGENCY PUBLIC INFORMATION CENTER']; 
		//EMS.OPN.EMOPN.EMSHLT 
		sID["E-O-BH----"] = _MilSymbol.scale(0.7,icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION']) + icons['ACTIVITIES.M1.EMERGENCY SHELTER']; 
		//EMS.OPN.EMOPN.ESA 
		sID["E-O-BI----"] = _MilSymbol.scale(0.7,icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION']) + icons['ACTIVITIES.M1.EMERGENCY STAGING AREA']; 
		//EMS.OPN.EMOPN.EMTM 
		sID["E-O-BJ----"] = icons['GROUND.ICON.FULLFRAME.EMERGENCY OPERATION']; 
		//EMS.OPN.EMOPN.EWDC 
		sID["E-O-BK----"] = sID["S-G-USSW--"]; 
		//EMS.OPN.EMOPN.FDDIST 
		sID["E-O-BL----"] = icons['STABILITY.ICON.FOOD DISTRIBUTION'] + icons['ACTIVITIES.M1.EMERGENCY']; 
		//EMS.OPN.FIRFT
		sID['E-O-C-----'] = sID['E-O-CA----'] = sID['E-O-CB----']  = sID['E-O-CE----']= icons['GROUND.ICON.FIRE PROTECTION'];
		//EMS.OPN.FIRFT.FIRHYD 
		sID["E-O-CC----"] = icons['ACTIVITIES.ICON.FIRE HYDRANT']; 
		//EMS.OPN.FIRFT.OTHH2O 
		sID["E-O-CD----"] = icons['ACTIVITIES.ICON.OTHER WATER SUPPLY LOCATION']; 
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
		sID["E-O-EA----"] = _MilSymbol.scale(0.6,icons['GROUND.EQUIPMENT.SENSOR']) + icons['GROUND.M1.BIOLOGICAL']; 
		//EMS.OPN.SNS.CML 
		sID["E-O-EB----"] = _MilSymbol.scale(0.6,icons['GROUND.EQUIPMENT.SENSOR']) + icons['GROUND.M1.CHEMICAL'];
		//EMS.OPN.SNS.INT 
		sID["E-O-EC----"] = _MilSymbol.scale(0.6,icons['GROUND.EQUIPMENT.SENSOR']) + icons['GROUND.M1.INTRUSION']; 
		//EMS.OPN.SNS.NUC 
		sID["E-O-ED----"] = _MilSymbol.scale(0.6,icons['GROUND.EQUIPMENT.SENSOR']) + icons['GROUND.M1.NUCLEAR']; 
		//EMS.OPN.SNS.RAD 
		sID["E-O-EE----"] = _MilSymbol.scale(0.6,icons['GROUND.EQUIPMENT.SENSOR']) + icons['GROUND.M1.RADIOLOGICAL']; 
		//EMS.INFSTR.AGFD 
		sID["E-F-A-----"] = icons['GROUND.INSTALLATION.ICON.AGRICULTURE AND FOOD INFRASTRUCTURE']; 
		//EMS.INFSTR.AGFD.AGLAB 
		sID["E-F-AA----"] = icons['GROUND.INSTALLATION.ICON.AGRICULTURAL LABORATORY']; 
		//EMS.INFSTR.AGFD.AFL 
		sID["E-F-AB----"] = icons['GROUND.INSTALLATION.ICON.ANIMAL FEEDLOT']; 
		//EMS.INFSTR.AGFD.CFDC 
		sID["E-F-AC----"] = icons['STABILITY.ICON.FOOD DISTRIBUTION'] +icons['ACTIVITIES.M1.COMMERCIAL']; 
		//EMS.INFSTR.AGFD.FRMRNC 
		sID["E-F-AD----"] = icons['GROUND.INSTALLATION.ICON.FARM/RANCH']; 
		//EMS.INFSTR.AGFD.FPC 
		sID["E-F-AE----"] = icons['STABILITY.ICON.FOOD DISTRIBUTION'] + icons['ACTIVITIES.M1.PRODUCTION']; 
		//EMS.INFSTR.AGFD.FDRTL 
		sID["E-F-AF----"] = icons['STABILITY.ICON.FOOD DISTRIBUTION'] + icons['ACTIVITIES.M1.RETAIL']; 
		//EMS.INFSTR.AGFD.GRSTR 
		sID["E-F-AG----"] = icons['GROUND.INSTALLATION.ICON.GRAIN STORAGE']; 
		//EMS.INFSTR.BFI 
		sID["E-F-B-----"] = icons['ACTIVITIES.ICON.BANKING FINANCE AND INSURANCE INFRASTRUCTURE']; 
		//EMS.INFSTR.BFI.ATM 
		sID["E-F-BA----"] = icons['GROUND.INSTALLATION.ICON.ATM']; 
		//EMS.INFSTR.BFI.BANK 
		sID["E-F-BB----"] = icons['GROUND.INSTALLATION.ICON.BANK']; 
		//EMS.INFSTR.BFI.BLSTR 
		sID["E-F-BC----"] = icons['GROUND.INSTALLATION.ICON.BULLION STORAGE']; 
		//EMS.INFSTR.BFI.FRB 
		sID["E-F-BD----"] = icons['GROUND.INSTALLATION.ICON.FEDERAL RESERVE BANK']; 
		//EMS.INFSTR.BFI.FINEX 
		sID["E-F-BE----"] = icons['GROUND.INSTALLATION.ICON.FINANCIAL EXCHANGE']; 
		//EMS.INFSTR.BFI.FSO 
		sID["E-F-BF----"] = icons['GROUND.INSTALLATION.ICON.FINANCIAL SERVICES, OTHER']; 
		//EMS.INFSTR.CMCL 
		sID["E-F-C-----"] = icons['GROUND.INSTALLATION.ICON.COMMERCIAL INFRASTRUCTURE']; 
		//EMS.INFSTR.CMCL.CMLPLN 
		sID["E-F-CA----"] = icons['GROUND.INSTALLATION.ICON.CHEMICAL PLANT']; 
		//EMS.INFSTR.CMCL.FIRMAN 
		sID["E-F-CB----"] = icons['GROUND.INSTALLATION.ICON.FIREARMS MANUFACTURER']; 
		//EMS.INFSTR.CMCL.FIRRET 
		sID["E-F-CC----"] = icons['GROUND.INSTALLATION.ICON.FIREARMS RETAILER']; 
		//EMS.INFSTR.CMCL.HZMTPR 
		sID["E-F-CD----"] = icons['GROUND.INSTALLATION.ICON.HAZARDOUS MATERIAL PRODUCTION']; 
		//EMS.INFSTR.CMCL.HZMTST 
		sID["E-F-CE----"] = icons['GROUND.INSTALLATION.ICON.HAZARDOUS MATERIAL STORAGE']; 
		//EMS.INFSTR.CMCL.INDSTE 
		sID["E-F-CF----"] = icons['GROUND.INSTALLATION.ICON.INDUSTRIAL SITE']; 
		//EMS.INFSTR.CMCL.LNDFL 
		sID["E-F-CG----"] = icons['GROUND.INSTALLATION.ICON.LANDFILL']; 
		//EMS.INFSTR.CMCL.RXMFG 
		sID["E-F-CH----"] = icons['GROUND.INSTALLATION.ICON.PHARMACEUTICAL MANUFACTURER']; 
		//EMS.INFSTR.CMCL.CHWS 
		sID["E-F-CI----"] = icons['GROUND.INSTALLATION.ICON.CONTAMINATED HAZARDOUS WASTE SITE']; 
		//EMS.INFSTR.CMCL.TXRLIN 
		sID["E-F-CJ----"] = icons['GROUND.INSTALLATION.ICON.TOXIC RELEASE INVENTORY']; 
		//EMS.INFSTR.EDFAC 
		sID["E-F-D-----"] = icons['GROUND.INSTALLATION.ICON.EDUCATIONAL FACILITIES INFRASTRUCTURE']; 
		//EMS.INFSTR.EDFAC.COLUNI 
		sID["E-F-DA----"] = icons['GROUND.INSTALLATION.ICON.COLLEGE/UNIVERSITY']; 
		//EMS.INFSTR.EDFAC.SCHOOL 
		sID["E-F-DB----"] = icons['GROUND.INSTALLATION.ICON.SCHOOL']; 
		//EMS.INFSTR.ENGFAC.GENSTA 
		sID["E-F-EA----"] = icons['GROUND.INSTALLATION.ICON.ELECTRIC POWER'] + icons['ACTIVITIES.M1.GENERATION STATION']; 
		//EMS.INFSTR.ENGFAC.NTLGAS 
		sID["E-F-EB----"] = icons['GROUND.INSTALLATION.ICON.NATURAL GAS FACILITY']; 
		//EMS.INFSTR.ENGFAC.PROPNE 
		sID["E-F-EE----"] = icons['GROUND.INSTALLATION.ICON.PROPANE FACILITY']; 
		//EMS.INFSTR.GVTSTE 
		sID["E-F-F-----"] = icons['GROUND.INSTALLATION.ICON.GOVERNMENT SITE INFRASTRUCTURE']; 
		//EMS.INFSTR.MIL 
		sID["E-F-G-----"] = icons['GROUND.INSTALLATION.ICON.MILITARY INFRASTRUCTURE']; 
		//EMS.INFSTR.MIL.ARMORY 
		sID["E-F-GA----"] = icons['GROUND.INSTALLATION.ICON.BASE'] + icons['ACTIVITIES.M1.MILITARY ARMORY']; 
		//EMS.INFSTR.PSTSRV 
		sID["E-F-H-----"] = icons['GROUND.INSTALLATION.ICON.POSTAL SERVICE INFRASTRUCTURE']; 
		//EMS.INFSTR.PSTSRV.PDC 
		sID["E-F-HA----"] = icons['GROUND.INSTALLATION.ICON.POSTAL DISTRIBUTION CENTER']; 
		//EMS.INFSTR.PSTSRV.PO 
		sID["E-F-HB----"] = icons['GROUND.INSTALLATION.ICON.POST OFFICE']; 
		//EMS.INFSTR.PUBVEN 
		sID["E-F-I-----"] = icons['GROUND.INSTALLATION.ICON.PUBLIC VENUES INFRASTRUCTURE']; 
		//EMS.INFSTR.PUBVEN.ENCFAC 
		sID["E-F-IA----"] = icons['GROUND.INSTALLATION.ICON.ENCLOSED FACITLITY (PUBLIC VENUE)']; 
		//EMS.INFSTR.PUBVEN.OPNFAC 
		sID["E-F-IB----"] = icons['GROUND.INSTALLATION.ICON.OPEN FACILITY (OPEN VENUE)']; 
		//EMS.INFSTR.PUBVEN.RECARE 
		sID["E-F-IC----"] = icons['GROUND.INSTALLATION.ICON.RECREATIONAL AREA']; 
		//EMS.INFSTR.PUBVEN.RELIG 
		sID["E-F-ID----"] = icons['GROUND.INSTALLATION.ICON.RELIGIOUS INSTITUTION']; 
		//EMS.INFSTR.SPCNDS 
		sID["E-F-J-----"] = icons['GROUND.INSTALLATION.ICON.SPECIAL NEEDS INFRASTRUCTURE']; 
		//EMS.INFSTR.SPCNDS.ADLTDC 
		sID["E-F-JA----"] = icons['GROUND.INSTALLATION.ICON.ADULT DAY CARE']; 
		//EMS.INFSTR.SPCNDS.CHLDDC 
		sID["E-F-JB----"] = icons['GROUND.INSTALLATION.ICON.CHILD DAY CARE']; 
		//EMS.INFSTR.SPCNDS.ELDERC 
		sID["E-F-JC----"] = icons['GROUND.INSTALLATION.ICON.ELDER CARE']; 
		//EMS.INFSTR.TELCOM 
		sID["E-F-K-----"] = icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS INFRASTRUCTURE']; 
		//EMS.INFSTR.TELCOM.TCTWR 
		sID["E-F-KB----"] = icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS TOWER']; 
		//EMS.INFSTR.TSP.ATCF 
		sID["E-F-LA----"] = icons['GROUND.INSTALLATION.ICON.AIR TRAFFIC CONTROL FACILITY'];
		//EMS.INFSTR.TSP.BRG 
		sID["G-M-BCB---"] = icons['GROUND.INSTALLATION.ICON.BRIDGE']; 
		//EMS.INFSTR.TSP.BSTN 
		sID["E-F-LD----"] = icons['GROUND.EQUIPMENT.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE']; 
		//EMS.INFSTR.TSP.FRYTRM 
		sID["E-F-LE----"] = icons['SEA.ICON.FERRY']; 
		//EMS.INFSTR.TSP.HLS 
		sID["E-F-LF----"] = icons['GROUND.INSTALLATION.ICON.HELICOPTER LANDING SITE']; 
		//EMS.INFSTR.TSP.LCK 
		sID["W-S-ML----"] = icons['GROUND.INSTALLATION.ICON.TRANSPORTATION INFRASTRUCTURE LOCK']; 
		//EMS.INFSTR.TSP.MAINTF 
		sID["E-F-LH----"] = icons['GROUND.ICON.MAINTENANCE']; 
		//EMS.INFSTR.TSP.RLSTN 
		sID["E-F-LJ----"] = icons['GROUND.ICON.RAILHEAD']; 
		//EMS.INFSTR.TSP.RSTSTP 
		sID["E-F-LK----"] = icons['GROUND.INSTALLATION.ICON.REST STOP']; 
		//EMS.INFSTR.TSP.ANCRG 
		sID["W-S-HPBA--"] = icons['GROUND.INSTALLATION.ICON.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE']; 
		//EMS.INFSTR.TSP.TOLLF 
		sID["E-F-LM----"] = icons['GROUND.INSTALLATION.ICON.TOLL FACILITY']; 
		//EMS.INFSTR.TSP.TCP 
		sID["G-S-PO----"] = icons['GROUND.INSTALLATION.ICON.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT']; 
		//EMS.INFSTR.TSP.TIF 
		sID["E-F-LO----"] = icons['GROUND.INSTALLATION.ICON.TRAFFIC INSPECTION FACILITY']; 
		//EMS.INFSTR.TSP.TNL 
		sID["E-F-LP----"] = icons['GROUND.INSTALLATION.ICON.TUNNEL']; 
		//EMS.INFSTR.WS.CV 
		sID["E-F-MA----"] = icons['GROUND.INSTALLATION.ICON.CONTROL VALVE']; 
		//EMS.INFSTR.WS.DAM 
		sID["E-F-MB----"] = icons['GROUND.INSTALLATION.ICON.DAM']; 
		//EMS.INFSTR.WS.DO 
		sID["E-F-MC----"] = icons['GROUND.INSTALLATION.ICON.DISCHARGE OUTFALL']; 
		//EMS.INFSTR.WS.GWWELL 
		sID["E-F-MD----"] = icons['GROUND.INSTALLATION.ICON.GROUND WATER WELL']; 
		//EMS.INFSTR.WS.PMPSTN 
		sID["E-F-ME----"] = icons['GROUND.INSTALLATION.ICON.PUMPING STATION']; 
		//EMS.INFSTR.WS.RSVR 
		sID["E-F-MF----"] = icons['GROUND.INSTALLATION.ICON.RESERVOIR']; 
		//EMS.INFSTR.WS.STRTWR 
		sID["E-F-MG----"] = icons['GROUND.INSTALLATION.ICON.STORAGE TOWER']; 
		//EMS.INFSTR.WS.SWI 
		sID["E-F-MH----"] = icons['GROUND.INSTALLATION.ICON.SURFACE WATER INTAKE']; 
		//EMS.INFSTR.WS.WH20TF 
		sID["E-F-MI----"] = icons['GROUND.INSTALLATION.ICON.WASTEWATER TREATMENT FACILITY'];
	
	return sID;
}
function _MilSymbolInitNumberSIDC(symbolSet,icons,force2525){
	var sID = [];
	var sIDm1 = {};
	var sIDm2 = {};
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
		sID['130301'] = _MilSymbol.scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.ARMOUR']; //ARTILLERY SELF–PROPELLED
		sID['130302'] = _MilSymbol.scale(0.8,icons['GROUND.ICON.FIELD ARTILLERY']) + icons['GROUND.ICON.ARMOUR'] + icons['GROUND.ICON.FULLFRAME.RECONNAISSANCE']; //ARTILLERY TARGET ACQUISITION
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
		sID['140701'] = _MilSymbol.scale(0.7,icons['GROUND.ICON.ENGINEER']) + icons['GROUND.ICON.ARMOUR'];
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
		sIDm1['11'] = icons['GROUND.M1.COMMUNICATIONS CONTINGENCY PACKAGE'];
		sIDm1['12'] = icons['GROUND.M1.CONSTRUCTION'];
		sIDm1['13'] = icons['GROUND.M1.CROSS CULTURAL COMMUNICATION'];
		sIDm1['14'] = icons['GROUND.M1.CROWD AND RIOT CONTROL'];
		sIDm1['15'] = icons['GROUND.M1.DECONTAMINATION'];
		sIDm1['16'] = icons['GROUND.M1.DETENTION'];
		sIDm1['17'] = icons['GROUND.M1.DIRECT COMMUNICATIONS'];
		sIDm1['18'] = icons['GROUND.M1.DIVING'];
		sIDm1['19'] = icons['GROUND.M1.DIVISION'];
		sIDm1['20'] = icons['GROUND.M1.DOG'];
		sIDm1['21'] = icons['GROUND.M1.DRILLING'];
		sIDm1['22'] = icons['GROUND.M1.ELECTRO-OPTICAL'];
		sIDm1['23'] = icons['GROUND.M1.ENHANCED'];
		sIDm1['24'] = icons['GROUND.M1.EXPLOSIVE ORDNANCE DISPOSAL'];
		sIDm1['25'] = icons['GROUND.M1.FIRE DIRECTION CENTRE'];
		sIDm1['26'] = icons['GROUND.M1.FORCE'];
		sIDm1['27'] = icons['GROUND.M1.FORWARD'];
		sIDm1['28'] = icons['GROUND.M1.GROUND STATION MODULE'];
		sIDm1['29'] = icons['GROUND.M1.LANDING SUPPORT'];
		sIDm1['30'] = icons['GROUND.M1.LARGE EXTENSION NODE'];
		sIDm1['31'] = icons['GROUND.M1.MAINTENANCE'];
		sIDm1['32'] = icons['GROUND.M1.METEOROLOGICAL'];
		sIDm1['33'] = icons['GROUND.M1.MINE COUNTERMEASURE'];
		sIDm1['34'] = icons['GROUND.M1.MISSILE'];
		sIDm1['35'] = icons['GROUND.M1.(MOBILE) ADVISOR AND SUPPORT'];
		sIDm1['36'] = icons['GROUND.M1.MOBILE SUBSCRIBER EQUIPMENT'];
		sIDm1['37'] = icons['GROUND.M1.MOBILITY SUPPORT'];
		sIDm1['38'] = icons['GROUND.M1.MOVEMENT CONTROL CENTRE'];
		sIDm1['39'] = icons['GROUND.M1.MULTINATIONAL'];
		sIDm1['40'] = icons['GROUND.M1.MULTINATIONAL SPECIALIZED UNIT'];
		sIDm1['41'] = icons['GROUND.M1.MULTIPLE ROCKET LAUNCHER'];
		sIDm1['42'] = icons['GROUND.M1.NATO MEDICAL ROLE 1'];
		sIDm1['43'] = icons['GROUND.M1.NATO MEDICAL ROLE 2'];
		sIDm1['44'] = icons['GROUND.M1.NATO MEDICAL ROLE 3'];
		sIDm1['45'] = icons['GROUND.M1.NATO MEDICAL ROLE 4'];
		sIDm1['46'] = icons['GROUND.M1.NAVAL'];
		sIDm1['47'] = icons['GROUND.M1.NODE CENTRE'];
		sIDm1['48'] = icons['GROUND.M1.NUCLEAR'];
		sIDm1['49'] = icons['GROUND.M1.OPERATIONS'];
		sIDm1['50'] = icons['GROUND.M1.RADAR'];
		sIDm1['51'] = icons['GROUND.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR'];
		sIDm1['52'] = icons['GROUND.M1.RADIOLOGICAL'];
		sIDm1['53'] = icons['GROUND.M1.SEARCH AND RESCUE'];
		sIDm1['54'] = icons['GROUND.M1.SECURITY'];
		sIDm1['55'] = icons['GROUND.M1.SENSOR'];
		sIDm1['56'] = icons['GROUND.M1.SENSOR CONTROL MODULE'];
		sIDm1['57'] = icons['GROUND.M1.SIGNALS INTELLIGENCE'];
		sIDm1['58'] = icons['GROUND.M1.SINGLE SHELTER SWITCH'];
		sIDm1['59'] = icons['GROUND.M1.SINGLE ROCKET LAUNCHER'];
		sIDm1['60'] = icons['GROUND.M1.SMOKE'];
		sIDm1['61'] = icons['GROUND.M1.SNIPER'];
		sIDm1['62'] = icons['GROUND.M1.SOUND RANGING'];
		sIDm1['63'] = icons['GROUND.M1.SPECIAL OPERATIONS FORCES (SOF)'];
		sIDm1['64'] = icons['GROUND.M1.SPECIAL WEAPONS AND TACTICS'];
		sIDm1['65'] = icons['GROUND.M1.SURVEY'];
		sIDm1['66'] = icons['GROUND.M1.TACTICAL EXPLOITATION'];
		sIDm1['67'] = icons['GROUND.M1.TARGET ACQUISITION'];
		sIDm1['68'] = icons['GROUND.M1.TOPOGRAPHIC'];
		sIDm1['69'] = icons['GROUND.M1.UTILITY'];
		sIDm1['70'] = icons['GROUND.M1.VIDEO IMAGERY'];
		sIDm1['71'] = icons['GROUND.M1.ACCIDENT'];
		sIDm1['72'] = icons['GROUND.M1.OTHER'];
		sIDm1['73'] = icons['GROUND.M1.CIVILIAN'];
		sIDm1['74'] = icons['GROUND.M1.ANTISUBMARINE WARFARE'];
		sIDm1['75'] = icons['GROUND.M1.MEDEVAC'];
		sIDm1['76'] = icons['GROUND.M1.RANGER'];
		sIDm1['77'] = icons['GROUND.M1.SUPPORT'];
		sIDm1['78'] = icons['GROUND.M2.AVIATION'];
		
		
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
		sIDm2['11'] = icons['GROUND.M2.DENTAL'];
		sIDm2['12'] = icons['GROUND.M2.DIGITAL'];
		sIDm2['13'] = icons['GROUND.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM'];
		sIDm2['14'] = icons['GROUND.M2.EQUIPMENT'];
		sIDm2['15'] = icons['GROUND.M2.HEAVY'];
		sIDm2['16'] = icons['GROUND.M2.HIGH ALTITUDE'];
		sIDm2['17'] = icons['GROUND.M2.INTERMODAL'];
		sIDm2['18'] = icons['GROUND.M2.INTENSIVE CARE'];
		sIDm2['19'] = icons['GROUND.M2.LIGHT'];
		sIDm2['20'] = icons['GROUND.M2.LABORATORY'];
		sIDm2['21'] = icons['GROUND.M2.LAUNCHER'];
		sIDm2['22'] = icons['GROUND.M2.LONG RANGE'];
		sIDm2['23'] = icons['GROUND.M2.LOW ALTITUDE'];
		sIDm2['24'] = icons['GROUND.M2.MEDIUM'];
		sIDm2['25'] = icons['GROUND.M2.MEDIUM ALTITUDE'];
		sIDm2['26'] = icons['GROUND.M2.MEDIUM RANGE'];
		sIDm2['27'] = icons['GROUND.M2.MOUNTAIN'];
		sIDm2['28'] = icons['GROUND.M2.HIGH TO MEDIUM ALTITUDE'];
		sIDm2['29'] = icons['GROUND.M2.MULTI-CHANNEL'];
		sIDm2['30'] = icons['GROUND.M2.OPTICAL'];
		sIDm2['31'] = icons['GROUND.M2.PACK ANIMAL'];
		sIDm2['32'] = icons['GROUND.M2.PATIENT EVACUATION COORDINATION'];
		sIDm2['33'] = icons['GROUND.M2.PREVENTIVE MAINTENANCE'];
		sIDm2['34'] = icons['GROUND.M2.PSYCHOLOGICAL'];
		sIDm2['35'] = icons['GROUND.M2.RADIO RELAY LINE OF SIGHT'];
		sIDm2['36'] = icons['GROUND.M2.RAILROAD'];
		sIDm2['37'] = icons['GROUND.M2.RECOVERY (UNMANNED SYSTEMS)'];
		sIDm2['38'] = icons['GROUND.M2.RECOVERY (MAINTENANCE)'];
		sIDm2['39'] = icons['GROUND.M2.RESCUE COORDINATION CENTRE'];
		sIDm2['40'] = icons['GROUND.M2.RIVERINE'];
		sIDm2['41'] = icons['GROUND.M2.SINGLE CHANNEL'];
		sIDm2['42'] = icons['GROUND.M2.SKI'];
		sIDm2['43'] = icons['GROUND.M2.SHORT RANGE'];
		sIDm2['44'] = icons['GROUND.M2.STRATEGIC'];
		sIDm2['45'] = icons['GROUND.M2.SUPPORT'];
		sIDm2['46'] = icons['GROUND.M2.TACTICAL'];
		sIDm2['47'] = icons['GROUND.M2.TOWED'];
		sIDm2['48'] = icons['GROUND.M2.TROOP'];
		sIDm2['49'] = icons['GROUND.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING '];
		sIDm2['50'] = icons['GROUND.M2.VETERINARY'];
		sIDm2['51'] = icons['GROUND.M2.WHEELED'];
		sIDm2['52'] = icons['GROUND.M2.HIGH TO LOW ALTITUDE'];
		sIDm2['53'] = icons['GROUND.M2.MEDIUM TO LOW ALTITUDE'];
		sIDm2['54'] = icons['GROUND.M2.ATTACK'];
		sIDm2['55'] = icons['GROUND.M2.REFUEL'];
		sIDm2['56'] = icons['GROUND.M2.UTILITY'];
		sIDm2['57'] = icons['GROUND.M2.COMBAT SEARCH AND RESCUE']
	}		

//Land civilian individuals/organization
	if(symbolSet == "11" ){
		sID['110000'] = icons['AIR.ICON.CIVILIAN'];
		sID['110100'] = icons['GROUND.ICON.ENVIRONMENTAL PROTECTION'];
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
		sID['120100'] = icons['GROUND.INSTALLATION.ICON.AGRICULTURE AND FOOD INFRASTRUCTURE'];
		sID['120101'] = icons['GROUND.INSTALLATION.ICON.AGRICULTURAL LABORATORY'];
		sID['120102'] = 'Infrastructure.Agriculture and Food Infrastructure.Animal Feedlot';
		sID['120103'] = 'Infrastructure.Agriculture and Food Infrastructure.Commercial Food Distribution Center';
		sID['120104'] = icons['GROUND.INSTALLATION.ICON.FARM/RANCH'];
		sID['120105'] = 'Infrastructure.Agriculture and Food Infrastructure.Food Distribution';
		sID['120106'] = 'Infrastructure.Agriculture and Food Infrastructure.Food Production Center';
		sID['120107'] = 'Infrastructure.Agriculture and Food Infrastructure.Food Retail';
		sID['120108'] = icons['GROUND.INSTALLATION.ICON.GRAIN STORAGE'];
		sID['120200'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure';
		sID['120201'] = icons['GROUND.INSTALLATION.ICON.ATM'];
		sID['120202'] = icons['GROUND.INSTALLATION.ICON.BANK'];
		sID['120203'] = icons['GROUND.INSTALLATION.ICON.BULLION STORAGE'];
		sID['120204'] = 'Infrastructure.Banking Finance and Insurance  Infrastructure.Economic Infrastructure Asset';
		sID['120205'] = icons['GROUND.INSTALLATION.ICON.FEDERAL RESERVE BANK'];
		sID['120206'] = icons['GROUND.INSTALLATION.ICON.FINANCIAL EXCHANGE'];
		sID['120207'] = icons['GROUND.INSTALLATION.ICON.FINANCIAL SERVICES, OTHER'];
		sID['120300'] = icons['GROUND.INSTALLATION.ICON.COMMERCIAL INFRASTRUCTURE'];
		sID['120301'] = icons['GROUND.INSTALLATION.ICON.CHEMICAL PLANT'];
		sID['120302'] = icons['GROUND.INSTALLATION.ICON.FIREARMS MANUFACTURER'];
		sID['120303'] = icons['GROUND.INSTALLATION.ICON.FIREARMS RETAILER'];
		sID['120304'] = icons['GROUND.INSTALLATION.ICON.HAZARDOUS MATERIAL PRODUCTION'];
		sID['120305'] = icons['GROUND.INSTALLATION.ICON.HAZARDOUS MATERIAL STORAGE'];
		sID['120306'] = icons['GROUND.INSTALLATION.ICON.INDUSTRIAL SITE'];
		sID['120307'] = icons['GROUND.INSTALLATION.ICON.LANDFILL'];
		sID['120308'] = icons['GROUND.INSTALLATION.ICON.PHARMACEUTICAL MANUFACTURER'];
		sID['120309'] = icons['GROUND.INSTALLATION.ICON.CONTAMINATED HAZARDOUS WASTE SITE'];
		sID['120310'] = icons['GROUND.INSTALLATION.ICON.TOXIC RELEASE INVENTORY'];
		sID['120400'] = icons['GROUND.INSTALLATION.ICON.EDUCATIONAL FACILITIES INFRASTRUCTURE'];
		sID['120401'] = icons['GROUND.INSTALLATION.ICON.COLLEGE/UNIVERSITY'];
		sID['120402'] = icons['GROUND.INSTALLATION.ICON.SCHOOL'];
		sID['120500'] = 'Infrastructure.Energy Facility Infrastructure';
		sID['120501'] = 'Infrastructure.Energy Facility Infrastructure.Electric Power';
		sID['120502'] = 'Infrastructure.Energy Facility Infrastructure.Generation Station';
		sID['120503'] = 'Infrastructure.Energy Facility Infrastructure.Natural Gas Facility';
		sID['120504'] = 'Infrastructure.Energy Facility Infrastructure.Petroleum Facility';
		sID['120505'] = 'Infrastructure.Energy Facility Infrastructure.Petroleum/Gas/Oil';
		sID['120506'] = icons['GROUND.INSTALLATION.ICON.PROPANE FACILITY'];
		sID['120600'] = icons['GROUND.INSTALLATION.ICON.GOVERNMENT SITE INFRASTRUCTURE'];
		sID['120700'] = 'Infrastructure.Medical Infrastructure';
		sID['120701'] = 'Infrastructure.Medical Infrastructure.Medical';
		sID['120702'] = 'Infrastructure.Medical Infrastructure.Medical Treatment Facility (Hospital)';
		sID['120800'] = icons['GROUND.INSTALLATION.ICON.MILITARY INFRASTRUCTURE'];
		sID['120801'] = 'Infrastructure.Military Infrastructure.Military Armory';
		sID['120802'] = 'Infrastructure.Military Infrastructure.Military Base';
		sID['120900'] = icons['GROUND.INSTALLATION.ICON.POSTAL SERVICE INFRASTRUCTURE'];
		sID['120901'] = icons['GROUND.INSTALLATION.ICON.POSTAL DISTRIBUTION CENTER'];
		sID['120902'] = icons['GROUND.INSTALLATION.ICON.POST OFFICE'];
		sID['121000'] = 'Infrastructure.Public Venues Infrastructure';
		sID['121001'] = icons['GROUND.INSTALLATION.ICON.ENCLOSED FACITLITY (PUBLIC VENUE)'];
		sID['121002'] = icons['GROUND.INSTALLATION.ICON.OPEN FACILITY (OPEN VENUE)'];
		sID['121003'] = 'Infrastructure.Public Venues Infrastructure.Recreational Area';
		sID['121004'] = icons['GROUND.INSTALLATION.ICON.RELIGIOUS INSTITUTION'];
		sID['121100'] = 'Infrastructure.Special Needs Infrastructure';
		sID['121101'] = 'Infrastructure.Special Needs Infrastructure.Adult Day Care';
		sID['121102'] = 'Infrastructure.Special Needs Infrastructure.Child Day Care';
		sID['121103'] = icons['GROUND.INSTALLATION.ICON.ELDER CARE'];
		sID['121200'] = icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS INFRASTRUCTURE'];
		sID['121201'] = 'Infrastructure.Telecommunications Infrastructure.Broadcast Transmitter Antennae';
		sID['121202'] = 'Infrastructure.Telecommunications Infrastructure.Telecommunications';
		sID['121203'] = icons['GROUND.INSTALLATION.ICON.TELECOMMUNICATIONS TOWER'];
		sID['121300'] = 'Infrastructure.Transportation Infrastructure';
		sID['121301'] = 'Infrastructure.Transportation Infrastructure.Airport/Air Base';
		sID['121302'] = icons['GROUND.INSTALLATION.ICON.AIR TRAFFIC CONTROL FACILITY'];
		sID['121303'] = 'Infrastructure.Transportation Infrastructure.Bus Station';
		sID['121304'] = 'Infrastructure.Transportation Infrastructure.Ferry Terminal';
		sID['121305'] = 'Infrastructure.Transportation Infrastructure.Helicopter Landing Site';
		sID['121306'] = 'Infrastructure.Transportation Infrastructure.Maintenance Facility';
		sID['121307'] = 'Infrastructure.Transportation Infrastructure.Railhead/Railroad Station';
		sID['121308'] = icons['GROUND.INSTALLATION.ICON.REST STOP'];
		sID['121309'] = 'Infrastructure.Transportation Infrastructure.Sea Port/Naval Base';
		sID['121310'] = 'Infrastructure.Transportation Infrastructure.Ship Yard';
		sID['121311'] = icons['GROUND.INSTALLATION.ICON.TOLL FACILITY'];
		sID['121312'] = icons['GROUND.INSTALLATION.ICON.TRAFFIC INSPECTION FACILITY'];
		sID['121313'] = icons['GROUND.INSTALLATION.ICON.TUNNEL'];
		sID['121400'] = 'Infrastructure.Water Supply Infrastructure';
		sID['121401'] = icons['GROUND.INSTALLATION.ICON.CONTROL VALVE'];
		sID['121402'] = icons['GROUND.INSTALLATION.ICON.DAM'];
		sID['121403'] = icons['GROUND.INSTALLATION.ICON.DISCHARGE OUTFALL'];
		sID['121404'] = icons['GROUND.INSTALLATION.ICON.GROUND WATER WELL'];
		sID['121405'] = icons['GROUND.INSTALLATION.ICON.PUMPING STATION'];
		sID['121406'] = icons['GROUND.INSTALLATION.ICON.RESERVOIR'];
		sID['121407'] = icons['GROUND.INSTALLATION.ICON.STORAGE TOWER'];
		sID['121408'] = icons['GROUND.INSTALLATION.ICON.SURFACE WATER INTAKE'];
		sID['121409'] = icons['GROUND.INSTALLATION.ICON.WASTEWATER TREATMENT FACILITY'];
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
		sID['130107'] = icons['SEA.ICON.HOSPITAL SHIP2'];
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
		sID['131305'] = icons['ACTIVITIES.ICON.PHARMACY'];
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
		sID['140100'] = icons['ACTIVITIES.ICON.FIRE ORIGIN'];
		sID['140200'] = icons['ACTIVITIES.ICON.SMOKE'];
		sID['140300'] = icons['ACTIVITIES.ICON.HOT SPOT'];
		sID['140400'] = icons['ACTIVITIES.ICON.NON-RESIDENTIAL FIRE'];
		sID['140500'] = icons['ACTIVITIES.ICON.RESIDENTIAL FIRE'];
		sID['140600'] = icons['ACTIVITIES.ICON.SCHOOL FIRE'];
		sID['140700'] = icons['ACTIVITIES.ICON.SPECIAL NEEDS FIRE'];
		sID['140800'] = icons['ACTIVITIES.ICON.WILD FIRE'];
		sID['150000'] = 'Hazardous Materials';
		sID['150100'] = icons['ACTIVITIES.ICON.HAZARDOUS MATERIALS INCIDENT'];
		sID['150101'] = icons['ACTIVITIES.ICON.CHEMICAL AGENT'];
		sID['150102'] = icons['ACTIVITIES.ICON.CORROSIVE MATERIAL'];
		sID['150103'] = icons['ACTIVITIES.ICON.HAZARDOUS WHEN WET'];
		sID['150104'] = icons['ACTIVITIES.ICON.EXPLOSIVE MATERIAL'];
		sID['150105'] = icons['ACTIVITIES.ICON.FLAMMABLE GAS'];
		sID['150106'] = icons['ACTIVITIES.ICON.FLAMMABLE LIQUID'];
		sID['150107'] = icons['ACTIVITIES.ICON.FLAMMABLE SOLID'];
		sID['150108'] = icons['ACTIVITIES.ICON.NON-FLAMMABLE GAS'];
		sID['150109'] = icons['ACTIVITIES.ICON.ORGANIC PEROXIDE'];
		sID['150110'] = icons['ACTIVITIES.ICON.OXIDIZER'];
		sID['150111'] = icons['ACTIVITIES.ICON.RADIOACTIVE MATERIAL'];
		sID['150112'] = icons['ACTIVITIES.ICON.SPONTANEOUSLY COMBUSTIBLE MATERIAL'];
		sID['150113'] = icons['ACTIVITIES.ICON.TOXIC GAS'];
		sID['150114'] = icons['ACTIVITIES.ICON.TOXIC INFECTIOUS MATERIAL'];
		sID['150115'] = icons['ACTIVITIES.ICON.UNEXPLODED ORDNANCE'];
		sID['160000'] = 'Transportation Incident';
		sID['160100'] = 'Transportation Incident.Air-';
		sID['160200'] = 'Transportation Incident.Marine-';
		sID['160300'] = 'Transportation Incident.Rail-';
		sID['160400'] = 'Transportation Incident.Vehicle-';
		sID['160500'] = 'Transportation Incident.Wheeled Vehicle Explosion';
		sID['170000'] = 'Natural Event';
		sID['170100'] = 'Natural Event.Geologic';
		sID['170101'] = icons['ACTIVITIES.ICON.AFTERSHOCK'];
		sID['170102'] = icons['ACTIVITIES.ICON.AVALANCHE'];
		sID['170103'] = icons['ACTIVITIES.ICON.EARTHQUAKE EPICENTER'];
		sID['170104'] = icons['ACTIVITIES.ICON.LANDSLIDE'];
		sID['170105'] = icons['ACTIVITIES.ICON.SUBSIDENCE'];
		sID['170106'] = icons['ACTIVITIES.ICON.VOLCANIC ERUPTION'];
		sID['170107'] = icons['ACTIVITIES.ICON.VOLCANIC THREAT'];
		sID['170108'] = 'Natural Event.Geologic.Cave Entrance';
		sID['170200'] = 'Natural Event.Hydro-Meteorological';
		sID['170201'] = icons['ACTIVITIES.ICON.DROUGHT'];
		sID['170202'] = icons['ACTIVITIES.ICON.FLOOD'];
		sID['170203'] = icons['ACTIVITIES.ICON.TSUNAMI'];
		sID['170300'] = 'Natural Event.Infestation';
		sID['170301'] = icons['ACTIVITIES.ICON.BIRD'];
		sID['170302'] = icons['ACTIVITIES.ICON.INSECT'];
		sID['170303'] = icons['ACTIVITIES.ICON.MICROBIAL'];
		sID['170304'] = icons['ACTIVITIES.ICON.REPTILE'];
		sID['170305'] = icons['ACTIVITIES.ICON.RODENT'];
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
	return {sID:sID,sIDm1:sIDm1,sIDm2:sIDm2}
}

MilSymbol = function (SIDCParameter,options){
//Constants
	var svgNS = "http://www.w3.org/2000/svg";
//Options
	if(!options)var options = {};
//Here are ALL the attributes that you can set for the Symbol, there is a lot of stuff... 
//========================================================================================
	//Should the icon be filled with color
	this.fill 			= 	options.fill!=undefined?options.fill:true;
	//Possibility to change the fill opacity
	this.fillOpacity	=	options.fillOpacity!=undefined?options.fillOpacity:1;
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
	this.markerBBox = {x1:50,y1:50,x2:150,y2:150};
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
	};
	//var copysymbolBaseGeometry = symbolBaseGeometry;
	_MilSymbol.symbolBaseGeometry = symbolBaseGeometry;

	//Object containing bottom of all Equipment symbols.
	var equipmentBottom = {'E-----':0,'EWM---':140,'EWMA--':140,'EWMAS-':140,'EWMASR':140,'EWMASE':140,'EWMAI-':140,'EWMAIR':140,'EWMAIE':140,'EWMAL-':140,'EWMALR':140,'EWMALE':140,'EWMAT-':153,'EWMATR':153,'EWMATE':153,'EWMS--':140,'EWMSS-':140,'EWMSI-':140,'EWMSL-':140,'EWMT--':140,'EWMTL-':140,'EWMTM-':140,'EWMTH-':140,'EWS---':140,'EWSL--':140,'EWSM--':140,'EWSH--':140,'EWX---':140,'EWXL--':140,'EWXM--':140,'EWXH--':140,'EWT---':140,'EWTL--':140,'EWTM--':140,'EWTH--':140,'EWR---':140,'EWRL--':140,'EWRM--':140,'EWRH--':140,'EWZ---':140,'EWZL--':140,'EWZM--':140,'EWZH--':140,'EWO---':140,'EWOL--':140,'EWOM--':140,'EWOH--':140,'EWH---':140,'EWHL--':140,'EWHLS-':130,'EWHM--':140,'EWHMS-':130,'EWHH--':140,'EWHHS-':130,'EWG---':140,'EWGL--':140,'EWGM--':140,'EWGH--':140,'EWGR--':140,'EWD---':140,'EWDL--':140,'EWDLS-':130,'EWDM--':140,'EWDMS-':130,'EWDH--':140,'EWDHS-':130,'EWA---':140,'EWAL--':140,'EWAM--':140,'EWAH--':140,'EV----':129,'EVA---':129,'EVAT--':130,'EVATL-':130,'EVATLR':130,'EVATM-':130,'EVATMR':130,'EVATH-':130,'EVATHR':130,'EVAA--':130,'EVAAR-':130,'EVAI--':130,'EVAC--':130,'EVAS--':972.3621826171875,'EVAL--':140,'EVU---':130,'EVAB--':130,'EVUS--':140,'EVUSL-':140,'EVUSM-':140,'EVUSH-':140,'EVUL--':140,'EVUX--':140,'EVUR--':130,'EVUTL-':130,'EVUTH-':130,'EVUA--':130,'EVUAA-':130,'EVE---':129,'EVEB--':130,'EVEE--':130,'EVEC--':140,'EVEM--':130,'EVEMA-':130,'EVEMV-':130,'EVEMT-':130,'EVEML-':140,'EVEA--':120,'EVEAA-':130,'EVEAT-':130,'EVEMSM':130,'EVED--':130,'EVEDA-':130,'EVES--':130,'EVER--':130,'EVEH--':140,'EVEF--':140,'EVD---':140,'EVT--':130,'EVC---':119,'EVCA--':132.5,'EVCAL-':132.5,'EVCAM-':132.5,'EVCAH-':132.5,'EVCO--':132.5,'EVCOL-':132.5,'EVCOM-':132.5,'EVCOH-':132.5,'EVCM--':132.5,'EVCML-':132.5,'EVCMM-':132.5,'EVCMH-':132.5,'EVCU--':132.5,'EVCUL-':132.5,'EVCUM-':132.5,'EVCUH-':132.5,'EVCJ--':132.5,'EVCJL-':132.5,'EVCJM-':132.5,'EVCJH-':132.5,'EVCT--':132.5,'EVCTL-':132.5,'EVCTM-':132.5,'EVCTH-':132.5,'EVCF--':132.5,'EVCFL-':132.5,'EVCFM-':132.5,'EVCFH-':132.5,'EVM---':125,'EVS---':129,'EVST--':129,'EVSR--':129,'EVSC--':129,'EVSP--':129,'EVSW--':129,'ES----':140,'ESR---':120,'ESE---':136,'EXI---':119,'EXL---':145,'EXN---':140,'EXF---':135,'EXM---':130,'EXMC--':122,'EXML--':122};
	
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
						"taskForce":false};
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
									"62": "Long towed Array"};
		var echelonETC = new Object();
		var mobility = false;
							
		var affiliationTypeValues = ["Hostile", "Friend", "Neutral", "Unknown"];
		var dimensionTypeValues = ["Air", "Ground", "Sea", "Subsurface"];

		var symbolSIDC = String(this.SIDC).replace("*","-").replace(" ","");
		if(isNaN(symbolSIDC)) this.SIDC = symbolSIDC = symbolSIDC.toUpperCase();

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
		//Does the standard define that the symbol should be unframed
		var unframed = false;
		
		if(!isNaN(symbolSIDC)){ //This is for new number based SIDCs
			var version  	= 	symbolSIDC.substr(0,2);
			var standardIdentity1 = symbolSIDC.substr(2,1);
			var standardIdentity2 = symbolSIDC.substr(3,1);
			var symbolSet = symbolSIDC.substr(4,2);
			var status = symbolSIDC.substr(6,1);
			var headquartersTaskForceDummy = symbolSIDC.substr(7,1);
			var echelonMobilityTowed = symbolSIDC.substr(8,2);
			
			var functionid = symbolSIDC.substr(10,10);
			
			context = contextValues[parseInt(symbolSIDC.substr(2,1))];
			
			var affiliationMapping = {	'0':'Unknown',
										'1':'Unknown',
										'2':'Friend',
										'3':'Friend',
										'4':'Neutral',
										'5':'Hostile',
										'6':'Hostile'};
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
										'60':'Ground'};
			dimensionType = dimensionMapping[symbolSet];

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
			

			var codingscheme 	= 	symbolSIDC.charAt(0)!=''?symbolSIDC.charAt(0):'-';
			var affiliation 	= 	symbolSIDC.charAt(1)!=''?symbolSIDC.charAt(1):'-';
			var battledimension = 	symbolSIDC.charAt(2)!=''?symbolSIDC.charAt(2):'-';
			var status 			= 	symbolSIDC.charAt(3)!=''?symbolSIDC.charAt(3):'-';
			var functionid 		= 	symbolSIDC.substr(4,6)!=''?symbolSIDC.substr(4,6):'------';
			var symbolmodifier11 = 	symbolSIDC.charAt(10)!=''?symbolSIDC.charAt(10):'-';
			var symbolmodifier12 = 	symbolSIDC.charAt(11)!=''?symbolSIDC.charAt(11):'-';
			var countrycode 	= 	symbolSIDC.substr(12,2)!=''?symbolSIDC.substr(12,2):'--';
			var orderofbattle 	= 	symbolSIDC.charAt(14)!=''?symbolSIDC.charAt(14):'-';

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

			//Some EMS symbosls should have the same geometry as sea Friend... 
			dimensionType = (codingscheme == 'E' && ((battledimension=='O'&& ['AB----','AE----','AF----','BB----','CB----','CC----','DB----','DDB---','DEB---','DFB---','DGB---','DHB---','DIB---','DJB---','DLB---','DMB---','DOB---','EA----','EB----','EC----','ED----','EE----'].indexOf(functionid) > -1)||(battledimension=='F'&& ['BA----','MA----','MC----'].indexOf(functionid) > -1)))?'Sea':dimensionType;

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
				if(['F','A'].indexOf(affiliation) > -1) dimensionType = 'Sea';
				//If battle dimension is unknown and the affiliation is D,L,M,J,K we should not have a symbol
				if(['D','L','M','J','K'].indexOf(affiliation) > -1) affiliationType = 'none';
			};	
			
			//Forcing unframing of symbols that shouldn't have a frame.
			if((battledimension=='S')&&["O-----",'ED----','EP----','EV----','ZM----','ZN----','ZI----'].indexOf(functionid) > -1){
				unframed = true;
			}
			if((codingscheme=='E')&&(battledimension=='N')&&["AA----","AB----","AC----","AD----","AE----","AG----","BB----","BC----","BF----","BM----","-C-----","CA----","CB----","CC----","CD----","CE----"].indexOf(functionid) > -1){
				unframed = true;
			}
			//Some symbols in EMS
			if(symbolSIDC.substr(0,3) == "WAS" || symbolSIDC.substr(0,1) == "G" || symbolSIDC.substr(0,3) == "WOS"){
				unframed = true;
			}
		
		}

		baseGeometryType = dimensionType + affiliationType;
		//The basegeometry type doesn't exist, can happen for undefined symbols, so fix stuff so that code dosen't crash later.
		if(!symbolBaseGeometry.BBox.hasOwnProperty("Air"+affiliationType))symbolBaseGeometry.BBox["Air"+affiliationType] = {x:50, y:50,width:100,height:100};
		if(!symbolBaseGeometry.BBox.hasOwnProperty("Ground"+affiliationType))symbolBaseGeometry.BBox["Ground"+affiliationType] = {x:50, y:50,width:100,height:100};
		if(!symbolBaseGeometry.BBox.hasOwnProperty("Sea"+affiliationType))symbolBaseGeometry.BBox["Sea"+affiliationType] = {x:50, y:50,width:100,height:100};
		if(!symbolBaseGeometry.BBox.hasOwnProperty("Subsurface"+affiliationType))symbolBaseGeometry.BBox["Subsurface"+affiliationType] = {x:50, y:50,width:100,height:100};
		if(!symbolBaseGeometry.BBox.hasOwnProperty(dimensionType+affiliationType))symbolBaseGeometry.BBox[dimensionType+affiliationType] = {x:50, y:50,width:100,height:100};

		return {
		"battledimension" 	: battledimension,
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
		"functionid" 		: functionid,
		"unframed"			: unframed
		}
	};

//SymbolColors ###########################################################################
	this.symbolColors = function(){
	
		var symbol = this._symbol;
		var fill = this.fill;
		var frame = this.frame;
		var Colors = {	
			fillColor : '',
			frameColor : '',
			iconColor : '',
			iconFillColor: '',
			none : '',
			black : '',
			white : ''
		};
		//Ok so we don't really use the opacity, but if we want to make it posible in the 
		//future to change opacity we have them here to play around with.
		var baseFillColorOpacity = this.fillOpacity;
		var baseFrameColorOpacity = 1;
		var baseIconOpacity = 1;
		var baseIconFillOpacity = 1;	
		
		//Set Light colors as default
		var baseFillColor = {
			'Hostile' 	: 'rgba(255, 128, 128,'+baseFillColorOpacity+')',
			'Friend'	: 'rgba(128, 224, 255,'+baseFillColorOpacity+')',
			'Neutral' 	: 'rgba(170, 255, 170,'+baseFillColorOpacity+')',
			'Unknown' 	: 'rgba(255, 255, 128,'+baseFillColorOpacity+')'
		};
		var civilianColor = 'rgba(255,161,255,'+baseFillColorOpacity+')';
		//Overwrite with Medium colors
		if(this.colorMode == "Medium"){
			baseFillColor = {
				'Hostile' 	: 'rgba(255,48,49,'+baseFillColorOpacity+')',
				'Friend'	: 'rgba(0,168,220,'+baseFillColorOpacity+')',
				'Neutral' 	: 'rgba(0,226,110,'+baseFillColorOpacity+')',
				'Unknown' 	: 'rgba(255,255,0,'+baseFillColorOpacity+')'
			};
			civilianColor = 'rgba(128,0,128,'+baseFillColorOpacity+')'
		}
		//Overwrite with Dark colors
		if(this.colorMode == "Dark"){
			baseFillColor = {
				'Hostile' 	: 'rgba(200,0,0,'+baseFillColorOpacity+')',
				'Friend'	: 'rgba(0,107,140,'+baseFillColorOpacity+')',
				'Neutral' 	: 'rgba(0,160,0,'+baseFillColorOpacity+')',
				'Unknown' 	: 'rgba(225,220,0,'+baseFillColorOpacity+')'
			};
			civilianColor = 'rgba(80,0,80,'+baseFillColorOpacity+')'
		}
		
		var baseFrameColor = {
			'Hostile' 	: 'rgba(255, 0, 0,'+baseFrameColorOpacity+')',
			'Friend'	: 'rgba(0, 255, 255,'+baseFrameColorOpacity+')',
			'Neutral' 	: 'rgba(0, 255, 0,'+baseFrameColorOpacity+')',
			'Unknown' 	: 'rgba(255, 255, 0,'+baseFrameColorOpacity+')'
		};
		var baseIconColor = {
			'Hostile' 	: 'rgba(255, 0, 0,'+baseIconOpacity+')',
			'Friend' 	: 'rgba(0, 255, 255,'+baseIconOpacity+')',
			'Neutral' 	: 'rgba(0, 255, 0,'+baseIconOpacity+')',
			'Unknown' 	: 'rgba(255, 255, 0,'+baseIconOpacity+')'
		};
		var baseIconFillColor = baseFillColor;
		var baseColorBlack = {
			'Hostile' 	: 'black',
			'Friend'	: 'black',
			'Neutral' 	: 'black',
			'Unknown' 	: 'black'
		};
		var baseColorWhite = {
			'Hostile' 	: 'white',
			'Friend'	: 'white',
			'Neutral' 	: 'white',
			'Unknown' 	: 'white'
		};
		var baseColorOffWhite = {
			'Hostile' 	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')',
			'Friend'	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')',
			'Neutral' 	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')',
			'Unknown' 	: 'rgba(239, 239, 239,'+baseFillColorOpacity+')'
		};
		var baseColorNone = {
			'Hostile' 	: 'none',
			'Friend'	: 'none',
			'Neutral' 	: 'none',
			'Unknown' 	: 'none'
		};

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
		if(symbol.unframed)frame = false;
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

		Colors.none = baseColorNone;
		Colors.black = baseColorBlack;
		Colors.white = baseColorWhite;

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
			//Colors.black = baseFrameColor;
		}
		
		//Icon or not (shhhh, the icon is really there but we make it invisible...)
		if(!this.icon){
			Colors.iconColor = baseColorNone;
			Colors.iconFillColor = baseColorNone;
		}
		return Colors;
	};

//Sets the style of the frame depending of status ########################################
//And also add the capability status bar from 2525.
	this.symbolStatus = function(){
		var symbol = this._symbol;
		var tmp = '';
		if(this.fill && this.frame && symbol.anticipated && !symbol.unframed){
			tmp += this._symbolBaseGeometry.symbols[symbol.baseGeometryType]
		}
		//Adds condition modifier for tactical symbols.
		if(symbol.condition){
			if(this.fill && this.monoColor == ""){
				var colors = {	"FullyCapable"	:'rgb(0,255,0)',
								"Damaged"		:'rgb(255,255,0)',
								"Destroyed"		:'rgb(255,0,0)',
								"FullToCapacity":'rgb(0, 180, 240)'};
				//If we have a mobility indicator we need to make space for it.
				var offset = (symbol.mobility)?25:5;
				var symbolBBox = this._symbolBaseGeometry.symbols.BBox[symbol.baseGeometryType];
				var symbolbottom = symbolBBox.y + symbolBBox.height;	
				if(!this.frame){
					symbolbottom = equipmentBottom[symbol.functionid]==undefined ? symbolbottom : equipmentBottom[symbol.functionid];
				}
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,(symbolbottom+offset+15));
				tmp += '<path  stroke-width="' + this.strokeWidth + '" fill="' + colors[symbol.condition] + '" stroke-dasharray="0" stroke="' + this.symbolColors().frameColor[symbol.affiliationType] + '" d="M' + symbolBBox.x + ',' + (symbolbottom+offset) + ' l' + symbolBBox.width + ',0 0,15 -' + symbolBBox.width + ',0 z" />';
			}else{
				var damagedDestroyed = '';
				if(symbol.condition == "Damaged" || symbol.condition == "Destroyed")damagedDestroyed += '<polyline points="150,20 50,180 " stroke-width="' + (this.strokeWidth * 2 ) + '" stroke="' + this._symbolColors.frameColor[symbol.affiliationType] + '" stroke-dasharray="0" />';
				if(symbol.condition == "Destroyed")damagedDestroyed += '<polyline points="50,20 150,180 " stroke-width="' + (this.strokeWidth * 2 ) + '" stroke="' + this.symbolColors().frameColor[symbol.affiliationType] + '" stroke-dasharray="0" />';
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(20));
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,(180));
				tmp += damagedDestroyed;
			}
		}
		//if(symbol.status == 'P' || symbol.status == '-'){
			//Nothing, but we keep this if we need to use it.
		//}
		return '<g id="StatusGeometry" fill="none" stroke="'+this._symbolColors.white["Friend"]+'" stroke-width="'+(parseFloat(this.strokeWidth)+1)+'" stroke-dasharray="'+symbol.anticipated+'">'+tmp+'</g>';
	};

//Base Geometry for the Symbol ###########################################################
	this.symbolBaseGeometry = function(){

	var symbol = this._symbol;
		//Att size less than 10 set the geometry to a circle and reset it back again if we size up. 
		if(symbolBaseGeometry['temp']){
			symbolBaseGeometry[symbol.baseGeometryType] = symbolBaseGeometry['temp'];
			symbolBaseGeometry['temp'] = undefined;
			//symbolBaseGeometry.BBox[symbol.baseGeometryType] = symbolBaseGeometry.BBox['temp'];
			//symbolBaseGeometry.BBox['temp'] = undefined;
		}
		if(this.size < 10 || (!this.frame&&!this.icon)){
			symbolBaseGeometry['temp'] = symbolBaseGeometry[symbol.baseGeometryType];
			symbolBaseGeometry[symbol.baseGeometryType] = '<circle cx="100" cy="100" r="50" />';
			//symbolBaseGeometry.BBox['temp'] = symbolBaseGeometry.BBox[symbol.baseGeometryType];
			//symbolBaseGeometry.BBox[symbol.baseGeometryType] = { x: 50, y:50, width: 100 , height:100};
		}
		/*The support for Svg boudningboxes for not drawn objects in webbrowsers sucks, and we need to know the size of our 
		Geometries, so here is a way to print out all info we need as an object string.
			if(printToElementID){
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
		//Modifiers for activity.
		if(symbol.activityModifier){
			if(symbol.affiliationType == 'Friend'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="m 160,135 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z m 135,-85 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z"/>'}
			if(symbol.affiliationType == 'Hostile'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M 100 28 L 89.40625 38.59375 L 100 49.21875 L 110.59375 38.59375 L 100 28 z M 38.6875 89.3125 L 28.0625 99.9375 L 38.6875 110.53125 L 49.28125 99.9375 L 38.6875 89.3125 z M 161.40625 89.40625 L 150.78125 100 L 161.40625 110.59375 L 172 100 L 161.40625 89.40625 z M 99.9375 150.71875 L 89.3125 161.3125 L 99.9375 171.9375 L 110.53125 161.3125 L 99.9375 150.71875 z"/>'}
			if(symbol.affiliationType == 'Neutral'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="m 140,140 15,0 0,15 -15,0 z m -80,0 0,15 -15,0 0,-15 z m 80,-80 0,-15 15,0 0,15 z m -80,0 -15,0 0,-15 15,0 z"/>'}
			if(symbol.affiliationType == 'Unknown'){extraModifier = '<path stroke="none" fill="' +this._symbolColors.frameColor[symbol.affiliationType]+ '" d="M 107.96875 31.46875 L 92.03125 31.71875 L 92.03125 46.4375 L 107.71875 46.4375 L 107.96875 31.46875 z M 47.03125 92.5 L 31.09375 92.75 L 31.09375 107.5 L 46.78125 107.5 L 47.03125 92.5 z M 168.4375 92.5 L 152.5 92.75 L 152.5 107.5 L 168.1875 107.5 L 168.4375 92.5 z M 107.96875 153.5625 L 92.03125 153.8125 L 92.03125 168.53125 L 107.71875 168.53125 L 107.96875 153.5625 z"/>'}
		}
		//The test geometry displays the bounding octagon in the symbols, good for debugging.
		var testGeometry = '';
		//testGeometry = '<path d="m 120,60 0,80 m -40,-80 0,80 m -20,-20 80,0 m 0,-40 -80,0 M 100,50 135.35534,64.64466 150,100 135.35534,135.35534 100,150.00002 64.644661,135.35534 50,100 64.644661,64.64466 z" stroke="black" stroke-width="1" fill="none"></path>'
		//Keep track of how big our symbol is
		if(!symbolBaseGeometry.BBox.hasOwnProperty(symbol.baseGeometryType))symbol.baseGeometryType = "AirFriend";//TODO find out why we sometimes get baseGeometryType == NaN... 
		this.markerBBox = {	x1:Math.min(this.markerBBox.x1,symbolBaseGeometry.BBox[symbol.baseGeometryType].x),
							y1:Math.min(this.markerBBox.y1,symbolBaseGeometry.BBox[symbol.baseGeometryType].y),
							x2:Math.max(this.markerBBox.x2,symbolBaseGeometry.BBox[symbol.baseGeometryType].x + symbolBaseGeometry.BBox[symbol.baseGeometryType].width),
							y2:Math.max(this.markerBBox.y2,symbolBaseGeometry.BBox[symbol.baseGeometryType].y + symbolBaseGeometry.BBox[symbol.baseGeometryType].height)};
		//Add a dashed outline to the frame if we are using monocolor and the status is set to A or the affiliation is P,A,S or G.	
		var anticipated = "";
		if((this.monoColor != '' || !this.fill) && symbol.anticipated) anticipated = ' stroke-dasharray="'+symbol.anticipated+'"';
		var Geometry = '<g id="BaseGeometry" fill="'+this._symbolColors.fillColor[symbol.affiliationType]+'" stroke="'+this._symbolColors.frameColor[symbol.affiliationType]+'" stroke-width="'+(this.size>=10?this.strokeWidth:10)+'"'+anticipated+'>' + symbolBaseGeometry[symbol.baseGeometryType] + extraModifier + testGeometry + '</g>';
		return {"geometry" : Geometry, "symbols" : symbolBaseGeometry};
	};

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
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20));
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))
			}
			if(symbol.jokerFaker == 'Joker'){	
				var spacing = 10;
				if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
				affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">J</text>';
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20));
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))		
			}
			if(symbol.jokerFaker == 'Faker'){	
				var spacing = 10;
				if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
				affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">K</text>';
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20));
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))
			}
		}		

		if(symbol.context == "Simulation"){
			var spacing = 10;
			if(symbol.affiliationType == "Unknown" || (symbol.affiliationType == "Hostile" && symbol.dimensionType != "Subsurface"))spacing = -10; 
			affliationDimensionGeometry += '<text x="' + (this.markerBBox.x2 + spacing )+ '" y="60" font-family="Arial" font-size="35" font-weight="bold">S</text>';
			this.markerBBox.x2 = Math.max(this.markerBBox.x2,(this.markerBBox.x2 + spacing + 20));
			this.markerBBox.y1 = Math.min(this.markerBBox.y1,(60-35))
		}
		var Geometry = '<g id="AffliationDimensionGeometry" fill="'+this._symbolColors.frameColor[symbol.affiliationType]+'"><g xmlns="'+svgNS+'">'  + affliationDimensionGeometry + '</g></g>';
		return Geometry;
	};

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
				modifier += _MilSymbol.translate(0,-installation,'<circle cx="100" cy="'+(symbolBBox.y-25)+'" r="15" fill="none"  /><line x1="80" y1="'+(symbolBBox.y-15)+'" x2="120" y2="'+(symbolBBox.y-35)+'" stroke-width="' + (this.strokeWidth*2/3) + '"  />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Squad"]){
				//The standard says that dots should be at least 0.15L in diameter, I think it's too big but follow the standard... 
				modifier += _MilSymbol.translate(0,-installation,'<circle cx="100" cy="'+(symbolBBox.y-20)+'" r="7.5" stroke="none"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-20-7.5-installation));
			}
			if(symbol.echelonETC["Section"]){
				modifier += _MilSymbol.translate(0,-installation,'<circle cx="115" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/><circle cx="85" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-20-7.5-installation));
			}
			if(symbol.echelonETC["Platoon/detachment"]){
				modifier += _MilSymbol.translate(0,-installation,'<circle cx="100" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/><circle cx="70" cy="'+(symbolBBox.y-20)+'" r="7.5"  stroke="none"/><circle cx="130" cy="'+(symbolBBox.y-20)+'" r="7.5" stroke="none"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-20-7.5-installation));
			}
			if(symbol.echelonETC["Company/battery/troop"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<line x1="100" y1="'+(symbolBBox.y-15)+'" x2="100" y2="'+(symbolBBox.y-40)+'" stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Battalion/squadron"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<line x1="90" y1="'+(symbolBBox.y-15)+'" x2="90" y2="'+(symbolBBox.y-40)+'"  stroke-width="' + (this.strokeWidth*5/3) + '"/><line x1="110" y1="'+(symbolBBox.y-15)+'" x2="110" y2="'+(symbolBBox.y-40)+'"  stroke-width="' + (this.strokeWidth*5/3) + '"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Regiment/group"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<line x1="100" y1="'+(symbolBBox.y-15)+'" x2="100" y2="'+(symbolBBox.y-40)+'"  stroke-width="' + (this.strokeWidth*5/3) + '"/><line x1="120" y1="'+(symbolBBox.y-15)+'" x2="120" y2="'+(symbolBBox.y-40)+'" stroke-width="' + (this.strokeWidth*5/3) + '"/><line x1="80" y1="'+(symbolBBox.y-15)+'" x2="80" y2="'+(symbolBBox.y-40)+'" stroke-width="' + (this.strokeWidth*5/3) + '"/>');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-40-installation));
			}
			if(symbol.echelonETC["Brigade"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M87.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
			}
			if(symbol.echelonETC["Division"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M70,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M105,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,70);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,130);
			}
			if(symbol.echelonETC["Corps/MEF"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M52.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M87.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M122.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,52.5);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,147.5);
			}
			if(symbol.echelonETC["Army"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M35,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M70,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M105,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M140,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1=Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,35);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,165);
			}
			if(symbol.echelonETC["Army Group/front"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M17.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M52.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M87.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M122.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25       M157.5,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    "  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,17.5);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,182.5);
			}
			if(symbol.echelonETC["Region/Theater"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M0,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M35,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M70,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25   M105,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25    M140,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25     M175,'+ (symbolBBox.y-15) +' l25,-25 m0,25 l-25,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,(symbolBBox.y-15-25-installation));
				this.markerBBox.x1 = Math.min(this.markerBBox.x1,0);
				this.markerBBox.x2 = Math.max(this.markerBBox.x2,200);
			}
			if(symbol.echelonETC["Command"]){
				modifier += _MilSymbol.translate(0,-installation+10,'<path d="M70,'+ (symbolBBox.y-27.5) +' l25,0 m-12.5,12.5 l0,-25   M105,'+ (symbolBBox.y-27.5) +' l25,0 m-12.5,12.5 l0,-25"  fill="none"  stroke-width="' + (this.strokeWidth*5/3) + '" />');
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
				
				modifier += '<g transform="translate(0,' + symbolbottom + ')" stroke="' + this._symbolColors.iconColor[symbol.affiliationType] + '">';
				if(symbol.echelonETC["Wheeled limited cross country"]){
					modifier += '<path d="M 50,1 l 100,0"  fill="none" /><circle cx="55" cy="6" r="5" fill="none"  /><circle cx="145" cy="6" r="5" fill="none"  />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+6+5);
				}
				if(symbol.echelonETC["Wheeled cross country"]){
					modifier += '<path d="M 50,1 l 100,0"  fill="none" /><circle cx="55" cy="6" r="5" fill="none"  /><circle cx="145" cy="6" r="5" fill="none"  /><circle cx="100" cy="6" r="5" fill="none"  />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+6+5);
				}
				if(symbol.echelonETC["Tracked"]){
					modifier += '<path d="M 50,1 l 100,0 c10,0 10,10 0,10 l -100,0 c-10,0 -10,-10 0,-10"  fill="none" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Wheeled and tracked combination"]){
					modifier += '<circle cx="55" cy="6" r="5" fill="none"  /><path d="M 80,1 l 70,0 c10,0 10,10 0,10 l -70,0 c-10,0 -10,-10 0,-10"  fill="none" />';
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
					modifier += '<path d="M 150,-9  c10,0 10,10 0,10 l -100,0 c-10,0 -10,-10 0,-10"  fill="none" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Pack animals"]){
					modifier += '<path d="M 80,20 l 10,-20 10,20 10,-20 10,20 "  fill="none" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+20);
				}
				if(symbol.echelonETC["Barge"]){
					modifier += '<path d="M 50,1 l 100,0 c0,10 -100,10 -100,0"  fill="none" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Amphibious"]){
					modifier += '<path d="M 65,10 c 0,-10 10,-10 10,0 0,10 10,10 10,0   0,-10 10,-10 10,0 0,10 10,10 10,0   0,-10 10,-10 10,0 0,10 10,10 10,0   0,-10 10,-10 10,0  "  fill="none" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+20);
				}
				if(symbol.echelonETC["Short towed array"]){
					modifier += '<path d="M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M100,0 l5,5 -5,5 -5,-5 z" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				if(symbol.echelonETC["Long towed Array"]){
					modifier += '<path d="M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M105,0 l-10,0 0,10 10,0 z M75,0 l5,5 -5,5 -5,-5 z  M125,0 l5,5 -5,5 -5,-5 z" />';
					this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+10);
				}
				modifier += '</g>';
			}
			if(this.sigint){
				var symbolbottom = symbolBBox.y + symbolBBox.height;
				modifier += '<text font-family="Arial" font-weight="bold" stroke="none" text-anchor="middle" x="100" y="'+ (30 + symbolbottom )+'" font-size="35" >'+this.sigint+'</text>';
				this.markerBBox.y2 = Math.max(this.markerBBox.y2,symbolbottom+30);
			}
		var Geometry = '<g id="symbolModifier" fill="'+this._symbolColors.frameColor[symbol.affiliationType]+'" stroke="'+this._symbolColors.frameColor[symbol.affiliationType]+'" stroke-width="'+this.strokeWidth+'">' + modifier + '</g>';
		return Geometry;
	};

//Icons ##################################################################################
	this.symbolIcon = function(element){
		//remove element after testing... 		
		var symbolColors = this._symbolColors;
		var symbol = this._symbol;
		//var affiliationType = symbol.affiliationType;
		var fillColor = symbolColors.fillColor[symbol.affiliationType];
		var iconColor = symbolColors.iconColor[symbol.affiliationType];
		var iconFillColor = symbolColors.iconFillColor[symbol.affiliationType];
		var none = symbolColors.none[symbol.affiliationType];
		var black = symbolColors.black[symbol.affiliationType];
		var white = symbolColors.white[symbol.affiliationType];
		var unframed = symbol.unframed;
		var icons = [];
		//Main Symbol
		var sID = [];
		//Modifier 1
		var sIDm1 = [];
		//Modifier 2
		var sIDm2 = [];

		var iconSet = symbol.affiliationType+'-fillcolor:'+fillColor+' iconColor:'+iconColor+' iconFillColor:'+iconFillColor+' '+none+black+white+'-'+this.fill+this.frame+this.strokeWidth+this.monoColor+this.civilianColors+this.colorMode+this.force2525;

		if(_MilSymbol.icons.hasOwnProperty(iconSet)){	
			icons = _MilSymbol.icons[iconSet];
		}else{
			_MilSymbol.icons[iconSet] = _MilSymbolIcons(this.fill,this.frame,this.strokeWidth,this.monoColor,this.civilianColors,this.colorMode,this.force2525,symbol.affiliationType,symbol,symbolColors,this.SIDC);
			icons = _MilSymbol.icons[iconSet];
		}

		if(isNaN(this.SIDC)){ //Letter based SIDCs.
			//Stupid sea mine exercise has stuff outside the boundingbox... 
			if(["WMGX--","WMMX--","WMFX--","WMX---","WMSX--"].indexOf(this.SIDC.substr(4,6))!=-1){
				var symbolBBox = symbolBaseGeometry.BBox[symbol.baseGeometryType];
				this.markerBBox.y1 = Math.min(this.markerBBox.y1,symbolBBox.y-30);
				if(symbol.affiliationType != "Unknown"){this.markerBBox.x2 = Math.max(this.markerBBox.x2,symbolBBox.x+symbolBBox.width+20);};
			}
			if(_MilSymbol.sID.hasOwnProperty(iconSet)){	
				sID = _MilSymbol.sID[iconSet];
			}else{
				sID = _MilSymbol.sID[iconSet] = _MilSymbolinitLetterSIDC(icons, this.force2525);
			}
		}
		
		if(!isNaN(this.SIDC)){ //Number based SIDCs.
			var symbolSet = String(this.SIDC).replace("*","-").replace(" ","").substr(4,2);
			if(_MilSymbol.sID.hasOwnProperty(symbolSet+iconSet)){	
				sID = _MilSymbol.sID[symbolSet+iconSet];
				sIDm1 = _MilSymbol.sIDm1[symbolSet+iconSet];
				sIDm2 = _MilSymbol.sIDm2[symbolSet+iconSet];

			}else{
				var symbols = _MilSymbolInitNumberSIDC(symbolSet,icons, this.force2525);
				sID = _MilSymbol.sID[symbolSet+iconSet] = symbols.sID;
				sIDm1 = _MilSymbol.sIDm1[symbolSet+iconSet] = symbols.sIDm1;
				sIDm2 = _MilSymbol.sIDm2[symbolSet+iconSet] = symbols.sIDm2;
			}	
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
	
			if(element){//For printing all implemented symbols

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
		var icon = "";
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
		var geometry = '<g id="Icon" fill="'+iconColor+'" stroke="'+iconColor+'" stroke-width="'+this.strokeWidth+'" font-family="Arial" font-weight="bold">' + icon + '</g>';
		return geometry;
	};

//Combines all parts and returns the symbol as an SVG object. mySymbol.symbolSvg() #######
	this.symbolSvg = function(markerUpdate){

	if(!markerUpdate){ //If we call symbolSvg directly we need to update _symbol and _symbolColors
		this._symbol = this.symbol();		
		this._symbolColors = this.symbolColors();
	}
	var symbol = this._symbol;

	//For the map markers we want to remove as much spacing as possible, so we need to keep track of the boundingbox
	this.markerBBox = {x1:50,y1:50,x2:150,y2:150};

	this._symbolModifier = this.symbolModifier();
	this._symbolBaseGeometry = this.symbolBaseGeometry();
	this._symbolStatus = this.symbolStatus();
	this._symbolAffliationDimensionGeometry = this.symbolAffliationDimensionGeometry();
	this._symbolIcon = this.symbolIcon();
	var tmp = '';
		//WOOPS we had to lite space on top of the symbols...
		var Geometry = document.createElementNS(svgNS, "g");
		if(symbol.affiliationType){//If this is false we don't have an affiliationType and we won't get a symbol.
			Geometry.setAttribute("transform", "translate(0," + symbolOffset + ")");	
			Geometry.setAttribute("overflow", "visible");
			if(this.size >= 10)tmp += this._symbolModifier;
			if(this.fill||this.frame||(!this.fill&&!this.frame&&!this.icon))tmp += this._symbolBaseGeometry.geometry;
			tmp += this._symbolStatus;
			tmp += this._symbolAffliationDimensionGeometry;
			if(this.icon&&this.size>=10)tmp += this._symbolIcon;
			Geometry.appendChild(
				Geometry.ownerDocument.importNode(
					parseXML(
						'<g xmlns="'+svgNS+'">'+tmp+'</g>'
					), true
				)
			);
		}
		var svgSymbol = document.createElementNS(svgNS, "svg");
		//IE gets crazy over if you happen to set xmlns twice, but other browsers wants it, this is a dirty workaround 
		if(_MilSymbol.userAgentIE){svgSymbol.setAttribute("xmlns", svgNS)};
		svgSymbol.setAttribute("version", 1.2);
		svgSymbol.setAttribute("baseProfile", "tiny");
		svgSymbol.setAttribute("width", this.size*3);
		svgSymbol.setAttribute("height", this.size*3.4);
		svgSymbol.setAttribute("viewBox", "0 0 300 340");
		svgSymbol.appendChild(Geometry);
		var xml = (new XMLSerializer()).serializeToString(svgSymbol);
		return {"object" : svgSymbol, "textXML" : xml};
	};

//Makes a mapmarker with a lot of stuff around the symbol ################################
	this.symbolMarker = function(symbolObject){
//var start = window.performance.now()
		this._symbol = this.symbol();		
		var symbol = this._symbol;
		this._symbolColors = this.symbolColors();
		var symbolColors = this._symbolColors;
		var pixelMargin = 5;
		var symbolObject = symbolObject==undefined?this.symbolSvg(true).object:symbolObject.object;

		//Get the bounds for the base geometry.
		var symbolBBox = symbolBaseGeometry.BBox[symbol.baseGeometryType];
			
		//Calculates center of icon and the base marker size. 
		//Should we shift center for symbols where center is not in the middle of the octagon.
		var center = {x:parseFloat(this.size-(this.markerBBox.x1-pixelMargin)*this.size/100),y:parseFloat(parseFloat(this.size)-((this.markerBBox.y1-pixelMargin)*this.size/100))};
		var markerSize = {x:(this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100, y:(this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100};
		var offsetx = 0;
		var hqCenterDiff = {x:0,y:0};
		//If it is a HQ we will have to move the center and make the canvas bigger =======
		if(symbol.hqETC.headquarters){
			hqCenterDiff = {x: center.x - (pixelMargin*this.size/100), y: center.y - (markerSize.y-pixelMargin*this.size/100)};
			center = {x: pixelMargin*this.size/100, y: markerSize.y-pixelMargin*this.size/100};
			//markerSize.y = center.y
		}
		//Add text =======================================================================
		var textFields = (this.quantity||this.reinforcedReduced||this.staffComments||this.additionalInformation||this.evaluationRating||this.combatEffectiveness||this.signatureEquipment||this.higherFormation||this.hostile||this.iffSif||this.sigint||this.uniqueDesignation||this.type||this.dtg||this.altitudeDepth||this.location||this.speed||this.specialHeadquarters||this.platformType||this.equipmentTeardownTime||this.commonIdentifier||this.auxiliaryEquipmentIndicator);
		if(this.infoFields&&textFields){	
			if(true){
				var textInformation = '';

				if(this.specialHeadquarters)textInformation += '<text x="100" y="110" text-anchor="middle">' + this.specialHeadquarters + '</text>';

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
				w+=20;
				return w;
			}	
				
			//Add space on left side
			offsetx =  Math.max(	
				strWidth(textInformationStrings.L1), 
				strWidth(textInformationStrings.L2),
				strWidth(textInformationStrings.L3),
				strWidth(textInformationStrings.L4),
				strWidth(textInformationStrings.L5));

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
				
				if(textInformationStrings.L1)textInformation += '<text x="' + (symbolBBox.x-20) + '" y="50" text-anchor="end">' + textInformationStrings.L1 + '</text>';
				if(textInformationStrings.L2)textInformation += '<text x="' + (symbolBBox.x-20) + '" y="80" text-anchor="end">' + textInformationStrings.L2 +'</text>';
				if(textInformationStrings.L3)textInformation += '<text x="' + (symbolBBox.x-20) + '" y="110" text-anchor="end">' + textInformationStrings.L3 + '</text>';
				if(textInformationStrings.L4)textInformation += '<text x="' + (symbolBBox.x-20) + '" y="140" text-anchor="end">' + textInformationStrings.L4 + '</text>';
				if(textInformationStrings.L5)textInformation += '<text x="' + (symbolBBox.x-20) + '" y="170" text-anchor="end">' + textInformationStrings.L5 + '</text>';
	
				if(textInformationStrings.R1)textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="50">' + textInformationStrings.R1 + '</text>';	
				if(textInformationStrings.R2)textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="80">' + textInformationStrings.R2 + '</text>';	
				if(textInformationStrings.R3)textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="110">' + textInformationStrings.R3 + '</text>';
				if(textInformationStrings.R4)textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="140">' + textInformationStrings.R4 + '</text>';	
				if(textInformationStrings.R5)textInformation += '<text x="' + (symbolBBox.x + symbolBBox.width + extraPadding + 20) + '" y="170">' + textInformationStrings.R5 + '</text>';				
		}
		
		var Text = document.createElementNS(svgNS, "g");
		Text.setAttribute('id', 'Texts');
		Text.setAttribute("fill", symbolColors.black[symbol.affiliationType]);
		Text.setAttribute("stroke", "none");		
		Text.setAttribute("font-family", "Arial");
		Text.setAttribute("font-weight", "bold");
		Text.setAttribute("font-size", "30");
		Text.setAttribute("transform", "scale(" + this.size/100 + ") translate(0," + symbolOffset + ")");
		Text.appendChild(
			Text.ownerDocument.importNode(
				parseXML(
					'<g xmlns="'+svgNS+'">'  
					+ textInformation										
					+'</g>'
				), true)
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
				directionIndicator += '<path  d="M' + (symbolBBox.x+symbolBBox.width/2) + ',' + (symbolBBox.y+symbolBBox.height) +  'l0,' + 100 + '" />';
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
				
			directionIndicator += '<g transform="rotate(' + this.direction +' 100 ' + groundDirectionOffset + ' )"><path  d="M100,' + groundDirectionOffset + ' l0,-' + (100-15) + ' -5,0 5,-10 5,10 -5,0" /></g>';
			var Direction = document.createElementNS(svgNS, "g");
			Direction.setAttribute('id', 'DirectionArrow');		
			Direction.setAttribute("fill", symbolColors.black[symbol.affiliationType]);
			Direction.setAttribute("stroke", symbolColors.black[symbol.affiliationType]);	
			Direction.setAttribute("stroke-width", "3");
			Direction.setAttribute("transform", "scale(" + this.size/100 + ") translate(0," + symbolOffset + ")");
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
		if(this.size >= 10&&textFields)Geometry.appendChild(Text);
		if(this.direction && this.direction!='')Geometry.appendChild(Direction); 
	}
	var svgSymbol = document.createElementNS(svgNS, "svg");
	//IE gets crazy over if you happen to set xmlns twice, but other browsers wants it, this is a dirty workaround 
	if(_MilSymbol.userAgentIE){svgSymbol.setAttribute("xmlns", svgNS)};
	svgSymbol.setAttribute("version", 1.2);
	svgSymbol.setAttribute("baseProfile", "tiny");
	svgSymbol.setAttribute("width", (this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100);
	svgSymbol.setAttribute("height", (this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100);
	svgSymbol.setAttribute("viewBox", (this.markerBBox.x1-pixelMargin)*this.size/100 + " " + (this.markerBBox.y1+symbolOffset-pixelMargin)*this.size/100 + " " + (this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100 + " " + (this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100);
	svgSymbol.appendChild(Geometry);
	
	var xml = (new XMLSerializer()).serializeToString(svgSymbol);
	return {"object" : svgSymbol, "textXML" : xml, "x" : center.x , "y": center.y, "xOctagon": (center.x+hqCenterDiff.x), "yOctagon": (center.y+hqCenterDiff.y), "width":(this.markerBBox.x2-this.markerBBox.x1+2*pixelMargin)*this.size/100, "height":(this.markerBBox.y2-this.markerBBox.y1+2*pixelMargin)*this.size/100};
}	
}

//END ####################################################################################
