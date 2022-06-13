"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPSection = void 0;
var builder_1 = require("../../../builder/builder");
var ABAPSection = /** @class */ (function () {
    function ABAPSection(abapSectionType, abapConstants, abapVariables, abapMethods) {
        this.abapSectionType = abapSectionType;
        this.abapConstants = abapConstants;
        this.abapVariables = abapVariables;
        this.abapMethods = abapMethods;
    }
    ABAPSection.prototype.toABAP = function () {
        var body = this.renderBody();
        if (body == "") {
            return "".concat(this.renderHeader());
        }
        else {
            return "".concat(this.renderHeader(), "\n").concat(body);
        }
    };
    ABAPSection.prototype.renderHeader = function () {
        return "".concat(this.abapSectionType, " SECTION.");
    };
    ABAPSection.prototype.renderBody = function () {
        return "".concat(this.renderConstants()).concat(this.renderVariables()).concat(this.renderMethods());
    };
    ABAPSection.prototype.renderConstants = function () {
        return (0, builder_1.Renderer)().render(this.abapConstants);
    };
    ABAPSection.prototype.renderVariables = function () {
        return (0, builder_1.Renderer)().render(this.abapVariables);
    };
    ABAPSection.prototype.renderMethods = function () {
        return (0, builder_1.Renderer)().render(this.abapMethods);
    };
    return ABAPSection;
}());
exports.ABAPSection = ABAPSection;
//# sourceMappingURL=ABAPSection.js.map