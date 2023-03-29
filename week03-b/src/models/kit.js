module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    Name: {
      type: String
    },
    Content: [
      {
        Lot: Number,
        Name: String
      }
    ],
    Price: {
      Type: Number
    }
  })

  return mongoose.model('kit', userSchema)
}
