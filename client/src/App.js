import './App.css';
import React, {useEffect, useState} from "react";
import ExerciseHistory from './components/ExerciseHistory';
import ExerciseForm from './components/ExerciseForm';


function App() {

  let [exercises, setExercises] = useState([]);
  let [workTracker,setworkTracker] =  useState([]);

  useEffect(() =>{
    getExercises();

   //fetch('/exercises')
    // .then(res =>res.json())
    // .then(exercises =>{
    //  setExercises(exercises)
   // })
   // .catch(error =>{
   //   console.log(error);

   //  });
  },[]);



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
 
   return (
    <div id ="App">
     <h1>Workout Tracker</h1>
     <h2>Exercises</h2>
     <ExerciseHistory exercises= {exercises} />
     
     <ExerciseForm submitCb={exercise => addExercise(exercise)} /> 
     
       
    </div>
   );

}

export default App;
