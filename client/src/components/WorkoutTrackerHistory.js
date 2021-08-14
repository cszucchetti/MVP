import React from "react";
import "./WorkoutTracker.css"


function WorkoutTracker(props){
    return (
        <div className = "work_tracker">
        <ul>
            {
              props.work_tracker.map (e =>(
              <li key ={e.id}>{e.exercise_name},{e.hours},{e.day}</li>
              ))
            }              
         </ul>     

        </div>

    )
}

export default WorkoutTracker;