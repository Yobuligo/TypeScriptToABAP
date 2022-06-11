import { ABAPVariable } from "../variable/ABAPVariable";
import { IABAPDataDefinition } from "./IABAPDataDefinition";

export class ABAPDataDefinition
  extends ABAPVariable
  implements IABAPDataDefinition
{
  toABAP(): string {
    return `DATA ${super.toABAP()}.`;
  }
}
