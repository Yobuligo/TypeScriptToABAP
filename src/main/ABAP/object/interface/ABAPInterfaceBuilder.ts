import { ABAPObjectBuilder } from "../object/ABAPObjectBuilder";
import { ABAPInterface } from "./ABAPInterface";
import { IABAPInterface } from "./IABAPInterface";
import { IABAPInterfaceBuilder } from "./IABAPInterfaceBuilder";

export class ABAPInterfaceBuilder
  extends ABAPObjectBuilder<IABAPInterface>
  implements IABAPInterfaceBuilder
{
  build(): IABAPInterface {
    return new ABAPInterface(
      this.name,
      this.abapInterfaces,
      this.abapConstants,
      this.abapMethods
    );
  }
}
