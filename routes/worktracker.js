var express = require('express');
const db = require("../model/helper");
var router = express.Router();

// JIM: These were moved to exercises.js

// /* GET users listing. */
 router.get('/', function(req, res, next) {
 db("SELECT * FROM workouttracker")//table name
    .then(results => {
       res.send(results.data);
     })
     .catch(err => res.status(500).send(err));
   
 });
 
 router.post('/', async (req, res) => {
  
  let { exercise_name, hours, day } = req.body;
  let sql = `INSERT INTO workout tracker (exercise_name,hours, day) VALUES ('${exercise_name}','${hours}', '${day}')`;
 try {
   await db(sql);
   let results = await db("SELECT * FROM workout trackers");
   let data = results.data;
     res.status(201).send(data);
   } catch (err) {
    res.status(500).send({ error: err.message });
   }
 });

module.exports = router;
