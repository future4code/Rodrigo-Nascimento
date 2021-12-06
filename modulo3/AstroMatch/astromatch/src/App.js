import React from "react";
import Perfis from "./componentes/API/Perfis";
import AppEstilo from "./AppEstilo"
import Matches from "./componentes/API/Matches"
import { useState } from "react";
import axios from "axios";
import chat from "./componentes/img/chat.png"
import reload from "./componentes/img/reload.png"


const App = () => {
  const [tela, setTela] = useState(true)

  const reiniciaPerfis = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/clear"

    axios.put(url)
      .then((resposta) => {
        alert("Perfis resetados")
      })
      .catch((erro) => {
      })
  }

  const botaoChat = () => {
    setTela(!tela)
  }


  return (
    <AppEstilo>
      <div>
      <header>
        <button onClick={reiniciaPerfis}>
          <img className="botão-topo" src={reload} alt="botao reload"/>
        </button>
        <button className="botão-topo" onClick={botaoChat}>
          <img src={chat} alt="imagem chat"/>
        </button>
      </header>
      </div>
      {tela === true ?
        <Perfis />
        :
        <Matches />
      }
    </AppEstilo>
  );
}

export default App;
