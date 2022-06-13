import { IABAP } from "../../../core/IABAP";
import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPMethod } from "../../method/IABAPMethod";
import { ABAPSectionType } from "./ABAPSectionType";

export interface IABAPSection<T extends ABAPSectionType> extends IABAP {
  abapSectionType: T;
  readonly abapConstants?: IABAPConstant[];
  readonly abapVariables?: IABAPVariable[];
  readonly abapMethods?: IABAPMethod[];
}
