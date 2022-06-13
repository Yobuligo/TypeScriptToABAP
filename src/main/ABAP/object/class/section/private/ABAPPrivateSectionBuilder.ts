import { ABAPSectionBuilder } from "../ABAPSectionBuilder";
import { ABAPSectionType } from "../ABAPSectionType";
import { ABAPPrivateSection } from "./ABAPPrivateSection";
import { IABAPPrivateSection } from "./IABAPPrivateSection";
import { IABAPPrivateSectionBuilder } from "./IABAPPrivateSectionBuilder";

export class ABAPPrivateSectionBuilder
  extends ABAPSectionBuilder<ABAPSectionType.private, IABAPPrivateSection>
  implements IABAPPrivateSectionBuilder
{
  build(): IABAPPrivateSection {
    return new ABAPPrivateSection(
      this.abapConstants,
      this.abapVariables,
      this.abapMethods
    );
  }
}
