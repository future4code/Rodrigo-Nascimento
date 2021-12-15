import { useEffect, useState } from "react";
import axios from "axios";

const useGet = (url) => {
    const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState("")

    useEffect(() => {
        // setIsLoading(true)
      
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                // setIsLoading(false)
                setData(res.data)
            }).catch((err) => {
                // setIsLoading(false)
                // setError(err)
                console.log(err.response, "resposta errada")

            })
    }, [url])

    return [data]
        // , isLoading, error]

}

export default useGet