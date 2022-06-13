import { Renderer } from "../../../../builder/builder";
import { IABAPConstant } from "../../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../../variables/variable/IABAPVariable";
import { IABAPInterface } from "../../../interface/IABAPInterface";
import { IABAPMethod } from "../../../method/IABAPMethod";
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
    abapMethods?: IABAPMethod[]
  ) {
    super(ABAPSectionType.public, abapConstants, abapVariables, abapMethods);
  }

  protected renderBody(): string {
    return `${this.renderInterfaces()}${this.renderConstants()}${this.renderVariables()}${this.renderMethods()}`;
  }

  private renderInterfaces() {
    return Renderer().render(this.abapInterfaces);
  }
}
