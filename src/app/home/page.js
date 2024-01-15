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
import checkbox1 from '../../../public/checkbox1.svg'
import smlogo from '../../../public/smlogo.svg'
import axios from '@/api/axios';
import toast from 'react-hot-toast';
import loading1 from '../../../public/loading.svg'
function Login() {
  const [inputValue, setInputValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError]=useState(false);
  const [errorPassword, setErrorPassword]= useState(false);
 const [loading, setLoading]=useState(false);
 const [isCheck,setCheck]=useState(true);

  const passwordShow = () => {
    setShowPassword(!showPassword);}

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
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
    if(!(isEmail||isUsername||value.length===0))
    setError("Doesn't look like an email or username. Try again");
  else
  setError('');
  };
  const handlePasswordChange = (event) => {
    const value=event.target.value;
    setPassword(value);
    setErrorPassword('');
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    
if(isValidEmail&&!error&&!errorPassword)
{
    setLoading(true);
    setErrorPassword('');
  try{
    const response = await axios.post('api/auth/sign-in/email',{email:inputValue,password:password},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        setLoading(false);
        console.log("signup success");
        toast.success('Login Successful');
        console.log(response)
}catch(err){
  setLoading(false);
    console.log(err.response);
if(err.response){
console.log('Server responded');
console.log(err.response);
toast.error(err.response.data.message);
if(err.response.data.message=="No user exists with this email")
setError('User not found')
else
setErrorPassword('Wrong Password');
  }}
}
else if(isValidUsername&&!error&&!errorPassword)
{
    setErrorPassword('');
    setLoading(true);
  try{
    const response = await axios.post('api/auth/sign-in/username',{username:inputValue,password:password},
      {headers:{'Content-Type':'application/json; charset=utf-8'},
        withCredentials: false});
        setLoading(false);
        console.log("signup success");
        toast.success('Login Successful');
}catch(err){
  setLoading(false)
    console.log(err.response);
if(err.response){
console.log('Server responded');
console.log(err.response);
toast.error(err.response.data.message);
if(err.response.data.message=="No user exists with this username")
{setError('User not found');
}
else
setErrorPassword('Wrong Password')
  }}
}}
const handleGoogle = async (event) => {
  event.preventDefault();
  try{
      const response = await axios.get('api/google/google/login',
        {withCredentials: false});
          console.log(response);
  }catch(err){
  if(err.response){
  console.log('Server responded');
  console.log(err.response);

    }}}
  
  return (
    <div className='bg-dkr font-Poppins min-h-[100vh] min-w-[100vw] px-[10vw] md:px-[7.4rem] py-[2rem]'>
        <div className='flex flex-row justify-center items-center gap-[7rem]'><div className='flex flex-row gap-2 justify-center items-center mob:text-[1.375rem] text-[1rem] text-[#e6e6e6]'><svg className='hidden mob:flex' width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z" fill="#E6E6E6"/>
</svg>
<Image className='mob:hidden' src={smlogo}/>
<>TypingThunder</>
</div>
<div className='flex gap-10 text-[1rem] text-[#666666]'>


  <div className='hover:text-white cursor-pointer'>
Speed Test
  </div>
  <div className='hover:text-white cursor-pointer'>
Play 1v1
  </div>
  <div className='hover:text-white cursor-pointer'>
  
Practice
</div>
<div className='hover:text-white cursor-pointer'>

  Sphere
</div>
<div className='hover:text-white cursor-pointer'>

Rating
</div>



</div>
<div className='flex gap-2 text-4'>
  <button className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-white'>Sign up</button>
  <button className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-transparent text-white'>Log in</button>
  
</div>
</div>
<div className='text-[3rem] text-white font-ocra'>it isnt working
</div>
    </div>
  )
}

export default Login