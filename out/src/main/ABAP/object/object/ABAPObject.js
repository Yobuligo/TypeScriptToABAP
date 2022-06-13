"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPObject = void 0;
var builder_1 = require("../../builder/builder");
var ABAPObject = /** @class */ (function () {
    function ABAPObject(name, abapInterfaces, abapConstants, abapMethods) {
        this.name = name;
        this.abapInterfaces = abapInterfaces;
        this.abapConstants = abapConstants;
        this.abapMethods = abapMethods;
    }
    ABAPObject.prototype.toABAP = function () {
        return (0, builder_1.Renderer)()
            .append(this.renderInterfaces())
            .appendABAPs(this.abapConstants)
            .appendABAPs(this.abapMethods)
            .render();
    };
    ABAPObject.prototype.renderInterfaces = function () {
        if (this.abapInterfaces == undefined ||
            this.abapInterfaces == null ||
            this.abapInterfaces.length == 0) {
            return "";
        }
        var code = "";
        this.abapInterfaces.forEach(function (abapInterface) {
            if (code == "") {
                code = "  INTERFACES ".concat(abapInterface.name, ".");
            }
            else {
                code += "\n  INTERFACES ".concat(abapInterface.name, ".");
            }
        });
        return code;
    };
    return ABAPObject;
}());
exports.ABAPObject = ABAPObject;
//# sourceMappingURL=ABAPObject.js.map