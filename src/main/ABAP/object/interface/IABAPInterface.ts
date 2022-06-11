import { IABAP } from "../../core/IABAP";
import { IABAPConstants } from "../../variables/constant/IABAPConstants";
import { IABAPMethod } from "../method/IABAPMethod";

export interface IABAPInterface extends IABAP {
  readonly interface?: IABAPInterface[];
  readonly constants?: IABAPConstants[];
  readonly methods?: IABAPMethod[];
  readonly name: string;
}
