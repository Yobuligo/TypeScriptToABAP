import { IABAPParameter } from "../../../variables/parameter/IABAPParameter";
import { ABAPMethod } from "../../method/ABAPMethod";
import { IABAPClassMethod } from "./IABAPClassMethod";

export class ABAPClassMethod extends ABAPMethod implements IABAPClassMethod {
  code: string[];


  toABAPDefinition(): string {
    throw new Error("Method not implemented.");
  }

  toABAPImplementation(): string {
    throw new Error("Method not implemented.");
  }
}
