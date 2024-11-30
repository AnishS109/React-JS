import styles from "./App.module.css";
import Inputtt from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import {useState} from "react"

function App() {

  const onButtonClick = (event) =>{
    if (event === "C"){
      setcalVal("") 
    }
    else if (event === '='){
      const result = eval(calVal)
      setcalVal(result)
    }
    else{
      const newVal = calVal + event;
      setcalVal(newVal)
    }
  }

  let [calVal,setcalVal] = useState("");

  return (
    <>
    <div classNameName={styles.calculator} >

      <Inputtt displayValue = {calVal}/>
       
      <ButtonsContainer onClickButton={onButtonClick}/>

    </div>
    </>
  )
}

export default App;