import { ms } from "../../ms.js";
import { metadata as metadata_number } from "../metadata.js";
import { geticons as getIcons_number } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "number",
  getMetadata: metadata_number,
  getIcons: getIcons_number,
  iconParts: icons,
  icons: function dismounted(
    sId,
    sIdm1,
    sIdm2,
    bbox,
    symbolSet,
    icn,
    _STD2525
  ) {
    //Adds support for Dismounted Individual
    if (symbolSet == "27") {
      sId["110000"] = [];
      sId["110100"] = [];
      sId["110101"] = [icn["GR.IC.FF.INFANTRY DISMOUNTED"]];
      sId["110102"] = [icn["GR.IC.FF.MEDICAL"]];
      sId["110103"] = [icn["GR.IC.FF.RECONNAISSANCE DISMOUNTED"]];
      sId["110104"] = [icn["GR.IC.FF.SIGNAL DISMOUNTED"]];
      sId["110200"] = [];
      sId["110201"] = [icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]];
      sId["110202"] = [icn["GR.IC.FIELD ARTILLERY OBSERVER"]];
      sId["110203"] = [icn["GR.IC.JOINT FIRE SUPPORT"]];
      sId["110204"] = [icn["GR.IC.LIAISON"]];
      sId["110205"] = [icn["GR.IC.MESSENGER"]];
      sId["110206"] = [icn["GR.IC.MILITARY POLICE"]];
      sId["110207"] = [icn["GR.IC.OBSERVER/OBSERVATION"]];
      sId["110208"] = [icn["GR.IC.SECURITY"]];
      sId["110209"] = [icn["GR.IC.SNIPER"]];
      sId["110210"] = [icn["GR.IC.SPECIAL OPERATIONS FORCES"]];

      sId["110300"] = [];
      sId["110301"] = [icn["GR.EQ.RIFLE"]];
      sId["110302"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.SHORT RANGE"]];
      sId["110303"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.INTERMEDIATE RANGE"]];
      sId["110304"] = [icn["GR.EQ.RIFLE"], icn["GR.EQ.LONG RANGE"]];
      sId["110305"] = [icn["GR.EQ.MACHINE GUN"]];
      sId["110306"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]];
      sId["110307"] = [
        icn["GR.EQ.MACHINE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ];
      sId["110308"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]];
      sId["110309"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
      sId["110310"] = [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
      ];
      sId["110311"] = [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
      ];
      sId["110312"] = [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
      ];
      sId["110313"] = [icn["GR.EQ.FLAME THROWER"]];
      sId["110314"] = [icn["GR.EQ.MORTAR"]];
      sId["110315"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
      sId["110316"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
      /*
    sId["110317"] = [];
    sId["110318"] = [ms._scale(0.5, [icn["GR.EQ.MACHINE GUN"]])];
    sId["110319"] = [
      ms._translate(0, -10, ms._scale(0.7, [icn["GR.EQ.MACHINE GUN"]]))
    ];
    sId["110320"] = [
      ms._translate(0, 10, ms._scale(0.7, [icn["GR.EQ.MACHINE GUN"]]))
    ];
    sId["110321"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]];
    sId["110322"] = [
      ms._scale(0.5, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]])
    ];
    sId["110323"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]])
      )
    ];
    sId["110324"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.SHORT RANGE"]])
      )
    ];
    sId["110325"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.INTERMEDIATE RANGE"]];
    sId["110326"] = [
      ms._scale(0.5, [
        icn["GR.EQ.MACHINE GUN"],
        icn["GR.EQ.INTERMEDIATE RANGE"]
      ])
    ];
    sId["110327"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [
          icn["GR.EQ.MACHINE GUN"],
          icn["GR.EQ.INTERMEDIATE RANGE"]
        ])
      )
    ];
    sId["110328"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [
          icn["GR.EQ.MACHINE GUN"],
          icn["GR.EQ.INTERMEDIATE RANGE"]
        ])
      )
    ];
    sId["110329"] = [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]];
    sId["110330"] = [
      ms._scale(0.5, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]])
    ];
    sId["110331"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]])
      )
    ];
    sId["110332"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [icn["GR.EQ.MACHINE GUN"], icn["GR.EQ.LONG RANGE"]])
      )
    ];
    sId["110333"] = [icn["GR.EQ.GRENADE LAUNCHER"]];
    sId["110334"] = [ms._scale(0.5, [icn["GR.EQ.GRENADE LAUNCHER"]])];
    sId["110335"] = [
      ms._translate(0, -10, ms._scale(0.7, [icn["GR.EQ.GRENADE LAUNCHER"]]))
    ];
    sId["110336"] = [
      ms._translate(0, 10, ms._scale(0.7, [icn["GR.EQ.GRENADE LAUNCHER"]]))
    ];
    sId["110337"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
    ];
    sId["110338"] = [
      ms._scale(0.5, [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
      ])
    ];
    sId["110339"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
        ])
      )
    ];
    sId["110340"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms._translate(0, 20, icn["GR.EQ.SHORT RANGE"])
        ])
      )
    ];
    sId["110341"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
    ];
    sId["110342"] = [
      ms._scale(0.5, [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
      ])
    ];
    sId["110343"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
        ])
      )
    ];
    sId["110344"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms._translate(0, 20, icn["GR.EQ.INTERMEDIATE RANGE"])
        ])
      )
    ];
    sId["110345"] = [
      icn["GR.EQ.GRENADE LAUNCHER"],
      ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
    ];
    sId["110346"] = [
      ms._scale(0.5, [
        icn["GR.EQ.GRENADE LAUNCHER"],
        ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
      ])
    ];
    sId["110347"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
        ])
      )
    ];
    sId["110348"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [
          icn["GR.EQ.GRENADE LAUNCHER"],
          ms._translate(0, 20, icn["GR.EQ.LONG RANGE"])
        ])
      )
    ];
    sId["110349"] = [icn["GR.EQ.FLAME THROWER"]];
    sId["110350"] = [ms._scale(0.5, [icn["GR.EQ.FLAME THROWER"]])];
    sId["110351"] = [
      ms._translate(0, -10, ms._scale(0.7, [icn["GR.EQ.FLAME THROWER"]]))
    ];
    sId["110352"] = [
      ms._translate(0, 10, ms._scale(0.7, [icn["GR.EQ.FLAME THROWER"]]))
    ];
    sId["110353"] = [icn["GR.EQ.MORTAR"]];
    sId["110354"] = [ms._scale(0.5, [icn["GR.EQ.MORTAR"]])];
    sId["110355"] = [
      ms._translate(0, -10, ms._scale(0.7, [icn["GR.EQ.MORTAR"]]))
    ];
    sId["110356"] = [
      ms._translate(0, 10, ms._scale(0.7, [icn["GR.EQ.MORTAR"]]))
    ];
    sId["110357"] = [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]];
    sId["110358"] = [ms._scale(0.5, [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]])];
    sId["110359"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]])
      )
    ];
    sId["110360"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [icn["GR.EQ.SINGLE ROCKET LAUNCHER"]])
      )
    ];
    sId["110361"] = [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]];
    sId["110362"] = [ms._scale(0.5, [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]])];
    sId["110363"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]])
      )
    ];
    sId["110364"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [icn["GR.EQ.ANTITANK ROCKET LAUNCHER"]])
      )
    ];
    //*/
      sId["110400"] = [];
      sId["110401"] = [icn["GR.EQ.NON-LETHAL WEAPON"]];
      sId["110402"] = icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"];
      sId["110403"] = [icn["GR.EQ.TASER"]];
      /*
    sId["110404"] = [
      ms._translate(0, 10, ms._scale(0.7, [icn["GR.EQ.NON-LETHAL WEAPON"]]))
    ];
    sId["110405"] = [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]];
    sId["110406"] = [
      ms._scale(0.5, [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]])
    ];
    sId["110407"] = [
      ms._translate(
        0,
        -10,
        ms._scale(0.7, [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]])
      )
    ];
    sId["110408"] = [
      ms._translate(
        0,
        10,
        ms._scale(0.7, [icn["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]])
      )
    ];
    sId["110409"] = [icn["GR.EQ.TASER"]];
    sId["110410"] = [ms._scale(0.5, [icn["GR.EQ.TASER"]])];
    sId["110411"] = [
      ms._translate(0, -10, ms._scale(0.7, [icn["GR.EQ.TASER"]]))
    ];
    sId["110412"] = [
      ms._translate(0, 10, ms._scale(0.7, [icn["GR.EQ.TASER"]]))
    ];
    //*/
      sId["120000"] = [];
      sId["120100"] = [];
      sId["120101"] = [icn["GR.IC.LAW ENFORCEMENT"]];

      //sIdm1['00'] = [icn['']];
      sIdm1["01"] = [icn["GR.M1.CLOSE PROTECTION"]];
      sIdm1["02"] = [icn["GR.M1.CROWD AND RIOT CONTROL"]];
      sIdm1["03"] = [icn["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"]];
      sIdm1["04"] = [icn["GR.M1.SECURITY"]];
      sIdm1["05"] = [icn["GR.M1.SNIPER"]];
      sIdm1["06"] = [icn["GR.M1.SPECIAL WEAPONS AND TACTICS"]];
      sIdm1["07"] = [icn["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]];
      sIdm1["08"] = [icn["GR.M1.MULTINATIONAL"]];
      sIdm1["09"] = [icn["GR.M1.MULTINATIONAL SPECIALIZED UNIT"]];
      sIdm1["10"] = [icn["ST.M1.GOVERNMENT ORGANIZATION"]];
      sIdm1["11"] = [icn["GR.M1.VIDEO IMAGERY"]];
      sIdm1["12"] = [icn["GR.M1.J1"]];
      sIdm1["13"] = [icn["GR.M1.J2"]];
      sIdm1["14"] = [icn["GR.M1.J3"]];
      sIdm1["15"] = [icn["GR.M1.J4"]];
      sIdm1["16"] = [icn["GR.M1.J5"]];
      sIdm1["17"] = [icn["GR.M1.J6"]];
      sIdm1["18"] = [icn["GR.M1.J7"]];
      sIdm1["19"] = [icn["GR.M1.J8"]];
      sIdm1["20"] = [icn["GR.M1.J9"]];
      sIdm1["21"] = [icn["GR.M1.OF-1"]];
      sIdm1["22"] = [icn["GR.M1.OF-2"]];
      sIdm1["23"] = [icn["GR.M1.OF-3"]];
      sIdm1["24"] = [icn["GR.M1.OF-4"]];
      sIdm1["25"] = [icn["GR.M1.OF-5"]];
      sIdm1["26"] = [icn["GR.M1.OF-6"]];
      sIdm1["27"] = [icn["GR.M1.OF-7"]];
      sIdm1["28"] = [icn["GR.M1.OF-8"]];
      sIdm1["29"] = [icn["GR.M1.OF-9"]];
      sIdm1["30"] = [icn["GR.M1.OF-10"]];
      sIdm1["31"] = [icn["GR.M1.OF-D"]];
      sIdm1["32"] = [icn["GR.M1.OR-1"]];
      sIdm1["33"] = [icn["GR.M1.OR-2"]];
      sIdm1["34"] = [icn["GR.M1.OR-3"]];
      sIdm1["35"] = [icn["GR.M1.OR-4"]];
      sIdm1["36"] = [icn["GR.M1.OR-5"]];
      sIdm1["37"] = [icn["GR.M1.OR-6"]];
      sIdm1["38"] = [icn["GR.M1.OR-7"]];
      sIdm1["39"] = [icn["GR.M1.OR-8"]];
      sIdm1["40"] = [icn["GR.M1.OR-9"]];
      sIdm1["41"] = [icn["GR.M1.WO-1"]];
      sIdm1["42"] = [icn["GR.M1.WO-2"]];
      sIdm1["43"] = [icn["GR.M1.WO-3"]];
      sIdm1["44"] = [icn["GR.M1.WO-4"]];
      sIdm1["45"] = [icn["GR.M1.WO-5"]];
      sIdm1["46"] = [icn["GR.M1.INDIVIDUAL"]];
      sIdm1["47"] = [icn["GR.M1.TEAM"]];
      sIdm1["48"] = [icn["GR.M1.SQUAD"]];
      sIdm1["49"] = [icn["GR.M1.SECTION"]];
      sIdm1["50"] = [icn["GR.M1.PLATOON"]];
      sIdm1["51"] = [icn["GR.M1.COMPANY"]];
      sIdm1["52"] = [icn["GR.M1.BATTALION"]];
      sIdm1["53"] = [icn["GR.M1.REGIMENT"]];
      sIdm1["54"] = [icn["GR.M1.BRIGADE"]];
      sIdm1["55"] = [icn["GR.M1.DIVISION"]];
      //sIdm1["56"] = [icn["GR.M1.VIDEO IMAGERY"]];

      //sIdm2['00'] = [icn['']];
      sIdm2["01"] = [icn["GR.M2.AIRBORNE"]];
      sIdm2["02"] = [icn["GR.M2.BICYCLE EQUIPPED"]];
      sIdm2["03"] = [icn["GR.M2.DEMOLITION"]];
      sIdm2["04"] = [icn["GR.M2.J1"]];
      sIdm2["05"] = [icn["GR.M2.J2"]];
      sIdm2["06"] = [icn["GR.M2.J3"]];
      sIdm2["07"] = [icn["GR.M2.J4"]];
      sIdm2["08"] = [icn["GR.M2.J5"]];
      sIdm2["09"] = [icn["GR.M2.J6"]];
      sIdm2["10"] = [icn["GR.M2.J7"]];
      sIdm2["11"] = [icn["GR.M2.J8"]];
      sIdm2["12"] = [icn["GR.M2.J9"]];
      sIdm2["13"] = [icn["GR.M2.MOUNTAIN"]];
      sIdm2["14"] = [icn["GR.M2.OF-1"]];
      sIdm2["15"] = [icn["GR.M2.OF-2"]];
      sIdm2["16"] = [icn["GR.M2.OF-3"]];
      sIdm2["17"] = [icn["GR.M2.OF-4"]];
      sIdm2["18"] = [icn["GR.M2.OF-5"]];
      sIdm2["19"] = [icn["GR.M2.OF-6"]];
      sIdm2["20"] = [icn["GR.M2.OF-7"]];
      sIdm2["21"] = [icn["GR.M2.OF-8"]];
      sIdm2["22"] = [icn["GR.M2.OF-9"]];
      sIdm2["23"] = [icn["GR.M2.OF-10"]];
      sIdm2["24"] = [icn["GR.M2.OF-D"]];
      sIdm2["25"] = [icn["GR.M2.OR-1"]];
      sIdm2["26"] = [icn["GR.M2.OR-2"]];
      sIdm2["27"] = [icn["GR.M2.OR-3"]];
      sIdm2["28"] = [icn["GR.M2.OR-4"]];
      sIdm2["29"] = [icn["GR.M2.OR-5"]];
      sIdm2["30"] = [icn["GR.M2.OR-6"]];
      sIdm2["31"] = [icn["GR.M2.OR-7"]];
      sIdm2["32"] = [icn["GR.M2.OR-8"]];
      sIdm2["33"] = [icn["GR.M2.OR-9"]];
      sIdm2["34"] = [icn["GR.M2.WO-1"]];
      sIdm2["35"] = [icn["GR.M2.WO-2"]];
      sIdm2["36"] = [icn["GR.M2.WO-3"]];
      sIdm2["37"] = [icn["GR.M2.WO-4"]];
      sIdm2["38"] = [icn["GR.M2.WO-5"]];
      sIdm2["39"] = [icn["GR.M2.SKI"]];
    }
  }
};
