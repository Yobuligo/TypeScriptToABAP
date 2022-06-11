"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPParameterBuilder = void 0;
var ABAPTypeKind_1 = require("../core/ABAPTypeKind");
var ABAPParameterBuilder = /** @class */ (function () {
    function ABAPParameterBuilder(name, type, typeKind) {
        if (typeKind === void 0) { typeKind = ABAPTypeKind_1.ABAPTypeKind.type; }
        this.name = name;
        this.type = type;
        this.typeKind = typeKind;
    }
    ABAPParameterBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ABAPParameterBuilder.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    ABAPParameterBuilder.prototype.setTypeKind = function (typeKind) {
        this.typeKind = typeKind;
        return this;
    };
    ABAPParameterBuilder.prototype.build = function () {
        throw new Error("Method not implemented.");
    };
    return ABAPParameterBuilder;
}());
exports.ABAPParameterBuilder = ABAPParameterBuilder;
//# sourceMappingURL=ABAPParameterBuilder.js.map