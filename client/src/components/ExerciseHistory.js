import React from "react";
import "./History.css"




function ExerciseHistory(props){
    return (
     <div class = "History">
         <ul>
          {  
            props.exercises.map(e =>(
             <li key ={e.id}>{e.exercise_name} {e.repetitions} {e.exercise_calories} {e.exercise_type} {e.exercise_duration} {e.workout_id}</li>
             ))
          }
         </ul> 

        </div>



    )
}

export default ExerciseHistory;