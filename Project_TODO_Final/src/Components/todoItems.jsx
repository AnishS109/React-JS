import Row_2 from "./Row_2"

const TodoItems = ({todoItem , onDeleteClick}) => {

  return (
    <div classNameName="item">
      
      {todoItem.map((item) => (
        <Row_2 
        todoName={item.names} 
        todoDate={item.dates}
        onDeleteClick = {onDeleteClick}>
        

        </Row_2>
        
      ))}
 
    </div>
  )
}

export default TodoItems;