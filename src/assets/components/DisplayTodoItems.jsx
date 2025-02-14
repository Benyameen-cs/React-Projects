
function DisplayTodoItems({taskIs , dateIs}){

  return <div class="container text-center">
    <div class="row items-container1">
      <div class="col-sm-6 items">
        {taskIs}
      </div>
      <div class="col-sm-4 items">
        {dateIs}
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-danger">delete</button>
      </div>
    </div>
  </div>
}

export default DisplayTodoItems;