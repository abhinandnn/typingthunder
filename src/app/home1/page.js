// 'use client'
// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';
// import cookie from 'js-cookie';

// const Room = () => {
//   const [socket, setSocket] = useState(null);
//   const [roomCode, setRoomCode] = useState('');
//   const [createdRoomCode, setCreatedRoomCode] = useState('');
//   const accessToken = cookie.get('accesstoken');

//   useEffect(() => {
//     // Connect to Socket.IO server
//     const newSocket = io('https://oauth-typing.onrender.com'); // Replace with your server URL
//     setSocket(newSocket);

//     // Listen for 'room-created' event from server
//     newSocket.on('room-created', (roomCode) => {
//       setCreatedRoomCode(roomCode);
//     });
//     newSocket.on('custom-error',(data) =>{
//         console.error(data);

//     // Clean up on unmount
//     return () => newSocket.close();
//   }, []);

// const handlesockets=()=>{
  
// }
//   const handleCreateRoom = () => {
//     try {
//       socket.emit('create-room', accessToken);
//     } catch (error) {
//       console.error('Error creating room:', error);
//     }
//   };

//   const handleJoinRoom = () => {
//     if (socket && roomCode && accessToken) {
//       try{
//       socket.emit('join-room', roomCode, accessToken);
//       }
//       catch(error){
//         console.error('Error joining room:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter room code"
//         value={roomCode}
//         onChange={(e) => setRoomCode(e.target.value)}
//       />
//       <button onClick={handleJoinRoom}>Join Room</button>

//       <button onClick={handleCreateRoom}>Create Room</button>

//       {createdRoomCode && <p>Room created with code: {createdRoomCode}</p>}
//     </div>
//   );
// };

// export default Room;
