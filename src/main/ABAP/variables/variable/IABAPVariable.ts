import { ABAPType } from "../../core/ABAPType";
import { ABAPTypeKind } from "../../core/ABAPTypeKind";
import { IABAP } from "../../core/IABAP";

export interface IABAPVariable extends IABAP {
  readonly name: string;
  readonly typeKind: ABAPTypeKind;
  readonly type: ABAPType;
  readonly value?: string;
}
