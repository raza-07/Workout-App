import { useState } from "react"
import {useAuthContext} from "../hooks/useAuthContext"

export const useLogin =  ()=> {
    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async(email, password) => {
        setisLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()
        if (!response.ok){
            setisLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN',payload: json})
            setisLoading(false)
        }
    }
    return{login, error, isLoading}
}