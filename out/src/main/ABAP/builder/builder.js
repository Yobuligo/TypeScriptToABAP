"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = exports.DataDefinition = exports.Constants = exports.RetParameter = exports.ChgParameter = exports.ExpParameter = exports.ImpParameter = exports.Method = exports.Interface = void 0;
var ABAPInterfaceBuilder_1 = require("../object/interface/ABAPInterfaceBuilder");
var ABAPMethodBuilder_1 = require("../object/method/ABAPMethodBuilder");
var ABAPConstants_1 = require("../variables/constant/ABAPConstants");
var ABAPDataDefinition_1 = require("../variables/dataDefinition/ABAPDataDefinition");
var ABAPParameter_1 = require("../variables/parameter/ABAPParameter");
var ABAPVariable_1 = require("../variables/variable/ABAPVariable");
function Interface(name) {
    return new ABAPInterfaceBuilder_1.ABAPInterfaceBuilder(name);
}
exports.Interface = Interface;
function Method(name) {
    return new ABAPMethodBuilder_1.ABAPMethodBuilder(name);
}
exports.Method = Method;
function ImpParameter(name, typeKind, type, value) {
    return new ABAPParameter_1.ABAPParameter(name, typeKind, type, value);
}
exports.ImpParameter = ImpParameter;
function ExpParameter(name, typeKind, type, value) {
    return new ABAPParameter_1.ABAPParameter(name, typeKind, type, value);
}
exports.ExpParameter = ExpParameter;
function ChgParameter(name, typeKind, type, value) {
    return new ABAPParameter_1.ABAPParameter(name, typeKind, type, value);
}
exports.ChgParameter = ChgParameter;
function RetParameter(name, typeKind, type, value) {
    return new ABAPParameter_1.ABAPParameter(name, typeKind, type, value);
}
exports.RetParameter = RetParameter;
function Constants(name, typeKind, type, value) {
    return new ABAPConstants_1.ABAPConstants(name, typeKind, type, value);
}
exports.Constants = Constants;
function DataDefinition(name, typeKind, type, value) {
    return new ABAPDataDefinition_1.ABAPDataDefinition(name, typeKind, type, value);
}
exports.DataDefinition = DataDefinition;
function Variable(name, typeKind, type, value) {
    return new ABAPVariable_1.ABAPVariable(name, typeKind, type, value);
}
exports.Variable = Variable;
//# sourceMappingURL=builder.js.map