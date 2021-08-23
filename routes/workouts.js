var express = require('express');
const db = require("../model/helper");
var router = express.Router();

// JIM: These were moved to exercises.js

// /* GET users listing. */
 router.get('/', function(req, res, next) {
 db("SELECT * FROM workouts")//table name
    .then(results => {
       res.send(results.data);
     })
     .catch(err => res.status(500).send(err));
   
 });
 
 router.post('/', async (req, res) => {
  
  let { workout_name, total_calories, minutes, day } = req.body;
  let sql = `INSERT INTO workouts (workout_name, total_calories, minutes, day) 
  VALUES ('${workout_name}', ${total_calories}, ${minutes}, '${day}'); SELECT LAST_INSERT_ID() ` ;
 try {
  let results = await db(sql);

  let workout_id = results.data[0].insertId;

  sql = `UPDATE exercises set workout_id = ${workout_id} WHERE workout_id = 0`
  console.log(workout_id, sql);
  await db (sql);
  results = await db("SELECT * FROM workouts");
   let data = results.data;
     res.status(201).send(data);
   } catch (err) {
    res.status(500).send({ error: err.message });
   }
 });

module.exports = router;
