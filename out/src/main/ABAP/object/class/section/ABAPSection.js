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
        return (0, builder_1.Renderer)()
            .appendABAPs(this.abapConstants)
            .appendABAPsAndLeadingBlank(this.abapVariables)
            .appendABAPsAndLeadingBlank(this.abapMethods)
            .insert(this.renderHeader())
            .render();
    };
    ABAPSection.prototype.renderHeader = function () {
        return "".concat(this.abapSectionType, " SECTION.");
    };
    return ABAPSection;
}());
exports.ABAPSection = ABAPSection;
//# sourceMappingURL=ABAPSection.js.map