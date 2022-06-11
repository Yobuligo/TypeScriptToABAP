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
exports.ABAPDataDefinition = void 0;
var ABAPVariable_1 = require("../variable/ABAPVariable");
var ABAPDataDefinition = /** @class */ (function (_super) {
    __extends(ABAPDataDefinition, _super);
    function ABAPDataDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ABAPDataDefinition.prototype.toABAP = function () {
        return "DATA ".concat(_super.prototype.toABAP.call(this), ".");
    };
    return ABAPDataDefinition;
}(ABAPVariable_1.ABAPVariable));
exports.ABAPDataDefinition = ABAPDataDefinition;
//# sourceMappingURL=ABAPDataDefinition.js.map