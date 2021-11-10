import React from 'react';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import styled from 'styled-components';

const Estilo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`


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

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
    }


  
  render() {

    return (
      <Estilo>
        {this.renderizaEtapa()}
        {this.state.etapa <= 4 && <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>}
      </Estilo>
      
    );
  }
}







// export default App;
