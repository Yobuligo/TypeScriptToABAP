import { ABAPParamKind } from "../core/ABAPParamKind";
import { ABAPType } from "../core/ABAPType";
import { ABAPTypeKind } from "../core/ABAPTypeKind";
import { ABAPClassBuilder } from "../object/class/class/ABAPClassBuilder";
import { IABAPClassBuilder } from "../object/class/class/IABAPClassBuilder";
import { ABAPClassMethodBuilder } from "../object/class/classMethod/ABAPClassMethodBuilder";
import { IABAPClassMethodBuilder } from "../object/class/classMethod/IABAPClassMethodBuilder";
import { ABAPInterfaceBuilder } from "../object/interface/ABAPInterfaceBuilder";
import { IABAPInterfaceBuilder } from "../object/interface/IABAPInterfaceBuilder";
import { ABAPMethodBuilder } from "../object/method/ABAPMethodBuilder";
import { IABAPMethod } from "../object/method/IABAPMethod";
import { IABAPMethodBuilder } from "../object/method/IABAPMethodBuilder";
import { ABAPConstants } from "../variables/constant/ABAPConstants";
import { IABAPConstants } from "../variables/constant/IABAPConstants";
import { ABAPDataDefinition } from "../variables/dataDefinition/ABAPDataDefinition";
import { IABAPDataDefinition } from "../variables/dataDefinition/IABAPDataDefinition";
import { ABAPParameter } from "../variables/parameter/ABAPParameter";
import { IABAPParameter } from "../variables/parameter/IABAPParameter";
import { ABAPVariable } from "../variables/variable/ABAPVariable";
import { IABAPVariable } from "../variables/variable/IABAPVariable";

export function Class(name: string): IABAPClassBuilder {
  return new ABAPClassBuilder(name);
}

export function ClassMethod(name: string): IABAPClassMethodBuilder {
  return new ABAPClassMethodBuilder(name);
}

export function Interface(name: string): IABAPInterfaceBuilder {
  return new ABAPInterfaceBuilder(name);
}

export function Method(name: string): IABAPMethodBuilder<IABAPMethod> {
  return new ABAPMethodBuilder(name);
}

export function ImpParameter(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value?: string
): IABAPParameter<ABAPParamKind.importing> {
  return new ABAPParameter(name, typeKind, type, value);
}

export function ExpParameter(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value?: string
): IABAPParameter<ABAPParamKind.exporting> {
  return new ABAPParameter(name, typeKind, type, value);
}

export function ChgParameter(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value?: string
): IABAPParameter<ABAPParamKind.changing> {
  return new ABAPParameter(name, typeKind, type, value);
}

export function RetParameter(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value?: string
): IABAPParameter<ABAPParamKind.returning> {
  return new ABAPParameter(name, typeKind, type, value);
}

export function Constants(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value: string
): IABAPConstants {
  return new ABAPConstants(name, typeKind, type, value);
}

export function DataDefinition(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value?: string
): IABAPDataDefinition {
  return new ABAPDataDefinition(name, typeKind, type, value);
}

export function Variable(
  name: string,
  typeKind: ABAPTypeKind,
  type: ABAPType,
  value?: string
): IABAPVariable {
  return new ABAPVariable(name, typeKind, type, value);
}
