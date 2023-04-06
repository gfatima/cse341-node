module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    NameKit: String,
    Content: [
      {
        product1: String,
        product2: String,
        product3: String,
        product4: String,
        product5: String,
        product6: String,
        product7: String,
        product8: String,
        product9: String,
        product10: String,
        product11: String,
        product12: String,
        product13: String,
        product14: String,
        product15: String,
        product16: String,
        product17: String,
        product18: String,
        product19: String,
        product20: String,
        product21: String
      }
    ],
    TotalPrice: {
      type: Number
    }
  }, { versionKey: false, autoIndex: false })


  return mongoose.model('kits', userSchema)
}
