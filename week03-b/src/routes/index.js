const express = require('express')
const router = express.Router()

// router.get('/', require('./products'))
router.use('/', require('./swagger'))
router.use('/products', require('./products'))
router.use('/kit', require('./kit'))

module.exports = router
