import { IABAPConstants } from "../../../variables/constant/IABAPConstants";
import { IABAPInterface } from "../../interface/IABAPInterface";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { ABAPClass } from "./ABAPClass";
import { IABAPClass } from "./IABAPClass";
import { IABAPClassBuilder } from "./IABAPClassBuilder";

export class ABAPClassBuilder implements IABAPClassBuilder {
  private abapInterfaces: IABAPInterface[] = [];
  private abapConstants: IABAPConstants[] = [];
  private abapClassMethods: IABAPClassMethod[] = [];

  constructor(readonly name: string) {}

  addInterface(abapInterface: IABAPInterface): IABAPClassBuilder {
    this.abapInterfaces.push(abapInterface);
    return this;
  }
  addConstants(abapConstants: IABAPConstants): IABAPClassBuilder {
    this.abapConstants.push(abapConstants);
    return this;
  }
  addMethod(abapClassMethod: IABAPClassMethod): IABAPClassBuilder {
    this.abapClassMethods.push(abapClassMethod);
    return this;
  }

  build(): IABAPClass {
    return new ABAPClass(
      this.name,
      this.abapInterfaces,
      this.abapConstants,
      this.abapClassMethods
    );
  }
}
