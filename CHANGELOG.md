# Change Log

This is the release history for milsymbol. Update the next unreleased version
alongside code changes, using Added, Changed, Deprecated, Removed, Fixed, and
Security sections as needed.

Published entries include all 23 public [GitHub releases](https://github.com/spatialillusions/milsymbol/releases),
verified on 2026-10-27. Dates below are UTC publication dates from GitHub metadata.
Historical wording is retained; duplicate version headings and empty template
categories are omitted. See [Development resources](dev/README.md) for the
publication workflow and GitHub/npm version inventory.

## 3.0.5 - 2026-10-27

### Added

- Add the `modifierColor` style option to control modifier decorator colors
  independently of frame and icon colors, including HQ staffs, task force brackets,
  feint/dummy indicators, and echelon indicators.
- Support `cssClass` on SVG drawing instructions, add the
  `milsymbol-textfields` class to standard text fields, and allow custom
  label classes. Add CSS classes for HQ, task force, installation, feint/dummy,
  and echelon modifiers.
- Extend TypeScript definitions with `addIconParts`, `IconPartsFunction`,
  `Symbol.drawInstructions`, and `outline`. Include `modifierColor`,
  support `infoOutlineWidth: false`, and declare text drawing instructions'
  `text` property. Correct `addIconParts`' return type for chaining.

### Changed

- Read the version from `package.json` when building the bundle, replacing
  the hardcoded runtime version.
- Move echelon geometry definitions into a separate data module to simplify
  maintenance.

### Fixed

- Restore direct source imports by providing a version fallback when the build-time
  `__version__` constant is unavailable. Verify the source version matches
  `package.json` in the test suite.
- Correct the suspect frame color's CSS syntax so unfilled MIL-STD-2525E suspect
  symbols and their labels render with the intended color on canvas.
- Stop `getColors` from mutating caller-provided `colorMode`,
  `frameColor`, and `iconColor` objects, so shared palettes can safely
  be reused across symbols. Resolve modifier frame colors without relying on
  palette mutation.

### Security

- Refresh compatible development dependency versions and the lockfile to address
  known security advisories, including requiring Rollup 4.59.0 or later for its
  path-traversal fix.
- Replace the unused general-purpose glob/copy dependency chain with a tested
  helper for the three documentation standard files. Keep the Rollup replacement
  plugin in development dependencies rather than runtime dependencies.

## 3.0.4 - 2026-03-10

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.4)

### Added

Stack extension is now part of milsymbol thanks to a sponsorship by Austrian Armed Forces.

### Security

A possible XSS vulnerability in the SVG output has been fixed by parsing all user provided input before we create the SVG string.

## 3.0.3 - 2025-07-29

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.3)

### Fixed

- Updated TypeScript definitions.
- Minor change in canvas output where some symbols were clipped.
- Fixed number in space modifier 2 after clarification from SSMC

## 3.0.2 - 2025-04-11

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.2)

### Changed

- Updated TypeScript definitions.

### Fixed

- Control measure points did not get all labels set correctly, that should be fixed now.

## 3.0.1 - 2025-03-17

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.1)

### Changed

- Changed baseline property in SVG to resolve Firefox issue
-  String widths are now in a separate file

## 3.0.0 - 2025-02-08

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.0)

### Added

- Support for MIL-STD-2525E and STANAG APP6 E

### Changed

- Icons will now as far as possible be based on MIL-STD-2525E / FM 1-02.2 look and feel

- Minor changes for readability on multiple icons

- ColorModes now includes a property "Suspect" for the new colors introduced in 2525E

- When calling ms.ColorMode you should now include a suspect color if you use 2525E `ms.ColorMode(civilian, friend, hostile, neutral, unknown, suspect)`

- uniqueDesignation will now be rendered with a smaller font on most control measure points

## 2.2.0 - 2023-03-15

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v2.2.0)

- Fixed #280 that broke in the last release.
- Added support for the option fillColor that makes it possible to fill a symbol with any color in a simple way.

