module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    Name: {
      type: String
    },
    Content: {
      products: [
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        },
        {
          Lot: Number,
          Name: String
        }
      ]
    },
    KitPrice: {
      type: Number
    }
  }, { versionKey: false, autoIndex: false })

  return mongoose.model('kits', userSchema)
}
