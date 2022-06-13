import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPPrivateSection } from "./IABAPPrivateSection";
import { IABAPSectionBuilder } from "./IABAPSectionBuilder";

export interface IABAPPrivateSectionBuilder
  extends IABAPSectionBuilder<ABAPSectionType.private, IABAPPrivateSection> {}
