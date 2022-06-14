import { IABAP } from "../../../core/IABAP";
import { IABAPDefinition } from "../IABAPDefinition";
import { IABAPImplementation } from "../IABAPImplementation";
import { IABAPPrivateSection } from "../section/private/IABAPPrivateSection";
import { IABAPProtectedSection } from "../section/protected/IABAPProtectedSection";
import { IABAPPublicSection } from "../section/public/IABAPPublicSection";

export interface IABAPClass
  extends IABAP,
    IABAPDefinition,
    IABAPImplementation {
  readonly abapPublicSection?: IABAPPublicSection;
  readonly abapProtectedSection?: IABAPProtectedSection;
  readonly abapPrivateSection?: IABAPPrivateSection;
}
