import React from 'react'
import { useState } from 'react';

export default function Counter({total, onClick}) {
  const [num, setNum] = useState(0)

  return (
    <div className='counter'>
        <span className ='number'>
        {num} <span className='total'>/{total}</span>
        </span>
        <button className ='button'
            onClick={
            () => {
                setNum(prev => prev+1)
                onClick()}
            }>Add +</button>
    </div>
  )
}
