'use client'
import React from 'react'
import roomCreate from '../../public/room.svg'
import roomJoin from '../../public/roomJoin.svg'
import Image from 'next/image'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import arrowL from '../../public/arrowL.svg'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline:'none'
};
function Sphere() {
  const[showPopup,setShowPopup]=useState(false)
  const openPopup = () => {
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };
 const handleJoinRoom = (e) => {
    e.preventDefault();
    console.log('Joining room');

  }
  const handleCreateRoom = (e) => {
    e.preventDefault();
    console.log('Creating room');
  }
  return (
    <>
    <div className='flex flex-col gap-[4rem]'>
        <div className='flex gap-4 mt-[4rem]'>
            <div onClick={handleCreateRoom} className='bg-[#333333] cursor-pointer gap-4 flex justify-center items-center w-[35.5rem] h-[17.2rem] rounded-[0.75rem]'>
<Image src={roomCreate} alt='room' />
<span className='text-white text-[2.5rem]'>Create Room</span>
            </div>
            <div className='bg-[#333333] cursor-pointer gap-2 flex justify-center items-center w-[35.5rem] h-[17.2rem] rounded-[0.75rem]'>
<Image src={roomJoin} alt='room' />
<span onClick={()=>openPopup()} className='text-white text-[2.5rem]'>Join Room</span>
            </div>
        </div>
    <div className='text-[#666] text-[1.75rem]'>
    Introducing 'Sphere' Mode: Unleash the fun of friendly competition by creating a room to test your typing skills with friends! Simply generate a unique code, share it with your pals, and let the typing challenge begin.
    </div>
    </div>
    <Modal
    open={showPopup}
    onClose={closePopup}
  >
<div style={style}>
  <div className='flex flex-col border border-[#4d4d4d] bg-[#1a1a1a] rounded-xl p-[1.5rem] w-[26rem] h-[15rem]'>
    <div className='flex gap-2 items-center'>
      <Image src={arrowL} alt='arrow' className='cursor-pointer' onClick={closePopup} />
      <span className='text-white text-[1.25rem]'>Enter Sphere Code Below</span>
      </div>
      <div>
      <form className='px-[1.25rem] flex flex-col items-center' onSubmit={handleJoinRoom}>
      <input type='text' className=' text-white w-[20.5rem] bg-transparent outline-none text-[5.5rem] font-bold leading-none'/>
      <button className='bg-white text-black text-[1.25rem] mt-3 py-[0.35rem] w-[20rem] rounded-lg'>Join</button>
      </form>
      </div>
    </div>
</div>
  </Modal>
    </>
  )
}

export default Sphere