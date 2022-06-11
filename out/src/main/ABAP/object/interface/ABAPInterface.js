"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPInterface = void 0;
var ABAPInterface = /** @class */ (function () {
    function ABAPInterface(name, interfaces, constants, methods) {
        this.name = name;
        this.interfaces = interfaces;
        this.constants = constants;
        this.methods = methods;
    }
    ABAPInterface.prototype.toABAP = function () {
        var code = "".concat(this.renderInterfaces()).concat(this.renderConstants()).concat(this.renderMethods());
        if (code != "") {
            code += "\n";
        }
        return "INTERFACE ".concat(this.name, ".").concat(code, "\nENDINTERFACE.");
    };
    ABAPInterface.prototype.renderInterfaces = function () {
        if (this.interfaces == undefined || this.interfaces.length == 0) {
            return "";
        }
        var code = "\n";
        this.interfaces.forEach(function (intf) {
            if (code == "") {
                code = "  INTERFACES ".concat(intf.name, ".");
            }
            else {
                code += "\n  INTERFACES ".concat(intf.name, ".");
            }
        });
        return code;
    };
    ABAPInterface.prototype.renderConstants = function () {
        return this.renderABAPs(this.constants);
    };
    ABAPInterface.prototype.renderMethods = function () {
        return this.renderABAPs(this.methods);
    };
    ABAPInterface.prototype.renderABAPs = function (abaps) {
        if (abaps == undefined || abaps == null || abaps.length == 0) {
            return "";
        }
        var code = "\n";
        abaps.forEach(function (abap) {
            if (code == "") {
                code = "  ".concat(abap.toABAP());
            }
            else {
                code += "\n  ".concat(abap.toABAP());
            }
        });
        return code;
    };
    return ABAPInterface;
}());
exports.ABAPInterface = ABAPInterface;
//# sourceMappingURL=ABAPInterface.js.map