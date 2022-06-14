import { Renderer } from "../../../builder/builder";
import { IABAPMethod } from "../../method/IABAPMethod";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { IABAPPrivateSection } from "../section/private/IABAPPrivateSection";
import { IABAPProtectedSection } from "../section/protected/IABAPProtectedSection";
import { IABAPPublicSection } from "../section/public/IABAPPublicSection";
import { IABAPClass } from "./IABAPClass";

export class ABAPClass implements IABAPClass {
  constructor(
    readonly name: string,
    readonly abapPublicSection?: IABAPPublicSection,
    readonly abapProtectedSection?: IABAPProtectedSection,
    readonly abapPrivateSection?: IABAPPrivateSection
  ) {}

  toABAPDefinition(): string {
    return Renderer()
      .append(`CLASS ${this.name} DEFINITION.`)
      .appendABAPAndLeadingBlank(this.abapPublicSection)
      .appendABAPAndLeadingBlank(this.abapProtectedSection)
      .appendABAPAndLeadingBlank(this.abapPrivateSection)
      .appendAndLeadingBlank(`ENDCLASS.`)
      .render();
  }

  toABAPImplementation(): string {
    return Renderer()
      .append(`CLASS ${this.name} IMPLEMENTATION.`)
      .appendAndLeadingBlank(this.renderMethodBody(this.collectABAPMethods()))
      .appendAndLeadingBlank(`ENDCLASS.`)
      .render();
  }

  toABAP(): string {
    return `${this.toABAPDefinition()}\n\n${this.toABAPImplementation()}`;
  }

  private renderMethodBody(abapMethods?: IABAPMethod[]): string {
    if (
      abapMethods == undefined ||
      abapMethods == null ||
      abapMethods.length == 0
    ) {
      return "";
    }

    let code = "";
    abapMethods.forEach((method) => {
      if (code == "") {
        code = `  METHOD ${method.name}.\n  ENDMETHOD.`;
      } else {
        code += `\n\n  METHOD ${method.name}.\n  ENDMETHOD.`;
      }
    });
    return code;
  }

  private collectABAPMethods(): IABAPClassMethod[] {
    let abapMethods: IABAPClassMethod[] = [];
    if (this.abapPublicSection != undefined && this.abapPublicSection != null) {
      abapMethods.push(...this.abapPublicSection.abapMethods);
    }

    if (
      this.abapProtectedSection != undefined &&
      this.abapProtectedSection != null
    ) {
      abapMethods.push(...this.abapProtectedSection.abapMethods);
    }

    if (
      this.abapPrivateSection != undefined &&
      this.abapPrivateSection != null
    ) {
      abapMethods.push(...this.abapPrivateSection.abapMethods);
    }

    return abapMethods;
  }
}
