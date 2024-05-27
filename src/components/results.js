import React, { use, useEffect } from 'react'
import Score from './score'
import Retry from '../../public/retry.svg'
import Image from 'next/image'
function Results(props) {
  // useEffect(() => {
  //   props.reset();
  // }, []
  // )
  return (
    <div className='mb-[5rem] mt-[5rem] flex flex-col items-center justify-center gap-[4rem]'>
        <div className='flex flex-col justify-center items-start gap-[5rem]'>
<div className='flex gap-[4rem]'>
<Score score={props.wpm} name={'WPM'} />
<Score score={props.accu} name={'Accuracy'} />
<Score score={props.secs} name={'Seconds'} />
<Score score={props.raw} name={'Raw'} />
</div>
<div className='flex flex-col gap-6'>
    <div className='font-Poppins text-[#666] text-[1.875rem] leading-[100%]'>Characters</div>
<div className='flex gap-[4rem]'>
<Score score={props.total} name={'Total'} />
<Score score={props.correct} name={'Correct'} />
<Score score={props.wrong} name={'Incorrect'} />
<Score score={props.miss} name={'Missed'} />
</div>
</div>
        </div>
        <div>
          <Image onClick={props.reset} className='cursor-pointer' src={Retry}/>
        </div>
        {props.wpm>=30&&props.wpm<=70&&props.accu==100&&<div className='mb-[4rem]'>
    <button className='bg-white text-black text-[1.375rem] w-[80vw] sm:w-[31.7rem] h-[4rem] px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]'>
      Password
</button>
        </div>}
    </div>
  )
}

export default Results