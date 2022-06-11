"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPInterfaceBuilder = void 0;
var ABAPInterface_1 = require("./ABAPInterface");
var ABAPInterfaceBuilder = /** @class */ (function () {
    function ABAPInterfaceBuilder(name) {
        this.name = name;
        this.abapInterfaces = [];
        this.abapConstants = [];
        this.abapMethods = [];
    }
    ABAPInterfaceBuilder.prototype.addInterface = function (abapInterface) {
        this.abapInterfaces.push(abapInterface);
        return this;
    };
    ABAPInterfaceBuilder.prototype.addConstants = function (abapConstants) {
        this.abapConstants.push(abapConstants);
        return this;
    };
    ABAPInterfaceBuilder.prototype.addMethod = function (abapMethod) {
        this.abapMethods.push(abapMethod);
        return this;
    };
    ABAPInterfaceBuilder.prototype.build = function () {
        return new ABAPInterface_1.ABAPInterface(this.name, this.abapInterfaces, this.abapConstants, this.abapMethods);
    };
    return ABAPInterfaceBuilder;
}());
exports.ABAPInterfaceBuilder = ABAPInterfaceBuilder;
//# sourceMappingURL=ABAPInterfaceBuilder.js.map