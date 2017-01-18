# Change Log

## Master

### Added

- colorMode property can now be set to a string representing the name of a registered color mode.

### Changed

- Fixed a bug that prevented specialHeadquarters to be drawn on Canvas output.

### Deprecated

### Removed

### Fixed

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