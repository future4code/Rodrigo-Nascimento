import react, { useEffect } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import Perfis from "./Perfis";


export default function EscolherPerfil(props) {
    const [match, setMatch] = useState(true)
    // const [naoMatch, setNaoMatch] = useState("")

    // const matchBotao = () => {
    //     setMatch(true)
    //     console.log("match", match)
    // }

    // const naoMatchBotao = () => {
    //     setMatch(false)  
    //     console.log("não match", match)
       
    // }

    const match1 = () => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/desatinar/choose-person"
        let body = {
            "id": props.id,
            "choice": match
        }
        axios.post(url, body)
            .then((resposta) => {
                console.log(resposta.data, "resposta api")

            }).catch((erro) => {
                console.log(erro.response)
            })

            console.log(match, "match estado")
    }

    useEffect(() => {

        match1()

       
    }, [match, console.log(match, "console.log")])

    

return (
        <div onClick={props.mostraPerfis}>
            <Perfis match1={match1}/>
            <button onClick={() => setMatch(false)}>x</button>
            <button onClick={() => setMatch(true)}>o</button>
        </div>
        
    )

}
