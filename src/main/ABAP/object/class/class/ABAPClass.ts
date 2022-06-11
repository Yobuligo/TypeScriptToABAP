import { IABAPClass } from "./IABAPClass";

export class ABAPClass implements IABAPClass {
  constructor(readonly name: string) {}

  toABAPDefinition(): string {
    return `CLASS ${this.name} DEFINITION.\nENDCLASS.`;
  }

  toABAPImplementation(): string {
    return `CLASS ${this.name} IMPLEMENTATION.\nENDCLASS.`;
  }

  toABAP(): string {
    return `${this.toABAPDefinition()}\n\n${this.toABAPImplementation()}`;
  }
}
