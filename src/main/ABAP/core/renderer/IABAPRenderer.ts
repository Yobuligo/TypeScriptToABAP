import { IABAP } from "../IABAP";

export interface IABAPRenderer {
  append(code: string): IABAPRenderer;
  appendAndLeadingBlank(code: string): IABAPRenderer;
  appendABAP(abap?: IABAP): IABAPRenderer;
  appendABAPs(abaps?: IABAP[]): IABAPRenderer;
  appendABAPsAndLeadingBlank(abaps?: IABAP[]): IABAPRenderer;
  insert(code: string): IABAPRenderer;
  insertABAP(abap?: IABAP): IABAPRenderer;
  insertABAPs(abaps?: IABAP[]): IABAPRenderer;
  render(abaps?: IABAP[]): string;
}
