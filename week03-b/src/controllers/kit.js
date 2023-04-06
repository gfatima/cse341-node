const db = require('../models')
const Kit = db.kit

module.exports.getAllKit = (req, res) => {
  /*  #swagger.description = 'Return a Kit of products'
      #swagger.tags = ['Kit of Products-Emergency Backpack, per number of persons']
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
  /*  #swagger.description = 'Return a Specific Kit of products.'
      #swagger.tags = ['Kit of Products-Emergency Backpack, per number of persons']
  */
  try {
    const nameKit = req.params.NameKit
    Kit.find({ nameKit })
      .then((data) => {
        res.status(200).send(data)
        if (!nameKit) {
          res.status(400).send({ message: 'Invalid productId Supplied' })
        }
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
      #swagger.tags = ['Kit of Products-Emergency Backpack, per number of persons']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'The user account information to add to the database.',
        schema: {    
          "OnePerson": {
            "NameKit": "One-Person",
            "product1": "Paracetamol x 1u",
            "product2": "Ibuprofen x 1u",
            "product3": "Bandages Medical x 1u",
            "product4": "Isopropyl Alcohol 70% x 1u",
            "product5": "Diclofenac Gel 1% x 1u",
            "product6": "KN95 Face Masks x 1u",
            "product7": "Adhesive Tape Medical x 1u",
            "product8": "Canned tuna in oil x 1u",
            "product9": "Cookies x 1u",
            "product10": "Chocolates x 1u",
            "product11": "Legumes x 1u",
            "product12": "Warm Clothing x 1u",
            "product13": "Blankets x 1u",
            "product14": "Hat and Gloves Set x 1u",
            "product15": "Water bottles x 1u",
            "product16": "Battery Operated Radio x 1u",
            "product17": "Portable Charger x 1u",
            "product18": "Lanterns x 1u",
            "product19": "Wet Toilet Wipes x 1u",
            "product20": "Toilet Paper x 1u",
            "product21": "Backpack x 1u",
            "TotalPrice": 538.75
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
      #swagger.tags = ['Kit of Products-Emergency Backpack, per number of persons']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Update and save DB product list for the Emergency Backpack',
        schema: {
          "OnePerson": {
            "NameKit": "One-Person",
            "product1": "Paracetamol x 1u",
            "product2": "Ibuprofen x 1u",
            "product3": "Bandages Medical x 1u",
            "product4": "Isopropyl Alcohol 70% x 1u",
            "product5": "Diclofenac Gel 1% x 1u",
            "product6": "KN95 Face Masks x 1u",
            "product7": "Adhesive Tape Medical x 1u",
            "product8": "Canned tuna in oil x 1u",
            "product9": "Cookies x 1u",
            "product10": "Chocolates x 1u",
            "product11": "Legumes x 1u",
            "product12": "Warm Clothing x 1u",
            "product13": "Blankets x 1u",
            "product14": "Hat and Gloves Set x 1u",
            "product15": "Water bottles x 1u",
            "product16": "Battery Operated Radio x 1u",
            "product17": "Portable Charger x 1u",
            "product18": "Lanterns x 1u",
            "product19": "Wet Toilet Wipes x 1u",
            "product20": "Toilet Paper x 1u",
            "product21": "Backpack x 1u",
            "TotalPrice": 538.75
          }
        }
  }

*/
  try {
    const nameKit = req.params.NameKit

    const kit = {
      NameKit: req.body.NameKit,
      Content: [
        {
          NameKit: req.body.NameKit,
          product1: req.body.product1,
          product2: req.body.product2,
          product3: req.body.product3,
          product4: req.body.product4,
          product5: req.body.product5,
          product6: req.body.product6,
          product7: req.body.product7,
          product8: req.body.product8,
          product9: req.body.product9,
          product10: req.body.product10,
          product11: req.body.product11,
          product12: req.body.product12,
          product13: req.body.product13,
          product14: req.body.product14,
          product15: req.body.product15,
          product16: req.body.product16,
          product17: req.body.product17,
          product18: req.body.product18,
          product19: req.body.product19,
          product20: req.body.product20,
          product21: req.body.product21
        }
      ],
      TotalPrice: req.body.TotalPrice
    }

    if (!nameKit) {
      res.status(400).send({ message: 'Invalid Name kit Supplied' })
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
      #swagger.tags = ['Kit of Products-Emergency Backpack, per number of persons']
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Delete the product in the DB of the emergency backpack.',
      }
  */
  try {
    const NameKit = req.params.NameKit
    if (!NameKit) {
      res.status(400).send({ message: 'Invalid Kit Name Supplied' })
      return
    }
    
    const response = await Kit.deleteOne({ NameKit })
    if (response.deletedCount !== 0) {
      res.status(200).send(NameKit + ' ' + 'has been deleted')
    }
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.')
  }
}
