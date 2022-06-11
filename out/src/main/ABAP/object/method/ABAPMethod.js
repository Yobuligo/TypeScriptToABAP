"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPMethod = void 0;
var ABAPParamKind_1 = require("../../core/ABAPParamKind");
var ABAPMethod = /** @class */ (function () {
    function ABAPMethod(name, impParameters, expParameters, chgParameters, retParameter) {
        this.name = name;
        this.impParameters = impParameters;
        this.expParameters = expParameters;
        this.chgParameters = chgParameters;
        this.retParameter = retParameter;
    }
    ABAPMethod.prototype.toABAP = function () {
        return "METHODS ".concat(this.name).concat(this.renderImpParameters()).concat(this.renderExpParameters()).concat(this.renderChgParameters()).concat(this.renderRetParameter(), ".");
    };
    ABAPMethod.prototype.renderImpParameters = function () {
        return this.renderParameters(ABAPParamKind_1.ABAPParamKind.importing, this.impParameters);
    };
    ABAPMethod.prototype.renderExpParameters = function () {
        return this.renderParameters(ABAPParamKind_1.ABAPParamKind.exporting, this.expParameters);
    };
    ABAPMethod.prototype.renderChgParameters = function () {
        return this.renderParameters(ABAPParamKind_1.ABAPParamKind.changing, this.chgParameters);
    };
    ABAPMethod.prototype.renderRetParameter = function () {
        if (this.retParameter == undefined || this.retParameter == null) {
            return "";
        }
        return " RETURNING VALUE(".concat(this.retParameter.name, ") ").concat(this.retParameter.typeKind, " ").concat(this.retParameter.type);
    };
    ABAPMethod.prototype.renderParameters = function (paramKind, parameters) {
        if (parameters == undefined || parameters == null || parameters.length == 0) {
            return "";
        }
        var code = "";
        parameters.forEach(function (parameter) {
            if (code == "") {
                code = parameter.toABAP();
            }
            else {
                code += " ".concat(parameter.toABAP());
            }
        });
        return " ".concat(paramKind, " ").concat(code);
    };
    return ABAPMethod;
}());
exports.ABAPMethod = ABAPMethod;
//# sourceMappingURL=ABAPMethod.js.map