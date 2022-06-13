import { Renderer } from "../../builder/builder";
import { ABAPObject } from "../object/ABAPObject";
import { IABAPInterface } from "./IABAPInterface";

export class ABAPInterface extends ABAPObject implements IABAPInterface {
  toABAP(): string {
    return Renderer()
      .append(`INTERFACE ${this.name}.`)
      .append(this.renderInterfaces())
      .appendABAPsAndLeadingBlank(this.abapConstants)
      .appendABAPsAndLeadingBlank(this.abapMethods)
      .appendAndLeadingBlank(`ENDINTERFACE.`)
      .render();
  }
}
