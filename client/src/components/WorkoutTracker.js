import React,{useState} from "react";
import "./WorkoutTracker.css";
  
function WorkoutTracker(props){
    let [input, setInput] = useState({
        day:"",
      exercise_name:"",
      hours:""
    
    });

    const handledayChange =(event) => {
        let data = input
        data.day = event.target.value
        setInput(data)
      };
      const handlehoursChange =(event) => {
        let data = input
        data.hours = event.target.value
        setInput(data)

        //setInput(event.target.value)
      };
      const handleexcerciseChange =(event) => {

        let data = input
        data.exercise_name = event.target.value
        setInput(data)

       // setInput(event.target.value)
      };
           
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
       
        props.addworkTracker(input)
      };


    return (

    <div className = "WorkoutTracker">   

       <form onSubmit={e => handleSubmit(e)}>
           <label>
             Dashboard:
             <button type="submit">Day</button>
             <input Name = "Day" onChange = {e => handledayChange(e)}/>
             <button type="submit">Daily Exercise</button>
             <input Name = "DailyExercise" onChange = {e => handleexcerciseChange(e)}/>
             <button type="submit">Hours</button>
             <input Name = "Hours" onChange = {e =>  handlehoursChange(e)}/>
             
           </label>
           <button type="submit">Submit</button>
        </form>

    </div>
    )};

   

    export default WorkoutTracker;