import { IABAP } from "../../../core/IABAP";
import { IABAPConstants } from "../../../variables/constant/IABAPConstants";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPMethod } from "../../method/IABAPMethod";
import { ABAPSectionType } from "./ABAPSectionType";

export interface IABAPSection<T extends ABAPSectionType> extends IABAP {
  abapSectionType: T;
  readonly constants?: IABAPConstants[];
  readonly variables?: IABAPVariable[];
  readonly methods?: IABAPMethod[];
}
