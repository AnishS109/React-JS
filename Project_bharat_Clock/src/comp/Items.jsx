import styles from "./container.module.css"

const Item = ({foodi,bought, clickEvent}) =>{

  // const clickEvent = (foodi) =>{
  //    return (
  //     console.log(`${foodi} being bought`)
  //     )
  // }
  
  return (
    <>
    
    <li classNameName={`list-group-item ${bought && "active"}`}>{foodi}

    <button classNameName={styles.btns}
    onClick={clickEvent}>

      Buy

    </button>

    </li>

    </>
  )
}

export default Item;