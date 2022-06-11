import { ABAPParamKind } from "../../core/ABAPParamKind";
import { ABAPType } from "../../core/ABAPType";
import { ABAPTypeKind } from "../../core/ABAPTypeKind";
import { ABAPVariable } from "../variable/ABAPVariable";
import { IABAPParameter } from "./IABAPParameter";

export class ABAPParameter<T extends ABAPParamKind>
  extends ABAPVariable
  implements IABAPParameter<T>
{
  readonly paramKind: T;

  constructor(
    name: string,
    typeKind: ABAPTypeKind,
    type: ABAPType,
    value?: string
  ) {
    super(name, typeKind, type, value);
  }
}
