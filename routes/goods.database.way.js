"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var collection;
/*= [
 {
 "_id": "572313fb98ec1f6c1069967b",
 "href": "images/aramith%20premium-208x156.jpg",
 "name": "1 first item",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c1069967c",
 "href": "https://dummyimage.com/600x400/023/f0f.jpgimages/Шары Днепр 68мм-900x900.jpg",
 "name": "2 second item",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c1069967d",
 "href": "images/Шары Aramith Premier 68мм-900x900.jpg",
 "name": "3 second third",
 "description": "Harum inventore neque repellendus!",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c1069967e",
 "href": "images/Шары Aramith Premier снукер-900x900.jpg",
 "name": "4 first item",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c1069967f",
 "href": "images/Тубус для кия крокодил-900x900.jpg",
 "name": "5 second item",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c10699680",
 "href": "images/Тубус для кия карман коричневый 2-900x900.jpg",
 "name": "6 second third",
 "description": "Harum inventore neque repellendus!",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c10699681",
 "href": "images/Сукно Simonetto зеленое 2м-900x900.jpg",
 "name": "7 first item",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c10699682",
 "href": "images/Сукно Iwan Simonis 760 Yellow Green-900x900.jpg",
 "name": "8 second item",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c10699683",
 "href": "images/Перчатка бильярдная standart-900x900.jpg",
 "name": "9 second third",
 "description": "Harum inventore neque repellendus!",
 "__v": 0
 },
 {
 "_id": "572313fb98ec1f6c10699684",
 "href": "images/Наклейки для бильярда Shooter  H 1-900x900.jpg",
 "name": "10 second fourth",
 "description": "Doloribus illo magnam minima?",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a69",
 "href": "images/Мел для кия predator  (3)-900x900.jpg",
 "name": "1 first item",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a6c",
 "href": "images/Мел Triangle 1-900x900.jpg",
 "name": "4 first item",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a6b",
 "href": "images/Мел Pioneer 1-900x900.jpg",
 "name": "3 second third",
 "description": "Harum inventore neque repellendus!",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a6a",
 "href": "images/Махровка шейпер Ulti Mate (4)-900x900.jpg",
 "name": "2 second item",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a6d",
 "href": "images/Кий Янковского 6х4 амарант черный граб 3-900x900.jpg",
 "name": "5 second item",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a6e",
 "href": "images/Кий Янковского 3х2 черный граб 3-900x900.jpg",
 "name": "6 second third",
 "description": "Harum inventore neque repellendus!",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a6f",
 "href": "images/кий Янковского 2,3 12 запилов Черный Граб 3-900x900-900x900.jpg",
 "name": "7 first item",
 "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a70",
 "href": "images/Кий Николаенко 1х1 Зебрано Черный граб billiard-kii.com (7)-900x900.jpg",
 "name": "8 second item",
 "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a71",
 "href": "images/Strela_Klubnyy_6287-510x382.jpg",
 "name": "9 second third",
 "description": "Harum inventore neque repellendus!",
 "__v": 0
 },
 {
 "_id": "5729d0dc69fe5378039f1a72",
 "href": "images/royal_ard-765x575.jpg",
 "name": "10 second fourth",
 "description": "Doloribus illo magnam minima?",
 "__v": 0
 }
 ];
 */

/*DB part*/
mongoose.connect('mongodb://localhost/cdp');

mongoose.connection.on("open", function (ref) {
    return console.log("SUCCESS: Connected to mongo server!");
});

mongoose.connection.on("error", function (err) {
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
router.get('/:id', function (req, res, errorLogger) {
    Goods.findOne({_id: req.params.id}, function (err, users) {
        if (err) {
            errorLogger("Errror");
            res.type('json');
            res.send("Not found");
        }
        else {
            res.type('json');
            console.log("\n WE send ", users);
            res.send(users);
        }
    })
});

router.get('/', function (req, res, errorLogger) {
    Goods.find(function (err, users) {
        if (err) errorLogger(err);
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
