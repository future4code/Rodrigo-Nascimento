import React from "react";
import axios from "axios";
import styled from "styled-components";

const EstiloDiv = styled.div`

display: flex;
align-items: center;
flex-direction: column;
`

const ListaPlaylist = styled.li`


display: flex;
width: 300px;
border: black solid 1px;
justify-content: space-between;


`

export default class CriarPlaylist extends React.Component{

    state = {
        nome: "",
        playlist: []

    }

    componentDidMount(){
        this.visualizarPlaylist()
    }

    onChangeInput = (event) =>{
        this.setState({nome: event.target.value})
    }

    criarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) =>{
            alert("Playlist criada com sucesso")
            this.setState({nome: ""})
            this.visualizarPlaylist()

        }).catch((erro) =>{
            alert(erro.response.data.message)

        })
    }

    visualizarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) =>{
            this.setState({playlist: resposta.data.result.list})
        }).catch((erro) =>{
            console.log(erro.response.data)
        })
        
    }

    deletarPlaylist = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

        axios.delete(url, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) =>{
            alert("Playlist deletada")
            this.visualizarPlaylist()
        }).catch((erro) =>{
            alert(erro.response.data)
        })
    }


    render(){

        console.log(this.visualizarPlaylist)

        const mostraPlaylist = this.state.playlist.map((lista) =>{
            return (
                <ListaPlaylist key={lista.id}>
                    {lista.name}
                    <button onClick={() => this.deletarPlaylist(lista.id)}>x</button>
                    <button onClick={this.props.mudarParaPlaylist}>Editar Playlist</button>
                </ListaPlaylist>
                
            )
        }) 
 
        return(
            <EstiloDiv>
                <button onClick={this.props.mudarParaPlaylist}>Editar Playlist</button>
                <h1>Criar Playlists</h1>
                <input 
                placeholder={"Nome da Playlist"}
                value={this.state.nome}
                onChange={this.onChangeInput}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
                <br/>
                <br/>
                <br/>
                <h2>Playlists Criadas</h2>
                {mostraPlaylist}
            </EstiloDiv>
        )
    }

}