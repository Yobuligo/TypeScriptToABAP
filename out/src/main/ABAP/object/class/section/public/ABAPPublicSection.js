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
exports.ABAPPublicSection = void 0;
var builder_1 = require("../../../../builder/builder");
var ABAPSection_1 = require("../ABAPSection");
var ABAPSectionType_1 = require("../ABAPSectionType");
var ABAPPublicSection = /** @class */ (function (_super) {
    __extends(ABAPPublicSection, _super);
    function ABAPPublicSection(abapInterfaces, abapConstants, abapVariables, abapMethods) {
        var _this = _super.call(this, ABAPSectionType_1.ABAPSectionType.public, abapConstants, abapVariables, abapMethods) || this;
        _this.abapInterfaces = abapInterfaces;
        return _this;
    }
    ABAPPublicSection.prototype.renderBody = function () {
        return "".concat(this.renderInterfaces()).concat(this.renderConstants()).concat(this.renderVariables()).concat(this.renderMethods());
    };
    ABAPPublicSection.prototype.renderInterfaces = function () {
        return (0, builder_1.Renderer)().render(this.abapInterfaces);
    };
    return ABAPPublicSection;
}(ABAPSection_1.ABAPSection));
exports.ABAPPublicSection = ABAPPublicSection;
//# sourceMappingURL=ABAPPublicSection.js.map