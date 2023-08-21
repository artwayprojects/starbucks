import Image from 'next/image'

export default function PasswordVisibilityIcon ({
    showPassword,
    setShowPassword,
}) {
    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <>
            {showPassword ? (
                <Image
                    src="/PasswordVisible.svg"
                    width="24"
                    height="24"
                    alt="password visible"
                    onClick={toggleShowPassword}
                />
            ) : (
                <Image
                    src={'/PasswordHidden.svg'}
                    width="24"
                    height="24"
                    alt="password visible"
                    onClick={toggleShowPassword}
                />
            )}
        </>
    )
}
