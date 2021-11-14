import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      header: string;
      body: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
        gray: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
