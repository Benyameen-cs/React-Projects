import TodoHeading from "./assets/components/TodoHeading"
import TodoInputs from "./assets/components/TodoInputs"
import TodoItems from "./assets/components/TodoItems";
import './assets/app.css';
import { useState } from "react";
import WelcomeMessege from "./assets/components/WelcomeMessege";


function App() {

  const [inputTask , setInputTask] = useState() ;
  const [inputDate , setInputDate] = useState() ;
  const [tasksValue , setTaskValues] = useState( [])

  



  const getInputTask = (event)=>{
    inputTask = setInputTask(event.target.value);
  }

  const getInputDate = (event)=>{
    inputDate = setInputDate(event.target.value ) ;
  }

  const deleteItem = (taskIs) =>{
    const newTodoItems = tasksValue.filter( (item) => item.Name !== taskIs)
    setTaskValues(newTodoItems);
  }

  const updateTasks = () =>{
    if(inputTask === "" || inputDate === ""){
      console.log(" empty value")
    }
    else{ 
    let newArray = [...tasksValue ,{Name : inputTask, date: inputDate}] ;
    console.log( "TASK VALUES :" , tasksValue)
    setTaskValues(newArray) ;
    setInputTask("");
    setInputDate("");
    
    }
  }

  return (
    <center>
      <div className="todoApp-container">
        <TodoHeading></TodoHeading>
        <TodoInputs inputTask={inputTask} inputDate={inputDate} getInputTask = {getInputTask} getInputDate = {getInputDate} updateTasks={updateTasks}></TodoInputs>
        {tasksValue.length === 0 && <WelcomeMessege></WelcomeMessege>}
        <TodoItems data = {tasksValue} deleteItem={deleteItem}></TodoItems>
      </div>
    </center>
  )
}

export default App
