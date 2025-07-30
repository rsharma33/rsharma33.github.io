import 'styled-components';

export interface Palette {
  mode: 'light' | 'dark';
  primary: {
    main: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    contrastText: string;
  };
  background: {
    default: string;
    paper: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  error?: {
    main: string;
  };
  warning?: {
    main: string;
  };
  info?: {
    main: string;
  };
  success?: {
    main: string;
  };
  divider?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}
