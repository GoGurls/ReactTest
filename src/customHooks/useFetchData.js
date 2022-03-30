import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useFetchData (url) {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios ({
            url: `https://newsapp-phase3.herokuapp.com/${url}`,
            method: "GET",
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then(({data}) =>{
            console.log(data)
            console.log(loading, "ini loading")
            setData(data)
        })
        .catch(err => setError(err))
        .finally(_ => setLoading(false))
    }, [])
     return [data, loading, error, setData]
}