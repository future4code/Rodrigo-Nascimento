import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import { Base_Url } from "../constants/Base_Url";
import { useState } from "react";
import TripDetailsPage from "./TripDetailsPage"
import { useNavigate } from "react-router-dom"
import { Header } from "./styles/HomePageStyle";
import { Button } from "./styles/Button";

export default function AdminHomePage() {
    const [trip] = useRequestData(`${Base_Url}/trips`)
    const [id, setId] = useState("")

    useProtectedPage()

    const navigate = useNavigate()

    const goToAdminCreatePage = () => {
        navigate("/admin/trips/create")
    }

    const mapId = trip && trip.map((trip) => {

        return (
            <div key={trip.id} onClick={() => setId(trip.id)}>
                {trip.name}
                <TripDetailsPage id={trip.id} trip={trip} />
            </div>
        )
    })

    return (
        <div>
            <Header>
                <Button onClick={() => navigate(-1)}>
                    Voltar
                </Button>
                <Button onClick={goToAdminCreatePage}>
                    Criar Viagem
                </Button>
                <h1> LabeX</h1>
            </Header>
            <h2>Painel administrativo</h2>
            <div>
                {mapId}
            </div>
        </div>

    )
}