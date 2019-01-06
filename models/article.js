const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, require: true },
  date: { type: Date, default: Date.now },
  url: { type: String, required: true },
  articleId: { type: String, require: true }
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
