import AppName from "./Components/App_Name"
import Row_1 from "./Components/Row_1"
import "./App.css";
import TodoItems from "./Components/todoItems";
import { useState } from "react";

function App() {


const [todoItems,setTodoItems] = useState([{
  names:"Anish Saini",
  dates:"23/03/2004"
},
  {
  names:"Kunnu Saini",
  dates:"19/08/2006"
},
  {
  names:"Kushagra Saini",
  dates:"19/08/2008"
}])



    return (
    <>
      <center classNameName="container">
      <AppName/>
      
      <Row_1/>

      <TodoItems todoItem={todoItems}/>
      
      </center>
    </>
  )
}

export default App;