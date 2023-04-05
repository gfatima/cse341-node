const dbConfig = require('../db/connect')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.kit = require('./kit.js')(mongoose)
db.product = require('./products.js')(mongoose)
db.User = require('./User.js')(mongoose)

module.exports = db
