"use client"
import React from 'react'
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Fa from '../../../public/fa.svg'
import Fahid from '../../../public/fahid.svg'
import Bigbutton from '@/components/bigbutton';
import Googlebutton from '@/components/googlebutton';
import Image from 'next/image';
import Link from 'next/link';
import checkbox from '../../../public/checkbox.svg'
import { useRouter } from 'next/router';

function Login() {
  const [inputValue, setInputValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);

  const passwordShow = () => {
    setShowPassword(!showPassword);}

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmail = emailRegex.test(value);
    setIsValidEmail(isEmail);
    const usernameRegex = /^[a-zA-Z0-9_.]+$/;
    const isUsername = usernameRegex.test(value);
    setIsValidUsername(isUsername);
    if(value=='')
    {
      setIsValidEmail(true);
      setIsValidUsername(true);
    }
  };
  const handlePasswordChange = (event) => {
    const value=event.target.value;
    setPassword(value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
if(isValidEmail)
{
  try{
    const response = await axios.post('api/auth/sign-in/email',{email:inputValue,password:password},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log("signup success");
}catch(err){
    console.log(err.response);
if(err.response){
console.log('Server responded');
console.log(err.response);

  }}
}
else if(isValidUsername)
{
  
  try{
    const response = await axios.post('api/auth/sign-in/username',{username:inputValue,password:password},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        console.log("signup success");
}catch(err){
    console.log(err.response);
if(err.response){
console.log('Server responded');
console.log(err.response);

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
    <div className='pt-[11.7rem] w-[30rem] flex flex-col gap-[1.5rem]'>
        <div className='text-dgr text-[2.25rem] leading-[140%] font-medium'>
        Compete with your friends in 
        <span className='text-lgr'> <Typewriter
            words={['arena','sphere']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={130}
            deleteSpeed={100}
            delaySpeed={1000}
          /></span>
        </div>
        <div className='text-[1.25rem] text-dgr font-light'>Assess and improve your typing speed with our interactive typing tests. Receive instant feedback and track your progress over time.</div>
        <button className='bg-white text-[1rem] w-[11.5rem] h-[3.375rem] px-4 py-2 rounded-2xl'>Test speed</button>
        </div>
        <div className='flex flex-col gap-8 text-[1.125rem] pt-[4.8rem] text-white'>
          <div className='flex flex-col gap-5 text-dgr'>
            <span className='text-[2.5rem] text-lgr leading-[1.125rem]'>Login</span>
            Log in to test your typing speed with your companions.
          </div>
          <form className='flex flex-col gap-8'>
            <div>
        <div className='relative  mb-[2.6rem]'>
    <input type="text" required id="user"
    value={inputValue}
    onChange={handleInputChange}
    name="user" className={`w-[31.5rem] h-[4.5rem] peer rounded-[1.25rem] ${(isValidUsername||isValidEmail)?'bg-transparent border-dgr':'bg-[#190F0F] border-[#FF7E7E]'} border  px-[1rem] focus:pt-[0.75rem] ${!inputValue? 'pt-0':'pt-[0.75rem]'} outline-none box-border`}/> 
    <label className={`absolute pointer-events-none peer-focus:top-2 peer-focus:text-[0.875rem] ${(isValidUsername||isValidEmail)?'peer-focus:text-dgr':'peer-focus:text-[#FF7E7E] text-[#FF7E7E]'} ${!inputValue? 'top-[31.2%]': 'top-2 text-dgr text-[0.875rem]'} left-[1rem]`} for="user">Enter username or registered email</label>
  </div>
  <div className='relative mb-[2.35rem]'>
    <input type={showPassword?'text':'password'} required id="pwd"
    value={password}
    onChange={handlePasswordChange}
    name="pwd" className={`w-[31.5rem] h-[4.5rem] peer rounded-[1.25rem] bg-transparent border border-dgr px-[1rem] focus:pt-[0.75rem] pr-[3rem] ${!password? 'pt-0':'pt-[0.75rem]'} outline-none box-border`}/>
    <div className='absolute right-4 top-6 cursor-pointer' onClick={passwordShow}>
        <Image src={showPassword?Fa:Fahid} />
      </div> 
    <label className={`absolute pointer-events-none peer-focus:top-2 peer-focus:text-[0.875rem] peer-focus:text-dgr ${!password? 'top-[31.2%]': 'top-2 text-dgr text-[0.875rem]'} left-[1rem]`} for="pwd">Enter password</label>
  </div>
<div className='text-right mb-[1rem] cursor-pointer'>Reset password</div>
<div className='text-[1rem] gap-2 flex flex-row items-center '>
  <Image src={checkbox}/>
Remember me</div>
  </div>
<Bigbutton />
<Googlebutton />
  </form>
 </div>
    </div> 
    </div>
  )
}

export default Login