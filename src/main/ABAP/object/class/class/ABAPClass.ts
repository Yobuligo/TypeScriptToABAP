import { IABAPConstants } from "../../../variables/constant/IABAPConstants";
import { IABAPInterface } from "../../interface/IABAPInterface";
import { ABAPObject } from "../../object/ABAPObject";
import { IABAPClassMethod } from "../classMethod/IABAPClassMethod";
import { IABAPClass } from "./IABAPClass";

export class ABAPClass extends ABAPObject implements IABAPClass {
  constructor(
    readonly name: string,
    readonly interfaces?: IABAPInterface[],
    readonly constants?: IABAPConstants[],
    readonly methods?: IABAPClassMethod[]
  ) {
    super(name, interfaces, constants, methods);
  }

  toABAPDefinition(): string {
    let code = super.toABAP();
    if (code != "") {
      code += `\n`;
    }
    return `CLASS ${this.name} DEFINITION.${code}\nENDCLASS.`;
  }

  toABAPImplementation(): string {
    return `CLASS ${this.name} IMPLEMENTATION.\nENDCLASS.`;
  }

  toABAP(): string {
    return `${this.toABAPDefinition()}\n\n${this.toABAPImplementation()}`;
  }
}
