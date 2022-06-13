import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../../interface/IABAPInterface";
import { ABAPObject } from "../../object/ABAPObject";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { IABAPClass } from "./IABAPClass";

export class ABAPClass extends ABAPObject implements IABAPClass {
  constructor(
    readonly name: string,
    readonly abapInterfaces?: IABAPInterface[],
    readonly abapConstants?: IABAPConstant[],
    readonly abapMethods?: IABAPClassMethod[]
  ) {
    super(name, abapInterfaces, abapConstants, abapMethods);
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
      this.abapMethods == undefined ||
      this.abapMethods == null ||
      this.abapMethods.length == 0
    ) {
      return "";
    }

    let code = "";
    this.abapMethods.forEach((method) => {
      code += `\n\n  METHOD ${method.name}.\n  ENDMETHOD.`;
    });
    return code;
  }
}
