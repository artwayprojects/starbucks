import { Navigate } from 'react-router-dom'

import ROUTES from '../../routes'
import { UsersDB } from '../../fakeAPI'

export default function PublicRoute({
    children,
    redirectTo = ROUTES.GAMES_LIBRARY,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = UsersDB.getCurrentUser()
    const shouldRedirect = restricted && isLoggedIn

    return shouldRedirect ? <Navigate to={redirectTo} /> : children
}

