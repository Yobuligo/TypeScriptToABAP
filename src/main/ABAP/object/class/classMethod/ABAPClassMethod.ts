import { ABAPParamKind } from "../../../core/ABAPParamKind";
import { IABAPParameter } from "../../../variables/parameter/IABAPParameter";
import { ABAPMethod } from "../../method/ABAPMethod";
import { IABAPClassMethod } from "./IABAPClassMethod";

export class ABAPClassMethod extends ABAPMethod implements IABAPClassMethod {
  constructor(
    name: string,
    impParameters?: IABAPParameter<ABAPParamKind.importing>[],
    expParameters?: IABAPParameter<ABAPParamKind.exporting>[],
    chgParameters?: IABAPParameter<ABAPParamKind.changing>[],
    retParameter?: IABAPParameter<ABAPParamKind.returning>,
    readonly code?: string[]
  ) {
    super(name, impParameters, expParameters, chgParameters, retParameter);
  }

  toABAPDefinition(): string {
    return super.toABAP();
  }

  toABAPImplementation(): string {
    if (this.code == undefined || this.code == null || this.code.length == 0) {
      return `METHOD ${this.name}.\nENDMETHOD.`;
    } else {
      return `METHOD ${this.name}.\n\n${this.code}\n\nENDMETHOD.`;
    }
  }
}
