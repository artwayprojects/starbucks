const db = require('./model/db.js')
const PORT = process.env.PORT || 3001
const app = require('./app')

require('dotenv').config()

db.then(() => {
    app.listen(PORT, (req, res) => {
        console.log(`Server listening on port ${PORT}`)
    })
}).catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`)
    process.exit(1)
})
