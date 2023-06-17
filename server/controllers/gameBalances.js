const GameBalance = require('../model/gameBalances')
const { httpCode } = require('../helpers/constants')

const findOrCreate = async (req, res) => {
    try {
        const id = req.user.id

        const balance = await GameBalance.findOrCreate({
            userId: id,
        })

        res.status(httpCode.OK).json({
            status: 'success',
            code: httpCode.OK,
            data: {
                balance,
            },
        })
    } catch (error) {
        res.status(httpCode.BAD_REQUEST).json({
            message: 'Some error happened. Try again.',
        })
    }
}

const update = async (req, res) => {
    try {
        const userId = req.user.id
        const { amount } = req.body
        const balance = await GameBalance.update({
            userId,
            amount,
        })

        res.status(httpCode.OK).json({
            status: 'success',
            code: httpCode.OK,
            data: {
                balance,
            },
        })
    } catch (error) {
        res.status(httpCode.BAD_REQUEST).json({
            message: 'Some error happened. Try again.',
        })
    }
}

module.exports = {
    findOrCreate,
    update,
}
