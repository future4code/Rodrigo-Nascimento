import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {EstiloPerfil} from "./PerfisEstilo"
import EscolherPerfil from "./EscolherPerfil";


export default function Perfis() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [foto, setFoto] = useState("")
    const [bio, setBio] = useState("")
    const [id, setId] = useState("")
    const [proximo, setProximo] = useState(0)

    const passarPerfil = () => {
        setProximo(proximo+1)
    }

    const mostraPerfis = () =>{
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

    }


    useEffect(() => {

        mostraPerfis()

       
    }, [])

    return (
        <EstiloPerfil>            
            <img src={foto} />
            <strong>{nome},</strong>
            {idade}
            <p>{bio}</p>
            <EscolherPerfil id={id} mostraPerfis={mostraPerfis}/>             
        </EstiloPerfil>
    )
}
