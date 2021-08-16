var express = require('express');
const db = require("../model/helper");
var router = express.Router();

// JIM: Moved routes here from worktracker.js because they handle exercise data

/* GET exercises listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM exercises")//table name
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
   
});
 
// JIM: Save exercise properties

router.post('/', async (req, res) => {
  let { exercise_name, repetitions, exercise_type, workout_id} = req.body;
  let sql = `
    INSERT INTO exercises (exercise_name, repetitions, exercise_type) 
    VALUES ('${exercise_name}','${repetitions}', '${exercise_type}','${workout_id}')`;
    // NOTE: The workout_id of 1 is temporary
  try {
    await db(sql);
    let results = await db("SELECT * FROM exercises");
    let data = results.data;
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
