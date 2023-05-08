import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import PrivateRoute from './components/routes/PrivateRoute'
import PublicRoute from './components/routes/PublicRoute'
import LandingPage from './components/LandingPage'

import ROUTES from './routes'

const GameContainer = lazy(() =>
    import('./components/GameContainer' /* webpackChunkName: "GameContainer" */)
)

const GamesLibrary = lazy(() =>
    import('./components/GamesLibrary' /* webpackChunkName: "GamesLibrary" */)
)

export default function App(props) {
    return (
        <Suspense fallback="loading...">
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
                    path={ROUTES.GAME_CONTAINER}
                    element={withPrivateRoute(<GameContainer />)}
                />
            </Routes>
        </Suspense>
    )
}

function withPrivateRoute(children, routeProps = {}) {
    return <PrivateRoute {...routeProps}>{children}</PrivateRoute>
}

function withPublicRoute(children, routeProps = {}) {
    return <PublicRoute {...routeProps}>{children}</PublicRoute>
}
