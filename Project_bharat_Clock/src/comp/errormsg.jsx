const Error = ({items}) =>{
  return (
    <>
    {items.length === 0 && <h2>No Phone is available</h2>}
    </>
  )
}

export default Error;