"use client"

import { createContext, useContext, useEffect, useState } from "react"

const defaultUser = {
    id: "",
    passwordExpired: "",
    role: "",
    setId: () => null,
    setPasswordExpired: () => null,
    setRole: () => null,
}

export const UserContext = createContext( defaultUser )  

export const UserProvider = ( { children } ) => {
    const [ id, setId ] = useState( () => { return typeof Window !== "undefined" ? localStorage.getItem( "id" ) : null } )
    const [ passwordExpired, setPasswordExpired ] = useState( () => { return typeof Window !== "undefined" ? localStorage.getItem( "password_expired" ) : null } )
    const [ role, setRole ] = useState( () => { return typeof Window !== "undefined" ? localStorage.getItem( "role" ) : null } )

    const userValues = {
        id,
        setId: ( value ) => {
            setId( value )
            localStorage.setItem( "id", value )
        },
        passwordExpired,
        setPasswordExpired: ( value ) => {
            setPasswordExpired( value )
            localStorage.setItem( "password_expired", value )
        },
        role,
        setRole: ( value ) => {
            setRole( value )
            localStorage.setItem( "role", value )
        }
    }
    
    return (
        <UserContext.Provider value={ userValues }>
            { children }
        </UserContext.Provider>
    )
}