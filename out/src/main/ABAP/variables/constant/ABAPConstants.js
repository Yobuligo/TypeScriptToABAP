"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPConstants = void 0;
var ABAPVariable_1 = require("../variable/ABAPVariable");
var ABAPConstants = /** @class */ (function (_super) {
    __extends(ABAPConstants, _super);
    function ABAPConstants(name, typeKind, type, value) {
        return _super.call(this, name, typeKind, type, value) || this;
    }
    ABAPConstants.prototype.toABAP = function () {
        return "CONSTANTS ".concat(_super.prototype.toABAP.call(this), ".");
    };
    return ABAPConstants;
}(ABAPVariable_1.ABAPVariable));
exports.ABAPConstants = ABAPConstants;
//# sourceMappingURL=ABAPConstants.js.map