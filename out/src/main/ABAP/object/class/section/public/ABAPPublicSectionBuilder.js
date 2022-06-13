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
exports.ABAPPublicSectionBuilder = void 0;
var ABAPSectionBuilder_1 = require("../ABAPSectionBuilder");
var ABAPPublicSection_1 = require("./ABAPPublicSection");
var ABAPPublicSectionBuilder = /** @class */ (function (_super) {
    __extends(ABAPPublicSectionBuilder, _super);
    function ABAPPublicSectionBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.abapInterfaces = [];
        return _this;
    }
    ABAPPublicSectionBuilder.prototype.addInterface = function (abapInterface) {
        this.abapInterfaces.push(abapInterface);
        return this;
    };
    ABAPPublicSectionBuilder.prototype.build = function () {
        return new ABAPPublicSection_1.ABAPPublicSection(this.abapInterfaces, this.abapConstants, this.abapVariables, this.abapMethods);
    };
    return ABAPPublicSectionBuilder;
}(ABAPSectionBuilder_1.ABAPSectionBuilder));
exports.ABAPPublicSectionBuilder = ABAPPublicSectionBuilder;
//# sourceMappingURL=ABAPPublicSectionBuilder.js.map