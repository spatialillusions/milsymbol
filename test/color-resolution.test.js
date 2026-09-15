import { ms, std2525c, std2525d } from "../index.mjs";

ms.reset();
ms.addIcons(std2525c);
ms.addIcons(std2525d);

const jokerSidc = "10151002001101000000";
const fakerSidc = "10161000001101000000";
const friendSidc = "10031002001101000000";
const suspectSidc = "13051000001101000000";
const suspectJokerSidc = "13151000001101000000";
const civilianSidc = "10031100001000000000";
const letterJokerSidc = "SJGPUCI----K---";
const letterFakerSidc = "SKGPUCI----K---";
const frameSuspectColor = "#FF7700"; // overridden in the frozen frameColor
const civilianFillColor = "rgb(255,161,255)"; // Light.Civilian
const civilianFrameColor = "rgb(255,0,255)"; // FrameColor.Civilian

const colorMode = Object.freeze(
  Object.assign(ms.getColorMode("Light"), {
    Hostile: "#AA00AA",
  })
);
const frameColor = Object.freeze(
  Object.assign(ms.getColorMode("FrameColor"), {
    Hostile: "#FF6600",
    Suspect: "#FF7700",
  })
);
const iconColor = Object.freeze(
  Object.assign(ms.getColorMode("IconColor"), {
    Hostile: "#00AA00",
  })
);
const originalColors = {
  fillFriend: colorMode.Friend,
  frameFriend: frameColor.Friend,
  iconFriend: iconColor.Friend,
};

