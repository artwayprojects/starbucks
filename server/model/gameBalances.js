const GameBalance = require('./schemas/gameBalance.js')

const update = async ({ gameId, userId, amount }) => {
    return await GameBalance.findOneAndUpdate(
        { userId, gameId },
        { amount },
        {
            new: true,
        }
    )
}

const findOrCreate = async ({ gameId, userId }) => {
    const args = { gameId, userId }

    try {
        const balanceFound = await GameBalance.findOne(args)

        if (balanceFound) {
            return balanceFound.amount
        } else {
            const balanceCreated = await GameBalance.create(args)
            return balanceCreated.amount
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    update,
    findOrCreate,
}
