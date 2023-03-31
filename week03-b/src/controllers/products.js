const db = require('../models')
const Product = db.product

module.exports.getAllProduct = (req, res) => {
  /*  #swagger.description = 'Return a list of products for the Emergency Backpack.'
      #swagger.tags = ['Products']
  */
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
  /*  #swagger.description = 'Return a specific of products for the Emergency Backpack.'
      #swagger.tags = ['Products']
  */
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
  /*  #swagger.description = 'Create a product and store it in the database.'
      #swagger.tags = ['Products']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Create the product information for the emergency backpack and save them in the database.',
        schema: {
          $name: 'Paracetamol',
          $price: 1.5,
          $Count: '10 ct',
          $Type: 'Tablet',
          $Description: 'anti-pyratic',
          $Category: 'Medicine'
        }
      }
  */
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
  /*  #swagger.description = 'Update a product information and store it in the database.'
      #swagger.tags = ['Products']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Update and save DB product information for the Emergency Backpack.',
        schema: {
          $name: 'Paracetamol',
          $price: 1.5,
          $Count: '10 ct',
          $Type: 'Tablet',
          $Description: 'anti-pyratic',
          $Category: 'Medicine'
        }
      }
  */
  try {
    const Name = req.params.Name
    const product = {
      Name: req.body.Name,
      Price: req.body.Price,
      Type: req.body.Type,
      Count: req.body.Count,
      Description: req.body.Description,
      Category: req.body.Category
    }
    const response = await Product.replaceOne({ Name }, product)
    console.log(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      msg: err
    })
  }
}

module.exports.deleteProduct = async (req, res) => {
  /*  #swagger.description = 'Delete a product in the database.'
      #swagger.tags = ['Products']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Delete the product in the DB of the emergency backpack.',
        schema: {
          $name: 'Paracetamol',
          $price: 1.5,
          $Count: '10 ct',
          $Type: 'Tablet',
          $Description: 'anti-pyratic',
          $Category: 'Medicine'
        }
      }
  */
  try {
    const Name = req.params.Name
    if (!Name) {
      res.status(400).send({ message: 'Invalid productId Supplied' })
      return
    }

    const response = await Product.deleteOne({ Name })
    if (response.deletedCount !== 0) {
      res.status(200).send(Name + ' ' + 'has been deleted')
    }
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.')
  }
}
