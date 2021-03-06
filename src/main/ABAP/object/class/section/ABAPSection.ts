import { Renderer } from "../../../builder/builder";
import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSection } from "./IABAPSection";

export abstract class ABAPSection<T extends ABAPSectionType>
  implements IABAPSection<T>
{
  constructor(
    readonly abapSectionType: T,
    readonly abapConstants?: IABAPConstant[],
    readonly abapVariables?: IABAPVariable[],
    readonly abapMethods?: IABAPClassMethod[]
  ) {}

  toABAP(): string {
    return Renderer()
      .appendABAPs(this.abapConstants)
      .appendABAPsAndLeadingBlank(this.abapVariables)
      .appendABAPsAndLeadingBlank(this.abapMethods)
      .insert(this.renderHeader())
      .render();
  }

  protected renderHeader(): string {
    return `${this.abapSectionType} SECTION.`;
  }
}
