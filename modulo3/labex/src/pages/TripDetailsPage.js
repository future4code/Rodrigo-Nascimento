import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Base_Url, header } from "../constants/Base_Url";
import Swal from "sweetalert2";
import { ContainerTripDetails } from "./styles/TripDetailsPageStyle";
import { Button } from "./styles/Button";


export default function TripDetailsPage(props) {

    const [details, setDetails] = useState({})
    const [tripId, setTripId] = useState("")
    const [candidateId, setCandidateId] = useState({})

    useProtectedPage()

    const navigate = useNavigate()

 
    const deleteTrip = () => {
        axios.delete(`${Base_Url}/trips/${props.id}`, header)
            .then((response) => {
                Swal.fire(
                    'Sucesso',
                    'Viagem deletada!',
                    'success'
                )
            }).catch((err) => {
            })
    }

    const getTripDetail = () => {
        axios.get(`${Base_Url}/trip/${props.id}`, header)
            .then((response) => {
                setDetails(response.data.trip)
                setTripId(response.data.trip.id)
                setCandidateId(response.data.trip.candidates)
            }).catch((err) => {
            })
    }

    // const decideCandidate = () => {
    //     axios.put(`${Base_Url}/trips/${tripId}/${candidateId}/decide`, header)
    //         .then((response) => {
    //             console.log(response.data)
    //         }).catch((err) => {
    //             console.log(err.response)
    //         })
    // }

    const detailsMap = [details].map((data) =>{
        return(
            <div key={data.id}>
               <p>Descrição: {data.description}</p> 
               <p>Data: {data.date}</p> 
               <p>Planeta: {data.planet}</p> 
               <p>Duração: {data.durationInDays}</p> 
               {/* <p>Candidatos: {data.candidates}</p>  */}
            </div>
        )
    })

    return (
        
        <div>      
            <ContainerTripDetails>
            {detailsMap}  
            </ContainerTripDetails>
            <Button onClick={getTripDetail}>Detalhes</Button>
            <Button onClick={deleteTrip}>Deletar</Button>
            {/* <button onClick={decideCandidate}>Candidatos</button> */}
        </div>
    )
}