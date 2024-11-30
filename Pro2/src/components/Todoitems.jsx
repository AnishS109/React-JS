import { useContext } from "react";
import { DataTodoContext } from "../store/dataTodo";
import Row_2 from "./Row_2";

const Todoitems = () => {
  
  const ContextObj = useContext(DataTodoContext)
  const TodoItemss = ContextObj.TodoItems

  return (
    <div>

      {TodoItemss.map((item) => (<Row_2 
      name = {item.names} 
      date = {item.dates} 
      />) )}

    </div>
  )
}

export default Todoitems;