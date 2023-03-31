const express = require('express')
const router = express.Router()

router.get('/', require('./products'))
router.get('/', require('./kit'))
router.use('/', require('./swagger'))
router.use('/products', require('./products'))
router.use('/kits', require('./kit'))

module.exports = router
