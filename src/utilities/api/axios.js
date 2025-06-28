// axios
import Axios from "axios"

export const axios = Axios.create( {
    accept: "application/json",
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true
} )