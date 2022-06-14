import { IABAPConstant } from "../../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../../variables/variable/IABAPVariable";
import { IABAPClassMethod } from "../../classMethod/IABAPClassMethod";
import { ABAPSection } from "../ABAPSection";
import { ABAPSectionType } from "../ABAPSectionType";
import { IABAPProtectedSection } from "./IABAPProtectedSection";

export class ABAPProtectedSection
  extends ABAPSection<ABAPSectionType.protected>
  implements IABAPProtectedSection
{
  constructor(
    constants?: IABAPConstant[],
    variables?: IABAPVariable[],
    methods?: IABAPClassMethod[]
  ) {
    super(ABAPSectionType.protected, constants, variables, methods);
  }
}
