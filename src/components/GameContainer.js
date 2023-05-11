import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Figure,
    Container,
    Row,
    Col,
    Button,
    Stack,
    Alert,
} from 'react-bootstrap'

import { getGameById } from '../fakeAPI'
import { DEFAULT_GAME_BALANCE, GAME_IMAGE_URL } from '../casinoSettings'

export default function GameContainer() {
    const [alert, setAlert] = useState(false)
    const [gameBalance, setGameBalance] = useState(DEFAULT_GAME_BALANCE)
    const { id } = useParams()
    const currentGame = getGameById(id)

    const handlePageRefresh = () => {
        window.location.reload(false)
    }
    const handleBet = (e) => {
        const betAmount = Number(e.target.innerText.split(' $')[0])
        const betWon = Math.random() < 0.5
        const predictedBalance = betWon
            ? gameBalance + betAmount * 2
            : gameBalance - betAmount

        if (betWon) {
            setGameBalance(predictedBalance)
            setAlert(
                <Alert
                    variant="success"
                    onClose={() => setAlert(false)}
                    dismissible
                >
                    <Alert.Heading className="text-center">
                        &#128512; You won {predictedBalance}$
                    </Alert.Heading>
                </Alert>
            )
        }

        if (!betWon && predictedBalance > 0) {
            setGameBalance(gameBalance - betAmount)

            setAlert(
                <Alert
                    variant="danger"
                    onClose={() => setAlert(false)}
                    dismissible
                >
                    <Alert.Heading className="text-center">
                        &#128531; You lost ${betAmount}
                    </Alert.Heading>
                </Alert>
            )
        }

        if (!betWon && predictedBalance < 0) {
            setGameBalance(gameBalance - betAmount)

            setAlert(
                <Alert
                    variant="danger"
                    onClose={() => setAlert(false)}
                    dismissible
                >
                    <Alert.Heading className="text-center">
                        You balance is less then 0, please{' '}
                        <button onClick={handlePageRefresh}>refresh</button> the
                        page
                    </Alert.Heading>
                </Alert>
            )
        }
    }

    return (
        <Container className="p-0 pb-5">
            {alert}
            <Row>
                <Col className="text-center mb-3">
                    <h1>{currentGame.name}</h1>
                    <p>{currentGame.description}</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12} className="d-flex justify-content-center">
                    <Figure.Image
                        src={GAME_IMAGE_URL}
                    />
                </Col>
            </Row>
            <Row>
                <Col
                    sm={4}
                    className="d-flex align-items-center justify-content-center fw-bold fs-2"
                >
                    Balance: {gameBalance}$
                </Col>
                <Col sm={8}>
                    <Stack gap={3} direction="horizontal" className="ms-5">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={handleBet}
                        >
                            1 $
                        </Button>
                        <Button variant="info" size="lg" onClick={handleBet}>
                            3 $
                        </Button>
                        <Button variant="warning" size="lg" onClick={handleBet}>
                            5 $
                        </Button>
                        <Button variant="danger" size="lg" onClick={handleBet}>
                            10 $
                        </Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}
