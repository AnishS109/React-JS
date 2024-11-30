import styles from "./Container.module.css"

const Inputt = ({ handleKyeDown }) => {

  const clickBuy = (event) => {
    onclick
  }

   return (
    <>

    <input classNameName={styles.inputt} type="text" placeholder="Search Mobile Phones Here"
    onKeyDown={handleKyeDown}/>

    <button classNameName={styles.buttonn} > Search</button>
    </>
   )
}

export default Inputt;