import { IABAP } from "./IABAP";

export interface IABAPBuilder<T extends IABAP> {
  build(): T;
}
