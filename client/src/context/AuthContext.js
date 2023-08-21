'use client'
import { createContext, useState } from 'react'

const user = null
const setUser = () => {}

export const AuthContext = createContext({
    user,
    setUser,
})

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
