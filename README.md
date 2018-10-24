# Milsymbol

[![Build Status](https://travis-ci.org/spatialillusions/milsymbol.svg?branch=master)](https://travis-ci.org/spatialillusions/milsymbol)

Milsymbol is a small library in pure javascript that creates military unit symbols according to MIL-STD-2525 and STANAG APP-6.

![Figure 13](https://github.com/spatialillusions/milsymbol/blob/master/docs/images/milsymbol.png?raw=true)

```javascript
new ms.Symbol("sfgpewrh--mt", {
  size: 35,
  quantity: 200,
  staffComments: "for reinforcements".toUpperCase(),
  additionalInformation: "added support for JJ".toUpperCase(),
  direction: (750 * 360) / 6400,
  type: "machine gun".toUpperCase(),
  dtg: "30140000ZSEP97",
  location: "0900000.0E570306.0N"
}).asSVG();
```

Compared to reference figure from MIL-STD-2525C:

![Figure 13](https://github.com/spatialillusions/milsymbol/blob/master/docs/images/figure13.png?raw=true)

## Milsymbol summary

Milsymbol supports a lot of different options:

- NATO or US standards (MIL-STD-2525C, MIL-STD-2525D, STANAG APP-6 B, STANAG APP-6 D)
- Filled/Unfilled symbols
- Framed/Unframed symbols
- Text fields
- Movement indicators
- SVG/Canvas output (using SVG or Canvas draw instructions)
- Outlines of symbols
- and much more...

For detailed descriptions of what is possible with milsymbol, see the API documentation under /docs.

Milsymbol can be integrated with most common javascript libraries, such as:

- Angular
- Cesium
- D3
- LeafLet
- Node.js
- Open Layers 3
- and also in ScriptEngine in Java, and QtJSEngine in C++...

Examples of some of the integrations are included with milsymbol.

You can find all documentaion and examples at:
http://spatialillusions.com/milsymbol/

## Getting started

You can download [milsymbol from GitHub](https://github.com/spatialillusions/milsymbol "milsymbol"), or install it using npm:
`npm install milsymbol`

To create your first symbol you use the symbol method to create a symbol object:

`ms.Symbol(SIDC,{options})`

To make a symbol for an infantry platoon the syntax would be:

`var sym = new ms.Symbol("SFG-UCI----D");`

And `sym` will now be a symbol object containing information about the size and draw instructions.

But you want something to put on your screen, and since milsymbol provides different ways to draw symbol, using SVG or Canvas, you will have to use the method that provides you with the output you want, so we use `asCanvas()` or `asSVG()` that returns a canvas element containing the symbol or a XML representation of the SVG:

`var canvasElement = sym.asCanvas();`

And if you don't want to make it step by step, you can chain it all together like this:

`var canvasElement = new ms.Symbol("SFG-UCI----D").asCanvas();`

![Infantry Platoon](https://github.com/spatialillusions/milsymbol/blob/master/docs/images/infantry-platoon.png?raw=true)

Options you provided to your symbol can change the size of the symbol, define if it should be filled/unfilled, add text information, and much more; you can read more about all properties and methods in the API documentation provided with milsymbol.

The options can be set when you create your symbol:

`var sym = new ms.Symbol("SFG-UCI----D",{size:35}).asCanvas();`

Or they can be updated at any time using `setOptions(options)`:

```
var sym = new ms.Symbol("SFG-UCI----D");
sym.setOptions({size:35});
var canvasElement = sym.asCanvas();
```

Your symbol object will also contain information about what offset that should be used to get a correct placement, this information can be retrieved with `getAnchor()` and it will return an object with the x and y offset, you will also have access to information about what size the created symbol have and detailed information about colors used.

The library is built on the idea that everything used inside milsymbol should be accessable outside milsymbol so that it is easy to extend the library with custom functionallity.

## Technology

Milsymbol uses pure javascript to create SVG, Scalable Vector Graphics, and also has built in for native Canvas support.

- No external dependencies, just one javascript file required
- Super fast, can create 1000 symbols in less than 25 milliseconds (SVG output)

The symbols are created using building blocks defined in the code and no images or fonts are used, this makes it possible to modify almost every aspect of the symbols, such as fill, frame, color, size, stroke width and easily switch between APP6 and 2525 symbology.

To see what is possible with milsymbol use the unit test documents in the docs folder that lists all tabels and figures from the different standards using MilSymbol. (The documents use milsymbol to render every image that you see, look into the code if you want to see how it is done.)

Milsymbol can easily be extended with new functionality and examples of this can be found at: https://github.com/spatialillusions/milsymbol-extensions

## Contact

Milsymbol is created and maintained by Måns Beckman

- http://www.spatialillusions.com to see more examples of what milsymbol can be used for
- https://twitter.com/spatialillusion for milsymbol and mapping/military related information

## Licensing

MIT, See [LICENSE](LICENSE) for details.

Even if I'm giving it away for free, I don't mind if you would like to send me some cool company giveaways or unit badges. Just send me an email and and I will provide you with my address.
