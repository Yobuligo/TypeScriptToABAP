"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = exports.Variable = exports.DataDefinition = exports.Constant = exports.RetParameter = exports.ChgParameter = exports.ExpParameter = exports.ImpParameter = exports.Method = exports.Interface = exports.PrivateSection = exports.ProtectedSection = exports.PublicSection = exports.ClassMethod = exports.Class = void 0;
var ABAPRenderer_1 = require("../core/ABAPRenderer");
var ABAPClassBuilder_1 = require("../object/class/class/ABAPClassBuilder");
var ABAPClassMethodBuilder_1 = require("../object/class/classMethod/ABAPClassMethodBuilder");
var ABAPPrivateSectionBuilder_1 = require("../object/class/section/private/ABAPPrivateSectionBuilder");
var ABAPProtectedSectionBuilder_1 = require("../object/class/section/protected/ABAPProtectedSectionBuilder");
var ABAPPublicSectionBuilder_1 = require("../object/class/section/public/ABAPPublicSectionBuilder");
var ABAPInterfaceBuilder_1 = require("../object/interface/ABAPInterfaceBuilder");
var ABAPMethodBuilder_1 = require("../object/method/ABAPMethodBuilder");
var ABAPConstant_1 = require("../variables/constant/ABAPConstant");
var ABAPDataDefinition_1 = require("../variables/dataDefinition/ABAPDataDefinition");
var ABAPParameter_1 = require("../variables/parameter/ABAPParameter");
var ABAPVariable_1 = require("../variables/variable/ABAPVariable");
function Class(name) {
    return new ABAPClassBuilder_1.ABAPClassBuilder(name);
}
exports.Class = Class;
function ClassMethod(name) {
    return new ABAPClassMethodBuilder_1.ABAPClassMethodBuilder(name);
}
exports.ClassMethod = ClassMethod;
function PublicSection() {
    return new ABAPPublicSectionBuilder_1.ABAPPublicSectionBuilder();
}
exports.PublicSection = PublicSection;
function ProtectedSection() {
    return new ABAPProtectedSectionBuilder_1.ABAPProtectedSectionBuilder();
}
exports.ProtectedSection = ProtectedSection;
function PrivateSection() {
    return new ABAPPrivateSectionBuilder_1.ABAPPrivateSectionBuilder();
}
exports.PrivateSection = PrivateSection;
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
function Constant(name, typeKind, type, value) {
    return new ABAPConstant_1.ABAPConstant(name, typeKind, type, value);
}
exports.Constant = Constant;
function DataDefinition(name, typeKind, type, value) {
    return new ABAPDataDefinition_1.ABAPDataDefinition(name, typeKind, type, value);
}
exports.DataDefinition = DataDefinition;
function Variable(name, typeKind, type, value) {
    return new ABAPVariable_1.ABAPVariable(name, typeKind, type, value);
}
exports.Variable = Variable;
function Renderer() {
    return new ABAPRenderer_1.ABAPRenderer();
}
exports.Renderer = Renderer;
//# sourceMappingURL=builder.js.map