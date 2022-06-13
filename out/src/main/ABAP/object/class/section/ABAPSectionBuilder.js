"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPSectionBuilder = void 0;
var ABAPSectionBuilder = /** @class */ (function () {
    function ABAPSectionBuilder() {
        this.abapConstants = [];
        this.abapVariables = [];
        this.abapMethods = [];
    }
    ABAPSectionBuilder.prototype.addConstant = function (abapConstants) {
        this.abapConstants.push(abapConstants);
        return this;
    };
    ABAPSectionBuilder.prototype.addVariable = function (abapVariable) {
        this.abapVariables.push(abapVariable);
        return this;
    };
    ABAPSectionBuilder.prototype.addMethod = function (abapMethod) {
        this.abapMethods.push(abapMethod);
        return this;
    };
    ABAPSectionBuilder.prototype.build = function () {
        throw new Error("Method not implemented.");
    };
    return ABAPSectionBuilder;
}());
exports.ABAPSectionBuilder = ABAPSectionBuilder;
//# sourceMappingURL=ABAPSectionBuilder.js.map