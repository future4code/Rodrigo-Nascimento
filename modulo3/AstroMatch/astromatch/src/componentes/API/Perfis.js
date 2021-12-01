import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {EstiloPerfil} from "./PerfisEstilo"
import EscolherPerfil from "./EscolherPerfil";
import { BotaoEscolherPerfil } from "./EscolherPerfilEstilo";



export default function Perfis() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [foto, setFoto] = useState("")
    const [bio, setBio] = useState("")
    const [id, setId] = useState("")

    function refreshPage(){
        window.location.reload();
    } 
    
    useEffect(() => {

        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/person`

        axios.get(url)
            .then((resposta) => {
                setNome(resposta.data.profile.name)
                setIdade(resposta.data.profile.age)
                setFoto(resposta.data.profile.photo)
                setBio(resposta.data.profile.bio)
                setId(resposta.data.profile.id)
            })
            .catch((erro) => {
                console.log(erro.response.data, "erro")
            })

    }, [])

    return (
        <EstiloPerfil>            
            <img src={foto} />
            <strong>{nome},</strong>
            {idade}
            <p>{bio}</p>
            <button type="submit" onClick={refreshPage}>Refresh Button</button>
            <BotaoEscolherPerfil />
            <EscolherPerfil id={id}/>
            
        </EstiloPerfil>
    )
}
