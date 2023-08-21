'use client'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext)

    const addUser = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const removeUser = () => {
        setUser(null)
        localStorage.setItem('user', '')
    }

    return { user, addUser, removeUser }
}
