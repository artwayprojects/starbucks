const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const { Schema, model, SchemaTypes } = mongoose

const gameBalanceSchema = new Schema(
    {
        userId: {
            type: SchemaTypes.ObjectId,
            ref: 'user',
        },
        amount: {
            type: Number,
            default: 100
        },
        gameId: {
            type: String,
        },
    },
    { versionKey: false, timestamps: true }
)

const GameBalance = model('gameBalance', gameBalanceSchema)

module.exports = GameBalance
