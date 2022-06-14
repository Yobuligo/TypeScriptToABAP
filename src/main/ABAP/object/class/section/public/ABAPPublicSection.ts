import { Renderer } from "../../../../builder/builder";
import { IABAPConstant } from "../../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../../variables/variable/IABAPVariable";
import { IABAPInterface } from "../../../interface/IABAPInterface";
import { IABAPClassMethod } from "../../classMethod/IABAPClassMethod";
import { ABAPSection } from "../ABAPSection";
import { ABAPSectionType } from "../ABAPSectionType";
import { IABAPPublicSection } from "./IABAPPublicSection";

export class ABAPPublicSection
  extends ABAPSection<ABAPSectionType.public>
  implements IABAPPublicSection
{
  constructor(
    readonly abapInterfaces?: IABAPInterface[],
    abapConstants?: IABAPConstant[],
    abapVariables?: IABAPVariable[],
    abapMethods?: IABAPClassMethod[]
  ) {
    super(ABAPSectionType.public, abapConstants, abapVariables, abapMethods);
  }

  toABAP(): string {
    return Renderer()
      .append(this.renderInterfaceHeader())
      .appendABAPsAndLeadingBlank(this.abapConstants)
      .appendABAPsAndLeadingBlank(this.abapVariables)
      .appendABAPsAndLeadingBlank(this.abapMethods)
      .insert(this.renderHeader())
      .render();
  }

  private renderInterfaceHeader(): string {
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
        code = `\n  INTERFACES ${abapInterface.name}.`;
      }
    });

    return code;
  }
}
