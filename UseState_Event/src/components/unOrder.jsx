import ListItems from "./ListItems";
import {useState} from "react"

const UnOrder = ({items}) => {

  let [textBuy,setTextBuy] = useState("Buy");

  let [activeItems,setActiveItems] = useState([])

  let onBuyButton = (item,event) => {
    let newItems = [item]
    setTextBuy(newText)
  } 

  return (
    <ul classNameName="list-group">
      
      
      {items.map((item) =>
        <ListItems
        Buy = {textBuy}
        key={item}
         mobile = {item}
         bought = {activeItems.includes(item)}
         handleBuyButton = {() => onBuyButton(item,event)}
         >
         </ListItems>
      )}

    </ul>
  )
}

export default UnOrder;