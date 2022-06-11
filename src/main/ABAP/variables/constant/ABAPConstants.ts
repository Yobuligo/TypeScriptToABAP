import { ABAPType } from "../../core/ABAPType";
import { ABAPTypeKind } from "../../core/ABAPTypeKind";
import { ABAPVariable } from "../variable/ABAPVariable";
import { IABAPConstants } from "./IABAPConstants";

export class ABAPConstants extends ABAPVariable implements IABAPConstants {
  constructor(
    name: string,
    typeKind: ABAPTypeKind,
    type: ABAPType,
    value: string
  ) {
    super(name, typeKind, type, value);
  }
  toABAP(): string {
    return `CONSTANTS ${super.toABAP()}.`;
  }
}
