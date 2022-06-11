"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClassBuilder = void 0;
var ABAPClass_1 = require("./ABAPClass");
var ABAPClassBuilder = /** @class */ (function () {
    function ABAPClassBuilder(name) {
        this.name = name;
    }
    ABAPClassBuilder.prototype.build = function () {
        return new ABAPClass_1.ABAPClass(this.name);
    };
    return ABAPClassBuilder;
}());
exports.ABAPClassBuilder = ABAPClassBuilder;
//# sourceMappingURL=ABAPClassBuilder.js.map