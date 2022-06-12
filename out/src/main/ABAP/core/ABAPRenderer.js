"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPRenderer = void 0;
var ABAPRenderer = /** @class */ (function () {
    function ABAPRenderer() {
    }
    ABAPRenderer.prototype.render = function (insertLeadingEmptyRow, insertSeparatorRow, abaps) {
        if (insertLeadingEmptyRow === void 0) { insertLeadingEmptyRow = true; }
        if (insertSeparatorRow === void 0) { insertSeparatorRow = false; }
        if (abaps == undefined || abaps == null || abaps.length == 0) {
            return "";
        }
        var code = "";
        if (insertLeadingEmptyRow) {
            code = "\n";
        }
        abaps.forEach(function (abap) {
            if (code == "") {
                code = "  ".concat(abap.toABAP());
            }
            else {
                if (insertSeparatorRow) {
                    code += "\n\n  ".concat(abap.toABAP());
                }
                else {
                    code += "\n  ".concat(abap.toABAP());
                }
            }
        });
        return code;
    };
    return ABAPRenderer;
}());
exports.ABAPRenderer = ABAPRenderer;
//# sourceMappingURL=ABAPRenderer.js.map