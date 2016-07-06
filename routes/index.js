var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('first_table').select().then(function(data){
    res.render('index', { title: ' My Todo List', list: data});
  });
});


module.exports = router;
