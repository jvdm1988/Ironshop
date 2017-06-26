const express = require("express");

const Products = require("../models/product-model.js");

const router = express.Router();


router.get("/products", (req, res, next) => {
  Products.find((err, productResults) => {
    if (err) {
      // use next() to skip to the ERROR PAGE
      next(err);
      return;
    }
    res.render("product-views/products-list-view.ejs", {
      productsAndStuff: productResults
    });
  });
});

module.exports = router;
