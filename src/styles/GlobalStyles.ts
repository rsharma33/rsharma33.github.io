// src/styles/GlobalStyle.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
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
    };
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', Arial, sans-serif;
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  },
  .darkBG {
    background: #fff;
    color: #000;
    transition: background-color 0.5s;
  },
  .lightBG {
    background: #000;
    color: #fff;
    transition: background-color 0.5s;
  },
  .section-wrapper {
    width: 100%;
  }
`;
