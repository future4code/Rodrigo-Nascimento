import React from "react";
import FormularioCadastro from "./FormularioCadastro";
import { ContainerPagCadastro, ImagemLogo } from "./styled";
import logoLabreddit from "../../recursos/img/logoLabreddit.png"
import { usePaginaLogado } from "../../hooks/usePaginaLogado";

const PaginaCadastro = () => {
    usePaginaLogado()

    return(

        <ContainerPagCadastro>
            <ImagemLogo src={logoLabreddit}/>
            <FormularioCadastro/>
        </ContainerPagCadastro>
    )
}

export default PaginaCadastro