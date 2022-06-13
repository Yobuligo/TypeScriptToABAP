import { Renderer } from "../../builder/builder";
import { IABAPConstant } from "../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPObject } from "./IABAPObject";

export class ABAPObject implements IABAPObject {
  constructor(
    readonly name: string,
    readonly abapInterfaces?: IABAPInterface[],
    readonly abapConstants?: IABAPConstant[],
    readonly abapMethods?: IABAPMethod[]
  ) {}

  toABAP(): string {
    return Renderer()
      .append(this.renderInterfaces())
      .appendABAPs(this.abapConstants)
      .appendABAPs(this.abapMethods)
      .render();
  }

  protected renderInterfaces(): string {
    if (
      this.abapInterfaces == undefined ||
      this.abapInterfaces == null ||
      this.abapInterfaces.length == 0
    ) {
      return "";
    }

    let code = "";
    this.abapInterfaces.forEach((abapInterface) => {
      if (code == "") {
        code = `  INTERFACES ${abapInterface.name}.`;
      } else {
        code += `\n  INTERFACES ${abapInterface.name}.`;
      }
    });
    return code;
  }
}
