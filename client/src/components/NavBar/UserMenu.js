import Navbar from 'react-bootstrap/Navbar'

import { signOut } from '../../api'
import GameBalance from '../GameBalance'

export default function UserMenu() {
    const username = JSON.parse(sessionStorage.getItem('currentUser'))?.username

    const handleSignOut = async (e) => {
        e.preventDefault()
        await signOut()
    }

    return (
        <>
            <Navbar.Text className="me-2">Hi, {username}</Navbar.Text>
            <Navbar.Text className="me-2">
                <GameBalance />
            </Navbar.Text>
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
