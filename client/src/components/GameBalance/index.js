import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'

import { getGameBalance } from '../../api'

import Loader from '../common/Loader'
import coin from '../../assets/coin.png'

export default function GameBalance() {
    const [gameBalance, setGameBalance] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const balance = await getGameBalance()
            setGameBalance(balance)
        }

        fetchData().catch(console.error)
    }, [])

    return gameBalance ? (
        <p className='mb-0 d-flex justify-content-center align-items-center'>
            <Image src={coin} width="30" height="30" /> {gameBalance}
        </p>
    ) : (
        <Loader size="sm" />
    )
}
