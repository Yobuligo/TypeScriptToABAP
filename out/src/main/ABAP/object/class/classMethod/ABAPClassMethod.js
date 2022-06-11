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
exports.ABAPClassMethod = void 0;
var ABAPMethod_1 = require("../../method/ABAPMethod");
var ABAPClassMethod = /** @class */ (function (_super) {
    __extends(ABAPClassMethod, _super);
    function ABAPClassMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ABAPClassMethod.prototype.toABAPDefinition = function () {
        throw new Error("Method not implemented.");
    };
    ABAPClassMethod.prototype.toABAPImplementation = function () {
        throw new Error("Method not implemented.");
    };
    return ABAPClassMethod;
}(ABAPMethod_1.ABAPMethod));
exports.ABAPClassMethod = ABAPClassMethod;
//# sourceMappingURL=ABAPClassMethod.js.map