export const irParaLogin = (navigate) => {
    navigate("/")
}

export const irParaCadastro = (navigate) => {
    navigate("/cadastro")
}

export const irParaFeed = (navigate) => {
    navigate("/feed")
}

export const irParaFeedPostagem = (navigate, id) => {
    navigate(`/feed/${id}`)
}

export const irParaPost = (navigate) => {
    navigate("/post")
}

export const irParaPostComentario = (navigate, id) => {
    navigate(`/post/${id}`)
}