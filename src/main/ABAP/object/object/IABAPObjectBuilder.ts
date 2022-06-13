import { IABAPBuilder } from "../../core/IABAPBuilder";
import { IABAPConstant } from "../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPObject } from "./IABAPObject";

export interface IABAPObjectBuilder<T extends IABAPObject>
  extends IABAPBuilder<T> {
  addInterface(abapInterface: IABAPInterface): IABAPObjectBuilder<T>;
  addConstant(abapConstant: IABAPConstant): IABAPObjectBuilder<T>;
  addMethod(abapMethod: IABAPMethod): IABAPObjectBuilder<T>;
}
