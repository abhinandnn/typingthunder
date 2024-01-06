"use client"
import React from 'react'
import { useState } from 'react';
import Bigbutton from '@/components/bigbutton';
import Googlebutton from '@/components/googlebutton';
import Image from 'next/image';
import Link from 'next/link';
import axios from '@/api/axios';
import toast from 'react-hot-toast';
import resetil from '../../../public/reset.svg'
import cookie from 'js-cookie'
import {useRouter} from 'next/navigation';

function Reset() {
  const router=useRouter();
  const [inputValue, setInputValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [error,setError]=useState(false);



  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const isEmail = emailRegex.test(value);
    setIsValidEmail(isEmail);
    if(value=='')
      setIsValidEmail(true);
    if(!(isEmail||value.length===0))
    setError("Doesn't look like an email. Try again");
  else
  setError('');
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    cookie.set("emailf", inputValue);
if(!error)
{
  try{
    const response = await axios.post('api/auth/forget-password',{email:inputValue},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log("otp sent successfully");
        toast.success('OTP sent Successfully');
        router.push('/reset/otp');
        console.log(response)
}catch(err){
    console.log(err.response);
if(err.response){
console.log('Server responded');
console.log(err.response);
toast.error(err.response.data.message);
if(err.response.data.message=="No user exists with this email")
setError('User not found')
  }}
}
  };
  return (
    <div className='bg-[#1a1a1a] font-Poppins h-[100vh] px-[7.4rem] py-[3rem]'>
        <div className='flex flex-row justify-between'><div className='flex flex-row gap-2 justify-center items-center text-[1.375rem] text-[#e6e6e6]'><svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z" fill="#E6E6E6"/>
</svg>
<>TypingThunder</>
</div>
<div className='text-[#B3B3B3] text-[1.125rem]'>Don't have an account? <span className='text-[#e6e6e6] underline'><Link href={'/signup'}>Sign up</Link></span></div>
</div>
<div className='flex flex-row gap-[12.5rem]'>
    <div className='pt-[10rem] w-[30rem] flex flex-col gap-[1.5rem]'>
        <Image src={resetil}/>
        </div>
        <div className='flex flex-col gap-8 text-[1.125rem] pt-[4.8rem] text-white'>
          <div className='flex flex-col gap-5 text-dgr'>
            <span className='text-[2.5rem] text-lgr leading-[1.125rem]'>Reset Password</span>
            Enter your email address to reset your password
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div>
        <div className='relative  mb-[0.6rem]'>
    <input type="text" required id="user"
    value={inputValue}
    onChange={handleInputChange}
    name="user" className={`w-[31.5rem] h-[4.5rem] peer rounded-[1.25rem] ${(!error)?'bg-transparent border-dgr':'bg-[#190F0F] border-[#FF7E7E]'} border  px-[1rem] focus:pt-[0.75rem] ${!inputValue? 'pt-0':'pt-[0.75rem]'} outline-none box-border`}/> 
    <label className={`absolute pointer-events-none peer-focus:top-2 peer-focus:text-[0.875rem] ${error?'text-err':'peer-focus:text-dgr'}  ${!inputValue? 'top-[31.2%]': `top-2  text-dgr text-[0.875rem]`} left-[1rem]`} for="user">Enter registered email</label>
    {error&&inputValue.length>0&&<span className='text-[0.875rem] text-err absolute left-0 bottom-[-35%]'>{error}</span>}
  </div>
  </div>
<Bigbutton />
  </form>
 </div>
    </div> 
    </div>
  )
}

export default Reset