import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/tactical-points.js";
import labels from "../labels/tactical-points.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  labels: labels,
  icons: function controlmeasure(
    sidc,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Control Measure
    if (symbolSet == "25") {
      sidc["130100"] = icn["TP.ACTION POINT"]; //Command and Control Points / Unspecified Control Point
      bbox["130100"] = { x1: 60, x2: 140, y1: -60 };
      sidc["130200"] = icn["TP.ACTION AMNESTY POINT"]; //Command and Control Points / Amnesty Point
      bbox["130200"] = { x1: 60, x2: 140, y1: -60 };
      sidc["130300"] = icn["TP.ACTION CHECK POINT"]; //Command and Control Points / Checkpoint
      bbox["130300"] = { x1: 60, x2: 140, y1: -60 };
      sidc["130400"] = icn["TP.CENTRE OF MAIN EFFORT"]; //Command and Control Points / Center of Main Effort
      bbox["130400"] = { x1: 25, x2: 175, y1: 65, y2: 135 };
      sidc["130500"] = icn["TP.CONTACT POINT"]; //Command and Control Points / Contact Point
      bbox["130500"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["130600"] = icn["TP.COORDINATION POINT"]; //Command and Control Points / Coordinating Point
      bbox["130600"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["130700"] = icn["TP.DECISION POINT"]; //Command and Control Points / Decision Point
      bbox["130700"] = { x1: 30, x2: 170, y1: 25, y2: 160 };
      sidc["130800"] = icn["TP.DISTRESS CALL"]; //Command and Control Points / Distress Call
      bbox["130800"] = { x1: 60, x2: 140, y1: -60 };
      sidc["130900"] = icn["TP.ENTRY CONTROL POINT"]; //Command and Control Points / Entry Control Point
      bbox["130900"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131001"] = icn["TP.FLY-TO-POINT (SONOBUOY)"]; //Command and Control Points / Fly-To-Point / Sonobuoy
      bbox["131001"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131002"] = icn["TP.FLY-TO-POINT (WEAPON)"]; //Command and Control Points / Fly-To-Point / Weapon
      bbox["131002"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131003"] = icn["TP.FLY-TO-POINT (NORMAL)"]; //Command and Control Points / Fly-To-Point / Normal
      bbox["131003"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131100"] = icn["TP.ACTION LINKUP POINT"]; //Command and Control Points / Linkup Point
      bbox["131100"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131200"] = icn["TP.ACTION PASSAGE POINT"]; //Command and Control Points / Passage Point
      bbox["131200"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131300"] = icn["TP.POINT OF INTEREST"]; //Command and Control Points / Point of Interest
      bbox["131300"] = { x1: 50, x2: 150, y1: -25 };
      sidc["131301"] = icn["POINT OF INTEREST – LAUNCH EVENT"]; //Command and Control Points / Point of Interest / Launch Event
      bbox["131301"] = { x1: 50, x2: 150, y1: -25 };
      sidc["131400"] = icn["TP.ACTION RALLY POINT"]; //Command and Control Points / Rally Point
      bbox["131400"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131500"] = icn["TP.ACTION RELEASE POINT"]; //Command and Control Points / Release Point
      bbox["131500"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131600"] = icn["TP.ACTION START POINT"]; //Command and Control Points / Start Point
      bbox["131600"] = { x1: 60, x2: 140, y1: -60 };
      sidc["131700"] = icn["TP.SPECIAL POINT"]; //Command and Control Points / Special Point
      bbox["131700"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["131800"] = icn["TP.WAYPOINT"]; //Command and Control Points / Waypoint
      bbox["131800"] = { x1: 60, x2: 140, y1: 60, y2: 140 };
      sidc["131900"] = icn["TP.AIRFIELD"]; //Command and Control Points / Airfield
      bbox["131900"] = { x1: 35, x2: 165, y1: 60, y2: 125 };
      sidc["132000"] = icn["TP.TARGET HANDOVER"]; //Command and Control Points / Target Handover
      bbox["132000"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["132100"] = icn["TP.KEY TERRAIN"]; //Command and Control Points / Key Terrain
      sidc["160100"] = icn["TP.OBSERVATION POST/OUTPOST"]; //Maneuver Points / Observation Post/Outpost (unspecified)
      bbox["160100"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160200"] = icn["TP.OBSERVATION POST/OUTPOST"]; // N/A //Maneuver Points / Observation Post/Outpost (specified)
      bbox["160200"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160201"] = icn["TP.OBSERVATION POST/RECONNAISSANCE"]; //Maneuver Points / Observation Post/Outpost (specified) / Reconnaissance Outpost
      bbox["160201"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160202"] = icn["TP.FORWARD OBSERVER POSITION"]; //Maneuver Points / Observation Post/Outpost (specified) / Forward Observer/Spotter Outpost/Position
      bbox["160202"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160203"] = icn["TP.CBRN OBSERVATION POST"]; //Maneuver Points / Observation Post/Outpost (specified) / CBRN Observation Outpost
      bbox["160203"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160204"] = icn["TP.SENSOR OUTPOST"]; //Maneuver Points / Observation Post/Outpost (specified) / Sensor Outpost /Listening Post
      bbox["160204"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160205"] = icn["TP.COMBAT OUTPOST"]; //Maneuver Points / Observation Post/Outpost (specified) / Combat Outpost
      bbox["160205"] = { x1: 50, x2: 150, y1: 40, y2: 150 };
      sidc["160300"] = icn["TP.TARGET REFERENCE"]; //Maneuver Points / Target Reference Point
      sidc["160400"] = icn["TP.POINT OF DEPARTURE"]; //Maneuver Points / Point of Departure
      bbox["160400"] = { x1: 60, x2: 140, y1: -60 };
      sidc["180000"] = icn["TP.AIR CONTROL POINT"]; //Airspace Control Points
      bbox["180000"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
      sidc["180100"] = icn["TP.AIR CONTROL POINT (ACP)"]; //Airspace Control Points / Air Control Point
      bbox["180100"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["180200"] = icn["TP.COMMUNICATIONS CHECKPOINT"]; //Airspace Control Points / Communications Checkpoint
      bbox["180200"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["180300"] = icn["TP.DOWNED AIRCREW PICKUP POINT"]; //Airspace Control Points / Downed Aircraft Pick–up Point
      bbox["180300"] = { x1: 60, x2: 140, y1: -60 };
      sidc["180400"] = icn["TP.PULL-UP POINT"]; //Airspace Control Points / Pop–up Point
      bbox["180400"] = { x1: 50, x2: 240, y1: 50, y2: 150 };
      sidc["180500"] = icn["TP.AIR CONTROL RENDEZVOUS"]; //Airspace Control Points / Air Control Rendezvous
      bbox["180500"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["180600"] = icn["TP.TACAN"]; //Airspace Control Points / Tactical Air Navigation (TACAN)
      bbox["180600"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["180700"] = icn["TP.CAP STATION"]; //Airspace Control Points / Combat Air Patrol (CAP)Station
      bbox["180700"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["180800"] = icn["TP.AEW STATION"]; //Airspace Control Points / Airborne Early Warning (AEW) Station
      bbox["180800"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["180900"] = icn["TP.FIXED WING"]; //Airspace Control Points / ASW (Helo and F/W) Station
      sidc["181000"] = icn["TP.STRIKE IP"]; //Airspace Control Points / Strike Initial Point
      bbox["181000"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["181100"] = icn["TP.REPLENISHMENT STATION"]; //Airspace Control Points / Replenishment Station
      bbox["181100"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["181200"] = icn["TP.TANKING"]; //Airspace Control Points / Tanking
      bbox["181200"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["181300"] = icn["TP.SUCAP - ROTARY WING"]; //Airspace Control Points / Antisubmarine Warfare, Rotary Wing
      bbox["181300"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
      sidc["181400"] = icn["TP.SUCAP - FIXED WING"]; //Airspace Control Points / Surface Combat Air Patrol (SUCAP) – Fixed Wing
      bbox["181400"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
      sidc["181500"] = icn["TP.SUCAP - ROTARY WING"]; //Airspace Control Points / SUCAP – Rotary Wing
      bbox["181500"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
      sidc["181600"] = icn["TP.MIW - FIXED WING"]; //Airspace Control Points / MIW – Fixed Wing
      bbox["181600"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
      sidc["181700"] = icn["TP.MIW - ROTARY WING"]; //Airspace Control Points / MIW – Rotary Wing
      bbox["181700"] = { x1: 60, x2: 140, y1: 40, y2: 160 };
      sidc["181800"] = icn["TP.TOMCAT"]; //Airspace Control Points / Tomcat
      bbox["181800"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["181900"] = icn["TP.RESCUE"]; //Airspace Control Points / Rescue
      bbox["181900"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["182000"] = icn["TP.UNMANNED AERIAL SYSTEM"]; //Airspace Control Points / Unmanned Aerial System (UAS/UA)
      bbox["182000"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["182100"] = icn["TP.VTUA"]; //Aircraft (VTUA)
      bbox["182100"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["182200"] = icn["TP.ORBIT"]; //Aircraft (VTUA) / Orbit
      bbox["182200"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["182300"] = icn["TP.ORBIT - FIGURE EIGHT"]; //Aircraft (VTUA) / Orbit – Figure Eight
      bbox["182300"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["182400"] = icn["TP.ORBIT - RACE TRACK"]; //Aircraft (VTUA) / Orbit – Race Track
      bbox["182400"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["182500"] = icn["TP.ORBIT - RANDOM, CLOSED"]; //Aircraft (VTUA) / Orbit – Random Closed
      bbox["182500"] = { x1: 60, x2: 140, y1: 30, y2: 170 };
      sidc["200400"] = icn["TP.SHIP AREA OF INTEREST (AEGIS ONLY)"]; //Maritime Control Areas / Ship Area of Interest
      sidc["200500"] = icn["TP.ACTIVE MANOEUVRE AREA (AEGIS ONLY)"]; //Maritime Control Areas / Active Maneuver Area
      bbox["200500"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["200600"] = icn["TODO"]; //Maritime Control Areas / Cued Acquisition Doctrine
      sidc["200700"] = icn["TODO"]; //Maritime Control Areas / Radar Search Doctrine
      sidc["210100"] = icn["TP.PLAN SHIP"]; //Maritime Control Points / Plan Ship
      bbox["210100"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["210200"] = icn["TP.AIM POINT"]; //Maritime Control Points / Aim Point
      bbox["210200"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["210300"] = icn["TP.DEFENDED ASSET"]; //Maritime Control Points / Defended Asset
      sidc["210400"] = icn["TP.DROP POINT"]; //Maritime Control Points / Drop Point
      bbox["210400"] = { x1: 50, x2: 150, y1: 50, y2: 120 };
      sidc["210500"] = icn["TP.ENTRY POINT"]; //Maritime Control Points / Entry Point
      bbox["210500"] = { x1: 50, x2: 150, y1: 50 };
      sidc["210600"] = icn["TP.AIR DETONATION"]; //Maritime Control Points / Air Detonation
      sidc["210700"] = icn["TP.GROUND ZERO"]; //Maritime Control Points / Ground Zero
      bbox["210700"] = { x1: 50, x2: 150, y1: 30 };
      sidc["210800"] = icn["TP.IMPACT POINT"]; //Maritime Control Points / Impact Point
      bbox["210800"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["210900"] = icn["TP.PREDICTED IMPACT POINT"]; //Maritime Control Points / Predicted Impact Point
      bbox["210900"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["211000"] = icn["TP.LAUNCHED TORPEDO (AEGIS ONLY)"]; //Maritime Control Points / Launched Torpedo
      bbox["211000"] = { x1: 50, x2: 150, y1: 90, y2: 110 };
      sidc["211100"] = icn["TP.MSL DETECT POINT"]; //Maritime Control Points / Missile Detection Point
      bbox["211100"] = { x1: 50, x2: 150, y1: 30 };
      sidc["211200"] = icn["TP.ACOUSTIC COUNTER MEASURE (DECOY)"]; //Maritime Control Points / Acoustic Countermeasure (Decoy)
      bbox["211200"] = { x1: 50, x2: 150, y1: 30 };
      sidc["211300"] = icn["TP.ELECTRONIC COUNTER MEASURES (ECM) DECOY"]; //Maritime Control Points / Electronic Countermeasures (ECM) Decoy
      bbox["211300"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["211400"] = icn["TP.BRIEF CONTACT"]; //Maritime Control Points / Brief Contact
      bbox["211400"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
      sidc["211500"] = icn["TP.DATUM"]; //Maritime Control Points / Datum Lost Contact
      bbox["211500"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["211600"] = icn["TP.BT BOUY DROP"]; //Maritime Control Points / BT Buoy Drop
      bbox["211600"] = { x1: 50, x2: 150, y1: 40, y2: 160 };
      sidc["211700"] = icn["TP.REPORTED BOTTOMED SUB"]; //Maritime Control Points / Reported Bottomed Sub
      sidc["211800"] = icn["TP.MOVING HAVEN"]; //Maritime Control Points / Moving Haven
      bbox["211800"] = { x1: 40, x2: 160, y1: 50, y2: 150 };
      sidc["211900"] = icn["TP.SCREEN CENTRE"]; //Maritime Control Points / Screen Center
      sidc["212000"] = icn["TP.LOST CONTACT"]; //Maritime Control Points / Lost Contact
      bbox["212000"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
      sidc["212100"] = icn["TP.SINKER"]; //Maritime Control Points / Sinker
      bbox["212100"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
      sidc["212200"] = icn["TP.TRIAL TRACK"]; //Maritime Control Points / Trial Track
      bbox["212200"] = { x1: 50, x2: 150, y1: 0, y2: 100 };
      sidc["212300"] = icn["TP.FIX ACOUSTIC"]; //Maritime Control Points / Acoustic Fix
      sidc["212400"] = icn["TP.FIX ELECTRO-MAGNETIC"]; //Maritime Control Points / Electromagnetic Fix
      sidc["212500"] =
        icn["TP.ELECTRO MAGNETIC - MAGNETIC ANOMALY DETECTION (MAD)"]; //Maritime Control Points / Electromagnetic – Magnetic Anomaly Detection (MAD)
      bbox["212500"] = { x1: 50, x2: 150, y1: 50, y2: 180 };
      sidc["212600"] = icn["TP.FIX ELECTRO-OPTICAL"]; //Maritime Control Points / Optical Fix
      sidc["212700"] = icn["TP.TARGET REFERENCE"]; //Maritime Control Points / Formation
      sidc["212800"] = icn["TP.HARBOR"]; //Maritime Control Points / Harbor
      bbox["212800"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["212900"] = icn["TP.HARBOR"]; //Maritime Control Points / Harbor Entrance Point
      bbox["212900"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["212901"] = icn["TP.HARBOR POINT A"]; //Maritime Control Points / Harbor Entrance Point / A
      bbox["212901"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["212902"] = icn["TP.HARBOR POINT Q"]; //Maritime Control Points / Harbor Entrance Point / Q
      bbox["212902"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["212903"] = icn["TP.HARBOR POINT X"]; //Maritime Control Points / Harbor Entrance Point / X
      bbox["212903"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["212904"] = icn["TP.HARBOR POINT Y"]; //Maritime Control Points / Harbor Entrance Point / Y
      bbox["212904"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["213000"] = icn["TP.DIP POSITION"]; //Maritime Control Points / Dip Position
      bbox["213000"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["213100"] = icn["TP.SEARCH"]; //Maritime Control Points / Search
      bbox["213100"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["213200"] = icn["TP.SEARCH AREA"]; //Maritime Control Points / Search Area
      bbox["213200"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["213300"] = icn["TP.SEARCH CENTER"]; //Maritime Control Points / Search Center
      bbox["213300"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["213400"] = icn["TP.NAVIGATIONAL REFERENCE"]; //Maritime Control Points / Navigational Reference Point
      sidc["213500"] = icn["TP.SONOBUOY"]; //Maritime Control Points / Sonobuoy
      bbox["213500"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213501"] = icn["TP.SONOBUOY ANM"]; //Maritime Control Points / Sonobuoy / Ambient Noise
      bbox["213501"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213502"] = icn["TP.SONOBUOY ATAC"]; //Maritime Control Points / Sonobuoy / Air Transportable Communication
      bbox["213502"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213503"] = icn["TP.SONOBUOY BARRA"]; //Maritime Control Points / Sonobuoy / Barra
      bbox["213503"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213504"] =
        icn["TP.SONOBUOY BATHYTHERMOGRAPH TRANSMITTING SONOBUOY (BT)"]; //Maritime Control Points / Sonobuoy / Bathythermograph Transmitting
      bbox["213504"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213505"] =
        icn["TP.SONOBUOY COMMAND ACTIVE MULTIBEAM SONOBUOY (CAMBS)"]; //Maritime Control Points / Sonobuoy / Command Active Multi-Beam (CAMBS)
      bbox["213505"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213506"] = icn["TP.SONOBUOY CASS"]; //Maritime Control Points / Sonobuoy / Command Active Sonobuoy Directional Command Active Sonobuoy System (CASS)
      bbox["213506"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213507"] = icn["TP.SONOBUOY DIFAR"]; //Maritime Control Points / Sonobuoy / Directional Frequency Analysis and Recording (DIFAR)
      bbox["213507"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213508"] = icn["TP.SONOBUOY DICASS"]; //Maritime Control Points / Sonobuoy / Directional Command Active Sonobuoy System (DICASS)
      bbox["213508"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213509"] =
        icn["TP.SONOBUOY EXPENDABLE RELIABLE ACOUSTIC PATH SONOBUOY (ERAPS)"]; //Maritime Control Points / Sonobuoy / Expendable Reliable Acoustic Path Sonobuoy (ERAPS)
      bbox["213509"] = { x1: 60, x2: 140, y1: -10, y2: 160 };
      sidc["213510"] = icn["TP.SONOBUOY EXPIRED"]; //Maritime Control Points / Sonobuoy / Expired
      bbox["213510"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
      sidc["213511"] = icn["TP.SONOBUOY KINGPIN"]; //Maritime Control Points / Sonobuoy / Kingpin
      bbox["213511"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
      sidc["213512"] = icn["TP.SONOBUOY LOFAR"]; //Maritime Control Points / Sonobuoy / Low Frequency Analysis and Recording (LOFAR)
      bbox["213512"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
      sidc["213513"] = icn["TP.SONOBUOY PATTERN CENTER"]; //Maritime Control Points / Sonobuoy / Pattern Center
      bbox["213513"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
      sidc["213514"] = icn["TP.SONOBUOY RO"]; //Maritime Control Points / Sonobuoy / Range Only
      bbox["213514"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
      sidc["213515"] = icn["TP.SONOBUOY VLAD"]; //Maritime Control Points / Sonobuoy / Vertical Line Array Directional Frequency Analysis and Recording (DIFAR)
      bbox["213515"] = { x1: 40, x2: 160, y1: -10, y2: 160 };
      sidc["213600"] = icn["TP.REFERENCE POINT"]; //Maritime Control Points / Reference Point
      bbox["213600"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["213700"] = icn["TP.SPECIAL POINT"]; //Maritime Control Points / Special Point
      bbox["213700"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["213800"] = icn["TP.NAVIGATIONAL REFERENCE"]; //Maritime Control Points / Navigational Reference Point(Points)
      bbox["213800"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["213900"] = icn["TP.DLRP"]; //Maritime Control Points / Data Link Reference Point
      bbox["213900"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214000"] = icn["FORWARD OBSERVER / SPOTTER POSITION"];
      bbox["214000"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
      sidc["214100"] = icn["TP.VITAL AREA CENTRE"]; //Maritime Control Points / Vital Area Center
      bbox["214100"] = { x1: 40, x2: 160, y1: 60, y2: 140 };
      sidc["214200"] = icn["TP.CORRIDOR TAB"]; //Maritime Control Points / Corridor Tab Point
      bbox["214200"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214300"] = icn["TP.ENEMY POINT"]; //Maritime Control Points / Enemy Point
      bbox["214300"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214400"] = icn["TP.MARSHALL POINT"]; //Maritime Control Points / Marshall Point
      bbox["214400"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214500"] = icn["TP.POINT OF INTENDED MOVEMENT"]; //Maritime Control Points / Position and Intended Movement (PIM)
      bbox["214500"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214600"] = icn["TP.PRE-LANDFALL WAYPOINT"]; //Maritime Control Points / Pre-Landfall Waypoint
      bbox["214600"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214700"] = icn["TP.ESTIMATED POSITION (EP)"]; //Maritime Control Points / Estimated Position (EP)
      bbox["214700"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214800"] = icn["TP.REFERENCE POINT WAYPOINT"]; //Maritime Control Points / Waypoint
      bbox["214800"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["214900"] = icn["TP.SUB SURFACE CONTROL STATION"]; //Maritime Control Points / General Sea Subsurface Station
      bbox["214900"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215000"] = icn["TP.SUBMARINE CONTROL STATION"]; //Maritime Control Points / Submarine Sea Subsurface Station
      bbox["215000"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215100"] = icn["TP.ASW SUBMARINE CONTROL STATION"]; //Maritime Control Points / Submarine Antisubmarine Warfare Sea Subsurface Station
      bbox["215100"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215200"] = icn["TP.(UUV) CONTROL STATION"]; //Maritime Control Points / Unmanned Underwater Vehicle Sea Subsurface Station
      bbox["215200"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215300"] = icn["TP.UUV - ASW CONTROL STATION"]; //Maritime Control Points / Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Sea Subsurface Station
      bbox["215300"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215400"] =
        icn["TP.MINE WARFARE UNMANNED UNDERWATER VEHICLE SUBSURFACE STATION"]; //Maritime Control Points / Mine Warfare Unmanned Underwater Vehicle Sea Subsurface Station
      bbox["215400"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215500"] = icn["TP.UUV - SUW CONTROL STATION"]; //Maritime Control Points / Sea Surface Warfare Unmanned Underwater Vehicle Subsurface Station
      bbox["215500"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215600"] = icn["TP.SEA SURFACE CONTROL STATION"]; //Maritime Control Points / General Sea Surface Station
      bbox["215600"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215700"] = icn["TP.ASW CONTROL STATION"]; //Maritime Control Points / Antisubmarine Warfare (ASW) Sea Surface Station
      bbox["215700"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215800"] = icn["TP.MINE WARFARE SURFACE STATION"]; //Maritime Control Points / Mine Warfare Sea Surface Station
      bbox["215800"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["215900"] = icn["TP.NON-COMBATANT SURFACE STATION"]; //Maritime Control Points / Non-Combatant Sea Surface Station
      bbox["215900"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216000"] = icn["TP.PICKET CONTROL STATION"]; //Maritime Control Points / Picket Sea Surface Station
      bbox["216000"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216100"] = icn["TP.RENDEZVOUS CONTROL POINT"]; //Maritime Control Points / Rendezvous Sea Surface Station
      bbox["216100"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216200"] = icn["TP.REPLENISHMENT AT SEA SURFACE STATION"]; //Maritime Control Points / Replenishment at Sea Surface Station
      bbox["216200"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216300"] = icn["TP.RESCUE CONTROL POINT"]; //Maritime Control Points / Rescue Sea Surface Station
      bbox["216300"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216400"] = icn["TP.SUW CONTROL STATION"]; //Maritime Control Points / Surface Warfare Sea Surface Station
      bbox["216400"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216500"] = icn["TP.(USV) CONTROL STATION"]; //Maritime Control Points / Unmanned Underwater Vehicle Sea Surface Station
      bbox["216500"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216600"] = icn["TP.USV - ASW CONTROL STATION"]; //Maritime Control Points / Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Sea Surface Station
      bbox["216600"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216700"] =
        icn["TP.MINE WARFARE UNMANNED UNDERWATER VEHICLE SURFACE STATION"]; //Maritime Control Points / Mine Warfare Unmanned Underwater Vehicle Sea Surface Station
      bbox["216700"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216800"] = icn["TP.(RMV) USV CONTROL STATION"]; //Maritime Control Points / Remote Multi-Mission Vehicle Mine Warfare Unmanned Underwater Sea Surface Station
      bbox["216800"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["216900"] = icn["TP.USV - SUW CONTROL STATION"]; //Maritime Control Points / Surface Warfare Mine Warfare Unmanned Underwater Vehicle Sea Surface Station
      bbox["216900"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["217000"] = icn["TP.SHORE CONTROL STATION"]; //Maritime Control Points / Shore Control Station
      bbox["217000"] = { x1: 40, x2: 160, y1: 40, y2: 160 };
      sidc["217100"] = icn["TP.ROUTE"]; //Maritime Control Points / General Route
      bbox["217100"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["217200"] = icn["TP.ROUTE DIVERSIONS"]; //Maritime Control Points / Diversion Route
      bbox["217200"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
      sidc["217300"] = icn["TP.ROUTE POINT R"]; // ##### FIX TODO ####### //Maritime Control Points / "Position and Intended-Movement (PIM) Route"
      bbox["217300"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
      sidc["217400"] = icn["TP.PICKET ROUTE"]; //Maritime Control Points / Picket Route
      bbox["217400"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
      sidc["217500"] = icn["TP.POINT R ROUTE"]; //Maritime Control Points / Point R Route
      bbox["217500"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
      sidc["217600"] = icn["TP.RENDEZVOUS ROUTE"]; //Maritime Control Points / Rendezvous Route
      bbox["217600"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
      sidc["217700"] = icn["TP.ROUTE WAYPOINT"]; //Maritime Control Points / Waypoint Route
      bbox["217700"] = { x1: 30, x2: 170, y1: 60, y2: 170 };
      sidc["217800"] = icn["TP.CLUTTER, STATIONARY OR CEASE REPORTING"]; //Maritime Control Points / Clutter, Stationary or Cease Reporting
      sidc["217900"] = icn["TP.TENTATIVE OR PROVISIONAL TRACK"]; //Maritime Control Points / Tentative or Provisional Track
      sidc["218000"] = icn["TP.DISTRESSED VESSEL"]; //Maritime Control Points / Distressed Vessel
      sidc["218100"] = icn["TP.DITCHED AIRCRAFT"]; //Maritime Control Points / Ditched Aircraft/Downed Aircraft
      sidc["218200"] = icn["TP.PERSON IN WATER"]; //Maritime Control Points / Person in Water/Bailout
      sidc["218300"] = icn["TP.ICEBERG"]; //Maritime Control Points / Iceberg
      bbox["218300"] = { x1: 50, x2: 150, y1: 50, y2: 150 };
      sidc["218500"] = icn["TP.OIL RIG/PLATFORM"]; //Maritime Control Points / Oil Rig
      bbox["218500"] = { x1: 30, x2: 170, y1: 60, y2: 140 };
      sidc["218600"] = icn["TP.SEA MINELIKE"]; //Maritime Control Points / Sea Mine–Like
      bbox["218600"] = { x1: 40, x2: 160, y1: 40, y2: 150 };
      sidc["218700"] = icn["TP.BOTTOM RETURN"]; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)
      bbox["218700"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
      sidc["218800"] = icn["TP.INSTALLATION/MANMADE"]; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade
      bbox["218800"] = { x1: 40, x2: 160, y1: 40, y2: 100 };
      sidc["218900"] = icn["TP.MARINE LIFE"]; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / Marine Life
      bbox["218900"] = { x1: 100, x2: 220, y1: 70, y2: 130 };
      sidc["219000"] = icn["TP.SEA ANOMALY"]; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / "Sea Anomaly-(Wake, Current, Knuckle)"
      bbox["219000"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
      sidc["219100"] = icn["TP.WRECK, DANGEROUS"]; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / Bottom Return/Non-MILCO, Wreck, Dangerous
      bbox["219100"] = { x1: 40, x2: 160, y1: 70, y2: 130 };
      sidc["219200"] = icn["TP.WRECK, NON DANGEROUS"]; //Maritime Control Points / Bottom Return/Non-Mine, Mine-Like Bottom Object (NOMBO)/Installation Manmade / Bottom Return/Non-MILCO, Wreck, Non Dangerous
      bbox["219200"] = { x1: 40, x2: 160, y1: 70, y2: 130 };
      sidc["240601"] = icn["TP.POINT/SINGLE TARGET"]; //Fires Areas / Point Targets / Point or Single Target
      sidc["240602"] = icn["TP.NUCLEAR TARGET"]; //Fires Areas / Point Targets / Nuclear Target
      sidc["240603"] = icn["TP.TARGETRECORDED (AEGIS ONLY)"]; //Fires Areas / Point Targets / Target-Recorded
      bbox["240603"] = { x1: 0, x2: 200, y1: 50, y2: 150 };
      sidc["240900"] = icn["TP.FIRE SUPPORT STATION"]; //Fires Areas / Fire Support Station
      bbox["240900"] = { x1: 50, x2: 200, y1: 50, y2: 150 };
      sidc["250100"] = icn["TP.FIRING POINT"]; //Fires Points / Firing Point
      bbox["250100"] = { x1: 60, x2: 140, y1: -60 };
      sidc["250200"] = icn["TP.HIDE POINT"]; //Fires Points / Hide Point
      bbox["250200"] = { x1: 60, x2: 140, y1: -60 };
      sidc["250300"] = icn["TP.LAUNCH POINT"]; //Fires Points / Launch Point
      bbox["250300"] = { x1: 60, x2: 140, y1: -60 };
      sidc["250400"] = icn["TP.RELOAD POINT"]; //Fires Points / Reload Point
      bbox["250400"] = { x1: 60, x2: 140, y1: -60 };
      sidc["250500"] = icn["TP.SURVEY CONTROL POINT"]; //Fires Points / Survey Control Point
      bbox["250500"] = { x1: 60, x2: 140, y1: -60 };
      sidc["250600"] = icn["TP.KNOWN POINT"];
      sidc["270701"] = icn["TP.MINEFIELD, STATIC"]; //Protection Areas / Minefields / Minefield, Static Depiction
      bbox["270701"] = { x1: 25, x2: 175, y1: 65, y2: 145 };
      sidc["280100"] = icn["TODO"]; //Protection Points / Abatis
      sidc["280200"] = icn["TP.ANTIPERSONNEL (AP) MINES"]; //Protection Points / Antipersonnel Mine
      sidc["280201"] = icn["TP.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS"]; //Protection Points / Antipersonnel Mine / Antipersonnel Mine with Directional Effects
      bbox["280201"] = { x1: 40, x2: 180, y1: 40, y2: 150 };
      sidc["280300"] = icn["TP.ANTITANK MINE (AT)"]; //Protection Points / Antitank Mine
      sidc["280400"] = icn["TP.(AT) ANTIHANDLING DEVICE"]; //Protection Points / Antitank Mine with Anti-handling Device
      bbox["280400"] = { x1: 60, x2: 140, y1: 40, y2: 195 };
      sidc["280500"] = icn["TP.WIDE AREA MINES"]; //Protection Points / Wide Area Antitank Mine
      sidc["280600"] = icn["TP.UNSPECIFIED MINE"]; //Protection Points / Unspecified Mine
      sidc["280700"] = icn["TP.BOOBY TRAP"]; //Protection Points / Booby Trap
      sidc["280800"] = icn["TP.ENGINEER REGULATING POINT"]; //Protection Points / Engineer Regulating Point
      bbox["280800"] = { x1: 60, x2: 140, y1: -60 };
      sidc["280900"] = icn["TP.EARTHWORK/FORTIFICATION"]; //Protection Points / Shelter
      sidc["281000"] = icn["TP.SURFACE SHELTER"]; //Protection Points / Shelter Above Ground
      sidc["281100"] = icn["TP.UNDERGROUND SHELTER"]; //Protection Points / Below Ground Shelter
      sidc["281200"] = icn["TP.FORT"]; //Protection Points / Fort
      sidc["281300"] = icn["TP.CHEMICAL EVENT"]; //Protection Points / Chemical Event
      bbox["281300"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281301"] = icn["TP.CHEMICAL – TOXIC INDUSTRIAL MATERIAL"]; //Protection Points / Chemical Event
      bbox["281301"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281400"] = icn["TP.BIOLOGICAL EVENT"]; //Protection Points / Biological Event
      bbox["281400"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281401"] = icn["TP.BIOLOGICAL – TOXIC INDUSTRIAL MATERIAL"]; //Protection Points / Biological Event
      bbox["281401"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281500"] = icn["TP.NUCLEAR EVENT"]; //Protection Points / Nuclear Event
      bbox["281500"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281600"] = icn["TP.NUCLEAR EVENT"]; //Protection Points / Nuclear Fallout Producing Event
      bbox["281600"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281700"] = icn["TP.RADIOLOGICAL EVENT"]; //Protection Points / Radiological
      bbox["281700"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281701"] = icn["TP.RADIOLOGICAL – TOXIC INDUSTRIAL MATERIAL"]; //Protection Points / Radiological
      bbox["281701"] = { x1: 25, x2: 175, y1: -10 };
      sidc["281800"] = icn["TP.DECON SITE/POINT"]; //Protection Points / General Decontamination Point/Site
      bbox["281800"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281801"] = icn["TP.ALTERNATE DECON SITE/POINT"]; //Protection Points / General Decontamination Point/Site / Alternate
      bbox["281801"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281802"] = icn["TP.DECON SITE/POINT (EQUIPMENT)"]; //Protection Points / General Decontamination Point/Site / Equipment
      bbox["281802"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281803"] = icn["TP.DECON SITE/POINT (TROOPS)"]; //Protection Points / General Decontamination Point/Site / Troop
      bbox["281803"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281804"] = icn["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"]; //Protection Points / General Decontamination Point/Site / Equipment/Troop
      bbox["281804"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281805"] = icn["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"]; //Protection Points / General Decontamination Point/Site / Operational
      bbox["281805"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281806"] = icn["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"]; //Protection Points / General Decontamination Point/Site / Thorough
      bbox["281806"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281807"] = icn["TP.MAIN EQUIPMENT DECONTAMINATION POINT/SITE"]; //Protection Points / General Decontamination Point/Site / Main Equipment
      bbox["281807"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281808"] = icn["TP.FORWARD TROOP DECONTAMINATION POINT/SITE"]; //Protection Points / General Decontamination Point/Site / Forward Troop
      bbox["281808"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281809"] = icn["TP.WOUNDED PERSONNEL DECONTAMINATION SITE"]; //Protection Points / General Decontamination Point/Site / Wounded Personnel
      bbox["281809"] = { x1: 60, x2: 140, y1: -60 };
      sidc["281901"] = icn["TP.FIXED AND PREFABRICATED"]; //Protection Points / Tetrahedrons, Dragons Teeth, and Other Similar Obstacles / Fixed and Prefabricated
      bbox["281901"] = { x1: 60, x2: 140, y1: 30 };
      sidc["281902"] = icn["TP.TETRAHEDRONS"]; //Protection Points / Tetrahedrons, Dragons Teeth, and Other Similar Obstacles / Movable
      bbox["281902"] = { x1: 60, x2: 140, y1: 30 };
      sidc["281903"] = icn["TP.TETRAHEDRONS MOVABLE"]; //Protection Points / Tetrahedrons, Dragons Teeth, and Other Similar Obstacles / Movable and Prefabricated
      bbox["281903"] = { x1: 60, x2: 140, y1: 30 };
      sidc["282001"] = icn["TP.TOWER LOW"]; //Protection Points / Vertical Obstructions / Tower, Low
      bbox["282001"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
      sidc["282002"] = icn["TP.TOWER HIGH"]; //Protection Points / Vertical Obstructions / Tower, High
      bbox["282002"] = { x1: 50, x2: 150, y1: 30, y2: 120 };
      sidc["320100"] = icn["TP.AMBULANCE EXCHANGE POINT"]; //Sustainment Points / Ambulance Points / Ambulance Exchange Point
      bbox["320100"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320101"] = icn["TP.AMBULANCE EXCHANGE POINT"]; //Sustainment Points / Ambulance Points / Ambulance Exchange Point
      bbox["320101"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320102"] = icn["TP.AMBULANCE CONTROL POINT"]; //Sustainment Points / Ambulance Points / Ambulance Control Point
      bbox["320102"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320103"] = icn["TP.AMBULANCE LOAD POINT"]; //Sustainment Points / Ambulance Points / Ambulance Load Point
      bbox["320103"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320104"] = icn["TP.AMBULANCE RELAY POINT"]; //Sustainment Points / Ambulance Points / Ambulance Relay Point
      bbox["320104"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320200"] = icn["TP.AMMUNITION SUPPLY POINT (ASP)"]; //Sustainment Points / Ammunition Supply Point
      bbox["320200"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320300"] = icn["TP.AMMUNITION TRANSFER POINT (ATP)"]; //Sustainment Points / Ammunition Transfer and Holding Point
      bbox["320300"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320400"] = icn["TP.CANNIBALIZATION POINT"]; //Sustainment Points / Cannibalization Point
      bbox["320400"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320500"] = icn["TP.CASUALTY COLLECTION POINT"]; //Sustainment Points / Casualty Collection Point
      bbox["320500"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320600"] = icn["TP.CIVILIAN COLLECTION POINT"]; //Sustainment Points / Civilian Collection Point
      bbox["320600"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320700"] = icn["TP.DETAINEE COLLECTION POINT"]; //Sustainment Points / Detainee Collection Point
      bbox["320700"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320800"] = icn["TP.EPW COLLECTION POINT"]; //Sustainment Points / Enemy Prisoner of War Collection Point
      bbox["320800"] = { x1: 60, x2: 140, y1: -60 };
      sidc["320900"] = icn["TP.LOGISTICS RELEASE POINT"]; //Sustainment Points / Logistics Release Point
      bbox["320900"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321000"] = icn["TP.MAINTENANCE COLLECTION POINT"]; //Sustainment Points / Maintenance Collection Point (MCP)
      bbox["321000"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321100"] = icn["TP.MEDICAL EVACUATION (MEDEVAC) PICKUP POINT"]; //Sustainment Points / Medical Evacuation Point (MEDEVAC) Pick-Up Point
      bbox["321100"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321200"] = icn["TP.REARM, REFUEL AND RESUPPLY POINT"]; //Sustainment Points / Rearm, Refuel and Resupply Point (R3P)
      bbox["321200"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321300"] = icn["TP.REFUEL ON THE MOVE POINT"]; //Sustainment Points / Refuel on the Move (ROM) Point
      bbox["321300"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321400"] = icn["TP.TRAFFIC CONTROL POST"]; //Sustainment Points / Traffic Control Post (TCP)
      bbox["321400"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321500"] = icn["TP.TRAILER TRANSFER POINT"]; //Sustainment Points / Trailer Transfer Point (TTP)
      bbox["321500"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321600"] = icn["TP.UNIT MAINTENANCE COLLECTION POINT"]; //Sustainment Points / Unit Maintenance Collection Point (UNCP)
      bbox["321600"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321700"] = icn["TP.SUPPLY POINT"]; //Sustainment Points / General Supply Point
      bbox["321700"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321701"] = icn["TP.NATO CLASS I"]; //Sustainment Points / General Supply Point / NATO Class I Supply Point
      bbox["321701"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321702"] = icn["TP.NATO CLASS II"]; //Sustainment Points / General Supply Point / NATO Class II Supply Point
      bbox["321702"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321703"] = icn["TP.NATO CLASS III"]; //Sustainment Points / General Supply Point / NATO Class III Supply Point
      bbox["321703"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321704"] = icn["TP.NATO CLASS IV"]; //Sustainment Points / General Supply Point / NATO Class IV Supply Point
      bbox["321704"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321705"] = icn["TP.NATO CLASS V"]; //Sustainment Points / General Supply Point / NATO Class V Supply Point
      bbox["321705"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321706"] = icn["TP.SUPPLY POINT"]; //Sustainment Points / General Supply Point / NATO Multiple Class Supply Point
      bbox["321706"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321707"] = icn["TP.SP CLASS I"]; //Sustainment Points / General Supply Point / US Class I Supply Point
      bbox["321707"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321708"] = icn["TP.SP CLASS II"]; //Sustainment Points / General Supply Point / US Class II Supply Point
      bbox["321708"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321709"] = icn["TP.SP CLASS III"]; //Sustainment Points / General Supply Point / US Class III Supply Point
      bbox["321709"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321710"] = icn["TP.SP CLASS IV"]; //Sustainment Points / General Supply Point / US Class IV Supply Point
      bbox["321710"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321711"] = icn["TP.SP CLASS V"]; //Sustainment Points / General Supply Point / US Class V Supply Point
      bbox["321711"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321712"] = icn["TP.SP CLASS VI"]; //Sustainment Points / General Supply Point / US Class VI Supply Point
      bbox["321712"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321713"] = icn["TP.SP CLASS VII"]; //Sustainment Points / General Supply Point / US Class VII Supply Point
      bbox["321713"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321714"] = icn["TP.SP CLASS VIII"]; //Sustainment Points / General Supply Point / US Class VIII Supply Point
      bbox["321714"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321715"] = icn["TP.SP CLASS IX"]; //Sustainment Points / General Supply Point / US Class IX Supply Point
      bbox["321715"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321716"] = icn["TP.SP CLASS X"]; //Sustainment Points / General Supply Point / US Class X Supply Point
      bbox["321716"] = { x1: 60, x2: 140, y1: -60 };
      sidc["321800"] = icn["TP.MEDICAL SUPPLY POINT"]; //Sustainment Points / Medical Supply Point
      bbox["321800"] = { x1: 60, x2: 140, y1: -60 };
      sidc["340900"] = icn["TP.DESTROY"]; //Mission Tasks / Destroy
      bbox["340900"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
      sidc["341400"] = icn["TP.INTERDICT"]; //Mission Tasks / Interdict
      bbox["341400"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
      sidc["341600"] = icn["TP.NEUTRALIZE"]; //Mission Tasks / Neutralize
      bbox["341600"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
      sidc["342800"] = icn["TP.SUPPRESS"];
      bbox["342800"] = { x1: 0, x2: 200, y1: 40, y2: 160 };
      //sidc["350000"] = []; // N/A
      //sidc["350100"] = []; // N/A
      sidc["350101"] = icn["MAN MADE SPACE DEBRIS SMALL"];
      sidc["350102"] = icn["MAN MADE SPACE DEBRIS MEDIUM"];
      sidc["350103"] = icn["MAN MADE SPACE DEBRIS BIG"];
      //sidc["350200"] = []; // N/A
      sidc["350201"] = icn["NATURAL SPACE DEBRIS SMALL"];
      sidc["350202"] = icn["NATURAL SPACE DEBRIS MEDIUM"];
      sidc["350203"] = icn["NATURAL SPACE DEBRIS BIG"];

      sIdm1["13"] = [icn["TP.M1.UNSPECIFIED"]];
      sIdm1["14"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE 2"],
        icn["TP.M1.ANTIPERSONNEL MINE 3"]
      ];
      sIdm1["15"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 2"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 3"]
      ];
      sIdm1["16"] = [
        icn["TP.M1.ANTITANK MINE 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.ANTITANK MINE 3"]
      ];
      sIdm1["17"] = [
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 3"]
      ];
      sIdm1["18"] = [
        icn["TP.M1.WIDE AREA ANTITANK MINE 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["19"] = [
        icn["TP.M1.MINE CLUSTER 1"],
        icn["TP.M1.MINE CLUSTER 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["20"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 2"],
        icn["TP.M1.ANTIPERSONNEL MINE 3"]
      ];
      sIdm1["21"] = [
        icn["TP.M1.ANTITANK MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE 2"],
        icn["TP.M1.ANTITANK MINE 3"]
      ];
      sIdm1["22"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.ANTIPERSONNEL MINE 3"]
      ];
      sIdm1["23"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.ANTIPERSONNEL MINE 3"]
      ];
      sIdm1["24"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.MINE CLUSTER 2"],
        icn["TP.M1.ANTIPERSONNEL MINE 3"]
      ];
      sIdm1["25"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 3"]
      ];
      sIdm1["26"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 3"]
      ];
      sIdm1["27"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 3"]
      ];
      sIdm1["28"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.MINE CLUSTER 2"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 3"]
      ];
      sIdm1["29"] = [
        icn["TP.M1.ANTITANK MINE 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.ANTITANK MINE 3"]
      ];
      sIdm1["30"] = [
        icn["TP.M1.ANTITANK MINE 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.ANTITANK MINE 3"]
      ];
      sIdm1["31"] = [
        icn["TP.M1.ANTITANK MINE 1"],
        icn["TP.M1.MINE CLUSTER 2"],
        icn["TP.M1.ANTITANK MINE 3"]
      ];
      sIdm1["32"] = [
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 3"]
      ];
      sIdm1["33"] = [
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 1"],
        icn["TP.M1.MINE CLUSTER 2"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 3"]
      ];
      sIdm1["34"] = [
        icn["TP.M1.WIDE AREA ANTITANK MINE 1"],
        icn["TP.M1.MINE CLUSTER 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["35"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 2"],
        icn["TP.M1.ANTITANK MINE 3"]
      ];
      sIdm1["36"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 2"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 3"]
      ];
      sIdm1["37"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["38"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["39"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 3"]
      ];
      sIdm1["40"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["41"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["42"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["43"] = [
        icn["TP.M1.ANTIPERSONNEL MINE 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["44"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["45"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 3"]
      ];
      sIdm1["46"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["47"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["48"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 3"]
      ];
      sIdm1["49"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.ANTITANK MINE WITH ANTIHANDLING DEVICE 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      sIdm1["50"] = [
        icn["TP.M1.ANTIPERSONNEL MINE WITH DIRECTIONAL EFFECTS 1"],
        icn["TP.M1.WIDE AREA ANTITANK MINE 2"],
        icn["TP.M1.MINE CLUSTER 3"]
      ];
      /*
    sIdm2["01"] = [icn["SP.M2.OPTICAL"]];
//*/
    }
  }
};
