type ColorMode = {
  civilian: string;
  friend: string;
  hostile: string;
  neutral: string;
  unknown: string;
};

type SymbolOptions = {
  additionalInformation?: string;
  alternateMedal?: boolean;
  altitudeDepth?: string;
  auxiliaryEquipmentIndicator?: string;
  civilianColor?: boolean;
  colorMode?: ColorMode | string;
  combatEffectiveness?: string;
  commonIdentifier?: string;
  country?: string;
  direction?: string;
  dtg?: string;
  engagementBar?: string;
  engagementType?: string;
  equipmentTeardownTime?: string;
  evaluationRating?: string;
  fill?: boolean;
  fillOpacity?: number;
  fontfamily?: string;
  frame?: boolean;
  frameColor?: ColorMode;
  guardedUnit?: string;
  headquartersElement?: string;
  higherFormation?: string;
  hostile?: string;
  hqStaffLength?: number;
  icon?: boolean;
  iconColor?: ColorMode | string;
  iffSif?: string;
  infoBackground?: ColorMode | string;
  infoBackgroundFrame?: ColorMode | string;
  infoColor?: ColorMode | string;
  infoFields?: boolean;
  infoSize?: number;
  installationComposition?: string;
  location?: string;
  monoColor?: string;
  outlineColor?: ColorMode | string;
  outlineWidth?: number;
  padding?: number;
  platformType?: string;
  quantity?: string;
  reinforcedReduced?: string;
  sigint?: string;
  signatureEquipment?: string;
  simpleStatusModifier?: boolean;
  size?: number;
  specialDesignator?: string;
  specialHeadquarters?: string;
  speed?: string;
  speedLeader?: number;
  square?: boolean;
  staffComments?: string;
  standard?: string;
  strokeWidth?: number;
  type?: string;
  uniqueDesignation?: string;
};

type SymbolMetadata = {
  activity: boolean; // Is it an Activity
  affiliation: string; // Affiliation it is shown as (Friend/Hostile...)
  baseAffilation: string; // Affiliation it belongs to (Friend/Hostile...)
  baseDimension: string; // Dimension it belongs to (Air/Ground...)
  baseGeometry: Object; // Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)
  civilian: boolean; // Is it Civilian
  condition: string; // What condition is it in
  context: string; // Context of the symbol (Reality/Exercise...)
  dimension: string; // Dimension it is shown as (Air/Ground...) for example Ground Equipment is shown with the same shape as Sea.
  dimensionUnknown: boolean; // Is the dimension unknown
  echelon: string; //What echelon (Platoon/Company...)
  faker: boolean; // Is it a Faker
  fenintDummy: boolean; // Is it a feint/dummy
  fill: boolean; // Standard says it should be filled
  frame: boolean; // Standard says it should be framed
  functionid: string; // Part of SIDC referring to the icon.
  headquarters: boolean; // Is it a Headquarters
  installation: boolean; // Is it an Instalation
  joker: boolean; // Is it a Joker
  mobility: string; // What mobility (Tracked/Sled...)
  notpresent: string; // Is it Anticipated or Pending
  numberSIDC: boolean; // Is the SIDC number based
  space: boolean; // Is it in Space
  taskForce: boolean; // Is it a task force
};

type SymbolColors = {
  black: string; // Black parts of the symbol.
  fillColor: string; // Symbol fill color.
  frameColor: string; // Symbol frame color.
  iconColor: string; // Icon color.
  iconFillColor: string; // Icon fill color.
  none: string; // Transparent parts of the symbol.
  white: string; // White parts of the symbol.
};

export class Symbol {
  constructor(
    code: string | SymbolOptions,
    opts?: SymbolOptions,
    style?: SymbolOptions
  );

  asCanvas(factor?: number): HTMLCanvasElement;
  asDOM(): Element;
  asSVG(): string;
  getAnchor(): { x: number; y: number };
  getColors(): SymbolColors;
  getOctagonAnchor(): { x: number; y: number };
  getOptions(includeStyle?: boolean): SymbolOptions;
  getMetadata(): SymbolMetadata;
  getSize(): { width: number; height: number };
  getStyle(): SymbolOptions;
  isValid(extended?: boolean): boolean | Object;
  setOptions(opts: SymbolOptions): Symbol;
  toDataURL(): string;
}
