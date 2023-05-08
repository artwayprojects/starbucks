import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes'

/**
 * Routes that are restricted for logged in users (landing page for example).
 * @param {JSX.Element[]} children
 * @param {string} redirectTo
 * @param {boolean} restricted
 * @returns  {JSX.Element}
 */
export default function PublicRoute({
    children,
    redirectTo = ROUTES.LANDING_PAGE,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = true // use selector from state
    const shouldRedirect = restricted && isLoggedIn

    return shouldRedirect ? <Navigate to={redirectTo} /> : children
}
