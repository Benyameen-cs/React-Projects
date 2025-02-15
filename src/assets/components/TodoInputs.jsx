
import styles from "../styles/TodoInputs.module.css"

function TodoInputs (){

  return <div class="container text-centre">
    <div class={ `row  ${styles["inputs-container"]} `}>
      <div class="col-sm-6">
        <input type="text" placeholder="type here"></input>
      </div>
      <div class="col-sm-4">
        <input type ="date" ></input>
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-success">add</button>
      </div>
    </div>
  </div>
}

export default TodoInputs;