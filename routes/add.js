var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next){
  res.render('add', {title: 'My To Do List'});
});

router.post('/', function(req, res, next){
  var data = {
    id: req.body.id,
    list_item: req.body.list_item,
    done: req.body.done
  };
  knex('first_table').insert(data).then(function(){
    res.redirect('/')
  }).catch(function(err){
    next(err);
  });
});

module.exports = router;
