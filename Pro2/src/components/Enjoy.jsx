import { useContext } from "react";
import { DataTodoContext } from "../store/dataTodo";


const Enjoy = () => {

  const Contextobj = useContext(DataTodoContext)
  const TodoItemss = Contextobj.TodoItems;

  return (
    TodoItemss.length === 0 && (

    <center>

      <h1>

        Enjoy Your Day

      </h1>

    </center>

    )
  )
}

export default Enjoy;