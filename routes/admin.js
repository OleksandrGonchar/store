var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(`<form class="form-signin"id="log form" type='post' action="/login/">
        <h2 class="form-signin-heading">Вход в систему</h2>
        <input type="text" class="form-control" name="usernames" placeholder="Логин" required autofocus=""  autocomplete="off"/>
        <input type="password" class="form-control" name="password" placeholder="Пароль" required autocomplete="off"/>

        <button id="send" type='submit' class="btn btn-lg btn-primary btn-block" >Вход</button>
    </form>`);
});
router.post('/login/', function (req, res, next) {
    console.log(req.body.usernames);
    console.log(req.body.password);
    var log_user =  req.body.usernames;
    var log_passw = req.body.password;

    if(log_user == '1' && log_passw  == '1' ){
        res.render('logined',{some_data:'this_user_data'})
    }else if(log_user == user_second && log_passw  == passw_second ) {
        res.send('nea!');
    }else{
        console.log('kikk');
    }
});
module.exports = router;
