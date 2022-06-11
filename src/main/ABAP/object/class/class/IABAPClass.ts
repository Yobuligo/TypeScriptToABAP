import { IABAP } from "../../core/IABAP";
import { IABAPDefinition } from "./IABAPDefinition";
import { IABAPImplementation } from "./IABAPImplementation";

export interface IABAPClass
  extends IABAPDefinition,
    IABAPImplementation,
    IABAP {
  readonly name: string;
}
