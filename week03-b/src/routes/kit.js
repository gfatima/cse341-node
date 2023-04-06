const express = require('express')
const router = express.Router()

const KitController = require('../controllers/kit')

router.get('/', KitController.getAllKit)

router.get('/:NameKit', KitController.getSingleKit)

router.post('/', KitController.createKit)

router.put('/:NameKit', KitController.updateKit)

router.delete('/:NameKit', KitController.deleteKit)

module.exports = router
