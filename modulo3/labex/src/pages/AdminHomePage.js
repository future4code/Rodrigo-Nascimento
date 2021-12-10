import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import { Base_Url } from "../constants/Base_Url";
import { useState } from "react";
import {header} from "../constants/Base_Url"
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminHomePage() {
    const [trip] = useRequestData(`${Base_Url}/trips`)
    const [id, setId] = useState("")

    useProtectedPage()

    const deleteTrip = () => {
       
        axios.delete(`${Base_Url}/trips/${id}`, header)
            .then((response) => {
                Swal.fire(
                    'Sucesso',
                    'Viagem deletada!',
                    'success'
                  )
                console.log("resposta positiva", response.data)
            }).catch((err) => {
                console.log(err.response.message, "resposta errada")
            })
        }

    const mapId = trip && trip.map((trip) => {
        
        return (
            <div key={trip.id} onClick={() => setId(trip.id)}>
                {trip.name}
                <button onClick={deleteTrip}>deletar</button>
                {console.log("id no map", id)}
            </div>
        )
    })

    console.log(id, "id id id")

    
    return (
        <div>
            Painel administrativo
            <button>
                voltar
            </button>
            <button>
                criar viagem
            </button>
            <button>
                logout
            </button>
            <div>
                trips
                <div>   
                    {mapId}            
                </div>      
            </div>
        </div>
    )
}