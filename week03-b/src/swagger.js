const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Emergency Backpack - API',
    description: 'Product Kit to obtain an emergency backpack: API'
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: [
    'http']
}
const outputFile = './swaggerDoc.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)
