import styles from "./Container.module.css"

const ListItems = ({mobile,bought,handleBuyButton,Buy}) => {
  return (
    <>

    <li classNameName={`list-group-item ${bought && "active"} ${styles.list}`}>

    {mobile}

    <button classNameName={styles.btn}
    onClick={handleBuyButton}>{Buy}</button>

    </li>
      
    </>
  )
}

export default ListItems;