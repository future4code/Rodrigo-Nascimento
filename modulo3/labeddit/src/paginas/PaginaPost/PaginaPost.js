import React from "react";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";

const PaginaPost = () => {
    usePaginaProtegida()
    return(

        <div>
            <h1>Página Post</h1>
        </div>

    )
}

export default PaginaPost