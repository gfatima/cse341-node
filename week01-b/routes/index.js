const express = require('express');
const router = express.Router();

router.get('/', require('./contacts'))
router.use('/contacts', require('./contacts'))

module.exports = router;