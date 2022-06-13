import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPVariable } from "../../../variables/variable/IABAPVariable";
import { IABAPMethod } from "../../method/IABAPMethod";
import { ABAPSection } from "./ABAPSection";
import { ABAPSectionType } from "./ABAPSectionType";
import { IABAPPrivateSection } from "./IABAPPrivateSection";

export class ABAPPrivateSection
  extends ABAPSection<ABAPSectionType.private>
  implements IABAPPrivateSection
{
  constructor(
    constants?: IABAPConstant[],
    variables?: IABAPVariable[],
    methods?: IABAPMethod[]
  ) {
    super(ABAPSectionType.private, constants, variables, methods);
  }
}
