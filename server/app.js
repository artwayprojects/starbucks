const express = require('express')
const cors = require('cors')
const { httpCode } = require('./helpers/constants')

const authRouter = require('./routes/api/auth')
const bannerRouter = require('./routes/api/banner')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/banners', bannerRouter)

app.use((req, res) => {
    res.status(httpCode.NOT_FOUND).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
    res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: err.message })
})

module.exports = app
