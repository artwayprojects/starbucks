import Image from 'next/image'
import PasswordVisible from '../../public/PasswordVisible.svg'
import PasswordHidden from '../../public/PasswordHidden.svg'
export default function PasswordVisibilityIcon ({
    showPassword,
    setShowPassword,
}) {
    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <>
            {showPassword ? (
                <Image
                    src={PasswordVisible}
                    width="24"
                    height="24"
                    alt="password visible"
                    onClick={toggleShowPassword}
                />
            ) : (
                <Image
                    src={PasswordHidden}
                    width="24"
                    height="24"
                    alt="password visible"
                    onClick={toggleShowPassword}
                />
            )}
        </>
    )
}
