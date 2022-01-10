import React from "react";
import Rotas from "./rotas/Rotas";
import tema from "./constantes/tema";
import { ThemeProvider } from "@mui/material";



const App = () => {
  return (
    <ThemeProvider theme={tema}>
      <Rotas/>
    </ThemeProvider>
  );
}

export default App;
