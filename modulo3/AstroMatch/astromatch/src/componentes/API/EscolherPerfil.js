import react, { useEffect } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { BotaoEscolherPerfil } from "./EscolherPerfilEstilo";


export default function EscolherPerfil(props) {
    let [match, setMatch] = useState("")

    const matchBotao = () => {
        setMatch(true)
        console.log("match", match)
    }

    const naoMatchBotao = () => {
        setMatch(false)
        console.log("não match", match)
    }

    useEffect(() => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/choose-person"
        let body = {
            "id": props.id,
            "choice": match
        }
        axios.post(url, body)
            .then((resposta) => {
                console.log(resposta.data)

            }).catch((erro) => {
                console.log(erro.response)
            })

    }, [match])


return (
        <BotaoEscolherPerfil>
            <button onClick={naoMatchBotao}>x</button>
            <button onClick={matchBotao}>o</button>
        </BotaoEscolherPerfil>
    )

}
