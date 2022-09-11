import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000"
    },
    primary: {
      light: "#a9f5eb",
      main: "#05c0a5"
    },
    secondary: {
      light: "#00000099",
      main: "#192133"
    },
    white: {
      100: "#bcbcbc",
      200: "#b8b8b8",
      300: "#d3d3d3",
      400: "#e6e6e6",
      500: "#fcfcfc",
      600: "#f5f5f6"
    },
    blue: {
      100: "#07385f",
      500: "#0b1a40"
    },
    blueGrey: {
      100: "#f2fafa",
      200: "#dbdbdf",
      300: "#b4beca",
      500: "#939fb9",
      600: "#5a678a",
      700: "#3E3E45",
      800: "#0b2840",
      900: "#1f1f22",
      A100: "#5e6b8d",
      A200: "#f8f9fb"
    },
    green: {
      100: "#275342",
      200: "#20382F"
    },
    red: {
      100: "#ff445b",
      200: "#f8687a"
    },
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f4f4f4",
      A200: "#dddddd",
      A400: "#bbbbbb",
      A700: "#999999"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    background: {
      default: "#fff",
      paper: "#f2f3f6"
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});

declare module "@mui/material/styles/createPalette" {
  export interface Palette {
    blueGrey: ColorPartial;
    blue: ColorPartial;
    gray: ColorPartial;
    white: ColorPartial;
    green: ColorPartial;
    red: ColorPartial;
  }
  export interface PaletteOptions {
    blueGrey: ColorPartial;
    blue: ColorPartial;
    gray: ColorPartial;
    white: ColorPartial;
    green: ColorPartial;
    red: ColorPartial;
  }
}

export type CustomizedTheme = typeof theme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomizedTheme { }
}

export default theme;
