import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../rotas/coordenadas"


export const usePaginaProtegida = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
           irParaLogin(navigate)
        }

    }, [navigate])

}