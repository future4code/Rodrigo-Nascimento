import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    postagem: [
      {
        nomeUsuario: "rodrigo",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "diego",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/155"
          
      },
      {
        nomeUsuario: "everton",
        fotoUsuario: "https://picsum.photos/50/70",
        fotoPost: "https://picsum.photos/200/151"

      }
    ],

    guardaNome: "",
    guardaFotoUsuario: "",
    guardaFotoPost: ""
  };

    

  adicionaUsuario = () => {

    const novoUsuario = {
      nomeUsuario: this.state.guardaNome,
      fotoUsuario: this.state.guardaFotoUsuario,
      fotoPost: this.state.guardaFotoPost
    };

    const novoPost = [...this.state.postagem, novoUsuario];

    this.setState({ postagem: novoPost})
  };

  onChangeInputNomeUsuario = (event) =>{
    this.setState({guardaNome: event.target.value})
  }

  onChangeInputFotoUsuario = (event) =>{
    this.setState({guardaFotoUsuario: event.target.value})

  }

  onChangeInputFotoPost = (event) =>{
    this.setState({guardaFotoPost: event.target.value})
  }

  render() {

    const posts = this.state.postagem.map((post) => {
      return (
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}

        />    
      )
    })

    return (

      <MainContainer>
        <input value={this.state.guardaNome}
        onChange ={this.onChangeInputNomeUsuario}
        placeholder ="Nome Usuário"/>

        <input value={this.state.guardaFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder = "Foto Usuário"/>

        <input value ={this.state.guardaFotoPost}
        onChange ={this.onChangeInputFotoPost}
        placeholder = "Foto Post"/>

        <button onClick ={this.adicionaUsuario}>Adicionar</button>        
        {posts}
      </MainContainer>

    );
  }
}

export default App;


