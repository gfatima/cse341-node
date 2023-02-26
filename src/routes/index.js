const { Router } = require("express");
const { getInfo } = require("../controllers/index");

const router = Router();

router.get("/", getInfo);

module.exports = router;