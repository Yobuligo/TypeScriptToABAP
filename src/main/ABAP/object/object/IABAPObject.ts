import { IABAP } from "../../core/IABAP";
import { IABAPConstant } from "../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";

export interface IABAPObject extends IABAP {
  readonly interface?: IABAPInterface[];
  readonly constants?: IABAPConstant[];
  readonly methods?: IABAPMethod[];
  readonly name: string;
}
