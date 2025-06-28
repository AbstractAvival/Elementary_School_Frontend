"use client"

// react imports
import { createContext, useContext, useState, useEffect } from "react"

// axios
import { axios } from "/utilities/api/axios"

// contexts
import { UserContext } from "/components/contexts/UserContext"

const defaultAuthentication = {
    loading: false,
    login: () => Promise.resolve(),
    logout: () => null,
    user: null
}

const AuthenticationContext = createContext( defaultAuthentication )

export const AuthenticationProvider = ( { children } ) => {
    const [ loading, setLoading ] = useState( false )
    const [ loggedIn, setLoggedIn ] = useState( false )
    const [ user, setUser ] = useState( defaultAuthentication.user )

    const { 
        passwordExpired, 
        setPasswordExpired, 
        id, 
        setId, 
        role, 
        setRole 
    } = useContext( UserContext )

    useEffect( () => {
        if( id && role ) {
            setUser( {
                id: id,
                passwordExpired: "N",
                role: role
            } )
        }
    }, [] )

    const login = async ( { setErrors, setError, ...params } ) => {

    }

    const logout = () => {}

    const authenticationValues = {
        loading,
        login,
        logout,
        user
    }

    return (
        <AuthenticationContext.Provider value={ authenticationValues }>
            { children }
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext( AuthenticationContext )