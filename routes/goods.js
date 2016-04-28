var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/*DB part*/
mongoose.connect('mongodb://localhost/cdp');

var shema = mongoose.Schema({
  "eser": String,
  "id": Number
});

var User = mongoose.model("user", shema);
var jhon = new User({
  "eser": "not user",
  "id": 0
});
jhon.save(function (err, model) {
  if (err) console.log(err);
  User.find(function (err, users) {
    if (err) console.log(err);
    else console.log(users);
  })
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  User.findOne({id : req.params.id},function (err, users) {
    if (err) console.log(err);
    else {
      res.type('json');
      res.send(users);
    }
  })
});
router.get('/', function(req, res, errorLogger) {
  User.find(function (err, users) {
    if (err) console.log(err);
    else {
      res.type('json');
      res.send(users);
    }
  })
});
function errorLogger(e){
  console.log(e);
}

module.exports = router;
