import axios from "axios"
import { BASE_URL } from "../constantes/urls";
import { irParaFeed } from "../rotas/coordenadas";


export const login = (body, clear, navigate) => {

    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            irParaFeed(navigate)
        })
        .catch((err) => {
            alert("Ocorreu um erro")
        })

}

export const cadastro = (body, clear, navigate) => {

    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            irParaFeed(navigate)
        })
        .catch((err) => {
            alert("Ocorreu um erro")
        })

}