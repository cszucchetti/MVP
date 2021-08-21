import './App.css';
import React, {useEffect, useState} from "react";
import ExerciseHistory from './components/ExerciseHistory';
import ExerciseForm from './components/ExerciseForm';
import WorkoutHistory from './components/WorkoutHistory';
import WorkoutForm from './components/WorkoutForm';
import NavBar from './components/NavBar';
import Routes from './components/Routes'; 


const exerciseTypesList= [
  {        
    calories_set: 45, 
    exercise_type: "Cardio"
  
  },
  {
    calories_set: 45, 
    exercise_type: "Strenght" 
  },

  {
    calories_set: 50, 
    exercise_type: "Other"
     
  },
]

function App() {

  let [exercises, setExercises] = useState([]);
  let [workouts, setWorkouts] =  useState({});
  let [exerciseTypes, setExcerciseTypes] = useState (exerciseTypesList)


  useEffect(() =>{
    getExercises();
  },[])


  const getExercises = () => {
    fetch('/exercises')
     .then(res =>res.json())
     .then(data =>{
      setExercises(data)
    })
    .catch(error =>{
      console.log(error);

    });
  }
  

 

  async function addExercise(newExercise) {
     let options = {
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body:JSON.stringify(newExercise)
     }
     
     try {
     let response = await fetch('/exercises',options);
     if (response.ok){
     let data = await response.json();
     setExercises(data)
     } else{
       console.log(`Server error: ${response.status} ${response.statusText}`)
     }
     }catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };


  useEffect(() =>{
    getWorkouts();

  },[]);


  const getWorkouts = () =>{
    fetch('/workouts')
     .then(res =>res.json())
     .then(data =>{
      setWorkouts(data)
    })
    .catch(error =>{
      console.log(error);

    });
  }

    async function addWorkout(newWorkout) {
    let options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(newWorkout)
    }
    
    try {
    let response = await fetch('/workouts',options);
    if (response.ok){
    let data = await response.json();
    setWorkouts(data)
    } else{
      console.log(`Server error: ${response.status} ${response.statusText}`)
    }
    }catch (err) {
     console.log(`Network error: ${err.message}`);
   }
 };



   return (
     
    <container>
    <div >
    <NavBar />
    <Routes />
    {/* <div className="Header">
      <div className="intro"><h1>Workout Tracker</h1>
      </div>
      </div> */}


      <div id= "WorkoutGrid">
        <div>
        <h2>Add workout</h2>
        <WorkoutForm submitCb={workouts => addWorkout(workouts)} /> 
        </div>
        
        <div>
     <h2>Add exercise</h2>
     <ExerciseForm exerciseTypes={exerciseTypes } submitCb={exercises => addExercise(exercises)} /> 
     </div>


     <div>
        <h2>Workout history</h2>
     {workouts && workouts.length > 0 ? <WorkoutHistory workouts={workouts} /> : null}
        </div>
     
     
     <div>
     <h2>Exercise History</h2>
     <ExerciseHistory exercises={exercises} />
     </div>
     </div>
       </div>
    </container>
   );

}

export default App;
