import { useNavigate } from "react-router";
import { useEffect } from "react";


export const useProtectedPage = () => {

    
    const navigate = useNavigate()

    useEffect(() => {
        
        const token = localStorage.getItem("token")
        if (token === null) {
            console.log("não logado no admin home")
            return navigate("/login")
        }

    }, [])
}
