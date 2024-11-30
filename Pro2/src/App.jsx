import { useReducer} from "react";
import Heading from "./components/Heading";
import Row_1 from "./components/Row_1";
import Todoitems from "./components/Todoitems";
import Enjoy from "./components/Enjoy";
import { DataTodoContext } from "./store/dataTodo";

const todoItemsReducer = (currValue,action) => {
  let newTodoItem = currValue;

  if (action.type === "New_item") {
    newTodoItem = [...currValue, {name:action.payload.itemName, date:action.payload.itemdate},]
  return newTodoItem;
  }
  else if (action.type === "Del_item") {
    newTodoItem = currValue.filter(
      (item) => item.name != action.payload.itemName
    );
  return newTodoItem;
  }
};

function App() {

  const [TodoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[]);

  const handleNewItem = (itemName,itemdate) => {
    const newItemAction = {
      type:"New_item",
      payload: {
        itemName,
        itemdate
      },
    };
    dispatchTodoItems(newItemAction);
  }

  const handleDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type:"Del_item",
      payload: {
        todoItemName
      },
    };
    dispatchTodoItems(deleteItemAction);
  }
  
  return (
    <DataTodoContext.Provider value={
    {
    TodoItems,
    handleNewItem,
    handleDeleteItem
    }
    }>

      <>
      
      <Heading/>

      <Row_1/>

      <Enjoy/>

      <Todoitems/>
    
      </>
    </DataTodoContext.Provider>
  )
}

export default App;
