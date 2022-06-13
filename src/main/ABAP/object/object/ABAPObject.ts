import { Renderer } from "../../builder/builder";
import { ABAPRenderer } from "../../core/renderer/ABAPRenderer";
import { IABAP } from "../../core/IABAP";
import { IABAPConstant } from "../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPObject } from "./IABAPObject";

export class ABAPObject implements IABAPObject {
  constructor(
    readonly name: string,
    readonly interfaces?: IABAPInterface[],
    readonly constants?: IABAPConstant[],
    readonly methods?: IABAPMethod[]
  ) {}

  toABAP(): string {
    return `${this.renderInterfaces()}${this.renderConstants()}${this.renderMethods()}`;
  }

  private renderInterfaces(): string {
    if (this.interfaces == undefined || this.interfaces.length == 0) {
      return "";
    }

    let code = "\n";
    this.interfaces.forEach((intf) => {
      if (code == "") {
        code = `  INTERFACES ${intf.name}.`;
      } else {
        code += `\n  INTERFACES ${intf.name}.`;
      }
    });

    return code;
  }

  private renderConstants(): string {
    return this.renderABAPs(this.constants);
  }

  private renderMethods(): string {
    return this.renderABAPs(this.methods);
  }

  private renderABAPs(abaps?: IABAP[]): string {
    return Renderer().render(abaps);
  }
}
