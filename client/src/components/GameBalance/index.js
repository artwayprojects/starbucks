import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'

import { getGameBalance } from '../../api'

import Loader from '../common/Loader'
import coin from '../../assets/coin.png'

export default function GameBalance({ gameId }) {
    const [gameBalance, setGameBalance] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const balance = await getGameBalance(gameId)
            setGameBalance(balance)
        }

        fetchData().catch(console.error)
    }, [gameId])

    return gameBalance ? (
        <p>
            <Image src={coin} /> {gameBalance}
        </p>
    ) : (
        <Loader size="sm" />
    )
}
