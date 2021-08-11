var express = require('express');
const db = require("../model/helper");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM exercise")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});
 

module.exports = router;
