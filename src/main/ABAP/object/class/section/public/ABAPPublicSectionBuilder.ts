import { IABAPInterface } from "../../../interface/IABAPInterface";
import { ABAPSectionBuilder } from "../ABAPSectionBuilder";
import { ABAPSectionType } from "../ABAPSectionType";
import { ABAPPublicSection } from "./ABAPPublicSection";
import { IABAPPublicSection } from "./IABAPPublicSection";
import { IABAPPublicSectionBuilder } from "./IABAPPublicSectionBuilder";

export class ABAPPublicSectionBuilder
  extends ABAPSectionBuilder<ABAPSectionType.public, IABAPPublicSection>
  implements IABAPPublicSectionBuilder
{
  private abapInterfaces: IABAPInterface[] = [];

  addInterface(abapInterface: IABAPInterface): IABAPPublicSectionBuilder {
    this.abapInterfaces.push(abapInterface);
    return this;
  }

  build(): IABAPPublicSection {
    return new ABAPPublicSection(
      this.abapInterfaces,
      this.abapConstants,
      this.abapVariables,
      this.abapMethods
    );
  }
}
