module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    Name: {
      type: String
    },
    Price: {
      type: Number
    },
    Count: {
      type: String
    },
    Type: {
      type: String
    },
    Description: {
      type: String
    },
    Category: {
      type: String

    }
  }, { versionKey: false, autoIndex: false })

  return mongoose.model('products', userSchema)
}
