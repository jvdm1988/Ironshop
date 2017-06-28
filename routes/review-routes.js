const express = require ("express");

const ProductModel = require("../models/product-model.js");

const router = express.Router();

// ROUTE #1 -> display the form to create a new reviewSchema
router.get("/products/:productId/reviews/new", (req, res, next) => {

  ProductModel.findById(
    req.params.productId,
    (err, productFromDb) => {
      if (err) {
      next(err);
      return;
    }
    res.locals.productDetails = productFromDb;
    res.render("review-views/new-review-form.ejs");

    // Is the same as:

    // res.render("review-views/new-review-form.ejs");
    //   productDetails: productFromDb
});
});

// ROUTE #2 -> receive that form submission and do database stuff


module.exports = router;
