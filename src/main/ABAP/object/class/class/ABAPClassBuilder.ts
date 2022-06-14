import { IABAPPrivateSection } from "../section/private/IABAPPrivateSection";
import { IABAPProtectedSection } from "../section/protected/IABAPProtectedSection";
import { IABAPPublicSection } from "../section/public/IABAPPublicSection";
import { ABAPClass } from "./ABAPClass";
import { IABAPClass } from "./IABAPClass";
import { IABAPClassBuilder } from "./IABAPClassBuilder";

export class ABAPClassBuilder implements IABAPClassBuilder {
  private abapPublicSection: IABAPPublicSection;
  private abapProtectedSection: IABAPProtectedSection;
  private abapPrivateSection: IABAPPrivateSection;

  constructor(readonly name: string) {}

  setPublicSection(abapPublicSection: IABAPPublicSection): IABAPClassBuilder {
    this.abapPublicSection = abapPublicSection;
    return this;
  }

  setProtectedSection(
    abapProtectedSection: IABAPProtectedSection
  ): IABAPClassBuilder {
    this.abapProtectedSection = abapProtectedSection;
    return this;
  }

  setPrivateSection(
    abapPrivateSection: IABAPPrivateSection
  ): IABAPClassBuilder {
    this.abapPrivateSection = abapPrivateSection;
    return this;
  }

  build(): IABAPClass {
    return new ABAPClass(
      this.name,
      this.abapPublicSection,
      this.abapProtectedSection,
      this.abapPrivateSection
    );
  }
}
