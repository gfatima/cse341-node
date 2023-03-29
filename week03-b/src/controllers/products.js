const db = require('../models')
const Product = db.product

module.exports.getAllProduct = (req, res) => {
  try {
    Product.find({})
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the user.'
        })
      })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.getSingleProduct = (req, res) => {
  try {
    const Name = req.params.Name
    Product.find({ Name })
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        })
      })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.createProduct = (req, res) => {
  try {
    const product = new Product(req.body)
    product
      .save()
      .then((data) => {
        console.log(data)
        res.status(201).send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the user.'
        })
      })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.updateProduct = async (req, res) => {
  const Name = req.params.Name
  try {
    Product.findOne({ Name }, function (_err, product) {
      product.Name = req.params.Name
      product.Price = req.body.Price
      product.Count = req.body.Count
      product.Type = req.body.Type
      product.Description = req.body.Description
      product.Category = req.body.Category
      product.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the contact.')
        } else {
          res.status(204).send()
        }
      })
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.deleteProduct = async (req, res) => {
  try {
    const Name = req.params.Name
    if (!Name) {
      res.status(400).send({ message: 'Invalid productId Supplied' })
      return
    }
    Product.deleteOne({ Name }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the contact.')
      } else {
        res.status(204).send(result)
      }
    })
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.')
  }
}
