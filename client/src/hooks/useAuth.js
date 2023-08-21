'use client'
import { useEffect } from 'react'
import { useUser } from './useUser'
import { useAxios } from './useAxios'
import { useRouter } from 'next/navigation'

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser()
    const { push } = useRouter()
    const axios = useAxios()

    useEffect(() => {
        const user = localStorage.getItem('user')

        if (user) {
            addUser(JSON.parse(user))
        }
    }, [])

    const signup = async (user) => {
        try {
            const response = await axios.post('auth/signup', user)
            addUser(response.data.data)

            alert('Successfully registered!')

            push('/admin/dashboard')
        } catch (error) {
            const beError = error.response?.data.message
            if (beError) {
                alert(beError)
            } else {
                console.error(error)
            }
        }
    }

    const login = async (user) => {
        try {
            const response = await axios.post('auth/login', user)
            addUser(response.data.data)

            alert('Successfully logged in!')

            push('/admin/dashboard')
        } catch (error) {
            const beError = error.response?.data.message
            if (beError) {
                alert(beError)
            } else {
                console.error(error)
            }
        }
    }

    const logout = () => {
        removeUser()
    }

    return { user, login, logout, signup }
}
