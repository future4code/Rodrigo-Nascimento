import { VoiceChat } from "@material-ui/icons";
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constantes/urls";
import useGet from "../hooks/useGet";
import PaginaFeed from "../paginas/PaginaFeed/PaginaFeed";


export const criaPost = (body, clear, navigate) => {

    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            console.log("postado", res)
            clear()
            navigate("/feed")
            
        })
        .catch((err) => {
            console.log(err.response, "falha")
        })
}

export const criaComentario = (params, body, clear, navigate) => {
    axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            console.log("postado", res)
        
            clear()
          
        })
        .catch((err) => {
            console.log(err.response, "falha")
        })
    }


 

export const votoPositivo = (id) => {
    const body = {"direction": 1}
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        console.log("resposta positiva", res)
        
    })
    .catch((err) => {
        console.log("resposta negativa,", err.response)
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
        console.log("resposta positiva", res)
    
    })
    .catch((err) => {
        console.log("resposta negativa,", err.response)
    })
}

