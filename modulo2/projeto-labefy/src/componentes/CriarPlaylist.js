import React from "react";
import axios from "axios";
import styled from "styled-components";

const EstiloDiv = styled.div`

display: flex;
align-items: center;
flex-direction: column;
`

const EstiloCriarPlaylist = styled.div`

border: 1px black solid;

`

const ListaPlaylist = styled.li`

display: flex;
justify-content: center;
align-items: center;

`

export default class CriarPlaylist extends React.Component {

    state = {
        nome: "",
        playlist: [],
        musicas: [],
        tituloMusica: "",
        artista: "",
        url: ""

    }

    componentDidMount() {
        this.visualizarPlaylist()
    }

    onChangeInput = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeTituloMusica = (event) => {
        this.setState({ tituloMusica: event.target.value })
    }

    onChangeArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) => {
            alert("Playlist criada com sucesso")
            this.setState({ nome: "" })
            this.visualizarPlaylist()

        }).catch((erro) => {
            alert(erro.response.data.message)

        })
    }

    visualizarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) => {
            this.setState({ playlist: resposta.data.result.list })
        }).catch((erro) => {
            console.log(erro.response.data.message)
        })
    }

    deletarPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

        axios.delete(url, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) => {
            alert("Playlist deletada")
            this.visualizarPlaylist()
        }).catch((erro) => {
            alert(erro.response.data)
        })
    }

    visualizarFaixasPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        axios.get(url, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) => {
            this.setState({ musicas: resposta.data.result.tracks })

            console.log("aqui", resposta.data)
        }).catch((erro) => {
            console.log(erro.response.data.message)
        })
    }

    adicionarMusicas = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name: this.state.tituloMusica,
            artist: this.state.artista,
            url: this.state.url
        }

        axios.post(url, body, {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((resposta) => {
            console.log("resposta adiciona musica", resposta)
            alert("Música adicionada")
            this.visualizarPlaylist()
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }


    render() {

        const mostraPlaylist = this.state.playlist.map((lista) => {
            return (
                <div>
                    {lista.name}
                    <ListaPlaylist key={lista.id}>
                        <button onClick={() => this.visualizarFaixasPlaylist(lista.id)}>Visualizar</button>
                        <button onClick={() => this.adicionarMusicas(lista.id)}>Adicionar Música</button>
                        <button className="deletar" onClick={() => this.deletarPlaylist(lista.id)}>Apagar</button>            
                    </ListaPlaylist>
                </div>
            )
        })

        const mostraFaixaPlaylist = this.state.musicas.map((faixa) => {
            return (
                <div key={faixa.id}>
                    <h3>{faixa.artist} - {faixa.name}</h3>
                    <audio controls>
                        <source src={faixa.url} />
                    </audio>

                    <br />
                    <br />
                </div>
            )
        })

        return (
            <EstiloDiv>
                <div>
                <h1>Criar Playlist</h1>
                <input
                    placeholder={"Nome da Playlist"}
                    value={this.state.nome}
                    onChange={this.onChangeInput}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
                </div>
                <br />
                <br />
                <br />
                <h2>Playlists Criadas</h2>
                {mostraPlaylist}
                <br />
                {mostraFaixaPlaylist}
                <h1>Adicionar Música a playlist</h1>
                <input
                    placeholder={"música"}
                    value={this.state.tituloMusica}
                    onChange={this.onChangeTituloMusica}
                />
                <input
                    placeholder={"artista"}
                    value={this.state.artista}
                    onChange={this.onChangeArtista}
                />
                <input
                    placeholder={"url"}
                    value={this.state.url}
                    onChange={this.onChangeUrl}
                />

            </EstiloDiv>
        )
    }

}