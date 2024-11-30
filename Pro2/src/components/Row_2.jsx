import { useContext } from "react";
import styles from "./Row_1.module.css"
import { DataTodoContext } from "../store/dataTodo";

const Row_2 = ({name,date}) => {

  const {handleDeleteItem} = useContext(DataTodoContext)

  return (

    <center>
    <div className={`row ${styles.rowss}`}>

    <div className="col">

      {name}

    </div>
    <div className="col">

      {date}

    </div>
    <div className="col">

    <button type="button" 
    className={`btn btn-danger ${styles.btns}`}
    onClick={() => handleDeleteItem(name)}>Delete</button>

    </div>
    </div>
    </center>
  )
}

export default Row_2;