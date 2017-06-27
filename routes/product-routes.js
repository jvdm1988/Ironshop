const express = require("express");

const ProductModel = require("../models/product-model.js");

const router = express.Router();


router.get("/products", (req, res, next) => {
  ProductModel.find((err, productResults) => {
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

// STEP #1 of form submission for creating a new product
router.get("/products/new", (req, res, next) =>  {
  res.render("product-views/new-product-view.ejs");
});

// STEP #2 of form submission for a new product-views
router.post("/products", (req, res, next) => {
  const theProduct = new ProductModel({
  name: req.body.productName,
  price: req.body.productPrice,
  imageUrl: req.body.productImageUrl,
  description: req.body.productDescription
});

theProduct.save((err) => {
  if (err) {
    next (err);
    return;
  }
  //STEP #3 of form submission for a new product
  // if succesfully, redirect to a URL
  res.redirect("/products");
  // redirect is to get away from form page. this to avoid
  // its being refreshed and duplicate the data .
});
});

module.exports = router;
