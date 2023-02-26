import { response } from 'express'

const getInfo = (req, res = response) => {
    res.send('Alirio Mieres')
  }

  export default {
    getInfo,
  }