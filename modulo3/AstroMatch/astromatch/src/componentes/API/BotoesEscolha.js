import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import like from "../img/like.png"
import dislike from "../img/dislike.png"
import { BotoesEscolhaEstilo } from "./BotoesEscolhaEstilo";


export default function EscolherPerfil(props) {
    const [curtida, setCurtida] = useState(false)

    const match = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/choose-person"
        let body = {
            "id": props.id,
            "choice": curtida
        }
        axios.post(url, body)
            .then((resposta) => {
            }).catch((erro) => {           
            })
    }

    const coracao = () => {
        setCurtida(true)
        match()
    }

    const naoCoracao = () => {
        setCurtida(false)
        match()      
    }

    useEffect(() => {

        match()

    }, [curtida])


    return (
            <BotoesEscolhaEstilo onClick={props.mostraPerfis}>
                <button onClick={() => coracao()}><img src={like} alt="botão curtir" /></button>
                <button onClick={() => naoCoracao()}><img src={dislike} alt="botão não curtir"/></button>
            </BotoesEscolhaEstilo>
    )

}