const jwt = require('jsonwebtoken')

const Users = require('../model/users')
const { httpCode } = require('../helpers/constants')

const SECRET_KEY = process.env.JWT_SECRET

const signUp = async (req, res) => {
    try {
        const { email } = req.body
        const currentUser = await Users.findByEmail(email)
        if (currentUser) {
            return res.status(httpCode.CONFLICT).json({
                status: 'error',
                code: httpCode.CONFLICT,
                data: 'Conflict',
                message: 'Email in use',
            })
        }

        const newUser = await Users.create(req.body)
        const id = newUser.id
        const payload = { id }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' })
        await Users.updateToken(id, token)
        return res.status(httpCode.CREATED).json({
            status: 'success',
            code: httpCode.CREATED,
            data: {
                username: newUser.username,
                token,
            },
        })
    } catch (e) {
        res.status(httpCode.BAD_REQUEST).json({
            message: 'Some error happened. Try again.',
        })
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findByEmail(email)
        const validPassword = await user.validPassword(password)

        if (!user || !validPassword) {
            return res.status(httpCode.UNAUTHORIZED).json({
                status: 'error',
                code: httpCode.UNAUTHORIZED,
                message: 'Username or password is wrong',
            })
        }

        const id = user._id
        const payload = { id }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' })

        await Users.updateToken(id, token)

        res.status(httpCode.OK).json({
            status: 'success',
            code: httpCode.OK,
            data: {
                token,
                username: user.username,
            },
        })
    } catch (e) {
        res.status(httpCode.UNAUTHORIZED).json({
            message: 'Username or password is wrong',
        })
    }
}

const logOut = async (req, res) => {
    const id = req.user.id
    await Users.updateToken(id, null)
    return res.status(httpCode.NO_CONTENT).json({ message: 'Nothing' })
}

const currentUser = async (req, res) => {
    const token = req.user.id
    const { username } = await Users.findByToken(token)

    return res.status(httpCode.OK).json({
        status: httpCode.OK,
        data: {
            username,
            token,
        },
    })
}

module.exports = { signUp, logIn, logOut, currentUser }
