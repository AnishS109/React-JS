import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = ({onClickButton}) => {

  let sign = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

  return (
    <div classNameName={styles.buttonsContainer}>

      {sign.map(button => 
      <button classNameName={styles.btns}
      onClick={() => onClickButton(button)}
      >
        {button}</button>  
        )}
      
      </div>
  )
}

export default ButtonsContainer;