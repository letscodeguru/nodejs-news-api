// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var articleSchema = new Schema({
    author: String,
    url: { type: String, required: true, unique: true },
    description: String,
    urlToImage: String,
    publishedAt: Date,
    category: String,
    title: String,
    name: String,
    content: String
});

// the schema is useless so far
// we need to create a model using it
var articles = mongoose.model('newsarticles', articleSchema);

// make this available to our users in our Node applications
module.exports = articles;