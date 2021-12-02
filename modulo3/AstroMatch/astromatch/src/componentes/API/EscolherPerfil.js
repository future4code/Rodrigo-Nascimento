import react, { useEffect } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";


export default function EscolherPerfil(props) {
    const [match, setMatch] = useState("")
    const [naoMatch, setNaoMatch] = useState("")

    const matchBotao = () => {
        setMatch(true)
        console.log("match", match)
    }

    const naoMatchBotao = () => {
        setNaoMatch(false)  
        console.log("não match", naoMatch)
       
    }

    const match1 = () => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/choose-person"
        let body = {
            "id": props.id,
            "choice": true
        }
        axios.post(url, body)
            .then((resposta) => {
                console.log(resposta.data)

            }).catch((erro) => {
                console.log(erro.response)
            })


    }

    

return (
        <div onClick={match1}>
            <button onClick={props.mostraPerfis}>x</button>
            <button onClick={props.mostraPerfis}>o</button>
        </div>
    )

}
