"use client"

import { createContext, useContext } from "react"

const defaultAuthentication = {
    loading: false,
    login: () => Promise.resolve(),
    user: null
}

const AuthenticationContext = createContext( defaultAuthentication )

export const AuthenticationProvider = ( { children } ) => {

    const authenticationValues = {

    }

    return (
        <AuthenticationContext.Provider value={ authenticationValues }>
            { children }
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext( AuthenticationContext )