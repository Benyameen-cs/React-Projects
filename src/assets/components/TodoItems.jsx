import DisplayTodoItems from "./DisplayTodoItems";


function TodoItems ({data}){
    console.log(data) ;

    return <>
        {data.map((item) =>{
        return <>
            <DisplayTodoItems taskIs = {item.Name}  dateIs = {item.date}></DisplayTodoItems>
            </>
        })}  
    </>

}

export default TodoItems ;