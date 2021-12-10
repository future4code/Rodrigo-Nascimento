import axios from "axios";
import React from "react";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";
import { Base_Url } from "../constants/Base_Url";
import Swal from "sweetalert2";

export default function LoginPage() {
    const { form, onChange } = useForm({ email: "", password: ""})


    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const login = (body) =>{

        axios.post(`${Base_Url}/login`, body)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                Swal.fire(
                    'Sucesso',
                    ':🚀',
                    'success'
                  )
                console.log("resposta positiva", response.data)
                navigate("/admin/trips/create")
            }).catch((err) => {
                console.log(err.response, "resposta errada")
            })
        }

        const onSubmitLogin = (event) => {
            event.preventDefault()
            login(form)
         
    }


    return (
        <div>
            <form onSubmit={onSubmitLogin}>
                <input
                    name="email"
                    type={"email"}
                    value={form.email}
                    placeholder="Email"
                    onChange={onChange}
                />
                <input
                    name="password"
                    type={"password"}
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                />
                <button>Enviar</button>
            </form>

            <button onClick={goToHomePage}>Voltar</button>

        </div>
    )
}