let product = require("express").Router();
product.get("/all", (req, res) => {
  res.send("This is all product page");
});
module.exports = product;
