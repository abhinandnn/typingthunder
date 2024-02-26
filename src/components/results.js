import React from 'react'
import Score from './score'
import Retry from '../../public/retry.svg'
import Image from 'next/image'
function Results(props) {
  return (
    <div className='mb-[5rem] flex flex-col items-center justify-center gap-[4rem]'>
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
    </div>
  )
}

export default Results