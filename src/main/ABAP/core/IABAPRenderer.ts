import { IABAP } from "./IABAP";

export interface IABAPRenderer {
  render(abaps?: IABAP[]): string;
  render(
    insertLeadingEmptyRow: boolean,
    insertSeparatorRow: boolean,
    abaps?: IABAP[]
  ): string;
}
