'use client'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { IoLocationSharp } from 'react-icons/io5'
import Image from 'next/image'
import { useAuth } from '@/hooks/useAuth'

export default function NavBar() {
    const { logout, user } = useAuth()

    return (
        <Navbar expand="lg" className="bg-body-tertiary g-0">
            <Container>
                <Navbar.Brand href="/" className="nav-link__logo">
                    <Image
                        src="/starbucks.svg"
                        width="50"
                        height="50"
                        priority
                        alt="nv-image"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Menu</Nav.Link>
                        <Nav.Link href="#">Rewards</Nav.Link>
                        <Nav.Link href="#">Gift cards</Nav.Link>
                    </Nav>
                    {user ? (
                        <Nav>
                            <Nav.Link
                                href="#"
                                onClick={logout}
                                className="d-flex justify-content-center align-items-center find-store"
                            >
                                Log out
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link
                                href="#"
                                className="d-flex justify-content-center align-items-center find-store"
                            >
                                <IoLocationSharp className="location-icon me-2" />
                                Find store
                            </Nav.Link>

                            <Nav.Link href="/account/signin">
                                <Button className="btn btn-small btn-signin">
                                    Sign in
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="/account/create">
                                <Button className="btn btn-small btn-join">
                                    Join now
                                </Button>
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
