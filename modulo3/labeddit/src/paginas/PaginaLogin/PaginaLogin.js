import React from "react";
import { ContainerLogin, Cadastro, ImagemLogo } from "./styled";
import { Button } from "@mui/material";
import FormularioLogin from "./FormularioLogin";
import { useNavigate } from "react-router"
import { irParaCadastro } from "../../rotas/coordenadas"
import logoLabreddit from "../../recursos/img/logoLabreddit.png"
import { usePaginaLogado } from "../../hooks/usePaginaLogado";


const PaginaLogin = () => {

    usePaginaLogado()

    const navigate = useNavigate()

    return (

        <ContainerLogin>
            <ImagemLogo src={logoLabreddit}/>
            <FormularioLogin />
            <Cadastro>
                <Button 
                    onClick={() => irParaCadastro(navigate)}
                    variant="text"
                    fullWidth
                    >
                    Cadastre-se
                </Button>
            </Cadastro>
        </ContainerLogin>
    )
}

export default PaginaLogin