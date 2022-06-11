import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { ABAPClassSectionType } from "./ABAPClassSectionType";
import { IABAPClassSection as IABAPClassSection } from "./IABAPClassSection";

export class ABAPClassSection implements IABAPClassSection {
  constructor(
    private readonly abapSectionType: ABAPClassSectionType,
    private readonly abapVariables: IABAPVariable[]
  ) {}

  toABAP(): string {
    let code = "";
    this.abapVariables.forEach((abapVariable) => {
      if (code == "") {
        code = abapVariable.toABAP();
      } else {
        code += `\n${abapVariable.toABAP()}`;
      }
    });
    return `${this.abapSectionType}.\n${code}`;
  }
}
