import { IABAPMethod } from "../../method/IABAPMethod";
import { IABAPDefinition } from "../IABAPDefinition";
import { IABAPImplementation } from "../IABAPImplementation";

export interface IABAPClassMethod
  extends IABAPMethod,
    IABAPDefinition,
    IABAPImplementation {
  readonly code?: string[];
}
