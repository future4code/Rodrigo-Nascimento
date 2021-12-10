import React, { useEffect, useState } from "react";
import Slider from "./slides/Slider";
import { SliderData } from "./slides/SliderData";
import { Header } from "./styles/HomePageStyle";
import { useNavigate } from "react-router-dom"
import { Cards, Div, Div2 } from "./styles/ListTripsPageStyle";
import { Button } from "./styles/Button";
import axios from "axios";
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
            <Div key={trip.id}>
                <Cards>
                    <p>{trip.name}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <p>Data: {trip.date}</p>
                </Cards>
            </Div>
        )
    })

    return (
        <div>
            <Header>
                <Button>Voltar</Button>
                <Button onClick={goToHomePage}>LabeX</Button>
                <Button onClick={goToApplicationFormPage}>Inscreva-se</Button>
            </Header>
            <Slider slides={SliderData} />
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro</p>}
            {!isLoading && trip && trip.length > 0 && mapedTrip}
            {!isLoading && trip && trip.length === 0 && <p>Sem viagens :(</p>}
        </div>
    )
}
        

