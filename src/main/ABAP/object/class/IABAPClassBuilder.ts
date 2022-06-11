import { IABAPBuilder } from "../../core/IABAPBuilder";
import { IABAPClass } from "./IABAPClass";
import { IABAPClassSection } from "./section/IABAPClassSection";
import { IABAPClassSectionBuilder } from "./section/IABAPClassSectionBuilder";

export interface IABAPClassBuilder extends IABAPBuilder<IABAPClass> {
  getPublicSection(): IABAPClassSectionBuilder
  getProtectedSection(): IABAPClassSectionBuilder
  getPrivateSection(): IABAPClassSectionBuilder
  setClassName(className: string): IABAPClassBuilder;
  setSuperClassName(superClassName: string): IABAPClassBuilder;  
  build(): IABAPClass;
}
