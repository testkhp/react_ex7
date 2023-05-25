import React, { useEffect, useState } from 'react'

function CountUp(props) {
    
    let [count,countSet] = useState(0)

    useEffect(()=>{
  
      let countup = setInterval(()=>{
          countSet(count += props.up)
          if(count > props.des){
            countSet(props.des)
          }
      },10)

      return()=>{
          clearInterval(countup);
      }
     
    })

  return (
    <div className='countup'>{count}</div>
  )
}

export default CountUp