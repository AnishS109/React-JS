function Row_1(){
  return (
    <div className="row an-row">

    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here"/>
    </div>
    <div className="col-4">
      <input type="date"/>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success an-btn">ADD</button>
    </div>

    </div>
  )
}

export default Row_1;