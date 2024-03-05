"use client"
import React from 'react'
import { logout } from '@/components/AuthService';
import { useState } from 'react';
import Image from 'next/image';
import smlogo from '../../../public/smlogo.svg'
import axios from '@/api/axios';
import toast from 'react-hot-toast';
import loading1 from '../../../public/loading.svg'
import ProtectedRoute from '@/components/ProtectedRoutes';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { useRouter } from 'next/navigation';
import useTypingGame, { CharStateType } from "react-typing-game-hook";
import { useEffect } from 'react';
import Results from '@/components/results';
import { useSelector } from 'react-redux';
import cookie from 'js-cookie'
import SpeedTest from '@/components/speedTest';
import Footer from '@/components/footer';
import Sphere from '@/components/Sphere';
function Home() {
  const router =useRouter();
  const accessToken=cookie.get("accesstoken");
  const [phase,setPhase]=useState(0); 
  const [type,setType]=useState(0);

 const logout1 = () =>{
  logout();
  router.push('/login')
 }

  return (
    <Provider store={store}>
      <div className='relative bg-dkr font-Poppins min-h-[100vh] min-w-[100vw] flex flex-col px-[10vw] py-8'>
    <div className='relative'>
        <div className={`flex flex-row ${!(phase===1||phase===2)?'justify-center':'justify-start'} items-center gap-[6rem] md:gap-[3.6rem]  xl:gap-[8rem]`}><div className='flex cursor-pointer flex-row gap-2 justify-center items-center mob:text-[1.375rem] text-[1rem] text-[#e6e6e6]'><svg className='hidden mob:flex' width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5869 6.12437H29.156C29.508 6.12437 29.8272 5.93937 30.0077 5.63725L32.4717 1.51288C32.87 0.846325 32.3897 0 31.6133 0H3.10206C2.70651 0 2.34813 0.23315 2.18784 0.594763L0.35966 4.71913C0.0665792 5.38032 0.550228 6.12437 1.27346 6.12437H11.309L6.18637 16.5652C5.86037 17.2296 6.34403 18.0056 7.08413 18.0056H9.68913C10.3854 18.0056 10.8686 18.6995 10.627 19.3526L7.62394 27.4705C7.2338 28.5251 8.61216 29.3214 9.33089 28.4566L21.7676 13.4923C22.2866 12.8679 21.8844 11.918 21.0749 11.8561L18.1564 11.6327C17.4301 11.5771 17.005 10.7885 17.3578 10.1513L19.5869 6.12437Z" fill="#E6E6E6"/>
</svg>
<Image className='mob:hidden' src={smlogo}/>
<>TypingThunder</>
</div>
{phase==0&&<div className='flex gap-10 text-[1rem] text-[#666666]'>
  <div onClick={()=>setType(0)} className={`hover:text-white cursor-pointer ${type==0?'text-white':''}`}>
Speed Test
  </div>
  <div onClick={()=>setType(1)} className={`hover:text-white cursor-pointer ${type==1?'text-white':''}`}>
Play 1v1
  </div>
  <div onClick={()=>setType(2)} className={`hover:text-white cursor-pointer ${type==2?'text-white':''}`}>
Practice
</div>
<div onClick={()=>setType(3)} className={`hover:text-white cursor-pointer ${type==3?'text-white':''}`}>
  Sphere
</div> 
 <div onClick={()=>setType(4)} className={`hover:text-white cursor-pointer ${type==4?'text-white':''}`}>
Rating
</div>
</div>}
{phase==0&&<div className='text-4'>
  {accessToken?
  <button onClick={logout1} className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-white'>logout</button>
  /* <button className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-transparent text-white'>Log in</button> */
  : <div className='flex gap-6 '> <button onClick={()=>router.push('/signup')} className='w-[6.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-white'>Sign up</button>
  <button onClick={()=>router.push('/login')} className='w-[3.8rem] h-[2.5rem] flex items-center justify-center font-semibold rounded-[1.5rem] bg-transparent text-white'>Log in</button>
  </div>
}
</div>}
</div>
<div className={`flex flex-col ${type==0&&'justify-center'} min-h-[40rem] items-center`}>
{type==0&&<SpeedTest setPhase={setPhase}/>}
{type==3&&<Sphere setType={setType}/>}
</div>
<Footer/>
</div>
</div>
</Provider>
  )
}

export default Home