import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPParameter } from "../../variables/parameter/IABAPParameter";
import { ABAPMethod } from "./ABAPMethod";
import { IABAPMethod } from "./IABAPMethod";
import { IABAPMethodBuilder } from "./IABAPMethodBuilder";

export class ABAPMethodBuilder implements IABAPMethodBuilder {
  private abapImpParameters: IABAPParameter<ABAPParamKind.importing>[] = [];
  private abapExpParameters: IABAPParameter<ABAPParamKind.exporting>[] = [];
  private abapChgParameters: IABAPParameter<ABAPParamKind.changing>[] = [];
  private abapRetParameter?: IABAPParameter<ABAPParamKind.returning> = null;

  constructor(readonly name: string) {}

  addImpParameter(
    abapImpParameter: IABAPParameter<ABAPParamKind.importing>
  ): IABAPMethodBuilder {
    this.abapImpParameters.push(abapImpParameter);
    return this;
  }

  addExpParameter(
    abapExpParameter: IABAPParameter<ABAPParamKind.exporting>
  ): IABAPMethodBuilder {
    this.abapExpParameters.push(abapExpParameter);
    return this;
  }

  addChgParameter(
    abapChgParameter: IABAPParameter<ABAPParamKind.changing>
  ): IABAPMethodBuilder {
    this.abapChgParameters.push(abapChgParameter);
    return this;
  }

  setRetParameter(
    abapRetParameter: IABAPParameter<ABAPParamKind.returning>
  ): IABAPMethodBuilder {
    this.abapRetParameter = abapRetParameter;
    return this;
  }

  build(): IABAPMethod {
    return new ABAPMethod(
      this.name,
      this.abapImpParameters,
      this.abapExpParameters,
      this.abapChgParameters,
      this.abapRetParameter
    );
  }
}
