"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var collection;
/*= [
 {
 "name": "1 first item",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
 }, {
 "name": "2 second item",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
 }, {
 "name": "3 second third",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Harum inventore neque repellendus!"
 },
 {
 "name": "4 first item",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
 }, {
 "name": "5 second item",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
 }, {
 "name": "6 second third",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Harum inventore neque repellendus!"
 },
 {
 "name": "7 first item",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
 }, {
 "name": "8 second item",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
 }, {
 "name": "9 second third",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Harum inventore neque repellendus!"
 }, {
 "name": "10 second fourth",
 "href": "https://dummyimage.com/600x400/023/f0f.jpg",
 "description": "Doloribus illo magnam minima?"
 }
 ];
 */

/*DB part*/
   mongoose.connect('mongodb://localhost/cdp');

    mongoose.connection.on("open", function(ref) {
        return console.log("SUCCESS: Connected to mongo server!");
    });

    mongoose.connection.on("error", function(err) {
        console.log("ERROR: Could not connect to mongo server!");
        return console.log(err.message);
    });

    var shema = mongoose.Schema({
        "href": String,
        "name": String,
        "description": String
    });

    var Goods = mongoose.model("user", shema),
        newItemCollection;
    if (collection) {
        for (var i = 0, len = collection.length; i < len; i++) {
            var b = collection[i];
            newItemCollection = new Goods({
                "href": b.href,
                "name": b.name,
                "description": b.description
            });
            newItemCollection.save(function (err, shema) {
                if (err) console.log(err);
                Goods.find(function (err, users) {
                    if (err) console.log(err);
                    else console.log(users);
                })
            });
        }
    }

    /* GET users listing. */
    router.get('/:id', function (req, res, next) {
        Goods.findOne(req.params.id, function (err, users) {
            if (err) {
                console.log("Errror");
                res.type('json');
                res.send("Not found");
            }
            else {
                res.type('json');
                res.send(users);
            }
        })
    });

    router.get('/', function (req, res, errorLogger) {
        Goods.find(function (err, users) {
            if (err) console.log(err);
            else {
                res.type('json');
                res.send(users);
            }
        })
    });

function errorLogger(e) {
    console.log(e);
}

module.exports = router;
