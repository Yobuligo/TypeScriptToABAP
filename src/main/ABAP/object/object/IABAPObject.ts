import { IABAP } from "../../core/IABAP";
import { IABAPConstants } from "../../variables/constant/IABAPConstants";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";

export interface IABAPObject extends IABAP {
  readonly interface?: IABAPInterface[];
  readonly constants?: IABAPConstants[];
  readonly methods?: IABAPMethod[];
  readonly name: string;
}
