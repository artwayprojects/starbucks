const express = require('express')
const router = express.Router()

const guard = require('../../helpers/guard')
const { findOrCreate, update } = require('../../controllers/gameBalances')

router.post('/', guard, findOrCreate)
router.put('/', guard, update)

module.exports = router
