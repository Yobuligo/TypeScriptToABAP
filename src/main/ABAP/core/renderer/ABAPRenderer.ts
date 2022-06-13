import { IABAP } from "../IABAP";
import { IABAPRenderer } from "./IABAPRenderer";

export class ABAPRenderer implements IABAPRenderer {
  render(abaps?: IABAP[]): string {
    if (abaps == undefined || abaps == null || abaps.length == 0) {
      return "";
    }

    let code = "";
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
