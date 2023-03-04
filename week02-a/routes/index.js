const express = require("express");
const router = express.Router();

/* HOME */
router.get("/", require("./contacts"));

/* Products Test */
router.use("/contacts", require("./contacts"));

module.exports = router;
