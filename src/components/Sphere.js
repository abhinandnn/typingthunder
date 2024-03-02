'use client'
import React from 'react'
import roomCreate from '../../public/room.svg'
import roomJoin from '../../public/roomJoin.svg'
import Image from 'next/image'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import arrowL from '../../public/arrowL.svg'
import cookie from 'js-cookie'
import toast from 'react-hot-toast';
import io from 'socket.io-client';
import { useEffect } from 'react';
import sendArrow from '../../public/sendArrow.svg'
import {refreshToken} from '@/components/AuthService';
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
function Sphere({setType}) {
  const [game, setGame] = useState(0);
  const [socket, setSocket] = useState(null);
  const [roomCode, setRoomCode] = useState('');
  const [createdRoomCode, setCreatedRoomCode] = useState('');
  const accessToken = cookie.get('accesstoken');
  const [users, setUsers] = useState([]);

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const[showPopup,setShowPopup]=useState(false)
  const openPopup = () => {
    setShowPopup(true);
  };
  useEffect (()=>{

    const checkAuth = async () => {
      if (!accessToken) {
        setType(0);}
      else {
        try {
          const response = await axios.post('api/auth/check-token',{},{headers:{'auth-token': `${accessToken}`},withCredentials: false});
          console.log(response);
         cookie.set("auth", true);
      } catch (error) {
          await refreshToken();
        }
      }
    };
    checkAuth();
    const newSocket = io('https://oauth-typing.onrender.com',{auth: {token: accessToken}});
    console.log(accessToken)
    setSocket(newSocket);
    newSocket.on('room-created', (roomCode) => {
      setCreatedRoomCode(roomCode);
      setRoomCode(roomCode);
      setGame(1);
      toast.success('Room created successfully with code: '+roomCode);
    });

    newSocket.on('sent-message', (username, message) => {
      setMessages(prevMessages => [...prevMessages, { username, message }]);
    });

    newSocket.on('user-connected', (username) => {
      setUsers(prevUsers => [...prevUsers, username]);
      toast.success(username+' has joined the room');
    });
    newSocket.on('custom-error',(data) =>{
      console.error(data);
      if(data!='User is already in the room')
     { setGame(0);
      setCreatedRoomCode('');}
      console.log('users',users);
      toast.error(data);
  return () => newSocket.close();
   })
  },[])
  const closePopup = () => {
    setShowPopup(false);
  };
 const handleJoinRoom = (e) => {
    e.preventDefault();
    console.log('Joining room');
    if (socket && roomCode && accessToken) {
      try{
      socket.emit('join-room', roomCode);
      setGame(1);
      setShowPopup(false);
      setCreatedRoomCode(roomCode);
      }
      catch(error){
        console.error('Error joining room:', error);
      }
    }
  }
  const handleCreateRoom = (e) => {
    e.preventDefault();
    console.log('Creating room');
    try {
      socket.emit('create-room');
    } catch (error) {
      console.error('Error creating room:', error);
    }
  }
  const sendMessage = () => {
    socket.emit('chat-message', roomCode, messageInput);
    setMessageInput('');
  };
  return (
    <>
    {game==0&&<div className='flex flex-col gap-[4rem]'>
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
  }
  {game==1&&<div>
  {createdRoomCode && <p>Room code: {createdRoomCode}</p>}
  <div className='h-[30rem] w-[24rem] bg-[#333] border-[0.5px] border-[#fff] border-opacity-30 rounded-[0.75rem] bg-opacity-30'>
    <div className='pl-[0.75rem] text-[1.375rem] py-[1rem] border-b-[0.5px] border-[#B3B3B3] font-bold text-white'>Sphere Chat</div>
      <div className='px-[0.75rem] py-[0.75rem] h-[22rem] border-b-[0.5px] border-[#B3B3B3] flex flex-col gap-[1rem]'>
        {messages.map((msg, index) => (
          <div className='flex flex-col' key={index}>
            <span className='text-[0.75rem] leading-none text-[#b3b3b3]'>{msg.username}</span>
            <span className='text-[0.875rem] max-w-fit break-words text-wrap text-white'>{msg.message}</span>
          </div>
        ))}
      </div>
      <div className='flex justify-center h-[3.8rem] rounded-b-[0.75rem] gap-2 items-center'>
      <input
        type="text"
        className='bg-transparent text-white w-[20rem] h-[2.5rem] outline-none border-none rounded-[0.75rem] px-[0.5rem]'
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>
  <Image src={sendArrow} alt='send' />
      </button>
      </div>
    </div>
  </div>}
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
      <input type='text' onChange={(e) => setRoomCode(e.target.value)} className=' text-white w-[20.5rem] bg-transparent outline-none text-[5.5rem] font-bold leading-none'/>
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