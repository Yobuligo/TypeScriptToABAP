import { IABAPBuilder } from "../../../core/IABAPBuilder";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPClassSection } from "./IABAPClassSection";

export interface IABAPClassSectionBuilder extends IABAPBuilder<IABAPClassSection> {
  addABAPVariable(abapVariable: IABAPVariable): IABAPClassSectionBuilder;
}
