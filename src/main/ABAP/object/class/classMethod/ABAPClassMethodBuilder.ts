import { ABAPClassMethod } from "./ABAPClassMethod";
import { IABAPClassMethod } from "./IABAPClassMethod";
import { IABAPClassMethodBuilder } from "./IABAPClassMethodBuilder";

export class ABAPClassMethodBuilder implements IABAPClassMethodBuilder {
  constructor(readonly name: string) {}

  build(): IABAPClassMethod {
    return new ABAPClassMethod(this.name);
  }
}
