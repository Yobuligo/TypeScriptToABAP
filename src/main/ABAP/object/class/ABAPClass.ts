import { IABAP } from "../../core/IABAP";

export class ABAPClass implements IABAP {
  superClassName: string = "";

  constructor(public className: string) {}

  toABAP(): string {
    return `${this.renderDefinition()}\n\n${this.renderImplementation()}`;
  }

  private renderDefinition(): string {
    if (this.superClassName != "") {
      return `CLASS ${this.className} DEFINITION INHERITING FROM ${this.superClassName}.\nENDCLASS.`;
    } else {
      return `CLASS ${this.className} DEFINITION.\nENDCLASS.`;
    }
  }

  private renderImplementation(): string {
    return `CLASS ${this.className} IMPLEMENTATION.\nENDCLASS.`;
  }
}
