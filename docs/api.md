# API

This is just initial listing of the milsymbol API. This is for the new markdown based documentation.

*The milsymbol API might be a bit confusing at first, this is because that it has been developed dynamically and when the development started I simply didn't know how things should be done. The API will probably be updated in a future version to make it follow more coding standards, but at the moment I have decided to keep it as it is so I won't break existing code built on milsymbol.*

## MS

**Properties**

The main milsymbol object has the following properties that you can get or set.

| Name | Type | Default |Description |
|------|------|-------------|-------------|
| version | String | current version | The current version number of milsymbol |
| autoSVG | Bool | true | Gets or sets if milsymbol should generate SVG output by default, if you only plan on using Canvas you can set this to false. |

### Classes

MS.bbox

MS.symbol


### Methods

#### addMarkerParts

**addMarkerParts**(function *makerPart*)

#### bboxMax

**bboxMax**(object *bbox*, object *bbox*)

#### buildingBlock

#### colorMode

**colorMode**(String *Civilian color*, String *Friend color*, String *Hostile color*, String *Neutral color*, String *Unknown color*)

A color mode represents colors for the different affiliations. You can either use it directly or register it as a named color object using **setColorMode()**.

|Property	|Type	|Description|
|------|------|-------------|
|Civilian	|String|	A color that is either a keyword or a numerical RGB specification.|
|Friend	|String|	A color that is either a keyword or a numerical RGB specification.
|Hostile	|String	|A color that is either a keyword or a numerical RGB specification.|
|Neutral	|String	|A color that is either a keyword or a numerical RGB specification.|
|Unknown	|String	|A color that is either a keyword or a numerical RGB specification.|

**Returns**

Object

#### getColorMode

**getColorMode**(string *mode*)

This gets a named color object from milsymbol. It is possible to register new or overwrite existing named color objects using **setColorMode()**. The following default named color objects exists in milsymbol.

|Color mode name	|Description|
|------|-------------|
|Light	|Light fill colors.|
|Medium	|Medium fill colors.|
|Dark	|Dark fill colors.|
|FrameColor	|Frame colors for unfilled symbols.|
|IconColor	|Icon colors for unfilled and unframed symbols.|
|Black	|This is all black.|
|White	|This is all white.|
|OffWhite	|This is off white, used for white parts of icons.|
|None	|This is no color, used to turn colors off.|

#### getDashArrays

**getDashArrays**()

#### getHqStafLength

**getHqStafLength**()

#### getMarkerParts

**getMarkerParts**()

**Returns**

Array of functions

#### rotate

**rotate**()

#### scale

**scale**()

#### setColorMode

**setColorMode**()

#### setDashArrays

**setDashArrays**(dashArray)

#### setHqStafLength

**setHqStafLength**(length)

#### setMarkerParts

**setMarkerParts**(markerParts)

#### setStandard

**setStandard**(standard)

#### translate

**translate**()



## MS.bbox

**new MS.bbox**({x1:Number,y1:Number,x2:Number,y2:Number})

The boundig box object tells you the dimensions for a marker or a building block object. This helps you calculate where to place different symbol modifiers or the dimensions of a building block that you want to add to the marker. 

A bounding box has the following properties.

| Name | Type | Description |
|------|------|-------------|
|x1 | Number	| The x value of the top left corner of the bounding box.|
|y1 | Number	| The y value of the top left corner of the bounding box.|
|x2 | Number	| The x value of the bottom right corner of the bounding box.|
|y2 | Number	| The y value of the bottom right corner of the bounding box.|

**Returns**

bbox object

### Methods

#### height

**height**()

Returns the total height of the bounding box.

**Returns**

Number

#### width

**width**()

Returns the total width of the bounding box.

**Returns**

Number

## MS.symbol

**new MS.symbol**(sidc, {options})

**Usage**
```
var mysym = new MS.symbol("SFG-UCI----D");
```

### Methods

#### asCanvas

**asCanvas**()

**Returns**

Canvas Element

#### asDOM

**asDOM**()

**Returns**

DOM Object

#### asSVG

**asSVG**()

**Usage**
```
document.write(new MS.symbol("SFG-UCI----D").getMarker().asSVG());
```

**Returns**

String

#### getColors

**getColors**()

**Returns**

Object

#### getMarker

**getMarker**()

When the **getMarker()** method is called, all properties of the Symbol Object is updated (**getMarker()** calls **getProperties()** and **getColors()**) and a marker is composed by all marker parts. 

**Usage**
```
document.write(new MS.symbol("SFG-UCI----D").getMarker().XML);
```

The following properties of the symbol object will be updated when **getMarker()** is called.

|Property | Type | Description |
|---------|------|-------------|
|bbox	|Bounding box object	|Contains the bounding box of the current marker|
|colors	|Colors |Property	Contains the colors for the current marker|
|height	|Number	|Height of the current marker|
|markerAnchor	|{x:Number,y:Number}	|The anchor point for the current marker, this is usually the center of the octagon, but for headquarters it's the end of the staf. The coordinates are measured from the top left corner of the marker.|
|octagonAnchor	|{x:Number,y:Number}	|The anchor point for the octagon for the current marker. The coordinates are measured from the top left corner of the marker.|
|properties	|Properties object	| Properties of the current marker|
|width	|Number	|Width of the current marker|
|XML	|String	|XML-string for the current marker if autoSVG is set to true.|

**Returns**

Symbol Object

#### getProperties

**getProperties**()

The properties object describes a lot of different properties for the current marker. This basically tells you everything you might need to know about your current marker and depends on the SIDC for the symbol and the symbol options that you have set.

The object returned when **getProperties()** is called will contain the following properties.

|Property	|Type	|Description|
|----------|------|-----------|
|activity	|Bool	|Is it an Activity|
|affiliation	|String	|Affiliation it is shown as (Friend/Hostile...) for example a Faker Hostile, will be shown with the shape of Friends.|
|baseAffilation	|String	|Affiliation it belongs to (Friend/Hostile...)|
|baseDimension	|String	|Dimension it belongs to (Air/Ground...)|
|baseGeometry	|buildingBlock Object|	Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)|
|civilian	|Bool	|Is it Civilian|
|condition	|String|	What condition is it in|
|context	|String	|Context of the symbol (Reality/Exercise...)|
|dimension	|String	|Dimension it is shown as (Air/Ground...) for example Ground Equipment is shown with the same shape as Sea.|
|dimensionUnknown	|Bool	|Is the dimension unknown
|echelon	|String	|What echelon (Platoon/Company...)|
|faker	|Bool	|Is it a Faker|
|fenintDummy	|Bool	|Is it a Feint/Dummy|
|fill	|Bool	|Standard says it should be filled|
|frame	|Bool	|Standard says it should be framed|
|functionid	|String	|Part of SIDC referring to the icon.|
|headquarters	|Bool	|Is it a Headquarters|
|iconBottom	|Number	|The bottom of the icon, this is only set for equipment symbols.|
|installation	|Bool	|Is it an Installation|
|joker	|Bool	|Is it a Joker|
|mobility	|String	|What mobility (Tracked/Sled...)|
notpresent	|String	|Is it Anticipated or Pending|
|numberSIDC	|Bool	|Is the SIDC number based|
|space	|Bool	|Is it in Space|
|taskForce	|Bool	|Is it a task force|

**Returns**

Object

#### setOptions

**setOptions**(options)

**Returns**

Symbol Object

#### toDataURL

**toDataURL**()

Base 64 encodes the XML and returns the output as a SVG image stream that can be set as the source attribute on a image element.

**Returns**

String
