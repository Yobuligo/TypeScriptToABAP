import { ABAPParamKind } from "../../../core/ABAPParamKind";
import { IABAPParameter } from "../../../variables/parameter/IABAPParameter";
import { ABAPMethodBuilder } from "../../method/ABAPMethodBuilder";
import { ABAPClassMethod } from "./ABAPClassMethod";
import { IABAPClassMethod } from "./IABAPClassMethod";
import { IABAPClassMethodBuilder } from "./IABAPClassMethodBuilder";

export class ABAPClassMethodBuilder
  extends ABAPMethodBuilder
  implements IABAPClassMethodBuilder
{
  private code: string[] = [];

  constructor(readonly name: string) {
    super(name);
  }

  addImpParameter(
    abapImpParameter: IABAPParameter<ABAPParamKind.importing>
  ): IABAPClassMethodBuilder {
    super.addImpParameter(abapImpParameter);
    return this;
  }

  addExpParameter(
    abapExpParameter: IABAPParameter<ABAPParamKind.exporting>
  ): IABAPClassMethodBuilder {
    super.addExpParameter(abapExpParameter);
    return this;
  }

  addChgParameter(
    abapChgParameter: IABAPParameter<ABAPParamKind.changing>
  ): IABAPClassMethodBuilder {
    super.addChgParameter(abapChgParameter);
    return this;
  }

  setRetParameter(
    abapRetParameter: IABAPParameter<ABAPParamKind.returning>
  ): IABAPClassMethodBuilder {
    super.setRetParameter(abapRetParameter);
    return this;
  }

  setCode(code: string[]): IABAPClassMethodBuilder {
    this.code = code;
    return this;
  }

  build(): IABAPClassMethod {
    return new ABAPClassMethod(
      this.name,
      this.abapImpParameters,
      this.abapExpParameters,
      this.abapChgParameters,
      this.abapRetParameter,
      this.code
    );
  }
}
