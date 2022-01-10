import axios from "axios"
import { BASE_URL } from "../constantes/urls";

export const criaPost = (body, clear, navigate, getPostagens) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            getPostagens()
            clear()
            navigate("/feed")

        })
        .catch((err) => {
            alert("Ocorreu um erro :(")
        })
}

export const criaComentario = (params, body, clear, getPostagens) => {
    axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            getPostagens()
            clear()
        })
        .catch((err) =>{
            alert("Ocorreu um erro :(")
        })
}


export const votoPositivo = (id, getPostagens) => {
    const body = {"direction": 1}

    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {

        })
        .catch((err) => {
            // alert("Ocorreu um erro :(")
        })
  
}

export const votoNegativo = (id) => {
    const body = {"direction": -1}

    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {

        })
        .catch((err) => {
            // alert("Ocorreu um erro :(")
        })
}

export const deletaVoto = (id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
        })
        .catch((err) => {
        })
}

