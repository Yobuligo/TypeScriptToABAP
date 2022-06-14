"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPClass = void 0;
var builder_1 = require("../../../builder/builder");
var ABAPClass = /** @class */ (function () {
    function ABAPClass(name, abapPublicSection, abapProtectedSection, abapPrivateSection) {
        this.name = name;
        this.abapPublicSection = abapPublicSection;
        this.abapProtectedSection = abapProtectedSection;
        this.abapPrivateSection = abapPrivateSection;
    }
    ABAPClass.prototype.toABAPDefinition = function () {
        return (0, builder_1.Renderer)()
            .append("CLASS ".concat(this.name, " DEFINITION."))
            .appendABAPAndLeadingBlank(this.abapPublicSection)
            .appendABAPAndLeadingBlank(this.abapProtectedSection)
            .appendABAPAndLeadingBlank(this.abapPrivateSection)
            .appendAndLeadingBlank("ENDCLASS.")
            .render();
    };
    ABAPClass.prototype.toABAPImplementation = function () {
        return (0, builder_1.Renderer)()
            .append("CLASS ".concat(this.name, " IMPLEMENTATION."))
            .appendAndLeadingBlank(this.renderMethodBody(this.collectABAPMethods()))
            .appendAndLeadingBlank("ENDCLASS.")
            .render();
    };
    ABAPClass.prototype.toABAP = function () {
        return "".concat(this.toABAPDefinition(), "\n\n").concat(this.toABAPImplementation());
    };
    ABAPClass.prototype.renderMethodBody = function (abapMethods) {
        if (abapMethods == undefined ||
            abapMethods == null ||
            abapMethods.length == 0) {
            return "";
        }
        var code = "";
        abapMethods.forEach(function (method) {
            if (code == "") {
                code = "  METHOD ".concat(method.name, ".\n  ENDMETHOD.");
            }
            else {
                code += "\n\n  METHOD ".concat(method.name, ".\n  ENDMETHOD.");
            }
        });
        return code;
    };
    ABAPClass.prototype.collectABAPMethods = function () {
        var abapMethods = [];
        if (this.abapPublicSection != undefined && this.abapPublicSection != null) {
            abapMethods.push.apply(abapMethods, this.abapPublicSection.abapMethods);
        }
        if (this.abapProtectedSection != undefined &&
            this.abapProtectedSection != null) {
            abapMethods.push.apply(abapMethods, this.abapProtectedSection.abapMethods);
        }
        if (this.abapPrivateSection != undefined &&
            this.abapPrivateSection != null) {
            abapMethods.push.apply(abapMethods, this.abapPrivateSection.abapMethods);
        }
        return abapMethods;
    };
    return ABAPClass;
}());
exports.ABAPClass = ABAPClass;
//# sourceMappingURL=ABAPClass.js.map