# Development resources

Some minor notes and resources so that we (I) don't forget things.

- [Changelog](../CHANGELOG.md), including the complete GitHub release history and
  pending release notes. Update this alongside code changes.

- octagon.svg, base template for creating icons in SVG format.

- char-width.html, a HTML page to generate a JSON with character widhts used in textfields.js

## Create prerelease

- Update `package.json`, set `version` to a prerelease version, e.g. `2.0.0-rc1`
- Run `npm pack` to create package
- Run `npm publish <package>.tgz --tag next` to publish the package under the `next` tag
- Run `npm install --save package@next` to install prerelease package

## Create release

- Finalize the version's notes in [CHANGELOG.md](../CHANGELOG.md).
- Update `package.json`, set `version` to version, e.g. `2.0.0`
- Update the source-import version fallback in `src/ms.js` to match `package.json`.
  Bundled builds read the version from `package.json` automatically.
- Run `npm login` to login in the console
- Run `npm publish` to publish
- Create release on GitHub with tag `v2.0.0`
- Copy the finalized changelog entry to the GitHub release, replace its Unreleased
  marker with the publication date and release link, and refresh the published
  version inventory below.

## Maintain the changelog

- Record user-visible changes under the next unreleased version in
  [CHANGELOG.md](../CHANGELOG.md), in the same change as the code.
- Keep versions newest first. Published entries include a release link and UTC
  publication date; an unpublished entry remains marked Unreleased.
- To reconcile the history, read all pages of the
  [GitHub releases API](https://api.github.com/repos/spatialillusions/milsymbol/releases?per_page=100).
  Follow pagination links and merge notes without overwriting pending changes.
- To refresh the inventory below, compare those releases with all pages of the
  [GitHub tags API](https://api.github.com/repos/spatialillusions/milsymbol/tags?per_page=100)
  and the [npm registry metadata](https://registry.npmjs.org/milsymbol).
  A tag alone does not imply a GitHub release, and a local version number or
  changelog entry does not imply publication.
- Run `npm view milsymbol versions --json` and
  `npm view milsymbol dist-tags --json` to check npm status, and record
  the verification date when refreshing the inventory.

## Published version inventory

Verified on **2026-10-27** using the public GitHub and npm APIs.

- GitHub: **23 published releases**, with **v3.0.4** marked as latest;
  all 23 were marked as stable releases. There were **23 tags**, matching
  the release tags, with no additional tag-only versions.
- npm: **27 published versions**, including **6 prereleases**.
  The `latest` dist-tag points to **3.0.4** and `next` points to
  **3.0.0-rc2**. The `next` tag still points to an older release candidate.
- GitHub-only releases: **0.4.4** and **0.4.5**.
- npm-only versions: **2.0.0-rc1**, **2.0.0-rc2**, **2.0.0-rc3**,
  **2.0.0-rc4**, **3.0.0-rc1**, and **3.0.0-rc2**.

Sources: [GitHub releases](https://github.com/spatialillusions/milsymbol/releases),
[GitHub tags](https://github.com/spatialillusions/milsymbol/tags),
[npm metadata](https://registry.npmjs.org/milsymbol).
Dates in the inventory and release metadata below are UTC publication dates.

| Version | GitHub release tag | npm published |
| --- | --- | --- |
| 3.0.4 | [v3.0.4](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.4) | 2026-03-10 |
| 3.0.3 | [v3.0.3](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.3) | 2025-07-29 |
| 3.0.2 | [v3.0.2](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.2) | 2025-04-11 |
| 3.0.1 | [v3.0.1](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.1) | 2025-03-17 |
| 3.0.0 | [v3.0.0](https://github.com/spatialillusions/milsymbol/releases/tag/v3.0.0) | 2025-02-08 |
| 3.0.0-rc2 | Not published | 2025-02-07 |
| 3.0.0-rc1 | Not published | 2025-02-06 |
| 2.2.0 | [v2.2.0](https://github.com/spatialillusions/milsymbol/releases/tag/v2.2.0) | 2023-03-15 |
| 2.1.0 | [v2.1.0](https://github.com/spatialillusions/milsymbol/releases/tag/v2.1.0) | 2023-03-05 |
| 2.0.0 | [v2.0.0](https://github.com/spatialillusions/milsymbol/releases/tag/v2.0.0) | 2019-04-25 |
| 2.0.0-rc4 | Not published | 2018-06-19 |
| 2.0.0-rc3 | Not published | 2018-06-18 |
| 2.0.0-rc2 | Not published | 2018-04-09 |
| 2.0.0-rc1 | Not published | 2018-04-04 |
| 1.3.3 | [1.3.3](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.3) | 2017-11-14 |
| 1.3.2 | [1.3.2](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.2) | 2017-11-13 |
| 1.3.1 | [1.3.1](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.1) | 2017-10-17 |
| 1.3.0 | [1.3.0](https://github.com/spatialillusions/milsymbol/releases/tag/1.3.0) | 2017-08-21 |
| 1.2.1 | [1.2.1](https://github.com/spatialillusions/milsymbol/releases/tag/1.2.1) | 2017-06-12 |
| 1.2.0 | [1.2.0](https://github.com/spatialillusions/milsymbol/releases/tag/1.2.0) | 2017-06-11 |
| 1.1.0 | [1.1.0](https://github.com/spatialillusions/milsymbol/releases/tag/1.1.0) | 2017-04-16 |
| 1.0.0 | [1.0.0](https://github.com/spatialillusions/milsymbol/releases/tag/1.0.0) | 2017-03-03 |
| 0.6.0 | [0.6.0](https://github.com/spatialillusions/milsymbol/releases/tag/0.6.0) | 2016-12-25 |
| 0.5.6 | [0.5.6](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.6) | 2016-05-14 |
| 0.5.5 | [0.5.5](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.5) | 2016-01-30 |
| 0.5.1 | [0.5.1](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.1) | 2015-07-24 |
| 0.5.0 | [0.5.0](https://github.com/spatialillusions/milsymbol/releases/tag/0.5.0) | 2015-07-24 |
| 0.4.5 | [0.4.5](https://github.com/spatialillusions/milsymbol/releases/tag/0.4.5) | Not published |
| 0.4.4 | [v0.4.4](https://github.com/spatialillusions/milsymbol/releases/tag/v0.4.4) | Not published |
