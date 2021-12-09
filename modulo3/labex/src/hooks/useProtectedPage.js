import React from "react";
import { useNavigate } from "react-router";




export const useProtectedPage = () => {
    const navigate = useNavigate()

    
    const token = localStorage.getItem("token")
    if (token === null) {
        
        return navigate("/login")
    }

}
