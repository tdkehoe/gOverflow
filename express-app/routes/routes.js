var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/gOverflow');
var gOverflow = db.get('gOverflow');

router.get('/', function(req, res) { // INDEX
  gOverflow.find({}, function(err, questions) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(questions); // OK
  })
}); // tested

router.post('/', function(req, res) { // CREATE
  gOverflow.insert(req.body, function(err, question) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(question); // Created
  })
}); // tested

router.get('/new', function(req, res) { // NEW
  // goes to forms page for user to enter a new question
  // this route isn't used if a href anchor is used to go to the forms page
});

router.get('/:id', function(req, res) { // SHOW
  gOverflow.findOne({_id: req.params.id}, function(err, question) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(question); // OK
  })
}); // tested

router.get('/:id/edit', function(req, res) { // EDIT (identical to SHOW route)
  gOverflow.findOne({_id: req.params.id}, function(err, question) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(question); // OK
  })
}); // tested

router.put('/:id', function(req, res) { // UPDATE
  gOverflow.findAndModify({_id: req.params.id}, req.body, function(err, question) {
    if (err) {
      throw err;
    }
    res.json(req.body);
  })
}); //tested

router.delete('/:id', function(req, res) { // DESTROY
  gOverflow.remove({_id: req.params.id}, function(err, question){
    if (err) {
      throw err;
    }
    res.status(204).json(question); //
  })
}); // tested

module.exports = router;
