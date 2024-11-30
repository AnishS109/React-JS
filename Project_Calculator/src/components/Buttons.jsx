import styles from "./ButtonsContainer.module.css"

const Buttons = ({text}) => {
  return (
    <button classNameName={styles.btns}
    >{text}</button>
  )
}

export default Buttons;