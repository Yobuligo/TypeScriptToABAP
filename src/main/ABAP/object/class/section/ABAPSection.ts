import { Renderer } from "../../../builder/builder";
import { IABAPConstants } from "../../../variables/constant/IABAPConstants";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPMethod } from "../../method/IABAPMethod";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSection } from "./IABAPSection";

export abstract class ABAPSection<T extends ABAPSectionType>
  implements IABAPSection<T>
{
  constructor(
    readonly abapSectionType: T,
    readonly constants?: IABAPConstants[],
    readonly variables?: IABAPVariable[],
    readonly methods?: IABAPMethod[]
  ) {}

  toABAP(): string {
    return `${this.renderConstants()}${this.renderVariables()}${this.renderMethods()}`;
  }

  private renderConstants(): string {
    return Renderer().render(this.constants);
  }

  private renderVariables(): string {
    return Renderer().render(this.variables);
  }

  private renderMethods(): string {
    return Renderer().render(this.methods);
  }
}
