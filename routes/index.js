let router = require("express").Router();
let user = require("./user_routes");
let product = require("./product_routes");
router.use("/users", user);
router.use("/products", product);
router.get("/router", (req, res) => {
  res.send("This is router default url");
});

module.exports = router;
