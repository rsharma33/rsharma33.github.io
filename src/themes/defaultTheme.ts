"use client";
import { extendTheme, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#D32F2F", // Red
          contrastText: "#fff",
        },
        secondary: {
          main: "#757575", // Grey
          contrastText: "#fff",
        },
        background: {
          default: "#f4f4f4", // Light grey
          paper: "#fff",
        },
        text: {
          primary: "#111",
          secondary: "#424242",
        },
        error: {
          main: "#B71C1C",
        },
        warning: {
          main: "#FF7043",
        },
        info: {
          main: "#1976d2",
        },
        success: {
          main: "#388e3c",
        },
        divider: "#BDBDBD",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#D32F2F", // Red
          contrastText: "#fff",
        },
        secondary: {
          main: "#BDBDBD", // Light grey
          contrastText: "#111",
        },
        background: {
          default: "#111",
          paper: "#1a1a1a",
        },
        text: {
          primary: "#fff",
          secondary: "#BDBDBD",
        },
        divider: "#424242",
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

// Export both light and dark themes for manual switching
export const lightTheme = createTheme({
  palette: defaultTheme.colorSchemes.light?.palette,
  typography: defaultTheme.typography,
  components: defaultTheme.components,
});

export const darkTheme = createTheme({
  palette: defaultTheme.colorSchemes.dark?.palette,
  typography: defaultTheme.typography,
  components: defaultTheme.components,
});

export default lightTheme;
