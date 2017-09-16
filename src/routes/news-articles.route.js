var express = require('express');
var ArticleSchema = require('../schema/newsarticles');
var router = express.Router();

/* GET articles page. */
router.get('/articles', function(req, res, next) {
    ArticleSchema.find({ name: 'CNN' }, function(err, articles) {
        if (err) throw err;
        res.json(articles);
    });
});

module.exports = router;