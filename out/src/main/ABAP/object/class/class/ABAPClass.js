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
exports.ABAPClass = void 0;
var ABAPObject_1 = require("../../object/ABAPObject");
var ABAPClass = /** @class */ (function (_super) {
    __extends(ABAPClass, _super);
    function ABAPClass(name, abapInterfaces, abapConstants, abapMethods) {
        var _this = _super.call(this, name, abapInterfaces, abapConstants, abapMethods) || this;
        _this.name = name;
        _this.abapInterfaces = abapInterfaces;
        _this.abapConstants = abapConstants;
        _this.abapMethods = abapMethods;
        return _this;
    }
    ABAPClass.prototype.toABAPDefinition = function () {
        var code = _super.prototype.toABAP.call(this);
        if (code != "") {
            code += "\n";
        }
        return "CLASS ".concat(this.name, " DEFINITION.").concat(code, "\nENDCLASS.");
    };
    ABAPClass.prototype.toABAPImplementation = function () {
        var code = this.renderMethodBody();
        if (code != "") {
            code += "\n";
        }
        return "CLASS ".concat(this.name, " IMPLEMENTATION.").concat(code, "\nENDCLASS.");
    };
    ABAPClass.prototype.toABAP = function () {
        return "".concat(this.toABAPDefinition(), "\n\n").concat(this.toABAPImplementation());
    };
    ABAPClass.prototype.renderMethodBody = function () {
        if (this.abapMethods == undefined ||
            this.abapMethods == null ||
            this.abapMethods.length == 0) {
            return "";
        }
        var code = "";
        this.abapMethods.forEach(function (method) {
            code += "\n\n  METHOD ".concat(method.name, ".\n  ENDMETHOD.");
        });
        return code;
    };
    return ABAPClass;
}(ABAPObject_1.ABAPObject));
exports.ABAPClass = ABAPClass;
//# sourceMappingURL=ABAPClass.js.map