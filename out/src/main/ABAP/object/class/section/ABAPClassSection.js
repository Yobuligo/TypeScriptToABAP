"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClassSection = void 0;
var ABAPClassSection = /** @class */ (function () {
    function ABAPClassSection(abapSectionType, abapVariables) {
        this.abapSectionType = abapSectionType;
        this.abapVariables = abapVariables;
    }
    ABAPClassSection.prototype.toABAP = function () {
        var code = "";
        this.abapVariables.forEach(function (abapVariable) {
            if (code == "") {
                code = abapVariable.toABAP();
            }
            else {
                code += "\n".concat(abapVariable.toABAP());
            }
        });
        return "".concat(this.abapSectionType, ".\n").concat(code);
    };
    return ABAPClassSection;
}());
exports.ABAPClassSection = ABAPClassSection;
//# sourceMappingURL=ABAPClassSection.js.map