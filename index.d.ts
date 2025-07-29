export type ColorMode = {
  Civilian: string;
  Friend: string;
  Hostile: string;
  Neutral: string;
  Unknown: string;
  Suspect: string;
};

export interface SymbolOptions {
  additionalInformation?: string;
  alternateMedal?: boolean;
  altitudeDepth?: string;
  auxiliaryEquipmentIndicator?: string;
  civilianColor?: boolean;
  colorMode?: ColorMode | string;
  combatEffectiveness?: string;
  commonIdentifier?: string;
  country?: string;
  direction?: number;
  dtg?: string;
  engagementBar?: string;
  engagementType?: string;
  equipmentTeardownTime?: string;
  evaluationRating?: string;
  fill?: boolean;
  fillColor?: string;
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
  infoOutlineColor?: string;
  infoOutlineWidth?: number;
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
  sidc?: string;
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
}

type BaseAffiliation = "" | "Hostile" | "Friend" | "Neutral" | "Unknown";
type Affiliation = "undefined" | BaseAffiliation;

type Context = "Reality" | "Exercise" | "Simulation";

// Dimension it belongs to (Air/Ground...)
type BaseDimension = "" | "Air" | "Ground" | "Sea" | "Subsurface";
// Dimension it is shown as (Air/Ground...) for example Ground Equipment is shown with the same shape as Sea.
type Dimension = "undefined" | "LandDismountedIndividual" | BaseDimension;

// What condition is it in
type Condition = "" | "Present" | "Planned" | "FullyCapable" | "Damaged" | "Destroyed" | "FullToCapacity";

type Echelon =
  ""
  | "Team/Crew"
  | "Squad"
  | "Section"
  | "Platoon/detachment"
  | "Company/battery/troop"
  | "Battalion/squadron"
  | "Regiment/group"
  | "Brigade"
  | "Division"
  | "Corps/MEF"
  | "Army"
  | "Army Group/front"
  | "Region/Theater"
  | "Command";

type Mobility =
  ""
  | "Wheeled limited cross country"
  | "Wheeled cross country"
  | "Tracked"
  | "Wheeled and tracked combination"
  | "Towed"
  | "Rail"
  | "Pack animals"
  | "Over snow (prime mover)"
  | "Sled"
  | "Barge"
  | "Amphibious"
  | "Short towed array"
  | "Long towed Array";

type Leadership = "Leader Individual" | "Deputy Individual";

export type SymbolMetadata = {
  activity: boolean; // Is it an Activity
  affiliation: Affiliation; // Affiliation it is shown as (Friend/Hostile...)
  baseAffilation: BaseAffiliation; // Affiliation it belongs to (Friend/Hostile...)
  baseDimension: BaseDimension; // Dimension it belongs to (Air/Ground...)
  baseGeometry: {
    bbox: BBoxObject;
    g:
      | {
          type: "path";
          d: string;
        }
      | string;
  }; // Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)
  civilian: boolean; // Is it Civilian
  condition: Condition; // What condition is it in
  context: Context; // Context of the symbol (Reality/Exercise...)
  dimension: Dimension; // Dimension it is shown as (Air/Ground...) for example Ground Equipment is shown with the same shape as Sea.
  dimensionUnknown: boolean; // Is the dimension unknown
  dismounted?: boolean; // Land Dismounted Individual should have special icons
  echelon: Echelon; //What echelon (Platoon/Company...)
  faker: boolean; // Is it a Faker
  fenintDummy: boolean; // Is it a feint/dummy
  fill: boolean; // Standard says it should be filled
  frame: boolean; // Standard says it should be framed
  functionid: string; // Part of SIDC referring to the icon.
  headquarters: boolean; // Is it a Headquarters
  installation: boolean; // Is it an Instalation
  joker: boolean; // Is it a Joker
  leadership?: Leadership;
  mobility?: Mobility; // What mobility (Tracked/Sled...)
  notpresent: string; // Is it Anticipated or Pending
  numberSIDC: boolean; // Is the SIDC number based
  space: boolean; // Is it in Space
  suspect: boolean; // Is it a suspect symbol in 2525E
  taskForce: boolean; // Is it a task force
  unit: boolean; // Is this equipment or not
};

