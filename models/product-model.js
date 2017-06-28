const mongoose = require ("mongoose");

// Link review-model.js to the product collection
const ReviewModel = require("./review-model.js");
const Schema = mongoose.Schema;

const myProductSchema = new Schema({
  name: { type: String },
  price: { type: Number, default: 1},
  imageUrl: { type: String, default: "/images/product.gif"},
  description: { type: String },


  // add a field inside of product documents called "reviews",
  // an Array of ReviewModel objects with content, stars and author.
  reviews: [ReviewModel.schema]
  //                       |
  // schema of the ReviewModel (different from the Schema var)
});

// model
// consructor function that allows us to interact with a single collection
const ProductModel = mongoose.model("Product", myProductSchema);

//collections name is automatically determined by Mongoose
//product -> products -> db.products.find()


module.exports = ProductModel;
