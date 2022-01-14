const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catchAsync = require('../utils/catchAsync');

const reviewSchema = new Schema({
    body: String,
    rating: Number,
});


module.exports = mongoose.model("Review", reviewSchema);