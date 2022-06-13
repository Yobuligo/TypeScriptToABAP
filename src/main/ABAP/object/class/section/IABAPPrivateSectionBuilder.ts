import { ABAPPrivateSection } from "./ABAPPrivateSection";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPSectionBuilder } from "./IABAPSectionBuilder";

export interface IABAPPrivateSectionBuilder
  extends IABAPSectionBuilder<ABAPSectionType.private, ABAPPrivateSection> {}
