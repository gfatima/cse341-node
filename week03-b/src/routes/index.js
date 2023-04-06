const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middelware/auth')

const Idea = require('../models/Idea')


// @desc Login/Landing page
// @route GET/
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login'
  })
})

// @desc Dashboard
// @route GET/Dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      ideas
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }

})

//router.use('/', require('./auth'))
router.use('/', require('./swagger'))

router.use('/products', require('./products'))
router.use('/kit', require('./kit'))

module.exports = router
