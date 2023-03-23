const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts: Souls of Magic API'
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: [
    'http']
}
const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)
