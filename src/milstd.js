// Creates a js file with all standards
import warfighting_2525b from "../dev/2525B warfighting.json";
import tacticalgraphics_2525b from "../dev/2525B tactical-graphics.json";
import signalsintelligence_2525b from "../dev/2525B signals-intelligence.json";
import otherthanwar_2525b from "../dev/2525B other-than-war.json";

import warfighting_2525c from "../dev/2525C warfighting.json";
import tacticalgraphics_2525c from "../dev/2525C tactical-graphics.json";
import signalsintelligence_2525c from "../dev/2525C signals-intelligence.json";
import stabilityoperations_2525c from "../dev/2525C stability-operations.json";
import emergencymanagment_2525c from "../dev/2525C emergency-managment.json";

import air_2525d from "../dev/2525D 01 air.json";
import airmissile_2525d from "../dev/2525D 02 air-missile.json";
import space_2525d from "../dev/2525D 05 space.json";
import spacemissile_2525d from "../dev/2525D 06 space-missile.json";
import landunit_2525d from "../dev/2525D 10 land-unit.json";
import landcivilian_2525d from "../dev/2525D 11 land-civilian.json";
import landequipment_2525d from "../dev/2525D 15 land-equipment.json";
import landinstallation_2525d from "../dev/2525D 20 land-installation.json";
import controlmeasure_2525d from "../dev/2525D 25 control-measure.json";
import seasurface_2525d from "../dev/2525D 30 sea-surface.json";
import seasubsurface_2525d from "../dev/2525D 35 sea-subsurface.json";
import minewarfare_2525d from "../dev/2525D 36 mine-warfare.json";
import activities_2525d from "../dev/2525D 40 activities.json";
import signalsintelligence_2525d from "../dev/2525D 50 signals-intelligence.json";
import cyberspace_2525d from "../dev/2525D 60 cyberspace.json";

import warfighting_app6b from "../dev/APP6-B warfighting.json";
import tacticalgraphics_app6b from "../dev/APP6-B tactical-graphics.json";

import air_app6d from "../dev/APP6-D 01 air.json";
import airmissile_app6d from "../dev/APP6-D 02 air-missile.json";
import space_app6d from "../dev/APP6-D 05 space.json";
import landunit_app6d from "../dev/APP6-D 10 land-unit.json";
import landcivilian_app6d from "../dev/APP6-D 11 land-civilian.json";
import landequipment_app6d from "../dev/APP6-D 15 land-equipment.json";
import landinstallation_app6d from "../dev/APP6-D 20 land-installation.json";
import controlmeasure_app6d from "../dev/APP6-D 25 control-measure.json";
import dismountedindividual_app6d from "../dev/APP6-D 27 dismounted-individual.json";
import seasurface_app6d from "../dev/APP6-D 30 sea-surface.json";
import seasubsurface_app6d from "../dev/APP6-D 35 sea-subsurface.json";
import minewarfare_app6d from "../dev/APP6-D 36 mine-warfare.json";
import activities_app6d from "../dev/APP6-D 40 activities.json";

var ms2525b = {
  WAR: warfighting_2525b,
  TACGRP: tacticalgraphics_2525b,
  SIGINT: signalsintelligence_2525b,
  MOOTW: otherthanwar_2525b
};

var ms2525c = {
  WAR: warfighting_2525c,
  TACGRP: tacticalgraphics_2525c,
  SIGINT: signalsintelligence_2525c,
  STBOPS: stabilityoperations_2525c,
  EMS: emergencymanagment_2525c
};

var ms2525d = {
  "01": air_2525d,
  "02": airmissile_2525d,
  "05": space_2525d,
  "06": spacemissile_2525d,
  "10": landunit_2525d,
  "11": landcivilian_2525d,
  "15": landequipment_2525d,
  "20": landinstallation_2525d,
  "25": controlmeasure_2525d,
  "30": seasurface_2525d,
  "35": seasubsurface_2525d,
  "36": minewarfare_2525d,
  "40": activities_2525d,
  "50": {
    symbolset: "50",
    name: "Signals Intelligence – Space",
    "main icon": signalsintelligence_2525d["main icon"],
    "modifier 1": signalsintelligence_2525d["modifier 1"],
    "modifier 2": signalsintelligence_2525d["modifier 2"]
  },
  "51": {
    symbolset: "51",
    name: "Signals Intelligence – Air",
    "main icon": signalsintelligence_2525d["main icon"],
    "modifier 1": signalsintelligence_2525d["modifier 1"],
    "modifier 2": signalsintelligence_2525d["modifier 2"]
  },
  "52": {
    symbolset: "52",
    name: "Signals Intelligence – Land",
    "main icon": signalsintelligence_2525d["main icon"],
    "modifier 1": signalsintelligence_2525d["modifier 1"],
    "modifier 2": signalsintelligence_2525d["modifier 2"]
  },
  "53": {
    symbolset: "53",
    name: "Signals Intelligence – Surface",
    "main icon": signalsintelligence_2525d["main icon"],
    "modifier 1": signalsintelligence_2525d["modifier 1"],
    "modifier 2": signalsintelligence_2525d["modifier 2"]
  },
  "54": {
    symbolset: "54",
    name: "Signals Intelligence – Subsurface",
    "main icon": signalsintelligence_2525d["main icon"],
    "modifier 1": signalsintelligence_2525d["modifier 1"],
    "modifier 2": signalsintelligence_2525d["modifier 2"]
  },
  "60": cyberspace_2525d
};

var app6b = {
  WAR: warfighting_app6b,
  TACGRP: tacticalgraphics_app6b
};

var app6d = {
  "01": air_app6d,
  "02": airmissile_app6d,
  "05": space_app6d,
  "10": landunit_app6d,
  "11": landcivilian_app6d,
  "15": landequipment_app6d,
  "20": landinstallation_app6d,
  "25": controlmeasure_app6d,
  "27": dismountedindividual_app6d,
  "30": seasurface_app6d,
  "35": seasubsurface_app6d,
  "36": minewarfare_app6d,
  "40": activities_app6d
};

export { ms2525b, ms2525c, ms2525d, app6b, app6d };
