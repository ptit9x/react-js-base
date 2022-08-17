import { useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Loading from "../components/Loading/Loading";
import { useGlobalContext } from "../context/GlobalContext";
import Routes from "../router";
import theme from "../theme";

const App = () => {
  const { i18n } = useTranslation();
  const { language } = useGlobalContext();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
