var express = require('express');
var router = express.Router();
const { User } = require('../../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(function (results) {
    res.json(results);
  }).catch(function (err) {
    console.error(err);
  })
});

module.exports = router;
