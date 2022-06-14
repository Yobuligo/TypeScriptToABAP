import { IABAP } from "../IABAP";
import { IABAPRenderer } from "./IABAPRenderer";

export class ABAPRenderer implements IABAPRenderer {
  private code = "";

  append(code: string): IABAPRenderer {
    if (code == "") {
      return this;
    }

    if (this.code == "") {
      this.code = code;
    } else {
      this.code += `\n${code}`;
    }
    return this;
  }

  appendAndLeadingBlank(code: string): IABAPRenderer {
    if (code == "") {
      return this;
    }

    if (this.code == "") {
      this.code = code;
    } else {
      this.code += `\n\n${code}`;
    }
    return this;
  }

  appendABAP(abap?: IABAP): IABAPRenderer {
    if (abap == undefined || abap == null) {
      return this;
    }
    this.append(abap.toABAP());
    return this;
  }

  appendABAPAndLeadingBlank(abap?: IABAP): IABAPRenderer {
    if (abap == undefined || abap == null) {
      return this;
    }
    this.appendAndLeadingBlank(abap.toABAP());
    return this;
  }

  appendABAPs(abaps?: IABAP[]): IABAPRenderer {
    let codeBlock = this.renderABAPs(abaps);
    if (codeBlock == "") {
      return this;
    }

    if (this.code == "") {
      this.code = codeBlock;
    } else {
      this.code += `\n${codeBlock}`;
    }
    return this;
  }

  /**
   * Generates code from the given [abaps] and adds it by a leading blank line to separate it from the existing code.
   */
  appendABAPsAndLeadingBlank(abaps?: IABAP[]): IABAPRenderer {
    let codeBlock = this.renderABAPs(abaps);
    if (codeBlock == "") {
      return this;
    }

    if (this.code == "") {
      this.code = codeBlock;
    } else {
      this.code += `\n\n${codeBlock}`;
    }
    return this;
  }

  insert(code: string): IABAPRenderer {
    if (code == "") {
      return this;
    }

    if (this.code == "") {
      this.code = code;
    } else {
      this.code = `${code}\n${this.code}`;
    }

    return this;
  }

  insertABAP(abap?: IABAP): IABAPRenderer {
    if (abap == undefined || abap == null) {
      return this;
    }
    this.insert(abap.toABAP());
    return this;
  }

  insertABAPs(abaps?: IABAP[]): IABAPRenderer {
    let codeBlock = this.renderABAPs(abaps);
    if (codeBlock == "") {
      return this;
    }

    if (this.code == "") {
      this.code = codeBlock;
    } else {
      this.code = `${codeBlock}\n${this.code}`;
    }
    return this;
  }

  render(): string {
    return this.code;
  }

  private renderABAPs(abaps?: IABAP[]): string {
    if (abaps == undefined || abaps == null || abaps.length == 0) {
      return "";
    }

    let code = "";
    abaps.forEach((abap) => {
      if (code == "") {
        code = `  ${abap.toABAP()}`;
      } else {
        code += `\n  ${abap.toABAP()}`;
      }
    });
    return code;
  }
}
