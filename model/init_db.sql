DROP TABLE if exists user;
 

DROP TABLE if exists exercises;
CREATE TABLE exercises(
      id INT NOT NULL AUTO_INCREMENT,
      exercise_name VARCHAR(40) NOT NULL,
      sets INT NOT NULL,
      exercise_type VARCHAR(40) NOT NULL,
       workout_id INT NOT NULL,
      PRIMARY KEY (id)
     );

DROP TABLE if exists workouts;
CREATE TABLE workouts(
       id INT NOT NULL AUTO_INCREMENT,
       workout_name VARCHAR(40) NOT NULL,
       minutes INT NOT NULL,
       day VARCHAR(40) NOT NULL,
      PRIMARY KEY (id)
     );

INSERT INTO exercises (exercise_name, repetitions,exercise_type,workout_id)
VALUES ("exercise1","2","cardio",1);
INSERT INTO exercises (exercise_name, repetitions,exercise_type,workout_id)
VALUES ("exercise2","3","strength",1);
INSERT INTO workouts (workout_name,hours, day)
VALUES ("workout1","2" , "2021-08-11" );