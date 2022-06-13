import { ABAPSectionType } from "../ABAPSectionType";
import { IABAPSectionBuilder } from "../IABAPSectionBuilder";
import { IABAPProtectedSection } from "./IABAPProtectedSection";

export interface IABAPProtectedSectionBuilder
  extends IABAPSectionBuilder<
    ABAPSectionType.protected,
    IABAPProtectedSection
  > {}
