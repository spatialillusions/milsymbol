This is a start of the new documentation, it's not done yet, for current documentation, have a look in index.html

# Getting milsymbol into your enviroment

## Downloading milsymbol

You can download the latest release directly from GitHub if you want to:

https://github.com/spatialillusions/milsymbol/releases/latest

Include the JavaScript file and you are ready to go.

`<script src="dist/milsymbol.js"></script>`

The global object `MS` will now contain all milsymbols functionality.

## Get milsymbol using npm

You can get milsymbol using npm:

`npm install milsymbol --save`

Require the milsymbol module and you are ready to go.

`var MS = require('milsymbol');`

It is suggested that you require milsymbol to a variable named `MS` but other variable names should work as well.

## As a module in other frameworks

Webpack packages milsymbol as an UMD module when it is built, this will make it work with CommonJS, AMD and as global variable, so it is possible to simply use milsymbol in other frameworks, such as Dojo, as well.

```
<html>
  <body>
    <script src="dojo/dojo.js" data-dojo-config="async: true"></script>
    <script src="app/milsymbol.js"></script>
    <script>
      require([
        "milsymbol"
      ], function(MS){
        console.log(MS.version);
      });
    </script>
  </body>
</html>
```

This way of loading milsymbol makes it possible to use dojo from an external source, like js.arcgis.com. 

If you only are using it with local sources, you can set `umdNamedDefine:false` in webpack.config.js and rebuild it by running `npm run build`, and now you can `require(["app/milsymbol"].....`.

# Creating military unit symbols

Each symbol created with milsymbol is its own object and the properties of the object can be updated or added after that the symbol object is created. The symbol object also has methods to provide the symbol in different formats, and to provide information about the created symbol.

All functionality in milsymbol is normally found under the `MS` namespace, but if you have imported milsymbol to another variable, you will have to use that instead of `MS`.

## MS.symbol(SIDC,*{Options}*)

Initiates a new symbol object, you should always provide a SIDC for the symbol, and it is optional to provide other options. 

Even if options can be provided or updated after the symbol object is created, the performance will be better if you provide them directly when you create the symbol, because every time you update some options the symbol will automatically be updated. 

```
var symbol = new MS.symbol('SFG-UCI----D',{size:30});
```

**Modifier options**

The following options are modifiers, text or graphical, that are defined in the standard documents.

*Insert options table here*

**Style options**

The following options are style options that changes the look of the symbol in different ways.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| alternateMedal | Boolean | false | MIL-STD-2525D lets you choose between MEDAL and alternate MEDAL icons for mine warefare symbols, the default in milsymbol is using MEDAL icons, but you can change this using setting this property to true. | 
| civilianColor | Boolean	 | true | 2525C specifics purple as an optional color for civilian symbols. Of corse we like color so we set this as default. | 
| colorMode | Color object or String| 'Light' | This is the option for setting what Color object to use for the fill of the symbols. It can be set to a Color object, or a string representing the name of a registered Color objext. You can use MS.colorMode to create a new color mode, or MS.getColorMode to get an existing color mode. | 
| fill | Boolean | true | Should your symbol be filled with color. |
| fillOpacity | Number | 1 | The opacity of the symbol fill color. |
| frame | 	Boolean	 | true | Should your symbol have a frame. All symbols support to be unframed, not just the ones specified in 2525B. | 
| icon | Boolean | true | Should your symbol have an icon. | 
| infoColor | String | Same color as the frame outline | This will be used for texts in the text fields surrounding the symbol. It is a color that is either a keyword or a numerical RGB specification. | 
| infoFields | Boolean | true | If you have set some text fields and direction but don't want them to be displayed you can set infoFields to false. This makes it possible to initiate the object with all information you got but not display it. | 
| infoSize | Number | 40 | The size of the text fields surrounding the symbol.
| monoColor | String | '' | A color that is either a keyword or a numerical RGB specification. If you set this the symbol will be monochrome and unfilled using the color provided. | 
| outlineColor | String | rgb(239, 239, 239) | A color that is either a keyword or a numerical RGB specification. The color of the outline of the symbol, if any. Defaults to an off-white color. | 
| outlineWidth | 	Real | 0 | The width of the outline of the symbol, if any. | 
| size | Number | 100 | The L value for your symbol, where the L value is the width of the icon octagon. | 
| strokeWidth | Real | 3 | The stroke width of the symbol. | 

**Returns**

this

### asCanvas(*factor*)

Returns the symbol as a Canvas Element. It is possible to provide a resolution  factor if a symbol symbol with a higher resolution is wanted, this won't effect numbers reported by `getSize()`, `getAnchor()` or `getOctagonAnchor()`. 

**Returns**

Canvas Element


### asDOM()

Returns the symbol as a SVG DOM Element.

**Returns**

DOM Element


### asSVG()

Returns the symbol as a SVG string. 

**Returns**

String


### getAnchor()

Getting the anchor point where symbol should be inserted measured from the top left corner of the symbol.

**Returns**

Object {x, y}


### getColors()

**Returns**

Object


### getOctagonAnchor()

Getting the center of the symbol octagon measured from the top left corner of the symbol.

**Returns**

Object {x, y}


### getProperties()

**Returns**

Object


### getSize()

Gets the size of the current symbol.

**Returns**

Object {width, height}


### setOptions(*{Options}*)

This sets the options for a symbol and updates the symbol, the options are the same as when you create a new symbol, where an updated SIDC can be included in the options object. If setOptions is called without an options object, the symbol is simply updated.

**Returns**

this


### toDataURL()

Returns the SVG of a symbol as a base 64 encoded string, this can be useful in some cases where you want to assign the output as a source for an image element. If you want a PNG as a base 64 encoded string, simply call `.asCanvas().toDataURL()`.

**Returns**

String


# Developing milsymbol

Describe MS global here, and how to do extensions and other cool things. The API for MS global is under further development.
