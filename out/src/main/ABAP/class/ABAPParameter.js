"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPParameter = void 0;
var ABAPTypeKind_1 = require("../core/ABAPTypeKind");
var ABAPParameter = /** @class */ (function () {
    function ABAPParameter() {
        this.name = "";
        this.type = "";
        this.typeKind = ABAPTypeKind_1.ABAPTypeKind.type;
    }
    ABAPParameter.prototype.toABAP = function () {
        return "".concat(this.name, " ").concat(this.typeKind, " ").concat(this.type);
    };
    return ABAPParameter;
}());
exports.ABAPParameter = ABAPParameter;
//# sourceMappingURL=ABAPParameter.js.map