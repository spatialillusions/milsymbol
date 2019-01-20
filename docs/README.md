# Milsymbol Documentation

## Installning

You can download the latest release directly from GitHub if you want to:

https://github.com/spatialillusions/milsymbol/releases/latest

You can also get milsymbol using npm:

```
npm install milsymbol --save
```

AMD, CommonJS, and vanilla environments are supported. The module is always
named 'milsymbol' and in vanilla, a 'ms' global is exported:

```html
<script src="dist/milsymbol.js"></script>
<script>
  var symbol = new ms.Symbol('SFG-UCI----D',{size:30});
</script>
```

In a framework like [Dojo](https://dojotoolkit.org) you can load milsymbol like
this:

```html
<html>
  <body>
    <script src="dojo/dojo.js" data-dojo-config="async: true"></script>
    <script src="app/milsymbol.js"></script>
    <script>
      require([
        "milsymbol"
      ], function(ms){
        var symbol = new ms.Symbol('SFG-UCI----D',{size:30});
      });
    </script>
  </body>
</html>
```

This way of loading milsymbol makes it possible to use Dojo from an external
source, like js.arcgis.com.

If you only are using it with local sources or if you are uploading it to ArcGIS
Web AppBuilder, you can rebuild it by running `npm run build-amd`, and now you
can `require(["app/milsymbol"].....` if _milsymbol.js_ is placed in your app
folder. See more about building under [Building milsymbol](#building-milsymbol).

# Creating military unit symbols

Each symbol created with milsymbol is its own object and the properties of the
object can be updated or added after that the symbol object is created. The
symbol object also has methods to provide the symbol in different formats, and
to provide information about the created symbol.

All functionality in milsymbol is normally found under the `ms` namespace, but
if you have imported milsymbol to another variable, you will have to use that
instead of `ms`.

## ms.Symbol(_arg1, arg2 ... argN_)

Initiates a new symbol object, where arg1-argN are options objects. If you
provide an argument that isn't an object we will assume that it is the SIDC for
the symbol.

Even if options can be provided or updated after the symbol object is created,
the performance will be better if you provide them directly when you create the
symbol, or to provide no arguments at all, this is because every time you update
some options the symbol will automatically be updated.

```javascript
var symbol = new ms.Symbol("SFG-UCI----D", { size: 30 });
```

Once you have initiated your symbol, you can use different methods to request a
rendering of the symbol, or get information about the symbol. It is also
possible to chain methods directly to the initiation:

```javascript
var symbol = new ms.Symbol("SFG-UCI----D", { size: 30 }).asSVG();
```

**General options**

It is possible to add any custom options to your options object as well as the
options listed below.

| Option | Type   | Default | Description             |
| ------ | ------ | ------- | ----------------------- |
| sidc   | String | ''      | The SIDC for the symbol |

**Modifier options**

The following options are modifiers, text or graphical, that are defined in the
standard documents.

| Option                | Type   | Default   | Description                                                                                                                                                                                                                                   |
| --------------------- | ------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| additionalInformation | String | ''        | A text modifier for units, equipment, and installations; content is implementation specific. <br/>**Field H** _20 Characters_                                                                                                                 |
| altitudeDepth         | String | ''        | A text modifier for units, equipment, and installations, that displays either altitude flight level, depth for submerged objects; or height of equipment or structures on the ground. <br/>**Field X** _14 Characters_                        |
| combatEffectiveness   | String | ''        | A text modifier for units and installations that indicates unit effectiveness or installation capability. <br/>**Field K** _5 Characters_                                                                                                     |
| commonIdentifier      | String | ''        | Example: "Hawk" for Hawk SAM system. <br/>**Field AF**                                                                                                                                                                                        |
| country               | String | ''        | Three letter representing the country. <br/>**Field AC**                                                                                                                                                                                      |
| direction             | Number | undefined | At the moment all directions should be in degrees and not in mils. Set to an undefined to remove the direction arrow. <br/>**Field Q**                                                                                                        |
| dtg                   | String | ''        | A text modifier for units, equipment, and installations that displays DTG format: DDHHMMSSZMONYYYY or "O/O" for on order. <br/>**Field W** _16 Characters_                                                                                    |
| engagementBar         | String | ''        | Engagement bar text, shall be arranged as follows: A:BBB-CC. <br/>**Field AO**                                                                                                                                                                |
| engagementType        | String | ''        | Engagement bar type, should be one of the following "TARGET", "NON-TARGET", or "EXPIRED"                                                                                                                                                      |
| equipmentTeardownTime | String | ''        | Equipment teardown time in minutes. <br/>**Field AE**                                                                                                                                                                                         |
| evaluationRating      | String | ''        | A text modifier for units, equipment, and installations that consists of a one-letter reliability rating and a one-number credibility rating.<br/>**Field J** _2 Characters_                                                                  |
| guardedUnit           | String | ''        | During ballistic missile defence, some tracks are designated as guarded by a particular unit. <br/>**Field AQ** _2 Characters_                                                                                                                |
| headquartersElement   | String | ''        | Example: Tactical Operations Centre put as 'TOC'. <br/>**Field AH**                                                                                                                                                                           |
| higherFormation       | String | ''        | A text modifier for units that indicates number or title of higher echelon command (corps are designated by Roman numerals). <br/>**Field M** _21 Characters_                                                                                 |
| hostile               | String | ''        | A text modifier for equipment; letters "ENY" denote hostile symbols. <br/>**Field N** _3 Characters_                                                                                                                                          |
| iffSif                | String | ''        | A text modifier displaying IFF/SIF Identification modes and codes. <br/>**Field P** _5 Characters_                                                                                                                                            |
| location              | String | ''        | A text modifier for units, equipment, and installations that displays a symbol's location in degrees, minutes, and seconds (or in UTM or other applicable display format). <br/>**Field Y** _19 Characters_                                   |
| platformType          | String | ''        | "ELNOT" or "CENOT" <br/>**Field AD**                                                                                                                                                                                                          |
| quantity              | String | ''        | A text modifier in an equipment symbol that identifies the number of items present. <br/>**Field C** or **Field R** _9 Characters_                                                                                                            |
| reinforcedReduced     | String | ''        | A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced, (±) reinforced and reduced. <br/>**Field F** _3 Characters_                                                                                               |
| sigint                | String | ''        | M = Mobile, S = Static, or U = Uncertain. <br/>**Field R2**                                                                                                                                                                                   |
| specialDesignator     | String | ''        | Special track designators, such as Non-Real Time (NRT) and Tactically Significant (SIG) tracks, are denoted here.<br/>**Field AR** _3 Characters_                                                                                             |
| signatureEquipment    | String | ''        | A text modifier for hostile equipment; "!" indicates detectable electronic signatures. <br/>**Field L** _1 Character_                                                                                                                         |
| specialHeadquarters   | String | ''        | A text modifier for units; indicator is contained inside the frame; contains the name of the special C2 Headquarters. <br/>**Field AA** _9 Characters_                                                                                        |
| speed                 | String | ''        | A text modifier for units and equipment that displays velocity as set forth in MIL-STD-6040. <br/>**Field Z** _8 Characters_                                                                                                                  |
| speedLeader           | Number | 0         | This is the length of the speed leader in pixels, this will be independet of the size of the symbol.                                                                                                                                          |
| staffComments         | String | ''        | A text modifier for units, equipment and installations; content is implementation specific. <br/>**Field G** _20 Characters_                                                                                                                  |
| targetNumber          | String | ''        | A six character text modifier used in Fire Support operations to uniquely designate targets in accordance with STANAG 2147, where characters 1 and 2 are alphabetic, and characters 3-6 are numeric: AANNNN. <br/>**Field AP** _6 Characters_ |
| type                  | String | ''        | A text modifier for equipment that indicates types of equipment. <br/>**Field V** _24 Characters_                                                                                                                                             |
| uniqueDesignation     | String | ''        | A text modifier for units, equipment, and installations that uniquely identifies a particular symbol or track number. Identifies acquisitions number when used with SIGINT symbology.<br/>**Field T** _21 Characters_                         |

**Style options**

The following options are style options that changes the look of the symbol in
different ways.

| Option               | Type                | Default                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alternateMedal       | Boolean             | false                           | MIL-STD-2525D lets you choose between MEDAL and alternate MEDAL icons for mine warefare symbols, the default in milsymbol is using MEDAL icons, but you can change this using setting this property to true.                                                                                                                                                                                                                                             |
| civilianColor        | Boolean             | true                            | 2525C specifics purple as an optional color for civilian symbols. Of corse we like color so we set this as default.                                                                                                                                                                                                                                                                                                                                      |
| colorMode            | ColorMode or String | 'Light'                         | This is the option for setting what Color object to use for the fill of the symbols. It can be set to a Color object, or a string representing the name of a registered Color object. You can use ms.ColorMode to create a new color mode, or ms.getColorMode to get an existing color mode. **Note that the string is not a single color, it is a name of a registred color mode**, by default "Light", "Medium", and "Dark" are registred color modes. |
| fill                 | Boolean             | true                            | Should your symbol be filled with color.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| fillOpacity          | Number              | 1                               | The opacity of the symbol fill color.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| fontfamily           | String              | 'Arial'                         | Changes the font familiy for all texts surrounding the icon.                                                                                                                                                                                                                                                                                                                                                                                             |
| frame                | Boolean             | true                            | Should your symbol have a frame. All symbols support to be unframed, not just the ones specified in 2525B.                                                                                                                                                                                                                                                                                                                                               |
| frameColor           | ColorMode           | false                           | Changes the color of the frame of the symbol                                                                                                                                                                                                                                                                                                                                                                                                             |
| hqStaffLength        | Number              | undefined                       | Overrides the global Headquarters staf length                                                                                                                                                                                                                                                                                                                                                                                                            |
| icon                 | Boolean             | true                            | Should your symbol have an icon.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| infoBackground       | ColorMode or String | ""                              | Changes the color of the information background                                                                                                                                                                                                                                                                                                                                                                                                          |
| infoBackgroundFrame  | ColorMode or String | ""                              | Changes the color of the frame of the information background                                                                                                                                                                                                                                                                                                                                                                                             |
| iconColor            | ColorMode           | false                           | Changes the color of the icon of the symbol                                                                                                                                                                                                                                                                                                                                                                                                              |
| infoColor            | ColorMode or String | Same color as the frame outline | This will be used for texts in the text fields surrounding the symbol. It is a ColorMode, or a string color that is either a keyword or a numerical RGB specification.                                                                                                                                                                                                                                                                                   |
| infoFields           | Boolean             | true                            | If you have set some text fields and direction but don't want them to be displayed you can set infoFields to false. This makes it possible to initiate the object with all information you got but not display it.                                                                                                                                                                                                                                       |
| infoSize             | Number              | 40                              | The size of the text fields surrounding the symbol. This is relative to the size of the symbol, so you can consider 40 to be 40% of the default size that is 100.                                                                                                                                                                                                                                                                                        |
| monoColor            | String              | ''                              | A color that is either a keyword or a numerical RGB specification. If you set this the symbol will be monochrome and unfilled using the color provided.                                                                                                                                                                                                                                                                                                  |
| outlineColor         | ColorMode or String | rgb(239, 239, 239)              | A color that is either a keyword or a numerical RGB specification. The color of the outline of the symbol, if any. Defaults to an off-white color.                                                                                                                                                                                                                                                                                                       |
| outlineWidth         | Number              | 0                               | The width of the outline of the symbol, if any.                                                                                                                                                                                                                                                                                                                                                                                                          |
| padding              | Number              | 0                               | Milsymbol usually tries to fit the bounds for the symbol as snugg as possible, but in some cases you want to add some extra padding around your symbol, then simply set this option to any number.                                                                                                                                                                                                                                                       |
| size                 | Number              | 100                             | The L value for your symbol, where the L value is the width of the icon octagon.                                                                                                                                                                                                                                                                                                                                                                         |
| simpleStatusModifier | Boolean             | false                           | Should the symbol use simplified status modifiers, this is default for unfilled symbols and can be forced for filled symbols using this option.                                                                                                                                                                                                                                                                                                          |
| standard             | String              | ''                              | This is a way to override the default standard set for milsymbol. You can set this variable to "2525" or "APP6" dependeing on what standard you prefer.                                                                                                                                                                                                                                                                                                  |
| square               | Boolean             | false                           | Should the symbol be square with the insertion point in the center.                                                                                                                                                                                                                                                                                                                                                                                      |
| strokeWidth          | Number              | 3                               | The stroke width of the symbol.                                                                                                                                                                                                                                                                                                                                                                                                                          |

**Returns**

```javascript
Object this
```

---

### asCanvas(_factor_)

Returns the symbol as a Canvas Element. It is possible to provide a resolution
factor if a symbol symbol with a higher resolution is wanted, this won't effect
numbers reported by `getSize()`, `getAnchor()` or `getOctagonAnchor()`.

**Returns**

```javascript
Canvas Element
```

---

### asDOM()

Returns the symbol as a SVG DOM Element.

**Returns**

```javascript
DOM Element
```

---

### asSVG()

Returns the symbol as a SVG string.

**Returns**

```javascript
String;
```

---

### getAnchor()

Getting the anchor point where symbol should be inserted measured from the top
left corner of the symbol.

**Returns**

```javascript
Object {x:Number, y:Number}
```

---

### getColors()

Gets the colors used for this symbol.

**Returns**

```javascript
Object {
  black: String, // Black parts of the symbol.
  fillColor: String, // Symbol fill color.
  frameColor: String, // Symbol frame color.
  iconColor: String, // Icon color.
  iconFillColor: String, // Icon fill color.
  none: String, // Transparent parts of the symbol.
  white: String // White parts of the symbol.
}
```

---

### getMetadata()

Gets all metadata that are computed for the SIDC of this symbol.

**Returns**

```javascript
Object {
  activity: Boolean, // Is it an Activity
  affiliation: String, // Affiliation it is shown as (Friend/Hostile...)
  baseAffilation: String, // Affiliation it belongs to (Friend/Hostile...)
  baseDimension: String, // Dimension it belongs to (Air/Ground...)
  baseGeometry: Object, // Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)
  civilian: Boolean, // Is it Civilian
  condition: String, // What condition is it in
  context: String, // Context of the symbol (Reality/Exercise...)
  dimension: String, // Dimension it is shown as (Air/Ground...) for example Ground Equipment is shown with the same shape as Sea.
  dimensionUnknown: Boolean, // Is the dimension unknown
  echelon: String, //What echelon (Platoon/Company...)
  faker: Boolean, // Is it a Faker
  fenintDummy: Boolean, // Is it a feint/dummy
  fill: Boolean, // Standard says it should be filled
  frame: Boolean, // Standard says it should be framed
  functionid: String, // Part of SIDC referring to the icon.
  headquarters: Boolean, // Is it a Headquarters
  installation: Boolean, // Is it an Instalation
  joker: Boolean, // Is it a Joker
  mobility: String, // What mobility (Tracked/Sled...)
  notpresent: String, // Is it Anticipated or Pending
  numberSIDC: Boolean, // Is the SIDC number based
  space: Boolean, // Is it in Space
  taskForce: Boolean // Is it a task force
}
```

---

### getOptions(_includeStyle_)

Get the options that is set on the symbol. If includeStyle is set to `false`
style information will not be included in the returned options, if it is set to
`true` or left out style information will be included in the returned options.

**Returns**

```javascript
Object;
```

---

### getOctagonAnchor()

Getting the center of the symbol octagon measured from the top left corner of
the symbol.

**Returns**

```javascript
Object {x:Number, y:Number}
```

---

### getSize()

Gets the size of the current symbol.

**Returns**

```javascript
Object {width:Number, height:Number}
```

---

### getStyle()

Gets the style part of the symbol options of the current symbol.

**Returns**

```javascript
Object;
```

---

### isValid(_extended_)

If extended is set to `true` it will return an object with the validity of
different parts of the symbol code, if extended is omitted or set to false it
will return a boolean representing if it was possible to find an icon for the
provided SIDC or not. In the future this might validate other parameters as
well.

**Returns**

```javascript
Boolean or Object
```

---

### setOptions(_arg1, arg2 ... argN_)

This sets the options for a symbol and updates the symbol, the arguments are
options Objects in the same way as when you create a new symbol, where an
updated SIDC can be included in the options object (`sidc: String`). If
setOptions is called without an options object, the symbol is simply updated.

**Returns**

```javascript
this;
```

---

### toDataURL()

Returns the SVG of a symbol as a base 64 encoded string, this can be useful in
some cases where you want to assign the output as a source for an image element.
If you want a PNG as a base 64 encoded string, simply call
`.asCanvas().toDataURL()`.

**Returns**

```javascript
String;
```

---

# Developing milsymbol

This describes more advanced development with milsymbol, this includes adding
your own symbols, overwriting existing icons and in other ways modifying the
standard output from milsymbol.

The base concept for milsymbol has been that everything that is used internally
to build up the symbols should be possible to modify, this makes it possible to
do everything from changing colors to adding completely new parts to the
generated symbols.

All the following code can be used to inject functionality into milsymbol
externally, but you can also choose to build your own version of milsymbol.

## Building milsymbol

Milsymbol is built using [webpack](https://webpack.js.org), and if you installed
milsymbol npm everything you need to build milsymbol should have been installed
as well since they are listed as devDependencies in package.json, if you don't
have npm installed, you will have to install it to build milsymbol.

The structure of the code is that the webpack config (_webpack.config.js_) is
located in the root directory, and the entry point (_index.js_) and all other
source code is under `/src`.

Once you have changed the parts of the code that you want to change, you simply
run:

```
npm run build
```

Webpack will then build milsymbol and minify the output into `/dist`.

It is also possible to build an un-minified version of milsymbol by running:

```
npm run build-dev
```

And finally tests are located in the `/test` and you can run the tests by
running:

```
npm run test
```

## Draw instruction

The symbols in milsymbol is drawn using JSON draw instructions
`drawInstruction`, these are then converted into Canvas draw instructions, or
SVG output.

If you are creating your own JSON geometries for usage in milsymbol, they should
have the origo at 100,100, and the hight and width of the icon octagon is 100.
There is a sample SVG representing the symbol octagon available in the `dev
folder.

The following different kinds of draw instructions can be used in milsymbol:

```javascript
Object {
  type: 'path',
  d: String, // SVG path data
  fill: String, // Fill color  or set to false if none
  fillopacity: Number, // Fill opacity {Optional}
  stroke: String, // Stroke color  or set to false if none
  strokedasharray: String, // {Optional}
  strokewidth: Number, // Width of the stroke {Optional}
}
```

```javascript
Object {
  type: 'circle',
  cx: Number, // Center x
  cy: Number, // Center y
  r: Number, // Radius
  fill: String, // Fill color  or set to false if none
  fillopacity: Number, // Fill opacity {Optional}
  stroke: String, // Stroke color  or set to false if none
  strokedasharray: String, // {Optional}
  strokewidth: Number, // Width of the stroke {Optional}
}
```

```javascript
Object {
  type: 'text',
  x: Number,
  y: Number,
  textanchor: String,
  fontsize: Number,
  fontfamily: String,
  fontweight: String,
  fill: String, // Fill color or set to false if none
  fillopacity: Number, // Fill opacity {Optional}
  stroke: String, // Stroke color  or set to false if none
  strokedasharray: String, // {Optional}
  strokewidth: Number, // Width of the stroke {Optional}
}
```

```javascript
Object {
  type: 'translate',
  x: Number, // Move x
  y: Number, // Move y
  draw: drawInstruction
}
```

```javascript
Object {
  type: 'rotate',
  degree: Number, // Rotation angle
  x: Number, // Rotate center x
  y: Number, // Rotate center y
  draw: drawInstruction
}
```

```javascript
Object {
  type: 'scale',
  factor: Number, // Factor to scale
  draw: drawInstruction
}
```

```javascript
Object {
  type: 'svg',
  svg: String // Full SVG XML
}
```

Several draw instructions can be grouped together in an Array to for a more
complex part of a symbol, this is also a `drawInstruction` and the code will
handle both Objects and Arrays.

```javascript
Array [
  drawInstruction,
  drawInstruction,
  drawInstruction,
  drawInstruction,
  ...
]
```

---

## ms.BBox({box})

```javascript
Object {
  x1: Number, // Left coordinate {Optional}
  y1: Number, // Top coordinate {Optional}
  x2: Number, // Right coordinate {Optional}
  y2: Number, // Bottom coordinate {Optional}
}
```

Creates a bounding box Object. It is initiated with an optional object. Values
that are omitted will default to 100, and if an object isn't provided all values
will default to 100.

**Returns**

```javascript
Object {
  x1: Number, // Left coordinate
  y1: Number, // Top coordinate
  x2: Number, // Right coordinate
  y2: Number, // Bottom coordinate
  width: Function, // Returns box width
  height: Function, // Returns box height
  merge(box): Function // Merges one box with another and returns the original box
}
```

## ms.ColorMode(civilian, friend, hostile, neutral, unknown)

```javascript
civilian: String,
friend: String,
hostile: String,
neutral: String,
unknown: String,
```

Creates a ColorMode Object with colors used for different affiliations.

**Returns**

```javascript
Object {
  Civilian: String,
  Friend: String,
  Hostile: String,
  Neutral: String,
  Unknown: String
}
```

---

## ms.addIconParts(iconFunction)

```javascript
iconFunction: Function;
```

Adds an icon function to milsymbol. All icons on the symbols in milsymbol is
built by different icon parts, it can be one for Infantry and one for Armor, add
them together and you will have the icon for Armored Infantry. By reusing icon
parts as much as possible the the size of milsymbol is reduced.

If you want to override built in icon parts, or add new to use with custom SIDC,
you can do this by adding a icon function.

Example:

```javascript
ms.addIconParts(function(
  iconParts,
  metadata,
  colors,
  std2525,
  monoColor,
  alternateMedal
) {
  /*
    iconParts: Object - The existing object of icon parts
    metadata: Object - propterties object
    colors: Object - color object
    std2525: Boolean - Is it 2525 then true, otherwise false
    alternateMedal: Boolean - true/false for sea mine stuff
    */

  // Adding a custom part for tactical graphics
  iconParts["TP.HARBOR"] = {
    type: "path",
    fill: false,
    d: "M 80,140 50,60 150,60 120,140"
  };

  /* 
    Since we are modifying directly to the existing object of icon parts, 
    we don't have to return anything.
    */
});
```

**Returns**

```javascript
Object ms
```

## ms.addLabelOverrides(labelFunction, type)

```javascript
labelFunction: Function,
type: String // 'letter' or 'number' depending of the type of the SIDC
```

Adds label overrides to milsymbol. If you have some symbols that you want to
have labels that differ from how ordinary symbols are labeled, such as tactical
graphics, you can add label override functions that places the labels
differently.

Example:

```javascript
ms.addLabelOverrides(
  function tacticalPoints(sidc) {
    /*
    sidc: Object - The existing object of label overrides
    */

    /* 
    Creates an override for SIDC 'G-G-GPPK--', each option 
    listed will be applied to the text drawInstruction
    */
    sidc["G-G-GPPK--"] = {
      additionalInformation: {
        stroke: false,
        textanchor: "middle",
        x: 100,
        y: -70,
        fontsize: 40
      },
      hostile: {
        stroke: false,
        textanchor: "start",
        x: 150,
        y: 45,
        fontsize: 40
      },
      uniqueDesignation: {
        stroke: false,
        textanchor: "start",
        x: 150,
        y: 0,
        fontsize: 80
      },
      dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
      dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
    };

    /* 
    Since we are modifying directly to the existing object of overrides, 
    we don't have to return anything.
    */
  },
  "letter" //Setting letter as SIDC type
);
```

**Returns**

```javascript
Object ms
```

## ms.addSIDCicons(sidcFunction, type)

```javascript
sidcFunction: Function,
type: String // 'letter' or 'number' depending of the type of the SIDC
```

Adds a function for creating icons representing different SIDCs. It is possible
to add custom SIDC, or to modify existing SIDC by adding a custom SIDC function.

Example:

```javascript
ms.addSIDCicons(
  function tacticalPoints(sidc, bbox, icnParts, std2525) {
    /*
    sidc: Object - The existing object of SIDC 
    bbox: Object - The existing object of Bounding Boxes for SIDC
    iconParts: Object - The existing object of icon parts
    std2525: Boolean - Is it 2525 then true, otherwise false
    */

    // Creating a new SIDC
    sidc["G-T-D-----"] = icn["TP.DESTROY"];
    bbox["G-T-D-----"] = { x1: 0, x2: 200, y1: 40, y2: 160 };

    // If we don't provide a bounding box, it will be set to the bounds of the icon octagon
    sidc["G-T-I-----"] = icn["TP.INTERDICT"];

    /* 
    Since we are modifying directly to the existing object of SIDCs, 
    we don't have to return anything.
    */
  },
  "letter" //Setting letter as SIDC type
);
```

**Returns**

```javascript
Object ms
```

## ms.addSymbolPart(part)

```javascript
part: function
```

Adds a new symbol function to milsymbol. A symbol function is a function that
returns an Object with two drawInstruction and one bounding box, like this:

```javascript
Object {
  pre: drawInstruction, // This is to be drawn before anything else
  post: drawInstruction, // This is to be drawn after anything else
  bbox: bbox // The bounding box of the added drawInstructions
}
```

By inserting a pre and a post drawInstruction, we are able to to draw parts of
the symbol that requires information, such as bounding boxes, previously drawn,
but to draw them before the other parts are drawn. It's quite clever, trust me.

**Returns**

```javascript
Object ms
```

## ms.getColorMode(mode)

```javascript
mode: String; // Name of a color mode registred with setColorMode
```

Gets a color mode that has been registred with `setColorMode`. When milsymbol is
initiated the following color modes are registred automatically:

| Color mode name | Description                                       |
| --------------- | ------------------------------------------------- |
| Light           | Light fill colors.                                |
| Medium          | Medium fill colors.                               |
| Dark            | Dark fill colors.                                 |
| FrameColor      | Frame colors for unfilled symbols.                |
| IconColor       | Icon colors for unfilled and unframed symbols.    |
| Black           | This is all black.                                |
| White           | This is all white.                                |
| OffWhite        | This is off white, used for white parts of icons. |
| None            | This is no color, used to turn colors off.        |

**Returns**

```javascript
Object {
  Civilian: String,
  Friend: String,
  Hostile: String,
  Neutral: String,
  Unknown: String
}
```

## ms.getDashArrays()

Gets the diffrent dash arrays used for dashed lines.

**Returns**

```javascript
Object {
  pending: String, // The value for the stroke-dasharray used for symbols with a pending status.
  anticipated: String, // The value for the stroke-dasharray used for symbols with a anticipated status.
  feintDummy: String // The value for the stroke-dasharray used for the feint/dummy modifier.
}
```

## ms.getHqStaffLength()

Gets the length of the HQ staf used for HQ symbols.

**Returns**

```javascript
Number;
```

## ms.getSymbolParts()

This gets all symbol functions that has been inserted by `ms.addSymbolPart`.

**Returns**

```javascript
Array [
  symbolFunction,
  symbolFunction,
  symbolFunction,
  ...
]
```

## ms.getVersion()

Gets the version of milsymbol.

**Returns**

```javascript
String;
```

## ms.outline(drawInstruction, outline, stroke, color)

```javascript
drawInstruction: drawInstruction,
outline: Number,
stroke: Number,
color: String
```

Takes the drawInstruction in the input and modifies them so that they only are
stroked.

Outline is the outline width, stroke is the original stroke width, and color is
the color the outline should have.

**Returns**

```javascript
Array or Object
```

## ms.setColorMode(name, colormode)

```javascript
name: String,
colormode: ColorMode
```

Register a ColorMode with a name or override an existing ColorMode.

**Returns**

```javascript
Object ColorMode
```

## ms.setDashArrays(pending, anticipated, feintDummy)

```javascript
pending: String, // The value for the stroke-dasharray used for symbols with a pending status.
anticipated: String, // The value for the stroke-dasharray used for symbols with a anticipated status.
feintDummy: String // The value for the stroke-dasharray used for the feint/dummy modifier.
```

Sets the dash arrays used for dashed lines.

Example:

```javascript
var dashObj = ms.setDashArrays("4,4", "8,12", "8,8");
```

**Returns**

```javascript
Object {
  pending: String,
  anticipated: String,
  feintDummy: String
}
```

## ms.setHqStaffLength(staff_length)

```javascript
staf_length: Number;
```

Sets the length of the HQ staf used for HQ symbols.

**Returns**

```javascript
Number;
```

## ms.setStandard(standard)

```javascript
standard: String; // '2525' or 'APP6'
```

This sets the preferred standard.

Sometimes APP6 and 2525 differ in symbols. Default we are using 2525 symbology,
but you can select to follow APP6 instead. (All possible SIDC will have some
kind of symbol no matter setting, so you will always get a symbol.)

**Returns**

```javascript
Boolean; // true if the standard was set, otherwise false
```

## ms.setSymbolParts(parts)

```javascript
parts: Array; // Array of symbolFunctions
```

Replaces the current symbol functions with an Array of symbol functions. This
can be used to modify the symbol functions that are built into milsymbol.

**Returns**

```javascript
Object ms
```
