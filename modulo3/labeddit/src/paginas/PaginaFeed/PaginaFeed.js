import React from "react";
import { usePaginaProtegida } from "../../hooks/usePaginaProtegida";
import useGet from "../../hooks/useGet";
import { BASE_URL } from "../../constantes/urls"
import { Link } from "@mui/material";

const PaginaFeed = () => {

    usePaginaProtegida()

    const posts = useGet(`${BASE_URL}/posts`)

    console.log(posts, "o que tem no feed")
    console.log(posts)

    const postsMap = posts && posts.map((post) => {
        return (

            <div> 
                {post.body}      
            </div>
        )
    })

    console.log(postsMap)

    return (

        <div> 
            {postsMap}
        </div>

    )
}

export default PaginaFeed