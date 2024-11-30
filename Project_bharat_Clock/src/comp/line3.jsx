import { useEffect, useState } from "react";

function Line3(){

  const [timeing,setTime] = useState(new Date());

  useEffect(()=> {
    const intervalId = setInterval(()=> {
       setTime(new Date())
    },1000)

    return()=>{
      clearInterval();
    }
  },[])

  return (
    <p classNameName="fw-medium">
      This is the currect time: {timeing.toLocaleDateString()} - {timeing.toLocaleTimeString()}
    </p>
  )
}

export default Line3;