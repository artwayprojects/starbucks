// import { useContext } from 'react'
'use client'
import NavBar from '@/components/NavBar'
import { AuthContextProvider } from '@/context/AuthContext'

import './globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <AuthContextProvider>
                    <NavBar />

                    {children}
                </AuthContextProvider>
            </body>
        </html>
    )
}
