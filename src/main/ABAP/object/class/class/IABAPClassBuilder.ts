import { IABAPBuilder } from "../../../core/IABAPBuilder";
import { IABAPConstants } from "../../../variables/constant/IABAPConstants";
import { IABAPInterface } from "../../interface/IABAPInterface";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { IABAPClass } from "./IABAPClass";

export interface IABAPClassBuilder extends IABAPBuilder<IABAPClass> {
  addInterface(abapInterface: IABAPInterface): IABAPClassBuilder;
  addConstants(abapConstants: IABAPConstants): IABAPClassBuilder;
  
  addMethod(abapClassMethod: IABAPClassMethod): IABAPClassBuilder;
}
