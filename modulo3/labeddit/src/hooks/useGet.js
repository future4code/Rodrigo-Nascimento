import { useEffect, useState } from "react";
import axios from "axios";

const useGet = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)



    const getPostagens = () => {
        setIsLoading(true)

        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setIsLoading(false)
             
                setData(res.data)
            })
            .catch((err) => {
                setIsLoading(false)
                alert("Ocorreu um erro :(")

            })
    }

    useEffect(() => {
        getPostagens()
    }, [url])


    return [data, getPostagens, isLoading]

}

export default useGet