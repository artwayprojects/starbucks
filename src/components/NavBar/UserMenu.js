import Navbar from 'react-bootstrap/Navbar'

import { UsersDB, User } from '../../fakeAPI'

export default function UserMenu() {
    const username = UsersDB.getCurrentUser()
    
    const handleSignOut = () => {
        User.signOut()
    }

    return (
        <>
            <Navbar.Text className="me-2">Hi, {username}</Navbar.Text>
            <Navbar.Text className="me-2">
                <a href="/games-library">Your games</a>
            </Navbar.Text>
            <Navbar.Text>
                <a href="/" onClick={handleSignOut}>
                    Logout
                </a>
            </Navbar.Text>
        </>
    )
}
