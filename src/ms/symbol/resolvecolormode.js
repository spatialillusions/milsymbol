/*
Resolves a copy of a color mode so that caller-owned objects never are mutated.
The remap order matters and mirrors the historical in-place order:
Civilian -> Joker/Faker -> Suspect -> monoColor.
(A 2525E symbol can be both Joker and Suspect, and Suspect must win;
monoColor must win over all affiliation remaps.)
*/
export default function resolveColorMode(
  colorMode,
  style,
  metadata,
  applyMonoColor = false
) {
  const resolvedColorMode = Object.assign({}, colorMode);

  if (style.civilianColor && metadata.civilian) {
    resolvedColorMode.Friend =
      resolvedColorMode.Neutral =
      resolvedColorMode.Unknown =
        resolvedColorMode.Civilian;
  }

  if (metadata.joker || metadata.faker) {
    resolvedColorMode.Friend = resolvedColorMode.Hostile;
  }

  if (metadata.suspect) {
    resolvedColorMode.Friend = resolvedColorMode.Hostile =
      resolvedColorMode.Suspect;
  }

  if (applyMonoColor && style.monoColor != "") {
    resolvedColorMode.Friend =
      resolvedColorMode.Neutral =
      resolvedColorMode.Hostile =
      resolvedColorMode.Unknown =
      resolvedColorMode.Civilian =
        style.monoColor;
  }

  return resolvedColorMode;
}
