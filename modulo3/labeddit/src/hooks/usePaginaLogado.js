import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const usePaginaLogado = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            navigate("/feed")
        }

    }, [navigate])

}