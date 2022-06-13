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
exports.ABAPPrivateSection = void 0;
var ABAPSection_1 = require("../ABAPSection");
var ABAPSectionType_1 = require("../ABAPSectionType");
var ABAPPrivateSection = /** @class */ (function (_super) {
    __extends(ABAPPrivateSection, _super);
    function ABAPPrivateSection(abapConstants, abapVariables, abapMethods) {
        return _super.call(this, ABAPSectionType_1.ABAPSectionType.private, abapConstants, abapVariables, abapMethods) || this;
    }
    return ABAPPrivateSection;
}(ABAPSection_1.ABAPSection));
exports.ABAPPrivateSection = ABAPPrivateSection;
//# sourceMappingURL=ABAPPrivateSection.js.map