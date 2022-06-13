import { IABAPInterface } from "../../interface/IABAPInterface";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSection } from "./IABAPSection";

export interface IABAPPublicSection
  extends IABAPSection<ABAPSectionType.public> {
  readonly abapInterface?: IABAPInterface[];
}