const joker = new ms.Symbol(jokerSidc, {
  fill: false,
  colorMode,
  frameColor,
  iconColor,
});
const jokerStrokes = [...joker.asSVG().matchAll(/stroke="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((color) => color !== "false");
const jokerRecognized = joker.metadata.joker;

const faker = new ms.Symbol(fakerSidc, {
  fill: false,
  colorMode,
  frameColor,
  iconColor,
});
const filledJoker = new ms.Symbol(jokerSidc, {
  fill: true,
  colorMode,
  frameColor,
  iconColor,
});
const monoColor = "#123456";
const monoJoker = new ms.Symbol(jokerSidc, {
  fill: false,
  colorMode,
  frameColor,
  iconColor,
  monoColor,
});

joker.setOptions(friendSidc);

//Finds the HQ staff line drawn by the modifier symbol part
function hqStaffStroke(sidc, options) {
  const symbol = new ms.Symbol(
    sidc,
    Object.assign({ fill: false, hqStaffLength: 100 }, options)
  );
  const staff = symbol.drawInstructions.find(
    (instruction) =>
      instruction && instruction.d && instruction.d.includes(" L25,")
  );
  return staff && staff.stroke;
}

//Shared objects reused across separate Symbol instances (issue #351 scenario)
const sharedColorMode = Object.assign(ms.getColorMode("Light"), {
  Hostile: "#AA00AA",
});
const sharedFrameColor = Object.assign(ms.getColorMode("FrameColor"), {
  Hostile: "#FF6600",
});
new ms.Symbol(jokerSidc, {
  fill: false,
  colorMode: sharedColorMode,
  frameColor: sharedFrameColor,
}).asSVG();
const friendAfterJoker = new ms.Symbol("10031000001101000000", {
  fill: false,
  colorMode: sharedColorMode,
  frameColor: sharedFrameColor,
});
const hqFriendStaffAfterJoker = hqStaffStroke(friendSidc, {
  colorMode: sharedColorMode,
  frameColor: sharedFrameColor,
});
const hqJokerStaff = hqStaffStroke(jokerSidc, { frameColor: frameColor });
const hqMonoStaff = hqStaffStroke(jokerSidc, {
  frameColor: frameColor,
  monoColor: "#123456",
});
const hqStringStaff = hqStaffStroke(jokerSidc, { frameColor: "red" });
const suspect = new ms.Symbol(suspectSidc, {
  fill: false,
  colorMode,
  frameColor,
  iconColor,
});
const suspectJoker = new ms.Symbol(suspectJokerSidc, {
  fill: false,
  colorMode,
  frameColor,
});
const civilianFilled = new ms.Symbol(civilianSidc, {
  fill: true,
  colorMode,
  frameColor,
  iconColor,
});
const civilianUnfilled = new ms.Symbol(civilianSidc, {
  fill: false,
  colorMode,
  frameColor,
  iconColor,
});
const letterJoker = new ms.Symbol(letterJokerSidc, {
  fill: false,
  colorMode,
  frameColor,
});
const letterFaker = new ms.Symbol(letterFakerSidc, {
  fill: false,
  colorMode,
  frameColor,
});

export default {
  "Color resolution": {
    "Recognizes a valid Joker SIDC": [jokerRecognized, true],
    "Recognizes a valid Faker SIDC": [faker.metadata.faker, true],
    "Joker frame uses frameColor.Hostile": [
      [...new Set(jokerStrokes)].join(","),
      "#FF6600",
    ],
    "Faker frame uses frameColor.Hostile": [
      faker.colors.frameColor.Friend,
      "#FF6600",
    ],
    "Joker does not use colorMode.Hostile for its frame": [
      jokerStrokes[0],
      "#FF6600",
    ],
    "Filled Joker resolves each palette independently": [
      [
        filledJoker.colors.fillColor.Friend,
        filledJoker.colors.frameColor.Friend,
        filledJoker.colors.iconColor.Friend,
      ].join(","),
      "#AA00AA,#FF6600,#00AA00",
    ],
    "MonoColor Joker renders its frame in monoColor": [
      monoJoker.colors.frameColor.Friend,
      monoColor,
    ],
    "MonoColor overrides the Joker Hostile remap for the unfilled icon": [
      monoJoker.colors.iconColor.Friend,
      monoColor,
    ],
    "Does not mutate colorMode": [colorMode.Friend, originalColors.fillFriend],
    "Does not mutate frameColor": [
      frameColor.Friend,
      originalColors.frameFriend,
    ],
    "Does not mutate iconColor": [iconColor.Friend, originalColors.iconFriend],
    "Reusing a Symbol does not retain the Joker frame remapping": [
      joker.colors.frameColor.Friend,
      originalColors.frameFriend,
    ],
    "getColors returns a copy, not the caller's object": [
      joker.colors.frameColor === frameColor,
      false,
    ],
    "Reusing shared objects across symbols keeps Friend uncorrupted": [
      friendAfterJoker.colors.frameColor.Friend,
      "rgb(0, 255, 255)",
    ],
    "Recognizes a valid suspect SIDC": [suspect.metadata.suspect, true],
    "Suspect frame uses frameColor.Suspect": [
      suspect.colors.frameColor.Friend,
      frameSuspectColor,
    ],
    "Suspect icon uses frameColor.Suspect": [
      suspect.colors.iconColor.Friend,
      frameSuspectColor,
    ],
    "Recognizes a Joker that is also Suspect": [
      suspectJoker.metadata.joker && suspectJoker.metadata.suspect,
      true,
    ],
    "Suspect wins over the Joker Hostile remap": [
      suspectJoker.colors.frameColor.Friend,
      frameSuspectColor,
    ],
    "Recognizes a civilian symbol": [civilianFilled.metadata.civilian, true],
    "Civilian fill remaps Friend and Neutral to Civilian": [
      [
        civilianFilled.colors.fillColor.Friend,
        civilianFilled.colors.fillColor.Neutral,
      ].join(","),
      civilianFillColor + "," + civilianFillColor,
    ],
    "Civilian frame remaps Friend to Civilian": [
      civilianUnfilled.colors.frameColor.Friend,
      civilianFrameColor,
    ],
    "Recognizes a letter SIDC Joker": [letterJoker.metadata.joker, true],
    "Recognizes a letter SIDC Faker": [letterFaker.metadata.faker, true],
    "Letter SIDC Joker frame uses frameColor.Hostile": [
      letterJoker.colors.frameColor.Friend,
      "#FF6600",
    ],
    "Modifier HQ staff resolves the Joker frame remap": [
      hqJokerStaff,
      "#FF6600",
    ],
    "Modifier HQ staff renders in monoColor when set": [hqMonoStaff, "#123456"],
    "Modifier HQ staff stays correct after a Joker used the same object": [
      hqFriendStaffAfterJoker,
      "rgb(0, 255, 255)",
    ],
    "Non-object frameColor falls back instead of dropping the stroke": [
      typeof hqStringStaff === "string",
      true,
    ],
  },
};
