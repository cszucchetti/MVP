import React,{useState} from "react";



function ExerciseForm(props){
  
  let [result, setResult] = useState ("")

  let [input, setInput] = useState({
      exercise_name:"",
      repetitions:"",
      exercise_type:""
    });

    function calculateRepetitions() {
     let reps = Number(input.repetitions)
     let calories = Number(input.exercise_type.split(" ")[1].replace(/[^\d]/g, ''))
     
     if (reps !== undefined && calories !== undefined )
     setResult(calories*reps);
    }

    const handleChange =(event) => {
      let { name, value } = event.target;
      setInput(input => ({...input, [name]:value }));
      };
           
      const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(input);      
        // props.submitCb(input)
        calculateRepetitions()
      };


    return (

      <item>

    <div class = "Form">   

       <form onSubmit={e => handleSubmit(e)}>
         <table>

           <tr><td>
             <label>
               Exercise name: 
               </label>
             </td><td>
             <input name="exercise_name" onChange = {e => handleChange(e)}/>
             </td></tr>

             <tr><td>
             <label>
               Exercise type:
               </label>

             </td><td>
             <select name="exercise_type"onChange = {e => handleChange(e)}>
                 {
                 props.exerciseTypes.map(type => (
                 <option>{type.exercise_type} ({type.calories_set} calories/set)</option>))
                 }
                 </select>
             </td></tr>

             <tr><td>
             <label>
               Number of repetitions: 
               </label>
             </td><td>
             <input name="repetitions" onChange = {e => handleChange(e)}/>
             </td></tr>
             
             <tr><td>
             <label>
               Calories burned
             </label>
              </td><td>
               <input name="exercise_calories" value={result} onChange = {e => handleChange(e)}/>
               </td></tr>
               
               <tr><td>   
             <label>
               Duration (min): 
               </label>
             </td><td>
             <input name="exercise_duration" onChange = {e => handleChange(e)}/>
             </td></tr>
         </table>
         <button type="submit">Add exercise</button>
        </form>
    </div>
    </item>
    )};

   

    export default ExerciseForm;