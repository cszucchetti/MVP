import React from "react";
import "./History.css"


function WorkoutHistory(props){
    return (
        <div class = "History">
        <ul>
            {
              props.workouts.map (e =>(
              <li key ={e.id}>{e.workout_name},{e.total_calories}, {e.minutes}, {e.day}</li>
              ))
            }              
         </ul>     

        </div>

    )
}

export default WorkoutHistory;