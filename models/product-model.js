const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const myProductSchema = new Schema({
  name: { type: String },
  price: { type: Number, default: 1},
  imageURL: { type: String, default: "/images/product.gif"},
  description: { type: String }
});

const ProductModel = mongoose.model("Product", myProductSchema);

//collections name is automatically determined by Mongoose
//product -> products -> db.products.find()


module.exports = ProductModel;
