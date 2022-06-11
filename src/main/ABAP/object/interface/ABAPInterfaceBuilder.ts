import { IABAPConstants } from "../../variables/constant/IABAPConstants";
import { IABAPMethod } from "../method/IABAPMethod";
import { ABAPInterface } from "./ABAPInterface";
import { IABAPInterface } from "./IABAPInterface";
import { IABAPInterfaceBuilder } from "./IABAPInterfaceBuilder";

export class ABAPInterfaceBuilder implements IABAPInterfaceBuilder {
  private abapInterfaces: IABAPInterface[] = [];
  private abapConstants: IABAPConstants[] = [];
  private abapMethods: IABAPMethod[] = [];

  constructor(private readonly name: string) {}

  addInterface(abapInterface: IABAPInterface): IABAPInterfaceBuilder {
    this.abapInterfaces.push(abapInterface);
    return this;
  }

  addConstants(abapConstants: IABAPConstants): IABAPInterfaceBuilder {
    this.abapConstants.push(abapConstants);
    return this;
  }
  addMethod(abapMethod: IABAPMethod): IABAPInterfaceBuilder {
    this.abapMethods.push(abapMethod);
    return this;
  }

  build(): IABAPInterface {
    return new ABAPInterface(
      this.name,
      this.abapInterfaces,
      this.abapConstants,
      this.abapMethods
    );
  }
}
