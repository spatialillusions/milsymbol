export function Colormode(
  civilian,
  friend,
  hostile,
  neutral,
  unknown,
  suspect
) {
  const o = {};
  o.Civilian = civilian;
  o.Friend = friend;
  o.Hostile = hostile;
  o.Neutral = neutral;
  o.Unknown = unknown;
  o.Suspect = suspect;
  return o;
}
