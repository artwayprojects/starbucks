const User = require('./schemas/user.js')

const findByUsername = async (username) => {
    return await User.findOne({ username })
}
const findByToken = async (token) => {
    return await User.findOne({ token })
}

const findById = async (id) => {
    return await User.findOne({ _id: id })
}

const create = async ({ username, password, birthday }) => {
    return await User.create({
        username,
        password,
        birthday,
    })
}


const updateToken = async (id, token) => {
    return await User.updateOne({ _id: id }, { token })
}

module.exports = {
    findByUsername,
    findByToken,
    findById,
    create,
    updateToken,
}
