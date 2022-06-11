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
exports.ABAPInterfaceBuilder = void 0;
var ABAPObjectBuilder_1 = require("../object/ABAPObjectBuilder");
var ABAPInterface_1 = require("./ABAPInterface");
var ABAPInterfaceBuilder = /** @class */ (function (_super) {
    __extends(ABAPInterfaceBuilder, _super);
    function ABAPInterfaceBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ABAPInterfaceBuilder.prototype.build = function () {
        return new ABAPInterface_1.ABAPInterface(this.name, this.abapInterfaces, this.abapConstants, this.abapMethods);
    };
    return ABAPInterfaceBuilder;
}(ABAPObjectBuilder_1.ABAPObjectBuilder));
exports.ABAPInterfaceBuilder = ABAPInterfaceBuilder;
//# sourceMappingURL=ABAPInterfaceBuilder.js.map