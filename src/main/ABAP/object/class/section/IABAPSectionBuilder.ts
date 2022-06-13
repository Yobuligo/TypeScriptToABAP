import { IABAPBuilder } from "../../../core/IABAPBuilder";
import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSection } from "./IABAPSection";

export interface IABAPSectionBuilder<
  TSectionType extends ABAPSectionType,
  TABAPSection extends IABAPSection<TSectionType>
> extends IABAPBuilder<TABAPSection> {
  addConstant(abapConstant: IABAPConstant): IABAPBuilder<TABAPSection>;
  addVariable(abapVariable: IABAPVariable): IABAPBuilder<TABAPSection>;
  addMethod(abapMethod: IABAPClassMethod): IABAPBuilder<TABAPSection>;
}
