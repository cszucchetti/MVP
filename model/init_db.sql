DROP TABLE if exists user;
 

DROP TABLE if exists exercise;
CREATE TABLE exercise(
      id INT NOT NULL AUTO_INCREMENT,
      exercise_name VARCHAR(40) NOT NULL,
       repetitions VARCHAR(40) NOT NULL,
       exercise_type VARCHAR(40) NOT NULL,
       work_tracker_id INT NOT NULL,
      PRIMARY KEY (id)
     );
DROP TABLE if exists workouttracker;
CREATE TABLE workouttracker(
       id INT NOT NULL AUTO_INCREMENT,
       exercise_name VARCHAR(40) NOT NULL,
       hours VARCHAR(40) NOT NULL,
       day VARCHAR(40) NOT NULL,
      PRIMARY KEY (id)
     );

INSERT INTO exercise (exercise_name, repetitions,exercise_type,work_tracker_id)
VALUES ("exercise1","2","cardio",1);
INSERT INTO exercise (exercise_name, repetitions,exercise_type,work_tracker_id)
VALUES ("exercise2","3","strength",1);
INSERT INTO workouttracker (exercise_name,hours, day)
VALUES ("exercise1","2" , "2021-08-11" );