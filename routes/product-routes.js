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

router.get("/products/details", (req, res, next) => {
ProductModel.findById(
  req.query.myId,
  (err, productFromDb) => {
    if (err) {
      next (err);
      return;
    }
      res.locals.productDetails = productFromDb;
    res.render("product-views/product-details-view.ejs");
    }
  );
});
//STEP #1 of form submission for UPDATING a product
router.get("/products/edit", (req, res, next) => {
  ProductModel.findById(
    req.query.myId,
    (err, productFromDb) => {
      if (err) {
        next(err);
        return;
      }
      res.locals.productDetails = productFromDb;
      res.render("product-views/edit-product-view.ejs");
    }
  );
});

//STEP #1 of form submission for UPDATING a product
router.post("/products/update", (req, res, next) => {
  ProductModel.findByIdAndUpdate (
    req.query.myId,     //1st arg -> id of document to update
    {                   //2nd arg -> object of fields to update
      name: req.body.productName,
      price: req.body.productPrice,
      imageUrl: req.body.productImageUrl,
      description: req.body.productDescription,
    },
    (err, productFromDb) => {   //3rd arg -> callback
      if (err) {
        next(err);
        return;
      }
      res.redirect("/products/details?myId=" + productFromDb._id);

    }
  );
});


module.exports = router;
