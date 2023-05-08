// import selector
// import
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes'

/**
 * Renders a Route if the user is logged in,
 * otherwise redirects to the landing page.
 * @param {JSX.Element[]} children
 *
 * @returns  {JSX.Element}
 */
export default function PrivateRoute({
    children,
    redirectTo = ROUTES.LANDING_PAGE,
    ...routeProps
}) {
    const isLoggedIn = true // use selector from state

    return isLoggedIn ? children : <Navigate to={redirectTo} />
}
