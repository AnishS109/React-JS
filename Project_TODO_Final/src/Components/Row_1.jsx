import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import styles from "./Row_1.module.css"

function Row_1({onNewItem}){

  const [todoName,setTodoName] = useState();
  const [todoDate,setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked = () =>{
    onNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div className="row an-row">

    <div className="col-6">
      <input type="text"
       placeholder="Enter Todo Here"
       value={todoName}
       onChange={handleNameChange} />
    </div>
    <div className="col-4">
      <input 
      type="date"
      onClick={handleDateChange}/>
    </div>
    <div className="col-2">

    <button 
    type="button"
    className={`btn btn-success an-btn ${styles.buttonn}`}
    onClick={handleAddButtonClicked}
    ><MdAddCircleOutline /></button>
    </div>

    </div>
  )
}

export default Row_1;