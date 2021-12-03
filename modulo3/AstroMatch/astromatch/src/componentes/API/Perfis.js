import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { EstiloPerfil, BotaoReiniciar, Container } from "./PerfisEstilo"
import EscolherPerfil from "./EscolherPerfil";
import Matches from "./Matches";
import App from "../../App";


export default function Perfis() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [foto, setFoto] = useState("")
    const [bio, setBio] = useState("")
    const [id, setId] = useState("")
    const [resetar, setResetar] = useState("")

    const mostraPerfis = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/person"

        axios.get(url)
            .then((resposta) => {
                setNome(resposta.data.profile.name)
                setIdade(resposta.data.profile.age)
                setFoto(resposta.data.profile.photo)
                setBio(resposta.data.profile.bio)
                setId(resposta.data.profile.id)
            })
            .catch((erro) => {
                console.log(erro, "erro dos perfis")
            })

    }

    const reiniciaPerfis = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/clear"

        axios.put(url)
            .then((resposta) => {
                setResetar(resposta)
                console.log(resposta, "reinicia perfil")
                alert("Perfis reiniciados")
                mostraPerfis()
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(() => {

        mostraPerfis()

    }, [])

    return (
        <div>
            <Matches reiniciaPerfis={reiniciaPerfis} />
            <Container fundo={foto} nome={nome} bio={bio}>
                {/* <img src={foto}/> */}
                {/* <img className="imagem-fundo" src={foto} /> */} 
                <h2>{nome}, {idade}</h2>
                <h4>{bio}</h4> 
            </Container>
            <EscolherPerfil id={id} mostraPerfis={mostraPerfis} />
    
        </div>
    )
}
