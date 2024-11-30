import { MdDelete } from "react-icons/md";

function Row_2({todoName,todoDate,onDeleteClick}){

  return (
    <div className="row an-row">
    <div className="col-6">
      {todoName}
    </div>
    <div className="col-4">
      {todoDate}
    </div>
    <div className="col-2">
    <button 
    type="button" 
    className="btn btn-danger an-btn"
    onClick={() => onDeleteClick(todoName)}
    
    
    ><MdDelete /></button>
    </div>
    </div>
  )
}

export default Row_2;