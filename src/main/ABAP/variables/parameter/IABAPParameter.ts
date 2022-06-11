import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPVariable } from "../variable/IABAPVariable";

export interface IABAPParameter<T extends ABAPParamKind> extends IABAPVariable {
  readonly paramKind: T;
}
