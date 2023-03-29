const express = require('express')
const router = express.Router()

const KitController = require('../controllers/Kit')

router.get('/', KitController.getAllKit)

router.get('/:id', KitController.getSingleKit)

router.post('/', KitController.createKit)

router.put('/:id', KitController.updateKit)

router.delete('/:id', KitController.deleteKit)

module.exports = router
