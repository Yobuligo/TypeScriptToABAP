import { IABAPConstant } from "../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../interface/IABAPInterface";
import { IABAPMethod } from "../method/IABAPMethod";
import { IABAPObject } from "./IABAPObject";
import { IABAPObjectBuilder } from "./IABAPObjectBuilder";

export abstract class ABAPObjectBuilder<T extends IABAPObject>
  implements IABAPObjectBuilder<T>
{
  protected abapInterfaces: IABAPInterface[] = [];
  protected abapConstants: IABAPConstant[] = [];
  protected abapMethods: IABAPMethod[] = [];

  constructor(protected readonly name: string) {}

  addInterface(abapInterface: IABAPInterface): IABAPObjectBuilder<T> {
    this.abapInterfaces.push(abapInterface);
    return this;
  }

  addConstant(abapConstant: IABAPConstant): IABAPObjectBuilder<T> {
    this.abapConstants.push(abapConstant);
    return this;
  }

  addMethod(abapMethod: IABAPMethod): IABAPObjectBuilder<T> {
    this.abapMethods.push(abapMethod);
    return this;
  }

  build(): T {
    throw new Error("Method not implemented.");
  }
}
