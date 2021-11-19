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
        playlist: [],
        playlistId: [],
        musicas: []

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
            this.setState({playlistId: resposta.data.result.id})
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

    visualizarFaixasPlaylist = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        axios.get(url, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) =>{
            // this.setState({faixas: resposta.data.result.tracks})
            // console.log(resposta.data.result.tracks)
            this.setState({musicas: resposta.data.result.tracks})
        }).catch((erro) =>{
            console.log(erro.response.data)
        })
    }


    render(){

        
        console.log("id", this.state.playlistId)
        const mostraPlaylist = this.state.playlist.map((lista) =>{
            return (
                <ListaPlaylist key={lista.id}>
                    {/* {this.state.playlistId = lista.id} */}
                    <button onClick={this.props.mudarParaPlaylist}>editar</button>
                    {lista.name}
                    <button onClick={() => this.deletarPlaylist(lista.id)}>x</button>
                    
                </ListaPlaylist>
       
            )
        }) 

        const mostraFaixaPlaylist = this.state.musicas.map((lista) =>{
            return (
                <div>
                    <h1>TESTE</h1>
                    {lista.id}
                    {lista.name}
                    {lista.artist}
                    {lista.url}
                    {/* <button onClick={() => this.visualizarFaixasPlaylist()}>Editar Playlist</button> */}
                </div>
            )
        })
        console.log("musicas", mostraFaixaPlaylist)
        return(
            <EstiloDiv>
                {/* <button onClick={this.props.mudarParaPlaylist}>Editar Playlist</button> */}
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
                <br/>
                {mostraFaixaPlaylist}
                
            </EstiloDiv>
        )
    }

}