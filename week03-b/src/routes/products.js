const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

router.get('/', productsController.getAllProduct)

router.get('/:Name', productsController.getSingleProduct)

router.post('/', productsController.createProduct)

router.put('/:Name', productsController.updateProduct)

router.delete('/:Name', productsController.deleteProduct)

module.exports = router
