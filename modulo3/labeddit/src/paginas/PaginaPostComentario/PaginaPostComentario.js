import React from "react";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";

const PaginaPostComentario = () => {
    usePaginaProtegida()
    
    return(

        <div>
            <h1>Página Post Comentario</h1>
        </div>

    )
}

export default PaginaPostComentario