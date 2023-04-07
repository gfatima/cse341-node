const swaggerAutogen = require('swagger-autogen')()

const doc = {
  openapi: '2.0.0',
  info: {
    title: 'Emergency Backpack API',
    description: 'Suggestions for getting an emergency backpack.',
    contact: {
      name: 'Ivette Soto Valdivia',
      email: 'fati_soto@byui.edu',
      url: "http://www.isotovaldivia.com"
    }
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: [
    'http',
    'https'],
  tags: [
    {
      name: 'Product for the Emergency Backpack',
      description: 'Here is a list of essential products for an emergency backpack to be prepared for any natural or man-made disaster.'
    },
    {
      name: 'Kit of Products-Emergency Backpack, per number of persons',
      description: 'Here is the quantity of products calculated by the number of people to obtain an emergency backpack.'
    }
  ]

}
const outputFile = './swaggerDoc.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)
