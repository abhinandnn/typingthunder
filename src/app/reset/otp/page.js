"use client"
import React from 'react'
import { useState } from 'react';
import Otpil from '../../../../public/otp.svg'
import Image from 'next/image';
import axios from '@/api/axios';
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ResendOtp from '@/components/resendOtp';
import toast from 'react-hot-toast';
import cookie from 'js-cookie';
import loading1 from '../../../../public/loading.svg'

function Otp() {
  const router=useRouter();
  const [otp, setOtp] = useState('');
  const [error,setError]= useState('');
  const [loading,setLoading]=useState(false)

  const em = cookie.get("emailf");
  const handleOtp = (value) => {
    setOtp(value);
    setError('');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(otp.length==6&&!error){
      setLoading(true);
    try{
      const response = await axios.post('api/auth/verify-otp',{email:em,otp:otp},
        {headers:{'Content-Type':'application/json; charset=utf-8'},
          withCredentials: false});
          console.log(response.data.message);
          setLoading(false);
          toast.success("OTP verified!")
          cookie.set("tokenf",response.data.data.token);
          router.push('/reset/pwd');      
  
  }catch(err){
    setLoading(false);
  if(err.response){
  console.log('Server responded');
  toast.error("OTP is invalid");
  setError("Invalid OTP");
  console.log(err.response.data.message);
  }
  else
    console.log('No Server response');
  }}}
  return (
    <div className='bg-[#1a1a1a] font-Poppins h-[100vh] px-[7.4rem] py-[2rem]'>
        <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 justify-center items-center text-[1.375rem] text-[#e6e6e6]'><svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z" fill="#E6E6E6"/>
</svg>
<>TypingThunder</>
</div>
<div className='text-[#B3B3B3] text-[1.125rem]'>Already a user? <Link href={'/login'}><span className='text-[#e6e6e6] underline'>Log in</span></Link></div>
</div>
    <div className='flex flex-row gap-[12.5rem]'>
    <div className='pt-[10rem] w-[30rem] flex flex-col gap-[1.5rem]'>
        <Image src={Otpil}/>
        </div>
        <div className='flex flex-col gap-3 text-[1.125rem] pt-[4.8rem] text-white'>
          <div className='flex flex-col mb-5 text-dgr'>
            <span className='text-[2.5rem] text-lgr mb-5 leading-[1.125rem]'>Enter OTP</span>
            Please enter the 6-digit code sent to you at
            <span className='text-lgr'>{em}</span> 
          </div>
          <div className='flex flex-col relative pb-7'>
          <OTPInput
      value={otp}
      onChange={handleOtp}
      numInputs={6}
      renderInput={(props) => <input {...props}/>}
      inputType='tel'
      inputStyle={`mr-4 h-[3.125rem] min-w-[3.125rem] text-[1.375rem] bg-transparent text-white rounded-[0.8125rem] border ${(otp.length==6&&!error)||otp.length==0?'border-dgr':'border-[#FF7E7E]'} outline-none` } 
    />
    {error&&otp.length>0&&<span className='text-[1rem] text-err absolute l-0 bottom-[-12%]'>{error}</span>}
    </div>
    <ResendOtp email={em}/>
    <button onClick={handleSubmit} className=' bg-white active:bg-blue text-black text-[1.375rem] w-[31.7rem] h-[4rem] flex flex-row justify-center items-center px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]'>
  {loading?<Image src={loading1} className='animate-spin'/>:"Verify"
}
    </button>
 </div>
    </div> 
    </div>
  )
}

export default Otp