function Items2(){

  let inputText = "go to work" ;
  let inputDate = "14/2/2025";

    return <div class="container text-center">
    <div class="row items-container2">
      <div class="col-sm-6 items">
        {inputText}
      </div>
      <div class="col-sm-4 items">
        {inputDate}
      </div>
      <div class="col-sm-2">
      <button type="button" class="btn btn-danger">delete</button>
      </div>
    </div>
  </div>
}

export default Items2