import React,{useState} from "react";
//  import "./Form.css";

  
function WorkoutForm(props){
    let [input, setInput] = useState({
      workout_name:"",
      total_calories: "",
      minutes: "",
      day:"",
  
    });

    const handleChange =(event) => {
      let { name, value } = event.target;
      setInput(input => ({...input, [name]:value }));
      };
           
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        props.addWorkoutCb(input)
      };


    return (
     
      <item>
    <div className = "Form">   

       <form onSubmit={e => handleSubmit(e)}>
             <table>
             
             <tr><td>
             <label>
               Name: </label></td><td>
               <input name = "workout_name" onChange = {e => handleChange(e)}/>
              </td></tr>

              <tr><td>
             <label>
              Total calories: 
               </label></td><td>
               <input name = "total_calories" onChange = {e => handleChange(e)}/>
               </td></tr>
              
              <tr><td>
             <label>
              Time (min): 
               </label></td><td>
               <input name = "minutes" onChange = {e => handleChange(e)}/>
               </td></tr>
               
               <tr><td>
             <label>
               Date: 
               </label></td><td>
               <input name = "day" type="date" onChange = {e => handleChange(e)}/>
               </td></tr></table>
               
           <button type="submit">Submit</button>
           
        </form>

    </div>
    </item>
    )};

   

    export default WorkoutForm;