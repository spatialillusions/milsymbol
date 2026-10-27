# Development resources

Some minor notes and resources so that we (I) don't forget things.

- [Release notes](RELEASE_NOTES.md), including the GitHub release history, published
  GitHub/npm versions, and pending release notes. Update this alongside code changes.

- octagon.svg, base template for creating icons in SVG format.

- char-width.html, a HTML page to generate a JSON with character widhts used in textfields.js

## Create prerelease

- Update `package.json`, set `version` to a prerelease version, e.g. `2.0.0-rc1`
- Run `npm pack` to create package
- Run `npm publish <package>.tgz --tag next` to publish the package under the `next` tag
- Run `npm install --save package@next` to install prerelease package

## Create release

- Finalize the version's notes in [RELEASE_NOTES.md](RELEASE_NOTES.md) and keep
  [CHANGELOG.md](../CHANGELOG.md) consistent.
- Update `package.json`, set `version` to version, e.g. `2.0.0`
- Update the source-import version fallback in `src/ms.js` to match `package.json`.
  Bundled builds read the version from `package.json` automatically.
- Run `npm login` to login in the console
- Run `npm publish` to publish
- Create release on GitHub with tag `v2.0.0`
- Copy the finalized notes to the GitHub release, then update the publication status
  and version inventory in [RELEASE_NOTES.md](RELEASE_NOTES.md).
