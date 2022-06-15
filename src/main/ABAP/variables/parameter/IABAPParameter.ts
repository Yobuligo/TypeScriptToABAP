import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPVariable } from "../variable/IABAPVariable";

export interface IABAPParameter<TABAPParamKind extends ABAPParamKind>
  extends IABAPVariable {
  readonly paramKind: TABAPParamKind;
}
