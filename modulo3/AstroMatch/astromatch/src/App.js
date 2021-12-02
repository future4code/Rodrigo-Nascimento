import React from "react";
import Perfis from "./componentes/API/Perfis";
import AppEstilo from "./AppEstilo"
import EscolherPerfil from "./componentes/API/EscolherPerfil";
import Matches from "./componentes/API/Matches";


const App = () => {
  return (
    <AppEstilo>
     <Perfis />
     <Matches />
    </AppEstilo>
  );
}

export default App;
