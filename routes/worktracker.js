var express = require('express');
const db = require("../model/helper");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM work_tracker")//table name
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
   
});
 
router.post('/', async (req, res) => {
  
  let { exercise_name, hours, day } = req.body;
  let sql = `INSERT INTO work_tracker (exercise_name,hours, day) VALUES ('${exercise_name}','${hours}', '${day}')`;
  try {
    await db(sql);
    let results = await db("SELECT * FROM work_tracker");
    let data = results.data;
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
module.exports = router;
