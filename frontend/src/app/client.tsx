'use client';
import { useEffect, useState } from 'react';
import SocketIo from 'socket.io-client';

const socket = SocketIo('http://localhost:8000');

function Client() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState('');

  useEffect(() => {
    socket.on('ping', (msg: string) => {
      console.log(msg);
      setChat(msg);
    });

    return () => {
      socket.off('ping');
    };
  }, [chat]);

  const sendMessage = () => {
    socket.emit('ping', message);
    setMessage('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>{chat}</div>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Client;
