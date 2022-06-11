import { IABAPObject } from "../../object/IABAPObject";
import { IABAPDefinition } from "../IABAPDefinition";
import { IABAPImplementation } from "../IABAPImplementation";

export interface IABAPClass
  extends IABAPObject,
    IABAPDefinition,
    IABAPImplementation {}
