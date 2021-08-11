DROP TABLE if exists user;
 

DROP TABLE if exists exercise;
CREATE TABLE exercise(
      id INT NOT NULL AUTO_INCREMENT,
      exercise_name VARCHAR(40) not null,
       repetitions VARCHAR(40) not null,
       exercise_type VARCHAR(40) not null,
       work_tracker_id INT NOT NULL,
      PRIMARY KEY (id)
     );
DROP TABLE if exists work_tracker;
CREATE TABLE work_tracker(
      id INT NOT NULL AUTO_INCREMENT,
       hours VARCHAR(40) not null,
       day VARCHAR(40) not null,
      PRIMARY KEY (id)
     );

INSERT INTO exercise (exercise_name, repetitions,exercise_type,work_tracker_id)
VALUES ("exercise1","2","cardio",1);
INSERT INTO exercise (exercise_name, repetitions,exercise_type,work_tracker_id)
VALUES ("exercise2","3","strength",1);
INSERT INTO work_tracker (hours, day)
VALUES ("2" , "yyyy/mm/dd" );