import { useContext, useRef } from "react";
import styles from "./Row_1.module.css"
import { DataTodoContext } from "../store/dataTodo";

const Row_1 = () =>{

  const {handleNewItem} = useContext(DataTodoContext)

  const todoNames = useRef()
  const todoDates = useRef()

  const handleDataChange = (event) => {
    event.preventDefault();
    const todoName = todoNames.current.value;
    const todoDate = todoDates.current.value;
    todoNames.current.value = "";
    todoDates.current.value = "";
    handleNewItem(todoName,todoDate)
  }

  
  return (

    <center>
    <form className={`row ${styles.rows}`}
    onSubmit={handleDataChange}>

    <div className="col">

      <input type="text" 
      placeholder="Enter Todo Here"
      classNameName={styles.inputtext}
      ref={todoNames}
      />

    </div>
    <div className="col">

      <input type="date"
      classNameName={styles.inputdate}
      ref={todoDates}
      />

    </div>
    <div className="col">

    <button
    className={`btn btn-success ${styles.btn}`}
    >ADD</button>

    </div>
    </form>
    </center>
  )
}

export default Row_1;