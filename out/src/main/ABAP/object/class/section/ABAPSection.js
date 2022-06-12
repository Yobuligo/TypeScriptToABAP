"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPSection = void 0;
var builder_1 = require("../../../builder/builder");
var ABAPSection = /** @class */ (function () {
    function ABAPSection(abapSectionType, constants, variables, methods) {
        this.abapSectionType = abapSectionType;
        this.constants = constants;
        this.variables = variables;
        this.methods = methods;
    }
    ABAPSection.prototype.toABAP = function () {
        return "".concat(this.renderConstants()).concat(this.renderVariables()).concat(this.renderMethods());
    };
    ABAPSection.prototype.renderConstants = function () {
        return (0, builder_1.Renderer)().render(this.constants);
    };
    ABAPSection.prototype.renderVariables = function () {
        return (0, builder_1.Renderer)().render(this.variables);
    };
    ABAPSection.prototype.renderMethods = function () {
        return (0, builder_1.Renderer)().render(this.methods);
    };
    return ABAPSection;
}());
exports.ABAPSection = ABAPSection;
//# sourceMappingURL=ABAPSection.js.map