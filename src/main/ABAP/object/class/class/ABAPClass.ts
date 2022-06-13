import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../../interface/IABAPInterface";
import { ABAPObject } from "../../object/ABAPObject";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { IABAPClass } from "./IABAPClass";

export class ABAPClass extends ABAPObject implements IABAPClass {
  constructor(
    readonly name: string,
    readonly interfaces?: IABAPInterface[],
    readonly constants?: IABAPConstant[],
    readonly methods?: IABAPClassMethod[]
  ) {
    super(name, interfaces, constants, methods);
  }

  toABAPDefinition(): string {
    let code = super.toABAP();
    if (code != "") {
      code += `\n`;
    }
    return `CLASS ${this.name} DEFINITION.${code}\nENDCLASS.`;
  }

  toABAPImplementation(): string {
    let code = this.renderMethodBody();
    if (code != "") {
      code += `\n`;
    }
    return `CLASS ${this.name} IMPLEMENTATION.${code}\nENDCLASS.`;
  }

  toABAP(): string {
    return `${this.toABAPDefinition()}\n\n${this.toABAPImplementation()}`;
  }

  private renderMethodBody(): string {
    if (
      this.methods == undefined ||
      this.methods == null ||
      this.methods.length == 0
    ) {
      return "";
    }

    let code = "";
    this.methods.forEach((method) => {
      code += `\n\n  METHOD ${method.name}.\n  ENDMETHOD.`;
    });
    return code;
  }
}
