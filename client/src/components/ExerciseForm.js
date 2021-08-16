import React,{useState} from "react";
// import "./History.css"
  
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
        // input.exercises = props.exercises.id
       
        props.submitCb(input)
      };


    return (

      <item>

    <div class = "Form">   

       <form onSubmit={e => handleSubmit(e)}>
         <table>
           <tr><td>
             <label>
               Name: 
               </label>
             </td><td>
             <input name="exercise_name" onChange = {e => handleChange(e)}/>
             </td></tr><tr><td>
             <label>
               Reps: 
               </label>
             </td><td>
             <input name="repetitions" onChange = {e => handleChange(e)}/>
             </td></tr><tr><td>
             <label>
               Workout id
             </label>
              </td><td>
               <input name="workout_id" onChange = {e => handleChange(e)}/>
               </td></tr><tr><td>   
             <label>
               Type: 
               </label>
             </td><td>
             <input name="exercise_type" onChange = {e => handleChange(e)}/>
             </td></tr>
         </table>
        </form>
    </div>
    </item>
    )};

   

    export default ExerciseForm;