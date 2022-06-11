"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClassBuilder = void 0;
var ABAPClass_1 = require("./ABAPClass");
var ABAPClassBuilder = /** @class */ (function () {
    function ABAPClassBuilder(name) {
        this.name = name;
        this.abapInterfaces = [];
        this.abapConstants = [];
        this.abapClassMethods = [];
    }
    ABAPClassBuilder.prototype.addInterface = function (abapInterface) {
        this.abapInterfaces.push(abapInterface);
        return this;
    };
    ABAPClassBuilder.prototype.addConstants = function (abapConstants) {
        this.abapConstants.push(abapConstants);
        return this;
    };
    ABAPClassBuilder.prototype.addMethod = function (abapClassMethod) {
        this.abapClassMethods.push(abapClassMethod);
        return this;
    };
    ABAPClassBuilder.prototype.build = function () {
        return new ABAPClass_1.ABAPClass(this.name, this.abapInterfaces, this.abapConstants, this.abapClassMethods);
    };
    return ABAPClassBuilder;
}());
exports.ABAPClassBuilder = ABAPClassBuilder;
//# sourceMappingURL=ABAPClassBuilder.js.map