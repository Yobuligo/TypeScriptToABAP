import { ABAPPrivateSection } from "./ABAPPrivateSection";
import { ABAPSectionBuilder } from "./ABAPSectionBuilder";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPPrivateSectionBuilder } from "./IABAPPrivateSectionBuilder";

export class ABAPPrivateSectionBuilder
  extends ABAPSectionBuilder<ABAPSectionType.private, ABAPPrivateSection>
  implements IABAPPrivateSectionBuilder
{
  build(): ABAPPrivateSection {
    return new ABAPPrivateSection();
  }
}
