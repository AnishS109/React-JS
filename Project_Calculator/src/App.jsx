import styles from "./App.module.css";
import Inputtt from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {

  return (
    <>
    <div classNameName={styles.calculator} >

      <Inputtt/>
       
      <ButtonsContainer/>

    </div>
    </>
  )
}

export default App
