const express = require('express')
const router = express.Router()

// @desc Login/Landing page
// @route GET/
router.get('/', (req, res) => {
  res.render('login', {
    layout: 'login'
  })
})

// @desc Dashboard
// @route GET/Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

router.use('/', require('./auth'))
router.use('/', require('./swagger'))

router.use('/products', require('./products'))
router.use('/kit', require('./kit'))

module.exports = router
