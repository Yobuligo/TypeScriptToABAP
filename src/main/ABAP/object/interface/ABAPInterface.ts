import { ABAPObject } from "../object/ABAPObject";
import { IABAPInterface } from "./IABAPInterface";

export class ABAPInterface extends ABAPObject implements IABAPInterface {
  toABAP(): string {
    let code = super.toABAP();
    if (code != "") {
      code += `\n`;
    }
    return `INTERFACE ${this.name}.${code}\nENDINTERFACE.`;
  }
}
