"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClass = void 0;
var ABAPClass = /** @class */ (function () {
    function ABAPClass(name) {
        this.name = name;
    }
    ABAPClass.prototype.toABAPDefinition = function () {
        return "CLASS ".concat(this.name, " DEFINITION.\nENDCLASS.");
    };
    ABAPClass.prototype.toABAPImplementation = function () {
        return "CLASS ".concat(this.name, " IMPLEMENTATION.\nENDCLASS.");
    };
    ABAPClass.prototype.toABAP = function () {
        return "".concat(this.toABAPDefinition(), "\n\n").concat(this.toABAPImplementation());
    };
    return ABAPClass;
}());
exports.ABAPClass = ABAPClass;
//# sourceMappingURL=ABAPClass.js.map