import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPParameter } from "../../variables/parameter/IABAPParameter";
import { IABAPMethod } from "./IABAPMethod";

export class ABAPMethod implements IABAPMethod {
  constructor(
    readonly name: string,
    readonly impParameters?: IABAPParameter<ABAPParamKind.importing>[],
    readonly expParameters?: IABAPParameter<ABAPParamKind.exporting>[],
    readonly chgParameters?: IABAPParameter<ABAPParamKind.changing>[],
    readonly retParameter?: IABAPParameter<ABAPParamKind.returning>
  ) {}

  toABAP(): string {
    return `METHODS ${
      this.name
    }${this.renderImpParameters()}${this.renderExpParameters()}${this.renderChgParameters()}${this.renderRetParameter()}.`;
  }

  private renderImpParameters(): string {
    return this.renderParameters(ABAPParamKind.importing, this.impParameters);
  }

  private renderExpParameters(): string {
    return this.renderParameters(ABAPParamKind.exporting, this.expParameters);
  }

  private renderChgParameters(): string {
    return this.renderParameters(ABAPParamKind.changing, this.chgParameters);
  }

  private renderRetParameter(): string {
    if (this.retParameter == undefined || this.retParameter == null) {
      return "";
    }

    return ` RETURNING VALUE(${this.retParameter.name}) ${this.retParameter.typeKind} ${this.retParameter.type}`;
  }

  private renderParameters(
    paramKind: ABAPParamKind,
    parameters?: IABAPParameter<any>[]
  ) {
    if (parameters == undefined || parameters == null || parameters.length == 0) {
      return "";
    }

    let code = "";
    parameters.forEach((parameter) => {
      if (code == "") {
        code = parameter.toABAP();
      } else {
        code += ` ${parameter.toABAP()}`;
      }
    });
    return ` ${paramKind} ${code}`;
  }
}
