import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../componentes/Header/Header";
import PaginaCadastro from "../paginas/PaginaCadastro/PaginaCadastro";
import PaginaErro from "../paginas/PaginaErro/PaginaErro";
import PaginaFeed from "../paginas/PaginaFeed/PaginaFeed";
import PaginaFeedPostagem from "../paginas/PaginaFeedPostagem/PaginaFeedPostagem";
import PaginaLogin from "../paginas/PaginaLogin/PaginaLogin";
import PaginaPost from "../paginas/PaginaPost/PaginaPost";
import PaginaPostComentario from "../paginas/PaginaPostComentario/PaginaPostComentario";

const Rotas = () => {
    return (

        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<PaginaLogin/>} />
                <Route path="/cadastro" element={<PaginaCadastro/>} />
                <Route path="/feed" element={<PaginaFeed/>} />
                <Route path="/feed/:id" element={<PaginaFeedPostagem/>} />
                <Route path="/post" element={<PaginaPost/>} />
                <Route path="/post/:id" element={<PaginaPostComentario/>} />
                <Route path="*" element={<PaginaErro/>} />
                
            </Routes>
        </Router>

    )
}


export default Rotas