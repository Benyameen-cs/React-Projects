import TodoHeading from "./assets/components/TodoHeading"
import TodoInputs from "./assets/components/TodoInputs"
import TodoItems from "./assets/components/TodoItems";
import './assets/app.css';


function App() {
  
  let tasks = [
    {
      Name : "buy milk",
      date : "13/2/2025",
    },
    {
      Name : "go to college",
      date : "14/2/2025",
    },
    {
      Name: "like the video",
      date : "13/5/2022",
    }
  ]


  return (
    <center>
      <div className="todoApp-container">
        <TodoHeading></TodoHeading>
        <TodoInputs></TodoInputs>
        <TodoItems data = {tasks}></TodoItems>
      </div>
    </center>
  )
}

export default App
