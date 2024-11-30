import styles from "./Inputtext.module.css"

const Inputtext = ({handleTextChange}) =>{

  return (
    <>
    <input
    type="text" 
    placeholder="Enter here" 
    classNameName={styles.inputt}
    onKeyDown={handleTextChange}
    />

    <button classNameName={styles.btn}>Submit</button>

    </>
  )
}

export default  Inputtext;