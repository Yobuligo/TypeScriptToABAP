"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPParameter = void 0;
var ABAPType_1 = require("../core/ABAPType");
var ABAPParameter = /** @class */ (function () {
    function ABAPParameter(name, typeKind, type, value) {
        this.name = name;
        this.typeKind = typeKind;
        this.type = type;
        this.value = value;
    }
    ABAPParameter.prototype.toABAP = function () {
        return "".concat(this.name, " ").concat(this.typeKind, " ").concat(this.type).concat(this.renderValue(), ".");
    };
    ABAPParameter.prototype.renderValue = function () {
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
    ABAPParameter.prototype.renderBooleanValue = function () {
        var value = this.value.toLowerCase();
        if (value == "x" || value == "abap_true") {
            return " VALUE abap_true";
        }
        if (value == " " || value == "abap_false") {
            return " VALUE abap_false";
        }
    };
    ABAPParameter.prototype.renderIntValue = function () {
        return " VALUE ".concat(this.value);
    };
    ABAPParameter.prototype.renderStringValue = function () {
        return " VALUE '".concat(this.value, "'");
    };
    return ABAPParameter;
}());
exports.ABAPParameter = ABAPParameter;
//# sourceMappingURL=ABAPParameter.js.map