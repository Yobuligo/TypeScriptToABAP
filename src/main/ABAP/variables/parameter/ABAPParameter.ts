import { ABAPParamKind } from "../../core/ABAPParamKind";
import { ABAPType } from "../../core/ABAPType";
import { ABAPTypeKind } from "../../core/ABAPTypeKind";
import { ABAPVariable } from "../variable/ABAPVariable";
import { IABAPParameter } from "./IABAPParameter";

export class ABAPParameter<TABAPParamKind extends ABAPParamKind>
  extends ABAPVariable
  implements IABAPParameter<TABAPParamKind>
{
  readonly paramKind: TABAPParamKind;

  constructor(
    name: string,
    typeKind: ABAPTypeKind,
    type: ABAPType,
    value?: string
  ) {
    super(name, typeKind, type, value);
    this.keywordValue = "DEFAULT";
  }
}
