"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPObject = void 0;
var ABAPObject = /** @class */ (function () {
    function ABAPObject(name, interfaces, constants, methods) {
        this.name = name;
        this.interfaces = interfaces;
        this.constants = constants;
        this.methods = methods;
    }
    ABAPObject.prototype.toABAP = function () {
        return "".concat(this.renderInterfaces()).concat(this.renderConstants()).concat(this.renderMethods());
    };
    ABAPObject.prototype.renderInterfaces = function () {
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
    ABAPObject.prototype.renderConstants = function () {
        return this.renderABAPs(this.constants);
    };
    ABAPObject.prototype.renderMethods = function () {
        return this.renderABAPs(this.methods);
    };
    ABAPObject.prototype.renderABAPs = function (abaps) {
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
    return ABAPObject;
}());
exports.ABAPObject = ABAPObject;
//# sourceMappingURL=ABAPObject.js.map