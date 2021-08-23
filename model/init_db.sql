DROP TABLE if exists user;
 

DROP TABLE if exists exercises;
CREATE TABLE exercises(
      id INT NOT NULL AUTO_INCREMENT,
      exercise_name VARCHAR(40) NOT NULL,
      sets INT NOT NULL,
      exercise_duration INT NOT NULL,
      exercise_type VARCHAR(40) NOT NULL,
      workout_id INT DEFAULT 0,
      PRIMARY KEY (id)
     );

DROP TABLE if exists workouts;
CREATE TABLE workouts(
       id INT NOT NULL AUTO_INCREMENT,
       workout_name VARCHAR(40) NOT NULL,
       total_calories INT NOT NULL,
       minutes INT NOT NULL,
       day VARCHAR(40) NOT NULL,
      PRIMARY KEY (id)
     );

INSERT INTO exercises (exercise_name, sets, exercise_duration, exercise_type, workout_id)
VALUES ("exercise 1", 2, 6, "cardio", 1);
INSERT INTO exercises (exercise_name, sets,  exercise_duration, exercise_type, workout_id)
VALUES ("exercise 2", 3, 5, "cardio", 1);
INSERT INTO workouts (workout_name,  total_calories, minutes, day)
VALUES ("workout1", 200, 56, "2021-08-11" );