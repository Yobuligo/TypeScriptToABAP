"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPRenderer = void 0;
var ABAPRenderer = /** @class */ (function () {
    function ABAPRenderer() {
    }
    ABAPRenderer.prototype.render = function (abaps) {
        if (abaps == undefined || abaps == null || abaps.length == 0) {
            return "";
        }
        var code = "";
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
    return ABAPRenderer;
}());
exports.ABAPRenderer = ABAPRenderer;
//# sourceMappingURL=ABAPRenderer.js.map