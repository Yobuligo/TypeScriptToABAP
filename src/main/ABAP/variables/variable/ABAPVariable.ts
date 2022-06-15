import { ABAPType } from "../../core/ABAPType";
import { ABAPTypeKind } from "../../core/ABAPTypeKind";
import { IABAPVariable } from "./IABAPVariable";

export class ABAPVariable implements IABAPVariable {
  protected keywordValue = "VALUE";

  constructor(
    readonly name: string,
    readonly typeKind: ABAPTypeKind,
    readonly type: ABAPType,
    readonly value?: string
  ) {}

  toABAP(): string {
    return `${this.name} ${this.typeKind} ${this.type}${this.renderValue()}`;
  }

  private renderValue(): string {
    if (this.value === undefined || this.value === null) {
      return "";
    }

    switch (this.type) {
      case ABAPType.string:
        return this.renderStringValue();
      case ABAPType.int:
        return this.renderIntValue();
      case ABAPType.boolean:
        return this.renderBooleanValue();
    }
  }

  private renderBooleanValue(): string {
    const value = this.value.toLowerCase();
    if (value == "x" || value == "abap_true") {
      return ` ${this.keywordValue} abap_true`;
    }

    if (value == " " || value == "abap_false") {
      return ` ${this.keywordValue} abap_false`;
    }
  }

  private renderIntValue() {
    return ` ${this.keywordValue} ${this.value}`;
  }

  private renderStringValue(): string {
    return ` ${this.keywordValue} '${this.value}'`;
  }
}
