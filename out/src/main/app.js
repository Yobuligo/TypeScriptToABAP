"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = require("./ABAP/builder/builder");
var ABAPType_1 = require("./ABAP/core/ABAPType");
var ABAPTypeKind_1 = require("./ABAP/core/ABAPTypeKind");
var NewLine_1 = require("./core/NewLine");
var Println_1 = require("./core/Println");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
(0, Println_1.println)((0, builder_1.PublicSection)()
    .addInterface((0, builder_1.Interface)("if_test").build())
    .addMethod((0, builder_1.ClassMethod)("myClassMethod").build())
    .addConstant((0, builder_1.Constant)("skin", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "mySkin"))
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.ProtectedSection)()
    .addMethod((0, builder_1.ClassMethod)("myClassMethod").build())
    .addConstant((0, builder_1.Constant)("skin", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "mySkin"))
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.PrivateSection)()
    .addConstant((0, builder_1.Constant)("size", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "medium"))
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.ProtectedSection)().build().toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.PublicSection)().build().toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Class)("test")
    .addConstant((0, builder_1.Constant)("male", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "MALE"))
    .addMethod((0, builder_1.ClassMethod)("to_string").build())
    .addMethod((0, builder_1.ClassMethod)("to_string2")
    .addImpParameter((0, builder_1.ImpParameter)("iv_firstname", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "Stacey"))
    .build())
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Class)("test").build().toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.ClassMethod)("to_string").build().toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Interface)("if_test")
    .addInterface((0, builder_1.Interface)("if_child").build())
    .addInterface((0, builder_1.Interface)("if_child2").build())
    .addConstant((0, builder_1.Constant)("male", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "MALE"))
    .addConstant((0, builder_1.Constant)("female", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "FEMALE"))
    .addMethod((0, builder_1.Method)("to_string")
    .setRetParameter((0, builder_1.RetParameter)("rv_name", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string))
    .build())
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Interface)("if_test")
    .addConstant((0, builder_1.Constant)("male", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "MALE"))
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Interface)("if_test")
    .addMethod((0, builder_1.Method)("toString")
    .setRetParameter((0, builder_1.RetParameter)("rv_name", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string))
    .build())
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Interface)("if_marker").build().toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Method)("to_string")
    .addImpParameter((0, builder_1.ImpParameter)("firstname", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string))
    .addImpParameter((0, builder_1.ImpParameter)("lastname", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string))
    .setRetParameter((0, builder_1.RetParameter)("rv_name", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string))
    .build()
    .toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Method)("to_string").build().toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Constant)("state", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string, "male").toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.DataDefinition)("firstname", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.boolean, "abaP_TrUE").toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.DataDefinition)("firstname", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.int, "123").toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.DataDefinition)("firstname", ABAPTypeKind_1.ABAPTypeKind.like, ABAPType_1.ABAPType.string, "Peter").toABAP());
(0, NewLine_1.newLine)();
(0, Println_1.println)((0, builder_1.Variable)("firstname", ABAPTypeKind_1.ABAPTypeKind.type, ABAPType_1.ABAPType.string).toABAP());
//# sourceMappingURL=app.js.map