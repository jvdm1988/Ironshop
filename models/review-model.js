const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
 content: {type: String, default: "Amazing. 5/5. Would buy again."},
 stars: {type: Number, default: 5},
 author: {type: String},
});


const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;


// We would like the reviews to be a part of the product collections
// because this info would go together.
// See product-model on how to link review-model to product collections
