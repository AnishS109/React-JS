import FoodItem from "../../Project_bharat_Clock/src/comp/FoodItem"
import Container from "./components/Container"
import Heading from "./components/Heading"
import Inputtext from "./components/InputText"
import UnOrder from "./components/unOrder"
import { useState } from "react"

function App() {

  let [mobileItem,setMobileItem] = useState(["Iphone","Mi","Samsung","Vivo","Oppo","Google Pixel"])

  const handleTextChange = (event) => {
    if (event.key === "Enter"){
      let newFoodItem = event.target.value;
      let newItems = [...mobileItem,newFoodItem];
      setMobileItem(newItems);
    }
  }
  
  return (
    <>
    <Container>
      
    <Heading/>

    <Inputtext handleTextChange={handleTextChange}/>
    

    <UnOrder items={mobileItem}/>

    </Container>


    </>
  )

  }


export default App;
