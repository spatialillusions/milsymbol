// Label overrides for tactical points
export default function tacticalPoints(sidc) {
  // Tactical Point Symbols =========================================================================
  // TODO Maybe add some way to define additions for different symbol sets
  var actionPoint = {
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
      y: 30,
      fontsize: 30
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  var actionPoint1 = {
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
  };
  var actionPoint2 = {
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
      y: 20,
      fontsize: 30
    },
    dtg: { stroke: false, textanchor: "end", x: 50, y: -30, fontsize: 40 },
    dtg1: { stroke: false, textanchor: "end", x: 50, y: 10, fontsize: 40 }
  };
  sidc["130100"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -70,
      fontsize: 40
    },
    additionalInformation1: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -25,
      fontsize: 30
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
  }; //Command and Control Points / Unspecified Control Point
  sidc["130200"] = actionPoint; //Command and Control Points / Amnesty Point
  sidc["130300"] = actionPoint; //Command and Control Points / Checkpoint
  sidc["130400"] = {}; //Command and Control Points / Center of Main Effort
  sidc["130500"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //Command and Control Points / Contact Point
  sidc["130600"] = {}; //Command and Control Points / Coordinating Point
  sidc["130700"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //Command and Control Points / Decision Point
  sidc["130800"] = actionPoint; //Command and Control Points / Distress Call
  sidc["130900"] = actionPoint; //Command and Control Points / Entry Control Point
  sidc["131001"] = actionPoint1; //Command and Control Points / Fly-To-Point / Sonobuoy
  sidc["131002"] = actionPoint1; //Command and Control Points / Fly-To-Point / Weapon
  sidc["131003"] = actionPoint1; //Command and Control Points / Fly-To-Point / Normal
  sidc["131100"] = actionPoint; //Command and Control Points / Linkup Point
  sidc["131200"] = actionPoint; //Command and Control Points / Passage Point
  sidc["131300"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 30,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //Command and Control Points / Point of Interest
  sidc["131301"] = {}; //Command and Control Points / Point of Interest / Launch Event
  sidc["131400"] = actionPoint; //Command and Control Points / Rally Point
  sidc["131500"] = actionPoint; //Command and Control Points / Release Point
  sidc["131600"] = actionPoint; //Command and Control Points / Start Point
  sidc["131700"] = {}; //Command and Control Points / Special Point
  sidc["131800"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 125,
      fontsize: 70
    }
  }; //Command and Control Points / Waypoint
  sidc["131900"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 115,
      fontsize: 40
    }
  }; //Command and Control Points / Airfield
  sidc["132000"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40
    }
  }; //Command and Control Points / Target Handover
  sidc["132100"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 100,
      y: 110,
      fontsize: 35,
      fill: "rgb(255,255,255)",
      fontweight: "bold"
    }
  }; //Command and Control Points / Key Terrain
  sidc["160100"] = {}; //Maneuver Points / Observation Post/Outpost (unspecified)
  sidc["160200"] = {}; //Maneuver Points / Observation Post/Outpost (specified)
  sidc["160201"] = {}; //Maneuver Points / Observation Post/Outpost (specified) / Reconnaissance Outpost
  sidc["160202"] = {}; //Maneuver Points / Observation Post/Outpost (specified) / Forward Observer/Spotter Outpost/Position
  sidc["160203"] = {}; //Maneuver Points / Observation Post/Outpost (specified) / CBRN Observation Outpost
  sidc["160204"] = {}; //Maneuver Points / Observation Post/Outpost (specified) / Sensor Outpost /Listening Post
  sidc["160205"] = {}; //Maneuver Points / Observation Post/Outpost (specified) / Combat Outpost
  sidc["160300"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 110,
      y: 90,
      fontsize: 40
    }
  }; //Maneuver Points / Target Reference Point
  sidc["160400"] = actionPoint1; //Maneuver Points / Point of Departure
  sidc["180000"] = {};
  sidc["180100"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 130,
      fontsize: 35
    }
  }; //Airspace Control Points / Air Control Point
  sidc["180200"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 130,
      fontsize: 35
    }
  }; //Airspace Control Points / Communications Checkpoint
  sidc["180300"] = {}; //Airspace Control Points / Downed Aircraft Pick–up Point
  sidc["180400"] = {}; //Airspace Control Points / Pop–up Point
  sidc["180500"] = {}; //Airspace Control Points / Air Control Rendezvous
  sidc["180600"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 70,
      fontsize: 35
    }
  }; //Airspace Control Points / Tactical Air Navigation (TACAN)
  sidc["180700"] = {}; //Airspace Control Points / Combat Air Patrol (CAP)Station
  sidc["180800"] = {}; //Airspace Control Points / Airborne Early Warning (AEW) Station
  sidc["180900"] = {}; //Airspace Control Points / ASW (Helo and F/W) Station
  sidc["181000"] = {}; //Airspace Control Points / Strike Initial Point
  sidc["181100"] = {}; //Airspace Control Points / Replenishment Station
  sidc["181200"] = {}; //Airspace Control Points / Tanking
  sidc["181300"] = {}; //Airspace Control Points / Antisubmarine Warfare, Rotary Wing
  sidc["181400"] = {}; //Airspace Control Points / Surface Combat Air Patrol (SUCAP) – Fixed Wing
  sidc["181500"] = {}; //Airspace Control Points / SUCAP – Rotary Wing
  sidc["181600"] = {}; //Airspace Control Points / MIW – Fixed Wing
  sidc["181700"] = {}; //Airspace Control Points / MIW – Rotary Wing
  sidc["181800"] = {}; //Airspace Control Points / Tomcat
  sidc["181900"] = {}; //Airspace Control Points / Rescue
  sidc["182000"] = {}; //Airspace Control Points / Unmanned Aerial System (UAS/UA)
  sidc["182100"] = {};
  sidc["182200"] = {}; //Aircraft (VTUA)" / Orbit
  sidc["182300"] = {}; //Aircraft (VTUA)" / Orbit – Figure Eight
  sidc["182400"] = {}; //Aircraft (VTUA)" / Orbit – Race Track
  sidc["182500"] = {}; //Aircraft (VTUA)" / Orbit – Random Closed
  sidc["200400"] = {}; //Maritime Control Areas / Ship Area of Interest
  sidc["200500"] = {}; //Maritime Control Areas / Active Maneuver Area
  sidc["200600"] = {}; //Maritime Control Areas / Cued Acquisition Doctrine
  sidc["200700"] = {}; //Maritime Control Areas / Radar Search Doctrine
  sidc["210100"] = {}; //Maritime Control Points / Plan Ship
  sidc["210200"] = {}; //Maritime Control Points / Aim Point
  sidc["210300"] = {}; //Maritime Control Points / Defended Asset
  sidc["210400"] = {}; //Maritime Control Points / Drop Point
  sidc["210500"] = {}; //Maritime Control Points / Entry Point
  sidc["210600"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 70,
      fontsize: 35
    }
  }; //Maritime Control Points / Air Detonation
  sidc["210700"] = {}; //Maritime Control Points / Ground Zero
  sidc["210800"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 35
    }
  }; //Maritime Control Points / Impact Point
  sidc["210900"] = {}; //Maritime Control Points / Predicted Impact Point
  sidc["211000"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 80,
      fontsize: 35
    }
  }; //Maritime Control Points / Launched Torpedo
  sidc["211100"] = {}; //Maritime Control Points / Missile Detection Point
  sidc["211200"] = {}; //Maritime Control Points / Acoustic Countermeasure (Decoy)
  sidc["211300"] = {}; //Maritime Control Points / Electronic Countermeasures (ECM) Decoy
  sidc["211400"] = {}; //Maritime Control Points / Brief Contact
  sidc["211500"] = {}; //Maritime Control Points / Datum Lost Contact
  sidc["211600"] = {}; //Maritime Control Points / BT Buoy Drop
  sidc["211700"] = {}; //Maritime Control Points / Reported Bottomed Sub
  sidc["211800"] = {}; //Maritime Control Points / Moving Haven
  sidc["211900"] = {}; //Maritime Control Points / Screen Center
  sidc["212000"] = {}; //Maritime Control Points / Lost Contact
  sidc["212100"] = {}; //Maritime Control Points / Sinker
  sidc["212200"] = {}; //Maritime Control Points / Trial Track
  sidc["212300"] = {}; //Maritime Control Points / Acoustic Fix
  sidc["212400"] = {}; //Maritime Control Points / Electromagnetic Fix
  sidc["212500"] = {}; //Maritime Control Points / Electromagnetic – Magnetic Anomaly Detection (MAD)
  sidc["212600"] = {}; //Maritime Control Points / Optical Fix
  sidc["212700"] = {}; //Maritime Control Points / Formation
  sidc["212800"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45
    }
  }; //Maritime Control Points / Harbor
  sidc["212900"] = {}; //Maritime Control Points / Harbor Entrance Point
  sidc["212901"] = {}; //Maritime Control Points / Harbor Entrance Point / A
  sidc["212902"] = {}; //Maritime Control Points / Harbor Entrance Point / Q
  sidc["212903"] = {}; //Maritime Control Points / Harbor Entrance Point / X
  sidc["212904"] = {}; //Maritime Control Points / Harbor Entrance Point / Y
  sidc["213000"] = {}; //Maritime Control Points / Dip Position
  sidc["213100"] = {}; //Maritime Control Points / Search
  sidc["213200"] = {}; //Maritime Control Points / Search Area
  sidc["213300"] = {}; //Maritime Control Points / Search Center
  sidc["213400"] = {}; //Maritime Control Points / Navigational Reference Point
  sidc["213500"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 70,
      fontsize: 35
    },
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy
  sidc["213501"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 70,
      fontsize: 35
    },
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Ambient Noise
  sidc["213502"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Air Transportable Communication
  sidc["213503"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Barra
  sidc["213504"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 70,
      fontsize: 35
    },
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Bathythermograph Transmitting
  sidc["213505"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Command Active Multi-Beam (CAMBS)
  sidc["213506"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Command Active Sonobuoy Directional Command Active Sonobuoy System (CASS)
  sidc["213507"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 70,
      fontsize: 35
    },
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Directional Frequency Analysis and Recording (DIFAR)
  sidc["213508"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 70,
      fontsize: 35
    },
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Directional Command Active Sonobuoy System (DICASS)
  sidc["213509"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Expendable Reliable Acoustic Path Sonobuoy (ERAPS)
  sidc["213510"] = {}; //Maritime Control Points / Sonobuoy / Expired
  sidc["213511"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Kingpin
  sidc["213512"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Low Frequency Analysis and Recording (LOFAR)
  sidc["213513"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Pattern Center
  sidc["213514"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Range Only
  sidc["213515"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 70,
      fontsize: 35
    },
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 150,
      y: 105,
      fontsize: 35
    }
  }; //Maritime Control Points / Sonobuoy / Vertical Line Array Directional Frequency Analysis and Recording (DIFAR)
  sidc["213600"] = {}; //Maritime Control Points / Reference Point
  sidc["213700"] = {}; //Maritime Control Points / Special Point
  sidc["213800"] = {}; //Maritime Control Points / Navigational Reference Point(Points)
  sidc["213900"] = {}; //Maritime Control Points / Data Link Reference Point
  sidc["214000"] = {};
  sidc["214100"] = {}; //Maritime Control Points / Vital Area Center
  sidc["214200"] = {}; //Maritime Control Points / Corridor Tab Point
  sidc["214300"] = {}; //Maritime Control Points / Enemy Point
  sidc["214400"] = {}; //Maritime Control Points / Marshall Point
  sidc["214500"] = {}; //Maritime Control Points / Position and Intended Movement (PIM)
  sidc["214600"] = {}; //Maritime Control Points / Pre-Landfall Waypoint
  sidc["214700"] = {}; //Maritime Control Points / Estimated Position (EP)
  sidc["214800"] = {}; //Maritime Control Points / Waypoint
  sidc["214900"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 75,
      fontsize: 30
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 100,
      fontsize: 30
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 125,
      fontsize: 30
    }
  }; //Maritime Control Points / General Sea Subsurface Station
  sidc["215000"] = {}; //Maritime Control Points / Submarine Sea Subsurface Station
  sidc["215100"] = {}; //Maritime Control Points / Submarine Antisubmarine Warfare Sea Subsurface Station
  sidc["215200"] = {}; //Maritime Control Points / Unmanned Underwater Vehicle Sea Subsurface Station
  sidc["215300"] = {}; //Maritime Control Points / Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Sea Subsurface Station
  sidc["215400"] = {}; //Maritime Control Points / Mine Warfare Unmanned Underwater Vehicle Sea Subsurface Station
  sidc["215500"] = {}; //Maritime Control Points / Sea Surface Warfare Unmanned Underwater Vehicle Subsurface Station
  sidc["215600"] = {
    dtg: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 75,
      fontsize: 30
    },
    dtg1: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 100,
      fontsize: 30
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 125,
      fontsize: 30
    }
  }; //Maritime Control Points / General Sea Surface Station
  sidc["215700"] = {}; //Maritime Control Points / Antisubmarine Warfare (ASW) Sea Surface Station
  sidc["215800"] = {}; //Maritime Control Points / Mine Warfare Sea Surface Station
  sidc["215900"] = {}; //Maritime Control Points / Non-Combatant Sea Surface Station
  sidc["216000"] = {}; //Maritime Control Points / Picket Sea Surface Station
  sidc["216100"] = {}; //Maritime Control Points / Rendezvous Sea Surface Station
  sidc["216200"] = {}; //Maritime Control Points / Replenishment at Sea Surface Station
  sidc["216300"] = {}; //Maritime Control Points / Rescue Sea Surface Station
  sidc["216400"] = {}; //Maritime Control Points / Surface Warfare Sea Surface Station
  sidc["216500"] = {}; //Maritime Control Points / Unmanned Underwater Vehicle Sea Surface Station
  sidc["216600"] = {}; //Maritime Control Points / Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Sea Surface Station
  sidc["216700"] = {}; //Maritime Control Points / Mine Warfare Unmanned Underwater Vehicle Sea Surface Station
  sidc["216800"] = {}; //Maritime Control Points / Remote Multi-Mission Vehicle Mine Warfare Unmanned Underwater Sea Surface Station
  sidc["216900"] = {}; //Maritime Control Points / Surface Warfare Mine Warfare Unmanned Underwater Vehicle Sea Surface Station
  sidc["217000"] = {}; //Maritime Control Points / Shore Control Station
  sidc["217100"] = {}; //Maritime Control Points / General Route
  sidc["217200"] = {}; //Maritime Control Points / Diversion Route
  sidc["217300"] = {}; //Maritime Control Points / "Position and Intended-Movement (PIM) Route"
  sidc["217400"] = {}; //Maritime Control Points / Picket Route
  sidc["217500"] = {}; //Maritime Control Points / Point R Route
  sidc["217600"] = {}; //Maritime Control Points / Rendezvous Route
  sidc["217700"] = {}; //Maritime Control Points / Waypoint Route
  sidc["217800"] = {}; //Maritime Control Points / Clutter, Stationary or Cease Reporting
  sidc["217900"] = {}; //Maritime Control Points / Tentative or Provisional Track
  sidc["218000"] = {}; //Maritime Control Points / Distressed Vessel
  sidc["218100"] = {}; //Maritime Control Points / Ditched Aircraft/Downed Aircraft
  sidc["218200"] = {}; //Maritime Control Points / Person in Water/Bailout
  sidc["218300"] = {}; //Maritime Control Points / Iceberg
  sidc["218500"] = {}; //Maritime Control Points / Oil Rig
  sidc["218600"] = {}; //Maritime Control Points / Sea Mine–Like
  sidc["218700"] = {}; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)
  sidc["218800"] = {}; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade
  sidc["218900"] = {}; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / Marine Life
  sidc["219000"] = {}; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / "Sea Anomaly-(Wake, Current, Knuckle)"
  sidc["219100"] = {}; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / Bottom Return/Non-MILCO, Wreck, Dangerous
  sidc["219200"] = {}; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / Bottom Return/Non-MILCO, Wreck, Non Dangerous
  sidc["240601"] = {
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
    targetNumber: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40
    }
  }; //Fires Areas / Point Targets / Point or Single Target
  sidc["240602"] = {
    targetNumber: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40
    }
  }; //Fires Areas / Point Targets / Nuclear Target
  sidc["240603"] = {}; //Fires Areas / Point Targets / Target-Recorded
  sidc["240900"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 195,
      y: 110,
      fontsize: 35,
      fontweight: "bold"
    }
  }; //Fires Areas / Fire Support Station
  sidc["250100"] = actionPoint1; //Fires Points / Firing Point
  sidc["250200"] = actionPoint1; //Fires Points / Hide Point
  sidc["250300"] = actionPoint1; //Fires Points / Launch Point
  sidc["250400"] = actionPoint1; //Fires Points / Reload Point
  sidc["250500"] = actionPoint1; //Fires Points / Survey Control Point
  sidc["250600"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 180,
      y: 80,
      fontsize: 35
    }
  };
  sidc["270601"] = {}; //Protection Areas / Obstacle Bypass / Easy
  sidc["270602"] = {}; //Protection Areas / Obstacle Bypass / Difficult
  sidc["270603"] = {}; //Protection Areas / Obstacle Bypass / Impossible
  sidc["270701"] = {}; //Protection Areas / Minefields / Minefield, Static Depiction
  sidc["280100"] = {}; //Protection Points / Abatis
  sidc["280200"] = {}; //Protection Points / Antipersonnel Mine
  sidc["280201"] = {}; //Protection Points / Antipersonnel Mine / Antipersonnel Mine with Directional Effects
  sidc["280300"] = {}; //Protection Points / Antitank Mine
  sidc["280400"] = {}; //Protection Points / Antitank Mine with Anti-handling Device
  sidc["280500"] = {}; //Protection Points / Wide Area Antitank Mine
  sidc["280600"] = {}; //Protection Points / Unspecified Mine
  sidc["280700"] = {}; //Protection Points / Booby Trap
  sidc["280800"] = actionPoint; //Protection Points / Engineer Regulating Point
  sidc["280900"] = {}; //Protection Points / Shelter
  sidc["281000"] = {}; //Protection Points / Shelter Above Ground
  sidc["281100"] = {}; //Protection Points / Below Ground Shelter
  sidc["281200"] = {}; //Protection Points / Fort
  sidc["281300"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 30,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 40, y: 30, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 90,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 40,
      y: 90,
      fontsize: 35
    }
  }; //Protection Points / Chemical Event
  sidc["281301"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 30,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 40, y: 30, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 90,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 40,
      y: 90,
      fontsize: 35
    }
  };
  sidc["281400"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 30,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 40, y: 30, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 90,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 40,
      y: 90,
      fontsize: 35
    }
  }; //Protection Points / Biological Event
  sidc["281500"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 30,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 40, y: 30, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 90,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 40,
      y: 90,
      fontsize: 35
    }
  }; //Protection Points / Nuclear Event
  sidc["281600"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 30,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 40, y: 30, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 90,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 40,
      y: 90,
      fontsize: 35
    }
  }; //Protection Points / Nuclear Fallout Producing Event
  sidc["281700"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 30,
      fontsize: 35
    },
    dtg: { stroke: false, textanchor: "end", x: 40, y: 30, fontsize: 35 },
    hostile: {
      stroke: false,
      textanchor: "start",
      x: 160,
      y: 90,
      fontsize: 35
    },
    location: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 35
    },
    quantity: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: -20,
      fontsize: 35
    },
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 40,
      y: 90,
      fontsize: 35
    }
  }; //Protection Points / Radiological
  sidc["281800"] = actionPoint; //Protection Points / General Decontamination Point/Site
  sidc["281801"] = actionPoint; //Protection Points / General Decontamination Point/Site / Alternate
  sidc["281802"] = actionPoint; //Protection Points / General Decontamination Point/Site / Equipment
  sidc["281803"] = actionPoint; //Protection Points / General Decontamination Point/Site / Troop
  sidc["281804"] = actionPoint; //Protection Points / General Decontamination Point/Site / Equipment/Troop
  sidc["281805"] = actionPoint; //Protection Points / General Decontamination Point/Site / Operational
  sidc["281806"] = actionPoint; //Protection Points / General Decontamination Point/Site / Thorough
  sidc["281807"] = actionPoint; //Protection Points / General Decontamination Point/Site / Main Equipment
  sidc["281808"] = actionPoint; //Protection Points / General Decontamination Point/Site / Forward Troop
  sidc["281809"] = actionPoint; //Protection Points / General Decontamination Point/Site / Wounded Personnel
  sidc["281901"] = {}; //Protection Points / Tetrahedrons, Dragons Teeth, and Other Similar Obstacles / Fixed and Prefabricated
  sidc["281902"] = {}; //Protection Points / Tetrahedrons, Dragons Teeth, and Other Similar Obstacles / Movable
  sidc["281903"] = {}; //Protection Points / Tetrahedrons, Dragons Teeth, and Other Similar Obstacles / Movable and Prefabricated
  sidc["282001"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 60,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //Protection Points / Vertical Obstructions / Tower, Low
  sidc["282002"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 60,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //Protection Points / Vertical Obstructions / Tower, High
  sidc["320100"] = {}; //Sustainment Points / Ambulance Points
  sidc["320101"] = actionPoint; //Sustainment Points / Ambulance Points / Ambulance Exchange Point
  sidc["320102"] = actionPoint; //Sustainment Points / Ambulance Points / Ambulance Control Point
  sidc["320103"] = actionPoint; //Sustainment Points / Ambulance Points / Ambulance Load Point
  sidc["320104"] = actionPoint; //Sustainment Points / Ambulance Points / Ambulance Relay Point
  sidc["320200"] = actionPoint; //Sustainment Points / Ammunition Supply Point
  sidc["320300"] = actionPoint; //Sustainment Points / Ammunition Transfer and Holding Point
  sidc["320400"] = actionPoint; //Sustainment Points / Cannibalization Point
  sidc["320500"] = actionPoint; //Sustainment Points / Casualty Collection Point
  sidc["320600"] = actionPoint; //Sustainment Points / Civilian Collection Point
  sidc["320700"] = actionPoint; //Sustainment Points / Detainee Collection Point
  sidc["320800"] = actionPoint; //Sustainment Points / Enemy Prisoner of War Collection Point
  sidc["320900"] = actionPoint; //Sustainment Points / Logistics Release Point
  sidc["321000"] = actionPoint; //Sustainment Points / Maintenance Collection Point (MCP)
  sidc["321100"] = actionPoint; //Sustainment Points / Medical Evacuation Point (MEDEVAC) Pick-Up Point
  sidc["321200"] = actionPoint; //Sustainment Points / Rearm, Refuel and Resupply Point (R3P)
  sidc["321300"] = actionPoint; //Sustainment Points / Refuel on the Move (ROM) Point
  sidc["321400"] = actionPoint; //Sustainment Points / Traffic Control Post (TCP)
  sidc["321500"] = actionPoint; //Sustainment Points / Trailer Transfer Point (TTP)
  sidc["321600"] = actionPoint; //Sustainment Points / Unit Maintenance Collection Point (UNCP)
  sidc["321700"] = actionPoint2; //Sustainment Points / General Supply Point
  sidc["321701"] = actionPoint2; //Sustainment Points / General Supply Point / NATO Class I Supply Point
  sidc["321702"] = actionPoint2; //Sustainment Points / General Supply Point / NATO Class II Supply Point
  sidc["321703"] = actionPoint2; //Sustainment Points / General Supply Point / NATO Class III Supply Point
  sidc["321704"] = actionPoint2; //Sustainment Points / General Supply Point / NATO Class IV Supply Point
  sidc["321705"] = actionPoint2; //Sustainment Points / General Supply Point / NATO Class V Supply Point
  sidc["321706"] = {}; //Sustainment Points / General Supply Point / NATO Multiple Class Supply Point
  sidc["321707"] = actionPoint1; //Sustainment Points / General Supply Point / US Class I Supply Point
  sidc["321708"] = actionPoint1; //Sustainment Points / General Supply Point / US Class II Supply Point
  sidc["321709"] = actionPoint1; //Sustainment Points / General Supply Point / US Class III Supply Point
  sidc["321710"] = actionPoint1; //Sustainment Points / General Supply Point / US Class IV Supply Point
  sidc["321711"] = actionPoint1; //Sustainment Points / General Supply Point / US Class V Supply Point
  sidc["321712"] = actionPoint1; //Sustainment Points / General Supply Point / US Class VI Supply Point
  sidc["321713"] = actionPoint1; //Sustainment Points / General Supply Point / US Class VII Supply Point
  sidc["321714"] = actionPoint1; //Sustainment Points / General Supply Point / US Class VIII Supply Point
  sidc["321715"] = actionPoint1; //Sustainment Points / General Supply Point / US Class IX Supply Point
  sidc["321716"] = actionPoint1; //Sustainment Points / General Supply Point / US Class X Supply Point
  sidc["321800"] = actionPoint2; //Sustainment Points / Medical Supply Point
  sidc["340300"] = {}; //Mission Tasks / Bypass
  sidc["340400"] = {}; //Mission Tasks / Canalize
  sidc["340900"] = {}; //Mission Tasks / Destroy
  sidc["341400"] = {}; //Mission Tasks / Interdict
  sidc["341600"] = {}; //Mission Tasks / Neutralize
  sidc["342800"] = {};
  sidc["350101"] = {};
  sidc["350102"] = {};
  sidc["350103"] = {};
  sidc["350201"] = {};
  sidc["350202"] = {};
  sidc["350203"] = {};
}
