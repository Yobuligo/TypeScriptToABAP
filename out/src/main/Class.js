"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
var Class = /** @class */ (function () {
    function Class(className) {
        this.className = className;
    }
    Class.prototype.toABAP = function () {
        return "CLASS className DEFINITION.\nENDCLASS.";
    };
    return Class;
}());
exports.Class = Class;
//# sourceMappingURL=Class.js.map