const express = require('express')
const router = express.Router()

const guard = require('../../helpers/guard')
const { create, list } = require('../../controllers/banners')

router.post('/', guard, create)
router.get('/', list)

module.exports = router
