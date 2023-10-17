import { createTheme } from "@mui/material";
import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AboutIE } from "./components/about-ie";
import { Description } from "./components/description";
import { Home } from "./components/home";
import { PosMatricula } from "./components/posmatricula";
import { Result } from "./components/result";
import { ICalcData } from "./interfaces";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function App() {
  const [actualPage, setActualPage] = useState(0);
  const [calcData, setCalcData] = useState<ICalcData>();

  const mainComponent = useCallback(() => {
    switch (actualPage) {
      case 0:
        return <Home onChangePage={() => setActualPage(1)} />;
        break;

      case 1:
        return <Description onChangePage={() => setActualPage(2)} />;
        break;

      case 2:
        return (
          <AboutIE
            onChangePage={(data: ICalcData) => {
              setCalcData(data);
              setActualPage(3);
            }}
          />
        );
        break;

      case 3:
        return (
          <Result
            data={calcData!}
            onChangePage={() => setActualPage(4)}
            onBack={() => setActualPage(2)}
          />
        );
        break;

      case 4:
        return (
          <PosMatricula data={calcData!} onBack={() => setActualPage(3)} />
        );
        break;
    }
  }, [actualPage]);

  return <ThemeProvider theme={theme}>{mainComponent()}</ThemeProvider>;
}

export default App;
