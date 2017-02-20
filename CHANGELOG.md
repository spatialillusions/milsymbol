# Change Log

## Master

- Milsymbol is now split into several modules and built with [webpack](https://webpack.github.io/), this makes the code easier to maintain.

- Avoid getting and setting properties directly, use methods for this when they are available, in the future properties might change names.

### Added

- colorMode property can now be set to a string representing the name of a registered color mode.

- symbol.getSize() returns an object with the width and height of the symbol.

- symbol.getAnchor() returns an object with the x and y offset of the symbol.

- symbol.getOctagonAnchor() returns an object with the x and y offset of the octagon center.

- bbox.merge(another-bbox), use this instead of MS.bboxMax for merging bounding boxes.

- Milsymbol can now be used as a AMD/CommonJS/etc... module, by requiering `milsymbol`, the global `var` is called ms.

- ms.getVersion() that returns the version as a string.

- ms.addSIDCicons(sidcFunction, type) for adding sidc functions.

- ms.addLabelOverrides(labelFunction, type) for adding label functions.

- ms.addSymbolPart(part) should be used instead of MS.addMarkerParts(part)

- ms.getSymbolParts() should be used instead of MS.getMarkerParts()

- ms.setSymbolParts(parts) should be used instead of MS.setMarkerParts(parts)

- ms.BBox() should be used instead of MS.bbox(). (Since it is a class...)

- ms.ColorMode() should be used instead of MS.colorMode(). (Since it is a class...)

- ms.Symbol() should be used instead of MS.symbol(). (Since it is a class...)

- Tactical points is now part of */dist/milsymbol.js*, no need to include any extra files.

### Changed

- **Global variable is now `ms` instead of `MS`.**

- Feint/Dummy indicator drawn as specified in MIL-STD-2525D change 1.


### Deprecated

- Avoid setting properties directly, use setOptions(options) instead.

- Do not use .XML anymore, use asSVG() instead, **if needed set `ms.autoSVG = true`**. ms.autoSVG will be removed in a future version.

- getMarker(), it's not needed anymore, symbols are automatically updated when options are updated using setOptions().

- MS.bboxMax(), use bbox.merge() instead.

- MS.addLetterSIDCicons(), use ms.addSIDCicons() instead.

- MS.addNumberSIDCicons(), use ms.addSIDCicons() instead.

- MS.addLetterLabelOverrides(), use ms.addLabelOverrides() instead.

- MS.addNumberLabelOverrides(), use ms.addLabelOverrides() instead.

- MS.buildingBlock() return an object instead.

- MS.addMarkerParts(part) use ms.addSymbolPart(part) instead.

- MS.getMarkerParts() use ms.getSymbolParts() instead.

- MS.setMarkerParts(parts) use ms.setSymbolParts(parts) instead.

- MS.bbox() use ms.BBox() instead. (Since it is a class...)

- MS.colorMode() use ms.ColorMode() instead. (Since it is a class...)

- MS.symbol() use ms.Symbol instead. (Since it is a class...)

### Removed

- MS.rotate() has been removed, use json drawInstruction instead.

- MS.scale() has been removed, use json drawInstruction instead.

- MS.translate() has been removed, use json drawInstruction instead.

### Fixed

- Fixed a bug that prevented specialHeadquarters to be drawn on Canvas output.

### Security

## 0.6.0 25 DEC 2016

### Added

- Support for outlines on symbols using properties `outlineColor` and `outlineWidth`.

- toDataURL() that returns a base 64 encoding of the SVG symbol. (See deprication of *asImage()*)

- Possibility to Add/Update existing SIDC.

- Possibility to Add/Update the icon parts that constructs the icons.

- Support for tactical point symbols in MIL-STD-2525C.

### Changed

### Deprecated

- *asImage()* since it returns a data url and not an image.

### Removed

### Fixed

### Security

## 0.5.6 14 MAY 2016

### Added
- asCanvas() is now also supported in Internet Explorer 11, this makes it simpler to integrate with Open Layers 3 and Cesium
- Added back the possibility to create effects with SVG filters in custom extensions

## 0.5.5 13 JAN 2016

### Added
- Native Canvas output

### Changed
- Made several changes to the code to reduce the code size

## 0.5.1 24 JUL 2015

### Changed
- Minor documentation updates

## 0.5.0 - 20 JUL 2015

### Added
- New API
- Much faster
- Support point symbols from MIL-STD-2525D
- New examples

## 0.4.5 - 24 NOV 2014

### Added
- Now supports MIL-STD-2525C Emergency Management Symbols
- Speeeeed, the code now runs 3-5 times faster when you are creating a lot of symbols. (1000 random symbols can be created in less than 1 second, my test record is 0.25 seconds on a modern iMac running Safari.)
- Added an example showing generation of 1000 random symbols.
