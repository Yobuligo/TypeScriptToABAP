import { IABAP } from "../IABAP";

export interface IABAPRenderer {
  render(abaps?: IABAP[]): string;
}
