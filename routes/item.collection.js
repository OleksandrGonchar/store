var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/item', function(req, res, next) {
    res.send('you need item');
});

module.exports = router;
