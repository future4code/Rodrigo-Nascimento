import React from "react";
import axios from "axios";
import styled from "styled-components";

const Principal = styled.div`

display: flex;
align-items: center;
flex-direction: column;
font-family: Arial, Helvetica, sans-serif;

input{
  width: 250px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #adb5bd;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input:focus {
  border: 3px solid #555;
}

button {
  background-color: white;
  color: black;
  border: 2px solid #555555;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

button:hover {
  background-color: #555555;
  color: white;
}
`

const Divs = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`

export default class CriarPlaylist extends React.Component {

    state = {
        nome: "",
        playlist: [],
        musicas: [],
        tituloMusica: "",
        artista: "",
        url: "",
        playlistId: "",
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
            this.setState({tituloMusica: ""})
            this.setState({artista: ""})
            this.setState({url: ""})
            this.visualizarPlaylist()
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }

    guardaId = () => {
        this.state.playlist.map((lista) => {
            this.state.playlistId = lista.id
        })
    }


    render() {

        console.log(this.guardaId(), "guarda id")

        const mostraPlaylist = this.state.playlist.map((lista) => {
            return (
                <Divs key={lista.id}>
                    {lista.name}
                    <div>
                        <button onClick={() => this.visualizarFaixasPlaylist(lista.id)}>Visualizar</button>
                        <button className="deletar" onClick={() => this.deletarPlaylist(lista.id)}>Apagar</button>
                    </div>
                </Divs>
            )
        })

        const mostraFaixaPlaylist = this.state.musicas.map((faixa) => {
            return (
                <Divs key={faixa.id}>
                    <h4>{faixa.artist} - {faixa.name}</h4>
                    <audio controls>
                        <source src={faixa.url} />
                    </audio>
                </Divs>
            )
        })

        return (
            <Principal>
                <h2>Criar Playlist</h2>
                <input
                    placeholder={"Nome da Playlist"}
                    value={this.state.nome}
                    onChange={this.onChangeInput}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
                <h3>Playlists Criadas</h3>
                {mostraPlaylist}
                {mostraFaixaPlaylist}
                <h3>Adicionar Música a playlist</h3>
                <input
                    placeholder={"Título da música"}
                    value={this.state.tituloMusica}
                    onChange={this.onChangeTituloMusica}
                />
                <input
                    placeholder={"Nome do(a) artista"}
                    value={this.state.artista}
                    onChange={this.onChangeArtista}
                />
                <input
                    placeholder={"Endereço"}
                    value={this.state.url}
                    onChange={this.onChangeUrl}
                />
                <button onClick={() => this.adicionarMusicas(this.state.playlistId)}>Adicionar</button>
            </Principal>
        )
    }

}