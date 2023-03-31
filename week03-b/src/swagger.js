const swaggerAutogen = require('swagger-autogen')()

const doc = {
  openapi: '2.0.0',
  info: {
    title: 'Emergency Backpack API',
    description: 'Suggestions for getting an emergency backpack.'
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: [
    'http'],
  tags: [
    {
      name: 'Emergency Backpack'
    }
  ]

}
const outputFile = './swaggerDoc.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)
