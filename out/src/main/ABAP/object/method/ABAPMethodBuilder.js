"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPMethodBuilder = void 0;
var ABAPMethod_1 = require("./ABAPMethod");
var ABAPMethodBuilder = /** @class */ (function () {
    function ABAPMethodBuilder(name) {
        this.name = name;
        this.abapImpParameters = [];
        this.abapExpParameters = [];
        this.abapChgParameters = [];
        this.abapRetParameter = null;
    }
    ABAPMethodBuilder.prototype.addImpParameter = function (abapImpParameter) {
        this.abapImpParameters.push(abapImpParameter);
        return this;
    };
    ABAPMethodBuilder.prototype.addExpParameter = function (abapExpParameter) {
        this.abapExpParameters.push(abapExpParameter);
        return this;
    };
    ABAPMethodBuilder.prototype.addChgParameter = function (abapChgParameter) {
        this.abapChgParameters.push(abapChgParameter);
        return this;
    };
    ABAPMethodBuilder.prototype.setRetParameter = function (abapRetParameter) {
        this.abapRetParameter = abapRetParameter;
        return this;
    };
    ABAPMethodBuilder.prototype.build = function () {
        return new ABAPMethod_1.ABAPMethod(this.name, this.abapImpParameters, this.abapExpParameters, this.abapChgParameters, this.abapRetParameter);
    };
    return ABAPMethodBuilder;
}());
exports.ABAPMethodBuilder = ABAPMethodBuilder;
//# sourceMappingURL=ABAPMethodBuilder.js.map