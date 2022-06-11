"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPObjectBuilder = void 0;
var ABAPObjectBuilder = /** @class */ (function () {
    function ABAPObjectBuilder(name) {
        this.name = name;
        this.abapInterfaces = [];
        this.abapConstants = [];
        this.abapMethods = [];
    }
    ABAPObjectBuilder.prototype.addInterface = function (abapInterface) {
        this.abapInterfaces.push(abapInterface);
        return this;
    };
    ABAPObjectBuilder.prototype.addConstants = function (abapConstants) {
        this.abapConstants.push(abapConstants);
        return this;
    };
    ABAPObjectBuilder.prototype.addMethod = function (abapMethod) {
        this.abapMethods.push(abapMethod);
        return this;
    };
    ABAPObjectBuilder.prototype.build = function () {
        throw new Error("Method not implemented.");
    };
    return ABAPObjectBuilder;
}());
exports.ABAPObjectBuilder = ABAPObjectBuilder;
//# sourceMappingURL=ABAPObjectBuilder.js.map