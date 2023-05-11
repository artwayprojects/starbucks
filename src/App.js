import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Container from 'react-bootstrap/Container'

import PrivateRoute from './components/Router/PrivateRoute'
import PublicRoute from './components/Router/PublicRoute'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import Loader from './Loader'
import bgImage from './assets/bg.png'
import ROUTES from './routes'

import 'bootstrap/dist/css/bootstrap.css'

const GameContainer = lazy(() =>
    import(
        './components/GameContainer' /* webpackChunkName: "GameContainer`" */
    )
)

const GamesLibrary = lazy(() =>
    import('./components/GamesLibrary' /* webpackChunkName: "GamesLibrary" */)
)

export default function App() {
    return (
        <div className="body-bg" style={{ backgroundImage: `url(${bgImage})` }}>
            <Container>
                <NavBar />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route
                            path={ROUTES.LANDING_PAGE}
                            element={withPublicRoute(<LandingPage />, {
                                restricted: true,
                            })}
                        />

                        <Route
                            path={ROUTES.GAMES_LIBRARY}
                            element={withPrivateRoute(<GamesLibrary />)}
                        />
                        <Route
                            path={ROUTES.GAME}
                            element={withPrivateRoute(<GameContainer />)}
                        />
                    </Routes>
                </Suspense>
            </Container>
        </div>
    )
}

function withPrivateRoute(children, routeProps = {}) {
    return <PrivateRoute {...routeProps}>{children}</PrivateRoute>
}

function withPublicRoute(children, routeProps = {}) {
    return <PublicRoute {...routeProps}>{children}</PublicRoute>
}
