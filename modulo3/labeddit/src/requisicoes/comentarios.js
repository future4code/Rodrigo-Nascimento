import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from "../constantes/urls"


 function CriaComentario (params, body, clear, navigate) {
    

    useEffect(()=> {
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log("postado", res)
             
                
            })
    }, [])

    
}

export default CriaComentario