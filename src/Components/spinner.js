import React from 'react'
import "./Spinner.css"

const spinner = () => {
  return ( 
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'></div>
        <div className='text-white text-[2rem] font-semibold'>Loading...</div>
    </div>
  )
 }

export default spinner;