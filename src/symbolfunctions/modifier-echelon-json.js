export default {
  "Team/Crew": {
    g: [
      { type: "circle", cx: 100, cy: -20, r: 15 },
      {
        type: "path",
        d: "M80," + -10 + "L120," + -30
      }
    ],
    bbox: { y1: -40 }
  },
  Squad: {
    g: [
      {
        type: "circle",
        fill: true,
        cx: 100,
        cy: -20,
        r: 7.5
      }
    ],
    bbox: { y1: -20 - 7.5 }
  },
  Section: {
    g: [
      {
        type: "circle",
        fill: true,
        cx: 115,
        cy: -20,
        r: 7.5
      },
      {
        type: "circle",
        fill: true,
        cx: 85,
        cy: -20,
        r: 7.5
      }
    ],
    bbox: { y1: -20 - 7.5 }
  },
  "Platoon/detachment": {
    g: [
      {
        type: "circle",
        fill: true,
        cx: 100,
        cy: -20,
        r: 7.5
      },
      {
        type: "circle",
        fill: true,
        cx: 70,
        cy: -20,
        r: 7.5
      },
      {
        type: "circle",
        fill: true,
        cx: 130,
        cy: -20,
        r: 7.5
      }
    ],
    bbox: { y1: -20 - 7.5 }
  },
  "Company/battery/troop": {
    g: [
      {
        type: "path",
        d: "M100,-10 l0,-25"
      }
    ],
    bbox: { y1: -40 }
  },
  "Battalion/squadron": {
    g: [
      {
        type: "path",
        d: "M90,-10 l0,-25"
      },
      {
        type: "path",
        d: "M110,-10 l0,-25"
      }
    ],
    bbox: { y1: -40 }
  },
  "Regiment/group": {
    g: [
      {
        type: "path",
        d: "M100,-10 l0,-25"
      },
      {
        type: "path",
        d: "M120,-10 l0,-25"
      },
      { type: "path", d: "M80,-10 l0,-25" }
    ],
    bbox: { y1: -40 }
  },
  Brigade: {
    g: [
      {
        type: "path",
        d: "M87.5,-10 l25,-25 m0,25 l-25,-25"
      }
    ],
    bbox: { y1: -15 - 25 }
  },
  Division: {
    g: [
      {
        type: "path",
        d: "M70,-10 l25,-25 m0,25 l-25,-25 M105,-10 l25,-25 m0,25 l-25,-25"
      }
    ],
    bbox: {
      y1: -15 - 25,
      x1: 70,
      x2: 130
    }
  },
  "Corps/MEF": {
    g: [
      {
        type: "path",
        d: "M52.5,-10 l25,-25 m0,25 l-25,-25 M87.5,-10 l25,-25 m0,25 l-25,-25 M122.5,-10 l25,-25 m0,25 l-25,-25"
      }
    ],
    bbox: {
      y1: -15 - 25,
      x1: 52.5,
      x2: 147.5
    }
  },
  Army: {
    g: [
      {
        type: "path",
        d: "M35,-10 l25,-25 m0,25 l-25,-25 M70,-10 l25,-25 m0,25 l-25,-25 M105,-10 l25,-25 m0,25 l-25,-25 M140,-10 l25,-25 m0,25 l-25,-25"
      }
    ],
    bbox: {
      y1: -15 - 25,
      x1: 35,
      x2: 165
    }
  },
  "Army Group/front": {
    g: [
      {
        type: "path",
        d: "M17.5,-10 l25,-25 m0,25 l-25,-25 M52.5,-10 l25,-25 m0,25 l-25,-25 M87.5,-10 l25,-25 m0,25 l-25,-25 M122.5,-10 l25,-25 m0,25 l-25,-25 M157.5,-10 l25,-25 m0,25 l-25,-25"
      }
    ],
    bbox: {
      y1: -15 - 25,
      x1: 17.5,
      x2: 182.5
    }
  },
  "Region/Theater": {
    g: [
      {
        type: "path",
        d: "M0,-10 l25,-25 m0,25 l-25,-25 M35,-10 l25,-25 m0,25 l-25,-25 M70,-10 l25,-25 m0,25 l-25,-25 M105,-10 l25,-25 m0,25 l-25,-25 M140,-10 l25,-25 m0,25 l-25,-25 M175,-10 l25,-25 m0,25 l-25,-25"
      }
    ],
    bbox: {
      y1: -15 - 25,
      x1: 0,
      x2: 200
    }
  },
  Command: {
    g: [
      {
        type: "path",
        d: "M70,-22.5 l25,0 m-12.5,12.5 l0,-25 M105,-22.5 l25,0 m-12.5,12.5 l0,-25"
      }
    ],
    bbox: {
      y1: -15 - 25,
      x1: 70,
      x2: 130
    }
  }
};
