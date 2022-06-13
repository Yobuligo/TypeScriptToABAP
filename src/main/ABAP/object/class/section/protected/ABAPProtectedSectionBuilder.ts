import { ABAPSectionBuilder } from "../ABAPSectionBuilder";
import { ABAPSectionType } from "../ABAPSectionType";
import { ABAPProtectedSection } from "./ABAPProtectedSection";
import { IABAPProtectedSection } from "./IABAPProtectedSection";
import { IABAPProtectedSectionBuilder } from "./IABAPProtectedSectionBuilder";

export class ABAPProtectedSectionBuilder
  extends ABAPSectionBuilder<ABAPSectionType.protected, IABAPProtectedSection>
  implements IABAPProtectedSectionBuilder
{
  build(): IABAPProtectedSection {
    return new ABAPProtectedSection(
      this.abapConstants,
      this.abapVariables,
      this.abapMethods
    );
  }
}
