var express = require('express');
var router = express.Router();


var collection = [
    {
        "name": "1 first item",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },{
        "name": "2 second item",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
    },{
        "name": "3 second third",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": "Harum inventore neque repellendus!"
    },
    {
        "name": "4 first item",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },{
        "name": "5 second item",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
    },{
        "name": "6 second third",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": "Harum inventore neque repellendus!"
    },
    {
        "name": "7 first item",
        "href": "http://dummyimage.com/600x400/023/f0f.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },{
     "name": "8 second item",
     "href": "http://dummyimage.com/600x400/023/f0f.jpg",
     "description": " Aspernatur corporis, cum delectus deleniti, ex iure laboriosam libero, molestiae mollitia sequi suscipit temporibus!"
     },{
     "name": "9 second third",
     "href": "http://dummyimage.com/600x400/023/f0f.jpg",
     "description": "Harum inventore neque repellendus!"
     },{
     "name": "10 second fourth",
     "href": "http://dummyimage.com/600x400/023/f0f.jpg",
     "description": "Doloribus illo magnam minima?"
     }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('\n item here is \n' + req);
    req.is('application/json');
    res.send(collection);
});

module.exports = router;
