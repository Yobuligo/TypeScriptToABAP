import { IABAPBuilder } from "../../../core/IABAPBuilder";
import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSection } from "./IABAPSection";
import { IABAPSectionBuilder } from "./IABAPSectionBuilder";

export abstract class ABAPSectionBuilder<
  TSectionType extends ABAPSectionType,
  TABAPSection extends IABAPSection<TSectionType>
> implements IABAPSectionBuilder<TSectionType, TABAPSection>
{
  private abapConstants: IABAPConstant[] = [];
  private abapVariables: IABAPVariable[] = [];
  private abapMethods: IABAPClassMethod[] = [];

  addConstant(abapConstants: IABAPConstant): IABAPBuilder<TABAPSection> {
    this.abapConstants.push(abapConstants);
    return this;
  }

  addVariable(abapVariable: IABAPVariable): IABAPBuilder<TABAPSection> {
    this.abapVariables.push(abapVariable);
    return this;
  }

  addMethod(abapMethod: IABAPClassMethod): IABAPBuilder<TABAPSection> {
    this.abapMethods.push(abapMethod);
    return this;
  }

  build(): TABAPSection {
    throw new Error("Method not implemented.");
  }
}