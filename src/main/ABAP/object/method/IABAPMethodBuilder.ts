import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPBuilder } from "../../core/IABAPBuilder";
import { IABAPParameter } from "../../variables/parameter/IABAPParameter";
import { IABAPMethod } from "./IABAPMethod";

export interface IABAPMethodBuilder extends IABAPBuilder<IABAPMethod> {
  name: string;
  addImpParameter(
    abapImpParameter: IABAPParameter<ABAPParamKind.importing>
  ): IABAPMethodBuilder;
  addExpParameter(
    abapExpParameter: IABAPParameter<ABAPParamKind.exporting>
  ): IABAPMethodBuilder;
  addChgParameter(
    abapChgParameter: IABAPParameter<ABAPParamKind.changing>
  ): IABAPMethodBuilder;
  setRetParameter(
    abapRetParameter: IABAPParameter<ABAPParamKind.returning>
  ): IABAPMethodBuilder;
}
