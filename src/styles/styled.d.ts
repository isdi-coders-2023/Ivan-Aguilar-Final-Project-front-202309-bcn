import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      dark: string;
      light: string;
      bright: string;
    };

    typography: {
      main: string;
      secondary: string;
      tertiary: string;
    };
  }
}
