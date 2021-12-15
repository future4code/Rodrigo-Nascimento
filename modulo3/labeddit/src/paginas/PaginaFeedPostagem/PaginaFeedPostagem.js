import React from "react";

import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";


const PaginaFeedPostagem = () => {

    usePaginaProtegida()

 
    return(

        <div>
            <h1>Página Feed Postagem</h1>
        </div>

    )
}

export default PaginaFeedPostagem