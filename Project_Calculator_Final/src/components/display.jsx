import styles from "./display.module.css"

const Inputtt = ({displayValue}) => {
  return (
    <input type="text" classNameName={styles.display} value={displayValue} readOnly/>
  )
}

export default Inputtt;