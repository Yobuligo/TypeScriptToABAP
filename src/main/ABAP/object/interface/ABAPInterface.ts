import { IABAP } from "../../core/IABAP";
import { IABAPConstants } from "../../variables/constant/IABAPConstants";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPInterface } from "./IABAPInterface";

export class ABAPInterface implements IABAPInterface {
  constructor(
    readonly name: string,
    readonly interfaces?: IABAPInterface[],
    readonly constants?: IABAPConstants[],
    readonly methods?: IABAPMethod[]
  ) {}

  toABAP(): string {
    let code = `${this.renderInterfaces()}${this.renderConstants()}${this.renderMethods()}`;
    if (code != "") {
      code += `\n`;
    }
    return `INTERFACE ${this.name}.${code}\nENDINTERFACE.`;
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
    if (abaps == undefined || abaps == null || abaps.length == 0) {
      return "";
    }

    let code = "\n";
    abaps.forEach((abap) => {
      if (code == "") {
        code = `  ${abap.toABAP()}`;
      } else {
        code += `\n  ${abap.toABAP()}`;
      }
    });
    return code;
  }
}
