import React from "react";
import galaxia from "../pages/home/img/galaxia.jpg"
import { Header, HomePageStyle } from "./styles/HomePageStyle";
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { Button } from "./styles/Button";

export default function HomePage() {

    // const login = () =>{

    //     Swal.fire({
    //         title: 'Login Admin',
    //         html: `<input type="text" id="login" class="swal2-input" placeholder="Usuário">
    //         <input type="password" id="password" class="swal2-input" placeholder="Senha">`,
    //         confirmButtonText: 'Entrar',
    //         focusConfirm: false,
    //         preConfirm: () => {
    //           const login = Swal.getPopup().querySelector('#login').value
    //           const password = Swal.getPopup().querySelector('#password').value
    //           if (!login || !password) {
    //             Swal.showValidationMessage(`Confira o usuário ou a senha :(`)
    //           }
    //           return { login: login, password: password }
    //         }
    //       }).then((result) => {
    //         Swal.fire(`
    //           Login: ${result.value.login}
    //           Password: ${result.value.password}
    //         `.trim())
    //       })

    // }

    const navigate = useNavigate()

    const goToTripsPage = () => {
        navigate("/trips/list")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }

    const goToHomePage = () => {
        navigate("/")

    }
    return (
        <HomePageStyle>
            <Header>
                <Button onClick={goToTripsPage}>
                    Ver Viagens
                </Button>
                <Button className="botão-home" onClick={goToHomePage}>
                    LabeX
                </Button>
                <Button onClick={goToLoginPage}>
                    Login
                </Button>
            </Header>
            <img src={galaxia} />
        </HomePageStyle>
        
    )
}