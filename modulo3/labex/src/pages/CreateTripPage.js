import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function CreateTripPage (){

    const navigate = useNavigate()

    useEffect(() => {
        
        const token = localStorage.getItem("token")
        if (token === null) {
            console.log("não logado no createtrip")
            return navigate("/login")
        }

    }, [])

    return(
        <div>
            CreateTripPage
        </div>
    )
}