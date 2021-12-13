import React from "react";
import { useState } from "react/cjs/react.development";
import { Countries } from "../constants/Countries";
import { Base_Url } from "../constants/Base_Url";
import useRequestData from "../hooks/useRequestData";
import axios from "axios";
import Swal from "sweetalert2";
import useForm from "../hooks/useForm";
import { Header } from "./styles/HomePageStyle";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles/Button";
import { Container, Formulario } from "./styles/ApplicationFormPageStyle";



export default function ApplicationFormPage() {
    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [trip] = useRequestData(`${Base_Url}/trips`)
    const [tripId, setTripId] = useState("")


    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const mapCountries = Countries.map((country) => {
        return (
            <option value={country}>{country}</option>
        )
    })

    const mapId = trip && trip.map((trip) => {
        return (
            <option value={trip.id}>{trip.name}</option>
        )
    })

    const onChangeSelect = (event) => {
        setTripId(event.target.value)
    }

    const applyToTrip = (body) => {

        axios.post(`${Base_Url}/trips/${tripId}/apply`, body)
            .then((response) => {
                Swal.fire(
                    'Sucesso',
                    'Aplicação enviada!',
                    'success'
                )
                console.log("resposta positiva", response.data)
            }).catch((err) => {
                console.log(err.response.message, "resposta errada")
            })
    }

    const sendForm = (event) => {
        event.preventDefault()
        applyToTrip(form)
        cleanFields()

    }

    return (
        <Container>
            <Header>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={goToHomePage}>Home</Button>
                <h1>LabeX</h1>
            </Header>
            <h2>Formulário de Inscrição</h2>
            <Formulario onSubmit={sendForm}>
                <select
                    onChange={onChangeSelect}>
                    <option>Selecione um destino:</option>
                    {mapId}
                </select>
                <input
                    name="name"
                    value={form.name}
                    placeholder="Nome"
                    onChange={onChange}
                    required
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name="age"
                    value={form.age}
                    placeholder="Idade"
                    onChange={onChange}
                    type={"number"}
                    required
                    min={18}

                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    placeholder="Texto de Aplicação"
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto precisa ter no mínimo 30 caracteres"}

                />
                <input
                    name="profession"
                    value={form.profession}
                    placeholder="Profissão"
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão precisa ter no mínimo 10 caracteres"}

                />

                <select
                    onChange={onChange}
                    name="country"
                >
                    <option>
                        País:
                    </option>
                    {mapCountries}
                </select>
                <button >Enviar</button>
            </Formulario>
        </Container>
    )
}



