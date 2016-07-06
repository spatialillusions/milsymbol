milsymbol
=========

milsymbol is a small library in pure javascript that creates military unit symbols according to to MIL-STD-2525 and STANAG APP6. 

Example of unit symbol generated with milsymbol:

![Figure 13](docs/samples/figure13.png?raw=true)

```javascript
new MS.symbol("sfgpewrh--mt", {
	size: 35,
	quantity: 200,
	staffComments: "for reinforcements".toUpperCase(),
	additionalInformation: "added support for JJ".toUpperCase(),
	direction: (750*360/6400),
	type: "machine gun".toUpperCase(),
	dtg: "30140000ZSEP97",
	location: "0900000.0E570306.0N"
}).getMarker().XML;
```

Compared to reference figure from MIL-STD-2525C:


![Figure 13](docs/figure13.png?raw=true)


You can find all documentaion and examples at:
http://spatialillusions.com/milsymbol/


Setup/Usage
-----------
You can get milsymbol using npm:

`npm install milsymbol`

Then to get a SVG symbol in a client or server you can simply do:

`new MS.symbol("SFG-UCI----D").getMarker().XML`

milsymbol supports a lot of different options:
 - Both letter and number based SIDC
 - NATO or US standards (MIL-STD-2525C, MIL-STD-2525D, STANAG APP6-(B), STANAG APP6-(D) Draft)
 - Filled/Unfilled symbols
 - Framed/Unframed symbols
 - Text fields
 - Movement indicators
 - SVG/Canvas output (using SVG or Canvas draw instructions)
 - and much more... 
 
For detaild descriptions of what is possible with milsymbol, see the API documentation.

milsymbol can be integrated with most common javascript libraries, such as:
 - Open Layers 3
 - Cesium
 - LeafLet
 - d3
 - Angular
 - and many more...

Technology
----------

milsymbol uses pure javascript to create SVG, Scalable Vector Graphics, and also has built in for native Canvas support. 

 - No external dependencies, just one javascript file required
 - Super fast, can create 1000 symbols in less than 50milliseconds (SVG output)
 
The symbols are created using building blocks defined in the code and no images or fonts are used, this makes it possible to modify almost every aspect of the symbols, such as fill, frame, color, size, stroke width and easily switch between APP6 and 2525 symbology.

To see what is possible with milsymbol use the unit test documents in the docs folder that lists all tabels and figures from the different standards using MilSymbol. (The documents uses milsymbol to render every image that you see, look into the code if you want to see how it is done.)

milsymbol can easily be extended with new functionality and examples of this can be found at: https://github.com/spatialillusions/milsymbol-extensions

Contact
-------
milsymbol is created and maintained by Måns Beckman
 - http://www.spatialillusions.com to see more examples of what milsymbol can be used for
 - https://twitter.com/spatialillusion for milsymbol and mapping/military related information 

Licensing
---------

MIT, See License.txt for details
