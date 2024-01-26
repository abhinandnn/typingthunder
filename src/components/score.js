import React from 'react'

function Score(props) {
  return (
    <div className='text-[3.75rem] flex gap-[0.5rem] font-Poppins text-white items-baseline leading-[100%]'>
        <span>{props.score}</span>
        <span className='text-[#666] text-[1.875rem] leading-[100%]'>{props.name}</span>
    </div>
  )
}

export default Score