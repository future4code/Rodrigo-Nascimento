import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";

export default function CreateTripPage (){

    useProtectedPage()

    return(
        <div>
            CreateTripPage
        </div>
    )
}