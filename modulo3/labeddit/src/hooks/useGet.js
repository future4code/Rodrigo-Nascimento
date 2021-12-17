import { useEffect, useState } from "react";
import axios from "axios";

const useGet = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
      
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setIsLoading(false)
                console.log(res.data, "isso vem do get")
                setData(res.data)
            }).catch((err) => {
                setIsLoading(false)
                // setError(err)
                console.log(err.response, "resposta errada")

            })
    }, [url])

    return [data, isLoading]
        // , isLoading, error]

}

export default useGet