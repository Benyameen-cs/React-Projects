import TodoHeading from "./assets/components/TodoHeading"
import TodoInputs from "./assets/components/TodoInputs"
import Items1 from "./assets/components/Items1"
import Items2 from "./assets/components/Items2"
import './assets/app.css';


function App() {
  

  return (
    <center>
      <div className="todoApp-container">
        <TodoHeading></TodoHeading>
        <TodoInputs></TodoInputs>
        <Items1></Items1>
        <Items2></Items2>
      </div>
    </center>
  )
}

export default App
