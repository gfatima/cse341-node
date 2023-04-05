module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    NameKit: {
      type: String
    },
    product1: {
      Name: String
    },
    product2: {
      Name: String
    },
    product3: {
      Name: String
    },
    product4: {
      Name: String
    },
    product5: {
      Name: String
    },
    product6: {
      Name: String
    },
    product7: {
      Name: String
    },
    product8: {
      Name: String
    },
    product9: {
      Name: String
    },
    product10: {
      Name: String
    },
    product11: {
      Name: String
    },
    product12: {
      Name: String
    },
    product13: {
      Name: String
    },
    product14: {
      Name: String
    },
    product15: {
      Name: String
    },
    product16: {
      Name: String
    },
    product17: {
      Name: String
    },
    product18: {
      Name: String
    },
    product19: {
      Name: String
    },
    product20: {
      Name: String
    },
    product21: {
      Name: String
    },
    TotalPrice: {
      type: Number
    }
  }, { versionKey: false, autoIndex: false })

  return mongoose.model('kits', userSchema)
}
