import { IABAPBuilder } from "../../core/IABAPBuilder";
import { IABAPConstants } from "../../variables/constant/IABAPConstants";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPInterface } from "./IABAPInterface";

export interface IABAPInterfaceBuilder extends IABAPBuilder<IABAPInterface> {
  addInterface(abapInterface: IABAPInterface): IABAPInterfaceBuilder;
  addConstants(abapConstants: IABAPConstants): IABAPInterfaceBuilder;
  addMethod(abapMethod: IABAPMethod): IABAPInterfaceBuilder;
}
