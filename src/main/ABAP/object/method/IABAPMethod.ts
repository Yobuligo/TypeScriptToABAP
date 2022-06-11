import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAP } from "../../core/IABAP";
import { IABAPParameter } from "../../variables/parameter/IABAPParameter";

export interface IABAPMethod extends IABAP {
  readonly name: string;
  readonly impParameters?: IABAPParameter<ABAPParamKind.importing>[];
  readonly expParameters?: IABAPParameter<ABAPParamKind.exporting>[];
  readonly chgParameters?: IABAPParameter<ABAPParamKind.changing>[];
  readonly retParameter?: IABAPParameter<ABAPParamKind.returning>;
}
