import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, InputGroup, Form, Button } from 'react-bootstrap'

import { getGamesByName, getAllGames } from '../fakeAPI'
import {
    DEFAULT_GAMES_PER_PAGE,
    GAME_IMAGE_THUMB_URL,
} from '../casinoSettings'

export default function GamesLibrary() {
    const [gamesMaxCount, setGamesMaxCount] = useState(DEFAULT_GAMES_PER_PAGE)
    const [games, setGames] = useState([])
    const [searchValue, setSearchValue] = useState()
    const visibleGames = games.slice(0, gamesMaxCount)
    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const handleLoadMore = () => {
        setGamesMaxCount(16)
    }

    useEffect(() => {
        const games = getGamesByName(searchValue)

        setGames(games)
    }, [searchValue])

    useEffect(() => {
        setGames(getAllGames())
    }, [])

    return (
        <>
            <InputGroup className="mb-5">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Search game
                </InputGroup.Text>
                <Form.Control
                    onChange={handleSearch}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

            <Row className="d-flex justify-content-between flex-wrap">
                {visibleGames.map(({ name, id, balance }) => {
                    return (
                        <Col sm={3} key={name} className=" mb-4">
                            <Link
                                to={`/game/${id}`}
                                className="text-center fw-bold display-5 text-dark d-flex flex-column"
                            >
                                <Image
                                    src={GAME_IMAGE_THUMB_URL}
                                    className="mb-2"
                                />

                                <p className="text-center">{name}</p>
                            </Link>
                        </Col>
                    )
                })}
            </Row>

            {games.length > visibleGames.length && (
                <Button variant="dark" onClick={handleLoadMore}>
                    Load more...
                </Button>
            )}
        </>
    )
}
