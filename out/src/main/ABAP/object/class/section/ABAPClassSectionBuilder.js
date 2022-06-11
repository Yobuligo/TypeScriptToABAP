"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClassSectionBuilder = void 0;
var ABAPClassSection_1 = require("./ABAPClassSection");
var ABAPClassSectionBuilder = /** @class */ (function () {
    function ABAPClassSectionBuilder(abapClassSectionType) {
        this.abapClassSectionType = abapClassSectionType;
        this.abapVariables = [];
    }
    ABAPClassSectionBuilder.prototype.addABAPVariable = function (abapVariable) {
        this.abapVariables.push(abapVariable);
        return this;
    };
    ABAPClassSectionBuilder.prototype.build = function () {
        return new ABAPClassSection_1.ABAPClassSection(this.abapClassSectionType, this.abapVariables);
    };
    return ABAPClassSectionBuilder;
}());
exports.ABAPClassSectionBuilder = ABAPClassSectionBuilder;
//# sourceMappingURL=ABAPClassSectionBuilder.js.map