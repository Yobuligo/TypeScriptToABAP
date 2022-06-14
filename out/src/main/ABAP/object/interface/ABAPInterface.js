"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABAPInterface = void 0;
var builder_1 = require("../../builder/builder");
var ABAPObject_1 = require("../object/ABAPObject");
var ABAPInterface = /** @class */ (function (_super) {
    __extends(ABAPInterface, _super);
    function ABAPInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ABAPInterface.prototype.toABAP = function () {
        return (0, builder_1.Renderer)()
            .append("INTERFACE ".concat(this.name, "."))
            .appendAndLeadingBlank(this.renderInterfaces())
            .appendABAPsAndLeadingBlank(this.abapConstants)
            .appendABAPsAndLeadingBlank(this.abapMethods)
            .appendAndLeadingBlank("ENDINTERFACE.")
            .render();
    };
    return ABAPInterface;
}(ABAPObject_1.ABAPObject));
exports.ABAPInterface = ABAPInterface;
//# sourceMappingURL=ABAPInterface.js.map