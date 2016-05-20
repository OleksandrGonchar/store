var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function (req, res, next) {
    fs.readFile('/example/index.html', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        res.send(data);
    });
});
module.exports = router;