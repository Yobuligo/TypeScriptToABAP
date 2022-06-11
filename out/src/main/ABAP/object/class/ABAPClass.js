"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClass = void 0;
var ABAPClass = /** @class */ (function () {
    function ABAPClass(className) {
        this.className = className;
        this.superClassName = "";
    }
    ABAPClass.prototype.toABAP = function () {
        return "".concat(this.renderDefinition(), "\n\n").concat(this.renderImplementation());
    };
    ABAPClass.prototype.renderDefinition = function () {
        if (this.superClassName != "") {
            return "CLASS ".concat(this.className, " DEFINITION INHERITING FROM ").concat(this.superClassName, ".\nENDCLASS.");
        }
        else {
            return "CLASS ".concat(this.className, " DEFINITION.\nENDCLASS.");
        }
    };
    ABAPClass.prototype.renderImplementation = function () {
        return "CLASS ".concat(this.className, " IMPLEMENTATION.\nENDCLASS.");
    };
    return ABAPClass;
}());
exports.ABAPClass = ABAPClass;
//# sourceMappingURL=ABAPClass.js.map