## 2.1.0 - 2023-03-05

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v2.1.0)

### Changed

Since MIL-STD-2525D never was released, we reverted a lot of things in the cyberspace appendix.

Also updated to use the NMP packages stanag-app6 and mil-std-2525 instead of the old milstd.

And a bunch of minor fixes.

## 2.0.0 - 2019-04-25

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v2.0.0)

### Added

- Added support for Engagement Bars

- Use the option engagementBar to set the bar text
- Use the option engagementType to define "TARGET", "NON-TARGET", or "EXPIRED" as type

- Added support for the field country as specified in APP-6 D
- Added support for the field installationComposition as specified in APP-6 D
- Added possiblity to control more color on symbol level
- Support for speed leaders
- Support for text background color using infoBackground and infoBackgroundFrame options

### Changed

- `symbol.getProperties()` is removed and `symbol.getMetadata()` should be used instead.

- ms.getHqStafLength changed to ms.getHqStaffLength, fixed spelling

- ms.setHqStafLength changed to ms.setHqStaffLength, fixed spelling

- Thanks to @okwolf we moved from webpack to rollup for development

- Where there are multiple text fields in the same position, they are now joined
  by a / instead of a space

- Changed location of feint/dummy indicator to be more similar to images in
  standard documents

- Make it possible to set infoColor to a Color Mode

### Removed

- `symbol.getProperties()` is removed (use `symbol.getMetadata()` instead)

- `ms.setAutoSVG` has now been removed.

### Fixed

- Fields commonIdentifier (AF) and equipmentTeardownTime (AE) had swiched
  places, now corrected

- The condition bar is now drawn below the headquartersElement field

- Some natural events in 2525C was framed even if they shouldn't be

### Security

- Prevented XSS issue where malicious code could be inserted into text fields of SVG symbols, all < and > are now encoded to prevent this.

## 1.3.3 - 2017-11-14

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.3)

### Changed

- Updated and moved the unit generator from dev to examples.

### Fixed

- The option infoColor was not set when used, this is now fixed, again.
- The option hqStafLength was not set when used, this is now fixed.
- Fill opacity affected outline opacity as well in canvas output.

## 1.3.2 - 2017-11-13

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.2)

### Fixed

- Following symbols were drawn as fixed wing instead of rotary wing
  - WAR.SOFUNT.AVN.ROT.ATK
  - WAR.SOFUNT.AVN.ROT.UTY
  - WAR.SOFUNT.AVN.ROT.UTY.LIT
  - WAR.SOFUNT.AVN.ROT.UTY.MDM
  - WAR.SOFUNT.AVN.ROT.UTY.HVY

- The option infoColor was not set when used, this is now fixed.

## 1.3.1 - 2017-10-17

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.1)

### Fixed

- Fixed canvas output in Microsoft Edge 14

## 1.3.0 - 2017-08-21

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.0)

### Added

- symbol.getOptions(*includeStyle*) will return the options that are set on the symbol.

- symbol.getStyle() will return the style options that are set on the symbol.

- Added files for intellisense when used in Visual Studio Code

### Changed

- Options and Style are now stored in separate Objects on the symbol for better structure.

- ms.Symbol and setOptions can now take any number of arguments from 0 to n.

### Fixed

- ArcGIS example had to be updated because of change of how Options and Style are stored.

- monoColor was initialized as `false` instead of an empty string, this is now corrected and makes the correct status modifiers to be used by default.

- 10031000001104000000 was drawn with an icon IW instead of IO (Since it is IW in 2525C, but that is now fiexed.)

- Fixed the size of the sensor icon used in 2525D

## 1.2.1 - 2017-06-12

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.2.1)

### Fixed

- Altitude/Depth was sometimes not labeled on 2525D symbols

- Typo in Changelog

## 1.2.0 - 2017-06-11

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.2.0)

### Added

- Added build-amd, to build an AMD only module you can now run `npm run build-amd`

