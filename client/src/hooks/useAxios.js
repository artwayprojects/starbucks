'use client'
import axios from 'axios'
import { useUser } from './useUser'

axios.defaults.baseURL =
    'https://starbucks-demo-server-751aaf2e06d7.herokuapp.com/'

export function useAxios() {
    const { user } = useUser()

    return axios.create({
        headers: {
            Authorization: `Bearer ${user?.token}`,
        },
    })
}
