import React,{useState} from "react";
// import "./WorkoutTracker.css";
  
function ExerciseForm(props){
    let [input, setInput] = useState({
      exercise_name:"",
      repetitions:"",
      exercise_type:""
    });

    const handleChange =(event) => {
      let { name, value } = event.target;
      setInput(input => ({...input, [name]:value }));
      };

      // const handlehoursChange =(event) => {
      //   let data = input
      //   data.hours = event.target.value
      //   setInput(data)

      //   //setInput(event.target.value)
      // };
      // const handleexcerciseChange =(event) => {

      //   let data = input
      //   data.exercise_name = event.target.value
      //   setInput(data)

      //  // setInput(event.target.value)
      // };
           
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
       
        props.submitCb(input)
      };


    return (

    <div className = "ExerciseForm">   

       <form onSubmit={e => handleSubmit(e)}>
             Dashboard:
             <label>
               Name
               <input name = "exercise_name" onChange = {e => handleChange(e)}/>
             </label>

             <label>
               Reps
               <input name = "repetitions" onChange = {e => handleChange(e)}/>
             </label>

             <label>
               Type
               <input name = "exercise_type" onChange = {e => handleChange(e)}/>
             </label>

           <button type="submit">Submit</button>
        </form>

    </div>
    )};

   

    export default ExerciseForm;