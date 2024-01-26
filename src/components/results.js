import React from 'react'
import Score from './score'
function Results() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-[5rem]'>
<div className='flex gap-[4rem]'>
<Score score={48} name={'WPM'} />
<Score score={48} name={'WPM'} />
<Score score={48} name={'WPM'} />
<Score score={48} name={'WPM'} />
</div>
<div className='flex flex-col gap-6'>
    <div className='font-Poppins text-[#666] text-[1.875rem] leading-[100%]'>Characters</div>
<div className='flex gap-[4rem]'>
<Score score={48} name={'WPM'} />
<Score score={48} name={'WPM'} />
<Score score={48} name={'WPM'} />
<Score score={48} name={'WPM'} />
</div>
</div>
        </div>
    </div>
  )
}

export default Results