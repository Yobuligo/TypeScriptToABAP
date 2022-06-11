import { ABAPClass } from "./ABAPClass";
import { IABAPClass } from "./IABAPClass";
import { IABAPClassBuilder } from "./IABAPClassBuilder";

export class ABAPClassBuilder implements IABAPClassBuilder {
  constructor(readonly name: string) {}

  build(): IABAPClass {
    return new ABAPClass(this.name);
  }
}
