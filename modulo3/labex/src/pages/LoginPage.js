import axios from "axios";
import React from "react";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChagePassword = (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    } 


    const onSubmitLogin = () => {
        console.log(email, password)
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login"
        const body = {

            email: email,
            password: password
        }
                
        axios.post(url, body)
        .then((response) => {
            console.log(response.data, "resposta positiva")
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/:id")

        }).catch((error) =>{
            console.log(error.response, "resposta negativa")

        })
    }

    return (
        <div>
            <input
                type="email"
                id="user"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
            />

            <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={onChagePassword}
            />

            <button onClick={onSubmitLogin}>Enviar</button>
            <button onClick={goToHomePage}>Voltar</button>
            
        </div>
    )
}