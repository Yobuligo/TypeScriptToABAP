import { IABAPConstant } from "../../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../../variables/variable/IABAPVariable";
import { IABAPMethod } from "../../../method/IABAPMethod";
import { ABAPSection } from "../ABAPSection";
import { ABAPSectionType } from "../ABAPSectionType";
import { IABAPPrivateSection } from "./IABAPPrivateSection";

export class ABAPPrivateSection
  extends ABAPSection<ABAPSectionType.private>
  implements IABAPPrivateSection
{
  constructor(
    abapConstants?: IABAPConstant[],
    abapVariables?: IABAPVariable[],
    abapMethods?: IABAPMethod[]
  ) {
    super(ABAPSectionType.private, abapConstants, abapVariables, abapMethods);
  }
}
