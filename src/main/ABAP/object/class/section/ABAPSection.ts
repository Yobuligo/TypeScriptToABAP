import { Renderer } from "../../../builder/builder";
import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPMethod } from "../../method/IABAPMethod";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSection } from "./IABAPSection";

export abstract class ABAPSection<T extends ABAPSectionType>
  implements IABAPSection<T>
{
  constructor(
    readonly abapSectionType: T,
    readonly abapConstants?: IABAPConstant[],
    readonly abapVariables?: IABAPVariable[],
    readonly abapMethods?: IABAPMethod[]
  ) {}

  toABAP(): string {
    return `${this.renderHeader}\n${this.renderBody}`;
  }

  protected renderHeader(): string {
    return `${this.abapSectionType} SECTION.`;
  }

  protected renderBody(): string {
    return `${this.renderConstants()}${this.renderVariables()}${this.renderMethods()}`;
  }

  protected renderConstants(): string {
    return Renderer().render(this.abapConstants);
  }

  protected renderVariables(): string {
    return Renderer().render(this.abapVariables);
  }

  protected renderMethods(): string {
    return Renderer().render(this.abapMethods);
  }
}
