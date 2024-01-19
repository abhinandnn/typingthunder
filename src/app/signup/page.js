'use client'
import React from 'react'
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Fa from '../../../public/fa.svg'
import Fahid from '../../../public/fahid.svg'
import Bigbutton from '@/components/bigbutton';
import Googlebutton from '@/components/googlebutton';
import Image from 'next/image';
import axios from '@/api/axios';
import { useRouter } from 'next/navigation';
import loading1 from '../../../public/loading.svg'
import Link from 'next/link';
import smlogo from '../../../public/smlogo.svg'
import cookie from 'js-cookie'
import toast from 'react-hot-toast';
function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword]=useState(true);
  const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [errorUsername, setErrorUsername]= useState(false);
  const [errorEmail, setErrorEmail]= useState(false);
  const [errorPassword, setErrorPassword]= useState(false);
  const [loading,setLoading]=useState(false)


  const passwordShow = () => {
    setShowPassword(!showPassword);}
  const handlePasswordChange = (event) => {
    const value=event.target.value;
    setPassword(value);
    const passwordRegex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const isPassword=passwordRegex.test(value);
    if(!isPassword&&value)
    setErrorPassword('Choose a strong password');
  else
  setErrorPassword(false);
    setIsValidPassword(isPassword);
  }
  const handleUsernameChange = (event) => {
    const value=event.target.value;
    setUsername(value);
    const usernameRegex = /^[a-zA-Z0-9_.]+$/;
    const isUsername = usernameRegex.test(value);
    if(!isUsername&&value)
    setErrorUsername('Invalid Username');
  else
  setErrorUsername(false);
    setIsValidUsername(isUsername);
  }
  const handleEmailChange = (event) => {
    const value=event.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmail = emailRegex.test(value);
    if(!isEmail&&value)
    setErrorEmail('Invalid Email');
    else
    setErrorEmail(false);
    setIsValidEmail(isEmail);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    cookie.set("email", email);
    if(!(errorPassword||errorEmail||errorUsername)){
      setLoading(true)
        try{
        const response = await axios.post('api/auth/sign-up',{username:username,email:email,password:password},
          {headers:{'Content-Type':'application/json; charset=utf-8'},
            withCredentials: false});
            setLoading(false);
            toast.success("OTP sent successfully");
            router.push('/signup/otp');
            console.log("otp sent success");
    }catch(err){
      setLoading(false)
        console.log(err.response);
    if(err.response){
    console.log('Server responded');
    console.log(err.response);
    if(err.response.data.message==='User with this email already exists')
    {
      setErrorEmail('User with this email already exists')
      toast.error('User with this email already exists')

    }
    else if(err.response.data.message==='This username already exists'||err.response.status===500)
    {
      setErrorUsername('This username already exists')
      toast.error('User with this username already exists')
    }

      }}}}
      const handleGoogle = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.get('api/google/google/login',
              {withCredentials: false});
                console.log(response);
        }catch(err){
            console.log(err.response);
        if(err.response){
        console.log('Server responded');
        console.log(err.response);
    
          }}}
  return (
    <div className='bg-[#1a1a1a] font-Poppins min-h-[100vh] min-w-[100vw] px-[10vw] md:px-[7.4rem] py-[2rem]'>
        <div className='flex flex-row items-center justify-between'><div className='flex flex-row gap-2 justify-center items-center text-[1rem] mob:text-[1.375rem] text-[#e6e6e6]'><svg className='hidden mob:inline' width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z" fill="#E6E6E6"/>
</svg>
<Image className='mob:hidden' src={smlogo}/>
<>TypingThunder</>
</div>
<div className='text-[#B3B3B3] hidden sm:inline text-[1.125rem]'>Already a user? <Link href={'/login'}><span className='text-[#e6e6e6] underline'>Log in</span></Link></div>
<div className='text-[0.9rem] mob:text-[1.15rem] sm:hidden cursor-pointer text-white'>Test</div>

</div>
    <div className='flex flex-row justify-center gap-[12.5rem]'>
    <div className='pt-[11.7rem] hidden xl:flex w-[30rem] flex-col gap-[1.5rem]'>
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
        <div className='flex flex-col gap-8 w-[80vw] sm:w-auto text-[1.125rem] pt-[4.8rem] text-white'>
          <div className='flex flex-col gap-5 text-dgr'>
            <span className='text-[2.5rem] text-lgr leading-[1.125rem]'>Sign Up</span>
            Sign up to test your typing speed with your companions.
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div>
                <div className='flex flex-col sm:flex-row sm:gap-4'>
        <div className='relative  mb-[2.6rem]'>
    <input type="text" required id="user"
    value={email}
    onChange={handleEmailChange}
    name="user" className={`w-[80vw] sm:w-[15.25rem] h-[4.5rem] peer rounded-[1.25rem] ${(!errorEmail)?'bg-transparent border-dgr':'bg-[#190F0F] border-[#FF7E7E]'} border  px-[1rem] focus:pt-[0.75rem] ${!email? 'pt-0':'pt-[0.75rem]'} outline-none box-border`}/> 
    <label className={`absolute pointer-events-none peer-focus:top-2 peer-focus:text-[0.875rem] ${(errorEmail)?'text-err':'peer-focus:text-dgr'} ${!email? 'top-[31.2%]': 'top-2 text-dgr text-[0.875rem]'} left-[1rem]`} for="user">Enter email</label>
    {errorEmail&&<span className='text-[0.875rem] text-err absolute left-0 bottom-[-35%]'>{errorEmail}</span>}

  </div>
  <div className='relative  mb-[2.6rem]'>
    <input type="text" required id="user"
    value={username}
    onChange={handleUsernameChange}
    name="user" className={`w-[80vw] sm:w-[15.25rem] h-[4.5rem] peer rounded-[1.25rem] ${(!errorUsername)?'bg-transparent border-dgr':'bg-[#190F0F] border-[#FF7E7E]'} border  px-[1rem] focus:pt-[0.75rem] ${!username? 'pt-0':'pt-[0.75rem]'} outline-none box-border`}/> 
    <label className={`absolute pointer-events-none peer-focus:top-2 peer-focus:text-[0.875rem] ${(errorUsername)?'text-err':'peer-focus:text-dgr'} ${!username? 'top-[31.2%]': 'top-2 text-dgr text-[0.875rem]'} left-[1rem]`} for="user">Username</label>
    {errorUsername&&<span className='text-[0.875rem] text-err absolute left-0 bottom-[-35%]'>{errorUsername}</span>}

  </div>
  </div>
  <div className='relative mb-[1.35rem]'>
    <input type={showPassword?'text':'password'} required id="pwd"
    value={password}
    onChange={handlePasswordChange}
    name="pwd" className={`w-[80vw] sm:w-[31.5rem] h-[4.5rem] peer rounded-[1.25rem] ${(!errorPassword)?'bg-transparent border-dgr':'bg-[#190F0F] border-[#FF7E7E]'} border px-[1rem] focus:pt-[0.75rem] pr-[3rem] ${!password? 'pt-0':'pt-[0.75rem]'} outline-none box-border`}/>
    <div className='absolute right-4 top-6 cursor-pointer' onClick={passwordShow}>
        <Image src={showPassword?Fa:Fahid} />
      </div> 
    <label className={`absolute pointer-events-none peer-focus:top-2 peer-focus:text-[0.875rem] ${(errorPassword)?'text-err':'peer-focus:text-dgr'} ${!password? 'top-[31.2%]': 'top-2 text-dgr text-[0.875rem]'} left-[1rem]`} for="pwd">Enter password</label>
    {errorPassword&&<span className='text-[0.875rem] text-err absolute left-0 bottom-[-35%]'>{errorPassword}</span>}

  </div>
  </div>
  <button className=' bg-white active:bg-blue text-black text-[1.375rem] w-[80vw] sm:w-[31.7rem] h-[4rem] flex flex-row justify-center items-center px-6 pt-3 pb-[0.625rem] rounded-[1.25rem]'>
  {loading?<Image src={loading1} className='animate-spin'/>:"Continue"
}
    </button>
    <button type='button' onClick={handleGoogle} className='bg-transparent flex flex-row justify-center items-center gap-4 border border-dgr text-[1.125rem] w-[80vw] sm:w-[31.7rem] h-[4rem] px-[1rem] py-[1rem] rounded-[1.25rem]'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_607_111)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.52 12.2728C23.52 11.4218 23.4436 10.6037 23.3018 9.81821H12V14.46H18.4582C18.18 15.96 17.3345 17.2309 16.0636 18.0818V21.0928H19.9418C22.2109 19.0037 23.52 15.9273 23.52 12.2728Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C15.24 24 17.9564 22.9255 19.9418 21.0927L16.0636 18.0818C14.9891 18.8018 13.6145 19.2273 12 19.2273C8.87455 19.2273 6.22909 17.1164 5.28546 14.28H1.27637V17.3891C3.25091 21.3109 7.30909 24 12 24Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.28545 14.28C5.04545 13.56 4.90909 12.7909 4.90909 12C4.90909 11.2091 5.04545 10.44 5.28545 9.72002V6.61093H1.27636C0.463636 8.23093 0 10.0637 0 12C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.28545 14.28Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.77273C13.7618 4.77273 15.3436 5.37818 16.5873 6.56727L20.0291 3.12545C17.9509 1.18909 15.2345 0 12 0C7.30909 0 3.25091 2.68909 1.27637 6.61091L5.28546 9.72C6.22909 6.88364 8.87455 4.77273 12 4.77273Z" fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_607_111">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>Continue with google
    </button>
  </form>
 </div>
    </div>
<div className='mt-4 text-[#B3B3B3] sm:hidden text-[1.125rem] flex justify-center text-center'>Already have an account?<span className='text-[#e6e6e6] underline'> <Link href={'/login'}> Log in</Link></span></div>
    </div>
  )
}

export default Signup