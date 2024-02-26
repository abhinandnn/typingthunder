"use client"
import React from 'react'
import { logout } from '@/components/AuthService';
import { useState } from 'react';
import Image from 'next/image';
import smlogo from '../../public/smlogo.svg'
import axios from '@/api/axios';
import toast from 'react-hot-toast';
import loading1 from '../../public/loading.svg'
import ProtectedRoute from '@/components/ProtectedRoutes';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { useRouter } from 'next/navigation';
import useTypingGame, { CharStateType } from "react-typing-game-hook";
import { useEffect } from 'react';
import Results from '@/components/results';
import { useSelector } from 'react-redux';
import cookie from 'js-cookie'
function SpeedTest({setPhase}) {
  const router =useRouter();
const [maxt,setMaxt]=useState(15);
const [WPM,setWPM]=useState(0);
const [accu,setAccu]=useState(0);
const [raw,setRaw]=useState(0);
const [t,setT]=useState(0);
const [num,setNum] =useState(false);
const [punc,setPunc] =useState(false);
const [mode, setMode]=useState(0);
const [backspace,setBackspace]=useState(false);
 const [apiResponse, setApiResponse] = useState('');
 const fetchData = async () => {
  try {
    const response = await axios.get(`api/user/${punc?'get-random-text-with-punctuations':'get-random-text'}`);
    const text=response.data.text;
    setApiResponse(text.slice(0,50).join(' ').replace(/\s*([.,!?;:])/g, '$1'))
    console.log(text.slice(0,50).join(' '));
   } catch (error) {
    console.error('Error fetching data:', error);
  }
};

 useEffect(() => {
   fetchData();
 }, [punc]);
 let newt=0;
    const {
      states: { chars, charsState, phase, correctChar,errorChar,currIndex },
      actions: { insertTyping, resetTyping, deleteTyping, getDuration, endTyping,}
    } = useTypingGame(apiResponse, { skipCurrentWordOnSpace: false, countErrors: 'once' });
    useEffect(() => {
        setPhase(phase);
    }, [phase])
    useEffect(() => {
      const handleKeyDown = (e) => {
        e.preventDefault();
        const key = e.key;
        if (key === 'R' && e.shiftKey) {
        fetchData();
         resetTyping();
         return;
        }
        if (key === 'Backspace') {
        setBackspace(true);
          deleteTyping(false);
          return;
        }
        if (key.length === 1) {
          setBackspace(false);
          insertTyping(key);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
                                                                                                                                             
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [insertTyping, resetTyping, deleteTyping, endTyping]);
      useEffect(()=>{
    const duration =()=>{
      console.log(newt)
      newt=getDuration();
      setT(newt);
      if(newt!=0&&(newt<maxt*1000))
      setTimeout(duration,100);
      else if(newt-maxt*1000>0){
      endTyping();
      clearTimeout(duration);
          }}
          setTimeout(duration,100);
    },[phase])
    useEffect(() => {
      if (phase === 2) {
        const wpm=Math.round(((60 / maxt) * correctChar) / 5);
        const acu=((((correctChar-errorChar)) / (currIndex + 1)) * 100).toFixed(2)
        setAccu(acu);
        if(acu<0)
        setAccu(0);
        const raw=Math.round(((60 / maxt) * (correctChar+errorChar)) / 5);
        setRaw(raw);
        setWPM(wpm);
      }
    }, [phase, correctChar,errorChar]);
  return (
<>
  <div>
  {!(phase==2)?<div className='flex flex-col items-center pb-[6.8rem] justify-center'>
  <div >
    
<div className='text-[2rem] w-max-[100%] text-white font-ocra'
    >
      {chars.split("").map((char, index) => {
        let state = charsState[index];
        let color =
          state === CharStateType.Incomplete
            ? "#666"
            : state === CharStateType.Correct
            ? "#FFF"
            : "#FF7E7E";
        return (
          <span className='relative transition-all ease-in' key={char + index} style={{ color }}>
            {char}
            <span className={currIndex==index?`transition-transform ${backspace?'translate-x-[-1rem] right-[-2rem]':'translate-x-[1rem] right-[0rem]'} animate-pulse absolute text-[3rem] top-[-1.2rem] z-10 visible`:' invisible absolute'}>|</span>
          </span>
        );
      })}
</div>
</div>
{phase==0?
<div className='flex gap-5 items-center w-max-[100%] mt-10 justify-center'>
  <div className='flex justify-center items-center gap-5 w-[6.5rem] text-[1.25rem] text-[#4d4d4d] box-border px-[1.25rem] h-[3.5rem] rounded-[1875rem] bg-black border-2 border-[#333]'>
  <div onClick={()=>setPunc(!punc)} className={punc===true?'bg-[#1a1a1a] rounded-full min-w-[2rem] h-[2rem] flex justify-center items-center text-white':''}><span className='hover:text-white cursor-pointer'>@</span></div>
  <div onClick={()=>setNum(!num)} className={num===true?'bg-[#1a1a1a] rounded-full min-w-[2rem] h-[2rem] flex justify-center items-center text-white':''}><span className='hover:text-white cursor-pointer'>#</span></div>
  </div>

  <div className='flex justify-center items-center gap-[3.9rem] w-[14.5rem] text-[1.25rem] text-[#4d4d4d] box-border px-[1.12rem] h-[3.5rem] rounded-[1875rem] bg-black border-2 border-[#333]'>
  <div onClick={()=>setMode(0)} className={mode==0?'bg-[#1a1a1a] rounded-full min-w-[2rem] h-[2rem] flex justify-center items-center text-white group cursor-pointer':''}><svg className={`${mode==0?'stroke-white':'stroke-[#4d4d4d]'} hover:stroke-white`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className='group'><svg className='cursor-pointer stroke-[#4d4d4d] hover:stroke-white' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12V15.4C14 15.9601 14 16.2399 14.109 16.4538C14.2049 16.642 14.3577 16.7952 14.5459 16.8911C14.7596 17 15.0395 17 15.5985 17H17.4015C17.9605 17 18.24 17 18.4537 16.8911C18.6419 16.7952 18.7952 16.6419 18.8911 16.4537C19 16.24 19 15.9605 19 15.4015V13.5985C19 13.0395 19 12.7596 18.8911 12.5459C18.7952 12.3577 18.642 12.2049 18.4538 12.109C18.2399 12 17.9601 12 17.4 12H14ZM14 12V10C14 8.34315 15.3431 7 17 7M5 12V15.4C5 15.9601 5 16.2399 5.10899 16.4538C5.20487 16.642 5.35774 16.7952 5.5459 16.8911C5.7596 17 6.0395 17 6.59845 17H8.40154C8.9605 17 9.23999 17 9.4537 16.8911C9.64186 16.7952 9.79524 16.6419 9.89111 16.4537C10 16.24 10 15.9605 10 15.4015V13.5985C10 13.0395 10 12.7596 9.89111 12.5459C9.79524 12.3577 9.64196 12.2049 9.45379 12.109C9.23988 12 8.96005 12 8.4 12H5ZM5 12V10C5 8.34315 6.34315 7 8 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<span className='cursor-pointer hover:text-white'>T</span>
  </div>

  <div className='flex justify-center items-center gap-[2.3rem] w-[16.75rem] text-[1.25rem] text-[#4d4d4d] box-border px-[1.25rem] h-[3.5rem] rounded-[1875rem] bg-black border-2 border-[#333]'>
<div onClick={()=>setMaxt(15)} className={maxt===15?'bg-[#1a1a1a] rounded-full min-w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white':''}><span className='hover:text-white cursor-pointer'>15</span></div>
<div onClick={()=>setMaxt(30)} className={maxt===30?'bg-[#1a1a1a] rounded-full min-w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white':''}><span className='hover:text-white cursor-pointer'>30</span></div>
<div onClick={()=>setMaxt(60)} className={maxt===60?'bg-[#1a1a1a] rounded-full min-w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white':''}><span className='hover:text-white cursor-pointer'>60</span></div>
<div onClick={()=>setMaxt(120)} className={maxt===120?'bg-[#1a1a1a] rounded-full min-w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white':''}><span className='hover:text-white cursor-pointer'>120</span></div>

  </div>
</div>:<div className='mt-[4rem] text-white text-[1.25rem] flex justify-center items-center text-center'>
  Time Left:{(maxt-t/1000).toFixed(0)}
  </div>}
</div>:
<Results total={currIndex+1} miss={currIndex+1-correctChar-errorChar} secs={maxt} raw={raw} accu={accu} wpm={WPM} wrong={errorChar} correct={correctChar} reset={()=>{
  fetchData();
  resetTyping();
}}/>}

</div>
  </>
  )
}

export default SpeedTest;