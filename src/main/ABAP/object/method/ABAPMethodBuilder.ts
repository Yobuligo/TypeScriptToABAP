import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPParameter } from "../../variables/parameter/IABAPParameter";
import { ABAPMethod } from "./ABAPMethod";
import { IABAPMethod } from "./IABAPMethod";
import { IABAPMethodBuilder } from "./IABAPMethodBuilder";

export class ABAPMethodBuilder implements IABAPMethodBuilder<IABAPMethod> {
  protected abapImpParameters: IABAPParameter<ABAPParamKind.importing>[] = [];
  protected abapExpParameters: IABAPParameter<ABAPParamKind.exporting>[] = [];
  protected abapChgParameters: IABAPParameter<ABAPParamKind.changing>[] = [];
  protected abapRetParameter?: IABAPParameter<ABAPParamKind.returning> = null;

  constructor(readonly name: string) {}

  addImpParameter(
    abapImpParameter: IABAPParameter<ABAPParamKind.importing>
  ): IABAPMethodBuilder<IABAPMethod> {
    this.abapImpParameters.push(abapImpParameter);
    return this;
  }

  addExpParameter(
    abapExpParameter: IABAPParameter<ABAPParamKind.exporting>
  ): IABAPMethodBuilder<IABAPMethod> {
    this.abapExpParameters.push(abapExpParameter);
    return this;
  }

  addChgParameter(
    abapChgParameter: IABAPParameter<ABAPParamKind.changing>
  ): IABAPMethodBuilder<IABAPMethod> {
    this.abapChgParameters.push(abapChgParameter);
    return this;
  }

  setRetParameter(
    abapRetParameter: IABAPParameter<ABAPParamKind.returning>
  ): IABAPMethodBuilder<IABAPMethod> {
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
