const express = require('express');
const router = express.Router();

router.use('./index', require('./index'))

module.exports = router;