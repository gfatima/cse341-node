const db = require('../models')
const Kit = db.kit

module.exports.getAllKit = (req, res) => {
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
  const Name = req.params.Name
  try {
    Kit.findOne({ Name }, function (_err, Kit) {
      Kit.Name = req.params.Name
      Kit.Content = req.body.Content[
        {
          Lot: req.params.Lot,
          Name: req.params.Name
        }
      ]
      Kit.KitPrice = req.body.KitPrice
      Kit.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the Kir Name.')
        } else {
          res.status(204).send()
        }
      })
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports.deleteKit = async (req, res) => {
  try {
    const Name = req.params.Name
    if (!Name) {
      res.status(400).send({ message: 'Invalid Kit Name Supplied' })
      return
    }
    Kit.deleteOne({ Name }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the Kit Name.')
      } else {
        res.status(204).send(result)
      }
    })
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the Kit Name.')
  }
}
