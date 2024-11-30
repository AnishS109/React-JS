import FoodItem from "./comp/FoodItem";
import Headd from "./comp/headd";
import Line2 from "./comp/Line2";
import Line3 from "./comp/line3";
import Error from "./comp/errormsg";
import Container from "./comp/Container";
import Inputt from "./comp/Inputt";
import { useState } from "react"


function App() {

  // let fooditem = ["Iphone","Vivo","Oppo","Mi","Samsung","Google Pixel"]

  let [fooditem,setFooditem] = useState(["Iphone","Vivo","Oppo","Mi","Samsung","Google Pixel"]);

  let [textToShow,changetext] = useState();

  const handleKyeDown = (event) =>{
      
    if (event.key === "Enter")
      {
    let newFoodItem = event.target.value;
    let newItems = [...fooditem,newFoodItem];
    setFooditem(newItems);
      }     
  }

  return (
    <>
    
    {/* <Container>

    <Headd/>

    <Inputt handleKyeDown={handleKyeDown}/>

    <Error items = {fooditem}/>

    <FoodItem items = {fooditem}/>

    </Container> */}

    <Line2/>
    <Line3/>




        
    </>
  )
}

export default App;