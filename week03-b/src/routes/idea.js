const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middelware/auth')

const Idea = require('../models/Idea')

// @desc    Show add page
// @route   GET /ideas/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('ideas/add')
})

// @desc    Process add form
// @route   POST /ideas
router.post('/', ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id
    await Idea.create(req.body)
    res.redirect('/dashboard')
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show all ideas
// @route   GET /ideas
router.get('/', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({ status: 'public' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()

    res.render('ideas/index', {
      ideas,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show single story
// @route   GET /ideas/:id
router.get('/:id', ensureAuth, async (req, res) => {
  try {
    let idea = await Idea.findById(req.params.id).populate('user').lean()

    if (!idea) {
      return res.render('error/404')
    }

    if (idea.user._id != req.user.id && idea.status == 'private') {
      res.render('error/404')
    } else {
      res.render('ideas/show', {
        idea,
      })
    }
  } catch (err) {
    console.error(err)
    res.render('error/404')
  }
})

// @desc    Show edit page
// @route   GET /ideas/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
  try {
    const idea = await Idea.findOne({
      _id: req.params.id,
    }).lean()

    if (!idea) {
      return res.render('error/404')
    }

    if (idea.user != req.user.id) {
      res.redirect('/ideas')
    } else {
      res.render('ideas/edit', {
        idea,
      })
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Update idea
// @route   PUT /ideas/:id
router.put('/:id', ensureAuth, async (req, res) => {
  try {
    let idea = await Idea.findById(req.params.id).lean()

    if (!idea) {
      return res.render('error/404')
    }

    if (idea.user != req.user.id) {
      res.redirect('/ideas')
    } else {
      idea = await Idea.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })

      res.redirect('/dashboard')
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Delete idea
// @route   DELETE /ideas/:id
router.delete('/:id', ensureAuth, async (req, res) => {
  try {
    let idea = await Idea.findById(req.params.id).lean()

    if (!idea) {
      return res.render('error/404')
    }

    if (idea.user != req.user.id) {
      res.redirect('/ideas')
    } else {
      await Idea.remove({ _id: req.params.id })
      res.redirect('/dashboard')
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    User ideas
// @route   GET /ideas/user/:userId
router.get('/user/:userId', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({
      user: req.params.userId,
      status: 'public',
    })
      .populate('user')
      .lean()

    res.render('ideas/index', {
      ideas,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

//@desc Search ideas by title
//@route GET /ideas/search/:query
router.get('/search/:query', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({ title: new RegExp(req.query.query, 'i'), status: 'public' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()
    res.render('ideas/index', { ideas })
  } catch (err) {
    console.log(err)
    res.render('error/404')
  }
})

// @desc    Show all NameKit
// @route   GET /NameKit
router.get('/', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({ NameKit: 'One-Person' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()

    res.render('ideas/index', {
      ideas,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show all NameKit
// @route   GET /NameKit
router.get('/', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({ NameKit: 'Two-Person' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()

    res.render('ideas/index', {
      ideas,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show all NameKit
// @route   GET /NameKit
router.get('/', ensureAuth, async (req, res) => {
  try {
    const ideas = await Idea.find({ NameKit: 'Four-Person' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()

    res.render('ideas/index', {
      ideas,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})


module.exports = router