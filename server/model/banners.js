const Banner = require('./schemas/banner.js')

const list = async () => {
    return await await Banner.find({}).sort({
        createdAt: -1,
    })
}

const create = async ({
    bannerText,
    bannerHeading,
    bannerButtonText,
    imageUrl,
    bannerBackgroundColor,
    bannerTextRightPosition,
}) => {
    return await Banner.create({
        bannerText,
        bannerHeading,
        bannerButtonText,
        imageUrl,
        bannerBackgroundColor,
        bannerTextRightPosition,
    })
}

module.exports = {
    list,
    create,
}
