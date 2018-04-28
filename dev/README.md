# Development resources

Some minor notes and resources so that we don't forget things.

* octagon.svg, base template for creating icons in SVG format.

## Create prerelease

* Update `package.json`, set `version` to a prerelease version, e.g. `2.0.0-rc1`
* Run `npm pack` to create package
* Run `npm publish <package>.tgz --tag next` to publish the package under the `next` tag
* Run `npm install --save package@next` to install prerelease package

## Create release

* Update `package.json`, set `version` to version, e.g. `2.0.0`
* Run `npm publish` to publish
* Create release on GitHub with tag `v2.0.0`
