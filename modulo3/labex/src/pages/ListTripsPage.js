import React, { useState } from "react";
import Slider from "./slides/Slider";
import { SliderData } from "./slides/SliderData";
import { Header } from "./styles/HomePageStyle";
import { useNavigate } from "react-router-dom"
import { Cards, Div } from "./styles/ListTripsPageStyle";
import { Button } from "./styles/Button";



export default function ListTripsPage() {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

        return (
            <div>
                
                <Header>
                    <Button>Voltar</Button>
                    <Button onClick={goToHomePage}>LabeX</Button>
                    <Button></Button>
                </Header>
                <Slider slides={SliderData} />
                <Div>
                <Cards className="card">
                    <p>Nome</p>
                    <p>Descrição</p>
                    <p>Planeta</p>
                    <p>Duração</p>
                    <p>Data</p>
                </Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                <Cards className="card">.</Cards>
                </Div>
                
                
            </div>
        )
    }


