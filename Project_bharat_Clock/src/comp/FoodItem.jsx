import { useState } from "react";
import Container from "./Container";
import Item from "./Items";

const FoodItem = ({items}) => {

  let [activeItems,SetActiveItems] = useState([]);

  let onBuyButton = (item,event) => {
    let newItems = {...activeItems,item}
    SetActiveItems(newItems)
  } 

  return (

    <ul className="list-group">
      {items.map((item =>(
        <Item 
        key = {item} 
        foodi = {item}  
        bought={activeItems.includes(item)}
        handleButton = {(event) => onBuyButton(item, event)}
        >

        </Item>)))}

    </ul>
  )
}

export default FoodItem;