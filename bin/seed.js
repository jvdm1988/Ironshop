// SEED FILE
// is a Javascript file that saves things to your
// database when you run it
// Makes onboarding easier and it allows you to recreate
// the old data in your DB after you delete things

const Product = require ("../models/product-model.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ironshop");

const productInfoArray = [
  {
    name: "Phone Case",
    price: 9.99,
    imageUrl: "https://www.amazon.co.uk/Cases-Covers-Mobile-Phone-Accessories-Phones/b?node=340321031",
    description:"Protects your phone."
  },
  {
    name: "Bean Bag",
    price: 25,
    imageUrl: "https://media2.giphy.com/media/xUA7b7qKc7hZbMU4GA/200_s.gif#2-grid1",
    description:"Very comfortable, you can fall on it."
  },
  {
    name: "Tissues",
    price: 13.70,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51HhSQ1nxrL._AC_US436_FMwebp_QL65_.jpg",
    description:"Capture all debris from any nostrill."
  }
];

Product.create(
  productInfoArray,           //1st arg = array of product info objects
  (err, productResults) => {  //2nd arg = callback!
      if (err) {
        console.log ("OMG! Database error.");
        return;
      }
      productResults.forEach((oneProd) => {
        console.log("New Product! " + oneProd.name);
      });
  }
);
