import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { ABAPClassSection } from "./ABAPClassSection";
import { ABAPClassSectionType } from "./ABAPClassSectionType";
import { IABAPClassSection } from "./IABAPClassSection";
import { IABAPClassSectionBuilder } from "./IABAPClassSectionBuilder";

export class ABAPClassSectionBuilder implements IABAPClassSectionBuilder {
  private abapVariables: IABAPVariable[] = [];

  constructor(private readonly abapClassSectionType: ABAPClassSectionType) {}

  addABAPVariable(abapVariable: IABAPVariable): IABAPClassSectionBuilder {
    this.abapVariables.push(abapVariable);
    return this;
  }

  build(): IABAPClassSection {
    return new ABAPClassSection(this.abapClassSectionType, this.abapVariables);
  }
}
