import './App.css';
import React, {useEffect, useState} from "react";
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
    exercise_type: "GAP"
     
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
     
 
    <div >
    <NavBar />
    <Routes 
    exercises={exercises} 
    workouts={workouts} 
    exerciseTypes={exerciseTypes}
    addExerciseCb={exercises => addExercise(exercises)}
    addWorkoutCb={workouts => addWorkout(workouts)}
    />
</div>

   );

}

export default App;
