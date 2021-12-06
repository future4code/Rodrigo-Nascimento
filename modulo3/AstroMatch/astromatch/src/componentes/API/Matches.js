import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MatchesEstilo } from "./MatchesEstilo";


export default function Matches() {
    const [guardaMatches, setGuardaMatches] = useState([])

    const matchesMapeados = guardaMatches.map((match) => {
        return (
            <div>
                <img src={match.photo} alt="imagem do perfil" />
                {match.name}
            </div>
        )
    })

    const mostraMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/matches"

        axios.get(url)
            .then((resposta) => {
                setGuardaMatches(resposta.data.matches)
            }).catch((erro) => {
            })
    }

    useEffect(() => {

        mostraMatches()

    }, [])

    return (
       
        <MatchesEstilo key={Date.now()}>          
            {matchesMapeados}
        </MatchesEstilo>
    )
}