import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      tertiary: string;
      accent: string;
      contour: string;
    };

    typography: {
      main: string;
      secondary: string;
      tertiary: string;
    };
  }
}
