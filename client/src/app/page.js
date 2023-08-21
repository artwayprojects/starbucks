'use client'
import { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'
import Banners from '@/components/Banners'
import { useAxios } from '@/hooks/useAxios'

export default function Home() {
    const [banners, setBanners] = useState([])
    const [loading, setLoading] = useState(true)
    const axios = useAxios()

    useEffect(() => {
        const getBanners = async () => {
            return await axios.get('/banners')
        }

        getBanners()
            .then(({ data }) => {
                setBanners(data.data.banners)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return 'Loading...'
    }
    
    return (
        <Container>
            <Banners banners={banners} />
        </Container>
    )
}
