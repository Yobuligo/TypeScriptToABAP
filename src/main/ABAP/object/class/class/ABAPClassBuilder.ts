import { IABAPConstant } from "../../../variables/constant/IABAPConstant";
import { IABAPInterface } from "../../interface/IABAPInterface";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { ABAPClass } from "./ABAPClass";
import { IABAPClass } from "./IABAPClass";
import { IABAPClassBuilder } from "./IABAPClassBuilder";

export class ABAPClassBuilder implements IABAPClassBuilder {
  private abapInterfaces: IABAPInterface[] = [];
  private abapConstants: IABAPConstant[] = [];
  private abapClassMethods: IABAPClassMethod[] = [];

  constructor(readonly name: string) {}

  addInterface(abapInterface: IABAPInterface): IABAPClassBuilder {
    this.abapInterfaces.push(abapInterface);
    return this;
  }
  addConstant(abapConstant: IABAPConstant): IABAPClassBuilder {
    this.abapConstants.push(abapConstant);
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
