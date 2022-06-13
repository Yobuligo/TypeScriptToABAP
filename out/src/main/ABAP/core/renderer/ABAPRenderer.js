"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPRenderer = void 0;
var ABAPRenderer = /** @class */ (function () {
    function ABAPRenderer() {
        this.code = "";
    }
    ABAPRenderer.prototype.append = function (code) {
        if (code == "") {
            return this;
        }
        if (this.code == "") {
            this.code = code;
        }
        else {
            this.code += "\n".concat(code);
        }
        return this;
    };
    ABAPRenderer.prototype.appendAndLeadingBlank = function (code) {
        if (code == "") {
            return this;
        }
        if (this.code == "") {
            this.code = code;
        }
        else {
            this.code += "\n\n".concat(code);
        }
        return this;
    };
    ABAPRenderer.prototype.appendABAP = function (abap) {
        if (abap == undefined || abap == null) {
            return this;
        }
        this.append(abap.toABAP());
        return this;
    };
    ABAPRenderer.prototype.appendABAPs = function (abaps) {
        var codeBlock = this.renderABAPs(abaps);
        if (codeBlock == "") {
            return this;
        }
        if (this.code == "") {
            this.code = codeBlock;
        }
        else {
            this.code += "\n".concat(codeBlock);
        }
        return this;
    };
    /**
     * Generates code from the given [abaps] and adds it by a leading blank line to separate it from the existing code.
     */
    ABAPRenderer.prototype.appendABAPsAndLeadingBlank = function (abaps) {
        var codeBlock = this.renderABAPs(abaps);
        if (codeBlock == "") {
            return this;
        }
        if (this.code == "") {
            this.code = codeBlock;
        }
        else {
            this.code += "\n\n".concat(codeBlock);
        }
        return this;
    };
    ABAPRenderer.prototype.insert = function (code) {
        if (code == "") {
            return this;
        }
        if (this.code == "") {
            this.code = code;
        }
        else {
            this.code = "".concat(code, "\n").concat(this.code);
        }
        return this;
    };
    ABAPRenderer.prototype.insertABAP = function (abap) {
        if (abap == undefined || abap == null) {
            return this;
        }
        this.insert(abap.toABAP());
        return this;
    };
    ABAPRenderer.prototype.insertABAPs = function (abaps) {
        var codeBlock = this.renderABAPs(abaps);
        if (codeBlock == "") {
            return this;
        }
        if (this.code == "") {
            this.code = codeBlock;
        }
        else {
            this.code = "".concat(codeBlock, "\n").concat(this.code);
        }
        return this;
    };
    ABAPRenderer.prototype.render = function () {
        return this.code;
    };
    ABAPRenderer.prototype.renderABAPs = function (abaps) {
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