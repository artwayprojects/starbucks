import { BiShow, BiHide } from 'react-icons/bi'

export default function PasswordVisibilityIcon({
    showPassword,
    setShowPassword,
}) {
    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <>
            {showPassword ? (
                <BiShow size="2.5em" onClick={toggleShowPassword} />
            ) : (
                <BiHide size="2.5em" onClick={toggleShowPassword} />
            )}
        </>
    )
}
