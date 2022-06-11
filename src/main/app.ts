import {
  Class,
  ClassMethod,
  Constants,
  DataDefinition,
  ImpParameter,
  Interface,
  Method,
  RetParameter,
  Variable,
} from "./ABAP/builder/builder";
import { ABAPType } from "./ABAP/core/ABAPType";
import { ABAPTypeKind } from "./ABAP/core/ABAPTypeKind";
import { newLine } from "./core/NewLine";
import { println } from "./core/Println";

class Person {}

println(
  Class("test")
    .addConstants(Constants("male", ABAPTypeKind.type, ABAPType.string, "MALE"))
    .addMethod(ClassMethod("to_string").build())
    .addMethod(
      ClassMethod("to_string2")
        .addImpParameter(
          ImpParameter("iv_firstname", ABAPTypeKind.type, ABAPType.string, "Stacey")
        )
        .build()
    )
    .build()
    .toABAP()
);
newLine();

println(Class("test").build().toABAP());
newLine();

println(ClassMethod("to_string").build().toABAP());
newLine();

println(
  Interface("if_test")
    .addInterface(Interface("if_child").build())
    .addInterface(Interface("if_child2").build())
    .addConstants(Constants("male", ABAPTypeKind.type, ABAPType.string, "MALE"))
    .addConstants(
      Constants("female", ABAPTypeKind.type, ABAPType.string, "FEMALE")
    )
    .addMethod(
      Method("to_string")
        .setRetParameter(
          RetParameter("rv_name", ABAPTypeKind.type, ABAPType.string)
        )
        .build()
    )
    .build()
    .toABAP()
);
newLine();

println(
  Interface("if_test")
    .addConstants(Constants("male", ABAPTypeKind.type, ABAPType.string, "MALE"))
    .build()
    .toABAP()
);
newLine();

println(
  Interface("if_test")
    .addMethod(
      Method("toString")
        .setRetParameter(
          RetParameter("rv_name", ABAPTypeKind.type, ABAPType.string)
        )
        .build()
    )
    .build()
    .toABAP()
);
newLine();

println(Interface("if_marker").build().toABAP());
newLine();

println(
  Method("to_string")
    .addImpParameter(
      ImpParameter("firstname", ABAPTypeKind.type, ABAPType.string)
    )
    .addImpParameter(
      ImpParameter("lastname", ABAPTypeKind.type, ABAPType.string)
    )
    .setRetParameter(
      RetParameter("rv_name", ABAPTypeKind.type, ABAPType.string)
    )
    .build()
    .toABAP()
);
newLine();

println(Method("to_string").build().toABAP());
newLine();

println(
  Constants("state", ABAPTypeKind.type, ABAPType.string, "male").toABAP()
);
newLine();

println(
  DataDefinition(
    "firstname",
    ABAPTypeKind.type,
    ABAPType.boolean,
    "abaP_TrUE"
  ).toABAP()
);
newLine();

println(
  DataDefinition("firstname", ABAPTypeKind.type, ABAPType.int, "123").toABAP()
);
newLine();

println(
  DataDefinition(
    "firstname",
    ABAPTypeKind.like,
    ABAPType.string,
    "Peter"
  ).toABAP()
);
newLine();

println(Variable("firstname", ABAPTypeKind.type, ABAPType.string).toABAP());
