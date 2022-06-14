"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClassBuilder = void 0;
var ABAPClass_1 = require("./ABAPClass");
var ABAPClassBuilder = /** @class */ (function () {
    function ABAPClassBuilder(name) {
        this.name = name;
    }
    ABAPClassBuilder.prototype.setPublicSection = function (abapPublicSection) {
        this.abapPublicSection = abapPublicSection;
        return this;
    };
    ABAPClassBuilder.prototype.setProtectedSection = function (abapProtectedSection) {
        this.abapProtectedSection = abapProtectedSection;
        return this;
    };
    ABAPClassBuilder.prototype.setPrivateSection = function (abapPrivateSection) {
        this.abapPrivateSection = abapPrivateSection;
        return this;
    };
    ABAPClassBuilder.prototype.build = function () {
        return new ABAPClass_1.ABAPClass(this.name, this.abapPublicSection, this.abapProtectedSection, this.abapPrivateSection);
    };
    return ABAPClassBuilder;
}());
exports.ABAPClassBuilder = ABAPClassBuilder;
//# sourceMappingURL=ABAPClassBuilder.js.map