const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const myProductSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  imageURL: { type: String },
  description: { type: String }
});

const Product = mongoos.model("Product", myProductSchema);

//collections name is automatically determined by Mongoose
//product -> products -> db.products.find()


module.exports = Products;
