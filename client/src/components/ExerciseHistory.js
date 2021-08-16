import React from "react";
// import "./History.css"

// JIM: Change to ExerciseHistory

function ExerciseHistory(props){
    return (
     <div class = "History">
         <ul>
          {  
            props.exercises.map(e =>(
             <li key ={e.id}>{e.exercise_name}, {e.repetitions}, {e.exercise_type},{e.workout_id}</li>
             ))
          }
         </ul> 

          {/* <div className = "work_tracker">
              <ul>
                  {
                    props.work_tracker.map (e =>(
                    <li key ={e.id}>{e.exercise_name},{e.hours},{e.day}</li>
                    ))
                  }              
               </ul>     
           </div>  */}
        </div>



    )
}

export default ExerciseHistory;