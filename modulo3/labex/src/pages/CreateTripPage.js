import React from "react";
import { useNavigate } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm"
import { Planets } from "../constants/Planets"
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { Base_Url } from "../constants/Base_Url";
import Swal from "sweetalert2";
import { header } from "../constants/Base_Url";

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    useProtectedPage()

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
                console.log(err.response, "resposta errada")
            })
        }

    const sendForm = (event) => {
        event.preventDefault()
        createTrip(form)
        cleanFields()

    }

    return (
        <div>
            <form onSubmit={sendForm}>
                <input
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                />
                <select
                    onChange={onChange}
                    name="planet"
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
                />
                <input
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                />

                <input
                    name="durationInDays"
                    placeholder="Duração da viagem"
                    type={"number"}
                    value={form.durationInDays}
                    onChange={onChange}
                    min="50"
                />

                <button>criar</button>

            </form>
            CreateTripPage

            <button>voltar</button>
        </div>
    )
}