import './App.css';
import React, {useEffect, useState} from "react";
import HistoryComponent from './components/History';
import WorkoutTrackerComponent from './components/WorkoutTracker';


  function App() {

  let [exercises, setExercises] = useState([]);
  let [workTracker,setworkTracker] =  useState([]);

  useEffect(() =>{
    getworkTracker()

   //fetch('/exercises')
    // .then(res =>res.json())
    // .then(exercises =>{
    //  setExercises(exercises)
   // })
   // .catch(error =>{
   //   console.log(error);

   //  });
  },[]);

  

  const getworkTracker = () => {
    fetch('/worktracker')
     .then(res =>res.json())
     .then(workTracker =>{
      setworkTracker(workTracker)
    })
    .catch(error =>{
      console.log(error);

    });
  }
  async function addworkTracker(workTracker) {
     let options = {
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body:JSON.stringify(workTracker)

     }
     
     try {
     let response = await fetch('/worktracker',options);
     if (response.ok){
     let data = await response.json();
     setworkTracker(data)
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
     <HistoryComponent exercises= {exercises} work_tracker = {workTracker}/>
     
     <WorkoutTrackerComponent addworkTracker={addworkTracker} work_tracker = {workTracker}/> 
     
       
    </div>
   );

}

export default App;
