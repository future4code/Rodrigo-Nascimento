import React from "react";
import galaxia from "../pages/home/img/galaxia.jpg"
import { Header, HomePageStyle } from "./styles/HomePageStyle";
import { useNavigate } from "react-router-dom"
import { Button } from "./styles/Button";

export default function HomePage() {

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
                <h1  onClick={goToHomePage}>
                    LabeX
                </h1>
                <Button onClick={goToLoginPage}>
                    Login
                </Button>
            </Header>
            <img src={galaxia} />
        </HomePageStyle>
        
    )
}