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
exports.ABAPProtectedSection = void 0;
var ABAPSection_1 = require("../ABAPSection");
var ABAPSectionType_1 = require("../ABAPSectionType");
var ABAPProtectedSection = /** @class */ (function (_super) {
    __extends(ABAPProtectedSection, _super);
    function ABAPProtectedSection(constants, variables, methods) {
        return _super.call(this, ABAPSectionType_1.ABAPSectionType.protected, constants, variables, methods) || this;
    }
    return ABAPProtectedSection;
}(ABAPSection_1.ABAPSection));
exports.ABAPProtectedSection = ABAPProtectedSection;
//# sourceMappingURL=ABAPProtectedSection.js.map