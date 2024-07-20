const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    comments: [],
    title: { type: String, required: true},
    commentcount: { type: Number, default: 0}
  });

module.exports = BookSchema;