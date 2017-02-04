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


# Developing milsymbol

Describe MS global here, and how to do extensions and other cool things
