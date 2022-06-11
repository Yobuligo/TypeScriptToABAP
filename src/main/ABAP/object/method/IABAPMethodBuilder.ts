import { ABAPParamKind } from "../../core/ABAPParamKind";
import { IABAPBuilder } from "../../core/IABAPBuilder";
import { IABAPParameter } from "../../variables/parameter/IABAPParameter";
import { IABAPMethod } from "./IABAPMethod";

export interface IABAPMethodBuilder<T extends IABAPMethod>
  extends IABAPBuilder<T> {
  name: string;
  addImpParameter(
    abapImpParameter: IABAPParameter<ABAPParamKind.importing>
  ): IABAPMethodBuilder<T>;
  addExpParameter(
    abapExpParameter: IABAPParameter<ABAPParamKind.exporting>
  ): IABAPMethodBuilder<T>;
  addChgParameter(
    abapChgParameter: IABAPParameter<ABAPParamKind.changing>
  ): IABAPMethodBuilder<T>;
  setRetParameter(
    abapRetParameter: IABAPParameter<ABAPParamKind.returning>
  ): IABAPMethodBuilder<T>;
}
