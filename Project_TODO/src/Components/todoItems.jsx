import Row_2 from "./Row_2"

const TodoItems = ({todoItem}) => {
  return (
    <div classNameName="item">
      
      {todoItem.map((item) => (
        <Row_2 todoName={item.names} todoDate={item.dates}/>
      ))}
 
    </div>
  )
}

export default TodoItems;