import { response } from 'express'

const getInfo = (req, res = response) => {
    res.send('Ivette Soto')
  }

  export default {
    getInfo,
  }