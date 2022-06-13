import { ABAPSectionType } from "../ABAPSectionType";
import { IABAPSectionBuilder } from "../IABAPSectionBuilder";
import { IABAPPrivateSection } from "./IABAPPrivateSection";

export interface IABAPPrivateSectionBuilder
  extends IABAPSectionBuilder<ABAPSectionType.private, IABAPPrivateSection> {}
