import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from "./componentes/CriarPlaylist";
import EditarPlaylist from "./componentes/EditarPlaylist";
import Playlists from "./componentes/Playlists";



export default class App extends React.Component{

  state ={

    telaAtual: "criar"

  }

  mudaTela = () =>{
    switch (this.state.telaAtual){
      case "criar":
        return <CriarPlaylist mudarParaPlaylist={this.irParaEditarPlaylist}/>
      case "editar":
        return <EditarPlaylist mudarParaCriar={this.irParaCriar}/>
      // case "tocar":
      //     return <Playlists mudarParaTocar={this.irParaTocarPlaylist}/>
      default: 
        return <div>Página não encontrada</div>
    }
  }

  irParaCriar = () =>{
    this.setState({telaAtual: "criar"})
  }

  irParaEditarPlaylist = () =>{
    this.setState({telaAtual: "editar"})
  }

  // irParaTocarPlaylist = () =>{
  //   this.setState({telaAtual: "tocar"})
  // }

  

  render(){
    return(
      <div>
        {this.mudaTela()}
      </div>
    )
  }
}
