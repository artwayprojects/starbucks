const express = require('express')
const router = express.Router()

const guard = require('../../helpers/guard')
const { signUp, logIn, logOut, currentUser } = require('../../controllers/auth')

router.post('/signup', signUp)
router.post('/login', logIn)
router.post('/logout', guard, logOut)
router.get('/user', guard, currentUser)

module.exports = router