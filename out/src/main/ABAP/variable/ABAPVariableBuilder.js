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
exports.ABAPVariableBuilder = void 0;
var ABAPTypeKind_1 = require("../core/ABAPTypeKind");
var ABAPParameterBuilder_1 = require("../parameter/ABAPParameterBuilder");
var ABAPVariable_1 = require("./ABAPVariable");
var ABAPVariableBuilder = /** @class */ (function (_super) {
    __extends(ABAPVariableBuilder, _super);
    function ABAPVariableBuilder(name, type, typeKind, value) {
        if (typeKind === void 0) { typeKind = ABAPTypeKind_1.ABAPTypeKind.type; }
        var _this = _super.call(this, name, type, typeKind) || this;
        _this.value = value;
        return _this;
    }
    ABAPVariableBuilder.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    ABAPVariableBuilder.prototype.build = function () {
        return new ABAPVariable_1.ABAPVariable(this.name, this.typeKind, this.type, this.value);
    };
    return ABAPVariableBuilder;
}(ABAPParameterBuilder_1.ABAPParameterBuilder));
exports.ABAPVariableBuilder = ABAPVariableBuilder;
//# sourceMappingURL=ABAPVariableBuilder.js.map