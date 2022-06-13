import { ABAPType } from "../../core/ABAPType";
import { ABAPTypeKind } from "../../core/ABAPTypeKind";
import { ABAPVariable } from "../variable/ABAPVariable";
import { IABAPConstant } from "./IABAPConstant";

export class ABAPConstant extends ABAPVariable implements IABAPConstant {
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
