const friendlyGroundUnitSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="63.2" height="43.2" viewBox="21 46 158 108"><path d="M25,50 l150,0 0,100 -150,0 z" stroke-width="4" stroke="black" fill="rgb(128,224,255)" fill-opacity="1" ></path></svg>';

export default {
  // A few different SIDC formats that should all produce the same very basic test symbol
  SFG: friendlyGroundUnitSvg,
  "SFG-": friendlyGroundUnitSvg,
  "SFG-------": friendlyGroundUnitSvg,
  "SFG---------": friendlyGroundUnitSvg,
  "SFG-U-------": friendlyGroundUnitSvg,
  "SFGPU-------": friendlyGroundUnitSvg,
  10031000000000000000: friendlyGroundUnitSvg,
  // Reference figure from MIL-STD-2525C
  "sfgpewrh--mt":
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="51.2" height="57.6" viewBox="36 36 128 144"><circle cx="100" cy="100" r="60" stroke-width="4" stroke="black" fill="rgb(128,224,255)" fill-opacity="1" ></circle><path d="m 100,60 0,80 M 85,75 100,60 115,75" stroke-width="4" stroke="black" fill="none" ></path><path d="m 85,110 30,0 m -30,-20 30,0 m -30,10 30,0" stroke-width="4" stroke="black" fill="none" ></path><g transform="translate(0,160)" stroke-width="4" stroke="black" fill="none" ><path d="M 53,1 l 96,0" ></path><circle cx="58" cy="8" r="8" ></circle><circle cx="73" cy="8" r="8" ></circle><circle cx="127" cy="8" r="8" ></circle><circle cx="142" cy="8" r="8" ></circle></g></svg>',
  SFGXEWMASEMO:
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="51.2" height="71.2" viewBox="36 36 128 178"><circle cx="100" cy="100" r="60" stroke-width="4" stroke="black" fill="rgb(128,224,255)" fill-opacity="1" ></circle><path d="m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-15 0,-65 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65" stroke-width="4" stroke="black" fill="none" ></path><path d="m 85,100 30,0" stroke-width="4" stroke="black" fill="none" ></path><text x="68" y="110" text-anchor="middle" font-size="25" font-family="Arial" font-weight="bold" stroke-width="4" stroke="none" fill="black" >E</text><text x="132" y="110" text-anchor="middle" font-size="25" font-family="Arial" font-weight="bold" stroke-width="4" stroke="none" fill="black" >R</text><g transform="translate(0,160)" stroke-width="4" stroke="black" fill="none" ><path d="M 53,1 l 94,0" ></path><circle cx="58" cy="8" r="8" ></circle><circle cx="142" cy="8" r="8" ></circle></g><path d="M40,185 l120,0 0,25 -120,0 z" stroke-width="4" stroke="black" fill="rgb(255,0,0)" ></path></svg>',
  10000030000000000000: '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="58.6" height="70.6" viewBox="26.75 26.75 146.5 176.5"><path d="M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z" stroke-width="4" stroke="black" fill="rgb(255,255,128)" fill-opacity="1" ></path><path d="M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z" stroke-width="5" stroke-dasharray="4,4" stroke="rgb(239, 239, 239)" fill="none" ></path><path d="M30.75,174.25 l138.5,0 0,25 -138.5,0 z" stroke-width="4" stroke="black" fill="rgb(255,255,0)" ></path><text x="100" y="127" text-anchor="middle" font-size="80" font-family="Arial" font-weight="bold" fill="black" >?</text></svg>'
};
