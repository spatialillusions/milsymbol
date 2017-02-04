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

Describe MS.symbol here

## MS.symbol(SIDC,*{Options}*)

Add information and how to create a symbol and options that can be provided.

```
var symbol = new MS.symbol('SFG-UCI----D',{size:30,fill:false};
```

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
