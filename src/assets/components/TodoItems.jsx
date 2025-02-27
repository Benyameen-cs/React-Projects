import DisplayTodoItems from "./DisplayTodoItems";


function TodoItems ({data ,deleteItem}){

    return <>
        {data.map((item) =>{
        return <>
            <DisplayTodoItems taskIs = {item.Name}  dateIs = {item.date} deleteItem={deleteItem}></DisplayTodoItems>
            </>
        })}  
    </>

}

export default TodoItems ;