export type SymbolColors = {
  black: ColorMode; // Black parts of the symbol.
  fillColor: ColorMode; // Symbol fill color.
  frameColor: ColorMode; // Symbol frame color.
  iconColor: ColorMode; // Icon color.
  iconFillColor: ColorMode; // Icon fill color.
  none: ColorMode; // Transparent parts of the symbol.
  white: ColorMode; // White parts of the symbol.
};

export class Symbol {
  constructor(
    code: string | SymbolOptions,
    ...options: SymbolOptions[]
  );

  asCanvas(factor?: number): HTMLCanvasElement;
  asDOM(): Element;
  asOffscreenCanvas(factor?: number): OffscreenCanvas;
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

export interface Box {
  x1: number,
  y1: number,
  x2: number,
  y2: number,
}

interface BBoxObject extends Box {
  width(): number,
  height(): number,
  /** Merges one box with another returns the original box */
  merge(box: Box): this
}
/** Creates a bounding box object */
export type BBoxConstructor = {
  new (box?: Partial<Box>): BBoxObject;
};

/** Creates a ColorMode Object with colors used for different affiliations. */
export function ColorMode(civilian: string, friend: string, hostile: string, neutral: string, unknown: string, suspect: string): ColorMode;
/** Gets a color mode that has been registred with setColorMode */
export function getColorMode(mode: string): ColorMode;
/** Register a ColorMode with a name or override an existing ColorMode. */
export function setColorMode(name: string, colormode: ColorMode): ColorMode;

/** Gets the length of the HQ staf used for HQ symbols. */
export function getHqStaffLength(): number;
/** Sets the length of the HQ staf used for HQ symbols. */
export function setHqStaffLength(staff_length: number): number;


export interface DashObject {
  pending: string,
  anticipated: string,
  feintDummy: string
}
/** Gets the diffrent dash arrays used for dashed lines. */
export function getDashArrays(): DashObject;
/** Sets the dash arrays used for dashed lines */
export function setDashArrays(pending: string, anticipated: string, feintDummy: string): DashObject;

// Gets the version of milsymbol.
export function getVersion(): string;

/** Sets the preferred standard. */
export function setStandard(standard: "2525" | "APP6"): boolean;


type DrawPath = {
  type: "path";
  d: string;
  fill: string | false;
  fillopacity?: number;
  stroke: string | false;
  strokedasharray?: string;
  strokewidth?: number;
};

type DrawCircle = {
  type: "circle";
  cx: number;
  cy: number;
  r: number;
  fill: string | false;
  fillopacity?: number;
  stroke: string | false;
  strokedasharray?: string;
  strokewidth?: number;
};

type DrawText = {
  type: "text";
  x: number;
  y: number;
  textanchor: string;
  fontsize: number;
  fontfamily: string;
  fontweight: string;
  fill: string | false;
  fillopacity?: number;
  stroke: string | false;
  strokedasharray?: string;
  strokewidth?: number;
};

type DrawSVG = {
  type: "svg";
  svg: string; // Full SVG XML
};

type DrawTranslate = {
  type: "translate";
  x: number;
  y: number;
  draw: DrawInstruction[];
};

type DrawRotate = {
  type: "rotate";
  degree: number;
  x: number;
  y: number;
  draw: DrawInstruction[];
};

type DrawScale = {
  type: "scale";
  factor: number;
  draw: DrawInstruction[];
};

export type DrawInstruction =
  | DrawPath
  | DrawCircle
  | DrawText
  | DrawSVG
  | DrawTranslate
  | DrawRotate
  | DrawScale;

export type ExtensionFunction = (
  this: Symbol,
  ms: typeof _default
) => {
  pre: DrawInstruction[];
  post: DrawInstruction[];
  bbox: BBoxObject;
};

export function addSymbolPart(extension: ExtensionFunction): typeof _default;

declare const _default: {
  Symbol: typeof Symbol;
  BBox: BBoxConstructor;
  ColorMode: typeof ColorMode;
  getColorMode: typeof getColorMode;
  setColorMode: typeof setColorMode;
  getHqStaffLength: typeof getHqStaffLength;
  setHqStaffLength: typeof setHqStaffLength;
  getDashArrays: typeof getDashArrays;
  setDashArrays: typeof setDashArrays;
  getVersion: typeof getVersion;
  setStandard: typeof setStandard;
  addSymbolPart: typeof addSymbolPart;
};

export default _default;
