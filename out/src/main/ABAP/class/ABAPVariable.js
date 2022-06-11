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
exports.ABAPVariable = void 0;
var ABAPParameter_1 = require("./ABAPParameter");
var ABAPVariable = /** @class */ (function (_super) {
    __extends(ABAPVariable, _super);
    function ABAPVariable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = "";
        return _this;
    }
    ABAPVariable.prototype.toABAP = function () {
        return "DATA ".concat(_super.prototype.toABAP.call(this), ".");
    };
    return ABAPVariable;
}(ABAPParameter_1.ABAPParameter));
exports.ABAPVariable = ABAPVariable;
//# sourceMappingURL=ABAPVariable.js.map