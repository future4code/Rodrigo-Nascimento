import { useEffect, useState } from "react";
import axios from "axios";

const usePost = (body, clear) => {
    // const [data, setData] = useState(undefined)
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState("")

    // useEffect(() => {
    //     setIsLoading(true)
    //     console.log(data, "o que é data")

        axios.post()
            .then((response) => {
                // setIsLoading(false)
                console.log("resposta positiva", response.data)
                // setData(response.data.trips)
            }).catch((err) => {
                // setIsLoading(false)
                // setError(err)
                console.log(err.response, "resposta errada")

            })
    // }, [url])

    // return [data, isLoading, error]

}

export default usePost