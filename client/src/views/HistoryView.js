import React from 'react'
import WorkoutHistory from '../components/WorkoutHistory';
import ExerciseHistory from '../components/ExerciseHistory';


export default function HistoryView(props) {
    return (
        <container>
        <div>
        <h2>My exercises</h2>
        <ExerciseHistory exercises={props.exercises} />
        </div>

        
     <div>
     <h2>My workouts</h2>
     
     {props.workouts && props.workouts.length > 0 ? <WorkoutHistory workouts={props.workouts} /> : null}
     </div>
  
  
</container>

    )
}
