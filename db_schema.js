const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
  });

const CommentSchema = new Schema({
    comments: [],
    _id: { type: String, required: true},
    title: { type: String, required: true},
    commentcount: { type: Number, required: true}
})

module.exports = IssueSchema;