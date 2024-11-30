import styles from "./ButtonsContainer.module.css"
import Buttons from "./Buttons"


const ButtonsContainer = () => {

  let sign = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

  return (
    <div classNameName={styles.buttonsContainer}>

      {sign.map(button => 
      <Buttons text={button}
      ></Buttons>  
        )}
      
      </div>
  )
}

export default ButtonsContainer;