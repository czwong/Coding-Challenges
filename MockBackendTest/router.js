const router = require("express").Router();
const controllers = require("./controller");

router.route("/products").get(controllers.getProduct);

module.exports = router;
