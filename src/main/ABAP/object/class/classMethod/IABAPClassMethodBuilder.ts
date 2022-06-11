import { IABAPMethodBuilder } from "../../method/IABAPMethodBuilder";
import { IABAPClassMethod } from "./IABAPClassMethod";

export interface IABAPClassMethodBuilder
  extends IABAPMethodBuilder<IABAPClassMethod> {
  setCode(code: string[]): IABAPClassMethodBuilder;
}
