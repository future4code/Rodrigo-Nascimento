import React from "react";
import Perfis from "./componentes/API/Perfis";
import AppEstilo from "./AppEstilo"
import EscolherPerfil from "./componentes/API/EscolherPerfil";
import Matches from "./componentes/API/Matches";
import { useState } from "react/cjs/react.development";





const App = () => {
  const [mudaTela, setMudaTela] = useState("")

  const botaoChat = () => {
    setMudaTela("chat")
  }

  const botaoMatches = () => {
    setMudaTela("matches")
  }


  return (
    <AppEstilo>
      <Perfis />
    </AppEstilo>


  );
}

export default App;
