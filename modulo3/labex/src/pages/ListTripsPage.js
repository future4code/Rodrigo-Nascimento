import React, { useEffect, useState } from "react";
import Slider from "./slides/Slider";
import { SliderData } from "./slides/SliderData";
import { Header } from "./styles/HomePageStyle";
import { useNavigate } from "react-router-dom"
import { Cards, DivCards, Background } from "./styles/ListTripsPageStyle";
import { Button } from "./styles/Button";
import useRequestData from "../hooks/useRequestData";
import { Base_Url } from "../constants/Base_Url";

export default function ListTripsPage() {
 
    const [trip, isLoading, error] = useRequestData(`${Base_Url}/trips`)

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    const mapedTrip = trip && trip.map((trip) => {
        return (
            <DivCards key={trip.id}>
                <Cards>
                    <p className="título">Nome: {trip.name}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <p>Data: {trip.date}</p>
                </Cards>
            </DivCards>
        )
    })

    return (
        <Background>
            <Header>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={goToApplicationFormPage}>Inscreva-se</Button>
                <h1 onClick={goToHomePage}>LabeX</h1>
            </Header>
            <Slider slides={SliderData} />
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && trip && trip.length > 0 && mapedTrip}
            {!isLoading && trip && trip.length === 0 && <p>Sem viagens :(</p>}
        </Background>
    )
}
        

