import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../hooks/useProtectedPage";

export default function TripDetailsPage (){

    useProtectedPage()


    const goToLoginPage = () => {
        navigate("/login")
    }

    const navigate = useNavigate()



    useEffect(() => {
        const token = localStorage.getItem("token")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/desatinar/trip/8fwDBSGyrh1jRA8qN3vt"
        const headers = {
            auth: token
        }

        axios.get (url, {headers}) 
        .then((response) =>{
            console.log(response.data, "resposta positiva")
        }).catch((error) =>{
            console.log(error.response, "resposta negativa")
        })
    }, [])



    return(
        <div>
            TripDetailsPage
            <button onClick={goToLoginPage}>
                login
            </button>
        </div>
    )
}