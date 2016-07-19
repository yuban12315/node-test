var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $conf = require('../conf/db');

var recipes_map = {
    '1': {
        "id": "1",
        "title": "Cookies",
        "description": "Delicious, crisp on the outside, chewy on the outside, oozing with chocolatey goodness cookies. The best kind",
        "ingredients": [
            {
                "amount": "1",
                "amountUnits": "packet",
                "ingredientName": "Chips Ahoy"
            }
        ],
        "instructions": "1. Go buy a packet of Chips Ahoy\n2. Heat it up in an oven\n3. Enjoy warm cookies\n4. Learn how to bake cookies from somewhere else"
    },
    '2': {
        id: 2,
        'title': 'Recipe 2',
        'description': 'Description 2',
        'instructions': 'Instruction 2',
        ingredients: [
            {amount: 13, amountUnits: 'pounds', ingredientName: 'Awesomeness'}
        ]
    }
};


var pool = mysql.createPool($conf.mysql);
/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {title: 'Express'});
});
router.get('/test', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/recipes', function (req, res, next) {
    var recipes=[];
    for (var key in recipes_map) {
        recipes.push(recipes_map[key]);
    }
    res.send(recipes);
})
router.get('*',function(req,res,next){
    res.render('index', {title: 'Express'});
})
router.post('/qwer', function (req, res) {

    var selectSites = "select * from user";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(selectSites, function (err, rows) {
            if (err) throw  err;
            //回收pool
            console.log(rows);
            res.send(rows);
            connection.release();
        });
    });
})


module.exports = router;

