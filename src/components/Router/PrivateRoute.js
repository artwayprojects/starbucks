import { Navigate } from 'react-router-dom'

import ROUTES from '../../routes'
import { UsersDB } from '../../fakeAPI'

export default function PrivateRoute({
    children,
    redirectTo = ROUTES.LANDING_PAGE,
    ...routeProps
}) {
    const isLoggedIn = UsersDB.getCurrentUser()

    return isLoggedIn ? children : <Navigate to={redirectTo} />
}
