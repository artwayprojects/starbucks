const Banners = require('../model/banners')
const { httpCode } = require('../helpers/constants')

const create = async (req, res) => {
    try {
        const { banner } = req.body
        const bannerCreated = await Banners.create(banner)

        return res.status(httpCode.CREATED).json({
            status: 'success',
            code: httpCode.CREATED,
            data: {
                banner: bannerCreated,
            },
        })
    } catch (e) {
        res.status(httpCode.BAD_REQUEST).json({
            message: 'Some error happened. Try again.',
        })
    }
}

const list = async (req, res) => {
    const banners = await Banners.list()

    return res.status(httpCode.OK).json({
        status: httpCode.OK,
        data: {
            banners,
        },
    })
}

module.exports = { create, list }
