import React from "react"
import axios from "axios"
import styled from "styled-components"
import CriarPlaylist from "./CriarPlaylist"

export default class EditarPlaylist extends React.Component{

    state = {

    }

    faixasPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
    }

    render(){
        return(
            <div>
                <button onClick={this.props.mudarParaCriar}>Criar Playlists</button>
                <h1>Editar Playlists</h1>
                <CriarPlaylist/>
            </div>
        )
    }
}