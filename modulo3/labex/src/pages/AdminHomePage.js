import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AdminHomePage (){

    const navigate = useNavigate()

    useEffect(() => {
        
        const token = localStorage.getItem("token")
        if (token === null) {
            console.log("não logado no admin home")
            return navigate("/login")
        }

    }, [])
    return(
        <div>
            AdminHomePage
        </div>
    )
}