const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        bannerText: {
            type: String,
            required: [true, 'bannerText is required'],
        },
        bannerHeading: {
            type: String,
            required: [true, 'bannerHeading is required'],
        },
        bannerButtonText: {
            type: String,
            required: [true, 'bannerButtonText is required'],
        },
        bannerBackgroundColor: {
            type: String,
            required: [true, 'bannerBackgroundColor is required'],
        },

        imageUrl: {
            type: String,
            required: [true, 'imageUrl is required'],
        },
        bannerTextRightPosition: {
            type: Boolean,
            required: [true, 'bannerTextRightPosition is required'],
        },
    },
    { versionKey: false, timestamps: true }
)

const Banner = model('banner', userSchema)

module.exports = Banner
