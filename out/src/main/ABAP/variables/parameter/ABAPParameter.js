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
exports.ABAPParameter = void 0;
var ABAPVariable_1 = require("../variable/ABAPVariable");
var ABAPParameter = /** @class */ (function (_super) {
    __extends(ABAPParameter, _super);
    function ABAPParameter(name, typeKind, type, value) {
        var _this = _super.call(this, name, typeKind, type, value) || this;
        _this.keywordValue = "DEFAULT";
        return _this;
    }
    return ABAPParameter;
}(ABAPVariable_1.ABAPVariable));
exports.ABAPParameter = ABAPParameter;
//# sourceMappingURL=ABAPParameter.js.map