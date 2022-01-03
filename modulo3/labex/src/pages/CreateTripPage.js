import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm"
import { Planets } from "../constants/Planets"
import axios from "axios";
import { Base_Url } from "../constants/Base_Url";
import Swal from "sweetalert2";
import { header } from "../constants/Base_Url";
import { useNavigate } from "react-router-dom";
import { Formulario } from "./styles/ApplicationFormPageStyle";
import { Header } from "./styles/HomePageStyle";
import { Button } from "./styles/Button";
import { ContainerLogin } from "./styles/LoginPageStyle";

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    useProtectedPage()

    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }

    const mapPlanets = Planets.map((planet) => {
        return (
            <option value={planet}>{planet}</option>
        )
    })

    const createTrip = (body) => {

        axios.post(`${Base_Url}/trips`, body, header)
            .then((response) => {
                Swal.fire(
                    'Sucesso',
                    'Aplicação enviada!',
                    'success'
                )
                console.log("resposta positiva", response.data)
            }).catch((err) => {
            })
    }

    const sendForm = (event) => {
        event.preventDefault()
        createTrip(form)
        cleanFields()

    }

    return (
        <ContainerLogin>
            <Header>
                <Button onClick={() => navigate(-1)}>
                    Voltar
                </Button>
                <Button onClick={goToAdminHomePage}>
                    Página Administrativa
                </Button>
                <h1>LabeX</h1>
            </Header>
            <Formulario onSubmit={sendForm}>
                <h2>
                    Criar novas viagens
                </h2>
                <input
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome deve ter no mínimo 5 letras"}
                    required
                />
                <select
                    onChange={onChange}
                    name="planet"
                    required
                >
                    <option >
                        Selecione um planeta
                    </option>
                    {mapPlanets}
                    
                </select>

                <input
                    name="date"
                    type={"date"}
                    min="2022-01-05"
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"A descrição deve ter no mínimo 30 letras"}
                />

                <input
                    name="durationInDays"
                    placeholder="Duração da viagem"
                    type={"number"}
                    value={form.durationInDays}
                    onChange={onChange}
                    min="50"
                    required
                />

                <button>Criar</button>
            </Formulario>
        </ContainerLogin>
    )
}