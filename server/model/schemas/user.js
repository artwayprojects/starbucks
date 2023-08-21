const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose

const SALT_WORK_FACTOR = 8

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Email required'],
        },
        password: {
            type: String,
            required: [true, 'Password required'],
        },
        firstName: {
            type: String,
            default: 'none',
        },
        lastName: {
            type: String,
            default: 'none',
        },
        token: {
            type: String,
        },
    },
    { versionKey: false, timestamps: true }
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
    this.password = await bcrypt.hash(this.password, salt, null)
    next()
})

userSchema.methods.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = model('user', userSchema)

module.exports = User
