"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClassBuilder = void 0;
var ABAPClass_1 = require("./ABAPClass");
var ABAPClassSectionBuilder_1 = require("./section/ABAPClassSectionBuilder");
var ABAPClassSectionType_1 = require("./section/ABAPClassSectionType");
var ABAPClassBuilder = /** @class */ (function () {
    function ABAPClassBuilder(className) {
        this.className = className;
        this.superClassName = "";
        this.publicABAPClassSectionBuilder = new ABAPClassSectionBuilder_1.ABAPClassSectionBuilder(ABAPClassSectionType_1.ABAPClassSectionType.public);
        this.protectedABAPClassSectionBuilder = new ABAPClassSectionBuilder_1.ABAPClassSectionBuilder(ABAPClassSectionType_1.ABAPClassSectionType.public);
        this.privateABAPClassSectionBuilder = new ABAPClassSectionBuilder_1.ABAPClassSectionBuilder(ABAPClassSectionType_1.ABAPClassSectionType.public);
    }
    ABAPClassBuilder.prototype.getPublicSection = function () {
        return this.publicABAPClassSectionBuilder;
    };
    ABAPClassBuilder.prototype.getProtectedSection = function () {
        return this.protectedABAPClassSectionBuilder;
    };
    ABAPClassBuilder.prototype.getPrivateSection = function () {
        return this.privateABAPClassSectionBuilder;
    };
    ABAPClassBuilder.prototype.setClassName = function (className) {
        this.className = className;
        return this;
    };
    ABAPClassBuilder.prototype.setSuperClassName = function (superClassName) {
        this.superClassName = superClassName;
        return this;
    };
    ABAPClassBuilder.prototype.build = function () {
        var abapClass = new ABAPClass_1.ABAPClass(this.className);
        abapClass.superClassName = this.superClassName;
        return abapClass;
    };
    return ABAPClassBuilder;
}());
exports.ABAPClassBuilder = ABAPClassBuilder;
//# sourceMappingURL=ABAPClassBuilder.js.map