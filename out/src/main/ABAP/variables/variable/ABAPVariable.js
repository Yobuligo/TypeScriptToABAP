"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPVariable = void 0;
var ABAPType_1 = require("../../core/ABAPType");
var ABAPVariable = /** @class */ (function () {
    function ABAPVariable(name, typeKind, type, value) {
        this.name = name;
        this.typeKind = typeKind;
        this.type = type;
        this.value = value;
        this.keywordValue = "VALUE";
    }
    ABAPVariable.prototype.toABAP = function () {
        return "".concat(this.name, " ").concat(this.typeKind, " ").concat(this.type).concat(this.renderValue());
    };
    ABAPVariable.prototype.renderValue = function () {
        if (this.value === undefined || this.value === null) {
            return "";
        }
        switch (this.type) {
            case ABAPType_1.ABAPType.string:
                return this.renderStringValue();
            case ABAPType_1.ABAPType.int:
                return this.renderIntValue();
            case ABAPType_1.ABAPType.boolean:
                return this.renderBooleanValue();
        }
    };
    ABAPVariable.prototype.renderBooleanValue = function () {
        var value = this.value.toLowerCase();
        if (value == "x" || value == "abap_true") {
            return " ".concat(this.keywordValue, " abap_true");
        }
        if (value == " " || value == "abap_false") {
            return " ".concat(this.keywordValue, " abap_false");
        }
    };
    ABAPVariable.prototype.renderIntValue = function () {
        return " ".concat(this.keywordValue, " ").concat(this.value);
    };
    ABAPVariable.prototype.renderStringValue = function () {
        return " ".concat(this.keywordValue, " '").concat(this.value, "'");
    };
    return ABAPVariable;
}());
exports.ABAPVariable = ABAPVariable;
//# sourceMappingURL=ABAPVariable.js.map