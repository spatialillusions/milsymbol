// Label overrides for tactical points
export default function tacticalPoints(sidc) {
  // Tactical Point Symbols =========================================================================
  sidc["G-T-D-----"] = {}; //TACGRP.TSK.DSTY
  sidc["G-T-I-----"] = {}; //TACGRP.TSK.ITDT
  sidc["G-T-N-----"] = {}; //TACGRP.TSK.NEUT
  sidc["G-G-GPUUD-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.DTM
  sidc["G-G-GPUUB-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.BCON
  sidc["G-G-GPUUL-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.LCON
  sidc["G-G-GPUUS-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.UH2.SNK
  sidc["G-G-GPUY--"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY
  sidc["G-G-GPUYP-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR
  sidc["G-G-GPUYD-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR
  sidc["G-G-GPUYL-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR
  sidc["G-G-GPUYC-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS
  sidc["G-G-GPUYS-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS
  sidc["G-G-GPUYB-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.BT
  sidc["G-G-GPUYA-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM
  sidc["G-G-GPUYV-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD
  sidc["G-G-GPUYT-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC
  sidc["G-G-GPUYR-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.RO
  sidc["G-G-GPUYK-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP
  sidc["G-G-GPUYX-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP
  sidc["G-G-GPUS--"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH
  sidc["G-G-GPUSA-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH.ARA
  sidc["G-G-GPUSD-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN
  sidc["G-G-GPUSC-"] = {}; //TACGRP.C2GM.GNL.PNT.USW.SRH.CTR
  sidc["G-G-GPR---"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT
  sidc["G-G-GPRN--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF
  sidc["G-G-GPRS--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT
  sidc["G-G-GPRD--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.DLRP
  sidc["G-G-GPRP--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.PIM
  sidc["G-G-GPRM--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.MRSH
  sidc["G-G-GPRW--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.WAP
  sidc["G-G-GPRC--"] = {}; //TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB
  sidc["G-G-GPRI--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 30,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR
  sidc["G-G-GPWA--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.AIMPNT
  sidc["G-G-GPWD--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.DRPPNT
  sidc["G-G-GPWE--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.ENTPNT
  sidc["G-G-GPWG--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.GRDZRO
  sidc["G-G-GPWM--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.MSLPNT
  sidc["G-G-GPWI--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.IMTPNT
  sidc["G-G-GPWP--"] = {}; //TACGRP.C2GM.GNL.PNT.WPN.PIPNT
  sidc["G-G-GPF---"] = {}; //TACGRP.C2GM.GNL.PNT.FRMN
  sidc["G-G-GPH---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.HBR
  sidc["G-G-GPHQ--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTQ
  sidc["G-G-GPHA--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTA
  sidc["G-G-GPHY--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTY
  sidc["G-G-GPHX--"] = {}; //TACGRP.C2GM.GNL.PNT.HBR.PNTX
  sidc["G-G-GPO---"] = {}; //TACGRP.C2GM.GNL.PNT.RTE
  sidc["G-G-GPOZ--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.RDV
  sidc["G-G-GPOD--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.DVSN
  sidc["G-G-GPOW--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.WAP
  sidc["G-G-GPOP--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.PIM
  sidc["G-G-GPOR--"] = {}; //TACGRP.C2GM.GNL.PNT.RTE.PNTR
  sidc["G-G-GPA---"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL
  sidc["G-G-GPAP--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.CAP
  sidc["G-G-GPAW--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ABNEW
  sidc["G-G-GPAK--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.TAK
  sidc["G-G-GPAA--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWF
  sidc["G-G-GPAH--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ASBWR
  sidc["G-G-GPAB--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.SUWF
  sidc["G-G-GPAC--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.SUWR
  sidc["G-G-GPAD--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.MIWF
  sidc["G-G-GPAE--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.MIWR
  sidc["G-G-GPAS--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.SKEIP
  sidc["G-G-GPAT--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.TCN
  sidc["G-G-GPAO--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.TMC
  sidc["G-G-GPAR--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.RSC
  sidc["G-G-GPAL--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.RPH
  sidc["G-G-GPAF--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.UA
  sidc["G-G-GPAG--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.VTUA
  sidc["G-G-GPAI--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORB
  sidc["G-G-GPAJ--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORBF8
  sidc["G-G-GPAM--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRT
  sidc["G-G-GPAN--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTL.ORBRD
  sidc["G-G-GPP---"] = {
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
      y: -20,
      fontsize: 35,
      fontweight: "bold"
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
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT
  sidc["G-G-GPPK--"] = {
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
  sidc["G-G-GPPC--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 40,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
  sidc["G-G-GPPO--"] = {}; //TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT
  sidc["G-G-GPPD--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 115,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT
  sidc["G-G-GPPL--"] = {
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
  sidc["G-G-GPPP--"] = {
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
  sidc["G-G-GPPR--"] = {
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
  sidc["G-G-GPPE--"] = {
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
  sidc["G-G-GPPS--"] = {
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
  sidc["G-G-GPPA--"] = {
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
  sidc["G-G-GPPW--"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 140,
      y: 125,
      fontsize: 70
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.C2GM.GNL.PNT.ACTPNT.WAP
  sidc["G-G-GPC---"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL
  sidc["G-G-GPCU--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV
  sidc["G-G-GPCUR-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV
  sidc["G-G-GPCUA-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW
  sidc["G-G-GPCUS-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW
  sidc["G-G-GPCUM-"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW
  sidc["G-G-GPCA--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.ASW
  sidc["G-G-GPCS--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.SUW
  sidc["G-G-GPCM--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.MIW
  sidc["G-G-GPCP--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.PKT
  sidc["G-G-GPCR--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.RDV
  sidc["G-G-GPCC--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.RSC
  sidc["G-G-GPCE--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.REP
  sidc["G-G-GPCN--"] = {}; //TACGRP.C2GM.GNL.PNT.SCTL.NCBTT
  sidc["G-G-GPB---"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL
  sidc["G-G-GPBU--"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV
  sidc["G-G-GPBUA-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW
  sidc["G-G-GPBUS-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW
  sidc["G-G-GPBUM-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW
  sidc["G-G-GPBS--"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN
  sidc["G-G-GPBSA-"] = {}; //TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW
  //TACGRP.C2GM.AVN.PNT.ACP
  sidc["G-G-APP---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.C2GM.AVN.PNT.COMMCP
  sidc["G-G-APC---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 135,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  sidc["G-G-APU---"] = {}; //TACGRP.C2GM.AVN.PNT.PUP
  sidc["G-G-APD---"] = {}; //TACGRP.C2GM.AVN.PNT.DAPP
  sidc["G-G-PN----"] = {}; //TACGRP.C2GM.DCPN.DMYMS
  //TACGRP.C2GM.DEF.PNT.TGTREF
  sidc["G-G-DPT---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 85,
      fontsize: 45,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  sidc["G-G-DPO---"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST
  sidc["G-G-DPOC--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST
  sidc["G-G-DPOR--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.RECON
  sidc["G-G-DPOF--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP
  sidc["G-G-DPOS--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.SOP
  sidc["G-G-DPON--"] = {}; //TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP
  sidc["G-G-OPP---"] = {
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

  sidc["G-M-OAOF--"] = {}; //TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD
  sidc["G-M-OAOM--"] = {}; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVB
  sidc["G-M-OAOP--"] = {}; //TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD
  sidc["G-M-OB----"] = {}; //TACGRP.MOBSU.OBST.BBY
  sidc["G-M-OMU---"] = {}; //TACGRP.MOBSU.OBST.MNE.USPMNE
  sidc["G-M-OMT---"] = {}; //TACGRP.MOBSU.OBST.MNE.ATMNE
  sidc["G-M-OMD---"] = {}; //TACGRP.MOBSU.OBST.MNE.ATMAHD
  sidc["G-M-OME---"] = {}; //TACGRP.MOBSU.OBST.MNE.ATMDIR
  sidc["G-M-OMP---"] = {}; //TACGRP.MOBSU.OBST.MNE.APMNE
  sidc["G-M-OMW---"] = {}; //TACGRP.MOBSU.OBST.MNE.WAMNE
  //TACGRP.MOBSU.OBST.MNEFLD.STC
  sidc["G-M-OFS---"] = {
    additionalInformation: {
      stroke: false,
      textanchor: "middle",
      x: 100,
      y: 55,
      fontsize: 40
    },
    hostile: [
      {
        stroke: false,
        textanchor: "end",
        x: 35,
        y: 110,
        fontsize: 30,
        fontweight: "bold"
      },
      {
        stroke: false,
        textanchor: "start",
        x: 165,
        y: 110,
        fontsize: 30,
        fontweight: "bold"
      }
    ],
    dtg: { stroke: false, textanchor: "middle", x: 100, y: 175, fontsize: 40 }
  };
  //TACGRP.MOBSU.OBST.AVN.TWR.LOW
  sidc["G-M-OHTL--"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 60,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT
  //TACGRP.MOBSU.OBST.AVN.TWR.HIGH
  sidc["G-M-OHTH--"] = {
    altitudeDepth: {
      stroke: false,
      textanchor: "start",
      x: 115,
      y: 60,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.MOBSU.OBSTBP.CSGSTE.ERP
  sidc["G-M-BCP---"] = {
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

  sidc["G-M-SE----"] = {}; //TACGRP.MOBSU.SU.ESTOF
  sidc["G-M-SF----"] = {}; //TACGRP.MOBSU.SU.FRT
  sidc["G-M-SS----"] = {}; //TACGRP.MOBSU.SU.SUFSHL
  sidc["G-M-SU----"] = {}; //TACGRP.MOBSU.SU.UGDSHL
  //TACGRP.MOBSU.CBRN.NDGZ
  sidc["G-M-NZ----"] = {
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
  };
  sidc["G-M-NF----"] = {}; //TACGRP.MOBSU.CBRN.FAOTP
  //TACGRP.MOBSU.CBRN.REEVNT.BIO
  sidc["G-M-NEB---"] = {
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
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  };
  //TACGRP.MOBSU.CBRN.REEVNT.CML
  sidc["G-M-NEC---"] = {
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
    uniqueDesignation: {
      stroke: false,
      textanchor: "end",
      x: 50,
      y: 100,
      fontsize: 35
    }
  };
  //TACGRP.MOBSU.CBRN.DECONP.USP
  sidc["G-M-NDP---"] = {
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

  //TACGRP.MOBSU.CBRN.DECONP.ALTUSP
  sidc["G-M-NDA---"] = {
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
  //TACGRP.MOBSU.CBRN.DECONP.TRP
  sidc["G-M-NDT---"] = {
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

  //TACGRP.MOBSU.CBRN.DECONP.EQT
  sidc["G-M-NDE---"] = {
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

  //TACGRP.MOBSU.CBRN.DECONP.EQTTRP
  sidc["G-M-NDB---"] = {
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

  //TACGRP.MOBSU.CBRN.DECONP.OPDECN
  sidc["G-M-NDO---"] = {
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
  //TACGRP.MOBSU.CBRN.DECONP.TRGH
  sidc["G-M-NDD---"] = {
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
  //TACGRP.FSUPP.PNT.TGT.PTGT
  sidc["G-F-PTS---"] = {
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
  };

  //TACGRP.FSUPP.PNT.TGT.NUCTGT
  sidc["G-F-PTN---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 120,
      y: 80,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.FSUPP.PNT.C2PNT.FSS
  sidc["G-F-PCF---"] = {
    uniqueDesignation: {
      stroke: false,
      textanchor: "start",
      x: 125,
      y: 115,
      fontsize: 40,
      fontweight: "bold"
    }
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT

  //TACGRP.FSUPP.PNT.C2PNT.SCP
  sidc["G-F-PCS---"] = {
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
  //TACGRP.FSUPP.PNT.C2PNT.FP
  sidc["G-F-PCB---"] = {
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

  //TACGRP.FSUPP.PNT.C2PNT.RP
  sidc["G-F-PCR---"] = {
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

  //TACGRP.FSUPP.PNT.C2PNT.HP
  sidc["G-F-PCH---"] = {
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

  //TACGRP.FSUPP.PNT.C2PNT.LP
  sidc["G-F-PCL---"] = {
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
  //TACGRP.CSS.PNT.AEP
  sidc["G-S-PX----"] = {
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
  }; //TACGRP.C2GM.GNL.PNT.ACTPNT
  //TACGRP.CSS.PNT.CBNP
  sidc["G-S-PC----"] = {
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

  //TACGRP.CSS.PNT.CCP
  sidc["G-S-PY----"] = {
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

  //TACGRP.CSS.PNT.CVP
  sidc["G-S-PT----"] = {
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

  //TACGRP.CSS.PNT.DCP
  sidc["G-S-PD----"] = {
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

  //TACGRP.CSS.PNT.EPWCP
  sidc["G-S-PE----"] = {
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

  //TACGRP.CSS.PNT.LRP
  sidc["G-S-PL----"] = {
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

  //TACGRP.CSS.PNT.MCP
  sidc["G-S-PM----"] = {
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

  //TACGRP.CSS.PNT.RRRP
  sidc["G-S-PR----"] = {
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

  //TACGRP.CSS.PNT.ROM
  sidc["G-S-PU----"] = {
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

  //TACGRP.CSS.PNT.TCP
  sidc["G-S-PO----"] = {
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

  //TACGRP.CSS.PNT.TTP
  sidc["G-S-PI----"] = {
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

  //TACGRP.CSS.PNT.UMC
  sidc["G-S-PN----"] = {
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

  sidc["G-S-PS----"] = {}; //TACGRP.CSS.PNT.SPT
  //TACGRP.CSS.PNT.SPT.GNL
  sidc["G-S-PSZ---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS1
  sidc["G-S-PSA---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS2
  sidc["G-S-PSB---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS3
  sidc["G-S-PSC---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS4
  sidc["G-S-PSD---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS5
  sidc["G-S-PSE---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS6
  sidc["G-S-PSF---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS7
  sidc["G-S-PSG---"] = {
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
  };

  //TACGRP.CSS.PNT.SPT.CLS8
  sidc["G-S-PSH---"] = {
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
  };
  //TACGRP.CSS.PNT.SPT.CLS9
  sidc["G-S-PSI---"] = {
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
  };
  //TACGRP.CSS.PNT.SPT.CLS10
  sidc["G-S-PSJ---"] = {
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
  };
  sidc["G-S-PA----"] = {}; //TACGRP.CSS.PNT.AP
  //TACGRP.CSS.PNT.AP.ASP
  sidc["G-S-PAS---"] = {
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
  //TACGRP.CSS.PNT.AP.ATP
  sidc["G-S-PAT---"] = {
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
  sidc["G-O-ED----"] = {}; //TACGRP.OTH.ER.DTHAC
  sidc["G-O-EP----"] = {}; //TACGRP.OTH.ER.PIW
  sidc["G-O-EV----"] = {}; //TACGRP.OTH.ER.DSTVES
  sidc["G-O-HM----"] = {}; //TACGRP.OTH.HAZ.SML
  sidc["G-O-HI----"] = {}; //TACGRP.OTH.HAZ.IB
  sidc["G-O-HO----"] = {}; //TACGRP.OTH.HAZ.OLRG
  sidc["G-O-SB----"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN
  sidc["G-O-SBM---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.INS
  sidc["G-O-SBN---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO
  sidc["G-O-SBW---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.WRKND
  sidc["G-O-SBX---"] = {}; //TACGRP.OTH.SSUBSR.BTMRTN.WRKD
  sidc["G-O-SM----"] = {}; //TACGRP.OTH.SSUBSR.MARLFE
  sidc["G-O-SS----"] = {}; //TACGRP.OTH.SSUBSR.SA
  sidc["G-O-FA----"] = {}; //TACGRP.OTH.FIX.ACU
  sidc["G-O-FE----"] = {}; //TACGRP.OTH.FIX.EM
  sidc["G-O-FO----"] = {}; //TACGRP.OTH.FIX.EOP
}
