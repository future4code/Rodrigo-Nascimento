import react, { useState } from "react";
import axios from "axios";
import { MatchesEstilo } from "./MatchesEstilo";


export default function Matches() {
    const [guardaMatches, setGuardaMatches] = useState([])

    const matchesMapeados = guardaMatches.map((match) =>{
        return (
            <div>
                <img src={match.photo} />
                <strong>{match.name}</strong>    
            </div>
        )
    })

    const mostraMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/matches"

        axios.get(url)
            .then((resposta) => {
                console.log(resposta.data.matches)
                setGuardaMatches(resposta.data.matches)
            }).catch((erro) => {
                console.log(erro)
            })
    }

    return (
        <MatchesEstilo key={matchesMapeados.id}>
            <button onClick={mostraMatches}>
                matches
            </button>
            {matchesMapeados}
        </MatchesEstilo>
    )
}