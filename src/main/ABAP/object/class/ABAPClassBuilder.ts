import { ABAPClass } from "./ABAPClass";
import { IABAPClass } from "./IABAPClass";
import { IABAPClassBuilder } from "./IABAPClassBuilder";
import { ABAPClassSectionBuilder } from "./section/ABAPClassSectionBuilder";
import { ABAPClassSectionType } from "./section/ABAPClassSectionType";
import { IABAPClassSectionBuilder } from "./section/IABAPClassSectionBuilder";

export class ABAPClassBuilder implements IABAPClassBuilder {
  private superClassName: string = "";
  private publicABAPClassSectionBuilder = new ABAPClassSectionBuilder(
    ABAPClassSectionType.public
  );
  private protectedABAPClassSectionBuilder = new ABAPClassSectionBuilder(
    ABAPClassSectionType.public
  );
  private privateABAPClassSectionBuilder = new ABAPClassSectionBuilder(
    ABAPClassSectionType.public
  );

  constructor(private className: string) {}

  getPublicSection(): IABAPClassSectionBuilder {
    return this.publicABAPClassSectionBuilder;
  }

  getProtectedSection(): IABAPClassSectionBuilder {
    return this.protectedABAPClassSectionBuilder;
  }

  getPrivateSection(): IABAPClassSectionBuilder {
    return this.privateABAPClassSectionBuilder;
  }

  setClassName(className: string): IABAPClassBuilder {
    this.className = className;
    return this;
  }

  setSuperClassName(superClassName: string): IABAPClassBuilder {
    this.superClassName = superClassName;
    return this;
  }

  build(): IABAPClass {
    const abapClass = new ABAPClass(this.className);
    abapClass.superClassName = this.superClassName;
    return abapClass;
  }
}
