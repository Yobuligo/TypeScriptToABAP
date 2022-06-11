import { IABAP } from "./IABAP";
import { IABAPRenderer } from "./IABAPRenderer";

export class ABAPRenderer implements IABAPRenderer {
  render(abaps?: IABAP[]): string;
  render(
    insertLeadingEmptyRow: boolean,
    insertSeparatorRow: boolean,
    abaps?: IABAP[]
  ): string;
  render(
    insertLeadingEmptyRow: any = true,
    insertSeparatorRow: any = false,
    abaps?: any
  ): string {
    if (abaps == undefined || abaps == null || abaps.length == 0) {
      return "";
    }

    let code = "";
    if (insertLeadingEmptyRow) {
      code = "\n";
    }

    abaps.forEach((abap) => {
      if (code == "") {
        code = `  ${abap.toABAP()}`;
      } else {
        if (insertSeparatorRow) {
          code += `\n\n  ${abap.toABAP()}`;
        } else {
          code += `\n  ${abap.toABAP()}`;
        }
      }
    });
    return code;
  }
}
