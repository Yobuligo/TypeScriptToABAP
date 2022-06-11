import { IABAPBuilder } from "../../core/IABAPBuilder";
import { IABAPConstants } from "../../variables/constant/IABAPConstants";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPObject } from "./IABAPObject";

export interface IABAPObjectBuilder<T extends IABAPObject>
  extends IABAPBuilder<T> {
  addInterface(abapInterface: IABAPInterface): IABAPObjectBuilder<T>;
  addConstants(abapConstants: IABAPConstants): IABAPObjectBuilder<T>;
  addMethod(abapMethod: IABAPMethod): IABAPObjectBuilder<T>;
}
