const User = require('./schemas/user.js')

const findByEmail = async (email) => {
    return await User.findOne({ email })
}
const findByToken = async (token) => {
    return await User.findOne({ token })
}

const findById = async (id) => {
    return await User.findOne({ _id: id })
}

const create = async ({ email, password, firstName, lastName }) => {
    return await User.create({
        email,
        password,
        firstName,
        lastName,
    })
}

const updateToken = async (id, token) => {
    return await User.updateOne({ _id: id }, { token })
}

module.exports = {
    findByEmail,
    findByToken,
    findById,
    create,
    updateToken,
}
