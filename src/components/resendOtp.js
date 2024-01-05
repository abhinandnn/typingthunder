import React, { useState ,useEffect } from 'react'
import axios from '@/api/axios';
import { ToastContainer ,toast} from 'react-toastify';
function ResendOtp({email}) {
const [seconds, setSeconds] = useState(59);
useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const handleResendOtp=async()=>{
  setSeconds(59);
  try{
    const response = await axios.post('api/auth/resend-otp',{email:email},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log(response.data.message)
        toast.info("New OTP sent!")
}catch(err){
  toast.error("No Server response")
  console.log('No Server response');
}
  }
  return (
    <div className='belowButton'>
       <div className='text-[1rem] flex items-center justify-start w-26.5 text-center h-4.5'>
        <button type='button'
        className={`bg-transparent border-none outline-none ${seconds>0?'text-white':'text-lgr font-bold'}`}
        disabled={seconds > 0}
        onClick={handleResendOtp}
      >
        Resend OTP
      </button>
   
    {seconds > 0 ? (
      <p>
         &nbsp; in {seconds} seconds
      </p>
    ) : (
      <p></p>
      
    )}</div>
    
      </div>
  )}


export default ResendOtp