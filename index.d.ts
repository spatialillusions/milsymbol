type ColorMode = {
  civilian: string;
  friend: string;
  hostile: string;
  neutral: string;
  unknown: string;
};

type SymbolOptions = {
  additionalInformation?: string;
  altitudeDepth?: string;
  combatEffectiveness?: string;
  commonIdentifier?: string;
  direction?: number;
  dtg?: string;
  equipmentTeardownTime?: string;
  evaluationRating?: string;
  headquartersElement?: string;
  higherFormation?: string;
  hostile?: string;
  iffSif?: string;
  location?: string;
  platformType?: string;
  quantity?: string;
  reinforcedReduced?: string;
  sigint?: string;
  signatureEquipment?: string;
  specialHeadquarters?: string;
  speed?: string;
  speedLeader?: number;
  staffComments?: string;
  type?: string;
  uniqueDesignation?: string;
  alternateMedal?: boolean;
  civilianColor?: boolean;
  colorMode?: ColorMode | string;
  fill?: boolean;
  fillOpacity?: number;
  frame?: boolean;
  frameColor?: ColorMode | string;
  hqStafLength?: number;
  icon?: boolean;
  iconColor?: ColorMode | string;
  infoColor?: ColorMode | string;
  infoFields?: boolean;
  infoSize?: number;
  monoColor?: string;
  outlineColor?: ColorMode | string;
  outlineWidth?: number;
  simpleStatusModifier?: boolean;
  strokeWidth?: number;
  size?: number;
  square?: boolean;
};

type SymbolProperties = {
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

  width: number;
  height: number;

  asCanvas(factor?: number): HTMLCanvasElement;
  asDOM(): Element;
  asSVG(): string;
  getAnchor(): { x: number; y: number };
  getColors(): SymbolColors;
  getOctagonAnchor(): { x: number; y: number };
  getOptions(includeStyle?: boolean): SymbolOptions;
  getProperties(): SymbolProperties;
  getSize(): { width: number; height: number };
  getStyle(): SymbolOptions;
  isValid(extended?: boolean): boolean | Object;
  setOptions(opts: SymbolOptions): Symbol;
  toDataURL(): string;
}
