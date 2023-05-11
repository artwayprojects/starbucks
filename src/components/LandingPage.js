import { Image, Row, Col } from 'react-bootstrap'

import { getAllGames } from '../fakeAPI'
import { GAME_IMAGE_THUMB_URL } from '../casinoSettings'
import ROUTES from '../routes'

export default function LandingPage(props) {
    const games = getAllGames()

    return (
        <div>
            <h1 className="text-center mb-5">
                Take you chance to win 1000000${' '}
            </h1>

            <Row className="d-flex justify-content-between flex-wrap">
                {games.map(({ name, src }) => {
                    return (
                        <Col
                            sm={3}
                            key={name}
                            className="d-flex flex-column mb-4"
                        >
                            <Image src={GAME_IMAGE_THUMB_URL} />
                            <a
                                className="text-center text-dark"
                                href={ROUTES.GAME}
                            >
                                {name}
                            </a>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
