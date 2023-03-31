const db = require('../models')
const Kit = db.kit

module.exports.getAllKit = (req, res) => {
  /*  #swagger.description = 'Creates a user account and stores it in the database. NOTE: Password and name will be authenticated using OpenIDConnect/Auth0. We will NOT store passwords in our database.'
      #swagger.tags = ['Product Kits']
  */
  try {
    Kit.find({})
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

module.exports.getSingleKit = (req, res) => {
  /*  #swagger.description = 'Creates a user account and stores it in the database. NOTE: Password and name will be authenticated using OpenIDConnect/Auth0. We will NOT store passwords in our database.'
      #swagger.tags = ['Product Kits']
  */
  try {
    const Name = req.params.Name
    Kit.find({ Name })
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

module.exports.createKit = async (req, res) => {
  /*  #swagger.description = 'Creates a list of product and store it in the database.'
      #swagger.tags = ['Product Kits']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'The user account information to add to the database.',
        schema: {
          $Name: 'One Person',
          $Content: {
            $product: [
              {
                $Lot: 5,
                $Name: "Paracetamol"
              },
              {
                $Lot: 5,
                $Name: "Ibuprofen"
              },
              {
                $Lot: 2,
                Name: "Bandages Medical"
              },
            ]
          },
          $TotalPrice: 538.75
        }
      }
    }
  */
  try {
    const kit = new Kit(req.body)
    kit
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

module.exports.updateKit = async (req, res) => {
  /*  #swagger.description = 'Update a product list in the database Kits.'
      #swagger.tags = ['Product Kits']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Update and save DB product list for the Emergency Backpack',
        schema: {
          $Name: 'One Person',
          $Content: {
            $product: [
              {
                $Lot: 5,
                $Name: "Paracetamol"
              },
              {
                $Lot: 5,
                $Name: "Ibuprofen"
              },
              {
                $Lot: 2,
                Name: "Bandages Medical"
              },
              {
            ]
          },
          $TotalPrice: 538.75
        }
      }
  */
  try {
    const kit = {
      Name: req.body.Name,
      Content: {
        product: [
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          },
          {
            Lot: req.body.Lot,
            Name: req.body.Name
          }
        ]
      },
      TotalPrice: req.body.TotalPrice
    }
    const response = await Kit.replaceOne(kit)
    console.log(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      msg: err
    })
  }
}

module.exports.deleteKit = async (req, res) => {
  /*  #swagger.description = 'Delete a product in the database.'
      #swagger.tags = ['Product Kits']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Delete the product in the DB of the emergency backpack.',
      }
  */
  try {
    const Name = req.params.Name
    if (!Name) {
      res.status(400).send({ message: 'Invalid Kit Name Supplied' })
      return
    }
    const response = await Kit.deleteOne({ Name })
    if (response.deletedCount !== 0) {
      res.status(200).send(Kit + ' ' + 'has been deleted')
    }
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.')
  }
}
