import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"
import EscolherPerfil from "./BotoesEscolha"
import {Container} from "./PerfisEstilo"

export default function Perfis() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [foto, setFoto] = useState("")
    const [bio, setBio] = useState("")
    const [id, setId] = useState("")
    

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
            })

    }

    useEffect(() => {

        mostraPerfis()

    }, [])

    return (
        <div>
            <Container fundo={foto}>
                <h2>{nome}, {idade}</h2>
                <h4>{bio}</h4>
            </Container>
            <EscolherPerfil id={id} mostraPerfis={mostraPerfis} />
        </div>
    )
}
