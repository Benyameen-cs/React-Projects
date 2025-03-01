import { FaDeleteLeft } from "react-icons/fa6";
import styles from "../styles/DisplayTodoItems.module.css"

function DisplayTodoItems({taskIs , dateIs , deleteItem}){

  return <div className="container text-center">
    <div className={`row ${ styles["items-container"] }  `}>
      <div className={` col-sm-6  ${ styles ["items"] } `}>
        {taskIs}
      </div>
      <div className={` col-sm-4  ${ styles ["items"] } `} >
        {dateIs}
      </div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-danger" onClick={()=> deleteItem(taskIs)}><FaDeleteLeft /></button>
      </div>
    </div>
  </div>
}

export default DisplayTodoItems;