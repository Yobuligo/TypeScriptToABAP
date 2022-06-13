import { IABAPInterface } from "../../../interface/IABAPInterface";
import { ABAPSectionType } from "../ABAPSectionType";
import { IABAPPublicSection } from "./IABAPPublicSection";
import { IABAPSectionBuilder } from "../IABAPSectionBuilder";

export interface IABAPPublicSectionBuilder
  extends IABAPSectionBuilder<ABAPSectionType.public, IABAPPublicSection> {
  addInterface(abapInterface: IABAPInterface): IABAPPublicSectionBuilder;
}
