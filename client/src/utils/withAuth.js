import SignIn from '../app/account/signin/page'
import { useAuth } from '@/hooks/useAuth'

const withAuth = (Component) => {
    const Auth = (props) => {
        const { user } = useAuth()
        if (!user) {
            return <SignIn />
        }

        return <Component {...props} />
    }

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps
    }

    return Auth
}

export default withAuth
