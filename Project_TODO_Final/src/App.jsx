import AppName from "./Components/App_Name";
import Row_1 from "./Components/Row_1";
import "./App.css";
import TodoItems from "./Components/todoItems";
import { useState } from "react";
import WelcomeMsg from "./Components/WelComemsg";

function App() {

const [todoItems,setTodoItems] = useState([]);

const handleNewItem = (itemNames,itemDates) => {
  let newTodoItems = [...todoItems, {names:itemNames,dates:itemDates}];
  setTodoItems(newTodoItems)
}

const handleDeleteItem = (todoItemName) => {
  const newTododItems = todoItems.filter(item => item.names !== todoItemName)
  setTodoItems(newTododItems)
}

  return (
  <>
    <center classNameName="container">
    <AppName/>
      
    <Row_1 onNewItem = {handleNewItem}/>

    {todoItems.length === 0 && <WelcomeMsg/>}

    <TodoItems todoItem={todoItems} onDeleteClick ={handleDeleteItem}/>
      
    </center>
  </>
  )
}

export default App;