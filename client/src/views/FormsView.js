import React from 'react'
import WorkoutForm from '../components/WorkoutForm';
import ExerciseForm from '../components/ExerciseForm';


export default function FormsView(props) {
    return (
    <container>
    <div id= "WorkoutGrid">
        <div>
            <h2>Add workout</h2>
            <WorkoutForm addWorkoutCb={workouts => props.addWorkoutCb(workouts)} /> 
             </div>
              </div>

              <div id= "ExerciseGrid">
                  <div>
                      <h2>Add exercise</h2>
                      <ExerciseForm exerciseTypes= {props.exerciseTypes} addExerciseCb={exercises => props.addExerciseCb(exercises)} /> 
                      </div>
                      </div>
    </container>      
    )
}
