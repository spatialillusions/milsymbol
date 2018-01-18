import { BBox } from "./bbox.js";

export default {
  AirHostile: {
    g: { type: "path", d: "M 45,150 L45,70 100,20 155,70 155,150" },
    bbox: new BBox({ x1: 45, y1: 20, x2: 45 + 110, y2: 20 + 130 })
  },
  AirFriend: {
    g: {
      type: "path",
      d: "M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150"
    },
    bbox: new BBox({ x1: 45, y1: 30, x2: 45 + 110, y2: 30 + 120 })
  },
  AirNeutral: {
    g: { type: "path", d: "M 45,150 L 45,30,155,30,155,150" },
    bbox: new BBox({ x1: 45, y1: 30, x2: 45 + 110, y2: 30 + 120 })
  },
  AirUnknown: {
    g: {
      type: "path",
      d: "M 65,150 c -55,0 -50,-90 0,-90 0,-50 70,-50 70,0 50,0 55,90 0,90"
    },
    bbox: new BBox({ x1: 25, y1: 20, x2: 25 + 150, y2: 20 + 130 })
  },
  GroundHostile: {
    g: { type: "path", d: "M 100,28 L172,100 100,172 28,100 100,28 Z" },
    bbox: new BBox({ x1: 28, y1: 28, x2: 28 + 144, y2: 28 + 144 })
  },
  GroundFriend: {
    g: { type: "path", d: "M25,50 l150,0 0,100 -150,0 z" },
    bbox: new BBox({ x1: 25, y1: 50, x2: 25 + 150, y2: 50 + 100 })
  },
  GroundNeutral: {
    g: { type: "path", d: "M45,45 l110,0 0,110 -110,0 z" },
    bbox: new BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  GroundUnknown: {
    g: {
      type: "path",
      d:
        "M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"
    },
    bbox: new BBox({
      x1: 30.75,
      y1: 30.75,
      x2: 30.75 + 138.5,
      y2: 30.75 + 138.5
    })
  },
  LandDismountedIndividualHostile: {
    g: { type: "path", d: "M 100,28 L172,100 100,172 28,100 100,28 Z" },
    bbox: new BBox({ x1: 28, y1: 28, x2: 28 + 144, y2: 28 + 144 })
  },
  LandDismountedIndividualFriend: {
    g: { type: "path", d: "m 100,45 55,25 0,60 -55,25 -55,-25 0,-60 z" },
    bbox: new BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  LandDismountedIndividualNeutral: {
    g: { type: "path", d: "M45,45 l110,0 0,110 -110,0 z" },
    bbox: new BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  LandDismountedIndividualUnknown: {
    g: {
      type: "path",
      d:
        "M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"
    },
    bbox: new BBox({
      x1: 30.75,
      y1: 30.75,
      x2: 30.75 + 138.5,
      y2: 30.75 + 138.5
    })
  },
  SeaHostile: {
    g: { type: "path", d: "M100,28 L172,100 100,172 28,100 100,28 Z" },
    bbox: new BBox({ x1: 28, y1: 28, x2: 28 + 144, y2: 28 + 144 })
  },
  SeaFriend: {
    g: { type: "circle", cx: 100, cy: 100, r: 60 },
    bbox: new BBox({ x1: 40, y1: 40, x2: 40 + 120, y2: 40 + 120 })
  },
  SeaNeutral: {
    g: { type: "path", d: "M45,45 l110,0 0,110 -110,0 z" },
    bbox: new BBox({ x1: 45, y1: 45, x2: 45 + 110, y2: 45 + 110 })
  },
  SeaUnknown: {
    g: {
      type: "path",
      d:
        "M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"
    },
    bbox: new BBox({
      x1: 30.75,
      y1: 30.75,
      x2: 30.75 + 138.5,
      y2: 30.75 + 138.5
    })
  },
  SubsurfaceHostile: {
    g: { type: "path", d: "M45,50 L45,130 100,180 155,130 155,50" },
    bbox: new BBox({ x1: 45, y1: 50, x2: 45 + 110, y2: 50 + 130 })
  },
  SubsurfaceFriend: {
    g: { type: "path", d: "m 45,50 c 0,100 40,120 55,120 15,0 55,-20 55,-120" },
    bbox: new BBox({ x1: 45, y1: 50, x2: 45 + 110, y2: 50 + 120 })
  },
  SubsurfaceNeutral: {
    g: { type: "path", d: "M45,50 L45,170 155,170 155,50" },
    bbox: new BBox({ x1: 45, y1: 50, x2: 45 + 110, y2: 50 + 120 })
  },
  SubsurfaceUnknown: {
    g: {
      type: "path",
      d: "m 65,50 c -55,0 -50,90 0,90 0,50 70,50 70,0 50,0 55,-90 0,-90"
    },
    bbox: new BBox({ x1: 25, y1: 50, x2: 25 + 150, y2: 50 + 130 })
  },
  PositionMarker: {
    g: { type: "circle", cx: 100, cy: 100, r: 15 },
    bbox: new BBox({ x1: 85, y1: 85, x2: 115, y2: 115 })
  }
};
