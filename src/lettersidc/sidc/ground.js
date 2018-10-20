import { ms } from "../../ms.js";
import { metadata as metadata_letter } from "../metadata.js";
import { geticons as getIcons_letter } from "../geticons.js";
import icons from "../../iconparts/ground.js";

export default {
  type: "letter",
  getMetadata: metadata_letter,
  getIcons: getIcons_letter,
  iconParts: [icons],
  icons: function ground(sId, bbox, icn, _STD2525) {
    // GROUND ========================================================================
    sId["S-G-------"] = [];
    sId["S-G-U-----"] = [];
    sId["S-G-UC----"] = [icn["GR.IC.COMBAT"]];
    sId["S-G-UCD---"] = [icn["GR.IC.FF.AIR DEFENCE"]];
    sId["S-G-UCDS--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE SHORT RANGE"]
    ];
    sId["S-G-UCDSC-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.AIR DEFENSE CHAPARRAL"]
    ];
    sId["S-G-UCDSS-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.AIR DEFENSE STINGER"]
    ];
    sId["S-G-UCDSV-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.FF.MAIN GUN SYSTEM"],
      icn["GR.IC.AIR DEFENSE VULCAN"]
    ];
    sId["S-G-UCDM--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"]
    ];
    sId["S-G-UCDML-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.MISSILE.LIGHT"]
    ];
    sId["S-G-UCDMLA"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    sId["S-G-UCDMM-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.MISSILE.MEDIUM"]
    ];
    sId["S-G-UCDMH-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.MISSILE.HEAVY"]
    ];
    sId["S-G-UCDH--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE H/MAD"]
    ];
    sId["S-G-UCDHH-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.AIR DEFENSE H/MAD HAWK"]
    ];
    sId["S-G-UCDHP-"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE MISSILE"],
      icn["GR.IC.AIR DEFENSE H/MAD PATRIOT"]
    ];
    sId["S-G-UCDG--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE GUN UNIT"]
    ];
    sId["S-G-UCDC--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE COMPOSITE"]
    ];
    sId["S-G-UCDT--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE TARGETING UNIT"]
    ];
    sId["S-G-UCDO--"] = [
      icn["GR.IC.FF.AIR DEFENCE"],
      icn["GR.IC.AIR DEFENSE THEATER MISSILE DEFENSE UNIT"]
    ];
    sId["S-G-UCA---"] = [icn["GR.IC.ARMOUR"]];
    sId["S-G-UCAT--"] = [icn["GR.IC.ARMOUR"]];
    sId["S-G-UCATA-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCATW-"] = [icn["GR.IC.ARMOUR"], icn["GR.IC.FF.AMPHIBIOUS"]];
    sId["S-G-UCATWR"] = [
      icn["GR.IC.ARMOUR"],
      icn["GR.IC.FF.AMPHIBIOUS"],
      icn["GR.M2.RECOVERY (MAINTENANCE)"]
    ];
    sId["S-G-UCATL-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.LIGHT"]];
    sId["S-G-UCATM-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.MEDIUM"]];
    sId["S-G-UCATH-"] = [icn["GR.IC.ARMOUR"], icn["GR.M2.HEAVY"]];
    sId["S-G-UCATR-"] = [
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.RECOVERY (MAINTENANCE)"]
    ];
    sId["S-G-UCAW--"] = [icn["GR.IC.ARMOR, WHEELED"]];
    sId["S-G-UCAWS-"] = [
      icn["GR.IC.ARMOR, WHEELED"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCAWA-"] = [icn["GR.IC.ARMOR, WHEELED"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCAWW-"] = [
      icn["GR.IC.ARMOR, WHEELED"],
      icn["GR.IC.FF.AMPHIBIOUS"]
    ];
    sId["S-G-UCAWWR"] = [
      icn["GR.IC.ARMOR, WHEELED"],
      icn["GR.IC.FF.AMPHIBIOUS"],
      icn["GR.M2.RECOVERY (MAINTENANCE)"]
    ];
    sId["S-G-UCAWL-"] = [icn["GR.IC.ARMOR, WHEELED"], icn["GR.M2.LIGHT"]];
    sId["S-G-UCAWM-"] = [icn["GR.IC.ARMOR, WHEELED"], icn["GR.M2.MEDIUM"]];
    sId["S-G-UCAWH-"] = [icn["GR.IC.ARMOR, WHEELED"], icn["GR.M2.HEAVY"]];
    sId["S-G-UCAWR-"] = [
      icn["GR.IC.ARMOR, WHEELED"],
      icn["GR.M2.RECOVERY (MAINTENANCE)"]
    ];
    sId["S-G-UCAA--"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"]];
    sId["S-G-UCAAD-"] = [icn["GR.IC.FF.ANTITANK/ANTIARMOUR"]];
    sId["S-G-UCAAL-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.M2.LIGHT"]
    ];
    sId["S-G-UCAAM-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.M2.AIRBORNE"]
    ];
    sId["S-G-UCAAS-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCAAU-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.M2.MOUNTAIN"]
    ];
    sId["S-G-UCAAC-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.M2.ARCTIC"]
    ];
    sId["S-G-UCAAA-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCAAAT"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCAAAW"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.WHEELED"]
    ];
    sId["S-G-UCAAAS"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCAAO-"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    sId["S-G-UCAAOS"] = [
      icn["GR.IC.FF.ANTITANK/ANTIARMOUR"],
      icn["GR.IC.FF.MOTORIZED"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCV---"] = [icn["GR.IC.AVIATION ROTARY WING"]];
    sId["S-G-UCVF--"] = [icn["GR.IC.AVIATION FIXED WING"]];
    sId["S-G-UCVFU-"] = [
      icn["GR.IC.AVIATION FIXED WING"],
      icn["GR.M1.UTILITY"]
    ];
    sId["S-G-UCVFA-"] = [icn["GR.IC.AVIATION FIXED WING"], icn["GR.M1.ATTACK"]];
    sId["S-G-UCVUTP"] = [icn["GR.IC.AVIATION TACTICAL AIR CONTROL PARTY"]];
    sId["S-G-UCVUFC"] = [icn["GR.IC.AVIATION FORWARD AIR CONTROLLER"]];
    sId["S-G-UCVFR-"] = [icn["GR.IC.AVIATION FIXED WING"], icn["GR.M1.RECON"]];
    sId["S-G-UCVR--"] = _STD2525
      ? [
          icn["GR.IC.AVIATION ROTARY WING"],
          icn["GR.IC.AVIATION ROTARY WING 2525C"]
        ]
      : [icn["GR.IC.AVIATION ROTARY WING"]];
    sId["S-G-UCVRA-"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.ATTACK"]
    ];
    sId["S-G-UCVRS-"] = [icn["GR.IC.AVIATION ROTARY WING"], icn["GR.M1.RECON"]];
    sId["S-G-UCVRW-"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.ANTISUBMARINE WARFARE"]
    ];
    sId["S-G-UCVRU-"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.UTILITY"]
    ];
    sId["S-G-UCVRUL"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.UTILITY"],
      icn["GR.M2.LIGHT"]
    ];
    sId["S-G-UCVRUM"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.UTILITY"],
      icn["GR.M2.MEDIUM"]
    ];
    sId["S-G-UCVRUH"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.UTILITY"],
      icn["GR.M2.HEAVY"]
    ];
    sId["S-G-UCVRUC"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.COMMAND AND CONTROL ROTARY WING"]
    ];
    sId["S-G-UCVRUE"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.MEDEVAC"]
    ];
    sId["S-G-UCVRM-"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.MINE COUNTERMEASURE"]
    ];
    sId["S-G-UCVS--"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.PERSONNEL RECOVERY"]
    ];
    sId["S-G-UCVC--"] = [icn["GR.IC.AVIATION COMPOSITE"]];
    sId["S-G-UCVV--"] = [
      icn["GR.IC.AVIATION FIXED WING"],
      icn["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]
    ];
    sId["S-G-UCVU--"] = [icn["GR.IC.UNMANNED SYSTEMS"]];
    sId["S-G-UCVUF-"] = [
      icn["GR.IC.AVIATION FIXED WING"],
      icn["GR.M1.UNMANNED AERIAL VEHICLE"]
    ];
    //1.X.3.1.1.4.6.1.1 WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCVU--'] = [icn['GR.IC.UNMANNED SYSTEMS'],icn['GR.M2.CONTROL']];
    //1.X.3.1.1.4.6.1.2 WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCVU--'] = [icn['GR.IC.UNMANNED SYSTEMS'],icn['GR.M2.LAUNCHER']];
    //1.X.3.1.1.4.6.1.3 WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCVU--'] = [icn['GR.IC.UNMANNED SYSTEMS'],icn['GR.M2.RECOVERY (UNMANNED SYSTEMS)']];
    sId["S-G-UCVUR-"] = [
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.UNMANNED AERIAL VEHICLE"]
    ];
    sId["S-G-UCI---"] = [icn["GR.IC.FF.INFANTRY"]];
    sId["S-G-UCIL--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.LIGHT"]];
    sId["S-G-UCIM--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.MOTORIZED"]];
    sId["S-G-UCIO--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.MOUNTAIN"]];
    sId["S-G-UCIA--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCIS--"] = [
      icn["GR.IC.FF.INFANTRY"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCIZ--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.ARMOUR"]];
    sId["S-G-UCIN--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.IC.FF.NAVAL"]];
    sId["S-G-UCII--"] = [
      icn["GR.IC.FF.INFANTRY"],
      icn["GR.IC.ARMOUR"],
      icn["GR.IC.FF.MAIN GUN SYSTEM"]
    ];
    sId["S-G-UCIC--"] = [icn["GR.IC.FF.INFANTRY"], icn["GR.M2.ARCTIC"]];
    //1.X.3.1.1.5.10  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCIC--'] = [icn['GR.IC.FF.INFANTRY'],icn['GR.M1.SNIPER']];
    sId["S-G-UCE---"] = [icn["GR.IC.ENGINEER"]];
    sId["S-G-UCEC--"] = [icn["GR.IC.ENGINEER"], icn["GR.M1.COMBAT"]];
    sId["S-G-UCECS-"] = [
      icn["GR.IC.ENGINEER"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCECA-"] = [icn["GR.IC.ENGINEER"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCECC-"] = [icn["GR.IC.ENGINEER"], icn["GR.M2.ARCTIC"]];
    sId["S-G-UCECL-"] = [
      icn["GR.IC.ENGINEER"],
      icn["GR.M1.COMBAT"],
      icn["GR.M2.LIGHT"]
    ];
    sId["S-G-UCECM-"] = [
      icn["GR.IC.ENGINEER"],
      icn["GR.M1.COMBAT"],
      icn["GR.M2.MEDIUM"]
    ];
    sId["S-G-UCECH-"] = [
      icn["GR.IC.ENGINEER"],
      icn["GR.M1.COMBAT"],
      icn["GR.M2.HEAVY"]
    ];
    sId["S-G-UCECT-"] = [
      ms._scale(0.7, icn["GR.IC.ENGINEER"]),
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCECW-"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.MOTORIZED"]];
    sId["S-G-UCECO-"] = [icn["GR.IC.ENGINEER"], icn["GR.M2.MOUNTAIN"]];
    sId["S-G-UCECR-"] = [icn["GR.IC.ENGINEER"], icn["GR.IC.FF.RECONNAISSANCE"]];
    //1.X.3.1.1.6.1.11  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCEC--'] = [
    //1.X.3.1.1.6.1.12  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCEC--'] = [
    //1.X.3.1.1.6.1.13  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCEC--'] = [
    //1.X.3.1.1.6.1.14  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCEC--'] = [
    sId["S-G-UCEN--"] = [icn["GR.IC.ENGINEER"], icn["GR.M1.CONSTRUCTION"]];
    sId["S-G-UCENN-"] = [icn["GR.IC.ENGINEER"], icn["GR.M1.NAVAL"]];
    sId["S-G-UCF---"] = [icn["GR.IC.FIELD ARTILLERY"]];
    sId["S-G-UCFH--"] = [icn["GR.IC.FIELD ARTILLERY"]];
    sId["S-G-UCFHE-"] = [
      ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCFHS-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCFHA-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCFHC-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.ARCTIC"]];
    sId["S-G-UCFHO-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.MOUNTAIN"]];
    sId["S-G-UCFHL-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.LIGHT"]];
    sId["S-G-UCFHM-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.MEDIUM"]];
    sId["S-G-UCFHH-"] = [icn["GR.IC.FIELD ARTILLERY"], icn["GR.M2.HEAVY"]];
    sId["S-G-UCFHX-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.IC.FF.AMPHIBIOUS"]
    ];
    sId["S-G-UCFR--"] = [icn["GR.IC.FF.FIELD ARTILLERY ROCKET"]];
    sId["S-G-UCFRS-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.SINGLE ROCKET LAUNCHER"]
    ];
    sId["S-G-UCFRS-"] = [
      ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
      icn["GR.M1.SINGLE ROCKET LAUNCHER"],
      _STD2525 ? [] : icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCFRSS"] = [
      ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
      icn["GR.M1.SINGLE ROCKET LAUNCHER"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCFRSR"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.SINGLE ROCKET LAUNCHER"],
      icn["GR.M2.TRUCK"]
    ];
    sId["S-G-UCFRST"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.SINGLE ROCKET LAUNCHER"],
      icn["GR.M2.TOWED"]
    ];
    sId["S-G-UCFRM-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
      _STD2525 ? "" : icn["GR.M2.CROSS-COUNTRY TRUCK"]
    ];
    sId["S-G-UCFRMS"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCFRMR"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
      icn["GR.M2.TRUCK"]
    ];
    sId["S-G-UCFRMT"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.MULTIPLE ROCKET LAUNCHER"],
      icn["GR.M2.TOWED"]
    ];
    sId["S-G-UCFT--"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M2.TARGET ACQUISITION"]
    ];
    sId["S-G-UCFTR-"] = [
      ms._translate(-30, 10, ms._scale(0.6, icn["GR.IC.FIELD ARTILLERY"])),
      icn["GR.IC.RADAR"]
    ];
    sId["S-G-UCFTS-"] = [
      ms._translate(0, 30, ms._scale(0.7, icn["GR.IC.FIELD ARTILLERY"])),
      icn["GR.IC.FF.SOUND"]
    ];
    sId["S-G-UCFTF-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.M1.OPTICAL"],
      icn["GR.M2.TARGET ACQUISITION"]
    ];
    sId["S-G-UCFTC-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.IC.FF.MOTORIZED"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ];
    sId["S-G-UCFTCD"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ];
    sId["S-G-UCFTCM"] = [
      ms._scale(0.8, icn["GR.IC.FIELD ARTILLERY"]),
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UCFTA-"] = [
      icn["GR.IC.FIELD ARTILLERY"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.AVIATION ROTARY WING"],
      icn["GR.M1.NAVAL"]
    ];
    sId["S-G-UCFM--"] = [icn["GR.IC.MORTAR"]];
    sId["S-G-UCFMS-"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TRACKED"]];
    sId["S-G-UCFMW-"] = sId["S-G-UCFMSW"] = [
      icn["GR.IC.MORTAR"],
      icn["GR.M2.TRUCK"]
    ];
    sId["S-G-UCFMT-"] = [icn["GR.IC.MORTAR"], icn["GR.M2.TOWED"]];
    sId["S-G-UCFMTA"] = [
      icn["GR.IC.MORTAR"],
      icn["GR.M2.TOWED"],
      icn["GR.M2.AIRBORNE"]
    ];
    sId["S-G-UCFMTS"] = [
      icn["GR.IC.MORTAR"],
      icn["GR.M2.TOWED"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCFMTC"] = [icn["GR.IC.MORTAR"], icn["GR.M2.ARCTIC"]];
    sId["S-G-UCFMTO"] = [
      icn["GR.IC.MORTAR"],
      icn["GR.M2.TOWED"],
      icn["GR.M2.MOUNTAIN"]
    ];
    sId["S-G-UCFML-"] = [
      ms._translate(0, -20, icn["GR.IC.MORTAR"]),
      icn["GR.IC.FF.AMPHIBIOUS"]
    ];
    sId["S-G-UCFS--"] = [icn["GR.IC.SURVEY"]];
    sId["S-G-UCFSS-"] = [
      icn["GR.IC.SURVEY"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCFSA-"] = [icn["GR.IC.SURVEY"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCFSL-"] = [icn["GR.IC.SURVEY"], icn["GR.M2.LIGHT"]];
    sId["S-G-UCFSO-"] = [icn["GR.IC.SURVEY"], icn["GR.M2.MOUNTAIN"]];
    sId["S-G-UCFO--"] = [icn["GR.IC.METEOROLOGICAL"]];
    sId["S-G-UCFOS-"] = [
      icn["GR.IC.METEOROLOGICAL"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCFOA-"] = [icn["GR.IC.METEOROLOGICAL"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCFOL-"] = [icn["GR.IC.METEOROLOGICAL"], icn["GR.M2.LIGHT"]];
    sId["S-G-UCFOO-"] = [icn["GR.IC.METEOROLOGICAL"], icn["GR.M2.MOUNTAIN"]];
    //1.X.3.1.1.7.7  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCF---'] = [icn['GR.IC.FIELD ARTILLERY'],icn['GR.M1.FIRE DIRECTION CENTRE']];
    //1.X.3.1.1.7.8  WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UCF---'] = [icn['GR.IC.FIELD ARTILLERY OBSERVER']];
    sId["S-G-UCR---"] = [icn["GR.IC.FF.RECONNAISSANCE"]];
    sId["S-G-UCRH--"] = [icn["GR.IC.FF.HORSE"]];
    sId["S-G-UCRV--"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      _STD2525 ? icn["GR.M2.CAVALRY"] : []
    ];
    sId["S-G-UCRVA-"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.IC.ARMOUR"]];
    sId["S-G-UCRVM-"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    sId["S-G-UCRVG-"] = [icn["GR.IC.FF.RECONNAISSANCE"]];
    sId["S-G-UCRVO-"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.AVIATION ROTARY WING"]
    ];
    sId["S-G-UCRC--"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.M2.ARCTIC"]];
    sId["S-G-UCRS--"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.M1.AIRMOBILE/AIR ASSAULT"]
    ];
    sId["S-G-UCRA--"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.M2.AIRBORNE"]];
    sId["S-G-UCRO--"] = [icn["GR.IC.FF.RECONNAISSANCE"], icn["GR.M2.MOUNTAIN"]];
    sId["S-G-UCRL--"] = sId["S-G-UCRLL-"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.M2.LIGHT"]
    ];
    sId["S-G-UCRR--"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.FF.AMPHIBIOUS"]
    ];
    sId["S-G-UCRRD-"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.FF.AMPHIBIOUS"],
      _STD2525 ? icn["GR.M1.MARINE DIVISION"] : []
    ];
    sId["S-G-UCRRF-"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.FF.AMPHIBIOUS"],
      icn["GR.M1.FORCE"]
    ];
    sId["S-G-UCRRL-"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.WHEELED"]
    ];
    sId["S-G-UCRX--"] = [
      icn["GR.IC.FF.RECONNAISSANCE"],
      _STD2525
        ? icn["GR.M2.LONG RANGE SURVEILLANCE"]
        : [
            ms._translate(0, -20, icn["GR.M2.MOUNTAIN"]),
            icn["GR.M2.LONG RANGE"]
          ]
    ];
    sId["S-G-UCM---"] = [icn["GR.IC.MISSILE"]];
    sId["S-G-UCMT--"] = [icn["GR.IC.MISSILE"], icn["GR.M2.TACTICAL MISSILE"]];
    sId["S-G-UCMS--"] = [icn["GR.IC.MISSILE"], icn["GR.M2.STRATEGIC MISSILE"]];
    sId["S-G-UCS---"] = [icn["GR.IC.SECURITY"]];
    sId["S-G-UCSW--"] = [
      ms._translate(0, -20, icn["GR.IC.SECURITY"]),
      icn["GR.IC.FF.AMPHIBIOUS"]
    ];
    sId["S-G-UCSG--"] = [icn["GR.IC.SECURITY"]];
    sId["S-G-UCSGD-"] = [icn["GR.IC.SECURITY"], icn["GR.IC.FF.INFANTRY"]];
    sId["S-G-UCSGM-"] = [icn["GR.IC.SECURITY"], icn["GR.IC.FF.MOTORIZED"]];
    sId["S-G-UCSGA-"] = [icn["GR.IC.SECURITY"], icn["GR.IC.ARMOUR"]];
    sId["S-G-UCSM--"] = [
      icn["GR.IC.SECURITY"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.WHEELED"]
    ];
    sId["S-G-UCSR--"] = [icn["GR.IC.SECURITY"], icn["GR.M2.RAILROAD"]];
    sId["S-G-UCSA--"] = [
      ms._translate(0, -20, icn["GR.IC.SECURITY"]),
      icn["GR.IC.AVIATION ROTARY WING"]
    ];
    sId["S-G-F-S---"] = icn["GR.IC.SURVEILLANCE"];
    sId["S-G-UU----"] = [icn["GR.IC.COMBAT SUPPORT"]];
    sId["S-G-UUA---"] = [icn["GR.IC.CBRN"]];
    sId["S-G-UUAC--"] = [icn["GR.IC.CBRN"], icn["GR.M1.CHEMICAL"]];
    sId["S-G-UUACC-"] = [icn["GR.IC.CBRN"], icn["GR.M1.SMOKE/DECON"]];
    sId["S-G-UUACCK"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.SMOKE/DECON"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UUACCM"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.SMOKE/DECON"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    sId["S-G-UUACS-"] = [icn["GR.IC.CBRN"], icn["GR.M1.SMOKE"]];
    sId["S-G-UUACSM"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.SMOKE"],
      icn["GR.IC.FF.MOTORIZED"]
    ];
    sId["S-G-UUACSA"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.SMOKE"],
      icn["GR.IC.ARMOUR"]
    ];
    sId["S-G-UUACR-"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.CHEMICAL"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ];
    sId["S-G-UUACRW"] = [
      icn["GR.IC.CBRN"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.WHEELED"]
    ];
    sId["S-G-UUACRS"] = [
      icn["GR.IC.CBRN"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.WHEELED"],
      _STD2525 ? icn["GR.M1.CHEMICAL SURVEILLANCE"] : []
    ];
    sId["S-G-UUAN--"] = [icn["GR.IC.CBRN"], icn["GR.M1.NUCLEAR"]];
    sId["S-G-UUAB--"] = [icn["GR.IC.CBRN"], icn["GR.M1.BIOLOGICAL"]];
    sId["S-G-UUABR-"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.BIOLOGICAL"],
      icn["GR.IC.FF.MOTORIZED"],
      icn["GR.IC.FF.RECONNAISSANCE"]
    ];
    sId["S-G-UUAD--"] = [icn["GR.IC.CBRN"], icn["GR.M1.DECONTAMINATION"]];
    sId["S-G-UUADT-"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.DECONTAMINATION"],
      icn["GR.M2.TROOP"]
    ];
    sId["S-G-UUADE-"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.DECONTAMINATION"],
      icn["GR.M2.EQUIPMENT"]
    ];
    sId["S-G-UUADET"] = [
      icn["GR.IC.CBRN"],
      icn["GR.M1.DECONTAMINATION"],
      icn["GR.M2.EQUIMENT/TROOP"]
    ];
    sId["S-G-UUAL--"] = [icn["GR.IC.CBRN"], icn["GR.M2.LABORATORY"]];
    sId["S-G-UUM---"] = [icn["GR.IC.MILITARY INTELLIGENCE"]];
    sId["S-G-UUMA--"] = [
      icn["GR.IC.MILITARY INTELLIGENCE"],
      icn["GR.M1.UNMANNED AERIAL VEHICLE"]
    ];
    sId["S-G-UUMS--"] = [
      ms._translate(-25, 0, icn["GR.IC.MILITARY INTELLIGENCE"]),
      icn["GR.IC.RADIO"]
    ];
    sId["S-G-UUMSE-"] = [icn["GR.IC.ELECTRONIC WARFARE"]];
    sId["S-G-UUMSEA"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.RECONNAISSANCE"],
      icn["GR.IC.ARMOUR"],
      icn["GR.M2.WHEELED"]
    ];
    sId["S-G-UUMSED"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.DIRECTION FINDING"]
    ];
    sId["S-G-UUMSEI"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.INTERCEPT"]
    ];
    sId["S-G-UUMSEJ"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.JAMMING"]
    ];
    sId["S-G-UUMSET"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-UUMSEC"] = [
      icn["GR.IC.ELECTRONIC WARFARE"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-UUMC--"] = [icn["GR.IC.COUNTER-INTELLIGENCE"]];
    sId["S-G-UUMR--"] = [icn["GR.IC.MILITARY INTELLIGENCE"]];
    sId["S-G-UUMRG-"] = [
      icn["GR.IC.MILITARY INTELLIGENCE"],
      icn["GR.M1.RADAR"]
    ];
    sId["S-G-UUMRS-"] = [
      ms._translate(0, 30, ms._scale(0.8, icn["GR.IC.MILITARY INTELLIGENCE"])),
      icn["GR.IC.FF.SENSOR"]
    ];
    sId["S-G-UUMRSS"] = [
      ms._translate(0, 30, ms._scale(0.8, icn["GR.IC.MILITARY INTELLIGENCE"])),
      icn["GR.IC.FF.SENSOR"],
      icn["GR.M1.SENSOR CONTROL MODULE"]
    ];
    sId["S-G-UUMRX-"] = [
      icn["GR.IC.MILITARY INTELLIGENCE"],
      icn["GR.M1.GROUND STATION MODULE"]
    ];
    sId["S-G-UUMMO-"] = [
      icn["GR.IC.MILITARY INTELLIGENCE"],
      icn["GR.M1.METEOROLOGICAL"]
    ];
    sId["S-G-UUMO--"] = [
      icn["GR.IC.MILITARY INTELLIGENCE"],
      icn["GR.M1.OPERATIONS"]
    ];
    sId["S-G-UUMT--"] = [
      icn["GR.IC.MILITARY INTELLIGENCE"],
      icn["GR.M1.TACTICAL EXPLOITATION"]
    ];
    sId["S-G-UUMQ--"] = [icn["GR.IC.INTERROGATION"]];
    sId["S-G-UUMJ--"] = [icn["GR.IC.JOINT INTELLIGENCE CENTRE"]];
    sId["S-G-UUL---"] = [
      icn["GR.IC.FF.MILITARY POLICE"],
      icn["GR.IC.MILITARY POLICE"]
    ];
    sId["S-G-UULS--"] = [icn["GR.IC.SHORE PATROL"]];
    sId["S-G-UULM--"] = [icn["GR.IC.MILITARY POLICE"]];
    sId["S-G-UULC--"] = [icn["GR.IC.LAW ENFORCEMENT"]];
    sId["S-G-UULF--"] = [
      ms._translate(0, -25, ms._scale(0.8, icn["GR.IC.SHORE PATROL"])),
      icn["GR.IC.AVIATION FIXED WING"]
    ];
    sId["S-G-UULD--"] = [icn["GR.IC.CRIMINAL INVESTIGATION DIVISION"]];
    sId["S-G-UUS---"] = [icn["GR.IC.FF.SIGNAL"]];
    sId["S-G-UUSA--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.AREA"]];
    sId["S-G-UUSC--"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]
    ];
    sId["S-G-UUSCL-"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE"],
      icn["GR.M2.AIRBORNE"]
    ];
    sId["S-G-UUSO--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.OPERATIONS"]];
    sId["S-G-UUSF--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.FORWARD"]];
    sId["S-G-UUSM--"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]
    ];
    sId["S-G-UUSMS-"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.M1.SMALL EXTENSION NODE"]
    ];
    sId["S-G-UUSML-"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.M1.LARGE EXTENSION NODE"]
    ];
    sId["S-G-UUSMN-"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.NODE CENTRE"]];
    sId["S-G-UUSR--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO"]];
    sId["S-G-UUSRS-"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.I.FF.SATELLITE"]];
    sId["S-G-UUSRT-"] = [
      icn["GR.IC.FF.SIGNAL"],
      icn["GR.IC.RADIO TELETYPE CENTRE"]
    ];
    sId["S-G-UUSRW-"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.RADIO RELAY"]];
    sId["S-G-UUSS--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.M1.SIGNAL SUPPORT"]];
    sId["S-G-UUSW--"] = [icn["GR.IC.FF.SIGNAL"], icn["GR.IC.TELEPHONE SWITCH"]];
    sId["S-G-UUSX--"] = [icn["GR.IC.ELECTRONIC RANGING"]];
    sId["S-G-UUI---"] = [icn["GR.IC.INFORMATION OPERATIONS"]];
    sId["S-G-UUP---"] = sId["S-G-UUX---"] = [
      icn["GR.IC.FF.AMPHIBIOUS"],
      icn["GR.M1.LANDING SUPPORT"]
    ];
    sId["S-G-UUE---"] = [icn["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]];
    sId["S-G-UUT---"] = [icn["GR.IC.TOPOGRAPHIC"]];
    //1.X.3.1.2.9 WRONG SIDC IN STANDARD APP6B
    //sId['S-G-UU----'] = [icn['GR.IC.DOG']];
    sId["S-G-UUD---"] = [icn["GR.IC.DRILLING"]];
    sId["S-G-US----"] = [icn["GR.IC.COMBAT SERVICE SUPPORT"]];
    sId["S-G-USA---"] = [icn["GR.IC.ADMINISTRATIVE"]];
    sId["S-G-USAT--"] = [
      icn["GR.IC.ADMINISTRATIVE"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAC--"] = [
      icn["GR.IC.ADMINISTRATIVE"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAJ--"] = [icn["GR.IC.JUDGE ADVOCATE GENERAL"]];
    sId["S-G-USAJT-"] = [
      icn["GR.IC.JUDGE ADVOCATE GENERAL"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAJC-"] = [
      icn["GR.IC.JUDGE ADVOCATE GENERAL"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAO--"] = [icn["GR.IC.POSTAL"]];
    sId["S-G-USAOT-"] = [icn["GR.IC.POSTAL"], icn["GR.IC.FF.THEATRE SUPPORT"]];
    sId["S-G-USAOC-"] = [icn["GR.IC.POSTAL"], icn["GR.IC.FF.CORPS SUPPORT"]];
    sId["S-G-USAF--"] = [icn["GR.IC.FINANCE"]];
    sId["S-G-USAFT-"] = [icn["GR.IC.FINANCE"], icn["GR.IC.FF.THEATRE SUPPORT"]];
    sId["S-G-USAFC-"] = [icn["GR.IC.FINANCE"], icn["GR.IC.FF.CORPS SUPPORT"]];
    sId["S-G-USAS--"] = [icn["GR.IC.PERSONNEL SERVICES"]];
    sId["S-G-USAST-"] = [
      icn["GR.IC.PERSONNEL SERVICES"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USASC-"] = [
      icn["GR.IC.PERSONNEL SERVICES"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAM--"] = [icn["GR.IC.MORTUARY AFFAIRS"]];
    sId["S-G-USAMT-"] = [
      icn["GR.IC.MORTUARY AFFAIRS"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAMC-"] = [
      icn["GR.IC.MORTUARY AFFAIRS"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAR--"] = [icn["GR.IC.RELIGIOUS SUPPORT"]];
    sId["S-G-USART-"] = [
      icn["GR.IC.RELIGIOUS SUPPORT"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USARC-"] = [
      icn["GR.IC.RELIGIOUS SUPPORT"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAP--"] = [icn["GR.IC.PUBLIC AFFAIRS"]];
    sId["S-G-USAPT-"] = [
      icn["GR.IC.PUBLIC AFFAIRS"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAPC-"] = [
      icn["GR.IC.PUBLIC AFFAIRS"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAPB-"] = [icn["GR.IC.PUBLIC AFFAIRS BROADCAST"]];
    sId["S-G-USAPBT"] = [
      icn["GR.IC.PUBLIC AFFAIRS BROADCAST"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAPBC"] = [
      icn["GR.IC.PUBLIC AFFAIRS BROADCAST"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAPM-"] = [icn["GR.IC.JOINT INFORMATION BUREAU"]];
    sId["S-G-USAPMT"] = [
      icn["GR.IC.JOINT INFORMATION BUREAU"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAPMC"] = [
      icn["GR.IC.JOINT INFORMATION BUREAU"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAX--"] = [icn["GR.IC.REPLACEMENT HOLDING UNIT"]];
    sId["S-G-USAXT-"] = [
      icn["GR.IC.REPLACEMENT HOLDING UNIT"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAXC-"] = [
      icn["GR.IC.REPLACEMENT HOLDING UNIT"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAL--"] = [icn["GR.IC.LABOUR"]];
    sId["S-G-USALT-"] = [icn["GR.IC.LABOUR"], icn["GR.IC.FF.THEATRE SUPPORT"]];
    sId["S-G-USALC-"] = [icn["GR.IC.LABOUR"], icn["GR.IC.FF.CORPS SUPPORT"]];
    sId["S-G-USAW--"] = [icn["GR.IC.MORALE, WELFARE, AND RECREATION"]];
    sId["S-G-USAWT-"] = [
      icn["GR.IC.MORALE, WELFARE, AND RECREATION"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAWC-"] = [
      icn["GR.IC.MORALE, WELFARE, AND RECREATION"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USAQ--"] = [icn["GR.IC.QUARTERMASTER"]];
    sId["S-G-USAQT-"] = [
      icn["GR.IC.QUARTERMASTER"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USAQC-"] = [
      icn["GR.IC.QUARTERMASTER"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USM---"] = [icn["GR.IC.FF.MEDICAL"]];
    sId["S-G-USMT--"] = [icn["GR.IC.FF.MEDICAL THEATER"]];
    sId["S-G-USMC--"] = [icn["GR.IC.FF.MEDICAL CORPS"]];
    sId["S-G-USMM--"] = [
      icn["GR.IC.FF.MEDICAL"],
      icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
    ];
    sId["S-G-USMMT-"] = [
      icn["GR.IC.FF.MEDICAL THEATER"],
      icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
    ];
    sId["S-G-USMMC-"] = [
      icn["GR.IC.FF.MEDICAL CORPS"],
      icn["GR.IC.FF.MEDICAL TREATMENT FACILITY"]
    ];
    sId["S-G-USMV--"] = [icn["GR.IC.FF.MEDICAL"], icn["GR.M2.VETERINARY"]];
    sId["S-G-USMVT-"] = [
      icn["GR.IC.FF.MEDICAL THEATER"],
      icn["GR.M2.VETERINARY"]
    ];
    sId["S-G-USMVC-"] = [
      icn["GR.IC.FF.MEDICAL CORPS"],
      icn["GR.M2.VETERINARY"]
    ];
    sId["S-G-USMD--"] = [icn["GR.IC.FF.MEDICAL"], icn["GR.M2.DENTAL"]];
    sId["S-G-USMDT-"] = [icn["GR.IC.FF.MEDICAL THEATER"], icn["GR.M2.DENTAL"]];
    sId["S-G-USMDC-"] = [icn["GR.IC.FF.MEDICAL CORPS"], icn["GR.M2.DENTAL"]];
    sId["S-G-USMP--"] = [icn["GR.IC.FF.MEDICAL"], icn["GR.M2.PSYCHOLOGICAL"]];
    sId["S-G-USMPT-"] = [
      icn["GR.IC.FF.MEDICAL THEATER"],
      icn["GR.M2.PSYCHOLOGICAL"]
    ];
    sId["S-G-USMPC-"] = [
      icn["GR.IC.FF.MEDICAL CORPS"],
      icn["GR.M2.PSYCHOLOGICAL"]
    ];
    sId["S-G-USS---"] = [icn["GR.IC.FF.SUPPLY"]];
    sId["S-G-USST--"] = [icn["GR.IC.FF.SUPPLY THEATER"]];
    sId["S-G-USSC--"] = [icn["GR.IC.FF.SUPPLY CORPS"]];
    sId["S-G-USS1--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS I"]];
    sId["S-G-USS1T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS I"]
    ];
    sId["S-G-USS1C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS I"]];
    sId["S-G-USS2--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS II"]];
    sId["S-G-USS2T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS II"]
    ];
    sId["S-G-USS2C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS II"]
    ];
    sId["S-G-USS3--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS III"]];
    sId["S-G-USS3T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS III"]
    ];
    sId["S-G-USS3C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS III"]
    ];
    sId["S-G-USS3A-"] = [
      icn["GR.IC.FF.SUPPLY"],
      icn["GR.IC.FF.CLASS III"],
      ms._translate(25, 5, ms._scale(0.5, icn["GR.IC.AVIATION ROTARY WING"]))
    ];
    sId["S-G-USS3AT"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS III"],
      ms._translate(25, 5, ms._scale(0.5, icn["GR.IC.AVIATION ROTARY WING"]))
    ];
    sId["S-G-USS3AC"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS III"],
      ms._translate(25, 5, ms._scale(0.5, icn["GR.IC.AVIATION ROTARY WING"]))
    ];
    sId["S-G-USS4--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IV"]];
    sId["S-G-USS4T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS IV"]
    ];
    sId["S-G-USS4C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS IV"]
    ];
    sId["S-G-USS5--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS V"]];
    sId["S-G-USS5T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS V"]
    ];
    sId["S-G-USS5C-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS V"]];
    sId["S-G-USS6--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VI"]];
    sId["S-G-USS6T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS VI"]
    ];
    sId["S-G-USS6C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS VI"]
    ];
    sId["S-G-USS7--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VII"]];
    sId["S-G-USS7T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS VII"]
    ];
    sId["S-G-USS7C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS VII"]
    ];
    sId["S-G-USS8--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS VIII"]];
    sId["S-G-USS8T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS VIII"]
    ];
    sId["S-G-USS8C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS VIII"]
    ];
    sId["S-G-USS9--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS IX"]];
    sId["S-G-USS9T-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS IX"]
    ];
    sId["S-G-USS9C-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.FF.CLASS IX"]
    ];
    sId["S-G-USSX--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.FF.CLASS X"]];
    sId["S-G-USSXT-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.FF.CLASS X"]
    ];
    sId["S-G-USSXC-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.FF.CLASS X"]];
    sId["S-G-USSL--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.LAUNDRY/BATH"]];
    sId["S-G-USSLT-"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.LAUNDRY/BATH"]
    ];
    sId["S-G-USSLC-"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.LAUNDRY/BATH"]
    ];
    sId["S-G-USSW--"] = [icn["GR.IC.FF.SUPPLY"], icn["GR.IC.WATER"]];
    sId["S-G-USSWT-"] = [icn["GR.IC.FF.SUPPLY THEATER"], icn["GR.IC.WATER"]];
    sId["S-G-USSWC-"] = [icn["GR.IC.FF.SUPPLY CORPS"], icn["GR.IC.WATER"]];
    sId["S-G-USSWP-"] = [
      icn["GR.IC.FF.SUPPLY"],
      icn["GR.IC.WATER PURIFICATION"]
    ];
    sId["S-G-USSWPT"] = [
      icn["GR.IC.FF.SUPPLY THEATER"],
      icn["GR.IC.WATER PURIFICATION"]
    ];
    sId["S-G-USSWPC"] = [
      icn["GR.IC.FF.SUPPLY CORPS"],
      icn["GR.IC.WATER PURIFICATION"]
    ];
    //1.X.3.1.3.3.15  ANOTHER SIDC THAT DOESN'T WORK OUT...
    //sId['S-G-US----'] = [icn['GR.IC.FF.SUPPLY CORPS'],icn['GR.IC.WATER PURIFICATION']];
    sId["S-G-UST---"] = [icn["GR.IC.TRANSPORTATION"]];
    sId["S-G-USTT--"] = [
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.IC.TRANSPORTATION"]
    ];
    sId["S-G-USTC--"] = [
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.IC.TRANSPORTATION"]
    ];
    sId["S-G-USTM--"] = [
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.MOVEMENT CONTROL CENTRE"]
    ];
    sId["S-G-USTMT-"] = [
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.MOVEMENT CONTROL CENTRE"]
    ];
    sId["S-G-USTMC-"] = [
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.MOVEMENT CONTROL CENTRE"]
    ];
    sId["S-G-USTR--"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.RAILROAD"]];
    sId["S-G-USTRT-"] = [
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.RAILROAD"]
    ];
    sId["S-G-USTRC-"] = [
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.RAILROAD"]
    ];
    sId["S-G-USTS--"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.NAVAL"]];
    sId["S-G-USTST-"] = [
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.NAVAL"]
    ];
    sId["S-G-USTSC-"] = [
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.NAVAL"]
    ];
    sId["S-G-USTA--"] = [
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.IC.AIRPORT OF DEBARKATION"]
    ];
    sId["S-G-USTAT-"] = [
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.IC.AIRPORT OF DEBARKATION"]
    ];
    sId["S-G-USTAC-"] = [
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.IC.AIRPORT OF DEBARKATION"]
    ];
    sId["S-G-USTI--"] = [icn["GR.IC.TRANSPORTATION"], icn["GR.M1.MISSILE"]];
    sId["S-G-USTIT-"] = [
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.MISSILE"]
    ];
    sId["S-G-USTIC-"] = [
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.IC.TRANSPORTATION"],
      icn["GR.M1.MISSILE"]
    ];
    //1.X.3.1.3.4.8 SIDC BROKEN
    //sId['S-G-UST---']
    sId["S-G-USX---"] = [icn["GR.IC.MAINTENANCE"]];
    sId["S-G-USXT--"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.THEATRE SUPPORT"]
    ];
    sId["S-G-USXC--"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.CORPS SUPPORT"]
    ];
    sId["S-G-USXH--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M2.HEAVY"]];
    sId["S-G-USXHT-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.M2.HEAVY"]
    ];
    sId["S-G-USXHC-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.M2.HEAVY"]
    ];
    sId["S-G-USXR--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M2.RAILROAD"]];
    sId["S-G-USXRT-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.M2.RAILROAD"]
    ];
    sId["S-G-USXRC-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.M2.RAILROAD"]
    ];
    sId["S-G-USXO--"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M1.AMMUNITION"]];
    sId["S-G-USXOT-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.M1.AMMUNITION"]
    ];
    sId["S-G-USXOC-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.M1.AMMUNITION"]
    ];
    sId["S-G-USXOM-"] = [icn["GR.IC.MAINTENANCE"], icn["GR.M1.MISSILE"]];
    sId["S-G-USXOMT"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.M1.MISSILE"]
    ];
    sId["S-G-USXOMC"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.M1.MISSILE"]
    ];
    sId["S-G-USXE--"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.M1.ELECTRO-OPTICAL"]
    ];
    sId["S-G-USXET-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.THEATRE SUPPORT"],
      icn["GR.M1.ELECTRO-OPTICAL"]
    ];
    sId["S-G-USXEC-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.IC.FF.CORPS SUPPORT"],
      icn["GR.M1.ELECTRO-OPTICAL"]
    ];
    sId["S-G-USXBDR"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.M2.BATTLE DAMAGE REPAIR"]
    ];
    sId["S-G-USXPM-"] = [
      icn["GR.IC.MAINTENANCE"],
      icn["GR.M2.PREVENTIVE MAINTENANCE"]
    ];
    sId["S-G-USXP--"] = [icn["GR.IC.PIPELINE"]];
    sId["S-G-USXEP-"] = [icn["GR.IC.ENVIRONMENTAL PROTECTION"]];
    sId["S-G-UH----"] = [];
    //1.X.3.1.5 BROKEN SIDC
    sId["S-G-UH1---"] = [icn["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]];
    //1.X.3.1.6 BROKEN SIDC
    sId["S-G-UH2---"] = [
      icn["GR.IC.FF.SUPPLY"],
      icn["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]
    ];
    sId["S-G-UHGL--"] = sId["S-G-GL----"] = [icn["GR.IC.LIAISON"]];
  }
};
