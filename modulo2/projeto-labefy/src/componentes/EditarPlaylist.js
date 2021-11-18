import React from "react"
import axios from "axios"
import styled from "styled-components"

export default class EditarPlaylist extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.mudarParaCriar}>Criar Playlists</button>
                <h1>Editar Playlists</h1>
                
            </div>
        )
    }
}