### Changed

- isValid(option) can now take an bolean input that makes it return a validaton object with extended information about the vadility.

- isValid now validates the mobility modifier as well as the symbol icon.

- Updated ENERGY FACITILIES INFRASTRUCTURE to better representation of the standard.

### Removed

- Removed all methods that was deprecated in milsymbol 1.0.0

### Fixed

- The quantiy field would be cut if the content was wider than the symbol, this is now fixed so that the symbol size adopts to to width of the quantity field.

- Fixed Land Unit M1 10 command and control that was displayed in as a Y instead of C2.

- Some modifiers on Signals Intelligence symbols in 2525C was incorrect

## 1.1.0 - 2017-04-16

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.1.0)

I would like to thank @okwolf that has contributed with unit tests and some code reorganization.

### Added

- It is now possible to use `sidc` or `SIDC` in an options object.

- It is now possible to initiate a symbol with just an options object `ms.Symbol({options})`.

- ms.Symbol().isValid() now returns a boolean representing if it was possible to find the symbol icon for the provided SIDC.

- The source code for the unit generator is now provided in the dev folder.

- Added 2525B symbols that are missing in 2525C, so now we have full support for 2525B as well.

- Initial unit tests added to the repository.

### Fixed

- Fix for that tactical points with labels with large font sizes might draw too narrow so that part of the label can't be seen.

- Fix for that units with invalid icon part in the SIDC did not get the upside down question mark when canvas output was used.

- G-F-PTS--- TACGRP.FSUPP.PNT.TGT.PTGT and G-C-FSTP-- 2.X.2.3.1.1.1 POINT/SINGLE TARGET now uses altitudeDepth instead of additionalInformation1 to display the target altitude.

- Made sure that tactical points that dosen't have labels in the specifications don't get labels even if they are set.

## 1.0.0 - 2017-03-03

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/1.0.0)

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

- Tactical points now supports APP6-B ANNEX E.

- Symbols with an invalid icon in the SIDC will now be rendered with an upside down ?. (According to MIL-STD-2525D)

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

## 0.6.0 - 2016-12-25

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/0.6.0)

### Added
- Support for outlines on symbols using properties `outlineColor` and `outlineWidth`.
- toDataURL() that returns a base 64 encoding of the SVG symbol. (See deprication of _asImage()_)
- Possibility to Add/Update existing SIDC.
- Possibility to Add/Update the icon parts that constructs the icons.
- Support for tactical point symbols in MIL-STD-2525C.

### Deprecated
- _asImage()_ since it returns a data url and not an image.

## 0.5.6 - 2016-05-14

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.6)

Several minor updates and minor changes to symbols that had some errors in them.
- asCanvas() is now also supported in Internet Explorer 11, this makes it simpler to integrate with Open Layers 3 and Cesium
- Added back the possibility to create effects with SVG filters in custom extensions

## 0.5.5 - 2016-01-30

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.5)

All symbol geometries has been remade to decrease code size and to make it possible to have native canvas output.
- Native Canvas output
- Reduced code size

## 0.5.1 - 2015-07-24

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.1)

This is just a maintenance release, no code in milsymbol has changed, but some errors in the documentation has been fixed.

## 0.5.0 - 2015-07-20

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.0)

- Much faster
- New API
- Support point symbols from MIL-STD-2525D
- New examples

## 0.4.5 - 2014-11-23

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/0.4.5)

### New in this release:
- Now supports MIL-STD-2525C Emergency Management Symbols
- Speeeeed, the code now runs 3-5 times faster when you are creating a lot of symbols. (1000 random symbols can be created in less than 1 second, my test record is 0.25 seconds on a modern iMac running Safari.)
- Added an example showing generation of 1000 random symbols.

## 0.4.4 - 2014-10-28

[GitHub release](https://github.com/spatialillusions/milsymbol/releases/tag/v0.4.4)

Initial release when code moved to GitHub, same as on homepage.
