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
  protected abapConstants: IABAPConstant[] = [];
  protected abapVariables: IABAPVariable[] = [];
  protected abapMethods: IABAPClassMethod[] = [];

  addConstant(
    abapConstants: IABAPConstant
  ): IABAPSectionBuilder<TSectionType, TABAPSection> {
    this.abapConstants.push(abapConstants);
    return this;
  }

  addVariable(
    abapVariable: IABAPVariable
  ): IABAPSectionBuilder<TSectionType, TABAPSection> {
    this.abapVariables.push(abapVariable);
    return this;
  }

  addMethod(
    abapMethod: IABAPClassMethod
  ): IABAPSectionBuilder<TSectionType, TABAPSection> {
    this.abapMethods.push(abapMethod);
    return this;
  }

  build(): TABAPSection {
    throw new Error("Method not implemented.");
  }
}
