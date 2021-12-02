import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Perfis from "./Perfis";
import { EstiloPerfil } from "./PerfisEstilo";


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
                console.log(resposta.data, "resposta api")

            }).catch((erro) => {
                console.log(erro, "reposta api erro")
                
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

    }, [curtida, console.log(curtida, "match estado")])


    return (
            <div onClick={props.mostraPerfis}>
                <button onClick={() => naoCoracao()}>x</button>
                <button onClick={() => coracao()}>o</button>
            </div>
    )

}
