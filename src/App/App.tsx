import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "src/context/GlobalContext";
import RouterConfig from "src/router";
import theme from "src/theme";

const App = () => {
  const { i18n } = useTranslation();
  const { language } = useGlobalContext();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <RouterConfig />
          {/* <Routes /> */}
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
