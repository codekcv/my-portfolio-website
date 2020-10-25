/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components";
import { theme } from "pages/_app";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
