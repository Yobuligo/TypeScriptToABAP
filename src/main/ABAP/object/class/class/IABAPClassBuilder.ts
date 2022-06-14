import { IABAPBuilder } from "../../../core/IABAPBuilder";
import { IABAPPrivateSection } from "../section/private/IABAPPrivateSection";
import { IABAPProtectedSection } from "../section/protected/IABAPProtectedSection";
import { IABAPPublicSection } from "../section/public/IABAPPublicSection";
import { IABAPClass } from "./IABAPClass";

export interface IABAPClassBuilder extends IABAPBuilder<IABAPClass> {
  setPublicSection(abapPublicSection: IABAPPublicSection): IABAPClassBuilder;
  setProtectedSection(
    abapProtectedSection: IABAPProtectedSection
  ): IABAPClassBuilder;
  setPrivateSection(abapPrivateSection: IABAPPrivateSection): IABAPClassBuilder;
}
