import React, { useMemo } from "react";
import { useState } from "react/cjs/react.development";
import { Countries } from "../constants/Countries";
import { Base_Url } from "../constants/Base_Url";
import useRequestData from "../hooks/useRequestData";


import useForm from "../hooks/useForm";


export default function ApplicationFormPage() {
    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", trip: "" })

    const [trip] = useRequestData(`${Base_Url}/trips`)
  

    const mapCountries = Countries.map((country) => {
        return (
            <option value={country}>{country}</option>
        )
    })

    const mapId = trip && trip.map((trip) =>{
        return(
            <option value={trip.id}>{trip.name}</option>
        )
    })


    const sendForm = (event) => {
        event.preventDefault()
        console.log("enviando", form)
        cleanFields()

    }

    return (
        <div>
            ApplicationFormPage
            <form onSubmit={sendForm}>
                <select
                    onChange={onChange}
                    name="trip"

                >
                    <option>Selecione uma opção</option>
                    {mapId}
                </select>
                <input
                    name="name"
                    value={form.name}
                    placeholder="Nome"
                    onChange={onChange}
                    // required
                    // pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name="age"
                    value={form.age}
                    placeholder="Idade"
                    onChange={onChange}
                    type={"number"}
                    // required
                    min={18}

                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    placeholder="Texto de Aplicação"
                    onChange={onChange}
                    // required
                    // pattern={"^.{30,}$"}
                    title={"O texto precisa ter no mínimo 30 caracteres"}

                />
                <input
                    name="profession"
                    value={form.profession}
                    placeholder="Profissão"
                    onChange={onChange}
                    // required
                    // pattern={"^.{10,}$"}
                    title={"A profissão precisa ter no mínimo 10 caracteres"}

                />

                <select
                    onChange={onChange}
                    name="country"
                >
                    {mapCountries}
                </select>
                <button >Enviar</button>
        
            </form>

        </div>


    )
}



