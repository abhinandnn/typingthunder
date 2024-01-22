"use client"
import React from 'react'
import { logout } from '@/components/AuthService';
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
import ProtectedRoute from '@/components/ProtectedRoutes';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { useRouter } from 'next/navigation';
function Login() {
  const router =useRouter();
  const [inputValue, setInputValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError]=useState(false);
  const [errorPassword, setErrorPassword]= useState(false);
 const [loading, setLoading]=useState(false);
 const [isCheck,setCheck]=useState(true);

 const logout1 = () =>{
  logout();
  router.push('/login')
 }

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
    <Provider store={store}>
    <ProtectedRoute>
    <div className='bg-dkr font-Poppins min-h-[100vh] min-w-[100vw] px-[10vw] md:px-[7.4rem] py-[2rem]'>
        <div className='flex flex-row justify-start items-center gap-[7rem]'><div className='flex flex-row gap-2 justify-center items-center mob:text-[1.375rem] text-[1rem] text-[#e6e6e6]'><svg className='hidden mob:flex' width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <button onClick={logout1} className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-white'>logout</button>
  {/* <button className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-transparent text-white'>Log in</button> */}
  
</div>
</div>
<div className='text-[2rem] text-white font-ocra mt-[10rem]'>
Most of them are based on basic text fields that were modified to better handle specific types of information, like the credit card numbers. Here are just a few examples of input types that are most commonly used throughout UIs we creating.
</div>
<div className='flex gap-5 items-center mt-10 justify-center'>
  <div className='flex justify-center items-center gap-5 w-[6.5rem] text-[1.25rem] text-[#4d4d4d] box-border px-[1.25rem] h-[3.5rem] rounded-[1875rem] bg-black border-2 border-[#333]'>
<span className='hover:text-white'>@</span>
<span className='hover:text-white'>#</span>
  </div>

  <div className='flex justify-center items-center gap-[3.9rem] w-[14.5rem] text-[1.25rem] text-[#4d4d4d] box-border px-[1.12rem] h-[3.5rem] rounded-[1875rem] bg-black border-2 border-[#333]'>
<div className='group'><svg className='stroke-[#4d4d4d] hover:stroke-white' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className='group'><svg className='stroke-[#4d4d4d] hover:stroke-white' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12V15.4C14 15.9601 14 16.2399 14.109 16.4538C14.2049 16.642 14.3577 16.7952 14.5459 16.8911C14.7596 17 15.0395 17 15.5985 17H17.4015C17.9605 17 18.24 17 18.4537 16.8911C18.6419 16.7952 18.7952 16.6419 18.8911 16.4537C19 16.24 19 15.9605 19 15.4015V13.5985C19 13.0395 19 12.7596 18.8911 12.5459C18.7952 12.3577 18.642 12.2049 18.4538 12.109C18.2399 12 17.9601 12 17.4 12H14ZM14 12V10C14 8.34315 15.3431 7 17 7M5 12V15.4C5 15.9601 5 16.2399 5.10899 16.4538C5.20487 16.642 5.35774 16.7952 5.5459 16.8911C5.7596 17 6.0395 17 6.59845 17H8.40154C8.9605 17 9.23999 17 9.4537 16.8911C9.64186 16.7952 9.79524 16.6419 9.89111 16.4537C10 16.24 10 15.9605 10 15.4015V13.5985C10 13.0395 10 12.7596 9.89111 12.5459C9.79524 12.3577 9.64196 12.2049 9.45379 12.109C9.23988 12 8.96005 12 8.4 12H5ZM5 12V10C5 8.34315 6.34315 7 8 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<span className='hover:text-white'>T</span>
  </div>

  <div className='flex justify-center items-center gap-[2.6rem] w-[16.75rem] text-[1.25rem] text-[#4d4d4d] box-border px-[1.25rem] h-[3.5rem] rounded-[1875rem] bg-black border-2 border-[#333]'>
<span className='hover:text-white'>15</span>
<span className='hover:text-white'>30</span>
<span className='hover:text-white'>60</span>
<span className='hover:text-white'>120</span>
  </div>

</div>
<div className='flex absolute bottom-10 gap-4 m-8'>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4.5L7.58073 7.9592L7.58225 7.96047C8.09089 8.33346 8.34535 8.52007 8.62407 8.59216C8.87042 8.65588 9.12938 8.65588 9.37573 8.59216C9.6547 8.52001 9.9099 8.33285 10.4194 7.9592C10.4194 7.9592 13.3576 5.70445 15 4.5M2.25 11.8501V6.15015C2.25 5.31007 2.25 4.88972 2.41349 4.56885C2.5573 4.2866 2.7866 4.0573 3.06885 3.91349C3.38972 3.75 3.81007 3.75 4.65015 3.75H13.3501C14.1902 3.75 14.6097 3.75 14.9305 3.91349C15.2128 4.0573 15.4429 4.2866 15.5867 4.56885C15.75 4.8894 15.75 5.30925 15.75 6.14768V11.8527C15.75 12.6911 15.75 13.1104 15.5867 13.4309C15.4429 13.7132 15.2128 13.9429 14.9305 14.0867C14.61 14.25 14.1908 14.25 13.3523 14.25H4.64768C3.80925 14.25 3.3894 14.25 3.06885 14.0867C2.7866 13.9429 2.5573 13.7132 2.41349 13.4309C2.25 13.11 2.25 12.6902 2.25 11.8501Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>Contact</span>
  </div>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7927 5.38537C15.7997 5.54377 15.7997 5.69497 15.7997 5.85337C15.8066 10.6558 12.2783 16.1998 5.82582 16.1998C3.92274 16.1998 2.05438 15.631 0.449951 14.5654C0.727774 14.6014 1.0056 14.6158 1.28342 14.6158C2.86006 14.6158 4.39504 14.0686 5.63829 13.0534C4.13805 13.0246 2.81839 12.0094 2.35998 10.5262C2.88785 10.6342 3.4296 10.6126 3.94357 10.4614C2.31136 10.1302 1.13756 8.63978 1.13062 6.90458C1.13062 6.89018 1.13062 6.87578 1.13062 6.86138C1.61681 7.14218 2.16551 7.30058 2.72115 7.31498C1.18618 6.24937 0.706937 4.12537 1.63764 2.46216C3.42266 4.73737 6.04808 6.11257 8.86798 6.26377C8.58322 5.00377 8.97217 3.67896 9.88204 2.78616C11.292 1.41096 13.5146 1.48296 14.8481 2.94456C15.633 2.78616 16.39 2.48376 17.0777 2.05896C16.8137 2.90136 16.265 3.61416 15.5357 4.06777C16.2303 3.98137 16.911 3.78697 17.5499 3.49896C17.0777 4.23337 16.4803 4.86697 15.7927 5.38537Z" fill="#666666"/>
</svg>
<span>Twitter</span>
  </div>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1813 3.88919C14.0444 3.36756 12.8253 2.98324 11.5507 2.76313C11.5275 2.75888 11.5043 2.7695 11.4923 2.79073C11.3355 3.06959 11.1619 3.43338 11.0402 3.71932C9.66928 3.51407 8.30536 3.51407 6.96251 3.71932C6.84087 3.42703 6.66089 3.06959 6.5034 2.79073C6.49145 2.77021 6.46826 2.75959 6.44504 2.76313C5.17111 2.98254 3.95201 3.36686 2.81446 3.88919C2.80461 3.89344 2.79617 3.90052 2.79057 3.90972C0.4782 7.36435 -0.155255 10.7341 0.155497 14.062C0.156903 14.0783 0.166043 14.0939 0.178698 14.1038C1.70433 15.2242 3.18217 15.9043 4.63257 16.3552C4.65578 16.3623 4.68037 16.3538 4.69515 16.3346C5.03824 15.8661 5.34407 15.3721 5.6063 14.8526C5.62177 14.8221 5.607 14.786 5.57537 14.774C5.09026 14.59 4.62835 14.3656 4.18401 14.1108C4.14887 14.0903 4.14605 14.04 4.17839 14.016C4.27189 13.9459 4.36542 13.873 4.4547 13.7994C4.47086 13.786 4.49336 13.7831 4.51236 13.7916C7.43144 15.1244 10.5917 15.1244 13.4763 13.7916C13.4953 13.7824 13.5178 13.7853 13.5347 13.7987C13.624 13.8723 13.7175 13.9459 13.8117 14.016C13.844 14.04 13.8419 14.0903 13.8068 14.1108C13.3624 14.3706 12.9005 14.59 12.4147 14.7733C12.3831 14.7853 12.369 14.8221 12.3845 14.8526C12.6523 15.3714 12.9582 15.8654 13.2949 16.3339C13.309 16.3538 13.3343 16.3623 13.3575 16.3552C14.8149 15.9043 16.2928 15.2242 17.8184 14.1038C17.8318 14.0939 17.8402 14.079 17.8416 14.0627C18.2135 10.2152 17.2187 6.87316 15.2044 3.91042C15.1995 3.90052 15.1911 3.89344 15.1813 3.88919ZM6.04221 12.0356C5.16337 12.0356 4.43923 11.2288 4.43923 10.2379C4.43923 9.24702 5.14933 8.44017 6.04221 8.44017C6.94211 8.44017 7.65924 9.2541 7.64517 10.2379C7.64517 11.2288 6.93508 12.0356 6.04221 12.0356ZM11.969 12.0356C11.0902 12.0356 10.366 11.2288 10.366 10.2379C10.366 9.24702 11.0761 8.44017 11.969 8.44017C12.8689 8.44017 13.586 9.2541 13.572 10.2379C13.572 11.2288 12.8689 12.0356 11.969 12.0356Z" fill="#666666"/>
</svg>
<span>Discord</span>
  </div>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99691 0.450195C6.87364 0.451297 4.81999 1.20332 3.20318 2.57179C1.58638 3.94025 0.511835 5.83594 0.171699 7.91986C-0.168438 10.0038 0.248007 12.1401 1.34658 13.9467C2.44515 15.7533 4.1542 17.1125 6.16814 17.7813C6.61245 17.8637 6.7798 17.5884 6.7798 17.3542C6.7798 17.1201 6.77092 16.4412 6.76795 15.699C4.27983 16.2365 3.75407 14.649 3.75407 14.649C3.34827 13.6182 2.76178 13.3473 2.76178 13.3473C1.95018 12.7965 2.82251 12.8068 2.82251 12.8068C3.72149 12.8701 4.19394 13.7242 4.19394 13.7242C4.99073 15.0835 6.28662 14.6903 6.79609 14.4605C6.87607 13.8848 7.10859 13.493 7.36481 13.2707C5.37727 13.0468 3.28902 12.284 3.28902 8.87643C3.27671 7.99269 3.60652 7.13805 4.21023 6.48934C4.1184 6.26551 3.81183 5.36133 4.2976 4.13318C4.2976 4.13318 5.04849 3.89462 6.7576 5.04472C8.22356 4.64611 9.77026 4.64611 11.2362 5.04472C12.9438 3.89462 13.6932 4.13318 13.6932 4.13318C14.1805 5.35838 13.8739 6.26256 13.7821 6.48934C14.3877 7.13816 14.7182 7.99428 14.7048 8.87938C14.7048 12.2943 12.6121 13.0468 10.6216 13.2663C10.9415 13.5431 11.2273 14.0836 11.2273 14.9141C11.2273 16.104 11.217 17.0612 11.217 17.3542C11.217 17.5913 11.3784 17.8681 11.8316 17.7813C13.8458 17.1125 15.555 15.753 16.6535 13.9461C17.7521 12.1391 18.1683 10.0025 17.8278 7.91841C17.4873 5.83429 16.4122 3.93859 14.7948 2.57036C13.1775 1.20212 11.1234 0.450599 8.99986 0.450195H8.99691Z" fill="#666666"/>
<path d="M3.43991 13.2191C3.42066 13.2633 3.34957 13.2765 3.29181 13.2456C3.23405 13.2147 3.19111 13.1573 3.21184 13.1116C3.23257 13.066 3.30218 13.0542 3.35994 13.0851C3.4177 13.116 3.46213 13.1749 3.43991 13.2191Z" fill="#666666"/>
<path d="M3.8027 13.6209C3.77203 13.6363 3.73694 13.6406 3.70344 13.6331C3.66994 13.6256 3.64011 13.6067 3.61906 13.5797C3.5613 13.5179 3.54944 13.4325 3.59388 13.3942C3.63831 13.3559 3.71829 13.3736 3.77605 13.4354C3.83381 13.4973 3.84714 13.5827 3.8027 13.6209Z" fill="#666666"/>
<path d="M4.15518 14.1321C4.10038 14.1704 4.00707 14.1321 3.95524 14.0556C3.9409 14.0418 3.9295 14.0254 3.92172 14.0071C3.91393 13.9889 3.90991 13.9693 3.90991 13.9495C3.90991 13.9297 3.91393 13.9102 3.92172 13.8919C3.9295 13.8737 3.9409 13.8573 3.95524 13.8435C4.01003 13.8067 4.10334 13.8435 4.15518 13.9186C4.20702 13.9937 4.2085 14.0939 4.15518 14.1321Z" fill="#666666"/>
<path d="M4.63366 14.6269C4.58478 14.6814 4.48556 14.6666 4.4041 14.593C4.32264 14.5194 4.30338 14.4192 4.35226 14.3662C4.40113 14.3132 4.50036 14.3279 4.58478 14.4001C4.6692 14.4723 4.68549 14.5739 4.63366 14.6269Z" fill="#666666"/>
<path d="M5.3045 14.9154C5.28228 14.9846 5.18157 15.0156 5.08086 14.9861C4.98015 14.9567 4.9135 14.8742 4.93276 14.8035C4.95201 14.7328 5.0542 14.7004 5.15639 14.7328C5.25858 14.7652 5.32375 14.8433 5.3045 14.9154Z" fill="#666666"/>
<path d="M6.03617 14.9656C6.03617 15.0377 5.95324 15.0996 5.8466 15.101C5.73997 15.1025 5.65259 15.0436 5.65259 14.9714C5.65259 14.8993 5.73552 14.8374 5.84215 14.836C5.94879 14.8345 6.03617 14.8919 6.03617 14.9656Z" fill="#666666"/>
<path d="M6.71733 14.8521C6.73066 14.9243 6.65661 14.9994 6.54997 15.0171C6.44334 15.0348 6.35004 14.992 6.33671 14.9214C6.32338 14.8507 6.40039 14.7741 6.50406 14.755C6.60774 14.7358 6.704 14.78 6.71733 14.8521Z" fill="#666666"/>
</svg>
<span>Github</span>
  </div>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.69434 15.4735C11.274 14.7585 15 12.55 15 7.62379V4.64768C15 3.80925 15 3.3894 14.8367 3.06885C14.6929 2.7866 14.4628 2.5573 14.1805 2.41349C13.8597 2.25 13.4402 2.25 12.6001 2.25H5.40015C4.56007 2.25 4.13972 2.25 3.81885 2.41349C3.5366 2.5573 3.3073 2.7866 3.16349 3.06885C3 3.38972 3 3.81007 3 4.65015V7.62378C3 12.55 6.72585 14.7586 8.30546 15.4735C8.47292 15.5493 8.55707 15.5872 8.7466 15.6197C8.86616 15.6402 9.1346 15.6402 9.25415 15.6197C9.44303 15.5873 9.5263 15.5496 9.69261 15.4743L9.69434 15.4735Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>Security</span>
  </div>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.92285 6.75H5.40015C4.56007 6.75 4.13972 6.75 3.81885 6.91349C3.5366 7.0573 3.3073 7.2866 3.16349 7.56885C3 7.88972 3 8.31007 3 9.15015V13.3501C3 14.1902 3 14.61 3.16349 14.9309C3.3073 15.2132 3.5366 15.4429 3.81885 15.5867C4.1394 15.75 4.55927 15.75 5.3977 15.75H12.6023C13.4408 15.75 13.86 15.75 14.1805 15.5867C14.4628 15.4429 14.6929 15.2132 14.8367 14.9309C15 14.6104 15 14.1911 15 13.3527V9.14768C15 8.30924 15 7.8894 14.8367 7.56885C14.6929 7.2866 14.4628 7.0573 14.1805 6.91349C13.8597 6.75 13.4402 6.75 12.6001 6.75H11.0767M6.92285 6.75H11.0767M6.92285 6.75C6.82726 6.75 6.75 6.67251 6.75 6.57692V4.5C6.75 3.25736 7.75736 2.25 9 2.25C10.2426 2.25 11.25 3.25736 11.25 4.5V6.57692C11.25 6.67251 11.1723 6.75 11.0767 6.75" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>Privacy</span>
  </div>
  <div className='text-[#666666] flex items-center gap-2'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9569 13.2961C17.6594 15.694 15.6943 17.6592 13.2964 17.9567C11.845 18.1369 10.4928 17.7403 9.43809 16.965C8.83411 16.5233 8.97834 15.5858 9.69951 15.3694C12.4129 14.5491 14.5494 12.4036 15.3787 9.69022C15.5951 8.97807 16.5326 8.83383 16.9743 9.4288C17.7406 10.4925 18.1372 11.8447 17.9569 13.2961Z" fill="#666666"/>
<path d="M7.2027 0.000488281C3.22724 0.000488281 0 3.22773 0 7.20319C0 11.1786 3.22724 14.4059 7.2027 14.4059C11.1782 14.4059 14.4054 11.1786 14.4054 7.20319C14.3964 3.22773 11.1782 0.000488281 7.2027 0.000488281ZM6.35532 6.19355L8.52785 6.95078C9.31212 7.23023 9.69074 7.78012 9.69074 8.6275C9.69074 9.60108 8.91548 10.4034 7.96894 10.4034H7.88781V10.4485C7.88781 10.8181 7.58131 11.1246 7.21171 11.1246C6.84211 11.1246 6.53561 10.8181 6.53561 10.4485V10.3944C5.53499 10.3493 4.73269 9.51093 4.73269 8.46524C4.73269 8.09564 5.03918 7.78914 5.40878 7.78914C5.77838 7.78914 6.08488 8.09564 6.08488 8.46524C6.08488 8.78976 6.31926 9.05119 6.60773 9.05119H7.95993C8.16726 9.05119 8.32953 8.86188 8.32953 8.6275C8.32953 8.31199 8.27544 8.29396 8.0681 8.22184L5.89558 7.46461C5.12032 7.19417 4.73269 6.64428 4.73269 5.78789C4.73269 4.81431 5.50795 4.012 6.45448 4.012H6.53561V3.97594C6.53561 3.60634 6.84211 3.29985 7.21171 3.29985C7.58131 3.29985 7.88781 3.60634 7.88781 3.97594V4.03003C8.88844 4.07511 9.69074 4.91347 9.69074 5.95917C9.69074 6.32877 9.38424 6.63526 9.01464 6.63526C8.64504 6.63526 8.33854 6.32877 8.33854 5.95917C8.33854 5.63464 8.10416 5.37321 7.81569 5.37321H6.4635C6.25616 5.37321 6.0939 5.56252 6.0939 5.7969C6.08488 6.1034 6.13897 6.12143 6.35532 6.19355Z" fill="#666666"/>
</svg>
<span>Support</span>
  </div>
</div>
</div>
</ProtectedRoute>
</Provider>
  )
}

export default Login