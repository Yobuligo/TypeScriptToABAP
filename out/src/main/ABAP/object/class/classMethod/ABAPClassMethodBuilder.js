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
exports.ABAPClassMethodBuilder = void 0;
var ABAPMethodBuilder_1 = require("../../method/ABAPMethodBuilder");
var ABAPClassMethod_1 = require("./ABAPClassMethod");
var ABAPClassMethodBuilder = /** @class */ (function (_super) {
    __extends(ABAPClassMethodBuilder, _super);
    function ABAPClassMethodBuilder(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.code = [];
        return _this;
    }
    ABAPClassMethodBuilder.prototype.addImpParameter = function (abapImpParameter) {
        _super.prototype.addImpParameter.call(this, abapImpParameter);
        return this;
    };
    ABAPClassMethodBuilder.prototype.addExpParameter = function (abapExpParameter) {
        _super.prototype.addExpParameter.call(this, abapExpParameter);
        return this;
    };
    ABAPClassMethodBuilder.prototype.addChgParameter = function (abapChgParameter) {
        _super.prototype.addChgParameter.call(this, abapChgParameter);
        return this;
    };
    ABAPClassMethodBuilder.prototype.setRetParameter = function (abapRetParameter) {
        _super.prototype.setRetParameter.call(this, abapRetParameter);
        return this;
    };
    ABAPClassMethodBuilder.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    ABAPClassMethodBuilder.prototype.build = function () {
        return new ABAPClassMethod_1.ABAPClassMethod(this.name, this.abapImpParameters, this.abapExpParameters, this.abapChgParameters, this.abapRetParameter, this.code);
    };
    return ABAPClassMethodBuilder;
}(ABAPMethodBuilder_1.ABAPMethodBuilder));
exports.ABAPClassMethodBuilder = ABAPClassMethodBuilder;
//# sourceMappingURL=ABAPClassMethodBuilder.js.map