// Label overrides for tactical points
export default function tacticalPoints(sidc) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-GD----"] = {}; //2.X.1.1.9 DESTROY
  sidc["G-T-GI----"] = {}; //2.X.1.1.13 INTERDICT
  sidc["G-T-GN----"] = {}; //2.X.1.1.15 NEUTRALIZE
  sidc["G-C-MGPFE-"] = {}; //2.X.2.1.1.1.1.1 ELECTRO-MAGNETIC
  sidc["G-C-MGPFA-"] = {}; //2.X.2.1.1.1.1.2 ACOUSTIC
  sidc["G-C-MGPFO-"] = {}; //2.X.2.1.1.1.1.3 ELECTRO-OPTICAL
  sidc["G-C-MGPI--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 30,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.1.1.2 POINT OF INTEREST
  sidc["G-C-MAAP--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.2.1.1 AIR CONTROL POINT (ACP)
  sidc["G-C-MAAC--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.2.1.2 COMMUNICATIONS CHECKPOINT (CCP)
  sidc["G-C-MAAU--"] = {}; //2.X.2.1.2.1.3 POP UP POINT (PUP)
  sidc["G-C-MAAD--"] = {}; //2.X.2.1.2.1.4 DOWNED AIRCREW PICK UP POINT
  sidc["G-C-MDN---"] = {}; //2.X.2.1.3.6 DUMMY MINEFIELD
  sidc["G-C-MMPT--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 85,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.1.4.1.1 TARGET REFERENCE POINT (TRP)
  sidc["G-C-MMPO--"] = {}; //2.X.2.1.4.1.4 OBSERVATION POST/OUTPOST
  sidc["G-C-MMPOC-"] = {}; //2.X.2.1.4.1.4.1 COMBAT OUTPOST
  sidc["G-C-MMPOR-"] = {}; //2.X.2.1.4.1.4.2 OBSERVATION POST OCCUPIED BY DISMOUNTED SCOUTS OR RECONNAISSANCE
  sidc["G-C-MMPOF-"] = {}; //2.X.2.1.4.1.4.3 FORWARD OBSERVER POSITION
  sidc["G-C-MMPOS-"] = {}; //2.X.2.1.4.1.4.4 SENSOR OUTPOST/LISTENING POST (OP/LP)
  sidc["G-C-MMPON-"] = {}; //2.X.2.1.4.1.4.5 CBRN OBSERVATION POST (DISMOUNTED)
  sidc["G-C-MMPON-"] = {}; //2.X.2.1.4.1.4.6 FORWARD AIR CONTROLLER (FAC)
  sidc["G-C-MMPON-"] = {}; //2.X.2.1.4.1.4.7 TACTICAL AIR CONTROL PARTY (TACP)
  sidc["G-C-MOPD--"] = {}; //2.X.2.1.5.1.1 POINT OF DEPARTURE
  sidc["G-C-BOATD-"] = {}; //2.X.2.2.1.3.3 ANTITANK OBSTACLES, TETRAHEDRONS, DRAGON'S TEETH AND OTHER SIMILAR OBSTACLES
  sidc["G-C-BOAB--"] = {}; //2.X.2.2.1.4 BOOBY TRAP
  sidc["G-C-BOAMA-"] = {}; //2.X.2.2.1.5.1 ANTIPERSONNEL (AP) MINE
  sidc["G-C-BOAMT-"] = {}; //2.X.2.2.1.5.2 ANTITANK (AT) MINE
  sidc["G-C-BOAMD-"] = {}; //2.X.2.2.1.5.3 ANTITANK MINE WITH ANTIHANDLING DEVISE
  sidc["G-C-BOAMC-"] = {}; //2.X.2.2.1.5.4 ANTITANK MINE (ARROW SHOWS EFFECTS) "CLAYMORE MINE"
  sidc["G-C-BOAMU-"] = {}; //2.X.2.2.1.5.5 UNSPECIFIED MINE
  sidc["G-C-BOAMN-"] = {}; //2.X.2.2.1.5.6 MINE CLUSTER
  sidc["G-C-BOAIP-"] = {}; //2.X.2.2.1.6.1 PLANNED MINEFIELD
  sidc["G-C-BOAIC-"] = {}; //2.X.2.2.1.6.2 COMPLETED MINEFIELD
  sidc["G-C-BOAIN-"] = {}; //2.X.2.2.1.6.5 ANTITANK (AT) MINEFIELD
  sidc["G-C-BOAIS-"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.6 SCATTERABLE MINES
  sidc["G-C-BOAIH-"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.7 ANTIPERSONNEL (AP) MINEFIELD REINFORCED WITH SCATTERABLE WITH SELF-DESTRUCT DATE-TIME-GROUP
  sidc["G-C-BOAID-"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.8 SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP
  sidc["G-C-BOAV--"] = {
    dtg: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 165,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.2.1.6.8 SCATTERABLE MINEFIELD WITH SELF-DESTRUCT DATE-TIME-GROUP
  sidc["G-C-BYCG--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.2.2.8 ENGINEER REGULATING POINT
  sidc["G-C-BSE---"] = {}; //2.X.2.2.3.1 EARTHWORK, SMALL TRENCH OR FORTIFICATION
  sidc["G-C-BSF---"] = {}; //2.X.2.2.3.2 FORT
  sidc["G-C-BSH---"] = {}; //2.X.2.2.3.6 SURFACE SHELTER
  sidc["G-C-BSU---"] = {}; //2.X.2.2.3.7 UNDERGROUND SHELTER
  sidc["G-C-BWN---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.2 NUCLEAR DETONATIONS FRIENDLY GROUND ZERO
  sidc["G-C-BWE---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.3 ENEMY KNOWN GROUND ZERO
  sidc["G-C-BWI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.4 ENEMY TEMPLATED
  sidc["G-C-BWF---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 20,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: 20, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 100,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 140,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 35
    },
    type: { stroke: false, textanchor: "end", x: 50, y: 60, fontsize: 35 },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  }; //2.X.2.2.4.5 FRIENDLY PLANNED OR ON-ORDER
  sidc["G-C-BWP---"] = {}; //2.X.2.2.4.6 FALLOUT PRODUCING
  sidc["G-C-BWDP--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.1 DECON SITE/POINT (UNSPECIFIED)
  sidc["G-C-BWDA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.2 ALTERNATE DECON SITE/POINT (UNSPECIFIED)
  sidc["G-C-BWDT--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.3 DECON SITE/POINT (TROOPS)
  sidc["G-C-BWDE--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.4 DECON SITE/POINT (EQUIPMENT)
  sidc["G-C-BWDS--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.5 DECON SITE/POINT (EQUIPMENT AND TROOPS)
  sidc["G-C-BWDO--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.6 DECON SITE/POINT (OPERATIONAL DECONTAMINATION)
  sidc["G-C-BWDG--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.7 DECON SITE/POINT (THOROUGH DECONTAMINATION)
  sidc["G-C-BWDEM-"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.8 DECON POINT (MAIN) EQUIPMENT
  sidc["G-C-BWDTF-"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.2.4.11.9 DECON POINT (FORWARD) TROOPS
  sidc["G-C-FSTP--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 145,
      fontsize: 40
    },
    altitudeDepth: {
      stroke: false,
      textanchor: "end",
      x: 80,
      y: 145,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40
    }
  }; //2.X.2.3.1.1.1 POINT /SINGLE TARGET
  sidc["G-C-FSS---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 125,
      y: 115,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //2.X.2.3.1.2 FIRE SUPPORT STATION
  sidc["G-C-FAU---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //2.X.2.3.3.9 NUCLEAR TARGET
  sidc["G-C-SPA---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.1 AMBULANCE EXCHANGE POINT
  sidc["G-C-SPC---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.2 CANNIBALIZATION POINT
  sidc["G-C-SPY---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.3 CASUALTY COLLECTION POINT
  sidc["G-C-SPT---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.4 CIVILIAN COLLECTION POINT
  sidc["G-C-SPD---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.5 DETAINEE COLLECTION POINT
  sidc["G-C-SPE---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.6 ENEMY PRISONER OF WAR (EPW) COLLECTION POINT
  sidc["G-C-SPL---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.7 LOGISTICS RELEASE POINT (LRP)
  sidc["G-C-SPM---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.8 MAINTENANCE COLLECTION POINT
  sidc["G-C-SPR---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.9 REARM, REFUEL AND RE-SUPPLY POINT
  sidc["G-C-SPU---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.10 REFUEL ON THE MOVE (ROM) POINT
  sidc["G-C-SPO---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.11 TRAFFIC CONTROL POST (TCP)
  sidc["G-C-SPI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.12 TRAILER TRANSFER POINT
  sidc["G-C-SPN---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.13 UNIT MAINTENANCE COLLECTION POINT
  sidc["G-C-SPQT--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.1 GENERAL
  sidc["G-C-SPQA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.2 CLASS I
  sidc["G-C-SPQB--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.3 CLASS II
  sidc["G-C-SPQC--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.4 CLASS III
  sidc["G-C-SPQD--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.5 CLASS IV
  sidc["G-C-SPQE--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.6 CLASS V
  sidc["G-C-SPQF--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.7 CLASS VI
  sidc["G-C-SPQG--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.8 CLASS VII
  sidc["G-C-SPQH--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.9 CLASS VIII
  sidc["G-C-SPQI--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.10 CLASS IX
  sidc["G-C-SPQJ--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: -30,
      fontsize: 40
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.14.11 CLASS X
  sidc["G-C-SPMA--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.15.1 AMMUNITION SUPPLY POINT (ASP)
  sidc["G-C-SPMT--"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.4.1.15.2 AMMUNITION TRANSFER POINT (ATP)
  sidc["G-C-OX----"] = {}; //2.X.2.5.1 SPECIAL POINT
  sidc["G-C-OXRN--"] = {}; //2.X.2.5.1.1.1 NAV REFERENCE
  sidc["G-C-OXRD--"] = {}; //2.X.2.5.1.1.2 DLRP
  sidc["G-C-OXUD--"] = {}; //2.X.2.5.1.2.1 DATUM
  sidc["G-C-OXUB--"] = {}; //2.X.2.5.1.2.2 BRIEF CONTACT
  sidc["G-C-OXUL--"] = {}; //2.X.2.5.1.2.3 LOST CONTACT
  sidc["G-C-OXUS--"] = {}; //2.X.2.5.1.2.4 SINKER
  sidc["G-C-OXWA--"] = {}; //2.X.2.5.1.3.1 AIM POINT
  sidc["G-C-OXWD--"] = {}; //2.X.2.5.1.3.2 DROP POINT
  sidc["G-C-OXWE--"] = {}; //2.X.2.5.1.3.3 ENTRY POINT
  sidc["G-C-OXWG--"] = {}; //2.X.2.5.1.3.4 GROUND ZERO
  sidc["G-C-OXWM--"] = {}; //2.X.2.5.1.3.5 MSL DETECT POINT
  sidc["G-C-OXWI--"] = {}; //2.X.2.5.1.3.6 IMPACT POINT
  sidc["G-C-OXWP--"] = {}; //2.X.2.5.1.3.7 PREDICTED IMPACT POINT
  sidc["G-C-OXY---"] = {}; //2.X.2.5.1.4 SONOBUOY
  sidc["G-C-OXYP--"] = {}; //2.X.2.5.1.4.1 PATTERN CENTRE
  sidc["G-C-OXYD--"] = {}; //2.X.2.5.1.4.2 DIFAR
  sidc["G-C-OXYL--"] = {}; //2.X.2.5.1.4.3 LOFAR
  sidc["G-C-OXYC--"] = {}; //2.X.2.5.1.4.4 CASS
  sidc["G-C-OXYS--"] = {}; //2.X.2.5.1.4.5 DICASS
  sidc["G-C-OXYB--"] = {}; //2.X.2.5.1.4.6 BT
  sidc["G-C-OXYA--"] = {}; //2.X.2.5.1.4.7 ANM
  sidc["G-C-OXYV--"] = {}; //2.X.2.5.1.4.8 VLAD
  sidc["G-C-OXYT--"] = {}; //2.X.2.5.1.4.9 ATAC
  sidc["G-C-OXYR--"] = {}; //2.X.2.5.1.4.10 RO
  sidc["G-C-OXYK--"] = {}; //2.X.2.5.1.4.11 KINGPIN
  sidc["G-C-OXN---"] = {}; //2.X.2.5.1.5 FORMATION
  sidc["G-C-OXH---"] = {}; //2.X.2.5.1.6 HARBOUR
  sidc["G-C-OXHQ--"] = {}; //2.X.2.5.1.6.1 POINT Q
  sidc["G-C-OXHA--"] = {}; //2.X.2.5.1.6.2 POINT A
  sidc["G-C-OXHY--"] = {}; //2.X.2.5.1.6.3 POINT Y
  sidc["G-C-OXHX--"] = {}; //2.X.2.5.1.6.4 POINT X
  sidc["G-C-OXR---"] = {}; //2.X.2.5.1.7 ROUTE
  sidc["G-C-OXRR--"] = {}; //2.X.2.5.1.7.1 RENDEZVOUS
  sidc["G-C-OXRD--"] = {}; //2.X.2.5.1.7.2 DIVERSIONS
  sidc["G-C-OXRW--"] = {}; //2.X.2.5.1.7.3 WAYPOINT
  sidc["G-C-OXRP--"] = {}; //2.X.2.5.1.7.4 PIM
  sidc["G-C-OXRT--"] = {}; //2.X.2.5.1.7.5 POINT R
  sidc["G-C-OXSTC-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.1 COMBATANT STATION
  sidc["G-C-OXSTCP"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.1.1 PICKET STATION
  sidc["G-C-OXSTCA"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.1.2 ASW SHIP STATION
  sidc["G-C-OXSTR-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.2 REPLENISHMENT AT SEA (RAS) STATION
  sidc["G-C-OXSTH-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.3 RESCUE STATION
  sidc["G-C-OXSTS-"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.4 SUBMARINE STATION
  sidc["G-C-OXSTSA"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 92,
      fontsize: 30,
      fontweight: "bold"
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 128,
      fontsize: 30,
      fontweight: "bold"
    }
  }; //2.X.2.5.1.8.5 ASW SUBMARINE STATION
  sidc["G-C-OXS---"] = {}; //2.X.2.5.1.9 SEARCH
  sidc["G-C-OXSA--"] = {}; //2.X.2.5.1.9.1 SEARCH AREA
  sidc["G-C-OXSD--"] = {}; //2.X.2.5.1.9.2 DIP POSITION
  sidc["G-C-OXSC--"] = {}; //2.X.2.5.1.9.3 SEARCH CENTRE
  sidc["G-C-OXAC--"] = {}; //2.X.2.5.1.10.1 COMBAT AIR PATROL (CAP)
  sidc["G-C-OXAA--"] = {}; //2.X.2.5.1.10.2 AIRBORNE EARLY WARNING (AEW)
  sidc["G-C-OXAT--"] = {}; //2.X.2.5.1.10.3 TACAN
  sidc["G-C-OXAK--"] = {}; //2.X.2.5.1.10.4 TANKING
  sidc["G-C-OXAF--"] = {}; //2.X.2.5.1.10.5 ANTISUBMARINE WARFARE FIXED WING
  sidc["G-C-OXAH--"] = {}; //2.X.2.5.1.10.6 ANTISUBMARINE WARFARE ROTARY WING
  sidc["G-C-OXAO--"] = {}; //2.X.2.5.1.10.7 TOMCAT
  sidc["G-C-OXAR--"] = {}; //2.X.2.5.1.10.8 RESCUE
  sidc["G-C-OXAP--"] = {}; //2.X.2.5.1.10.9 REPLENISH
  sidc["G-C-OXAM--"] = {}; //2.X.2.5.1.10.10 MARSHALL
  sidc["G-C-OXAS--"] = {}; //2.X.2.5.1.10.11 STRIKE IP
  sidc["G-C-OXAD--"] = {}; //2.X.2.5.1.10.12 CORRIDOR TAB
  sidc["G-C-OG----"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2 GENERAL OR UNSPECIFIED COMMAND AND CONTROL POINT
  sidc["G-C-OGC---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    uniqueDesignation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 10,
      fontsize: 35,
      fontweight: "bold"
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.1 CHECKPOINT
  sidc["G-C-OGP---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 40,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.5.2.2 CONTACT POINT
  sidc["G-C-OGT---"] = {}; //2.X.2.5.2.3 COORDINATION POINT
  sidc["G-C-OGD---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //2.X.2.5.2.4 DECISION POINT
  sidc["G-C-OGL---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.5 LINKUP POINT
  sidc["G-C-OGN---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.6 PASSAGE POINT
  sidc["G-C-OGR---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.7 RALLY POINT
  sidc["G-C-OGS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.8 RELEASE POINT
  sidc["G-C-OGI---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 45,
      fontsize: 40
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 0,
      fontsize: 80
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  }; //2.X.2.5.2.9 START POINT
  sidc["G-C-OGW---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 125,
      fontsize: 70
    }
  }; //2.X.2.5.2.10 WAY POINT
  sidc["G-O-VA----"] = {}; //2.X.3.1.1 ARSON/FIRE
  sidc["G-O-VR----"] = {}; //2.X.3.1.2 ARTILLERY/ARTILLERY FIRE
  sidc["G-O-VE----"] = {}; //2.X.3.1.3 ASSASSINA TION/MURDER/ EXECUTION
  sidc["G-O-VB----"] = {}; //2.X.3.1.4 BOMB/BOMBING
  sidc["G-O-VY----"] = {}; //2.X.3.1.5 BOOBYTRAP
  sidc["G-O-VD----"] = {}; //2.X.3.1.6 DRIVE-BY SHOOTING
  sidc["G-O-VI----"] = {}; //2.X.3.1.7 INDIRECT FIRE (UNSPECIFIED TYPE)
  sidc["G-O-VM----"] = {}; //2.X.3.1.8 MORTAR/MORTAR FIRE
  sidc["G-O-VK----"] = {}; //2.X.3.1.9 ROCKET/ROCKET FIRE
  sidc["G-O-VS----"] = {}; //2.X.3.1.10 SNIPING
  sidc["G-O-VP----"] = {}; //2.X.3.1.11 POISONING
  sidc["G-O-VU----"] = {}; //2.X.3.1.12 AMBUSH
  sidc["G-O-VC----"] = {}; //2.X.3.1.13 AMMUNITION CACHE
  sidc["G-O-VH----"] = {}; //2.X.3.1.14 HELICOPTER (CIVILIAN BEING USED BY HOSTILE OR INSURGENTS
  sidc["G-O-VF----"] = {}; //2.X.3.1.15 HOSTILE OR INSURGENT MOTORIZED INFANTRY
  sidc["G-O-VO----"] = {}; //2.X.3.1.16 HOSTILE OR INSURGENT INFANTRY
  sidc["G-O-VL----"] = {}; //2.X.3.1.17 RECONNAISSANCE/SURVEILLANC E
  sidc["G-O-VX----"] = {}; //2.X.3.1.18 SIGNAL/RADIO STATION
  sidc["G-O-VZ----"] = {}; //2.X.3.1.19 SUPPLY CACHE
  sidc["G-O-LB----"] = {}; //2.X.3.2.1 BLACK LIST LOCATION
  sidc["G-O-LG----"] = {}; //2.X.3.2.2 GRAY LIST LOCATION
  sidc["G-O-LW----"] = {}; //2.X.3.2.3 WHITE LIST LOCATION
  sidc["G-O-PR----"] = {}; //2.X.3.3.1 ROAD BLOCK
  sidc["G-O-PRB---"] = {}; //2.X.3.3.1.1 ROAD BLOCK (UNDER CONSTRUCTION)
  sidc["G-O-PT----"] = {}; //2.X.3.3.2 PATROLLING
  sidc["G-O-PC----"] = {}; //2.X.3.3.3 RECRUITMENT (WILLING)
  sidc["G-O-PCU---"] = {}; //2.X.3.3.3.1 RECRUITMENT (COERCED/IMPRESSED)
  sidc["G-O-PD----"] = {}; //2.X.3.3.4 DEMONSTRATION
  sidc["G-O-PM----"] = {}; //2.X.3.3.5 MINELAYING
  sidc["G-O-PH----"] = {}; //2.X.3.3.6 PSYCHOLOGICAL OPERATIONS (PSYOP)
  sidc["G-O-PHY---"] = {}; //2.X.3.3.6.1 PSYOP (TV AND RADIO PROPAGANDA)
  sidc["G-O-PHW---"] = {}; //2.X.3.3.6.2 PSYOP (WRITTEN PROPAGANDA)
  sidc["G-O-PHG---"] = {}; //2.X.3.3.6.3 WRITTEN PROPAGANDA
  sidc["G-O-PHT---"] = {}; //2.X.3.3.6.4 HOUSE-TO-HOUSE PROPAGANDA
  sidc["G-O-PG----"] = {}; //2.X.3.3.7 FORAGING/SEARCHING
  sidc["G-O-PS----"] = {}; //2.X.3.3.8 SPY
  sidc["G-O-PF----"] = {}; //2.X.3.3.9 FOOD DISTRIBUTION
  sidc["G-O-PI----"] = {}; //2.X.3.3.10 MEDICAL TREATMENT FACILITY
  sidc["G-O-PE----"] = {}; //2.X.3.3.11 ELECTRONIC WARFARE INTERCEPT
  sidc["G-O-PX----"] = {}; //2.X.3.3.12 EXTORTION
  sidc["G-O-PJV---"] = {}; //2.X.3.3.13.1 HIJACKING (VEHICLE)
  sidc["G-O-PJA---"] = {}; //2.X.3.3.13.2 HIJACKING (AIRPLANE)
  sidc["G-O-PJB---"] = {}; //2.X.3.3.13.3 HIJACKING (BOAT)
  sidc["G-O-PK----"] = {}; //2.X.3.3.14 KIDNAPPING
  sidc["G-O-PA----"] = {}; //2.X.3.3.15 ARREST
  sidc["G-O-PO----"] = {}; //2.X.3.3.16 DRUG OPERATION
  sidc["G-O-IR----"] = {}; //2.X.3.4.1 REFUGEES
  sidc["G-O-IS----"] = {}; //2.X.3.4.2 SAFE HOUSE
  sidc["G-O-IG----"] = {}; //2.X.3.4.3 GRAFFITI
  sidc["G-O-IV----"] = {}; //2.X.3.4.4 V ANDALISM/RAPE/LOOT/ RANSACK/PLUNDER/SACK
  sidc["G-O-IK----"] = {}; //2.X.3.4.5 KNOWN INSURGENT VEHICLE
  sidc["G-O-ID----"] = {}; //2.X.3.4.6 DRUG VEHICLE
  sidc["G-O-IF----"] = {}; //2.X.3.4.7 INTERNAL SECURITY FORCE
}
