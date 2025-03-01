
import styles from "../styles/TodoInputs.module.css"
import { IoAddCircle } from "react-icons/io5";

function TodoInputs ({getInputTask , getInputDate , updateTasks , inputTask , inputDate}){

  return <div class="container text-centre">
    <div class={ `row  ${styles["inputs-container"]} `}>
      <div class="col-sm-6">
        <input type="text" placeholder="Type your task here" value={inputTask} onChange={getInputTask}></input>
      </div>
      <div class="col-sm-4">
        <input type ="date" value={inputDate} onChange={getInputDate}></input>
      </div>
      <div class="col-sm-2">
        <button type="button" className="btn btn-success" onClick={updateTasks}><IoAddCircle /></button>
      </div>
    </div>
  </div>
}

export default TodoInputs;