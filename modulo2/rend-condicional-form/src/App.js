import React from 'react';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import styled from 'styled-components';



export default class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Etapa4/>;
    }
  }

  // irParaProximaEtapa = () => {
  //   if (this.state.etapa === ){
  //   }

  // }

  
  render() {

    return (
      <div>
        {this.renderizaEtapa()}
        {this.state.etapa <= 4 && <button>Próxima etapa</button>}
      </div>
      
    );
  }
}







// export default App;
