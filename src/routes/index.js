const { Router } = require("express");
const { getInfo } = require("../controllers/index").default;

const router = Router();

router.get("/", getInfo);

module.exports = router;